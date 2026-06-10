# roof-replacement-after-leak — East Orange (rewrite rationale)

De-fab literals cleared from the prior combo file:
- `overview[0]` price-and-hype opener ("delivers expert ... prices starting from $8,500–$25,000 and free estimates available today") → figure-free answer-first definition; price removed from all prose and confined to the `pricing` field + cost FAQ.
- Inline markdown self-links `[replacement after leak](/...)`, `[Essex County](/...)` → stripped to plain text (zero links anywhere).
- `whyChooseUs` template line "GAF Certified — 15+ years", "same-day estimates and 24/7 emergency response", "Premium materials from GAF, CertainTeed, Owens Corning with manufacturer warranties" → replaced with the four brief-default factual reasons (NJ HIC licensed/insured; local Essex crew; free written estimates; photo-documented workmanship).
- `conversionHooks.urgencyNote` "Early action saves thousands" → factual prompt (limits deck rot and interior water damage).
- Unsourced invented figures removed: "exceeds replacement within two to three years," "10 to 15 percent of replacement cost," "10 to 30 percent" concealed-cost add — none were in a fact pack; re-anchored to the sourced 3-repairs / 25% / 50% thresholds and deck-rot facts from the rewritten service object.
- Pricing range corrected to the brief's replacement default `$10,000–$25,000` (prior `$8,500–$25,000` was unsourced); `pricing.note` now names HomeAdvisor + Modernize.
- No invented geography to delete (prior file carried no Passaic/flood/reservation claim); flat-plain posture kept, mature street-tree canopy used as the qualitative stressor.
- Historic angle rewritten to East Orange's NO-local-COA posture (no Certificate of Appropriateness; Register listing alone unrestricted per NPS); the Newark HPC/COA gate was NOT carried over.

Named sources cited in-text:
- NRCA (90–95% of leaks originate at flashing), InterNACHI (deck rot / nail-grip; daylight/spongy sheathing), ARMA (recover hides rot; ¾-inch nail penetration), WeatherShield + roofing-industry guidance (3-repairs/25%/50% rules), Home Depot + Kelly Roofing (repair 5–10× cheaper under 10–15 yr), HomeAdvisor flat-roof guidance (systemic membrane failure).
- Code: N.J.A.C. 5:23-2.7 (ordinary-maintenance no-permit for 1–2 family; 25% rule for commercial/multi-family/attached), N.J.A.C. 5:23-6.4 (water-soaked-covering removal; two-layer recover bar), IRC R908.3.1.1 (recover not allowed over deteriorated deck), IRC R905.1.2 (ice barrier), Owens Corning (warranty separation).
- Insurance: Insurance Information Institute (wind/hail largest claim type, 2.8% / 1 in 36, avg ~$14,747).
- Cost: HomeAdvisor, Modernize, Josten Roofing NJ ($10,000–$25,000; architectural asphalt $6.50–$11.00/sq ft), HomeGuide (re-decking $2–$5/sq ft).
- East Orange: U.S. Census QuickFacts (87.6% multi-unit, ~69% renter), East Orange Building Division (Dept. of Property Maintenance, 44 City Hall Plaza), National Park Service (Register listing places no restriction), East Orange Dept. of Planning, Policy & Development (verify-local), Central Avenue Commercial Historic District.

Checks: directAnswer 39w; overview[0] 32w; challenges[0] 34w; process[0] 20w; every FAQ first sentence ≤40w; metaDescription 159 chars; no `**` in raw fields; no modality in declaratives; esbuild transform OK; export name / serviceId / cityId unchanged.
