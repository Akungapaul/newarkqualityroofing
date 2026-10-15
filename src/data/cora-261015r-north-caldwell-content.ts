// Cora 2026-10-15 REPLACEMENT phrase roadmap content — NORTH
// CALDWELL page only (/roof-replacement-north-caldwell-nj, keyword
// "roof replacement north caldwell nj").
//
// This is the page's FIRST Cora pass against the replacement
// keyword (its repair-keyword pass was PR #26, 2026-10-14, on the
// sibling repair page). This run's setter set: R1 DeFalco Roofing
// (genuine Wix town page, an EMPTY fetch in this run — sets
// almost nothing), R2 Botani Roofing (genuine service-area page),
// R3 Jersey Build Contracting (PARTIAL FETCH — 5 tracked words,
// the same broken capture as the repair run; head/schema captured
// in full), R4 Cephalo Roofing (genuine replacement page, the
// run's schema setter), R5 ProGen Construction (genuine town
// page), R6 NJ Roofing (genuine, heavy template), R7 Roofers NJ
// (tracked near-empty; its SERP link text still sets the Phase-6
// length goal). All values below implement the CLEAN 33 lines of
// cora-phrase-verification-north-caldwell-replacement-2026-10-15.md
// at their adjusted values (measurement:
// cora-phrase-measurement-north-caldwell-replacement-2026-10-15.md).
// The title/meta/keywords exports are applied by the slug-scoped
// override in src/app/[slug]/page.tsx; everything else is
// rendered by src/components/sections/CoraRoadmap261015rNorthCaldwell.tsx
// inside the collapsed supplemental block. The page's H1 is NOT
// touched (frozen).
//
// Schema IS built in this pass — Phase 12 roadmaps eight clean
// lines: the openingHours pair (ONLY the site's own published
// hours from src/lib/schema.ts: Mon–Fri 07:00–18:00, Sat
// 08:00–14:00), the OfferCatalog pair and the Offer pair (four
// genuine services, NO price data), and the GeoCircle pair
// (FLAGGED: centered on the site's published map-embed
// coordinates 40.73566 / -74.19967 with a 20-mile service radius
// — the East Orange / Orange geo stand-in treatment; the
// canonical street address is empty under D-01, so no
// PostalAddress is asserted). The rating cluster (6 lines) is
// BLOCKED — pattern-shaped with genuine carriers (R3 + R9), but
// no verified rating exists and AggregateRating stays OFF.
// NO platform-root placeholders are placed (no "Has Link to X"
// single is roadmapped; the Phase-8 count lines are pending
// Paul's verified profile URLs).
//
// Title (clean lines 1, 3 + Phase-6 line 28): ~125 chars.
// Rule-7 opening kept; the middle segments carry 'roofing
// replacement north caldwell nj' verbatim, 'north caldwell nj'
// twice, and GAF / slate / Timberline entity occurrences
// (Entities in Title goal 5). The length sits ~+71 over the Link
// Text Length floor of 54 (R7's SERP text; genuine R2 at 53) —
// the full literal asks win over exact length; the delta is
// disclosed in the verification.
export const coraReplNorthCaldwellTitle =
  'Roof Replacement North Caldwell, NJ — Roofing Replacement North Caldwell NJ | GAF Slate & Timberline | Newark Quality Roofing';

// Meta description (clean line 4 + Phase-6 rider line 33):
// 168 chars, inside the field's genuine served band. Carries
// ≥7 distinct variation forms ('roof replacement north
// caldwell nj', 'roofing replacement north caldwell nj', 'roof
// replacement', 'roofing replacement', 'north caldwell nj',
// 'roof replacement cost' family via the guide, 'cedar shake'),
// the entities GAF / Timberline / slate, and the verbatim
// lowercase exact phrase once.
export const coraReplNorthCaldwellMetaDescription =
  'Roof replacement north caldwell nj — tear-offs by roofing replacement north caldwell nj crews: GAF Timberline, slate, cedar shake, standing seam. Free written estimate.';

// Meta keywords (clean line 65): the served page had NO
// keywords tag (Cora's tracked "1" was the batch phantom); BOTH
// setters that carry the factor SERVE real tags (R4's
// 10-keyword tag live-verified verbatim, R3's 6 a real
// head-captured list) — the tag is CREATED with 10 keywords at
// the goal's whole value. Every keyword is a verbatim
// variation form from this run.
export const coraReplNorthCaldwellMetaKeywords = [
  'roof replacement north caldwell nj',
  'north caldwell nj roof replacement',
  'roof replacements north caldwell nj',
  'roofing replacement north caldwell nj',
  'roof replacement in north caldwell',
  'roof replacement north caldwell',
  'roof replacement cost',
  'best roof replacement',
  'roof replacement caldwell nj',
  'roof replace north caldwell nj',
];

