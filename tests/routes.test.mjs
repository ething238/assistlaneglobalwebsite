import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { cleanLocalReference, cleanPageReferences, publicPagePath } from '../routes.mjs';

test('the homepage and named pages have extensionless public paths', () => {
  assert.equal(publicPagePath('index.html'), '/');
  assert.equal(publicPagePath('about.html'), '/about');
  assert.equal(publicPagePath('industry-real-estate.html'), '/industry-real-estate');
});

test('page links keep query parameters and fragment targets', () => {
  assert.equal(cleanLocalReference('contact.html?utm_source=menu#contact-form'), '/contact?utm_source=menu#contact-form');
  assert.equal(cleanLocalReference('/index.html?ref=home#main'), '/?ref=home#main');
  assert.equal(cleanLocalReference('https://assistlaneglobal.com/trust.html#access'), 'https://www.assistlaneglobal.com/trust#access');
  assert.equal(cleanLocalReference('https://www.assistlaneglobal.com/about.html'), 'https://www.assistlaneglobal.com/about');
  assert.equal(cleanLocalReference('http://assistlaneglobal.com/about.html?ref=old#founder'), 'https://www.assistlaneglobal.com/about?ref=old#founder');
  assert.equal(cleanLocalReference('//assistlaneglobal.com/about.html'), 'https://www.assistlaneglobal.com/about');
});

test('assets use root paths and keep their extensions and cache versions', () => {
  assert.equal(cleanLocalReference('site.css?v=123'), '/site.css?v=123');
  assert.equal(cleanLocalReference('site.js?v=456'), '/site.js?v=456');
  assert.equal(cleanLocalReference('records.webp'), '/records.webp');
});

test('external links, form delivery and same-page anchors are unchanged', () => {
  for (const reference of ['https://api.web3forms.com/submit', 'https://example.com/page.html', 'mailto:support@assistlaneglobal.com', 'tel:+917011956780', '#scope', '//example.com/image.webp']) {
    assert.equal(cleanLocalReference(reference), reference);
  }
});

test('HTML links and responsive images are converted together and only once', () => {
  const input = '<a href="about.html#founder">About</a><img src="records.webp" srcset="records-720.webp 720w, records.webp 1280w">';
  const expected = '<a href="/about#founder">About</a><img src="/records.webp" srcset="/records-720.webp 720w, /records.webp 1280w">';
  assert.equal(cleanPageReferences(input), expected);
  assert.equal(cleanPageReferences(expected), expected);
});

test('every built page uses a clean canonical URL and clean local page links', async () => {
  const {pages} = JSON.parse(await readFile(new URL('../dist/word-counts.json', import.meta.url)));
  for (const {file} of pages) {
    const html = await readFile(new URL('../dist/' + file, import.meta.url), 'utf8');
    const expected = file === 'index.html' ? 'https://www.assistlaneglobal.com/' : 'https://www.assistlaneglobal.com/' + file.slice(0, -5);
    assert.ok(html.includes(`<link rel="canonical" href="${expected}">`), file);
    assert.ok(!/href="(?:\/|https?:\/\/(?:www\.)?assistlaneglobal\.com\/)[^"]*\.html(?:[?#][^"]*)?"/.test(html), file);
  }
});

test('repository-folder aliases redirect only externally requested, existing pages', async () => {
  const {pages} = JSON.parse(await readFile(new URL('../dist/word-counts.json', import.meta.url)));
  for (const name of ['../.htaccess','../dist/.htaccess']) {
    const config = await readFile(new URL(name,import.meta.url),'utf8');
    const block = config.match(/# BEGIN generated legacy dist aliases([\s\S]*?)# END generated legacy dist aliases/)[1];
    const patterns = [...block.matchAll(/RewriteCond %\{THE_REQUEST\} (.+) \[NC\]/g)].map(match=>new RegExp(match[1],'i'));
    for (const {file} of pages) {
      for (const prefix of ['/dist/','https://www.assistlaneglobal.com/dist/']) {
        const matches = patterns.map(pattern=>pattern.exec(`GET ${prefix}${file}?ref=old HTTP/1.1`)).filter(Boolean);
        assert.equal(matches.length,1, name+': '+file);
        assert.equal(file==='index.html'?'':matches[0][1],file==='index.html'?'':file.slice(0,-5));
      }
      assert.ok(patterns.every(pattern=>!pattern.test(`GET /${file} HTTP/1.1`)), 'Normal page request must not trigger a dist redirect');
    }
    for (const request of ['GET /dist/pricing.html HTTP/1.1','GET /dist/unknown-page.html HTTP/1.1','GET /trust HTTP/1.1','GET /about?next=/dist/trust.html HTTP/1.1']) {
      assert.ok(patterns.every(pattern=>!pattern.test(request)),request);
    }
  }
});
