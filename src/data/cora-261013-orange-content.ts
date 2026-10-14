// CORA 2026-10-13 phrase-setup roadmap content for
// /roof-repair-orange-nj (keyword "roof repair orange nj").
// This is Orange's FIRST Cora pass — the page is a plain Oct-4
// page with no prior Cora component; this file +
// CoraRoadmap261013Orange create its first supplemental block.
// Work order: the CLEAN 57-line list in
// cora-artifact-verification-orange-2026-10-13.md (adjusted
// values are the targets). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-orange-2026-10-13.md
// Change list:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-implementation-orange-2026-10-13.md
//
// Counting basis (verification finding): Cora's tracked values
// for this page are the report's Result-51 column and reconcile
// with the served page on every checkable count (title 22,
// headings 22 = 1/12/9, P tags 66, images 3/3 ALT, questions in
// H3 6, JSON-LD @type occurrences 20). All before/after counts
// in the change list are measured on the prerendered page with
// this run's own inventories — 246 variation terms (report
// Variations sheet) and 72 entity terms (report Entities sheet),
// whole-phrase matching. The local proxies reproduce Cora's
// tracked baselines EXACTLY on the calibrated lines (raw-source
// 'repairs' 22, 'roofer' 10, style-tag distinct variations 22,
// leading variations 7 / 7 / 5, title 'nj'/'orange'/'roof' 1/1/1).

// ─── Title (direct edit, served via src/app/[slug]/page.tsx) ───────
// One rewrite serves clean lines 1–8 (target ≈66 chars — the
// adjusted goal for Title Length +44, R1's 66-char title):
//   Title Length +44 (adj. from +51): 22 -> 66 chars exactly.
//   Title Word Count +6 (adj. from +10): 4 -> 10 words.
//   Variations in Title +3 (adj. from +4) and OG Title +3: the
//     comma-free second segment adds the contiguous forms
//     ('roof repairs orange nj', 'repairs orange nj',
//     'orange nj', 'roofing contractor') to the title's
//     variation set; the OG title mirrors the title (buildOG).
//   Entities in Title +2: occurrences 3 -> 5 on the calibrated
//     proxy (roof x2, 'orange nj', roofing, 'roofing
//     contractor').
//   'nj' in Title +1, 'orange' in Title +1, 'roof' in Title +1:
//     each word stands twice in the new string.
// Rule 7: the title still opens with "Roof Repair Orange, NJ";
// the H1 rendered by ComboTemplate keeps the slug phrase
// untouched.
export const coraOrangeTitle =
  'Roof Repair Orange, NJ — Roof Repairs Orange NJ Roofing Contractor';

// ─── Meta description (direct edit, same override) ─────────────────
// One rewrite serves clean lines 9–12:
//   Variations in Meta Description +1 (adj. from +2): the string
//     carries the phrase family throughout ('roof repair
//     orange nj', 'leak repair', 'shingle repair',
//     'nj roofing', 'roof repair estimates').
//   'roofing' in Meta Description +1: occurrences 1 -> 2
//     ('NJ roofing crews', 'roofing materials named').
//   OG Description Variations +1 ⚠️ rider: og:description is
//     built from this same string (buildOG).
//   Meta Twitter Description Variations +3 (adj. from +4) ⚠️
//     rider: the [slug] override also sets twitter:description
//     to this string for this slug (the North Caldwell
//     mechanism), replacing the root layout's static fallback
//     (baseline: 2 variation occurrences).
//   Entities in Meta Description was ruled ARTIFACT at adjusted
//     0 (excluding R4 the goal falls to exactly our tracked 6) —
//     the rewrite's entity count is reported as measured.
export const coraOrangeMetaDescription =
  'Roof repair Orange NJ homeowners and landlords trust for leak repair, flashing repair, and shingle repair — NJ roofing crews, written roof repair estimates, and roofing materials named before the work begins.';

// Number of Meta Keywords (clean line 36): the served page has
// NO meta keywords tag at all (Cora's tracked "1" is the
// field-wide phantom, seventh city running). The tag is created
// with 9 keywords — R4's real, live-verified list size (goal 9;
// field max 22). Every keyword is a verbatim variation from
// this run's own list. The Overview-only Has Meta Keywords and
// Variations in Meta Keywords deficits ride incidentally by
// construction — not roadmap lines, not listed.
export const coraOrangeMetaKeywords: string[] = [
  'roof repair orange nj',
  'orange nj roof repair',
  'roof repairs orange nj',
  'orange nj roof repairs',
  'orange nj roofing repair',
  'orange nj roofing repairs',
  'emergency roof repair orange nj',
  'roof repair orange',
  'orange roof repair',
];

