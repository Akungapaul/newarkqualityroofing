# verona/spray-foam-roofing — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** (`overview[0]` opened "prices starting from $4–$8/sq ft and free estimates available today") → deleted; replaced with an entity-grounded, figure-free, answer-first lead naming NQR + the service applied to Verona's building stock.
- **whyChooseUs templated trust lines** — "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured framing + factual local-crew/free-inspection/photo-documentation reasons.
- **conversionHooks.urgencyNote** "Early action saves thousands" (fabricated savings) → factual coating-maintenance note, no hype.
- **Inline markdown self-links** — `[spray foam roofing](/spray-foam-roofing)` and `[West Orange](/spray-foam-roofing-west-orange-nj)` → stripped to plain text (zero links in the file).
- **Fabricated specificity** — the old "R-6.5 per inch" hard figure, "minimum 25-mil elastomeric coating", "every 8 to 12 years" recoat, and "1.5 to 3 inches" thickness (all unsourced/invented) → replaced with the named-sourced R-6.0–6.5/in (ICC-ES/ASTM C1289 LTTR/SPFA) and the sourced 10–20-year recoat cycle (acrylic 10–15, silicone 15–20, per SPFA/manufacturers) carried verbatim from the rewritten service layer.
- **Cross-city contamination** avoided — no South Mountain, no Mills, no COA/"Certificate of Appropriateness"; Verona's narrow HPC-review framework is only relevant to historic services, so it is not forced onto this low-slope commercial service. Geography limited to the verified Bloomfield Avenue / Pompton Avenue corridors, Verona Park / Peckman River, split-levels, and the pre-war Colonial / postwar Cape-ranch / 1960s–70s split-level stock.

## Entity-grounding applied
- `directAnswer` rewritten in the canonical shape: "**Newark Quality Roofing is a roofing contractor providing spray foam roofing across Verona, New Jersey, and Essex County, …**" (bold span = 38 words, ≤40) with the "as a registered New Jersey Home Improvement Contractor." credential tail OUTSIDE the bold. Establishes "Verona, New Jersey" and "roofing contractor".
- No `definition` field authored (propagated by post-assembly splice).
- NQR credential = "a registered New Jersey Home Improvement Contractor, fully insured." No "licensed" anywhere for NQR.

## Named sources cited in-text
- **SPFA / SPF manufacturers** — seamless foam, 30+-year foam life, UV-sensitivity, primary failure modes (blistering/adhesion loss), recoat cycle.
- **ICC-ES reports / ASTM C1289 LTTR testing / SPFA** — aged R-value R-6.0 to R-6.5 per inch.
- **NRCA and ARMA** — positive drainage, ¼ inch per foot slope, ponding >48 hours = defect.
- **N.J.A.C. 5:23-6.4** (NJ Rehabilitation Subcode) — full removal once water-soaked or 2+ layers; recover eligibility.
- **N.J.A.C. 5:23-2.7** (NJ Uniform Construction Code) — 25%-in-12-months commercial permit threshold; permit filed through the Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue.
- **InterNACHI life-expectancy chart + NRCA technical guidance** — TPO welded-seam / EPDM seam-separation failure modes (single-ply comparison).
- **NOAA 1991–2020 normals at Newark Liberty (EWR)** — freeze-point crossing baseline (shared, hedged; no Verona-specific number).
- **CRRC** — cool-roof reflective-coating rating.
- **Owens Corning warranty guidance** — workmanship vs. material warranty split.
- **HomeAdvisor/Modernize-class commercial roofing cost guides** — $4–$8/sq ft installed pricing.

Differentiation (§F): foregrounds the Bloomfield Avenue / Pompton Avenue corridor storefronts, Peckman River slow-draining low-slope parcels near Verona Park, split-level flat sections, and the Verona permit office — distinct from West Orange/Montclair/Glen Ridge/Cedar Grove siblings.
