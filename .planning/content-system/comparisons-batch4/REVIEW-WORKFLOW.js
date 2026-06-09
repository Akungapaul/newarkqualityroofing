export const meta = {
  name: 'cmp4-review',
  description: 'Adversarial review→refute of the 8 assembled CMP-4 decision-helper comparisons (1 reviewer + 1 refuter each); returns confirmed findings with full detail',
  phases: [
    { title: 'Review', detail: '1 reviewer per comparison — flag findings across dimensions' },
    { title: 'Refute', detail: '1 refuter per comparison — confirm/reject + return confirmed findings' },
  ],
}

const REPO = '/Users/akungapaul/Projects/Newarkqualityroofing'
const OUT = `${REPO}/.planning/content-system/comparisons-batch4`
const SRC = `${REPO}/src/data/comparison-content/decision-helper.ts`
const GOLD = `${REPO}/src/data/comparison-content/material-vs-material.ts`
const RULESET = `${REPO}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md`
const R = `${REPO}/.planning/content-system/research`

const ITEMS = [
  { id: 'best-roofing-material-nj-weather', packs: 'facts-materials-economics.md §0/§7, facts-nj-regulatory-climate.md §3.1, facts-energy-solar.md §0.3–0.4, facts-causes-signs.md, facts-components-specialty.md', hunt: 'NO NQR self-stats ("thousands of installations", "decades of local performance data", "our emergency calls"). Wind must NOT carry a fabricated "140+ mph" as fact — design wind is ~110–115 mph (ASCE 7-16) that metal/architectural exceed (qualitative OK). Freeze-thaw "35–45 cycles" = "regional climate estimates", NOT NOAA (NOAA backs only the ~31.5" snowfall). Snowfall = ~31.5" NOAA 1991–2020, NOT "28 inches". Cooling = EPA 11–27% PEAK cooling demand + reflectance/emittance (CRRC), NOT "15–25%". NO brand colors / "GAF Timberline HDZ". Cost cells sourced (Josten $/sqft, NJ replacement $10,000–$25,000) or de-quantified — flag unsourced "$425–$600/yr"/"$8,500–$18,000"/"$15,000–$35,000". Ranking-shape answer-first. No modality. Question-form headings.' },
  { id: 'best-commercial-roofing-material', packs: 'facts-components-specialty.md, facts-replacement-reroofing-insurance.md, facts-energy-solar.md §0.1–0.4, facts-nj-regulatory-climate.md, facts-materials-economics.md §7', hunt: 'Fabricated lifecycle math GONE: NO "$3,000/year savings ($90,000 total)", NO "$60,000+", NO invented building totals "$200,000/$170,000/$300,000". Membrane $/sqft traces to a pack OR is de-quantified — flag unsourced "$7–$12 TPO" etc. Cooling = EPA 11–27% PEAK demand, NOT "15–25%". "NJ Clean Energy $0.10–$0.30/sqft" / 179D / prevailing-wage / FM-UL only if pack-stated (qualitative). NO self-promo "we coordinate"/"we provide comparative bids". No modality. Question-form headings.' },
  { id: 'best-roofing-for-flat-roofs', packs: 'facts-components-specialty.md, facts-replacement-reroofing-insurance.md, facts-energy-solar.md §0.3–0.4, facts-nj-regulatory-climate.md, facts-materials-economics.md §7', hunt: 'NO "15–25%" cooling (→ EPA 11–27% peak). NO self-promo "we warranty our flat roof work"/"We install tapered insulation"/"Our team handles permits". Membrane $/sqft + lifespans trace to a pack or de-quantified. Ponding-tolerance + heat-welded-vs-adhesive seam rankings named (NRCA/manufacturer). "2:12 pitch" traces to IRC R905.2.2. No modality ("should not have ponding" → indicative). Question-form headings.' },
  { id: 'best-roofing-for-historic-homes-nj', packs: 'facts-historic-restoration.md §0/§8–9 (GOVERNS), facts-materials-economics.md, facts-nj-regulatory-climate.md', hunt: 'CRITICAL: the FALSE "NJ 25% credit for owner-occupied residential" must be GONE; "federal historic tax credits (20%)" must NOT be presented as applying to a homeowner reroof (§47 = income-producing-ONLY). The binding gate = local municipal Certificate of Appropriateness (N.J.S.A. 40:55D), NOT a National/NJ Register listing alone (listing alone does not restrict a private reroof). Glen Ridge / Montclair framed as LOCAL-ordinance COA (Glen Ridge Ch.15.32 binding; Montclair 4 local districts, not township-wide), NOT "because NR-listed". NO self-promo "we provide the documentation for tax credit applications". Secretary of the Interior\'s Standards in-kind matching + red-cedar-no-copper-nails (Brief 19) intact. Slate/cedar/synthetic $ sourced. No modality. Question-form headings.' },
  { id: 'cheapest-vs-most-durable-roofing', packs: 'facts-materials-economics.md §0/§7, facts-cost-stats.md §4/§7, facts-energy-solar.md §0.3–0.4', hunt: 'NO "15+ years of local experience". Fabricated energy $ GONE: NO "$500–$1,500 annually", NO "$25,000–$75,000 over 50 years". Cost-per-year framed as an ILLUSTRATIVE division of a SOURCED install range by a SOURCED lifespan — NOT an NQR-measured/guaranteed figure. Install ranges trace to materials-economics/cost-stats or the NJ replacement $10,000–$25,000 standard. Resale recoup = ~61% Zonda / 60–68% Zillow, NOT "60–70%" unsourced. "NJ labor 15–25% above national"/"prices up 20–40% since 2020"/cedar "$500–$1,500 per cycle" only if pack-stated. NO self-promo "We provide fixed-price quotes". No modality. Question-form headings.' },
  { id: 'most-energy-efficient-roofing-materials', packs: 'facts-energy-solar.md §0 (GOVERNS), facts-nj-regulatory-climate.md, facts-components-specialty.md', hunt: 'CRITICAL per energy-solar §0: the federal 30% solar ITC must be GONE as current ("qualifies for 30% federal ITC") → historical/repealed (placed in service after 2025-12-31, P.L. 119-21) + tax-pro referral; SREC-II/SuSI qualitative. Fabricated annual savings GONE: NO "$200–$500 annually", NO "$1,500–$4,000 annually". Reflectance "65–70%"/"80%+" traces to a pack value or is de-quantified (reflectance + thermal emittance, CRRC); coatings/reflective add NO R-value. Spray foam "R-6.5/inch" traces to the pack. Named products (GAF Cool Series/CertainTeed Solaris) neutral examples, no ranking; no "GAF Timberline HDZ" colors. 179D only if pack-stated. No modality. Question-form headings.' },
  { id: 'best-roofing-for-essex-county-colonial-homes', packs: 'facts-historic-restoration.md, facts-materials-economics.md, facts-nj-regulatory-climate.md', hunt: 'NO "roofed thousands of Essex County Colonials". Brand-color promo GONE ("GAF Timberline HDZ in Charcoal", "CertainTeed Landmark in Weathered Wood ... most-requested") → neutral tone names. Dormer "15–30% more"/"increases labor 15–30%" only if pack-stated, else qualitative. NO self-promo "We offer copper accent packages". Substyle period-material matching kept qualitative. R14 hype softened ("look their best", "quintessentially Colonial", "communicate quality and permanence"). Slate/metal/cedar $ sourced. No modality. Question-form headings.' },
  { id: 'roof-warranty-comparison-guide', packs: 'GAP-decision-helpers.md (GOVERNS), facts-nj-regulatory-climate.md §2, facts-process-standards.md, facts-components-specialty.md', hunt: 'CRITICAL — ZERO brand ranking: "GAF Golden Pledge = best overall residential warranty", "CertainTeed SureStart Plus", "Owens Corning Platinum = best workmanship" with ranked terms must be GONE. comparisonRows reframed by warranty TYPE (manufacturer system / contractor workmanship / commercial NDL / extended-registered / standard-limited / transferable). A manufacturer program appears ONLY as a neutral manufacturer-attributed example ("terms set and registered by the manufacturer, not by NQR"), NEVER "best". verdict.winner = STRUCTURAL (non-prorated manufacturer system warranty via a credentialed contractor), no brand. Pro-rated/non-prorated mechanics + NDL + transferability + ventilation-void correct per GAP pack. NJ written-disclosure (N.J.A.C. 13:45A-16.2) + HIC registration (N.J.S.A. 56:8-136) + Consumer Affairs recourse present. NO self-promo "we register every warranty"/"free post-installation inspection". NO "best warranty" superlatives (R14). "high turnover rate" qualitative. No modality. Question-form headings.' },
]

