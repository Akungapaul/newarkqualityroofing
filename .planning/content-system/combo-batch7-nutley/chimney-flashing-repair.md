# chimney-flashing-repair × Nutley — rewrite rationale

## De-fab literals cleared
- **OLD price `$400–$1,500`** in `overview[0]` prose ("prices starting from $400–$1,500 and free estimates available today") and a duplicate price in pricing/FAQ → removed from all prose; price now lives only in `pricing` ($300–$1,800, sourced) and the single cost FAQ.
- **`whyChooseUs` de-fab line** "NJ licensed, GAF Certified — 15+ years protecting Essex County," "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and 24/7 emergency response" → replaced with registered-HIC / fully-insured / local-crew / free-written-estimate / photo-documented reasons.
- **`conversionHooks.urgencyNote`** "Early action saves thousands" → factual "Addressing a failed chimney flashing early limits interior and structural water damage in the chase."
- **Inline markdown self-links** `[chimney flashing](/chimney-flashing-repair)`, `[Nutley](/roofing-in-nutley-nj)` → stripped to plain text (zero links, matching committed siblings).
- **Redundant duplicate cost FAQ** (the file had two "How much does chimney flashing repair cost in Nutley" FAQs) → collapsed to one sourced cost FAQ.
- **Unsourced fabricated specifics** removed: "1920s–1940s lime-based mortar / galvanized steel on pre-1960 construction" hard dating, "fatigue sealant within five to seven years," "high-movement polyurethane," "12/12 to 14/12 pitch," "twice the labor," "$800–$2,500" Tudor pricing, "Tudor multi-gable" Nutley framing → de-quantified or replaced with NRCA/IIBEC/IRC-sourced equivalents and verified Nutley building stock (older single-family ~1890–1940 Colonials/Capes, two-family/small multi-family, Franklin Avenue mixed-use).
- No ~35,000 population, no "James O'Malley, PE," no fabricated landmark list, no COA fees/fines/buffer, no Chapter 272↔410 conflation, no swapped rivers, no "same-day completion." None were carried in.

## Entity-grounding
- `directAnswer` entity-grounded: "Newark Quality Roofing is a roofing contractor providing chimney flashing repair across Nutley, New Jersey, and Essex County …" — bold span 38 words; credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold. No `definition` field (spliced post-assembly).
- Credential = "a registered New Jersey Home Improvement Contractor, fully insured." No "licensed" for NQR anywhere. Third-party "licensed" not needed here.

## Geography / COA (verified)
- Third River / Yantacaw runs THROUGH (Yantacaw Park); Passaic forms the WESTERN border — kept distinct. No reservation. ON3 not used here (chimney-flashing is a single-family/masonry angle); Franklin Avenue mixed-use kept as the commercial spine.
- Binding COA framed via Chapter 410 / Historic District of the Third River and Environs / Nutley Historic Preservation Committee — separate from the construction permit; The Enclosure "very likely within the district, verify the specific parcel against the Township's official historic-district map"; NPS no-restriction-from-listing note. Permit office = Township of Nutley Code Enforcement Department (no named official).

## Named sources cited
NRCA (two-part chimney flashing system; ~90–95% leaks-at-flashing industry estimate); InterNACHI + shingle-manufacturer guidance (continuous one-piece strip = defective); IIBEC (surface caulk cracks within a few years from masonry-vs-roof movement + freeze-thaw); IRC Section R1003.20 (cricket >30 in parallel to ridge); ASTM D1970 (self-adhering ice-and-water membrane self-seals around fasteners); N.J.A.C. 5:23-2.7 + NJ Uniform Construction Code (ordinary-maintenance / 25% rule); HomeGuide + Angi (cost $300–$1,800, most $400–$1,600, spot reseal $150–$300); National Park Service (Register-listing-no-restriction); Chapter 410 ordinance (Township of Nutley).
