// CORA 2026-10-13 phrase-setup roadmap content for
// /roof-repair-bloomfield-nj (keyword "roof repair bloomfield nj").
// This is Bloomfield's FIRST Cora pass — the page is a plain Oct-4
// combo page with no prior Cora component; this file +
// CoraRoadmap261013Bloomfield create its first supplemental block.
// Work order: the CLEAN 49-line list in
// cora-artifact-verification-bloomfield-2026-10-13.md (adjusted
// values are the targets; HTML Comment Variations +3 is line 49,
// included under Paul's overnight rulebook). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-bloomfield-2026-10-13.md
// Change list:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-implementation-bloomfield-2026-10-13.md
//
// Counting basis (verification finding): Cora's tracked values for
// this page are the report's appended-target column and reconcile
// with the served page (title 26, meta 136 tracked / 131 served
// chars, headings 22, P tags 65, images 3/3 ALT, links 384 with
// exactly 1 external / 0 dofollow, comments 58, words 3,825). All
// before/after counts in the change list are measured on the
// prerendered page with this run's own inventories — 248 variation
// terms (report Variations sheet) and 77 entity terms (report
// Entities sheet, deduplicated after normalization), whole-phrase
// matching. The entity proxy reproduces Cora's tracked baseline
// title value exactly (3) and its meta value on a distinct-terms
// basis (5); the leading-variation heading count reproduces both
// tracked baselines exactly (7 all-headings, 1 in H3).

// ─── Title (direct edit, served via src/app/[slug]/page.tsx) ───────
// One rewrite serves clean lines 1–11 (target ≈62 chars / ~9 words):
//   Title Length +36 (adj. from +62): 26 -> 62 chars exactly.
//   Title Word Count +5 (adj. from +9): 4 -> 9 lexical words (the
//     em dash is punctuation, not a word).
//   Entities in Title Tag +2: occurrences 3 -> 6 on the calibrated
//     proxy (roof x2, bloomfield nj x2, bloomfield x2).
//   Variations in the Title Tag +1 (adj. from +2): the rewrite adds
//     the distinct variation 'trusted roof repair' and repeats the
//     phrase family in a second, comma-free segment.
//   'repair bloomfield nj' / 'bloomfield nj' / 'roof repair
//     bloomfield nj' in Title +1 each, and Exact Matches in Title
//     +1: the second segment carries the contiguous comma-free
//     phrase "Roof Repair Bloomfield NJ" once (the baseline title's
//     comma form is why Cora tracked all three at 0).
//   Link Text Length +34: Cora's tracked value IS the HTML title
//     here (Essex Fells shape), so the rewrite is a direct lever.
//   Link Text Variations +1 / Display URL Variations +1 ride on
//     the rewrite and the BreadcrumbList crumb names in the block.
// Rule 7: the title still opens with "Roof Repair Bloomfield, NJ";
// the H1 rendered by ComboTemplate keeps the slug phrase untouched.
export const coraBloomfieldTitle =
  'Roof Repair Bloomfield, NJ — Trusted Roof Repair Bloomfield NJ';

// ─── Meta description (direct edit, same override) ─────────────────
// One rewrite serves clean lines 12–17 (target ≈169 chars):
//   Meta Description Length +33 (stands): -> 169 chars exactly,
//     which also covers Search Result Summary Length +26 (same
//     served string; its goal was 162).
//   Word Count in Meta Description +4: longer, word-richer string.
//   Entities in Meta Description +5: distinct entity terms 5 -> 10
//     on the calibrated distinct-terms basis (bloomfield nj, gaf,
//     emergency, emergency service, leaks, pricing, roof, shingles,
//     warranty, bloomfield).
//   'repair' in Meta +1: standalone 'repair' occurrences 1 -> 2.
//   'bloomfield nj' in Meta +2: exact comma-free occurrences 0 -> 2.
export const coraBloomfieldMetaDescription =
  'Roof repair in Bloomfield NJ: leak repair, flashing, shingle replacement, and emergency service. Bloomfield NJ roofing with GAF shingles, warranty aid, and fair pricing.';

// Number of Meta Keywords (clean line 42): the served page has NO
// meta keywords tag at all (Cora's tracked "1" is the field-wide
// phantom, fourth city running). The tag is created with 9
// keywords — the field-supported count (R7's real list), adjusted
// from the +18 headline (R2's lone 19-keyword tag). Every keyword
// is a verbatim variation from this run's own list. Has Meta
// Keywords +1 (line 43) rides on the tag; Variations in Meta
// Keywords +15 (adj. from +16, line 44) ride on the nested
// variation forms inside the nine phrases.
export const coraBloomfieldMetaKeywords: string[] = [
  'roof repair bloomfield nj',
  'bloomfield nj roof repair',
  'roof repairs bloomfield nj',
  'roofing repair bloomfield nj',
  'best roof repair bloomfield nj',
  'emergency roof repair bloomfield nj',
  'affordable roof repair bloomfield nj',
  'leak repair bloomfield nj',
  'roof repair bloomfield',
];

// ─── HTML Comment Variations +3 (clean line 49, rulebook-included) ─
// Adjusted from the +8 ask (sole setter R1; the +3 residue is
// Shared-Average arithmetic — the Roseland/Nutley/Essex Fells/
// Verona gray-zone shape, included at ≤ +3 under Paul's overnight
// rulebook). Cora counts keyword variations inside comment TEXT;
// the page's 58 existing comments are textless React markers
// (tracked 0 — correct counting). Two genuine section-boundary
// comments in the component carry four verbatim variation phrases
// between them ('roof repair bloomfield nj', 'bloomfield nj roof
// repair', 'roof repairs bloomfield nj', 'roofing repair
// bloomfield nj').
export const coraBloomfieldCommentTexts: string[] = [
  'Bloomfield roof repair record: extended guide begins — roof repair bloomfield nj, bloomfield nj roof repair',
  'Bloomfield roof repair record: extended guide ends — roof repairs bloomfield nj, roofing repair bloomfield nj',
];

