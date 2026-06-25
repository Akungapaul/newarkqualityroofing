// Deterministic ≤40w lead trims for the components-specialty articles sub-batch.
// Sets each (articleId, field) -> full new value on _authored.json. 'sNb0' sets
// a.sections[N].body[0]. Every fact/source preserved; long first sentences split at a
// clause boundary so the FIRST SENTENCE is ≤40w.
// Run: node .planning/content-system/articles-batch/_apply-trims.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const F = join(HERE, '_authored.json');
const data = JSON.parse(readFileSync(F, 'utf8'));
const byId = new Map(data.articles.map((a) => [a.articleId, a]));

const TRIMS = [
  // comparisons batch: 1 lead offender — split the first sentence at a clause boundary so it is <=40w. Every fact + source preserved.
  // 1) architectural-vs-3-tab-shingles-buyers-guide s1b0 (44w 1st sentence) — split after the ASCE 7-16 design-wind clause; 3-tab 60 mph + sources move to a 2nd sentence.
  ['architectural-vs-3-tab-shingles-buyers-guide', 's1b0', "**Architectural shingles** fit Essex County's wind exposure better than **3-tab shingles**, with a 110-130 mph wind warranty that meets the ~110-115 mph ASCE 7-16 design wind mapped for the county. Standard 3-tab warrants only about 60 mph, per ASCE 7-16 and manufacturer warranty language."],
];

let applied = 0;
for (const [id, field, value] of TRIMS) {
  const a = byId.get(id);
  if (!a) { console.error(`MISSING article ${id}`); process.exit(1); }
  if (field === 'directAnswer') {
    a.directAnswer = value;
  } else {
    const m = field.match(/^s(\d+)b0$/);
    if (!m) { console.error(`bad field ${field}`); process.exit(1); }
    const idx = Number(m[1]);
    if (!a.sections[idx]) { console.error(`${id} has no section ${idx}`); process.exit(1); }
    a.sections[idx].body[0] = value;
  }
  applied += 1;
}

writeFileSync(F, JSON.stringify({ articles: data.articles }, null, 2));
console.log(`Applied ${applied} trims -> ${F}`);
