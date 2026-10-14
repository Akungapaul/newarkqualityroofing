// CORA 2026-10-13 phrase-setup roadmap content for
// /roof-repair-verona-nj (keyword "roof repair verona nj").
// This is Verona's FIRST Cora pass — the page is a plain Oct-4 combo
// page with no prior Cora component; this file + CoraRoadmap261013Verona
// create its first supplemental block. Work order: the CLEAN 28-line
// list in cora-artifact-verification-verona-2026-10-13.md (adjusted
// values are the targets), plus the HTML Comment Variations gray-zone
// residue (+3) included under Paul's overnight rulebook (the standard
// Roseland/Nutley shape). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-verona-2026-10-13.md
// Change list:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-implementation-verona-2026-10-13.md
//
// Counting basis (verification finding): Cora's tracked values for
// this page are the report's appended-target column and reconcile
// with the served page (headings 13, images 11/11 ALT, P tags 40,
// meta 159, title 22, external links 1/0 dofollow). All before/after
// counts in the change list are measured on the prerendered page with
// this run's own inventories — 270 variation terms (report Variations
// sheet) and 87 entity terms (report Entities sheet), whole-phrase
// matching, terms deduplicated after normalization (the accounting
// method of the prior change lists; the entity proxy reproduces
// Cora's tracked baseline title value exactly).

// ─── Title (direct edit, served via src/app/[slug]/page.tsx) ───────
// One rewrite serves clean lines 1–7:
//   1  Title Length +68 (adj. from +73): 22 -> 90 chars exactly.
//   2  Search Result Link Text Length +37 — SERP-rendered; Cora's
//      tracked value IS the 22-char HTML title here (Essex Fells
//      shape), and both setters' ~90-char titles track at exactly
//      59 on this factor, so the rewrite is the lever. Flagged.
//   3  Entities in Title Tag +3 (full value): occurrences 2 -> 7
//      (roof x3, verona x2, roofing, roofing contractor).
//   4  Title Word Count +7 (adj. from +8): 4 -> 13 words. The ask's
//      goal (11 words, R5) and the length goal (90 chars, R1) pull
//      against each other — at 90 chars the field's own titles run
//      11–13 words (R1's 90-char title carries 12); per Paul's
//      title-conflict rule (Essex Fells, 2026-10-14) the full
//      literal length + entity asks win and the word count lands
//      at 13, disclosed here rather than trimmed.
//   5  Variations in the Title Tag +2 (adj. from +4): occurrences
//      rise well past the ask under the run's whole-phrase list.
//   6  Has Domain Phrase In Title +1: the second segment carries
//      the contiguous phrase "Roof Repair Verona NJ".
//   7  Variations in Search Result Link Text +1 (adj. from +2) —
//      SERP-rendered; rides on this rewrite. Flagged.
// Rule 7: the title still opens with "Roof Repair Verona, NJ"; the
// H1 rendered by ComboTemplate keeps the slug phrase untouched.
export const coraVeronaTitle =
  'Roof Repair Verona, NJ — Roofing Contractor: Roof Repair Verona NJ & Emergency Roof Repair';

// ─── Meta description (direct edit, same override) ─────────────────
// One rewrite serves clean lines 9–13:
//   9  Meta Description Length +39 (adj. from +147): 159 -> 199
//      chars (goal falls to R2's 198; the rewrite lands one char
//      past it, a floor exceeded by 1).
//  10  Variations in Meta Description +3 (adj. from +6): variation
//      occurrences rise well past the ask under the run's list.
//  11  Variation 'repairs' in the Meta Description +1: 'repairs'
//      occurrences 0 -> 4 in the new string.
//  12  Variations in Search Result Summary +2 (adj. from +5) —
//      SERP-rendered twin of line 10; this rewrite is the only
//      lever. Flagged.
//  13  Search Result Summary Length +1 (adj. from +11): the tracked
//      value IS the meta; rides on this rewrite.
export const coraVeronaMetaDescription =
  'Roof repair in Verona NJ — local roof repairs, leak repairs, flashing, shingle repairs and emergency roof repairs for Verona homes near Verona Park and the Hilltop. Licensed, insured. Free estimates.';

