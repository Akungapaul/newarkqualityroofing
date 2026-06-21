export const meta = {
  name: 'combo-batch11-briefs',
  description: 'Generate the 2 affluent-suburban combo author briefs (livingston, millburn) by re-slicing the proven Maplewood brief template with verified per-city facts',
  phases: [
    { title: 'Briefs', detail: 'one agent per city writes _<CITY>-BRIEF.md from the template + supplied verified facts' },
  ],
}

phase('Briefs')

// Verified facts per city (transcribed from the committed affluent-suburban.ts city page + the
// cities-batchE CITY-FACTS fact bank §0 corrections + per-city sections). Agents TRANSCRIBE these
// into the proven brief structure — they do NOT re-research. The reservation/floodplain guardrail
// matrix is the key cross-contamination guard and goes verbatim into every brief's geography section.
const RES_MATRIX = `RESERVATION / FLOODPLAIN GUARDRAIL MATRIX (the cross-city contamination guard — put this in the geography section of EVERY brief and never violate it):
- South Mountain Reservation (~2,112 ac, between the First and Second Watchung ridges) = MILLBURN only. Livingston borders NO large Essex County reservation.
- Livingston's open space = West Essex Park (~1,360 ac Passaic-River wetlands greenway on the western edge), Riker Hill Art Park (42 ac, a former Nike radar base), and Becker Park. NEVER attach West Essex Park / Riker Hill / Becker Park to Millburn.
- Passaic-River + Willow Brook floodplain = LIVINGSTON'S WESTERN/LOW-LYING EDGE only (a localized FEMA SFHA per the FEMA Flood Insurance Study + the Essex County Hazard Mitigation Plan). Millburn has NO Passaic floodplain; Millburn's only flood feature is the downtown Rahway-River village (commercial drainage only).
- Walter Kidde Dinosaur Park / Riker Hill Fossil Site = ROSELAND (a committed prior city), NEVER Livingston.
- The Rahway River downtown-village flood (Floyd 1999 / Irene 2011 / Ida 2021) = MILLBURN downtown low-slope COMMERCIAL drainage only — never a basement/interior, township-wide, or Short Hills residential claim; write "the Rahway River" (no branch).
- No city-specific elevation/snow/wind number anywhere; the Watchung-ridge "marginally cooler/snowier" (Millburn) stays QUALITATIVE on the shared EWR baseline.`

const COA_SPECTRUM = `AFFLUENT-SUBURBAN COA SPECTRUM (2 distinct points — keep each city's gate DISTINCT, never import the other's):
- Livingston = NO binding local COA (no locally designated district or landmark; the Master Plan only RECOMMENDS considering preservation; code §170-3 + the ~38 Master-Plan "historic sites" = planning IDs, not gates; the Force Homestead = township-owned Register-listed museum, not a gate).
- Millburn = BINDING but NARROW COA (the Township of Millburn Historic Preservation ordinance, Article 8, enabled by MLUL N.J.S.A. 40:55D-107) — a Certificate of Appropriateness is required before permit-triggering roof work ONLY on an individually designated landmark OR inside the locally designated Wyoming or Short Hills Park historic district, NOT township-wide; a 1–2 family reroof stays N.J.A.C. 5:23-2.7 ordinary maintenance even where a COA applies; the COA is separate from the building permit. Short Hills Village = recently-designated/pending third district ("checked against current designation status"). Paper Mill Playhouse + Cora Hartshorn Arboretum = Register/institutional, NOT homeowner gates.`

