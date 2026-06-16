# roof-thermal-imaging-inspections (Bloomfield) — rewrite rationale

## De-fab literals cleared
- **Old price `$300–$700`** in overview[0] prose lead + pricing field + cost FAQ → removed price from all prose; pricing field reset to the sourced repair/inspection range `$400–$1,000` (HomeAdvisor), price now lives only in pricing + the cost FAQ.
- **`whyChooseUs`** "NJ licensed, GAF Certified — 15+ years protecting Essex County…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → all removed; replaced with registered-HIC/fully-insured + ASTM C1153 verification + local-stock + photo-documentation reasons.
- **`conversionHooks.urgencyNote`** "Early action saves thousands" (fabricated savings) → factual note about limiting deck deterioration / avoiding coating over trapped moisture.
- **Inline markdown self-links** `[Bloomfield](/…)`, `[silicone coating](/…)`, `[commercial roof repair](/…)` → stripped to plain prose (no links anywhere).
- **Unsourced fabricated cost claims** in old FAQ ("five hundred to fifteen hundred dollars," "$800 on imaging that reveals whether a $15,000 coating or $40,000 replacement," "$15,000-to-$40,000" framing) → removed; cost FAQ now uses the sourced `$400–$1,000` range + free-written-estimate framing.
- **Unsourced "fifteen miles per hour" / "forty-eight hours" prose figures** → re-attributed to the ASTM C1153 optimal-conditions (wind under ~15 mph, no precip ~prior 48 h) per ASTM C1153 via IIBEC/Fluke; ponding-48h defect + ¼-in/ft slope per NRCA and ARMA.
- **GPS-coordinate / non-permanent marking-paint / nuclear-moisture-meter prose** trimmed to the service-layer's verified ASTM C1153 process (core-cut/probe/calibrated-moisture-meter verification).
- No de-fab literals remain (verified: 0 hits for GAF Certified / same-day / 24/7 / 15+ years / Premium materials / Early action / closest contractor / 500+ / top-rated). No "licensed" used for NQR (0 hits).

## Entity-grounding
- `directAnswer` entity-grounded: "Newark Quality Roofing is a roofing contractor providing roof thermal imaging inspections across Bloomfield, New Jersey, and Essex County, scanning Broad Street, Bloomfield Avenue, and Garden State Parkway-corridor flat roofs and flat-roofed two-family homes for wet insulation" (bold span 37 words, ≤40) + credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field authored (canonical "What Is…?" splice handled post-assembly).
- Credential framing = "a registered New Jersey Home Improvement Contractor, fully insured."

## Differentiation vs Newark/East Orange/Orange/Irvington
- LEADS with Bloomfield-specific application: Broad Street + Bloomfield Avenue + Garden State Parkway-corridor commercial flat/low-slope roofs; flat-roofed two-family homes + postwar garden apartments (slight-majority membrane stock); Watsessing-style low-lying note kept out (drainage handled via ponding/slope standard) and Brookdale mature-canopy debris (clears before scan) woven in; Bloomfield Center Ch. 302 listed-parcel gate not applicable to a non-destructive scan, so the historic angle is correctly omitted here (no COA over-claim).
- Irvington version leads with Springfield Ave/Route 78/two-three-family rentals; Bloomfield leads with the corridor + two-family/garden-apartment membrane stock + Brookdale canopy — distinct local framing, same sourced standards.

## Named sources cited
- **ASTM C1153** (Standard Practice for Location of Wet Insulation in Roofing Systems Using Infrared Imaging) — governing standard, optimal conditions, core-cut verification.
- **NRCA** + **IIBEC** + **Fluke** — wet-insulation thermal behavior, after-sunset scan window, infrared resolution (~0.2°F), survey-vs-point-by-point.
- **NRCA and ARMA** — ponding >48 h defect; ¼ in/ft minimum slope.
- **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** — commercial/multi-family/attached 25% permit rule, Township of Bloomfield's construction office.
- **HomeAdvisor** — typical NJ roof-inspection cost range `$400–$1,000` (pricing + cost FAQ).
- **InterNACHI life-expectancy chart** — referenced via membrane stock framing (EPDM/TPO/mod-bit) consistent with the city/service layers (no decade lifespans invented in prose).

## Schema/gate checks
- overview[0] lead 37 w · challenges[0] 39 w · process[0] 30 w · directAnswer bold 37 w · all FAQ first sentences ≤40 w (38/35/37/38/37). 5 FAQs (no redundant "Who provides…" FAQ). metaDescription 155 chars. No `**` in raw fields. No modality in declaratives. esbuild parse OK.
