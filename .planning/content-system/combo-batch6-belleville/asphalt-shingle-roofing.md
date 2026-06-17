# Belleville × asphalt-shingle-roofing — rewrite rationale

## De-fab literals cleared
- Deleted the old `$8,500–$18,000` price + "free estimates available today" hype from `overview[0]`; price now lives only in `pricing` (`$10,000–$25,000`) and the cost FAQ.
- Removed the old `whyChooseUs` block ("NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response") → replaced with registered-HIC / fully-insured / local-crew / free-written-estimate / photo-documentation lines.
- Killed "GAF Certified," "certified installers for both manufacturers," same-day, 24/7, 15+ years, manufacturer brands as NQR credentials, "clearly superior value," and the "Early action saves thousands" urgency hook.
- Stripped both inline markdown self-links (`[asphalt shingle roofing](/…)`, `[Nutley](/…)`) and the GAF/Owens-Corning color-name marketing (Weathered Wood / Pewter Gray / Driftwood / Estate Gray sample-board copy).
- De-quantified/re-sourced previously unsourced numbers: lifespans now cite the InterNACHI life-expectancy chart; the 25–30% area + 50% cost repair-vs-replace rule now attributed to Kellow/Modernize (materials-economics §8); the up-to-40% climate variance and 90–95% flashing-leak and up-to-25% ventilation figures attributed to the NRCA/ARMA; 130 mph wind rating tied to ARMA + the manufacturer 6-nail pattern.
- No fabricated Belleville prose was present in this file's body to remove beyond the above (no Italian-American/Joralemon/Mill-Street/Belleville-Turnpike text in this combo), but all such patterns were confirmed absent in the rewrite.

## Entity-grounding applied
- `directAnswer` rewritten to the entity-grounded shape: bold span (31 words) = "Newark Quality Roofing is a roofing contractor providing asphalt shingle roofing across Belleville, New Jersey, and Essex County…"; credential tail "as a registered New Jersey Home Improvement Contractor." sits outside the bold.
- No `definition` field authored (propagated by post-assembly splice).
- NQR credential = "a registered New Jersey Home Improvement Contractor, fully insured." No "licensed" used for NQR anywhere (verified: `contains licensed: false`).

## Belleville facts / geography (verified only)
- Older, dense single-/two-/small-multi-family stock; ~one-third pre-1940; about half of units in 2+-unit structures (framed qualitatively); Soho older river-edge stock; Washington Avenue commercial spine; mature street-tree canopy debris; low-lying riverfront drainage.
- Two rivers kept distinct: Second River = southern/southwestern border WITH Newark; Passaic = eastern boundary, Belleville on the west bank. No "Passaic separates Belleville from Newark." No reservation asserted.
- Historic: active HPC but NO reroof COA — no designated district, single 2014 local landmark (Old Reformed Church of Second River, 171 Main Street); NPS Register-listing-imposes-no-restriction framing. No Bloomfield Ch. 302 / Newark / Orange COA imported.

## Named sources cited in-text
InterNACHI life-expectancy chart; NRCA (up-to-40% life variance, 90–95% flashing-leak share, up-to-25% ventilation life-extension); ARMA + manufacturer guidance (130 mph / 6-nail); IRC R905.1.2 ice-barrier; GAF/ARMA (drip edge); N.J.A.C. 5:23-2.7 (ordinary maintenance / 25% rule) + 5:23-6.4 (Rehab Subcode tear-off); Kellow/Modernize (repair-vs-replace thresholds); HomeAdvisor + Modernize (NJ replacement cost $10,000–$25,000); National Park Service (Register-listing places no restriction); Township of Belleville's construction office (permit authority).
