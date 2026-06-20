# cedar-grove/roof-inspection — rewrite rationale

De-fab literals cleared from the current file:
- Price-in-lead + hype `overview[0]` ("delivers expert roof inspection ... prices starting from $150–$400 and free estimates available today") → answer-first, figure-free, entity-grounded lead.
- Fabricated Cedar Grove prose: "ranch homes from the 1950s through 1970s constitute the dominant housing type" decade claim; "Cedar Grove's elevated terrain produces in greater measure than lowland Essex communities" snow claim; the Norway-spruce species claim; "GPS-tagged" gimmick; the implied microclimate. Replaced with verified texture (postwar ranch/split-level stock, deteriorated sheathing at tear-off, slate/metal period detailing, reservation-edge + street-canopy debris).
- `whyChooseUs` templated trust lines ("NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response") → registered-HIC / fully-insured factual reasons.
- `conversionHooks.urgencyNote` "Early action saves thousands" → "Addressing roof damage early limits interior and structural water damage."
- Old pricing tier `$150–$400` flat + "complimentary ... modest fee" cost FAQ → sourced HomeAdvisor inspection-cost range and free-inspection framing.
- Inline self-links `[roof inspection](/roof-inspection)`, `[North Caldwell](...)`, `[Montclair](...)` → stripped to plain text (page carries zero links).
- Dropped unverified neighbor-ish framing ("shared ridge", siding-overlay decade claims) and kept only verified sections (North End, Park Ridge Estates, Central Cedar Grove, South End, Pompton Avenue / Route 23 corridor, Mills Reservation edge).

Entity-grounding applied:
- `directAnswer` reframed: "Newark Quality Roofing is a roofing contractor providing roof inspection across Cedar Grove, New Jersey, and Essex County, ..." (bold span 34 words) + credential tail "as a registered New Jersey Home Improvement Contractor." No `definition` field (spliced post-assembly).
- Credential = registered NJ HIC / fully insured everywhere; no "licensed" for NQR.
- Historic FAQ states plainly: NO local HPC, NO Certificate of Appropriateness, no designated district/landmark — advisory Heritage Advisory Committee only; per the National Park Service, National Register listing alone places no restriction on a private owner.

Named sources cited (mirrored from src/data/service-content/repair-maintenance.ts roof-inspection + the fact packs):
- NRCA — twice-per-year (spring/fall) + after-major-event inspection cadence; 90–95% of leaks at flashing (industry estimate attributed to the NRCA); ¼-inch-per-foot drainage + 48-hour ponding defect (with ARMA); balanced ventilation extends roof life by up to 25%.
- ARMA — proper maintenance extends asphalt-shingle life ~25–30%.
- IBHS — sealing the roof deck cuts water intrusion by up to 95%.
- InterNACHI — roof inspection standard of practice; life-expectancy chart (EPDM 15–25, TPO 7–20, modified bitumen 20 years).
- Insurance Information Institute (Triple-I) — documentation an insurance carrier accepts.
- HomeAdvisor — inspection-cost data: visual $75–$200, drone $150–$400, infrared $400–$600, national average $248.
- N.J.A.C. 5:23-2.7 / NJ UCC — detached 1–2-family reroof = ordinary maintenance, no permit; 25% rule on commercial/multi-family/attached; Township of Cedar Grove Building Department at 525 Pompton Avenue.
- National Park Service — National Register listing alone places no restriction on a private owner.
- U.S. Census Bureau — 76.3% owner-occupied / 5,008 housing units (held qualitative in framing; not printed as a lead figure).
- Essex County Parks — Mills (157.15 acres) and Hilltop (284.16 acres) reservations (referenced qualitatively as canopy stressor).

FAQs: 5. directAnswer bold span: 34 words. Leads (first sentence): overview 36, challenges 39, process 27 — all ≤40. metaDescription 160 chars.
