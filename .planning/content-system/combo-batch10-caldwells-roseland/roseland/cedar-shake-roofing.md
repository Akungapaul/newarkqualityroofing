# roseland/cedar-shake-roofing — rewrite rationale

## De-fab literals cleared
- Deleted the price-in-lead ("prices starting from $15,000–$32,000 and free estimates available today") from overview[0]; price now lives only in `pricing` + the cost FAQ.
- Replaced the invented `$15,000–$32,000` tier with the sourced replacement/installation default `$10,000–$25,000` (HomeAdvisor/Modernize), with the cedar per-sq-ft figure ($10–$20+, NHI Contractors NJ) in the note.
- Stripped the `whyChooseUs` de-fabs: "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured factual reasons (§E).
- Removed the inline markdown self-links (`[cedar shake roofing](/cedar-shake-roofing)`, `[Montclair](/cedar-shake-roofing-montclair-nj)`) — zero links now.
- Removed the unsourced claims: "insulation value roughly twice that of asphalt," "extends service life by 10 to 15 years," "30 to 40 year service life," British-Columbia mill-sourcing / "we stock both cuts" stocking claim, the 4:12/3:12 minimum-pitch figures, and the "two to three times more than architectural shingles" multiplier. Replaced numeric lifespan with the named-sourced 20–40 yrs (Cedar Shake and Shingle Bureau) vs 25 yrs "Wood" (InterNACHI chart).
- Replaced the conversionHooks urgencyNote ("Early action saves thousands") with a factual no-savings line.
- Corrected geography/historic posture: no COA assertion against any Roseland homeowner — used the §C conditional framing (Landmarks and Historic District Commission + COA process under Chapter 30, Article IX EXIST; binding gate only on locally designated properties; none confirmed; §30-901.1 owner consent). Williams-Harrison House framed as Register-listing heritage color only, per NPS (not a COA gate). Permit office corrected to "Borough of Roseland construction-code office at 300 Eagle Rock Avenue" (no named Construction Official). No Watchung/Fairfield/reservation/whole-borough-flood/elevation-snow-wind claims; floodplain kept to the western/riverine edge (459-ac FEMA SFHA, named-sourced) with most of the borough on higher ground.

## Named sources cited in-text
- Cedar Shake and Shingle Bureau (20–40 yr cedar lifespan; 1.5-in underside air space; 25–30% cupped/split replacement threshold; shaded-slope decay; Certi-Guard fire program; grade standards).
- InterNACHI life-expectancy chart ("Wood" 25 yrs) and InterNACHI flex test.
- NRCA (shaded-slope drying guidance).
- N.J.A.C. 5:23-2.7 (ordinary-maintenance / 25% rule) and N.J.A.C. 5:23-6.4 (Rehab Subcode complete-removal of a wood-shake covering), per the NJ Uniform Construction Code.
- UL 790 / ASTM E108 (fire classification of treated vs untreated cedar — Class B/C).
- Borough of Roseland Master Plan (~459-ac FEMA Special Flood Hazard Area on the western edge).
- HomeAdvisor + Modernize ($10,000–$25,000 NJ replacement range); NHI Contractors NJ ($10–$20+/sq ft cedar); Angi (cedar repair $400–$1,800).
- National Park Service (Register listing alone places no restriction on a private owner).
- Integrity Home Exteriors (verification/documentation guidance).

## Entity-grounding
- `directAnswer` entity-grounded: "Newark Quality Roofing is a roofing contractor providing cedar shake roofing across Roseland, New Jersey, and Essex County …" bold span = 35 words; credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field (propagated by post-assembly splice).
- NQR credential = "a registered New Jersey Home Improvement Contractor, fully insured" — no "licensed" for NQR anywhere. Third-party "licensed" cites not needed in this service.
