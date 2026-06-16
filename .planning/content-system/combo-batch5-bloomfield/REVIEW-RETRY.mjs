export const meta = {
  name: 'combo-batch5-bloomfield-review-retry',
  description: 'Adversarial review + refute of the 65 Bloomfield combo rewrites (Combo Batch 5) by service-category cohort',
  phases: [
    { title: 'Review', detail: '9 cohort reviewers verify fabrication, source-attribution, Bloomfield facts, entity-grounding, cross-combo consistency' },
    { title: 'Refute', detail: 'adversarially refute each med/high finding before it is confirmed' },
  ],
}

// 9 category cohorts (serviceIds = file stems in src/data/combo-content/bloomfield/<id>.ts)
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
          category: { type: 'string', enum: ['fabrication','source-attribution','bloomfield-fact','entity-grounding','modality','defab','answer-length','consistency','other'] },
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
  const files = c.combos.map(s => `src/data/combo-content/bloomfield/${s}.ts`).join('\n  ')
  return `You are an adversarial content reviewer for the "${c.name}" cohort of the Bloomfield (Township of Bloomfield, NJ) service×city combo pages (a local-SEO roofing site). Verify factual accuracy, source attribution, Bloomfield geography, and entity-grounding against the fact packs. Be skeptical and precise; flag only genuine problems with a concrete fix.

READ FIRST (your ground truth):
- The ruleset: .planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md
- The Bloomfield author brief: .planning/content-system/combo-batch5-bloomfield/_BLOOMFIELD-BRIEF.md (esp. §0 ENTITY-GROUNDING + §C Bloomfield facts)
- The Bloomfield city fact bank: .planning/content-system/cities-batchB/CITY-FACTS-first-suburbs.md (the §0–§5 GLOBAL CORRECTIONS + the "Bloomfield" section, incl. the UNVERIFIED gaps)
- The committed Bloomfield CITY page: src/data/city-content/first-suburbs.ts (cityId 'bloomfield') — verified Bloomfield geography/voice
- The fact packs for this cohort: ${packs}
- Gold voice/structure + ENTITY-GROUNDING exemplar: the committed src/data/combo-content/orange/roof-repair.ts (same answer-first + entity-grounded shape — but Orange's geography/COA DIFFER from Bloomfield's)

THEN review each combo file in your cohort:
  ${files}

CHECK every combo for:
1. FABRICATION — every hard number (cost, %, lifespan, mph, temperature, dimension, code section) must trace to a NAMED source in the packs. Flag invented figures, invented NQR self-stats, response-time claims, fabricated programs ("investment property program"/"portfolio pricing"), "closest contractor" superlatives, manufacturer brands as NQR credentials ("Premium materials from GAF/CertainTeed/Owens Corning"), and any de-fab literal (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, manufacturer-certification claims).
2. BLOOMFIELD-FACT ACCURACY (the high-risk axis — Bloomfield ≠ Newark ≠ East Orange ≠ Orange ≠ Irvington):
   - Permit office = the "Township of Bloomfield's construction office". Name it qualitatively; do NOT invent a fee schedule, a director, or an exact department name.
   - Reroof on a detached 1–2 family home = ordinary maintenance under N.J.A.C. 5:23-2.7, NO permit; the 25% rule applies to commercial/multi-family/attached; recover-vs-tear-off follows N.J.A.C. 5:23-6.4 (full list: wood shake, slate, clay, cement, or asbestos-cement tile).
   - Historic = **BLOOMFIELD HAS A CONDITIONAL, LISTED-PARCEL COA under Township Code Chapter 302** (a local Historic Preservation Commission application is required for exterior work on a parcel on the Township's "Historic District Property List"). FLAG: (a) any claim that Bloomfield has "no COA"/"no historic gate" (WRONG — it has one); (b) any assertion that a whole neighborhood or the entire township is regulated (it is a LISTED-PARCEL gate only); (c) conflating the National Register Bloomfield Green Historic District (NR 1978) boundary with the local Property List (the LOCAL list sets jurisdiction); (d) importing Newark's or Orange's specific COA districts. A correct historic angle states the conditional Chapter 302 / Property-List gate, and notes (per the NPS) that a National Register listing alone places no federal restriction on a private owner.
   - Geography = **Bloomfield is an inner-ring township NORTH of Newark; the Third River runs near the TOWN CENTER; the Garden State Parkway threads the commercial spine; it borders Montclair, Glen Ridge, Belleville, Nutley, and Newark.** FLAG: calling Watsessing Park's water the Third River (it is the Second River + Toney's Brook); calling Brookdale Park or any Bloomfield park a "reservation"; importing Irvington's "no-river/Vailsburg/I-78" framing, East Orange's "flat Watsessing plain," or Orange's "Watchung-ridge."
   - Census = roughly even owner/renter split (~50.7% owner-occupied) with a significant two-family/garden-apartment share — QUALITATIVE ONLY. FLAG any published renter/owner %, any 5+-unit %, any pre-1940/pre-1950 %, any median-year-built figure (all UNVERIFIED). Population ~53,105 (2020) is qualitative-only. FLAG framing Bloomfield as "majority-renter" (Irvington's framing) OR as a high-homeownership suburb. BANNED: any city-specific urban-heat-island or wind degree/gust number; EPA heat-island framing is qualitative only (about 1–7°F).
   - Neighborhoods (verified ONLY): Bloomfield Center (historic civic core around Bloomfield Green), Watsessing (SE, Watsessing Park, Second River + Toney's Brook, Watsessing Ave NJ Transit), Brookdale (north, Brookdale Park on the Montclair line), Ampere (Bloomfield/East Orange/Newark edge), Silver Lake and Halcyon (CDP partly in Bloomfield + a named locale) + the Broad Street / Bloomfield Avenue / Garden State Parkway commercial corridors. FLAG invented section/street names not in this list (e.g. "Oakcrest," "North End"). FLAG framing split-levels/bi-levels as Bloomfield's DOMINANT stock (dominant = pre-war Colonials/Dutch Colonials/Capes + two-family/garden apartments).
3. ENTITY-GROUNDING (the requirement — check each):
   - directAnswer must be entity-grounded: "Newark Quality Roofing is a roofing contractor providing {service} across Bloomfield, New Jersey, and Essex County, …" with the credential tail "as a registered New Jersey Home Improvement Contractor." FLAG a directAnswer missing "roofing contractor", "Bloomfield, New Jersey", or the registered-HIC credential.
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
   - Any banned NRCA "extends roof life by up to 25%" ventilation figure → flag (gold combos dropped it; keep the qualitative point).
   - Any RICOWI "2–3× field pressure" wind-uplift multiplier → flag (fabricated; gold combos carry none).
   - INSURANCE CLAIM DEADLINES: FLAG any invented statutory claim-deadline such as "30 days of discovery" or "a two-year statutory window for hurricane/named-storm losses per NJ DOBI" — NJ has no such statutory roofing claim deadline; the correct framing is the policy's own prompt-notice / proof-of-loss term (a ~60-day proof-of-loss policy term), and only a licensed public adjuster or attorney negotiates a claim per N.J.S.A. 17:22B.
5. MODALITY — no will/should/need-to/must/has-to/have-to in declarative sentences (FAQ questions exempt).
6. ANSWER-LENGTH — the directAnswer BOLD SPAN, the first string of overview/challenges/process, and each faq answer's first sentence should each be ≤40 words and definitive (the bold span, not the whole directAnswer sentence).
7. CROSS-COMBO CONSISTENCY within your cohort — the SAME fact must carry the SAME attribution and value across your combos (flag a stat attributed to source X in one combo and source Y in another).

Return structured findings. For each, give the exact field, severity, the offending evidence text, and a concrete before→after suggestedFix. If a combo is clean, do not invent findings. Prioritize high/med (fabrication, wrong Bloomfield fact, entity-grounding miss, wrong source); include low only when clearly correct to fix.`
}

