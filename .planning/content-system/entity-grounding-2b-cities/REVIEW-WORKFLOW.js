export const meta = {
  name: 'eg2b-city-review',
  description: 'Adversarial review+refute of entity-grounding Phase 2b city whereIs + directAnswer reframe',
  phases: [
    { title: 'Review', detail: 'one reviewer per city checks whereIs + directAnswer vs fact bank' },
    { title: 'Refute', detail: 'adversarially challenge each med/high finding' },
  ],
}

const REVIEW_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    cityId: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          severity: { type: 'string', enum: ['low', 'med', 'high'] },
          dimension: { type: 'string', enum: ['whereis-geo', 'answer-first', 'reframe-integrity', 'guardrail', 'defab', 'other'] },
          field: { type: 'string', enum: ['whereIs', 'directAnswer', 'other'] },
          issue: { type: 'string' },
          evidence: { type: 'string' },
          suggestedFix: { type: 'string' },
        },
        required: ['severity', 'dimension', 'field', 'issue', 'evidence', 'suggestedFix'],
      },
    },
  },
  required: ['cityId', 'findings'],
}

const REFUTE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    verdict: { type: 'string', enum: ['confirmed', 'refuted'] },
    reasoning: { type: 'string' },
  },
  required: ['verdict', 'reasoning'],
}

const REPO = '/Users/akungapaul/Projects/Newarkqualityroofing'
const A = REPO + '/.planning/content-system/cities-batchA/CITY-FACTS-urban-core.md'
const B = REPO + '/.planning/content-system/cities-batchB/CITY-FACTS-first-suburbs.md'
const C = REPO + '/.planning/content-system/cities-batchC/CITY-FACTS-west-essex.md'
const D = REPO + '/.planning/content-system/cities-batchD/CITY-FACTS-caldwells-roseland.md'
const E = REPO + '/.planning/content-system/cities-batchE/CITY-FACTS-affluent-suburban.md'
const UC = REPO + '/src/data/city-content/urban-core.ts'
const FS = REPO + '/src/data/city-content/first-suburbs.ts'
const WE = REPO + '/src/data/city-content/west-essex.ts'
const CR = REPO + '/src/data/city-content/caldwells-roseland.ts'
const AS = REPO + '/src/data/city-content/affluent-suburban.ts'

