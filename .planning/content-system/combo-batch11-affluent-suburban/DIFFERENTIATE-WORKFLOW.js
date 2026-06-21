export const meta = {
  name: 'combo-batch11-differentiate',
  description: 'Reduce cross-city duplication on 2 high-overlap Livingston combos (vs the Roseland sibling) by foregrounding the Livingston-specific application while preserving all cited facts + entity-grounding',
  phases: [{ title: 'Differentiate', detail: 'one agent per target re-localizes shared passages to its city context' }],
}

phase('Differentiate')

// Targets from _dup-analysis.ts (≥60% overlap-coeff OR ≥50% Jaccard). The livingston↔millburn sibling
// pair is already clean (0 ≥threshold); millburn is clean vs all committed. Both targets overlap the
// committed ROSELAND sibling (the closest far-western-Essex analog: office corridor + western floodplain + canopy).
const TARGETS = [
  { city: 'livingston', s: 'full-roof-tear-off', e: 'livingstonFullRoofTearOff', sib: 'roseland', ov: '54.1% Jaccard / 71.1% overlap',
    shared: 'The full-tear-off scope (strip to deck, deck repair, underlayment + cover install), the N.J.A.C. 5:23-6.4 statutory recover/removal limits (the full list wood shake, slate, clay, cement, or asbestos-cement tile), the disposal/weather-exposure phasing, the ordinary-maintenance-vs-25%-permit framing, and the cost FAQ are near-verbatim shared with the Roseland sibling.',
    local: 'Livingston full tear-off is a LARGE-RESIDENTIAL-TOWNSHIP and COMMERCIAL-CORRIDOR service: foreground (1) the post-war split-levels, raised ranches, and colonials (and newer luxury / teardown-rebuild homes) across Riker Hill, Collins and Burnet Hill, Hillside, Broadlawn, Bel Air, Laurel Hills, and Chestnut Hill, where a tear-off exposes mid-century plank or early plywood sheathing and aged valley/chimney flashing; (2) the Route 10 / Eisenhower Parkway / Cooperman Barnabas Medical Center commercial-and-medical low-slope decks where a commercial tear-off crosses the 25% permit threshold filed with the Township of Livingston Building Department at 357 South Livingston Avenue; (3) the mature street-tree canopy that drops leaf and branch debris during the open-deck phase; (4) the NO-binding-COA posture (no historic approval gates a Livingston tear-off); (5) the western Passaic-River / Willow Brook low-lying edge where a tear-off on a riverine-side parcel sequences weather exposure carefully.' },
  { city: 'livingston', s: 're-roofing', e: 'livingstonReRoofing', sib: 'roseland', ov: '46.2% Jaccard / 65.6% overlap',
    shared: 'The re-roofing definition (overlay vs tear-off), the overlay economics (~20-30% shorter shingle life / national savings), the single-layer overlay limit + N.J.A.C. 5:23-6.4 recover restrictions (the full statutory list), the InterNACHI material lifespans, and the cost FAQ are near-verbatim shared with the Roseland sibling.',
    local: 'Livingston re-roofing is a MID-CENTURY-RESIDENTIAL and COMMERCIAL-CORRIDOR service: foreground (1) the post-war split-levels, raised ranches, and colonials whose original asphalt is reaching end of life — the overlay-vs-tear-off decision on Riker Hill, Collins and Burnet Hill, Laurel Hills, and Chestnut Hill stock, where a single existing layer may allow an overlay but mid-century decks often need a full tear-off; (2) the Route 10 / Eisenhower Parkway / Cooperman Barnabas commercial low-slope re-cover crossing the 25% permit threshold (Township of Livingston Building Department, 357 South Livingston Avenue); (3) the newer luxury / teardown-rebuild homes where a full system replaces the original covering; (4) the mature street-tree canopy shade and moss that shorten an overlaid roof life; (5) the NO-binding-COA posture (no historic gate) and the western Passaic / Willow Brook edge drainage on lower-lying parcels.' },
]

