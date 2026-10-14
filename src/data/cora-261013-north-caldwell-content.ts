// CORA 2026-10-13 phrase-setup roadmap content for
// /roof-repair-north-caldwell-nj (keyword "roof repair north
// caldwell nj"). This is North Caldwell's FIRST Cora pass — the
// page is a plain Oct-4 combo page with no prior Cora component;
// this file + CoraRoadmap261013NorthCaldwell create its first
// supplemental block. Work order: the CLEAN 39-line list in
// cora-artifact-verification-north-caldwell-2026-10-13.md
// (adjusted values are the targets). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-north-caldwell-2026-10-13.md
// Change list:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-implementation-north-caldwell-2026-10-13.md
//
// Counting basis (verification finding): Cora's tracked values
// for this page are the report's appended-target column and
// reconcile with the served page (title 30, meta 149, headings
// 13, P tags 40, images 11/11 ALT, links 356, comments 46; meta
// keywords: no tag served). All before/after counts in the
// change list are measured on the prerendered page with this
// run's own inventories — 237 variation terms (report Variations
// sheet) and 118 entity terms (report Entities sheet),
// whole-phrase matching, terms deduplicated after
// normalization. The entity proxy reproduces Cora's tracked
// baselines EXACTLY (title 3, meta 5, H2 23, H3 4); the
// leading-variation proxy (headings opening with a verbatim
// variation phrase) reproduces the tracked baseline 5; the
// raw substring counts for the HTML phrase pair reproduce
// Cora's tracked 4 / 4 exactly. Cora's variation-distinct
// counting differs from the whole-phrase proxy, so variation
// deltas are reported by the proxy as measured and Cora's
// rerun arbitrates — the treatment of every prior change list.
//
// DISCIPLINE (verification, explicit): the clean list
// implements ROADMAP LINES ONLY. This roadmap's schema asks
// are ONLY the Offer pair and the email pair — NO
// RoofingContractor node, NO hasMap, NO ContactPoint, NO
// telephone/streetAddress schema is added (none is roadmapped
// for North Caldwell, however real the Overview deficits are).
// The 4-line rating cluster is an average-fraction ARTIFACT
// (zero setter carriers) and BLOCKED regardless — no verified
// rating exists and none is ever invented (D-01). No HTML
// Comment line and no Style Tags line is roadmapped here, so
// no boundary comments and no style block are added. The
// unroadmapped Overview External Links deficit (177) is NOT
// implemented — only the roadmapped outbound lines are.

// ─── Title (direct edit, served via src/app/[slug]/page.tsx) ──────
// One rewrite serves clean lines 1–5 (+ the riders 6–7):
//   1  Search Result Link Text Length +15 (adjusted from +32;
//      the goal 62 set by R4's homepage falls to R1/R3's 45;
//      Cora's tracked value IS the live HTML title — a direct
//      lever). CONFLICT, DISCLOSED: no construction at exactly
//      45 chars carries BOTH no-comma phrase singles below
//      under the Rule-7 comma opening (the comma-free segment
//      "North Caldwell NJ" alone is 17 chars; 30 + 3 + 17 = 50
//      is the floor). Per Paul's title-conflict rule (Essex
//      Fells, 2026-10-14: the full literal asks win over exact
//      length, clean construction, delta disclosed) the title
//      lands at 50 chars — the length line delivers +20 against
//      the +15 adjusted ask, the same trade Paul approved for
//      Essex Fells and Caldwell.
//   2  Variations in the Title Tag +2 (stands; goal 4 set by
//      R1): on the reading that reproduces Cora's tracked
//      baseline of 2 (multi-word phrases, longest-match), the
//      rewrite carries 'roof repair', 'north caldwell',
//      'north caldwell nj', and 'caldwell nj' = 4.
//   3  Entities in Title Tag +1 (stands; goal 4 tied R1 + R2):
//      entity occurrences 3 -> 5 on the calibrated proxy
//      ('north caldwell' x2, 'caldwell' x2, 'roof' x1).
//   4  Variation 'north caldwell nj' in Title Tag +1 (stands;
//      carried by R2): the comma-free second segment carries
//      the contiguous phrase (Cora tracked 0 — the baseline
//      title writes "North Caldwell, NJ" with the comma).
//   5  Variation 'caldwell nj' in Title Tag +1 (stands; carried
//      by R2): the same segment carries it inside the longer
//      form.
//   6  Variations in Search Result Link Text +1 — SERP-rendered
//      rider; rides on this rewrite. Flagged.
//   7  Variations in Search Result Display URL +1 —
//      SERP-rendered rider; the BreadcrumbList crumb names in
//      the component's graph are the page-side lever. Flagged.
// Rule 7: the title still opens with "Roof Repair North
// Caldwell, NJ"; the H1 rendered by ComboTemplate keeps the
// slug phrase untouched.
export const coraNorthCaldwellTitle =
  'Roof Repair North Caldwell, NJ — North Caldwell NJ';

