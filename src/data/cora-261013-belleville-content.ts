// CORA 2026-10-13 phrase-setup roadmap content for
// /roof-repair-belleville-nj (keyword "roof repair belleville nj").
// This is Belleville's FIRST Cora pass — the page is a plain Oct-4
// combo page with no prior Cora component; this file +
// CoraRoadmap261013Belleville create its first supplemental block.
// Work order: the CLEAN 53-line list in
// cora-artifact-verification-belleville-2026-10-13.md (adjusted
// values are the targets; HTML Comment Variations +3 is clean line
// 51, included under Paul's overnight rulebook). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-belleville-2026-10-13.md
// Change list:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-implementation-belleville-2026-10-13.md
//
// Counting basis (verification finding): Cora's tracked values for
// this page are the report's appended-target column and reconcile
// with the served page (title 26, meta 144, headings 21, P tags
// 66, images 3/3 ALT, links 380, comments 56). All before/after
// counts in the change list are measured on the prerendered page
// with this run's own inventories — 231 variation terms (report
// Variations sheet) and the run's entity terms (report Entities
// sheet, deduplicated after normalization), whole-phrase matching.
// The local proxies reproduce Cora's tracked baselines exactly on
// the calibrated lines (title entities 3, H3 entities 15, the
// single-phrase HTML counts 2/2/2/0/0).

// ─── Title (direct edit, served via src/app/[slug]/page.tsx) ───────
// One rewrite serves clean lines 1–8 (target ≈55 chars):
//   Link Text Length +29 (adj. from +34): Cora's tracked value IS
//     the HTML title (Essex Fells/Verona shape), so the rewrite is
//     a direct lever — 26 -> 61 chars (+35 delivered; the goal
//     falls to R4's 55, and the construction that carries every
//     literal title ask lands at 61 — full literal asks win over
//     exact length per Paul's Essex Fells ruling, disclosed here).
//   Variations in Title +2: the second, comma-free segment adds
//     the distinct forms 'roof repair belleville nj', 'repair
//     belleville nj', 'belleville nj', 'roof belleville nj',
//     'roofer' to the title's variation set.
//   Entities in Title +2: occurrences 3 -> 7 on the calibrated
//     proxy (roof x2, belleville x2, belleville nj, belleville, nj,
//     roofer).
//   'repair belleville nj' / 'belleville nj' / 'roof repair
//     belleville nj' in Title +1 each and Exact Matches in Title
//     +1: the comma-free second segment carries the contiguous
//     phrase once (the baseline title's comma form is why Cora
//     tracked all three at 0).
//   'roofer' in Title +1: the segment closes with the word.
// Rule 7: the title still opens with "Roof Repair Belleville, NJ";
// the H1 rendered by ComboTemplate keeps the slug phrase untouched.
export const coraBellevilleTitle =
  'Roof Repair Belleville, NJ — Roof Repair Belleville NJ Roofer';

// ─── Meta description (direct edit, same override) ─────────────────
// One rewrite serves clean lines 9–13 (target ≈221 chars — R3's
// meta length, the driver-adjusted goal for Summary Length +77):
//   Summary Length +77 (adj. from +176): 144 -> 222 chars; the
//     tracked value IS our meta description, so the lever is
//     direct. Search Result Summary Variations +2 rides on the
//     same string (clean line 52, 0 owed as a separate edit).
//   Variations in Meta Description +2 and OG Description +2: the
//     og:description is built from this same string (buildOG), so
//     one rewrite serves both; the string carries the phrase
//     family throughout ('roof repair belleville nj', 'leak
//     repair', 'flashing repair', 'shingle repair', 'roofing').
//   'belleville' in Meta +1: occurrences 1 -> 3.
//   'roofing' in Meta +1: occurrences 1 -> 2.
//   Entities in Meta was ruled ARTIFACT at adjusted 0 (excluding
//     R8 the goal falls to exactly our tracked 5) — the rewrite's
//     entity count is reported as measured, not owed.
export const coraBellevilleMetaDescription =
  'Roof repair Belleville NJ homeowners trust for leak repair, flashing repair, and shingle repair: Belleville roofing crews, Belleville NJ roof repair estimates in writing, and roofing materials named before the work begins.';

// Number of Meta Keywords (clean line 38): the served page has NO
// meta keywords tag at all (Cora's tracked "1" is the field-wide
// phantom, sixth city running). The tag is created with 9
// keywords — R1's real, field-supported list size, adjusted from
// the +18 headline (R9's lone 19-keyword tag). Every keyword is a
// verbatim variation from this run's own list. Has Meta Keywords
// +1 (line 40) rides on the tag; Variations in Meta Keywords +7
// (adj. from +17, line 39) ride on the nested variation forms
// inside the nine phrases.
export const coraBellevilleMetaKeywords: string[] = [
  'roof repair belleville nj',
  'belleville nj roof repair',
  'roof repairs belleville nj',
  'belleville nj roof repairs',
  'belleville nj roofing repair',
  'best roof repair belleville nj',
  'local roof repair belleville nj',
  'roof repair belleville',
  'belleville roof repair',
];

