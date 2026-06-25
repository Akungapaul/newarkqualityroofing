// Merge the 42 per-article authored JSON files (authored/<id>.json) into _authored.json
// ({articles:[...]}), validating shape + reporting meta>160 / missing / malformed.
// Run: node .planning/content-system/articles-batch/_merge-authored.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ADIR = join(HERE, 'authored');
const OUT = join(HERE, '_authored.json');

// Replacement Sub-Pages: 14 services x 3 articles = 42.
const SERVICES = [
  'full-roof-tear-off',
  'roof-overlay-installation',
  're-roofing',
  'insurance-roof-replacement',
  'storm-damage-roof-replacement',
  'aging-roof-replacement',
  'roof-replacement-after-leak',
  'fire-damage-roof-replacement',
  'asphalt-shingle-roof-replacement',
  'metal-roof-replacement',
  'slate-roof-replacement',
  'tile-roof-replacement',
  'flat-roof-replacement',
  'cedar-shake-roof-replacement',
];
const ORDER = SERVICES.flatMap((s) => [`${s}-signs`, `${s}-cost-guide`, `${s}-decision`]);

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
console.log('\nAll 42 present and well-formed.');
