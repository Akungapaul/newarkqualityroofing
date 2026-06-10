# custom-roof-design-consultation (East Orange) — rewrite rationale

De-fab literals cleared from the prior combo file:
- `overview[0]` hype + price ("delivers expert ... with prices starting from $200–$500 and free estimates available today") → replaced with a figure-free answer-first definition (3 bolded deliverables); no price in any prose lead.
- All inline markdown self-links stripped to plain text: `[design consultation](/...)`, `[Montclair](/...)`, `[Millburn](/...)` — zero links/URLs anywhere (matches committed Newark combos).
- `whyChooseUs` de-fabbed: removed `GAF Certified`, `15+ years`, manufacturer-brand-as-credential (GAF/CertainTeed/Owens Corning "with manufacturer warranties"), `same-day` estimates, `24/7` emergency response, "transparent pricing/no hidden fees" → 4 clean factual reasons (NJ HIC licensed & insured, local Essex County crew, free written estimates, photo-documented workmanship).
- `conversionHooks.urgencyNote` "Early action saves thousands" hype → factual prompt (written spec sets material/code/permit path before work). `midPageCta` de-hyped to the plain free-written-estimate CTA.
- Fabricated $200–$500 / $500–$2,500 consultation fee and "applied toward project cost" / "fee credited toward the installation contract" claims removed (unsourced) → pricing uses the service-layer "Free written estimate and consultation" framing with the only pack-sourced install figures (Josten Roofing material $/sf) named in the note and the cost FAQ.
- Removed unverified "East Orange Building Department plan review" phrasing → re-pinned to the verified East Orange Building Division (designated State UCC Enforcement Agency) at the Department of Property Maintenance, 44 City Hall Plaza; no specific local code section cited.
- No invented river/flood/tidal/reservation geography (none present to remove for this file; none introduced). No COA/HPC assertion — used the brief's mandated negation ("no identified local historic-preservation ordinance, so a Certificate of Appropriateness is not triggered").
- Dropped unverified neighborhood framing; kept only verified East Orange neighborhoods (Brick Church, Elmwood, Doddtown, Greenwood, Presidential Estates) and corridor texture.

Named sources cited in-text:
- InterNACHI life-expectancy chart (material lifespans: asphalt/metal/slate/copper/tile; EPDM/TPO/modified-bitumen low-slope).
- IRC R806.2 and ARMA (1 sq ft per 150 sq ft net free ventilating area).
- ASCE 7, the load standard the NJ Uniform Construction Code adopts (wind-/snow-load design).
- N.J.A.C. 5:23-2.7 (ordinary-maintenance re-roof exemption; 25% rule; structural-change permit trigger) and N.J.A.C. 5:23-6.4 (Rehabilitation Subcode tear-off when two or more existing layers).
- IRC R905.1.2 (ice-barrier provision).
- U.S. Census QuickFacts (~69% renter, 87.6% multi-unit) — framed qualitatively for tenant-access coordination under NJ landlord-tenant notice rules.
- National Park Service (Register listing alone places no restriction on a privately funded reroof).
- NRCA (balanced attic ventilation reduces heat/moisture stress).
- Integrity Home Exteriors (documentation/specification sequence).
- Josten Roofing and NJ roofing-guide pricing (NJ install $/sf: architectural asphalt $6.50–$11.00, metal $9.00–$16.00, slate $10–$30) — pricing field + cost FAQ only.

Gate checks: directAnswer 36w; overview[0] 32w; challenges[0] 36w; process[0] 28w; all FAQ first sentences ≤40w; metaDescription 151 chars; no `**` in raw fields; esbuild parse ok; 6 FAQs incl. exactly one cost FAQ.