const CITIES = [
  {
    slug: 'livingston', name: 'Livingston', cityId: 'livingston', brief: '_LIVINGSTON-BRIEF.md',
    crib: '.planning/content-system/cities-batchE/livingston.md',
    macro: 'Township of Livingston, Essex County — a large (~13.8 sq mi), affluent, ~88.9%-owner-occupied residential township in western Essex County of post-war split-levels, raised ranches, and colonials under a mature street-tree canopy, PLUS one of Essex County\'s largest flat-roof commercial-and-medical markets along the Route 10 shopping corridor, the Eisenhower Parkway office/medical parks, and the Cooperman Barnabas Medical Center campus.',
    coaPos: 'NO binding local COA',
    coa: 'Livingston has designated NO local historic district or landmark requiring a Certificate of Appropriateness, so a homeowner reroof needs NO historic-board approval. The Township Master Plan Historic Preservation Plan Element only RECOMMENDS that the township consider adopting preservation provisions (an unadopted, voluntary measure); municipal code §170-3 "Historic site" and the ~38 Master-Plan-identified sites are planning identifications, NOT reroof gates. The Force Homestead (on South Livingston Avenue; township-owned, Register-listed museum, closed since 2023 for restoration) imposes no rule on a private owner. Per the NPS, National Register listing alone places no restriction on a private owner. State plainly in the historic FAQ that no COA applies to a Livingston reroof.',
    office: 'the Township of Livingston Building Department at 357 South Livingston Avenue; do NOT name a Construction Official',
    geo: 'Livingston is a large (~13.8 sq mi) residential township in western Essex County that does NOT contain or border the South Mountain Reservation (that belongs to Millburn) — its open space is West Essex Park (a roughly 1,360-acre Essex County Passaic-River wetlands greenway on the western edge, ending just beyond South Orange Avenue, per Essex County Parks), Riker Hill Art Park (42 acres, a former Nike radar base, per Essex County Parks), and Becker Park; the Passaic River and Willow Brook run along the western/low-lying EDGE only (a localized FEMA Special Flood Hazard Area, per the FEMA Flood Insurance Study for Essex County + the Essex County Multi-Jurisdictional Hazard Mitigation Plan — never township-wide, never a basement-flood claim; the upland eastern sections such as Riker Hill sit outside the floodplain). Frame the floodplain as a roof-relevant DRAINAGE/storm stressor on the western edge only. The mature street-tree canopy over the post-war split-levels, raised ranches, and colonials is the defining residential roof stressor; the Route 10 / Eisenhower Parkway / South Livingston Avenue / Mount Pleasant Avenue corridor and the Cooperman Barnabas Medical Center campus carry the flat/low-slope commercial roofs. Keep all geography QUALITATIVE.',
    demo: 'Affluent, ~88.9% owner-occupied (10,719 housing units, per the U.S. Census Bureau) — post-war split-levels, raised ranches, and colonials, now joined by newer luxury and teardown-rebuild construction, PLUS the Route 10 / Eisenhower Parkway commercial-and-medical market (Cooperman Barnabas Medical Center, formerly Saint Barnabas, a 597-bed teaching hospital). Frame house types qualitatively; do NOT publish a population/area integer or the top-coded median-income / median-home-value literals.',
    verified: 'Riker Hill, Collins and Burnet Hill, Hillside, Broadlawn, Bel Air, Laurel Hills and Chestnut Hill, the Livingston Town Center / Livingston Mall area, the Route 10 and Eisenhower Parkway commercial corridors, the South Livingston Avenue town center, Cooperman Barnabas Medical Center (formerly Saint Barnabas), and the Passaic River / West Essex Park western edge. DROP the fabricated names Heritage Hills / Beaumont Terrace / Westminster / Northland / Collins Terrace / West Hills, and any street/section not on this list.',
    purged: 'any binding-COA claim (Livingston has none — the Master Plan recommends only; §170-3 + 38 sites = planning IDs), any treatment of the Force Homestead as a homeowner COA gate, any South Mountain Reservation attribution (that is Millburn), any Walter Kidde Dinosaur Park / Riker Hill Fossil Site attribution (that is in Roseland), any township-wide or basement-flood claim (the Passaic + Willow Brook are the western low-lying edge only), any city-specific elevation/snow/wind number beyond the shared EWR baseline, the fabricated neighborhood names (Heritage Hills/Beaumont Terrace/Westminster/Northland/Collins Terrace/West Hills), the top-coded median-income or median-home-value literals, and every fabricated NQR warranty term',
  },
  {
    slug: 'millburn', name: 'Millburn', cityId: 'millburn', brief: '_MILLBURN-BRIEF.md',
    crib: '.planning/content-system/cities-batchE/millburn.md',
    macro: 'Township of Millburn (incl. the Short Hills section), Essex County — an affluent ~9.33-sq-mi township in southwestern Essex County with a deep stock of early-20th-century high-style homes (Tudor Revival, Arts-and-Crafts, and estate homes in natural slate, copper, tile, and cedar) abutting the South Mountain Reservation, PLUS the downtown Millburn village and Mall at Short Hills commercial cores; two locally designated historic districts (Wyoming, Short Hills Park) drive a narrow but real COA gate.',
    coaPos: 'BINDING but NARROW COA — Wyoming / Short Hills Park districts or a designated landmark only',
    coa: 'Millburn HAS a binding local Historic Preservation Commission + ordinance (the Township of Millburn Historic Preservation ordinance, Article 8, enabled by MLUL N.J.S.A. 40:55D-107) that issues a Certificate of Appropriateness before permit-triggering exterior/roof work, BUT only on an individually designated landmark OR inside the locally designated Wyoming or Short Hills Park historic district — NOT township-wide. Most Millburn and Short Hills homes need no HPC review. The COA is the HPC\'s exterior-design approval, SEPARATE from the building permit, so a detached 1–2-family reroof stays N.J.A.C. 5:23-2.7 ordinary maintenance even where a COA applies. Short Hills Village is a recently-designated or pending THIRD historic district — frame as "checked against current designation status," neither asserted nor denied. The Paper Mill Playhouse and the Cora Hartshorn Arboretum are Register/institutional sites, NOT homeowner COA gates (per the NPS, Register listing imposes no private restriction). Assert the COA ONLY for the two named districts + designated landmarks, never township-wide, never "because of a National Register listing."',
    office: 'the Township of Millburn Building Department (the committed city page prints NO street address — do NOT invent one); do NOT name a Construction Official',
    geo: 'Millburn (incl. the Short Hills section) is an affluent ~9.33-sq-mi township in southwestern Essex County that ABUTS the South Mountain Reservation (a roughly 2,112-acre Essex County reservation between the First and Second Watchung ridges, per Essex County Parks) — South Mountain is MILLBURN\'s reservation, never Livingston\'s. The Watchung-foothills ridge terrain on the Short Hills side holds snow marginally longer (QUALITATIVE only — NO Millburn-specific elevation/snow/wind number; all weather figures use the shared NOAA EWR baseline). The downtown Millburn village sits on the Rahway River and has flash-flooded (Floyd 1999, Irene 2011, Ida 2021) — frame this as a DOWNTOWN low-slope COMMERCIAL drainage stressor only (positive slope-to-drain + parapet/scupper/downspout flashing), never a basement/interior, township-wide, or Short Hills residential claim, and write "the Rahway River" (no branch). The heavy oak/maple canopy over the Short Hills estate lots and the Cora Hartshorn Arboretum is the defining storm branch-impact stressor. Keep all geography QUALITATIVE.',
    demo: 'Affluent; a deep stock of early-20th-century high-style homes — Tudor Revival, Arts-and-Crafts, and estate homes in natural slate, copper, clay/concrete tile, and cedar (the slate/copper/tile/cedar premium drives the residential roofing market) — plus the downtown Millburn village and Mall at Short Hills commercial cores. Frame wealth QUALITATIVELY; do NOT publish a population/area integer or the top-coded median-income ($250,001) / median-home-value ($1.37M) literals.',
    verified: 'Short Hills (the Short Hills Park Historic District, the Mall at Short Hills), Wyoming (the Wyoming Historic District, Wyoming Presbyterian Church), the downtown Millburn village (Millburn Avenue retail on the Rahway River), the Cora Hartshorn Arboretum, and the Paper Mill Playhouse. Describe other areas qualitatively; DROP any street/section not on this list.',
    purged: 'any township-wide COA claim (binding ONLY in the Wyoming or Short Hills Park district or on a designated landmark), any treatment of the Paper Mill Playhouse or Cora Hartshorn Arboretum as homeowner COA gates, any West Essex Park / Riker Hill / Passaic-River feature (those are Livingston), any basement/interior or township-wide Rahway flood claim (downtown commercial drainage only), any river "branch" (write "the Rahway River"), any Millburn-specific elevation/snow/wind number, the top-coded median-income ($250,001) or median-home-value ($1.37M) literals, fabricated estate project specifics (the purged "1924 Tudor / 4,200 sq ft Vermont Unfading Green / ColorGard / 80-mil TPO Grand Manor / dedicated slate crew / in-house copper fabrication / quarry-direct / 20-year NDL Golden Pledge"), and every fabricated NQR warranty term',
  },
]

