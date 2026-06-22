// ─── Articles Batch answer-first lead + leak + de-fab audit ──────────────────
// Per the CMP/combo/hub lesson: per-item reviewers under-flag systematic R2 (≤40w)
// overruns, so word-count EVERY answer-first lead + scan raw fields for ** leaks
// + de-fab literals + meta caps across the article-content objects.
//
// Run (post-assembly, all):   npx tsx .planning/content-system/articles-batch/audit-leads.ts
//      scoped to a sub-batch:  npx tsx .planning/content-system/articles-batch/audit-leads.ts --ids=homepage-nj-roofing-guide,...
import { getAllArticleContent } from '../../../src/data/article-content';

const ARGV = process.argv.slice(2);
const idArg = ARGV.find((a) => a.startsWith('--ids='));
const ID_FILTER = new Set((idArg ? idArg.slice('--ids='.length) : '').split(',').map((s) => s.trim()).filter(Boolean));
const inScope = (id: string) => ID_FILTER.size === 0 || ID_FILTER.has(id);

const LIMIT = 40;
const META_MAX = 160;
const strip = (s: string) => s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
const words = (s: string) => strip(s).split(' ').filter(Boolean).length; // " — " counts as a token
const firstSentence = (s: string) => strip(s).split(/(?<=[.!?])\s/)[0] || strip(s);
// directAnswer R2 cap is the BOLD SPAN (Batch-4 lesson), not the full sentence.
const boldSpan = (s: string) => { const m = s.match(/\*\*([\s\S]*?)\*\*/); return m ? m[1].replace(/\s+/g, ' ').trim() : strip(s); };
// Same de-fab family the gate enforces (audit-semantics R10), incl. HAAG brand + cert self-claims.
const DEFAB = /GAF[-\s]?certified|same-?day|24\s*\/\s*7|24-7|0\s*%?\s*financing|500\+|top-?rated|15\+\s*years|hundreds of (projects|homes)|master[-\s]elite|HAAG|manufacturer-certified|certainteed select/i;
const RAW_LEAK = (s: string) => s.includes('**');

let leadViol = 0, leakViol = 0, defabViol = 0, metaViol = 0, total = 0;
const report: string[] = [];

for (const c of getAllArticleContent()) {
  if (!inScope(c.articleId)) continue;
  total += 1;

  // Answer-first leads (≤40w):
  const leads: Array<[string, number]> = [];
  if (c.directAnswer) leads.push(['directAnswer(bold)', words(boldSpan(c.directAnswer))]);
  c.sections.forEach((s, i) => leads.push([`sections[${i}].body[0](1st)`, words(firstSentence(s.body[0]))]));
  for (const [field, w] of leads) {
    if (w > LIMIT) { leadViol++; report.push(`  ✗ ${c.articleId} ${field}: ${w}w`); }
  }

  // ** leaks in raw fields NOT rendered through parseRichText (metas + section headings):
  const rawFields: Array<[string, string]> = [
    ['metaDescription', c.metaDescription],
    ['ctaHeading', c.ctaHeading],
    ...c.sections.map((s, i) => [`sections[${i}].heading`, s.heading] as [string, string]),
  ];
  for (const [field, text] of rawFields) {
    if (RAW_LEAK(text)) { leakViol++; report.push(`  ✗ ${c.articleId} ${field}: ** leak`); }
  }

  const allText = JSON.stringify(c);
  if (DEFAB.test(allText)) { defabViol++; report.push(`  ✗ ${c.articleId}: de-fab literal -> ${(allText.match(DEFAB) || [])[0]}`); }

  if (c.metaDescription.length > META_MAX) { metaViol++; report.push(`  ✗ ${c.articleId} metaDescription: ${c.metaDescription.length} chars (>${META_MAX})`); }
}

console.log(`Articles Batch — ${total} article(s) audited${ID_FILTER.size ? ` (ids=${[...ID_FILTER].join(',')})` : ''}`);
if (report.length) console.log(report.join('\n'));
const tot = leadViol + leakViol + defabViol + metaViol;
console.log(`\nLeads >40w: ${leadViol} | ** leaks: ${leakViol} | de-fab: ${defabViol} | meta caps: ${metaViol} | TOTAL: ${tot}`);
process.exit(tot > 0 ? 1 : 0);