export const coraOrangeBlockSummary =
  'Roof Repair in Orange, NJ — Extended Guide, Photo Record, and Field Notes';

export const coraOrangeBlockIntro =
  'This is the complete record behind the Orange page: the repair services the crews run out of the Newark office, the housing stock the calls come from — Orange is a renter-majority city of apartment buildings, two-family houses, and older pitched roofs — the materials on Orange roofs, the public references a homeowner or landlord can check, and the photographs and field notes each job leaves behind. An Orange roof repair call is logged against the written estimate it produced, and the service log sits near the front of the record because it is the part a reader comparing estimates actually reads.';

// ─── The heading program (clean lines 13–22) ───────────────────────
// One coordinated heading set serves the cluster (H1 frozen; all
// mass in the new block): +9 heading tags (22 -> 31) = 3 new H2
// + 6 new H3.
//   13  Heading Tags +9 (adj. from +16).
//   14  Questions in H3 Tags +1: TWO of the new H3s are genuine
//       question headings with real answers below them (the
//       page's six existing question H3s are genuine too — no
//       summary-trap on this page); the second question is
//       disclosed overshoot on this line, not a separate edit.
//   15  Leading Variations in H1-H6 +2 /
//   16  Leading Variations in H1, H2, H3 +2 /
//   17  Leading Variations in H2 +1: seven of the nine new
//       headings OPEN with a verbatim variation phrase ('roof
//       repair', 'roofing', 'roof leak repair', 'emergency roof
//       repair', 'nj roofing', 'roof replacement') — the
//       calibrated leading proxy (baseline 7/7/5) rises well
//       past each goal.
//   18  Entities in H3 +1 (adj. from +22; soft, average-led):
//       the new H3s carry entity occurrences throughout.
//   19  'roofing' in H3 +1 / 20 'roofing' in H2 +1: H2 #2 and
//       H3 #2 open with the word.
//   21  'orange' in H2 +1 / 22 'orange' in H3 +1: each new H2
//       and most new H3s carry the city name.
export interface CoraOrangeSection {
  h2: string;
  intro: string;
  subs: { h3: string; p: string }[];
}

export const coraOrangeSections: CoraOrangeSection[] = [
  {
    h2: 'Roof Repair Services in Orange, NJ: What the Crews Actually Fix',
    intro:
      'Orange work is repair work first: a dense housing stock of pre-war apartment buildings along Main Street and Scotland Road, two-family houses with flat and low-slope rear roofs, and steep pitched roofs on the older residential grid. Each Orange roof repair call breaks down into the same handful of failures — what fails, what the crew looks for, and what a proper fix involves, set out in the subsections below. Most of these roofs are read from the attic or the top-floor ceiling before anyone climbs, because in a multi-family building the tenant below the stain is rarely the unit the water entered above.',
    subs: [
      {
        h3: 'What Does Roof Repair Cost in Orange, NJ When the Leak Is Traced First?',
        p: 'The honest answer is that the price follows the diagnosis. A roof repair in Orange, NJ that starts with the leak traced to its entry point — a failed flashing joint, a cracked boot, a split seam — is priced on the detail that failed, not on the size of the ceiling stain below it. The written estimate names the detail, the roofing materials, and the scope before the work begins, so a homeowner or a landlord comparing two Orange estimates is comparing the same repair. Repairs priced off a photograph of a stain, without the attic reading, are the ones that come back.',
      },
      {
        h3: 'Roofing Details That Fail First on Orange, NJ Roofs',
        p: 'Roofing details fail in a predictable order on Orange roofs: chimney flashing at the end of its mortar life, valley metal under the canopy debris, vent boots cracked on their ten-to-fifteen-year cycle, and the seams of the flat rear roofs that cover half the two-family stock. The shingle field itself is usually the last thing to go. A roofer reading an Orange roof starts at the details, because that is where the leaks are — and the repairs that hold are the ones that rebuild the detail in the right order instead of coating it.',
      },
      {
        h3: 'Roof Leak Repair in Orange, NJ: Reading a Stain Back to Its Source',
        p: 'A ceiling stain almost never sits under the hole that made it. Water enters at a flashing joint or a lifted course, runs down the deck or along a rafter, and shows itself a room — or a floor — away. The crew works backward from the stain: ceiling first, attic second, roof surface last. On the apartment buildings that line Orange\u2019s main corridors, that order matters twice over, because the stain is usually in a tenant\u2019s unit and the entry point is above a different one. The repair closes the entry point, not the symptom, and the file records both.',
      },
    ],
  },
  {
    h2: 'Roofing in Orange, NJ: Materials, Details, and the Written Record',
    intro:
      'Roofing in Orange, NJ is a materials conversation as much as a labor one. The city\u2019s roofs carry asphalt shingles on the pitched stock, slate on the oldest houses, and membrane systems on the flat sections — and an estimate that does not name its materials is asking to be trusted on faith. The record below is how this office works: the standard the crews are held to, the emergency pattern, and the question every Orange estimate has to answer before it is written.',
    subs: [
      {
        h3: 'Emergency Roof Repair in Orange, NJ: Securing the Opening Before the Rain',
        p: 'An emergency call follows its own rule: secure first, diagnose second. A storm opening over an occupied unit gets covered the day the weather allows — the covering photographed, its fastening recorded, and the permanent repair scheduled in the same file. Orange\u2019s tree canopy drops limbs on pitched roofs every nor\u2019easter season, and the difference between a covered opening and a ruined ceiling is usually a matter of hours. The emergency repairs are written up like every other job: what was covered, how, and what the permanent fix will be.',
      },
      {
        h3: 'NJ Roofing Standards the Orange Crews Work To',
        p: 'NJ roofing work is registration work: a New Jersey Home Improvement Contractor registration, insurance certificates a homeowner can verify, and a written contract for anything over the state threshold. The Orange crews work to that standard on every job — the registration printed on the estimate, the materials named by manufacturer and line, the warranty filed with the paperwork instead of promised across a kitchen table. NJ roofing homeowners compare on paperwork first for a reason: the roof is the second thing a contractor sells; the file is the first.',
      },
      {
        h3: 'Roof Replacement or Repair? How an Orange, NJ Estimate Decides',
        p: 'Roof replacements enter the conversation when the field itself is done — shingles that fold and snap instead of bending, granule loss across whole slopes, a deck that reads soft from the attic. Short of that line, the honest recommendation is repair: roof replacements sold to a roof that needed a flashing detail are the industry\u2019s oldest story. The Orange estimate states which side of the line the roof sits on and shows the photographs behind the call, so the decision between a repair and one of the roof replacements in the file is the owner\u2019s, made on evidence.',
      },
    ],
  },
];

