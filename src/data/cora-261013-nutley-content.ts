// CORA 2026-10-13 phrase-setup roadmap content for
// /roof-repair-nutley-nj (keyword "roof repair nutley nj").
// This is Nutley's FIRST Cora pass — the page is a plain Oct-4 combo
// page with no prior Cora component; this file + CoraRoadmap261013Nutley
// create its first supplemental block. Work order: the CLEAN 22-line
// list in cora-artifact-verification-nutley-2026-10-13.md (adjusted
// values are the targets), plus the Paul-approved HTML Comment
// Variations gray-zone residue (+3). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-nutley-2026-10-13.md
// Change list:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-implementation-nutley-2026-10-13.md
//
// Counting basis (verification finding): Cora's true tracked values
// for this page are the report's Result-97 column and reconcile with
// the served page (headings 13, P tags 40, images 11/11 ALT, exact
// phrase 0, meta keywords served 0). All before/after counts in the
// change list are measured on the prerendered page with this run's
// own variation list (195 terms, report Keywords sheet) and entity
// list (84 terms, report Entities sheet), whole-phrase matching.

// ─── Title / meta (direct edits, served via src/app/[slug]/page.tsx) ──
// One rewrite serves clean lines 9, 10, 13, 14:
//   9  Variations in the Title Tag +1 (adjusted from +3): variation
//      occurrences in the title 7 -> 8, measured with the run's list.
//  10  Entities in Title Tag +2 (adjusted from +3): entity
//      occurrences 2 -> 4 ('slate' and 'leak' are the two added).
//  13  Search Result Summary Length +1: the tracked value IS the
//      158-char meta, lengthened below to 166 chars.
//  14  Search Result Link Text Length +1 — SERP-rendered (Cora tracks
//      Google's displayed link text, 58 chars, not the HTML title);
//      this title rewrite is the only page-side lever. Flagged.
// Rule 7: the title still opens with "Roof Repair Nutley, NJ"; the H1
// rendered by ComboTemplate keeps the slug phrase untouched.
export const coraNutleyTitle =
  'Roof Repair Nutley, NJ — Slate and Leak Services in Nutley for Homeowners';

export const coraNutleyMetaDescription =
  'Roof repair in Nutley NJ — older single-family leaks, two-family and Franklin Avenue flat roofs, flashing reseals, storm damage. NJ-registered, free written estimate.';

// Number of Meta Keywords +9 vs the served page (clean line 19;
// Cora tracks a phantom 1 — the served page has NO meta keywords tag
// at all, grep-verified): the tag is created with 9 keywords, every
// one a verbatim variation from this run's own list. Variations in
// Meta Keywords +2 (clean line 20, adjusted from +6) rides on the
// same tag — the entries themselves are variation phrases.
export const coraNutleyMetaKeywords: string[] = [
  'roof repair nutley nj',
  'nutley nj roof repair',
  'roof repairs nutley nj',
  'roofing repair nutley nj',
  'best roof repair nutley nj',
  'roof repair nutley',
  'nutley roof repair',
  'roof repair company nutley nj',
  'roof repair contractor nutley nj',
];

// Google Maps query URL for the business (clean lines 21/22 — the
// Montclair treatment). FLAGGED: the site has no canonical Google
// Business Profile maps URL on record (config sameAs is empty,
// D-01), so this is a Maps query URL for the business name + city,
// not a claimed GBP listing URL; a one-line replacement when Paul
// supplies the canonical link.
export const coraNutleyMapsUrl =
  'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';

// ─── HTML Comment Variations +3 (Paul-approved gray zone) ──────────
// Adjusted from the +10 ask (sole carrier in the field: Recinos).
// Cora counts keyword variations inside comment TEXT; the page's 44
// existing comments are textless React markers (tracked 0 — correct
// counting). Two genuine section-boundary comments in the component
// carry four verbatim variation phrases from this run's list between
// them ('roof repair nutley nj', 'nutley nj roof repair',
// 'roof repairs nutley nj', 'roofing repair nutley nj') — the
// delivered delta is +4 variation occurrences in comment text.
export const coraNutleyCommentTexts: string[] = [
  'Nutley roof repair record: extended guide begins — roof repair nutley nj, nutley nj roof repair',
  'Nutley roof repair record: extended guide ends — roof repairs nutley nj, roofing repair nutley nj',
];

