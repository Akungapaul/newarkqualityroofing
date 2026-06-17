# roof-deck-repair-replacement — Nutley (Combo Batch 7) rewrite rationale

**De-fab literals cleared from the current file:**
- Old price `$2,000–$6,000` ("structural deck repair pricing") and the fabricated per-sheet/per-sq-ft figures stated without attribution → replaced with the pack-sourced `$2–$5 per sq ft` (HomeAdvisor/Angi) plus the `$50–$120 per 4-by-8 sheet` hidden-rot add-on (contractor cost data), framed with a free-written-estimate note.
- `whyChooseUs` block: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured / local-crew / free-estimate / photo-documentation set.
- `conversionHooks`: "free…estimate — call now or fill out our form" and "Early action saves thousands" → factual midPageCta + urgencyNote (fastener-grip / wind-uplift framing, no fabricated savings).
- Inline markdown self-links `[roof deck repair](/roof-deck-repair-replacement)` and `[Nutley](/roofing-in-nutley-nj)` → stripped (zero links).
- Unsourced "75–150 dollars per sheet", "3–5 dollars per square foot", invented "skip-sheathing over Tudor/Colonial" decade specifics → de-quantified or re-pinned to ARMA/InterNACHI/IRC/APA.
- No Nutley-specific fabrications were present in this particular file to remove (no "James O'Malley, PE", no five-landmark list, no $2,000/day fine, no 200-foot buffer, no ~35,000 population, no Chapter 272↔410 conflation, no river swap), but all guardrails were enforced affirmatively.

**Entity-grounding applied:** directAnswer reframed to "Newark Quality Roofing is a roofing contractor providing roof deck repair replacement across Nutley, New Jersey, and Essex County…" (bold span 39 words) + "as a registered New Jersey Home Improvement Contractor" tail outside the bold. No `definition` field authored (propagated by post-assembly splice). NQR credential = registered NJ HIC / fully insured throughout; zero "licensed" used for NQR.

**Named sources cited (from facts-components-specialty.md §10 + facts-nj-regulatory-climate.md):**
- ARMA — roofing nails penetrate ≥3/4 in into the deck; ≥12-gauge shank / 3/8-in head.
- InterNACHI — trapped moisture decays sheathing → lost fastener hold / reduced wind resistance; plywood partly recovers vs. OSB delaminating irreversibly.
- APA – The Engineered Wood Association — panel span ratings set max rafter spacing.
- IRC Section R908 — no roofing over a water-soaked or deteriorated deck; IRC Section R803.2 — H-clips/T&G/blocking on thin panels over wide framing.
- NRCA — ventilation reduces condensation / shingle-warranty condition; low-slope ¼-in/ft + ponding>48h defect (commercial decking).
- NJ Uniform Construction Code N.J.A.C. 5:23-2.7 — ordinary-maintenance exemption for detached 1–2 family; 25% rule on commercial/multi-family (Franklin Avenue / ON3).
- HomeAdvisor / Angi — re-decking cost range; contractor cost data — hidden-rot per-sheet add-on.
- National Park Service — Register listing alone places no restriction (historic FAQ).

**Nutley texture (verified):** older 1890–1940 single-family / two-family / small multi-family stock + plank/board decking at tear-off; Franklin Avenue / Nutley Center commercial corridor + ON3 institutional flat roofs straddling Nutley and Clifton; Third River / Yantacaw drainage corridor + nine-parks mature-canopy debris (qualitative); binding Chapter 410 / Historic District of the Third River and Environs COA (verify the specific parcel; The Enclosure likely-but-unconfirmed) via the Nutley Historic Preservation Committee; permit office = Township of Nutley Code Enforcement Department (no Construction Official named).

5 FAQs (incl. one cost FAQ); directAnswer bold span 39 words; all leads ≤40 words; esbuild parse OK; 0 links; 0 modality; 0 de-fab literals.
