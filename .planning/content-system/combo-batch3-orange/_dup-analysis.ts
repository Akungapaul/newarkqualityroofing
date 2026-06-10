/**
 * Cross-city near-duplicate analysis for the service×city combo pages (3-city: Newark + East Orange + Orange).
 * Doorway risk = the SAME service rendered near-identically across DIFFERENT cities.
 *
 * Method: extract the authored, RENDERED body content of each combo (directAnswer,
 * overview, challenges, process, faqs q+a, pricing.note — excludes site-wide template
 * chrome and the dead-code whyChooseUs), normalize, build 8-word shingles, and compute:
 *   - Jaccard(A,B)        = |∩| / |∪|   (overall passage overlap; near-dup if high)
 *   - Overlap coeff(A,B)  = |∩| / min   (is one page largely contained in the other)
 *   - Exact-string %      = identical authored strings / total
 *   - Meta-description distinctness across the 21 city versions of each service
 *
 * Run: npx tsx .planning/content-system/combo-batch3-orange/_dup-analysis.ts
 */
import { getAllComboContent } from '../../../src/data/combo-content';

const REWRITTEN = ['newark', 'east-orange', 'orange'];
const FOCUS = 'orange'; // this batch's city — surface its pairs explicitly
const K = 8; // shingle size (words)

type Combo = ReturnType<typeof getAllComboContent>[number];

