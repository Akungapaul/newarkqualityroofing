# cedar-grove / asphalt-shingle-roofing — rewrite rationale

Answer-first, de-fabbed, entity-grounded rewrite. Localized the committed answer-first asphalt-shingle service object (`src/data/service-content/residential-roof-types.ts`, serviceId `asphalt-shingle-roofing`) to Cedar Grove, matched to the committed city page (`src/data/city-content/west-essex.ts`, cityId `cedar-grove`). Gold shape/voice = `src/data/combo-content/orange/roof-repair.ts`.

## De-fab literals cleared
- **Price-in-lead + hype:** `overview[0]` "delivers expert … prices starting from $8,500–$18,000 and free estimates available today" → answer-first figure-free NQR-applied lead.
- **Fabricated geography:** "western slope of the Second Watchung Mountain," "winds 15–20% higher than valley homes," "exposed ridge-top properties on Ridge Road, Bowden Road, and upper Bradford Avenue," "hail along the Watchung ridge" → deleted. Kept qualitative "higher ground between the Watchungs"; reservation edges corrected to **Mills + Hilltop** (NOT South Mountain / Eagle Rock).
- **Fabricated stock/decade claims:** "ranch homes built 1950–1975 constitute the single largest category," Norway-spruce species claim, inventory claim ("Weathered Wood / Driftwood / Charcoal in inventory"), "Gloeocapsa magma … within three to five years" specific → replaced with verified "predominantly postwar ranch and split-level" + qualitative shade-driven moss / algae-resistant shingles.
- **Fabricated savings/lifespan:** "extend shingle life by 5 to 8 years," "reduce energy costs by 15–25 percent," "$800 to $1,500 cost premium," "18 to 22 years" / "25 to 30 years" un-sourced lifespans → replaced with InterNACHI life-expectancy chart figures (3-tab 20 yr, architectural 30 yr) and NRCA ±40% variance, all named-sourced.
- **whyChooseUs:** "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF/CertainTeed/Owens Corning," "same-day estimates and 24/7 emergency response" → registered-NJ-HIC / fully-insured factual reasons.
- **conversionHooks.urgencyNote:** "Early action saves thousands" → "Addressing roof damage early limits interior and structural water damage."
- **Inline markdown self-links:** `[asphalt shingle roofing](/asphalt-shingle-roofing)`, `[Montclair](/asphalt-shingle-roofing-montclair-nj)` → stripped (zero links).
- **Pricing:** old `$8,500–$18,000` "full installation with tear-off" → sourced replacement default `$10,000–$25,000` (HomeAdvisor + Modernize NJ replacement range).
- **Historic FAQ:** stated plainly that Cedar Grove has NO HPC, NO Certificate of Appropriateness, NO designated district/landmark — only an advisory Heritage Advisory Committee; per the NPS, National Register listing alone places no restriction on a private owner. No COA imported from any neighbor.

## Entity-grounding applied
- `directAnswer` entity-grounded (bold span 35 words ≤40): "Newark Quality Roofing is a roofing contractor providing asphalt shingle roofing across Cedar Grove, New Jersey, and Essex County …" credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field authored (propagated by post-assembly splice).
- Credential = "a registered New Jersey Home Improvement Contractor" + "fully insured" — no "licensed" for NQR anywhere.

## Named sources cited in-text
InterNACHI life-expectancy chart (3-tab 20 yr / architectural 30 yr); NRCA (±40% life variance; ~90–95% leaks at flashing; ventilation 1 sq ft NFA per 150 sq ft; up to 25% life extension); ARMA + manufacturer guidance (130 mph 6-nail rating, ¾-inch nail penetration, 60 mph 3-tab); IRC R905.1.2 ice-barrier provision; GAF + ARMA (drip edge ≥2 in onto deck); N.J.A.C. 5:23-2.7 (ordinary-maintenance / 25% rule); N.J.A.C. 5:23-6.4 (Rehab Subcode tear-off); NOAA (58 mph severe-storm threshold); IBHS (seal-strength high-wind factor); University of Minnesota Extension (ice-dam mechanism); National Park Service (National Register listing places no restriction on private owner); Josten Roofing NJ + HomeGuide (cost ranges); HomeAdvisor + Modernize (NJ replacement-range pricing); Township of Cedar Grove Building Department at 525 Pompton Avenue (permit office); U.S. Census Bureau geo facts via committed city page (76.3% owner-occupied / 5,008 housing units — framed qualitatively, not printed in this combo); Essex County Parks (Mills 157.15 ac / Hilltop 284.16 ac, referenced qualitatively).

## Differentiation
Foregrounded Cedar Grove-distinct anchors: NO-COA Heritage-Committee-only posture (only no-COA city in batch); Mills + Hilltop reservation edges; predominantly postwar ranch/split-level stock; Pompton Avenue / Route 23 storefronts; 525 Pompton Avenue permit office. Avoided the other four west-essex siblings' anchors (West Orange Section 25-30, Montclair Article XXIII, Glen Ridge Chapter 15.32, Verona Chapter 150) and committed-city anchors.
