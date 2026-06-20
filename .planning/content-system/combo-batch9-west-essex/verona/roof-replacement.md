# verona/roof-replacement — rewrite rationale

**De-fab literals cleared (all from the current file):**
- Price-in-lead removed from `overview[0]` ("prices starting from $8,500–$25,000+ and free estimates available today") → answer-first, figure-free, entity-grounded lead.
- Old invented pricing tier `$8,500–$25,000+` → sourced replacement default `$10,000–$25,000` (HomeAdvisor + Modernize NJ).
- whyChooseUs purged of "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning," "same-day estimates and 24/7 emergency response" → registered NJ HIC / fully insured framing.
- `urgencyNote` "Early action saves thousands" (fabricated savings) → factual water-damage note.
- Fabricated streets/sections "Sunset Avenue" (and the current file's "Lakeview"/"Park Place" pattern) dropped; only verified sections used (Personette Avenue, Claremont Avenue, Bloomfield/Pompton Avenue corridors, Verona Park/Lakeside Avenue).
- Fabricated "Newark Quality Roofing has replaced roofs on hundreds of Verona split-levels" / invented self-stats removed.
- Fabricated "130-mph six-nail / wind-rated starter strip" hilltop spec, GAF Timberline HDZ / CertainTeed Landmark Pro brand-as-credential, "copper granules," financing claims, and the "$16,000–$24,000 split-level" invented tier all removed.
- All inline markdown self-links stripped (`[Roofing in Montclair NJ](...)`, `[Verona Park](...)`, `[Cedar Grove](...)`).
- Historic framing corrected: NOT a literal COA — Verona uses **HPC review** under Zoning Ordinance Chapter 150, Article XXII; exactly two designated landmarks (Erie Railroad Freight Shed, 62 Depot Street; Verona United Methodist Church); in-kind exempt; Afterglow is PROPOSED-only; Verona Park is an Olmsted Essex County park, not a reroof gate.

**Named sources cited in-text:**
- InterNACHI life-expectancy chart (3-tab 20yr, architectural 30yr, metal 40–80yr, slate 60–150yr; EPDM 15–25, TPO 7–20, mod-bit 20).
- N.J.A.C. 5:23-2.7 (ordinary-maintenance reroof exemption + 25% commercial rule) and N.J.A.C. 5:23-6.4 (Rehab Subcode multi-layer/water-soaked removal), per the NJ Uniform Construction Code.
- IRC R905.1.2 ice-barrier provision (24-inch eave coverage).
- NRCA and ARMA (1 sq ft net-free vent per 150 sq ft attic floor; ¼ inch/ft low-slope drainage).
- NRCA (90–95% of leaks originate at flashing — industry estimate attributed to the NRCA).
- HomeAdvisor + Modernize ($10,000–$25,000 NJ replacement range; 10–40% above national; labor ~60–70%).
- Insurance Information Institute (Triple-I, 2019–2023) — wind/hail 2.8% / 1 in 36.
- Essex County Parks (Eagle Rock First Watchung + Hilltop Second Watchung reservations).
- NOAA National Weather Service Peckman River gauge at Verona (qualitative drainage near Verona Park).
- National Park Service (National Register listing alone places no restriction).
- Owens Corning warranty guidance; Integrity Home Exteriors documentation guidance.

**Entity-grounding:** directAnswer entity-grounded (roofing contractor / "Verona, New Jersey" / registered NJ HIC tail outside the ≤40-word bold span = 35 words); no `definition` field (spliced post-assembly); credential = registered NJ HIC + fully insured; no "licensed" for NQR.