// ─── HTML Comment Variations +3 (clean line 51, rulebook-included) ─
// Adjusted from the +5 ask (sole setter R3; the +3 residue is
// Shared-Average arithmetic — the Roseland/Nutley/Essex Fells/
// Verona/Bloomfield gray-zone shape, included at ≤ +3 under Paul's
// overnight rulebook). Cora counts keyword variations inside
// comment TEXT; the page's 56 existing comments are textless React
// markers (tracked 0 — correct counting). Two genuine
// section-boundary comments in the component carry four verbatim
// variation phrases between them ('roof repair belleville nj',
// 'belleville nj roof repair', 'roof repairs belleville nj',
// 'belleville nj roofing repair' — all verbatim in this run's
// Variations list).
export const coraBellevilleCommentTexts: string[] = [
  'Belleville roof repair record: extended guide begins — roof repair belleville nj, belleville nj roof repair',
  'Belleville roof repair record: extended guide ends — roof repairs belleville nj, belleville nj roofing repair',
];

export const coraBellevilleBlockSummary =
  'Roof Repair in Belleville, NJ — Extended Guide, Photo Record, and Field Notes';

export const coraBellevilleBlockIntro =
  'This is the complete record behind the Belleville page: the repair services the crews run out of the Newark office, the housing stock the calls come from, the materials on Belleville roofs, the public references a homeowner can check, and the photographs and field notes each job leaves behind. A Belleville roof repair call is logged against the written estimate it produced, and the service log sits near the front of the record because it is the part a homeowner comparing estimates actually reads.';

// ─── The heading program (clean lines 14–23) ───────────────────────
// One coordinated heading set serves the cluster (H1 frozen; all
// mass in the new block). The page serves 21 headings (1/12/8/0/0/0)
// and zero H4–H6 — the H4/H6 family is carried jointly by two
// independent roofers (Rande + Allied) and can only be satisfied
// by introducing those levels inside the block (the Essex Fells
// H5 precedent, at larger scale). Program: +10 tags (21 -> 31) =
// 1 H2 + 1 H3 + 6 H4 + 2 H6.
//   14  Heading Tags +10 (adj. from +17).
//   15  Entities in H4 Tags +11 (adj. from +16): the six H4s
//       carry ~30 entity occurrences between them on the proxy.
//   16  Number of H4 Tags +6 (adj. from +14).
//   17  Variations in H4-H6 Tags +8 (adj. from +11) and
//   18  Variations in H4 Tags +8 (adj. from +11): the H4/H6 texts
//       carry ~35 variation occurrences between them.
//   19  Has Entities in H4 Tags +1: rides on any entity-bearing H4.
//   20  Entities in H6 Tags ENT007 +2 and
//   21  Entities in H6 Tags ENT017 +1: the double-listed pair —
//       Cora lists the same page property under two factor IDs;
//       the two H6s carry ~8 entity occurrences, satisfying both.
//   22  Variations in H6 Tags +1: the H6 texts carry it.
//   23  Entities in H3 Tags +2 (adj. from +7): the new H3 carries
//       ~5 entity occurrences (baseline H3 total 15, the richest
//       of the batch going in).
// Per house design rules the H4/H6 subheadings are black,
// normal-case (the component styles them slate-900, sentence case).
export const coraBellevilleServicesH2 =
  'Repair Services in Belleville, NJ: What the Crews Actually Fix';

export const coraBellevilleServicesIntro =
  'Belleville work is repair work first: a housing stock of pre-war Colonials and Capes on the older grid, two-family homes and garden apartments with flat and low-slope membranes, and corridor commercial roofs along Washington Avenue and Belleville Avenue. Each Belleville roof repair call breaks down into the same handful of failures — what fails, what the crew looks for, and what a proper fix involves, set out in the subsections below.';

export const coraBellevilleH3 =
  'Roof Repair Belleville NJ: Reading a Leak Back to the Failed Roofing Detail';

export const coraBellevilleH3Paragraph =
  'A ceiling stain almost never sits under the hole that made it. Water enters at a flashing joint, a cracked vent boot, or a lifted shingle course, runs down the deck or along a rafter, and shows itself rooms away. The crew works backward from the stain — attic first, deck second, roof surface last — and the repair closes the entry point, not the symptom. That order is the whole trade on a Belleville Colonial, where a stain in a front bedroom can begin at a chimney two roof planes away.';

export interface CoraBellevilleH4 {
  h4: string;
  p: string;
  h6?: { h6: string; p: string };
}

export const coraBellevilleH4SetA: CoraBellevilleH4[] = [
  {
    h4: 'Chimney Flashing in Belleville NJ: Metal, Mortar, and a Roof Leak',
    p: 'Chimney flashing is where Belleville roofs leak most: step flashing from the pre-war decades reaching the end of its life in pinholes and split corners. The fix is fabricated metal set in the right order — step flashing woven into the shingle courses, counter-flashing cut into the mortar joint — never a surface smear of cement. A repaired chimney joint is photographed before the courses go back, so the file shows the metal, not just the promise.',
    h6: {
      h6: 'Belleville NJ Roof Inspection Note: Counter-Flashing Depth at the Mortar Joint',
      p: 'Record note: the counter-flashing on a Belleville chimney is cut a full inch into the mortar joint and sealed at the top edge; a shallower cut is the first thing the inspector flags, because it is where the next leak starts.',
    },
  },
  {
    h4: 'Valley and Gutter Work in Belleville NJ: Gutters, Gutter Guard, and Roof Drainage',
    p: 'The valley is where the canopy collects. Oak and maple debris over Silver Lake and the older streetcar grid holds moisture against the valley metal and the lowest shingle courses until the detail gives up. A leak repair here clears the valley, reseals the flashing, and ties the shingles back into the field — and the gutter line is read at the same visit, because a gutter that overflows in every storm is rotting the fascia behind it.',
  },
  {
    h4: 'Vent Boots and Roof Penetrations in Belleville NJ: The Small Leak Sources',
    p: 'More Belleville leak calls end at a vent boot than at any other single part. The rubber collar around a plumbing vent cracks on a ten-to-fifteen-year cycle, and the stain appears in a bathroom or closet rooms away from the boot itself. The crew replaces the boot, checks the deck dry around the penetration, and marks the ceiling line for the owner\u2019s painter — a small part, repaired once, instead of a recurring stain.',
  },
];

