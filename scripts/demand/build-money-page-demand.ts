/**
 * build-money-page-demand.ts
 *
 * Aggregates the deep NJ keyword clusters (service-clusters.json) into a per-money-page
 * (service hub) demand profile. Handles the two hazards of cluster aggregation:
 *   1. cross-service overlap — generic terms ("roofing", "roofers near me") and shared
 *      variants are ATTRIBUTED to the single most-specific service (most head-tokens
 *      matched); terms matching no service head go to a GENERIC/brand bucket.
 *   2. within-service synonym inflation — keywords are grouped by stopword-stripped,
 *      order-independent token SET; only the max volume per set counts (so "roof
 *      inspection" and "inspection for roof" collapse to one).
 *
 * Output:
 *   .planning/seo/demand/money-page-demand.csv   (65 service rows + demand + GSC + tier + rec)
 *   .planning/seo/demand/money-page-demand.json  (full detail incl. top keywords + generic bucket)
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { services } from '@/data/services';

const DEMAND = resolve(process.cwd(), '.planning/seo/demand');

const HEAD_OVERRIDES: Record<string, string> = {
  'rubber-roofing-epdm': 'epdm roofing', 'roof-maintenance-programs': 'roof maintenance',
  'roof-cleaning-and-moss-removal': 'roof cleaning', 'energy-efficient-roofing-solutions': 'energy efficient roofing',
  'custom-roof-design-and-consultation': 'custom roof design', 'roof-deck-repair-and-replacement': 'roof deck repair',
  'roof-thermal-imaging-inspections': 'roof thermal imaging', 'gutter-installation-repair': 'gutter installation',
  'gutter-guard-installation': 'gutter guard installation', 'roof-vent-installation-repair': 'roof vent installation',
  'fascia-installation-repair': 'fascia repair', 'soffit-installation-repair': 'soffit repair',
  'skylight-installation-repair': 'skylight installation', 'roof-flashing-installation-repair': 'roof flashing',
  'chimney-flashing-repair': 'chimney flashing repair', 'silicone-elastomeric-roof-coating': 'silicone roof coating',
  'solar-panel-roofing-installation': 'solar roof installation', 'tpo-roofing-installation': 'tpo roofing',
};
const STRIP = [' installation and repair', ' installation repair', ' and consultation', ' and moss removal', ' programs', ' solutions'];
function shortHead(id: string, name: string): string {
  if (HEAD_OVERRIDES[id]) return HEAD_OVERRIDES[id];
  let s = name.toLowerCase();
  for (const x of STRIP) s = s.replace(x, '');
  return s.replace(/\s+/g, ' ').trim();
}

const STOP = new Set(['for', 'the', 'a', 'an', 'in', 'on', 'near', 'me', 'my', 'your', 'our', 'and', 'to', 'of', 'with', 'by', 'at', 'is', 'it', '&']);
function singular(t: string): string {
  if (t.length > 4 && t.endsWith('ies')) return t.slice(0, -3) + 'y'; // companies->company
  if (t.length > 3 && t.endsWith('s') && !t.endsWith('ss')) return t.slice(0, -1); // shingles->shingle, gutters->gutter
  return t;
}
function toks(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((t) => t && !STOP.has(t)).map(singular);
}
const setKey = (ts: string[]) => [...new Set(ts)].sort().join(' ');

// ─── CSV helpers ────────────────────────────────────────────────────────────
function parseCsv(t: string): string[][] { const R: string[][] = []; let r: string[] = [], f = '', i = 0, q = false; while (i < t.length) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i += 2; continue; } q = false; i++; continue; } f += c; i++; continue; } if (c === '"') { q = true; i++; continue; } if (c === ',') { r.push(f); f = ''; i++; continue; } if (c === '\r') { i++; continue; } if (c === '\n') { r.push(f); R.push(r); r = []; f = ''; i++; continue; } f += c; i++; } if (f.length || r.length) { r.push(f); R.push(r); } return R; }
function objs(p: string): Record<string, string>[] { if (!existsSync(p)) return []; const rows = parseCsv(readFileSync(p, 'utf8')); const h = rows[0]; return rows.slice(1).filter((x) => x.some((v) => v !== '')).map((x) => Object.fromEntries(h.map((k, i) => [k, x[i] ?? '']))); }
const esc = (v: unknown) => { const s = v == null ? '' : String(v); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };

// ─── Load ───────────────────────────────────────────────────────────────────
const clusters: Record<string, { keyword: string; volume: number }[]> = JSON.parse(readFileSync(resolve(DEMAND, 'service-clusters.json'), 'utf8'));

// Pool unique keyword → max volume seen
const pool = new Map<string, number>();
for (const arr of Object.values(clusters)) for (const k of arr) pool.set(k.keyword, Math.max(pool.get(k.keyword) ?? 0, k.volume));

// Service head-token sets (for attribution)
const svcHead = services.map((s) => ({ id: s.id, name: s.name, head: shortHead(s.id, s.name) }));
const svcHeadToks = new Map(svcHead.map((s) => [s.id, new Set(toks(s.head))]));

// Attribute each pooled keyword to the service with the MOST head-tokens fully contained.
type Attr = { serviceId: string | null; matched: number };
function attribute(keyword: string): Attr {
  const kt = new Set(toks(keyword));
  let best: Attr = { serviceId: null, matched: 0 };
  for (const s of svcHead) {
    const ht = svcHeadToks.get(s.id)!;
    if (ht.size === 0) continue;
    let all = true; for (const t of ht) if (!kt.has(t)) { all = false; break; }
    if (all && ht.size > best.matched) best = { serviceId: s.id, matched: ht.size };
    else if (all && ht.size === best.matched && best.serviceId) {
      // tie-break: prefer the service whose head volume (pool) is higher
      const cur = pool.get(shortHead(best.serviceId, services.find((x) => x.id === best.serviceId)!.name)) ?? 0;
      const cand = pool.get(s.head) ?? 0;
      if (cand > cur) best = { serviceId: s.id, matched: ht.size };
    }
  }
  return best;
}

// Build per-service attributed keyword lists + generic bucket
const attributed = new Map<string, { keyword: string; volume: number }[]>();
const generic: { keyword: string; volume: number }[] = [];
for (const [kw, vol] of pool) {
  const a = attribute(kw);
  if (a.serviceId) { if (!attributed.has(a.serviceId)) attributed.set(a.serviceId, []); attributed.get(a.serviceId)!.push({ keyword: kw, volume: vol }); }
  else generic.push({ keyword: kw, volume: vol });
}

// Per service: dedupe by token-set (max per set), sum → clusterDemand
function dedupeSum(list: { keyword: string; volume: number }[]) {
  const bySet = new Map<string, { keyword: string; volume: number }>();
  for (const k of list) { const key = setKey(toks(k.keyword)); const c = bySet.get(key); if (!c || k.volume > c.volume) bySet.set(key, k); }
  const reps = [...bySet.values()].sort((a, b) => b.volume - a.volume);
  return { total: reps.reduce((s, r) => s + r.volume, 0), reps };
}

// GSC per service hub
const gsc = new Map<string, { imp: number; clk: number; pos: number }>();
for (const r of objs(resolve(DEMAND, 'gsc-pages.csv'))) gsc.set(r.slug, { imp: +r.impressions || 0, clk: +r.clicks || 0, pos: +r.position || 0 });
const gscQ = new Map<string, { q: string; imp: number }>();
for (const r of objs(resolve(DEMAND, 'gsc-page-query.csv'))) { const imp = +r.impressions || 0; const c = gscQ.get(r.slug); if (!c || imp > c.imp) gscQ.set(r.slug, { q: r.query, imp }); }

// NJ head volume (from the prior NJ pull)
const headVol = new Map<string, number>();
for (const r of objs(resolve(DEMAND, 'dataforseo-volumes.csv'))) headVol.set(r.keyword, +r.search_volume || 0);

// ─── Re-tier on clusterDemand ───────────────────────────────────────────────
const CL_A = 3000, CL_B = 1000, CL_C = 300; // cluster-demand tiers (NJ)
const tier = (v: number) => (v >= CL_A ? 'A' : v >= CL_B ? 'B' : v >= CL_C ? 'C' : 'D');

const rows = services.map((s) => {
  const head = shortHead(s.id, s.name);
  const { total, reps } = dedupeSum(attributed.get(s.id) ?? []);
  const g = gsc.get(s.slug); const imp = g?.imp ?? 0, clk = g?.clk ?? 0, pos = g?.pos ?? 0;
  const tq = gscQ.get(s.slug);
  const t = tier(total);
  let rec = '';
  if (t === 'A' || t === 'B') rec = imp > 0 ? 'FEATURE — high demand, has traction; optimize hard' : 'FEATURE — high demand, low traction; prioritize links + on-page';
  else if (t === 'C') rec = 'KEEP — moderate demand; standard optimization';
  else rec = imp > 0 ? 'KEEP — low demand but has impressions; light-touch' : 'DEPRIORITIZE — low demand, no traction';
  return { id: s.id, name: s.name, slug: s.slug, head, headVol: headVol.get(head) ?? 0, clusterDemand: total, clusterSize: reps.length, tier: t, gscImp: imp, gscClk: clk, gscPos: pos, topQuery: tq?.q ?? '', topKeywords: reps.slice(0, 8).map((r) => `${r.keyword} (${r.volume})`), rec };
}).sort((a, b) => b.clusterDemand - a.clusterDemand);

// ─── Emit ───────────────────────────────────────────────────────────────────
const cols = ['service_id', 'service_name', 'head_keyword', 'head_nj_vol', 'cluster_demand_nj', 'cluster_size', 'demand_tier', 'gsc_impressions', 'gsc_clicks', 'gsc_position', 'gsc_top_query', 'top_cluster_keywords', 'recommendation'];
const out = [cols.join(',')];
for (const r of rows) out.push([r.id, r.name, r.head, r.headVol, r.clusterDemand, r.clusterSize, r.tier, r.gscImp, r.gscClk, r.gscPos ? r.gscPos.toFixed(1) : '', r.topQuery, r.topKeywords.join(' · '), r.rec].map(esc).join(','));
writeFileSync(resolve(DEMAND, 'money-page-demand.csv'), out.join('\n') + '\n');

const { total: genTotal, reps: genReps } = dedupeSum(generic);
const tierCounts = rows.reduce((a, r) => ((a[r.tier] = (a[r.tier] ?? 0) + 1), a), {} as Record<string, number>);
writeFileSync(resolve(DEMAND, 'money-page-demand.json'), JSON.stringify({ tierCounts, genericBrandDemand: genTotal, genericTop: genReps.slice(0, 20).map((r) => `${r.keyword} (${r.volume})`), services: rows }, null, 2));

console.log(JSON.stringify({ tierCounts, genericBrandDemand: genTotal,
  top20: rows.slice(0, 20).map((r) => `${r.tier} ${r.clusterDemand} (head ${r.headVol}, ${r.clusterSize}kw) ${r.name}`),
  bottom15: rows.slice(-15).map((r) => `${r.tier} ${r.clusterDemand} ${r.name}`) }, null, 2));
