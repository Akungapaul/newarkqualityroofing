export const meta = {
  name: 'cmp2-review',
  description: 'Adversarial review→refute of the 8 assembled CMP-2 comparisons (1 reviewer + 1 refuter each); returns confirmed findings with full detail',
  phases: [
    { title: 'Review', detail: '1 reviewer per comparison — flag findings across dimensions' },
    { title: 'Refute', detail: '1 refuter per comparison — confirm/reject + return confirmed findings' },
  ],
}

const REPO = '/Users/akungapaul/Projects/Newarkqualityroofing'
const OUT = `${REPO}/.planning/content-system/comparisons-batch2`
const SRC = `${REPO}/src/data/comparison-content/material-vs-material.ts`
const RULESET = `${REPO}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md`
const R = `${REPO}/.planning/content-system/research`

const ITEMS = [
  { id: 'modified-bitumen-vs-tpo', packs: 'facts-materials-economics.md §4/§6/§7, facts-energy-solar.md §0.3–0.4/§0.1', hunt: 'Any invented energy-$ savings (annual or lifetime) must be GONE — only EPA 11–27% peak-cooling-demand framing is allowed. Verify mod-bit 20yr / TPO 7–20 or 15–25yr trace to InterNACHI/practice. No "NJ Clean Energy rebate" dollar amount. No weld-temperature unless sourced. No modality.' },
  { id: 'rubber-roofing-vs-tpo', packs: 'facts-materials-economics.md §4/§7, facts-energy-solar.md §0.3–0.4', hunt: 'Invented energy-$ figures GONE. Verify EPDM 15–25 (InterNACHI) / 25–30 (practice), seam-separation vs welded-seam failure modes trace to §4. "reflects 80%+/absorbs 90%+/-40°F/900°F" only if sourced. No modality.' },
  { id: 'cedar-shake-vs-wood-shingle', packs: 'facts-materials-economics.md §5/§5b/§0/§7, facts-historic-restoration.md', hunt: 'Cost ranges + 30–40/25–30yr lifespans must trace to a pack (InterNACHI/CSSB) or be qualitative — no unsourced hard $-range. CSSB formal grade names OK; NO hype ("premium" as praise, "best"). Historic COA framing must match facts-historic-restoration (Register listing alone ≠ reroof bar; municipal HPC COA is the gate in a designated local district). Red cedar copper-nail caution correct. No modality.' },
  { id: 'built-up-roofing-vs-modified-bitumen', packs: 'facts-materials-economics.md §4/§6/§7', hunt: 'Invented $ figures GONE ("$0.50–$1.50/sqft cheaper", "$10,000–$30,000 savings"). BUR 30yr/mod-bit 20yr trace to InterNACHI. SBS/APP + 3–5 ply redundancy attributed to NRCA/industry. "FM Global approvals" only if sourced. No modality.' },
  { id: 'spray-foam-vs-tpo', packs: 'facts-materials-economics.md §6/§4/§7, facts-energy-solar.md §0.3–0.5', hunt: 'SPF R-value must be R-6.0–6.5/inch (NOT a flat R-6.5). "$5,000–$10,000 annually" GONE. NJ energy-code numbers (R-30/R-60/"5 inches") only if sourced to §0.5 — else qualitative. Recoat $1.50–$3/sqft only if SPFA-sourced. Foam 30+yr coated / recoat 10–20yr trace to §6. No modality.' },
  { id: 'green-roof-vs-traditional-roofing', packs: 'GAP-green-roof.md (primary), facts-materials-economics.md §0/§4, facts-energy-solar.md §0', hunt: 'Retention % must match GAP pack (extensive ~50–60% annual, up to ~100% warm-season, peak-flow up to ~65% GSA) — NOT a flat "50–90%". Dead loads must match GSA ASTM-E2397 (extensive ~20 / semi-intensive ~42 lb/ft²) or cited planning ranges. Membrane-longevity "40–60yr/doubles" framed as GSA model-assumption/industry-attributed, NOT proven. NJ honesty gate: green roof = runoff-QUANTITY credit only, NOT recharge/quality (N.J.A.C. 7:8 / NJ BMP Manual). NO invented $/yr energy savings. Structural-engineer + fire-setback cited. No modality.' },
  { id: 'solar-shingles-vs-solar-panels', packs: 'facts-energy-solar.md (§0.2 ITC repeal, §0.6, §0.7 SREC-II qualitative, solar-shingle section, net metering)', hunt: 'CRITICAL: the "30% federal ITC" must be GONE or strictly historical ("30% for systems completed through 2025, per the IRS") — NEVER touted as a current 2026 credit. SREC-II value QUALITATIVE (no $85–90/MWh, no "$300–600/yr"). No invented payback years or $/kWh. Efficiency 14–18% vs 20–22% + ~1.5–2× $/W trace to the solar-shingle section. Solar panels NOT claimed to "extend roof life". No NABCEP/installer cert claim. No modality.' },
  { id: 'architectural-vs-3-tab-shingles', packs: 'GAP-architectural-3tab.md (primary), facts-materials-economics.md §0/§1/§7, facts-nj-regulatory-climate.md', hunt: 'ZERO of: "GAF Certified", "thousands of installations", any brand as "best/top recommendation", "$1,500–$5,000 premium", "best value-per-dollar". Wind must be brand-neutral ASTM D3161 (60/90/110) / D7158 classes — if D7158 mph cited, use CURRENT ultimate set (115/150/190) not legacy, and do not mix sets. "~80% architectural" attributed to "industry analysts" NOT ARMA. Cost = Josten NJ $/sqft ranges, not a flat premium. Lifespans InterNACHI. ASCE 7-16 ~110–115 mph + N.J.A.C. 5:23-2.7. No modality.' },
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
    `You are an adversarial content reviewer for Newark Quality Roofing. Review ONE rewritten comparison object for factual/sourcing/answer-first/style defects. Be skeptical and specific; quote exact text.

COMPARISON: ${it.id}

READ:
- The rewritten object: ${SRC} (find comparisonId '${it.id}' — the ASSEMBLED, shipped version).
- Its draft + GAPS section: ${OUT}/${it.id}.md
- The fact packs it must trace to: ${it.packs} (in ${R}/ , GAP-* in ${OUT}/).
- The ruleset: ${RULESET}. Gold exemplar: ${SRC} comparisonId 'asphalt-shingles-vs-metal-roofing'.

CHECK EVERY DIMENSION and flag findings:
- factualAccuracy / sourceAttribution: does EVERY hard number (cost, %, lifespan, mph, lb, R-value) trace to a NAMED source that actually supports it IN A PACK? Flag over-attribution (a figure pinned to a source that does not state it), wrong source, or a number absent from all packs.
- currency: any outdated claim presented as current (esp. the federal solar ITC — must be gone/historical; SREC-II must be qualitative).
- answerFirst: each .heading + introHeading + faqs[].question is a '?'-question with NO '**'; directAnswer + each content[0] + each faqs[].answer first sentence ≤40 words; R3 strict body↔lead bold (each body paragraph opens by re-bolding a lead topic, in lead order); R4 heading↔answer mirroring.
- modality: any will/should/need to/needs to/have to/has to/must/ought to/may/might (hedge) in BODY prose (not FAQ questions).
- defabHype: any de-fab literal (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+ counts) or hype (best/premier/leading/top recommendation/premium-as-praise) anywhere.
- boldSafe: any '**' in a raw-rendered field (introHeading, any .heading, comparisonRows cells, faqs[].question, metaDescription).

SPECIFIC HUNT FOR THIS COMPARISON: ${it.hunt}

For each finding: id (F1,F2,…), severity (high=fabricated/wrong-fact/currency/gate-fail; med=weak attribution/answer-length/bold-order; low=style), dimension, field (e.g. njSpecific.content[0]), exact quote, issue, suggestedFix (before→after; RELOCATE facts to the body, never delete a real fact). Do not invent findings on a clean dimension. Return the structured object.`,
    { label: `review:${it.id}`, phase: 'Review', schema: REVIEW_SCHEMA },
  ),
  (review, it) => agent(
    `You are an adversarial REFUTER. A reviewer flagged findings on rewritten comparison '${it.id}'. REFUTE weak/incorrect findings so only REAL problems survive. Confirm a finding ONLY when it is a genuine defect; reject (refute) false positives — e.g. the figure DOES trace to a pack line, the heading IS a valid question, the bold IS correct, a denotative price-"premium" noun or formal CSSB grade name was mis-flagged as hype, or a FAQ question's modality is exempt.

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