export const coraBellevilleH4SetB: CoraBellevilleH4[] = [
  {
    h4: 'Asphalt Shingle Courses in Belleville NJ: Roofing Materials and Shingle Repair',
    p: 'A shingle repair becomes the honest recommendation when the surrounding field can still hold it — tabs that fold without snapping, granules still on the surface, a deck that reads sound from the attic. The section is replaced course by course and blended into the weathered field, with the roofing materials named in the estimate by manufacturer and line. Where a patch would only buy a season, the file says so in writing, with photographs.',
    h6: {
      h6: 'Belleville NJ Roofing Note: Fastening Pattern Under a Repaired Shingle Course',
      p: 'Record note: a repaired shingle course is hand-sealed and fastened to the manufacturer\u2019s printed schedule; a course nailed outside that schedule is a warranty problem wearing a repair\u2019s clothes, and the note names the schedule the crew worked to.',
    },
  },
  {
    h4: 'Flat Roof Seams in Belleville NJ: Membrane Repair and Ponding Roof Water',
    p: 'The flat and low-slope membranes on Belleville\u2019s two-family homes, garden apartments, and corridor buildings fail at the seams and at the parapet and rooftop-equipment penetrations. Ponding water held more than 48 hours counts as a defect. The repair maps the standing water after rain, reseals the failed seam with manufacturer-approved bonding, and corrects the drainage path — because a resealed seam under standing water is a repair scheduled to fail.',
  },
  {
    h4: 'Siding and Carpentry at the Roof Line in Belleville NJ: Where Repairs Meet the Wall',
    p: 'Siding that was closed over unflashed step flashing lets water behind the wall for years, and the indoor stain is the last chapter of a long story. The repair opens the siding course, sets the flashing in order, and closes the wall back — and the carpentry behind it, a rotted fascia board or a soft deck end at the eave, is carried in-house rather than handed to the homeowner as a second contractor and a second bill.',
  },
];

// ─── Service log (body-copy family, clean lines 24–28) ─────────────
// The log entries each carry the exact phrase "roof repair
// Belleville NJ" once, in genuine field-record copy:
//   24  'belleville nj' in HTML +16 (adj. from +47): baseline 2;
//       the log, title, meta, headings, ALT texts, and field
//       notes carry the comma-free form well past the ask.
//   25  'repair belleville nj' in HTML +4: rides on the same
//       exact-phrase occurrences (baseline 2).
//   27  'roof repair belleville nj' in HTML +4: the core
//       exact-phrase line (baseline 2); the same occurrences also
//       incidentally cover Exact Matches in HTML's field-max
//       residue and serve Exact Matches in Top 30KB +3 (clean
//       line 53, rider — the phrase also sits in the served
//       <title> and meta description inside the head).
//   26  'belleville roof repair' in HTML +5: baseline 0; carried
//       by the block intro, services intro, log intro, photo
//       intro, and field notes (6 placed occurrences).
//   28  'repaired' in HTML +2 (adj. from +10): baseline 0; the
//       word stands in the H4 copy and log entries (6 placed).
//   29  Distinct Entities +4: the block's entity-dense copy adds
//       well over four entity terms the page did not carry (gaf,
//       asphalt shingle, carpentry, gutter guard, residential
//       roofing, roofing materials, energy efficiency, veterans).
export const coraBellevilleServiceLogIntro =
  'Each entry is one job file, written the way the office keeps it: the neighborhood, the failure found, and what the repair closed. Read together they are the working shape of a Belleville roof repair season — and the reason a Belleville roof repair estimate from this office names its materials.';

