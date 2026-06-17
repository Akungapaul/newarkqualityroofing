# belleville / cedar-shake-roof-replacement — rewrite rationale

## De-fab literals cleared
- **Old pricing `$15,000–$32,000`** (and the prose lead "prices starting from $15,000–$32,000 and free estimates available today") → replaced with the brief's sourced replacement default `$10,000–$25,000` (HomeAdvisor/Modernize), price removed from all prose; lives only in `pricing` + the cost FAQ.
- **Fabricated lifespan/cost claims** in the old file ($25,000–$45,000 cedar / $14,000–$22,000 shingle transition / $22,000–$38,000 synthetic; "60–70% lower cost"; "15-20 years"; "extends life by 15-20 years") → replaced with sourced figures (cedar shake 20–40 yrs / cedar shingle 30–50 yrs per Cedar Shake & Shingle Bureau; InterNACHI wood at 25 yrs; premium cedar $10–$20+/sf per NHI Contractors NJ).
- **`whyChooseUs`** "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured / local-Essex-crew / free-written-estimate / photo-documented set.
- **`conversionHooks.urgencyNote`** "Don't wait… Early action saves thousands" → factual "Addressing cedar cupping, splitting, and rot early limits deck damage and interior water damage."
- **Inline markdown self-links** `[cedar shake replacement](/…)`, `[Belleville](/…)`, `[Bloomfield](/…)` → stripped to plain text (zero links/URLs in file).
- **Unverified/fabricated Belleville texture** — "closely-spaced homes," "Passaic River basin/humidity," synthetic-cedar Barkwood/Weathered Wood color list, copper/bronze standing-seam alternative pitch → dropped. Replaced with VERIFIED Belleville texture (Soho older river-edge stock; Washington Avenue corridor; older detached single-/two-family stock; mature oak/maple/sycamore canopy debris on shaded slopes).
- **Entity-grounding applied:** `directAnswer` rewritten to the canonical shape (NQR = a roofing contractor providing cedar shake roof replacement across **Belleville, New Jersey**, and Essex County; bold span 39 words; credential tail "as a registered New Jersey Home Improvement Contractor" OUTSIDE the bold). No `definition` field (spliced post-assembly). NQR credential = "a registered New Jersey Home Improvement Contractor, fully insured" — zero "licensed" for NQR.
- **Historic posture corrected** to Belleville's actual position: active HPC but NO reroof COA (no district; sole 2014 local landmark = Old Reformed Church of Second River, 171 Main Street; NPS = Register listing places no private restriction). No Bloomfield Chapter 302 gate, no Orange/Newark COA districts imported.
- **Geography guardrails:** Second River = Newark border (no "Passaic separates Belleville from Newark"); no reservation asserted; no Bloomfield "Third River / town center" framing.

## Named sources cited in-text
- **Cedar Shake & Shingle Bureau** — cedar shake 20–40 yr / cedar shingle 30–50 yr service life; 1.5-inch ventilated-base drying air-space standard; Certi-Guard Class B/C fire-product classes; moisture-driven cupping/splitting/rot as dominant failure mode.
- **InterNACHI** — life-expectancy chart (wood at 25 yrs); flex-test sign of advanced degradation.
- **N.J.A.C. 5:23-6.4** (NJ Rehabilitation Subcode, via NJ DCA) — prohibits roofing over wood shake and over a water-soaked/deteriorated deck (mandatory full tear-off).
- **N.J.A.C. 5:23-2.7** (NJ Uniform Construction Code) — detached one-/two-family reroof = ordinary maintenance, no permit.
- **UL 790 / ASTM E108** — fire-test method; untreated cedar nonclassified.
- **NRCA** — moisture-maintenance guidance.
- **NOAA 1991–2020 normals (Newark Liberty / EWR baseline)** — freeze-thaw cycling, hedged.
- **HomeAdvisor and Modernize** — $10,000–$25,000 NJ replacement range; **NHI Contractors NJ** — premium cedar $10–$20+/sf installed.
- **National Park Service** — National/State Register listing alone places no restriction on a private owner (historic FAQ).

## Verification
- esbuild parse: OK. directAnswer bold span = 39 words. All lead first sentences (overview[0]/challenges[0]/process[0] bold spans; all 6 FAQ first sentences) ≤40 words. 6 FAQs (one cost FAQ). metaDescription = 152 chars. Zero banned literals, zero "licensed" for NQR, zero links/URLs, no `definition` field.
