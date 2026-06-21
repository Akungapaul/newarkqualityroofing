# livingston / soffit-installation-repair — rewrite rationale

**De-fab literals cleared** (from the current `src/data/combo-content/livingston/soffit-installation-repair.ts`):
- Price-in-lead ("with prices starting from $1,500–$4,000 and free estimates available today") and the invented `$1,500–$4,000` pricing tier → replaced with answer-first entity-grounded leads and `range: 'Varies by scope'` (soffit has no pack-sourced figure per brief §E).
- whyChooseUs templated trust block — "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning", "same-day estimates and 24/7 emergency response" → de-fabbed to registered-HIC/fully-insured factual reasons.
- conversionHooks urgencyNote "Don't wait… Early action saves thousands" → factual moisture/decay/ice-dam note.
- Inline markdown self-links (`[soffit installation and repair](/…)`, `[Cedar Grove](/…)`) → stripped.
- Unsourced "1960s/1970s solid wood soffit" decade-specific framing kept qualitative; squirrel/pest narrative de-quantified; "licensed pest control operator" claim dropped (replaced with screening/exclusion).
- No COA fabrication added: historic FAQ states plainly that Livingston has NO binding local COA (Master Plan recommends only; §170-3 + ~38 sites = planning IDs; Force Homestead = township-owned Register-listed museum, no rule on a private owner).
- Geography kept verified-only: post-war split-levels/raised-ranches/colonials, mature street-tree canopy, Route 10 corridor, Eisenhower Parkway stock, Township of Livingston Building Department at 357 South Livingston Avenue. No South Mountain Reservation, no fabricated neighborhoods, no basement/township-wide flood claim, no city-specific climate numbers.

**Named sources cited** (all from `facts-components-specialty.md §7` + `facts-nj-regulatory-climate.md`):
- U.S. DOE Building America Solution Center & InterNACHI — soffit vents = primary intake; blocked intake traps heat/moisture.
- ARMA & Air Vent Inc. — ~50% intake / 50% exhaust balance.
- IRC Section R806.2 — min net free ventilating area 1/150 of vented attic.
- InterNACHI inspection guidance & life-expectancy chart — rot failure mode, fascia/soffit relationship, aluminum 20-to-40-plus-yr service life.
- NRCA — ventilation reduces condensation/ice-dam conditions.
- N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) — detached one-/two-family ordinary-maintenance no-permit rule; commercial permit path.
- National Park Service — Register listing alone places no restriction on a private owner (historic FAQ).

**Entity-grounding:** directAnswer bold span 33 words, establishes "Livingston, New Jersey" + "roofing contractor"; credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold. No `definition` field (spliced post-assembly). 6 FAQs (one cost FAQ, no redundant "Who provides" FAQ).
