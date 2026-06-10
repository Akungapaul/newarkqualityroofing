# aging-roof-replacement (Orange) — rewrite rationale

De-fab literals cleared from the original combo:
- `GAF Certified`, `15+ years protecting Essex County`, `same-day` estimates, `24/7` emergency response, "Premium materials from GAF, CertainTeed, Owens Corning with manufacturer warranties" (manufacturer-credential claim) — all removed from `whyChooseUs`; replaced with the four factual reasons (NJ Home Improvement Contractor licensed/insured; local Essex crew familiar with Orange's two-/three-family, converted-loft, older-detached stock; free written estimates; photo-documented workmanship).
- Price-in-prose ("prices starting from $8,500–$25,000 and free estimates available today") deleted from `overview[0]`; price now lives only in `pricing` and the cost FAQ.
- Inline markdown self-links (`[aging roof replacement](/aging-roof-replacement)`, `[East Orange](/aging-roof-replacement-east-orange-nj)`) stripped — zero links/URLs in the file.
- Unsourced hard numbers de-quantified or re-sourced: invented "130-mph wind ratings," "5 to 15% of deck area," "$2,000 in unexpected deck repair," "lasts 30 years while the previous roof lasted only 20," and the fabricated "South Mountain-adjacent / Class 4" recommendation all removed. South Mountain Reservation reference dropped (it is in West Orange — Orange is one municipality removed). "Affordable alternative to South Orange and Maplewood" homebuyer-narrative dropped (no source; Orange is not framed as a high-homeownership suburb).
- `conversionHooks.urgencyNote` "Early action saves thousands" hype softened to a factual prompt.
- Pricing range corrected to the brief's sourced $10,000–$25,000 (replacement default) with HomeAdvisor/Modernize attribution in `note`.

Named sources cited in-text:
- InterNACHI life-expectancy chart (material lifespans: 3-tab 20, architectural 30, wood/cedar 25, metal 40–80, slate 60–150 yrs).
- NRCA (±40% asphalt-life variance; attic ventilation reduces heat/moisture stress that shortens roof life).
- US Census housing-survey data (older homes 5.5% leakage vs 3.5% newer; ~76% renter-occupied Orange).
- N.J.A.C. 5:23-2.7 (detached 1–2 family re-roof = ordinary maintenance, no permit) and N.J.A.C. 5:23-6.4 (complete-removal conditions: water-soaked, wood, slate, tile, or two-plus layers).
- City of Orange Township Building & Construction Division (permit administration, named qualitatively).
- City of Orange Township Historic Preservation Commission / Development Regulations Ch. 210, Art. X / National Park Service (four-district COA: Orange Valley, Montrose/Seven Oaks Park, Main Street, St. John's; binding, separate from permit, emergency repairs first, Register listing alone no restriction, outside districts not subject to COA).
- IRC R905.1.2 (ice-barrier provision); Owens Corning warranty guidance (workmanship vs manufacturer material warranty); GAF inspection guidance (deck rot).
- HomeAdvisor and Modernize ($10,000–$25,000 NJ replacement); Josten Roofing NJ pricing (architectural $6.50–$11.00/sq ft, metal $9.00–$16.00); Zillow (60–68% resale recoup).

Geography: NO river/Passaic/Newark-Bay/tidal/flood/reservation-adjacency claims; NO "flat plain" import from East Orange. Preserved Orange texture: two-/three-family + investor/landlord economics, ~76% renter, ~half pre-1939, Seven Oaks detached, Valley Arts converted-loft flat/low-slope roofs near the Highland Avenue rail line, tenant-access under NJ landlord–tenant notice, and the four-district COA gate.

Gate self-check: directAnswer 37w; all section leads ≤40w (overview[0] 28, challenges[0] 36, process leads 28/26/27); all 6 FAQ first sentences ≤40w; metaDescription 154 chars; 0 `**` in raw fields; 0 links/URLs; 0 banned modality in declaratives; 0 de-fab literals; esbuild TS parse OK.
