// ─── Combo Batch 3 (Orange) answer-first lead + leak + de-fab audit ──────────
// Per the CMP lesson: per-item reviewers under-flag systematic R2 (≤40w) overruns,
// so word-count EVERY answer-first lead + scan raw fields for ** leaks + de-fab.
// Run (post-assembly):  npx tsx .planning/content-system/combo-batch3-orange/audit-leads.ts
import { orangeComboContent } from '../../../src/data/combo-content/orange';

const LIMIT = 40;
const META_MAX = 160;
const strip = (s: string) => s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
const words = (s: string) => strip(s).split(' ').filter(Boolean).length; // " — " counts as a token
const firstSentence = (s: string) => strip(s).split(/(?<=[.!?])\s/)[0] || strip(s);
const DEFAB = /GAF Certified|same-?day|24\/7|0% financing|500\+|top-rated|15\+ years|hundreds of (projects|homes)/i;
// raw fields must NOT contain ** markdown (it leaks unparsed)
const RAW_LEAK = (s: string) => s.includes('**');

let leadViol = 0, leakViol = 0, defabViol = 0, metaViol = 0;
const report: string[] = [];

for (const c of orangeComboContent) {
  const id = c.serviceId;
  const leads: Array<[string, string]> = [];
  if (c.directAnswer) leads.push(['directAnswer', c.directAnswer]);
  if (c.overview?.[0]) leads.push(['overview[0]', c.overview[0]]);
  if (c.challenges?.[0]) leads.push(['challenges[0]', c.challenges[0]]);
  if (c.process?.[0]) leads.push(['process[0]', c.process[0]]);
  (c.faqs || []).forEach((f, i) => leads.push([`faq[${i}].answer(1st)`, firstSentence(f.answer)]));

  for (const [field, text] of leads) {
    // strip ** BEFORE sentence-splitting so a "**…repair.** A crew…" bold span doesn't fuse two sentences
    const w = field.startsWith('faq') ? words(text) : words(firstSentence(text));
    if (w > LIMIT) { leadViol++; report.push(`  ✗ ${id} ${field}: ${w}w  "${strip(text).slice(0, 70)}…"`); }
  }

  // ** leak in raw fields
  const rawFields: Array<[string, string | undefined]> = [
    ['pricing.range', c.pricing?.range], ['pricing.note', c.pricing?.note],
    ['metaDescription', c.metaDescription],
    ['midPageCta', c.conversionHooks?.midPageCta], ['urgencyNote', c.conversionHooks?.urgencyNote],
    ...(c.whyChooseUs || []).map((r, i) => [`whyChooseUs[${i}]`, r] as [string, string]),
    ...(c.faqs || []).map((f, i) => [`faq[${i}].question`, f.question] as [string, string]),
  ];
  for (const [field, text] of rawFields) {
    if (text && RAW_LEAK(text)) { leakViol++; report.push(`  ✗ ${id} ${field}: ** leak`); }
  }

  // de-fab anywhere
  const allText = JSON.stringify(c);
  if (DEFAB.test(allText)) { defabViol++; report.push(`  ✗ ${id}: de-fab literal -> ${(allText.match(DEFAB) || [])[0]}`); }

  // meta length
  if (c.metaDescription && c.metaDescription.length > META_MAX) {
    metaViol++; report.push(`  ✗ ${id} metaDescription: ${c.metaDescription.length} chars (>160)`);
  }
}

console.log(`Combo Batch 3 (Orange) — ${orangeComboContent.length} combos audited`);
if (report.length) console.log(report.join('\n'));
const total = leadViol + leakViol + defabViol + metaViol;
console.log(`\nLeads >40w: ${leadViol} | ** leaks: ${leakViol} | de-fab: ${defabViol} | meta>160: ${metaViol} | TOTAL: ${total}`);
process.exit(total > 0 ? 1 : 0);
