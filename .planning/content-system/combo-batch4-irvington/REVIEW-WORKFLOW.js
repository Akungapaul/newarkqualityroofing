export const meta = {
  name: 'combo-batch4-irvington-review',
  description: 'Adversarial review + refute of the 65 Irvington combo rewrites (Combo Batch 4) by service-category cohort',
  phases: [
    { title: 'Review', detail: '9 cohort reviewers verify fabrication, source-attribution, Irvington facts, entity-grounding, cross-combo consistency' },
    { title: 'Refute', detail: 'adversarially refute each med/high finding before it is confirmed' },
  ],
}

// 9 category cohorts (serviceIds = file stems in src/data/combo-content/irvington/<id>.ts)
const COHORTS = [
  { name: 'repair-maintenance', packs: ['facts-causes-signs','facts-cost-stats','facts-process-standards','facts-nj-regulatory-climate'],
    combos: ['roof-repair','roof-replacement','emergency-roof-repair','roof-inspection','roof-maintenance-programs','roof-leak-repair','storm-damage-roof-repair','hail-damage-roof-repair','wind-damage-roof-repair','roof-cleaning-moss-removal'] },
  { name: 'residential-roof-types', packs: ['facts-materials-economics','facts-nj-regulatory-climate'],
    combos: ['asphalt-shingle-roofing','slate-roof-installation-repair','wood-shake-roofing','metal-roof-installation-repair','flat-roof-installation-repair','tile-roof-installation-repair','cedar-shake-roofing','rubber-roofing-epdm','residential-roof-installation'] },
  { name: 'commercial-roof-types', packs: ['facts-materials-economics','facts-process-standards','facts-nj-regulatory-climate'],
    combos: ['tpo-roofing-installation','epdm-commercial-roofing','modified-bitumen-roofing','built-up-roofing','commercial-metal-roofing','pvc-roofing','green-roof-installation','spray-foam-roofing'] },
  { name: 'commercial-services', packs: ['facts-process-standards','facts-cost-stats','facts-nj-regulatory-climate'],
    combos: ['commercial-roof-installation','commercial-roof-repair','commercial-roof-replacement','roof-thermal-imaging-inspections','infrared-roof-leak-detection'] },
  { name: 'components-specialty', packs: ['facts-components-specialty','facts-nj-regulatory-climate'],
    combos: ['roof-flashing-installation-repair','chimney-flashing-repair','gutter-installation-repair','gutter-guard-installation','skylight-installation-repair','fascia-installation-repair','soffit-installation-repair','roof-vent-installation-repair','roof-waterproofing','roof-deck-repair-replacement'] },
  { name: 'design-consultation', packs: ['facts-historic-restoration','facts-process-standards','facts-nj-regulatory-climate'],
    combos: ['custom-roof-design-consultation','historic-roof-restoration','roof-ice-dam-prevention'] },
  { name: 'energy-solar', packs: ['facts-energy-solar','facts-nj-regulatory-climate'],
    combos: ['solar-panel-roofing-installation','solar-shingle-installation','energy-efficient-roofing-solutions','silicone-roof-coating','silicone-elastomeric-roof-coating'] },
  { name: 'replacement-A', packs: ['facts-replacement-reroofing-insurance','facts-cost-stats','facts-nj-regulatory-climate'],
    combos: ['full-roof-tear-off','roof-overlay-installation','re-roofing','insurance-roof-replacement','storm-damage-roof-replacement','aging-roof-replacement','roof-replacement-after-leak','fire-damage-roof-replacement'] },
  { name: 'replacement-B', packs: ['facts-replacement-reroofing-insurance','facts-cost-stats','facts-nj-regulatory-climate'],
    combos: ['roof-replacement-cost','asphalt-shingle-roof-replacement','metal-roof-replacement','slate-roof-replacement','tile-roof-replacement','flat-roof-replacement','cedar-shake-roof-replacement'] },
]

