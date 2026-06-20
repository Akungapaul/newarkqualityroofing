# montclair / fire-damage-roof-replacement — rewrite rationale

**De-fab literals cleared:** the price-in-lead ("prices starting from $12,000–$35,000 and free estimates available today"); the old `$12,000–$35,000` pricing range + vague "including structural repair" note → replaced with the sourced replacement default `$10,000–$25,000` (HomeAdvisor/Modernize, fire adds structural framing/decking); the whyChooseUs trust block ("NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response") → de-fabbed to registered-HIC / fully-insured / photo-documentation / free-estimate reasons; urgencyNote "Early action saves thousands" → factual "Securing a fire-opened roof early limits further interior and structural water damage"; the two inline markdown self-links (`[fire damage replacement](/…)`, `[Montclair](/…)`) → stripped to plain text. Unsourced "three hundred degrees Fahrenheit" / code-upgrade hand-waving replaced with named-source framing. No "licensed" used for NQR anywhere (NQR = registered New Jersey Home Improvement Contractor, fully insured).

**Entity-grounding applied:** directAnswer rewritten to the entity-grounded shape — "Newark Quality Roofing is a roofing contractor providing fire damage roof replacement across Montclair, New Jersey, and Essex County…" (bold span 33 words) with the credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold. No `definition` field (propagated by post-assembly splice).

**Named sources cited (all from the fact packs / service base / city page):**
- **U.S. Forest Products Laboratory** + **American Wood Council** — char layer carries essentially zero residual structural capacity; heat-affected zone retains ~85–90% of original strength; roof is a structural assembly.
- **N.J.A.C. 5:23-6.4** + **IRC R908.3.1.1** — recover-not-allowed when deck is water-soaked/deteriorated → full tear-off required.
- **ANSI/IICRC S700** (with FPL) — firefighting water saturates decking/insulation/framing and accelerates metal-connector corrosion.
- **UL 790** + **ASTM E108** — Class A/B/C fire-test methods, Class A most fire-resistant.
- **New Jersey Public Adjusters' Licensing Act, N.J.S.A. 17:22B** — only a licensed public adjuster/attorney negotiates the claim; NQR is contractor not adjuster.
- **Insurance Information Institute (Triple-I)** — fire & lightning ~1 in 430 insured homes/year.
- **N.J.A.C. 5:23-2.7** — ordinary-maintenance/permit framing; structural framing replacement triggers a permit through the Township of Montclair Building Office.
- **Roofing industry guidance** — 25–30% area repair-versus-replace threshold.
- **HomeAdvisor / Modernize** — NJ roof-replacement range $10,000–$25,000.
- **Township of Montclair Housing Element** — large majority of housing predates WWII (qualitative).
- **Montclair-specific (city page + brief):** conditional local COA — four locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) + local landmarks, Certificate of Appropriateness from the Montclair Historic Preservation Commission under Article XXIII of Chapter 347 §347-136; in-kind repair exempt; Estate Section nominated-not-designated; **National Park Service** — National Register listing alone places no federal restriction. Township of Montclair Building Office = permit office (function only, no Construction Official named). No Village-/township-wide COA asserted; no fabricated streets, no South Mountain Reservation, no gust/elevation numbers.

**Checks:** directAnswer bold 33w; overview/challenges/process lead first-sentences 29/26/31w; all 6 FAQ first sentences ≤40w; metaDescription 150 chars; no de-fab literals; zero inline links; 5 "licensed" occurrences all third-party (structural engineer ×3, public adjuster ×2); TypeScript parses clean (esbuild).