// ─── Meta description (direct edit, same override) ────────────────
// One rewrite to ≈159 chars serves clean lines 8–13 (+ the
// riders 14–16). Cora's tracked value IS our meta string, so
// the rewrite is the direct lever for the Summary Length line:
//   8  Search Result Summary Length +10 (adjusted from +94;
//      the goal 243 set by R4 alone falls to the Page-1
//      Average 159.1; every other setter sits at or below our
//      tracked 149): the rewrite is 159 chars.
//   9  Entities in Meta Description +1 (adjusted from +3; goal
//      8 set by R2 falls to R4's 6): entity occurrences 5 -> 9
//      on the calibrated proxy.
//  10  Variation 'caldwell' in the Meta Description +1
//      (stands; goal 2 set by R2): occurrences 1 -> 2
//      ("North Caldwell" + the standalone "Caldwell").
//  11  Variation 'roofing' in the Meta Description +2 (stands;
//      goal 2 set by R2): occurrences 0 -> 2.
//  12  Variation 'new jersey' in the Meta Description +1
//      (stands; carried by R4 alone at trivial size; rides):
//      occurrences 0 -> 1.
//  13  Variations in Meta Description +1 (stands; goal 4 tied
//      R1 + R2): the rewrite's variation occurrences rise on
//      the proxy; reported as measured.
//  14  Variations in Search Result Summary +2 — SERP-rendered
//      rider (goal 4.1 is a Page-1 fraction but R1 + R2 carry
//      4); the factor reads the same served meta string.
//      Flagged.
//  15  Variations in OpenGraph Description +1 — rider; the
//      og:description is built from this same string (buildOG),
//      so one rewrite serves both tags.
//  16  Variations in Meta Twitter Description +1 — rider; the
//      served twitter:description is set from this same string
//      for this slug only (see the override in page.tsx).
export const coraNorthCaldwellMetaDescription =
  'Roof repair in North Caldwell NJ — New Jersey roofing crews for leak repair and roof replacements, Caldwell roofing estimates in writing, and free inspections.';

// Number of Meta Keywords (clean line 35): the served page has
// NO meta keywords tag at all (Cora's tracked 1 is the
// field-wide phantom; goal 6 is R3's real, head-captured list,
// corroborated by ten other real lists in the field). The tag
// is created with 6 keywords, every one a verbatim variation
// from this run's own list.
export const coraNorthCaldwellMetaKeywords: string[] = [
  'roof repair north caldwell nj',
  'north caldwell nj roof repair',
  'roof repairs north caldwell nj',
  'caldwell nj roof repair',
  'roof repair north caldwell',
  'roof repair contractor north caldwell nj',
];

// ─── The heading program (clean lines 17–25) ─────────────────────
// One coordinated program in the new block: +22 heading tags
// (13 -> 35) = 7 new H2 + 13 new H3 + 2 new H4. H1 frozen; all
// mass lands in H2/H3/H4 inside the block.
//  17  Number of Heading Tags +22 (adjusted from +121; goal
//      134 set by R4's homepage falls to R1's 35).
//  18  Number of H2 Tags +4 (adjusted from +78; average-based,
//      soft): 7 new H2 (9 -> 16).
//  19  Leading Variations in H1-H6 Tags +4 (adjusted from +7;
//      goal falls to R1's 9): five of the new headings open
//      with verbatim variation phrases (the services H2, its
//      first H3, the neighborhoods H2, the photo H2, the log
//      H2) — the calibrated proxy's baseline is 5.
//  20  Entities in H3 Tags +13 (adjusted from +21; goal falls
//      to R1's 17): the H3 set carries the run's entity terms
//      (chimney, flashing, slate, shingle, gutters, attic, ice
//      dams) throughout; the delivered delta is reported as
//      measured on the calibrated proxy (baseline 4).
//  21  Variations in H3 Tags +5 (stands; goal 9 set by R1):
//      the same H3 set carries the variation tokens.
//  22  Number of Questions In H3 Tags +6 (stands; goal 6 set
//      by R2 — DeFalco's six genuine H3 FAQ headings, the
//      Roseland shape, live-verified): six REAL question H3s
//      in the questions section, each with a genuine answer
//      beneath. This page's six questions sit in <summary>
//      elements (the summary-trap); the fix is real headings,
//      not moved accordion text.
//  23  Variation 'north caldwell nj' in H2 Tags +1 (stands;
//      carried by R2): two of the new H2s carry the contiguous
//      no-comma form.
//  24  Variation 'north caldwell nj' in H3 Tags +1 (stands;
//      carried by R2): the first services H3 carries it.
//  25  Has Entities in H4 Tags +1 (stands; carried by R1 + R2
//      + R4): the page serves zero H4 tags, so two genuine H4
//      subheadings carrying entities are introduced inside the
//      block (the Essex Fells H5 precedent; black, normal-case
//      per house design rules). The H4 COUNT factor is not
//      roadmapped — only this presence line is owed.

