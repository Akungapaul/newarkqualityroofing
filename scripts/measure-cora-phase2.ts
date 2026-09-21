/** Transparent local measurements for the 2026-09-11 CORA Phase 2 and 4 implementation. */
import fs from 'node:fs';
import { parse } from 'node-html-parser';
import { coraPhase2LsiTerms } from '../src/data/cora-phase2-content';

const reportDir = '.planning/seo/cora-2026-09-11';
const tables = JSON.parse(fs.readFileSync(`${reportDir}/extracted-terms.json`, 'utf8')) as Record<string, string[][]>;
const variations = JSON.parse(fs.readFileSync(`${reportDir}/variations.json`, 'utf8')) as string[];
const normalize = (value: string) => value.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9'-]+/g, ' ').trim();
const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const matchCount = (text: string, term: string) => [
  ...normalize(text).matchAll(new RegExp(`(?<![a-z0-9'-])${escape(normalize(term))}(?![a-z0-9'-])`, 'g')),
].length;
const visible = (html: string) => parse(html.replace(/<[^>]*>/g, ' ')).text.replace(/\s+/g, ' ').trim();

function metrics(html: string) {
  const root = parse(html);
  const phaseContent = root.querySelector('#cora-phase-2-and-4-field-notes');
  const phaseParagraphs = phaseContent?.querySelectorAll('p').map((element) => visible(element.toString())) ?? [];
  root.querySelectorAll('script,style').forEach((element) => element.remove());
  const fullText = visible(root.toString());
  const paragraphs = root.querySelectorAll('p').map((element) => visible(element.toString())).filter(Boolean);
  const segmenter = new Intl.Segmenter('en', { granularity: 'sentence' });
  const sentences = paragraphs.flatMap((paragraph) => Array.from(segmenter.segment(paragraph), ({ segment }) => segment));
  const wordCount = sentences.reduce((sum, sentence) => sum + normalize(sentence).split(' ').filter(Boolean).length, 0);
  const selectedOccurrences = coraPhase2LsiTerms.reduce((sum, term) => sum + matchCount(fullText, term), 0);
  const selectedUnique = coraPhase2LsiTerms.filter((term) => matchCount(fullText, term) > 0).length;
  const lsi = Object.fromEntries([1, 2, 3, 4].map((length) => {
    const entries = [...new Set(tables[`lsa${length}`].map((row) => normalize(row[0])))];
    const hits = entries.map((term) => ({ term, count: matchCount(sentences.join(' '), term) })).filter(({ count }) => count > 0);
    return [length, { occurrences: hits.reduce((sum, hit) => sum + hit.count, 0), unique: hits.length }];
  }));
  const normalizedSentences = normalize(sentences.join(' '));
  const variationRegex = new RegExp(
    `(?<![a-z0-9'-])(?:${[...variations].sort((a, b) => b.length - a.length).map((term) => escape(normalize(term))).join('|')})(?![a-z0-9'-])`,
    'g',
  );
  const matchedVariationWords = [...normalizedSentences.matchAll(variationRegex)]
    .reduce((sum, match) => sum + match[0].split(' ').length, 0);
  return {
    htmlBytes: Buffer.byteLength(html),
    paragraphSentences: sentences.length,
    paragraphWords: wordCount,
    averageWordsPerSentence: wordCount / sentences.length,
    cleanVariationDensity: 100 * matchedVariationWords / wordCount,
    fixed: matchCount(fullText, 'fixed'),
    roofingContractors: matchCount(fullText, 'roofing contractors'),
    bestRoofRepair: matchCount(fullText, 'best roof repair'),
    selectedUnique,
    selectedOccurrences,
    phaseParagraphs: phaseParagraphs.length,
    phaseMinWords: phaseParagraphs.length ? Math.min(...phaseParagraphs.map((text) => normalize(text).split(' ').length)) : 0,
    phaseMaxWords: phaseParagraphs.length ? Math.max(...phaseParagraphs.map((text) => normalize(text).split(' ').length)) : 0,
    lsi,
  };
}

async function main() {
  const liveHtml = await (await fetch('https://newarkqualityroofing.com/roof-repair-in-newark-nj')).text();
  const builtHtml = fs.readFileSync('.next/server/app/roof-repair-in-newark-nj.html', 'utf8');
  const before = metrics(liveHtml);
  const after = metrics(builtHtml);
  const delta = Object.fromEntries(Object.keys(after).filter((key) => typeof after[key as keyof typeof after] === 'number').map((key) => [
    key,
    (after[key as keyof typeof after] as number) - (before[key as keyof typeof before] as number),
  ]));
  const lsiDelta = Object.fromEntries([1, 2, 3, 4].map((length) => [length, {
    occurrences: after.lsi[length].occurrences - before.lsi[length].occurrences,
    unique: after.lsi[length].unique - before.lsi[length].unique,
  }]));
  console.log(JSON.stringify({ method: 'Normalized whole-term comparison of Phase 1 production HTML with the new local production build; CORA rerun remains authoritative.', before, after, delta, lsiDelta }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
