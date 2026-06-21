# caldwell/cedar-shake-roofing — rewrite rationale

## De-fab literals cleared
- Deleted the price-in-lead + hype on `overview[0]` ("delivers expert cedar shake roofing ... prices starting from $15,000–$32,000 and free estimates available today").
- Replaced invented pricing tier `$15,000–$32,000` ("premium cedar shake with preservative treatment") with the sourced replacement/installation default `$10,000–$25,000` (HomeAdvisor/Modernize) + cedar $/sqft attribution.
- Killed the whyChooseUs trust block: "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → de-fabbed to registered-HIC/fully-insured factual reasons.
- Removed `conversionHooks.urgencyNote` "Early action saves thousands" (fabricated savings) → factual moss/debris-drying note.
- Stripped all inline markdown self-links: `[Caldwell](/roofing-in-caldwell-nj)`, `[cedar shake roofing](/cedar-shake-roofing)`, `[Montclair](...)`, `[Glen Ridge](...)` — and dropped the cross-city Montclair/Glen Ridge comparison entirely.
- Deleted fabricated Caldwell texture: "Provost Square and the western neighborhoods", "larger lots", the mid-century/upgrade-not-preservation framing, the "$200–$400 annually" self-derived maintenance figure, "twenty-five to forty years" unsourced lifespan, "Class C fire rating" for untreated cedar (FALSE — untreated cedar is nonclassified), and "We specify fire-retardant-treated cedar for every Caldwell installation as standard" (invented program). No HD-1/HD-2/HD-3 overlay, no historic district, no reservation/floodplain, no enclave/large-lot, no Construction Official name.

## Entity-grounding
- `directAnswer` entity-grounded (bold span 39 words, credential tail outside bold): "roofing contractor providing cedar shake roofing across Caldwell, New Jersey, and Essex County ... as a registered New Jersey Home Improvement Contractor."
- No `definition` field (propagated by splice).
- NQR credential = "a registered New Jersey Home Improvement Contractor, fully insured." Zero "licensed" for NQR.

## Caldwell localization (verified facts)
- Permit office corrected to the Borough of Caldwell Construction Department at 24 Smull Avenue (was "Building Department on Bloomfield Avenue").
- Historic: Chapter 130 HPC + ordinance; COA applies ONLY to the borough's two locally designated landmarks; NO designated district; Grover Cleveland Birthplace (207 Bloomfield Ave) state-owned, not a homeowner gate (per NPS, Register listing alone places no restriction).
- Mature street-tree canopy = the defining residential stressor (kept qualitative); deteriorated sheathing at tear-off on Victorian-era/Colonial Revival stock; Bloomfield Avenue downtown commercial path. No elevation/snow/wind numbers.

## Named sources cited in-text
- Cedar Shake and Shingle Bureau (20–40 yr cedar life; 1.5-in underside air space; 25–30% cupped/split replacement threshold; Certi-Guard fire program).
- InterNACHI life-expectancy chart (single "Wood" = 25 yr; flex test).
- NRCA (ventilation/drying guidance, shaded-slope degradation).
- HomeGuide ($0.15–$0.60/sqft maintenance), NHI Contractors ($10–$20+/sqft installed), Angi ($400–$1,800 repair), HomeAdvisor/Modernize ($10,000–$25,000 NJ replacement).
- N.J.A.C. 5:23-2.7 (ordinary-maintenance / 25% rule), N.J.A.C. 5:23-6.4 (Rehab Subcode wood-shake complete removal); NJ Uniform Construction Code.
- UL 790 / ASTM E108 (fire test standards); National Park Service (Register-listing-no-restriction).