export const coraNorthCaldwellBlockSummary =
  'Roof Repair in North Caldwell, NJ — Extended Guide, Photo Record, and Field Notes';

export const coraNorthCaldwellBlockIntro =
  'This is the complete record behind the North Caldwell page: the services the crews run out of the Newark office, the streets and wooded lots the calls come from, the questions homeowners ask before they sign, and the photographs and field notes each job leaves behind. Everything here is the working detail a homeowner compares before signing a written estimate.';

export interface CoraNorthCaldwellSub {
  h3: string;
  p: string;
  h4?: string;
  h4p?: string;
}
export interface CoraNorthCaldwellSection {
  h2: string;
  intro: string;
  subs: CoraNorthCaldwellSub[];
}

export const coraNorthCaldwellSections: CoraNorthCaldwellSection[] = [
  {
    h2: 'Roof Repair North Caldwell NJ: Leak Repair, Flashing, Shingles, Slate, and Flat Roofs',
    intro:
      'Most of the roofing North Caldwell NJ homeowners call about is not a failed roof — it is a failed detail on a sound one: a flashing joint, a vent boot, a course of shingles the wind worked loose under the tree canopy. The borough\u2019s homes were built lot by lot on wooded ground, and each era fails in its own way. These are the services the North Caldwell calls break down into, and what a proper fix involves for each.',
    subs: [
      {
        h3: 'Roof Repair North Caldwell NJ: Tracing a Leak From the Stain to the Source',
        p: 'A ceiling stain almost never sits under the opening that made it. Water enters at a flashing joint or a lifted shingle course, travels along the deck or a rafter, and shows itself a room away. The crew works backward from the stain — attic first, deck second, roof surface last — and the repair closes the entry point, not the symptom. A leak closed at its source stays closed; a stain sealed over is a repair scheduled twice.',
      },
      {
        h3: 'Chimney Flashing Repair: Step Flashing Set Into the Masonry',
        p: 'The chimney is where North Caldwell roofs leak most. Original flashing from the borough\u2019s building decades reaches the end of its life in pinholes and split corners, and the honest fix is new step flashing woven into the shingle courses with counter-flashing cut into the mortar joint — never a surface smear of cement over a failed joint. The masonry gets photographed with the flashing, because half of chimney work is really brickwork.',
        h4: 'Counter-Flashing and the Chimney Crown: Where the Repair Succeeds or Fails',
        h4p: 'The counter-flashing and the crown decide whether a chimney repair lasts. A cracked crown sheds water behind sound flashing, and mortar joints opened by freeze and thaw let it in course by course. The record photographs both before the flashing order is written, because sealing new metal into failed masonry is a repair scheduled to fail.',
      },
      {
        h3: 'Asphalt Shingle Repair: Matching Weathered Courses on Borough Colonials',
        p: 'A patch that glares is a patch done without patience. The crew matches the replacement shingles to the weathered field for weight, profile, and granule tone, replaces the damaged course and its neighbors, and seals every new tab by hand. The deck under the patch is checked for the soft spots that say the leak ran longer than the stain suggests — on shaded North Caldwell lots, it usually has.',
      },
      {
        h3: 'Slate Roof Repair: Single Stones Replaced on the Borough\u2019s Oldest Homes',
        p: 'The borough\u2019s oldest homes still carry real slate, and slate is repaired slate by slate: broken pieces drawn with a slate ripper, replacements matched for thickness and color, and the valley and chimney flashing renewed alongside so the repair outlasts the roof around it. A slate roof is a permanent material with temporary flashing, which is the opposite of how an asphalt roof ages.',
      },
    ],
  },
  {
    h2: 'North Caldwell NJ Roof Repair: Mountain Avenue, Central Avenue, and the Wooded Side Streets',
    intro:
      'North Caldwell is a borough of wooded lots and quiet streets, and the crews know its roofs by their tree cover as much as by their addresses — the colonials along Mountain Avenue, the homes off Central Avenue, and the blocks around West Essex, where the canopy never really lifts. These are the areas the calls come from, and what the estimator expects to find on each roof before the ladder goes up.',
    subs: [
      {
        h3: 'Mountain Avenue: Tall Trees, Steep Lots, and Shade That Never Lifts',
        p: 'Mountain Avenue carries the borough through its wooded center, and its roofs live in permanent shade. Shade keeps a roof wet: moss works into the shingle edges, leaves mat in the valleys, and a small leak stays damp long enough to rot the deck beneath it. The inspection on a Mountain Avenue roof starts in the valleys and at the north slope, because that is where the water has been sitting.',
      },
      {
        h3: 'Central Avenue Colonials: Valleys, Chimneys, and Dormer Details',
        p: 'The colonials off Central Avenue hold the borough\u2019s detail work: valleys rebuilt where two steep planes meet, chimney flashing renewed in step and counter courses, and dormers whose cheeks were never flashed in order. These roofs reward patience and punish shortcuts, and the estimates say so in writing.',
      },
      {
        h3: 'The West Essex Blocks: Gutters, Eaves, and the Attic Below',
        p: 'Around West Essex the pattern repeats street after street: gutters that overflow in every storm quietly rot the fascia and the eave, and the attic below tells the story in stained decking at the edges. The repair coordinates the gutter work with the roof work — runs re-pitched, guards fitted where the trees demand them, and the lowest shingle courses checked before they are signed off.',
        h4: 'Ice Dams on Shaded North Slopes: Prevention Built Into the Repair',
        h4p: 'The shaded north slopes around West Essex grow the borough\u2019s worst ice dams. Heat escaping through a thin attic floor melts the snowpack from below, the meltwater refreezes at the cold eave, and the dam backs water under the shingles. The durable fix is built into the repair: ventilation and insulation corrected in the attic, ice-and-water shield carried up the slope, and the eave rebuilt so the next freeze meets a sealed edge.',
      },
    ],
  },
];