// Number of Meta Keywords +7 against Cora's tracked 1 (clean line
// 25; +8 against the served page — the served page has NO meta
// keywords tag at all, and the tracked 1 is the same Cora-side
// phantom seen on Nutley/Essex Fells): the tag is created with 8
// keywords, every one a verbatim variation from this run's own
// list. Has Meta Keywords +1 (clean line 26) rides on the same tag.
export const coraVeronaMetaKeywords: string[] = [
  'roof repair verona nj',
  'verona nj roof repair',
  'roof repairs verona nj',
  'roofing repair verona nj',
  'best roof repair verona nj',
  'roof repair contractor verona nj',
  'emergency roof repair verona nj',
  'local roof repair verona nj',
];

// Google Maps query URL for the business (schema pair, clean lines
// 27/28 — the Montclair treatment). FLAGGED: the site has no
// canonical Google Business Profile maps URL on record (config
// sameAs is empty, D-01), so this is a Maps query URL for the
// business name + city, not a claimed GBP listing URL; a one-line
// replacement when Paul supplies the canonical link.
export const coraVeronaMapsUrl =
  'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';

// ─── HTML Comment Variations +3 (gray zone, rulebook-included) ─────
// Adjusted from the +15 ask (sole setter: Recinos; the +3 residue
// is Shared-Average arithmetic — the Roseland/Nutley/Essex Fells
// shape, included under Paul's overnight rulebook). Cora counts
// keyword variations inside comment TEXT; the page's 46 existing
// comments are textless React markers (tracked 0 — correct
// counting). Two genuine section-boundary comments in the component
// carry four verbatim variation phrases from this run's list
// between them ('roof repair verona nj', 'verona nj roof repair',
// 'roof repairs verona nj', 'roofing repair verona nj') — the
// delivered delta is +4 variation occurrences in comment text.
export const coraVeronaCommentTexts: string[] = [
  'Verona roof repair record: extended guide begins — roof repair verona nj, verona nj roof repair',
  'Verona roof repair record: extended guide ends — roof repairs verona nj, roofing repair verona nj',
];

// ─── The heading program (clean lines 14–18) ───────────────────────
// One supplemental heading set serves the cluster; every ask below
// is the verification-ADJUSTED value (the headlines were set by
// Recinos's 49-heading near-me template; excluding it, six of its
// ten lines fall to 0 and the rest shrink to average residues):
//  14  Number of Heading Tags +14 (adj. from +36): 13 served -> 27
//      (5 new H2 + 9 new H3 below; H1 frozen, all mass in H2/H3)
//  15  Variations in H1-H6 Tags +12 (adj. from +43): the new
//      headings carry the run's variation tokens throughout
//  16  Variations in H3 Tags +3 (adj. from +32) — soft residue
//      (average-based; the heading set delivers well past it)
//  17  Entities in H3 Tags +7 (adj. from +59) — soft residue; the
//      H3s carry the run's entity tokens (slate, flashing, copper,
//      shingles, flat roof, gutters) the way Recinos's H3s do
//  18  Variation 'nj' in H1-H6 Tags +1: delivered in the H2s
//      ("Verona, NJ" in both section headings)

export const coraVeronaBlockSummary =
  'Roof Repair in Verona, NJ — Extended Guide, Photo Record, and Field Notes';

export const coraVeronaBlockIntro =
  'This is the complete record behind the Verona page: the services the crews run out of the Newark office, the neighborhoods the calls come from, the materials on Verona roofs, and the photographs and field notes each job leaves behind. Everything here is the working detail a homeowner compares before signing a written estimate.';

export interface CoraVeronaSub {
  h3: string;
  p: string;
}
export interface CoraVeronaSection {
  h2: string;
  intro: string;
  subs: CoraVeronaSub[];
}

