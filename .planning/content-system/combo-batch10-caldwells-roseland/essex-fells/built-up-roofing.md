# essex-fells/built-up-roofing — rewrite rationale

Answer-first, de-fabbed, entity-grounded rewrite of the Essex Fells × built-up-roofing combo. Localization base = the rewritten `built-up-roofing` object in `src/data/service-content/commercial-roof-types.ts`; geography/voice cribs = committed Essex Fells city page (`caldwells-roseland.ts`, cityId 'essex-fells') and the Orange combo exemplar.

## De-fab literals cleared
- Price-in-lead removed from `overview[0]` ("$5–$9/sq ft … free estimates available today"); replaced with a figure-free, entity-grounded NQR-applied lead.
- whyChooseUs purged of "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," and "same-day estimates and 24/7 emergency response." Replaced with the registered-HIC / fully-insured factual set.
- conversionHooks: dropped "Don't wait … Early action saves thousands"; replaced with factual urgency.
- Inline markdown self-links stripped ([Newark], [East Orange], [Essex Fells] → none; committed siblings carry zero links).
- Pricing tier corrected from invented `$5–$9/sq ft` to the §E replacement/installation default `$10,000–$25,000` with sourced note.
- Fabricated Essex Fells texture removed: the "mid-twentieth-century estate construction period," collector-car-garage/wine-cellar/multi-structure-estate narrative, "neighbor-impact / asphalt-kettle-fume community-relations" invention, and "exceeded thirty years because shaded canopy reduces UV" unsourced claim. No fabricated streets, no one-acre-minimum, no slate-quarry inventory, no Grover Cleveland, no reservation/floodplain framing, no city-specific climate numbers.

## Historic posture (corrected to NONE)
Historic FAQ states plainly that Essex Fells has no local historic-preservation ordinance, no HPC, and no Certificate-of-Appropriateness process; no "Essex Fells Historic District" on the National or NJ State Register (REFUTED). No Chapter 142 floodplain wording used as a preservation gate; no 2018 Master Plan Historic Preservation Element cited as enacted.

## Entity-grounding
- `directAnswer` bold span = 36 words ("Newark Quality Roofing … is a roofing contractor providing built up roofing across Essex Fells, New Jersey, and Essex County…"), credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field authored (propagated by post-assembly splice).
- Credential = "a registered New Jersey Home Improvement Contractor, fully insured" everywhere; no "licensed" for NQR.

## Named sources cited in-text
- InterNACHI life-expectancy chart — BUR 30 yrs; EPDM 15–25, TPO 7–20, modified bitumen 20.
- NRCA and ARMA — ¼-inch-per-foot minimum slope; ponding >48 hours = defect.
- N.J.A.C. 5:23-2.7 (NJ UCC) — detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule on commercial/municipal/institutional.
- N.J.A.C. 5:23-6.4 (Rehabilitation Subcode) — full removal to deck when water-soaked or 2+ existing layers.
- Parish, Modernize, HomeGuide — flat-roof 25–30% membrane-damage replacement threshold; Kellow & Modernize — repair approaching 30% of replacement cost.
- HomeGuide & Modernize — flat-roof repair $2.50–$10/sq ft; HomeAdvisor & Modernize — NJ replacement range note.
- Borough of Essex Fells 2018 Master Plan — mature 50–150-year tree canopy (Bowditch legacy).
- Building Department at Borough Hall, 255 Roseland Avenue (no Construction Official named).
- National Park Service — National Register listing alone places no federal restriction on a private owner.

## Differentiation
Foregrounds Essex-Fells-distinct anchors: NONE historic gate; mature-canopy debris on low-slope decks; the few municipal/institutional/estate-accessory structures as the only BUR/low-slope angle in an ~97%-detached, ~96–98%-owner-occupied single-family borough; Borough Hall at 255 Roseland Avenue. No Caldwell/North-Caldwell/Fairfield/Roseland anchors imported; upland, no reservation, no floodplain.
