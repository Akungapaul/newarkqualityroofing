# caldwell/metal-roof-installation-repair — rewrite rationale

De-fab literals cleared from the current file:
- Killed the price-in-lead ("prices starting from $15,000–$35,000 and free estimates available today") and the invented `$15,000–$35,000` tier → replaced with the sourced installation/roof-type default `$10,000–$25,000` (HomeAdvisor/Modernize NJ + Josten $9–$16/sqft) in pricing + the cost FAQ only.
- Killed `whyChooseUs` defabs: "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → 4 factual reasons using "A registered New Jersey Home Improvement Contractor, fully insured."
- Killed "Early action saves thousands" urgencyNote → factual water-damage limitation note; killed the "call now / fill out our form" CTA hype.
- Stripped the inline markdown self-links `[tree canopy](/roofing-in-caldwell-nj)` and `[metal roof installation and repair](/metal-roof-installation-repair)` → plain text (zero links, matching committed siblings).
- De-quantified the unsourced "two to two and a half times more" cost-multiplier and the unsourced "fifty-plus years" / "ten to fifteen years ago" claims → sourced lifespans (40–80 yr metal, 70+ copper, 20/30 asphalt) attributed to the InterNACHI life-expectancy chart; corrosion/seam thresholds (20–25% / 25%) attributed to roofing industry guidance; sealant-lap failure (5–10 yr) to roofing trade guidance.
- Entity-grounding applied: directAnswer reframed to the canonical shape (roofing contractor + "Caldwell, New Jersey" + Essex County, bold span 39 words, credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold). No `definition` field (propagated by splice). NQR never "licensed".

Caldwell facts corrected/added (vs. the contaminated current file):
- Permit office corrected to the Borough of Caldwell Construction Department at 24 Smull Avenue (not Bloomfield Avenue), no named Construction Official.
- NARROW LOCAL COA framing added: Chapter 130 HPC + ordinance; COA applies only to the borough's two locally designated landmarks; NO designated local historic district, so a typical home is not COA-regulated; Grover Cleveland Birthplace (207 Bloomfield Ave) state-owned, Register-listed, not a homeowner gate (per NPS, listing alone = no restriction). No "HD-1/HD-2/HD-3 overlay", no district, no second-landmark name.
- Geography kept qualitative: mature street-tree canopy branch impact as the defining metal-roof stressor; Bloomfield Avenue downtown low-slope storefronts; Victorian-era/Colonial-Revival + Capes/ranches stock. No reservation adjacency, no Passaic floodplain, no city-specific elevation/snow/wind number.

Named sources cited in-text:
- InterNACHI life-expectancy chart (metal 40–80 yr, copper 70+, asphalt 20/30).
- NRCA and ARMA (1 sq ft net-free vent per 150 sq ft attic floor).
- Metal Construction Association (thermal-expansion / clip movement).
- NOAA 1991–2020 normals at Newark Liberty (EWR) (avg Jan low ~25.5°F).
- IRC R905.1.2 (ice-barrier 24 in inside exterior wall line).
- N.J.A.C. 5:23-2.7 + NJ Uniform Construction Code (ordinary maintenance / 25% rule).
- Roofing industry/trade guidance (20–25% corrosion, 25% seam-connection thresholds; 5–10 yr sealant-lap failure).
- Josten Roofing NJ pricing ($9–$16/sqft) + Modernize ($200–$3,000 repair) + HomeAdvisor.
- Owens Corning warranty guidance (workmanship vs. material warranty).
- National Park Service (Register listing = no private-owner restriction).
