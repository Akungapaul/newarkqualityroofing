# south-orange/roof-replacement — rewrite rationale

## De-fab literals cleared
- Removed price-in-lead (`$8,500–$25,000+ and free estimates available today`) from `overview[0]`; replaced with answer-first, figure-free, entity-grounded lead.
- Replaced invented pricing tier `$8,500–$25,000+` / `based on roof size and material choice` with the sourced default `$10,000–$25,000` (HomeAdvisor + Modernize note).
- Deleted `whyChooseUs` fabs: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response". Replaced with registered-HIC / fully-insured factual reasons.
- Killed fabricated South Orange streets/sections not on the verified list: **Scotland Road bungalows**, **Prospect Street** Colonials, "Watchung Ridge interface." Replaced with verified Montrose Park / Wyoming-section / Seton Village / Village-center / SOPAC texture.
- Removed fabricated cost claims: "$80,000 slate," "40% less cost," "70–80% / 60–70% resale recovery" (Cost-vs-Value-style figures not in the combo packs). Repair-vs-replace now uses the service-base's named thresholds only.
- Removed brand-inventory fabs: **EcoStar / DaVinci** synthetic-slate brand recommendations.
- Removed `conversionHooks.urgencyNote` "Early action saves thousands" (fabricated savings) → factual "Replacing a roof past its service life limits interior and structural water damage."
- Stripped all inline markdown self-links (`[Maplewood](/…)`, `[South Orange](/…)`, `[East Orange](/…)`) — zero links/URLs remain.
- Fixed COA framing: now asserted ONLY as a local-ordinance matter (Village Code Chapter 185), ONLY inside the designated Montrose Park district + designated local landmarks, NOT "because of National Register listing," NOT Village-wide (per NPS). No "South Orange's Construction Department" — uses "the Township of South Orange Village Building Department, 76 South Orange Avenue, plan review within 20 business days"; no named Construction Official.

## Entity-grounding applied
- `directAnswer` entity-grounded: "Newark Quality Roofing is a roofing contractor providing roof replacement across South Orange, New Jersey, and Essex County…" — bold span 39 words; credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field authored (propagated by post-assembly splice).
- Credential = "a registered New Jersey Home Improvement Contractor, fully insured." NO "licensed" used for NQR anywhere (0 stray cites).

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — material lifespans (3-tab 20yr, architectural 30yr, metal 40–80yr, copper 70+yr, slate 60–150yr; EPDM 15–25, TPO 7–20, mod-bit 20).
- **N.J.A.C. 5:23-2.7** + **NJ Uniform Construction Code** — detached one-/two-family re-roof = ordinary maintenance, no permit; commercial/multi-family/attached 25% rule.
- **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode)** — full removal of water-soaked / wood, slate, or tile / 2+ layer coverings.
- **IRC R905.1.2** — ice-barrier from eave to ≥24 in inside the exterior wall line.
- **NRCA and ARMA** — 1 sq ft net-free vent per 150 sq ft attic; ¼-in-per-foot low-slope drainage / 48-hr ponding defect.
- **Home Depot and Kelly Roofing** — localized repair 5–10× cheaper than replacement; 25–30% area + 50% cost contractor-consensus rules.
- **HomeAdvisor and Modernize / HomeGuide / Integrity Home Exteriors** — NJ $10,000–$25,000 replacement range, 10–40% above national, ~60–70% labor share; documentation guidance.
- **Owens Corning warranty guidance** — manufacturer vs workmanship warranty split.
- **Insurance Information Institute** — wind/hail largest claim type at 2.8% of insured homes/yr.
- **Township planning evaluation** — over half the housing stock predates 1940, 82% predates 1960.
- **Township Fast Facts** — over 8,000 shade trees across 181 Village streets.
- **Essex County Parks** — borders the South Mountain Reservation on the Reservation's eastern edge.
- **National Park Service** — NR listing alone places no federal restriction.
- **Village Code Chapter 185** — Montrose Park Historic District COA from the South Orange Historic Preservation Commission.

## Differentiation
Foregrounds South-Orange-distinct anchors (binding Montrose Park / Chapter 185 COA; Seton Hall 58-acre institutional low-slope inventory; SOPAC / NJ Transit Village center; 8,000-tree / 181-street canopy; Reservation eastern-edge branch impact; large pre-war slate/metal/copper period stock) and avoids Maplewood's framework-only COA, Maplewood Village / Springfield Ave, 74.9% owner-occupied, and 574 Valley Street.