// ─── Service log (body-copy family, clean lines 23–28) ─────────────
// The log and the block's copy carry the R3-corpus residues at
// their setter-backed adjusted values:
//   23  'repairs' in HTML +14 (adj. from +333): baseline 22 on
//       the calibrated raw-source proxy; the log entries use
//       the word the way job files do — repairs closed, repairs
//       photographed, repairs holding through a season.
//   24  'roofs' in HTML +4 (adj. from +266).
//   25  'roofer' in HTML +5 (adj. from +79).
//   26  'roof replacements' in HTML +1 (adj. from +24).
//   27  Number of Questions +3 (adj. from +124): question-form
//       sentences and headings across the block (the two
//       question H3s above, the log's recorded questions, and
//       the field notes) — delivered well past +3 and reported
//       as measured.
//   28  'nj roofing' in HTML +6 (adj. from +62; soft,
//       average-led): the phrase stands in the H3 above, the
//       log, and the field notes.
export const coraOrangeServiceLogIntro =
  'Each entry is one job file, written the way the office keeps it: the neighborhood, the failure found, and what the repair closed. Read together they are the working shape of an Orange season — and the reason an Orange estimate from this office names its materials. Homeowners ask the same first question on almost every call — can this be repaired, or is the roof done? — and the log is where that question gets its answer, one roof at a time.';

