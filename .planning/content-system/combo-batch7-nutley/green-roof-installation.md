# green-roof-installation × Nutley — rewrite rationale

## De-fab literals cleared
- **Old per-sqft price `$15–$35/sq ft`** (overview lead, cost FAQ, pricing.range, metaDescription) → replaced with the brief §E installation/roof-type default `$10,000–$25,000` (HomeAdvisor/Modernize), plus the pack-sourced `$6–$12/sq ft` membrane-substrate figure cited to commercial cost guides (M&M Roofing/WeatherStar). No price in any prose lead.
- **Price-in-lead hype** "delivers expert green roof installation … prices starting from $X … free estimates available today" → answer-first, figure-free overview[0].
- **whyChooseUs templated trust lines** — "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" → de-fabbed to the registered-HIC/fully-insured framing + factual local/documentation reasons.
- **conversionHooks** "Early action saves thousands" / "call now or fill out our form" → factual midPageCta + a factual urgencyNote about flood-testing the membrane before the planted layers go down.
- **Inline markdown self-links** `[green roof](/green-roof-installation)`, `[Nutley](/roofing-in-nutley-nj)` → stripped to plain text (zero links).
- **Unsourced hard numbers** — "160-degree summer peaks," "40 to 50 years vs 20 to 25," "18 to 28 dollars per square foot," "8 to 14 dollars," "80-mil PVC/TPO," "80 percent coverage," "six to eight sedum varieties," "first inch of rainfall," "15 to 25 pounds per square foot" → removed or re-anchored to sourced facts (membrane lifespans + green-roof life via the InterNACHI life-expectancy chart; PVC 20–30 yr via Single Ply Roofing Industry/GAF EverGuard; ¼-inch slope + 48-hr ponding via NRCA/ARMA; 32°F freeze via NOAA 1991–2020 EWR normals; 25% commercial-permit rule via N.J.A.C. 5:23-2.7).
- **Fabricated Nutley geography** — "Kingsland neighborhood," "Yantacaw Brook system runs through western Nutley" (river swap) → removed. Corrected to: Third River (a/k/a Yantacaw) runs THROUGH Nutley via Yantacaw Park; no Passaic/Third-River swap; ON3 framed as straddling Nutley AND Clifton (not entirely in Nutley).
- **Wrong COA posture** — the old file had no binding-COA framing → added the BINDING Chapter 410 / "Historic District of the Third River and Environs" COA from the Nutley Historic Preservation Committee (separate from the construction permit; The Enclosure "very likely within the district — verify the specific parcel against the Township's official historic-district map"; NPS: National Register listing alone places no restriction). No fabricated landmark list, no fees/fines/$2,000-day/200-foot buffer, no Chapter 272↔410 conflation, no named Construction Official.
- No ~35,000 population (used qualitatively); no "James O'Malley, PE"; no reservation; no Belleville/Irvington/EO/Orange/Bloomfield framing imported.

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — green (vegetation) roof 5–40 yr; EPDM 15–25, TPO 7–20, modified bitumen 20 yr.
- **Single Ply Roofing Industry + GAF EverGuard warranty data** — PVC single-ply 20–30 yr.
- **NRCA and ARMA** — ¼-inch-per-foot slope to drain; ponding >48 hrs counts as a defect.
- **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** — ordinary-maintenance exemption + 25% commercial-permit rule; Township of Nutley Code Enforcement Department as the filing path.
- **NOAA 1991–2020 normals at Newark Liberty (EWR)** — 32°F freeze-thaw cycling for plant-species selection.
- **HomeAdvisor and Modernize** — $10,000–$25,000 NJ project range (cost FAQ + pricing.note).
- **Commercial cost guides citing M&M Roofing and WeatherStar** — $6–$12/sq ft membrane substrate.
- **Nutley Chapter 410 ordinance / Nutley Historic Preservation Committee** + **National Park Service** — historic-district COA and the no-restriction-from-listing point.

## Entity-grounding
- directAnswer entity-grounded (bold span 34 words ≤40): "Newark Quality Roofing is a roofing contractor providing green roof installation across Nutley, New Jersey, and Essex County…" + credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field (propagated by post-assembly splice). NQR credential = "a registered New Jersey Home Improvement Contractor, fully insured" — no "licensed" for NQR anywhere.
