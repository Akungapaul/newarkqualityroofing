# roof-deck-repair-replacement (Orange) — rewrite rationale

**Export:** `orangeRoofDeckRepairReplacement` · serviceId `roof-deck-repair-replacement` · cityId `orange`

## De-fab literals cleared
- `overview[0]` price+hype lead ("Newark Quality Roofing delivers expert ... with prices starting from $2,000–$6,000 and free estimates available today") → replaced with a figure-free definitional lead (deck = plywood/OSB sheathing spanning rafters). No price in any prose lead.
- Inline markdown self-links `[roof deck repair and replacement](/...)`, `[Newark](/...)` → stripped to plain text (zero links/URLs anywhere, matching the committed Newark combos).
- `whyChooseUs` templated trust line ("NJ licensed, GAF Certified — 15+ years", "same-day estimates and 24/7 emergency response", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties") → replaced with the brief's 4 factual reasons (NJ Home Improvement Contractor licensed/insured; local Essex crew; free written estimates; photo documentation). No GAF Certified / 15+ years / same-day / 24/7 / manufacturer-brand-as-credential.
- `conversionHooks.urgencyNote` "Early action saves thousands" hype → factual prompt about wind-uplift/fastener-hold.
- Unsourced cost figures in old FAQs ($75–$150/sheet, $2,000–$4,000 full-deck) and the fabricated "$2,000–$6,000 / structural deck repair pricing" → replaced with the pack-sourced $2–$6/sq ft (HomeGuide, Angi) + $50–$120 per 4×8 sheet hidden-rot add-on (contractor data).
- Removed invented geography from the old file: "Valley homes develop deck rot," "Mountain-adjacent properties," "branch impacts" framed as a microclimate; de-quantified the "2 to 3 feet beyond the visually apparent area" unsourced contingency claim. No river/flood/reservation-adjacency references; no East Orange "flat plain" import.
- Dropped the old "Mitchell Street" reference (not in the verified neighborhood list); kept verified Orange texture: Seven Oaks detached homes, Valley Arts converted-industrial lofts, Main Street downtown commercial, dense 2-/3-family + ~76% renter/investor stock, tenant-access coordination under NJ landlord–tenant practice.

## Named sources cited in-text
- **ARMA** — roofing nails penetrate ≥3/4 in into deck (or fully through +1/8 in if <3/4 in); ≥12-ga shank; ¼-in/ft low-slope drainage (with NRCA).
- **InterNACHI** — trapped moisture decays sheathing → lost fastener hold + reduced wind resistance; OSB delaminates irreversibly once saturated while plywood partly recovers; failing-deck signs.
- **GAF** — inspection guidance (deck-condition signs).
- **NRCA / ARMA** — ponding >48 hr = defect; ¼-in/ft min slope (low-slope Valley Arts / Main Street commercial).
- **IRC Section R908** — no roofing over a water-soaked/deteriorated deck; **R803.2** — panels <1/2 in over rafters >20 in O.C. need H-clips/T&G/blocking; **R905.1.2** — ice barrier ≥24 in inside exterior wall line; **APA – The Engineered Wood Association** — span ratings set max rafter spacing.
- **N.J.A.C. 5:23-2.7** — detached 1-/2-family roof covering = ordinary maintenance (no permit); structural framing change + commercial/multi-family/attached >25% area = permit; **N.J.A.C. 5:23-6.4** Rehabilitation Subcode recover-vs-tear-off limits. Permit office named qualitatively: **City of Orange Township Building & Construction Division**.
- **HomeGuide / Angi** — re-decking $2–$6/sq ft, ~$5,500 national average; contractor data — hidden-rot $50–$120 per 4×8 sheet.
- Orange facts (qualitative): ~76% renter-occupied; roughly half the housing predates 1939.

## COA note
COA omitted — roof-deck-repair-replacement is an ordinary (non-historic) service, and the brief directs the four-district COA gate not be forced onto every page. No HPC/COA/historic-district claim asserted.

## Gate checks (local)
Parse OK (esbuild ts). directAnswer 39w; overview[0] full-string 39w; challenges[0]/process[0] first sentence ≤21w; all 6 FAQ first sentences ≤39w; 6 FAQs (cap); metaDescription 156 chars; no de-fab literals; no will/should/need-to/must modality in declaratives; no `**` in raw fields (whyChooseUs/pricing/metaDescription/conversionHooks/FAQ questions); zero links/URLs.
