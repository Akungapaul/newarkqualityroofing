export const meta = {
  name: 'combo-batch8-review',
  description: 'Adversarial review + refute of the 130 Maplewood + South Orange combo rewrites (Combo Batch 8) by city × service-category cohort',
  phases: [
    { title: 'Review', detail: '18 cohort reviewers (9 per city) verify fabrication, source-attribution, city facts, entity-grounding, cross-combo consistency' },
    { title: 'Refute', detail: 'adversarially refute each med/high finding before it is confirmed' },
  ],
}

// 9 category cohort templates (serviceIds = file stems in src/data/combo-content/<city>/<id>.ts)
const COHORT_TEMPLATES = [
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

const CITY = {
  'maplewood': {
    name: 'Maplewood', cityId: 'maplewood', briefDir: 'maplewood', brief: '_MAPLEWOOD-BRIEF.md',
    facts: `- Permit office = the "Township of Maplewood Construction Division" at 574 Valley Street (complete application decided within 20 business days). Do NOT invent a fee schedule, a director, or a Construction Official's name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **CONDITIONAL / FRAMEWORK-ONLY COA** (the KEY difference from South Orange's binding gate). Maplewood HAS a Historic Preservation Commission + an Article VIII ordinance, so the COA mechanism EXISTS for locally designated properties — BUT the Maplewood Village Historic District is NATIONAL-REGISTER-ONLY (no local COA) and NO active locally designated district is confirmed. FLAG: (a) any claim that Maplewood Village (or any specific Maplewood neighborhood) currently REQUIRES a COA — it does not; the correct framing is conditional ("exterior roofing on a property in a LOCALLY designated Maplewood district or landmark falls under a township COA — confirm current local designation with the Township"); (b) importing South Orange's Montrose Park / Village Code Chapter 185, Bloomfield's Chapter 302, Nutley's Chapter 410, or Orange's four districts. Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = the South Mountain Reservation reaches INTO Maplewood's wooded WESTERN/northwestern edge (partial containment; "roughly 2,100 acres in portions of Maplewood, Millburn, and West Orange," per Essex County Parks). FLAG: the "2,110-acre" figure (use ~2,100); fabricated streets (Ridgewood Road, Rutgers Street, Crestwood Drive, Prospect Street); a "40–60% storm-spike" stat; a "2–4 hour" emergency-tarp response; "enhanced storm-response protocols / pre-position tarps"; named slate-quarry inventory ("Vermont Unfading Green / Pennsylvania Black / Buckingham Virginia in standard repair sizes"); "Maplewood's Construction Department" (use the Township of Maplewood Construction Division). FLAG importing South Orange's Seton Hall / SOPAC / "8,000 trees across 181 streets" / "reservation on the Reservation's EASTERN edge".
   - Census = 74.9% owner-occupied across ~9,051 housing units, per the U.S. Census Bureau, IS published on the committed city page — KEEP it where named-sourced. FLAG any population integer or any pre-1940/pre-1950 % (UNVERIFIED).
   - Neighborhoods (verified ONLY): Maplewood Village, Jefferson, Hilton, Tuscan, Wyoming, Memorial Park (+ Springfield Avenue as the commercial corridor). FLAG any invented street/section not in this list. Stock = architect-designed early-20th-century Tudor/Colonial Revival/Italian Revival homes + Village/Springfield-Avenue storefronts.`,
  },
  'south-orange': {
    name: 'South Orange', cityId: 'south-orange', briefDir: 'south-orange', brief: '_SOUTH-ORANGE-BRIEF.md',
    facts: `- Permit office = the "Township of South Orange Village Building Department" at 76 South Orange Avenue (plan review within 20 business days). Do NOT invent a fee schedule, a director, or a Construction Official's name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **BINDING LOCAL COA under Village Code Chapter 185** (the KEY difference from Maplewood's framework-only posture). The Montrose Park Historic District (~550 homes) is a LOCALLY designated COA district — exterior roofing on a designated property requires a Certificate of Appropriateness from the South Orange Historic Preservation Commission, separate from the construction permit. FLAG: (a) any "because it's on the National Register" COA framing (it is a LOCAL-ordinance Chapter 185 matter); (b) any "Village-wide" COA claim (only Montrose Park + designated local landmarks); (c) a COA asserted for the Register-only Old Main DL&W or Prospect Street listings; (d) importing Maplewood's framework-only framing, Bloomfield's Chapter 302, Nutley's Chapter 410, or Orange's four districts; (e) the COA-FAQ first sentence running >40 words (must be SPLIT). Per the NPS, a National Register listing alone places no federal restriction on a private owner.
   - Geography = South Orange borders the South Mountain Reservation on the Reservation's EASTERN edge (wooded ridgeline along the WESTERN boundary, per Essex County Parks); the East Branch of the Rahway River runs through the village (qualitative drainage only). FLAG: importing Maplewood's "reservation reaches INTO the western edge / partial containment / 2,100-acre" framing or its "574 Valley Street / Maplewood Village / Springfield Avenue" anchors; fabricated streets not on the verified list; a "2–4 hour" response or storm-spike % claim.
   - Census = "over half the housing stock predates 1940 and 82% predates 1960," per the Township planning evaluation, is the ONLY sourced housing-age figure — KEEP it where used. The "over 8,000 shade trees across 181 Village streets," per the Township Fast Facts, is South-Orange-specific — KEEP it. FLAG any population integer or a median-year-built figure.
   - Neighborhoods (verified ONLY): Montrose Park, Upper Wyoming and Lower Wyoming, Newstead, Tuxedo Park, Academy Heights, Seton Village, Village Center and SOPAC, South Mountain. FLAG any invented street/section not in this list. Stock = large pre-war Victorians/Colonial Revivals/Tudor Revivals + Colonials/Capes; Seton Hall University's 58-acre campus + SOPAC + the NJ Transit Village center carry the institutional/commercial low-slope inventory.`,
  },
}

// expand to 18 cohorts (9 per city)
const COHORTS = []
for (const city of ['maplewood', 'south-orange'])
  for (const t of COHORT_TEMPLATES) COHORTS.push({ ...t, city, name: `${city}:${t.name}` })

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
          category: { type: 'string', enum: ['fabrication','source-attribution','city-fact','entity-grounding','modality','defab','answer-length','consistency','other'] },
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

const SHARED_ATTR = `4. SOURCE-ATTRIBUTION PRECISION (the recurring NQR defect — check each):
   - InterNACHI is a LIFESPAN/life-expectancy chart ONLY — re-pin seam-failure, reflectance, slope, wind-class, and install-cost claims to SPRI / Josten / NRCA / ASTM / the actual pack source, never InterNACHI.
   - ASTM C1153 backs wet-insulation DETECTION only (infrared); trapped-moisture/deck-rot causation = InterNACHI, not C1153.
   - NOAA backs only the ~31.5 in/yr snowfall; the 35–45 freeze-thaw cycle count is an UNVERIFIED regional estimate — must NOT be NOAA-attributed.
   - EPA 11–27% cool-roof figure = air-conditioned RESIDENTIAL peak-cooling demand (keep "residential" + "peak"), never an annual-bill %.
   - 50% repair-vs-replace rule = WeatherShield/Home Depot; 30% rule = Kellow/Modernize/Josten; 25%-area rule = RapidRestore (materials-economics §8) — flag mis-pairings.
   - Any repealed federal solar ITC must be HISTORICAL framing (P.L. 119-21); ENERGY STAR roof program is RETIRED → CRRC-1 (flag "listed by ENERGY STAR" as a current claim).
   - The N.J.A.C. 5:23-6.4 recover-material list should be the full statutory list (wood shake, slate, clay, cement, or asbestos-cement tile), not an abbreviated "wood, slate, or tile".
   - Any banned NRCA "extends roof life by up to 25%" ventilation figure → flag (gold combos dropped it; keep the qualitative point).
   - Any RICOWI "2–3× field pressure" wind-uplift multiplier → flag (fabricated; gold combos carry none).
   - INSURANCE CLAIM DEADLINES: FLAG any invented statutory claim-deadline ("30 days of discovery" / "two-year statutory window per NJ DOBI") — NJ has no such statutory roofing claim deadline; the correct framing is the policy's own proof-of-loss term (a ~60-day proof-of-loss policy term per United Policyholders/NAIC), and only a licensed public adjuster or attorney negotiates a claim per N.J.S.A. 17:22B.
5. MODALITY — no will/should/need-to/must/has-to/have-to in declarative sentences (FAQ questions exempt).
6. ANSWER-LENGTH — the directAnswer BOLD SPAN, the first string of overview/challenges/process, and each faq answer's first sentence should each be ≤40 words and definitive (the bold span, not the whole directAnswer sentence).
7. CROSS-COMBO CONSISTENCY within your cohort — the SAME fact must carry the SAME attribution and value across your combos (flag a stat attributed to source X in one combo and source Y in another).`

function reviewPrompt(c) {
  const ci = CITY[c.city]
  const packs = c.packs.map(p => `.planning/content-system/research/${p}.md`).join(', ')
  const files = c.combos.map(s => `src/data/combo-content/${c.city}/${s}.ts`).join('\n  ')
  return `You are an adversarial content reviewer for the "${c.name}" cohort of the ${ci.name} (Essex County, NJ) service×city combo pages (a local-SEO roofing site). Verify factual accuracy, source attribution, ${ci.name} geography, and entity-grounding against the fact packs. Be skeptical and precise; flag only genuine problems with a concrete fix.

READ FIRST (your ground truth):
- The ruleset: .planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md
- The ${ci.name} author brief: .planning/content-system/combo-batch8-maplewood-southorange/${ci.briefDir}/${ci.brief} (esp. §0 ENTITY-GROUNDING + §C ${ci.name} facts + §F differentiation)
- The first-suburbs city fact bank: .planning/content-system/cities-batchB/CITY-FACTS-first-suburbs.md (the §0–§5 GLOBAL CORRECTIONS + the "${ci.name}" section, incl. the UNVERIFIED gaps)
- The committed ${ci.name} CITY page: src/data/city-content/first-suburbs.ts (cityId '${ci.cityId}') — verified ${ci.name} geography/voice
- The fact packs for this cohort: ${packs}
- Gold voice/structure + ENTITY-GROUNDING exemplar: the committed src/data/combo-content/orange/roof-repair.ts (same answer-first + entity-grounded shape — but Orange's geography/COA DIFFER from ${ci.name}'s)

THEN review each combo file in your cohort:
  ${files}

CHECK every combo for:
1. FABRICATION — every hard number (cost, %, lifespan, mph, temperature, dimension, code section) must trace to a NAMED source in the packs. Flag invented figures, invented NQR self-stats, response-time claims, fabricated programs ("investment property program"/"portfolio pricing"), "closest contractor" superlatives, manufacturer brands as NQR credentials ("Premium materials from GAF/CertainTeed/Owens Corning"), and any de-fab literal (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, manufacturer-certification claims).
2. ${ci.name.toUpperCase()}-FACT ACCURACY (the high-risk axis — ${ci.name} ≠ the other 8 rewritten cities; and ${ci.name} ≠ its batch-8 sibling):
   ${ci.facts}
3. ENTITY-GROUNDING (the requirement — check each):
   - directAnswer must be entity-grounded: "Newark Quality Roofing is a roofing contractor providing {service} across ${ci.name}, New Jersey, and Essex County, …" with the credential tail "as a registered New Jersey Home Improvement Contractor." FLAG a directAnswer missing "roofing contractor", "${ci.name}, New Jersey", or the registered-HIC credential.
   - CREDENTIAL: NQR is "a registered New Jersey Home Improvement Contractor" / "fully insured". FLAG any NQR self-claim of "licensed and insured", "NJ licensed", or "licensed roofing contractor". (Third-party "licensed" cites are CORRECT and must be KEPT: licensed public adjuster/attorney per N.J.S.A. 17:22B, licensed Construction Official, licensed structural engineer, licensed asbestos abatement, "not licensed to remediate mold".)
   - The 'definition' field is the canonical service definition propagated verbatim — do NOT critique its content (out of scope).
${SHARED_ATTR}

Return structured findings. For each, give the exact field, severity, the offending evidence text, and a concrete before→after suggestedFix. If a combo is clean, do not invent findings. Prioritize high/med (fabrication, wrong ${ci.name} fact, entity-grounding miss, wrong source); include low only when clearly correct to fix.`
}

function refutePrompt(f, cohortName, city) {
  const ci = CITY[city]
  return `You are an adversarial REFUTER on the "${cohortName}" ${ci.name} combo review. A reviewer raised the finding below. Decide if it is REAL or a false positive, defaulting to skepticism of the FINDING (the original text is presumed defensible unless the finding proves otherwise). Verify against the fact packs and the first-suburbs fact bank.

FINDING:
- combo: ${f.combo}
- field: ${f.field}
- severity: ${f.severity}
- category: ${f.category}
- issue: ${f.issue}
- evidence: ${f.evidence}
- suggestedFix: ${f.suggestedFix}

Steps: READ the actual combo file src/data/combo-content/${city}/${f.combo}.ts at the cited field, plus the relevant fact pack(s) under .planning/content-system/research/ and the first-suburbs fact bank .planning/content-system/cities-batchB/CITY-FACTS-first-suburbs.md (§0–§5 + the "${ci.name}" section). Determine:
- Is the offending text actually present as described?
- Does it genuinely violate a named-source fact, a ${ci.name} fact (esp. the COA posture — ${city === 'maplewood' ? 'CONDITIONAL/FRAMEWORK-ONLY, Maplewood Village is Register-only, NO active local district' : 'BINDING Village Code Chapter 185 Montrose Park COA, local-ordinance not Register, NOT Village-wide'} — and the reservation-edge / verified-neighborhoods-only / housing-age rules), an entity-grounding requirement (directAnswer form / registered-HIC-not-licensed), the ruleset, or cross-combo consistency? Check the GOLD exemplar — a phrasing that matches the committed Orange combo's answer-first/entity-grounded voice is NOT a defect, EXCEPT where it imports Orange's COA/geography or the OTHER batch-8 city's anchors. Third-party "licensed public adjuster/engineer/Construction Official" cites are CORRECT — refute any finding that flags them as NQR "licensed" misuse.
Return verdict "confirmed" only if the finding is a real, fixable problem; otherwise "refuted". If confirmed, give the exact before→after finalFix (preserve facts, relocate/re-attribute rather than delete).`
}

phase('Review')
log(`Reviewing 130 combos across ${COHORTS.length} cohorts (9 per city)…`)

const perCohort = await pipeline(
  COHORTS,
  (c) => agent(reviewPrompt(c), { label: `review:${c.name}`, phase: 'Review', schema: REVIEW_SCHEMA }),
  (review, c) => {
    const toRefute = (review?.findings || []).filter(f => f.severity === 'med' || f.severity === 'high')
    const lowFindings = (review?.findings || []).filter(f => f.severity === 'low').map(f => ({ ...f, city: c.city }))
    if (!toRefute.length) return { cohort: c.name, city: c.city, confirmed: [], refuted: [], low: lowFindings }
    return parallel(toRefute.map(f => () =>
      agent(refutePrompt(f, c.name, c.city), { label: `refute:${c.city}/${f.combo}/${f.field}`, phase: 'Refute', schema: REFUTE_SCHEMA })
        .then(v => ({ ...f, ...v, city: c.city }))
    )).then(verdicts => {
      const vs = verdicts.filter(Boolean)
      return {
        cohort: c.name, city: c.city,
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
