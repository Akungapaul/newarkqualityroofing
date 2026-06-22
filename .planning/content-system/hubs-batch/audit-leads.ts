// ─── Hubs Batch answer-first lead + leak + de-fab audit ──────────────────────
// Per the CMP/combo lesson: per-item reviewers under-flag systematic R2 (≤40w)
// overruns, so word-count EVERY answer-first lead + scan raw fields for ** leaks
// + de-fab literals + meta caps across all 6 FLAT hubs.
// Run (post-assembly):  npx tsx .planning/content-system/hubs-batch/audit-leads.ts
import { getAllHubContent } from '../../../src/data/hub-content';

const LIMIT = 40;
const META_MAX = 160;
const TITLE_MAX = 60;
const strip = (s: string) => s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
const words = (s: string) => strip(s).split(' ').filter(Boolean).length; // " — " counts as a token
const firstSentence = (s: string) => strip(s).split(/(?<=[.!?])\s/)[0] || strip(s);
// directAnswer R2 cap is the BOLD SPAN (2b lesson), not the full sentence.
const boldSpan = (s: string) => { const m = s.match(/\*\*([\s\S]*?)\*\*/); return m ? m[1].replace(/\s+/g, ' ').trim() : strip(s); };
const DEFAB = /GAF Certified|same-?day|24\/7|0% financing|500\+|top-rated|15\+ years|hundreds of (projects|homes)|master elite/i;
const RAW_LEAK = (s: string) => s.includes('**');

let leadViol = 0, leakViol = 0, defabViol = 0, metaViol = 0, total = 0;
const report: string[] = [];

for (const c of getAllHubContent()) {
  const id = c.hubId;
  // Answer-first leads (≤40w):
  const leads: Array<[string, number]> = [];
  leads.push(['directAnswer(bold)', words(boldSpan(c.directAnswer))]);
  if (c.definition) leads.push(['definition(1st)', words(firstSentence(c.definition))]);
  c.sections.forEach((s, i) => leads.push([`sections[${i}].body[0](1st)`, words(firstSentence(s.body[0]))]));
  c.faqs.forEach((f, i) => leads.push([`faq[${i}].answer(1st)`, words(firstSentence(f.answer))]));
  for (const [field, w] of leads) {
    if (w > LIMIT) { leadViol++; report.push(`  ✗ ${id} ${field}: ${w}w`); }
  }

  // ** leaks in raw fields that are NOT rendered through parseRichText caps (metas/headings/labels):
  const rawFields: Array<[string, string | undefined]> = [
    ['metaTitle', c.metaTitle], ['metaDescription', c.metaDescription],
    ['faqHeading', c.faqHeading], ['definitionHeading', c.definitionHeading],
    ...c.sections.map((s, i) => [`sections[${i}].heading`, s.heading] as [string, string]),
    ...c.faqs.map((f, i) => [`faq[${i}].question`, f.question] as [string, string]),
  ];
  for (const [field, text] of rawFields) {
    if (text && RAW_LEAK(text)) { leakViol++; report.push(`  ✗ ${id} ${field}: ** leak`); }
  }

  const allText = JSON.stringify(c);
  if (DEFAB.test(allText)) { defabViol++; report.push(`  ✗ ${id}: de-fab literal -> ${(allText.match(DEFAB) || [])[0]}`); }

  if (c.metaDescription.length > META_MAX) { metaViol++; report.push(`  ✗ ${id} metaDescription: ${c.metaDescription.length} chars (>160)`); }
  if (c.metaTitle.length > TITLE_MAX) { metaViol++; report.push(`  ✗ ${id} metaTitle: ${c.metaTitle.length} chars (>60)`); }
  total += 1;
}

console.log(`Hubs Batch — ${total} hubs audited`);
if (report.length) console.log(report.join('\n'));
const tot = leadViol + leakViol + defabViol + metaViol;
console.log(`\nLeads >40w: ${leadViol} | ** leaks: ${leakViol} | de-fab: ${defabViol} | meta caps: ${metaViol} | TOTAL: ${tot}`);
process.exit(tot > 0 ? 1 : 0);