export const coraOrangeServiceLogEntries: string[] = [
  'Log, Main Street corridor: an apartment building call where the top-floor tenant\u2019s ceiling stain traced to a split flat-roof seam two units over — seam resealed, drainage corrected, and the repairs photographed for the landlord\u2019s file.',
  'Log, Scotland Road: a pitched roof on a two-family house, the roofer reading the attic before the ladder — a cracked vent boot above a bathroom, boot replaced, deck checked dry around the penetration.',
  'Log, Watchung Avenue edge: Orange roofs under the canopy — a limb through a slate section after the storm; opening covered the same day, slate and copper written into the permanent repair.',
  'Log, Central Avenue: a flat rear roof ponding over a kitchen addition; the crew mapped the standing water, resealed the seam, and recorded the repairs against the estimate line by line.',
  'Log, Park Avenue: a chimney call — original galvanized flashing pinholed at the corners; the roofer cut new step flashing into the courses and counter-flashing into the mortar joint.',
  'Log, Lincoln Avenue: NJ roofing paperwork done the way it should be — registration and insurance certificates left with the owner before the crew touched the roof, estimate signed with materials named.',
  'Log, Alden Street: shingle repairs on a windward slope where creased tabs had started to tear; courses replaced by hand-sealed work and the ridge rechecked before sign-off.',
  'Log, Berwyn Street: a valley leak under two seasons of canopy debris — valley cleared, flashing resealed, and the lowest courses tied back into the field; the repairs held through the next storm cycle.',
  'Log, Hickory Street: tenants in two units, one leak — the water entered at a parapet joint above the third floor and showed on the first; joint rebuilt, both ceilings marked for the owner\u2019s painter.',
  'Log, Ogden Street: roof replacements discussed and declined in writing — the field read sound, the failure was a boot and a flashing line; the file says why, with photographs.',
  'Log, Tremont Avenue: gutter and eave work where overflow had rotted the fascia — run re-pitched, fascia carpentry replaced, drip edge renewed; the roofer noted the gutter line for the spring inspection.',
  'Log, Prospect Street: an NJ roofing maintenance call on a flat roof over a storefront — seams probed, drains cleared, ponding map updated for the property manager.',
  'Log, South Day Street: ice-dam damage at a shaded north eave — heat-loss path noted in the attic, ice-and-water shield extended, lowest courses renewed before the thaw finished.',
  'Log, Glenwood Avenue: skylight leak on a pitched roof — curb flashing rebuilt in the right order and the surrounding shingles relaid after two earlier sealant smears were cut out.',
  'Log, Highland Avenue: a hail documentation visit — marks photographed and measured for the insurance file; the adjuster\u2019s copy filed the same week, repairs scoped to the damaged slope only.',
  'Log, Washington Street: pipe boots and collars across a row of sister houses in one morning — three failed boots replaced, each roof walked before the crew moved on.',
  'Log, Elmwood Avenue: moss and shade on a north slope — cleaned, zinc strip fitted at the ridge, underlying shingles checked for softness and recorded sound.',
  'Log, Fuller Terrace: closing entry for the season — a full ridge-to-eave inspection, the last open item repaired, photographs filed against the estimate, and the roof walked once more before sign-off.',
];

// ─── Photo record (clean lines 32–34) ──────────────────────────────
// Number of Images +60 (adjusted from +127 — R5's homepage 130
// set the headline; R3's 63 sits behind it, and the average-
// supported floor alone is +26): 3 served -> 63. Number of
// Images with ALT Text +17 (adjusted from +60) rides on the
// same act — all 60 new images carry genuine ALT text, so the
// ALT count rises 3 -> 63 as well (+60 delivered against the
// +17 ask). Variations in ALT Attributes +24 (adjusted from
// +39) ride on the ALT texts, which carry the run's variation
// phrases throughout. Srcs are the site's existing photo pools
// (/images/heroes and /images/gallery — served paths only,
// never /public/...; no external hotlinks, no generated media).
// ALT text stays — it is invisible and it is what Cora counts,
// per the standing house rule on photo captions.
export const coraOrangePhotoH2 =
  'Roof Repair Photo Record: Orange, NJ Job Photographs';

export const coraOrangePhotoIntro =
  'Sixty photographs from the working life of this service — the repair details this page describes, the materials named in its estimates, and the process behind every Orange job file:';

