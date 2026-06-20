export const meta = {
  name: 'combo-batch9-review',
  description: 'Adversarial review + refute of the west-essex combo rewrites (Combo Batch 9) by city × service-category cohort; run per-city via args=["<city>"] for review waves',
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
  'west-orange': {
    name: 'West Orange', cityId: 'west-orange', briefDir: 'west-orange', brief: '_WEST-ORANGE-BRIEF.md',
    facts: `- Permit office = the "Township of West Orange Building & Construction Code Enforcement" (the State UCC enforcing agency). Do NOT invent a fee schedule, a director, or a Construction Official's name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **NARROW LANDMARK-ONLY COA.** The West Orange Historic Preservation Commission issues a Certificate of Appropriateness for the township's roughly ten LOCALLY DESIGNATED landmarks under Section 25-30 (Holy Trinity Episcopal Church, the State Diner, the Hedges Block). A typical detached 1–2 family reroof needs NO COA. FLAG: (a) any claim that a typical West Orange home requires a COA; (b) asserting a township COA over Llewellyn Park generally — Llewellyn Park is a PRIVATE 1857 deed-of-trust community governed by its own Committee of Managers, NOT a township COA (except an individually designated structure such as the Gate House); (c) importing Montclair's four districts, Glen Ridge's Chapter 15.32, Verona's "HPC review," or Cedar Grove's no-COA framing. Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = West Orange sits on the First Watchung ridge and CONTAINS part of the South Mountain Reservation AND part of the Eagle Rock Reservation, per Essex County Parks. FLAG: attributing the Mills or Hilltop Reservation to West Orange (those are Montclair/Cedar Grove/Verona); any city-specific elevation/gust number (500 ft / 618 ft / 70 mph banned); fabricated streets; the purged "reduce attic temperatures by up to 30 degrees," "reduce heating and cooling costs by 15 to 25 percent," "premium discounts of 10 to 28 percent," "$35,000–$75,000"/"$40,000–$80,000" pricing tiers, "numerous projects in Llewellyn Park," and "we coordinate with the community association." Commercial corridor = Main Street / Valley Road / Pleasant Valley Way + Route 280.
   - Census = frame the audience QUALITATIVELY (wide stock; owner-occupant ridge-side suburb). FLAG any published Census % or population integer (the committed city page used NJ Real Estate Network home values only as RAW neighborhood color, not a prose stat).
   - Neighborhoods (verified ONLY): St. Cloud, Gregory, Pleasantdale, Llewellyn Park, Tory Corner, Crestmont and Crystal Lake (+ the Main Street / Valley Road commercial spine). FLAG any invented street/section not in this list. Stock = capes/ranches/Colonials in Pleasantdale and Gregory up to hillside Tudors and Llewellyn Park estate homes.`,
  },
  'montclair': {
    name: 'Montclair', cityId: 'montclair', briefDir: 'montclair', brief: '_MONTCLAIR-BRIEF.md',
    facts: `- Permit office = the "Township of Montclair Building Office" (the local UCC enforcing agency / permit office). Do NOT invent a fee schedule, a director, or a Construction Official's name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **CONDITIONAL LOCAL COA.** A Certificate of Appropriateness from the Montclair Historic Preservation Commission is required ONLY for appearance-changing exterior roofing on a property inside one of the FOUR locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) or on a designated local landmark, under Article XXIII of Chapter 347 (§347-136); in-kind maintenance/repair with no change in design/scale/appearance is EXEMPT; the Estate Section is NOMINATED only, NOT locally designated. FLAG: (a) any Village-wide or township-wide COA claim; (b) the Estate Section asserted as a designated COA district; (c) importing West Orange's Section 25-30, Glen Ridge's Chapter 15.32, Verona's "HPC review," or Cedar Grove's no-COA framing. Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = Montclair adjoins the Eagle Rock Reservation and the Mills Reservation, per Essex County Parks — NOT the South Mountain Reservation. FLAG: South Mountain attributed to Montclair; the Hilltop Reservation attributed to Montclair (that is Verona/Cedar Grove); any city-specific elevation/gust number (west-side exposure must stay QUALITATIVE).
   - Census = roughly 54% of units in multi-unit structures (per the U.S. Census Bureau ACS) plus a large pre-WWII majority (qualitative, per the Township Housing Element) — KEEP where named-sourced. FLAG any population integer or a pre-1940 %.
   - Neighborhoods (verified ONLY): Upper Montclair, Watchung Plaza, Montclair Center / Town Center, Estate Section, Pine Street, South End, Erwin Park. FLAG any invented street/section not in this list.`,
  },
  'glen-ridge': {
    name: 'Glen Ridge', cityId: 'glen-ridge', briefDir: 'glen-ridge', brief: '_GLEN-RIDGE-BRIEF.md',
    facts: `- Permit office = the "Borough of Glen Ridge Building Department" at 825 Bloomfield Avenue. Do NOT invent a fee schedule, a director, or a Construction Official's name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **BINDING LOCAL COA, the BROADEST in the batch.** The Glen Ridge Historic Preservation Commission issues a Certificate of Appropriateness under Borough Code Chapter 15.32, and the Glen Ridge Historic District covers OVER 90% of the borough (NOT 100%), so MOST homes fall inside the regulated district; a COA applies to exterior alterations including roof replacement, material change, dormers, and visible roof-mounted equipment on regulated/contributing properties — a SEPARATE local approval from the construction permit. FLAG: (a) "100% of the borough" (it is OVER 90%, not all); (b) framing the gate as the 1982 National Register listing rather than the local Chapter 15.32 ordinance; (c) importing West Orange's Section 25-30, Montclair's four districts, Verona's "HPC review," or Cedar Grove's no-COA framing. Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = Glen Ridge is a small (~1.3 sq mi), fully built-out inner Essex County LOWLAND borough that borders NO large county reservation; the defining roof stressor is the MATURE STREET-TREE CANOPY (NOT ridge elevation or reservation adjacency). FLAG: ANY reservation or ridge-elevation claim attributed to Glen Ridge; Toney's Brook framed as anything but qualitative localized drainage.
   - Census = ~93% owner-occupied (qualitative); predominantly pre-WWII Victorian/Edwardian/Colonial-Revival/Tudor/Dutch-Colonial single-family stock (~1890s–1930s). FLAG any published population/units integer.
   - Neighborhoods (verified ONLY): Ridgewood Avenue, Forest Avenue, Baldwin Street, Linden Avenue, The Glen and Toney's Brook, the Bloomfield Avenue station edge. FLAG any invented street/section not in this list.`,
  },
  'verona': {
    name: 'Verona', cityId: 'verona', briefDir: 'verona', brief: '_VERONA-BRIEF.md',
    facts: `- Permit office = the "Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue." Do NOT invent a fee schedule, a director, or a Construction Official's name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **NARROW "HPC REVIEW" — NOT a literal "Certificate of Appropriateness."** Under Zoning Ordinance Chapter 150, Article XXII, the Verona Historic Preservation Commission reviews significant exterior changes prior to permit issuance on a LOCALLY DESIGNATED landmark; there are exactly TWO designated landmarks (the Erie Railroad Freight Shed at 62 Depot Street, and the Verona United Methodist Church); in-kind exterior repairs are EXEMPT; the Afterglow section is PROPOSED (2017 survey), NOT designated. FLAG: (a) the literal phrase "Certificate of Appropriateness" or "COA" for Verona (it is "HPC review"); (b) Afterglow asserted as a designated district; (c) Verona Park asserted as a reroof gate (it is an Olmsted Essex County park); (d) importing West Orange's Section 25-30, Montclair's four districts, Glen Ridge's Chapter 15.32, or Cedar Grove's no-COA framing. Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = Verona is a Watchung valley/upland township between the Eagle Rock Reservation (First Watchung) and the Hilltop Reservation (Second Watchung), per Essex County Parks — NOT the South Mountain Reservation, NOT the Mills Reservation. The Peckman River runs through Verona (a real, named NWS-gauged drainage/flood angle along Bloomfield Avenue and Lakeside Avenue near Verona Park) — keep QUALITATIVE (no FEMA zone/%/depth). SPLIT-LEVEL transition flashing is the distinctive Verona roof detail. FLAG: South Mountain or Mills attributed to Verona; any FEMA flood figure.
   - Census = about four-fifths owner-occupied across ~6,000 housing units (per the U.S. Census Bureau ACS) — KEEP where named-sourced. FLAG any population integer.
   - Neighborhoods (verified ONLY): the Afterglow section, Personette Avenue, Claremont Avenue, Verona Park and Lakeside Avenue, the Bloomfield Avenue and Pompton Avenue corridors. FLAG any invented street/section not in this list. Stock = pre-war Colonials, postwar Capes/ranches, and many 1960s–70s split-levels.`,
  },
  'cedar-grove': {
    name: 'Cedar Grove', cityId: 'cedar-grove', briefDir: 'cedar-grove', brief: '_CEDAR-GROVE-BRIEF.md',
    facts: `- Permit office = the "Township of Cedar Grove Building Department" at 525 Pompton Avenue. Do NOT invent a fee schedule, a director, or a Construction Official's name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **NONE — the only no-COA city in the batch.** Cedar Grove has NO local Historic Preservation Commission, NO Certificate of Appropriateness, and no locally designated historic district or landmark; only an ADVISORY Heritage Advisory Committee (educational/cultural, with no designation, COA, or regulatory authority). The closest analog is Belleville / East Orange / Irvington. FLAG: (a) ANY COA or HPC-review assertion for Cedar Grove; (b) importing any neighbor's gate (West Orange Section 25-30, Montclair's four districts, Glen Ridge Chapter 15.32, Verona's "HPC review"). Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = Cedar Grove is a northern Essex County township between the First and Second Watchung Mountains (qualitative "higher ground" — no city-specific elevation/snow/wind number); it adjoins the Mills Reservation (157.15 acres, shared with Montclair) and the Hilltop Reservation (284.16 acres, shared with North Caldwell and Verona), per Essex County Parks — NOT the South Mountain Reservation and NOT the Eagle Rock Reservation. FLAG: South Mountain or Eagle Rock attributed to Cedar Grove; the purged "on the western slope of the Second Watchung Mountain," "winter snowfall 2 to 4 inches greater per storm," "extend shingle life by 5 to 8 years," "reduce energy costs by 15–25 percent," "ranch-style homes built between 1950 and 1975 constitute the single largest category," the Norway-spruce species claim, and projectSpotlights written as completed jobs at named addresses. Commercial corridor = Pompton Avenue / Route 23.
   - Census = 76.3% owner-occupied across 5,008 housing units (per the U.S. Census Bureau ACS) IS published on the committed city page — KEEP it where named-sourced. FLAG any population integer or a decade-built %.
   - Neighborhoods (verified ONLY): North End, Park Ridge Estates, Central Cedar Grove, South End, the Pompton Avenue / Route 23 corridor, the Mills Reservation edge. FLAG any invented street/section not in this list. Stock = predominantly postwar ranch and split-level homes.`,
  },
}