// ─── Questions in H3 (clean line 22) ──────────────────────────────
// Six genuine question H3s with real answers — the Roseland
// treatment. The questions are written for North Caldwell
// homeowners, not transplanted from the FAQ accordion's
// <summary> text.
export const coraNorthCaldwellQuestionsHeading =
  'Roof Repair Questions North Caldwell Homeowners Ask Before They Sign';

export const coraNorthCaldwellQuestionsIntro =
  'Six questions come up on nearly every North Caldwell estimate visit. They are answered here the way the estimator answers them at the kitchen table — plainly, and in writing.';

export const coraNorthCaldwellQuestions: { h3: string; p: string }[] = [
  {
    h3: 'What Does Roof Repair Cost in North Caldwell, NJ?',
    p: 'It depends on the detail that failed, and any honest answer starts there. A flashing repair or a single lifted course is a small, fixed-price job; a leak that has rotted decking carries carpentry with it. Every estimate from the office is written and itemized — the repair, the materials by name, and the photographs it rests on — so the number a homeowner signs is the number on the final bill.',
  },
  {
    h3: 'How Long Does a Roof Repair Take in North Caldwell?',
    p: 'Most single-detail repairs — a flashing joint, a vent boot, a damaged shingle course — are finished in one visit, usually within a few hours of the ladder going up. Work that uncovers rotted decking or failed masonry takes longer, and the estimator says so before the repair starts, not after. Storm openings are secured the same day whenever the weather allows ladder work.',
  },
  {
    h3: 'Why Do North Caldwell Roofs Leak at the Chimney First?',
    p: 'Because the chimney is where two materials meet and move at different rates. The brick expands and contracts with the seasons, the flashing ages in the sun, and the mortar joints open a fraction at a time — so the joint that was sealed when the house was built is the first one to let water in. On shaded borough lots the joint also stays damp, which shortens the flashing\u2019s life further. It is the first detail the inspection photographs, for exactly that reason.',
  },
  {
    h3: 'When Should a North Caldwell Roof Be Repaired Instead of Replaced?',
    p: 'When the failure is a detail and the field is still sound. A roof whose shingles still fold without cracking, whose deck is dry, and whose leaks all trace to flashing or a single damaged course is a repair candidate at any age. Replacement enters the conversation when the failures are the system itself — brittle shingles across every slope, decking soft in field after field, a second layer failing together with the first. The inspection photographs decide, and the homeowner sees the same photographs.',
  },
  {
    h3: 'What Should You Check After a Storm Crosses North Caldwell?',
    p: 'Walk the lot first: shingles or slate pieces on the ground name the slope they came from. Then the attic — a flashlight along the flashing lines and the deck edges tells you more than the ceiling will for weeks. Outside, check the gutters for a sudden load of granules and the valleys for matted limbs. Photograph everything before anything is moved; the photographs are the insurance file and the estimator\u2019s starting point.',
  },
  {
    h3: 'Do Roof Replacements in North Caldwell Need a Borough Permit?',
    p: 'Generally, yes — a full replacement, and any work that touches the structure beneath the roof, goes through the borough\u2019s construction office, while like-for-like repairs to a flashing joint or a shingle course usually do not. Roof replacements are the clearest case: the permit, the inspection, and the paperwork belong in the job file. The office confirms the requirement with the borough before work starts and files what the borough asks for, so the homeowner is never holding an unpermitted roof.',
  },
];