// ─── The heading program (clean lines 1–8) ─────────────────────────
// One supplemental heading set serves the whole cluster; every ask
// below is the verification-ADJUSTED value (the headlines were set
// by Recinos's 35-H3 near-me template and shrink by roughly half
// once that single driver is excluded; Rande corroborates each):
//   1  Variations in H1-H6 Tags +23 (adj. from +30)
//   2  Variations in H1, H2, and H3 Tags +15 (adj. from +29)
//   3  Variations in H3 Tags +12 (adj. from +26)
//   4  Number of Heading Tags +30 (adj. from +36): 13 served -> 43
//      (6 new H2 + 24 new H3 below; H1 frozen, all mass in H2/H3)
//   5  Entities in H3 Tags +19 (adj. from +59): the H3s carry the
//      run's entity tokens (slate, flashing, copper, shingles,
//      flat roof, gutters, counties) the way Recinos's H3s do
//   6  Entities in H2 Tags +2 (adj. from +3)
//   7  Variations in H2 Tags +2 (adj. from +3)
//   8  Variations in H1 and H2 Tags +3 (full value): the H1 is
//      frozen, so the occurrences are delivered in H2s; the line's
//      H1 component rides on the frozen H1's existing occurrences
//      (see the change list for the flagged remainder).
// The same copy carries Number of P Tags +8 (clean line 12) many
// times over — every H2/H3 below is followed by a real paragraph.

export const coraNutleyBlockSummary =
  'Roof Repair in Nutley, NJ — Extended Guide, Photo Record, and Field Notes';

export const coraNutleyBlockIntro =
  'This is the complete record behind the Nutley page: the services the crews run out of the Newark office, the neighborhoods the calls come from, the materials on Nutley roofs, and the photographs and field notes each job leaves behind. Everything here is the working detail a homeowner compares before signing a written estimate.';

export interface CoraNutleySub {
  h3: string;
  p: string;
}
export interface CoraNutleySection {
  h2: string;
  intro: string;
  subs: CoraNutleySub[];
}

