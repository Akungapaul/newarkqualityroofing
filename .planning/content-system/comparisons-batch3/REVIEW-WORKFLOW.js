export const meta = {
  name: 'cmp3-review',
  description: 'Adversarial review→refute of the 6 assembled CMP-3 service-vs-service comparisons (1 reviewer + 1 refuter each); returns confirmed findings with full detail',
  phases: [
    { title: 'Review', detail: '1 reviewer per comparison — flag findings across dimensions' },
    { title: 'Refute', detail: '1 refuter per comparison — confirm/reject + return confirmed findings' },
  ],
}

const REPO = '/Users/akungapaul/Projects/Newarkqualityroofing'
const OUT = `${REPO}/.planning/content-system/comparisons-batch3`
const SRC = `${REPO}/src/data/comparison-content/service-vs-service.ts`
const GOLD = `${REPO}/src/data/comparison-content/material-vs-material.ts`
const RULESET = `${REPO}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md`
const R = `${REPO}/.planning/content-system/research`

const ITEMS = [
  { id: 'roof-repair-vs-replacement', packs: 'facts-cost-stats.md §5/§7/§4, facts-materials-economics.md §0/§7, facts-replacement-reroofing-insurance.md, facts-nj-regulatory-climate.md', hunt: 'The "30% rule" / "50% rule" must be attributed to industry consensus (facts-cost-stats §5), NOT presented as NQR\'s own hard standard. Resale recoup must be ~61% (Zonda) or 60–68% national (Zillow via Opendoor) — NOT "60–70%" unsourced. Cost cells trace to a pack (Angi repair $360–$1,550 / HomeAdvisor avg $1,174 / NJ replacement $10,000–$25,000) — flag any unsourced "$8,500" / "$15,000–$35,000 metal". Insurance claims must carry NO guaranteed-approval / deductible-waiver / "free roof" (N.J.S.A. 17:22B). NO NQR self-stats ("we evaluate dozens of roofs every week"). No modality. Question-form headings.' },
  { id: 'roof-coating-vs-replacement', packs: 'facts-materials-economics.md §6/§4/§7, facts-energy-solar.md §0.3–0.4/§0.1, facts-components-specialty.md, facts-nj-regulatory-climate.md', hunt: 'Invented energy figures GONE: NO "15–25% cooling reduction", NO "$1,500–$3,000 annual savings". Cooling claim = EPA 11–27% PEAK-COOLING-DEMAND only + reflectance/emittance (CRRC/DOE) + NJ Zone 4A–5 winter caveat; coatings add NO R-value. Coating cost must trace to the pack ($1.20–$2.70/sqft repaint or $1,500–$7,000 per CPS) — flag unsourced "$3–$6/sq ft". Silicone ponding via ASTM D6694. Coating-eligibility gate intact (dry insulation via infrared/core). NO "we evaluate every week". No modality. Question-form headings.' },
  { id: 'roof-overlay-vs-tear-off', packs: 'facts-replacement-reroofing-insurance.md (primary), facts-components-specialty.md, facts-nj-regulatory-climate.md §3.1, facts-materials-economics.md §7', hunt: 'ZERO GAF brand mentions (the 2 old FAQ lines "GAF offers reduced warranty" / "installation per GAF specifications" must be brand-neutral). NO "thousands of re-roofing projects". NO self-attributed "we find damaged decking on roughly 30%" — must be qualitative + IRC R908 (no recover over unsound deck). Snowfall must be ~31.5" (NOAA 1991–2020), NOT "28 inches". Second-layer weight ~2–4.5 lb/sq ft (≈200–450 lb/square) traced to the replacement pack. 2-layer limit = IRC R908.3.1 / N.J.A.C. 5:23-6.4. No modality ("prudent" = opinion). Question-form headings.' },
  { id: 'patching-vs-full-roof-repair', packs: 'facts-materials-economics.md §0/§7, facts-process-standards.md, facts-causes-signs.md, facts-components-specialty.md, facts-nj-regulatory-climate.md', hunt: 'NO invented "addresses 2–5 issues per visit" count, NO "saves 30–50% versus individual patch calls" %. Costs trace to a pack (patch $150–$500; comprehensive repair $360–$1,550 Angi / avg $1,174 HomeAdvisor). NO NQR self-anecdote-as-stat. Thermal/moisture diagnostics = ASTM C1153. flashing "90–95%" stays NRCA-attributed industry estimate (KEEP if matches gold-exemplar usage). No modality. Question-form headings.' },
  { id: 'preventive-maintenance-vs-emergency-repair', packs: 'GAP-service-decisions.md §3/§4 (GOVERNS), facts-cost-stats.md §37, facts-materials-economics.md §100, facts-process-standards.md §50–52', hunt: 'CRITICAL per GAP pack: the "$1 saves $3–$5" ratio must be GONE (not reframed as a ratio, not replaced by DOE/FEMP 12–18% as a ratio). Emergency markup must be 25–50% MORE (facts-cost-stats §37) — NOT "2–5x" or "50–100% markup". NO "catches 95% of problems". NO "$250–$600/year" (→ Angi $249 avg / $75–$400 as-of-2026 or free-inspection). NO "extends lifespan 5–10 years" NRCA claim; any "21 vs 13 yr" figure MUST be labeled commercial (Roofing Contractor 2009), never NRCA. NRCA 2×/yr+post-storm cadence anchors the recommendation. NO "hundreds of projects". No modality. Question-form headings.' },
  { id: 'diy-vs-professional-roof-repair', packs: 'GAP-service-decisions.md §1/§2/§4 (GOVERNS), facts-nj-regulatory-climate.md §2, facts-materials-economics.md §0/§7, facts-process-standards.md', hunt: 'CRITICAL per GAP pack: fall-safety must LEAD with consumer ladder data (D\'Souza ~136,000/yr, 97.3% non-occupational, framed qualitatively); BLS 421/64.4% 6–30ft is worker data ONLY as a labeled contrast. NEVER "NJ OSHA" — federal OSHA binds employers (29 CFR 1926.501/.502); homeowner-on-own-home outside OSHA jurisdiction; PEOSH = public employees only. HIC: registration required for ALL home-improvement businesses with NO dollar floor (N.J.S.A. 56:8-136), it is a REGISTRATION not a "license"; $500 = written-contract trigger (N.J.A.C. 13:45A-16.2), NOT a registration threshold; homeowner exempt (N.J.S.A. 56:8-140), permits/UCC "may apply". NO "we repair DIY attempts regularly" self-stat. Costs trace to a pack. No modality ("should be left to professionals" → indicative). Question-form headings.' },
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
- The ruleset: ${RULESET}. Gold exemplar: ${GOLD} comparisonId 'asphalt-shingles-vs-metal-roofing'.

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