const CITIES = [
  { cityId: 'newark', name: 'Newark', file: UC, bank: A, crib: "Essex County seat; the state's largest city; Passaic River is the eastern boundary (NOT the Hackensack); western edge of the NY metro. NOTE: Newark's whereIs is the COMMITTED exemplar and should be UNCHANGED — verify it was not altered." },
  { cityId: 'east-orange', name: 'East Orange', file: UC, bank: A, crib: "Essex; a city; densely built inner-ring suburb of Newark on the flat Watsessing/Newark plain immediately west of Newark; TWO active NJ Transit Morris & Essex stations (Brick Church, East Orange). GUARDRAIL: no river or county reservation within its borders." },
  { cityId: 'orange', name: 'Orange', file: UC, bank: A, crib: "Essex; officially the City of Orange Township; sits at the eastern foot of the first Watchung ridge; borders West Orange to its west; I-280 crosses east-west. GUARDRAIL: Orange does NOT contain or border South Mountain Reservation (that is West Orange/Maplewood/Millburn; Orange is one municipality removed)." },
  { cityId: 'irvington', name: 'Irvington', file: UC, bank: A, crib: "Essex; a township; small and dense, directly southwest of Newark; one of NJ's most densely settled municipalities; Springfield Avenue corridor runs through it from Newark toward Union County. GUARDRAIL: Vailsburg is a NEWARK neighborhood and Hilton is a MAPLEWOOD section — neither is Irvington." },
  { cityId: 'bloomfield', name: 'Bloomfield', file: FS, bank: B, crib: "Essex; a township; the Third River runs past its town center; the Garden State Parkway threads its commercial spine; borders Belleville, East Orange, Glen Ridge, Montclair, Newark, Nutley (+ Clifton in Passaic Co). GUARDRAIL: the Third River runs through the center (do not confuse with the Second River / Toney's Brook in Watsessing Park)." },
  { cityId: 'belleville', name: 'Belleville', file: FS, bank: B, crib: "Essex; a township; the Second River forms its SOUTHWEST border with Newark; the Passaic River is its eastern side and Belleville sits on the WEST bank opposite North Arlington/Lyndhurst; Branch Brook Park extends in at the north. GUARDRAIL: do NOT say the Passaic River separates Belleville from Newark — that border is the Second River." },
  { cityId: 'nutley', name: 'Nutley', file: FS, bank: B, crib: "Essex; a township; the Third River (a.k.a. Yantacaw) runs THROUGH it via Yantacaw/Memorial Park; the Passaic River BORDERS the western edge; ~11 miles west of Manhattan. GUARDRAIL: do NOT swap the Third River (through) and the Passaic (border) roles." },
  { cityId: 'maplewood', name: 'Maplewood', file: FS, bank: B, crib: "Essex; a township; sits between the first and second Watchung ridges; South Mountain Reservation reaches into its WEST/NORTHWEST edge; NJ Transit Morris & Essex line; Maplewood Village downtown. GUARDRAIL: the reservation is on the WEST side (not east); Maplewood Village is Register-only (no homeowner COA)." },
  { cityId: 'south-orange', name: 'South Orange', file: FS, bank: B, crib: "Essex; officially the Township of South Orange Village; BORDERS the eastern edge of South Mountain Reservation (does NOT contain it); East Branch of the Rahway River runs through the village; Seton Hall University; Montrose Park is a LOCAL COA district. GUARDRAIL: 'borders' the reservation, not 'contains'." },
  { cityId: 'west-orange', name: 'West Orange', file: WE, bank: C, crib: "Essex; a township; straddles the first Watchung (Orange Mountain) ridge; CONTAINS South Mountain Reservation (the largest Essex County park) plus part of Eagle Rock Reservation. GUARDRAIL: among the west-essex cities, ONLY West Orange contains/borders South Mountain Reservation." },
  { cityId: 'montclair', name: 'Montclair', file: WE, bank: C, crib: "Essex; a township; on the eastern slope of the first Watchung Mountain, with NYC skyline views from higher elevations; holds parts of Eagle Rock and Mills reservations; Brookdale Park shared with Bloomfield. GUARDRAIL: Montclair does NOT contain South Mountain or Hilltop reservations." },
  { cityId: 'glen-ridge', name: 'Glen Ridge', file: WE, bank: C, crib: "Essex; a small BOROUGH; a landlocked lowland just east of Montclair (NOT on the Watchung ridge); Toney's Brook runs through 'The Glen'; bordered by Bloomfield, Montclair, East Orange; one NJ Transit station. GUARDRAIL: Glen Ridge borders NONE of the big Essex reservations (South Mountain/Eagle Rock/Mills/Hilltop)." },
  { cityId: 'verona', name: 'Verona', file: WE, bank: C, crib: "Essex; a township; lies in a valley between the first and second Watchung mountains; holds parts of Eagle Rock and Hilltop reservations; Verona Park (Olmsted-designed) on the Peckman River. GUARDRAIL: Verona does NOT contain South Mountain or Mills reservations." },
  { cityId: 'cedar-grove', name: 'Cedar Grove', file: WE, bank: C, crib: "Essex; a township; set BETWEEN the first and second Watchung mountains (a valley/ridge-edge township, not on one slope alone); holds parts of Mills and Hilltop reservations; three sections along Pompton Avenue / Route 23. GUARDRAIL: does NOT contain South Mountain or Eagle Rock reservations." },
  { cityId: 'caldwell', name: 'Caldwell', file: CR, bank: D, crib: "Essex; a BOROUGH; compact, in the far-western uplands; borders North Caldwell, West Caldwell, Essex Fells; walkable Bloomfield Avenue downtown; Caldwell University. GUARDRAIL: upland (no Passaic floodplain); no county reservation adjacency; only a landmark-only local COA (Ch.130)." },
  { cityId: 'north-caldwell', name: 'North Caldwell', file: CR, bank: D, crib: "Essex; a BOROUGH; far-western upland on the second Watchung ridge; contains the highest ground in Essex County (~691 ft) at the Hilltop Reservation (shared with Cedar Grove and Verona); heavily wooded, large-lot. GUARDRAIL: no Passaic floodplain; advisory HPC, NO COA." },
  { cityId: 'essex-fells', name: 'Essex Fells', file: CR, bank: D, crib: "Essex; the SMALLEST municipality in Essex County; a borough laid out as the planned, hilly Bowditch residential community in the far-western uplands; ~97% single-family; no commercial district; no reservation. GUARDRAIL: no COA, no Passaic floodplain (Ch.142 'Historic Structure' is a FEMA floodplain term, not preservation)." },
  { cityId: 'fairfield', name: 'Fairfield', file: CR, bank: D, crib: "Essex; a TOWNSHIP; THE defining Passaic River floodplain city; in the NW corner of Essex downstream of the Passaic-Pompton confluence; low-lying; dense Route 46/I-80 commercial-industrial corridor; Great Piece Meadows wetland. GUARDRAIL: floodplain framed as a drainage/storm stressor; no homeowner COA." },
  { cityId: 'roseland', name: 'Roseland', file: CR, bank: D, crib: "Essex; a BOROUGH; far-western; the Passaic River forms its WESTERN boundary with Morris County (East Hanover); Eisenhower Parkway office-park corridor; Becker Park + part of West Essex Park; localized floodplain on the western/riverine edge. GUARDRAIL: does NOT border Fairfield directly (they meet only via West Essex Park); contains PARKS, not reservations." },
  { cityId: 'livingston', name: 'Livingston', file: AS, bank: E, crib: "Essex; a large TOWNSHIP; its western edge runs along the Passaic River and the West Essex Park greenway; borders Roseland (N), West Orange (E), Millburn (S), and Florham Park / East Hanover (the Morris County line, W); Riker Hill Art Park; Route 10 corridor. GUARDRAIL: Livingston does NOT contain South Mountain Reservation (that is West Orange/Maplewood/Millburn); NO binding local COA." },
  { cityId: 'millburn', name: 'Millburn', file: AS, bank: E, crib: "Essex; a TOWNSHIP that INCLUDES the Short Hills section; abuts the South Mountain Reservation in the wooded Watchung foothills; downtown village sits on the Rahway River. GUARDRAIL: Short Hills is a SECTION of Millburn (not a separate municipality); the binding COA applies ONLY within the locally designated Wyoming / Short Hills Park districts or Schedule-A landmarks, NOT township-wide." },
]

