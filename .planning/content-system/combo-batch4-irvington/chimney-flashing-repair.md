# chimney-flashing-repair × Irvington — rewrite rationale

## De-fab literals cleared
- **Price in overview[0] lead** ("prices starting from $400–$1,500 and free estimates available today") — deleted; replaced with an answer-first, figure-free NQR-applied lead. Price now lives only in `pricing` + the cost FAQ.
- **Inline markdown self-links** — `[chimney flashing repair](/chimney-flashing-repair)` and `[Irvington](/roofing-in-irvington-nj)` stripped to plain text (zero URLs anywhere).
- **`whyChooseUs` template trust line** — "NJ licensed, GAF Certified — 15+ years…", "same-day estimates and 24/7 emergency response", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "Transparent pricing… no hidden fees" — all removed; replaced with the four brief-standard factual reasons (registered NJ HIC / fully insured framing).
- **`conversionHooks`** — "call now or fill out our form" and "Early action saves thousands" hype removed; replaced with plain factual CTA + factual urgency note.
- **Invented hard numbers de-quantified/re-sourced** — the prior file's unsourced "fail within 2 to 4 years," "Type S mortar," "24-gauge galvanized," "1.5 inches reglet," "15 minutes hose test," "$800–$2,000 / $300–$800 masonry add" cost figures were dropped or replaced with named-source facts. The "wider than 30 inches" cricket figure is now sourced to IRC R1003.20.
- **Unverified local color removed** — "Olympic Park colonials," "Tudor-style homes," "Nestor"-style invented specifics dropped; kept only the brief's verified Irvington texture (dense 2-/3-family rentals, older detached early-20th-century stock, Springfield Avenue + Chancellor Avenue corridors, investor/landlord ownership, tenant-occupied access). No river/flood/reservation; no Watsessing/Watchung import.
- **No COA correctly stated** — added a historic-district FAQ affirming Irvington has NO local historic-district ordinance and NO Certificate of Appropriateness step (the opposite of Newark/Orange); no COA invented.
- **Credential reframe** — all NQR "licensed" framing → "a registered New Jersey Home Improvement Contractor" / "fully insured." No "licensed and insured" anywhere.
- `definition` field omitted (spliced post-assembly per entity-grounding pattern).

## Named sources cited (facts-components-specialty.md §2 + facts-nj-regulatory-climate / city page)
- **NRCA** — two-part chimney flashing system (base/step woven one piece per shingle course + separate counter flashing in a reglet); the hedged "roughly 90–95% of leaks originate at flashing" industry estimate attributed to the NRCA.
- **IRC R1003.20** — cricket required on a chimney wider than 30 inches measured parallel to the ridge.
- **IIBEC** — surface caulk/roofing cement alone cracks within a few years from masonry-versus-roof differential movement and freeze-thaw.
- **InterNACHI + shingle-manufacturer guidance** — a continuous one-piece strip at the chimney is a defective installation.
- **ASTM D1970** — self-adhering ice-and-water membrane self-seals around fasteners.
- **N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code)** — detached 1–2-family roof-covering repair = ordinary maintenance (no permit); commercial/multi-family/attached >25% in 12 months = permit (Township of Irvington's construction-code office).
- **HomeGuide and Angi** — chimney flashing repair $300–$1,800, most $400–$1,600, spot reseal $150–$300 (cost FAQ + pricing).
- **National Park Service** — a National Register listing alone places no restriction on a private owner (historic FAQ).

## Entity-grounding
- `directAnswer` bold span = 39 words, establishes "Irvington, New Jersey" + "roofing contractor"; credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- 6 FAQs (cap), metaDescription = 160 chars, parse-verified via esbuild (exit 0).
