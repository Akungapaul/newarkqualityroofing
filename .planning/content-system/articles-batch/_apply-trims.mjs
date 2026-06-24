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
  ['gutter-installation-repair-signs', 's3b0', "**A gutter earns a repair when the damage is localized** to a single seam, hanger, or section still inside its service life. A replacement fits when corrosion, sagging, or leaks recur across the whole run, per the InterNACHI Estimated Life Expectancy Chart and Englert. A copper system reaching 50-plus years or an aluminum run at 20 to 40-plus years, per the InterNACHI chart, justifies spot fixes; a galvanized steel gutter near its 20-year mark that leaks at multiple joints points toward a new system. Matching the symptom to the system's age and material decides which path protects the fascia, soffit, and foundation that the gutters guard."],
  ['gutter-installation-repair-cost-guide', 's2b0', "**Repair holds the better value when damage is localized to a seam, hanger, or single section still inside its service life.** Replacement becomes the value choice when corrosion, sagging, or leaks recur across the run, per the InterNACHI Estimated Life Expectancy Chart and Englert. A repair at $100 to $450 per HomeGuide addresses an isolated problem, while a system failing repeatedly along its length points toward installation at $12 to $25 per linear foot."],
  ['fascia-installation-repair-decision', 's1b0', "**A fascia repair begins by tracing the failure to its water source before any board comes off**, because fascia rot starts at the moisture path, a clogged or loose gutter, or a failed slope, not at the board itself. InterNACHI frames the diagnostic order this way so the repair corrects the cause instead of replacing wood that rots again."],
  ['roof-waterproofing-signs', 's0b0', "**Brown or yellow ceiling and wall stains near the eaves after a winter thaw signal meltwater backing under the covering at an unprotected edge.** An ice barrier extending from the eave to at least 24 inches inside the exterior wall line resists this under IRC R905.1.2. The stain appears where water passes the field of the shingles and reaches the deck at the most exposed edge of the roof."],
  ['roof-waterproofing-signs', 's2b0', "**Ponding water held on a low-slope roof more than 48 hours after rain is a defect that breaks down the membrane.** A flat roof needs at least 1/4 inch per foot of positive slope to drain, per the NRCA and ARMA. Standing water that lingers past that 48-hour mark accelerates membrane deterioration, marking a low-slope section where the waterproofing layer and its drainage no longer perform."],
  ['roof-deck-repair-replacement-signs', 's0b0', "**Daylight through the deck, soft or spongy wood, sag between rafters, delaminated plywood, swollen OSB edges, and underside stains or mold** are the clearest signs of a failing roof deck. InterNACHI and GAF inspection guidance treat each as evidence of decayed sheathing rather than a cosmetic defect. Daylight visible through the deck from inside the attic is a direct breach in the sheathing that points toward replacement, not a surface patch."],
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