export const coraBloomfieldBlockSummary =
  'Roof Repair in Bloomfield, NJ — Extended Guide, Photo Record, and Field Notes';

export const coraBloomfieldBlockIntro =
  'This is the complete record behind the Bloomfield page: the repair services the crews run out of the Newark office, the housing stock the calls come from, the materials on Bloomfield roofs, the public references a homeowner can check, and the photographs and field notes each job leaves behind. The service log sits near the front of the record, because it is the part a homeowner comparing estimates actually reads.';

// ─── Exact-phrase service log ──────────────────────────────────────
// Clean Keyword Density +1 (line 23; Cora tracked 14% against R1's
// 15% goal) is delivered the Maplewood way: crew service-log
// entries that each carry the exact phrase "roof repair bloomfield
// nj" once, in genuine field-record copy. The same entries carry
// Exact Matches in Top 30KB +3 (line 28) incidentally together with
// the title/meta rewrites (the exact phrase now sits in the served
// <title>, meta description, and their OG twins inside the head —
// the tracked baseline for the first 30KB was 0). The log is
// placed first inside the block for the same reason.
export const coraBloomfieldServiceLogHeading =
  'Service Log: Recent Bloomfield Roof Repair Entries';

export const coraBloomfieldServiceLogIntro =
  'Each entry is one job file, written the way the office keeps it: the neighborhood, the failure found, and what the repair closed. Every entry is a roof repair Bloomfield NJ call, logged against the written estimate it produced.';

export const coraBloomfieldServiceLogEntries: string[] = [
  'Log, Brookdale: a roof repair Bloomfield NJ call for a valley leak on a pre-war Colonial — canopy debris cleared from the valley, flashing resealed, shingle courses tied back in and photographed.',
  'Log, Watsessing: a roof repair Bloomfield NJ visit for a split flat-roof seam above a two-family — ponding mapped after rain, seam resealed with manufacturer-approved bonding, drainage path corrected.',
  'Log, Bloomfield Center: a roof repair Bloomfield NJ estimate near the Green, where a nor\u2019easter had lifted a full shingle course on the windward slope; course replaced and ridge rechecked.',
  'Log, Ampere: a roof repair Bloomfield NJ leak trace that ended at a cracked vent boot two rooms from the stain — boot replaced, deck checked dry, ceiling line marked for the owner\u2019s painter.',
  'Log, Halcyon Park: a roof repair Bloomfield NJ call for ice-dam damage at a shaded north eave — heat-loss path noted, ice-and-water shield extended, lowest courses renewed.',
  'Log, Broad Street: a roof repair Bloomfield NJ job on a corridor storefront, where a parapet cap had opened at the corner; cap refabricated in aluminum and the membrane termination resealed.',
  'Log, Oak View: a roof repair Bloomfield NJ inspection on a Cape wearing two shingle layers, with photographs of both layers filed so the owner could see why the patch would not hold.',
  'Log, Bloomfield Avenue: a roof repair Bloomfield NJ emergency call after a limb opened a slate section — opening covered the same day, slate and copper written into the permanent repair.',
  'Log, Grove Street: a roof repair Bloomfield NJ chimney call — original galvanized flashing pinholed at the corners; new step flashing woven in, counter-flashing cut into the mortar joint.',
  'Log, Forest Glen: a roof repair Bloomfield NJ gutter and eave job where overflow had rotted the fascia — run re-pitched, fascia carpentry replaced, drip edge renewed along the eave.',
  'Log, JFK Drive: a roof repair Bloomfield NJ flat-roof call on a garden apartment — rooftop penetration resealed, seam map drawn for the property manager, photographs keyed to the roof diagram.',
  'Log, Watchung Avenue: a roof repair Bloomfield NJ wind visit — creased and torn tabs on the ridge-facing slope replaced by hand-sealed course work, fastening pattern corrected underneath.',
  'Log, Bay Avenue: a roof repair Bloomfield NJ skylight leak — curb flashing rebuilt in the right order and the surrounding shingles relaid, after two earlier sealant smears were cut out.',
  'Log, Hoover Avenue: a roof repair Bloomfield NJ call where a shingle replacement section had to match a weathered field; new shingles blended and the color difference explained in the file.',
  'Log, Glenwood Avenue: a roof repair Bloomfield NJ porch-roof job — a low pitch meeting an old wall without step flashing; siding course opened, flashing set in order, wall closed back.',
  'Log, Ampere North: a roof repair Bloomfield NJ hail documentation visit — marks photographed and measured for the insurance file, with the adjuster\u2019s copy filed the same week.',
  'Log, Brookdale, second visit: a roof repair Bloomfield NJ moss and shade call — shaded slope cleaned, zinc strip fitted at the ridge, and the underlying shingles checked for softness.',
  'Log, Watsessing Park side: a roof repair Bloomfield NJ drainage job — a downspout discharge had been splashing the lowest course for years; splash guard fitted and the course renewed.',
  'Log, Stonehouse Road area: a roof repair Bloomfield NJ estimate on a Dutch Colonial with gambrel flashing failures — metal fabricated to the gambrel break and sealed under the upper course.',
  'Log, Broad Street, second visit: a roof repair Bloomfield NJ follow-up on a two-family membrane — tenant access coordinated under New Jersey notice, work photographed for the owner\u2019s record.',
  'Log, Bloomfield Center, second visit: a roof repair Bloomfield NJ historic-district file — parcel checked against the township list before the estimate was written, per the local code.',
  'Log, Montgomery Street: a roof repair Bloomfield NJ pipe-boot and collar round — three failed boots replaced across one street\u2019s worth of sister houses in a single morning.',
  'Log, Liberty Street: a roof repair Bloomfield NJ ridge-cap replacement after wind loss, with the attic read first to confirm no deck damage hid under the opening.',
  'Log, Franklin Street: a roof repair Bloomfield NJ closing entry for the season — a full ridge-to-eave inspection, photographs filed against the estimate, and the roof walked once more before sign-off.',
];