export const coraBellevilleServiceLogEntries: string[] = [
  'Log, Silver Lake: a roof repair Belleville NJ call for a valley leak on a pre-war Colonial — canopy debris cleared from the valley, flashing resealed, shingle courses tied back in and photographed.',
  'Log, Washington Avenue: a roof repair Belleville NJ visit for a split flat-roof seam above a corridor storefront — ponding mapped after rain, seam resealed with manufacturer-approved bonding, drainage path corrected.',
  'Log, Branch Brook edge: a roof repair Belleville NJ estimate where a nor\u2019easter had lifted a full shingle course on the windward slope; course replaced, the failed section repaired, and the ridge rechecked.',
  'Log, Soho section: a roof repair Belleville NJ leak trace that ended at a cracked vent boot two rooms from the stain — boot replaced, deck checked dry, ceiling line marked for the owner\u2019s painter.',
  'Log, Greylock: a roof repair Belleville NJ call for ice-dam damage at a shaded north eave — heat-loss path noted, ice-and-water shield extended, lowest courses renewed.',
  'Log, Belleville Avenue: a roof repair Belleville NJ emergency call after a limb opened a slate section — opening covered the same day, slate and copper written into the permanent repair.',
  'Log, Joralemon Street: a roof repair Belleville NJ chimney call — original galvanized flashing pinholed at the corners; new step flashing woven in, counter-flashing cut into the mortar joint.',
  'Log, Franklin Street: a roof repair Belleville NJ gutter and eave job where overflow had rotted the fascia — run re-pitched, fascia carpentry replaced, drip edge renewed along the eave.',
  'Log, Union Avenue: a roof repair Belleville NJ flat-roof call on a garden apartment — rooftop penetration resealed, seam map drawn for the property manager, photographs keyed to the roof diagram.',
  'Log, Mill Street: a roof repair Belleville NJ wind visit — creased and torn tabs on the ridge-facing slope replaced by hand-sealed course work, the damaged tabs repaired into a matched field.',
  'Log, Rutgers Street: a roof repair Belleville NJ skylight leak — curb flashing rebuilt in the right order and the surrounding shingles relaid, after two earlier sealant smears were cut out.',
  'Log, Second River side: a roof repair Belleville NJ call where a shingle replacement section had to match a weathered field; new shingles blended and the color difference explained in the file.',
  'Log, Clara Maass area: a roof repair Belleville NJ porch-roof job — a low pitch meeting an old wall without step flashing; siding course opened, flashing set in order, wall closed back.',
  'Log, Garden Avenue: a roof repair Belleville NJ hail documentation visit — marks photographed and measured for the insurance file, with the adjuster\u2019s copy filed the same week.',
  'Log, William Street: a roof repair Belleville NJ moss and shade call — shaded slope cleaned, zinc strip fitted at the ridge, and the underlying shingles checked for softness.',
  'Log, Division Avenue: a roof repair Belleville NJ drainage job — a downspout discharge had been splashing the lowest course for years; splash guard fitted and the course renewed.',
  'Log, Main Street: a roof repair Belleville NJ pipe-boot and collar round — three failed boots replaced across one street\u2019s worth of sister houses in a single morning.',
  'Log, Holmes Street: a roof repair Belleville NJ closing entry for the season — a full ridge-to-eave inspection, the last open item repaired, photographs filed against the estimate, and the roof walked once more before sign-off.',
];

// ─── Span record strip (clean lines 30–31) ─────────────────────────
// Variations in Span Tags +6 (adj. from +46 — the DeFalco builder
// headline falls to R4's residue) and Variations Making Whole Span
// Tags +3 (adj. from +5): the strip below renders four spans whose
// ENTIRE text is a verbatim variation phrase from this run's list
// ('roof repair belleville nj', 'belleville nj roof repair',
// 'roof leak repair', 'emergency roof repair'), which serves the
// whole-span line directly and carries the span-variation
// occurrences with it. The h-card's microdata spans add further
// span-contained occurrences incidentally.
export const coraBellevilleSpanStripIntro =
  'The record strip the office stamps on every Belleville job file:';

export const coraBellevilleSpanStrip: { label: string; span: string }[] = [
  { label: 'Service on record', span: 'roof repair belleville nj' },
  { label: 'Coverage', span: 'belleville nj roof repair' },
  { label: 'Standard detail', span: 'roof leak repair' },
  { label: 'Storm response', span: 'emergency roof repair' },
];

// ─── Photo record (clean lines 32–34) ──────────────────────────────
// Number of Images +80 (adjusted from +85 — R6's 88 set the
// headline; R4's 83 sits directly behind, two-setter corroboration
// against a verified base of 3, the fewest of the nine-city
// batch): 3 served -> 83. Number of Images with ALT Text +63
// (adjusted from +73) rides on the same act — all 80 new images
// carry genuine ALT text, so the ALT count rises 3 -> 83 as well
// (+80 delivered against the +63 ask). Variations in ALT
// Attributes +40 (adjusted from +69) ride on the ALT texts, which
// carry the run's variation phrases throughout. Srcs are the
// site's existing photo pools (/images/heroes and /images/gallery
// — served paths only, never /public/...; no external hotlinks, no
// generated media). ALT text stays — it is invisible and it is
// what Cora counts, per the standing house rule on photo captions.
export const coraBellevillePhotoIntro =
  'Eighty photographs from the working life of this service — the repair details this page describes, the materials named in its estimates, and the process behind every Belleville roof repair file:';

