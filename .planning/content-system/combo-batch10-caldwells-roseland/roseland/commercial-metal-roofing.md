# roseland/commercial-metal-roofing — rewrite rationale

De-fab literals cleared from the current file:
- Removed price-in-lead ("prices starting from $10–$18/sq ft and free estimates available today") and the old invented `$10–$18/sq ft` pricing tier → replaced with the named-sourced NJ commercial-metal range ($9.00–$16.00/sq ft installed, per Josten Roofing/HomeGuide/Modernize, mirroring the service layer).
- Stripped the whyChooseUs trust block ("NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and 24/7 emergency response") → replaced with factual reasons using "A registered New Jersey Home Improvement Contractor, fully insured."
- Removed the unsourced "FM Global guidelines for Roseland's specific wind exposure," the "100 to 200 pounds per square" retrofit figure, the "40-to-50-year"/"24-gauge"/"0.032 aluminum"/"PVDF (Kynar)" spec claims, and "Don't wait… Early action saves thousands" → de-quantified or replaced with named-sourced facts and a factual urgency note.
- Stripped the inline markdown self-links ([commercial metal roofing](/…), [Caldwell](/…)) to plain text (none retained).

Entity-grounding applied:
- directAnswer is entity-grounded (bold span 36 words): "Newark Quality Roofing is a roofing contractor providing commercial metal roofing across Roseland, New Jersey, and Essex County, fitting standing-seam and exposed-fastener metal panels on the Eisenhower Parkway, Becker Farm Road, and Livingston Avenue office-park buildings" + credential tail outside the bold ("as a registered New Jersey Home Improvement Contractor").
- No `definition` field (propagated by post-assembly splice).
- Credential = "a registered New Jersey Home Improvement Contractor, fully insured" everywhere; no "licensed" used for NQR.

Geography/COA guardrails honored:
- This is the office-park commercial-metal page, so it leads with the verified Eisenhower Parkway / Becker Farm Road / Livingston Avenue office corridor (~2,922 jobs per Borough Master Plan; ADP/Lowenstein Sandler as corridor color only, not NQR clients). Permit office = "the Borough of Roseland construction-code office at 300 Eagle Rock Avenue" (no named Construction Official).
- Western-edge Passaic-River floodplain framed as a riverine-side drainage stressor only ("most of the borough sits on higher developed ground"); no whole-borough/basement-flood claim, no reservation, no Fairfield border, no Watchung placement, no Roseland-specific elevation/snow/wind number.
- COA/Williams-Harrison omitted (not relevant to a commercial office-park metal-roof scope) rather than fabricated as a homeowner gate.

Named sources cited in-text:
- InterNACHI life-expectancy chart (metal 40–80, copper 70+, TPO 7–20, EPDM 15–25, modified bitumen 20).
- This Old House (standing-seam 40–70); metal-roofing industry consensus (exposed-fastener ~30–50; cut-edge/seam failure dominant).
- Metal Construction Association + NRCA (panel runs >100 ft need engineered expansion provisions).
- NRCA and ARMA (¼ inch per foot drainage slope; ponding >48 hrs = defect).
- N.J.A.C. 5:23-2.7 (25% commercial permit rule) and N.J.A.C. 5:23-6.4 (Rehabilitation Subcode tear-off triggers).
- Cost FAQ + pricing: Josten Roofing NJ pricing, HomeGuide, Modernize ($9.00–$16.00/sq ft installed; metal repair $5–$10/sq ft; minor leak $200–$1,000); Integrity Home Exteriors (NJ 10–40% above national).
- Borough of Roseland Master Plan (~2,922 office-corridor jobs).
