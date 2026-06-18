# south-orange / roof-repair — rewrite rationale

Localized the answer-first `roof-repair` service to South Orange and baked in the entity-grounding pattern. 6 FAQs; directAnswer bold span = 39 words.

## De-fab literals cleared (all present in the old file)
- **Price in lead** — old `overview[0]` "delivers expert roof repair... with prices starting from $350–$1,500 and free estimates available today" → deleted; replaced with a figure-free answer-first NQR-applied lead. Old invented `$350–$1,500` pricing tier → corrected to the sourced repair range `$400–$1,000`.
- **whyChooseUs hype** — "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured factual set (no "licensed", no certifications, no years, no manufacturer brands as credentials, no response-time claim).
- **conversionHooks** — "Early action saves thousands" → factual "Addressing roof damage early limits interior and structural water damage."
- **Fabricated South Orange prose** — named slate-quarry inventory (Vermont Unfading Gray / Pennsylvania Peach Bottom / reclaimed profiles), fabricated streets (Scotland Road, Mead Street, Ward Place, Prospect Street as a residential street), "Arts and Crafts bungalows," cedar-shake-quarry detail, "South Orange Village... village within a township" permit framing → deleted. Replaced with verified sections (Montrose Park, the Wyoming sections, Seton Village, Village Center/SOPAC, South Mountain) and the correct office name (the Township of South Orange Village Building Department, 76 South Orange Avenue, 20-business-day plan review).
- **COA framing corrected** — old "material changes on historically significant properties may require village approval" / implicit Register framing → replaced with the BINDING LOCAL COA framing: Montrose Park Historic District, Certificate of Appropriateness from the South Orange Historic Preservation Commission, Village Code Chapter 185, asserted ONLY as a local-ordinance matter, ONLY inside the designated district / for designated local landmarks, NOT "because of National Register listing," NOT Village-wide; first sentence split to stay ≤40w; NPS no-federal-restriction line kept.
- **Inline markdown self-links** — `[Maplewood](/roof-repair-maplewood-nj)`, `[roof repair](/roof-repair)`, `[Millburn](/roof-repair-millburn-nj)`, `[West Orange](/roof-repair-west-orange-nj)` → all stripped (zero links/URLs in the file).
- **Unsourced "by 10-15 years" moss claim and the repair-vs-replace rule** → de-quantified / re-sourced.
- **`definition` field** — omitted entirely (propagated by post-assembly splice per §0.2).

## Differentiation vs the roof-leak-repair sibling and Maplewood
- Foregrounded South-Orange-DISTINCT anchors: binding Montrose Park / Chapter 185 COA, Seton Hall 58-acre institutional low-slope inventory + SOPAC + Village center, large pre-war Victorians/Colonial Revivals/Tudor Revivals with slate/metal/copper detailing, the 8,000-trees-across-181-streets Fast Facts canopy, the Reservation on the Reservation's EASTERN edge along the WESTERN boundary, the 76 South Orange Avenue office.
- `roof-repair` leads with the full repair scope (leaks, missing/cracked shingles, flashing failures, storm damage) so it does not mirror `roof-leak-repair` (which leads with leak-tracing). Imported NONE of Maplewood's anchors (no framework-only COA, no Maplewood Village/Springfield Avenue, no 74.9% owner-occupied figure, no 574 Valley Street, no reservation-reaches-into framing).

## Named sources cited in-text
- The roofing industry estimate attributed to the NRCA (90–95% of leaks at flashing).
- Integrity Home Exteriors (repair-process / documentation guidance).
- GAF technical guidance (flashing as most common leak source).
- The Insurance Information Institute (wind/hail 2.8% of insured homes per year).
- The Township planning evaluation (over half the stock predates 1940, 82% predates 1960).
- The Township Fast Facts (over 8,000 shade trees across 181 Village streets).
- Essex County Parks (South Mountain Reservation on the Reservation's eastern edge).
- NRCA and ARMA (ponding > 48 hours = defect, ¼ in/ft drainage slope).
- N.J.A.C. 5:23-2.7, the 25% rule, and N.J.A.C. 5:23-6.4 (NJ Uniform Construction Code / Rehab Subcode).
- Village Code Chapter 185 + South Orange Historic Preservation Commission; National Park Service (NR listing = no federal restriction).
- HomeAdvisor and Modernize (NJ leak-repair $400–$1,000, flashing reseal $200–$500).
- Kellow, Modernize, Josten (30% repair-vs-replace rule); Home Depot and Kelly Roofing (5–10× / under-10–15-years rule).
- Owens Corning warranty guidance (workmanship vs material warranty).
