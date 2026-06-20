# montclair/aging-roof-replacement — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** removed from `overview[0]` ("prices starting from $8,500–$25,000 and free estimates available today") → replaced with figure-free, entity-grounded answer-first lead.
- **Pricing range** `$8,500–$25,000` with note "replacing end-of-life roofing" → corrected to the sourced replacement default `$10,000–$25,000` (HomeAdvisor + Modernize).
- **whyChooseUs** de-fabbed: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured factual reasons.
- **conversionHooks.urgencyNote** "Early action saves thousands" → factual no-savings statement.
- **Inline markdown self-links** stripped: `[aging roof replacement](/aging-roof-replacement)`, `[Montclair](/roofing-in-montclair-nj)`, `[West Orange](…)`, `[Verona](…)` → zero links, matching committed siblings.
- **Unsourced ROI claim** ("returns one hundred to one hundred fifty percent of cost") → corrected to "roughly 60 to 68% of project cost at resale, per Zillow analysis."
- No fabricated streets/sections imported (no North Mountain Ave / Church St / Valley Rd / Montclair Heights); no fabricated wind/elevation/gust number; no 130-mph/six-nail spec; no tree-preservation-ordinance claim; no named slate-quarry inventory; no response-time claim.

## Entity-grounding
- `directAnswer` entity-grounded, bold span 30 words (≤40), credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold; establishes "Montclair, New Jersey" + "roofing contractor". No `definition` field (propagated by splice).
- NQR credential = "a registered New Jersey Home Improvement Contractor, fully insured." No "licensed" for NQR anywhere.

## Montclair localization / COA
- CONDITIONAL local COA framed exactly: four locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) + local landmarks, Article XXIII of Chapter 347 §347-136; in-kind exempt; Estate Section nominated-not-designated; NPS = National Register listing alone places no federal restriction. COA = separate approval from the building permit. Long COA sentence SPLIT after "section 347-136" (faq3 first sentence = 39w).
- Permit office named by function only: Township of Montclair Building Office.
- Geography QUALITATIVE: First Watchung ridge, Eagle Rock + Mills Reservation adjacency (per Essex County Parks), heavy street-tree canopy; ~54% multi-unit (per U.S. Census Bureau); pre-WWII majority (per Township of Montclair Housing Element). No South Mountain Reservation, no elevation/gust/canopy figure.

## Named sources cited in-text
- InterNACHI life-expectancy chart (material lifespans)
- NRCA (asphalt-life variance up to 40%; attic ventilation reduces stress)
- N.J.A.C. 5:23-2.7 (ordinary-maintenance reroof exemption) + NJ Uniform Construction Code
- N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode — full removal of water-soaked/wood/slate/tile/2+-layer)
- IRC R905.1.2 (ice-barrier provision)
- Owens Corning warranty guidance (material vs workmanship warranty)
- Kellow / Modernize / Josten (contractor-consensus repair-vs-replace 30% rule)
- HomeAdvisor + Modernize (NJ replacement cost range)
- Zillow analysis (60–68% resale recoup)
- U.S. Census Bureau (~54% multi-unit) + Township of Montclair Housing Element (pre-WWII majority)
- Montclair Historic Preservation Commission / Article XXIII of Chapter 347 §347-136; National Park Service (COA)
