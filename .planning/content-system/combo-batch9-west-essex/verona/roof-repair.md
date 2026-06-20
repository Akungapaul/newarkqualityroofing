# verona/roof-repair — rewrite rationale

**De-fab literals cleared from the old file:**
- Price-in-lead (`$350–$1,500` in `overview[0]` + "free estimates available today") and the old invented pricing tier `$350–$1,500` → replaced with the sourced repair range `$400–$1,000` (HomeAdvisor) in the `pricing` field and cost FAQ only; lead is now figure-free + entity-grounded.
- `whyChooseUs` "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" → de-fabbed to "a registered New Jersey Home Improvement Contractor, fully insured" + factual reasons.
- "Newark Quality Roofing has repaired hundreds of Verona split-levels" (invented self-stat) — deleted.
- Fabricated neighborhoods **Lakeview, Sunset, Park Place** — deleted; only verified sections kept (Afterglow, Personette Ave, Claremont Ave, Verona Park/Lakeside Ave, Bloomfield Ave + Pompton Ave corridors).
- "gusts 15 to 20 percent stronger on hilltop homes" and the 130-mph/six-nail hilltop spec — deleted (no pack support; not layered onto Verona).
- "Verona does not have a formal historic preservation commission" falsehood — corrected to the NARROW **HPC review** framing (Chapter 150, Article XXII; exactly two designated landmarks — Erie Railroad Freight Shed at 62 Depot Street + Verona United Methodist Church; in-kind exempt; Afterglow proposed-only). Uses "HPC review," NOT "COA."
- "Early action saves thousands" urgencyNote → "Addressing roof damage early limits interior and structural water damage."
- All inline markdown self-links (`[roof repair](/roof-repair)`, `[Cedar Grove]`, `[Montclair]`, `[West Orange]`) — stripped to plain text (file carries zero links).
- No "licensed" anywhere for NQR; credential = "registered New Jersey Home Improvement Contractor."

**Entity-grounding:** `directAnswer` bold span ≤40w (37w) establishing "roofing contractor" + "Verona, New Jersey"; credential tail outside the bold; no `definition` field (spliced post-assembly).

**Named sources cited in-text:** NRCA (90–95% flashing leak estimate), Integrity Home Exteriors (moisture-path diagnosis + documentation), GAF (flashing as most common leak source), Insurance Information Institute / Triple-I 2019–2023 (wind & hail 2.8%/1-in-36), Essex County Parks (Eagle Rock First Watchung + Hilltop Second Watchung — NOT South Mountain/Mills), NOAA National Weather Service Peckman River gauge at Verona (qualitative flood framing), IRC R905.1.2 (ice barrier ≥24" inside wall line), Owens Corning (workmanship-vs-material warranty), InterNACHI life-expectancy chart (slate 60–150 / metal 40–80 / EPDM 15–25 / TPO 7–20 / mod-bit 20), HomeAdvisor + Modernize (cost), N.J.A.C. 5:23-2.7 + NJ UCC (25% rule / ordinary maintenance), National Park Service (National Register places no private-owner restriction), Zoning Ordinance Chapter 150 Article XXII (Verona HPC review). Permit office = Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue (no Construction Official named).
