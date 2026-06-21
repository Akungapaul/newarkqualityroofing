/**
 * Cross-city near-duplicate analysis for the service×city combo pages
 * (19-city: Newark + East Orange + Orange + Irvington + Bloomfield + Belleville + Nutley + Maplewood
 *  + South Orange + West Orange + Montclair + Glen Ridge + Verona + Cedar Grove + Caldwell
 *  + North Caldwell + Essex Fells + Fairfield + Roseland).
 * Doorway risk = the SAME service rendered near-identically across DIFFERENT cities.
 *
 * Batch 10 adds the caldwells-roseland archetype (caldwell, north-caldwell, essex-fells, fairfield,
 * roseland) — a 5-city batch, so a dedicated CALDWELLS-ROSELAND internal-pairs section surfaces all
 * C(5,2)=10 in-archetype sibling pairs explicitly as the primary differentiate target.
 *
 * Run: npx tsx .planning/content-system/combo-batch10-caldwells-roseland/_dup-analysis.ts
 */
import { getAllComboContent } from '../../../src/data/combo-content';

const REWRITTEN = ['newark', 'east-orange', 'orange', 'irvington', 'bloomfield', 'belleville', 'nutley', 'maplewood', 'south-orange', 'west-orange', 'montclair', 'glen-ridge', 'verona', 'cedar-grove', 'caldwell', 'north-caldwell', 'essex-fells', 'fairfield', 'roseland'];
const FOCUS = ['caldwell', 'north-caldwell', 'essex-fells', 'fairfield', 'roseland']; // this batch's cities
const CALDWELLS_ROSELAND = ['caldwell', 'north-caldwell', 'essex-fells', 'fairfield', 'roseland']; // in-archetype siblings (all C(5,2)=10 internal pairs)
const K = 8; // shingle size (words)

type Combo = ReturnType<typeof getAllComboContent>[number];

const norm = (s: string) =>
  s.toLowerCase()
    .replace(/\*\*/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
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
const byKey = new Map<string, Rec>();
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

const stats = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const q = (p: number) => s[Math.min(s.length - 1, Math.floor(p * s.length))];
  return { min: s[0], p25: q(0.25), med: q(0.5), p75: q(0.75), p90: q(0.9), max: s[s.length - 1], mean: xs.reduce((a, b) => a + b, 0) / xs.length };
};
const f = (n: number) => (n * 100).toFixed(1) + '%';

console.log(`Combos: ${all.length} | services: ${serviceList.length} | cities: ${cityList.length} | rewritten: ${REWRITTEN.join(', ')}`);
console.log(`Shingle size k=${K} words. Jaccard >~0.50 = strong near-duplicate; overlap-coeff >~0.60 = differentiate candidate.\n`);

const aj = stats(A.map((x) => x.j));
console.log(`═══ BUCKET A — REWRITTEN ↔ REWRITTEN (all ${cityPairs.length} city-pairs × service), ${A.length} pairs ═══`);
console.log(`  8-gram Jaccard:  min ${f(aj.min)} | median ${f(aj.med)} | p75 ${f(aj.p75)} | p90 ${f(aj.p90)} | max ${f(aj.max)} | mean ${f(aj.mean)}`);
const aFlag = A.filter((x) => x.j >= 0.5).sort((a, b) => b.j - a.j);
console.log(`  pairs with Jaccard ≥ 50% (near-dup): ${aFlag.length}`);
console.log(`  TOP 12 most-similar rewritten pairs:`);
A.slice().sort((a, b) => b.j - a.j).slice(0, 12).forEach((x) => console.log(`    ${f(x.j).padStart(6)} J | ${f(x.ov).padStart(6)} ov | ${f(x.exact).padStart(6)} exact  ${x.svc}  (${x.pair})`));