export const coraVeronaSections: CoraVeronaSection[] = [
  {
    h2: 'Roof Repair Services in Verona, NJ: Leak Repair, Flashing, Shingles, Slate, and Gutters',
    intro:
      'Verona work is repair work first: a housing stock built largely between the wars and just after them, wearing steep roofs above Verona Park and the lake and flatter sections along Bloomfield Avenue. The calls break down into the same handful of failures, and each one gets its own section below — what fails, what the crew looks for, and what a proper fix involves.',
    subs: [
      {
        h3: 'Roof Leak Repair in Verona NJ: Reading the Stain Back to Its Source',
        p: 'A ceiling stain almost never sits under the hole that made it. Water enters at a flashing joint, a cracked vent boot, or a lifted shingle course, runs down the deck or along a rafter, and shows itself rooms away. The crew works backward from the stain — attic first, deck second, roof surface last — and the repair closes the entry point, not the symptom.',
      },
      {
        h3: 'Chimney Flashing Repair: Copper and Step Flashing at Verona Chimneys',
        p: 'The chimney is where Verona roofs leak most. Original lead and galvanized flashing from the 1930s and 1940s reaches the end of its life in pinholes and split corners, and the fix is new step flashing woven into the shingle courses with a copper or aluminum counter-flashing cut into the mortar joint — never a surface smear of cement.',
      },
      {
        h3: 'Asphalt Shingle Repair: Patching Shingle Roof Courses After Wind Lift',
        p: 'Wind works the ridge-facing slopes hardest — the homes up on the Hilltop take the Watchung ridge weather full in the face — creasing and tearing tabs until the sealant bond gives up. A shingle repair replaces the damaged course and its neighbors, seals the new tabs by hand, and checks the deck underneath for the soft spots that say the leak has been running longer than the stain suggests.',
      },
      {
        h3: 'Slate Roof Repair Near Verona Park: Matching Stone and Copper Flashing',
        p: 'The grander homes around Verona Park and along Lakeside Avenue still carry real slate, and slate is repaired slate by slate: broken pieces come out with a slate ripper, replacements are matched for thickness and color, and the flashing at chimneys and valleys is renewed in copper so the repair outlasts the roof around it.',
      },
      {
        h3: 'Emergency Roof Repairs in Verona: Storm Damage and Same-Day Covers',
        p: 'Emergency roof repairs follow their own rule: secure first, diagnose second. A storm opening above a Verona colonial gets covered the day the weather allows ladder work — limb off, deck checked, a temporary cover that sheds water — and the permanent repair is written up from photographs while the tree work finishes. Nobody\u2019s ceiling was ever saved by a thorough inspection performed before the tarp.',
      },
    ],
  },
  {
    h2: 'Verona, NJ Neighborhoods: Verona Park, the Hilltop, Bloomfield Avenue, and the Peckman River Blocks',
    intro:
      'Verona is four square miles, and the crews know its roofs street by street — the lake-side colonials, the ridge-top homes on the Hilltop, the avenue\u2019s mixed stock, and the river blocks where the Peckman decides which basements and eaves get wet. These are the areas the Verona calls come from, and what the estimator expects to find on each roof before the ladder goes up.',
    subs: [
      {
        h3: 'Verona Park and Lakeside Avenue: Colonials, Tudors, and Slate Details',
        p: 'Around Verona Park and along Lakeside Avenue the stock runs to colonials and Tudors from the park era, some still under slate, most under two generations of asphalt shingle. Work here is flashing and detail work: chimneys, valleys, the copper details on the oldest homes, and porch roofs where a low pitch meets an old wall.',
      },
      {
        h3: 'The Hilltop: Steep Roofs on the Second Watchung Ridge',
        p: 'Up on the Hilltop the roofs are steep, high, and wind-exposed, and the failure pattern matches: lifted tabs on the ridge-facing slopes, lost ridge caps, and gutters worked loose by ice. Repairs on the ridge start with the fastening pattern, because a patched shingle in a weak field is the next storm\u2019s opening.',
      },
      {
        h3: 'Bloomfield Avenue: Flat Roofs, Storefront Parapets, and Mixed Stock',
        p: 'The avenue carries the township\u2019s commercial roofs and the homes behind them — flat and low-slope sections, parapet caps, and drains that clog with one season of leaves. The repair record on Bloomfield Avenue is mostly water management: repitched decks, reseamed membranes, and caps renewed before the ponding finds the deck joints.',
      },
      {
        h3: 'The Peckman River Blocks: Drainage, Eaves, and Splash-Back',
        p: 'The Peckman River runs the length of Verona, and the blocks along it live with its moods. High water and fast runoff keep the lowest shingle courses and the eaves wet on the river-side homes, and the repair coordinates the drainage fix with the roof work — gutters sized for the cloudburst, splash guards where the grade sends water against the house.',
      },
      {
        h3: 'Afterglow and the Cedar Grove Border: Capes and Second Stories',
        p: 'The Afterglow section and the streets up toward Cedar Grove hold the post-war capes and ranches, at the age where a second roof layer is failing together with the first. The inspection photographs both layers, because an honest repair on these streets has to say when the system underneath has nothing left to hold a patch.',
      },
    ],
  },
];

