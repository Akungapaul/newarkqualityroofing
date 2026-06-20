# west-orange/pvc-roofing — rewrite rationale

## De-fab literals cleared
- Deleted the price-in-lead + hype: `overview[0]` "delivers expert pvc roofing... with prices starting from $7–$13/sq ft and free estimates available today."
- Deleted all inline markdown self-links: `[PVC roofing](/pvc-roofing)`, `[West Orange](/roofing-in-west-orange-nj)`, `[Livingston](/pvc-roofing-livingston-nj)`.
- Deleted FABRICATED street/section: "Eagle Rock Avenue and Pleasant Valley Way restaurant concentration" → replaced with the VERIFIED commercial spine (Main Street / Valley Road / Pleasant Valley Way + Route 280). Dropped Livingston cross-city framing.
- Deleted the FABRICATED elevation engine: "elevation-driven thermal cycling," "extreme UV exposure at ridge elevation," "ridge-top buildings," "specific building elevation and exposure" → kept only the qualitative ridge/cold-weather facts.
- De-fabbed `whyChooseUs`: removed "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning," "same-day estimates and 24/7 emergency response" → replaced with the registered-NJ-HIC / fully-insured / free-written-estimate / photo-documented set.
- De-fabbed `conversionHooks.urgencyNote` "Early action saves thousands" → factual water-damage line; removed "call now or fill out our form" hype from midPageCta.
- Removed unsourced "30 to 50 percent more / lower cost" multiples, the "60-mil minimum thickness" spec, "FM Class 1 / UL Class A" claims, and the "fire-resistant / self-extinguishes" angle (not in the pack) — replaced with pack-sourced PVC facts.
- Replaced fabricated `pricing` "$7–$13/sq ft / PVC single-ply membrane" with the ship-aligned sourced range from the service layer.

## Entity-grounding applied
- `directAnswer` entity-grounded: "Newark Quality Roofing is a roofing contractor providing pvc roofing across West Orange, New Jersey, and Essex County..." bold span = 37 words; credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold.
- No `definition` field (propagated by post-assembly splice).
- Credential = "a registered New Jersey Home Improvement Contractor, fully insured." No "licensed" used for NQR anywhere.

## Named sources cited
- NRCA technical library — PVC grease/oil/chemical resistance vs EPDM/TPO; plasticizer loss; hot-air-weld thermoplastic re-fusion.
- Single Ply Roofing Industry + GAF EverGuard warranty terms — PVC 20–30-year service life.
- InterNACHI life-expectancy chart — EPDM 15–25 yr, TPO 7–20 yr.
- Duro-Last + Cool Roof Rating Council — white PVC reflects ~70–85% solar radiation (ASTM C1549).
- NRCA + ARMA — ¼ in/ft slope, ponding >48 hr defect.
- N.J.A.C. 5:23-2.7 (NJ UCC) — commercial/25% permit path; N.J.A.C. 5:23-6.4 (Rehab Subcode) — recover/removal limits.
- Township of West Orange Building & Construction Code Enforcement — permit office (named by function, no Construction Official).
- Section 25-30 / West Orange Historic Preservation Commission — narrow landmark-only Certificate of Appropriateness (Holy Trinity Episcopal Church, the State Diner, the Hedges Block); National Park Service (National Register listing alone = no federal restriction).
- commercial cost guides + Josten Roofing (NJ) — $6–$12/sq ft installed (~$8–$12), NJ TPO-class single-ply $8–$12/sq ft (cost FAQ + pricing).

## Differentiation (§F)
West Orange-distinct anchors foregrounded: narrow landmark-only COA (Section 25-30), Township of West Orange Building & Construction Code Enforcement office, Main Street / Valley Road / Pleasant Valley Way + Route 280 commercial spine. No sibling anchors imported (no Mills/Hilltop reservation, no Glen Ridge district, no Verona "HPC review," no Cedar Grove no-COA, no Montclair four-district gate, no Seton Hall/Llewellyn-Park-COA). Process-heavy/commercial service led with the West Orange storefront situation before the standardized PVC facts.
