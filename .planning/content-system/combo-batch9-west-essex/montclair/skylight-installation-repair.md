# montclair/skylight-installation-repair — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** removed from `overview[0]` ("prices starting from $1,500–$5,000 and free estimates available today") → replaced with answer-first, entity-grounded NQR-applied lead (figure-free).
- **`whyChooseUs`** templated trust lines deleted: "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "Local team that knows Montclair — same-day estimates and 24/7 emergency response" → replaced with registered-HIC / fully-insured factual reasons.
- **Old pricing** `$1,500–$5,000` "per skylight" → replaced with the pack-sourced HomeGuide/Angi/Modernize range ($225–$4,200) with named source in `note`.
- **`conversionHooks.urgencyNote`** "Early action saves thousands" → factual "Addressing a failed skylight flashing early limits interior and structural water damage."
- **Inline markdown self-links** stripped: `[Montclair](/roofing-in-montclair-nj)`, `[skylight](/skylight-installation-repair)`, `[West Orange](/skylight-installation-repair-west-orange-nj)`, `[Glen Ridge](/skylight-installation-repair-glen-ridge-nj)` — all removed (no links anywhere).
- **Fabricated Montclair texture** removed: "Arts & Crafts community identity / studios & galleries" framing, "acorn impacts from red oaks cracked glazing," "twenty-one by twenty-seven … inch" sizing prescriptions, neighbor-city comparison ("West Orange and Glen Ridge face similar patterns"), unverified decade-specific aging narrative — replaced with verified stock + the conditional four-district COA.
- **Village/township-wide HPC overreach** corrected: the old "Historic Preservation Commission review applies to designated properties… may be denied" was reframed to the CONDITIONAL four-district / local-landmark gate (Article XXIII of Chapter 347, §347-136), in-kind exempt, Estate Section nominated-not-designated, NPS National-Register-listing-alone note.
- **`metaDescription`** "natural light solutions for Victorian attics and Arts & Crafts interiors" → de-fabbed service-scope description, NJ-registered, free-estimate.
- No NQR "licensed" anywhere; credential = "a registered New Jersey Home Improvement Contractor, fully insured."

## Named sources cited in-text
- **roofing trade consensus** — failed/improperly installed flashing is the leading cause of a skylight leak (not the glass).
- **VELUX America** — engineered flashing kit vs. caulk; matched to mounting type + roof covering; leak-vs-condensation diagnosis; 20-year insulated-glass-seal warranty (fogging); leak warranty attaches only on install-to-spec with matching kit.
- **Fakro USA** — manufacturer leak warranty conditioned on the original flashing kit.
- **IRC Section R308.6.8** — skylight on a roof under 3:12 slope sits on a curb ≥4 in above the roof plane.
- **InterNACHI life-expectancy chart** — skylight service life 10–20 years.
- **NRCA and ARMA** — ¼-in-per-foot slope to drain; ponding past 48 hours = defect.
- **HomeGuide, Angi, Modernize** — cost figures ($1,600–$4,200 install; $800–$2,400 replacement; $225–$800 repair; $75–$250 reseal; $150–$500 flashing).
- **Article XXIII of Chapter 347, §347-136** + **Montclair Historic Preservation Commission** — conditional four-district / local-landmark COA.
- **National Park Service** — National Register listing alone places no federal restriction on a private owner.
- **Essex County Parks** — Eagle Rock Reservation and Mills Reservation adjacency on the First Watchung ridge.
- **Township of Montclair Building Office** — permit path (commercial/multi-family/attached 25% rule).

## Entity-grounding
- `directAnswer` entity-grounded; bold span 36 words ("Newark Quality Roofing is a roofing contractor … low-slope storefront roofs"), credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold. Establishes "Montclair, New Jersey" + "roofing contractor".
- No `definition` field (propagated by deterministic post-assembly splice).
- 6 FAQs (one cost FAQ with sourced range + free-written-estimate framing; no redundant "Who provides…" FAQ).
