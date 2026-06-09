// ─── CMP-4 answer-first ≤40-word lead audit ─────────────────────────────────
// Per the CMP-1 lesson: per-item reviewers under-flag systematic R2 overruns, so
// word-count EVERY answer-first lead across the whole batch. Run:
//   npx tsx .planning/content-system/comparisons-batch4/wordcount-cmp4.ts
import { decisionHelpers } from '../../../src/data/comparison-content/decision-helper';

const CMP = new Set([
  'best-roofing-material-nj-weather', 'best-commercial-roofing-material',
  'best-roofing-for-flat-roofs', 'best-roofing-for-historic-homes-nj',
  'cheapest-vs-most-durable-roofing', 'most-energy-efficient-roofing-materials',
  'best-roofing-for-essex-county-colonial-homes', 'roof-warranty-comparison-guide',
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
for (const c of decisionHelpers) {
  if (!CMP.has(c.comparisonId)) continue;
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

console.log(`\nChecked ${checks} answer-first leads across ${CMP.size} CMP-4 comparisons.`);
console.log(overruns === 0 ? '✅ 0 overruns (all leads ≤40 words)' : `❌ ${overruns} overruns (>${LIMIT} words)`);
process.exit(overruns === 0 ? 0 : 1);