const norm = (s: string) =>
  s.toLowerCase()
    .replace(/\*\*/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // strip md links, keep text
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function authoredStrings(c: Combo): string[] {
  const out: string[] = [];
  if ((c as any).directAnswer) out.push((c as any).directAnswer);
  for (const arr of [c.overview, c.challenges, c.process] as (string[] | undefined)[]) {
    if (Array.isArray(arr)) out.push(...arr);
  }
  if (Array.isArray(c.faqs)) for (const f of c.faqs) { out.push(f.question); out.push(f.answer); }
  if (c.pricing?.note) out.push(c.pricing.note);
  return out.filter(Boolean);
}

function shingles(tokens: string[], k = K): Set<string> {
  const s = new Set<string>();
  for (let i = 0; i + k <= tokens.length; i++) s.add(tokens.slice(i, i + k).join(' '));
  return s;
}

function jaccard(a: Set<string>, b: Set<string>): { j: number; ov: number } {
  if (!a.size || !b.size) return { j: 0, ov: 0 };
  let inter = 0;
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  for (const x of small) if (big.has(x)) inter++;
  const uni = a.size + b.size - inter;
  return { j: inter / uni, ov: inter / Math.min(a.size, b.size) };
}

const all = getAllComboContent();
type Rec = { strings: string[]; normStrings: Set<string>; sh: Set<string>; meta?: string; words: number };
const byKey = new Map<string, Rec>(); // `${serviceId}|${cityId}`
const services = new Set<string>();
const cities = new Set<string>();

for (const c of all) {
  services.add(c.serviceId);
  cities.add(c.cityId);
  const strs = authoredStrings(c);
  const tokens = norm(strs.join(' \n ')).split(' ').filter(Boolean);
  byKey.set(`${c.serviceId}|${c.cityId}`, {
    strings: strs,
    normStrings: new Set(strs.map(norm)),
    sh: shingles(tokens),
    meta: (c as any).metaDescription,
    words: tokens.length,
  });
}

const serviceList = [...services].sort();
const cityList = [...cities].sort();
const oldCities = cityList.filter((c) => !REWRITTEN.includes(c));

function exactPct(a: Set<string>, b: Set<string>): number {
  if (!a.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / Math.min(a.size, b.size);
}

const cityPairs: [string, string][] = [];
for (let i = 0; i < REWRITTEN.length; i++)
  for (let k = i + 1; k < REWRITTEN.length; k++) cityPairs.push([REWRITTEN[i], REWRITTEN[k]]);

// ── Bucket A: rewritten ↔ rewritten, ALL pairs per service ──
const A: { svc: string; pair: string; c1: string; c2: string; j: number; ov: number; exact: number }[] = [];
for (const svc of serviceList) {
  for (const [c1, c2] of cityPairs) {
    const a = byKey.get(`${svc}|${c1}`);
    const b = byKey.get(`${svc}|${c2}`);
    if (!a || !b) continue;
    const { j, ov } = jaccard(a.sh, b.sh);
    A.push({ svc, pair: `${c1}↔${c2}`, c1, c2, j, ov, exact: exactPct(a.normStrings, b.normStrings) });
  }
}

// ── Bucket B: old ↔ old baseline (avg pairwise per service over the un-rewritten cities) ──
const B: { svc: string; avgJ: number; maxJ: number }[] = [];
for (const svc of serviceList) {
  const recs = oldCities.map((ct) => byKey.get(`${svc}|${ct}`)).filter(Boolean) as Rec[];
  let sum = 0, n = 0, max = 0;
  for (let i = 0; i < recs.length; i++)
    for (let k = i + 1; k < recs.length; k++) {
      const { j } = jaccard(recs[i].sh, recs[k].sh);
      sum += j; n++; if (j > max) max = j;
    }
  if (n) B.push({ svc, avgJ: sum / n, maxJ: max });
}

// ── Bucket C: meta-description distinctness across all 21 cities per service ──
let metaSvcWithDupes = 0;
const metaWorst: { svc: string; distinct: number }[] = [];
for (const svc of serviceList) {
  const metas = cityList.map((ct) => byKey.get(`${svc}|${ct}`)?.meta).filter(Boolean) as string[];
  const distinct = new Set(metas.map((m) => norm(m))).size;
  if (metas.length && distinct < metas.length) metaSvcWithDupes++;
  metaWorst.push({ svc, distinct: metas.length ? distinct / metas.length : 1 });
}

// ── helpers ──
const stats = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const q = (p: number) => s[Math.min(s.length - 1, Math.floor(p * s.length))];
  return { min: s[0], p25: q(0.25), med: q(0.5), p75: q(0.75), p90: q(0.9), max: s[s.length - 1], mean: xs.reduce((a, b) => a + b, 0) / xs.length };
};
const f = (n: number) => (n * 100).toFixed(1) + '%';

console.log(`Combos: ${all.length} | services: ${serviceList.length} | cities: ${cityList.length} | rewritten: ${REWRITTEN.join(', ')}`);
console.log(`Shingle size k=${K} words. Jaccard >~0.50 = strong near-duplicate; >~0.70 = effectively duplicate.\n`);

const aj = stats(A.map((x) => x.j));
console.log(`═══ BUCKET A — REWRITTEN ↔ REWRITTEN (all ${cityPairs.length} city-pairs × service), ${A.length} pairs ═══`);
console.log(`  8-gram Jaccard:  min ${f(aj.min)} | p25 ${f(aj.p25)} | median ${f(aj.med)} | p75 ${f(aj.p75)} | p90 ${f(aj.p90)} | max ${f(aj.max)} | mean ${f(aj.mean)}`);
console.log(`  exact-identical authored strings (mean): ${f(stats(A.map((x) => x.exact)).mean)}`);
const aFlag = A.filter((x) => x.j >= 0.5).sort((a, b) => b.j - a.j);
console.log(`  pairs with Jaccard ≥ 50% (near-dup): ${aFlag.length}`);
console.log(`  TOP 12 most-similar rewritten pairs:`);
A.slice().sort((a, b) => b.j - a.j).slice(0, 12).forEach((x) => console.log(`    ${f(x.j).padStart(6)} J | ${f(x.ov).padStart(6)} ov | ${f(x.exact).padStart(6)} exact  ${x.svc}  (${x.pair})`));

// ── Orange focus: its worst pair per service (the differentiate candidates) ──
const focusRows = serviceList.map((svc) => {
  const rows = A.filter((x) => x.svc === svc && (x.c1 === FOCUS || x.c2 === FOCUS));
  const worst = rows.sort((a, b) => b.j - a.j)[0];
  return worst ? { svc, j: worst.j, ov: worst.ov, pair: worst.pair } : null;
}).filter(Boolean) as { svc: string; j: number; ov: number; pair: string }[];
const focusFlag = focusRows.filter((x) => x.j >= 0.5 || x.ov >= 0.6).sort((a, b) => b.j - a.j);
console.log(`\n═══ ${FOCUS.toUpperCase()} FOCUS — worst rewritten-pair per service (differentiate candidates) ═══`);
console.log(`  services where ${FOCUS} ≥50% J OR ≥60% overlap vs a done city: ${focusFlag.length}`);
console.log(`  TOP 10 ${FOCUS} pairs by Jaccard:`);
focusRows.slice().sort((a, b) => b.j - a.j).slice(0, 10).forEach((x) => console.log(`    ${f(x.j).padStart(6)} J | ${f(x.ov).padStart(6)} ov  ${x.svc}  (${x.pair})`));

const bj = stats(B.map((x) => x.avgJ));
console.log(`\n═══ BUCKET B — OLD ↔ OLD baseline (avg pairwise across the ${oldCities.length} un-rewritten cities), per service ═══`);
console.log(`  avg 8-gram Jaccard:  min ${f(bj.min)} | median ${f(bj.med)} | p90 ${f(bj.p90)} | max ${f(bj.max)} | mean ${f(bj.mean)}`);
console.log(`  services whose old-city versions avg ≥ 50% Jaccard: ${B.filter((x) => x.avgJ >= 0.5).length} / ${B.length}`);

console.log(`\n═══ BUCKET C — META DESCRIPTION distinctness across 21 cities ═══`);
console.log(`  services with ANY duplicate meta across cities: ${metaSvcWithDupes} / ${serviceList.length}`);
const mw = metaWorst.slice().sort((a, b) => a.distinct - b.distinct).slice(0, 6);
console.log(`  worst (distinct-meta ratio): ` + mw.map((x) => `${x.svc} ${f(x.distinct)}`).join(' · '));

console.log(`\n═══ READ ═══`);
console.log(`  A (rewritten↔rewritten) is the test of the per-city rewrite approach across all 3 done cities.`);
console.log(`  ${FOCUS.toUpperCase()} FOCUS lists the services where ${FOCUS} leans too close to a done city → differentiate.`);
console.log(`  B shows the as-is duplication of the ${oldCities.length} cities NOT yet rewritten — the risk if indexed today.`);
