export const meta = {
  name: 'combo-batch10-review',
  description: 'Adversarial review + refute of the caldwells-roseland combo rewrites (Combo Batch 10) by city × service-category cohort; run per-city via args=["<city>"] for review waves',
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
  'caldwell': {
    name: 'Caldwell', cityId: 'caldwell', briefDir: 'caldwell', brief: '_CALDWELL-BRIEF.md',
    facts: `- Permit office = the "Borough of Caldwell Construction Department" at 24 Smull Avenue (Borough Hall) — NOT Bloomfield Avenue. Do NOT invent a fee schedule, a director, or a Construction Official's name ("Carl Thunell" is time-sensitive — do NOT print it).
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **NARROW LOCAL COA — TWO designated landmarks only.** Caldwell has a real local HPC + ordinance (Chapter 130, §§130-1 to 130-13), but the Certificate of Appropriateness applies ONLY to the borough's TWO individually LOCALLY DESIGNATED landmarks (one being the Caldwell Public Library; the second is unnamed — do NOT name it). Caldwell has NOT designated a local historic DISTRICT, so a typical home is NOT in a COA-regulated district. FLAG: (a) any claim a typical Caldwell home needs a COA or that a designated DISTRICT exists; (b) the "HD-1/HD-2/HD-3 downtown historic-district overlay" (that is Caldwell, IDAHO); (c) the Grover Cleveland Birthplace treated as a homeowner COA gate (it is STATE-owned, Register-only); (d) importing North Caldwell's advisory HPC, Essex Fells' no-ordinance, Fairfield's advisory HPC, or Roseland's Chapter 30 framing. Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = Caldwell is a small (~1.17 sq mi), compact, built-out borough on the far-western Essex uplands that borders NO large Essex County reservation and carries NO Passaic floodplain exposure (UPLAND). The defining roof stressor is the mature street-tree canopy; the Bloomfield Avenue downtown is the walkable commercial corridor (flat/low-slope/parapet roofs). FLAG: any reservation adjacency (Hilltop is North Caldwell, not Caldwell); any Passaic floodplain framing; any city-specific elevation/gust/snow number (the ~397 ft elevation stays qualitative); fabricated streets.
   - Census = frame the audience QUALITATIVELY — Caldwell is the renter-heavier exception (~41% owner-occupied, a majority-renter downtown borough with Caldwell University). FLAG any published Census % or population integer; FLAG any high-owner-occupancy "enclave"/"large-lot" framing (Caldwell is majority-renter).
   - Neighborhoods (verified ONLY): Bloomfield Avenue (downtown spine), Central Avenue, the Grover Cleveland Park vicinity (Brookside Avenue), the Caldwell University area (Franklin/Westville = historical settlement names only). FLAG any invented street/section not in this list (omit "Personette Street").`,
  },
  'north-caldwell': {
    name: 'North Caldwell', cityId: 'north-caldwell', briefDir: 'north-caldwell', brief: '_NORTH-CALDWELL-BRIEF.md',
    facts: `- Permit office = the "Borough of North Caldwell Construction Department" at 141 Gould Avenue (Borough Hall). Do NOT invent a fee schedule, a director, or a Construction Official's name ("Paul Milani" is time-sensitive).
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **NO COA — advisory/survey-only HPC.** North Caldwell has a local HPC (Chapter 107, Article XIII, §§107-85 to 107-87) but it is ADVISORY/SURVEY-ONLY: it issues NO Certificate of Appropriateness and has designated NO local district or landmark, so NO COA applies anywhere in North Caldwell. FLAG: (a) ANY COA assertion for North Caldwell; (b) citing proposed Ordinance O-8-2026 as in force; (c) conflation with Caldwell's Chapter 130 / two landmarks or the Caldwell-IDAHO "North Caldwell Historic District"; (d) any National/State Register property in North Caldwell (there are none). Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = North Caldwell sits in NW Essex on the Second Watchung Mountain; it is the ONLY batch city that abuts a county reservation — the Hilltop Reservation (~284 ac, shared with Cedar Grove and Verona) — and holds Essex County's highest point (~691 ft at the Hilltop, attributed, with a Verona-edge ambiguity). It is UPLAND, not Passaic floodplain. FLAG: South Mountain/Eagle Rock/Mills attributed to North Caldwell; any Passaic floodplain framing; any extrapolated borough-wide wind/snow figure from the ~691 ft point; any other invented elevation/gust number.
   - Census = ~96% owner-occupied, large-lot, heavily wooded, almost entirely residential ("The Green Jewel of Essex County"); income framed as ~$200,000+ (a range). FLAG any published population/units integer or a hard single income figure.
   - Neighborhoods (verified ONLY): Mountain Avenue, Gould Avenue (Borough Hall, 141 Gould Ave), Grandview Avenue, Central Avenue, the Hilltop area / Hilltop Drive / Hilltop Park, the West/East Greenbrook Road & Fairfield Road edge (a short Bloomfield Avenue segment only touches the borough). FLAG any invented street/section not in this list.`,
  },
  'essex-fells': {
    name: 'Essex Fells', cityId: 'essex-fells', briefDir: 'essex-fells', brief: '_ESSEX-FELLS-BRIEF.md',
    facts: `- Permit office = the "Borough of Essex Fells Building Department (Building & Zoning)" at Borough Hall, 255 Roseland Avenue. Do NOT invent a fee schedule, a director, or a Construction Official's name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **NONE — no HPC, no ordinance, no COA, no Register listing.** Essex Fells has NO local HPC, NO historic ordinance, NO Certificate-of-Appropriateness process, and NO "Essex Fells Historic District" on the National or NJ Register (REFUTED). FLAG: (a) ANY COA/HPC assertion for Essex Fells; (b) the Chapter 142 "HISTORIC STRUCTURE" wording used as a preservation gate (it is the FEMA/NFIP floodplain definition); (c) the Grover Cleveland Birthplace placed in Essex Fells (it is in Caldwell); (d) importing any neighbor's gate. Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = Essex Fells sits on the hilly, rocky high ground of far-western Essex County — the county's SMALLEST municipality by area (~1.4 sq mi); it borders NO large county reservation and carries NO Passaic floodplain exposure (UPLAND). The defining roof stressor is the borough's "unique," ~50–150-year-old mature tree canopy (the Bowditch legacy); there is NO commercial business district. FLAG: any reservation adjacency; any Passaic floodplain framing; any city-specific elevation/gust/snow number; any commercial-district claim; fabricated streets.
   - Census = ~96–98% owner-occupied, ~97% single-family detached, custom homes on large lots along winding Bowditch-plan roads. FLAG any published population/units integer or a hard income/value figure; FLAG a strict "one-acre minimum" (unsourced — keep lot size qualitative).
   - Neighborhoods (verified ONLY): Roseland Avenue (principal through-road; Borough Hall, 255 Roseland Avenue), Fells Road, Forest Way, Oak Lane, Devon Road. FLAG any invented street/section not in this list.`,
  },
  'fairfield': {
    name: 'Fairfield', cityId: 'fairfield', briefDir: 'fairfield', brief: '_FAIRFIELD-BRIEF.md',
    facts: `- Permit office = the "Building Department, Township of Fairfield" at 230 Fairfield Road. Do NOT invent a fee schedule, a director, a Construction Official's name, or a phone number.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached (HIGHLY relevant to Fairfield's large Route 46/I-80 commercial stock); recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **NO COA — advisory/educational HPC.** Fairfield's HPC is ADVISORY/EDUCATIONAL/CELEBRATORY (focused on the township-owned Peter Van Ness House); it issues NO binding Certificate of Appropriateness and there is NO locally designated historic district. FLAG: (a) ANY binding-COA assertion for Fairfield; (b) a precise HPC ordinance section number (the "§2-55" cite is unverified); (c) the Van Ness House (236 Little Falls Rd; NRHP + township-owned) or the Fairfield Dutch Reformed Church (NRHP + church-owned) treated as homeowner COA gates; (d) the Israel Crane House attributed to Fairfield (it is in Montclair). Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = Fairfield is the batch's largest municipality (~10.13 sq mi) and the DEFINING Passaic-River floodplain city — LOW-LYING (~174 ft, NOT upland), much of it in the FEMA Special Flood Hazard Area; Great Piece Meadows (~1,170 ac in-township) + the adjacent Hatfield Swamp/West Essex Park; the NOAA-NWS Passaic at Pine Brook gauge (PINN4); named floods Irene 2011 / Ida 2021 / Floyd 1999. Route 46 + I-80 BISECT the township (the dense commercial-industrial flat/low-slope corridor). FLAG: any "upland"/cooler-snowier-windier differential (it is low-lying); any reservation adjacency or West Essex Trail attribution; a basement-flood sales claim / "~70% in a flood zone" / FEMA zone letters / PINN4 stage numbers in feet; a named "Fairfield Business Campus"; population stated as 7,824 (use 7,872 if at all).
   - Census = ~79% owner-occupied later-20th-century suburban residential PLUS the Route 46/I-80 commercial-industrial corridor — keep residential housing styles QUALITATIVE (colonials/split-levels/bi-levels/raised ranches). FLAG any per-style count.
   - Neighborhoods (verified ONLY): Fairfield Road (main spine; Building Dept, 230 Fairfield Road), Hollywood Avenue, Big Piece Road, Little Falls Road (Van Ness House), Pier Lane, Plymouth Street, the Route 46 / I-80 commercial-industrial corridor. FLAG any invented street/section not in this list.`,
  },
  'roseland': {
    name: 'Roseland', cityId: 'roseland', briefDir: 'roseland', brief: '_ROSELAND-BRIEF.md',
    facts: `- Permit office = the Borough of Roseland construction/permit office at 300 Eagle Rock Avenue (the DPW building) — NOT Borough Hall (19 Harrison Ave). Do NOT invent a fee schedule, a director, or a Construction Official's name ("Thomas Jacobsen" is time-sensitive; the department title is in flux per Ord. 40-2023).
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached (Roseland's Eisenhower Pkwy / Becker Farm Road offices ARE commercial and DO require permits); recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **COA ORDINANCE EXISTS but NO designations.** Roseland has a real on-the-books ordinance (the Roseland Landmarks and Historic District Commission, Chapter 30, Article IX, §§30-901 to 30-910; COA at §30-909), but NO specific local landmark, landmark site, or historic district is confirmed DESIGNATED, and §30-901.1 requires OWNER CONSENT — so NO homeowner is subject to a COA absent a designation. FLAG: (a) any assertion that a Roseland homeowner needs a COA; (b) the Williams-Harrison House (126 Eagle Rock Ave; NJ/National Register + society museum) treated as a homeowner COA gate; (c) importing a neighbor's gate. Per the NPS, a National Register listing alone places no restriction on a private owner.
   - Geography = Roseland's WESTERN municipal boundary IS the Passaic River; per its Master Plan ~30% of the borough is environmentally constrained (459 ac FEMA SFHA), with part of West Essex Park on the western edge — the floodplain is WESTERN/RIVERINE-EDGE only. It borders NO Essex County reservation (it contains county PARKS — most of Becker Park, part of West Essex Park — NOT "reservations") and does NOT border Fairfield (they meet only via West Essex Park). The Eisenhower Parkway / Becker Farm Road / Livingston Avenue office-park corridor carries flat/low-slope commercial roofs. FLAG: a whole-borough or basement-flood claim (the floodplain is the western edge only); any "reservation" attribution; any claim Roseland borders Fairfield; the "1,000–1,200 acre" Becker Farm figure; any Roseland-specific elevation/snow/wind number (NOT uniformly upland).
   - Census = ~68% owner-occupied, built-out single-family postwar stock (colonials/ranches/split-levels/Capes + some townhome/condo) PLUS a real office-park employment base (~2,922 jobs; ADP and Lowenstein Sandler are firm anchors). FLAG any published population/units integer.
   - Neighborhoods (verified ONLY): Eagle Rock Avenue (permit office, 300 Eagle Rock Avenue), Eisenhower Parkway, Harrison Avenue, Laurel Avenue, Livingston Avenue, Passaic Avenue, the Becker Farm Road office-park corridor, Becker Park (residential areas described by corridor/area — no distinct named residential neighborhoods are sourced). FLAG any invented street/section not in this list.`,
  },
}

