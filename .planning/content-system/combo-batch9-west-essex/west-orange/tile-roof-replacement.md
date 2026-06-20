# west-orange/tile-roof-replacement — rewrite rationale

De-fabs cleared from the current combo file:
- Deleted the price-in-lead + hype "delivers expert tile roof replacement … with prices starting from $18,000–$40,000 and free estimates available today"; replaced overview[0] with an answer-first, entity-grounded, figure-free NQR-applied lead.
- Killed the fabricated "$18,000–$40,000" pricing tier (range + pricing.note + cost FAQ) → sourced replacement default $10,000–$25,000 per HomeAdvisor and Modernize, with the $10–$20+/sq ft premium-tile figure attributed to NHI Contractors.
- Killed the unsourced lifespan/engineering inventions: "75 to 100 years … in frost-free regions," "60 to 80 years," "less than 3 percent water absorption," "Mediterranean and Spanish Colonial character," "upper-elevation neighborhoods," "1920s-era Mediterranean revival," "open metal valleys … rainfall intensity," polymer-modified vs portland-cement mortar narrative → de-quantified or re-sourced (InterNACHI chart, Tile Roofing Industry Alliance, This Old House).
- Removed the whyChooseUs de-fab line "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning," and "same-day estimates and 24/7 emergency response" → registered NJ HIC / fully-insured framing.
- Removed conversionHooks "Don't wait … Early action saves thousands" hype → factual urgency note tied to underlayment failure.
- Stripped all inline markdown self-links ([tile roof replacement], [West Orange], [Montclair]) to plain text (none remain).
- No "elevation/altitude/gust/percentage" fabrications were carried (the engine the brief flags); kept only qualitative First Watchung ridge + reservation-edge canopy. No fabricated streets — only verified St. Cloud, Llewellyn Park, hillside Tudors. No Edison/Thomas Edison NHP framing, no named slate quarries.

Named sources cited in-text:
- InterNACHI life-expectancy chart (clay/concrete tile 100-plus years).
- Tile Roofing Industry Alliance (clay 75–100+ yr, concrete 40–75 yr; underlayment is the real limiter) + This Old House.
- NOAA 1991–2020 normals at Newark Liberty (EWR) (freeze-thaw 32-degree crossing).
- NRCA (≈90–95% of leaks trace to flashing).
- Essex County Parks (South Mountain Reservation + Eagle Rock Reservation).
- N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode — tile cannot be roofed-over, full tear-off); N.J.A.C. 5:23-2.7 (ordinary maintenance, no permit on detached 1–2 family).
- IRC R905.1.2 ice-barrier provision (International Residential Code).
- West Orange Historic Preservation Commission / Section 25-30 Certificate of Appropriateness (landmark-only: Holy Trinity Episcopal Church, the State Diner, the Hedges Block); Llewellyn Park 1857 private deed covenant; National Park Service (National Register listing alone places no federal restriction).
- HomeAdvisor + Modernize (NJ new-roof $10,000–$25,000); NHI Contractors ($10–$20+/sq ft premium tile).
- Township of West Orange Building & Construction Code Enforcement office (permit authority, named by function — no Construction Official named).

Entity-grounding: directAnswer entity-grounded (bold span 33 words, "roofing contractor providing tile roof replacement across West Orange, New Jersey, and Essex County …"), credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold; no `definition` field (spliced post-assembly); whyChooseUs uses "A registered New Jersey Home Improvement Contractor, fully insured." No "licensed" used for NQR anywhere.
