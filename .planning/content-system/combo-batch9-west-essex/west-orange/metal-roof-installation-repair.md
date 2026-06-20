# west-orange / metal-roof-installation-repair — rewrite rationale

**De-fab literals cleared:**
- Deleted the price-in-lead + hype `overview[0]` ("prices starting from $15,000–$35,000 and free estimates available today").
- Killed the entire fabricated elevation/wind engine: "180-mph wind ratings," "60-plus-mph gusts," "16 inches on center clip spacing," "180 degrees / below zero" thermal claims, "elevation-specific engineering," "ASCE 7 adjusted for terrain category" — replaced with the qualitative verified fact (First Watchung ridge; a hillside catches stronger wind than a low-lying lot; no numbers).
- Removed fabricated streets/sections: "Eagle Rock Avenue," "Prospect Avenue," "Pleasant Valley" as a neighborhood. Used only the verified list (St. Cloud, Gregory, Pleasantdale, Llewellyn Park, Main Street / Valley Road / Route 280 spine; South Mountain + Eagle Rock Reservations).
- Deleted brand/product fabs: "Kynar 500," "45-mil steel," "Premium materials from GAF/CertainTeed/Owens Corning," and the "180-mph qualifies for insurance premium reductions" FAQ claim.
- De-fabbed `whyChooseUs` ("NJ licensed, GAF Certified — 15+ years," "same-day / 24/7 emergency response") and `conversionHooks.urgencyNote` ("Early action saves thousands") to factual, registered-HIC framing.
- Stripped both inline markdown self-links (`[metal roof…](/…)`, `[Montclair](/…)`, `[Cedar Grove](/…)`); zero links/URLs remain.
- Replaced invented `$15,000–$35,000` pricing with the brief §E replacement default `$10,000–$25,000`.

**Entity-grounding:** `directAnswer` rebuilt to the entity-grounded shape (bold span 38 words, ending before the credential tail); credential = "a registered New Jersey Home Improvement Contractor" + "fully insured" (no "licensed" for NQR anywhere). `definition` field omitted (spliced post-assembly). Establishes "West Orange, New Jersey" + "roofing contractor."

**COA posture:** narrow LANDMARK-ONLY Certificate of Appropriateness — West Orange HPC, Section 25-30, ~ten locally designated landmarks (Holy Trinity Episcopal Church, the State Diner, the Hedges Block); typical reroof needs none; Llewellyn Park = private 1857 deed-of-trust / Committee of Managers, NOT a township COA; per NPS, National Register listing alone places no federal restriction.

**Named sources cited in-text:** InterNACHI life-expectancy chart (metal 40–80 yrs, copper 70+, asphalt 20/30); Josten Roofing NJ pricing ($9–$16/sq ft metal install); Modernize cost data (repair $200–$1,000, severe corrosion to $3,000); HomeAdvisor + Modernize ($10,000–$25,000 replacement range); NRCA and ARMA (1 sq ft net-free vent per 150 sq ft attic floor); IRC R905.1.2 (ice barrier ≥24 in inside exterior wall line); Metal Construction Association (thermal-expansion / oil-canning); roofing trade guidance (sealant fails 5–10 yrs; 20–25% panel corrosion / 25% seam-connection replace thresholds); Owens Corning warranty guidance; N.J.A.C. 5:23-2.7 (ordinary-maintenance / 25% rule); West Orange Section 25-30 + HPC; National Park Service; Essex County Parks (South Mountain + Eagle Rock Reservations).

**Validation:** TS parses (esbuild); directAnswer bold 38w; overview/challenges/process leads bold-span 13/5/26w; all 6 FAQ first-sentences ≤34w; metaDescription 160 chars; no de-fab literals, no modality, no links, no `**` in raw fields.
