# metal-roof-installation-repair × Irvington — rewrite rationale

De-fab literals cleared from the current combo:
- `overview[0]` price/hype lead ("delivers expert ... prices starting from $15,000–$35,000 and free estimates available today") → replaced with answer-first, figure-free NQR-applied lead (bolded topics).
- Inline markdown self-links `[metal roof installation and repair](/...)`, `[East Orange](/...-east-orange-nj)`, `[Newark](/...-newark-nj)`, `[Irvington](/roofing-in-irvington-nj)` → stripped to plain text (zero links anywhere).
- Fabricated investor/landlord pricing framing ("better return on investment," "long-term property portfolios," break-even ROI math) → removed; landlord/multi-family economics kept FACTUALLY (tenant access, cost-conscious decisions) with no pricing program.
- Unsourced hard numbers de-fabbed: "reduces solar heat gain by up to 25%," "reduce attic temperatures by 30 degrees," "2.5 to 3 times more than asphalt," "$200,000 to $350,000 property values," "$25,000 to $35,000" prose price, "24-gauge / half-inch plywood" specifics → dropped or re-anchored to named-source figures.
- whyChooseUs templated de-fab ("NJ licensed, GAF Certified — 15+ years," "GAF, CertainTeed, and Owens Corning ... manufacturer warranties," "same-day estimates and 24/7 emergency response," "no hidden fees") → replaced with §E registered-HIC / fully-insured factual reasons.
- conversionHooks hype ("Don't wait ... Early action saves thousands," "call now or fill out our form") → factual CTA + factual urgency note.
- Pricing fixed: stale `$15,000–$35,000` / "premium standing seam or panel systems" → §E roof-type install range `$10,000–$25,000` with named-source note.

Entity-grounding (Batch-4 delta):
- `directAnswer` entity-grounded: "Newark Quality Roofing is a roofing contractor providing metal roof installation and repair across Irvington, New Jersey, and Essex County, ..." — bold span 30 words (≤40); credential tail "as a registered New Jersey Home Improvement Contractor." OUTSIDE the bold. Establishes "Irvington, New Jersey" + "roofing contractor."
- NO `definition` field authored (canonical "What Is …?" is spliced post-assembly).
- Credential framing = "registered New Jersey Home Improvement Contractor" / "fully insured" — zero "licensed" for NQR. Third-party "licensed Construction Official" not needed here; no false licensed cites introduced.

Geography corrected/preserved:
- NO river/flood/reservation, NO "flat Watsessing plain," NO Watchung-ridge import.
- Springfield Avenue + Chancellor Avenue commercial corridors and Route 78 (I-78) SOUTHEASTERN-edge light-industrial framed verbatim (border-only, not bisecting); Vailsburg NOT referenced as Irvington's.
- Dense, built-out, small-lot, majority-renter, 2-3-family/investor-owned, 1920s-1940s stock, aging plank decking at tear-off — preserved as local texture.

Historic posture:
- Irvington has NO local historic-district ordinance and NO COA gate; no National Register listings; Register listing alone imposes no restriction per the National Park Service — stated plainly in FAQ 3. No COA invented; no Newark/Orange district imported.

Named sources cited in-text:
- InterNACHI life-expectancy chart (metal 40–80 yrs, copper 70+, asphalt 20/30).
- NRCA and ARMA (1 sq ft net-free vent per 150 sq ft attic floor; up-to-25% roof-life extension per NRCA).
- IRC R905.1.2 ice-barrier provision (International Residential Code).
- N.J.A.C. 5:23-2.7 (ordinary-maintenance exemption + 25% rule), NJ Uniform Construction Code; Township of Irvington's construction-code office.
- National Park Service (Register-listing imposes no private-owner restriction).
- Owens Corning warranty guidance (workmanship vs manufacturer material warranty).
- NOAA 1991–2020 normals at Newark Liberty (EWR) — January low ~25.5°F (qualitative freeze-thaw).
- Cost: HomeAdvisor, Modernize, Josten Roofing NJ pricing ($9.00–$16.00/sq ft install), Angi (metal repair $200–$3,000, seam re-weld $250–$1,100).
- Roofing-industry guidance / contractor consensus (replace >20–25% panel corrosion or >25% seam-connection damage).

6 FAQs (cost FAQ uses the §E install range + repair figures + free-written-estimate framing; no redundant "Who provides …?" FAQ). metaDescription 148 chars; esbuild parse clean.