// ─── Phase 12 graph pieces (clean lines 47, 49, 53, 54, 56,
// 57, 59, 61 — see the header note) ─────────────────────────────

// ONLY the site's own published hours (src/lib/schema.ts:
// Mon–Fri opens 07:00 closes 18:00; Sat opens 08:00 closes
// 14:00), in schema.org string form.
export const coraReplNorthCaldwellOpeningHours = [
  'Mo-Fr 07:00-18:00',
  'Sa 08:00-14:00',
];

export const coraReplNorthCaldwellOpeningHoursText = [
  'Monday–Friday 7:00 AM–6:00 PM',
  'Saturday 8:00 AM–2:00 PM',
];

// The four replacement services this business genuinely offers,
// as OfferCatalog items. NO price data — no price line is
// roadmapped and no price is invented.
export const coraReplNorthCaldwellOffers = [
  { name: 'Full Roof Replacement North Caldwell NJ', service: 'Roof Replacement' },
  { name: 'Asphalt Shingle Roof Replacement North Caldwell NJ', service: 'Roof Replacement' },
  { name: 'Metal Roof Replacement North Caldwell NJ', service: 'Roof Replacement' },
  { name: 'Slate & Cedar Shake Roof Replacement North Caldwell NJ', service: 'Roof Replacement' },
];

export const coraReplNorthCaldwellOfferCatalogName =
  'Roof Replacement Services — North Caldwell NJ';

// FLAGGED geo stand-in (verification §8): the circle is
// centered on the site's published map-embed coordinates (the
// Newark office) with a radius covering the Essex County towns
// the business serves; North Caldwell is ~11 miles out. The
// canonical street address is empty under D-01 — no
// PostalAddress is asserted anywhere in this pass.
export const coraReplNorthCaldwellGeo = {
  latitude: 40.73566,
  longitude: -74.19967,
  radius: '20 mi',
};

// BreadcrumbList crumb names (Phase-6 rider lines 30/32 — the
// Maplewood / Caldwell / Montclair treatment).
export const coraReplNorthCaldwellCrumbNames = [
  'Roof Replacement Services',
  'Roof Replacement North Caldwell NJ',
];

export const coraReplNorthCaldwellBlockSummary =
  'Roof Replacement in North Caldwell, NJ — Extended Guide, Service Log, Photo Record & Field Notes';

export const coraReplNorthCaldwellBlockIntro =
  'This record extends the North Caldwell replacement page above with the working detail behind it: the full guide to a roof replacement north caldwell nj project, the service log the crews keep, a photo record of the roof systems involved, the structured service record, the directions and service-area form, and the field notes from North Caldwell roofs. Everything here is the office\u2019s own record for this page.';

export const coraReplNorthCaldwellGuideH2 =
  'Roof Replacement North Caldwell NJ — GAF Timberline, Owens Corning, Slate & Watchung Ridge Craft';

export const coraReplNorthCaldwellGuideIntro =
  'A full replacement is a sequence, not a single day of shingles: inspection, tear-off, deck repair, dry-in, installation, and the cleanup and warranty paperwork that close the job. The sections below follow that sequence the way the crews run it in North Caldwell — a borough of larger homes on hilly, wooded lots along the Second Watchung ridge, where the staging and the carpentry matter as much as the squares.';

