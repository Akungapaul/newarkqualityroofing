export const meta = {
  name: 'combo-batch11-review',
  description: 'Adversarial review + refute of the affluent-suburban combo rewrites (Combo Batch 11: livingston, millburn) by city × service-category cohort; run per-city via args=["<city>"] for review waves',
  phases: [
    { title: 'Review', detail: '9 cohort reviewers per city verify fabrication, source-attribution, city facts, entity-grounding, cross-combo consistency' },
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
  'livingston': {
    name: 'Livingston', cityId: 'livingston', briefDir: 'livingston', brief: '_LIVINGSTON-BRIEF.md',
    facts: `- Permit office = the "Township of Livingston Building Department" at 357 South Livingston Avenue. Do NOT invent a fee schedule, a director, or a Construction Official's name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached (HIGHLY relevant to Livingston's large Route 10 / Eisenhower Parkway / Cooperman Barnabas commercial stock); recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **NO binding local COA.** Livingston has designated NO local historic district or landmark requiring a Certificate of Appropriateness, so a homeowner reroof needs NO historic-board approval; the Master Plan only RECOMMENDS considering preservation, and code §170-3 + the ~38 Master-Plan-identified "historic sites" are planning IDs, not gates. The Force Homestead (South Livingston Ave; township-owned, Register-listed museum closed since 2023 for restoration) is NOT a homeowner COA gate. FLAG: (a) ANY binding-COA assertion for Livingston; (b) the Force Homestead treated as a homeowner gate; (c) importing Millburn's Wyoming/Short-Hills-Park COA. Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = Livingston is a large (~13.8 sq mi) residential township in western Essex County; it does NOT contain or border the South Mountain Reservation (that is Millburn); its open space is West Essex Park (~1,360 ac Essex County Passaic-River wetlands greenway on the western edge), Riker Hill Art Park (42 ac, a former Nike radar base, per Essex County Parks), and Becker Park; the Passaic River + Willow Brook run along the western/low-lying EDGE only (a localized FEMA Special Flood Hazard Area per the FEMA Flood Insurance Study for Essex County + the Essex County Multi-Jurisdictional Hazard Mitigation Plan). FLAG: any South Mountain Reservation attribution; any Walter Kidde Dinosaur Park / Riker Hill Fossil Site attribution (that is ROSELAND, not Livingston); any township-wide or basement-flood claim; any city-specific elevation/gust/snow number beyond the shared NOAA EWR baseline.
   - Census = ~88.9% owner-occupied (10,719 units); frame population/area QUALITATIVELY. FLAG any published population/area integer used as prose; FLAG the top-coded median-income or median-home-value literals.
   - Neighborhoods (verified ONLY): Riker Hill, Collins and Burnet Hill, Hillside, Broadlawn, Bel Air, Laurel Hills and Chestnut Hill, the Livingston Town Center / Livingston Mall area, the Route 10 / Eisenhower Parkway commercial corridors, the South Livingston Avenue town center, Cooperman Barnabas Medical Center (formerly Saint Barnabas). FLAG the fabricated names Heritage Hills / Beaumont Terrace / Westminster / Northland / Collins Terrace / West Hills.`,
  },
  'millburn': {
    name: 'Millburn', cityId: 'millburn', briefDir: 'millburn', brief: '_MILLBURN-BRIEF.md',
    facts: `- Permit office = the "Township of Millburn Building Department" (the committed city page prints NO street address — do NOT invent one). Do NOT invent a fee schedule, a director, or a Construction Official's name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached (the downtown Millburn village + Mall at Short Hills commercial stock); recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **BINDING but NARROW COA.** Millburn HAS a binding HPC + ordinance (the Township of Millburn Historic Preservation ordinance, Article 8, enabled by MLUL N.J.S.A. 40:55D-107) issuing a Certificate of Appropriateness before permit-triggering roof work, BUT only on an individually designated landmark OR inside the locally designated Wyoming or Short Hills Park historic district — NOT township-wide; most Millburn/Short Hills homes need no HPC review; a 1–2 family reroof stays N.J.A.C. 5:23-2.7 ordinary maintenance even where a COA applies; the COA is separate from the building permit. Short Hills Village = recently-designated/pending third district ("checked against current designation status"). FLAG: (a) any TOWNSHIP-WIDE COA claim; (b) the Paper Mill Playhouse or Cora Hartshorn Arboretum treated as homeowner COA gates; (c) a COA asserted "because of National Register listing." Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = Millburn (incl. the Short Hills section) is an affluent ~9.33-sq-mi township in SW Essex County that ABUTS the South Mountain Reservation (~2,112 ac, between the First and Second Watchung ridges, per Essex County Parks) — South Mountain is MILLBURN's, never Livingston's; the downtown Millburn village sits on the Rahway River and has flash-flooded (Floyd 1999, Irene 2011, Ida 2021) — a DOWNTOWN low-slope COMMERCIAL drainage stressor ONLY. FLAG: any West Essex Park / Riker Hill / Passaic-River feature attributed to Millburn (those are Livingston); any basement/interior or township-wide Rahway flood claim; "the East Branch" or any river branch (write "the Rahway River"); any Millburn-specific elevation/snow/wind number (the ridge "marginally cooler/snowier" stays qualitative on the EWR baseline).
   - Census = affluent; frame wealth QUALITATIVELY. FLAG any published population/area integer used as prose; FLAG the top-coded median-income ($250,001) or median-home-value ($1.37M) literals.
   - Neighborhoods (verified ONLY): Short Hills (the Short Hills Park Historic District, the Mall at Short Hills), Wyoming (the Wyoming Historic District, Wyoming Presbyterian Church), the downtown Millburn village (Millburn Avenue retail on the Rahway River), the Cora Hartshorn Arboretum, the Paper Mill Playhouse. FLAG fabricated estate project specifics (1924 Tudor / 4,200 sq ft Vermont Unfading Green / ColorGard / 80-mil TPO Grand Manor / dedicated slate crew / in-house copper fabrication / quarry-direct / 20-yr NDL Golden Pledge).`,
  },
}

// expand to cohorts (9 per city). REVIEW_CITIES is settable via args for per-city review waves
// (the session-limit survival strategy — run 9 cohorts at a time, checkpoint findings per city).
const ALL_CITIES = ['livingston', 'millburn']
const _arg = typeof args === 'string' ? (args ? JSON.parse(args) : null) : args
const REVIEW_CITIES = Array.isArray(_arg) && _arg.length ? _arg : ALL_CITIES
const COHORTS = []
for (const city of REVIEW_CITIES)
  for (const t of COHORT_TEMPLATES) COHORTS.push({ ...t, city, name: `${city}:${t.name}` })

// One-line COA posture per city (for the refuter prompt)
const POSTURE = {
  'livingston': 'NO binding local COA — no locally designated district or landmark (Master Plan recommends only; code §170-3 + the ~38 sites = planning IDs; Force Homestead = township-owned Register-listed museum, NOT a gate)',
  'millburn': 'BINDING but NARROW COA — binding ONLY inside the locally designated Wyoming or Short Hills Park historic district or on a designated landmark, NOT township-wide (Article 8, MLUL N.J.S.A. 40:55D-107; COA separate from the building permit; a 1–2 family reroof stays 5:23-2.7 ordinary maintenance; Short Hills Village pending; Paper Mill Playhouse + Cora Hartshorn Arboretum = Register/institutional, not gates)',
}

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
- The ${ci.name} author brief: .planning/content-system/combo-batch11-affluent-suburban/${ci.briefDir}/${ci.brief} (esp. §0 ENTITY-GROUNDING + §C ${ci.name} facts + §F differentiation)
- The affluent-suburban city fact bank: .planning/content-system/cities-batchE/CITY-FACTS-affluent-suburban.md (the GLOBAL CORRECTIONS + the "${ci.name}" section, incl. the UNVERIFIED gaps)
- The committed ${ci.name} CITY page: src/data/city-content/affluent-suburban.ts (cityId '${ci.cityId}') — verified ${ci.name} geography/voice
- The fact packs for this cohort: ${packs}
- Gold voice/structure + ENTITY-GROUNDING exemplar: the committed src/data/combo-content/orange/roof-repair.ts (same answer-first + entity-grounded shape — but Orange's geography/COA DIFFER from ${ci.name}'s)

THEN review each combo file in your cohort:
  ${files}

CHECK every combo for:
1. FABRICATION — every hard number (cost, %, lifespan, mph, temperature, dimension, code section) must trace to a NAMED source in the packs. Flag invented figures, invented NQR self-stats, response-time claims, fabricated programs ("investment property program"/"portfolio pricing"), "closest contractor" superlatives, manufacturer brands as NQR credentials ("Premium materials from GAF/CertainTeed/Owens Corning"), and any de-fab literal (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, manufacturer-certification claims).
2. ${ci.name.toUpperCase()}-FACT ACCURACY (the high-risk axis — ${ci.name} ≠ the other rewritten cities; and ${ci.name} ≠ the OTHER affluent-suburban sibling, which carries a DIFFERENT COA gate and DIFFERENT reservation/floodplain geography):
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
  return `You are an adversarial REFUTER on the "${cohortName}" ${ci.name} combo review. A reviewer raised the finding below. Decide if it is REAL or a false positive, defaulting to skepticism of the FINDING (the original text is presumed defensible unless the finding proves otherwise). Verify against the fact packs and the affluent-suburban fact bank.

FINDING:
- combo: ${f.combo}
- field: ${f.field}
- severity: ${f.severity}
- category: ${f.category}
- issue: ${f.issue}
- evidence: ${f.evidence}
- suggestedFix: ${f.suggestedFix}

Steps: READ the actual combo file src/data/combo-content/${city}/${f.combo}.ts at the cited field, plus the relevant fact pack(s) under .planning/content-system/research/ and the affluent-suburban fact bank .planning/content-system/cities-batchE/CITY-FACTS-affluent-suburban.md (the GLOBAL CORRECTIONS + the "${ci.name}" section). Determine:
- Is the offending text actually present as described?
- Does it genuinely violate a named-source fact, a ${ci.name} fact (esp. the COA posture — ${POSTURE[city]} — and the reservation / verified-neighborhoods-only / housing-age rules), an entity-grounding requirement (directAnswer form / registered-HIC-not-licensed), the ruleset, or cross-combo consistency? Check the GOLD exemplar — a phrasing that matches the committed Orange combo's answer-first/entity-grounded voice is NOT a defect, EXCEPT where it imports Orange's COA/geography or the other affluent-suburban sibling's anchors. Third-party "licensed public adjuster/engineer/Construction Official" cites are CORRECT — refute any finding that flags them as NQR "licensed" misuse.
Return verdict "confirmed" only if the finding is a real, fixable problem; otherwise "refuted". If confirmed, give the exact before→after finalFix (preserve facts, relocate/re-attribute rather than delete).`
}