function reviewPrompt(c) {
  return [
    'You are an adversarial fact-and-discipline reviewer for an SEO content edit (Newark Quality Roofing, a roofing contractor in Essex County, NJ).',
    'A site-wide "entity-grounding" pass just edited TWO fields on the ' + c.name + ' (cityId: ' + c.cityId + ') city page object:',
    '  (1) a NEW `whereIs` field — an answer-first "Where Is ' + c.name + ', NJ?" locational definition;',
    '  (2) a REFRAMED `directAnswer` field — now leads with a "roofing contractor" descriptor + "' + c.name + ', New Jersey" + a "registered New Jersey Home Improvement Contractor" credential.',
    '',
    'STEP 1 — Read the CURRENT `whereIs` and `directAnswer` strings for the `' + c.cityId + '` object in this file: ' + c.file,
    'STEP 2 — Read the matching city section in the fact bank: ' + c.bank,
    '',
    'VERIFIED GROUND TRUTH for ' + c.name + ' (cross-checked from the bank): ' + c.crib,
    '',
    'CHECK ONLY these two fields (ignore all other fields, which were not changed) against these dimensions:',
    '  • whereis-geo: Is every geographic claim in `whereIs` TRUE per the fact bank (county, municipal type, rivers, borders, ridges, reservations, distance)? Flag any wrong/unsupported geo fact.',
    '  • guardrail: Does it violate any GUARDRAIL above (e.g. attributing a reservation to the wrong town, swapping rivers, calling a section a municipality, asserting a floodplain/COA where none exists)?',
    '  • answer-first: Is the `whereIs` FIRST sentence a definitive <=40-word locational definition that opens by bolding "**' + c.name + ', New Jersey**"? Flag MODALITY (will/should/must/need to/can) in declaratives, any invented figure/demographic/statistic in the answer, any outbound link, any synthesized marketing superlative (note: a SOURCED geographic superlative like "smallest municipality in Essex County" or "highest ground in the county" is acceptable if the bank supports it).',
    '  • reframe-integrity: Does `directAnswer` correctly lead with "**roofing contractor**", name "**' + c.name + ', New Jersey**", end with "registered New Jersey Home Improvement Contractor" (NEVER "licensed"), keep the bolded span <=40 words, preserve the original building-stock / materials description, and introduce NO modality?',
    '  • defab: any fabricated price, guarantee, stat, or credential.',
    '',
    'Be precise and skeptical but do NOT invent problems. If a field is clean, return an empty findings array. For each real problem return a finding with severity (low/med/high), dimension, field, a one-line issue, the evidence (quote the bank or the rule), and a concrete suggestedFix string (the corrected text). Return ONLY via the structured schema.',
  ].join('\n')
}

