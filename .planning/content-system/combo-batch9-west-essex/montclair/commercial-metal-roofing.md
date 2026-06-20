# montclair/commercial-metal-roofing — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** removed from `overview[0]` ("prices starting from $10–$18/sq ft and free estimates available today") — price now lives only in the `pricing` field and the cost FAQ.
- **whyChooseUs** templated trust lines deleted: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "Local team that knows Montclair — same-day estimates and 24/7 emergency response." Replaced with registered-HIC / fully-insured factual reasons.
- **conversionHooks.urgencyNote** "Early action saves thousands" → factual "Addressing roof damage early limits interior and structural water damage."
- **Fabricated Montclair geography** removed: the "Valley Road corridor," the "15–20 mph higher wind at upper elevations," "Watchung Ridge upper elevations" snow-load framing, and the implied township-wide planning-board/aesthetic-review gate. No fabricated streets or sections carried.
- **Unsourced/invented claims** removed: "thirty-plus year color-retention warranties," "forty to sixty years" lifespan (unsourced) → re-anchored to the InterNACHI chart (40–80, standing-seam 40–70, copper 70-plus) and This Old House; the fabricated "$10–$18/sq ft" pricing replaced with the sourced replacement default.
- No inline markdown self-links existed in raw fields after rewrite (the current file's `[Bloomfield]`/`[Nutley]`/`[commercial metal roofing]`/`[Montclair]` links were dropped).
- Old `metaDescription` and `pricing.note` ("commercial metal panel system") replaced.

## Entity-grounding applied
- `directAnswer` entity-grounded: "**Newark Quality Roofing is a roofing contractor providing commercial metal roofing across Montclair, New Jersey, and Essex County, fitting standing-seam and exposed-fastener panels on Bloomfield Avenue, Watchung Plaza, and Upper Montclair commercial buildings**" (bold span 33 words) + credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field authored (propagated by post-assembly splice per §0.2).
- Credential = "registered New Jersey Home Improvement Contractor" / "fully insured" only; no "licensed" for NQR anywhere.

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — metal 40–80 yrs, copper 70-plus, vs TPO 7–20 / EPDM 15–25 / modified bitumen 20.
- **This Old House** — standing-seam 40–70 yrs.
- **metal-roofing industry consensus** — exposed-fastener ~30–50 yrs; 25%/20% standing-seam and 15–20%/25% exposed-fastener repair-vs-replace thresholds; cut-edge/seam leak failure mode.
- **Metal Construction Association and the NRCA** — panel runs over 100 feet require engineered expansion provisions.
- **NOAA 1991–2020 normals at Newark Liberty** — 32°F freeze-thaw / thermal-movement driver (hedged EWR baseline).
- **NRCA and ARMA** — ¼ in/ft drainage slope, ponding >48 hrs = defect.
- **Essex County Parks** — Eagle Rock + Mills Reservation adjacency on the First Watchung ridge.
- **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** — 25% rule, commercial permit path via the Township of Montclair Building Office.
- **Article XXIII of Chapter 347 §347-136 / Montclair Historic Preservation Commission** — conditional COA, four locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza), in-kind exempt, Estate Section nominated-not-designated.
- **National Park Service** — National Register listing alone places no federal restriction on a private owner.
- **U.S. Census Bureau** — roughly 54% of units in multi-unit structures (qualitative framing).
- **HomeAdvisor, Modernize, Josten Roofing NJ pricing, Integrity Home Exteriors** — $10,000–$25,000 replacement / $9.00–$16.00 per sq ft installed; NJ 10–40% above national.

## Differentiation (§F)
Foregrounded Montclair-distinct anchors per the process-heavy directive: leads with the Bloomfield Avenue / Watchung Plaza / Upper Montclair storefronts and 54%-multi-unit two-/three-family rooflines, the Eagle Rock + Mills Reservation First-Watchung-ridge adjacency, copper detailing on the township's diverse Victorian/Queen-Anne/Tudor stock, and the conditional four-district COA. No West Orange / Glen Ridge / Verona / Cedar Grove anchors imported; no South Mountain Reservation.