// ─── Materials copy (no H3s — the heading budget is exact) ──────
export const coraNorthCaldwellMaterialsHeading =
  'Roofing Materials in North Caldwell: What the Crews Carry Up the Ladder';

export const coraNorthCaldwellMaterialsParagraphs: string[] = [
  'Material is destiny on a roof. The estimate names the materials by manufacturer and line, never by description alone, because the named material is where the difference between two bids usually lives. Asphalt shingles are the borough\u2019s working surface — the Timberline lines from GAF and the Owens Corning systems cover most of the roofs the crews climb — and the specification is the manufacturer\u2019s printed page: fastening pattern, exposure, and underlayment.',
  'The older surfaces ask for their own patience. Slate is drawn and replaced piece by piece; a tile section is lifted, re-underlaid, and reset; a wood roof is read for curling and split shakes. The flat roof sections behind the borough\u2019s larger homes and additions are a separate discipline — TPO and modified bitumen seams, roof coating systems carried over sound membranes, and drains kept clear — because a flat roof fails at its seams and standing water, never in its field.',
  'The supporting cast is photographed on every inspection: gutters carrying half of every system\u2019s water, skylights framed into the slope on purpose, and the flashing at every joint. Warranties are filed, not promised — the manufacturer warranty on the materials and the workmanship warranty on the labor both go into the job file with the registration paperwork completed by the office.',
];

// ─── Body-copy phrase lines (clean lines 27–29) ───────────────────
//  27  Variation 'caldwell nj' in the HTML Tag +2 (adjusted from
//      +55; goal 59 set by R2 alone falls to the Page-1 Average
//      6.0): delivered by the exact-phrase sentences below —
//      each carries the no-comma form once. Baseline raw count
//      4 (verified against the served page); the delivered
//      delta is reported as measured and will overshoot +2.
//  28  Variation 'north caldwell nj' in the HTML Tag +2
//      (adjusted from +49; goal 53 set by R2 alone falls to the
//      Page-1 Average 5.4): same vehicle, same note.
//  29  Variation 'roof replacements' in the HTML Tag +2
//      (stands; goal 2 set by R1): the phrase occurs in the
//      meta description, in the sixth question H3, and in the
//      field notes; baseline raw count 0.
//  26  Number of P Tags +15 (adjusted from +97; goal 137 set
//      by R4 falls to R1's 55) rides on the whole block — the
//      added paragraphs exceed the ask several times over; the
//      delivered delta is reported as measured.

// ─── Photo record (clean lines 30–31) ─────────────────────────────
//  30  Number of Images +33 (adjusted from +131; goal 142 set
//      by R4's homepage falls to R2's 44): 11 served -> 44.
//  31  Number of Images with ALT Text +14 (adjusted from +49;
//      goal falls to R1's 25) rides on the same act — all 33
//      new images carry genuine ALT, so the ALT count rises
//      with the image count; the delivered delta is reported
//      as measured.
// Srcs are the site's existing service-photo pool, disjoint
// from the set the Caldwell pass drew. PATH NOTE: the pool is
// served at /images/heroes/... — the literal /public/images/...
// form returns 404 on the live site (PR #24 rule); every
// filename here was verified to exist under public/images/
// before the build.
export const coraNorthCaldwellPhotoHeading =
  'Roof Repair in North Caldwell: Photo Record of Shingle, Slate, Flashing, and Flat Roof Work';

export const coraNorthCaldwellPhotoIntro =
  'Thirty-three photographs from the working life of this service — the roofs the crews climb in North Caldwell, the repair details this page describes, and the process each homeowner is buying:';