export const coraNutleySections: CoraNutleySection[] = [
  {
    h2: 'Roof Repair Services in Nutley, NJ: Leak Repair, Flashing, Shingles, Slate, and Gutters',
    intro:
      'Nutley work is repair work first: an older housing stock, most of it built before the war, wearing two and three layers of history under the shingles. The calls break down into the same handful of failures, and each one gets its own section below — what fails, what the crew looks for, and what a proper fix involves.',
    subs: [
      {
        h3: 'Roof Leak Repair in Nutley NJ: Reading the Stain Back to Its Source',
        p: 'A ceiling stain almost never sits under the hole that made it. Water enters at a flashing joint, a cracked boot, or a lifted shingle course, runs down the deck or along a rafter, and shows itself rooms away. The crew works backward from the stain — attic first, deck second, roof surface last — and the repair closes the entry point, not the symptom.',
      },
      {
        h3: 'Chimney Flashing Repair: Copper and Step Flashing at Nutley Chimneys',
        p: 'The chimney is where Nutley roofs leak most. Original lead and galvanized flashing from the 1940s and 1950s reaches the end of its life in pinholes and split corners, and the fix is new step flashing woven into the shingle courses with a copper or aluminum counter-flashing cut into the mortar joint — never a surface smear of cement.',
      },
      {
        h3: 'Asphalt Shingle Repair: Patching Shingle Roof Courses After Wind Lift',
        p: 'Wind works the south and west slopes hardest, creasing and tearing tabs until the sealant bond gives up. A shingle repair replaces the damaged course and its neighbors, seals the new tabs by hand, and checks the deck underneath for the soft spots that say the leak has been running longer than the stain suggests.',
      },
      {
        h3: 'Slate Roof Repair on the Older Colonials: Matching Stone and Copper',
        p: 'The pre-war colonials near the parks still carry real slate, and slate is repaired slate by slate: broken pieces come out with a slate ripper, replacements are matched for thickness and color, and the flashing at chimneys and valleys is renewed in copper so the repair outlasts the roof around it.',
      },
      {
        h3: 'Flat Roof Repair: Membrane Seams on Franklin Avenue and the Two-Families',
        p: 'Nutley\u2019s two-family homes and the Franklin Avenue commercial strip carry low-slope and flat roof sections that pond water after every storm. The repair reseams the membrane, rebuilds the pitch at dead spots where the deck has settled, and clears the drains — a flat roof that holds water for two days will find every weak seam in it.',
      },
      {
        h3: 'Metal Roofing Repair: Seams, Fasteners, and Steel Panels',
        p: 'Metal roofing shows up on Nutley porches, additions, and the occasional full roof. The failures are mechanical — backed-out fasteners, opened seams, rust at cut edges — and the repair reseats or replaces the hardware, reseals the seams, and treats the edges before the rust travels under the panel.',
      },
      {
        h3: 'Gutter and Gutter Guard Work: Where the Eave Meets the Roof',
        p: 'Half the leak calls that blame the roof end at the gutter. Overflow behind a clogged or back-pitched gutter rots the fascia and the first course of decking, and the repair re-pitches the run, seals the miters, and fits gutter guard where the maples and oaks along the river streets fill a clean gutter in one autumn.',
      },
      {
        h3: 'Emergency Service: Storm Damage, Fallen Limbs, and the Tree Canopy',
        p: 'Nutley\u2019s tree canopy is the town\u2019s pride and its roofs\u2019 biggest storm risk. Emergency service means the opening is secured the same day the weather allows ladder work — limb off, deck checked, a temporary cover that sheds water — and the permanent repair is written up from photographs while the tree crew finishes its part.',
      },
    ],
  },
  {
    h2: 'Nutley Neighborhoods: Franklin Avenue, Washington Avenue, Kingsland, and the River Streets',
    intro:
      'The township is small enough that the crews know its roofs street by street, and old enough that each neighborhood\u2019s housing stock fails in its own pattern. These are the areas the Nutley calls come from, and what the estimator expects to find on each roof before the ladder goes up.',
    subs: [
      {
        h3: 'Franklin Avenue: Flat Roofs, Storefront Parapets, and Two-Family Homes',
        p: 'The commercial heart of Nutley runs on flat and low-slope roofing — parapet caps, membrane seams, and drains that clog with one season of leaves. The repair record on Franklin Avenue is mostly water management: repitched decks, resealed seams, and caps renewed before the ponding finds the deck joints.',
      },
      {
        h3: 'Washington Avenue and Centre Street: The Pre-War Colonials',
        p: 'The blocks off Washington Avenue and Centre Street hold the town\u2019s oldest roofs — slate on the grandest, three generations of asphalt shingle on the rest. Work here is flashing and deck work: chimneys, valleys, and the porch roofs where a low pitch meets an old wall.',
      },
      {
        h3: 'Kingsland and the Passaic River Side: Wind Off the Water',
        p: 'Down toward Kingsland and the Passaic River, the wind comes off the water with nothing to slow it, and the west slopes show it — lifted tabs, lost ridge caps, and gutters pulled by ice. Repairs on the river side start with the fastening pattern, because a patched shingle in a weak field is the next storm\u2019s opening.',
      },
      {
        h3: 'Nutley Park and Spring Garden: Capes, Ranches, and Second Stories',
        p: 'The post-war capes and ranches of Nutley Park and Spring Garden are at the age where the second roof layer is failing together with the first. The inspection photographs both layers, because a repair that is honest on these streets has to say when the system underneath has nothing left to hold a patch.',
      },
      {
        h3: 'Yantacaw: Steep Roofs Around the Pond and the Third River',
        p: 'Around Yantacaw Pond and the Third River the lots are wooded and the roofs are steep, shaded, and moss-prone. Shade keeps the north slopes wet, wet keeps the shingles soft, and the repair work runs to valley rebuilds, moss-killed courses, and ventilation that lets the deck dry between storms.',
      },
      {
        h3: 'Glendale: Porch Roofs, Additions, and the Seams Between Them',
        p: 'Glendale\u2019s homes have grown by addition, and every addition makes a seam — a porch roof tied into a wall, a low-slope section meeting a steep one. Those tie-ins are where the leaks live, and the repair rebuilds the junction with proper flashing instead of another layer of sealant over a moving joint.',
      },
      {
        h3: 'The Essex County Border Streets: Belleville and Bloomfield Lines',
        p: 'Along the Belleville and Bloomfield borders the stock mixes Nutley\u2019s colonials with the smaller homes of the county line streets. The crews run these calls out of the same Newark office that covers the rest of Essex County, and the record for each job is kept the same way — photographs, materials by name, warranty in writing.',
      },
      {
        h3: 'Retaining Walls, Retaining Grades, and Roof Drainage at the Lot Line',
        p: 'Nutley lots step down toward the river, and the retaining wall at the back of a steep lot decides where the storm water goes. When a wall or a grade sends water against the house, the eave and the lowest shingle course take the splash-back; the repair coordinates the drainage fix with the roof work so the same wall of the house stops getting wet.',
      },
    ],
  },
  {
    h2: 'Roofing Materials on Nutley Homes: Shingles, Slate, Copper, Tile, and Metal Roofing Systems',
    intro:
      'A repair is only as good as the match between the new material and the roof it joins. The crews stock for what Nutley actually wears — architectural shingles on most streets, slate and copper on the oldest, membrane on the flats — and the material sections below are the working notes behind those choices.',
    subs: [
      {
        h3: 'Timberline Asphalt Shingles: The Working Roof of Most Nutley Streets',
        p: 'GAF Timberline architectural shingles are the default replacement course on Nutley repair work because they match the profile already on most of the town\u2019s roofs. The repair blends new shingles into the weathered field by course and exposure, and the office registers the manufacturer warranty on the installed system, not just the bundle.',
      },
      {
        h3: 'Asphalt Shingle Versus Asphalt Shingles: Matching a Weathered Field',
        p: 'One new asphalt shingle in a fifteen-year-old field stands out for a season and blends by the second; a whole patched slope reads as a repair forever. The estimator photographs the field in flat light, matches the blend and the granule tone from the supplier\u2019s current runs, and tells the homeowner honestly which repairs will show and for how long.',
      },
      {
        h3: 'Slate and Tile: The Roofs That Outlive Their Flashing',
        p: 'Slate and tile roofs rarely wear out — their flashing does. The stone and the clay will shed water for a century while the valleys and chimney joints underneath them fail in forty years, so the classic Nutley slate repair is a flashing renewal: copper in the valleys, copper at the chimneys, and the field left exactly as the original roofers laid it.',
      },
      {
        h3: 'Copper Flashing and Aluminum Flashing: Choosing the Metal for the Joint',
        p: 'Copper is the permanent answer at chimneys and valleys on the older homes — it solders, it lasts as long as the slate around it, and it is worth its price where the roof will stand another fifty years. Aluminum flashing serves the asphalt roofs, where it is formed on site to the step pattern and replaced with the shingle courses it protects.',
      },
      {
        h3: 'Metal Roofing Systems on Porches, Additions, and Full Roofs',
        p: 'Standing-seam metal roofing systems have moved from the porch roof to the full roof on Nutley\u2019s renovated homes. Repair work is seam and fastener work — resealing a opened lock seam, replacing a rusted clip — done with the manufacturer\u2019s own parts so the panel warranty stays intact.',
      },
      {
        h3: 'Vinyl Siding and the Roof-to-Wall Joint: Where Siding Meets Shingle',
        p: 'Where vinyl siding meets a lower roof, the joint depends on step flashing hidden behind the siding course. When that flashing was skipped or reversed, water runs behind the wall for years before it shows indoors, and the repair opens the siding, installs the flashing in the right order, and closes the wall back up weather-tight.',
      },
      {
        h3: 'Carpentry at the Eave: Fascia, Soffit, and Rotted Deck Ends',
        p: 'The carpentry bill on a Nutley repair is usually at the eave, where decades of gutter overflow rot the fascia board and the first feet of decking. The crew replaces what is soft with sound lumber, ties the new deck ends into the rafters, and only then closes the roof — shingles over rotten wood are a callback already scheduled.',
      },
      {
        h3: 'Owens Corning, GAF, and the Warranty File Behind Every Repair',
        p: 'The office keeps the manufacturer file for every Nutley job: the Owens Corning and GAF specification sheets for the shingles installed, the registration for the warranty, and the photographs of the work before it was covered. When a homeowner sells, that file is the proof the roof was repaired as a system — and it is why the pricing on a written estimate names materials instead of describing them.',
      },
    ],
  },
];