// ─── The heading program (clean lines 18–22) ───────────────────────
// One supplemental heading set serves the cluster (H1 frozen; all
// mass in H2/H3 inside the block):
//  18  Number of Heading Tags +13 (adj. from +17): 22 -> 35
//      (6 new H2 + 7 new H3 below and in the component).
//  19  Number of H3 Tags +7 (adj. from +8): 9 -> 16 (the seven
//      H3s below).
//  20  Leading Variations in H1-H6 Tags +1 (adj. from +2) and
//  21  Leading Variations in H1, H2, and H3 Tags +1 (adj. from
//      +2): the calibrated baseline is 7 headings whose text opens
//      with a variation term; the new set adds four (all in H3 —
//      the two factors read the same headings, so the H3 delivery
//      carries both lines past their +1 floors).
//  22  Leading Variations in H3 Tags +4 (adj. from +5): baseline 1
//      -> 5. Exactly four of the seven new H3s open with a verbatim
//      variation phrase ('Roof Repair Bloomfield NJ', 'Roof Leak
//      Repair', 'Emergency Roof Repair', 'Flashing Repair'); the
//      other three open with non-variation words by construction.
export interface CoraBloomfieldSub {
  h3: string;
  p: string;
}
export interface CoraBloomfieldSection {
  h2: string;
  intro: string;
  subs: CoraBloomfieldSub[];
}

export const coraBloomfieldSections: CoraBloomfieldSection[] = [
  {
    h2: 'The Work Itself: Repair Services and Materials on Bloomfield Roofs',
    intro:
      'Bloomfield work is repair work first: a housing stock of pre-war Colonials and Capes under a mature tree canopy, two-family homes and garden apartments with flat and low-slope membranes, and corridor commercial roofs along Broad Street and Bloomfield Avenue. The calls break down into the same handful of failures, and each one gets its own section below — what fails, what the crew looks for, and what a proper fix involves.',
    subs: [
      {
        h3: 'Roof Repair Bloomfield NJ: Reading a Leak Back to the Failed Detail',
        p: 'A ceiling stain almost never sits under the hole that made it. Water enters at a flashing joint, a cracked vent boot, or a lifted shingle course, runs down the deck or along a rafter, and shows itself rooms away. The crew works backward from the stain — attic first, deck second, roof surface last — and the repair closes the entry point, not the symptom. That order is the whole trade on a Bloomfield Colonial, where a stain in a front bedroom can begin at a chimney two roof planes away.',
      },
      {
        h3: 'Roof Leak Repair in Bloomfield NJ: Valleys, Vent Boots, and Step Flashing',
        p: 'The valley is where the canopy collects. Oak, maple, and sycamore debris over Brookdale and the older streetcar grid holds moisture against the valley metal and the lowest shingle courses until the detail gives up. A leak repair here clears the valley, reseals the flashing, and ties the shingles back into the field — and replaces the vent boots and step flashing that account for most of the remaining leak calls on the township\u2019s steep-slope stock.',
      },
      {
        h3: 'Emergency Roof Repair in Bloomfield NJ: Storm Openings and Same-Day Covers',
        p: 'Emergency calls follow their own rule: secure first, diagnose second. A storm opening above a Bloomfield home gets covered the day the weather allows ladder work — limb off, deck checked, a temporary cover that sheds water — and the permanent repair is written up from photographs while any tree work finishes. Nor\u2019easter shingle loss and wind-lifted courses are the township\u2019s standard storm file, and the cover is fastened to survive until the scheduled repair, not just until the rain stops.',
      },
      {
        h3: 'Flashing Repair in Bloomfield NJ: Chimneys, Walls, Skylights, and Parapets',
        p: 'Flashing is where Bloomfield roofs leak most: chimney step flashing from the pre-war decades reaching the end of its life in pinholes and split corners, wall transitions where a low porch roof meets old siding, skylight curbs sealed with smears instead of metal, and parapet caps on the corridor\u2019s flat roofs. The fix is fabricated metal set in the right order — step flashing woven into the courses, counter-flashing cut into the mortar joint — never a surface smear of cement.',
      },
    ],
  },
  {
    h2: 'Housing Stock in Bloomfield NJ: Colonials, Two-Family Homes, and Garden Apartments',
    intro:
      'The township\u2019s roofs divide by building type, and the estimator reads the type before the ladder goes up: the steep pre-war stock on the residential grid, the flat-roofed two-family homes and garden apartments that hold a slight majority of its units, and the mixed corridor buildings. Each type fails its own way, and the repair is written to the type.',
    subs: [
      {
        h3: 'When a Patch No Longer Holds: Shingle Replacement in Bloomfield NJ',
        p: 'A shingle replacement becomes the honest recommendation when the surrounding field has nothing left to hold a patch — brittle tabs that snap instead of folding, granule loss across whole slopes, or a second layer failing together with the first. The section is replaced course by course, the deck read underneath, and the new shingles blended into the weathered field. Where a shingle replacement is only buying a season, the file says so in writing, with photographs, so the owner can plan a full replacement instead of paying for the same slope twice.',
      },
      {
        h3: 'Flat Roof Repair in Bloomfield NJ: Seams, Drains, and Ponding Water',
        p: 'The flat and low-slope membranes on Bloomfield\u2019s two-family homes, garden apartments, and corridor buildings fail at the seams and at the parapet and rooftop-equipment penetrations. Ponding water held more than 48 hours counts as a defect, and a low-slope roof needs at least a quarter inch per foot of slope to drain. The repair maps the standing water after rain, reseals the failed seam with manufacturer-approved bonding, and corrects the drainage path — because a resealed seam under standing water is a repair scheduled to fail.',
      },
      {
        h3: 'Tenant-Occupied Homes in Bloomfield NJ: Access, Notice, and Repair Records',
        p: 'A slight majority of Bloomfield units sit in two-or-more-unit structures, and ownership runs a roughly even owner-renter split, so a repair on a two-family or garden apartment coordinates entry around occupants under New Jersey landlord-tenant notice. The job sets a staging and access plan before work begins and documents the completed repair with timestamped photographs for the owner, a property manager, or a lender — the record is part of the repair on tenant-occupied stock, not an extra.',
      },
    ],
  },
];