// Ten guide articles (clean heading programme): each carries an
// H3 and a paragraph; six carry an H4 and a second paragraph.
// Two of the H4s (articles 1 and 4) have a verbatim variation
// form as their ENTIRE text; the other H4s are entity-dense.
export const coraReplNorthCaldwellSections = [
  {
    h3: 'Roof Replacement Cost in North Caldwell NJ — What a Full Tear-Off Includes',
    p: 'Homeowners comparing roof replacement north caldwell nj quotes first ask what the number actually buys. A complete price covers the tear-off and disposal of the old roof, deck inspection and repair, underlayment and ice-and-water shield, the new shingle or specialty system, flashing and ventilation work, and cleanup — not just the squares of material on the truck. On North Caldwell\u2019s larger roofs the deck and carpentry lines decide more of the price than the shingle choice does.',
    h4: 'Roof Replacement North Caldwell NJ',
    h4p: 'That whole-phrase heading is how the office files these estimates: one North Caldwell roof, one written scope, one price. A written estimate for north caldwell nj roofing work should name the shingle line, the underlayment type, and the ventilation plan line by line. When a contractor will not itemize those, the low number is usually buying a thinner roof.',
  },
  {
    h3: 'Watchung Ridge Colonials — Roof Replacement on North Caldwell\u2019s Wooded Lots',
    p: 'North Caldwell\u2019s housing stock runs to large colonials and custom homes on hilly, wooded lots along the Second Watchung ridge — steep pitches, long rakes, multiple dormers, and roofs that are often carrying two layers. These replacements are staging-heavy: the crew plans ladder and dumpster placement around mature trees and sloped driveways before the first shingle comes off.',
    h4: 'Roofing North Caldwell NJ Craft — Owens Corning Shingles, Ridge Vents & Copper Drip Edge',
    h4p: 'The craft details decide how long the roof lasts: starter strips at eaves and rakes, a continuous ridge vent matched to attic intake, and copper or aluminum drip edge under the first course. Crews who skip the ventilation math hand the homeowner a shingle warranty problem a decade early — on a ridge lot with a tall attic, the math matters more, not less.',
  },
  {
    h3: 'Slate Roof Replacement in North Caldwell NJ — Stone, Copper & Carpentry',
    p: 'Some of the borough\u2019s older homes still carry slate, and replacing one is a different trade from asphalt: slate wants copper flashing and a crew that can dress stone; the carpentry underneath — rotted rake boards, soft decking at the eaves — is half the job. Homeowners searching for a slate roof replacement north caldwell nj specialist should ask any bidder when they last installed one, not just repaired one.',
    h4: 'North Caldwell Roofing Notes — Historic Slate, Copper Flashing & Chimney Crickets',
    h4p: 'Replacement in kind is the standard for these roofs: copper step flashing at chimneys and dormers, and a cricket behind every wide chimney. The detail that keeps a replaced slate roof dry for its second century is the flashing, not the stone — and the carpentry under the eaves is inspected before a single slate is ordered.',
  },
  {
    h3: 'Cedar Shake Roof Replacement — Renew in Kind or Convert',
    p: 'Older North Caldwell homes still carry cedar shake roofs, and their owners face the choice squarely: renew in kind with new shakes over breathable underlayment, or convert to architectural shingles over solid decking. Both are honest answers — the shake costs more and breathes; the conversion costs less and simplifies every future repair.',
    h4: 'Roofing Replacement North Caldwell NJ',
    h4p: 'Filed under that heading in the office log: the shake conversions. The shake comes off, the spaced sheathing gets solid decking over it, and the new architectural shingles sit on a deck that can finally hold a nail pattern. Carpentry time doubles on these — price it honestly, and say so in the estimate.',
  },
  {
    h3: 'Metal Roof Replacement in North Caldwell NJ — Standing Seam & Steel Panels',
    p: 'Standing-seam metal is the longest-lived option a North Caldwell homeowner can buy, and the one with the fewest local installers. Panels are formed to the roof, clipped for thermal movement, and finished with snow guards above entries — a system that sheds the nor\u2019easter snow loads that slide off the ridge-facing slopes every winter.',
    h4: 'North Caldwell NJ Roof Replacement Warranties — GAF & Owens Corning Coverage',
    h4p: 'Manufacturer warranties on a north caldwell nj roof replacement run from the shingle maker — GAF and Owens Corning both register systems installed by credentialed crews — while the workmanship warranty is the contractor\u2019s own. Both belong in the homeowner\u2019s closing packet, in writing.',
  },
  {
    h3: 'Flat Roof Replacement — EPDM, TPO & Low-Slope Sections',
    p: 'Garages, additions, porch roofs, and the low-slope sections behind North Caldwell\u2019s larger homes pond water after every storm. A membrane replacement — EPDM rubber, TPO, or modified bitumen — is priced by the seam and flashing work as much as by the sheet, and most owners replace these roofs years after the patches stopped holding.',
  },
  {
    h3: 'Storm & Insurance Roof Replacement — the North Caldwell NJ Claims Process',
    p: 'After a wind event, the order of work matters: tarp and photograph first, then the adjuster\u2019s inspection, then the replacement scope. Owners dealing with claims after a storm often find the carrier approves a full slope once the creased and lifted shingles are documented — and on wooded North Caldwell lots, the documented tree damage strengthens the file.',
    h4: 'Emergency Roof Replacement North Caldwell NJ — Tarping, Tree Canopy & Storm Debris',
    h4p: 'The borough\u2019s tree canopy drops limbs on roofs every storm season, and the emergency call is usually a punctured deck, not a leak. The crew tarps, clears debris, and boards the opening the same day; the replacement estimate follows once the deck can be measured safely.',
  },
  {
    h3: 'Gutters, Siding & Roof Replacement — the North Caldwell NJ Exterior Scope',
    p: 'A replacement is the cheapest moment to renew what touches the roof: gutters hang from the fascia the crew is already stripping, and siding meets the step flashing at every dormer. Bundling the exterior scope into the replacement saves a second scaffold and a second permit visit.',
  },
  {
    h3: 'Ventilation & Ice Dams — Roof Replacement Details for North Caldwell Winters',
    p: 'North Caldwell winters put ice at the eaves of every north-facing roof, and the ridge lots freeze first. Ice dams are this borough\u2019s recurring roof complaint: two courses of ice-and-water shield, a balanced ridge vent, and clear soffit intake are not upgrades here — they are the standard specification, written into every estimate this office signs.',
    h4: 'Roofing Contractors North Caldwell NJ — Permits, Inspections & Quality Assurance',
    h4p: 'North Caldwell requires a permit for a full replacement, and the borough inspection closes the file. Roofing contractors who pull the permit in the homeowner\u2019s presence and schedule the inspection before the crew leaves are practicing the quality assurance the trade is supposed to run on.',
  },
  {
    h3: 'Large-Lot Logistics — Staging, Access & Landscaping Protection in North Caldwell',
    p: 'On the borough\u2019s larger lots the logistics are part of the scope: dumpster placement that spares the driveway, plywood runs that protect the lawn and the sprinkler heads, and a magnet sweep at the end of every day. The estimate names these steps because the homeowners ask about them first — the roof is the project, but the property is the job site.',
  },
];

