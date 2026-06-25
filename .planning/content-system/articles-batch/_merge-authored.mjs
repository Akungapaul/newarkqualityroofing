// Merge the 60 per-article authored JSON files (authored/<id>.json) into _authored.json
// ({articles:[...]}), validating shape + reporting meta>160 / missing / malformed.
// Run: node .planning/content-system/articles-batch/_merge-authored.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ADIR = join(HERE, 'authored');
const OUT = join(HERE, '_authored.json');

// Comparisons (sub-batch 9/9, FINAL): 30 comparisons x 2 articles = 60.
// position 1 = buyers-guide, position 2 = expert-picks.
const COMPARISONS = [
  'asphalt-shingles-vs-metal-roofing',
  'slate-vs-tile-roofing',
  'tpo-vs-epdm-roofing',
  'metal-vs-tile-roofing',
  'asphalt-vs-slate-roofing',
  'wood-shake-vs-asphalt-shingles',
  'pvc-vs-tpo-roofing',
  'standing-seam-vs-corrugated-metal',
  'modified-bitumen-vs-tpo',
  'rubber-roofing-vs-tpo',
  'cedar-shake-vs-wood-shingle',
  'built-up-roofing-vs-modified-bitumen',
  'spray-foam-vs-tpo',
  'green-roof-vs-traditional-roofing',
  'solar-shingles-vs-solar-panels',
  'roof-repair-vs-replacement',
  'roof-coating-vs-replacement',
  'roof-overlay-vs-tear-off',
  'patching-vs-full-roof-repair',
  'preventive-maintenance-vs-emergency-repair',
  'best-roofing-material-nj-weather',
  'best-commercial-roofing-material',
  'best-roofing-for-flat-roofs',
  'best-roofing-for-historic-homes-nj',
  'cheapest-vs-most-durable-roofing',
  'most-energy-efficient-roofing-materials',
  'architectural-vs-3-tab-shingles',
  'diy-vs-professional-roof-repair',
  'best-roofing-for-essex-county-colonial-homes',
  'roof-warranty-comparison-guide',
];
const ORDER = COMPARISONS.flatMap((c) => [`${c}-buyers-guide`, `${c}-expert-picks`]);

const REQ = ['articleId', 'directAnswer', 'intro', 'sections', 'conclusion', 'ctaHeading', 'ctaText', 'metaDescription'];
const articles = [];
const problems = [];

for (const id of ORDER) {
  const f = join(ADIR, `${id}.json`);
  if (!existsSync(f)) { problems.push(`MISSING FILE ${id}.json`); continue; }
  let a;
  try { a = JSON.parse(readFileSync(f, 'utf8')); }
  catch (e) { problems.push(`PARSE FAIL ${id}: ${e.message}`); continue; }
  for (const k of REQ) if (!(k in a)) problems.push(`${id}: missing key "${k}"`);
  if (a.articleId !== id) problems.push(`${id}: articleId mismatch ("${a.articleId}")`);
  if (!Array.isArray(a.sections) || a.sections.length < 2 || a.sections.length > 4) problems.push(`${id}: sections count ${a.sections ? a.sections.length : '?'} (need 2-4)`);
  if (a.sections) a.sections.forEach((s, i) => {
    if (!s.heading) problems.push(`${id} s${i}: no heading`);
    if (!Array.isArray(s.body) || s.body.length < 1 || s.body.length > 4) problems.push(`${id} s${i}: body count ${s.body ? s.body.length : '?'} (need 1-4)`);
  });
  if (a.metaDescription && a.metaDescription.length > 160) problems.push(`${id}: metaDescription ${a.metaDescription.length}c (>160)`);
  articles.push(a);
}

if (articles.length !== ORDER.length) problems.push(`have ${articles.length}/${ORDER.length} articles`);

writeFileSync(OUT, JSON.stringify({ articles }, null, 2));
console.log(`wrote ${articles.length}/${ORDER.length} -> ${OUT}`);
for (const a of articles) console.log(`  - ${a.articleId} (${a.sections ? a.sections.length : '?'} sec, meta ${a.metaDescription ? a.metaDescription.length : '?'}c)`);
if (problems.length) { console.log(`\nPROBLEMS (${problems.length}):`); for (const p of problems) console.log(`  ✗ ${p}`); process.exit(1); }
console.log('\nAll 60 present and well-formed.');