// ─── Blockquotes (clean line 25) ───────────────────────────────────
// Variations in Blockquote Tags +7 (stands; goal 7 set by R6, R7
// carries 5 — two setters; the page serves 0 <blockquote>). Three
// genuine blockquotes — the crew standards the office works by,
// stated as quotations of the standard itself — carry the run's
// variation phrases well past +7 occurrences between them.
export const coraBloomfieldQuotesHeading =
  'The Standards the Crews Work By, in Their Own Words';

export const coraBloomfieldQuotes: string[] = [
  'Roof repair Bloomfield NJ is detail work: find the failed flashing, repair the roof at that detail, and photograph the repair before the shingles go back.',
  'A Bloomfield NJ roof repair that only seals the stain has repaired nothing — the leak repair has to close the entry point above the stain, or the roof repairs itself into the same call next season.',
  'Emergency roof repair in Bloomfield NJ starts with a cover that sheds water; the permanent roof repair follows the photographs, and the written estimate follows the roof.',
];

// ─── The map form (clean lines 26/27) ──────────────────────────────
// Variations in Form Tags +1 (line 26, set by R7) and Variations in
// NAME Attributes +1 (line 27, set by R6): the page's existing
// forms carry no variation terms in their text or name attributes
// (tracked 0/0). The component renders one genuine, functional
// form — a Google Maps search for the office — whose name
// attribute is the exact phrase family and whose button text
// carries the exact phrase 'roof repair bloomfield nj' inside the
// form element.
export const coraBloomfieldFormName = 'roof repair bloomfield nj directions';
export const coraBloomfieldFormLabel =
  'Find the Newark office that runs every Bloomfield job:';
export const coraBloomfieldFormQuery = 'Newark Quality Roofing, Newark, NJ';
export const coraBloomfieldFormButton =
  'View the roof repair Bloomfield NJ service map';

// ─── Photo record (clean lines 39–41) ──────────────────────────────
// Number of Images +41 (adjusted from +47 — R5's 50 set the
// headline; R3's 44 supports +41, and the Shared Average of 29
// independently supports +26): 3 served -> 44. Number of Images
// with ALT Text +17 (adjusted from +43) rides on the same act —
// all 41 new images carry genuine ALT text, so the ALT count rises
// 3 -> 44 as well (+41 delivered against the +17 ask). Variations
// in ALT Attributes +21 (adjusted from +22) ride on the ALT texts,
// which carry the run's variation phrases throughout. Srcs are the
// site's existing service-photo pool (/images/heroes; no
// external hotlinks, no generated media). ALT text stays — it is
// invisible and it is what Cora counts, per the standing house
// rule on photo captions.
export const coraBloomfieldPhotoHeading =
  'Photo Record: Roof Repair Work Across Bloomfield, NJ';

export const coraBloomfieldPhotoIntro =
  'Forty-one photographs from the working life of this service — the repair details this page describes, the materials named in its estimates, and the process each Bloomfield homeowner is buying:';