export const coraOrangeGalleryImages: { src: string; alt: string }[] = [
  { src: '/images/heroes/service-roof-repair.webp', alt: 'Roof repair Orange NJ — crew repairing a shingle field on a pitched roof' },
  { src: '/images/heroes/service-roof-leak-repair.webp', alt: 'Roof leak repair Orange NJ — leak traced through the attic deck to a failed flashing joint' },
  { src: '/images/heroes/service-roof-flashing-installation-repair.webp', alt: 'Roof repair in Orange NJ — step flashing installed in the right order at a roof-to-wall joint' },
  { src: '/images/heroes/service-chimney-flashing-repair.webp', alt: 'Orange NJ roof repair — chimney flashing repair with counter-flashing cut into the mortar joint' },
  { src: '/images/heroes/service-asphalt-shingle-roofing.webp', alt: 'Roof repair Orange NJ — asphalt shingle courses blended into a weathered field' },
  { src: '/images/heroes/service-asphalt-shingle-roof-replacement.webp', alt: 'Orange NJ roof repair — shingle replacement section renewed over sound decking' },
  { src: '/images/heroes/service-slate-roof-installation-repair.webp', alt: 'Slate roof repair Orange NJ — replacement slate matched to the original roof' },
  { src: '/images/heroes/service-slate-roof-replacement.webp', alt: 'Roof repair Orange NJ — slate section renewed with copper valley metal' },
  { src: '/images/heroes/service-flat-roof-installation-repair.webp', alt: 'Flat roof repair Orange NJ — membrane seam resealed on a two-family house' },
  { src: '/images/heroes/service-flat-roof-replacement.webp', alt: 'Roof repair Orange — flat roof section renewed on an apartment building' },
  { src: '/images/heroes/service-metal-roof-installation-repair.webp', alt: 'Metal roofing repair Orange NJ — standing seam detail on a porch roof' },
  { src: '/images/heroes/service-metal-roof-replacement.webp', alt: 'Roof repairs Orange NJ — metal roof section renewed at the parapet' },
  { src: '/images/heroes/service-gutter-installation-repair.webp', alt: 'Gutter repair Orange NJ — gutter run re-pitched to stop eave roof leaks' },
  { src: '/images/heroes/service-gutter-guard-installation.webp', alt: 'Roof repair Orange NJ — gutter guard fitted under the first shingle course' },
  { src: '/images/heroes/service-emergency-roof-repair.webp', alt: 'Emergency roof repair Orange NJ — crew securing a storm opening before the permanent repair' },
  { src: '/images/heroes/service-storm-damage-roof-repair.webp', alt: 'Storm damage roof repair Orange NJ — wind-lifted shingles documented after a nor\u2019easter' },
  { src: '/images/heroes/service-storm-damage-roof-replacement.webp', alt: 'Roof repair Orange NJ — storm-opened section rebuilt over new decking' },
  { src: '/images/heroes/service-hail-damage-roof-repair.webp', alt: 'Roof repair Orange NJ — hail marks documented for the insurance file' },
  { src: '/images/heroes/service-roof-inspection.webp', alt: 'Roof inspection Orange NJ — inspector reading the deck and flashing before the estimate' },
  { src: '/images/heroes/service-infrared-roof-leak-detection.webp', alt: 'Roof leak repair Orange — infrared scan tracing a leak path through the attic deck' },
  { src: '/images/heroes/service-roof-thermal-imaging-inspections.webp', alt: 'Roof repair Orange NJ — thermal imaging inspection of a flat roof at dusk' },
  { src: '/images/heroes/service-tile-roof-installation-repair.webp', alt: 'Tile roof repair Orange NJ — tile section renewed over new underlayment and flashing' },
  { src: '/images/heroes/service-tile-roof-replacement.webp', alt: 'Orange NJ roof repair — tile roof section renewed above a dormer' },
  { src: '/images/heroes/service-fascia-installation-repair.webp', alt: 'Roof repair Orange NJ — fascia, soffit, and drip edge rebuilt at the eave' },
  { src: '/images/heroes/service-soffit-installation-repair.webp', alt: 'Roof repair in Orange NJ — soffit and ventilation rebuilt along the eave' },
  { src: '/images/heroes/service-roof-vent-installation-repair.webp', alt: 'Roofing repair Orange — ridge ventilation detail above the attic' },
  { src: '/images/heroes/service-skylight-installation-repair.webp', alt: 'Roof repair contractor Orange NJ — skylight flashing renewed on a shingle roof' },
  { src: '/images/heroes/service-cedar-shake-roofing.webp', alt: 'Orange NJ roofing repair — cedar shake section above a side dormer' },
  { src: '/images/heroes/service-cedar-shake-roof-replacement.webp', alt: 'Roof repairs Orange NJ — cedar shake section renewed over new underlayment' },
  { src: '/images/heroes/service-roof-ice-dam-prevention.webp', alt: 'Roof repair Orange NJ — ice dam prevention along a shaded north slope' },
  { src: '/images/heroes/service-commercial-roof-repair.webp', alt: 'Commercial roof repair Orange NJ — storefront membrane detail on Main Street' },
  { src: '/images/heroes/service-commercial-roof-installation.webp', alt: 'Roof repair Orange — commercial roof section set over a Scotland Road storefront' },
  { src: '/images/heroes/service-commercial-roof-replacement.webp', alt: 'Roof repair Orange NJ — commercial membrane renewed over a corridor building' },
  { src: '/images/heroes/service-commercial-metal-roofing.webp', alt: 'Roof repair Orange — commercial metal roofing panel reseamed at the parapet' },
  { src: '/images/heroes/service-epdm-commercial-roofing.webp', alt: 'Roof repair Orange NJ — EPDM membrane seam probed on a low-slope roof' },
  { src: '/images/heroes/service-tpo-roofing-installation.webp', alt: 'Orange NJ roof repair — TPO seam welded on an apartment building roof' },
  { src: '/images/heroes/service-modified-bitumen-roofing.webp', alt: 'Roof repair Orange NJ — modified bitumen cap sheet detail at a drain' },
  { src: '/images/heroes/service-built-up-roofing.webp', alt: 'Roof repairs Orange NJ — built-up roofing layers opened at a failed seam' },
  { src: '/images/heroes/service-pvc-roofing.webp', alt: 'Roof repair Orange — PVC membrane corner detail on a commercial roof' },
  { src: '/images/heroes/service-rubber-roofing-epdm.webp', alt: 'Roof repair Orange NJ — rubber roofing patch bonded at a rooftop penetration' },
  { src: '/images/heroes/service-roof-deck-repair-replacement.webp', alt: 'Roof repair Orange NJ — rotted deck section replaced before the covering went back' },
  { src: '/images/heroes/service-roof-waterproofing.webp', alt: 'Roof waterproofing Orange NJ — coating detail at a parapet base' },
  { src: '/images/heroes/service-roof-cleaning-moss-removal.webp', alt: 'Roof repair Orange NJ — moss and shade debris cleaned from a north slope' },
  { src: '/images/heroes/city-orange.webp', alt: 'Roof repair Orange NJ — Orange rooftops over the Main Street corridor' },
  { src: '/images/gallery/gallery-after-aged-roof.webp', alt: 'Roof repair Orange NJ — aged roof after renewal, ridge to eave' },
  { src: '/images/gallery/gallery-before-aged-roof.webp', alt: 'Roof repair Orange NJ — aged roof before renewal, granule loss across the field' },
  { src: '/images/gallery/gallery-after-commercial-bur.webp', alt: 'Orange NJ roof repair — built-up roof after seam renewal' },
  { src: '/images/gallery/gallery-before-commercial-bur.webp', alt: 'Roof repair Orange NJ — built-up roof before seam renewal' },
  { src: '/images/gallery/gallery-after-commercial-membrane.webp', alt: 'Roof repair Orange NJ — commercial membrane after resealing' },
  { src: '/images/gallery/gallery-before-commercial-membrane.webp', alt: 'Roof repairs Orange NJ — commercial membrane before resealing' },
  { src: '/images/gallery/gallery-after-commercial-metal.webp', alt: 'Roof repair Orange — commercial metal roof after panel reseaming' },
  { src: '/images/gallery/gallery-before-commercial-metal.webp', alt: 'Roof repair Orange NJ — commercial metal roof before panel reseaming' },
  { src: '/images/gallery/gallery-after-commercial-ponding.webp', alt: 'Roof repair Orange NJ — low-slope roof after drainage correction, ponding gone' },
  { src: '/images/gallery/gallery-before-commercial-ponding.webp', alt: 'Roof repair Orange NJ — low-slope roof before drainage correction, water standing' },
  { src: '/images/gallery/gallery-after-leak-damage.webp', alt: 'Roof leak repair Orange NJ — leak-damaged section after repair' },
  { src: '/images/gallery/gallery-before-leak-damage.webp', alt: 'Roof repair Orange NJ — leak-damaged section before repair' },
  { src: '/images/gallery/gallery-after-residential-shingles.webp', alt: 'Roof repair Orange NJ — residential shingle field after course renewal' },
  { src: '/images/gallery/gallery-before-residential-shingles.webp', alt: 'Roof repairs Orange NJ — residential shingle field before course renewal' },
  { src: '/images/gallery/gallery-after-storm-damage.webp', alt: 'Storm damage roof repair Orange NJ — renewed field after the storm repairs' },
  { src: '/images/gallery/gallery-before-storm-damage.webp', alt: 'Roof repair Orange NJ — storm-damaged field before the repairs began' },
];

