"""Independent source checks; no browser, hosting access or email submissions."""
import collections
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
ORIGIN = 'https://www.assistlaneglobal.com/'
def public_path(file):
    return '/' if file == 'index.html' else '/' + file.removesuffix('.html')

WORDS = re.compile(r"[^\W_]+(?:[’'@.+-][^\W_]+)*", re.UNICODE)
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())
NON_COPY = set('head script style noscript template svg canvas'.split())
BLOCK = set('article aside blockquote div dl fieldset figure footer form h1 h2 h3 h4 h5 h6 header hr main nav ol p pre section table ul'.split())


class Node:
    def __init__(self, tag='', attrs=(), parent=None):
        self.tag, self.attrs, self.parent, self.children = tag, dict(attrs), parent, []

    def nodes(self):
        yield self
        for child in self.children:
            if isinstance(child, Node):
                yield from child.nodes()

    def text(self, editorial=False):
        if self.tag in NON_COPY or self.attrs.get('aria-hidden') == 'true':
            return ''
        if editorial and (self.tag in {'header', 'footer', 'nav', 'form'} or self.attrs.get('id') == 'footer-cta'):
            return ''
        return ' '.join(child.text(editorial) if isinstance(child, Node) else child for child in self.children)


class Document(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.current = self.root
        self.feed(source)
        assert self.current is self.root, f'Unclosed {self.current.tag}'

    def handle_starttag(self, tag, attrs):
        ancestor = self.current
        while ancestor.parent is not None:
            assert not (tag in BLOCK and ancestor.tag == 'p'), f'{tag} nested in p'
            assert not (tag == 'a' and ancestor.tag == 'a'), 'Nested links'
            assert not (tag == 'form' and ancestor.tag == 'form'), 'Nested forms'
            ancestor = ancestor.parent
        node = Node(tag, attrs, self.current)
        self.current.children.append(node)
        if tag not in VOID:
            self.current = node

    def handle_startendtag(self, tag, attrs):
        self.current.children.append(Node(tag, attrs, self.current))

    def handle_endtag(self, tag):
        assert tag == self.current.tag, f'Mismatched {tag}, expected {self.current.tag}'
        self.current = self.current.parent

    def handle_data(self, value):
        self.current.children.append(value)


def main():
    legacy_source = (ROOT / 'legacy-anchors.mjs').read_text(encoding='utf-8')
    legacy = json.loads(legacy_source[legacy_source.index('{'):legacy_source.rindex('}') + 1])
    counts = {row['file']: row for row in json.loads((DIST / 'word-counts.json').read_text(encoding='utf-8'))['pages']}
    density = {row['file']: row for row in json.loads((DIST / 'keyword-density.json').read_text(encoding='utf-8'))['pages']}
    key = re.search(r"web3formsAccessKey\s*=\s*'([^']+)'", (ROOT / 'form-config.mjs').read_text(encoding='utf-8'))[1]
    docs = {file.name: Document(file.read_text(encoding='utf-8')) for file in sorted(DIST.glob('*.html'))}
    assert set(docs) == set(legacy) == set(counts) == set(density), 'Page paths changed'
    assert len(docs) == 32
    industry_pages = {file for file in docs if file.startswith('industry-')}
    company_pages = {'index.html', 'how-it-works.html', 'about.html', 'trust.html', 'contact.html', 'privacy-policy.html', '404.html'}
    service_pages = set(docs) - industry_pages - company_pages - {'industries.html', 'services.html'}
    assert len(industry_pages) == 11 and len(service_pages) == 12
    form_count = link_count = target_count = 0
    external_links = set()
    ids_by_file = {}
    for file, document in docs.items():
        nodes = list(document.root.nodes())
        id_list = [n.attrs['id'] for n in nodes if 'id' in n.attrs]
        assert len(id_list) == len(set(id_list)), (file, 'Duplicate ID')
        ids_by_file[file] = set(id_list)
        assert set(legacy[file]) <= set(id_list), (file, 'Original anchor lost')
        assert len([n for n in nodes if n.tag == 'main']) == 1, file
        main_node = next(n for n in nodes if n.tag == 'main')
        heading_level = 0
        for heading in (n for n in main_node.nodes() if re.fullmatch(r'h[1-6]', n.tag)):
            level = int(heading.tag[1])
            assert level <= heading_level + 1, (file, 'Skipped heading level', heading.text())
            heading_level = level
        assert len([n for n in nodes if n.tag == 'h1']) == 1, file
        canonical = [n.attrs.get('href') for n in nodes if n.tag == 'link' and n.attrs.get('rel') == 'canonical']
        assert canonical == [ORIGIN.rstrip('/') + public_path(file)], file
        assert [n.attrs.get('content') for n in nodes if n.tag == 'meta' and n.attrs.get('property') == 'og:url'] == canonical, file
        footer = next(n for n in nodes if n.tag == 'footer')
        footer_navs = {n.attrs.get('aria-label'): n for n in footer.nodes() if n.tag == 'nav'}
        for label, expected in [('Services', service_pages | {'services.html'}), ('Industries', industry_pages | {'industries.html'})]:
            assert label in footer_navs, (file, 'Missing footer directory', label)
            linked = {urlsplit(n.attrs['href']).path.lstrip('/') for n in footer_navs[label].nodes() if n.tag == 'a'}
            expected_paths = {public_path(name).lstrip('/') for name in expected}
            assert linked == expected_paths, (file, 'Incomplete footer directory', label, expected_paths - linked)
        header = next(n for n in nodes if n.tag == 'header')
        for class_name, expected in [('services-menu', service_pages), ('industries-menu', industry_pages)]:
            dropdown = next((n for n in header.nodes() if n.tag == 'details' and class_name in n.attrs.get('class', '').split()), None)
            assert dropdown is not None, (file, 'Missing header dropdown', class_name)
            entries = [n for n in dropdown.nodes() if n.tag == 'a']
            linked = {urlsplit(n.attrs['href']).path.lstrip('/') for n in entries}
            expected_paths = {public_path(name).lstrip('/') for name in expected}
            assert linked == expected_paths, (file, 'Incomplete header dropdown', class_name, expected_paths - linked)
            for entry in entries:
                graphic = next((n for n in entry.nodes() if n.tag == 'svg'), None)
                assert graphic is not None and len(list(graphic.nodes())) > 1, (file, 'Missing navigation graphic', entry.text())
        text = document.root.text()
        assert 'support@assistlaneglobal.com' in text, file
        assert '+917011956780' in re.sub(r'\s', '', text), file
        assert not re.search(r'<\/?(?:p|a|div|h[1-6])\b|\$\{|\b(?:undefined|NaN)\b|\ufffd', main_node.text()), (file, 'Unrendered markup or invalid copy')
        assert not re.search(r'bookkeeping is our (?:main|core) service', text, re.I), file
        assert 'online enquiries are currently unavailable' not in text.lower(), file
        words = WORDS.findall(main_node.text(editorial=True))
        total = len(WORDS.findall(text))
        assert len(words) == counts[file]['editorialWords'] >= 1500, (file, len(words))
        assert total == counts[file]['words'] <= 2000, (file, total)
        row = density[file]
        if row['keyword']:
            phrase = WORDS.findall(row['keyword'].lower())
            tokens = [word.lower() for word in words]
            mentions = sum(tokens[i:i + len(phrase)] == phrase for i in range(len(tokens) - len(phrase) + 1))
            assert mentions == row['mentions'], file
            assert mentions * len(phrase) * 50 == len(tokens), (file, 'Coverage is not exactly 2%')
            assert row['wordCoveragePercent'] == 2, file
            target_count += 1
        for form in (n for n in nodes if n.tag == 'form'):
            form_count += 1
            assert 'data-enquiry-form' in form.attrs, file
            assert form.attrs.get('action') == 'https://api.web3forms.com/submit', file
            assert form.attrs.get('method') == 'post', file
            controls = {n.attrs['name']: n for n in form.nodes() if n.tag in {'input', 'select', 'textarea'} and 'name' in n.attrs}
            assert controls['access_key'].attrs.get('value') == key, file
            assert {name for name, node in controls.items() if 'required' in node.attrs} == {'name', 'email', 'description', 'consent'}, file
            assert controls['email'].attrs.get('type') == 'email', file
            assert controls['consent'].attrs.get('type') == 'checkbox', file
            assert controls['botcheck'].attrs.get('tabindex') == '-1', file
            labels = {n.attrs.get('for') for n in form.nodes() if n.tag == 'label'}
            for name, control in controls.items():
                if control.attrs.get('type') == 'hidden' or name == 'consent':
                    continue
                assert control.attrs.get('id') in labels, (file, 'Unlabelled field', name)
            submit = next(n for n in form.nodes() if n.tag == 'button' and n.attrs.get('type') == 'submit')
            assert 'disabled' not in submit.attrs, file
            status = next(n for n in form.nodes() if 'enquiry-status' in n.attrs.get('class', '').split())
            assert not status.text().strip(), file
        assert not re.search(r'ea5e080d', (DIST / file).read_text(encoding='utf-8')), file
    assert form_count == 28 and target_count == 28, (form_count, target_count)
    privacy = docs['privacy-policy.html']
    assert 'globmitra' not in privacy.root.text().lower()
    assert all('globmitra' not in n.attrs.get('content', '').lower() for n in privacy.root.nodes() if n.tag == 'meta')
    home = docs['index.html']
    assert 'bookkeeping' not in next(n for n in home.root.nodes() if n.tag == 'h1').text().lower()
    assert len([n for n in home.root.nodes() if n.tag == 'h2' and 'bookkeeping' in n.text().lower()]) == 1
    header = next(n for n in home.root.nodes() if n.tag == 'header')
    for node in header.nodes():
        if node.tag == 'a' and 'bookkeeping' in node.text().lower():
            ancestor = node.parent
            while ancestor and ancestor.attrs.get('id') != 'services-dropdown':
                ancestor = ancestor.parent
            assert ancestor, 'Bookkeeping must be inside Services'
    for file, document in docs.items():
        for node in document.root.nodes():
            references = [node.attrs[name] for name in ('href', 'src') if name in node.attrs]
            references += [candidate.strip().split()[0] for candidate in node.attrs.get('srcset', '').split(',') if candidate.strip()]
            for reference in references:
                parts = urlsplit(urljoin(ORIGIN.rstrip('/') + public_path(file), reference))
                if parts.scheme not in {'http', 'https'}:
                    continue
                if parts.hostname not in {'assistlaneglobal.com', 'www.assistlaneglobal.com'}:
                    if node.tag == 'a': external_links.add(reference)
                    continue
                path = unquote(parts.path).lstrip('/') or 'index.html'
                if node.tag == 'a':
                    assert not parts.path.endswith('.html'), (file, reference, 'Page link is not clean')
                if '.' not in path and path + '.html' in docs:
                    path += '.html'
                target = (DIST / path).resolve()
                assert target.is_relative_to(DIST.resolve()) and target.is_file(), (file, reference, 'Missing target')
                if parts.fragment:
                    assert unquote(parts.fragment) in ids_by_file.get(path, set()), (file, reference, 'Missing fragment')
                link_count += 1
    sitemap = ET.parse(DIST / 'sitemap.xml')
    locations = {element.text for element in sitemap.iter() if element.tag.endswith('}loc')}
    assert locations == {ORIGIN.rstrip('/') + public_path(file) for file in docs if file != '404.html'}
    for reference in re.findall(r'url\([\'\"]?([^\)\'\"]+)', (DIST / 'site.css').read_text(encoding='utf-8')):
        if reference.startswith('data:'): continue
        assert (DIST / reference.split('?')[0]).is_file(), ('CSS asset', reference)
    print(json.dumps({'pages':len(docs), 'forms':form_count, 'footer_service_pages':len(service_pages), 'footer_industry_pages':len(industry_pages), 'html_and_heading_hierarchy':'passed', 'internal_references':link_count, 'clean_page_urls':'passed', 'legacy_fragment_targets':'preserved', 'independent_word_counts':'matched', 'primary_keyword_pages_at_exactly_2_percent':target_count, 'external_links':sorted(external_links)}, indent=2))


if __name__ == '__main__':
    main()
