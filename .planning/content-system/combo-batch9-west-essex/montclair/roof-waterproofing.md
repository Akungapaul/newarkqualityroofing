# montclair/roof-waterproofing — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** removed from `overview[0]` ("prices starting from $1,500–$5,000 and free estimates available today").
- **Old pricing tier** `$1,500–$5,000` ("waterproofing membrane application") → replaced with the repair & maintenance sourced default `$400–$1,000` (per HomeAdvisor), per brief §E.
- **whyChooseUs** templated trust lines deleted: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "Local team that knows Montclair — same-day estimates and 24/7 emergency response." Replaced with the registered-HIC / fully-insured factual set.
- **conversionHooks.urgencyNote** "Don't wait… Early action saves thousands" → factual "Sealing the deck and eaves early limits interior and structural water damage."
- **Inline markdown self-links** stripped: `[roof waterproofing](/roof-waterproofing)`, `[Montclair](/roofing-in-montclair-nj)`, `[Glen Ridge](/roof-waterproofing-glen-ridge-nj)`, `[West Orange](/roof-waterproofing-west-orange-nj)`.
- **Fabricated geography/specs** removed: "Watchung Ridge amplifies rainfall intensity / wind-driven rain angles," unsourced "ridge-elevation" gust framing → replaced with the QUALITATIVE west-side-more-exposed framing (no elevation/gust number) and the hedged ASCE 7-16 110–115 mph design wind, per ASCE 7-16 as adopted by the NJ UCC.
- **Unsourced lifespans** ("twenty-five to fifty years," "ten to twenty years," "eight to fifteen years" elastomeric) dropped — no coating-life numbers without a mfr spec (fact pack ban).
- Manufacturer brands as NQR credential (service-layer "Firestone, Carlisle, Johns Manville") NOT carried into the combo.
- **Cost FAQ** "call us today to schedule yours" hype → free-written-estimate framing.

## Named sources cited (from the fact packs + service base)
- **IBHS (Brown-Giammanco / Cope)** — sealed deck cuts water entry by as much as 95%; up to 750 gal/in into a 2,000-sq-ft attic (~nine bathtubs); IBHS-approved sealed-deck methods.
- **IRC Section R905.1.2** (enforced through the NJ UCC) — ice barrier ≥24 in inside the wall line, ≥36 in along slope on ≥8:12 roofs.
- **ASTM D1970** — self-adhered ice-and-water membrane self-seals around fasteners. **ASTM D226** — #15/#30 felt is water-resistant not waterproof, per ASTM International.
- **NRCA and ARMA** — ¼-in/ft minimum design slope; ponding >48 h counts as a defect.
- **NOAA 1991–2020 normals at Newark Liberty (EWR)** — ~31.5 in snow/yr; crosses 32°F repeatedly.
- **ASCE 7-16** (as adopted by the NJ UCC) — ~110–115 mph design wind (hedged).
- **U.S. Census Bureau** — ~54% of Montclair units in multi-unit structures.
- **Essex County Parks** — Eagle Rock + Mills Reservation adjacency on the First Watchung ridge.
- **N.J.A.C. 5:23-2.7** (ordinary-maintenance / 25% rule) + **5:23-6.4** (Rehab Subcode); **NPS** (National Register listing alone = no federal restriction).
- **Montclair HPC / Article XXIII of Chapter 347 §347-136** — conditional COA, four locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) + local landmarks; in-kind exempt; Estate Section nominated-not-designated.

## Entity-grounding
- `directAnswer` entity-grounded; bold span 26 words (≤40), credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold. Establishes "Montclair, New Jersey" + "roofing contractor."
- No `definition` field (propagated by splice). Credential = "registered New Jersey Home Improvement Contractor" / "fully insured" — no "licensed" for NQR.
