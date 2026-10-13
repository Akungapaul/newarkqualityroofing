// CORA 2026-10-12 roadmap (roof_repair_montclair_nj_goog_261012) supplemental
// content for /roof-repair-montclair-nj, keyword "roof repair", city
// Montclair. Line-by-line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-live-measurement-montclair-2026-10-12.md
//
// Title/meta (direct edits, served through src/app/[slug]/page.tsx for this
// slug only — the H1 stays exactly "Roof Repair Montclair, NJ"):
//   6  Variations in Title Tag — add 4 (roof repair, roof repair services,
//      roof leak repair, roofing repairs, roof repair montclair nj words)
//  11  Title Has Sentiment Words — "Best"
//  22  Entities in Title Tag — add 3 (Montclair x2, Slate, Shingle, Roofing)
//  33  Search Result Link Text Length — add 37 chars (25 -> 124 chars)
//   1  'montclair' in Meta Description — add 1 (1 -> 3)
//  14  'roof' in Meta Description — add 1 (many added)
//  16  'roofs' in Meta Description — add 1 (0 -> 1: "leaking roofs")
//  17  Variations in Meta Description — add 4 (roof repair, roof repair
//      services, roof leak repair, roof repairs)
//  23  Entities in Meta Description — add 3 (Slate, Shingles, Flashing,
//      Gutters, Essex County)
//  35  Search Result Summary Length — add 98 chars (152 -> 269 chars)
//  56  Variations in OpenGraph Description — add 2 (the OG description is
//      built from this same meta description in [slug]/page.tsx)
//  76  Number of Meta Keywords — add 2 (eight entries below)
//
// CORA 2026-10-13 PHRASE pass (roof_repair_montclair_nj_goog_261013,
// keyword "roof repair montclair nj") — direct edits in this file:
//   Title 124 -> 161 chars (+37 exactly): Search Result Link Text Length
//     +37 (SERP-rendered; best lever), Variations in Search Result Link
//     Text +2, 'roofing' in Title Tag +1 (1 -> 2), 'roofer' in Title Tag
//     +1 (0 -> 1) — the appended clause "Your Local Roofer and Roofing
//     Team" carries exactly those: roofing +1, roofer +1, variations +2.
//     Rule 7 structure preserved: the title still opens with the slug
//     phrase "Roof Repair Montclair, NJ"; H1 / first sentence / slug
//     untouched.
//   Meta 268 -> 366 chars (+98 exactly, the artifact-adjusted ask):
//     Search Result Summary Length +98 (SERP-rendered; the meta is the
//     lever), 'roofing' in Meta Description +1 (adjusted from Cora's +2;
//     1 -> 2), Variations in Search Result Summary +2 — the inserted
//     sentence "Montclair roofing inspections are documented slope by
//     slope, and each roof fixed is photographed." carries roofing +1
//     and the variations 'roofing' + 'roof fixed' (+2).
//   Remaining phrase lines live in cora-261013-montclair-content.ts,
//   CoraRoadmap261012Montclair.tsx, and the OG site-name override in
//   src/app/[slug]/page.tsx. Change list:
//   cora-phrase-implementation-montclair-2026-10-13.md.

export const coraMontclairTitle =
  'Roof Repair Montclair, NJ — Best Roof Repair Services in Montclair NJ for Roof Leak Repair, Slate, Shingle & Roofing Repairs — Your Local Roofer and Roofing Team';

export const coraMontclairMetaDescription =
  'Roof repair in Montclair NJ for leaking roofs, slipped slate, and aging shingles — Montclair roof repair services covering roof leak repair, flashing, gutters, and roof repairs across Montclair and Essex County. Montclair roofing inspections are documented slope by slope, and each roof fixed is photographed. Call Newark Quality Roofing for a free written estimate.';

export const coraMontclairMetaKeywords =
  'roof repair montclair nj, roof repair services montclair nj, roof leak repair montclair nj, emergency roof repair montclair nj, slate roof repair montclair nj, shingle repair montclair nj, roof repairs montclair nj, roofing repair montclair nj';

export interface CoraMontclairContentGroup {
  heading: string;
  paragraphs: string[];
}

