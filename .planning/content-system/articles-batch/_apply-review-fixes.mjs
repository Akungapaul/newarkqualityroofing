// REVIEW-confirmed fixes for the comparisons articles sub-batch (9/9).
// 20 reviewer findings (1 high, 2 med, 17 low) + orchestrator cross-file sweep
// (4 extra phantom-attribution leaks the per-article reviewers missed + the banned
// NRCA "up to 25%" ventilation stat in BOTH cheapest-vs-durable articles).
// Entry: [articleId, field, oldSub, newSub]; field = 'directAnswer' | 'sNbM'.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const HERE = dirname(fileURLToPath(import.meta.url));
const F = join(HERE, '_authored.json');
const data = JSON.parse(readFileSync(F, 'utf8'));
const byId = new Map(data.articles.map((a) => [a.articleId, a]));

const R = [
  // ── Phantom internal-scaffold attribution leaks (8; "the gold source context" / "per the gold comparison[ data]") ──
  ['asphalt-shingles-vs-metal-roofing-expert-picks', 's0b3',
    'the widest color and profile range, per the gold source context, a point that favors',
    'the widest color and profile range, a point that favors'],
  ['asphalt-shingles-vs-metal-roofing-expert-picks', 's2b1',
    'first flagged assumption, and the gold source context corrects it: metal',
    'first flagged assumption, and the system\'s construction corrects it: metal'],
  ['standing-seam-vs-corrugated-metal-buyers-guide', 's0b2',
    "standing seam's clip-set field, per the gold comparison, which keeps",
    "standing seam's clip-set field, which keeps"],
  ['standing-seam-vs-corrugated-metal-buyers-guide', 's2b1',
    'while corrugated needs periodic re-fastening, per the gold comparison.',
    'while corrugated needs periodic re-fastening as its gaskets degrade.'],
  ['standing-seam-vs-corrugated-metal-expert-picks', 's0b1',
    'that each form a potential leak point, per the gold comparison data.',
    'that each form a potential leak point.'],
  ['standing-seam-vs-corrugated-metal-expert-picks', 's1b2',
    'needs periodic re-fastening as gaskets degrade per the gold comparison data, while standing seam requires',
    'needs periodic re-fastening as gaskets degrade, while standing seam requires'],
  ['standing-seam-vs-corrugated-metal-expert-picks', 's1b3',
    'standing seam installs slower due to clip precision, per the gold comparison data, so the lower install cost',
    'standing seam installs slower due to clip precision, so the lower install cost'],
  ['rubber-roofing-vs-tpo-expert-picks', 's0b2',
    'while TPO ships white from the factory, per the gold comparison and the CRRC.',
    'while TPO ships white from the factory, per the CRRC.'],

  // ── HIGH: spray-foam fabricated "Climate Zone 4A-5"+"heating penalty" not in its pack/gold (other energy articles keep it because THEIR packs do) ──
  ['spray-foam-vs-tpo-buyers-guide', 's1b1',
    "the DOE — a daytime cooling edge that Newark's Climate Zone 4A–5 winters partly offset with a heating penalty.",
    "the DOE — a daytime cooling edge that northern New Jersey's heating-dominated winters partly offset."],

  // ── Math error: BUR 30 - modified bitumen 20 = a decade, not half a decade (inherited from gold/pack; fix both articles) ──
  ['built-up-roofing-vs-modified-bitumen-buyers-guide', 's0b0',
    'so BUR leads on service life by half a decade while',
    'so BUR leads on service life by a decade while'],
  ['built-up-roofing-vs-modified-bitumen-expert-picks', 's0b0',
    "modified bitumen's 20, a half-decade edge that anchors",
    "modified bitumen's 20, a ten-year edge that anchors"],

  // ── Lead first-sentence >40w (6; the lead-audit under-counts statute periods, so trust REVIEW) ──
  ['standing-seam-vs-corrugated-metal-buyers-guide', 's1b0',
    'while corrugated gaskets harden and crack under the NOAA 1991-2020 Newark Liberty normals (~31.5 in. annual snowfall, January low near 25.5 degrees F).',
    'while corrugated gaskets harden and crack under the NOAA 1991-2020 Newark Liberty climate normals.'],
  ['roof-overlay-vs-tear-off-buyers-guide', 's1b0',
    'bars any recover over a deteriorated deck, per the NJ Rehabilitation Subcode.',
    'bars any recover over a deteriorated deck.'],
  ['best-roofing-material-nj-weather-expert-picks', 's2b0',
    'the N.J.A.C. 5:23 code path, each of which a registered NJ contractor\'s free written estimate resolves before material is ordered.',
    'the N.J.A.C. 5:23 code path, which a registered NJ contractor\'s free written estimate resolves.'],
  ['best-roofing-for-historic-homes-nj-expert-picks', 's2b0',
    'per N.J.S.A. 40:55D-107, not National Register or NJ Register listing, which places no restriction on a private owner using private funds per the National Park Service and the NJ DEP Historic Preservation Office.',
    'per N.J.S.A. 40:55D-107. National Register or NJ Register listing places no restriction on a private owner using private funds, per the National Park Service and the NJ DEP Historic Preservation Office.'],
  ['diy-vs-professional-roof-repair-buyers-guide', 's2b0',
    'with no dollar threshold — it is a registration, not a license, because New Jersey issues no roofing license.',
    'with no dollar threshold — it is a registration, not a license.'],
  ['roof-warranty-comparison-guide-expert-picks', 's2b0',
    'under N.J.A.C. 13:45A-16.2(a)12, whose enumerated elements include any guarantee or warranty the contractor provides.',
    'under N.J.A.C. 13:45A-16.2(a)12. The regulation\'s enumerated contract elements include any guarantee or warranty the contractor provides.'],

  // ── Source-attribution precision: MCA over-credited on the non-absorptive/freeze-thaw property (pack lists it unsourced) ──
  ['metal-vs-tile-roofing-expert-picks', 's0b2',
    'concealed fasteners that reduce leak points, and notes that metal is non-absorptive',
    'concealed fasteners that reduce leak points; metal is also non-absorptive'],

  // ── Banned NRCA "up to 25%" ventilation stat (removed site-wide in prior batches) — BOTH cheapest-vs-durable articles ──
  ['cheapest-vs-most-durable-roofing-buyers-guide', 's1b2',
    'Attic ventilation extends roof life up to 25 percent by reducing heat-driven volatile loss and thermal cycling, per NRCA, and that same plus-or-minus-40-percent variance means install quality and deck condition move the realized cost per year as much as the headline lifespan.',
    'Install quality and deck condition move the realized cost per year as much as the headline lifespan, because ventilation, fastening, and the deck\'s condition decide whether a covering reaches its rated life.'],
  ['cheapest-vs-most-durable-roofing-expert-picks', 's1b1',
    '**Attic ventilation** extends roof life up to 25% by reducing heat-driven volatile loss and thermal cycling, per the NRCA, so a sourced lifespan assumes the deck breathes rather than bakes the covering from beneath.',
    '**Attic ventilation** reduces the heat-driven volatile loss and thermal cycling that age a covering from beneath, so a sourced lifespan assumes the deck breathes rather than bakes.'],

  // ── R3 bold-continuity (2 clean re-anchors to a lead topic) ──
  ['solar-shingles-vs-solar-panels-expert-picks', 's0b3',
    '**The warranty** on either path reads as two parts rather than a single certification tier:',
    '**Solar shingles and solar panels** each carry a two-part warranty rather than a single certification tier:'],
  ['solar-shingles-vs-solar-panels-expert-picks', 's2b3',
    '**The output-per-area read** reinforces the same conclusion for the limited south-facing roof area common on densely built Essex County lots:',
    '**Solar panels** also reinforce that conclusion for the limited south-facing roof area common on densely built Essex County lots:'],
];

let ok = 0, bad = 0;
for (const [id, field, oldSub, newSub] of R) {
  const a = byId.get(id);
  if (!a) { console.error(`MISS article ${id}`); bad++; continue; }
  if (field === 'directAnswer') {
    if (!a.directAnswer.includes(oldSub)) { console.error(`MISS ${id} directAnswer`); bad++; continue; }
    a.directAnswer = a.directAnswer.replace(oldSub, newSub); ok++;
  } else {
    const m = field.match(/^s(\d+)b(\d+)$/);
    const si = Number(m[1]), bi = Number(m[2]);
    const cur = a.sections[si]?.body[bi];
    if (cur == null || !cur.includes(oldSub)) { console.error(`MISS ${id} ${field}`); bad++; continue; }
    a.sections[si].body[bi] = cur.replace(oldSub, newSub); ok++;
  }
}
console.log(`review fixes applied ${ok}, missed ${bad} of ${R.length}`);
if (bad) process.exit(1);
writeFileSync(F, JSON.stringify({ articles: data.articles }, null, 2));
console.log('wrote _authored.json');