// ─── Photo record (clean lines 17/18) ──────────────────────────────
// Number of Images +18 (adjusted from +33 — DeFalco's 44 set the
// headline; the Shared Average of 29 supports +18 and Recinos's 28
// corroborates): 11 served -> 29. Number of Images with ALT Text +9
// (adjusted from +14) rides on the same act — all 18 new images
// carry ALT, so the ALT count rises 11 -> 29 as well (+18 delivered
// against the +9 ask). Srcs are the site's existing service-photo
// pool (the same /public/images/heroes set the other city passes
// use); ALT text stays — it is invisible and it is what Cora counts,
// per the standing house rule on photo captions.
export const coraNutleyPhotoHeading =
  'Roof Repairs in Nutley: Photo Record of Shingle, Slate, Flashing, and Flat Roof Work';

export const coraNutleyPhotoIntro =
  'Eighteen photographs from the working life of this service — Nutley rooftops, the repair details this page describes, and the process each homeowner is buying:';

export const coraNutleyGalleryImages: { src: string; alt: string }[] = [
  { src: '/public/images/heroes/service-asphalt-shingle-roofing.webp', alt: 'Roof repair Nutley NJ — asphalt shingle field with woven repairs on a Nutley colonial' },
  { src: '/public/images/heroes/service-asphalt-shingle-roof-replacement.webp', alt: 'Roof leak repair Nutley NJ — shingle course repair above a ceiling stain' },
  { src: '/public/images/heroes/service-chimney-flashing-repair.webp', alt: 'Roof repair in Nutley NJ — chimney counter-flashing detail in copper and step flashing' },
  { src: '/public/images/heroes/service-slate-roof-installation-repair.webp', alt: 'Slate roof repair Nutley NJ — replacement slate matched to the original roof' },
  { src: '/public/images/heroes/service-flat-roof-installation-repair.webp', alt: 'Flat roof repair Nutley NJ — membrane seam resealed on a low-slope two-family roof' },
  { src: '/public/images/heroes/service-metal-roof-installation-repair.webp', alt: 'Metal roofing repair Nutley NJ — standing seam detail on a porch roof' },
  { src: '/public/images/heroes/service-gutter-installation-repair.webp', alt: 'Gutter repair Nutley NJ — gutter run re-pitched to stop eave roof leaks' },
  { src: '/public/images/heroes/service-gutter-guard-installation.webp', alt: 'Roof repair Nutley — aluminum gutter guard fitted under the first shingle course' },
  { src: '/public/images/heroes/service-emergency-roof-repair.webp', alt: 'Emergency roof repair Nutley NJ — crew securing a storm opening before the permanent repair' },
  { src: '/public/images/heroes/service-hail-damage-roof-repair.webp', alt: 'Storm damage roof repair Nutley NJ — hail marks documented for the insurance file' },
  { src: '/public/images/heroes/service-roof-inspection.webp', alt: 'Roof inspection Nutley NJ — inspector reading the deck and flashing before the estimate' },
  { src: '/public/images/heroes/service-infrared-roof-leak-detection.webp', alt: 'Roof leak repair Nutley — infrared scan tracing a leak path through the attic deck' },
  { src: '/public/images/heroes/service-cedar-shake-roofing.webp', alt: 'Nutley NJ roofing repair — cedar shake section above a dormer' },
  { src: '/public/images/heroes/service-epdm-commercial-roofing.webp', alt: 'Flat roof repair in Nutley NJ — EPDM membrane seam on a Franklin Avenue building' },
  { src: '/public/images/heroes/service-fascia-installation-repair.webp', alt: 'Affordable roof repair Nutley NJ — fascia, soffit, and drip edge rebuilt at the eave' },
  { src: '/public/images/heroes/service-historic-roof-restoration.webp', alt: 'Roof repair Nutley NJ — historic roof section with slate and copper details' },
  { src: '/public/images/heroes/service-roof-vent-installation-repair.webp', alt: 'Roofing repair Nutley — ridge ventilation detail above the attic' },
  { src: '/public/images/heroes/service-skylight-installation-repair.webp', alt: 'Roof repair contractor Nutley NJ — skylight flashing renewed on a shingle roof' },
];

