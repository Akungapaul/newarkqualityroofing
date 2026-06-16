# tpo-roofing-installation × Bloomfield — rewrite rationale

## De-fab literals cleared
- Removed the OLD `$7–$12/sq ft` price + "free estimates available today" from `overview[0]`; replaced with an answer-first, figure-free NQR-applied lead. Price now lives only in `pricing` and the cost FAQ.
- Replaced the OLD pricing `$7–$12/sq ft` / "TPO membrane system installed" with the §E roof-type default `$10,000–$25,000` (HomeAdvisor/Modernize), with the Josten $8–$12/sq ft TPO figure cited in `note` + the cost FAQ.
- Replaced templated `whyChooseUs`: dropped "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning", "same-day estimates and 24/7 emergency response", "Transparent pricing… no hidden fees". Now the §E factual reasons with "A registered New Jersey Home Improvement Contractor, fully insured."
- `conversionHooks.urgencyNote` "Don't wait… Early action saves thousands" → factual water-damage framing.
- Reframed the split-level-dominant stock to the dominant pre-war Colonials + flat-roofed two-family homes / postwar garden apartments (slight majority of units); split-levels not asserted as defining stock.
- No invented review counts, response times, manufacturer-certification claims, or "closest" superlatives. No "licensed" for NQR (credential = registered NJ HIC, fully insured). No inline links/URLs.

## Entity-grounding
- `directAnswer` entity-grounded: "Newark Quality Roofing is a roofing contractor providing tpo roofing installation across Bloomfield, New Jersey, and Essex County…" (bold span 39 words, ≤40) with the credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field authored (propagated by post-assembly splice).

## Named sources cited in-text
- InterNACHI life-expectancy chart (TPO 7–20 yr, EPDM 15–25, modified bitumen 20).
- Progressive Materials (15–25 yr field-practice TPO).
- NRCA and ARMA (¼-in/ft slope; ponding >48 hrs = defect).
- Single-ply membrane field-failure guidance (welded seam = most common TPO failure point).
- N.J.A.C. 5:23-2.7 + NJ Uniform Construction Code (commercial/multi-family 25%-rule permit path; ordinary-maintenance exemption limited to detached 1–2 family).
- N.J.A.C. 5:23-6.4 Rehab Subcode (recover prohibited when water-soaked / wood, slate, tile / 2+ layers).
- ASTM C1549 + CRRC (white-membrane solar reflectance ~70–85%).
- Owens Corning warranty guidance (workmanship vs. material warranty).
- Josten Roofing NJ pricing (TPO $8–$12/sq ft, EPDM $7–$10, PVC $6–$12; NJ 10–40% over national); HomeAdvisor + Modernize ($10,000–$25,000 NJ replacement).
- Bloomfield Township Code Chapter 302 + Township Historic District Property List (conditional listed-parcel COA gate via the Historic Preservation Commission); National Park Service (NR listing alone = no federal restriction). Permit office = the Township of Bloomfield's construction office.

## Local texture preserved (answer-first)
Flat-roofed two-family homes + postwar garden apartments (slight majority of units); Broad Street / Bloomfield Avenue / Garden State Parkway corridor commercial low-slope roofs; parapet/wall flashing transitions; tenant-occupied access under NJ landlord-tenant notice with owner documentation; Bloomfield Center historic-core listed-parcel Ch. 302 gate. Watercourses/reservation not invoked (correct for this flat-membrane service — no Third/Second River conflation, no reservation asserted).
