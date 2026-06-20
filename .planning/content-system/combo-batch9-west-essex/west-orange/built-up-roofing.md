# west-orange/built-up-roofing — rewrite rationale

## De-fab literals cleared
- **Price-in-lead + hype:** deleted `overview[0]` "prices starting from $5–$9/sq ft and free estimates available today"; price now lives only in the `pricing` field and the cost FAQ.
- **whyChooseUs templated trust line:** removed "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," and "same-day estimates and 24/7 emergency response." Replaced with the registered-HIC / fully-insured framing.
- **conversionHooks.urgencyNote:** removed "Don't wait for minor damage to become a major expense. Early action saves thousands" (fabricated savings) → factual water-damage framing.
- **Inline markdown self-links:** stripped `[built-up roofing](/built-up-roofing)`, `[West Orange](/roofing-in-west-orange-nj)`, `[East Orange](/built-up-roofing-east-orange-nj)` → plain text (combo carries zero links).
- **Unsourced hard numbers:** removed "exceeds 150 degrees" thermal-range, "7 pounds per square foot" ballast weight, "10 to 15 years / 20-plus years" unmodified-vs-modified lifespans, "extending roof life by 5 to 10 years" coating claim, and the "25 to 30 years" service-life claim — replaced with the InterNACHI 30-year BUR life and the named replacement-threshold figures.
- **Fabricated elevation/ridge engine:** removed all "valley-floor vs ridge-top," "ridge-top wind management," "elevation-amplified temperature range" framing. Kept only the qualitative reservation-edge canopy stressor.
- **Banned geography:** no Mills/Hilltop reservations, no Peckman River, no Seton Hall, no Edison angle, no fabricated streets, no slate-quarry inventory. Only verified West Orange anchors used.
- **Credential:** zero "licensed" for NQR anywhere; directAnswer + whyChooseUs use "a registered New Jersey Home Improvement Contractor, fully insured." No `definition` field (spliced post-assembly).

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — BUR 30 yr; EPDM 15–25; TPO 7–20; modified bitumen 20.
- **NRCA and ARMA** — ¼-inch-per-foot minimum slope; ponding >48 hrs = defect; NRCA low-slope / flashing guidance (multi-ply puncture redundancy).
- **NJ Uniform Construction Code (N.J.A.C. 5:23-2.7)** — 25%-of-roof-area-in-12-months commercial permit rule; detached 1–2-family ordinary-maintenance exemption; permit filed with the Township of West Orange Building & Construction Code Enforcement office.
- **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode)** — full removal to deck when water-soaked or 2+ existing layers.
- **Parish, Modernize, HomeGuide** — flat-roof 25–30% replacement threshold; **HomeAdvisor** — recurring-leak systemic-failure framing.
- **Josten Roofing NJ pricing + HomeGuide** — commercial low-slope $7–$12/sq ft installed; flat-roof repair $2.50–$10/sq ft (cost FAQ); pricing field $10,000–$25,000 per HomeAdvisor and Modernize.
- **West Orange Historic Preservation Commission, Section 25-30** — Certificate of Appropriateness for ~ten locally designated landmarks (Holy Trinity Episcopal Church, the State Diner, the Hedges Block); landmark-only, not township-wide.
- **National Park Service** — National Register listing alone places no federal restriction on a private owner; Llewellyn Park = private 1857 deed-of-trust / Committee of Managers, not a township COA.