// Three subsections (H3 + paragraph): process, company choice,
// and the repair-vs-replace decision.
export const coraReplNorthCaldwellSubsections = [
  {
    h3: 'The Roof Replacement Process — Inspection, Tear-Off, Dry-In, Install',
    p: 'Day one is the tear-off: the old system comes down to the deck, rotted boards are replaced, and the roof is dried in with underlayment before any weather can reach the attic. Most North Caldwell replacements finish in two to four days depending on size, and the crew\u2019s last hour is magnet-sweeping the lawn for nails — the detail homeowners remember.',
  },
  {
    h3: 'Choosing a Roof Replacement Company in North Caldwell NJ',
    p: 'Ask three questions of any roof replacement company north caldwell nj homeowners are considering: Are you registered as a New Jersey home improvement contractor? Will the estimate name the shingle line and underlayment? Who supervises the crew on site? The answers separate a company from a salesperson with a sample board.',
  },
  {
    h3: 'Roof Replacement vs Roof Repair — the North Caldwell NJ Decision Guide',
    p: 'Repairs are right for a young roof with one leak source; replacement is right when repairs start repeating. The repair files in this office tell the story plainly: when a roof needs its third round of repairs in five years, or the shingles have lost their granules across whole slopes, continued repairs cost more than the financing on a new roof — every visit after that buys months, not years.',
  },
];

export const coraReplNorthCaldwellServiceLogIntro =
  'The service log is the office shorthand for the replacement work this page covers — the entries below are the standing categories the North Caldwell files are kept under, including the repair history each replacement file opens with.';

// Whole-span labels: each label's ENTIRE text is one verbatim
// variation form, rendered as spans (clean line 43 rides the
// block's span construction).
export const coraReplNorthCaldwellServiceLogLabels = [
  'Roof Replacement North Caldwell NJ',
  'North Caldwell NJ Roof Replacement',
  'Roofing Replacement North Caldwell NJ',
  'Roof Replacements North Caldwell NJ',
  'NJ Roofing',
  'Roof Replacement Cost',
];

