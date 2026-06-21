# essex-fells / energy-efficient-roofing-solutions — rewrite rationale

**De-fab literals cleared (from the current combo file):**
- Price-in-lead + hype ("delivers expert ... with prices starting from $10,000–$28,000 and free estimates available today") → answer-first, entity-grounded, figure-free overview[0].
- OLD invented pricing tier `$10,000–$28,000` / "cool-roof or reflective systems" → sourced default `$10,000–$25,000` with HomeAdvisor + Modernize attribution.
- whyChooseUs trust lines: "NJ licensed, GAF Certified — 15+ years...", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → de-fabbed to registered NJ HIC / fully insured factual reasons.
- conversionHooks urgencyNote "Early action saves thousands" → factual (pair-with-re-roof framing, no fabricated savings).
- Fabricated street **Hawthorne Avenue** (challenges/overview) → dropped; only verified roads retained (none beyond the borough qualitative framing were needed; Bowditch-plan lots used qualitatively).
- Fabricated estate-scale narrative ("residences along Fells Road, Hawthorne Avenue, and Devon Road -- often exceeding 5,000 square feet ... cathedral ceilings, multi-wing layouts, extensive window walls"), "Newark urban density" comparison, and unsourced "five to eight year payback" / "R-12 to R-14 / R-49 minimum" self-claims → removed; replaced with VERIFIED custom single-family stock + named-sourced 2021 IECC R-60 ceiling minimum.
- All inline markdown self-links (`[Newark](/...)`, `[energy efficient roofing solutions](/...)`) → stripped (zero links, matching committed siblings).
- No definition field authored (propagated by post-assembly splice per §0.2).

**Essex-Fells-DISTINCT anchors foregrounded:** NONE historic gate stated plainly (no HPC, no ordinance, no COA, no Register listing; "Essex Fells Historic District" REFUTED); mature ~50–150-year Bowditch canopy as the energy-math differentiator (shade returns insulation/ventilation over reflectance); upland, no-reservation, no-floodplain; custom single-family homes on large Bowditch-plan lots; Building Department at Borough Hall, 255 Roseland Avenue. No Grover Cleveland Birthplace, no Chapter 142 floodplain wording, no commercial district, no city-specific elevation/snow/wind number.

**Named sources cited in-text:** DOE (Cool Roofs surface-temp + reflectance/R-value levers + heating-climate caveat); EPA (11–27% peak cooling demand in air-conditioned residential; ENERGY STAR roof program sunset June 1 2021/2022); CRRC (CRRC-1 successor rating, Rated Products Directory, membrane reflectance/emittance); ASTM C1549 / C1371; 2021 IECC Table R402.1.3 (ceiling R-60, R-49 raised-heel exception) + NJ DCA; N.J.A.C. 5:23-2.7 (ordinary-maintenance reroof + 25% rule); National Park Service (Register listing imposes no private-owner restriction, via the historic FAQ framing); HomeAdvisor + Modernize (cost range).

**Localization base:** `src/data/service-content/energy-solar.ts` (serviceId `energy-efficient-roofing-solutions`, item 3) for facts/sources/voice; `src/data/combo-content/orange/roof-repair.ts` for answer-first + entity-grounded shape; `src/data/city-content/caldwells-roseland.ts` (cityId 'essex-fells') for verified geography, the NONE-historic gate, verified roads, InterNACHI lifespans, and the permit office.

**Gate self-checks:** directAnswer bold span 31w; overview[0] 35w; challenges[0] 33w; process[0] 36w (em-dashes counted); all 6 FAQ first sentences ≤39w; exactly one cost FAQ; metaDescription 160 chars; no `**` in raw fields; no banned literals; no modality in declaratives; no links; esbuild parse clean.
