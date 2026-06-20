# glen-ridge / rubber-roofing-epdm — rewrite rationale

**De-fab literals cleared from the current file:**
- Deleted the price-in-lead + hype ("delivers expert rubber roofing epdm in Glen Ridge — with prices starting from $6,000–$16,000 and free estimates available today") from `overview[0]`; replaced with an answer-first, entity-grounded, figure-free NQR-applied lead.
- Killed the invented pricing tier `$6,000–$16,000` ("EPDM rubber membrane system" note); replaced with the §E sourced default `$10,000–$25,000` (NJ replacement per HomeAdvisor/Modernize) with the EPDM repair range `$300–$1,100` folded into the note (matches the committed Nutley sibling).
- Stripped the templated `whyChooseUs` lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and 24/7 emergency response" — and rebuilt with the registered-HIC / fully-insured framing and the Glen Ridge-localized crew line.
- Rewrote `conversionHooks.urgencyNote` "Don't wait for minor damage to become a major expense. Early action saves thousands" → factual "Addressing a failed EPDM seam early limits interior and structural water damage."
- Removed "NJ licensed" everywhere for NQR (grep: 0 "licensed"); credential is "a registered New Jersey Home Improvement Contractor."
- No fabricated streets/sections survive (no Carteret Street, no gaslit/century-old-elms mythologizing); no fabricated NJ historic-roof tax credit; no named-quarry slate inventory; no 40–60% storm-spike; no "within hours"; no two-phase protocol; no "every/virtually every home is historic" overstatement; no inline markdown self-links.
- COA framing corrected from the WRONG "National Register Historic District" gate to the binding LOCAL **Chapter 15.32** COA: the Glen Ridge Historic Preservation Commission issues a Certificate of Appropriateness; the historic district covers **over 90%** of the borough (NOT "every home"/100%); the COA is a local-ordinance requirement, NOT a consequence of the 1982 National Register listing (NPS: listing alone places no federal restriction on a private owner).

**Entity-grounding applied:**
- `directAnswer` entity-grounded, bold span = 40 words (≤40), establishes "Glen Ridge, New Jersey" + "roofing contractor"; credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- `definition` field omitted (propagated by the post-assembly splice).

**Named sources cited in-text:**
- InterNACHI life-expectancy chart — EPDM 15–25 yrs, TPO 7–20 yrs, modified bitumen 20 yrs.
- HomeGuide membrane-repair guidance — seam separation as the dominant EPDM failure mode; membrane shrinkage as the secondary failure point.
- NRCA and ARMA — flat roof needs ≥¼ in/ft slope to drain; ponding >48 hours counts as a defect.
- Owens Corning warranty guidance — manufacturer system warranty vs. written workmanship warranty.
- Integrity Home Exteriors documentation guidance — photo documentation of completed work.
- N.J.A.C. 5:23-2.7 (ordinary-maintenance / 25% rule) and N.J.A.C. 5:23-6.4 (Rehab Subcode recover-vs-tear-off), per the NJ Uniform Construction Code; Borough of Glen Ridge Building Department at 825 Bloomfield Avenue.
- HomeGuide / Modernize / WeatherShield cost data + HomeAdvisor/Modernize NJ replacement range (cost FAQ + pricing).
- Borough of Glen Ridge (over-90% historic-district coverage); National Park Service (National Register listing places no federal restriction).

**Glen Ridge differentiation foregrounded:** binding Chapter 15.32 COA (broadest in batch, >90% of borough → most homes regulated); no-reservation inner lowland geography with the mature street-tree canopy (oak/maple/elm) as the defining stressor; The Glen / Toney's Brook localized drainage; pre-WWII Victorian/Edwardian/Colonial-Revival/Tudor/Dutch-Colonial concealed porch/dormer flats; plank/deteriorated sheathing at tear-off; Bloomfield Avenue station-edge low-slope membrane; permit office = Borough of Glen Ridge Building Department at 825 Bloomfield Avenue. No other west-essex sibling anchors imported.