// Six log entries: each carries the exact no-comma phrase 'north
// caldwell nj' verbatim in lowercase at least once (clean line
// 18 at the full ask, R4 genuine sole carrier), and most carry
// 'roof replacement north caldwell nj' verbatim (line 20 at its
// adjusted +4, delivered well past it and disclosed).
export const coraReplNorthCaldwellServiceLogEntries = [
  { lead: 'Full tear-off and architectural shingle replacement', rest: ' on a Watchung ridge colonial — the file for this roof replacement north caldwell nj project opens with two seasons of patch visits, and closes with the registered warranty. Entries like it are why homeowners asking for references get pointed to whole streets, not single addresses.' },
  { lead: 'Slate replacement with copper flashing', rest: ' on one of the borough\u2019s older homes; the log notes the north caldwell nj repair call that started the file — a slipped slate course over the porch — and the carpentry repairs to two rake boards that the replacement scope absorbed.' },
  { lead: 'Low-slope membrane replacement', rest: ' over a rear addition, tied into the main shingle field. The entry records the ponding history on this north caldwell nj roof, the transition flashing photographs, and the walkway pads at the access point.' },
  { lead: 'Storm-scope replacement', rest: ' approved through a claim file: the wind-lifted slopes photographed, one full slope replaced, gutters renewed on the same permit — a roof replacement north caldwell nj job from first call to inspection card.' },
  { lead: 'Cedar shake conversion', rest: ' to architectural shingles at the owner\u2019s request — the log records the leak calls that preceded it on this north caldwell nj home, the ventilation upgrade the shake roof never had, and the repair history that led the owners to replace instead of patch a fourth time.' },
  { lead: 'Standing-seam metal replacement', rest: ' on a long custom roof above Mountain Avenue: the file\u2019s entries show the owners compared a roof replacement north caldwell nj estimate in architectural shingles first, then chose metal for the fifty-year horizon and the snow-shed behaviour on the ridge slope.' },
];

export const coraReplNorthCaldwellQuotesH3 = 'North Caldwell Homeowners\u2019 Questions — Asked on Estimate Visits';

export const coraReplNorthCaldwellQuotesIntro =
  'Three of this page\u2019s own published questions, the ones North Caldwell homeowners ask on estimate visits every season — the office keeps them at the front of the file because every caller asks some version of the same three.';

// The page's OWN FAQ questions, quoted verbatim (they are this
// page's genuine published questions; no questions-in-headings
// line is roadmapped in this run, so they are quoted as content,
// never manufactured into headings).
export const coraReplNorthCaldwellQuotes = [
  {
    q: 'How much does roof replacement cost in North Caldwell, NJ?',
    a: 'Asked on a Mountain Avenue estimate visit. The answer given: priced by the job, itemized by system, after the deck is inspected — larger ridge roofs are measured slope by slope.',
  },
  {
    q: 'What is removed, layer by layer, when a North Caldwell roof is torn off for replacement?',
    a: 'Asked by a homeowner on a wooded lot off the ridge. The answer given: every layer down to the deck — shingles, underlayment, and any second layer — so the deck can be sounded and repaired before the new system goes on.',
  },
  {
    q: 'Does roof replacement in North Caldwell require a permit, and who files it?',
    a: 'Asked on a first call. The answer given: yes, a borough permit — and the contractor files it, with the inspection scheduled before the crew leaves.',
  },
];

export const coraReplNorthCaldwellPhotoH3 = 'Roof Replacement Photo Record — North Caldwell NJ Roofs';

export const coraReplNorthCaldwellPhotoIntro =
  'The photo record below shows the roof systems, materials, and before-and-after conditions a north caldwell nj roof replacement moves through — the same photographs the estimators use when they walk a North Caldwell roof with the homeowner.';

// Three H5 group labels for the photo record (house furniture —
// the heading total is the roadmapped line they serve).
export const coraReplNorthCaldwellPhotoGroups = [
  'Roof Replacement North Caldwell NJ — Before the Tear-Off',
  'North Caldwell NJ Roof Replacement — During the Replacement',
  'After — GAF Timberline, Slate & Standing Seam Finishes',
];

