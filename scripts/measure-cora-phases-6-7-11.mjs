/** Transparent before/after measurements; a CORA rerun remains authoritative. */
import fs from 'node:fs';
import { parse } from 'node-html-parser';

const variations = JSON.parse(fs.readFileSync('.planning/seo/cora-2026-09-11/variations.json', 'utf8'));
const normalize = (value) => value.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9'-]+/g, ' ').trim();
const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const match = (value, term) => new RegExp(`(?<![a-z0-9'-])${escape(normalize(term))}(?![a-z0-9'-])`).test(normalize(value));

function variationHits(elements, valueFor) {
  const joined = elements.map(valueFor).join(' ');
  return variations.filter((term) => match(joined, term));
}

function metrics(html) {
  const root = parse(html);
  const links = root.querySelectorAll('a[href]');
  const base = new URL('https://newarkqualityroofing.com/roof-repair-in-newark-nj');
  const http = links.map((node) => ({ node, url: new URL(node.getAttribute('href'), base) }))
    .filter(({ url }) => ['http:', 'https:'].includes(url.protocol));
  const internal = http.filter(({ url }) => url.hostname === base.hostname);
  const external = http.filter(({ url }) => url.hostname !== base.hostname);
  const isNofollow = (node) => (node.getAttribute('rel') || '').split(/\s+/).includes('nofollow');
  const og = root.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
  return {
    absoluteUrls: links.filter((node) => /^https?:\/\//i.test(node.getAttribute('href') || '')).length,
    internal: internal.length,
    dofollowInternal: internal.filter(({ node }) => !isNofollow(node)).length,
    external: external.length,
    nofollow: links.filter(isNofollow).length,
    nofollowExternal: external.filter(({ node }) => isNofollow(node)).length,
    styleVariations: variationHits(root.querySelectorAll('style'), (node) => node.text),
    ogVariations: variations.filter((term) => match(og, term)),
    buttonVariations: variationHits(root.querySelectorAll('button'), (node) => node.outerHTML),
    valueVariations: variationHits(root.querySelectorAll('[value]'), (node) => node.getAttribute('value') || ''),
    labelVariations: variationHits(root.querySelectorAll('label'), (node) => node.outerHTML),
  };
}

const beforeHtml = await (await fetch('https://newarkqualityroofing.com/roof-repair-in-newark-nj')).text();
const afterHtml = await (await fetch('http://localhost:3103/roof-repair-in-newark-nj')).text();
const before = metrics(beforeHtml);
const after = metrics(afterHtml);
const variationDelta = {};
for (const key of ['styleVariations', 'ogVariations', 'buttonVariations', 'valueVariations', 'labelVariations']) {
  const previous = new Set(before[key]);
  variationDelta[key] = after[key].filter((term) => !previous.has(term));
}
console.log(JSON.stringify({ before, after, variationDelta }, null, 2));
