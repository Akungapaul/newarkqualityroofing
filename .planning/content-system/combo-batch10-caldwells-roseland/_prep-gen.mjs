#!/usr/bin/env node
// PREP generator for Combo Batch 10 (Caldwells-Roseland — five cities, one batch).
// Builds per-city _PREP-map.json + a single combined _combos.json (325 rows) from:
//   - the actual on-disk export names in src/data/combo-content/<city>/*.ts (ground truth)
//   - Newark's _PREP-map.json (serviceId -> categoryFile + packs; city-independent)
//   - src/generated/url-classification.json (per-slug verdict; slug = `${serviceId}-${city}-nj`)
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const NEWARK_MAP = path.join(ROOT, '.planning/content-system/combo-batch1-newark/_PREP-map.json');
const CLASS = path.join(ROOT, 'src/generated/url-classification.json');
const OUT = path.join(ROOT, '.planning/content-system/combo-batch10-caldwells-roseland');
const CITIES = ['caldwell', 'north-caldwell', 'essex-fells', 'fairfield', 'roseland'];

const newark = JSON.parse(fs.readFileSync(NEWARK_MAP, 'utf8'));
const byService = new Map(newark.map((r) => [r.serviceId, r]));

const cls = JSON.parse(fs.readFileSync(CLASS, 'utf8'));
const keep = new Set(cls.keep || []);
const noindex = new Set(cls.noindex || []);
const redirects = new Set(Object.keys(cls.redirects || {}));
const verdictOf = (slug) =>
  redirects.has(slug) ? 'redirect' : keep.has(slug) ? 'keep' : noindex.has(slug) ? 'noindex' : 'unknown';

const compact = [];
for (const city of CITIES) {
  const SRC = path.join(ROOT, 'src/data/combo-content', city);
  const files = fs
    .readdirSync(SRC)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
    .map((f) => f.replace(/\.ts$/, ''))
    .sort();
  if (files.length !== 65) throw new Error(`Expected 65 ${city} files, found ${files.length}`);

  const camelCity = city.replace(/-([a-z])/g, (_, c) => c.toUpperCase()); // south-orange -> southOrange
  const rows = [];
  const problems = [];
  for (const serviceId of files) {
    const txt = fs.readFileSync(path.join(SRC, `${serviceId}.ts`), 'utf8');
    const m = txt.match(/export const (\w+): ComboContent =/);
    if (!m) { problems.push(`${city}/${serviceId}: no export const found`); continue; }
    const exportName = m[1];
    if (!exportName.toLowerCase().startsWith(camelCity.toLowerCase()))
      problems.push(`${city}/${serviceId}: export "${exportName}" not ${camelCity}-prefixed`);
    const nm = byService.get(serviceId);
    if (!nm) { problems.push(`${city}/${serviceId}: missing from Newark map`); continue; }
    const slug = `${serviceId}-${city}-nj`;
    const verdict = verdictOf(slug);
    if (verdict === 'unknown') problems.push(`${city}/${serviceId}: verdict unknown for ${slug}`);
    rows.push({ file: serviceId, serviceId, exportName, categoryFile: nm.categoryFile, packs: nm.packs, verdict });
  }
  if (problems.length) { console.error('PROBLEMS:\n' + problems.join('\n')); process.exit(1); }

  fs.writeFileSync(path.join(OUT, city, '_PREP-map.json'), JSON.stringify(rows, null, 2) + '\n');
  const tally = rows.reduce((a, r) => ((a[r.verdict] = (a[r.verdict] || 0) + 1), a), {});
  console.log(`${city}: wrote _PREP-map.json for ${rows.length} combos — verdicts ${JSON.stringify(tally)}`);

  // compact rows carry a `c` (city) field; consumed by the author workflow + assemble.mjs
  for (const r of rows)
    compact.push({ c: city, s: r.serviceId, e: r.exportName, f: r.categoryFile, p: r.packs, v: r.verdict });
}

fs.writeFileSync(path.join(OUT, '_combos.json'), JSON.stringify(compact) + '\n');
console.log(`Wrote combined _combos.json: ${compact.length} rows across ${CITIES.join(' + ')}`);