const REVIEW_SCHEMA = {
  type: 'object',
  required: ['cohort', 'combosReviewed', 'findings'],
  properties: {
    cohort: { type: 'string' },
    combosReviewed: { type: 'number' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        required: ['combo', 'field', 'severity', 'category', 'issue', 'evidence', 'suggestedFix'],
        properties: {
          combo: { type: 'string', description: 'serviceId of the combo file' },
          field: { type: 'string', description: 'e.g. overview[2], challenges[1], faqs[3].answer, pricing.note' },
          severity: { type: 'string', enum: ['low', 'med', 'high'] },
          category: { type: 'string', enum: ['fabrication','source-attribution','irvington-fact','entity-grounding','modality','defab','answer-length','consistency','other'] },
          issue: { type: 'string' },
          evidence: { type: 'string', description: 'the exact offending text + the source/rule it violates' },
          suggestedFix: { type: 'string', description: 'concrete before→after' },
        },
      },
    },
  },
}

const REFUTE_SCHEMA = {
  type: 'object',
  required: ['combo', 'field', 'verdict', 'reasoning'],
  properties: {
    combo: { type: 'string' },
    field: { type: 'string' },
    verdict: { type: 'string', enum: ['confirmed', 'refuted'] },
    reasoning: { type: 'string' },
    finalFix: { type: 'string', description: 'the exact before→after edit to apply if confirmed' },
  },
}

