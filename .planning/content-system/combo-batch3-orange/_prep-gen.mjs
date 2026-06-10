#!/usr/bin/env node
// PREP generator for Combo Batch 3 (Orange).
// Builds _PREP-map.json + _combos.json from:
//   - the actual on-disk export names in src/data/combo-content/orange/*.ts (ground truth)
//   - Newark's _PREP-map.json (serviceId -> categoryFile + packs; city-independent)
//   - src/generated/url-classification.json (per-slug verdict; slug = `${serviceId}-orange-nj`)
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src/data/combo-content/orange');
const NEWARK_MAP = path.join(ROOT, '.planning/content-system/combo-batch1-newark/_PREP-map.json');
const CLASS = path.join(ROOT, 'src/generated/url-classification.json');
const OUT = path.join(ROOT, '.planning/content-system/combo-batch3-orange');

const newark = JSON.parse(fs.readFileSync(NEWARK_MAP, 'utf8'));
const byService = new Map(newark.map((r) => [r.serviceId, r]));

const cls = JSON.parse(fs.readFileSync(CLASS, 'utf8'));
const keep = new Set(cls.keep || []);
const noindex = new Set(cls.noindex || []);
const redirects = new Set(Object.keys(cls.redirects || {}));
const verdictOf = (slug) =>
  redirects.has(slug) ? 'redirect' : keep.has(slug) ? 'keep' : noindex.has(slug) ? 'noindex' : 'unknown';

const files = fs
  .readdirSync(SRC)
  .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
  .map((f) => f.replace(/\.ts$/, ''))
  .sort();

if (files.length !== 65) throw new Error(`Expected 65 orange files, found ${files.length}`);

const rows = [];
const problems = [];
for (const serviceId of files) {
  const txt = fs.readFileSync(path.join(SRC, `${serviceId}.ts`), 'utf8');
  const m = txt.match(/export const (\w+): ComboContent =/);
  if (!m) { problems.push(`${serviceId}: no export const found`); continue; }
  const exportName = m[1];
  if (!/^orange/.test(exportName)) problems.push(`${serviceId}: export "${exportName}" not orange-prefixed`);
  const nm = byService.get(serviceId);
  if (!nm) { problems.push(`${serviceId}: missing from Newark map`); continue; }
  const slug = `${serviceId}-orange-nj`;
  const verdict = verdictOf(slug);
  if (verdict === 'unknown') problems.push(`${serviceId}: verdict unknown for ${slug}`);
  rows.push({ file: serviceId, serviceId, exportName, categoryFile: nm.categoryFile, packs: nm.packs, verdict });
}

if (problems.length) { console.error('PROBLEMS:\n' + problems.join('\n')); process.exit(1); }

// _PREP-map.json (full)
fs.writeFileSync(path.join(OUT, '_PREP-map.json'), JSON.stringify(rows, null, 2) + '\n');
// _combos.json (compact: s/e/f/p/v) — consumed by the author workflow + assemble.mjs
const compact = rows.map((r) => ({ s: r.serviceId, e: r.exportName, f: r.categoryFile, p: r.packs, v: r.verdict }));
fs.writeFileSync(path.join(OUT, '_combos.json'), JSON.stringify(compact) + '\n');

const tally = rows.reduce((a, r) => ((a[r.verdict] = (a[r.verdict] || 0) + 1), a), {});
console.log(`Wrote _PREP-map.json + _combos.json for ${rows.length} orange combos`);
console.log('Verdicts:', JSON.stringify(tally));
