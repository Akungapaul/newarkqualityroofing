# roof-flashing-installation-repair — Bloomfield (Combo Batch 5) rewrite rationale

## De-fab literals cleared
- Removed the `overview[0]` price-in-prose + hype lead ("delivers expert ... prices starting from $300–$1,500 and free estimates available today") → answer-first NQR-applied, figure-free bolded lead.
- Removed the OLD pricing `$300–$1,500` / "per area of flashing work" → sourced components figure `$200–$500` (Modernize flashing cost data; chimney/valley rebuilds cost more), with the free-written-estimate framing in `note`.
- Removed the whyChooseUs de-fab block: "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning", "same-day estimates and 24/7 emergency response" → registered-HIC/fully-insured + factual reasons.
- Removed `conversionHooks.urgencyNote` "Early action saves thousands" → factual ("Addressing a flashing leak early limits interior and structural water damage."). Reframed the hype `midPageCta` to a plain CTA.
- Stripped the two inline markdown self-links in the old overview (`[Bloomfield](/roofing-in-bloomfield-nj)`, `[roof leak repair](/roof-leak-repair-bloomfield-nj)`) — combo carries zero inline links.
- Dropped the UNVERIFIED section "Oakcrest" (and removed the split-level-dominant framing). Reframed so pre-war Colonials + flat-roofed two-family homes / garden apartments are the dominant stock; split-level kept only as a secondary flashing/valley-transition FAQ example.
- De-quantified the unsourced "twenty-five to thirty-five / thirty to forty year" galvanized corrosion-life numbers → qualitative ("corrodes through where moisture contacts the concealed metal"). No invented lifespans.
- Entity-grounded `directAnswer` (bold span 32 words ≤40), "roofing contractor" + "Bloomfield, New Jersey" established, credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold. No `definition` field (spliced post-assembly). No NQR "licensed" anywhere; whyChooseUs uses "A registered New Jersey Home Improvement Contractor, fully insured."

## Named sources cited in-text
- NRCA — hedged "roughly 90–95% of roof leaks originate at flashing ... industry estimate attributed to the NRCA"; two-part chimney base-and-counter flashing.
- IRC Section R905.2.8.5 (drip edge ≥2 in onto deck, ≤12 in O.C., ≥2 in laps); IRC Section R903.2.1 (kickout flashing at sloped-eave/sidewall) — both NJ-adopted via N.J.A.C. 5:23.
- ASTM D1970 — self-adhered ice-and-water shield that self-seals around fasteners (valleys/penetrations).
- InterNACHI + shingle-manufacturer guidance — defective continuous one-piece strip vs. correct woven step flashing; kickout rot/mold.
- GAF technical guidance — sealant alone dries and cracks within a few years.
- Modernize — flashing reseal / small section $200–$500; NJ ranges 10–40% above national (Integrity Home Exteriors framing).
- NOAA 1991–2020 normals at Newark Liberty (EWR) — Bloomfield crosses 32°F repeatedly through winter (freeze-thaw, qualitative; no city-specific degree/gust number).
- NJ Uniform Construction Code N.J.A.C. 5:23-2.7 — detached 1-/2-family roof-covering work (incl. flashing) is ordinary maintenance, no permit; commercial/multi-family/attached >25% in 12 months requires a permit (Township of Bloomfield's construction office).

## Bloomfield localization / geography
- CONDITIONAL Chapter 302 / Historic District Property List gate stated as a LISTED-PARCEL gate (not whole-neighborhood, not the NR Bloomfield Green boundary) in the permit/historic FAQ; National Park Service "no federal restriction" not needed here but the listed-parcel framing matches the city page.
- Verified sections only: Bloomfield Center (historic core/Green), Brookdale (mature canopy debris), Watsessing (pre-war single/two-family). Commercial corridors: Broad Street, Bloomfield Avenue, Garden State Parkway. Watercourses kept separate (Watsessing = Second River + Toney's Brook; Third River = town center, not invoked here). No reservation asserted.
- Stock framed as pre-war Colonials/Dutch Colonials/Capes + flat-roofed two-family homes & garden apartments (slight majority of units); tenant-occupied two-family/garden-apartment access under NJ landlord-tenant notice.