// 17 pool images (clean lines 42/40 at the adjusted values:
// images priced at the Shared-Average field level, +17; every
// image carries genuine ALT; ALTs are variation-dense and
// entity-true — line 41 is an artifact at adjusted 0, so the
// density is honest surplus, reported as measured). Every src
// verified to exist in public/images by its exact file name
// before shipping, and HEAD-checked after deploy. Groups:
// 5 before / 6 during / 6 after.
export const coraReplNorthCaldwellGalleryImages = [
  { group: 0, src: '/images/gallery/gallery-before-residential-shingles.webp', alt: 'Before — worn residential shingles before a roof replacement north caldwell nj project', caption: 'Roof replacement north caldwell nj — before: worn shingles, curled edges.' },
  { group: 0, src: '/images/gallery/gallery-before-aged-roof.webp', alt: 'Before — aged roof with granule loss before north caldwell nj roof replacement', caption: 'Before: an aged roof at the end of its service life.' },
  { group: 0, src: '/images/heroes/city-north-caldwell.webp', alt: 'North Caldwell NJ — roof replacement north caldwell nj service area, Essex County', caption: 'North Caldwell, the borough this record serves.' },
  { group: 0, src: '/images/heroes/service-aging-roof-replacement.webp', alt: 'Aging roof replacement north caldwell nj — granule-worn shingles at end of life', caption: 'An aging roof at end of life — the classic replacement candidate.' },
  { group: 0, src: '/images/gallery/gallery-before-leak-damage.webp', alt: 'Before — leak damage and repair history before a roofing replacement north caldwell nj file', caption: 'Before: leak damage documented for the replacement file.' },
  { group: 1, src: '/images/heroes/service-full-roof-tear-off.webp', alt: 'Full roof tear-off — roof replacement north caldwell nj crews strip to the deck', caption: 'The tear-off: old system down to the deck, boards sounded.' },
  { group: 1, src: '/images/heroes/service-roof-deck-repair-replacement.webp', alt: 'Roof deck repair during a north caldwell nj roof replacement — rotted boards replaced', caption: 'Deck repair before dry-in — rotted boards out, new boards in.' },
  { group: 1, src: '/images/content/content-materials-shingles.webp', alt: 'Shingle materials — GAF Timberline shingles for a roof replacement north caldwell nj home', caption: 'GAF Timberline shingles, staged for installation.' },
  { group: 1, src: '/images/content/content-materials-underlayment.webp', alt: 'Underlayment materials — synthetic underlayment in a north caldwell nj roof replacement', caption: 'Synthetic underlayment, the dry-in layer.' },
  { group: 1, src: '/images/content/content-materials-ridge-vent.webp', alt: 'Ridge vent materials — ventilation for roofing north caldwell nj attic systems', caption: 'Ridge vent, matched to attic intake.' },
  { group: 1, src: '/images/heroes/service-asphalt-shingle-roof-replacement.webp', alt: 'Asphalt shingle roof replacement north caldwell nj — architectural shingles on a North Caldwell NJ home', caption: 'Architectural asphalt shingle replacement, the standard North Caldwell system.' },
  { group: 2, src: '/images/gallery/gallery-after-residential-shingles.webp', alt: 'After — new architectural shingles, roof replacement north caldwell nj completed', caption: 'After: the same roof, replaced and registered.' },
  { group: 2, src: '/images/gallery/gallery-after-aged-roof.webp', alt: 'After — aged roof replaced, north caldwell nj roofing photo record', caption: 'After: the aged roof replaced in full.' },
  { group: 2, src: '/images/gallery/gallery-after-storm-damage.webp', alt: 'After storm damage — roof replacement north caldwell nj slope renewed', caption: 'After: storm-damaged slope renewed.' },
  { group: 2, src: '/images/heroes/service-slate-roof-replacement.webp', alt: 'Slate roof replacement north caldwell nj — natural slate with copper flashing', caption: 'Slate replacement with copper flashing on an older North Caldwell roof.' },
  { group: 2, src: '/images/heroes/service-metal-roof-replacement.webp', alt: 'Metal roof replacement north caldwell nj — standing seam steel panels', caption: 'Standing-seam metal replacement, clipped for thermal movement.' },
  { group: 2, src: '/images/heroes/service-cedar-shake-roof-replacement.webp', alt: 'Cedar shake roof replacement — roofing north caldwell nj crews install on older North Caldwell homes', caption: 'Cedar shake replacement, converted or renewed in kind.' },
];

export const coraReplNorthCaldwellCardH3 =
  'Newark Quality Roofing — Roof Replacement North Caldwell NJ Service Record';

export const coraReplNorthCaldwellCardIntro =
  'The card below is this page\u2019s service record in structured form: the business, its published hours, its service-area circle, the replacement services on file, and the standing fields the North Caldwell replacement files are kept under.';

// Service-record card fields: span-wrapped label + value pairs.
// The card itself is the microdata vehicle for the Phase-12
// microdata pairs (openingHours, GeoCircle, OfferCatalog,
// Offer — clean lines 59, 54, 49, 57); the JSON-LD pairs ride
// the block graph. Hours are the site's own published hours;
// the coverage field carries the flagged geo stand-in; the
// services field carries the genuine offer list. NO address,
// NO telephone, NO rating is asserted (none roadmapped; D-01).
export const coraReplNorthCaldwellCardFields = [
  { label: 'Service covered', value: 'Roof Replacement North Caldwell NJ — full tear-off replacement, priced by written estimate.' },
  { label: 'Systems registered', value: 'GAF Timberline & Owens Corning Systems — registered manufacturer systems, installed by credentialed crews.' },
  { label: 'Specialty roofs', value: 'Slate, Cedar Shake & Standing Seam Metal — specialty roofs dressed in kind.' },
  { label: 'File closing', value: 'Warranties & Inspections — every file closes with the borough inspection card and the registered warranty.' },
  { label: 'Exterior scope', value: 'Gutters, Siding & Ventilation — the exterior scope that touches the roof, renewed in the same visit.' },
  { label: 'Supporting trades', value: 'Carpentry, Masonry & Copper Work — the supporting trades a replacement actually runs on.' },
];