function refutePrompt(f, cohortName) {
  return `You are an adversarial REFUTER on the "${cohortName}" Bloomfield combo review. A reviewer raised the finding below. Decide if it is REAL or a false positive, defaulting to skepticism of the FINDING (the original text is presumed defensible unless the finding proves otherwise). Verify against the fact packs and the Bloomfield fact bank.

FINDING:
- combo: ${f.combo}
- field: ${f.field}
- severity: ${f.severity}
- category: ${f.category}
- issue: ${f.issue}
- evidence: ${f.evidence}
- suggestedFix: ${f.suggestedFix}

Steps: READ the actual combo file src/data/combo-content/bloomfield/${f.combo}.ts at the cited field, plus the relevant fact pack(s) under .planning/content-system/research/ and the Bloomfield fact bank .planning/content-system/cities-batchB/CITY-FACTS-first-suburbs.md (§0–§5 + the "Bloomfield" section). Determine:
- Is the offending text actually present as described?
- Does it genuinely violate a named-source fact, a Bloomfield fact (esp. CONDITIONAL-Ch.302-COA-on-listed-parcels-NOT-township-wide-and-NOT-"no-COA" / Third-River-at-town-center-vs-Watsessing's-Second-River+Toney's-Brook / no-reservation / roughly-even-owner-renter-split-qualitative / verified-neighborhoods-only / pre-war-Colonial+two-family-dominant-not-split-level rules), an entity-grounding requirement (directAnswer form / registered-HIC-not-licensed), the ruleset, or cross-combo consistency? Check the GOLD exemplar — a phrasing that matches the committed Orange combo's answer-first/entity-grounded voice is NOT a defect, EXCEPT where it imports Orange's COA/geography. Third-party "licensed public adjuster/engineer/Construction Official" cites are CORRECT — refute any finding that flags them as NQR "licensed" misuse.
Return verdict "confirmed" only if the finding is a real, fixable problem; otherwise "refuted". If confirmed, give the exact before→after finalFix (preserve facts, relocate/re-attribute rather than delete).`
}

phase('Review')
const RETRY = new Set(['repair-maintenance','commercial-services','energy-solar','replacement-B'])
const RETRY_COHORTS = COHORTS.filter(c => RETRY.has(c.name))
log(`RETRY: re-reviewing ${RETRY_COHORTS.length} affected cohorts (replacement-B never ran; repair-maintenance/commercial-services/energy-solar lost refuters)…`)

const perCohort = await pipeline(
  RETRY_COHORTS,
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