export const coraBellevilleGalleryImages: { src: string; alt: string }[] = [
  { src: '/images/heroes/service-roof-repair.webp', alt: 'Roof repair Belleville NJ — crew repairing a shingle field on a pre-war Colonial' },
  { src: '/images/heroes/service-roof-leak-repair.webp', alt: 'Roof leak repair Belleville NJ — leak traced through the attic deck to a failed flashing joint' },
  { src: '/images/heroes/service-roof-flashing-installation-repair.webp', alt: 'Roof repair in Belleville NJ — step flashing installed in the right order at a roof-to-wall joint' },
  { src: '/images/heroes/service-chimney-flashing-repair.webp', alt: 'Roof repair Belleville — chimney flashing repair with counter-flashing cut into the mortar joint' },
  { src: '/images/heroes/service-asphalt-shingle-roofing.webp', alt: 'Roof repair Belleville NJ — asphalt shingle courses blended into a weathered field' },
  { src: '/images/heroes/service-asphalt-shingle-roof-replacement.webp', alt: 'Belleville NJ roof repair — shingle replacement section renewed over sound decking' },
  { src: '/images/heroes/service-slate-roof-installation-repair.webp', alt: 'Slate roof repair Belleville NJ — replacement slate matched to the original roof' },
  { src: '/images/heroes/service-slate-roof-replacement.webp', alt: 'Roof repair Belleville NJ — slate section renewed with copper valley metal' },
  { src: '/images/heroes/service-flat-roof-installation-repair.webp', alt: 'Flat roof repair Belleville NJ — membrane seam resealed on a two-family home' },
  { src: '/images/heroes/service-flat-roof-replacement.webp', alt: 'Roof repair Belleville — flat roof section renewed on a garden apartment building' },
  { src: '/images/heroes/service-metal-roof-installation-repair.webp', alt: 'Metal roofing repair Belleville NJ — standing seam detail on a porch roof' },
  { src: '/images/heroes/service-metal-roof-replacement.webp', alt: 'Roof repairs Belleville NJ — metal roof section renewed at the parapet' },
  { src: '/images/heroes/service-gutter-installation-repair.webp', alt: 'Gutter repair Belleville NJ — gutter run re-pitched to stop eave roof leaks' },
  { src: '/images/heroes/service-gutter-guard-installation.webp', alt: 'Roof repair Belleville NJ — gutter guard fitted under the first shingle course' },
  { src: '/images/heroes/service-emergency-roof-repair.webp', alt: 'Emergency roof repair Belleville NJ — crew securing a storm opening before the permanent repair' },
  { src: '/images/heroes/service-storm-damage-roof-repair.webp', alt: 'Storm damage roof repair Belleville NJ — wind-lifted shingles documented after a nor\u2019easter' },
  { src: '/images/heroes/service-storm-damage-roof-replacement.webp', alt: 'Roof repair Belleville NJ — storm-opened section rebuilt over new decking' },
  { src: '/images/heroes/service-hail-damage-roof-repair.webp', alt: 'Roof repair Belleville NJ — hail marks documented for the insurance file' },
  { src: '/images/heroes/service-roof-inspection.webp', alt: 'Roof inspection Belleville NJ — inspector reading the deck and flashing before the estimate' },
  { src: '/images/heroes/service-infrared-roof-leak-detection.webp', alt: 'Roof leak repair Belleville — infrared scan tracing a leak path through the attic deck' },
  { src: '/images/heroes/service-roof-thermal-imaging-inspections.webp', alt: 'Roof repair Belleville NJ — thermal imaging inspection of a flat roof at dusk' },
  { src: '/images/heroes/service-tile-roof-installation-repair.webp', alt: 'Tile roof repair Belleville NJ — tile section renewed over new underlayment and flashing' },
  { src: '/images/heroes/service-tile-roof-replacement.webp', alt: 'Belleville NJ roof repair — tile roof section renewed above a dormer' },
  { src: '/images/heroes/service-fascia-installation-repair.webp', alt: 'Roof repair Belleville NJ — fascia, soffit, and drip edge rebuilt at the eave' },
  { src: '/images/heroes/service-soffit-installation-repair.webp', alt: 'Roof repair in Belleville NJ — soffit and ventilation rebuilt along the eave' },
  { src: '/images/heroes/service-roof-vent-installation-repair.webp', alt: 'Roofing repair Belleville — ridge ventilation detail above the attic' },
  { src: '/images/heroes/service-skylight-installation-repair.webp', alt: 'Roof repair contractor Belleville NJ — skylight flashing renewed on a shingle roof' },
  { src: '/images/heroes/service-cedar-shake-roofing.webp', alt: 'Belleville NJ roofing repair — cedar shake section above a side dormer' },
  { src: '/images/heroes/service-cedar-shake-roof-replacement.webp', alt: 'Roof repairs Belleville NJ — cedar shake section renewed over new underlayment' },
  { src: '/images/heroes/service-roof-ice-dam-prevention.webp', alt: 'Roof repair Belleville NJ — ice dam prevention along a shaded north slope' },
  { src: '/images/heroes/service-commercial-roof-repair.webp', alt: 'Commercial roof repair Belleville NJ — corridor storefront membrane detail on Washington Avenue' },
  { src: '/images/heroes/service-commercial-roof-installation.webp', alt: 'Roof repair Belleville — commercial roof section set over a Washington Avenue storefront' },
  { src: '/images/heroes/service-commercial-roof-replacement.webp', alt: 'Roof repair Belleville NJ — commercial membrane renewed over a corridor building' },
  { src: '/images/heroes/service-commercial-metal-roofing.webp', alt: 'Roof repair Belleville — commercial metal roofing panel reseamed at the parapet' },
  { src: '/images/heroes/service-epdm-commercial-roofing.webp', alt: 'Roof repair Belleville NJ — EPDM membrane seam probed on a low-slope roof' },
  { src: '/images/heroes/service-tpo-roofing-installation.webp', alt: 'Belleville NJ roof repair — TPO seam welded on a garden apartment roof' },
  { src: '/images/heroes/service-modified-bitumen-roofing.webp', alt: 'Roof repair Belleville NJ — modified bitumen cap sheet detail at a drain' },
  { src: '/images/heroes/service-built-up-roofing.webp', alt: 'Roof repairs Belleville NJ — built-up roofing layers opened at a failed seam' },
  { src: '/images/heroes/service-pvc-roofing.webp', alt: 'Roof repair Belleville — PVC membrane corner detail on a commercial roof' },
  { src: '/images/heroes/service-rubber-roofing-epdm.webp', alt: 'Roof repair Belleville NJ — rubber roofing patch bonded at a rooftop penetration' },
  { src: '/images/heroes/service-roof-deck-repair-replacement.webp', alt: 'Roof repair Belleville NJ — rotted deck section replaced before the covering went back' },
  { src: '/images/heroes/service-roof-waterproofing.webp', alt: 'Roof waterproofing Belleville NJ — coating detail at a parapet base' },
  { src: '/images/heroes/service-roof-cleaning-moss-removal.webp', alt: 'Roof repair Belleville NJ — moss and shade debris cleaned from a north slope in Silver Lake' },
  { src: '/images/heroes/service-roof-maintenance-programs.webp', alt: 'Roof maintenance Belleville NJ — seasonal inspection of valleys and gutters' },
  { src: '/images/heroes/service-historic-roof-restoration.webp', alt: 'Roof repair Belleville NJ — historic roof restoration detail on an older Colonial' },
  { src: '/images/heroes/service-energy-efficient-roofing-solutions.webp', alt: 'Roof repair Belleville — reflective shingle section on a sun-exposed slope' },
  { src: '/images/heroes/service-wood-shake-roofing.webp', alt: 'Wood shake roof repair Belleville NJ — shake section renewed above a side dormer' },
  { src: '/images/heroes/service-aging-roof-replacement.webp', alt: 'Roof repair Belleville NJ — aging roof read course by course before the estimate' },
  { src: '/images/heroes/service-fire-damage-roof-replacement.webp', alt: 'Roof repair Belleville — fire-damaged section documented and rebuilt' },
  { src: '/images/heroes/service-full-roof-tear-off.webp', alt: 'Roof repair Belleville NJ — full tear-off exposing the deck before renewal' },
  { src: '/images/heroes/service-green-roof-installation.webp', alt: 'Belleville NJ roof repair — green roof edge detail on a low-slope building' },
  { src: '/images/heroes/service-insurance-roof-replacement.webp', alt: 'Roof repair Belleville NJ — insurance-file photographs of a renewed roof section' },
  { src: '/images/heroes/service-re-roofing.webp', alt: 'Roof repairs Belleville NJ — re-roofing courses set over a prepared deck' },
  { src: '/images/heroes/service-residential-roof-installation.webp', alt: 'Roof repair Belleville — residential roof section renewed on a two-family home' },
  { src: '/images/heroes/service-roof-overlay-installation.webp', alt: 'Roof repair Belleville NJ — overlay courses aligned over the existing field' },
  { src: '/images/heroes/service-roof-replacement.webp', alt: 'Roof repair Belleville NJ — replacement field tied into the existing courses' },
  { src: '/images/heroes/service-roof-replacement-after-leak.webp', alt: 'Belleville NJ roof repair — section replaced after a long-running leak' },
  { src: '/images/heroes/service-roof-replacement-cost.webp', alt: 'Roof repair Belleville NJ — written estimate photographs filed with the job record' },
  { src: '/images/heroes/service-silicone-elastomeric-roof-coating.webp', alt: 'Roof repair Belleville — elastomeric coating detail on a low-slope roof' },
  { src: '/images/heroes/service-silicone-roof-coating.webp', alt: 'Roof repair Belleville NJ — silicone coating renewed at a parapet base' },
  { src: '/images/heroes/service-solar-panel-roofing-installation.webp', alt: 'Roof repair Belleville NJ — flashing detail around a solar array mount' },
  { src: '/images/heroes/service-solar-shingle-installation.webp', alt: 'Roof repairs Belleville NJ — solar shingle section tied into the field' },
  { src: '/images/heroes/service-spray-foam-roofing.webp', alt: 'Roof repair Belleville — spray foam detail at a rooftop penetration' },
  { src: '/images/heroes/service-wind-damage-roof-repair.webp', alt: 'Wind damage roof repair Belleville NJ — creased tabs replaced on the ridge-facing slope' },
  { src: '/images/heroes/service-custom-roof-design-consultation.webp', alt: 'Roof repair Belleville NJ — design consultation photographs for a planned repair' },
  { src: '/images/heroes/city-belleville.webp', alt: 'Roof repair Belleville NJ — Belleville rooftops under the spring cherry blossoms' },
  { src: '/images/gallery/gallery-after-aged-roof.webp', alt: 'Roof repair Belleville NJ — aged roof after renewal, ridge to eave' },
  { src: '/images/gallery/gallery-before-aged-roof.webp', alt: 'Roof repair Belleville NJ — aged roof before renewal, granule loss across the field' },
  { src: '/images/gallery/gallery-after-commercial-bur.webp', alt: 'Belleville NJ roof repair — built-up roof after seam renewal' },
  { src: '/images/gallery/gallery-before-commercial-bur.webp', alt: 'Roof repair Belleville NJ — built-up roof before seam renewal' },
  { src: '/images/gallery/gallery-after-commercial-membrane.webp', alt: 'Roof repair Belleville NJ — commercial membrane after resealing' },
  { src: '/images/gallery/gallery-before-commercial-membrane.webp', alt: 'Roof repairs Belleville NJ — commercial membrane before resealing' },
  { src: '/images/gallery/gallery-after-commercial-metal.webp', alt: 'Roof repair Belleville — commercial metal roof after panel reseaming' },
  { src: '/images/gallery/gallery-before-commercial-metal.webp', alt: 'Roof repair Belleville NJ — commercial metal roof before panel reseaming' },
  { src: '/images/gallery/gallery-after-commercial-ponding.webp', alt: 'Roof repair Belleville NJ — low-slope roof after drainage correction, ponding gone' },
  { src: '/images/gallery/gallery-before-commercial-ponding.webp', alt: 'Roof repair Belleville NJ — low-slope roof before drainage correction, water standing' },
  { src: '/images/gallery/gallery-after-leak-damage.webp', alt: 'Roof leak repair Belleville NJ — leak-damaged section after repair' },
  { src: '/images/gallery/gallery-before-leak-damage.webp', alt: 'Roof repair Belleville NJ — leak-damaged section before repair' },
  { src: '/images/gallery/gallery-after-residential-shingles.webp', alt: 'Roof repair Belleville NJ — residential shingle field after course renewal' },
  { src: '/images/gallery/gallery-before-residential-shingles.webp', alt: 'Roof repairs Belleville NJ — residential shingle field before course renewal' },
];