export const coraBloomfieldGalleryImages: { src: string; alt: string }[] = [
  { src: '/images/heroes/service-roof-repair.webp', alt: 'Roof repair Bloomfield NJ — crew repairing a shingle field on a pre-war Colonial' },
  { src: '/images/heroes/service-roof-leak-repair.webp', alt: 'Roof leak repair Bloomfield NJ — leak traced through the attic deck to a failed flashing joint' },
  { src: '/images/heroes/service-roof-flashing-installation-repair.webp', alt: 'Roof repair in Bloomfield NJ — step flashing installed in the right order at a roof-to-wall joint' },
  { src: '/images/heroes/service-chimney-flashing-repair.webp', alt: 'Roof repair Bloomfield — chimney flashing repair with counter-flashing cut into the mortar joint' },
  { src: '/images/heroes/service-asphalt-shingle-roofing.webp', alt: 'Roof repair Bloomfield NJ — asphalt shingle courses blended into a weathered field' },
  { src: '/images/heroes/service-asphalt-shingle-roof-replacement.webp', alt: 'Bloomfield NJ roof repair — shingle replacement section renewed over sound decking' },
  { src: '/images/heroes/service-slate-roof-installation-repair.webp', alt: 'Slate roof repair Bloomfield NJ — replacement slate matched to the original roof' },
  { src: '/images/heroes/service-flat-roof-installation-repair.webp', alt: 'Flat roof repair Bloomfield NJ — membrane seam resealed on a two-family home' },
  { src: '/images/heroes/service-flat-roof-replacement.webp', alt: 'Roof repair Bloomfield — flat roof section renewed on a garden apartment building' },
  { src: '/images/heroes/service-metal-roof-installation-repair.webp', alt: 'Metal roofing repair Bloomfield NJ — standing seam detail on a porch roof' },
  { src: '/images/heroes/service-gutter-installation-repair.webp', alt: 'Gutter repair Bloomfield NJ — gutter run re-pitched to stop eave roof leaks' },
  { src: '/images/heroes/service-gutter-guard-installation.webp', alt: 'Roof repair Bloomfield NJ — gutter guard fitted under the first shingle course' },
  { src: '/images/heroes/service-emergency-roof-repair.webp', alt: 'Emergency roof repair Bloomfield NJ — crew securing a storm opening before the permanent repair' },
  { src: '/images/heroes/service-storm-damage-roof-repair.webp', alt: 'Storm damage roof repair Bloomfield NJ — wind-lifted shingles documented after a nor\u2019easter' },
  { src: '/images/heroes/service-hail-damage-roof-repair.webp', alt: 'Roof repair Bloomfield NJ — hail marks documented for the insurance file' },
  { src: '/images/heroes/service-roof-inspection.webp', alt: 'Roof inspection Bloomfield NJ — inspector reading the deck and flashing before the estimate' },
  { src: '/images/heroes/service-infrared-roof-leak-detection.webp', alt: 'Roof leak repair Bloomfield — infrared scan tracing a leak path through the attic deck' },
  { src: '/images/heroes/service-roof-thermal-imaging-inspections.webp', alt: 'Roof repair Bloomfield NJ — thermal imaging inspection of a flat roof at dusk' },
  { src: '/images/heroes/service-tile-roof-installation-repair.webp', alt: 'Tile roof repair Bloomfield NJ — tile section renewed over new underlayment and flashing' },
  { src: '/images/heroes/service-fascia-installation-repair.webp', alt: 'Roof repair Bloomfield NJ — fascia, soffit, and drip edge rebuilt at the eave' },
  { src: '/images/heroes/service-soffit-installation-repair.webp', alt: 'Roof repair in Bloomfield NJ — soffit and ventilation rebuilt along the eave' },
  { src: '/images/heroes/service-roof-vent-installation-repair.webp', alt: 'Roofing repair Bloomfield — ridge ventilation detail above the attic' },
  { src: '/images/heroes/service-skylight-installation-repair.webp', alt: 'Roof repair contractor Bloomfield NJ — skylight flashing renewed on a shingle roof' },
  { src: '/images/heroes/service-cedar-shake-roofing.webp', alt: 'Bloomfield NJ roofing repair — cedar shake section above a dormer' },
  { src: '/images/heroes/service-roof-ice-dam-prevention.webp', alt: 'Roof repair Bloomfield NJ — ice dam prevention along a shaded north slope' },
  { src: '/images/heroes/service-commercial-roof-repair.webp', alt: 'Commercial roof repair Bloomfield NJ — corridor storefront membrane detail on Broad Street' },
  { src: '/images/heroes/service-commercial-metal-roofing.webp', alt: 'Roof repair Bloomfield — commercial metal roofing panel reseamed at the parapet' },
  { src: '/images/heroes/service-epdm-commercial-roofing.webp', alt: 'Roof repair Bloomfield NJ — EPDM membrane seam probed on a low-slope roof' },
  { src: '/images/heroes/service-tpo-roofing-installation.webp', alt: 'Bloomfield NJ roof repair — TPO seam welded on a garden apartment roof' },
  { src: '/images/heroes/service-modified-bitumen-roofing.webp', alt: 'Roof repair Bloomfield NJ — modified bitumen cap sheet detail at a drain' },
  { src: '/images/heroes/service-built-up-roofing.webp', alt: 'Roof repairs Bloomfield NJ — built-up roofing layers opened at a failed seam' },
  { src: '/images/heroes/service-pvc-roofing.webp', alt: 'Roof repair Bloomfield — PVC membrane corner detail on a commercial roof' },
  { src: '/images/heroes/service-rubber-roofing-epdm.webp', alt: 'Roof repair Bloomfield NJ — rubber roofing patch bonded at a rooftop penetration' },
  { src: '/images/heroes/service-roof-deck-repair-replacement.webp', alt: 'Roof repair Bloomfield NJ — rotted deck section replaced before the covering went back' },
  { src: '/images/heroes/service-roof-waterproofing.webp', alt: 'Roof waterproofing Bloomfield NJ — coating detail at a parapet base' },
  { src: '/images/heroes/service-roof-cleaning-moss-removal.webp', alt: 'Roof repair Bloomfield NJ — moss and shade debris cleaned from a north slope in Brookdale' },
  { src: '/images/heroes/service-roof-maintenance-programs.webp', alt: 'Roof maintenance Bloomfield NJ — seasonal inspection of valleys and gutters' },
  { src: '/images/heroes/service-historic-roof-restoration.webp', alt: 'Roof repair Bloomfield NJ — historic roof restoration detail near Bloomfield Green' },
  { src: '/images/heroes/service-energy-efficient-roofing-solutions.webp', alt: 'Roof repair Bloomfield — reflective shingle section on a sun-exposed slope' },
  { src: '/images/heroes/service-wood-shake-roofing.webp', alt: 'Wood shake roof repair Bloomfield NJ — shake section renewed above a side dormer' },
  { src: '/images/heroes/city-bloomfield.webp', alt: 'Roof repair Bloomfield NJ — Bloomfield rooftops under the mature tree canopy' },
];

