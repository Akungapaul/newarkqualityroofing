/**
 * build-demand-classification.ts
 *
 * Joins market demand (DataForSEO) + actual demand (GSC) onto every URL-Classification
 * row and computes a demand-validated verdict.
 *
 * KEY MODELING NOTE: DataForSEO volumes are national (US, loc 2840). Head terms are
 * large; exact "{service} {city} nj" combo terms almost all floor to 0 (Google Ads
 * rounds local long-tail <10/mo to 0). So combo demand is modeled on THREE axes:
 *   1. service demand   — national head + "{head} nj" volume (is the service searched at all?)
 *   2. city demand      — "roofing {city} nj" local market size
 *   3. direct evidence  — exact combo volume (rare, strong) OR GSC impressions/position
 *
 * Inputs (.planning/seo/demand/ unless noted):
 *   ../../URL-Classification.csv, keyword-universe.json, dataforseo-volumes.csv,
 *   gsc-pages.csv, gsc-page-query.csv
 * Outputs:
 *   URL-Classification-with-demand.csv, demand-summary.json
 * Flags: --calibrate prints distributions/tables without writing.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { services } from '@/data/services';
import { cities } from '@/data/cities';

const DEMAND = resolve(process.cwd(), '.planning/seo/demand');
const ROOT = process.cwd();
const CALIBRATE = process.argv.includes('--calibrate');

// ─── Tunable thresholds ─────────────────────────────────────────────────────
// NJ-LOCAL head-volume tiers (loc "New Jersey,United States"). Re-scaled from national.
const SERVICE_A = 1000, SERVICE_B = 300, SERVICE_C = 50;
const CITY_REAL = 10;        // "roofing {city} nj" vol at/above => measurable local market (exact-phrase volume is a weak/positive-only signal)
const COMBO_EXACT_KEEP = 10; // any exact combo vol (>=10) => keep
const GSC_KEEP_IMP = 10;     // GSC impressions (16-mo) at/above => keep
const GSC_KEEP_POS = 20;     // any GSC impressions at avg position <= this => keep

// ─── CSV ────────────────────────────────────────────────────────────────────
function parseCsv(text: string): string[][] {
  const rows: string[][] = []; let row: string[] = []; let f = ''; let i = 0; let q = false;
  while (i < text.length) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i += 2; continue; } q = false; i++; continue; } f += c; i++; continue; }
    if (c === '"') { q = true; i++; continue; }
    if (c === ',') { row.push(f); f = ''; i++; continue; }
    if (c === '\r') { i++; continue; }
    if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; i++; continue; }
    f += c; i++;
  }
  if (f.length || row.length) { row.push(f); rows.push(row); }
  return rows;
}
function loadObjs(path: string): Record<string, string>[] {
  if (!existsSync(path)) return [];
  const rows = parseCsv(readFileSync(path, 'utf8'));
  if (!rows.length) return [];
  const h = rows[0];
  return rows.slice(1).filter((r) => r.some((v) => v !== '')).map((r) => Object.fromEntries(h.map((k, i) => [k, r[i] ?? ''])));
}
const esc = (v: unknown) => { const s = v == null ? '' : String(v); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
const slugFromUrl = (u: string) => u.replace(/^https?:\/\/[^/]+/, '').replace(/^\//, '').replace(/\/$/, '');

// ─── Load inputs ────────────────────────────────────────────────────────────
type Attr = { layer: string; slug: string; serviceId: string; cityId: string };
const universe: Record<string, Attr[]> = JSON.parse(readFileSync(resolve(DEMAND, 'keyword-universe.json'), 'utf8'));
const volByKw = new Map<string, { vol: number; rec: Record<string, string> }>();
for (const r of loadObjs(resolve(DEMAND, 'dataforseo-volumes.csv'))) volByKw.set(r.keyword, { vol: Number(r.search_volume || 0), rec: r });
const volOf = (kw: string) => volByKw.get(kw)?.vol ?? 0;

// service demand: national head + "{head} nj"
const svcNational = new Map<string, number>(); // serviceId -> max national-ish vol
const svcLocal = new Map<string, number>();     // serviceId -> "{head} nj" vol
const cityVol = new Map<string, number>();       // cityId -> max local roofing vol
const slugExact = new Map<string, { kw: string; vol: number; rec: Record<string, string> }>(); // slug -> exact combo/page term
for (const [kw, attrs] of Object.entries(universe)) {
  const v = volOf(kw);
  for (const a of attrs) {
    if (a.layer === 'service' && a.serviceId) {
      // "head" has no nj/city; "head nj" ends with " nj"; "head newark nj" is also combo.
      if (/ nj$/.test(kw) && !/newark nj$/.test(kw)) svcLocal.set(a.serviceId, Math.max(svcLocal.get(a.serviceId) ?? 0, v));
      else if (!/ nj$/.test(kw)) svcNational.set(a.serviceId, Math.max(svcNational.get(a.serviceId) ?? 0, v));
    }
    if (a.layer === 'city' && a.cityId) cityVol.set(a.cityId, Math.max(cityVol.get(a.cityId) ?? 0, v));
    if (a.slug) { const cur = slugExact.get(a.slug); if (!cur || v > cur.vol) slugExact.set(a.slug, { kw, vol: v, rec: volByKw.get(kw)?.rec ?? {} }); }
  }
}

// GSC
const gscPages = new Map<string, { imp: number; clk: number; pos: number }>();
for (const r of loadObjs(resolve(DEMAND, 'gsc-pages.csv'))) gscPages.set(r.slug, { imp: +r.impressions || 0, clk: +r.clicks || 0, pos: +r.position || 0 });
const gscTopQ = new Map<string, { q: string; imp: number }>();
for (const r of loadObjs(resolve(DEMAND, 'gsc-page-query.csv'))) { const imp = +r.impressions || 0; const c = gscTopQ.get(r.slug); if (!c || imp > c.imp) gscTopQ.set(r.slug, { q: r.query, imp }); }

const serviceById = new Map(services.map((s) => [s.id, s]));
const cityById = new Map(cities.map((c) => [c.id, c]));
const svcTier = (id: string) => { const v = svcNational.get(id) ?? 0; return v >= SERVICE_A ? 'A' : v >= SERVICE_B ? 'B' : v >= SERVICE_C ? 'C' : 'D'; };

// HIGH-VALUE retain-override: commercial + urgent/insurance services have low exact search
// volume but high lead value (found via "near me"/referral/urgency, not exact search).
// These are never PRUNE-recommended on volume alone — they floor at WATCH.
const HIGH_VALUE_SERVICE = new Set<string>();
for (const s of services) {
  if (s.category === 'commercial-roof-types' || s.category === 'commercial-services') HIGH_VALUE_SERVICE.add(s.id);
  if (/storm|hail|wind|fire|emergency|insurance|leak/.test(s.id)) HIGH_VALUE_SERVICE.add(s.id);
}

// ─── Combo classification ───────────────────────────────────────────────────
function classifyCombo(serviceId: string, cityId: string, slug: string) {
  const sTier = svcTier(serviceId);
  const cv = cityVol.get(cityId) ?? 0;
  const exact = slugExact.get(slug)?.vol ?? 0;
  const g = gscPages.get(slug);
  const imp = g?.imp ?? 0, pos = g?.pos ?? 0;
  const cityReal = cv >= CITY_REAL;
  const directKeep = exact >= COMBO_EXACT_KEEP || imp >= GSC_KEEP_IMP || (imp > 0 && pos > 0 && pos <= GSC_KEEP_POS);

  let verdict: 'KEEP' | 'WATCH' | 'PRUNE';
  if (directKeep) verdict = 'KEEP';
  else if ((sTier === 'A' || sTier === 'B') && cityReal) verdict = 'KEEP';
  else if (sTier === 'A' || sTier === 'B' || imp > 0 || (sTier === 'C' && cityReal)) verdict = 'WATCH';
  else verdict = 'PRUNE'; // service Tier C/D with no city market and no GSC evidence
  // High-value retain-override: commercial / urgent-intent services never drop below WATCH.
  let retained = false;
  if (verdict === 'PRUNE' && HIGH_VALUE_SERVICE.has(serviceId)) { verdict = 'WATCH'; retained = true; }
  return { verdict, sTier, cityVol: cv, exact, imp, pos, retained };
}

// ─── Walk master ────────────────────────────────────────────────────────────
const master = loadObjs(resolve(ROOT, 'URL-Classification.csv'));
const outCols = ['URL', 'Page Type', 'Tier', 'Service', 'City', 'Verdict',
  'svc_nj_vol', 'svc_nj_modified_vol', 'svc_demand_tier', 'city_local_vol', 'combo_exact_vol',
  'gsc_impressions', 'gsc_clicks', 'gsc_position', 'gsc_top_query',
  'demand_verdict', 'delta_flag'];
const out = [outCols.join(',')];
const comboDist: Record<string, number> = { KEEP: 0, WATCH: 0, PRUNE: 0, REDIRECT: 0 };
const prune: any[] = []; const promote: any[] = [];

for (const row of master) {
  const slug = slugFromUrl(row['URL']);
  const pageType = row['Page Type'];
  const sId = row['Service'], cId = row['City'];
  const sNat = sId ? (svcNational.get(sId) ?? 0) : '';
  const sNj = sId ? (svcLocal.get(sId) ?? 0) : '';
  const sTier = sId ? svcTier(sId) : '';
  const cLoc = cId ? (cityVol.get(cId) ?? 0) : '';
  const g = gscPages.get(slug); const imp = g?.imp ?? 0, clk = g?.clk ?? 0, pos = g?.pos ?? 0;
  const tq = gscTopQ.get(slug);

  let demandVerdict = '', flag = '', exact: number | string = '';
  if (pageType === 'Service+City combo') {
    if (/CONSOLIDATE/.test(row['Verdict'])) { demandVerdict = 'REDIRECT (unchanged)'; comboDist.REDIRECT++; exact = slugExact.get(slug)?.vol ?? 0; }
    else {
      const c = classifyCombo(sId, cId, slug); exact = c.exact; comboDist[c.verdict]++;
      demandVerdict = c.verdict === 'KEEP' ? 'KEEP-INDEX' : c.verdict === 'WATCH' ? 'KEEP-INDEX (watch)' : 'NOINDEX (prune candidate)';
      if (c.verdict === 'PRUNE') { flag = `PRUNE: svcTier ${c.sTier}, cityVol ${c.cityVol}, 0 GSC`; prune.push({ slug, service: sId, city: cId, sTier: c.sTier, cityVol: c.cityVol }); }
      else if (c.retained) flag = 'retained: low NJ search vol, high commercial/urgent intent';
    }
  } else {
    exact = slugExact.get(slug)?.vol ?? 0;
    demandVerdict = 'KEEP-INDEX';
    if (pageType !== 'Knowledge base article' && Number(exact) === 0 && imp === 0) flag = 'low-direct-demand money page';
  }

  out.push([row['URL'], pageType, row['Tier'], sId, cId, row['Verdict'],
    sNat, sNj, sTier, cLoc, exact, imp, clk, pos ? pos.toFixed(1) : '', tq?.q ?? '',
    demandVerdict, flag].map(esc).join(','));
}

// ─── Rankings + summary ─────────────────────────────────────────────────────
const svcRank = services.map((s) => ({ id: s.id, name: s.name, national: svcNational.get(s.id) ?? 0, nj: svcLocal.get(s.id) ?? 0, tier: svcTier(s.id) })).sort((a, b) => b.national - a.national);
const cityRank = cities.map((c) => ({ id: c.id, name: c.name, vol: cityVol.get(c.id) ?? 0 })).sort((a, b) => b.vol - a.vol);
const summary = {
  thresholds: { SERVICE_A, SERVICE_B, SERVICE_C, CITY_REAL, COMBO_EXACT_KEEP, GSC_KEEP_IMP, GSC_KEEP_POS },
  comboVerdictDistribution: comboDist,
  serviceTierCounts: svcRank.reduce((a, s) => ((a[s.tier] = (a[s.tier] ?? 0) + 1), a), {} as Record<string, number>),
  pruneCandidateCount: prune.length,
  servicesByDemand: svcRank,
  citiesByDemand: cityRank,
  pruneSample: prune.slice(0, 40),
};

if (CALIBRATE) {
  console.log(JSON.stringify({ comboVerdictDistribution: comboDist, serviceTierCounts: summary.serviceTierCounts, pruneCandidateCount: prune.length,
    allServicesByNJVol: svcRank.map((s) => `${s.tier} ${s.national} ${s.name}`),
    citiesByDemand: cityRank.map((c) => `${c.vol} ${c.name}`) }, null, 2));
} else {
  writeFileSync(resolve(DEMAND, 'URL-Classification-with-demand.csv'), out.join('\n') + '\n');
  writeFileSync(resolve(DEMAND, 'demand-summary.json'), JSON.stringify(summary, null, 2));
  console.log('Wrote URL-Classification-with-demand.csv + demand-summary.json');
  console.log(JSON.stringify({ comboVerdictDistribution: comboDist, pruneCandidateCount: prune.length, serviceTierCounts: summary.serviceTierCounts }, null, 2));
}
