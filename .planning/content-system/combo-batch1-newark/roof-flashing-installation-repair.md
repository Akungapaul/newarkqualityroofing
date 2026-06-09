# Newark × Roof Flashing Installation Repair — rewrite rationale

De-fab literals cleared from the prior combo file:
- `whyChooseUs`: removed "GAF Certified," "15+ years," "same-day estimates," "24/7 emergency response," and the "Premium materials from GAF, CertainTeed, Owens Corning with manufacturer warranties" brand-as-credential line. Replaced with the four approved factual reasons (NJ HIC licensed & insured, local Essex County crew, free written estimates, photo-documented workmanship).
- `overview[0]`: deleted the "prices starting from $300–$1,500 and free estimates available today" price+hype lead; replaced with a figure-free definitional answer-first lead. Price now lives only in `pricing` and the cost FAQ.
- `conversionHooks.urgencyNote`: removed "Early action saves thousands" hype; replaced with a factual water-migration prompt. `midPageCta` switched to a plain free-written-estimate CTA.
- De-quantified the unsourced city-specific claims from the old file: "urban heat island" thermal-load assertions (no degree numbers; EPA framing kept qualitative and not even needed here), the invented "fifty-year duty" and "first five years" lifespans, and the "nearly half of all Newark flashing projects" stat. All removed rather than re-sourced.
- Restructured every array answer-first: directAnswer + overview[0]/challenges[0]/process[0] are now definitive ≤40-word leads (em-dash tokens counted; directAnswer 34, overview[0] 32, challenges[0] 34, process[0] 30), each body string re-opens by re-bolding a lead topic in order.

Newark texture preserved (per brief §D): party-wall row-house counter flashing, Forest Hill / Roseville brownstone reglets, North Ward masonry, Ironbound flat-roof / Ferry Street parapet membranes, Passaic-tidal/low-lying East Ward, copper-vs-aluminum brownstone choice, ~3/4 renter-occupied two-/three-family stock.

Named sources cited in-text (all from the two fact packs):
- NRCA — 90–95% of leaks at flashing details (hedged "industry estimate attributed to the NRCA").
- IRC Section R905.2.8.5 (drip edge ≥2 in, ≤12 in O.C., ≥2 in laps); IRC Section R903.2.1 (kickout at eave-to-sidewall).
- InterNACHI + shingle-manufacturer guidance (one-piece strip = defective step flashing).
- ASTM D1970 (self-adhered ice-and-water shield self-seals around fasteners).
- IIBEC (surface caulk cracks from masonry-vs-roof movement + freeze-thaw).
- NRCA + ARMA (low-slope ¼ in/ft drainage).
- Modernize (flashing reseal/small section $200–$500 — cost FAQ + pricing).
- N.J.A.C. 5:23-2.7 (1–2 family ordinary-maintenance no-permit; commercial/attached 25% rule) + City of Newark Department of Engineering as enforcing office.
- Newark Landmarks & Historic Preservation Commission / Newark Municipal Code Chapter 41:10; James Street Commons + Lincoln Park confirmed local-designated; Forest Hill / Four Corners hedged as verify-the-parcel (per brief §C).

Credential framing limited to "New Jersey Home Improvement Contractor, licensed and insured." No manufacturer-certification claims, no city-specific heat-island/wind degree numbers. Validated: parses against `ComboContentSchema` (ZOD VALID).
