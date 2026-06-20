export const meta = {
  name: 'combo-batch9-briefs',
  description: 'Generate the 5 west-essex combo author briefs (west-orange, montclair, glen-ridge, verona, cedar-grove) by re-slicing the batch-8 Maplewood brief with verified per-city facts',
  phases: [
    { title: 'Briefs', detail: 'one agent per city writes _<CITY>-BRIEF.md from the template + supplied verified facts' },
  ],
}

phase('Briefs')

// Verified facts per city (transcribed from the committed west-essex.ts city page + the
// cities-batchC cribs + the COA/reservation research). Agents TRANSCRIBE these into the proven
// brief structure — they do NOT re-research. The reservation guardrail matrix is the key
// cross-contamination guard and goes verbatim into every brief's geography section.
const RES_MATRIX = `RESERVATION GUARDRAIL MATRIX (the cross-city contamination guard — put this in the geography section of EVERY brief and never violate it):
- South Mountain Reservation = WEST ORANGE only (in this batch). Montclair, Glen Ridge, Verona, Cedar Grove do NOT touch it.
- Eagle Rock Reservation = West Orange, Montclair, Verona.
- Mills Reservation = Montclair, Cedar Grove.
- Hilltop Reservation = Verona, Cedar Grove.
- Glen Ridge borders NO large county reservation (inner lowland borough; canopy is the stressor).`

const COA_SPECTRUM = `WEST-ESSEX COA SPECTRUM (5 distinct points — keep each city's gate DISTINCT, never import a neighbor's):
- Glen Ridge = BINDING, BROADEST (Chapter 15.32, district covers >90% of the borough).
- Montclair = CONDITIONAL local (Article XXIII of Chapter 347 §347-136; only inside 4 districts or a local landmark; in-kind exempt).
- West Orange = NARROW landmark-only (Section 25-30; ~10 designated landmarks; Llewellyn Park = private deed-of-trust, NOT a township COA).
- Verona = NARROW "HPC review" (Chapter 150 Article XXII; only 2 designated landmarks; in-kind exempt; NOT a literal "Certificate of Appropriateness").
- Cedar Grove = NONE (no HPC, no COA; advisory Heritage Advisory Committee only).`