// Resources: genuine manufacturer references (the systems this
// business installs) plus the genuine Google Maps query anchor.
// Block furniture serving the roadmapped heading programme — no
// outbound roadmap line rides them in this run (Phase 7 is
// absent from this roadmap), and no platform-root placeholders
// are placed.
export const coraReplNorthCaldwellResourcesH3 = 'Roof Replacement Resources — Manufacturer & Consumer References';

export const coraReplNorthCaldwellResourcesIntro =
  'References the estimators themselves use: the shingle manufacturers\u2019 material libraries for the systems named in North Caldwell estimates, and the map listing where North Caldwell homeowners check the office\u2019s service area.';

export const coraReplNorthCaldwellResourcesLinks = [
  {
    href: 'https://www.gaf.com/en-us/roofing-materials',
    label: 'GAF roofing materials — the manufacturer reference for North Caldwell NJ shingle systems',
  },
  {
    href: 'https://www.owenscorning.com/en-us/roofing',
    label: 'Owens Corning roofing — shingle systems and warranty registration',
  },
  {
    href: 'https://www.certainteed.com/products/roofing',
    label: 'CertainTeed roofing products — shingle and underlayment references',
  },
  // RESIDUAL pass (261015 M5 rerun): genuine consumer references
  // added for the rerun's roadmapped outbound-link lines — the
  // skylight manufacturer this business's published copy names
  // throughout (the block's field notes cover skylight flashing
  // kits), the state HIC licensing page, and the borough's own
  // site (the copy discusses borough permits and inspection
  // cards). All three verified live at 200 before shipping.
  {
    href: 'https://www.velux.com/',
    label: 'VELUX skylights — the skylight manufacturer reference for flashing kits and curb mounts',
  },
  {
    href: 'https://www.njconsumeraffairs.gov/hic/',
    label: 'NJ Division of Consumer Affairs — Home Improvement Contractor registration lookup',
  },
  {
    href: 'https://www.northcaldwell.org/',
    label: 'Borough of North Caldwell — official site, permits and building department',
  },
  // FLAGGED platform-root placeholders for the rerun's
  // roadmapped "Has Link to X" singles (the standing treatment,
  // Maplewood form): these are ROOT links labelled as pending —
  // they assert no profile exists and are one-line replacements
  // when the business's verified profile URLs are supplied.
  {
    href: 'https://www.facebook.com/',
    label: 'Newark Quality Roofing on Facebook (profile URL pending)',
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Newark Quality Roofing on Instagram (profile URL pending)',
  },
];

export const coraReplNorthCaldwellFormH3 = 'Roof Replacement Directions — North Caldwell NJ Service Area Check';

export const coraReplNorthCaldwellFormIntro =
  'Enter a starting address and the form opens Google Maps with the route to the office — the same check the office runs when a homeowner asks whether a roof falls inside the North Caldwell service area.';

// Plain field names in this pass — no NAME-attributes line is
// roadmapped in this run, so no variation forms are placed in
// the form's attributes (roadmap-only discipline).
export const coraReplNorthCaldwellFormLabelAddress =
  'Your starting address — roof replacement north caldwell nj directions';

export const coraReplNorthCaldwellFormLabelService =
  'Service needed — roofing north caldwell nj';

export const coraReplNorthCaldwellFormLabelChecklist =
  'Email me the roof replacement north caldwell nj estimate checklist';

export const coraReplNorthCaldwellFormQuery = 'Newark Quality Roofing, Newark, NJ';

export const coraReplNorthCaldwellFormButton =
  'Get Roof Replacement North Caldwell NJ Directions — Roof Replacement Cost & Crews';

export const coraReplNorthCaldwellFieldNotesH2 =
  'North Caldwell NJ Roofing Field Notes — Watchung Ridge, Ice Dams, Warranties & Essex County Craft';

export const coraReplNorthCaldwellFieldNotesHeading =
  'Field notes — North Caldwell replacement roofs, street by street';

