# montclair/tpo-roofing-installation — rewrite rationale

**De-fab literals cleared (all from the current combo file):**
- Price-in-lead "prices starting from $7–$12/sq ft and free estimates available today" in `overview[0]` → replaced with an answer-first, entity-grounded, figure-free lead.
- Fabricated geography: "Valley Road" / "Church Street" commercial corridors, "Montclair Heights," "Watchung Ridge crest" wind-fastening engineering, and the implied Montclair State University campus expansion driver → all dropped; replaced with the VERIFIED corridors (Bloomfield Avenue, Watchung Plaza, Upper Montclair) and verified sections only.
- Fabricated elevation/wind claims ("wind uplift on Montclair's elevated terrain," elevation extends service life "by two to five years," "FM Global-rated edge terminations" sized to invented elevation gusts) → removed; reservation/ridge exposure kept QUALITATIVE.
- `whyChooseUs` "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning," "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured factual set.
- `pricing` "$7–$12/sq ft / TPO membrane system installed" (and note) → set to the sourced `$8–$12/sq ft` with a Josten-NJ-attributed note.
- `conversionHooks.urgencyNote` "Early action saves thousands" → factual seam-failure consequence statement.
- The fabricated SREC/solar-revenue FAQ and the "thirty-year service life" unsourced lifespan → dropped; lifespans now name-sourced.
- No inline markdown self-links were present, but none introduced; zero links in output.

**Entity-grounding applied:**
- `directAnswer` bold span (36 words) opens "Newark Quality Roofing is a roofing contractor providing tpo roofing installation across Montclair, New Jersey, and Essex County…" with the credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold. No `definition` field (propagated by post-assembly splice).
- Credential framing is "a registered New Jersey Home Improvement Contractor" / "fully insured" only — no "licensed" for NQR anywhere.

**Named sources cited in-text:**
- InterNACHI life-expectancy chart (TPO 7–20 yr; EPDM 15–25; modified bitumen 20) + Progressive Materials (15–25 yr field practice).
- NRCA and ARMA (¼-in-per-foot drainage; ponding >48 hours = defect).
- ASTM C1549 + the CRRC (white TPO reflects ~70–85% of solar radiation).
- N.J.A.C. 5:23-2.7 (ordinary-maintenance exemption / 25% commercial-permit rule) and N.J.A.C. 5:23-6.4 (recover-vs-tear-off limits), via the NJ Uniform Construction Code; permits filed through the Township of Montclair Building Office (function only, no named official).
- Josten Roofing NJ pricing + commercial cost guides (TPO $8–$12/sq ft; EPDM $7–$10; PVC $6–$12; NJ 10–40% over national) — used only in the cost FAQ and `pricing`.
- Owens Corning warranty guidance (workmanship vs material warranty).
- Montclair Historic Preservation Commission / Article XXIII of Chapter 347 §347-136 (CONDITIONAL COA — four locally designated districts: Town Center, Upper Montclair Business, Pine Street, Watchung Plaza, plus local landmarks; in-kind exempt; Estate Section nominated-not-designated) + the National Park Service (National Register listing alone = no federal restriction).
- U.S. Census Bureau (roughly 54% of units in multi-unit structures) and Essex County Parks (Eagle Rock Reservation + Mills Reservation on the First Watchung ridge) — kept qualitative.