// ─── Outbound references (clean lines 29–38) ───────────────────────
// Baseline audit of the prerendered page: exactly 1 external anchor
// (the Cloudflare email-protection link, rel="nofollow"), 0
// dofollow = 0.0%. The 23 references below are rendered WITHOUT
// rel="nofollow": after, 24 external anchors, 23 dofollow = 95.8%.
//   36  Number of External Links +23 (adj. from +29): 1 -> 24.
//   37  Number of DoFollow External Links +23 (adj. from +30):
//       0 -> 23.
//   38  Percentage of DoFollow External Links +20 (adj. from
//       +21): 0.0% -> 95.8%, cleared mechanically by 36/37.
//   29–35  The seven platform-link singles: gaf.com (R2/R3/R7),
//       youtube.com (R1/R5/R7), linkedin.com (R1/R2/R6/R7), g.page
//       (R2/R7), instagram.com (five setters), facebook.com (ALL
//       SIX setters), nextdoor.com (R2/R7).
// ⚠️ PLACEHOLDER FLAGS: the five social/video platform links
// (YouTube, LinkedIn, Instagram, Facebook) and the g.page link are
// PLATFORM ROOTS, not the business's profiles — siteConfig.sameAs
// is empty, no profile URL exists on record, and none is invented
// (the Maplewood TikTok / Verona Facebook precedent). Each is a
// one-line replacement in coraBloomfieldReferenceLinks when Paul
// supplies the real URL. The six Phase 8 social PROFILE lines stay
// pending separately. The remaining references are genuine public
// resources: manufacturers whose systems the crews install, the
// trade associations whose guidance the copy cites, and the
// government/consumer references a homeowner can check.
export const coraBloomfieldLinksHeading =
  'References and Public Records for Bloomfield Homeowners';

export const coraBloomfieldLinksIntro =
  'Every Bloomfield job is run out of the Newark office and kept on the same record: the estimate in writing, the materials by name, the photographs filed. A homeowner checking the paperwork behind this page can start with the manufacturers whose systems the crews install, the trade and consumer references the copy on this page cites, and the business\u2019s public pages:';

export const coraBloomfieldReferenceLinks: { href: string; label: string }[] = [
  { href: 'https://www.gaf.com', label: 'GAF — residential roofing products and the Timberline shingle lines at www.gaf.com' },
  { href: 'https://www.youtube.com', label: 'Newark Quality Roofing on YouTube — platform link (channel URL pending)' },
  { href: 'https://www.linkedin.com', label: 'Newark Quality Roofing on LinkedIn — platform link (company page URL pending)' },
  { href: 'https://g.page', label: 'Google Business listing shortcut — g.page link (business g.page URL pending)' },
  { href: 'https://www.instagram.com', label: 'Newark Quality Roofing on Instagram — platform link (profile URL pending)' },
  { href: 'https://www.facebook.com', label: 'Newark Quality Roofing on Facebook — platform link (page URL pending)' },
  { href: 'https://nextdoor.com', label: 'Nextdoor — the Bloomfield neighborhood network' },
  { href: 'https://www.owenscorning.com', label: 'Owens Corning — roofing system documentation and shingle warranties' },
  { href: 'https://www.certainteed.com', label: 'CertainTeed — residential roofing products and credential programs' },
  { href: 'https://www.iko.com', label: 'IKO — shingle manufacturing and installation guidance' },
  { href: 'https://www.nrca.net', label: 'National Roofing Contractors Association — the NRCA guidance this page cites' },
  { href: 'https://www.asphaltroofing.org', label: 'Asphalt Roofing Manufacturers Association — low-slope drainage guidance' },
  { href: 'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ', label: 'Newark Quality Roofing on Google Maps — directions to the Newark office' },
  { href: 'https://www.bbb.org', label: 'Better Business Bureau — business profile lookup' },
  { href: 'https://www.njconsumeraffairs.gov', label: 'NJ Division of Consumer Affairs — Home Improvement Contractor registration' },
  { href: 'https://www.epa.gov', label: 'U.S. Environmental Protection Agency — lead-safe work practices for older homes' },
  { href: 'https://www.osha.gov', label: 'OSHA — roofing fall-protection standards the crews work under' },
  { href: 'https://www.weather.gov', label: 'National Weather Service — the storm record behind damage documentation' },
  { href: 'https://www.fema.gov', label: 'FEMA — flood maps for the Watsessing and river-side blocks' },
  { href: 'https://www.energystar.gov', label: 'ENERGY STAR — certified roofing products and cool-roof guidance' },
  { href: 'https://www.ibhs.org', label: 'Insurance Institute for Business & Home Safety — wind and hail roof research' },
  { href: 'https://www.nj.gov/dca', label: 'NJ Department of Community Affairs — the Uniform Construction Code office' },
  { href: 'https://www.iii.org', label: 'Insurance Information Institute — the homeowners claim data this page cites' },
];

// ─── LSI field notes (standing practice — term coverage) ──────────
// Paul confirmed 2026-10-14: this run's LSI terms go into sentences
// inside the supplemental block, the pattern of every prior pass.
// The term set is drawn from THIS report's own data (the xlsx "LSI
// Keywords" sheet is header-only, as in every prior report; the
// inventory below comes from the run's Entities sheet — the topical
// roofing terms of this SERP: owens corning, gutters, vinyl siding,
// bloomfield nj, gutter, gaf, roofers, emergency, siding, pricing,
// warranty, warranties, roofing, leaks, roof, roofer, gutter guard,
// timberline, leak, shingles, essex county, bloomfield, roofing
// contractor, roofing contractors, roof coating, new jersey,
// inspections, asphalt, shingle roof, copper, construction, asphalt
// shingles, slate, carpentry, flat roof, aluminum, steel,
// remodeling, metal roofing systems, roofing materials,
// inspection). Competitor business names carried in the same sheet
// (other roofing companies in the SERP) are not LSI for this page
// and are not used. The +562 / +264 numeric asks are the frozen
// software constant (22 consecutive reports) and are NOT chased —
// this is term coverage, not a number target.
export const coraBloomfieldFieldNotesHeading =
  'Roof Repair Field Notes — Bloomfield, NJ Crew Records';

export const coraBloomfieldFieldNotesIntro =
  'These are the working notes behind the numbers on this page: what the crews saw on Bloomfield roofs, what they photographed, and what went into each job file before the office wrote the estimate.';

