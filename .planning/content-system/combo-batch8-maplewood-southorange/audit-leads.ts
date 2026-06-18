// ─── Combo Batch 8 (Maplewood + South Orange) answer-first lead + leak + de-fab audit ──────
// Per the CMP lesson: per-item reviewers under-flag systematic R2 (≤40w) overruns,
// so word-count EVERY answer-first lead + scan raw fields for ** leaks + de-fab — both cities.
// Run (post-assembly):  npx tsx .planning/content-system/combo-batch8-maplewood-southorange/audit-leads.ts
import { maplewoodComboContent } from '../../../src/data/combo-content/maplewood';
import { southOrangeComboContent } from '../../../src/data/combo-content/south-orange';

const SETS: Array<[string, any[]]> = [
  ['maplewood', maplewoodComboContent],
  ['south-orange', southOrangeComboContent],
];

const LIMIT = 40;
const META_MAX = 160;
const strip = (s: string) => s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
const words = (s: string) => strip(s).split(' ').filter(Boolean).length; // " — " counts as a token
const firstSentence = (s: string) => strip(s).split(/(?<=[.!?])\s/)[0] || strip(s);
// directAnswer R2 cap is the BOLD SPAN (2b lesson), not the full sentence.
const boldSpan = (s: string) => { const m = s.match(/\*\*([\s\S]*?)\*\*/); return m ? m[1].replace(/\s+/g, ' ').trim() : strip(s); };
const DEFAB = /GAF Certified|same-?day|24\/7|0% financing|500\+|top-rated|15\+ years|hundreds of (projects|homes)/i;
const RAW_LEAK = (s: string) => s.includes('**');

let leadViol = 0, leakViol = 0, defabViol = 0, metaViol = 0, total = 0;
const report: string[] = [];

for (const [city, combos] of SETS) {
  for (const c of combos) {
    const id = `${city}/${c.serviceId}`;
    const leads: Array<[string, string]> = [];
    if (c.directAnswer) leads.push(['directAnswer', c.directAnswer]);
    if (c.overview?.[0]) leads.push(['overview[0]', c.overview[0]]);
    if (c.challenges?.[0]) leads.push(['challenges[0]', c.challenges[0]]);
    if (c.process?.[0]) leads.push(['process[0]', c.process[0]]);
    (c.faqs || []).forEach((f: any, i: number) => leads.push([`faq[${i}].answer(1st)`, firstSentence(f.answer)]));

    for (const [field, text] of leads) {
      const w = field === 'directAnswer' ? words(boldSpan(text))
        : field.startsWith('faq') ? words(text) : words(firstSentence(text));
      if (w > LIMIT) { leadViol++; report.push(`  ✗ ${id} ${field}: ${w}w  "${strip(text).slice(0, 70)}…"`); }
    }

    const rawFields: Array<[string, string | undefined]> = [
      ['pricing.range', c.pricing?.range], ['pricing.note', c.pricing?.note],
      ['metaDescription', c.metaDescription],
      ['midPageCta', c.conversionHooks?.midPageCta], ['urgencyNote', c.conversionHooks?.urgencyNote],
      ...(c.whyChooseUs || []).map((r: string, i: number) => [`whyChooseUs[${i}]`, r] as [string, string]),
      ...(c.faqs || []).map((f: any, i: number) => [`faq[${i}].question`, f.question] as [string, string]),
    ];
    for (const [field, text] of rawFields) {
      if (text && RAW_LEAK(text)) { leakViol++; report.push(`  ✗ ${id} ${field}: ** leak`); }
    }

    const allText = JSON.stringify(c);
    if (DEFAB.test(allText)) { defabViol++; report.push(`  ✗ ${id}: de-fab literal -> ${(allText.match(DEFAB) || [])[0]}`); }

    if (c.metaDescription && c.metaDescription.length > META_MAX) {
      metaViol++; report.push(`  ✗ ${id} metaDescription: ${c.metaDescription.length} chars (>160)`);
    }
  }
  total += combos.length;
}

console.log(`Combo Batch 8 (Maplewood + South Orange) — ${total} combos audited`);
if (report.length) console.log(report.join('\n'));
const tot = leadViol + leakViol + defabViol + metaViol;
console.log(`\nLeads >40w: ${leadViol} | ** leaks: ${leakViol} | de-fab: ${defabViol} | meta>160: ${metaViol} | TOTAL: ${tot}`);
process.exit(tot > 0 ? 1 : 0);
