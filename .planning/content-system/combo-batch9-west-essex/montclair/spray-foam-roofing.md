# montclair/spray-foam-roofing — rewrite rationale

## De-fab literals cleared
- Deleted the price-in-lead: `overview[0]` "...with prices starting from $4–$8/sq ft and free estimates available today."
- Deleted the templated `whyChooseUs` trust lines: "NJ licensed, GAF Certified — 15+ years protecting Essex County...", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," and "Local team that knows Montclair — same-day estimates and 24/7 emergency response."
- Deleted `conversionHooks.urgencyNote` "Don't wait for minor damage to become a major expense. Early action saves thousands."
- Stripped all inline markdown self-links (`[West Orange](...)`, `[Bloomfield](...)`, `[Montclair](...)`, `[spray foam roofing](...)`) — zero links remain.
- De-quantified/re-sourced loose figures: the old "R-value of approximately thirteen," "fifteen to twenty-five years," "fifteen to thirty percent" energy-savings, and "twenty-five percent" moisture claims were replaced with named-sourced figures (aged R-6.0–R-6.5/in per ICC-ES/ASTM C1289 LTTR/SPFA; 30+ yr foam life + 10–20 yr recoat per SPFA/manufacturers; the 25% roof-area rule per N.J.A.C. 5:23-2.7). Dropped the unverifiable energy-savings %.
- No fabricated streets/sections imported (none of North Mountain Avenue / Church Street / Valley Road / Montclair Heights were carried). No "15–20 mph higher wind," no "130 mph / six-nail," no "tree preservation ordinance," no named slate quarries, no same-day/24/7/within-hours response claim.

## Entity-grounding applied
- `directAnswer` entity-grounded, bold span 39 words: "Newark Quality Roofing is a roofing contractor providing spray foam roofing across Montclair, New Jersey, and Essex County..." with the "as a registered New Jersey Home Improvement Contractor." credential tail OUTSIDE the bold. No `definition` field (left for the post-assembly splice).
- Credential framing = "a registered New Jersey Home Improvement Contractor, fully insured." No "licensed" anywhere for NQR.

## Named sources cited in-text
- SPFA, ICC-ES reports, ASTM C1289 LTTR testing — aged R-6.0 to R-6.5 per inch insulation.
- SPFA and SPF manufacturers — 30+ year foam life, 10–20 year recoat cycle (acrylic 10–15, silicone 15–20).
- InterNACHI life-expectancy chart — EPDM 15–25, TPO 7–20, mod-bit 20, BUR 30 yr; TPO welded-seam / EPDM seam-separation failure modes.
- NRCA and ARMA — positive drainage, ponding >48 hrs = defect, ¼-in-per-foot slope.
- N.J.A.C. 5:23-2.7 (ordinary-maintenance exemption / 25% commercial rule) and N.J.A.C. 5:23-6.4 (Rehabilitation Subcode, full removal at 2+ layers) — permits filed through the Township of Montclair Building Office.
- U.S. Census Bureau — roughly 54% of Montclair units in multi-unit structures.
- Essex County Parks — Eagle Rock Reservation and Mills Reservation adjacency on the First Watchung ridge.
- Owens Corning warranty guidance — written workmanship vs. manufacturer material warranty.
- Cost: $4–$8/sq ft installed per commercial roofing cost guides; NJ 10–40% above national.

## Montclair localization / COA
- CONDITIONAL local COA stated only where the historic angle arises (FAQ): a Certificate of Appropriateness from the Montclair Historic Preservation Commission is required only for appearance-changing exterior roofing inside the four locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) or on a local landmark, under Article XXIII of Chapter 347 §347-136; in-kind repair exempt; Estate Section nominated-not-designated; NPS National-Register-listing-alone-no-restriction. First sentence split to keep the definitive answer ≤40w. NO Village-wide/township-wide COA asserted.
- Foregrounded Montclair-distinct anchors: Bloomfield Avenue / Watchung Plaza / Upper Montclair business-district low-slope storefronts; 54% multi-unit two-/three-family flat sections; Eagle Rock + Mills reservation-edge and street-canopy debris on the First Watchung ridge. No South Mountain Reservation. No sibling (West Orange / Glen Ridge / Verona / Cedar Grove) anchors imported.
