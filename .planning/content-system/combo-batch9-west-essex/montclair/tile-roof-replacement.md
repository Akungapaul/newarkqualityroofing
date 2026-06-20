# montclair/tile-roof-replacement — rewrite rationale

## De-fab literals cleared
- Deleted the price-in-lead: `overview[0]` "delivers expert tile roof replacement in Montclair — with prices starting from $18,000–$40,000 and free estimates available today."
- Replaced the OLD pricing range `$18,000–$40,000` (invented tier) with the brief's sourced replacement default `$10,000–$25,000` (HomeAdvisor/Modernize), and replaced the bare `note` "tile roof replacement installed" with the sourced free-written-estimate note.
- Stripped the four inline markdown self-links: `[Montclair](/roofing-in-montclair-nj)`, `[tile roof replacement](/tile-roof-replacement)`, `[West Orange](/tile-roof-replacement-west-orange-nj)`, `[South Orange](/tile-roof-replacement-south-orange-nj)` — and dropped the off-topic neighboring-city name-drop.
- De-fabbed `whyChooseUs`: removed "NJ licensed, GAF Certified — 15+ years protecting Essex County," "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," and "same-day estimates and 24/7 emergency response." Replaced with the registered-HIC / fully-insured / free-written-estimate / photo-documented factual set.
- `conversionHooks.urgencyNote` "Don't wait for minor damage to become a major expense. Early action saves thousands." → factual "Addressing a failing tile underlayment early limits interior and structural water damage." `midPageCta` de-hyped to a plain free-estimate CTA.
- De-quantified/sourced the previously unsourced lifespans ("seventy-five to one hundred years," "forty to sixty years") to clay 75–100-plus / concrete 40–75, per the Tile Roofing Industry Alliance and the InterNACHI life-expectancy chart.

## Historic / COA correction
- Replaced the vague old HPC FAQ ("Designated properties … would need Commission review") with the CONDITIONAL local COA framing: a Certificate of Appropriateness from the Montclair Historic Preservation Commission is required ONLY for appearance-changing exterior roofing inside one of the FOUR locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) or on a local landmark, under Article XXIII of Chapter 347 §347-136; in-kind repair is EXEMPT; the Estate Section is nominated but NOT locally designated; per the NPS, National Register listing alone places no federal restriction. COA stated as a SEPARATE approval from the building permit. No Village-wide/township-wide COA asserted. First sentence split to keep the definitive answer ≤40w.

## Entity-grounding
- `directAnswer` entity-grounded: bold span (32w ≤40) names "Newark Quality Roofing is a roofing contractor providing tile roof replacement across Montclair, New Jersey, and Essex County," with the credential tail "as a registered New Jersey Home Improvement Contractor." OUTSIDE the bold. No `definition` field authored (spliced post-assembly). Zero "licensed" for NQR; credential = registered NJ HIC, fully insured.

## Named sources cited in-text
- Tile Roofing Industry Alliance (clay/concrete lifespans; underlayment as the real service-life limiter)
- InterNACHI life-expectancy chart (clay/concrete tile 100-plus years)
- This Old House (underlayment fails before tile; leaks under intact tile)
- N.J.A.C. 5:23-6.4 / NJ Rehabilitation Subcode (tile cannot be roofed-over; complete removal of existing covering)
- N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code (detached 1–2 family reroof = ordinary maintenance, no permit; structural change triggers a permit)
- IRC R905.1.2 / International Residential Code (ice-barrier provision, 24 in. inside the wall line)
- HomeAdvisor and Modernize (NJ $10,000–$25,000 replacement range); NHI Contractors ($10–$20-plus/sq ft premium tile)
- Montclair Historic Preservation Commission / Article XXIII of Chapter 347 §347-136 (conditional four-district COA); National Park Service (National Register listing imposes no federal restriction)
- Township of Montclair Building Office (permit path; FUNCTION only, no named Construction Official)

## Montclair texture preserved (restructured answer-first)
Architecturally diverse early-20th-century / Mediterranean / Spanish-revival period stock; plank/deteriorated sheathing exposed at tear-off; underlayment-failure-under-intact-tile failure mode; structural tile-dead-load verification; verified sections (Upper Montclair, Estate Section, Erwin Park) and the Bloomfield Avenue storefront context via whyChooseUs. Geography kept qualitative — no elevation/gust/canopy-%, no South Mountain Reservation, no fabricated streets ("North Mountain Avenue," "Church Street," "Valley Road," "Montclair Heights"), no named slate-quarry inventory, no "130 mph / six-nail" spec.
