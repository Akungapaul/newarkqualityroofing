# west-orange / wood-shake-roofing — rewrite rationale

Localized the answer-first `wood-shake-roofing` service object (`src/data/service-content/residential-roof-types.ts`) onto West Orange, mirroring the committed Nutley sibling's shape but differentiating on West Orange's distinct anchors.

## De-fab literals cleared (all present in the current combo file)
- Price-in-lead + hype: deleted `overview[0]` "delivers expert wood shake roofing … with prices starting from $14,000–$30,000 and free estimates available today."
- Fabricated pricing tier `$14,000–$30,000` → replaced with sourced `$10,000–$25,000` (roof-type/replacement default).
- The elevation-fabrication engine: "ridge-top installations above 400 feet," "elevation-driven climate," "elevation-specific failure patterns," "exposure profile," "ridge-top vs valley-floor" UV/moisture contrast — all deleted; kept only the QUALITATIVE verified fact (First Watchung ridge; a hillside slope catches stronger wind than a low-lying lot — no numbers).
- Fabricated streets/sections: "Gregory Avenue," "Northfield Road," "Eagle Rock positions" — dropped; only verified sections used (St. Cloud, Gregory, Llewellyn Park, hillside Tudors, reservation edges).
- Unsourced numbers: "$500 to $1,200" annual maintenance, "two to three times more … per square," "20 to 30-year lifespan shorter than asphalt," fabricated $14k–$30k cost FAQ — removed/re-sourced.
- whyChooseUs templated trust line: "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning," "same-day estimates and 24/7 emergency response" — replaced with registered-HIC / fully-insured factual reasons.
- conversionHooks.urgencyNote "Don't wait for minor damage to become a major expense. Early action saves thousands" — replaced with factual trapped-moisture framing.
- Inline self-links `[wood shake roofing](/wood-shake-roofing)`, `[Glen Ridge](/wood-shake-roofing-glen-ridge-nj)`, `[West Orange's](/roofing-in-west-orange-nj)` — stripped to plain text (0 links remain).
- No NQR "licensed" anywhere; credential = "a registered New Jersey Home Improvement Contractor," "fully insured."

## Entity-grounding
- `directAnswer` reframed entity-grounded (bold span 32 words): "Newark Quality Roofing is a roofing contractor providing wood shake roofing across West Orange, New Jersey, and Essex County…" + credential tail outside the bold.
- No `definition` field (propagated by post-assembly splice).

## West Orange differentiation (vs Nutley sibling + west-essex siblings)
- Foregrounded the WIDE/MIXED stock — hillside Tudors of the First Watchung ridge + Llewellyn Park estate homes (cedar period detail on estates), not Nutley's Lambert-era single-family.
- Reservation-edge canopy named as South Mountain + Eagle Rock ONLY (per Essex County Parks).
- NARROW LANDMARK-ONLY COA: Section 25-30, roughly ten locally designated landmarks (Holy Trinity Episcopal Church, the State Diner, the Hedges Block); typical reroof needs none.
- Llewellyn Park = PRIVATE 1857 deed-of-trust / Committee of Managers, NOT a township COA — asserted as private covenant, never as a township COA.
- Permit office named by function: Township of West Orange Building & Construction Code Enforcement office (no Construction Official named).

## Named sources cited in-text
- Cedar Shake & Shingle Bureau (shake 20–40 yr, shingle 30–50 yr; 1.5-inch drying space; moisture not insects; shaded-slope decay; Certi-Guard fire program)
- InterNACHI life-expectancy chart (single 25-year "Wood"; flex test)
- NRCA (drying-space guidance; flashing = most common leak source)
- HomeGuide (fungicide/algaecide $0.15–$0.60/sq ft); HomeAdvisor and Modernize (NJ replacement $10,000–$25,000; labor ~60–70%)
- UL 790 / ASTM E108 (fire classification)
- N.J.A.C. 5:23-2.7 (ordinary-maintenance / 25% rule); N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode tear-off); NJ Uniform Construction Code
- NOAA 1991–2020 normals at Newark Liberty (EWR) (freeze-thaw baseline); Essex County Parks (reservations)
- West Orange Historic Preservation Commission / Section 25-30; National Park Service (National Register listing places no federal restriction on a private owner)