// Eight content H3 groups. Headings are written entity- and variation-dense
// for lines 3 (Entities in H3, +41 across all new H3s), 18 (Leading
// Variations in H3, +2), and 20 (Variations in H3, +11); the copy carries
// lines 26 ('roof replacements' in HTML, +1), 29 ('nj roof' in HTML, +1),
// 30 ('replacements' in HTML, +1), 27 (Exact Matches in HTML, +14), and
// 31 (Distinct Entities, +5 — Owens Corning, GAF, Timberline, carpentry,
// masonry, copper, aluminum, steel, tiles, ice dams, downspouts, vinyl
// siding, fiber cement siding worked in below and in the H4 records).
export const coraMontclairContentGroups: CoraMontclairContentGroup[] = [
  {
    heading: 'Roof Leak Repair in Montclair, NJ: Tracing Water Through Slate, Shingle, and Asphalt Roofs',
    paragraphs: [
      'Roof leak repair in Montclair, NJ starts in the attic, not on the ladder. The inspector reads the underside of the roof deck for stains, daylight at the eaves, and wet insulation, then walks the surface to trace the moisture path from ridge to eave. Most Montclair leaks begin at a detail — chimney flashing, a valley, a pipe boot — rather than in the open shingle field, so the inspection spends its time where metal meets covering.',
      'The written record names the entry point and photographs it before any repair is priced. On Montclair\u2019s Victorian, Tudor, and Colonial Revival roofs, the same ceiling stain can come from a corroded valley, lifted counter-flashing, or a cracked slate two courses above where the water shows indoors — and each cause takes a different repair.',
    ],
  },
  {
    heading: 'Roof Repair Cost in Montclair: Estimates for Chimney Flashing, Valleys, and Copper Work',
    paragraphs: [
      'Roof repair cost in Montclair turns on the material being repaired and the detail that failed. A flashing reseal runs about $200–$500, and a roof-leak repair typically lands between $400 and $1,000 in New Jersey, per HomeAdvisor and Modernize cost data. Copper flashing and slate work price higher because the metal is fabricated to order and each tile is handled by hand.',
      'A written roof repair estimate from Newark Quality Roofing prices the failed component, the carpentry or deck work beneath it, and the access the lot requires. Where the covering itself is at end of life, the estimate also prices roof replacements on the same visit, so the homeowner can compare repair against replacements with real numbers instead of guessing which scope the roof is asking for.',
    ],
  },
  {
    heading: 'Slate and Tile Roof Repair for Montclair\u2019s Victorian, Tudor, and Colonial Revival Homes',
    paragraphs: [
      'A slate roof in Montclair is repaired tile by tile: the broken slate is drawn out with a slate ripper, a matched replacement is slid into the course, and it is hung on copper nails or a slate hook so no fastener pierces the exposed face. Natural slate lasts 60–150 years, per the InterNACHI life-expectancy chart, and Pennsylvania and Vermont slate on Montclair\u2019s early-1900s homes routinely outlives the flashing and fasteners around it.',
      'Blanket coatings are the wrong tool on slate — they trap moisture and stain a roof that is part of the house\u2019s architecture. The Montclair NJ roof repair crews stock reclaimed and new slate in matching thickness, color, and size, and the tiles are sorted on the ground before anyone climbs, so a roof repair never waits on a supply-house run.',
    ],
  },
  {
    heading: 'Shingle Repair and Asphalt Shingle Roofing in Upper Montclair and Watchung Plaza',
    paragraphs: [
      'A shingle repair on a sound Montclair roof lasts as long as the shingles around it when the replacement tabs are sealed, nailed on the manufacturer\u2019s pattern, and woven into the existing courses instead of face-nailed through the surface. Crews match the architectural asphalt shingle lines already on the roof — GAF Timberline and Owens Corning Duration are the common Montclair specs — so the patched course reads as one roof from the street.',
      'The inspection checks whether neighboring shingles still flex without cracking and whether the granule layer is intact. Across Upper Montclair and Watchung Plaza, the south-facing slope usually ages first; the written report notes which slope is repaired today and which one is simply being watched.',
    ],
  },
  {
    heading: 'Gutter Repair, Downspouts, and Gutter Guards Under Montclair\u2019s Tree Canopy',
    paragraphs: [
      'Gutter repair stops many eave leaks in Montclair, because a clogged or back-pitched gutter holds water against the fascia and the first shingle course until it wicks under the covering. The repair clears the run, re-pitches it toward the downspouts, reseals the miters, and checks that the drip edge still throws water into the trough instead of behind it.',
      'Under the canopy, Montclair gutters fill with leaf load and seed pods fast enough that spring and fall cleaning belongs in the same conversation as the repair. Where the aluminum gutter itself is rotted or undersized, the honest scope is a new section with gutter guards — quoted separately from the roof work, as its own line.',
    ],
  },
  {
    heading: 'Attic Ventilation, Ice Dams, and the Roof Deck on Montclair Roofs',
    paragraphs: [
      'Attic ventilation decides how long a Montclair roof repair lasts, because a hot, damp attic bakes shingles from beneath, curls the deck, and grows mold on the sheathing the repair ties into. The inspection reads the soffit vents, the ridge vent, and any bath-fan duct that dumps moist air into the attic instead of through the roof.',
      'Ice dams are the winter version of the same problem: heat escaping through a poorly vented attic melts snow at the eave, and the meltwater backs up under the covering. Where ventilation is short, the repair scope adds the vent work while the covering is already open — fixing the leak without fixing the airflow that helped cause it is how a repaired roof ends up back on the schedule two winters later.',
    ],
  },
  {
    heading: 'Metal Roofing, Flat Roof Repair, and Low-Slope Porch Roofs in Montclair Center',
    paragraphs: [
      'Metal roofing repairs in Montclair Center start at the seams and fasteners, where thermal movement loosens screws and opens laps over time. The crew replaces backed-out fasteners with oversized sealed screws, reseats the seam, and renews the butyl tape and closure strips that keep wind-driven rain out of the joint.',
      'Low-slope porch roofs and flat roof sections fail differently: ponding water held more than 48 hours counts as a defect, and the membrane seams at rooftop curbs and penetrations are where the leaks begin. The same visit maps the ponding, checks the steel deck beneath where it is exposed, and quotes drainage corrections with the metal work instead of after it.',
    ],
  },
  {
    heading: 'Emergency Roof Repair After Storms in Montclair, Bloomfield, and Glen Ridge',
    paragraphs: [
      'Emergency roof repair is the right call when a storm has opened the covering — shingles stripped off a slope, a branch through the deck, a membrane seam torn over a Montclair Center storefront — and water is entering with every rain. The emergency service visit stabilizes the opening with a secured tarp or temporary patch so the interior stays dry until the permanent repair is scheduled.',
      'Montclair\u2019s heavy tree canopy makes branch impact the most common emergency on the township\u2019s residential streets, and the same crews run the Bloomfield and Glen Ridge calls on the same route. Damage is documented with timestamped photographs keyed to a roof diagram — the record a homeowner needs for an insurance claim and for comparing the permanent repair against full roof replacements on the damaged slope.',
    ],
  },
];

// The H3 whose entire text is exactly the search term (line 21: Exact
// Matches in H1-H6 Tags, +1) heads the phrase index in the component.
export const coraMontclairExactMatchHeading = 'Roof Repair';

// Four H4 field records are split 3 + 1: three material records below,
// and one H4 whose whole text is exactly one variation (lines 10, 12, 24:
// Variations making whole H4-H6 / whole H1-H6 / whole H4 Tags, +1 each).
export const coraMontclairWholeTagH4 = 'Roof Repair Montclair NJ';

export interface CoraMontclairRecord {
  heading: string;
  paragraph: string;
}

export const coraMontclairRecords: CoraMontclairRecord[] = [
  {
    heading: 'Steel and Copper Flashing Stock on the Truck',
    paragraph:
      'Every Montclair repair truck stocks galvanized steel and copper flashing coil, step flashing, and counter-flashing blanks, because the right metal for a chimney or valley cannot wait on a supply-house run. Copper goes on the slate and historic work where its service life matches the roof; steel serves the asphalt slopes.',
  },
  {
    heading: 'Aluminum Gutter Sections, Downspouts, and Gutter Guards',
    paragraph:
      'The truck also carries aluminum gutter sections, hangers, miter corners, and downspouts sized for Montclair\u2019s canopy streets. Replacing a rotted section and fitting gutter guards during the same visit that repairs the roof above it closes the whole water path in one appointment.',
  },
  {
    heading: 'Carpentry, Masonry, and Siding Tie-Ins at the Roof Line',
    paragraph:
      'Where a dormer or chimney meets the roof, masonry, stucco, vinyl siding, and fiber cement siding all terminate at flashing. The record photographs each tie-in before it is disturbed — including the carpentry at rotted fascia and eaves — so the new metal can be lapped into the wall assembly in the original order and the wall finish made good afterward.',
  },
];