const CITIES = [
  {
    slug: 'west-orange', name: 'West Orange', cityId: 'west-orange', brief: '_WEST-ORANGE-BRIEF.md',
    crib: '.planning/content-system/cities-batchC/west-orange.md',
    macro: 'Township of West Orange, Essex County — a hillside Watchung-ridge township with wide housing stock (capes/ranches/Colonials in Pleasantdale/Gregory up to hillside Tudors and Llewellyn Park estate homes), set where the South Mountain and Eagle Rock Reservations press canopy against ridge-side roofs.',
    coaPos: 'NARROW LANDMARK-ONLY COA',
    coa: 'The West Orange Historic Preservation Commission issues a Certificate of Appropriateness for the township\'s roughly ten LOCALLY DESIGNATED landmarks under Section 25-30 of the municipal code (e.g. Holy Trinity Episcopal Church, the State Diner, the Hedges Block). A typical detached 1-2-family reroof needs NO COA. Llewellyn Park is a PRIVATE 1857 deed-of-trust community governed by its own Committee of Managers — that is NOT a township COA (except an individually designated structure such as the Gate House). Per the National Park Service, National Register listing alone places no restriction on a private owner. Assert the COA only for the designated landmarks; NEVER assert a township COA over Llewellyn Park generally.',
    office: 'the Township of West Orange Building & Construction Code Enforcement (the State UCC enforcing agency); do NOT name a Construction Official',
    geo: 'West Orange sits on the First Watchung ridge and CONTAINS PART of the South Mountain Reservation AND part of the Eagle Rock Reservation (per Essex County Parks) — both press mature canopy against ridge-side roofs (leaf/branch debris in valleys & gutters, branch impact in storms, shade-driven moss/algae). Main Street / Valley Road / Pleasant Valley Way + the Route 280 corridor carry the low-slope commercial storefronts. Keep all geography QUALITATIVE (no elevation/gust/canopy-% number; the crib bans 500 ft / 618 ft / 70 mph / 15-20% / 2-4 in).',
    demo: 'Wide housing stock; frame the audience as owner-occupants of a mature ridge-side suburb with a Main Street/Valley Road commercial-storefront angle. Do NOT publish a population integer or a Census %; the West Orange city page used NJ Real Estate Network home values only as RAW neighborhood color.',
    verified: 'St. Cloud, Gregory, Pleasantdale, Llewellyn Park, Tory Corner, Crestmont and Crystal Lake (+ the Main Street / Valley Road commercial spine). DROP any street/section not on this list.',
    purged: 'fabricated "numerous projects in Llewellyn Park," "we coordinate with the community association," named-address completed jobs, "reduce attic temperatures by up to 30 degrees," "reduce heating and cooling costs by 15 to 25 percent," "premium discounts of 10 to 28 percent," the "$35,000-$75,000"/"$40,000-$80,000" pricing tiers, and every fabricated NQR warranty term',
  },
  {
    slug: 'montclair', name: 'Montclair', cityId: 'montclair', brief: '_MONTCLAIR-BRIEF.md',
    crib: '.planning/content-system/cities-batchC/montclair.md',
    macro: 'Township of Montclair, Essex County — a First-Watchung-ridge township with a large pre-WWII housing majority and roughly 54% of units in multi-unit structures, adjoining the Eagle Rock and Mills Reservations.',
    coaPos: 'CONDITIONAL LOCAL COA (4 districts + local landmarks)',
    coa: 'A Certificate of Appropriateness from the Montclair Historic Preservation Commission is required ONLY for appearance-changing exterior roofing on a property inside one of the FOUR locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) or on a designated local landmark, under Article XXIII of Chapter 347 (§347-136). In-kind maintenance/repair with no change in design, scale, or appearance is EXEMPT. The Estate Section is NOMINATED only, NOT locally designated (standard N.J.A.C. 5:23-2.7 path). Per the National Park Service, National Register listing alone places no restriction. NEVER assert a Village-wide or township-wide COA.',
    office: 'the Township of Montclair Building Office (the local UCC enforcing agency / permit office); do NOT name a Construction Official',
    geo: 'Montclair lies along the First Watchung ridge and adjoins the Eagle Rock Reservation and the Mills Reservation (per Essex County Parks) — NOT the South Mountain Reservation. The west side stands more exposed to gusts than valley lots (QUALITATIVE only — no elevation/gust number). Keep all geography QUALITATIVE.',
    demo: 'A large majority of the housing predates WWII (qualitative, per the Township Housing Element), and roughly 54% of units sit in multi-unit structures (per the U.S. Census Bureau ACS) — frame the multi-unit angle for commercial/low-slope services. Do NOT publish a population integer or a pre-1940 %.',
    verified: 'Upper Montclair, Watchung Plaza, Montclair Center / Town Center, Estate Section, Pine Street, South End, Erwin Park. DROP any street/section not on this list.',
    purged: 'any price-in-lead, the "GAF Certified / 15+ years / same-day / 24/7" whyChooseUs, "Premium materials from GAF/CertainTeed/Owens Corning," any fabricated street, any fabricated savings/storm-spike/response-time claim, any Village-wide COA claim, and every fabricated NQR warranty term',
  },
  {
    slug: 'glen-ridge', name: 'Glen Ridge', cityId: 'glen-ridge', brief: '_GLEN-RIDGE-BRIEF.md',
    crib: '.planning/content-system/cities-batchC/glen-ridge.md',
    macro: 'Borough of Glen Ridge, Essex County — a small (~1.3 sq mi), fully built-out inner LOWLAND borough of predominantly pre-WWII Victorian/Edwardian/Colonial-Revival/Tudor/Dutch-Colonial single-family homes (~1890s-1930s), ~93% owner-occupied, on tree-lined streets; borders NO reservation.',
    coaPos: 'BINDING LOCAL COA, BROADEST IN THE BATCH (>90% of the borough)',
    coa: 'The Glen Ridge Historic Preservation Commission issues a Certificate of Appropriateness under Borough Code Chapter 15.32, and the Glen Ridge Historic District covers OVER 90% of the borough (NOT 100%), so MOST homes fall inside the regulated district. A COA applies to exterior alterations including roof replacement, material change, dormers, and visible roof-mounted equipment on regulated/contributing properties — a SEPARATE local approval from the construction permit. Frame it as the LOCAL-ordinance Chapter 15.32 matter, NOT the 1982 National Register listing (per NPS, listing alone places no restriction). A detached 1-2-family reroof is still no-permit ordinary maintenance (N.J.A.C. 5:23-2.7); advise confirming a specific parcel with the HPC / Building Department.',
    office: 'the Borough of Glen Ridge Building Department at 825 Bloomfield Avenue; do NOT name a Construction Official',
    geo: 'Glen Ridge is a small (~1.3 sq mi), fully built-out inner Essex County LOWLAND borough that borders NO large county reservation — the defining roof stressor is the MATURE STREET-TREE CANOPY (NOT ridge elevation or reservation adjacency; NEVER assert any reservation/ridge stressor for Glen Ridge). Toney\'s Brook / The Glen is a localized drainage angle (qualitative). Keep all geography QUALITATIVE.',
    demo: 'Predominantly pre-WWII Victorian/Edwardian/Colonial-Revival/Tudor/Dutch-Colonial single-family stock (~1890s-1930s), ~93% owner-occupied (qualitative). Do NOT publish a population/units integer; frame housing-age and owner-occupancy qualitatively.',
    verified: 'Ridgewood Avenue, Forest Avenue, Baldwin Street, Linden Avenue, The Glen and Toney\'s Brook, the Bloomfield Avenue station edge. DROP any street/section not on this list.',
    purged: 'any price-in-lead, the "GAF Certified / 15+ years / same-day / 24/7" whyChooseUs, "Premium materials from GAF/CertainTeed/Owens Corning," ANY reservation or ridge-elevation claim (Glen Ridge has none), any fabricated street, any fabricated savings/storm-spike/response-time claim, and every fabricated NQR warranty term',
  },
  {
    slug: 'verona', name: 'Verona', cityId: 'verona', brief: '_VERONA-BRIEF.md',
    crib: '.planning/content-system/cities-batchC/verona.md',
    macro: 'Township of Verona, Essex County — a Watchung valley/upland township (pre-war Colonials, postwar Capes/ranches, many 1960s-70s SPLIT-LEVELS) between the Eagle Rock and Hilltop Reservations, with the Peckman River running through.',
    coaPos: 'NARROW "HPC REVIEW" (2 designated landmarks; NOT a literal "Certificate of Appropriateness")',
    coa: 'Under Zoning Ordinance Chapter 150, Article XXII, the Verona Historic Preservation Commission reviews significant exterior changes PRIOR to permit issuance on a LOCALLY DESIGNATED landmark; there are exactly TWO designated landmarks (the Erie Railroad Freight Shed at 62 Depot Street, and the Verona United Methodist Church). In-kind exterior repairs are EXEMPT, and every other home reroofs with no HPC review. The Afterglow section is PROPOSED (2017 survey), NOT designated — standard N.J.A.C. 5:23-2.7 path. Verona Park is an Olmsted Essex County park, NOT a reroof gate. Per NPS, National Register listing alone places no restriction. USE "HPC review," NOT "Certificate of Appropriateness/COA," for Verona.',
    office: 'the Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue; do NOT name a Construction Official',
    geo: 'Verona is a Watchung valley/upland township between the Eagle Rock Reservation (First Watchung) and the Hilltop Reservation (Second Watchung), per Essex County Parks — NOT the South Mountain Reservation. The Peckman River runs through Verona (a real, named NWS-gauged drainage/flood angle along Bloomfield Avenue and Lakeside Avenue near Verona Park) — keep QUALITATIVE (no FEMA zone/%/depth). SPLIT-LEVEL transition flashing is the distinctive Verona roof detail. Keep all geography QUALITATIVE.',
    demo: 'Pre-war Colonials, postwar Capes/ranches, and many 1960s-70s split-levels; about four-fifths owner-occupied across ~6,000 housing units (per the U.S. Census Bureau ACS). Do NOT publish a population integer.',
    verified: 'the Afterglow section, Personette Avenue, Claremont Avenue, Verona Park and Lakeside Avenue, the Bloomfield Avenue and Pompton Avenue corridors. DROP any street/section not on this list.',
    purged: 'any price-in-lead, the "GAF Certified / 15+ years / same-day / 24/7" whyChooseUs, "Premium materials from GAF/CertainTeed/Owens Corning," any literal "Certificate of Appropriateness" for Verona (use "HPC review"), any claim that Afterglow is a designated district, any fabricated street, any fabricated savings/storm-spike/response-time claim, and every fabricated NQR warranty term',
  },
  {
    slug: 'cedar-grove', name: 'Cedar Grove', cityId: 'cedar-grove', brief: '_CEDAR-GROVE-BRIEF.md',
    crib: '.planning/content-system/cities-batchC/cedar-grove.md',
    macro: 'Township of Cedar Grove, northern Essex County — a between-the-Watchungs township of predominantly postwar ranch and split-level homes (76.3% owner-occupied), adjoining the Mills and Hilltop Reservations; the ONLY no-COA city in the batch (closest analog: Belleville / East Orange / Irvington).',
    coaPos: 'NONE (advisory Heritage Advisory Committee only)',
    coa: 'Cedar Grove has NO local Historic Preservation Commission, NO Certificate of Appropriateness, and NO locally designated historic district or landmark; only an ADVISORY Heritage Advisory Committee (educational/cultural, with no designation, COA, or regulatory authority). A private reroof needs no COA (the closest analog is Belleville / East Orange / Irvington). Per the National Park Service, National Register listing alone places no restriction on a private owner. State plainly in the historic FAQ that no COA applies in Cedar Grove.',
    office: 'the Township of Cedar Grove Building Department at 525 Pompton Avenue; do NOT name a Construction Official',
    geo: 'Cedar Grove is a northern Essex County township between the First and Second Watchung Mountains (qualitative "higher ground" — no city-specific elevation/snow/wind number). It adjoins the Mills Reservation (157.15 acres, shared with Montclair) and the Hilltop Reservation (284.16 acres, shared with North Caldwell and Verona), per Essex County Parks — NOT the South Mountain Reservation and NOT the Eagle Rock Reservation. The Pompton Avenue / Route 23 corridor carries the low-slope commercial storefronts. Keep all geography QUALITATIVE.',
    demo: 'Predominantly postwar ranch and split-level homes, 76.3% owner-occupied across 5,008 housing units (per the U.S. Census Bureau ACS) — these IS the published figure on the city page; keep it named-sourced. Do NOT publish a population integer or a decade-built %.',
    verified: 'North End, Park Ridge Estates, Central Cedar Grove, South End, the Pompton Avenue / Route 23 corridor, the Mills Reservation edge. DROP any street/section not on this list.',
    purged: 'fabricated "on the western slope of the Second Watchung Mountain," "winter snowfall 2 to 4 inches greater per storm," "extend shingle life by 5 to 8 years," "reduce energy costs by 15-25 percent," "ranch-style homes built between 1950 and 1975 constitute the single largest category," the Norway-spruce species claim, projectSpotlights written as completed jobs at named addresses, "many of our new Cedar Grove clients come through recommendations from neighbors," the "$11,000-$17,000"/"$16,000-$26,000" pricing tiers, and every fabricated NQR warranty term',
  },
]

