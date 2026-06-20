# verona/tpo-roofing-installation — rewrite rationale

Answer-first, de-fabbed, entity-grounded rewrite of the Verona × TPO-roofing-installation combo. Localized from the
already-rewritten service object (`commercial-roof-types.ts`, serviceId `tpo-roofing-installation`) onto Verona's
Bloomfield Avenue / Pompton Avenue (NJ Route 23) corridor storefront stock. Definition field omitted (spliced verbatim
post-assembly).

## De-fab literals cleared
- **Price-in-lead** — `overview[0]` opened "delivers expert tpo roofing installation … prices starting from $7–$12/sq ft
  and free estimates available today" → deleted; replaced with a figure-free, entity-grounded NQR-applied lead. Price now
  lives only in `pricing` + the cost FAQ.
- **Fabricated pricing tier** `$7–$12/sq ft` ("TPO membrane system installed") → replaced with the sourced
  installation/replacement default `$10,000–$25,000` (per HomeAdvisor and Modernize).
- **whyChooseUs** "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens
  Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → de-fabbed to the registered
  HIC / fully-insured framing + factual local/estimate/documentation reasons.
- **conversionHooks.urgencyNote** "Early action saves thousands" → factual ("Addressing a failed membrane seam early
  limits interior and structural water damage").
- **Unsourced quantified claims** removed: "reduces rooftop temperatures by as much as 60 degrees Fahrenheit," the
  "15 to 25 percent cooling cost reductions" Montclair claim, "60-mil standard / 80-mil / 45-mil" thickness prescription,
  "FM Global standards," "20 to 30 years … 15 to 25-year warranties." Reflectance now name-sourced (70–85% per ASTM C1549
  and the CRRC); lifespans named (7–20 yrs per InterNACHI, 15–25 yrs field practice per Progressive Materials).
- **Inline markdown self-links** (`[TPO roofing](/tpo-roofing-installation)`, `[Montclair](/…-montclair-nj)`) → stripped;
  zero links remain.
- **R6 modality** ("will separate," "should choose") removed from declaratives; FAQ questions exempt.

## Verona-specific corrections / guardrails honored
- Permit office = **Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue**
  (no Construction Official named). 25% rule on commercial/multi-family/attached per N.J.A.C. 5:23-2.7; detached 1–2
  family flat-roof section = ordinary maintenance, no permit.
- Historic angle is minimal for TPO (commercial low-slope membrane) — no false "Certificate of Appropriateness" / "COA"
  introduced; no Afterglow-as-district claim; no reservation imported beyond Eagle Rock + Hilltop (named only where
  wind-uplift exposure is discussed). Peckman River kept qualitative (Bloomfield/Lakeside Avenue near Verona Park),
  no FEMA zone/%/depth.
- Geography limited to verified sections (Bloomfield Avenue + Pompton Avenue corridors, Verona Park / Lakeside Avenue).

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — TPO 7–20 yrs, EPDM 15–25 yrs, modified bitumen 20 yrs.
- **Progressive Materials** — 15–25 yrs TPO field practice.
- **NRCA and ARMA** — ¼-inch-per-foot drainage slope; ponding >48 hrs = defect.
- **ASTM C1549 / CRRC** — cool-roof solar reflectance ~70–85%.
- **N.J.A.C. 5:23-2.7** (25% rule / ordinary maintenance) and **N.J.A.C. 5:23-6.4** (Rehab Subcode recover limits), per
  the NJ Uniform Construction Code.
- **Owens Corning warranty guidance** — workmanship vs. manufacturer material warranty split.
- **HomeAdvisor and Modernize** — NJ installation/replacement cost range ($10,000–$25,000).
- Single-ply membrane field-failure guidance — welded seam as the most common TPO failure point.

## Differentiation (§F)
Leads with Verona-distinct anchors: the Bloomfield Avenue / Pompton Avenue (Route 23) corridor storefront flat-roof
context, Peckman River drainage near Verona Park, and Eagle Rock + Hilltop reservation-edge wind exposure — never South
Mountain or Mills, never a sibling's COA framing.

## Gate checks (local)
directAnswer bold 35w · overview[0] 34w · challenges[0] 27w · process[0] 25w · FAQ first sentences ≤39w · 5 FAQs ·
metaDescription 155 chars · no `**` in raw fields · no links · no `definition` field · esbuild transform OK.
