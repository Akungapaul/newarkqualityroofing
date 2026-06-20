# montclair/roof-inspection — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** removed: old `overview[0]` "delivers expert roof inspection in Montclair — with prices starting from $150–$400 and free estimates available today" → answer-first, entity-grounded, figure-free lead. Price now lives only in `pricing` + the cost FAQ.
- **whyChooseUs** "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning," "same-day estimates and 24/7 emergency response" → replaced with registered-NJ-HIC / fully-insured factual reasons.
- **conversionHooks.urgencyNote** "Early action saves thousands" → factual ("catches flashing and deck problems before interior/structural water damage").
- **Old pricing** `$150–$400` single tier with vague note → service-layer sourced inspection ranges ($75–$200 visual / $150–$400 drone / $400–$600 infrared, $248 avg, per HomeAdvisor).
- **Fabricated geography/specs removed:** "Watchung Ridge elevation increases wind exposure," "winds exceeding fifty miles per hour," "Brooklyn and Manhattan buyers," "$1.2 million Upper Montclair Victorian," "$40,000 to $80,000 estimate," "median home prices exceeding one million," the "two to four hours" / "thirty-minute walkthrough" response-time framing, and the "forty-eight hours" report-delivery promise → dropped. Geography kept QUALITATIVE.
- **Inline markdown self-links** `[roof inspection](/roof-inspection)`, `[Bloomfield](...)`, `[Glen Ridge](...)` → stripped to plain text (no links anywhere).
- **No "licensed" for NQR** anywhere; credential = "a registered New Jersey Home Improvement Contractor," "fully insured."

## Entity-grounding
- `directAnswer` entity-grounded, bold span 25 words ("roofing contractor providing roof inspection across Montclair, New Jersey, and Essex County…"); credential tail outside the bold. No `definition` field (spliced post-assembly).

## COA framing (CONDITIONAL local — verified)
- Asserted CONDITIONALLY: appearance-changing exterior roofing in one of the FOUR locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) or on a local landmark requires a Certificate of Appropriateness from the Montclair Historic Preservation Commission under Article XXIII of Chapter 347, §347-136. In-kind repair exempt; Estate Section nominated-not-designated; National Register listing alone = no federal restriction (NPS). First sentence split to stay ≤40 words (39). NO Village/township-wide COA.

## Named sources cited in-text
- **NRCA** — ~90–95% of leaks at flashing; twice-per-year (spring/fall) + post-storm cadence; ¼-in/ft slope + 48-hr ponding (with ARMA); ventilation extends life up to 25%.
- **ARMA** — maintenance extends asphalt-shingle life ~25–30%; ¼-in/ft + 48-hr ponding (with NRCA).
- **IBHS** — sealing the roof deck cuts water intrusion up to 95%.
- **InterNACHI** — roof inspection standard of practice (report covering type + active-leak indications); life-expectancy chart (covering wear baseline).
- **HomeAdvisor** — inspection cost data ($75–$200 visual / $150–$400 drone / $400–$600 infrared / $248 avg).
- **U.S. Census Bureau** — ~54% of units in multi-unit structures.
- **Township of Montclair Housing Element** — large pre-WWII housing majority (qualitative).
- **Essex County Parks** — Eagle Rock + Mills Reservation adjacency on the First Watchung ridge.
- **Insurance Information Institute** — documentation an insurance carrier / manufacturer-warranty program accepts.
- **National Park Service** — National Register listing alone = no federal restriction.

## Verified Montclair texture preserved
Architecturally diverse Victorian/Queen Anne/Tudor/Craftsman/Colonial Revival stock; steep turret/dormer/valley flashing; plank/deteriorated decking at deck-underside check; reservation-edge + street-canopy debris (qualitative); 54% multi-unit + Bloomfield Avenue / Watchung Plaza / Upper Montclair low-slope storefronts; Township of Montclair Building Office permit path. Differentiation foregrounds the four-district conditional COA + Eagle Rock/Mills ridge adjacency (NOT South Mountain — that is West Orange only).
