"""HTTP checks for every preview route, old link redirects and missing pages."""
import http.client
import json
from pathlib import Path
import sys
import threading
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from preview import DIST, PreviewHandler, ThreadingHTTPServer


def public_path(file):
    if file == 'contact.html':
        return '/contact-us'
    return '/' if file == 'index.html' else '/' + file[:-5]


class CleanURLs(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = ThreadingHTTPServer(('127.0.0.1', 0), PreviewHandler)
        cls.server.quiet = True
        cls.worker = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.worker.start()
        cls.pages = json.loads((DIST / 'word-counts.json').read_text())['pages']

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.worker.join()

    def request(self, path, method='GET'):
        connection = http.client.HTTPConnection('127.0.0.1', self.server.server_port, timeout=5)
        try:
            connection.request(method, path)
            response = connection.getresponse()
            return response.status, dict(response.getheaders()), response.read()
        finally:
            connection.close()

    def test_all_32_clean_pages_and_head_requests(self):
        self.assertEqual(len(self.pages), 32)
        for page in self.pages:
            with self.subTest(page=page['file']):
                path = public_path(page['file'])
                status, headers, content = self.request(path)
                self.assertEqual(status, 200)
                self.assertIn('text/html', headers['Content-type'])
                self.assertIn(f'href="https://www.assistlaneglobal.com{path}"'.encode(), content)
                status, _, content = self.request(path, 'HEAD')
                self.assertEqual(status, 200)
                self.assertEqual(content, b'')

    def test_all_old_page_urls_redirect_permanently_and_keep_the_query(self):
        for page in self.pages:
            path = public_path(page['file'])
            for prefix in ['/', '/dist/']:
                with self.subTest(page=page['file'], prefix=prefix):
                    status, headers, _ = self.request(prefix + page['file'] + '?utm_source=old-link')
                    self.assertEqual(status, 301)
                    self.assertEqual(headers['Location'], path + '?utm_source=old-link')

    def test_trailing_slash_aliases_use_the_same_clean_url(self):
        for page in self.pages:
            if page['file'] == 'index.html':
                continue
            path = public_path(page['file'])
            status, headers, _ = self.request(path + '/')
            self.assertEqual(status, 301)
            self.assertEqual(headers['Location'], path)

    def test_contact_aliases_keep_the_query_and_point_directly_to_contact_us(self):
        for path in ['/contact', '/contact/', '/contact.html', '/contact-us/', '/contact-us.html',
                     '/dist/contact', '/dist/contact/', '/dist/contact.html', '/dist/contact-us', '/dist/contact-us.html']:
            for method in ['GET', 'HEAD']:
                with self.subTest(path=path, method=method):
                    status, headers, _ = self.request(path + '?utm_source=old&next=%2Fabout', method)
                    self.assertEqual(status, 301)
                    self.assertEqual(headers['Location'], '/contact-us?utm_source=old&next=%2Fabout')
        status, _, content = self.request('/contact-us?next=/contact.html')
        self.assertEqual(status, 200)
        self.assertIn(b'id="contact-form"', content)

    def test_assets_keep_working(self):
        for path in ['/site.css?v=123', '/site.js?v=123', '/form-delivery.js', '/records-720.webp', '/mark.svg', '/sitemap.xml', '/robots.txt']:
            with self.subTest(path=path):
                status, _, content = self.request(path)
                self.assertEqual(status, 200)
                self.assertTrue(content)

    def test_missing_and_removed_pages_stay_404(self):
        for path in ['/pricing', '/pricing.html', '/unknown-page', '/nested/unknown-page']:
            with self.subTest(path=path):
                status, _, content = self.request(path)
                self.assertEqual(status, 404)
                self.assertIn(b'We couldn', content)
                self.assertIn(b'href="/services"', content)


if __name__ == '__main__':
    unittest.main()