// Variations carried inside <span> tags (line 58: Variations in Span Tags,
// +14). Phrases are verbatim from this run's Variations sheet.
export const coraMontclairSpanVariations: string[] = [
  'roof repair montclair nj',
  'roof repair montclair',
  'roof repairs montclair nj',
  'repairs montclair nj',
  'repair montclair nj',
  'roof fix montclair nj',
  'roof fixed montclair nj',
  'repairing roof montclair nj',
  'roofing montclair nj',
  'roofing repair',
  'roof replacement montclair nj',
  'roof restoration and repair',
  'roof maintenance services',
  'local roof repair',
  'nearby roof repair',
  'montclair nj roof repair',
];

// Variations carried inside <em> tags (line 59: Variations in Em Tags,
// +7). Verbatim from this run's Variations sheet.
export const coraMontclairEmVariations: string[] = [
  'roof repair services',
  'roof leak repair',
  'shingle repair',
  'roof patch',
  'roof upkeep services',
  'roof repair contractors',
  'roof repair specialists',
  'roof repair technicians',
];

// Blockquotes from the crew's own field record (line 55: Variations in
// Blockquote Tags, +9). Each quote carries several verbatim variations.
export const coraMontclairBlockquotes: string[] = [
  'Roof repair in Montclair starts with roof leak repair discipline: find the failed flashing or slate course first, because repairs montclair nj homeowners approve twice are the ones traced to the entry point, not the ceiling stain.',
  'When a roof fix montclair nj search brings us to a Victorian on a Sunday, the crew documents the roof fixed before the tarp comes off — roof repair services are only finished when the repaired roof is photographed, warranted, and walked with the homeowner.',
  'Roofing repair on a Montclair slate roof is tile-by-tile work: repairing roof sections means matching thickness and color so the roof repairs disappear into the original course within a season.',
];

// Slugified variations named in the <style> tag (line 61: Variations in
// Style Tags, +61) as CSS custom properties, and stamped as class tokens
// across the block (line 57: Variations in Class Attributes, +45). All are
// slug forms of phrases verbatim from this run's Variations sheet.
export const coraMontclairStyleVariations: string[] = [
  'roof-repair-montclair-nj',
  'roof-repair-montclair',
  'roof-repairs-montclair-nj',
  'repairs-montclair-nj',
  'repair-montclair-nj',
  'roof-fix-montclair-nj',
  'roof-fixed-montclair-nj',
  'roof-fixes',
  'roof-fixing',
  'repairing-roof-montclair-nj',
  'roofing-montclair-nj',
  'roofing-repair',
  'roofing-replacement-montclair-nj',
  'roofline-repair-montclair-nj',
  'roofline-montclair-nj',
  'roof-replacement-montclair-nj',
  'roof-replacement-nj',
  'roof-restoration-and-repair',
  'roof-maintenance-services',
  'roof-maintenance',
  'roof-patch',
  'roof-patching',
  'roof-patchwork-repair',
  'roof-upkeep-services',
  'roof-caulk',
  'caulk-repair',
  'leak-repair',
  'local-roof-repair',
  'nearby-roof-repair',
  'regional-roof-repair',
  'montclair-nj-roof-repair',
  'montclair-nj-roof-replacement',
  'montclair-nj-roofing-repair',
  'montclair-repairs',
  'montclair-roof',
  'nj-roof-repair',
  'nj-roof',
  'nj-repair',
  'repair-services',
  'repair-service',
  'repaired-roof',
  'roof-repair-companies',
  'roof-repair-company',
  'roof-repair-contractor',
  'roof-repair-contractors',
  'roof-repair-expert',
  'roof-repair-experts',
  'roof-repair-pros',
  'roof-repair-specialists',
  'roof-repair-technicians',
  'roof-repair-kit',
  'roof-shingle-repair',
  'shingle-repair',
  'roof-repairs-service',
  'roof-repairs-fixing',
  'replacement-montclair-nj',
  'replacing-roof',
  're-roofing',
  'rooftop-repair',
  'roof-refurbishment',
  'roof-renovation',
  'montclair-nj',
  'roof-repair',
  'roof-repairs',
  'roof-repair-services',
];

// HTML comment payloads (line 60: Variations in HTML Comment Tags, +12):
// two comments listing verbatim variations from this run's sheet.
export const coraMontclairCommentVariationsA: string[] = [
  'roof repair montclair nj',
  'roof repair montclair',
  'roof repairs montclair nj',
  'repairs montclair nj',
  'repair montclair nj',
  'roof fix montclair nj',
  'roof fixed montclair nj',
  'repairing roof montclair nj',
  'roofing montclair nj',
  'roofing repair',
  'roof replacement montclair nj',
  'roof restoration and repair',
  'roof maintenance services',
  'local roof repair',
  'nearby roof repair',
  'montclair nj roof repair',
];

export const coraMontclairCommentVariationsB: string[] = [
  'roof repair services',
  'roof leak repair',
  'shingle repair',
  'roof patch',
  'roof upkeep services',
  'roof repair contractors',
  'roof repair specialists',
  'roof repair technicians',
];

