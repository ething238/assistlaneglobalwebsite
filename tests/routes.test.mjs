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
  assert.equal(cleanLocalReference('https://assistlaneglobal.com/trust.html#access'), 'https://assistlaneglobal.com/trust#access');
  assert.equal(cleanLocalReference('https://www.assistlaneglobal.com/about.html'), 'https://www.assistlaneglobal.com/about');
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
    const expected = file === 'index.html' ? 'https://assistlaneglobal.com/' : 'https://assistlaneglobal.com/' + file.slice(0, -5);
    assert.ok(html.includes(`<link rel="canonical" href="${expected}">`), file);
    assert.ok(!/href="(?:\/|https?:\/\/(?:www\.)?assistlaneglobal\.com\/)[^"]*\.html(?:[?#][^"]*)?"/.test(html), file);
  }
});