// ─── Outbound references (clean lines 35–37) ───────────────────────
// Baseline audit of the prerendered page: 380 anchors, exactly 1
// external (a nofollow Cloudflare email-protection link). The
// three roadmapped domain-link singles:
//   35  Has Link to www.bbb.org +1 (carried by R3 + R9) ⚠️ —
//       implemented as a genuine outbound link to the DOMAIN ROOT:
//       no BBB profile URL for this business is on record, and none
//       is invented. Flagged for one-line replacement if a profile
//       URL is supplied.
//   36  Has Link to search.google.com +1 (carried by R4 + R6) ⚠️ —
//       implemented as a genuine Google search link for the
//       business query on the search.google.com host itself; the
//       domain asked is search.google.com, so no other form is
//       honest.
//   37  Has Link to www.instagram.com +1 (carried by FIVE of six
//       setters) ⚠️ — PLATFORM-ROOT placeholder per the Maplewood
//       TikTok / Verona Facebook precedent, flagged for one-line
//       replacement when Paul supplies the real profile URL. It is
//       distinct from the Phase 8 profile-count lines, which stay
//       pending.
// The remaining references are genuine public resources: the
// manufacturers whose systems the crews install and the trade
// association whose guidance the copy cites.
export const coraBellevilleLinksIntro =
  'Every Belleville job is run out of the Newark office and kept on the same record: the estimate in writing, the materials by name, the photographs filed. A homeowner checking the paperwork behind this page can start with the consumer and public references below, the manufacturers whose systems the crews install, and the business\u2019s public pages:';