function reviewPrompt(c) {
  const packs = c.packs.map(p => `.planning/content-system/research/${p}.md`).join(', ')
  const files = c.combos.map(s => `src/data/combo-content/irvington/${s}.ts`).join('\n  ')
  return `You are an adversarial content reviewer for the "${c.name}" cohort of the Irvington (Township of Irvington, NJ) service×city combo pages (a local-SEO roofing site). Verify factual accuracy, source attribution, Irvington geography, and entity-grounding against the fact packs. Be skeptical and precise; flag only genuine problems with a concrete fix.

READ FIRST (your ground truth):
- The ruleset: .planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md
- The Irvington author brief: .planning/content-system/combo-batch4-irvington/_IRVINGTON-BRIEF.md (esp. §0 ENTITY-GROUNDING + §C Irvington facts)
- The Irvington city fact bank: .planning/content-system/cities-batchA/CITY-FACTS-urban-core.md (the "Irvington" section, lines ~421-485, incl. the UNVERIFIED gaps list)
- The committed Irvington CITY page: src/data/city-content/urban-core.ts (cityId 'irvington') — verified Irvington geography/voice
- The fact packs for this cohort: ${packs}
- Gold voice/structure + ENTITY-GROUNDING exemplar: the committed src/data/combo-content/orange/roof-repair.ts (same answer-first + entity-grounded shape — but Orange's geography/COA DIFFER from Irvington's)

THEN review each combo file in your cohort:
  ${files}

CHECK every combo for:
1. FABRICATION — every hard number (cost, %, lifespan, mph, temperature, dimension, code section) must trace to a NAMED source in the packs. Flag invented figures, invented NQR self-stats, response-time claims, fabricated programs ("investment property program"/"portfolio pricing"), "closest contractor" superlatives, and any de-fab literal (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, manufacturer-certification claims).
2. IRVINGTON-FACT ACCURACY (the high-risk axis — Irvington ≠ Newark ≠ East Orange ≠ Orange):
   - Permit office = the "Township of Irvington's construction-code office" (Municipal Building, 1 Civic Square). Name it qualitatively; do NOT invent a fee schedule, a director, or an exact department name (the official name is UNVERIFIED — generic phrasing only).
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4.
   - Historic = **IRVINGTON HAS NO LOCAL HISTORIC-PRESERVATION ORDINANCE AND NO LOCALLY DESIGNATED DISTRICTS → NO COA.** FLAG AS FABRICATION: ANY Certificate of Appropriateness / HPC / historic-district / historic-commission gate asserted for Irvington; any Newark/Orange COA district imported. Irvington also carries NO National Register listings — flag any NRHP-listing claim. A historic angle should state plainly that Irvington imposes no COA.
   - Geography = **Irvington is a small (~2.9 sq mi), very densely settled inner-ring township SOUTHWEST of Newark; it has NO river, NO flood/waterfront, NO reservation.** FLAG AS FABRICATION: any river/Passaic/waterfront/tidal/flood-zone reference; any reservation/park-adjacency; any imported East Orange "flat Watsessing plain" framing OR Orange "Watchung-ridge" framing; any claim that I-78 bisects/runs-through the township (I-78 only passes BRIEFLY along the SOUTHEASTERN border at Exit 54). **Vailsburg is a NEWARK neighborhood on Irvington's eastern edge** — FLAG "Irvington's Vailsburg" or Vailsburg described as part of Irvington (correct framing: "near Newark's Vailsburg section").
   - Census = majority-renter / rental- and multi-family-heavy — QUALITATIVE ONLY. FLAG any published renter %, any 5+-unit %, any pre-1940/pre-1950 %, any median-year-built figure (all UNVERIFIED). Population ~61,176 (2020) is qualitative-only. BANNED: any city-specific urban-heat-island or wind degree/gust number; EPA heat-island framing is qualitative only (about 1–7°F).
   - Neighborhoods (verified ONLY): Springfield Avenue corridor (principal commercial corridor → Union County; UEZ around the Irvington Bus Terminal), Chancellor Avenue (former Olympic Park entrance), Union Avenue, Stuyvesant Avenue, Olympic Park (the amusement park operated 1887–1965, closed 1965 — HISTORY only, a colloquial neighborhood name), Upper Irvington, Irvington Center/CBD. FLAG invented neighborhood/street names not in this list (e.g. "Nestor Terrace").
3. ENTITY-GROUNDING (the Batch-4 requirement — check each):
   - directAnswer must be entity-grounded: "Newark Quality Roofing is a roofing contractor providing {service} across Irvington, New Jersey, and Essex County, …" with the credential tail "as a registered New Jersey Home Improvement Contractor." FLAG a directAnswer missing "roofing contractor", "Irvington, New Jersey", or the registered-HIC credential.
   - CREDENTIAL: NQR is "a registered New Jersey Home Improvement Contractor" / "fully insured". FLAG any NQR self-claim of "licensed and insured", "NJ licensed", or "licensed roofing contractor". (Third-party "licensed" cites are CORRECT and must be KEPT: licensed public adjuster/attorney per N.J.S.A. 17:22B, licensed Construction Official, licensed structural engineer, licensed asbestos abatement, "not licensed to remediate mold".)
   - The 'definition' field is the canonical service definition propagated verbatim — do NOT critique its content (out of scope).
4. SOURCE-ATTRIBUTION PRECISION (the recurring NQR defect — check each):
   - InterNACHI is a LIFESPAN/life-expectancy chart ONLY — re-pin seam-failure, reflectance, slope, wind-class, and install-cost claims to SPRI / Josten / NRCA / ASTM / the actual pack source, never InterNACHI.
   - ASTM C1153 backs wet-insulation DETECTION only (infrared); trapped-moisture/deck-rot causation = InterNACHI, not C1153.
   - NOAA backs only the ~31.5 in/yr snowfall; the 35–45 freeze-thaw cycle count is an UNVERIFIED regional estimate — must NOT be NOAA-attributed.
   - EPA 11–27% cool-roof figure = air-conditioned RESIDENTIAL peak-cooling demand (keep "residential" + "peak"), never an annual-bill %.
   - 50% repair-vs-replace rule = WeatherShield/Home Depot; 30% rule = Kellow/Modernize/Josten; 25%-area rule = RapidRestore (materials-economics §8) — flag mis-pairings.
   - Any repealed federal solar ITC must be HISTORICAL framing (P.L. 119-21); ENERGY STAR roof program is RETIRED → CRRC-1 (flag "listed by ENERGY STAR" as a current claim).
   - The N.J.A.C. 5:23-6.4 recover-material list should be the full statutory list (wood shake, slate, clay, cement, or asbestos-cement tile), not an abbreviated "wood, slate, or tile".
   - INSURANCE CLAIM DEADLINES: FLAG any invented statutory claim-deadline such as "30 days of discovery" or "a two-year statutory window for hurricane/named-storm losses per NJ DOBI" — NJ has no such statutory roofing claim deadline; the correct framing is the policy's own prompt-notice / proof-of-loss term (a ~60-day proof-of-loss policy term), and only a licensed public adjuster or attorney negotiates a claim per N.J.S.A. 17:22B.
5. MODALITY — no will/should/need-to/must/has-to/have-to in declarative sentences (FAQ questions exempt).
6. ANSWER-LENGTH — the directAnswer BOLD SPAN, the first string of overview/challenges/process, and each faq answer's first sentence should each be ≤40 words and definitive (the bold span, not the whole directAnswer sentence).
7. CROSS-COMBO CONSISTENCY within your cohort — the SAME fact must carry the SAME attribution and value across your combos (flag a stat attributed to source X in one combo and source Y in another).

Return structured findings. For each, give the exact field, severity, the offending evidence text, and a concrete before→after suggestedFix. If a combo is clean, do not invent findings. Prioritize high/med (fabrication, wrong Irvington fact, entity-grounding miss, wrong source); include low only when clearly correct to fix.`
}

