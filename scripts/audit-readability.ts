/**
 * Readability audit — ADVISORY ONLY, never gates the build.
 *
 * Reports Flesch Reading Ease and Flesch-Kincaid Grade Level for prerendered
 * pages, plus average words per sentence.
 *
 * Deliberately NOT in `audit:all`: readability is a judgement call about
 * audience, not a correctness rule, and a homeowner-facing roofing page has a
 * different target than a technical spec.
 *
 * THREE PREPROCESSING RULES, each load-bearing — get any wrong and the numbers
 * are meaningless:
 *
 *   1. Strip <script> and <template>. Roughly half the served bytes are the RSC
 *      flight payload, in which EVERY body string appears a second time. Left in,
 *      every sentence is counted twice and the payload's punctuation is scored
 *      as prose.
 *   2. Scope to <article>. Nav, footer and the lead form are chrome, not the
 *      content being assessed.
 *   3. Split blocks on closing block tags before sentence-splitting. Headings and
 *      list items carry no terminal punctuation, so without this a heading fuses
 *      into the following paragraph and inflates words-per-sentence.
 *
 * Run: npx tsx scripts/audit-readability.ts [slug ...]
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PRERENDER_DIR = join(REPO_ROOT, '.next', 'server', 'app');

const DEFAULT_SLUGS = ['roof-repair-in-newark-nj', 'roof-replacement-in-newark-nj'];

/** Vowel-group syllable estimate — the standard approximation these formulas assume. */
function syllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 0;
  if (w.length <= 3) return 1;
  const trimmed = w
    .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
    .replace(/^y/, '');
  const groups = trimmed.match(/[aeiouy]{1,2}/g);
  return Math.max(1, groups ? groups.length : 1);
}

interface Stats {
  words: number;
  sentences: number;
  syllables: number;
  wordsPerSentence: number;
  readingEase: number;
  gradeLevel: number;
}

export function analyze(html: string): Stats {
  // (1) strip script/style/template — the flight payload duplicates every string
  let h = html.replace(/<(script|style|template)[^>]*>[\s\S]*?<\/\1>/gi, ' ');

  // (2) scope to <article>
  const article = /<article[^>]*>([\s\S]*?)<\/article>/i.exec(h);
  h = article ? article[1] : h;

  // (3) block boundaries become sentence terminators
  h = h.replace(/<\/(h[1-6]|p|li|td|th|dt|dd|figcaption|caption)>/gi, '. ');

  const text = h
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const sentences = text.split(/[.!?]+(?=\s|$)/).filter((s) => s.trim().split(/\s+/).length > 1);
  const words = text.split(/\s+/).filter((w) => /[a-z]/i.test(w));
  const syl = words.reduce((a, w) => a + syllables(w), 0);

  const nW = Math.max(1, words.length);
  const nS = Math.max(1, sentences.length);
  const wps = nW / nS;
  const spw = syl / nW;

  return {
    words: words.length,
    sentences: sentences.length,
    syllables: syl,
    wordsPerSentence: wps,
    readingEase: 206.835 - 1.015 * wps - 84.6 * spw,
    gradeLevel: 0.39 * wps + 11.8 * spw - 15.59,
  };
}

function main(): void {
  if (!existsSync(PRERENDER_DIR)) {
    console.log('Readability audit SKIPPED — run `next build` first.');
    return;
  }
  const args = process.argv.slice(2);
  const slugs = args.length ? args : DEFAULT_SLUGS;

  console.log('='.repeat(72));
  console.log('  READABILITY (advisory — never fails the build)');
  console.log('='.repeat(72));
  console.log(`  ${'page'.padEnd(34)}${'words'.padStart(7)}${'w/sent'.padStart(9)}${'ease'.padStart(8)}${'grade'.padStart(8)}`);

  for (const slug of slugs) {
    const file = join(PRERENDER_DIR, `${slug}.html`);
    if (!existsSync(file)) {
      console.log(`  ${slug.padEnd(34)}  (not built)`);
      continue;
    }
    const s = analyze(readFileSync(file, 'utf8'));
    console.log(
      `  ${slug.slice(0, 33).padEnd(34)}${String(s.words).padStart(7)}` +
      `${s.wordsPerSentence.toFixed(1).padStart(9)}${s.readingEase.toFixed(1).padStart(8)}` +
      `${s.gradeLevel.toFixed(1).padStart(8)}`,
    );
  }

  console.log('-'.repeat(72));
  console.log('  Higher ease = easier. A general-audience target is roughly 50-60 ease');
  console.log('  and grade 8-10. Advisory only; not part of `npm run audit:all`.');
}

main();