const CITY = {
  'livingston': {
    name: 'Livingston', cityId: 'livingston', brief: 'livingston/_LIVINGSTON-BRIEF.md',
    geo: 'a large (~13.8 sq mi) residential township in western Essex County that does NOT contain or border the South Mountain Reservation (that is Millburn); its open space is West Essex Park (a roughly 1,360-acre Essex County Passaic-River wetlands greenway on the western edge), Riker Hill Art Park (42 acres, a former Nike radar base, per Essex County Parks), and Becker Park; the Passaic River and Willow Brook run along the western / low-lying EDGE only (a localized FEMA Special Flood Hazard Area per the FEMA Flood Insurance Study + the Essex County Hazard Mitigation Plan — never township-wide, never a basement-flood claim); a mature street-tree canopy over post-war split-levels, raised ranches, and colonials; the Route 10 / Eisenhower Parkway / South Livingston Avenue / Mount Pleasant Avenue commercial-and-medical corridor + the Cooperman Barnabas Medical Center campus (formerly Saint Barnabas, a 597-bed teaching hospital); verified sections only: Riker Hill, Collins and Burnet Hill, Hillside, Broadlawn, Bel Air, Laurel Hills and Chestnut Hill, the Livingston Town Center / Livingston Mall area. Construction office = the Township of Livingston Building Department at 357 South Livingston Avenue (no named official).',
    coa: 'NO binding local COA — Livingston has designated NO local historic district or landmark requiring a Certificate of Appropriateness; the Master Plan only RECOMMENDS considering preservation; code §170-3 + the ~38 Master-Plan "historic sites" are planning IDs, not gates; the Force Homestead = a township-owned Register-listed museum, not a gate. State plainly no COA applies to a Livingston reroof. Do NOT import Millburn\'s Wyoming / Short Hills Park Article-8 COA, Roseland\'s Chapter-30 ordinance, or any other city\'s gate. Per the NPS, a National Register listing alone places no restriction on a private owner.',
    avoid: 'Roseland\'s Chapter-30 Landmarks and Historic District Commission ordinance + the Williams-Harrison House + the Becker Farm Road office-park framing + 300 Eagle Rock Avenue + Roseland\'s western-edge Passaic floodplain framed as the borough\'s defining feature; and Millburn\'s South Mountain Reservation + Wyoming / Short Hills Park COA + estate slate/copper/tile stock. Foreground Route 10 + Cooperman Barnabas (Livingston\'s own corridor), NOT a generic Eisenhower-Parkway office-park description that reads like Roseland.',
  },
}