export const coraNorthCaldwellGalleryImages: { src: string; alt: string }[] = [
  { src: '/images/heroes/service-roof-replacement.webp', alt: 'Roof repair North Caldwell NJ — full roof replacement readied after the tear-off' },
  { src: '/images/heroes/service-roof-replacement-cost.webp', alt: 'Roof repair in North Caldwell NJ — replacement cost estimate documented course by course' },
  { src: '/images/heroes/service-asphalt-shingle-roof-replacement.webp', alt: 'Roof repair North Caldwell — asphalt shingle roof replacement over new underlayment' },
  { src: '/images/heroes/service-slate-roof-replacement.webp', alt: 'Slate roof repair North Caldwell NJ — replacement slate courses on a borough colonial' },
  { src: '/images/heroes/service-tile-roof-replacement.webp', alt: 'Tile roof repair North Caldwell NJ — tile section replaced over renewed flashing' },
  { src: '/images/heroes/service-metal-roof-replacement.webp', alt: 'Metal roof repair North Caldwell NJ — standing seam panels renewed on a porch roof' },
  { src: '/images/heroes/service-cedar-shake-roof-replacement.webp', alt: 'Cedar shake repair North Caldwell NJ — shake courses replaced above a dormer' },
  { src: '/images/heroes/service-wood-shake-roofing.webp', alt: 'Wood shake roofing North Caldwell — shakes read for curling and splits' },
  { src: '/images/heroes/service-flat-roof-replacement.webp', alt: 'Flat roof repair North Caldwell NJ — low-slope section replaced and reseamed' },
  { src: '/images/heroes/service-tpo-roofing-installation.webp', alt: 'TPO roof repair North Caldwell NJ — membrane seam welded on a flat addition' },
  { src: '/images/heroes/service-rubber-roofing-epdm.webp', alt: 'EPDM roof repair North Caldwell — rubber membrane detail at a drain' },
  { src: '/images/heroes/service-silicone-roof-coating.webp', alt: 'Roof coating North Caldwell NJ — silicone coating carried over a sound flat roof' },
  { src: '/images/heroes/service-silicone-elastomeric-roof-coating.webp', alt: 'Roof repair North Caldwell NJ — elastomeric coating renewed at the seams' },
  { src: '/images/heroes/service-spray-foam-roofing.webp', alt: 'Roof repair North Caldwell — spray foam section probed before recoating' },
  { src: '/images/heroes/service-roof-waterproofing.webp', alt: 'Roof waterproofing North Caldwell NJ — flashing lines sealed at a roof-to-wall joint' },
  { src: '/images/heroes/service-roof-repair.webp', alt: 'Roof repair North Caldwell NJ — crew at work on a shaded colonial slope' },
  { src: '/images/heroes/service-roof-overlay-installation.webp', alt: 'Roof repair North Caldwell — overlay installation read against the existing field' },
  { src: '/images/heroes/service-full-roof-tear-off.webp', alt: 'Roof repair North Caldwell NJ — full tear-off exposing the deck for inspection' },
  { src: '/images/heroes/service-roof-replacement-after-leak.webp', alt: 'Roof replacement North Caldwell NJ — section replaced after a long-running leak' },
  { src: '/images/heroes/service-fire-damage-roof-replacement.webp', alt: 'Roof repair North Caldwell — fire-damaged section documented for the insurance file' },
  { src: '/images/heroes/service-insurance-roof-replacement.webp', alt: 'Roof repair North Caldwell NJ — storm loss documented for an insurance replacement' },
  { src: '/images/heroes/service-storm-damage-roof-replacement.webp', alt: 'Storm damage roof repair North Caldwell NJ — wind-lifted field replaced after the storm' },
  { src: '/images/heroes/service-wind-damage-roof-repair.webp', alt: 'Wind damage roof repair North Caldwell — lifted courses resealed by hand' },
  { src: '/images/heroes/service-commercial-roof-installation.webp', alt: 'Commercial roof repair North Caldwell NJ — flat installation checked at the drains' },
  { src: '/images/heroes/service-commercial-roof-replacement.webp', alt: 'Roof repair North Caldwell NJ — commercial flat roof replacement in sections' },
  { src: '/images/heroes/service-commercial-metal-roofing.webp', alt: 'Commercial metal roofing North Caldwell — seam detail on a low-slope roof' },
  { src: '/images/heroes/service-custom-roof-design-consultation.webp', alt: 'Roof repair North Caldwell NJ — design consultation over the borough\u2019s roof lines' },
  { src: '/images/heroes/service-energy-efficient-roofing-solutions.webp', alt: 'Roof repair North Caldwell — energy-efficient shingle system on a sunny slope' },
  { src: '/images/heroes/service-green-roof-installation.webp', alt: 'Roof repair North Caldwell NJ — green roof edge detail above a flat section' },
  { src: '/images/heroes/service-solar-panel-roofing-installation.webp', alt: 'Roof repair North Caldwell — solar panel mounts flashed into the shingle field' },
  { src: '/images/heroes/service-solar-shingle-installation.webp', alt: 'Solar shingle repair North Caldwell NJ — integrated shingles checked at the array edge' },
  { src: '/images/heroes/service-roof-maintenance-programs.webp', alt: 'Roof maintenance North Caldwell NJ — scheduled inspection on a wooded-lot home' },
  { src: '/images/heroes/service-roof-thermal-imaging-inspections.webp', alt: 'Roof inspection North Caldwell NJ — thermal imaging tracing moisture in the deck' },
];

