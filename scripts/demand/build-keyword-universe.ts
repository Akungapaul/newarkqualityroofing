/**
 * build-keyword-universe.ts
 *
 * Deterministically derives the keyword universe for the NQR demand analysis
 * from the canonical data modules. Emits:
 *   - .planning/seo/demand/keyword-universe.csv   (one row per keyword)
 *   - .planning/seo/demand/keyword-universe.json  (join map: keyword -> [{layer,slug,serviceId,cityId}])
 *
 * No keyword/primaryKeyword fields exist on the schemas (verified), so terms are
 * derived from service.name / city.name, mirroring buildComboTitle in seo-utils.
 * Service names carry unsearched suffixes ("Installation and Repair", "Programs",
 * "Solutions"); shortHead() strips them so combo terms read like real searches
 * (e.g. "cedar shake roofing newark nj"), matching observed GSC queries.
 */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { comparisons } from '@/data/comparisons';
import { combos } from '@/data/combos';

const OUT_DIR = resolve(process.cwd(), '.planning/seo/demand');

// ─── Service short-head derivation ──────────────────────────────────────────
// Generic suffix strip + targeted overrides for terms the strip can't fix.
const HEAD_OVERRIDES: Record<string, string> = {
  'rubber-roofing-epdm': 'epdm roofing',
  'roof-maintenance-programs': 'roof maintenance',
  'roof-cleaning-and-moss-removal': 'roof cleaning',
  'energy-efficient-roofing-solutions': 'energy efficient roofing',
  'custom-roof-design-and-consultation': 'custom roof design',
  'roof-deck-repair-and-replacement': 'roof deck repair',
  'roof-thermal-imaging-inspections': 'roof thermal imaging',
  'gutter-installation-repair': 'gutter installation',
  'gutter-guard-installation': 'gutter guard installation',
  'roof-vent-installation-repair': 'roof vent installation',
  'fascia-installation-repair': 'fascia repair',
  'soffit-installation-repair': 'soffit repair',
  'skylight-installation-repair': 'skylight installation',
  'roof-flashing-installation-repair': 'roof flashing',
  'chimney-flashing-repair': 'chimney flashing repair',
  'silicone-elastomeric-roof-coating': 'silicone roof coating',
  'solar-panel-roofing-installation': 'solar roof installation',
  'tpo-roofing-installation': 'tpo roofing',
};

const STRIP = [
  ' installation and repair',
  ' installation repair',
  ' and consultation',
  ' and moss removal',
  ' programs',
  ' solutions',
];

function shortHead(serviceId: string, name: string): string {
  if (HEAD_OVERRIDES[serviceId]) return HEAD_OVERRIDES[serviceId];
  let s = name.toLowerCase();
  for (const x of STRIP) s = s.replace(x, '');
  return s.replace(/\s+/g, ' ').trim();
}

// ─── Universe assembly ──────────────────────────────────────────────────────
type Row = { layer: string; slug: string; serviceId: string; cityId: string };
const universe = new Map<string, Row[]>(); // keyword -> attribution rows

function add(keyword: string, row: Row) {
  const k = keyword.toLowerCase().replace(/\s+/g, ' ').trim();
  if (!k) return;
  if (!universe.has(k)) universe.set(k, []);
  universe.get(k)!.push(row);
}

const serviceById = new Map(services.map((s) => [s.id, s]));
const cityById = new Map(cities.map((c) => [c.id, c]));

// Services (3 variants): head, head nj, head newark nj
for (const s of services) {
  const head = shortHead(s.id, s.name);
  add(head, { layer: 'service', slug: s.slug, serviceId: s.id, cityId: '' });
  add(`${head} nj`, { layer: 'service', slug: s.slug, serviceId: s.id, cityId: '' });
  add(`${head} newark nj`, { layer: 'service', slug: s.slug, serviceId: s.id, cityId: '' });
}

// Cities (3 variants)
for (const c of cities) {
  add(`roofing ${c.name} nj`, { layer: 'city', slug: `roofing-in-${c.slug}-nj`, serviceId: '', cityId: c.id });
  add(`roofers ${c.name} nj`, { layer: 'city', slug: `roofing-in-${c.slug}-nj`, serviceId: '', cityId: c.id });
  add(`roofing contractor ${c.name} nj`, { layer: 'city', slug: `roofing-in-${c.slug}-nj`, serviceId: '', cityId: c.id });
}

// Combos (1 canonical entity term): shortHead + city + nj
for (const combo of combos) {
  const s = serviceById.get(combo.serviceId);
  const c = cityById.get(combo.cityId);
  if (!s || !c) continue;
  const head = shortHead(s.id, s.name);
  add(`${head} ${c.name} nj`, { layer: 'combo', slug: combo.slug, serviceId: s.id, cityId: c.id });
}

// Comparisons (2 variants)
for (const cmp of comparisons) {
  add(cmp.name, { layer: 'comparison', slug: cmp.slug, serviceId: '', cityId: '' });
  add(`${cmp.name} nj`, { layer: 'comparison', slug: cmp.slug, serviceId: '', cityId: '' });
}

// Core head terms
const CORE = [
  'roofing company newark nj',
  'roofing contractor nj',
  'roofing contractors nj',
  'roof repair nj',
  'roof replacement nj',
  'roofers near me newark nj',
  'roofing companies essex county nj',
  'commercial roofing nj',
  'emergency roof repair nj',
  'roof inspection nj',
  'new roof cost nj',
  'roofing newark nj',
];
for (const k of CORE) add(k, { layer: 'core', slug: '', serviceId: '', cityId: '' });

// ─── Emit ───────────────────────────────────────────────────────────────────
const keywords = [...universe.keys()].sort();
const esc = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

const header = 'keyword,layers,slugs,serviceIds,cityIds\n';
const lines = keywords.map((k) => {
  const rows = universe.get(k)!;
  const layers = [...new Set(rows.map((r) => r.layer))].join('|');
  const slugs = [...new Set(rows.map((r) => r.slug).filter(Boolean))].join('|');
  const sids = [...new Set(rows.map((r) => r.serviceId).filter(Boolean))].join('|');
  const cids = [...new Set(rows.map((r) => r.cityId).filter(Boolean))].join('|');
  return [k, layers, slugs, sids, cids].map(esc).join(',');
});
writeFileSync(resolve(OUT_DIR, 'keyword-universe.csv'), header + lines.join('\n') + '\n');
writeFileSync(
  resolve(OUT_DIR, 'keyword-universe.json'),
  JSON.stringify(Object.fromEntries(keywords.map((k) => [k, universe.get(k)])), null, 0),
);

// Summary
const byLayer: Record<string, number> = {};
for (const rows of universe.values()) {
  for (const l of new Set(rows.map((r) => r.layer))) byLayer[l] = (byLayer[l] ?? 0) + 1;
}
console.log(JSON.stringify({ totalKeywords: keywords.length, keywordsTouchingLayer: byLayer }, null, 2));