phase('Review')
log(`Reviewing ${REVIEW_CITIES.join(', ')} — ${REVIEW_CITIES.length * 65} combos across ${COHORTS.length} cohorts (9 per city)…`)

// THROTTLED to dodge the server's transient BURST limiter: process CHUNK cohorts at a time
// (peak ~CHUNK reviews + their refuters), NOT all 9 at once. A null review = a rate-limited
// cohort → marked failed (NOT silently counted as 0 findings).
const CHUNK = 2
async function reviewCohort(c) {
  const review = await agent(reviewPrompt(c), { label: `review:${c.name}`, phase: 'Review', schema: REVIEW_SCHEMA })
  if (!review) return { cohort: c.name, city: c.city, confirmed: [], refuted: [], low: [], failed: true }
  const toRefute = (review.findings || []).filter(f => f.severity === 'med' || f.severity === 'high')
  const lowFindings = (review.findings || []).filter(f => f.severity === 'low').map(f => ({ ...f, city: c.city }))
  if (!toRefute.length) return { cohort: c.name, city: c.city, confirmed: [], refuted: [], low: lowFindings }
  const verdicts = (await parallel(toRefute.map(f => () =>
    agent(refutePrompt(f, c.name, c.city), { label: `refute:${c.city}/${f.combo}/${f.field}`, phase: 'Refute', schema: REFUTE_SCHEMA })
      .then(v => (v ? { ...f, ...v, city: c.city } : null))
  ))).filter(Boolean)
  return {
    cohort: c.name, city: c.city,
    confirmed: verdicts.filter(v => v.verdict === 'confirmed'),
    refuted: verdicts.filter(v => v.verdict === 'refuted'),
    low: lowFindings,
  }
}
const perCohort = []
for (let i = 0; i < COHORTS.length; i += CHUNK) {
  const batch = COHORTS.slice(i, i + CHUNK)
  log(`Review batch ${Math.floor(i / CHUNK) + 1}/${Math.ceil(COHORTS.length / CHUNK)}: ${batch.map(c => c.name).join(', ')}`)
  const res = await parallel(batch.map(c => () => reviewCohort(c)))
  perCohort.push(...res)
}
const failedCohorts = perCohort.filter(r => r && r.failed).map(r => r.cohort)
if (failedCohorts.length) log(`⚠️ ${failedCohorts.length} cohort(s) rate-limited (re-run): ${failedCohorts.join(', ')}`)

const confirmed = perCohort.filter(Boolean).flatMap(r => r.confirmed || [])
const refuted = perCohort.filter(Boolean).flatMap(r => r.refuted || [])
const low = perCohort.filter(Boolean).flatMap(r => r.low || [])
log(`Review complete: ${confirmed.length} confirmed, ${refuted.length} refuted, ${low.length} low-advisory`)
return {
  confirmedCount: confirmed.length,
  refutedCount: refuted.length,
  lowCount: low.length,
  failedCohorts,
  confirmed,
  low,
  byCohort: perCohort.filter(Boolean).map(r => ({ cohort: r.cohort, confirmed: (r.confirmed||[]).length, refuted: (r.refuted||[]).length, low: (r.low||[]).length, failed: !!r.failed })),
}