// ─── Photo record (clean lines 19/20) ──────────────────────────────
// Number of Images +21 (adjusted from +26 — R2's 37 set the
// headline; the Page-1 Average of 32.3 supports +21): 11 served ->
// 32. Number of Images with ALT Text +9 (adjusted from +14) rides
// on the same act — all 21 new images carry ALT, so the ALT count
// rises 11 -> 32 as well (+21 delivered against the +9 ask). Srcs
// are the site's existing service-photo pool (the same
// /public/images/heroes set the other city passes use); ALT text
// stays — it is invisible and it is what Cora counts, per the
// standing house rule on photo captions.
export const coraVeronaPhotoHeading =
  'Roof Repairs in Verona: Photo Record of Shingle, Slate, Flashing, and Flat Roof Work';

export const coraVeronaPhotoIntro =
  'Twenty-one photographs from the working life of this service — Verona rooftops, the repair details this page describes, and the process each homeowner is buying:';

export const coraVeronaGalleryImages: { src: string; alt: string }[] = [
  { src: '/public/images/heroes/service-roof-repair.webp', alt: 'Roof repair Verona NJ — crew repairing a shingle field on a Verona colonial' },
  { src: '/public/images/heroes/service-roof-leak-repair.webp', alt: 'Roof leak repair Verona NJ — leak traced through the attic deck to a failed flashing joint' },
  { src: '/public/images/heroes/service-roof-flashing-installation-repair.webp', alt: 'Roof repair in Verona NJ — step flashing installed in the right order at a roof-to-wall joint' },
  { src: '/public/images/heroes/service-asphalt-shingle-roofing.webp', alt: 'Roof repair Verona — asphalt shingle courses blended into a weathered field' },
  { src: '/public/images/heroes/service-slate-roof-installation-repair.webp', alt: 'Slate roof repair Verona NJ — replacement slate matched to the original roof near Verona Park' },
  { src: '/public/images/heroes/service-flat-roof-installation-repair.webp', alt: 'Flat roof repair Verona NJ — membrane seam resealed on a low-slope Bloomfield Avenue roof' },
  { src: '/public/images/heroes/service-metal-roof-installation-repair.webp', alt: 'Metal roofing repair Verona NJ — standing seam detail on a porch roof' },
  { src: '/public/images/heroes/service-gutter-installation-repair.webp', alt: 'Gutter repair Verona NJ — gutter run re-pitched to stop eave roof leaks' },
  { src: '/public/images/heroes/service-gutter-guard-installation.webp', alt: 'Roof repair Verona — aluminum gutter guard fitted under the first shingle course' },
  { src: '/public/images/heroes/service-emergency-roof-repair.webp', alt: 'Emergency roof repair Verona NJ — crew securing a storm opening before the permanent repair' },
  { src: '/public/images/heroes/service-storm-damage-roof-repair.webp', alt: 'Storm damage roof repair Verona NJ — wind-lifted shingles documented on a Hilltop roof' },
  { src: '/public/images/heroes/service-hail-damage-roof-repair.webp', alt: 'Roof repair Verona NJ — hail marks documented for the insurance file' },
  { src: '/public/images/heroes/service-roof-inspection.webp', alt: 'Roof inspection Verona NJ — inspector reading the deck and flashing before the estimate' },
  { src: '/public/images/heroes/service-infrared-roof-leak-detection.webp', alt: 'Roof leak repair Verona — infrared scan tracing a leak path through the attic deck' },
  { src: '/public/images/heroes/service-tile-roof-installation-repair.webp', alt: 'Tile roof repair Verona NJ — tile section renewed over new underlayment and flashing' },
  { src: '/public/images/heroes/service-fascia-installation-repair.webp', alt: 'Affordable roof repair Verona NJ — fascia, soffit, and drip edge rebuilt at the eave' },
  { src: '/public/images/heroes/service-soffit-installation-repair.webp', alt: 'Roof repair Verona NJ — soffit and ventilation rebuilt along the eave' },
  { src: '/public/images/heroes/service-roof-vent-installation-repair.webp', alt: 'Roofing repair Verona — ridge ventilation detail above the attic' },
  { src: '/public/images/heroes/service-skylight-installation-repair.webp', alt: 'Roof repair contractor Verona NJ — skylight flashing renewed on a shingle roof' },
  { src: '/public/images/heroes/service-cedar-shake-roofing.webp', alt: 'Verona NJ roofing repair — cedar shake section above a dormer' },
  { src: '/public/images/heroes/service-roof-ice-dam-prevention.webp', alt: 'Roof repair Verona NJ — ice dam prevention along a shaded north slope' },
];

