# verona/cedar-shake-roofing — rewrite rationale

**Service:** cedar-shake-roofing · **City:** Verona (cityId 'verona') · export `veronaCedarShakeRoofing`

## De-fab literals cleared
- **Price-in-lead** deleted: overview[0] opened "delivers expert cedar shake roofing in Verona — with prices starting from $15,000–$32,000 and free estimates available today." Replaced with an entity-grounded, figure-free answer-first lead; price now lives only in `pricing` + the cost FAQ.
- **OLD invented pricing tier** `$15,000–$32,000` ("premium cedar shake with preservative treatment") → replaced with the sourced replacement/installation default `$10,000–$25,000` (HomeAdvisor/Modernize NJ), note adds the $10–$20+/sq ft NHI Contractors NJ cedar figure.
- **whyChooseUs** templated trust lines removed: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and 24/7 emergency response." → replaced with the registered-HIC / fully-insured / free-written-estimate / photo-documentation set.
- **conversionHooks.urgencyNote** "Early action saves thousands" (fabricated savings) → factual moisture-decay framing.
- **Inline markdown self-links** stripped: `[cedar shake roofing](/cedar-shake-roofing)`, `[Verona Park](/roofing-in-verona-nj)` → plain text. Zero links/URLs remain.
- **NQR "licensed"** removed everywhere (NJ has no roofing license; HIC registration per N.J.S.A. 56:8-136). Credential = "a registered New Jersey Home Improvement Contractor," "fully insured."
- **Fabricated geography/claims** not carried: no "Class C untreated cedar" falsehood (corrected to nonclassified per UL 790/ASTM E108 + CSSB Certi-Guard), no "hilltop 15–20% stronger gusts," no invented neighborhoods. Only verified sections used: Personette Avenue, Claremont Avenue, Afterglow, Verona Park, Bloomfield/Pompton corridors. Reservations named: Eagle Rock + Hilltop only (NOT South Mountain/Mills).
- **Definition field omitted** (spliced post-assembly per §0.2). **HPC review** framing used, never "Certificate of Appropriateness/COA" — Chapter 150, Article XXII; two designated landmarks; Afterglow proposed-only; in-kind exempt.

## Named sources cited in-text
- **Cedar Shake and Shingle Bureau** — 20–40 yr cedar shake life; ≥1.5 in underside air space; north-facing/shaded slopes degrade faster; moisture drives most premature decay; flex test; CSSB-graded shakes; Certi-Guard fire program.
- **InterNACHI life-expectancy chart** — single "Wood" service life of 25 years; flex test for advanced degradation.
- **NRCA** — ventilation/drying guidance (paired with CSSB on shade/slope).
- **UL 790 / ASTM E108** — untreated cedar nonclassified; FR cedar Class B/C; Class A wood roof = assembly only (CSSB Certi-Guard).
- **N.J.A.C. 5:23-2.7** (ordinary-maintenance no-permit reroof; 25% rule on commercial/multi-family/attached) and **N.J.A.C. 5:23-6.4** (Rehabilitation Subcode — complete removal of a wood-shake covering, no recover-over), per the NJ Uniform Construction Code.
- **NHI Contractors (NJ)** + **Angi** — $10–$20+/sq ft installed; $400–$1,800 repair. **HomeGuide** — $0.15–$0.60/sq ft preservative maintenance. **HomeAdvisor/Modernize** — $10,000–$25,000 NJ replacement; NJ 10–40% above national.
- **National Park Service** — National Register listing alone places no restriction on a private owner. **Essex County Parks** — Eagle Rock (First Watchung) + Hilltop (Second Watchung) reservations; Verona Park as Olmsted Essex County park, not a reroof gate.
- **Zoning Ordinance Chapter 150, Article XXII** + Verona HPC — narrow HPC review; Erie Railroad Freight Shed (62 Depot Street) + Verona United Methodist Church landmarks.

## Gate-relevant counts
directAnswer bold span 30w · overview[0] 39w · challenges[0] 40w · process[0] 28w · 6 FAQs all ≤40w first sentence · metaDescription 155 chars · no `**` in raw fields · no price in any prose lead (cost FAQ carries the range).