function refutePrompt(c, f) {
  return [
    'You are an adversarial REFUTER. A reviewer raised the following finding about the ' + c.name + ' (cityId ' + c.cityId + ') roofing page edit. Your job is to try to REFUTE it — default to "refuted" unless the finding is clearly correct and material.',
    '',
    'FINDING: severity=' + f.severity + ' dimension=' + f.dimension + ' field=' + f.field,
    'ISSUE: ' + f.issue,
    'EVIDENCE CITED: ' + f.evidence,
    'SUGGESTED FIX: ' + f.suggestedFix,
    '',
    'VERIFIED GROUND TRUTH for ' + c.name + ': ' + c.crib,
    'Independently verify by reading the CURRENT field text in ' + c.file + ' (object cityId ' + c.cityId + ') and the fact bank ' + c.bank + '.',
    '',
    'Confirm ONLY if: the claim is genuinely wrong/unsupported per the fact bank, OR it is a true answer-first/reframe/modality/de-fab violation that matters. Refute if: the cited fact actually IS supported, the "violation" is a sourced geographic superlative or a defensible phrasing, the suggestedFix would introduce an error, or the finding is stylistic nitpicking with no factual or rule basis. Return ONLY via the structured schema (verdict + one-paragraph reasoning).',
  ].join('\n')
}

phase('Review')
const results = await pipeline(
  CITIES,
  (c) => agent(reviewPrompt(c), { label: 'review:' + c.cityId, phase: 'Review', schema: REVIEW_SCHEMA }),
  (review, c) => {
    const findings = (review && review.findings) || []
    const nonLow = findings.filter((f) => f.severity !== 'low')
    const low = findings.filter((f) => f.severity === 'low')
    return parallel(
      nonLow.map((f) => () =>
        agent(refutePrompt(c, f), { label: 'refute:' + c.cityId, phase: 'Refute', schema: REFUTE_SCHEMA })
          .then((v) => ({ ...f, verdict: (v && v.verdict) || 'confirmed', refuteReasoning: (v && v.reasoning) || '' }))
      )
    ).then((refuted) => ({
      cityId: c.cityId,
      name: c.name,
      findings: [
        ...low.map((f) => ({ ...f, verdict: 'confirmed', refuteReasoning: 'low — auto-confirmed' })),
        ...refuted.filter(Boolean),
      ],
    }))
  }
)

const clean = results.filter(Boolean)
const confirmed = clean.flatMap((r) => r.findings.filter((f) => f.verdict === 'confirmed').map((f) => ({ cityId: r.cityId, ...f })))
const refutedOut = clean.flatMap((r) => r.findings.filter((f) => f.verdict === 'refuted').map((f) => ({ cityId: r.cityId, ...f })))
log('Review complete: ' + confirmed.length + ' confirmed, ' + refutedOut.length + ' refuted across ' + clean.length + ' cities')

return {
  totalConfirmed: confirmed.length,
  totalRefuted: refutedOut.length,
  confirmed,
  refuted: refutedOut,
  perCity: clean.map((r) => ({ cityId: r.cityId, findingCount: r.findings.length, confirmed: r.findings.filter((f) => f.verdict === 'confirmed').length })),
}