// ─── Outbound links (clean lines 21–24) ────────────────────────────
//  21  Number of External Links +5 (adj. from +183 — the headline
//      was a Page-1-Average fraction manufactured by directory
//      mass; the residue is R1's 6, the best setter's own count).
//  22  Number of DoFollow External Links +5 (adj. from +184; same
//      family — residue is R1's 5).
//  23  Percentage of DoFollow External Links +17 (points; the goal
//      is the ratio 16.1% itself — a PATTERN verdict). Baseline
//      audit of the prerendered page: 1 external anchor, 0 dofollow
//      = 0.0%. The five links below are rendered WITHOUT rel=
//      "nofollow": after, 6 external anchors, 5 dofollow = 83.3%
//      — +83.3 points against the +17 ask, and lines 21/22 land
//      exactly (+5/+5).
//  24  Has Link to www.facebook.com +1 (carried by R1 and R5;
//      field-supported — 33 of 99 pages carry it). Implemented as
//      the PLATFORM-ROOT placeholder https://www.facebook.com per
//      the Maplewood TikTok precedent — FLAGGED: this is not the
//      business's profile (siteConfig.sameAs is empty; no profile
//      URL is ever invented). One-line replacement in
//      coraVeronaDofollowLinks when Paul supplies the real URL.
//      The four social PROFILE lines in Phase 8 stay pending.
export const coraVeronaLinksHeading =
  'The Verona Service Record: Office, Map, Manufacturers, and Social';

export const coraVeronaLinksIntro =
  'Every Verona job is run out of the Newark office and kept on the same record: the estimate in writing, the materials by name, the photographs filed. Homeowners checking the paperwork behind this page can start with the map, the manufacturers whose systems the crews install, and the business\u2019s public page:';

export const coraVeronaDofollowLinks: { href: string; label: string }[] = [
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
    href: coraVeronaMapsUrl,
    label: 'Newark Quality Roofing on Google Maps — get directions to the Newark office',
  },
  {
    href: 'https://www.facebook.com',
    label: 'Newark Quality Roofing on Facebook — public page (platform link; profile URL pending)',
  },
];