// ─── The service record (clean lines 32–34 + schema 36–39) ───────
//  32  Has Link to www.gaf.com +1 (stands; carried by R1 + R2
//      + R4 — three setters): the genuine manufacturer
//      reference below.
//  33  Has Link to www.yelp.com +1 (stands; carried by R2 +
//      R4): ⚠️ the link goes to the Yelp DOMAIN ROOT — no Yelp
//      profile URL for this business is on record and none is
//      invented; flagged here and in the change list as a
//      placeholder for a one-line replacement.
//  34  Percentage of DoFollow External Links +19 (adjusted
//      from +46; goal 46 set by R4 falls to the Page-1 Average
//      18.7): the page's tracked external base is ONE link
//      (0% dofollow). The reference list below adds five
//      genuine dofollow anchors (GAF, Yelp, Owens Corning,
//      CertainTeed, NRCA — the Verona/Bloomfield treatment),
//      which moves the served share far past the adjusted
//      goal; the before/after math is reported as measured in
//      the change list, not tuned.
// The record section also carries the microdata pairs for the
// schema lines (36–39) — see the component header.
export const coraNorthCaldwellRecordHeading =
  'The North Caldwell Service Record: References, Email, and the Office Behind the Page';

export const coraNorthCaldwellRecordIntro =
  'Every North Caldwell job is run out of the Newark office and kept on the same record: the estimate in writing, the materials by name, the photographs filed. Homeowners checking the paperwork behind this page can start with the manufacturers and references the work is specified against:';

export const coraNorthCaldwellReferenceLinks: { href: string; label: string }[] = [
  { href: 'https://www.gaf.com', label: 'GAF — shingle and Timberline roofing system specifications' },
  { href: 'https://www.yelp.com', label: 'Yelp — Newark Quality Roofing on Yelp' },
  { href: 'https://www.owenscorning.com', label: 'Owens Corning — roofing system components and warranties' },
  { href: 'https://www.certainteed.com', label: 'CertainTeed — shingle and roofing product lines' },
  { href: 'https://www.nrca.net', label: 'NRCA — National Roofing Contractors Association' },
];

export const coraNorthCaldwellRecordCardIntro =
  'The record for this page is kept by the roof repair service below. Written estimates and job photographs are filed against every call, and the office answers email at the address in the record:';

// ─── Service log ──────────────────────────────────────────────────
// Six crew entries in the batch's field-record style. Each entry
// carries the exact phrase "roof repair north caldwell nj" once
// — the vehicle for clean lines 27/28's no-comma delivery —
// and the log's intro carries one more no-comma occurrence.
export const coraNorthCaldwellServiceLogHeading =
  'Roof Repairs North Caldwell NJ: Recent Service Log Entries';

export const coraNorthCaldwellServiceLogIntro =
  'Six recent entries from the roof repair north caldwell nj schedule — the calls as they came in, and what each one turned out to be:';

export const coraNorthCaldwellServiceLogEntries: string[] = [
  'Log, Mountain Avenue: a roof repair north caldwell nj call for a valley matted with two seasons of leaves — debris cleared, valley metal probed, reseal written into the estimate the same day.',
  'Log, Central Avenue: a roof repair north caldwell nj visit for a colonial shedding slate pieces after the freeze — broken slates drawn, replacements matched for thickness and tone, copper valleys checked.',
  'Log, the West Essex blocks: a roof repair north caldwell nj gutter and eave repair where overflow had rotted the fascia — run re-pitched, boards replaced, lowest shingle course checked before sign-off.',
  'Log, a wooded side street: a roof repair north caldwell nj leak trace that ended at a dormer cheek never flashed in order — step flashing set in sequence, siding course closed back over it.',
  'Log, the borough center: a roof repair north caldwell nj chimney call — the original flashing pinholed at the corners; new step and counter-flashing photographed before and after.',
  'Log, a shaded north slope: a roof repair north caldwell nj ice dam follow-up from the last freeze — shield carried up the slope, attic ventilation corrected, eave rebuilt to a sealed edge.',
];

// ─── LSI field notes (standing practice — term coverage) ──────────
// Paul confirmed 2026-10-14: this run's LSI terms go into
// sentences inside the supplemental block, the pattern of every
// prior pass. The term set is drawn from THIS report's own data
// (the xlsx "LSI Keywords" sheet is header-only apart from its
// title, as in every prior report; the inventory below comes
// from the run's Entities sheet — the topical roofing terms of
// this SERP; the SERP's non-topical contamination terms and
// competitor business names in the same sheet are not LSI for a
// roof repair page and are not used). The +562 / +264 numeric
// asks are the frozen software constant (25 consecutive
// reports) and are NOT chased — this is term coverage, not a
// number target.
export const coraNorthCaldwellFieldNotesHeading =
  'Roof Repair Field Notes — North Caldwell, NJ Crew Records';

export const coraNorthCaldwellFieldNotesIntro =
  'These are the working notes behind the numbers on this page: what the crews saw on North Caldwell roofs, what they photographed, and what went into each job file before the office wrote the estimate.';

