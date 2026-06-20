# montclair/commercial-roof-repair — rewrite rationale

**De-fab literals cleared from the current file:**
- Price-in-lead (`overview[0]` "prices starting from $500–$5,000 and free estimates available today") and the old `$500–$5,000` pricing tier → answer-first entity-grounded lead; pricing reset to the sourced commercial range `$300–$1,100`.
- `whyChooseUs` "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" → de-fabbed to registered-HIC / fully-insured factual reasons.
- "same-day emergency response" / "mobilize within hours" FAQ → replaced with the diagnostic leak-finding FAQ (no response-time claim).
- Fabricated streets/sections (Church Street, Valley Road, North Mountain Avenue, "Montclair Heights") → dropped; replaced with verified Bloomfield Avenue, Watchung Plaza, Upper Montclair, Town Center.
- "Early action saves thousands" urgencyNote → factual "Addressing a commercial roof leak early limits interior and structural water damage."
- Inline markdown self-links (`[commercial roof repair](…)`, `[Montclair](…)`, `[Bloomfield](…)`, `[West Orange](…)`) → stripped to plain prose (zero links).
- Unsourced "twenty-five percent / 25% of roof area" repair-vs-replace → named-sourced 25–30% threshold (Parish/Modernize/HomeGuide) and 30%-of-replacement (HomeAdvisor).

**Entity-grounding applied:** `directAnswer` reframed to "Newark Quality Roofing is a roofing contractor providing commercial roof repair across Montclair, New Jersey, and Essex County…" with the registered-NJ-HIC credential tail OUTSIDE the 39-word bold span. No `definition` field (deterministic splice). NQR credential = "a registered New Jersey Home Improvement Contractor, fully insured" — no "licensed" for NQR.

**Differentiation (process-heavy service):** LEADS with Montclair-specific commercial application (Bloomfield Avenue / Watchung Plaza / Upper Montclair storefronts; ~54% multi-unit two-/three-family rear-addition rooflines; Eagle Rock + Mills Reservation street-canopy debris on the First Watchung ridge; conditional four-district Article XXIII §347-136 COA) before the standardized membrane facts. Avoided sibling anchors (West Orange's South Mountain/landmark-only COA, Glen Ridge's borough-wide Ch.15.32, Verona's Peckman/HPC-review, Cedar Grove's no-COA).

**Named sources cited:** U.S. Census Bureau (~54% multi-unit); InterNACHI life-expectancy chart + Single Ply Roofing Industry (EPDM/TPO/mod-bit/BUR/PVC lifespans); NRCA technical guidance (seam failure modes, horizontal water migration, flashing); NRCA & ARMA (¼-in/ft slope, ponding >48 hrs); ASTM C1153 (wet-area verification); Owens Corning warranty guidance; N.J.A.C. 5:23-2.7 (25% permit threshold) + 5:23-6.4 (Rehab Subcode, water-soaked/2-layer); Township of Montclair Building Office (permit path); Montclair Historic Preservation Commission / Article XXIII of Chapter 347 §347-136 + National Park Service (conditional COA); HomeGuide/Modernize/WeatherShield + HomeAdvisor (cost ranges, 25–30% / 30%-of-replacement rules); Essex County Parks (Eagle Rock + Mills Reservations).

**Verification:** directAnswer bold span 39w; overview[0] 32w; challenges[0] 35w; process[0] 30w; all 6 FAQ first sentences ≤40w (max 39w, COA FAQ split after §347-136); metaDescription 156 chars; TS parses; raw fields carry no `**`; no de-fab literals, no NQR "licensed", no links, no modality, no price in prose leads.