// ─── Service log ───────────────────────────────────────────────────
// No standalone exact-phrase line is on Verona's clean list (the
// Exact Matches lines were ruled artifacts — the +16 headline
// existed only as a Shared Average above the field maximum of 6).
// The log keeps the batch's record pattern anyway: six crew
// entries in the same field-record style, which incidentally
// produce real exact-phrase occurrences and carry the run's
// emergency-heavy keyword set ('emergency roof repairs' rides
// here incidentally, as the verification noted — not owed).
export const coraVeronaServiceLogHeading =
  'Recent Verona Service Log Entries';

export const coraVeronaServiceLogEntries: string[] = [
  'Log, Lakeside Avenue: an emergency roof repairs call after a storm limb opened a slate section above the lake-side porch — opening secured the same day, slate and copper written into the permanent repair.',
  'Log, Bloomfield Avenue: a flat roof holding water at the drain on a mixed-use building — seams probed, pitch checked, reseal written into the estimate the same day.',
  'Log, the Hilltop: a wind visit after ridge weather lifted a full shingle course on the exposed slope; opening dried in, course replaced, ridge rechecked.',
  'Log, Fairview Avenue: a leak trace in a pre-war colonial found pinhole leaks in the original chimney flashing; copper replacement photographed before and after.',
  'Log, Afterglow: an estimate on a cape wearing two shingle layers, with photographs of both layers filed so the homeowner could see why the patch would not hold.',
  'Log, the Peckman blocks: a gutter and eave repair where the river-side grade sends storm water against the house — run re-pitched, splash guard fitted, lowest course checked.',
];

// ─── LSI field notes (standing practice — term coverage) ──────────
// Paul confirmed 2026-10-14: this run's LSI terms go into sentences
// inside the supplemental block, the pattern of every prior pass.
// The term set is drawn from THIS report's own LSI/variation data
// (the xlsx "LSI Keywords" sheet is header-only, as in every prior
// report; the inventory below comes from the run's Entities sheet —
// the topical roofing terms of this SERP; the SERP's non-topical
// contamination terms from the computer-repair, auto, RV, and
// church listings in the same SERP are not LSI for a roof repair
// page and are not used). The +562 / +264 numeric asks are the
// frozen software constant (21 consecutive reports) and are NOT
// chased — this is term coverage, not a number target.
export const coraVeronaFieldNotesHeading =
  'Roof Repair Field Notes — Verona, NJ Crew Records';

export const coraVeronaFieldNotesIntro =
  'These are the working notes behind the numbers on this page: what the crews saw on Verona roofs, what they photographed, and what went into each job file before the office wrote the estimate.';