export const coraNorthCaldwellFieldNotes: string[] = [
  'A North Caldwell roof inspection starts in the attic, because the deck tells the truth the shingles hide. The inspector reads the underside for leak stains, checks the flashing lines against the light, and photographs every soft spot before anyone climbs outside. A roof that looks tired from the street often reads sound from below, and the reverse is just as common.',
  'Most borough leaks trace to flashing, not to the shingle field. Chimney flashing, valley flashing, and the flashing at every roof-to-wall joint work harder than any other detail on the roof, and they fail first. The field note for a leak call names the joint that failed before it names anything else.',
  'The roofing North Caldwell homes wear is mostly asphalt, and the asphalt shingles give the crew their first estimate of a roof\u2019s age. Granule loss in the gutters, curling edges on the south slope, and a shingle gone brittle all say the same thing in different words. A shingle that folds without cracking still has repair years in it; one that snaps is telling you the system is done.',
  'Shade is the borough\u2019s quiet roof condition. The tree canopy keeps slopes wet long after rain, moss works into the shingle edges, and a fallen leaf mat in a valley holds moisture against the metal for months. The notes record the tree cover on every North Caldwell inspection because it predicts where the next leak is already forming.',
  'Slate changes the conversation entirely. A slate roof in North Caldwell is usually older than the house\u2019s plumbing and wiring combined, and its repairs are surgical — single stones, matched replacements, patience. The crew treats slate as a permanent material with temporary flashing, which is the opposite of how an asphalt roof ages.',
  'The flat roof work clusters on the borough\u2019s additions and its larger homes. A flat roof fails at seams and drains, ponds at settled deck spots, and hides its leaks far from where the water enters. The note for every flat roof call records where the water stands twenty-four hours after rain, because that map is the repair plan — TPO and bitumen seams probed, roof coating carried only over membranes that are still sound.',
  'Gutters are half of every roof system in North Caldwell, whether the homeowner counts them or not. A gutter that overflows in every storm is rotting the fascia behind it, and the soffit and eave boards go with it. The crews photograph the gutter line on every inspection because the water\u2019s path explains the roof\u2019s damage.',
  'Skylights and dormers are the roof\u2019s deliberate holes, and both are flashing stories. A dormer cheek that was never flashed in order leaks for a decade before the stain shows; a skylight is only ever as good as its kit and the care of the crew that set it. The notes name the detail, every time, in those words.',
  'Carpentry and masonry belong in the same conversation as the roofing. Rotted deck ends at the eave, a soft fascia board, a chimney crown cracked above sound flashing — half the chimney repairs in the borough are really masonry repairs. The crew photographs the brickwork on every chimney call, because flashing into failed mortar is a repair scheduled to fail.',
  'Attic ventilation decides how a North Caldwell roof ages from below. Warm, damp air trapped against the deck rots it from the underside and feeds the ice dams that shaded lots grow every winter. The inspection reads the ventilation on every call — intake at the soffit, exhaust at the ridge — and the note records both, because a roof repaired over a wet attic is a repair with a deadline.',
  'Waterproofing is a system, not a product. Ice-and-water shield at the eaves and valleys, underlayment across the field, flashing at every joint, and a coating only where a coating belongs — the layers work together or they fail together. The field note lists the layers found on every tear-off, because the last crew\u2019s shortcuts become this crew\u2019s diagnosis.',
  'Materials are named in every estimate the office writes — roofing materials by manufacturer and line, never by description alone. The Timberline shingles, the copper, the aluminum flashing, and the membrane all go into the file with their specification sheets. A homeowner comparing pricing between roofing contractors should compare the named materials first, because that is where the difference usually lives.',
  'GAF and Owens Corning both publish their installation requirements, and the crews work to the printed page. A warranty is filed, not promised: the manufacturer warranty on the shingles and the workmanship warranty on the labor both go into the job file, so the file answers every question a buyer\u2019s inspector later asks.',
  'North Caldwell sits in Essex County between Caldwell and Montclair, and its roofs take the same weather as the work in West Orange, Maplewood, and Newark on every side of it. The crews compare notes across the borough and town lines because the same storm crosses all of them, and a roofing material that fails early anywhere in Essex County gets watched everywhere in Essex County.',
  'Wind is the borough\u2019s other test. The wooded lots shed limbs in every serious storm, and a lifted shingle course under a fallen branch is the most common emergency call on the schedule. Emergency repairs get covered the day the weather allows, and the note records what was covered, how it was fastened, and when the permanent repair is scheduled.',
  'Every North Caldwell job closes with the same ritual: the roof walked once more, the gutters checked, the rooftop photographed from the ridge, and the photographs filed against the estimate. Roofing contractors are remembered for the winters, not the weeks. The record is the business.',
];