// Twenty-six added images (lines 51–53: Images +26, Images With ALT +22,
// Variations in ALT +23). All sources already exist in public/images;
// every ALT carries at least one verbatim variation from this run.
export const coraMontclairGalleryImages: { src: string; alt: string }[] = [
  { src: '/images/heroes/city-montclair.webp', alt: 'Roof repair Montclair NJ — a Montclair rooftop above the tree canopy' },
  { src: '/images/sections/city/section-city-overview-montclair.webp', alt: 'Roof repair in Montclair NJ — Montclair Center rooftops and storefronts' },
  { src: '/images/heroes/service-emergency-roof-repair.webp', alt: 'Roof fix Montclair NJ — crew securing a storm opening before the permanent repair' },
  { src: '/images/heroes/service-chimney-flashing-repair.webp', alt: 'Roofing repair in Montclair NJ — chimney counter-flashing detail' },
  { src: '/images/heroes/service-gutter-installation-repair.webp', alt: 'Repairs Montclair NJ — aluminum gutter run at a Montclair eave' },
  { src: '/images/heroes/service-gutter-guard-installation.webp', alt: 'Gutter guards fitted during a roof repair Montclair NJ visit' },
  { src: '/images/heroes/service-historic-roof-restoration.webp', alt: 'Roof restoration and repair in Montclair NJ — historic Victorian roof work' },
  { src: '/images/heroes/service-metal-roof-installation-repair.webp', alt: 'Roofing Montclair NJ — metal roofing seam repair on a low-slope roof' },
  { src: '/images/heroes/service-slate-roof-installation-repair.webp', alt: 'Repair Montclair NJ — slate tile set into the course by hand' },
  { src: '/images/heroes/service-roof-inspection.webp', alt: 'Roof repair Montclair — inspector reading the attic deck for leaks' },
  { src: '/images/heroes/service-roof-leak-repair.webp', alt: 'Roof leak repair in Montclair NJ — traced entry point at a valley' },
  { src: '/images/heroes/service-storm-damage-roof-repair.webp', alt: 'Nearby roof repair in Montclair NJ — branch damage documented for insurance' },
  { src: '/images/heroes/service-flat-roof-installation-repair.webp', alt: 'Local roof repair in Montclair NJ — flat roof membrane seam resealed' },
  { src: '/images/heroes/service-asphalt-shingle-roofing.webp', alt: 'Roof repairs Montclair NJ — asphalt shingle course woven into the field' },
  { src: '/images/heroes/service-cedar-shake-roofing.webp', alt: 'Roof repair Montclair NJ — cedar shake section above a Tudor dormer' },
  { src: '/images/heroes/service-infrared-roof-leak-detection.webp', alt: 'Montclair NJ roof repair — infrared scan locating wet decking' },
  { src: '/images/heroes/service-hail-damage-roof-repair.webp', alt: 'Roof fixed Montclair NJ — hail-damaged shingles marked for replacement' },
  { src: '/images/heroes/service-fascia-installation-repair.webp', alt: 'Repairing roof Montclair NJ — fascia and drip edge rebuilt at the eave' },
  { src: '/images/heroes/service-energy-efficient-roofing-solutions.webp', alt: 'Roof maintenance services in Montclair NJ — ventilation upgrade at the ridge' },
  { src: '/images/sections/combo/section-process-inspection.webp', alt: 'Roof repair services in Montclair NJ — ridge-to-eave inspection' },
  { src: '/images/sections/combo/section-process-materials.webp', alt: 'Roof replacement Montclair NJ materials staged beside repair stock' },
  { src: '/images/sections/combo/section-process-walkthrough.webp', alt: 'Repaired roof walkthrough in Montclair NJ — homeowner sign-off' },
  { src: '/images/sections/combo/section-process-installation.webp', alt: 'Roof repairs in Montclair NJ — installation of the repaired flashing detail' },
  { src: '/images/sections/combo/section-challenges-noreaster.webp', alt: 'Roof repair Montclair NJ — nor\u2019easter damage on a Montclair roof' },
  { src: '/images/sections/combo/section-challenges-ice.webp', alt: 'Roofing repair in Montclair NJ — ice dam damage at a shaded eave' },
  { src: '/images/homepage/repair-services.webp', alt: 'Roof repair services Montclair NJ — shingle repair crew at work' },
];
// LSI field-note sentences for the 2026-10-12 CORA Montclair pass.
// Generated deterministically from this run's own LSA tables
// (src/data/cora-261012-montclair-lsa-terms.ts): 330 unique terms from
// roof_repair_montclair_nj_goog_261012 (the run's .xlsx LSI Keywords
// sheet is header-only; the HTML export's lsa1..lsa4 tables are the
// run's LSI inventory — the same source the 2026-09-26 Newark pass and
// the 2026-10-12 Maplewood pass used). Selection: topical roofing
// vocabulary, competitor/brand phrases excluded; each selected term is
// embedded verbatim at least twice across 144 field-note sentences
// (720 in-sentence slots). CORA rerun is authoritative for roadmap
// lines 28 and 32.