// Concise per-sibling geo/COA tag for the cross-city avoid-list.
const GEO_TAG = {
  'livingston': 'NO reservation (West Essex Park + Riker Hill Art Park + Becker Park), western-edge Passaic/Willow-Brook floodplain, Route 10 / Eisenhower Pkwy / Cooperman Barnabas commercial-medical corridor, post-war split-levels/raised-ranches',
  'millburn': 'South Mountain Reservation, Watchung-ridge terrain, downtown-village Rahway-River commercial flood, Wyoming + Short Hills Park historic districts, estate slate/copper/tile/cedar stock',
}

function siblingAvoid(me) {
  return CITIES.filter((c) => c.slug !== me.slug)
    .map((c) => `${c.name}: ${c.coaPos}; office ${c.office.replace(/; do NOT.*/, '')}; ${GEO_TAG[c.slug]}`)
    .join('  |  ')
}

function prompt(c) {
  const OUT = `.planning/content-system/combo-batch11-affluent-suburban/${c.slug}/${c.brief}`
  return `You are writing the COMBO AUTHOR BRIEF for ${c.name} (cityId '${c.cityId}'), Essex County, NJ — one of two affluent-suburban cities in Combo Batch 11 of the Newark Quality Roofing answer-first content rewrite. This brief will be read IN FULL by 65 downstream author agents (one per service×${c.name} combo), so it must be precise, self-contained, and faithful to the supplied verified facts. This is content-engineering for a local-SEO roofing site.

STEP 1 — READ THE EXACT STRUCTURAL TEMPLATE: .planning/content-system/combo-batch8-maplewood-southorange/maplewood/_MAPLEWOOD-BRIEF.md
Mirror its structure EXACTLY: the intro blockquote, then sections "## 0. ENTITY-GROUNDING", "## A. The combo render contract", "## B. Answer-first + hard rules", "## C. ${c.name} load-bearing facts", "## D. De-fab targets present in the CURRENT combo files", "## E. Pricing + whyChooseUs + conversionHooks", "## F. Differentiation directive", "## G. Output format".
- Sections 0, A, B, E, G are CITY-AGNOSTIC: copy them VERBATIM from the Maplewood template, swapping only "Maplewood" -> "${c.name}" and the city-page reference "src/data/city-content/first-suburbs.ts" -> "src/data/city-content/affluent-suburban.ts". KEEP every rule (entity-grounding directAnswer shape, ≤40w bold span, no-definition-field, registered-NJ-HIC-not-licensed, R2/R3/R6, de-fab list, pricing defaults $400-$1,000 repair / $10,000-$25,000 replacement, whyChooseUs/conversionHooks defaults, output format) byte-for-byte except the city-name swap.
- The Output-format §G path must point to .planning/content-system/combo-batch11-affluent-suburban/${c.slug}/ and 'src/data/combo-content/${c.slug}/'.

STEP 2 — CROSS-CHECK FACTS: read the ${c.name} crib ${c.crib} AND the committed city page src/data/city-content/affluent-suburban.ts (find the object with cityId: '${c.cityId}'). These are the verified authority. If anything below conflicts with the committed city page, the committed city page wins — but the facts below are already reconciled to it.

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

CLIMATE (§C — shared EWR baseline, HEDGED, identical to every city): ~31.5 in/yr snow; nor'easters Oct-April; ~25-30 thunderstorms/yr; ground snow load Pg ~25 psf and ~110-115 mph ASCE 7-16 design wind kept HEDGED (not Essex-confirmed). BAN every city-specific degree/gust/elevation number (no elevation exception in this batch; the ONLY named-sourced acreage figures are South Mountain Reservation ~2,112 ac [Millburn] and West Essex Park ~1,360 ac + Riker Hill Art Park 42 ac [Livingston]).

DE-FAB TARGETS (§D — present in the CURRENT ${c.name} combo files; instruct authors to DELETE/CORRECT all): the shared scaffold fabs (price-in-lead "with prices starting from \$X-\$Y and free estimates available today"; the "NJ licensed, GAF Certified, 15+ years / same-day / 24/7" whyChooseUs; "Premium materials from GAF, CertainTeed, and Owens Corning"; "Early action saves thousands"; inline markdown self-links) PLUS these ${c.name}-specific fabrications: ${c.purged}. To catalog the ACTUAL current fabs, instruct authors that their per-combo file is at src/data/combo-content/${c.slug}/<service>.ts and they must strip every de-fab found there. (You may read 2-3 current ${c.slug} combo files to make §D concrete.)

DIFFERENTIATION (§F — pre-empt cross-city overlap; the in-archetype affluent-suburban sibling is the primary differentiate target): FOREGROUND ${c.name}-DISTINCT anchors (its COA position, its specific reservation/canopy/floodplain geography, its housing stock, its verified neighborhoods, its permit office address). AVOID importing the OTHER affluent-suburban sibling's anchors: ${siblingAvoid(c)}. Also avoid the committed Newark/East-Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/South-Orange/West-Orange/Montclair/Glen-Ridge/Verona/Cedar-Grove/Caldwell/North-Caldwell/Essex-Fells/Fairfield/Roseland anchors. For the process-heavy / low-localizability services (roof-thermal-imaging-inspections, storm-damage-roof-repair, commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement, roof-overlay-installation), LEAD with the ${c.name} situation before the standardized facts. PRESERVE every cited standard/cost fact (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/InterNACHI figures) — differentiation is about which LOCAL facts lead, not changing sourced numbers.

STEP 4 — WRITE the complete brief to ${OUT}. It must be a single self-contained markdown file (~220-250 lines) mirroring the Maplewood template's depth. Use plain prose; this is a brief for authors, not code.

Return ONE line: "${c.slug}: brief written, <N> lines, COA=${c.coaPos}".`
}

const results = await parallel(CITIES.map((c) => () =>
  agent(prompt(c), { label: `brief:${c.slug}`, phase: 'Briefs' })
))
const ok = results.filter(Boolean).length
log(`Briefs phase complete: ${ok}/${CITIES.length}`)
return { written: ok, total: CITIES.length, statuses: results }
