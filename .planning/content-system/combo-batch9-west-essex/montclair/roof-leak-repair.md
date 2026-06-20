# montclair/roof-leak-repair — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** — deleted `overview[0]` "prices starting from $300–$1,200 and free estimates available today"; replaced with an answer-first, entity-grounded, figure-free NQR-applied lead.
- **whyChooseUs** — removed "NJ licensed, GAF Certified — 15+ years protecting Essex County," "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," and "same-day estimates and 24/7 emergency response." Replaced with the registered-HIC / fully-insured + local-crew + free-written-estimate + photo-documentation defaults.
- **conversionHooks.urgencyNote** — removed "Early action saves thousands"; replaced with factual "Addressing a roof leak early limits interior and structural water damage."
- **Inline markdown self-link** — stripped `[roof leak repair](/roof-leak-repair)` and the `[Glen Ridge](...)` cross-link to plain text (combo carries zero links).
- **Fabricated geography** — dropped the "mid-century modern homes," "Arts & Crafts bungalow" framing was kept only as verified styles (Craftsman); did NOT carry any unverified street/section. Removed the "elevated microclimate / higher and colder than valley communities" with implied numbers — kept ridge exposure QUALITATIVE only. No South Mountain Reservation; used Eagle Rock + Mills (correct for Montclair).
- **Old pricing** `$300–$1,200` / "for most residential leak repairs" → sourced repair-and-maintenance default `$400–$1,000` with HomeAdvisor attribution.
- **Cost FAQ** rewritten with the sourced range + free-written-estimate framing (no "call us today" hype, no fabricated guarantee).
- **Credential** — NQR is "a registered New Jersey Home Improvement Contractor," fully insured. No "licensed" used for NQR anywhere.
- **`definition` field** — omitted per §0.2 (propagated by post-assembly splice).

## Entity-grounding
- `directAnswer` bold span (37 words): establishes "Newark Quality Roofing," "roofing contractor," "Montclair, New Jersey," and Essex County, with city-specific scope (source flashing/valley/chimney detail; Victorian/Tudor/Colonial Revival homes). Credential tail outside the bold.

## Named sources cited
- **NRCA (industry estimate)** — roughly 90–95% of leaks at flashing, 5–10% at the open shingle field; ponding >48 hr defect + ¼-in/ft slope (with ARMA).
- **Integrity Home Exteriors** — moisture-path / repair-process and controlled-water-testing diagnostic guidance.
- **University of Minnesota Extension** — ice-dam mechanism (upper roof >32°F / lower edge <32°F).
- **Owens Corning** — workmanship vs. material warranty distinction.
- **Essex County Parks** — Eagle Rock + Mills Reservation adjacency on the First Watchung ridge.
- **U.S. Census Bureau** — roughly 54% of Montclair units in multi-unit structures.
- **Township of Montclair Housing Element** — large majority of housing predates WWII (qualitative).
- **HomeAdvisor / Modernize** — $400–$1,000 leak repair, $200–$500 flashing reseal; **Integrity Home Exteriors** — NJ ranges 10–40% above national, labor ~60%.
- **Kellow / Modernize / Josten** — 25–30% area rule and 50% cost rule (repair-vs-replace).
- **Montclair Historic Preservation Commission / Article XXIII of Chapter 347 §347-136** — conditional COA, four designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza), in-kind exempt, Estate Section nominated-not-designated.
- **National Park Service** — National Register listing alone places no federal restriction.

## Differentiation (West-Essex siblings)
- Foregrounded Montclair-distinct anchors: the conditional four-district COA (vs Glen Ridge borough-wide, Verona "HPC review," West Orange landmark-only, Cedar Grove none), Eagle Rock + Mills adjacency, ~54% multi-unit stock, verified neighborhoods, Bloomfield Avenue corridor, Township of Montclair Building Office. No sibling reservations/offices imported.

## Verification
- directAnswer bold = 37w; overview[0] sent1 = 34w; challenges[0] sent1 = 32w; process[0] sent1 = 30w; cost FAQ sent1 = 23w; metaDescription = 157 chars; 6 FAQs; esbuild parse OK; no de-fab literals; no NQR "licensed"; no links; no modality.
