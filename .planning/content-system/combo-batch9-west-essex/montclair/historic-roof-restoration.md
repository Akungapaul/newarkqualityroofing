# montclair/historic-roof-restoration — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** removed: old `overview[0]` "delivers expert historic roof restoration in Montclair — with prices starting from $15,000–$50,000 and free estimates available today" → answer-first, figure-free, entity-grounded lead.
- **whyChooseUs** templated trust lines deleted: "NJ licensed, GAF Certified — 15+ years protecting Essex County…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "Local team that knows Montclair — same-day estimates and 24/7 emergency response." Replaced with registered-HIC / fully-insured / in-kind-standards / photo-documentation framing.
- **Pricing** changed from the invented `$15,000–$50,000` / "historic material sourcing and restoration" to the pack-sourced HomeGuide historic-slate figures (commonly $2,500–$10,000+; individual slate $50–$300; flashing/fastener $400–$3,000; NJ +10–40%).
- **conversionHooks.urgencyNote** "Don't wait… Early action saves thousands" → factual "Addressing roof damage early limits interior and structural water damage to historic fabric."
- **Fabricated slate-quarry inventory** removed: "active quarries… salvage dealers who inventory reclaimed slate," "Vermont unfading green slate from the 1890s… Pennsylvania black slate," "Vermont, Pennsylvania, and New York quarries." Replaced with the in-kind-matching principle (Standard 6 + Briefs 29/30) with no named-quarry concentration claim (Gaps §5/§11).
- **Fabricated tax-credit framing** corrected: old copy implied homeowners get the federal 20% credit and NJ Historic Trust residential abatements. Corrected to IRC §47 = income-producing only, owner-occupied excluded (NPS/IRS); NJ HPRP = income-producing (NJEDA); NQR does not assess eligibility.
- **Village-/township-wide COA implication** removed. Reframed to the CONDITIONAL local gate: COA required only inside the four locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) or on a local landmark, Article XXIII of Chapter 347 §347-136; in-kind exempt; Estate Section nominated-not-designated; National Register listing alone = no federal restriction (NPS).
- **Inline markdown self-links** stripped: `[historic roof restoration](/…)`, `[Montclair](/roofing-in-montclair-nj)`, `[Glen Ridge](/historic-roof-restoration-glen-ridge-nj)`.
- **NQR "licensed"** eliminated everywhere (0 occurrences); credential = "a registered New Jersey Home Improvement Contractor, fully insured." No GAF/CertainTeed/Owens-Corning brands as NQR credentials. No same-day/24/7/15+ years/response-time claims. No South Mountain Reservation, no fabricated streets (North Mountain Ave / Church St / Valley Rd / "Montclair Heights"), no 130mph/six-nail, no tree-preservation-ordinance, no elevation/gust number.
- **Definition field omitted** (propagated by post-assembly splice per §0.2).

## Named sources cited in-text
- **Secretary of the Interior's Standards, Standard 6** (in-kind / repair-rather-than-replace governing principle).
- **NPS Preservation Brief 4** (document the existing roof; character-defining features).
- **NPS Preservation Brief 19** (cedar fastener rule — never copper; match handsplit/sawn shingle).
- **NPS Preservation Brief 29** (slate non-ferrous fasteners; 20% repair-vs-replace threshold; ripper + copper strip/slate hook; do-not-coat/seal/walk; flashing metal life comparable to slate).
- **NPS Preservation Brief 30** (clay tile ~100-yr life; profile/color/glaze matching; fragile, not walked on).
- **InterNACHI life-expectancy chart** (slate 60–150 yr; copper 70+; clay tile ~100 yr).
- **Copper Development Association** (properly designed/installed copper roof service life in excess of 100 years).
- **National Park Service / IRS** (National Register listing alone = no federal restriction; federal 20% HTC / IRC §47 income-producing only); **NJEDA** (NJ HPRP income-producing only).
- **Township of Montclair Housing Element** (large majority predates WWII, qualitative); **U.S. Census Bureau** (~54% of units in multi-unit structures).
- **Article XXIII of Chapter 347 §347-136** (Montclair Historic Preservation Commission COA, conditional four-district gate); **NJ Uniform Construction Code** (COA separate from construction permit).
- **HomeGuide** (historic slate-restoration cost data: $2,500–$10,000+; $50–$300/slate; $400–$3,000 flashing/fastener; NJ +10–40%).

## Entity-grounding
- directAnswer bold span = 36 words, ends before the credential tail "as a registered New Jersey Home Improvement Contractor."; establishes "roofing contractor" + "Montclair, New Jersey."
- All leads ≤40 words; every FAQ first sentence ≤40; 6 FAQs including one sourced cost FAQ with free-written-estimate framing. metaDescription 157 chars. No `**` in raw fields. No modality in declaratives. No links/URLs. Export `montclairHistoricRoofRestoration`, serviceId/cityId preserved.
