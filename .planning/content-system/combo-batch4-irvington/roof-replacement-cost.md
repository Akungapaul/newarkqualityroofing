# roof-replacement-cost × Irvington — rewrite rationale

**De-fab literals cleared (from the current combo file):**
- Price + hype in `overview[0]` ("prices starting from $8,500–$25,000 and free estimates available today") — replaced with an answer-first, figure-free NQR-applied lead; price now lives only in `pricing` + the cost FAQ.
- Inline markdown self-links — `[roof replacement pricing](/roof-replacement-cost)`, `[Irvington](/roofing-in-irvington-nj)`, `[East Orange](/roof-replacement-cost-east-orange-nj)` — all stripped to plain text (zero URLs).
- Fabricated programs — "investment property estimates include ROI analysis," "multi-property volume pricing," landlord portfolio-discount framing — removed; landlord/rental economics kept factual (tenant-access, cost-conscious portfolios) with no invented program.
- Fabricated financing claims — "financing partners offer terms from 24 to 120 months," "rates starting at competitive market levels," "60-month financing plan" — removed entirely (no sourced financing figure exists).
- Self-invented figures — "$8,000 colonial / $16,000 larger home," "60 to 80 percent" resale, "1.5 to 2 times replacement cost" buyer-deduction, "drone photography" — removed or replaced with sourced figures.
- `whyChooseUs` de-fab — "NJ licensed, GAF Certified — 15+ years," "same-day estimates and 24/7 emergency response," "GAF, CertainTeed, Owens Corning manufacturer warranties," "Premium materials," "no hidden fees" — replaced with the 4 brief-default factual reasons (registered NJ HIC + fully insured / local crew / free written estimates / photo documentation).
- `pricing.note` "NJ average for Essex County homes" → sourced HomeAdvisor + Modernize note.
- conversionHooks hype ("Early action saves thousands," "call now or fill out our form") → factual CTA + factual urgency note.
- Duplicated-stem cost FAQ ("How much does roof replacement cost cost…") removed; one clean sourced cost FAQ kept.

**Entity-grounding (Batch-4 delta):**
- `directAnswer` entity-grounded — "Newark Quality Roofing is a roofing contractor providing roof replacement cost across Irvington, New Jersey, and Essex County …" (bold span 38 words) + credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field authored (canonical "What Is…?" block is spliced post-assembly).
- Credential is "a registered New Jersey Home Improvement Contractor" / "fully insured" everywhere; no "licensed" used for NQR. Third-party "licensed" (public adjuster context) not needed on this cost page.

**Irvington-specific accuracy:**
- NO COA — stated plainly (no local historic-district ordinance, no NRHP listing, Register-listing-alone places no restriction per the National Park Service). No Newark/Orange COA districts imported.
- Geography preserved correctly — dense built-out SW-of-Newark township; NO river/flood/reservation; NO "flat Watsessing plain" or "Watchung-ridge" import; Springfield Avenue + Chancellor Avenue commercial flat roofs; Route 78 SE-edge light-industrial (not bisecting). Dropped unverified "Nestor Terrace"; no "Irvington's Vailsburg." Preserved 2-/3-family rental + investor/landlord economics, tenant-access, aging 1920s–1940s plank decking at tear-off.

**Named sources cited in-text:**
HomeAdvisor + Modernize (NJ replacement $10,000–$25,000); 2025 national replacement benchmarks (~$10,000–$11,000); Josten Roofing NJ pricing (asphalt $5.50–$9.50, architectural $6.50–$11.00, membrane $7.00–$12.00); NJ roofing guides (slate $10–$30); HomeGuide (tear-off $1–$3 asphalt / $2–$5 slate-tile; overlay ~20–25% less; labor 60–70%); Angi ($2,000–$5,000 overlay delta, ~20–30% lifespan haircut); Integrity Home Exteriors (NJ 10–40% premium, labor share); ARMA (tear-off catches deck rot a recover hides); N.J.A.C. 5:23-2.7 (ordinary maintenance / 25% rule); N.J.A.C. 5:23-6.4 + ICC IRC R908.3.1.1 (full removal of multi-layer/water-soaked, no third layer); Opendoor + Zillow (60–68% recoup, ~$15,247); Zonda Cost vs Value (8 of top-10 exterior-replacement ROI); National Park Service (Register-listing-alone no restriction); Township of Irvington's construction-code office (permit administration).
