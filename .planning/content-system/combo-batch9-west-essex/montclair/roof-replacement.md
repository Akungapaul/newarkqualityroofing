# montclair/roof-replacement — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** removed from `overview[0]` ("prices starting from $8,500–$25,000+ and free estimates available today") → answer-first, figure-free, entity-grounded lead.
- **Pricing range** corrected from invented `$8,500–$25,000+` / "based on roof size and material choice" → sourced default `$10,000–$25,000` with HomeAdvisor/Modernize attribution.
- **whyChooseUs** de-fabbed: deleted "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning", "same-day estimates and 24/7 emergency response" → registered-HIC / fully-insured factual lines.
- **conversionHooks**: "Early action saves thousands" + "call now or fill out our form" → factual CTA + factual urgency note.
- **Fabricated geography stripped**: "North Mountain Avenue," "Valley area," "Montclair Heights," "Cedar Grove border," township tree-permit/arborist-coordination claims, "high-wind elevations," "enhanced fastening schedules," "manufacturer certification requirements," and "maintain salvaged slate inventory" — all removed. Replaced with VERIFIED sections only (Upper Montclair, Watchung Plaza, Montclair Center/Town Center, Estate Section, Pine Street, South End, Erwin Park).
- **Village/township-wide COA claim** corrected: the old file asserted broad HPC jurisdiction over "designated properties and historic districts" loosely; rewritten as the CONDITIONAL four-district + local-landmark COA under Article XXIII of Chapter 347 §347-136, in-kind exempt, Estate Section nominated-not-designated.
- **Inline markdown self-links** stripped (Bloomfield/Glen Ridge/roof-replacement links in challenges).
- No GAF-Certified / same-day / 24/7 / 15+ years / response-time / "licensed" (for NQR) literals remain.

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — material lifespans (3-tab 20yr, architectural 30yr, metal 40–80yr, slate 60–150yr, copper 70yr+, EPDM 15–25yr, TPO 7–20yr, mod-bit 20yr).
- **U.S. Census Bureau** — roughly 54% of units in multi-unit structures.
- **Township of Montclair Housing Element** — roughly 60% of housing built before 1940.
- **Essex County Parks** — Eagle Rock Reservation + Mills Reservation adjacency on the First Watchung ridge.
- **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** — ordinary-maintenance reroof exemption, 25% commercial/multi-family permit rule, structural-change permit trigger.
- **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode)** — full-removal triggers (water-soaked / wood-slate-tile / 2+ layers).
- **Article XXIII of Chapter 347 §347-136 / Montclair Historic Preservation Commission** — conditional four-district + local-landmark COA.
- **National Park Service** — National Register listing alone places no federal restriction.
- **Secretary of the Interior's Standards (Standard 6)** — in-kind material match for designated properties.
- **IRC R905.1.2 (International Residential Code)** — ice-barrier 24-inch provision.
- **NRCA / ARMA** — 90–95% of leaks at flashing; 1 sq ft net-free vent per 150 sq ft.
- **Kellow / Modernize / Josten** — 25–30% area rule + 50% cost rule; **Home Depot / Kelly Roofing** — repair 5–10× less than replacement.
- **HomeAdvisor / Modernize** — NJ roof-replacement cost range $10,000–$25,000.

## Entity-grounding
- `directAnswer` entity-grounded: "roofing contractor," "Montclair, New Jersey," "Essex County," credential tail "as a registered New Jersey Home Improvement Contractor" OUTSIDE the bold (bold span = 30 words ≤40).
- `definition` field omitted (propagated by post-assembly splice).
- Credential = "registered New Jersey Home Improvement Contractor" + "fully insured" everywhere; no "licensed" for NQR.
