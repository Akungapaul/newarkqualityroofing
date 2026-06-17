# flat-roof-replacement (Nutley) — rewrite rationale

## De-fab literals cleared
- Deleted the old `$6,000–$18,000` price (and the `$8–$14/sq ft`, `$24,000–$42,000`, `$4,000–$12,000` FAQ figures) → replaced with the sourced replacement default `$10,000–$25,000` (HomeAdvisor/Modernize) plus the Josten per-sq-ft membrane figures already shipped in the service layer.
- Stripped the `overview[0]` "delivers expert flat roof replacement … prices starting from $X–$Y and free estimates available today" hype lead → answer-first NQR-applied, figure-free lead.
- Removed all inline markdown self-links: `[flat roof replacement](/flat-roof-replacement)`, `[Bloomfield](…)`, `[Belleville](…)`, `[Nutley](/roofing-in-nutley-nj)` → plain text.
- De-fabbed `whyChooseUs`: killed "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning", "same-day estimates and 24/7 emergency response" → registered-HIC / fully-insured framing.
- `conversionHooks`: removed "call now or fill out our form" and "Early action saves thousands" → factual CTA + factual urgency note.
- Removed unsourced single-day-install / "single-day membrane installation" and "complete in one to two days" / "three to five working days" duration claims (no pack support).
- Corrected geography: kept Third River / Yantacaw running THROUGH (Yantacaw Park corridor) and the Passaic as the WESTERN boundary — did NOT swap. ON3 framed as straddling Nutley AND Clifton, not entirely in Nutley. Dropped the fabricated "Centre Street" reference; used verified Franklin Avenue / Nutley Center only.
- No fabricated landmark list, no Construction Official name, no COA fees/fines/buffer, no Chapter 272↔410 conflation, no "eliminates exemptions for minor roofing", no reservation, no city-specific degree/gust numbers, no ~35,000 population.

## Entity-grounding
- `directAnswer` entity-grounded: "Newark Quality Roofing is a roofing contractor providing flat roof replacement across Nutley, New Jersey, and Essex County …" (bold span 31 words) with credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field (propagated by deterministic post-assembly splice).
- Credential framing = "a registered New Jersey Home Improvement Contractor, fully insured." No "licensed" for NQR anywhere.
- Binding local COA framed natively: Chapter 410 / Historic District of the Third River and Environs, separate from the construction permit, verify-the-parcel; The Enclosure = NR-listed (1974), local designation likely-but-unconfirmed; National Park Service "listing alone places no restriction".

## Named sources cited in-text
- N.J.A.C. 5:23-2.7 (ordinary maintenance / 25% rule) — NJ Uniform Construction Code.
- N.J.A.C. 5:23-6.4 (Rehabilitation Subcode — complete-removal / no recover-over).
- NRCA and ARMA (¼-inch-per-foot slope; 48-hour ponding defect).
- InterNACHI life-expectancy chart (EPDM 15–25, TPO 7–20, modified bitumen 20, built-up 30).
- Single Ply Roofing Industry (PVC 20–30 years).
- ASTM C1549 / CRRC (reflectance 0.70–0.85 cool-roof).
- Josten Roofing NJ pricing (EPDM $7–$10, TPO $8–$12 per sq ft).
- HomeAdvisor and Modernize NJ cost data ($10,000–$25,000 typical replacement).
- Owens Corning warranty guidance (material vs. workmanship warranty).
- National Park Service (Register listing imposes no private-owner restriction).
- Township of Nutley Code Enforcement Department (permit office; no Construction Official named).
- Nutley Chapter 410 / Nutley Historic Preservation Committee / N.J.S.A. 40:55D-107 (binding COA).
- New Jersey landlord-tenant notice (tenant-occupied access on two-/multi-family).