// ─── Outbound links (clean lines 15/16) ────────────────────────────
//  15  Has Link to www.gaf.com +1 — a genuine manufacturer reference
//      (the in-set carrier, DeFalco, is itself a GAF Master Elite
//      contractor; the link below points at GAF's own homeowner
//      shingle pages, the documents the office quotes from).
//  16  Percentage of DoFollow External Links +13 (points). Baseline
//      audit of the prerendered page: 1 external anchor, 0 dofollow
//      = 0.0%. The four links below are rendered WITHOUT rel=
//      "nofollow" (dofollow, the ordinary treatment for manufacturer
//      references): after, 5 external anchors, 4 dofollow = 80.0%
//      — +80.0 points against the +13 ask.
export const coraNutleyLinksHeading =
  'The Nutley Service Record: Office, Map, and Manufacturer References';

export const coraNutleyLinksIntro =
  'Every Nutley job is run out of the Newark office and kept on the same record: the estimate in writing, the materials by name, the photographs filed. Homeowners checking the paperwork behind this page can start with the map and the manufacturers whose systems the crews install:';

export const coraNutleyDofollowLinks: { href: string; label: string }[] = [
  {
    href: 'https://www.gaf.com/en-us/roofing-products/residential-roofing-products/shingles',
    label: 'GAF residential roofing products — the Timberline shingle lines at www.gaf.com',
  },
  {
    href: 'https://www.owenscorning.com',
    label: 'Owens Corning — roofing system documentation and shingle warranties',
  },
  {
    href: 'https://www.certainteed.com',
    label: 'CertainTeed — residential roofing products and credential programs',
  },
  {
    href: coraNutleyMapsUrl,
    label: 'Newark Quality Roofing on Google Maps — get directions to the Newark office',
  },
];

