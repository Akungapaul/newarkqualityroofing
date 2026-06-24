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
  // repair-maintenance batch: 1 lead offender (44w first sentence) — split at a clause boundary, all facts preserved.
  ['emergency-roof-repair-decision', 's2b0', "**An established local presence** matters because emergency roofing attracts door-to-door, post-storm operators. A contractor with a verifiable physical address and checkable Essex County references stays accountable after the tarp comes off — unlike an out-of-state crew that leaves before warranty obligations come due."],
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