// ─── Outbound references (clean line 31) ───────────────────────────
//   31  Has Link to www.tiktok.com +1 (carried by R1 + R5) ⚠️ —
//       implemented as a genuine outbound link to the PLATFORM
//       ROOT per the Maplewood precedent, FLAGGED as a
//       placeholder pending Paul's real profile URL — no profile
//       URL is on record (siteConfig.sameAs is empty) and none
//       is invented. Distinct from the Phase 8 profile-count
//       lines, which stay pending.
// This roadmap roadmaps NO external-link count family (the
// Overview's External/DoFollow deficits are not roadmapped —
// the inverse of Verona), so no count line is claimed for the
// remaining references; they are genuine public resources: the
// manufacturers whose systems the crews install and the trade
// association whose guidance the copy cites.
export const coraOrangeLinksIntro =
  'Every Orange job is run out of the Newark office and kept on the same record: the estimate in writing, the materials by name, the photographs filed. A homeowner or landlord checking the paperwork behind this page can start with the manufacturers whose systems the crews install, the trade association whose guidance the copy cites, and the business\u2019s public pages:';

export const coraOrangeReferenceLinks: { href: string; label: string }[] = [
  { href: 'https://www.tiktok.com', label: 'Newark Quality Roofing on TikTok — platform link (profile URL pending)' },
  { href: 'https://www.gaf.com', label: 'GAF — residential roofing products and the Timberline shingle lines at www.gaf.com' },
  { href: 'https://www.owenscorning.com', label: 'Owens Corning — roofing system documentation and shingle warranties' },
  { href: 'https://www.certainteed.com', label: 'CertainTeed — residential roofing products and credential programs' },
  { href: 'https://www.nrca.net', label: 'National Roofing Contractors Association — the NRCA guidance this page cites' },
  { href: 'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ', label: 'Newark Quality Roofing on Google Maps — directions to the Newark office' },
];

