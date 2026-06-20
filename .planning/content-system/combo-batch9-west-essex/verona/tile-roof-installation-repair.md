# verona/tile-roof-installation-repair — rewrite rationale

**De-fab literals cleared from the current file:**
- Price-in-lead removed from `overview[0]` ("prices starting from $18,000–$40,000 and free estimates available today") and replaced with an answer-first, entity-grounded, figure-free lead.
- Old invented pricing tier `$18,000–$40,000` / note "clay or concrete tile systems" → replaced with the §E sourced default `$10,000–$25,000` (NJ tile-installation range per HomeAdvisor/Modernize) + repair range $500–$2,500 per HomeGuide.
- `whyChooseUs` templated trust lines killed: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured factual set.
- `conversionHooks.urgencyNote` "Don't wait for minor damage… Early action saves thousands." → factual no-hype.
- Fabricated geography stripped: "upper **Lakeview** neighborhood" (not on the verified list) removed; replaced with verified Personette/Claremont pre-war stock and Eagle Rock + Hilltop reservation edges. Dropped invented "salvage inventory," "best-condition salvaged tiles," and "adds significant resale value" claims.
- Unsourced hard numbers corrected: "800 to 1,200 pounds per square / three to five times heavier," "four to six times more than shingles," "$25,000–$50,000," "75 to 100 years versus 25 to 30," "1920s/1930s Mediterranean clay roofs" — all removed or replaced with named-sourced lifespans and the consensus repair-vs-replace thresholds.
- Inline self-link `[tile roofing](/tile-roof-installation-repair)` and `[Montclair](/tile-roof-installation-repair-montclair-nj)` → stripped to plain text (zero links, matching committed siblings).
- No NQR "licensed" anywhere; credential = "a registered New Jersey Home Improvement Contractor, fully insured."

**Named sources cited (only what the packs support):**
- InterNACHI life-expectancy chart — clay/concrete tile 100+ yrs, concrete 40–75 yrs (facts-materials-economics §0/§6).
- Tile Roofing Industry Alliance — underlayment is the real lifespan limiter; concrete spalling/efflorescence; profile-match repair; ridge-and-hip mortar leak path (§6).
- Repair-vs-replace thresholds (clay ~20–25% / concrete 15–20%) — industry consensus (§6).
- HomeAdvisor/Modernize — NJ installation $10,000–$25,000; HomeGuide — tile repair $500–$2,500 / $5–$25 per sq ft, $50–$300 per tile, flashing $400–$3,000; NJ 10–40% over national (§6/§7).
- N.J.A.C. 5:23-2.7 (NJ UCC ordinary-maintenance reroof + structural-change permit trigger); IRC R905.1.2 ice barrier (facts-nj-regulatory-climate §1).
- NOAA 1991–2020 normals (Newark/EWR freeze-thaw baseline) (§3).
- Zoning Ordinance Chapter 150, Article XXII — Verona HPC review (NOT a COA); 2 designated landmarks (Erie Railroad Freight Shed at 62 Depot Street, Verona United Methodist Church); in-kind exempt; Afterglow proposed-only; National Park Service (Register listing alone = no restriction) — per the committed Verona city page.

**Entity-grounding + differentiation:** directAnswer establishes "roofing contractor" + "Verona, New Jersey" with the credential tail outside the bold (bold span 38 words). No `definition` field (spliced post-assembly). Differentiated from the committed Verona slate sibling by foregrounding tile-distinct anchors: the structural-load gate on split-levels, underlayment-as-limiter, ridge-and-hip mortar, concrete-tile freeze-thaw spalling, and profile/glaze matching.