// ── FOCUS: each new city's worst rewritten-pair per service (differentiate candidates) ──
for (const FC of FOCUS) {
  const focusRows = serviceList.map((svc) => {
    const rows = A.filter((x) => x.svc === svc && (x.c1 === FC || x.c2 === FC));
    const worst = rows.sort((a, b) => b.j - a.j)[0];
    return worst ? { svc, j: worst.j, ov: worst.ov, pair: worst.pair } : null;
  }).filter(Boolean) as { svc: string; j: number; ov: number; pair: string }[];
  const focusFlag = focusRows.filter((x) => x.j >= 0.5 || x.ov >= 0.6).sort((a, b) => b.j - a.j);
  console.log(`\n═══ ${FC.toUpperCase()} FOCUS — worst rewritten-pair per service ═══`);
  console.log(`  services where ${FC} ≥50% J OR ≥60% overlap vs a done city: ${focusFlag.length}`);
  focusFlag.slice(0, 12).forEach((x) => console.log(`    ${f(x.j).padStart(6)} J | ${f(x.ov).padStart(6)} ov  ${x.svc}  (${x.pair})`));
}

// ── CALDWELLS-ROSELAND internal pairs (all C(5,2)=10 in-archetype sibling pairs — differentiate targets) ──
const crPairs: [string, string][] = [];
for (let i = 0; i < CALDWELLS_ROSELAND.length; i++)
  for (let k = i + 1; k < CALDWELLS_ROSELAND.length; k++) crPairs.push([CALDWELLS_ROSELAND[i], CALDWELLS_ROSELAND[k]]);
// worst caldwells-roseland internal pair per service
const crRows = serviceList.map((svc) => {
  let worst: { svc: string; j: number; ov: number; pair: string } | null = null;
  for (const [p1, p2] of crPairs) {
    const a = byKey.get(`${svc}|${p1}`);
    const b = byKey.get(`${svc}|${p2}`);
    if (!a || !b) continue;
    const { j, ov } = jaccard(a.sh, b.sh);
    if (!worst || j > worst.j) worst = { svc, j, ov, pair: `${p1}↔${p2}` };
  }
  return worst;
}).filter(Boolean) as { svc: string; j: number; ov: number; pair: string }[];
const crFlag = crRows.filter((x) => x.j >= 0.5 || x.ov >= 0.6).sort((a, b) => b.j - a.j);
const crj = stats(crRows.map((x) => x.j));
console.log(`\n═══ CALDWELLS-ROSELAND internal pairs (${crPairs.length}) — worst in-archetype pair per service ═══`);
console.log(`  Jaccard:  min ${f(crj.min)} | median ${f(crj.med)} | p90 ${f(crj.p90)} | max ${f(crj.max)}`);
console.log(`  services ≥50% J OR ≥60% overlap (DIFFERENTIATE THESE): ${crFlag.length}`);
crRows.slice().sort((a, b) => b.j - a.j).slice(0, 15).forEach((x) => console.log(`    ${f(x.j).padStart(6)} J | ${f(x.ov).padStart(6)} ov  ${x.svc}  (${x.pair})`));

// ── Meta-description distinctness across all cities per service ──
let metaSvcWithDupes = 0;
for (const svc of serviceList) {
  const metas = cityList.map((ct) => byKey.get(`${svc}|${ct}`)?.meta).filter(Boolean) as string[];
  const distinct = new Set(metas.map((m) => norm(m))).size;
  if (metas.length && distinct < metas.length) metaSvcWithDupes++;
}
console.log(`\n═══ META DESCRIPTION distinctness ═══`);
console.log(`  services with ANY duplicate meta across cities: ${metaSvcWithDupes} / ${serviceList.length}`);

console.log(`\n═══ READ ═══`);
console.log(`  The CALDWELLS-ROSELAND internal-pairs section is the primary batch-10 differentiate target (in-archetype siblings).`);
console.log(`  Differentiate any service ≥60% overlap OR ≥50% Jaccard vs any committed sibling OR vs another caldwells-roseland city.`);