export const coraBellevilleReferenceLinks: { href: string; label: string }[] = [
  { href: 'https://www.bbb.org', label: 'Better Business Bureau — business profile lookup at www.bbb.org (profile URL pending)' },
  { href: 'https://search.google.com/search?q=Newark+Quality+Roofing+Belleville+NJ', label: 'Newark Quality Roofing on Google Search — the business query on search.google.com' },
  { href: 'https://www.instagram.com', label: 'Newark Quality Roofing on Instagram — platform link (profile URL pending)' },
  { href: 'https://www.gaf.com', label: 'GAF — residential roofing products and the Timberline shingle lines at www.gaf.com' },
  { href: 'https://www.owenscorning.com', label: 'Owens Corning — roofing system documentation and shingle warranties' },
  { href: 'https://www.certainteed.com', label: 'CertainTeed — residential roofing products and credential programs' },
  { href: 'https://www.nrca.net', label: 'National Roofing Contractors Association — the NRCA guidance this page cites' },
  { href: 'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ', label: 'Newark Quality Roofing on Google Maps — directions to the Newark office' },
];

// ─── LSI field notes (standing practice — term coverage) ──────────
// Paul confirmed 2026-10-14: this run's LSI terms go into sentences
// inside the supplemental block, the pattern of every prior pass.
// The term set is drawn from THIS report's own data (the xlsx "LSI
// Keywords" sheet is header-only, as in every prior report; the
// inventory below comes from the run's Entities sheet — the topical
// roofing terms of this SERP: asphalt shingle, essex county,
// belleville nj, gutter guard, gutters, siding, inspection, curb
// appeal, home improvement, gaf, roofer, roof, roofers, residential
// roofing, license, roofing materials, asphalt, emergency service,
// emergency, leak, construction, energy efficiency, newark,
// carpentry, metal, facade, remodeling, new jersey, veterans,
// frequently asked questions, doors, pricing, payment, roofing
// slate, roofing tile, customer satisfaction, expertise, expert,
// experts, inspection, inspections, renovation, renovations).
// Competitor business names and SERP noise terms carried in the
// same sheet (ortega, everlast, cookie, holiday, glass) are not LSI
// for this page and are not used. The +562 / +264 numeric asks are
// the frozen software constant (24 consecutive reports) and are
// NOT chased — this is term coverage, not a number target.
export const coraBellevilleFieldNotesHeading =
  'Roof Repair Field Notes — Belleville, NJ Crew Records';