function siblingAvoid(me) {
  return CITIES.filter((c) => c.slug !== me.slug)
    .map((c) => `${c.name}: ${c.coaPos}; office ${c.office.replace(/; do NOT.*/, '')}; ${c.slug === 'glen-ridge' ? 'NO reservation' : c.slug === 'west-orange' ? 'South Mountain + Eagle Rock' : c.slug === 'montclair' ? 'Eagle Rock + Mills' : c.slug === 'verona' ? 'Eagle Rock + Hilltop + Peckman River' : 'Mills + Hilltop'}`)
    .join('  |  ')
}

function prompt(c) {
  const OUT = `.planning/content-system/combo-batch9-west-essex/${c.slug}/${c.brief}`
  return `You are writing the COMBO AUTHOR BRIEF for ${c.name} (cityId '${c.cityId}'), Essex County, NJ — one of five west-essex cities in Combo Batch 9 of the Newark Quality Roofing answer-first content rewrite. This brief will be read IN FULL by 65 downstream author agents (one per service×${c.name} combo), so it must be precise, self-contained, and faithful to the supplied verified facts. This is content-engineering for a local-SEO roofing site.

STEP 1 — READ THE EXACT STRUCTURAL TEMPLATE: .planning/content-system/combo-batch8-maplewood-southorange/maplewood/_MAPLEWOOD-BRIEF.md
Mirror its structure EXACTLY: the intro blockquote, then sections "## 0. ENTITY-GROUNDING", "## A. The combo render contract", "## B. Answer-first + hard rules", "## C. ${c.name} load-bearing facts", "## D. De-fab targets present in the CURRENT combo files", "## E. Pricing + whyChooseUs + conversionHooks", "## F. Differentiation directive", "## G. Output format".
- Sections 0, A, B, E, G are CITY-AGNOSTIC: copy them VERBATIM from the Maplewood template, swapping only "Maplewood" -> "${c.name}" and the city-page reference "src/data/city-content/first-suburbs.ts" -> "src/data/city-content/west-essex.ts". KEEP every rule (entity-grounding directAnswer shape, ≤40w bold span, no-definition-field, registered-NJ-HIC-not-licensed, R2/R3/R6, de-fab list, pricing defaults $400-$1,000 repair / $10,000-$25,000 replacement, whyChooseUs/conversionHooks defaults, output format) byte-for-byte except the city-name swap.
- The Output-format §G path must point to .planning/content-system/combo-batch9-west-essex/${c.slug}/ and 'src/data/combo-content/${c.slug}/'.

STEP 2 — CROSS-CHECK FACTS: read the ${c.name} crib ${c.crib} AND the committed city page src/data/city-content/west-essex.ts (find the object with cityId: '${c.cityId}'). These are the verified authority. If anything below conflicts with the committed city page, the committed city page wins — but the facts below are already reconciled to it.

STEP 3 — WRITE SECTIONS C, D, F from these VERIFIED ${c.name} FACTS (transcribe — do NOT re-research or invent):

MACRO: ${c.macro}

COA POSITION: ${c.coaPos}
COA FRAMING (carry this exactly into §C historic + the historic FAQ guidance): ${c.coa}

PERMIT OFFICE: ${c.office}. The statewide reroof rule is identical to every city: a detached 1-2-family reroof (incl. full tear-off/re-cover) is "ordinary maintenance" under N.J.A.C. 5:23-2.7 — NO permit; a permit IS required on commercial/multi-family/attached and the 25% rule (>25% of roof area in 12 months); recover-vs-tear-off limits follow the Rehab Subcode N.J.A.C. 5:23-6.4.

GEOGRAPHY (§C geography subsection — HARD guardrails): ${c.geo}

${RES_MATRIX}

${COA_SPECTRUM}

DEMOGRAPHICS / HOUSING (§C): ${c.demo}

VERIFIED NEIGHBORHOODS / SECTIONS (§C — the ONLY ones any combo may name): ${c.verified}

CLIMATE (§C — shared EWR baseline, HEDGED, identical to every city): ~31.5 in/yr snow; nor'easters Oct-April; ~25-30 thunderstorms/yr; ground snow load Pg ~25 psf and ~110-115 mph ASCE 7-16 design wind kept HEDGED (not Essex-confirmed). BAN every city-specific degree/gust/elevation number.

DE-FAB TARGETS (§D — present in the CURRENT ${c.name} combo files; instruct authors to DELETE/CORRECT all): the shared scaffold fabs (price-in-lead "with prices starting from \$X-\$Y and free estimates available today"; the "NJ licensed, GAF Certified, 15+ years / same-day / 24/7" whyChooseUs; "Premium materials from GAF, CertainTeed, and Owens Corning"; "Early action saves thousands"; inline markdown self-links) PLUS these ${c.name}-specific fabrications purged from the prior page: ${c.purged}. To catalog the ACTUAL current fabs, instruct authors that their per-combo file is at src/data/combo-content/${c.slug}/<service>.ts and they must strip every de-fab found there. (You may read 2-3 current ${c.slug} combo files to make §D concrete.)

DIFFERENTIATION (§F — pre-empt cross-city overlap; the in-archetype west-essex siblings are the primary differentiate target): FOREGROUND ${c.name}-DISTINCT anchors (its COA position, its specific reservation/canopy/flood geography, its housing stock, its verified neighborhoods, its permit office address). AVOID importing the OTHER four west-essex siblings' anchors: ${siblingAvoid(c)}. Also avoid the committed Newark/East-Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/South-Orange anchors. For the process-heavy / low-localizability services (roof-thermal-imaging-inspections, storm-damage-roof-repair, commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement, roof-overlay-installation), LEAD with the ${c.name} situation before the standardized facts. PRESERVE every cited standard/cost fact (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/InterNACHI figures) — differentiation is about which LOCAL facts lead, not changing sourced numbers.

STEP 4 — WRITE the complete brief to ${OUT}. It must be a single self-contained markdown file (~220-250 lines) mirroring the Maplewood template's depth. Use plain prose; this is a brief for authors, not code.

Return ONE line: "${c.slug}: brief written, <N> lines, COA=${c.coaPos}".`
}

const results = await parallel(CITIES.map((c) => () =>
  agent(prompt(c), { label: `brief:${c.slug}`, phase: 'Briefs' })
))
const ok = results.filter(Boolean).length
log(`Briefs phase complete: ${ok}/${CITIES.length}`)
return { written: ok, total: CITIES.length, statuses: results }
