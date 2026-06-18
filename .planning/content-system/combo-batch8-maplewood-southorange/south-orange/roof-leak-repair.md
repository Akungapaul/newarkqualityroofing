# south-orange/roof-leak-repair — rewrite rationale

## De-fab literals cleared (from the current combo file)
- Price-in-lead + hype: `overview[0]` opened "delivers expert roof leak repair … prices starting from $300–$1,200 and free estimates available today" → replaced with an answer-first, entity-grounded, figure-free NQR-applied lead. Price now lives only in `pricing` + the cost FAQ.
- Old invented pricing tier `$300–$1,200` ("for most residential leak repairs") → replaced with the sourced repair/maintenance default `$400–$1,000`, HomeAdvisor-attributed note.
- `whyChooseUs` templated trust lines deleted: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured factual reasons.
- Fabricated South-Orange prose removed: invented street names ("Scotland Road bungalows"), the "one to two hours / three to four hours" investigation-time response claims, "Cape Cod and colonial designs" speculative ice-dam framing, and unsourced "direct and measurable" canopy claim.
- Inline markdown self-links stripped: `[West Orange](/roof-leak-repair-west-orange-nj)`, `[roof leak repair](/roof-leak-repair)`, `[Montclair](/roof-leak-repair-montclair-nj)` → no links anywhere (matches committed siblings).
- `conversionHooks.urgencyNote` "Don't wait… Early action saves thousands" → factual "Addressing a roof leak early limits interior and structural water damage."
- metaDescription rewritten (158 chars, no `**`, no "licensed", no fabricated street names).

## Entity-grounding applied
- `directAnswer` reframed: bold span (20 words) = "Newark Quality Roofing is a roofing contractor locating and repairing roof leaks across South Orange, New Jersey, and Essex County"; credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold. Establishes "South Orange, New Jersey" + "roofing contractor". No modality.
- No `definition` field authored (propagated by post-assembly splice).
- Credential = "a registered New Jersey Home Improvement Contractor" + "fully insured"; zero "licensed" for NQR. Third-party "construction official" cite kept factual.

## Named sources cited in-text
- NRCA — ~90–95% of leaks originate at flashing (industry estimate attributed to the NRCA).
- Integrity Home Exteriors — repair-process / diagnostic / documentation guidance (entry point feet from drip; controlled water testing).
- InterNACHI life-expectancy chart — material lifespan basis (carried via service layer; membrane/seam behavior).
- ASTM D8231 (electronic leak detection) + ASTM C-1153 (infrared wet-insulation) for commercial membranes.
- N.J.A.C. 5:23-2.7 (ordinary-maintenance exemption + 25% rule) and 5:23-6.4 (Rehabilitation Subcode) — NJ Uniform Construction Code.
- Township of South Orange Village Building Department, 76 South Orange Avenue, 20-business-day plan review.
- Village Code Chapter 185 + South Orange Historic Preservation Commission + Montrose Park Historic District (binding LOCAL COA); National Park Service — NR listing alone places no federal restriction; framed local-ordinance-only, district-only, NOT Village-wide, NOT because of NR listing.
- Insurance Information Institute — water damage & freezing ≈1.5% of insured homes/yr.
- HomeAdvisor + Modernize — $400–$1,000 leak repair / $200–$500 flashing reseal; labor ≈60% of total, NJ 10–40% above national (Integrity Home Exteriors).
- Township Fast Facts — over 8,000 shade trees across 181 Village streets; Essex County Parks — Reservation eastern edge / western-boundary ridgeline; Township planning evaluation — over half stock predates 1940, 82% predates 1960.
- Owens Corning warranty guidance — workmanship vs material warranty distinction.

## Differentiation (vs Maplewood sibling + committed cities)
Foregrounded South-Orange-distinct anchors: binding Montrose Park / Chapter-185 COA (local, not Register, not Village-wide), Seton Hall 58-acre institutional low-slope inventory + SOPAC + Village center, large pre-war Victorian/Colonial/Tudor slate-metal-copper stock, 8,000-tree / 181-street canopy, Reservation eastern-edge branch impact, 76 South Orange Avenue. Avoided Maplewood's framework-only COA, Maplewood Village/Springfield Ave, owner-occupancy Census figures, 574 Valley Street, and "reservation reaches into the western edge" framing.
