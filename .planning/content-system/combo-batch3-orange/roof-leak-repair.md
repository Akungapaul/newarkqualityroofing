# roof-leak-repair (Orange) — rewrite rationale

Restructured the Orange roof-leak-repair combo answer-first, mirroring the committed
`newark/roof-leak-repair.ts` shape and localizing to Orange's building stock.

## De-fab literals cleared
- **Price in `overview[0]`** ("prices starting from $300–$1,200 and free estimates available today") → deleted; replaced with a figure-free definitional lead. Price now lives only in `pricing` and the cost FAQ.
- **Inline markdown self-links** `[roof leak repair](/roof-leak-repair)` and `[East Orange](/roof-leak-repair-east-orange-nj)` → removed entirely (zero links in file, matching Newark combos).
- **`whyChooseUs`** templated trust line — "NJ licensed, GAF Certified — 15+ years…", "same-day estimates and 24/7 emergency response", "Premium materials from GAF, CertainTeed, Owens Corning with manufacturer warranties" → replaced with the four brief-spec factual reasons (HIC licensed/insured; local Essex crew familiar with Orange's two-/three-family, converted-loft, older-detached stock; free written estimates; photo documentation).
- **`conversionHooks.urgencyNote`** "Early action saves thousands" hype → softened to the factual "Addressing a roof leak early limits interior and structural water damage."
- **`pricing` range** changed from the fabricated `$300–$1,200` to the sourced `$400–$1,000` (HomeAdvisor NJ leak-repair range) with the standard sourced `note`.
- **Invented geography deleted:** the entire "South Mountain runoff into the Valley," "lowest elevation collecting stormwater," "ground moisture migrating upward," "South Mountain tree canopy," Scotland Road / Park Avenue Victorian-roofline, and tight-lot adjacent-property-cascade narrative — none Orange-sourced (Orange is one municipality removed from the South Mountain Reservation; no flood/waterfront/elevation claim has a FEMA/NJDEP source). Replaced with verified Orange texture: Seven Oaks older detached homes, two-/three-family rental stock (~76% renter), Valley Arts converted-industrial loft buildings, Main Street commercial corridor, tenant-access under NJ landlord–tenant notice.

## Named sources cited in-text
- NRCA (industry estimate) — 90–95% of leaks originate at flashing.
- Integrity Home Exteriors — moisture-path / repair-process guidance.
- NRCA and ARMA — ponding >48 hours is a defect; ¼ inch per foot of slope to drain.
- NOAA 1991–2020 normals at Newark Liberty (EWR) — repeated freeze-thaw crossing of 32°F.
- U.S. Census — Orange ~76% renter-occupied.
- Owens Corning warranty guidance — workmanship vs. material warranty distinction.
- HomeAdvisor — NJ leak-repair $400–$1,000 cost range (pricing + cost FAQ).
- NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 — ordinary-maintenance permit exemption + 25% rule; permit administered by the City of Orange Township Building & Construction Division.
- COA note (brief, contextual only): a property inside one of Orange's four designated historic districts may require a Certificate of Appropriateness for regulated exterior work; emergency repairs may proceed first. No per-district material rule asserted; no COA forced outside the four districts.

## Gate checks
PARSE OK (esbuild ts). directAnswer 39w; overview[0] first sentence 37w; challenges[0] 16w; process[0] 19w; FAQ first sentences 36/19/36/20/17w — all ≤40 (em-dash tokens counted). metaDescription 154 chars. 5 FAQs (one cost FAQ, no redundant "who provides" FAQ). No `**` in raw fields. No banned de-fab literals. No links/URLs.
