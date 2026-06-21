# roseland/fire-damage-roof-replacement — rewrite rationale

De-fab literals cleared from the current file:
- Price-in-lead ("prices starting from $12,000–$35,000 and free estimates available today") removed from overview[0]; price now lives only in `pricing` + the cost FAQ.
- `whyChooseUs` "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured factual reasons.
- Inline self-link `[fire damage roof replacement](/...)` and the `[Fairfield](/...-fairfield-nj)` self-link stripped (kept zero links; Fairfield reference dropped entirely — Roseland does not border Fairfield).
- Old invented pricing `$12,000–$35,000` / note "including structural repair" → sourced replacement default `$10,000–$25,000` with HomeAdvisor/Modernize attribution + the structural-add note.
- `conversionHooks.urgencyNote` "Early action saves thousands" → factual tarp-and-document framing, no fabricated savings.
- Generic "Roseland building officials"/"may exceed original construction" softened; corrected to the Borough of Roseland construction-code office at 300 Eagle Rock Avenue (no Construction Official named).

Entity-grounding applied:
- `directAnswer` entity-grounded: NQR = "roofing contractor providing fire damage roof replacement across Roseland, New Jersey, and Essex County …" (bold span 38 words) + credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold. No `definition` field (spliced post-assembly).
- Credential = "a registered New Jersey Home Improvement Contractor, fully insured." No "licensed" for NQR anywhere; third-party "licensed structural engineer" / "licensed public adjuster" kept verbatim.

Roseland-specific corrections:
- COA framed conditionally per §C: Landmarks and Historic District Commission + Certificate of Appropriateness under Chapter 30, Article IX EXIST, but bind only locally designated properties; none confirmed designated; owner consent required → no homeowner subject absent designation. Williams-Harrison House (126 Eagle Rock Ave) = heritage color only, NPS Register-listing-imposes-no-restriction.
- Geography kept qualitative: verified sections only (Eagle Rock Avenue, Eisenhower Parkway, Becker Farm Road, Livingston Avenue, postwar single-family stock). No Watchung-ridge placement, no reservation, no Fairfield border, no whole-borough flood claim, no Roseland-specific elevation/snow/wind number.

Named sources cited in-text:
- U.S. Forest Products Laboratory (whole-assembly damage; char layer zero residual capacity; heat-affected zone ~85–90%; smoke ≠ structural weakening; firefighting-water saturation).
- American Wood Council (1.5 in/hr char rate).
- ANSI/IICRC S700 (saturation/corrosion; acidic soot).
- UL 790 / ASTM E108 (Class A/B/C fire-test methods).
- EDT Engineers (post-fire structural assessment).
- N.J.A.C. 5:23-2.7 (ordinary-maintenance no-permit; 25% rule) + N.J.A.C. 5:23-6.4 / IRC R908.3.1.1 (recover-not-allowed; tear-off required).
- Insurance Information Institute (Triple-I): fire/lightning ~1 in 430 insured homes/yr.
- N.J.S.A. 17:22B (NJ Public Adjusters' Licensing Act — contractor-not-adjuster line).
- HomeAdvisor + Modernize (NJ replacement $10,000–$25,000); Josten Roofing + Integrity Home Exteriors (NJ 10–40% above national).
- National Park Service (Register listing alone imposes no restriction); Chapter 30, Article IX (COA framework).

Differentiation from caldwells-roseland siblings: foregrounds the COA-exists-but-binds-no-one posture, the Eisenhower Parkway / Becker Farm Road office-park co-lead commercial-roof market, the postwar single-family + mature-canopy stock, and the 300 Eagle Rock Avenue construction-code office. Avoided Caldwell's two designated landmarks, North Caldwell's Hilltop/691-ft, Essex Fells' no-ordinance / 255 Roseland Avenue, and Fairfield's Passaic floodplain / Route-46 industrial corridor.