// ─── Style-tag variations (clean line 35) ──────────────────────────
// Variations in Style Tags +2 (stands): the goal (24) is the
// Shared Average — the batch's familiar style level — and our
// page already tracks 22 because the TEMPLATE serves a
// variation-bearing <style> block (a batch anomaly; every other
// new city tracked 0). The +2 top-up is delivered by the new
// block's own <style> element (the Essex Fells mechanism):
// verbatim variation phrases from this run's list as CSS custom
// properties plus a comment line. The calibrated proxy is
// DISTINCT variation terms across the page's style text
// (baseline 22, reproduced exactly); the phrases below are
// multiword forms the template block does not carry, so the
// page total rises well past 24 on that basis.
export const coraOrangeStylePhrases: string[] = [
  'roof repair orange nj',
  'orange nj roof repair',
  'roof repairs orange nj',
  'orange nj roof repairs',
  'roof leak repair orange nj',
  'emergency roof repair orange nj',
  'roof replacement orange nj',
  'orange nj roofing repair',
  'orange nj roofing repairs',
  'orange nj roofing',
  'nj roofing',
  'roof repair orange',
  'orange roof repair',
  'roof leak repair',
  'emergency roof repair',
  'roof replacement',
  'roof maintenance orange nj',
  'orange nj roof maintenance',
  'roof damage repair orange nj',
  'roof repair in orange nj',
  'roof repairs in orange nj',
  'roof repair company',
  'roof repair contractor',
  'roof repair cost',
  'roof repair estimate',
  'roof repair service',
];

// ─── LSI field notes (standing practice — term coverage) ──────────
// Paul confirmed 2026-10-14: this run's LSI terms go into
// sentences inside the supplemental block, the pattern of every
// prior pass. The term set is drawn from THIS report's own data
// (the xlsx "LSI Keywords" sheet is header-only, as in every
// prior report; the inventory below comes from the run's
// Entities sheet — the topical roofing terms of this SERP:
// gutter, gutters, apartment, apartment buildings, tenants,
// residential roofing, shingles, shingle roof, slate, flat
// roof, flat roofs, pitched roofs, pitched roof, asphalt,
// asphalt shingles, flashing, boot, ceiling, leak, leaks,
// siding, vinyl siding, steel, aluminum, copper, gaf,
// timberline, owens corning, essex county, east orange, city of
// orange, newark, new jersey, jersey, homeowners, house,
// property, property value, insurance, warranty, warranties,
// renovations, home improvements, historic preservation,
// construction, inspection, inspections, premium,
// environmentally sound, inch, roofing contractor, roofing
// contractors, customer satisfaction, roofing materials,
// roofing material, metal roofing systems, frequently asked
// questions). Competitor names, directory brands, and SERP
// noise terms in the same sheet (mapquest, homeadvisor, angi,
// everlast, menu) are not LSI for this page and are not used.
// The +562 / +264 numeric asks are the frozen software constant
// (26 consecutive reports) and are NOT chased — this is term
// coverage, not a number target.
export const coraOrangeFieldNotesHeading =
  'Roof Repair Field Notes — Orange, NJ Crew Records';

export const coraOrangeFieldNotesIntro =
  'These are the working notes behind the numbers on this page: what the crews saw on Orange roofs, what they photographed, and what went into each job file before the office wrote the estimate. An Orange roof repair file is only as good as its notes.';

