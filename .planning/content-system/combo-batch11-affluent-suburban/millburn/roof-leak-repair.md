# millburn/roof-leak-repair — rewrite rationale

**De-fab literals cleared (from the current combo file):**
- Price-in-lead + hype: deleted `overview[0]` "prices starting from $300–$1,200 and free estimates available today"; price now lives only in `pricing` + the cost FAQ ($400–$1,000 per HomeAdvisor/Modernize).
- `whyChooseUs`: removed "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning," "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC/fully-insured framing per §E.
- `conversionHooks`: removed "Early action saves thousands" (fabricated savings) and "call now / fill out our form" hype.
- Old invented pricing tier ($300–$1,200) → sourced repair default $400–$1,000.
- Fabricated estate prose stripped: "salvaged slate from our inventory," "custom-formed copper," property-value-"exceeding three million dollars," "hand-painted murals / coffered plaster / custom silk wallcoverings," "response times for Millburn are prioritized," and the "[roof leak repair](/roof-leak-repair)" inline self-link.
- Removed every Millburn-specific number not source-pinned; no elevation/snow/wind integer (Watchung-ridge "marginally longer" kept qualitative on the shared EWR baseline).
- Dropped fabricated ASTM D8231 (electronic-leak-detection standard) per the batch-10 cross-batch de-fab note; kept ASTM C-1153 for infrared wet-insulation detection.

**Entity-grounding:** `directAnswer` reframed to "Newark Quality Roofing is a roofing contractor providing roof leak repair across Millburn, New Jersey, and Essex County …" (bold span 38 words) + credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold. No `definition` field (spliced post-assembly). No "licensed" for NQR anywhere.

**Historic/COA framing (binding but NARROW):** COA bound ONLY to a designated landmark OR the Wyoming / Short Hills Park historic district — not township-wide; Certificate of Appropriateness is the HPC exterior-design approval separate from the building permit; detached 1–2-family reroof stays N.J.A.C. 5:23-2.7 ordinary maintenance. Paper Mill Playhouse / Cora Hartshorn Arboretum treated as institutional sites, not homeowner gates. No fabricated landmark list. Permit office = Township of Millburn Building Department (no street address, no Construction Official named).

**Geography guardrails honored:** only verified sections named (Short Hills, Wyoming, downtown Millburn village on the Rahway River, Cora Hartshorn Arboretum); South Mountain Reservation framed as Millburn's; downtown Rahway flooding framed as a DOWNTOWN low-slope COMMERCIAL drainage stressor only (Floyd/Irene/Ida); no Livingston anchors (no West Essex Park / Riker Hill / Passaic floodplain / Route 10 / split-levels).

**Named sources cited in-text:** NRCA (90–95% flashing leak estimate; 1:150 net-free vent area, 50/50 intake/exhaust; ponding >48 hr / ¼-in-per-ft slope, with ARMA), Integrity Home Exteriors (repair-process + diagnostic guidance), InterNACHI life-expectancy chart (slate 60–150 yr), NPS Preservation Brief 29 (20%-broken full-slope threshold; non-ferrous copper/stainless slater's nails), Secretary of the Interior's Standard 6 (match-in-kind), GAF (inspection guidance), University of Minnesota Extension (ice-dam mechanism), ASTM C-1153 (infrared wet-insulation detection), N.J.A.C. 5:23-2.7 + the NJ Uniform Construction Code (ordinary maintenance / 25% rule), HomeAdvisor + Modernize (cost), NJ roofing guides (slate $10–$30/sq ft), Insurance Information Institute / Triple-I (wind-hail 2.8% / 1 in 36).

Leads (≤40w, em-dash counted): directAnswer bold 38 · overview[0] 35 · challenges[0] s1 39 · process[0] 29 · all FAQ first sentences ≤36. metaDescription 158 chars. 6 FAQs incl. one cost FAQ. Parses clean (esbuild).
