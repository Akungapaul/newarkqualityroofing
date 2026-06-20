# west-orange / modified-bitumen-roofing — rewrite rationale

Answer-first, de-fabbed, entity-grounded rewrite localizing the rewritten service base
(`commercial-roof-types.ts`, serviceId `modified-bitumen-roofing`) to West Orange.

## De-fab literals cleared
- **Price-in-lead** removed (`overview[0]` "prices starting from $6–$10/sq ft … free estimates today") — price now lives only in `pricing` + the cost FAQ.
- **`whyChooseUs`** templated trust block deleted: "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and 24/7 emergency response." Replaced with registered-HIC / fully-insured factual reasons.
- **All inline markdown self-links** stripped (`[modified bitumen roofing](/…)`, `[Verona](/…)`) — plain text only, zero URLs.
- **Elevation/exposure fabrication engine** removed: "elevation diversity / valley-floor vs ridge-top installation method," "fire-sensitive ridge-top locations," any numeric gust/elevation/% claim. Kept only the qualitative verified fact (First Watchung ridge; reservation-edge canopy).
- **`conversionHooks.urgencyNote`** "Don't wait … Early action saves thousands" → factual no-hype line.
- **Unsourced lifespan/spec claims** ("lasts 20 to 30 years," "stagger seams by minimum 12 inches," "inspections every two years," "$6–$10/sq ft," "modified bitumen membrane system" note) replaced with named-sourced figures or de-quantified.
- Cross-city contamination guarded: only South Mountain + Eagle Rock Reservations named; no Mills/Hilltop; no sibling COA frameworks; verified West Orange sections only.

## Named sources cited
- **InterNACHI life-expectancy chart** — modified bitumen 20 yrs; EPDM 15–25; TPO 7–20; BUR 30.
- **ARMA modified-bitumen guidance** — SBS vs APP low-temperature flexibility; multi-ply redundancy; cap-sheet breach stops short of deck.
- **NRCA and ARMA** — ¼ in/ft drainage slope; ponding >48 hrs = defect; flashing transitions = common low-slope leak source.
- **NRCA hot-work** fire-watch protocol for torch application.
- **Progressive Materials** — 12–20 yr modified-bitumen membrane corroboration.
- **Cool Roof Rating Council** — reflective coating solar-reflectance rating.
- **Essex County Parks** — West Orange contains part of South Mountain + Eagle Rock Reservations.
- **N.J.A.C. 5:23-2.7** (25% commercial permit rule / ordinary-maintenance exemption) + **Township of West Orange Building & Construction Code Enforcement office** (named by function).
- **Section 25-30 / West Orange Historic Preservation Commission** — narrow landmark-only COA (Holy Trinity Episcopal Church, the State Diner, the Hedges Block); Llewellyn Park = private 1857 deed covenant, not a township COA.
- **Josten Roofing (NJ)** $7–$12/sq ft low-slope install; **HomeGuide** $2.50–$10.00/sq ft flat-roof repair; **HomeAdvisor / Modernize** NJ replacement range; NJ 10–40% over national.

## Entity-grounding
- `directAnswer` entity-grounded (bold span 36 words: "Newark Quality Roofing is a roofing contractor providing modified bitumen roofing across West Orange, New Jersey, and Essex County…"); credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold.
- No `definition` field (propagated by post-assembly splice).
- NQR credential = "a registered New Jersey Home Improvement Contractor, fully insured" — no "licensed" for NQR anywhere.