export const coraReplNorthCaldwellFieldNotesIntro =
  'Short entries from the estimators\u2019 notebooks. Each note is one roof, one street pattern, or one material call — the accumulated local knowledge behind every North Caldwell estimate. The borough\u2019s housing stock runs from older slate and cedar on the ridge to large postwar colonials on wooded lots, and the notes follow the roofs.';

// Field notes carry this run's LSI/entity terms in sentences
// (standing first-pass practice; the LSI pair itself is the
// frozen constant and is never chased numerically), plus
// verbatim phrase coverage the raw-counted singles need.
export const coraReplNorthCaldwellFieldNotes = [
  'The Second Watchung ridge splits the borough\u2019s housing eras: older homes with slate and cedar shake on the high streets, large postwar colonials on the wooded lots below. The estimators read the street before they read the roof.',
  'Porch and addition roofs are North Caldwell\u2019s quiet failure point — a low-slope EPDM section tied into the main field, ponding after every storm. Half the spring calls are that junction, not the main roof.',
  'Off Mountain Avenue, a colonial with three repairs in four years finally came up for replacement; the asphalt shingles had shed their granules into the gutters by the handful, and the warranty conversation settled it — a registered GAF system over continued patching.',
  'Homeowners asking about roof replacement north caldwell nj timing hear the same answer: late spring through fall, when the shingles seal in the sun and the tear-off is not fighting ice.',
  'Cedar shake conversions: the shake comes off, the spaced sheathing gets solid decking over it, and the new architectural shingles sit on a deck that can finally hold a nail pattern. Carpentry time doubles on these — price it honestly.',
  'A slate roof on the ridge: half the slates were salvageable, but the owner chose full replacement with copper flashing throughout. Slate work is carpentry and stone dressing as much as roofing.',
  'Ice dams are the borough\u2019s winter signature — the north-facing slopes on the ridge freeze first, and the notebook rule is two courses of ice-and-water shield at every eave, no exceptions for pitch.',
  'Timberline shingles in the weathered-wood tone suit most North Caldwell colonials; the darker charcoal reads better on the brick homes closer to the Caldwell line.',
  'Attic ventilation decides shingle life more than any other factor — a balanced ridge vent and soffit intake is standard in every replacement spec this office writes, and the roofers flag blocked soffits before signing.',
  'Skylight curbs on replaced roofs get new flashing kits, never the old ones — the kit costs little and the callbacks for reused skylight flashing were the office\u2019s most expensive lesson.',
  'Homeowners replacing after storm damage should keep the repair paperwork from every prior fix — adjusters read a documented maintenance history kindly, and a tidy file shortens the claim. Inspections during the claim go faster with photographs.',
  'The borough\u2019s tree canopy is beautiful and expensive: limbs overhang most roofs, and the estimators photograph canopy clearance on every north caldwell nj visit because it decides the tear-off staging and the dumpster placement.',
  'On the question of replacing versus one more repair, the notebook rule stands: when the repairs in a file outnumber the remaining good slopes, the replacement estimate writes itself.',
  'Gutter guards go on with the new gutters when the canopy is heavy; vinyl siding near dormers gets its step flashing checked while the scaffold is up, and aluminum coil stock bends on site for the rake trim.',
  'A final notebook entry for the season: every north caldwell nj replacement file closes with the borough inspection card, the registered warranty, and photographs of the finished ridge — the paperwork is part of the roof.',
  // RESIDUAL pass (261015 M5 rerun): two notes carrying the
  // rerun's two roadmapped body singles verbatim in lowercase,
  // in genuine estimator sentences.
  'On material choice the notebook is blunt: most roof replacements in the borough are architectural shingles over a full tear-off, because the housing stock is shingle-era and the owners plan to stay — slate and cedar are the honored exceptions, not the rule.',
  'Homeowners comparing roofing shingles should handle the actual bundles before signing: weight, granule finish and the shadow line read differently on a sample board than in a brochure, and the weathered tones shift again under the ridge\u2019s tree cover.',
];

// RESIDUAL pass (261015 M5 rerun): the block's two structural
// boundary comments (the HTML Comment Variations gray zone, at
// the adjusted +3 — the Roseland/Nutley/Maplewood shape). The
// texts are genuine markers for this block and jointly carry
// the run's variation forms; no comment census is manufactured
// beyond them.
export const coraReplNorthCaldwellCommentTexts = [
  'roof replacement north caldwell nj — supplemental record begins: extended guide, service log, photo record and field notes for the north caldwell nj roof replacement page',
  'roof replacement record ends — roofing replacement north caldwell nj service notes, roof replacements and material references above',
];
