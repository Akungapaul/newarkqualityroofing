# glen-ridge / roof-inspection — rewrite rationale

**De-fab literals cleared:**
- Price-in-lead ("prices starting from $150–$400 and free estimates available today") removed from `overview[0]`; replaced with an entity-grounded, figure-free NQR-applied lead. Price now lives only in `pricing` + the cost FAQ.
- WRONG COA framing corrected: deleted "entire residential fabric carries National Register historic designation," "every exterior modification must satisfy commission review," and the implied "nearly every home" overstatement → replaced with the binding LOCAL **Chapter 15.32** COA framing, **Glen Ridge Historic Preservation Commission**, district covers **over 90% of the borough** (NOT 100%/"every home"), and the explicit "not a consequence of the 1982 National Register listing" / NPS no-private-restriction clause.
- `whyChooseUs` "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning," "same-day estimates and 24/7 emergency response" → de-fabbed to "A registered New Jersey Home Improvement Contractor, fully insured." + local-stock + free-report + photo-documentation lines.
- `conversionHooks.urgencyNote` "Early action saves thousands" → factual ("catches a failing flashing or slate detail before it reaches the interior").
- Inline markdown self-links (`[roof maintenance programs](/...)`, `[Bloomfield](/...)`) stripped to plain text (none remain).
- Old pricing tier `$150–$400 / comprehensive inspection with written report` → replaced with the free-inspection model the service layer ships, with paid HomeAdvisor inspection ranges named in `pricing.note` and the cost FAQ.
- Dropped fabricated/over-asserted texture: "130 years," "drone photography," foam-pad superlatives, "material costs run substantially higher than in neighboring Bloomfield," and the "semi-annual… progresses rapidly" unsourced cadence. No `definition` field authored (spliced post-assembly).

**Named sources cited (only what the packs support):**
- **NRCA** — inspection cadence (at least twice per year, spring and fall, plus after any major weather event); the ~90–95%/5–10% flashing-leak estimate (attributed to the NRCA); the 1 sq ft net-free vent per 150 sq ft attic-floor ventilation standard (NRCA and ARMA); ¼-inch-per-foot slope / ponding-over-48-hours defect (NRCA and ARMA). [facts-process-standards.md]
- **InterNACHI** — roof inspection standard of practice (describe roof-covering type, report active-leak indications); life-expectancy chart (natural slate 60–150 yrs, architectural asphalt 30 yrs). [facts-cost-stats.md]
- **IBHS** — sealing the roof deck cuts water intrusion by up to 95%. [facts-process-standards.md]
- **HomeAdvisor** — inspection cost ranges ($75–$200 visual, $150–$400 drone, $400–$600 infrared; $248 national average). [facts-cost-stats.md]
- **Borough of Glen Ridge** — Historic District covers over 90% of the borough; permit office = Borough of Glen Ridge Building Department, 825 Bloomfield Avenue. **National Park Service** — National Register listing alone places no federal restriction on a private owner. [Glen Ridge city page / CITY-FACTS]

**Glen Ridge texture preserved/foregrounded (differentiation):** binding Chapter 15.32 COA (broadest in batch, district >90%); no-reservation inner lowland geography with the mature oak/maple/elm street-tree canopy as the defining stressor; pre-WWII Victorian/Edwardian/Colonial-Revival/Tudor/Dutch-Colonial single-family stock; complex multi-gable rooflines/dormers/slate-and-copper period detail; Bloomfield Avenue station-edge low-slope membrane. No price in any prose lead; credential = registered NJ HIC + fully insured.
