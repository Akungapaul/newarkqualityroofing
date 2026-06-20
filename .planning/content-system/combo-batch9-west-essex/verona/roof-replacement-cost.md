# verona/roof-replacement-cost — rewrite rationale

**De-fab literals cleared from the current file:**
- Price-in-lead ("$8,500–$25,000 and free estimates available today") and the invented $12,000–$30,000+ tier — replaced with a figure-free, entity-grounded `overview[0]` lead; price now lives only in `pricing` and the cost FAQ.
- OLD pricing tier `$8,500–$25,000` / "NJ average for Essex County homes" → sourced `$10,000–$25,000` per HomeAdvisor and Modernize.
- whyChooseUs "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning", "same-day estimates and 24/7 emergency response" → de-fabbed to registered-HIC / fully-insured factual reasons.
- Unsourced "$4 to $8 per square foot", "$350–$450 per square", "$75 to $125 per sheet", "60 to 80 percent" resale, financing "36 to 144 months / same-as-cash / $150 to $350/month" → removed or replaced with named-sourced figures (Josten NJ pricing, HomeGuide, Opendoor/Zillow/Zonda). Dropped the fabricated financing FAQ entirely.
- urgencyNote "Early action saves thousands" → factual, no fabricated savings.
- Inline markdown self-links (`[roof replacement cost](...)`, `[West Orange](...)`) → stripped to plain text (none remain).
- No Verona-specific fabs were carried (no Lakeview/Sunset/Park Place, no "15–20% stronger gusts", no "hundreds of split-levels", no false "no historic commission", no COA). Verona's narrow HPC-review posture and the two designated landmarks are not material to a cost page, so the permit framing stays on the verified N.J.A.C. 5:23-2.7 ordinary-maintenance / 25% commercial path.

**Named sources cited in-text:**
- HomeAdvisor and Modernize (NJ replacement range $10,000–$25,000; 2025 national ~$10,000–$11,000).
- Josten Roofing NJ pricing (asphalt $5.50–$9.50, architectural $6.50–$11.00, metal $9.00–$16.00+ per sq ft); NJ roofing guides (slate $10–$30).
- HomeGuide (tear-off/disposal $1–$3 asphalt, $2–$5 slate/tile; labor 60–70%); Integrity Home Exteriors (NJ 10–40% premium / labor share).
- N.J.A.C. 5:23-2.7 (ordinary maintenance), N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode, multi-layer/water-soaked removal), NJ Uniform Construction Code, 25% commercial rule.
- Home Depot and Kelly Roofing (5–10× repair-vs-replace); contractor-consensus 25–30% area / 50% cost rules; InterNACHI life-expectancy chart (3-tab 20 yr, architectural 30 yr).
- Opendoor, Zillow, Zonda Cost vs Value report (~60–68% recoup, ~$15,247 added value, 8 of top-10 ROI = exterior, 1–3% asking-price lift).
- Insurance Information Institute (wind/hail 2.8% / largest claim type); homeowner or licensed public adjuster files the claim (NQR documents only).

**Entity-grounding:** directAnswer entity-grounded, bold span 36 words (≤40), credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold; "Verona, New Jersey" + "roofing contractor" established; no `definition` field (spliced post-assembly); credential = registered NJ HIC / fully insured (no "licensed" for NQR); third-party "licensed public adjuster" kept verbatim. Verona texture: pre-war Colonial plank decking, split-level transition flashing, Personette/Claremont Avenue, Bloomfield/Pompton corridors, permit office at 600 Bloomfield Avenue.
