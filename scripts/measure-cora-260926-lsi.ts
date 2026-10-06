/** Measurements for the 2026-09-26 CORA roadmap LSI completion pass
 * (second pass) on /roof-repair-in-newark-nj, keyword "roof repair".
 *
 * Unlike scripts/measure-cora-260926.ts (which used the 2026-09-11 run's
 * 264-term inventory from src/data/cora-phase2-content.ts), this script uses
 * THIS run's own LSA term inventory, extracted from the run's HTML export
 * (tables lsa1Table..lsa4Table) into src/data/cora-260926-lsa-terms.ts.
 *
 * Counts, for live production HTML ("before") vs the local production build
 * ("after"): in-sentence occurrences of each LSA term (sentences segmented
 * from <p> text, the same method as measure-cora-260926.ts) and the number
 * of unique LSA terms present, overall and per LSA group. Roadmap lines
 * served: 8 (LSI Words in Sentences +562), 10 (Unique LSI Words +264).
 *
 * Run after `npm run build`:
 *   npx tsx scripts/measure-cora-260926-lsi.ts
 * Optional: CORA_LIVE_HTML=/path/to/live.html for a saved live snapshot.
 * A CORA rerun by the owner remains the authoritative check.
 */
import fs from 'node:fs';
import { parse } from 'node-html-parser';
import {
  coraLsa1Terms,
  coraLsa2Terms,
  coraLsa3Terms,
  coraLsa4Terms,
  type CoraLsaTerm,
} from '../src/data/cora-260926-lsa-terms';

const normalize = (value: string) =>
  value.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9'-]+/g, ' ').trim();
const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const countTerm = (text: string, term: string) =>
  [...normalize(text).matchAll(new RegExp(`(?<![a-z0-9'-])${escape(normalize(term))}(?![a-z0-9'-])`, 'g'))].length;

const groups: Record<string, CoraLsaTerm[]> = {
  lsa1: coraLsa1Terms,
  lsa2: coraLsa2Terms,
  lsa3: coraLsa3Terms,
  lsa4: coraLsa4Terms,
};

function metrics(html: string) {
  const root = parse(html);
  const visible = (node?: { text: string } | null) => (node?.text ?? '').replace(/\s+/g, ' ').trim();
  const suffix = root.querySelector('title')?.text ?? '';

  const paragraphs = root.querySelectorAll('p').map((p) => visible(p)).filter(Boolean);
  const segmenter = new Intl.Segmenter('en', { granularity: 'sentence' });
  const sentences = paragraphs.flatMap((p) =>
    Array.from(segmenter.segment(p), ({ segment }) => segment).filter((s) => s.trim().length > 0),
  );
  const sentenceText = sentences.join(' ');

  const perGroup: Record<string, { terms: number; occurrences: number; uniquePresent: number }> = {};
  let totalOccurrences = 0;
  let totalUnique = 0;
  for (const [name, terms] of Object.entries(groups)) {
    let occurrences = 0;
    let unique = 0;
    for (const { term } of terms) {
      const c = countTerm(sentenceText, term);
      occurrences += c;
      if (c > 0) unique += 1;
    }
    perGroup[name] = { terms: terms.length, occurrences, uniquePresent: unique };
    totalOccurrences += occurrences;
    totalUnique += unique;
  }

  return {
    titleSeen: suffix.slice(0, 40),
    paragraphs: paragraphs.length,
    sentences: sentences.length,
    lsaOccurrencesInSentences: totalOccurrences,
    lsaUniqueTermsInSentences: totalUnique,
    perGroup,
  };
}

async function main() {
  let liveHtml: string;
  try {
    liveHtml = await (await fetch('https://newarkqualityroofing.com/roof-repair-in-newark-nj')).text();
  } catch {
    const fallback = process.env.CORA_LIVE_HTML ?? '/tmp/cora-lsi/live-now.html';
    liveHtml = fs.readFileSync(fallback, 'utf8');
  }
  const builtHtml = fs.readFileSync('.next/server/app/roof-repair-in-newark-nj.html', 'utf8');
  const before = metrics(liveHtml);
  const after = metrics(builtHtml);
  const delta = {
    lsaOccurrencesInSentences: after.lsaOccurrencesInSentences - before.lsaOccurrencesInSentences,
    lsaUniqueTermsInSentences: after.lsaUniqueTermsInSentences - before.lsaUniqueTermsInSentences,
    perGroup: Object.fromEntries(
      Object.keys(groups).map((name) => [
        name,
        {
          occurrences:
            after.perGroup[name].occurrences - before.perGroup[name].occurrences,
          uniquePresent:
            after.perGroup[name].uniquePresent - before.perGroup[name].uniquePresent,
        },
      ]),
    ),
  };
  console.log(
    JSON.stringify(
      {
        method:
          "This run's LSA inventory (lsa1-4 tables, run HTML export); normalized whole-term counts in <p> sentences; live production vs local build. CORA rerun remains authoritative.",
        targets: { occurrencesDelta: 562, uniqueDelta: 264 },
        before,
        after,
        delta,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