function refutePrompt(f, cohortName) {
  return `You are an adversarial REFUTER on the "${cohortName}" Irvington combo review. A reviewer raised the finding below. Decide if it is REAL or a false positive, defaulting to skepticism of the FINDING (the original text is presumed defensible unless the finding proves otherwise). Verify against the fact packs and the Irvington fact bank.

FINDING:
- combo: ${f.combo}
- field: ${f.field}
- severity: ${f.severity}
- category: ${f.category}
- issue: ${f.issue}
- evidence: ${f.evidence}
- suggestedFix: ${f.suggestedFix}

Steps: READ the actual combo file src/data/combo-content/irvington/${f.combo}.ts at the cited field, plus the relevant fact pack(s) under .planning/content-system/research/ and the Irvington fact bank .planning/content-system/cities-batchA/CITY-FACTS-urban-core.md (Irvington section, lines ~421-485). Determine:
- Is the offending text actually present as described?
- Does it genuinely violate a named-source fact, an Irvington fact (esp. NO-COA / no-reservation / no-river-or-flood / Vailsburg-is-Newark / I-78-only-on-SE-edge / majority-renter-qualitative rules), an entity-grounding requirement (directAnswer form / registered-HIC-not-licensed), the ruleset, or cross-combo consistency? Check the GOLD exemplar — a phrasing that matches the committed Orange combo's answer-first/entity-grounded voice is NOT a defect, EXCEPT where it imports Orange's COA/geography. Third-party "licensed public adjuster/engineer/Construction Official" cites are CORRECT — refute any finding that flags them as NQR "licensed" misuse.
Return verdict "confirmed" only if the finding is a real, fixable problem; otherwise "refuted". If confirmed, give the exact before→after finalFix (preserve facts, relocate/re-attribute rather than delete).`
}

phase('Review')
log(`Reviewing 65 Irvington combos across ${COHORTS.length} category cohorts…`)

const perCohort = await pipeline(
  COHORTS,
  (c) => agent(reviewPrompt(c), { label: `review:${c.name}`, phase: 'Review', schema: REVIEW_SCHEMA }),
  (review, c) => {
    const toRefute = (review?.findings || []).filter(f => f.severity === 'med' || f.severity === 'high')
    const lowFindings = (review?.findings || []).filter(f => f.severity === 'low')
    if (!toRefute.length) return { cohort: c.name, confirmed: [], refuted: [], low: lowFindings }
    return parallel(toRefute.map(f => () =>
      agent(refutePrompt(f, c.name), { label: `refute:${f.combo}/${f.field}`, phase: 'Refute', schema: REFUTE_SCHEMA })
        .then(v => ({ ...f, ...v }))
    )).then(verdicts => {
      const vs = verdicts.filter(Boolean)
      return {
        cohort: c.name,
        confirmed: vs.filter(v => v.verdict === 'confirmed'),
        refuted: vs.filter(v => v.verdict === 'refuted'),
        low: lowFindings,
      }
    })
  }
)

const confirmed = perCohort.filter(Boolean).flatMap(r => r.confirmed || [])
const refuted = perCohort.filter(Boolean).flatMap(r => r.refuted || [])
const low = perCohort.filter(Boolean).flatMap(r => r.low || [])
log(`Review complete: ${confirmed.length} confirmed, ${refuted.length} refuted, ${low.length} low-advisory`)
return {
  confirmedCount: confirmed.length,
  refutedCount: refuted.length,
  lowCount: low.length,
  confirmed,
  low,
  byCohort: perCohort.filter(Boolean).map(r => ({ cohort: r.cohort, confirmed: (r.confirmed||[]).length, refuted: (r.refuted||[]).length, low: (r.low||[]).length })),
}