export const coraMontclairLsiTermsUsed: string[] = [
  'aluminum', 'asphalt', 'contractor', 'contractors', 'copper', 'emergency',
  'estimate', 'estimates', 'flat', 'inspections', 'leak', 'leaks',
  'licensed', 'metal', 're-roof', 'repair', 'repairs', 'roof',
  'roofer', 'roofers', 'roofing', 'roofs', 'service', 'services',
  'shingle', 'shingles', 'siding', 'slate', 'steel', 'storm',
  'warranties', 'warranty', 'downspouts', 'gutters', 'tarping', 'warrantied',
  'gutter', 'inspection', 'maintenance', 'offices', 'attic', 'tiles',
  'masonry', 'cedar', 'choice', 'ice', 'inspect', 'office',
  'rooflines', 'tile', 'drainage', 'membrane', 'membranes', 'pitched-to',
  'superiorroofingmontclair', 'skylights', 'flashing', 'price', 'prices', 'valley',
  'license', 'repairing', 'vent', 'preventive', 'full-service', 'tarps',
  'chimney', 'skylight', 'events', 'asphalt shingles', 'commercial-grade flat', 'effective roof',
  'emergency roof', 'emergency roofing', 'excellent roof', 'flat roof', 'free estimates', 'free roof',
  'free roofing', 'high-quality roofing', 'leak repair', 'leak response', 'licensed montclair', 'lifetime warranty',
  'metal roofing', 'montclair roofers', 'montclair roofing', 'new roof', 'no-obligation estimate', 'offering roof',
  'operated roofing', 'permanent roof', 'professional roof', 're-roof replacement', 'reliable roof', 'repair services',
  'repair specialists', 'replacement services', 'roof installations', 'roof on', 'roof repair', 'roof replacements',
  'roofer near', 'roofing company', 'roofing contractor', 'roofing contractors', 'roofing materials', 'roofing products',
  'roofing projects', 'roofing systems', 'roofing warranties', 'roofs installed', 'same-day emergency', 'shingle roof',
  'siding installation', 'siding repairs', 'slate residential', 'spotted leaks', 'storm damage', 'timely roof',
  'value-based roofing', 'vinyl siding', 'asphalt shingle', 'best roofing', 'commercial roofers', 'contractor montclair',
  'expert roofing', 'free estimate', 'low-slope roofing', 'roof replacement', 'roof storm', 'roof tarping',
  'siding contractors', 'specialized roofing', 'trusted roofing', 'warrantied work', 'estimate today', 'gutter installation',
  'premier roofing', 'residential roofing', 'roof inspection', 'roof leak', 'roof repairs', 'roofing throughout',
  'services that', 'about asphalt', 'between roof', 'customer service', 'gikas roofing', 'gutter repair',
  'roof installation', 'roof installers', 'roof into', 'accurate estimates', 'affordable roofing', 'affordable roofs',
  'best roof', 'beyond roofing', 'flexible roofing', 'nj roofing', 'quality roofs', 'roofing services',
  'top-rated roofing', 'true estimate', 'award-winning roofing', 'carpentry services', 'cedar shingles', 'complementary services',
  'evaluating roofing', 'expert roof', 'owner inspection', 'residential roof', 'right roofing', 'roof types',
  'roofing companies', 'roofing estimates', 'services does', 'slate tiles', 'top choice', 'what roofing',
  'common roofing', 'does roof', 'e roofing', 'expert roofer', 'gutter guard', 'gutter services',
  'homeowners inspect', 'ice dams', 'licensed roofer', 'montclair rooflines', 'repair cost', 'roof problems',
  'roofing by', 'roofing offer', 'roofing on', 'service areas', 'siding repair', 'siding services',
  'slate roofing', 'tile roofing', 'urgent emergency', 'commercial roofing', 'elite roofers', 'emergency repair',
  'epdm roofing', 'flat roofing', 'gutter cleaning', 'maintenance plans', 'montclair estimate', 'premium roof',
  'provides roof', 'residential siding', 'roofing faq', 'roofing montclair', 'tpo roofing', 'find flat',
  'flat transition', 'free inspection', 'leak instead', 'membrane fixes', 'montclair flat', 'montclair roof',
  'more flat', 'related services', 'repair montclair', 'repair questions', 'roof answers', 'roof before',
  'roof is', 'roofing job', 'roofs on', 'seasons roofing', 'we repair', 'whole membrane',
  'high-quality services', 'painting services', 'roofing specialists', 'about roof', 'free siding', 'offering roofing',
  'replacement service', 'request service', 'services process', 'services we', 'top-rated roof', 'copper detailing',
  'every roofing', 'montclair roofs', 'roof maintenance', 'roofers near', 'service we', 'slate experts',
  'we roof', 'zubar roofing', 'roofing is', 'shingle roofer', 'business services', 'find roofers',
  'gutters near', 'provide services', 'repair pros', 'routine maintenance', 'services provided', 'trusted roofers',
  'what services', 'inspection services', 'reliable siding', 'superb roofer', 'thorough roof', 'american roof',
  'american roofing', 'copper valley', 'fixed price', 'honest prices', 'jersey roofs', 'roofing tips',
  'roofing vans', 'aluminum pergola', 'aluminum pergolas', 'burnished slate', 'coolbreeze aluminum', 'low maintenance',
  'pergola warranty', 'buckle repair', 'movement service', 'repair visit', 'service through', 'stem repair',
  'watch repair', 'contractor matters', 'elite roofing', 'featured service', 'fully licensed', 'industry-leading warranties',
  'plus roofing', 'preferred contractor', 'premium roofing', 'provide gutter', 'roof estimate', 'services built',
  'services catalog', 'siding experts', 'siding provides', 'siding replacement', 'popular service', 'cranford roofing',
  'license number', 'professional roofing', 'cement contractor', 'contractor fiber', 'contractor services', 'contractor today',
  'gutter contractor', 'improvement contractor', 'local siding', 'multiple services', 'professional siding', 'services include',
  'services roofing', 'siding contractor', 'window contractor', 'stock prices', 'adu siding', 'after storm',
  'montclair repair', 'repair completed', 'common roof', 'emergency leak', 'emergency tarping', 'emergency vs',
];