// expand to cohorts (9 per city). REVIEW_CITIES is settable via args for per-city review waves
// (the session-limit survival strategy — run 9 cohorts at a time, checkpoint findings per city).
const ALL_CITIES = ['caldwell', 'north-caldwell', 'essex-fells', 'fairfield', 'roseland']
const _arg = typeof args === 'string' ? (args ? JSON.parse(args) : null) : args
const REVIEW_CITIES = Array.isArray(_arg) && _arg.length ? _arg : ALL_CITIES
const COHORTS = []
for (const city of REVIEW_CITIES)
  for (const t of COHORT_TEMPLATES) COHORTS.push({ ...t, city, name: `${city}:${t.name}` })

// One-line COA posture per city (for the refuter prompt)
const POSTURE = {
  'caldwell': 'NARROW LOCAL COA — TWO designated landmarks only (Chapter 130; Caldwell Public Library + one unnamed; NO designated district; a typical home needs NO COA; Grover Cleveland Birthplace = state-owned Register-only, NOT a gate; "HD-1/2/3 overlay" = Caldwell IDAHO)',
  'north-caldwell': 'NO COA — advisory/survey-only HPC (Chapter 107 Art. XIII §§107-85 to 107-87; no designations; O-8-2026 introduced-not-adopted; no Register property)',
  'essex-fells': 'NONE — no HPC, no ordinance, no COA, no National/State Register listing (the "Essex Fells Historic District" is REFUTED; Ch. 142 "HISTORIC STRUCTURE" = FEMA floodplain, not preservation)',
  'fairfield': 'NO COA — advisory/educational HPC (Van Ness House township-owned; no designated district; no precise §number; Van Ness House + Dutch Reformed Church = Register-only, not gates; Israel Crane House is in Montclair)',
  'roseland': 'COA ORDINANCE EXISTS but NO designations (Chapter 30 Art. IX §§30-901 to 30-910, COA §30-909) — §30-901.1 owner-consent; no property locally designated, so no homeowner is subject; Williams-Harrison House = Register-only museum, not a gate',
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
- The ${ci.name} author brief: .planning/content-system/combo-batch10-caldwells-roseland/${ci.briefDir}/${ci.brief} (esp. §0 ENTITY-GROUNDING + §C ${ci.name} facts + §F differentiation)
- The caldwells-roseland city fact bank: .planning/content-system/cities-batchD/CITY-FACTS-caldwells-roseland.md (the GLOBAL CORRECTIONS + the "${ci.name}" section, incl. the UNVERIFIED gaps)
- The committed ${ci.name} CITY page: src/data/city-content/caldwells-roseland.ts (cityId '${ci.cityId}') — verified ${ci.name} geography/voice
- The fact packs for this cohort: ${packs}
- Gold voice/structure + ENTITY-GROUNDING exemplar: the committed src/data/combo-content/orange/roof-repair.ts (same answer-first + entity-grounded shape — but Orange's geography/COA DIFFER from ${ci.name}'s)

THEN review each combo file in your cohort:
  ${files}

CHECK every combo for:
1. FABRICATION — every hard number (cost, %, lifespan, mph, temperature, dimension, code section) must trace to a NAMED source in the packs. Flag invented figures, invented NQR self-stats, response-time claims, fabricated programs ("investment property program"/"portfolio pricing"), "closest contractor" superlatives, manufacturer brands as NQR credentials ("Premium materials from GAF/CertainTeed/Owens Corning"), and any de-fab literal (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, manufacturer-certification claims).
2. ${ci.name.toUpperCase()}-FACT ACCURACY (the high-risk axis — ${ci.name} ≠ the other rewritten cities; and ${ci.name} ≠ its four caldwells-roseland siblings, which carry DIFFERENT COA gates and DIFFERENT reservation/floodplain geography):
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

Steps: READ the actual combo file src/data/combo-content/${city}/${f.combo}.ts at the cited field, plus the relevant fact pack(s) under .planning/content-system/research/ and the caldwells-roseland fact bank .planning/content-system/cities-batchD/CITY-FACTS-caldwells-roseland.md (the GLOBAL CORRECTIONS + the "${ci.name}" section). Determine:
- Is the offending text actually present as described?
- Does it genuinely violate a named-source fact, a ${ci.name} fact (esp. the COA posture — ${POSTURE[city]} — and the reservation / verified-neighborhoods-only / housing-age rules), an entity-grounding requirement (directAnswer form / registered-HIC-not-licensed), the ruleset, or cross-combo consistency? Check the GOLD exemplar — a phrasing that matches the committed Orange combo's answer-first/entity-grounded voice is NOT a defect, EXCEPT where it imports Orange's COA/geography or another caldwells-roseland sibling's anchors. Third-party "licensed public adjuster/engineer/Construction Official" cites are CORRECT — refute any finding that flags them as NQR "licensed" misuse.
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
