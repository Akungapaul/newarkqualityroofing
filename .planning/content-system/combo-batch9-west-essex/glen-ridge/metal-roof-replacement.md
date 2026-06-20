# glen-ridge / metal-roof-replacement — rewrite rationale

De-fab literals cleared from the current file:
- Deleted the price-in-lead (overview[0] "prices starting from $15,000–$35,000 and free estimates available today") and the OLD invented tier `$15,000–$35,000` → replaced with the sourced replacement default `$10,000–$25,000` (price now only in `pricing` + the cost FAQ).
- Stripped the inline markdown self-link `[Montclair](/metal-roof-replacement-montclair-nj)` (zero links now).
- Removed the templated `whyChooseUs` fabs: "NJ licensed, GAF Certified — 15+ years protecting Essex County…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," and "same-day estimates and 24/7 emergency response" → replaced with registered-NJ-HIC / fully-insured factual reasons.
- Killed the unsourced lifespan/cost prose ("80 to 120 years," "30 to 50 percent less," "$15,000 to $25,000 for a bay window") → re-sourced metal/copper lifespans to the InterNACHI life-expectancy chart + This Old House, and cost to HomeAdvisor/Modernize + Josten Roofing.
- Replaced "verdigris patina / storybook" marketing color with verified texture (plank/deteriorated sheathing at tear-off, copper period detailing, mature-canopy debris, station-edge low-slope membrane).
- De-fabbed the urgencyNote ("Early action saves thousands") → factual.

Glen Ridge-specific COA correction (the key fix): the service base ships a no-historic Newark frame. Localized to Glen Ridge's BINDING LOCAL Certificate of Appropriateness under Borough Code Chapter 15.32 (Historic Preservation Commission), district covers OVER 90% of the borough → "most homes fall inside the regulated district" (NOT 100%/"every home"); framed as the local-ordinance matter, NOT the 1982 National Register listing (per the National Park Service, listing alone = no federal restriction). A change of roofing material to metal triggers the COA, separate from the construction permit. Detached 1–2-family reroof stays no-permit ordinary maintenance under N.J.A.C. 5:23-2.7.

Entity-grounding: `directAnswer` reframed entity-grounded (roofing contractor + "Glen Ridge, New Jersey" + Essex County + registered NJ HIC; bold span 25 words). No `definition` field (spliced post-assembly). No "licensed" for NQR anywhere.

Named sources cited in-text: InterNACHI life-expectancy chart (metal 40–80 yr, copper 70+ yr); This Old House (standing-seam 40–70 yr, concealed fasteners); N.J.A.C. 5:23-2.7 (ordinary-maintenance / 25% rule); N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode tear-off triggers); IRC R905.1.2 (ice-barrier provision); Owens Corning warranty guidance; the Borough of Glen Ridge (district >90%); the National Park Service (NRHP listing = no private restriction); the Glen Ridge Historical Society (~1890s–1930s stock); HomeAdvisor and Modernize + Josten Roofing (cost). Permit office named as the Borough of Glen Ridge Building Department at 825 Bloomfield Avenue (no Construction Official named).
