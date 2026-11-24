export const siteOrigin = 'https://assistlaneglobal.com';

export function publicPagePath(file) {
  return file === 'index.html' ? '/' : '/' + file.replace(/\.html$/, '');
}

export function cleanLocalReference(reference) {
  if (!reference || reference.startsWith('#') || reference.startsWith('//')) return reference;
  const absolute = /^[a-z][a-z\d+.-]*:/i.test(reference);
  if (absolute && !/^https?:/i.test(reference)) return reference;
  const url = new URL(reference, siteOrigin + '/');
  if (!['assistlaneglobal.com', 'www.assistlaneglobal.com'].includes(url.hostname)) return reference;
  if (url.pathname === '/index.html') url.pathname = '/';
  else url.pathname = url.pathname.replace(/\.html$/, '');
  return absolute ? url.href : url.pathname + url.search + url.hash;
}

export function cleanPageReferences(html) {
  return html
    .replace(/\b(href|src|action)="([^"]+)"/g, (_, attribute, reference) => `${attribute}="${cleanLocalReference(reference)}"`)
    .replace(/\bsrcset="([^"]+)"/g, (_, candidates) => 'srcset="' + candidates.split(',').map(candidate => {
      const [reference, ...descriptor] = candidate.trim().split(/\s+/);
      return [cleanLocalReference(reference), ...descriptor].join(' ');
    }).join(', ') + '"');
}
