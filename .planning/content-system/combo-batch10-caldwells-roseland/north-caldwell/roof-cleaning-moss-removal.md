# north-caldwell / roof-cleaning-moss-removal — rewrite rationale

Answer-first, de-fabbed, entity-grounded rewrite localizing the rewritten service object (`service-content/repair-maintenance.ts`, serviceId `roof-cleaning-moss-removal`) to North Caldwell.

## De-fab literals cleared (from the CURRENT combo file)
- Price-in-lead "prices starting from $300–$800 and free estimates available today" in `overview[0]` → deleted; replaced with an entity-grounded, figure-free NQR-applied lead.
- Fabricated street "**Green Brook Road**" (estate-street character claim) → dropped; only verified North Caldwell texture (Hilltop canopy, custom colonials/Tudors) retained.
- Invented protocols and numbers: "300 PSI," "sodium percarbonate," "five to seven years" zinc-strip life, "15 feet" zinc dilution, "25 to 40 percent / halve the lifespan" growth-damage figures, "two years"/"eighteen months"/"every two to three years" cleaning-interval numbers, "roof harness/tie-off"/"extended-reach" crew theater → DELETED or de-quantified to ARMA/CSSB-NRCA-sourced facts.
- **Invented zinc-strip-on-existing-roof recommendation** ("we install supplemental zinc strips at mid-roof positions," "zinc ridge strips installed along the main ridge … suppressing regrowth for five to seven years") → CORRECTED to the ARMA position: zinc/copper inhibit growth but ARMA does NOT recommend adding strips to an existing roof (exposed nails leak / break sealant bond); strips reserved for a roof replacement.
- `whyChooseUs`: "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and 24/7 emergency response" → replaced with registered-HIC / fully-insured factual reasons.
- `conversionHooks.urgencyNote` "Early action saves thousands" → factual (lateral water movement to deck).
- `pricing.note` "based on roof size and growth severity" (unsourced) → This Old House-sourced range + free-written-estimate framing.
- Inline markdown self-links `[roof cleaning](/roof-cleaning-moss-removal)`, `[roofing](/roofing-in-north-caldwell-nj)` → stripped to plain text (zero links, matching committed siblings).
- No COA fabrication present here, but the permit FAQ states the verified truth: **no COA applies in North Caldwell** — the HPC (Chapter 107, Art. XIII) is advisory/survey-only with no designations; no O-8-2026, no Caldwell Ch.130, no Idaho district, no floodplain/FEMA.

## Named sources cited in-text
- **ARMA** — pressure-washing causes granule loss and premature failure; 50:50 chlorine-bleach-and-water solution at a 15–20-minute dwell + low-pressure rinse; moss lifts/curls shingle edges and raises blow-off risk; proper maintenance extends asphalt-shingle life ~25–30%; zinc/copper inhibit algae but ARMA does not recommend adding strips to an existing roof.
- **ARMA and Atlas Roofing** — Gloeocapsa magma algae feeds on the limestone filler in asphalt shingles; zinc/copper metal molecules inhibit algae.
- **CSSB and NRCA guidance** — shaded north-facing slopes hold moisture and grow moss faster.
- **GAF and InterNACHI** — granule loss exceeding ~30% of the surface marks a roof beyond cleaning.
- **This Old House** — roof cleaning $300–$1,050 ($675 avg for a 1,500-sq-ft home, $0.20–$0.70/sq ft); moss-prevention treatment $150–$250.
- **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** — detached one-/two-family roof-covering work = ordinary maintenance, no permit; 25% threshold for commercial/institutional; Borough of North Caldwell Construction Department at 141 Gould Avenue (Borough Hall).
- **National Park Service** (via city-page no-COA frame) — Register listing alone places no federal restriction; North Caldwell HPC under Chapter 107, Art. XIII is advisory/survey-only.

## Entity-grounding
- `directAnswer` entity-grounded; bold span 38 words ("Newark Quality Roofing … wooded, large-lot homes"); credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold; establishes "North Caldwell, New Jersey" + "roofing contractor."
- No `definition` field authored (propagated by post-assembly splice).
- Credential is "a registered New Jersey Home Improvement Contractor, fully insured" everywhere; no "licensed" used for NQR.