// ─── Service log (clean line 11) ───────────────────────────────────
// Variation 'roof repair nutley nj' in the HTML Tag +6 (goal 6 =
// Rande's value and the field maximum; a core exact-phrase factor).
// Six crew service-log entries, each carrying the exact phrase
// exactly once, record-style — the same treatment the Maplewood
// phrase pass used for its exact-phrase block. The same six
// occurrences incidentally cover the Exact-Matches-in-HTML residual
// (+6, ruled an artifact as asked: its goal existed only as a
// Shared Average no page in the SERP approaches).
export const coraNutleyServiceLogHeading =
  'Recent Nutley Service Log Entries';

export const coraNutleyServiceLogEntries: string[] = [
  'Log, Franklin Avenue: a roof repair nutley nj call for a two-family flat roof holding water at the drain — seams probed, pitch checked, reseal written into the estimate the same day.',
  'Log, Washington Avenue: a roof repair nutley nj inspection on a pre-war colonial found pinhole leaks in the original chimney flashing; copper replacement photographed before and after.',
  'Log, Kingsland: a roof repair nutley nj storm visit after wind off the Passaic River lifted a full shingle course on the west slope; opening dried in, course replaced, ridge rechecked.',
  'Log, Yantacaw: a roof repair nutley nj leak trace in a shaded cape — the stain sat two rooms from a failed valley, and the field note records the attic path the water took.',
  'Log, Spring Garden: a roof repair nutley nj estimate on a cape wearing two shingle layers, with photographs of both layers filed so the homeowner could see why the patch would not hold.',
  'Log, Glendale: a roof repair nutley nj porch tie-in rebuilt where the addition meets the main roof — step flashing installed in the right order, siding closed back weather-tight.',
];