const REVIEW_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['comparisonId', 'findings'],
  properties: {
    comparisonId: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        required: ['id', 'severity', 'dimension', 'field', 'quote', 'issue', 'suggestedFix'],
        properties: {
          id: { type: 'string' },
          severity: { type: 'string', enum: ['low', 'med', 'high'] },
          dimension: { type: 'string', enum: ['factualAccuracy', 'sourceAttribution', 'currency', 'answerFirst', 'modality', 'defabHype', 'boldSafe', 'other'] },
          field: { type: 'string' },
          quote: { type: 'string' },
          issue: { type: 'string' },
          suggestedFix: { type: 'string' },
        },
      },
    },
  },
}

const REFUTE_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['comparisonId', 'confirmedFindings', 'refutedIds'],
  properties: {
    comparisonId: { type: 'string' },
    confirmedFindings: {
      type: 'array',
      description: 'ONLY the findings that survive refutation — full detail carried over so the fixer can act directly',
      items: {
        type: 'object', additionalProperties: false,
        required: ['id', 'severity', 'dimension', 'field', 'quote', 'issue', 'fix', 'refuteReason'],
        properties: {
          id: { type: 'string' },
          severity: { type: 'string', enum: ['low', 'med', 'high'] },
          dimension: { type: 'string' },
          field: { type: 'string' },
          quote: { type: 'string' },
          issue: { type: 'string' },
          fix: { type: 'string', description: 'the exact before→after edit to apply' },
          refuteReason: { type: 'string', description: 'why this survived refutation (cite pack line or rule)' },
        },
      },
    },
    refutedIds: { type: 'array', items: { type: 'string' }, description: 'finding ids rejected as false positives, with no fix needed' },
  },
}