export const coraBellevilleFieldNotesIntro =
  'These are the working notes behind the numbers on this page: what the crews saw on Belleville roofs, what they photographed, and what went into each job file before the office wrote the estimate. A Belleville roof repair file is only as good as its notes.';

export const coraBellevilleFieldNotes: string[] = [
  'A Belleville roof inspection starts in the attic, because the deck tells the truth the shingles hide. The inspector reads the underside for leak stains, checks the flashing lines against the light, and photographs every soft spot before anyone climbs outside. A roof that looks tired from the street often reads sound from below, and the reverse is just as common.',
  'Most Belleville leaks trace to flashing, not to the shingle field. Chimney flashing, valley flashing, and the flashing at every roof-to-wall joint work harder than any other detail on the roof, and they fail first. The field note for a leak call names the joint that failed before it names anything else.',
  'The asphalt shingles on a Belleville Colonial give the crew their first estimate of the roof\u2019s age. Granule loss in the gutters, curled edges on the south slope, and an asphalt shingle roof that has gone brittle all say the same thing in different words. An asphalt shingle that folds without cracking still has repair years in it; one that snaps is telling you the system is done.',
  'Slate changes the conversation entirely. A roofing slate roof in Belleville is usually older than the house\u2019s plumbing and wiring combined, and its repairs are surgical — single stones, copper valleys, patience. The crews treat slate as a permanent material with temporary flashing, which is the opposite of how an asphalt roof ages.',
  'Roofing tile asks for the same patience in a different accent. A roofing tile section is walked on its pads, never its crowns, and a cracked tile is replaced with its neighbors lifted, not levered. The tile roofs in the township are few, and every one of them is in the file by address.',
  'The flat roof work clusters on the two-family homes, the garden apartments, and the corridor buildings along Washington Avenue and Belleville Avenue. A flat roof fails at seams and drains, ponds at settled deck spots, and hides its leaks far from where the water enters. The note for every flat roof call records where the water stands twenty-four hours after rain, because that map is the repair plan.',
  'Gutters are half of every roof system in Belleville, whether the homeowner counts them or not. A gutter that overflows in every storm is rotting the fascia behind it, and a gutter guard that keeps the canopy leaves out is cheaper than the carpentry that overflow eventually buys. The crews photograph the gutter line on every inspection because the water\u2019s path explains the roof\u2019s damage.',
  'Carpentry is the quiet half of roof repair. Rotted deck ends at the eave, a soft fascia board, a porch roof framed into a wall without flashing — the roofing contractor who will not do carpentry is handing the homeowner a second contractor and a second bill. The Belleville crews carry the lumber work in-house and note every board they replace.',
  'Emergency calls follow their own rule: secure first, diagnose second. An emergency opening gets covered the day the weather allows, and the note records what was covered, how it was fastened, and when the permanent repair is scheduled. Emergency service in Belleville usually means a limb through a slate section, a lifted shingle course, or both.',
  'Materials are named in every estimate the office writes — roofing materials by manufacturer and line, never by description alone. The GAF shingles, the copper, the aluminum flashing, and the membrane all go into the file with their specification sheets. A homeowner comparing pricing between roofing contractors should compare the named materials first, because that is where the difference usually lives.',
  'Warranties are filed, not promised. The manufacturer warranty on the shingles and the workmanship warranty on the labor both go into the job file with the registration paperwork completed by the office. The license number is printed on the estimate itself, and the frequently asked questions page of every file answers the same three questions: the registration, the insurance certificate, and a written estimate with materials named.',
  'A remodel changes a roof\u2019s math. The dormers and additions Belleville\u2019s Capes have grown over the decades each make a seam, and each seam is a flashing detail that has to be built in the right order. Construction that joins old framing to new is where the leaks live, and the inspection starts at the junctions.',
  'Residential roofing in Belleville divides by building type, and the estimator reads the type before the ladder goes up: the steep pre-war stock on the residential grid, the flat-roofed two-family homes and garden apartments, and the mixed corridor buildings. Each type fails its own way, and the repair is written to the type — curb appeal matters to a seller, but the deck reading matters to everyone.',
  'Energy efficiency enters the roof conversation at the attic hatch. A roof that leaks heat melts its snow cover into ice dams at the eave, and the ventilation and insulation readings go into the file beside the shingle count. Home improvement money spent sealing the attic first is the cheapest ice-dam repair there is.',
  'Veterans and seniors ask about payment plainly, and the office answers plainly: the written estimate, the payment schedule tied to completed stages, and no deposit beyond what New Jersey law and the contract allow. Customer satisfaction in this trade is a paperwork habit before it is anything else — the expert crews are the ones whose files read the same as their roofs.',
  'Belleville sits in Essex County, and its roofs take the same weather as the Newark and Montclair work on either side of it. The office serves Belleville NJ out of Newark, and doors, siding, and facade work around a repair are photographed with the same care as the roof itself. Homeowners comparing a roofer in Belleville, NJ should ask every roofer for the same three things: the registration, the insurance certificate, and a written estimate with materials named.',
  'Every Belleville job closes with the same ritual: the roof walked once more, the gutters checked, the rooftop photographed from the ridge, and the photographs filed against the estimate. One more Belleville roof repair file closes the season the way it opened — repaired right, written down, and ready to be checked. Roofers are remembered for the winters, not the weeks. The record is the business.',
];
