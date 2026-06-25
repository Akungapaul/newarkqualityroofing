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
  // replacement-sub-pages batch: 3 lead offenders — split at a clause boundary / shorten the directAnswer bold span. Every fact + source preserved.
  // 1) full-roof-tear-off-signs s2b0 (45w 1st sentence) — split after the InterNACHI cite.
  ['full-roof-tear-off-signs', 's2b0', "**A roof past its material lifespan with widespread granule loss** favors a full tear-off, because 3-tab asphalt lasts about 20 years and architectural asphalt about 30 years, per the InterNACHI life-expectancy chart. Beyond that age, a recover delivers a shortened service life over an aged base."],
  // 2) full-roof-tear-off-decision directAnswer (41w bold span) — shorten the bold span, move the statute to an unbolded tail.
  ['full-roof-tear-off-decision', 'directAnswer', "**A full roof tear off becomes the only code-compliant path once a roof carries two covering layers or the deck is water-soaked**, the New Jersey two-layer limit that N.J.A.C. 5:23-6.4 sets, removing the overlay option."],
  // 3) roof-overlay-installation-cost-guide s2b0 (56w 1st sentence) — split after the Angi cite.
  ['roof-overlay-installation-cost-guide', 's2b0', "**An overlay's lower upfront price trades against a roughly 20-30% shorter shingle life**, because trapped heat runs the new shingles hotter than designed, a national industry estimate per Angi. A 30-year architectural shingle delivers closer to 20-24 years over an overlay, against the InterNACHI 3-tab life of 20 years and architectural life of 30 years."],
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
