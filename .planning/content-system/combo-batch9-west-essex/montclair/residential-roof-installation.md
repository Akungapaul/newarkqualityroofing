# montclair/residential-roof-installation — rewrite rationale

Answer-first, de-fabbed, entity-grounded rewrite of the Montclair × residential-roof-installation combo.

## De-fab literals cleared
- **Price-in-lead** — deleted `overview[0]` "prices starting from $8,500–$25,000 and free estimates available today"; price now lives only in `pricing` + the cost FAQ.
- **Fabricated whyChooseUs** — removed "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning," and "same-day estimates and 24/7 emergency response"; replaced with the registered-HIC / fully-insured / free-written-estimate / photo-documentation set.
- **urgencyNote** "Early action saves thousands" → factual, no fabricated savings.
- **Fabricated streets/sections** — dropped "Valley area," "Watchung Ridge exposure"/elevation framing, "twelve-to-twelve" claims, and the elevation-specific "enhanced fastening" story. No street/section used beyond the verified list (Upper Montclair, Watchung Plaza, Montclair Center/Town Center, Estate Section, Pine Street, South End, Erwin Park) plus the Bloomfield Avenue corridor.
- **Fabricated regulatory claims** — removed the "planning board architectural review / rejected proposals," "tree pruning with township permit," and the implied Village-wide HPC. Replaced with the CONDITIONAL local COA (four locally designated districts + local landmarks, Article XXIII of Chapter 347 §347-136; in-kind exempt; Estate Section nominated-not-designated; NPS National Register = no federal restriction).
- **Old pricing** `$8,500–$25,000`/"complete residential installation" → sourced default `$10,000–$25,000` (replacement/installation) with HomeAdvisor + Modernize attribution.
- **Inline markdown self-links** — stripped (`[Glen Ridge](...)`, `[Montclair](...)`); zero links remain.
- **"Yes." solar FAQ** and "5 days to four weeks" timeline FAQ dropped (unsourced specifics) in favor of sourced, Montclair-localized FAQs.
- No "licensed" for NQR anywhere; credential = "a registered New Jersey Home Improvement Contractor," fully insured.

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — material lifespans (3-tab 20 / architectural 30 / cedar 25 / metal 40–80 / copper 70+ / slate 60–150; EPDM 15–25 / TPO 7–20 / mod-bit 20).
- **NRCA / ARMA** — 1 sq ft net-free vent per 150 sq ft attic floor, 50/50 balance; ¼-in-per-foot slope; ponding >48 hrs = defect; ~90–95% of leaks at flashing (industry estimate attributed to the NRCA).
- **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** — detached 1-/2-family reroof = ordinary maintenance (no permit); commercial/multi-family/attached 25% rule; structural change triggers a permit.
- **IRC R905.1.2 / International Residential Code** — ice barrier from eave to ≥24 in inside the exterior wall line.
- **U.S. Census Bureau** — roughly 54% of Montclair units in multi-unit structures.
- **Township of Montclair Housing Element** — a large majority of housing predates WWII (qualitative).
- **Essex County Parks** — Montclair adjoins the Eagle Rock Reservation (First Watchung ridge) and the Mills Reservation.
- **Article XXIII of Chapter 347 §347-136 / Montclair Historic Preservation Commission** — conditional COA; **National Park Service** — Register listing alone = no federal restriction.
- **HomeAdvisor / Modernize / HomeGuide / Integrity Home Exteriors** — NJ $10,000–$25,000 install range; NJ 10–40% above national; labor ~60–70%.

## Entity-grounding
- `directAnswer` bold span = 35 words, "roofing contractor providing residential roof installation across Montclair, New Jersey, and Essex County" + city-specific scope; credential tail outside the bold. No `definition` field (propagated by splice).

## Lead word counts (all ≤40)
directAnswer 35 · overview[0] 36 · challenges[0] 4 · process[0] 38 · FAQ first sentences 39/39/37/36/31/16 · metaDescription 156 chars · 6 FAQs.