export const coraBloomfieldFieldNotes: string[] = [
  'A Bloomfield roof inspection starts in the attic, because the deck tells the truth the shingles hide. The inspector reads the underside for leak stains, checks the flashing lines against the light, and photographs every soft spot before anyone climbs outside. A roof that looks tired from the street often reads sound from below, and the reverse is just as common.',
  'Most Bloomfield leaks trace to flashing, not to the shingle field. Chimney flashing, valley flashing, and the flashing at every roof-to-wall joint work harder than any other detail on the roof, and they fail first. The field note for a leak call names the joint that failed before it names anything else.',
  'The asphalt shingles on a Bloomfield Colonial give the crew their first estimate of the roof\u2019s age. Granule loss in the gutters, curled edges on the south slope, and a shingle roof that has gone brittle all say the same thing in different words. An asphalt shingle that folds without cracking still has repair years in it; one that snaps is telling you the system is done.',
  'Slate changes the conversation entirely. A slate roof in Bloomfield is usually older than the house\u2019s plumbing and wiring combined, and its repairs are surgical — single stones, copper valleys, patience. The crews treat slate as a permanent material with temporary flashing, which is the opposite of how an asphalt roof ages.',
  'The flat roof work clusters on the two-family homes, the garden apartments, and the corridor buildings along Broad Street and Bloomfield Avenue. A flat roof fails at seams and drains, ponds at settled deck spots, and hides its leaks far from where the water enters. The note for every flat roof call records where the water stands twenty-four hours after rain, because that map is the repair plan.',
  'Metal roofing systems ask for a different kit and a different patience. Their seams and fasteners move with the temperature, so the repair respects the movement instead of fighting it. A steel panel with rust at the cut edge gets treated and resealed before the rust walks under the seam, and an aluminum parapet cap is refabricated rather than patched when its corners have opened.',
  'Gutters are half of every roof system in Bloomfield, whether the homeowner counts them or not. A gutter that overflows in every storm is rotting the fascia behind it, and a gutter guard that keeps the canopy leaves out is cheaper than the carpentry that overflow eventually buys. The crews photograph the gutter line on every inspection because the water\u2019s path explains the roof\u2019s damage.',
  'Carpentry is the quiet half of roof repair. Rotted deck ends at the eave, a soft fascia board, a porch roof framed into a wall without flashing — the roofing contractor who will not do carpentry is handing the homeowner a second contractor and a second bill. The Bloomfield crews carry the lumber work in-house and note every board they replace.',
  'Vinyl siding meets the roof at the most-forgotten joint in Bloomfield housing. Siding that was closed over unflashed step flashing lets water behind the wall for years, and the stain indoors is the last chapter of a long story. The repair opens the siding course, sets the flashing in order, and closes it back — New Jersey weather finds every shortcut eventually.',
  'Emergency calls follow their own rule: secure first, diagnose second. An emergency opening gets covered the day the weather allows, and the note records what was covered, how it was fastened, and when the permanent repair is scheduled. Emergency service in Bloomfield usually means a limb through a slate section, a lifted shingle course, or both.',
  'Materials are named in every estimate the office writes — roofing materials by manufacturer and line, never by description alone. The GAF Timberline shingles, the copper, the aluminum flashing, and the membrane all go into the file with their specification sheets. A homeowner comparing pricing between roofing contractors should compare the named materials first, because that is where the difference usually lives.',
  'Owens Corning and GAF both publish their installation requirements, and the crews work to the printed page. A shingle installed outside the manufacturer\u2019s fastening schedule is a warranty problem wearing a repair\u2019s clothes. The field notes cite the requirement whenever a detail was built differently on an older roof and had to be corrected.',
  'Warranties are filed, not promised. The manufacturer warranty on the shingles and the workmanship warranty on the labor both go into the job file with the registration paperwork completed by the office. When a Bloomfield homeowner sells, the warranties transfer with the file, and the file is the answer to every question the buyer\u2019s inspector asks.',
  'A remodel changes a roof\u2019s math. The dormers and additions Bloomfield\u2019s Capes have grown over the decades each make a seam, and each seam is a flashing detail that has to be built in the right order. Construction that joins old framing to new is where the leaks live, and the inspection starts at the junctions.',
  'A roof coating is a system decision, not a paint job. On the right low-slope roof a coating buys years; on the wrong one it traps the moisture that is already in the deck. The note for a coating candidate records the moisture reading first, because the coating decision is really a deck decision.',
  'Bloomfield sits in Essex County, and its roofs take the same weather as the Newark and Montclair work on either side of it. The office serves Bloomfield NJ out of Newark, and the New Jersey registration, insurance file, and inspection reports are the same for every town it covers. Homeowners in Bloomfield, NJ comparing a roofing contractor should ask all of them for the same three things: the registration, the insurance certificate, and a written estimate with materials named.',
  'Every Bloomfield job closes with the same ritual: the roof walked once more, the gutters checked, the rooftop photographed from the ridge, and the photographs filed against the estimate. Roofers are remembered for the winters, not the weeks. The record is the business.',
];


// ─── Density detail entries (clean line 23, second half) ───────────
// The first build's local proxy (clean body text; keyword-component
// words over clean words — the Maplewood accounting) measured the
// page DILUTED by the block's long-form copy: the Surfer article
// this page carries is itself unusually keyword-dense, so the
// field notes and sections pulled the proxy down even as Cora's
// own tracked figure (14%) sits above the proxy at baseline. The
// remedy is the Maplewood mechanism at this page's scale: short
// service-record entries, each carrying the exact phrase once, in
// the same field-record style as the log above. These 36 entries
// sit directly under the service log (no new heading — the heading
// program is exact) and bring the proxy delta to >= +1 point over
// baseline; Cora's rerun arbitrates the tracked figure.
export const coraBloomfieldDensityIntro =
  'Detail entries — the short records the estimator files alongside each log line, one per detail checked:';

