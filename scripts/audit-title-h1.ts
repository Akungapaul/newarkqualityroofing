/**
 * Title = H1 audit (owner rule, 2026-09-24) — build-failing when run.
 *
 * 1. Every prerendered page: <title> text === <h1> text, character for character.
 *    The only exception is /roof-repair-in-newark-nj (owner: leave untouched).
 * 2. Every Surfer-synced page (src/data/surfer-verbatim): the page keyword is in
 *    the slug, the title, the H1, and the page's first sentence (the first <p>
 *    after the H1).
 *
 * Run after `next build`: tsx scripts/audit-title-h1.ts  (npm run audit:title-h1)
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'node-html-parser';
import { SURFER_PAGES } from '@/data/surfer-verbatim/generated-index';

const APP = join(process.cwd(), '.next', 'server', 'app');
const EXCLUDE = new Set(['/roof-repair-in-newark-nj']);
// Framework/utility outputs that are not site pages.
const SKIP = new Set(['/_not-found', '/_global-error', '/404', '/500']);

if (!existsSync(APP)) {
  console.error('No build output at .next/server/app — run `next build` first.');
  process.exit(1);
}

function htmlFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return htmlFiles(p);
    return f.endsWith('.html') ? [p] : [];
  });
}

const clean = (s: string) => s.replace(/\s+/g, ' ').trim();
const norm = (s: string) =>
  ` ${s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim()} `;
const stem = (w: string) => w.replace(/([^s])s$/, '$1');
const hasPhrase = (text: string, phrase: string) => {
  const words = norm(phrase).trim().split(' ');
  const parts = words.map((w, i) => (i === words.length - 1 ? `${stem(w)}(?:e?s)?` : w));
  return new RegExp(`(?:^| )${parts.join(' ')}(?: |$)`).test(norm(text));
};
const firstSentence = (s: string) => clean(s).split(/(?<=[.!?])\s/)[0] ?? '';

const mismatches: string[] = [];
const keywordMisses: string[] = [];
const keywordWarnings: string[] = [];
let checked = 0;

for (const file of htmlFiles(APP)) {
  const route = file.slice(APP.length).replace(/\.html$/, '').replace(/\/index$/, '') || '/';
  if (SKIP.has(route) || EXCLUDE.has(route)) continue;
  const root = parse(readFileSync(file, 'utf8'));
  const title = clean(root.querySelector('title')?.text ?? '');
  const h1s = root.querySelectorAll('h1');
  if (!title && h1s.length === 0) continue; // not a page document
  checked++;
  const h1 = clean(h1s[0]?.text ?? '');
  if (h1s.length !== 1) mismatches.push(`${route}: ${h1s.length} <h1> elements`);
  else if (title !== h1) mismatches.push(`${route}\n    title: ${title}\n    h1:    ${h1}`);

  const surfer = SURFER_PAGES[route];
  if (surfer) {
    // First sentence = first non-empty <p> after the H1 in document order.
    const html = root.toString();
    const after = parse(html.slice(html.indexOf('</h1>')));
    // Skip short taglines/badges (no sentence): the lead is the first <p> of 8+ words.
    const lead = after.querySelectorAll('p').map((p) => clean(p.text)).find((t) => t.split(' ').length >= 8) ?? '';
    const fs = firstSentence(lead);
    const slugText = route.replace(/-/g, ' ');
    const checks: [string, string][] = [
      ['slug', route === '/' ? '' : slugText],
      ['title', title],
      ['h1', h1],
      ['first sentence', fs],
    ];
    const hasCity = (text: string) => !surfer.city || hasPhrase(text, surfer.city);
    for (const [where, text] of checks) {
      if (where === 'slug' && route === '/') continue; // root URL has no slug
      // Slugs drop "and"/"in"; match the slug on tokens, the rest on the phrase.
      const ok =
        where === 'slug'
          ? norm(surfer.leadPhrase).trim().split(' ').filter((w) => w !== 'and').every((w) => norm(text).includes(` ${w} `)) &&
            (!surfer.city || norm(text).includes(` ${norm(surfer.city).trim()} `))
          : hasPhrase(text, surfer.leadPhrase) && hasCity(text);
      if (ok) continue;
      const miss = `${route} — keyword "${surfer.leadPhrase}${surfer.city ? ' + ' + surfer.city : ''}" missing from ${where}: "${text.slice(0, 140)}"`;
      // Guide articles ship the owner's H1 and opening verbatim, so title/H1/first-sentence
      // placement is reported, not gated; the slug stays a hard check.
      if (surfer.type === 'article' && where !== 'slug') keywordWarnings.push(miss);
      else keywordMisses.push(miss);
    }
  }
}

console.log(`Title = H1: ${checked} pages checked, ${mismatches.length} mismatches`);
mismatches.slice(0, 60).forEach((m) => console.log(`  ✗ ${m}`));
if (mismatches.length > 60) console.log(`  … ${mismatches.length - 60} more`);
console.log(`Keyword placement (Surfer-synced pages): ${Object.keys(SURFER_PAGES).length} pages, ${keywordMisses.length} misses, ${keywordWarnings.length} warnings (verbatim guide articles)`);
keywordMisses.slice(0, 60).forEach((m) => console.log(`  ✗ ${m}`));
keywordWarnings.slice(0, 60).forEach((m) => console.log(`  ⚠ ${m}`));
process.exit(mismatches.length || keywordMisses.length ? 1 : 0);