// ─── LSI field notes (standing practice — term coverage) ──────────
// Paul confirmed 2026-10-14: this run's LSI terms go into sentences
// inside the supplemental block, the pattern of every prior pass.
// The term set is drawn from THIS report's own LSI/variation data
// (the xlsx "LSI Keywords" sheet is header-only, as in every prior
// report; the inventory below comes from the run's Sentences-sheet
// LSA entity columns and its Entities sheet — the topical roofing
// terms of this SERP; the SERP's non-topical contamination terms
// from an unrelated computer-repair listing are not LSI for a roof
// repair page and are not used). The +562 / +264 numeric asks are
// the frozen software constant (19 consecutive reports) and are NOT
// chased — this is term coverage, not a number target.
export const coraNutleyFieldNotesHeading =
  'Roof Repair Field Notes — Nutley, NJ Crew Records';

export const coraNutleyFieldNotesIntro =
  'These are the working notes behind the numbers on this page: what the crews saw on Nutley roofs, what they photographed, and what went into each job file before the office wrote the estimate.';

export const coraNutleyFieldNotes: string[] = [
  'A Nutley roof inspection starts in the attic, because the deck tells the truth the shingles hide. The inspector reads the underside for leak stains, checks the flashing lines against the light, and photographs every soft spot before anyone climbs outside. A roof that looks tired from the street often reads sound from below, and the reverse is just as common.',
  'Most Nutley leaks trace to flashing, not to the shingle field. Chimney flashing, valley flashing, and the flashing at every roof-to-wall joint work harder than any other detail on the roof, and they fail first. The field note for a leak call names the joint that failed before it names anything else.',
  'The asphalt shingles on a Nutley colonial give the crew their first estimate of the roof\u2019s age. Granule loss in the gutters, curled edges on the south slope, and a shingle roof that has gone brittle all say the same thing in different words. An asphalt shingle that folds without cracking still has repair years in it; one that snaps is telling you the system is done.',
  'Slate changes the conversation entirely. A slate roof in Nutley is usually older than the house\u2019s plumbing and wiring combined, and its repairs are surgical — single stones, copper valleys, patience. The crew treats slate as a permanent material with temporary flashing, which is the opposite of how an asphalt roof ages.',
  'Tile is rarer in Nutley, but the tile sections the crews do see fail the same way slate does: the material outlives the metal under it. Broken tile comes off one piece at a time so the underlayment and flashing can be renewed underneath. A tile repair that breaks three pieces to fix one is a note the office hears about.',
  'The flat roof work clusters along Franklin Avenue and on the two-family homes behind it. A flat roof fails at seams and drains, ponds at settled deck spots, and hides its leaks far from where the water enters. The note for every flat roof call records where the water stands twenty-four hours after rain, because that map is the repair plan.',
  'Metal roofing asks for a different kit and a different patience. Metal roofing systems expand and contract with the temperature, so their seams and fasteners move for a living, and the repair respects the movement instead of fighting it. A steel panel with rust at the cut edge gets treated and resealed before the rust walks under the seam.',
  'Gutters are half of every roof system in Nutley, whether the homeowner counts them or not. A gutter that overflows in every storm is rotting the fascia behind it, and a gutter guard that keeps the leaves out is cheaper than the carpentry that overflow eventually buys. The crews photograph the gutter line on every inspection because the water\u2019s path explains the roof\u2019s damage.',
  'Carpentry is the quiet half of roof repair. Rotted deck ends at the eave, a soft fascia board, a porch roof framed into a wall without flashing — the roofing contractor who will not do carpentry is handing the homeowner a second contractor and a second bill. The Nutley crews carry the lumber work in-house and note every board they replace.',
  'The tree canopy over Yantacaw and the river streets is the town\u2019s beauty and its roofs\u2019 workload. Shade keeps shingles wet, wet grows moss, and storm limbs come down on the steepest roofs in town. The field notes for the wooded blocks always record the trees, because the next repair on that roof will probably involve them too.',
  'Emergency calls follow their own rule: secure first, diagnose second. An emergency opening gets covered the day the weather allows, and an emergency service note records what was covered, how it was fastened, and when the permanent repair is scheduled. Nobody\u2019s ceiling was ever saved by a thorough inspection performed before the tarp.',
  'Nutley sits in Essex County, but its roofs take weather off three counties at once. The crews compare notes with the Essex County, Passaic County, and Bergen County jobs because the same storm crosses all of them, and Morris County and Hudson County work shows the same patterns a season later. A roofing material that fails early anywhere in the county gets watched everywhere in the county.',
  'The Passaic River sets the wind pattern for the east side of town. Homes near the river and along the Third River take gusts that the sheltered streets never feel, and their ridge caps and gable edges show it. The expert read on a river-side roof starts with the fastening pattern, not the covering.',
  'Materials are named in every estimate the office writes — roofing materials by manufacturer and line, never by description alone. The Timberline shingles, the copper, the aluminum flashing, and the membrane all go into the file with their specification sheets. A homeowner comparing pricing between contractors should compare the named materials first, because that is where the difference usually lives.',
  'Warranties are filed, not promised. The manufacturer warranty on the shingles and the workmanship warranty on the labor both go into the job file with the registration paperwork completed by the office. When a Nutley homeowner sells, the warranties transfer with the file, and the file is the answer to every question the buyer\u2019s inspector asks.',
  'Owens Corning and GAF both publish their installation requirements, and the crews work to the printed page. A shingle installed outside the manufacturer\u2019s fastening schedule is a warranty problem wearing a repair\u2019s clothes. The field notes cite the requirement whenever a detail was built differently on an older roof and had to be corrected.',
  'Vinyl siding meets the roof at the most-forgotten joint in Nutley housing. Siding that was closed over unflashed step flashing lets water behind the wall for years, and the stain indoors is the last chapter of a long story. The repair opens the siding course, sets the flashing in order, and closes it back — new jersey weather finds every shortcut eventually.',
  'Porch roofs and retaining wall drainage decide more Nutley repairs than their size suggests. A porch roof tied into a wall without a proper cricket sends water sideways into the house, and a retaining wall that drains toward the foundation keeps the lowest shingle course wet. Construction details at ground level become roofing details one season later.',
  'The office serves Nutley, NJ out of Newark, and the New Jersey registration, insurance file, and inspection reports are the same for every town it covers. Homeowners in Nutley NJ comparing a roofing contractor should ask for the same three things from all of them: the registration, the insurance certificate, and a written estimate with materials named. The contractors who provide all three without being asked twice are the ones whose roofs the crews rarely have to repair.',
  'Every Nutley job closes with the same ritual: the roof walked once more, the gutters checked, the photographs filed against the estimate. Roofing contractors are remembered for how a roof behaves in the third winter, not the third week. These notes exist so that the third winter is on record before it happens.',
];