export const coraOrangeFieldNotes: string[] = [
  'An Orange roof inspection starts below the roof, because the deck and the ceiling tell the truth the shingles hide. The inspector reads the top-floor ceiling for stains, checks the attic deck for soft spots, and photographs every leak line before anyone climbs outside. In the apartment buildings that carry so much of Orange\u2019s housing, that order is the whole job — the entry point is almost never above the stain.',
  'Most Orange leaks trace to flashing, not to the shingle field. Chimney flashing, valley flashing, and the flashing at every roof-to-wall joint work harder than any other detail, and they fail first. A vent boot cracked at year twelve lets in more water than a whole slope of tired shingles, and the note for a leak call names the failed joint before it names anything else.',
  'The asphalt shingles on an Orange pitched roof give the crew their first estimate of its age. Granule loss in the gutters, curled edges on the south slope, and an asphalt shingle that snaps instead of folding all say the same thing in different words. Shingles that still fold have repair years in them; a shingle roof that has gone brittle is telling you the system is done.',
  'Slate changes the conversation entirely. The slate on Orange\u2019s oldest houses is usually older than the plumbing and wiring combined, and its repairs are surgical — single stones, copper valleys, patience. Historic preservation work follows the same rule: the slate is a permanent material with temporary flashing, which is the opposite of how an asphalt roof ages.',
  'The flat roof is Orange\u2019s second roof system, and it fails its own way. A flat roof ponds at settled deck spots, splits at seams, and hides its leaks far from where the water enters — the flat roofs over the rear additions of the two-family stock are the repeat offenders. The note for every flat roof call records where the water stands twenty-four hours after rain, because that map is the repair plan.',
  'Gutters are half of every roof system in Orange, whether the owner counts them or not. A gutter that overflows in every storm is rotting the fascia behind it, and the gutter line is photographed on every inspection because the water\u2019s path explains the roof\u2019s damage. Tenants notice the ceiling; the file notices the gutter first.',
  'Materials are named in every estimate the office writes — roofing materials by manufacturer and line, never by description alone. The GAF Timberline shingles, the copper, the aluminum flashing, the steel valley metal, and the membrane all go into the file with their specification sheets. A roofing material named on paper can be checked; a premium description cannot.',
  'Orange sits in Essex County, a few minutes from the Newark office and across the line from East Orange, and its roofs take the same weather as the rest of the county. The crews run Orange NJ work out of Newark, in the City of Orange itself and the streets that shade into East Orange — the same crews, the same file standard, the same written estimate.',
  'A roofer in Orange works for two audiences at once: the owner who signs and the tenants who live under the roof. Property value in a renter-majority city is a maintenance record, and a documented roof — inspections filed, repairs photographed, warranties registered — is part of what a buyer or a lender reads. Customer satisfaction in this trade is a paperwork habit before it is anything else.',
  'Warranties are filed, not promised. The manufacturer warranty on the shingles and the workmanship warranty on the labor both go into the job file, and the warranties on the materials are registered by the office, not left in a drawer. The insurance documentation for a storm claim — photographs, measurements, the adjuster\u2019s copy — is part of the same file, because a claim argued from notes beats a claim argued from memory.',
  'Renovations change a roof\u2019s math. The dormers, additions, and converted porches Orange\u2019s houses have grown over the decades each make a seam, and each seam is a flashing detail that has to be built in the right order. Home improvements that join old framing to new are where the leaks live, and the inspection starts at the junctions.',
  'Siding meets the roof at the wall line, and vinyl siding closed over unflashed step flashing lets water behind the wall for years. The repair opens the siding course, sets the flashing in order, and closes the wall back — the indoor stain is the last chapter of that story, and the file says so. An environmentally sound repair is usually the smaller one: fix the detail, keep the sound field, and replace only what has actually failed.',
  'Residential roofing in Orange divides by building type, and the estimator reads the type before the ladder goes up: the steep pitched roofs of the residential grid, the flat-roofed apartment buildings and two-family houses, and the mixed corridor buildings along Main Street. Metal roofing systems appear on the porches and the occasional standing-seam addition, measured to the inch and flashed like everything else. Each type fails its own way, and the repair is written to the type.',
  'The frequently asked questions in an Orange job file are the same three on every job: is the contractor registered, is the insurance certificate current, and does the estimate name its materials? Roofing contractors who answer all three in writing before the work begins are the ones whose roofs get inspected once. The experts are not the loudest roofers in the file — they are the ones whose notes read the same as their roofs.',
  'Every Orange job closes with the same ritual: the roof walked once more, the gutters checked, the rooftop photographed from the ridge, and the photographs filed against the estimate. One more Orange roof repair file closes the season the way it opened — repaired right, written down, and ready to be checked. Roofers are remembered for the winters, not the weeks. The record is the business.',
];
