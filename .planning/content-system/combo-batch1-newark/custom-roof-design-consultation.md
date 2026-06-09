# Newark — Custom Roof Design and Consultation (combo rewrite rationale)

Answer-first + de-fabbed rewrite of `newark/custom-roof-design-consultation.ts`, localized from the rewritten service object (`design-consultation.ts`, serviceId `custom-roof-design-consultation`).

## De-fab literals cleared
- **`overview[0]` price + hype** — removed "with prices starting from $200–$500 and free estimates available today" and the unsourced `$200–$500` consultation fee (no fact-pack support). Pricing now lives only in the `pricing` field and the cost FAQ as the sourced free-written-estimate framing.
- **`whyChooseUs` templated trust line** — removed "GAF Certified," "15+ years," "same-day estimates," "24/7 emergency response," "Premium materials from GAF, CertainTeed, Owens Corning with manufacturer warranties," and "no hidden fees, no surprises." Replaced with the brief §E factual reasons (NJ HIC licensed/insured; local Essex County crew; written specification; free written estimate documented with photos).
- **`conversionHooks.urgencyNote` hype** — removed "Don't wait… Early action saves thousands." Replaced with a factual assessment/permit-trigger prompt.
- **`pricing.note` "applied toward project cost"** — replaced with sourced NJ install-cost framing.
- **Unsourced prose claims** — dropped the invented "encyclopedic product knowledge," fabricated architectural-tour superlatives, and the consultation-fee-credited-toward-construction guarantee. Kept the genuine Newark texture (party-wall row-house leaks, Forest Hill/Roseville brownstones and Victorians, Ironbound flat-roof membranes along Ferry Street, North Ward access constraints, Lincoln Park mansards, slate/period detail) but re-anchored every number to a source.

## Named sources cited (only what the packs support)
- **InterNACHI life-expectancy chart** — material lifespans (3-tab 20 yr, architectural asphalt 30, metal 40–80, slate 60–150, copper 70+, clay/concrete tile 100+).
- **ASCE 7 / NJ Uniform Construction Code** — wind-load and snow-load design standard the UCC adopts.
- **IRC R806.2 + ARMA** — attic ventilation minimum net free ventilating area of 1 sq ft per 150 sq ft of attic floor.
- **IRC R905.1.2** — underlayment/ice-barrier scope.
- **N.J.A.C. 5:23-2.7 (NJ UCC)** — detached 1–2-family re-roof is ordinary maintenance (no permit); addition/dormer/pitch-change and commercial roof over 25% in 12 months require a permit. Administered through the **Newark Department of Engineering Building Division** (corrected from the prior file's Economic & Housing Development framing).
- **N.J.S.A. 40:55D-107 + Newark Landmarks and Historic Preservation Commission** — Certificate of Appropriateness; Newark's ordinance auto-designates pre-2007 Register districts as local landmarks (James Street Commons and Lincoln Park confirmed local-designated; HEDGE to verify a specific parcel's local/contributing status).
- **National Park Service** — Register listing alone places no restriction on a private owner.
- **NRCA** — balanced attic ventilation reduces heat/moisture stress that shortens roof life.
- **Josten Roofing / NJ roofing-guide pricing** — NJ install cost ($6.50–$11.00/sq ft architectural asphalt, $9.00–$16.00 metal, $10–$30 slate).
- **Integrity Home Exteriors** — written-specification documentation sequence.

## Gate checks
directAnswer 35w; overview[0]/challenges[0]/process[0] first-sentence definitive answers all <40w (31/17/30); every FAQ first sentence <40w; one cost FAQ with sourced range + free-written-estimate framing; metaDescription 151 chars, no `**`; no `**` in raw fields; no modality in declaratives; no outbound URLs; Zod-valid (overview 4, challenges 4, process 4, faqs 6).
