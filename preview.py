"""Local preview of the clean routes configured in the two Apache .htaccess files."""
import argparse
import re
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

DIST = Path(__file__).resolve().parent / 'dist'


class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIST), **kwargs)

    def redirect(self, path, query):
        self.send_response(301)
        self.send_header('Location', path + ('?' + query if query else ''))
        self.send_header('Content-Length', '0')
        self.end_headers()

    def route(self):
        parts = urlsplit(self.path)
        path = unquote(parts.path)
        if any(part.startswith('.') for part in path.split('/') if part):
            self.send_error(403)
            return False
        local = path[5:] if path.startswith('/dist/') else path
        if local == '/':
            self.path = '/index.html'
            return True
        match = re.fullmatch(r'/([a-z0-9-]+)(\.html|/)?', local)
        if match and (DIST / (match[1] + '.html')).is_file():
            canonical = '/' if match[1] == 'index' else '/' + match[1]
            if path != canonical:
                self.redirect(canonical, parts.query)
                return False
            self.path = '/' + match[1] + '.html'
            return True
        self.path = local + ('?' + parts.query if parts.query else '')
        return True

    def do_GET(self):
        if self.route():
            super().do_GET()

    def do_HEAD(self):
        if self.route():
            super().do_HEAD()

    def list_directory(self, path):
        self.send_error(404)
        return None

    def send_error(self, code, message=None, explain=None):
        if code != 404 or not (DIST / '404.html').is_file():
            return super().send_error(code, message, explain)
        content = (DIST / '404.html').read_bytes()
        self.send_response(404)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(content)))
        self.end_headers()
        if self.command != 'HEAD':
            self.wfile.write(content)

    def log_message(self, format, *args):
        if not getattr(self.server, 'quiet', False):
            super().log_message(format, *args)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=4357)
    args = parser.parse_args()
    with ThreadingHTTPServer(('127.0.0.1', args.port), PreviewHandler) as server:
        print(f'AssistLane preview: http://127.0.0.1:{args.port}/', flush=True)
        server.serve_forever()


if __name__ == '__main__':
    main()