function prompt(t) {
  const c = CITY[t.city]
  const BDIR = '.planning/content-system/combo-batch11-affluent-suburban'
  return `You are reducing cross-city DUPLICATION on ONE ${c.name} (${c.cityId}, Essex County, NJ) service×city combo while raising its local value, for a local-SEO roofing site. Service: "${t.s}". File to rewrite: src/data/combo-content/${t.city}/${t.s}.ts (export const ${t.e}: ComboContent).

WHY: a 21-city near-duplicate analysis found this combo at ${t.ov} with the ${t.sib} version of the same service, because the content is dominated by standardized facts identical city-to-city. ${t.shared} Your job: re-localize so ${c.name}'s distinct local application DOMINATES the page and the shared facts become a supporting minority — WITHOUT deleting any cited fact.

STEP 1 — READ all three:
- src/data/combo-content/${t.city}/${t.s}.ts (the file you will rewrite — it ALREADY passes the gate and carries entity-grounding + corrections; confirm export "${t.e}", serviceId "${t.s}", cityId '${t.city}'. PRESERVE every fact and every corrected source attribution already in it.)
- src/data/combo-content/${t.sib}/${t.s}.ts (the sibling you must DIVERGE from — do not mirror its sentence structure or order)
- ${BDIR}/${c.brief} (render contract + hard rules + ${c.name} facts + §0 ENTITY-GROUNDING + §F differentiation)

STEP 2 — REWRITE the ${c.name} file to foreground these verified ${c.name} distinctives:
${t.local}

ENTITY-GROUNDING — PRESERVE EXACTLY (do NOT change these two fields):
- directAnswer: keep the existing entity-grounded value verbatim (it already reads "Newark Quality Roofing is a roofing contractor providing ${t.s.replace(/-/g, ' ')} across ${c.name}, New Jersey, and Essex County, … as a registered New Jersey Home Improvement Contractor"). Do not rewrite it.
- definition: keep the existing 'definition' field value BYTE-FOR-BYTE (it is the canonical service definition; altering it breaks entity-stability). Copy it through unchanged.

RULES (do not break the gate — this file currently passes):
- PRESERVE EVERY CITED FACT AND NAMED SOURCE currently in the file (InterNACHI lifespans, NRCA/ARMA slope-and-ponding, IRC/N.J.A.C. sections, the full N.J.A.C. 5:23-6.4 statutory recover list "wood shake, slate, clay, cement, or asbestos-cement tile", HomeAdvisor/Modernize/Angi/HomeGuide cost ranges). Relocate them INTO the localized narrative; never delete a fact or invent a new number. Introduce NO new hard number not already in the file or implied by the brief. Keep the insurance/proof-of-loss framing as the contractual ~60-day proof-of-loss policy term per United Policyholders and NAIC (NEVER a statutory NJ DOBI claim deadline). Keep wind-uplift "per IIBEC" QUALITATIVE (NEVER a "2-3× field pressure" multiplier, NEVER RICOWI). Keep attic ventilation qualitative (NEVER the NRCA "up to 25%" figure). Keep housing QUALITATIVE except the city-page-published figure (Livingston ~88.9% owner-occupied / 10,719 units, per the U.S. Census Bureau).
- Materially REPHRASE the shared standardized passages in ${c.name}-contextualized language so they are no longer near-verbatim with the ${t.sib} sibling (FACTS stay; FRAMING localizes). Cut the verbatim shingle overlap substantially.
- Keep it answer-first: overview[0]/challenges[0]/process[0] each a ≤40-word FIGURE-FREE bold lead; each faq answer's first sentence ≤40 words and definitive. Count standalone " — " em-dash tokens as words; stay under 40.
- Schema caps: overview 3-5, challenges 2-4, process 2-4, faqs 3-6 (keep exactly one cost FAQ). metaDescription ≤160 chars, no ** markdown.
- CREDENTIAL: NQR is "a registered New Jersey Home Improvement Contractor" / "fully insured" — NEVER "licensed" for NQR (keep third-party "licensed public adjuster/engineer/Construction Official/asbestos abatement" cites). NO de-fab literals (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, response-time claims, manufacturer-certification claims). NO will/should/need-to/must modality in declaratives (FAQ questions exempt). NO ** markdown in raw fields (whyChooseUs, pricing.range, pricing.note, metaDescription, conversionHooks.*, faq question). NO links/URLs. NO city-specific heat-island/wind/elevation degree numbers.
- ${c.name.toUpperCase()} GEOGRAPHY: ${c.geo} Do NOT import the sibling's anchors: ${c.avoid}
- ${c.name.toUpperCase()} HISTORIC: ${c.coa}
- Apostrophes inside single-quoted TS strings MUST be escaped (${c.name}\\'s) — unescaped apostrophes break the build.

OUTPUT: write the COMPLETE rewritten file to ${BDIR}/${t.city}/${t.s}.diff.ts — first line EXACTLY "import type { ComboContent } from '../schema';", blank line, then "export const ${t.e}: ComboContent = {", keep serviceId/cityId, KEEP directAnswer + definition unchanged, end with "};". Output ONLY valid TypeScript (no code fences, no commentary). Do NOT edit any file under src/.

Return one line: "${t.city}/${t.s}: rewritten, <N faqs>, foregrounded <one-phrase ${c.name} local angle>".`
}

const results = await parallel(TARGETS.map(t => () => agent(prompt(t), { label: `diff:${t.city}/${t.s}`, phase: 'Differentiate' })))
log(`Differentiate complete: ${results.filter(Boolean).length}/${TARGETS.length}`)
return { done: results.filter(Boolean).length, total: TARGETS.length, statuses: results }
