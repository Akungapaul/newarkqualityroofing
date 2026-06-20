# verona/asphalt-shingle-roofing — rewrite rationale

Answer-first, de-fabbed, entity-grounded rewrite of the Verona × asphalt-shingle-roofing combo. Localization base = the rewritten `asphalt-shingle-roofing` service object (`src/data/service-content/residential-roof-types.ts`); voice/shape exemplar = `src/data/combo-content/orange/roof-repair.ts`; geography crib = the committed Verona city page (`src/data/city-content/west-essex.ts`, cityId 'verona').

## De-fab literals cleared
- **Price-in-lead** — old `overview[0]` "prices starting from $8,500–$18,000 and free estimates available today" → deleted; replaced with a figure-free, entity-grounded NQR-applied lead.
- **Old invented pricing tier** `$8,500–$18,000` / `note: 'full installation with tear-off'` → replaced with the sourced replacement default `$10,000–$25,000`, HomeAdvisor/Modernize-attributed.
- **whyChooseUs** "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC/fully-insured factual set (no certifications, years, response-time, or manufacturer brands).
- **conversionHooks.urgencyNote** "Early action saves thousands" → factual "Addressing roof damage early limits interior and structural water damage."
- **Fabricated geography** — "Lakeview and Personette neighborhoods," "Claremont Avenue hilltop homes," "amplified uplift forces at level transitions," brand-specific FAQ recommendations (GAF Timberline HDZ, CertainTeed Landmark Pro, GAF WindProven/LayerLock), "Gloeocapsa magma," the "$200–$400 algae premium," the "30 to 40 percent faster granule loss" stat → all removed/de-quantified.
- **Inline markdown self-links** ([wind-rated products](/asphalt-shingle-roofing), [Caldwell](…)) → stripped (file carries zero links).

## Localization
- HISTORIC framed as NARROW **HPC review** (Zoning Ordinance Chapter 150, Article XXII), NOT a "Certificate of Appropriateness/COA" — exactly two designated landmarks (Erie Railroad Freight Shed at 62 Depot Street, Verona United Methodist Church), in-kind exempt, NPS no-restriction note. No Afterglow-as-designated claim.
- Permit office = Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue (no Construction Official named).
- Geography: Eagle Rock (First Watchung) + Hilltop (Second Watchung) reservation edges; Peckman River drainage near Verona Park (qualitative, city-page NWS-gauge framing); split-level transition flashing; pre-war Colonial plank-deck tear-offs; Bloomfield Avenue / Pompton Avenue corridor low-slope. No South Mountain, no Mills, no FEMA figure.

## Named sources cited in-text
- InterNACHI life-expectancy chart (3-tab 20 yr, architectural 30 yr lifespans).
- NRCA (±40% asphalt-life variance; ~90–95% of leaks originate at flashing; 1 sq ft net-free vent per 150 sq ft attic floor) + ARMA (wind ratings, drip-edge, ventilation).
- IRC R905.1.2 (ice barrier ≥24 in inside exterior wall line); GAF installation guidance (36-in valley underlayment; drip edge ≥2 in onto deck); ARMA/manufacturer 6-nail 130-mph pattern.
- N.J.A.C. 5:23-2.7 (ordinary-maintenance reroof exemption; 25% rule) + N.J.A.C. 5:23-6.4 (full removal of multi-layer/water-soaked deck), per the NJ Uniform Construction Code.
- HomeAdvisor + Modernize NJ cost data ($10,000–$25,000 replacement range).
- Essex County Parks (Eagle Rock / Hilltop reservations); NOAA National Weather Service Peckman River gauge; National Park Service (National Register listing places no private-owner restriction).

directAnswer bold span = 40 words; overview[0] = 35; challenges[0]/process[0] first sentences ≤40; all FAQ first sentences ≤40; metaDescription 156 chars; 6 FAQs (one cost FAQ). No `definition` field (spliced post-assembly).