// expand to cohorts (9 per city). REVIEW_CITIES is settable via args for per-city review waves
// (the session-limit survival strategy — run 9 cohorts at a time, checkpoint findings per city).
const ALL_CITIES = ['west-orange', 'montclair', 'glen-ridge', 'verona', 'cedar-grove']
const _arg = typeof args === 'string' ? (args ? JSON.parse(args) : null) : args
const REVIEW_CITIES = Array.isArray(_arg) && _arg.length ? _arg : ALL_CITIES
const COHORTS = []
for (const city of REVIEW_CITIES)
  for (const t of COHORT_TEMPLATES) COHORTS.push({ ...t, city, name: `${city}:${t.name}` })

// One-line COA posture per city (for the refuter prompt)
const POSTURE = {
  'west-orange': 'NARROW LANDMARK-ONLY (Section 25-30, ~10 designated landmarks; a typical home needs NO COA; Llewellyn Park = private deed-of-trust, NOT a township COA)',
  'montclair': 'CONDITIONAL LOCAL (Article XXIII Ch. 347 §347-136; only inside the 4 districts or a local landmark; in-kind exempt; Estate Section nominated-not-designated; never Village-wide)',
  'glen-ridge': 'BINDING LOCAL, BROADEST (Chapter 15.32; district covers OVER 90% of the borough — NOT 100%; local ordinance, NOT the 1982 NR listing)',
  'verona': 'NARROW "HPC REVIEW" — NOT a literal "Certificate of Appropriateness" (Chapter 150 Article XXII; only 2 designated landmarks; in-kind exempt; Afterglow proposed-not-designated)',
  'cedar-grove': 'NONE — no HPC, no COA, no designated district/landmark; advisory Heritage Advisory Committee only',
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
- The ${ci.name} author brief: .planning/content-system/combo-batch9-west-essex/${ci.briefDir}/${ci.brief} (esp. §0 ENTITY-GROUNDING + §C ${ci.name} facts + §F differentiation)
- The west-essex city fact bank: .planning/content-system/cities-batchC/CITY-FACTS-west-essex.md (the GLOBAL CORRECTIONS + the "${ci.name}" section, incl. the UNVERIFIED gaps)
- The committed ${ci.name} CITY page: src/data/city-content/west-essex.ts (cityId '${ci.cityId}') — verified ${ci.name} geography/voice
- The fact packs for this cohort: ${packs}
- Gold voice/structure + ENTITY-GROUNDING exemplar: the committed src/data/combo-content/orange/roof-repair.ts (same answer-first + entity-grounded shape — but Orange's geography/COA DIFFER from ${ci.name}'s)

THEN review each combo file in your cohort:
  ${files}

CHECK every combo for:
1. FABRICATION — every hard number (cost, %, lifespan, mph, temperature, dimension, code section) must trace to a NAMED source in the packs. Flag invented figures, invented NQR self-stats, response-time claims, fabricated programs ("investment property program"/"portfolio pricing"), "closest contractor" superlatives, manufacturer brands as NQR credentials ("Premium materials from GAF/CertainTeed/Owens Corning"), and any de-fab literal (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, manufacturer-certification claims).
2. ${ci.name.toUpperCase()}-FACT ACCURACY (the high-risk axis — ${ci.name} ≠ the other rewritten cities; and ${ci.name} ≠ its four west-essex siblings, which carry DIFFERENT COA gates and DIFFERENT reservations):
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
  return `You are an adversarial REFUTER on the "${cohortName}" ${ci.name} combo review. A reviewer raised the finding below. Decide if it is REAL or a false positive, defaulting to skepticism of the FINDING (the original text is presumed defensible unless the finding proves otherwise). Verify against the fact packs and the west-essex fact bank.

FINDING:
- combo: ${f.combo}
- field: ${f.field}
- severity: ${f.severity}
- category: ${f.category}
- issue: ${f.issue}
- evidence: ${f.evidence}
- suggestedFix: ${f.suggestedFix}

Steps: READ the actual combo file src/data/combo-content/${city}/${f.combo}.ts at the cited field, plus the relevant fact pack(s) under .planning/content-system/research/ and the west-essex fact bank .planning/content-system/cities-batchC/CITY-FACTS-west-essex.md (the GLOBAL CORRECTIONS + the "${ci.name}" section). Determine:
- Is the offending text actually present as described?
- Does it genuinely violate a named-source fact, a ${ci.name} fact (esp. the COA posture — ${POSTURE[city]} — and the reservation / verified-neighborhoods-only / housing-age rules), an entity-grounding requirement (directAnswer form / registered-HIC-not-licensed), the ruleset, or cross-combo consistency? Check the GOLD exemplar — a phrasing that matches the committed Orange combo's answer-first/entity-grounded voice is NOT a defect, EXCEPT where it imports Orange's COA/geography or another west-essex sibling's anchors. Third-party "licensed public adjuster/engineer/Construction Official" cites are CORRECT — refute any finding that flags them as NQR "licensed" misuse.
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