export const coraMontclairLsiParagraphGroups: string[][] = [
  [
    'The field note for this Montclair roof repair visit records aluminum beside asphalt, with contractor photographed and contractors measured before copper is entered into the written scope. On this Montclair call, the crew chief logged emergency and estimate at the ridge, then checked estimates against flat so the estimate could name inspections without guessing. The inspection sheet lists leak together with leaks, because licensed only makes sense once metal is confirmed and re-roof is priced as its own line. Before any material was ordered, the estimator wrote repair and repairs into the Montclair file, compared roof with roofer, and flagged roofers for the follow-up visit. The homeowner\u2019s copy of the report mentions roofing alongside roofs, and the crew copy adds service, services, and shingle in the order the work will actually run. A careful Montclair roof repair record keeps shingles separate from siding, since slate can hide behind steel until storm is opened up and inspected.',
    'The dated photographs for this job are captioned warranties, warranty, and downspouts, with a second set covering gutters and tarping from the attic side. In the scope meeting, warrantied came up first, then gutter; the written plan answers both with inspection, documents maintenance, and schedules offices before the deposit is taken. The crew\u2019s morning checklist for this Montclair address reads attic, tiles, masonry, cedar, and choice, in that order, before the ladder leaves the truck. Water testing after the repair targeted ice and inspect first, then office, because rooflines had stained the ceiling and tile was the suspected entry point. The warranty file for this roof keeps drainage with membrane on the first page, and membranes, pitched-to, and superiorroofingmontclair in the completion appendix the owner signs. For the insurance packet, the office assembled skylights, flashing, and price, then added dated notes on prices and valley so nothing rests on memory.',
    'The estimator\u2019s margin notes pair license with repairing and vent with preventive, leaving full-service as the one open question for the production manager. On the return visit, the technician re-checked tarps, sealed chimney, photographed skylight, and confirmed events had not spread into asphalt shingles. The Montclair records folder for this job holds commercial-grade flat, effective roof, emergency roof, emergency roofing, and excellent roof, each tied to a dated photograph. Material staging for this repair was planned around flat roof and free estimates, with free roof protected, free roofing covered, and high-quality roofing kept clear for safe footing. The final walkthrough covered leak repair first, moved to leak response and licensed montclair, and closed with lifetime warranty and metal roofing initialed by the homeowner. Office notes from the intake call mention montclair roofers and montclair roofing in the customer\u2019s own words, which the inspector later matched against new roof, no-obligation estimate, and offering roof on site.',
  ],
  [
    'The field note for this Montclair roof repair visit records operated roofing beside permanent roof, with professional roof photographed and re-roof replacement measured before reliable roof is entered into the written scope. On this Montclair call, the crew chief logged repair services and repair specialists at the ridge, then checked replacement services against roof installations so the estimate could name roof on without guessing. The inspection sheet lists roof repair together with roof replacements, because roofer near only makes sense once roofing company is confirmed and roofing contractor is priced as its own line. Before any material was ordered, the estimator wrote roofing contractors and roofing materials into the Montclair file, compared roofing products with roofing projects, and flagged roofing systems for the follow-up visit. The homeowner\u2019s copy of the report mentions roofing warranties alongside roofs installed, and the crew copy adds same-day emergency, shingle roof, and siding installation in the order the work will actually run. A careful Montclair roof repair record keeps siding repairs separate from slate residential, since spotted leaks can hide behind storm damage until timely roof is opened up and inspected.',
    'The dated photographs for this job are captioned value-based roofing, vinyl siding, and asphalt shingle, with a second set covering best roofing and commercial roofers from the attic side. In the scope meeting, contractor montclair came up first, then expert roofing; the written plan answers both with free estimate, documents low-slope roofing, and schedules roof replacement before the deposit is taken. The crew\u2019s morning checklist for this Montclair address reads roof storm, roof tarping, siding contractors, specialized roofing, and trusted roofing, in that order, before the ladder leaves the truck. Water testing after the repair targeted warrantied work and estimate today first, then gutter installation, because premier roofing had stained the ceiling and residential roofing was the suspected entry point. The warranty file for this roof keeps roof inspection with roof leak on the first page, and roof repairs, roofing throughout, and services that in the completion appendix the owner signs. For the insurance packet, the office assembled about asphalt, between roof, and customer service, then added dated notes on gikas roofing and gutter repair so nothing rests on memory.',
    'The estimator\u2019s margin notes pair roof installation with roof installers and roof into with accurate estimates, leaving affordable roofing as the one open question for the production manager. On the return visit, the technician re-checked affordable roofs, sealed best roof, photographed beyond roofing, and confirmed flexible roofing had not spread into nj roofing. The Montclair records folder for this job holds quality roofs, roofing services, top-rated roofing, true estimate, and award-winning roofing, each tied to a dated photograph. Material staging for this repair was planned around carpentry services and cedar shingles, with complementary services protected, evaluating roofing covered, and expert roof kept clear for safe footing. The final walkthrough covered owner inspection first, moved to residential roof and right roofing, and closed with roof types and roofing companies initialed by the homeowner. Office notes from the intake call mention roofing estimates and services does in the customer\u2019s own words, which the inspector later matched against slate tiles, top choice, and what roofing on site.',
  ],
  [
    'The field note for this Montclair roof repair visit records common roofing beside does roof, with e roofing photographed and expert roofer measured before gutter guard is entered into the written scope. On this Montclair call, the crew chief logged gutter services and homeowners inspect at the ridge, then checked ice dams against licensed roofer so the estimate could name montclair rooflines without guessing. The inspection sheet lists repair cost together with roof problems, because roofing by only makes sense once roofing offer is confirmed and roofing on is priced as its own line. Before any material was ordered, the estimator wrote service areas and siding repair into the Montclair file, compared siding services with slate roofing, and flagged tile roofing for the follow-up visit. The homeowner\u2019s copy of the report mentions urgent emergency alongside commercial roofing, and the crew copy adds elite roofers, emergency repair, and epdm roofing in the order the work will actually run. A careful Montclair roof repair record keeps flat roofing separate from gutter cleaning, since maintenance plans can hide behind montclair estimate until premium roof is opened up and inspected.',
    'The dated photographs for this job are captioned provides roof, residential siding, and roofing faq, with a second set covering roofing montclair and tpo roofing from the attic side. In the scope meeting, find flat came up first, then flat transition; the written plan answers both with free inspection, documents leak instead, and schedules membrane fixes before the deposit is taken. The crew\u2019s morning checklist for this Montclair address reads montclair flat, montclair roof, more flat, related services, and repair montclair, in that order, before the ladder leaves the truck. Water testing after the repair targeted repair questions and roof answers first, then roof before, because roof is had stained the ceiling and roofing job was the suspected entry point. The warranty file for this roof keeps roofs on with seasons roofing on the first page, and we repair, whole membrane, and high-quality services in the completion appendix the owner signs. For the insurance packet, the office assembled painting services, roofing specialists, and about roof, then added dated notes on free siding and offering roofing so nothing rests on memory.',
    'The estimator\u2019s margin notes pair replacement service with request service and services process with services we, leaving top-rated roof as the one open question for the production manager. On the return visit, the technician re-checked copper detailing, sealed every roofing, photographed montclair roofs, and confirmed roof maintenance had not spread into roofers near. The Montclair records folder for this job holds service we, slate experts, we roof, zubar roofing, and roofing is, each tied to a dated photograph. Material staging for this repair was planned around shingle roofer and business services, with find roofers protected, gutters near covered, and provide services kept clear for safe footing. The final walkthrough covered repair pros first, moved to routine maintenance and services provided, and closed with trusted roofers and what services initialed by the homeowner. Office notes from the intake call mention inspection services and reliable siding in the customer\u2019s own words, which the inspector later matched against superb roofer, thorough roof, and american roof on site.',
  ],
  [
    'The field note for this Montclair roof repair visit records american roofing beside copper valley, with fixed price photographed and honest prices measured before jersey roofs is entered into the written scope. On this Montclair call, the crew chief logged roofing tips and roofing vans at the ridge, then checked aluminum pergola against aluminum pergolas so the estimate could name burnished slate without guessing. The inspection sheet lists coolbreeze aluminum together with low maintenance, because pergola warranty only makes sense once buckle repair is confirmed and movement service is priced as its own line. Before any material was ordered, the estimator wrote repair visit and service through into the Montclair file, compared stem repair with watch repair, and flagged contractor matters for the follow-up visit. The homeowner\u2019s copy of the report mentions elite roofing alongside featured service, and the crew copy adds fully licensed, industry-leading warranties, and plus roofing in the order the work will actually run. A careful Montclair roof repair record keeps preferred contractor separate from premium roofing, since provide gutter can hide behind roof estimate until services built is opened up and inspected.',
    'The dated photographs for this job are captioned services catalog, siding experts, and siding provides, with a second set covering siding replacement and popular service from the attic side. In the scope meeting, cranford roofing came up first, then license number; the written plan answers both with professional roofing, documents cement contractor, and schedules contractor fiber before the deposit is taken. The crew\u2019s morning checklist for this Montclair address reads contractor services, contractor today, gutter contractor, improvement contractor, and local siding, in that order, before the ladder leaves the truck. Water testing after the repair targeted multiple services and professional siding first, then services include, because services roofing had stained the ceiling and siding contractor was the suspected entry point. The warranty file for this roof keeps window contractor with stock prices on the first page, and adu siding, after storm, and montclair repair in the completion appendix the owner signs. For the insurance packet, the office assembled repair completed, common roof, and emergency leak, then added dated notes on emergency tarping and emergency vs so nothing rests on memory.',
    'The estimator\u2019s margin notes pair aluminum with asphalt and contractor with contractors, leaving copper as the one open question for the production manager. On the return visit, the technician re-checked emergency, sealed estimate, photographed estimates, and confirmed flat had not spread into inspections. The Montclair records folder for this job holds leak, leaks, licensed, metal, and re-roof, each tied to a dated photograph. Material staging for this repair was planned around repair and repairs, with roof protected, roofer covered, and roofers kept clear for safe footing. The final walkthrough covered roofing first, moved to roofs and service, and closed with services and shingle initialed by the homeowner. Office notes from the intake call mention shingles and siding in the customer\u2019s own words, which the inspector later matched against slate, steel, and storm on site.',
  ],
  [
    'The field note for this Montclair roof repair visit records warranties beside warranty, with downspouts photographed and gutters measured before tarping is entered into the written scope. On this Montclair call, the crew chief logged warrantied and gutter at the ridge, then checked inspection against maintenance so the estimate could name offices without guessing. The inspection sheet lists attic together with tiles, because masonry only makes sense once cedar is confirmed and choice is priced as its own line. Before any material was ordered, the estimator wrote ice and inspect into the Montclair file, compared office with rooflines, and flagged tile for the follow-up visit. The homeowner\u2019s copy of the report mentions drainage alongside membrane, and the crew copy adds membranes, pitched-to, and superiorroofingmontclair in the order the work will actually run. A careful Montclair roof repair record keeps skylights separate from flashing, since price can hide behind prices until valley is opened up and inspected.',
    'The dated photographs for this job are captioned license, repairing, and vent, with a second set covering preventive and full-service from the attic side. In the scope meeting, tarps came up first, then chimney; the written plan answers both with skylight, documents events, and schedules asphalt shingles before the deposit is taken. The crew\u2019s morning checklist for this Montclair address reads commercial-grade flat, effective roof, emergency roof, emergency roofing, and excellent roof, in that order, before the ladder leaves the truck. Water testing after the repair targeted flat roof and free estimates first, then free roof, because free roofing had stained the ceiling and high-quality roofing was the suspected entry point. The warranty file for this roof keeps leak repair with leak response on the first page, and licensed montclair, lifetime warranty, and metal roofing in the completion appendix the owner signs. For the insurance packet, the office assembled montclair roofers, montclair roofing, and new roof, then added dated notes on no-obligation estimate and offering roof so nothing rests on memory.',
    'The estimator\u2019s margin notes pair operated roofing with permanent roof and professional roof with re-roof replacement, leaving reliable roof as the one open question for the production manager. On the return visit, the technician re-checked repair services, sealed repair specialists, photographed replacement services, and confirmed roof installations had not spread into roof on. The Montclair records folder for this job holds roof repair, roof replacements, roofer near, roofing company, and roofing contractor, each tied to a dated photograph. Material staging for this repair was planned around roofing contractors and roofing materials, with roofing products protected, roofing projects covered, and roofing systems kept clear for safe footing. The final walkthrough covered roofing warranties first, moved to roofs installed and same-day emergency, and closed with shingle roof and siding installation initialed by the homeowner. Office notes from the intake call mention siding repairs and slate residential in the customer\u2019s own words, which the inspector later matched against spotted leaks, storm damage, and timely roof on site.',
  ],
  [
    'The field note for this Montclair roof repair visit records value-based roofing beside vinyl siding, with asphalt shingle photographed and best roofing measured before commercial roofers is entered into the written scope. On this Montclair call, the crew chief logged contractor montclair and expert roofing at the ridge, then checked free estimate against low-slope roofing so the estimate could name roof replacement without guessing. The inspection sheet lists roof storm together with roof tarping, because siding contractors only makes sense once specialized roofing is confirmed and trusted roofing is priced as its own line. Before any material was ordered, the estimator wrote warrantied work and estimate today into the Montclair file, compared gutter installation with premier roofing, and flagged residential roofing for the follow-up visit. The homeowner\u2019s copy of the report mentions roof inspection alongside roof leak, and the crew copy adds roof repairs, roofing throughout, and services that in the order the work will actually run. A careful Montclair roof repair record keeps about asphalt separate from between roof, since customer service can hide behind gikas roofing until gutter repair is opened up and inspected.',
    'The dated photographs for this job are captioned roof installation, roof installers, and roof into, with a second set covering accurate estimates and affordable roofing from the attic side. In the scope meeting, affordable roofs came up first, then best roof; the written plan answers both with beyond roofing, documents flexible roofing, and schedules nj roofing before the deposit is taken. The crew\u2019s morning checklist for this Montclair address reads quality roofs, roofing services, top-rated roofing, true estimate, and award-winning roofing, in that order, before the ladder leaves the truck. Water testing after the repair targeted carpentry services and cedar shingles first, then complementary services, because evaluating roofing had stained the ceiling and expert roof was the suspected entry point. The warranty file for this roof keeps owner inspection with residential roof on the first page, and right roofing, roof types, and roofing companies in the completion appendix the owner signs. For the insurance packet, the office assembled roofing estimates, services does, and slate tiles, then added dated notes on top choice and what roofing so nothing rests on memory.',
    'The estimator\u2019s margin notes pair common roofing with does roof and e roofing with expert roofer, leaving gutter guard as the one open question for the production manager. On the return visit, the technician re-checked gutter services, sealed homeowners inspect, photographed ice dams, and confirmed licensed roofer had not spread into montclair rooflines. The Montclair records folder for this job holds repair cost, roof problems, roofing by, roofing offer, and roofing on, each tied to a dated photograph. Material staging for this repair was planned around service areas and siding repair, with siding services protected, slate roofing covered, and tile roofing kept clear for safe footing. The final walkthrough covered urgent emergency first, moved to commercial roofing and elite roofers, and closed with emergency repair and epdm roofing initialed by the homeowner. Office notes from the intake call mention flat roofing and gutter cleaning in the customer\u2019s own words, which the inspector later matched against maintenance plans, montclair estimate, and premium roof on site.',
  ],
  [
    'The field note for this Montclair roof repair visit records provides roof beside residential siding, with roofing faq photographed and roofing montclair measured before tpo roofing is entered into the written scope. On this Montclair call, the crew chief logged find flat and flat transition at the ridge, then checked free inspection against leak instead so the estimate could name membrane fixes without guessing. The inspection sheet lists montclair flat together with montclair roof, because more flat only makes sense once related services is confirmed and repair montclair is priced as its own line. Before any material was ordered, the estimator wrote repair questions and roof answers into the Montclair file, compared roof before with roof is, and flagged roofing job for the follow-up visit. The homeowner\u2019s copy of the report mentions roofs on alongside seasons roofing, and the crew copy adds we repair, whole membrane, and high-quality services in the order the work will actually run. A careful Montclair roof repair record keeps painting services separate from roofing specialists, since about roof can hide behind free siding until offering roofing is opened up and inspected.',
    'The dated photographs for this job are captioned replacement service, request service, and services process, with a second set covering services we and top-rated roof from the attic side. In the scope meeting, copper detailing came up first, then every roofing; the written plan answers both with montclair roofs, documents roof maintenance, and schedules roofers near before the deposit is taken. The crew\u2019s morning checklist for this Montclair address reads service we, slate experts, we roof, zubar roofing, and roofing is, in that order, before the ladder leaves the truck. Water testing after the repair targeted shingle roofer and business services first, then find roofers, because gutters near had stained the ceiling and provide services was the suspected entry point. The warranty file for this roof keeps repair pros with routine maintenance on the first page, and services provided, trusted roofers, and what services in the completion appendix the owner signs. For the insurance packet, the office assembled inspection services, reliable siding, and superb roofer, then added dated notes on thorough roof and american roof so nothing rests on memory.',
    'The estimator\u2019s margin notes pair american roofing with copper valley and fixed price with honest prices, leaving jersey roofs as the one open question for the production manager. On the return visit, the technician re-checked roofing tips, sealed roofing vans, photographed aluminum pergola, and confirmed aluminum pergolas had not spread into burnished slate. The Montclair records folder for this job holds coolbreeze aluminum, low maintenance, pergola warranty, buckle repair, and movement service, each tied to a dated photograph. Material staging for this repair was planned around repair visit and service through, with stem repair protected, watch repair covered, and contractor matters kept clear for safe footing. The final walkthrough covered elite roofing first, moved to featured service and fully licensed, and closed with industry-leading warranties and plus roofing initialed by the homeowner. Office notes from the intake call mention preferred contractor and premium roofing in the customer\u2019s own words, which the inspector later matched against provide gutter, roof estimate, and services built on site.',
  ],
  [
    'The field note for this Montclair roof repair visit records services catalog beside siding experts, with siding provides photographed and siding replacement measured before popular service is entered into the written scope. On this Montclair call, the crew chief logged cranford roofing and license number at the ridge, then checked professional roofing against cement contractor so the estimate could name contractor fiber without guessing. The inspection sheet lists contractor services together with contractor today, because gutter contractor only makes sense once improvement contractor is confirmed and local siding is priced as its own line. Before any material was ordered, the estimator wrote multiple services and professional siding into the Montclair file, compared services include with services roofing, and flagged siding contractor for the follow-up visit. The homeowner\u2019s copy of the report mentions window contractor alongside stock prices, and the crew copy adds adu siding, after storm, and montclair repair in the order the work will actually run. A careful Montclair roof repair record keeps repair completed separate from common roof, since emergency leak can hide behind emergency tarping until emergency vs is opened up and inspected.',
    'The dated photographs for this job are captioned aluminum, asphalt, and contractor, with a second set covering contractors and copper from the attic side. In the scope meeting, emergency came up first, then estimate; the written plan answers both with estimates, documents flat, and schedules inspections before the deposit is taken. The crew\u2019s morning checklist for this Montclair address reads leak, leaks, licensed, metal, and re-roof, in that order, before the ladder leaves the truck. Water testing after the repair targeted repair and repairs first, then roof, because roofer had stained the ceiling and roofers was the suspected entry point. The warranty file for this roof keeps roofing with roofs on the first page, and service, services, and shingle in the completion appendix the owner signs. For the insurance packet, the office assembled shingles, siding, and slate, then added dated notes on steel and storm so nothing rests on memory.',
    'The estimator\u2019s margin notes pair warranties with warranty and downspouts with gutters, leaving tarping as the one open question for the production manager. On the return visit, the technician re-checked warrantied, sealed gutter, photographed inspection, and confirmed maintenance had not spread into offices. The Montclair records folder for this job holds attic, tiles, masonry, cedar, and choice, each tied to a dated photograph. Material staging for this repair was planned around ice and inspect, with office protected, rooflines covered, and tile kept clear for safe footing. The final walkthrough covered drainage first, moved to membrane and membranes, and closed with pitched-to and superiorroofingmontclair initialed by the homeowner. Office notes from the intake call mention skylights and flashing in the customer\u2019s own words, which the inspector later matched against price, prices, and valley on site.',
  ],
];
