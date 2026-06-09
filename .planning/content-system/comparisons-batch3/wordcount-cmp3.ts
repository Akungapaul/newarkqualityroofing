// ─── CMP-3 answer-first ≤40-word lead audit ─────────────────────────────────
// Per the CMP-1 lesson: per-item reviewers under-flag systematic R2 overruns, so
// word-count EVERY answer-first lead across the whole batch. Run:
//   npx tsx .planning/content-system/comparisons-batch3/wordcount-cmp3.ts
import { serviceComparisons } from '../../../src/data/comparison-content/service-vs-service';

const CMP2 = new Set([
  'roof-repair-vs-replacement', 'roof-coating-vs-replacement', 'roof-overlay-vs-tear-off',
  'patching-vs-full-roof-repair', 'preventive-maintenance-vs-emergency-repair',
  'diy-vs-professional-roof-repair',
]);
const LIMIT = 40;

const strip = (s: string) => s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
const words = (s: string) => strip(s).split(' ').filter(Boolean).length;
const firstSentence = (s: string) => {
  const m = strip(s).match(/^.*?[.!?](\s|$)/);
  return m ? m[0].trim() : strip(s);
};

let overruns = 0;
let checks = 0;
for (const c of serviceComparisons) {
  if (!CMP2.has(c.comparisonId)) continue;
  const leads: Array<[string, string]> = [];
  leads.push(['directAnswer', c.directAnswer ?? '']);
  leads.push(['introParagraphs[0]', c.introParagraphs[0] ?? '']);
  leads.push(['verdict.winner', c.verdict.winner]);
  c.detailedAnalysis.forEach((a, i) => leads.push([`detailedAnalysis[${i}].content[0] (${a.heading.slice(0, 24)})`, a.content[0]]));
  leads.push(['njSpecific.content[0]', c.njSpecific.content[0]]);
  leads.push(['residentialSection.content[0]', c.residentialSection.content[0]]);
  leads.push(['commercialSection.content[0]', c.commercialSection.content[0]]);
  c.faqs.forEach((f, i) => leads.push([`faqs[${i}].answer (1st sentence)`, firstSentence(f.answer)]));

  for (const [label, text] of leads) {
    if (!text) continue;
    checks++;
    const n = words(text);
    if (n > LIMIT) {
      overruns++;
      console.log(`  ✗ ${c.comparisonId} → ${label}: ${n}w`);
      console.log(`      ${strip(text)}`);
    }
  }
}

console.log(`\nChecked ${checks} answer-first leads across ${CMP2.size} CMP-3 comparisons.`);
console.log(overruns === 0 ? '✅ 0 overruns (all leads ≤40 words)' : `❌ ${overruns} overruns (>${LIMIT} words)`);
process.exit(overruns === 0 ? 0 : 1);
