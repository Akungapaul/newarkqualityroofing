# west-orange/commercial-metal-roofing — rewrite rationale

**De-fab literals cleared from the current file:**
- Price-in-lead ("prices starting from $10–$18/sq ft and free estimates available today") + the `$10–$18/sq ft` pricing tier → replaced with the brief's sourced replacement/roof-type default `$10,000–$25,000` (HomeAdvisor/Modernize NJ), price now only in `pricing` + the cost FAQ.
- whyChooseUs templated trust lines ("NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response") → de-fabbed to registered-HIC / fully-insured / free-estimate / photo-documentation reasons.
- `conversionHooks.urgencyNote` "Early action saves thousands" → factual, no fabricated savings.
- Fabricated street/section claims ("Pleasant Valley Way and Eagle Rock Avenue" framing, "Eagle Rock Avenue ridge-top" wind claim, "Upper Montclair ridge-top") → dropped; only VERIFIED West Orange geography retained (Main Street / Valley Road / Pleasant Valley Way / Route 280; St. Cloud, South Mountain + Eagle Rock Reservations).
- `Kynar 500` finish brand claims, "Sound Transmission Class 45" acoustic-spec fabrications, "40 to 60 feet expand more than an inch" invented thermal figures, "$10–$18/sq ft" → removed; replaced with sourced thermal-movement (100-ft expansion-provision, MCA/NRCA) and lifespan facts.
- Inline self-links (`[commercial metal roofing](/…)`, `[Montclair](/…)`, `[West Orange](/…)`) → all stripped (no links anywhere).
- Removed CTA hype ("call now or fill out our form").

**Entity-grounding applied:**
- `directAnswer` entity-grounded; bold span = 36 words (≤40), establishes "West Orange, New Jersey" + "roofing contractor"; credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field authored (propagated by post-assembly splice).
- Credential framing = "A registered New Jersey Home Improvement Contractor, fully insured." — no "licensed" for NQR anywhere.

**West Orange localization:**
- Commercial spine = Main Street / Valley Road / Pleasant Valley Way + Route 280 corridor; light-industrial off Route 280; reservation-edge canopy (South Mountain + Eagle Rock per Essex County Parks); First Watchung ridge-line wind (qualitative).
- Historic = NARROW LANDMARK-ONLY COA: Section 25-30, roughly ten locally designated landmarks (Holy Trinity Episcopal Church, the State Diner, the Hedges Block), typical building faces no review; NPS — National Register listing alone places no federal restriction. No township-wide or Llewellyn Park COA asserted.
- Permit office named by function: Township of West Orange Building & Construction Code Enforcement (no Construction Official named).

**Named sources cited in-text:** InterNACHI life-expectancy chart (metal 40–80 yrs, copper 70+, standing-seam 40–70, exposed-fastener 30–50); This Old House; metal-roofing industry consensus; Metal Construction Association + NRCA (100-ft expansion provisions); NRCA + ARMA (¼-in/ft slope, 48-hr ponding defect); NOAA 1991–2020 normals at EWR (freeze-thaw); N.J.A.C. 5:23-2.7 (25% rule / ordinary-maintenance) + N.J.A.C. 5:23-6.4 (Rehab Subcode tear-off triggers); NJ Uniform Construction Code; HomeAdvisor + Modernize (NJ replacement range); Integrity Home Exteriors (NJ 10–40% premium); Section 25-30 West Orange HPC; National Park Service; Essex County Parks.