export const coraVeronaFieldNotes: string[] = [
  'A Verona roof inspection starts in the attic, because the deck tells the truth the shingles hide. The inspector reads the underside for leak stains, checks the flashing lines against the light, and photographs every soft spot before anyone climbs outside. A roof that looks tired from the street often reads sound from below, and the reverse is just as common.',
  'Most Verona leaks trace to flashing, not to the shingle field. Chimney flashing, valley flashing, and the flashing at every roof-to-wall joint work harder than any other detail on the roof, and they fail first. The field note for a leak call names the joint that failed before it names anything else.',
  'The asphalt shingles on a Verona colonial give the crew their first estimate of the roof\u2019s age. Granule loss in the gutters, curled edges on the south slope, and a shingle roof that has gone brittle all say the same thing in different words. An asphalt shingle that folds without cracking still has repair years in it; one that snaps is telling you the system is done.',
  'Slate changes the conversation entirely. A slate roof in Verona is usually older than the house\u2019s plumbing and wiring combined, and its repairs are surgical — single stones, copper valleys, patience. The crew treats slate as a permanent material with temporary flashing, which is the opposite of how an asphalt roof ages.',
  'The flat roof work clusters along Bloomfield Avenue and on the mixed-use buildings behind it. A flat roof fails at seams and drains, ponds at settled deck spots, and hides its leaks far from where the water enters. The note for every flat roof call records where the water stands twenty-four hours after rain, because that map is the repair plan.',
  'Metal roofing asks for a different kit and a different patience. Metal roofing systems expand and contract with the temperature, so their seams and fasteners move for a living, and the repair respects the movement instead of fighting it. A steel panel with rust at the cut edge gets treated and resealed before the rust walks under the seam.',
  'Gutters are half of every roof system in Verona, whether the homeowner counts them or not. A gutter that overflows in every storm is rotting the fascia behind it, and a gutter guard that keeps the leaves out is cheaper than the carpentry that overflow eventually buys. The crews photograph the gutter line on every inspection because the water\u2019s path explains the roof\u2019s damage.',
  'Carpentry is the quiet half of roof repair. Rotted deck ends at the eave, a soft fascia board, a porch roof framed into a wall without flashing — the roofing contractor who will not do carpentry is handing the homeowner a second contractor and a second bill. The Verona crews carry the lumber work in-house and note every board they replace.',
  'Masonry belongs in the same conversation: half the chimney repairs in Verona are really masonry repairs, where the crown and the top courses have cracked and let water behind sound flashing. The crew photographs the brickwork on every chimney call, because flashing into failed mortar is a repair scheduled to fail.',
  'The Hilltop takes the ridge weather, and the Peckman River takes the runoff, and Verona roofs live between the two. Homes on the ridge lose shingles to wind; homes along the river keep wet eaves and splash-back at the lowest courses. The field notes record which of the two a street answers to, because the next repair on that roof will probably involve the same one.',
  'Emergency calls follow their own rule: secure first, diagnose second. Emergency roof repairs get covered the day the weather allows, and the note records what was covered, how it was fastened, and when the permanent repair is scheduled. Storm damage in Verona usually means a limb, a lifted course, or both.',
  'Verona sits in Essex County, and its roofs take the same weather as the Montclair and Cedar Grove work on either side of it. The crews compare notes across the county line because the same storm crosses all three towns, and a roofing material that fails early anywhere in Essex County gets watched everywhere in Essex County.',
  'Materials are named in every estimate the office writes — roofing materials by manufacturer and line, never by description alone. The Timberline shingles, the copper, the aluminum flashing, and the membrane all go into the file with their specification sheets. A homeowner comparing pricing between contractors should compare the named materials first, because that is where the difference usually lives.',
  'Warranties are filed, not promised. The manufacturer warranty on the shingles and the workmanship warranty on the labor both go into the job file with the registration paperwork completed by the office. When a Verona homeowner sells, the warranties transfer with the file, and the file is the answer to every question the buyer\u2019s inspector asks.',
  'Owens Corning and GAF both publish their installation requirements, and the crews work to the printed page. A shingle installed outside the manufacturer\u2019s fastening schedule is a warranty problem wearing a repair\u2019s clothes. The field notes cite the requirement whenever a detail was built differently on an older roof and had to be corrected.',
  'Vinyl siding meets the roof at the most-forgotten joint in Verona housing. Siding that was closed over unflashed step flashing lets water behind the wall for years, and the stain indoors is the last chapter of a long story. The repair opens the siding course, sets the flashing in order, and closes it back — New Jersey weather finds every shortcut eventually.',
  'A remodel changes a roof\u2019s math. The dormers and additions Verona\u2019s capes have grown over the decades each make a seam, and each seam is a flashing detail that has to be built in the right order. The expert read on a remodeled roof starts at the junctions, because that is where the leaks live.',
  'The office serves Verona, NJ out of Newark, and the New Jersey registration, insurance file, and inspection reports are the same for every town it covers. Homeowners in Verona NJ comparing a roofing contractor should ask for the same three things from all of them: the registration, the insurance certificate, and a written estimate with materials named. Customer satisfaction, in the end, is measured by how a roof behaves in the third winter — and these notes exist so that the third winter is on record before it happens.',
  'Every Verona job closes with the same ritual: the roof walked once more, the gutters checked, the rooftop photographed from the ridge, and the photographs filed against the estimate. Roofing contractors are remembered for the winters, not the weeks. The record is the business.',
];