const results = await pipeline(
  ITEMS,
  (it) => agent(
    `You are an adversarial content reviewer for Newark Quality Roofing. Review ONE rewritten decision-helper (RANKING) comparison object for factual/sourcing/answer-first/style defects. Be skeptical and specific; quote exact text.

COMPARISON: ${it.id}

READ:
- The rewritten object: ${SRC} (find comparisonId '${it.id}' — the ASSEMBLED, shipped version).
- Its draft + GAPS section: ${OUT}/${it.id}.md
- The fact packs it must trace to: ${it.packs} (in ${R}/ , GAP-* in ${OUT}/).
- The ruleset: ${RULESET}. Gold exemplar (structure): ${GOLD} comparisonId 'asphalt-shingles-vs-metal-roofing'.

CHECK EVERY DIMENSION and flag findings:
- factualAccuracy / sourceAttribution: does EVERY hard number (cost, %, lifespan, mph, R-value, $/sqft) trace to a NAMED source that actually supports it IN A PACK? Flag over-attribution, wrong source, a number absent from all packs, or an NQR-self-derived figure presented as measured.
- currency: any outdated claim presented as current (esp. the federal solar ITC — must be gone/historical; the false NJ owner-occupied historic credit — must be gone; SREC-II qualitative).
- answerFirst: each .heading + introHeading + faqs[].question is a '?'-question with NO '**'; directAnswer + each content[0] + each faqs[].answer first sentence ≤40 words; R3 strict body↔lead bold (each body paragraph re-bolds a lead OPTION, in lead order); R4 heading↔answer mirroring; the answer NAMES the top-ranked option(s).
- modality: any will/should/need to/needs to/have to/has to/must/ought to/may/might (hedge) in BODY prose (not FAQ questions).
- defabHype: any de-fab literal (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, "thousands of installations", "15+ years", "we warranty/register"-as-stat) or hype (best/premier/leading/top recommendation/premium-as-praise, a RANKED brand "best warranty") anywhere.
- boldSafe: any '**' in a raw-rendered field (introHeading, any .heading, comparisonRows cells, faqs[].question, metaDescription).

SPECIFIC HUNT FOR THIS COMPARISON: ${it.hunt}

For each finding: id (F1,F2,…), severity (high=fabricated/wrong-fact/currency/gate-fail; med=weak attribution/answer-length/bold-order; low=style), dimension, field (e.g. njSpecific.content[0]), exact quote, issue, suggestedFix (before→after; RELOCATE facts to the body, never delete a real fact). Do not invent findings on a clean dimension. Return the structured object.`,
    { label: `review:${it.id}`, phase: 'Review', schema: REVIEW_SCHEMA },
  ),
  (review, it) => agent(
    `You are an adversarial REFUTER. A reviewer flagged findings on rewritten decision-helper comparison '${it.id}'. REFUTE weak/incorrect findings so only REAL problems survive. Confirm a finding ONLY when it is a genuine defect; reject (refute) false positives — e.g. the figure DOES trace to a pack line, the heading IS a valid question, the bold IS correct, naming the leading option on a SOURCED criterion is allowed (not hype), or a FAQ question's modality is exempt.

COMPARISON: ${it.id}
READ the same materials yourself: the object in ${SRC} (comparisonId '${it.id}'), the packs (${it.packs}; ${R}/ + ${OUT}/), the ${it.id}.md GAPS section, ${RULESET}. Verify figure-tracing against the packs directly — do not trust the reviewer.

REVIEWER FINDINGS (JSON):
${JSON.stringify(review?.findings ?? [], null, 2)}

Return: confirmedFindings = ONLY the surviving real defects, each with full detail (id, severity, dimension, field, exact quote, issue, the precise before→after fix, refuteReason citing the pack line/rule that confirms it). refutedIds = ids you rejected as false positives. If NOTHING survives, return confirmedFindings: [] and list all ids in refutedIds.`,
    { label: `refute:${it.id}`, phase: 'Refute', schema: REFUTE_SCHEMA },
  ),
)

const all = results.filter(Boolean)
const totalConfirmed = all.reduce((n, r) => n + (r.confirmedFindings?.length ?? 0), 0)
return {
  totalConfirmed,
  perComparison: all.map((r) => ({ id: r.comparisonId, confirmed: r.confirmedFindings?.length ?? 0, refuted: r.refutedIds?.length ?? 0 })),
  confirmed: all,
}
