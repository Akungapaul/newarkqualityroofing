# roseland/flat-roof-replacement — rewrite rationale

**De-fab literals cleared (from the old combo file):**
- Price-in-lead (`overview[0]` "with prices starting from $6,000–$18,000 and free estimates available today") — deleted; replaced with an answer-first, entity-grounded, figure-free NQR lead.
- Invented pricing tier `$6,000–$18,000` → corrected to the sourced replacement default `$10,000–$25,000` (HomeAdvisor/Modernize) with named-source `note`.
- `whyChooseUs` templated trust lines — "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "Local team that knows Roseland — same-day estimates and 24/7 emergency response" → replaced with 4 clean factual reasons using the registered-HIC / fully-insured framing.
- `conversionHooks.urgencyNote` "Don't wait for minor damage to become a major expense. Early action saves thousands." → factual no-hype rewrite.
- Inline markdown self-links (`[flat roof replacement](/flat-roof-replacement)`, `[South Orange](/flat-roof-replacement-south-orange-nj)`) → stripped to plain prose (none in output).
- Unsourced lifespan/membrane numbers re-pinned to the InterNACHI life-expectancy chart + Single Ply Roofing Industry; drainage facts to NRCA/ARMA; cool-roof reflectance to ASTM C1549/CRRC.

**Roseland-specific corrections applied:**
- "Roseland Building Department" → "the Borough of Roseland construction-code office at 300 Eagle Rock Avenue"; no Construction Official named.
- Historic posture set to the §C **conditional** frame: the Landmarks and Historic District Commission and COA process under Chapter 30, Article IX EXIST, but the binding gate applies only to locally designated properties — none confirmed, owner consent (§30-901.1) required — so no homeowner is subject to a COA absent a designation. Williams-Harrison House kept as heritage/NPS color only, not a homeowner gate.
- Geography held to the verified set: Eisenhower Parkway / Becker Farm Road / Livingston Avenue office-park corridor (ADP/Lowenstein Sandler as corridor color, not NQR clients), Eagle Rock Avenue permit office, Passaic-River **western/riverine-edge** floodplain only (459-ac FEMA SFHA, West Essex Park) with most of the borough on higher ground. No Fairfield border, no "reservation," no Watchung placement, no basement-flood, no Roseland-specific elevation/snow/wind number, no "1,000–1,200 acre" Becker Farm figure.

**Entity-grounding:** `directAnswer` entity-grounded (bold span 27 words ≤40; establishes "Roseland, New Jersey" + "roofing contractor"; credential tail outside bold). No `definition` field (spliced post-assembly). NQR credential = "a registered New Jersey Home Improvement Contractor" / "fully insured" throughout.

**Named sources cited in-text:** InterNACHI life-expectancy chart; Single Ply Roofing Industry (PVC); NRCA and ARMA (¼ in/ft slope, 48-hour ponding defect); N.J.A.C. 5:23-2.7 (ordinary-maintenance / 25% rule) and N.J.A.C. 5:23-6.4 (Rehab Subcode tear-off) per the NJ Uniform Construction Code; Borough of Roseland Master Plan (~459-ac FEMA SFHA, ~2,922 jobs); ASTM C1549 + CRRC (cool-roof reflectance); Josten Roofing NJ pricing (per-sq-ft membrane); HomeAdvisor and Modernize (replacement range); U.S. Census Bureau (67.6% owner-occupied); Owens Corning warranty guidance; Integrity Home Exteriors verification guidance; National Park Service (Register-listing caveat); Chapter 30, Article IX / §30-901.1 (COA ordinance).