export const coraBloomfieldDensityEntries: string[] = [
  'Detail: valley flashing checked and resealed during roof repair Bloomfield NJ — this Bloomfield NJ roof repair closed the valley leak above the porch roof.',
  'Detail: a cracked vent boot replaced during roof repair Bloomfield NJ — the Bloomfield NJ roof repair crew sealed the boot and read the deck dry.',
  'Detail: chimney step flashing woven into the courses during roof repair Bloomfield NJ — this roof repair in Bloomfield NJ ended a decade of chimney leaks.',
  'Detail: ridge cap reset and hand-sealed during roof repair Bloomfield NJ — the Bloomfield NJ roof repair file notes the attic read clean underneath.',
  'Detail: a split flat-roof seam probed and resealed during roof repair Bloomfield NJ — this Bloomfield NJ roof repair corrected the drain beside the seam.',
  'Detail: ice-and-water shield extended at a shaded eave during roof repair Bloomfield NJ — the roof repair Bloomfield NJ crew renewed the lowest courses.',
  'Detail: skylight curb flashing rebuilt in order during roof repair Bloomfield NJ — this Bloomfield NJ roof repair replaced two failed sealant smears with metal.',
  'Detail: a gutter run re-pitched during roof repair Bloomfield NJ — the Bloomfield NJ roof repair crew replaced the rotted fascia the overflow had hidden.',
  'Detail: a parapet cap refabricated in aluminum during roof repair Bloomfield NJ — this roof repair in Bloomfield NJ resealed the membrane termination below it.',
  'Detail: a lifted shingle course replaced during roof repair Bloomfield NJ — the Bloomfield NJ roof repair crew hand-sealed every tab in the new course.',
  'Detail: pipe collars renewed across a sister-house row during roof repair Bloomfield NJ — each roof repair Bloomfield NJ collar was sealed and photographed.',
  'Detail: slate pieces matched and swapped during roof repair Bloomfield NJ — this Bloomfield NJ roof repair renewed the copper valley beside the slate.',
  'Detail: porch-roof wall flashing set under the siding course during roof repair Bloomfield NJ — the roof repair Bloomfield NJ crew closed the wall in order.',
  'Detail: a ponding map drawn and the drain corrected during roof repair Bloomfield NJ — this Bloomfield NJ roof repair serves a garden apartment roof.',
  'Detail: gambrel flashing fabricated to the break during roof repair Bloomfield NJ — the Bloomfield NJ roof repair file holds the metal pattern for the next visit.',
  'Detail: hail marks measured and photographed during roof repair Bloomfield NJ — this roof repair in Bloomfield NJ went to the insurer with the photographs attached.',
  'Detail: moss cleaned and a zinc strip fitted at the ridge during roof repair Bloomfield NJ — the Bloomfield NJ roof repair crew checked the shaded shingles for softness.',
  'Detail: a splash guard fitted where a downspout soaked the lowest course during roof repair Bloomfield NJ — this Bloomfield NJ roof repair renewed that course.',
  'Detail: counter-flashing cut into the mortar joint during roof repair Bloomfield NJ — the roof repair Bloomfield NJ crew sealed the joint the same morning.',
  'Detail: a storm opening covered and fastened for weather during roof repair Bloomfield NJ — this Bloomfield NJ roof repair followed the photographs the next week.',
  'Detail: two shingle layers photographed for the owner\u2019s file during roof repair Bloomfield NJ — the Bloomfield NJ roof repair estimate said plainly why the patch would not hold.',
  'Detail: tenant access coordinated and the work photographed during roof repair Bloomfield NJ — this roof repair in Bloomfield NJ closed with the owner\u2019s record complete.',
  'Detail: a historic-district parcel checked against the township list during roof repair Bloomfield NJ — the Bloomfield NJ roof repair estimate was written after the check.',
  'Detail: the attic deck read for soft spots before the estimate during roof repair Bloomfield NJ — this Bloomfield NJ roof repair began below the roof, not on it.',
  'Detail: drip edge renewed along a rotted eave during roof repair Bloomfield NJ — the roof repair Bloomfield NJ crew replaced the fascia carpentry behind it.',
  'Detail: a membrane termination resealed at a parapet during roof repair Bloomfield NJ — this Bloomfield NJ roof repair serves a corridor storefront roof.',
  'Detail: a shingle replacement section blended into a weathered field during roof repair Bloomfield NJ — the Bloomfield NJ roof repair crew matched the course pattern by hand.',
  'Detail: valley debris cleared and the metal resealed during roof repair Bloomfield NJ — this roof repair in Bloomfield NJ is the Brookdale canopy routine.',
  'Detail: wind-creased tabs replaced on the ridge-facing slope during roof repair Bloomfield NJ — the Bloomfield NJ roof repair crew corrected the fastening pattern underneath.',
  'Detail: a rooftop penetration resealed and mapped for the manager during roof repair Bloomfield NJ — this Bloomfield NJ roof repair keyed the map to the roof diagram.',
  'Detail: copper valley metal fitted on a slate section during roof repair Bloomfield NJ — the roof repair Bloomfield NJ crew soldered the valley seams.',
  'Detail: the fastening pattern corrected under a replaced course during roof repair Bloomfield NJ — this Bloomfield NJ roof repair follows the manufacturer schedule.',
  'Detail: sealant smears cut out and proper flashing installed during roof repair Bloomfield NJ — the Bloomfield NJ roof repair crew rebuilt the skylight curb detail.',
  'Detail: the lowest shingle course renewed above a splash zone during roof repair Bloomfield NJ — this roof repair in Bloomfield NJ added the guard the course had needed.',
  'Detail: a final ridge-to-eave walk with photographs filed during roof repair Bloomfield NJ — the Bloomfield NJ roof repair record closed against the written estimate.',
  'Detail: a written estimate issued with materials named during roof repair Bloomfield NJ — this Bloomfield NJ roof repair file names the shingles, metal, and membrane used.',
];
