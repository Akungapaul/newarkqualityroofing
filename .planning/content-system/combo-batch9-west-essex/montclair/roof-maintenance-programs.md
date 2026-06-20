# montclair/roof-maintenance-programs — rewrite rationale

**De-fab literals cleared from the current file:**
- Price-in-lead deleted (`$250–$600/year` + "free estimates available today" in overview[0]); price now lives only in `pricing` and the cost FAQ.
- Killed the `whyChooseUs` template: "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning," "same-day estimates and 24/7 emergency response" → replaced with registered-HIC / fully-insured factual reasons.
- Killed fabricated Montclair prose: the "elevation-driven wind fatigue along the Watchung Ridge," "$60,000 slate roof / $20,000 acceleration" invented capital-loss math, "tree ordinance requires permits for pruning," the "predominantly pre-1960 housing stock" mis-figure, oak/maple "catkins/helicopter-seed" canopy elaboration, and the "Glen Ridge border" cross-city leak.
- Killed the invented program-cost claims ("$900–$2,000 annually," "five to ten percent of a single emergency repair," "highest-return investment").
- Stripped both inline markdown self-links (`[roof maintenance programs](...)`, `[Glen Ridge](...)`).
- De-fab `urgencyNote` "Early action saves thousands" → factual schedule-prevention note.
- Dropped the **Firestone/ProLogis 15-year dataset** ($0.14 vs $0.25/sq ft, 21-vs-13-year/62%) carried by the service layer — it was killed as fabricated in prior committed batches (EO Batch 2); all committed sibling maintenance combos omit it.

**Entity-grounding applied:** `directAnswer` reframed to "Newark Quality Roofing is a roofing contractor providing roof maintenance programs across Montclair, New Jersey, and Essex County …" with a ≤40-word bold span (39w) and the "registered New Jersey Home Improvement Contractor" credential tail outside the bold. No `definition` field (spliced post-assembly). No "licensed" for NQR; "fully insured" framing used.

**Named sources cited in-text:**
- NRCA — biannual (spring/fall) inspection cadence + after any severe weather event; balanced attic ventilation extends roof life.
- ARMA — proper maintenance extends asphalt-shingle life ~25–30%; sealant fails in 5–10 years; 50:50 chlorine-bleach-and-water wash at low pressure (never pressure washing) for moss/algae.
- NRCA + ARMA — ¼ inch per foot of slope to drain; water remaining >48 hours counts as a defect.
- Industry estimate attributed to the NRCA — ~90–95% of leaks at flashing, 5–10% at the open field.
- InterNACHI life-expectancy chart — EPDM 15–25 yr, TPO 7–20 yr, modified bitumen 20 yr.
- GAF, Carlisle, Owens Corning — manufacturer warranties condition coverage on periodic inspection, clear drains, prompt repair / documented maintenance record at claim.
- HomeAdvisor — $400–$1,000/yr NJ maintenance-plan range.
- U.S. Census Bureau — roughly 54% of Montclair units in multi-unit structures.
- Essex County Parks (implied) — Eagle Rock + Mills Reservation adjacency on the First Watchung ridge.
- Montclair Historic Preservation Commission COA framing — Article XXIII of Chapter 347, §347-136; four locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) + local landmarks; in-kind exempt; Estate Section nominated-not-designated; National Park Service note that National Register listing alone places no federal restriction.

**Differentiation vs West-Essex siblings:** foregrounds the CONDITIONAL four-district + landmark COA (Article XXIII / Ch.347 §347-136), Eagle Rock + Mills Reservation adjacency, the architecturally diverse Victorian/Queen-Anne/Tudor/Craftsman/Colonial-Revival stock, ~54%-multi-unit, and the Bloomfield Avenue / Watchung Plaza corridors. No South Mountain Reservation (West Orange only); no Nutley "nine public parks" / Franklin Ave / ON3; no Glen Ridge borough-wide gate; no Verona "HPC review"; no Cedar Grove no-COA.

**Validation:** all answer-first leads ≤40w (directAnswer bold 39w; overview 37w; challenges 39w; process 24w; FAQ first sentences ≤39w), metaDescription 145 chars, 6 FAQs, no `**` leaks in raw fields, no links/URLs, no modality, no de-fab literals, esbuild TS transform OK.
