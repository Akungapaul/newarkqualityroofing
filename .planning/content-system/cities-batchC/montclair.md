# Montclair — CityContent draft map (west-essex #2)

cityId: `montclair` · archetype: west-essex · status: answer-first full fabrication-purge rewrite

## Rendered heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Montclair?" | `directAnswer` (40 words; bolds Montclair, Essex County, asphalt/slate/metal/flat membrane roofs) |
| H2 "What Roofing Services Are Available in Montclair?" | shared services grid — no copy written |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead bolds: natural slate, metal, and copper · asphalt shingles) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead bolds: low-slope roofs · EPDM, TPO, and modified-bitumen membranes) |
| H2 "What Roofing Problems Are Common in Montclair?" | `overview[]` (lead bolds: reservation-edge tree debris · aging pre-war covering · steep-slope flashing failure) |
| subheading span | `weatherChallenges.heading` = "How Does Montclair Weather Affect Your Roof?" |
| H2 "Which Neighborhoods Do We Serve in Montclair?" | `neighborhoods[]` (7 verified, raw — no bold) |
| H2 "What Roofing Materials Work Best…" | shared component — no copy |
| H2 "What Should You Know About Roofing Permits…" | shared component — no copy |
| H2 "How Much Does Roofing Cost in Montclair?" | `pricing{averageRepair, averageReplacement, note}` (raw — no bold) |
| H2 "What Roofing Projects Do We Handle in Montclair?" | `projectSpotlights[]` (3 representative TYPES, raw — no bold) |
| H2 "What Questions Do Montclair Property Owners Ask…" | `faqs[]` (7; first sentence ≤40w, bold topic in sentence 1 only) |
| H2 "Why Should You Choose Our Roofing Company…" | `whyChoose.reasons[]` (6, raw — no bold) |

## Named sources → exact figure attributed

| Named source | Figure / fact attributed |
|---|---|
| U.S. Census Bureau | ~54% of Montclair units in multi-unit structures (ACS 2020–2024) |
| Township of Montclair Housing Element | roughly 60% of housing built before 1940 (qualitative "large majority predates WWII") |
| InterNACHI (life-expectancy chart) | asphalt 30 yr architectural / 20 yr 3-tab; natural slate 60–150 yr; metal 40–80 yr; copper 70+ yr; EPDM 15–25 yr; TPO 7–20 yr; modified bitumen 20 yr |
| the NRCA | ~90–95% of roof leaks originate at flashing; only 5–10% at the open shingle field |
| NOAA (1991–2020 normals, Newark Liberty/EWR) | ~31.5 in snow/yr; crosses 32°F repeatedly; ~25–30 thunderstorms/yr |
| ASCE 7-16 as adopted by the NJ Uniform Construction Code | ~110–115 mph basic design wind; ground snow load near Pg 25 psf (both hedged) |
| NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 | detached 1–2 family reroof = no-permit ordinary maintenance; 25% rule permit threshold |
| IRC R905.1.2 (ice-barrier provision) | ice barrier from eave to ≥24 in inside the exterior wall line |
| NPS Preservation Brief 29 | full slope replacement once ≥20% of slate broken/missing/sliding |
| Secretary of the Interior's Standards (Standard 6) | match replacement material in design, color, texture — in-kind |
| Township of Montclair Building Office | local UCC enforcing agency / permit office (FUNCTION only) |
| Montclair Code Art. XXIII of Ch. 347, §347-136 | COA for appearance-changing exterior work in a local district / on a local landmark |
| Essex County Parks | Eagle Rock Reservation + Mills Reservation adjacency to Montclair |
| National Park Service | National Register listing alone places no federal restriction on a private owner |
| HomeAdvisor and Modernize | repair $400–$1,000; replacement $10,000–$25,000 (NJ ranges) |
| the Insurance Information Institute | wind/hail = largest homeowners-claim type at 2.8% of insured homes/yr |

## Historic-COA framing (Montclair §0 gate — CONDITIONAL local)
- Asserted CONDITIONALLY: COA required only for appearance-changing exterior roofing on a property inside one of the FOUR locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) or a local landmark.
- In-kind maintenance/repair with no change in design/scale/appearance is EXEMPT — stated.
- Estate Section = nominated only, NOT designated — stated as standard N.J.A.C. 5:23-2.7 path.
- Ordinance cited correctly: Article XXIII of Chapter 347, §347-136.
- National Register listing alone = no private restriction (NPS) — stated.

## Geography (Montclair §0 Rule 3)
- Eagle Rock Reservation + Mills Reservation attributed to Montclair (per Essex County Parks). ✅
- South Mountain Reservation NOT attributed (verified absent). ✅
- First Watchung ridge elevation framed QUALITATIVELY ("west side stands more exposed to gusts than valley lots") — NO city-specific number. ✅
- Frog Hollow (Hartford CT NRHP) NOT used. ✅

## Self-audit checklist
- [x] directAnswer = 40 words; overview[0] 37; residential[0] 37; commercial[0] 33; weather[0] 30 — all ≤40.
- [x] Each FAQ answer first sentence ≤40 words (max = 39).
- [x] R3 strict: every overview/residential/commercial/weather body paragraph opens by re-bolding a lead topic, in order (case-insensitive map = 0 mismatches; commercial body[2] develops `low-slope roof` mid-sentence per the accepted Bloomfield pattern).
- [x] No `**` in neighborhoods / projectSpotlights / whyChoose / pricing / meta / headings.
- [x] No modality (will/should/need to/must/might/may/would/could) outside faqs[].question.
- [x] No de-fab literals (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+ projects/years, VERIFY/UNVERIFIED).
- [x] No hype words (the only "best" is inside a FAQ question, allowed).
- [x] Every digit attributed to a named pack source.
- [x] Zero fabricated completed-project/client/sponsorship/certification/warranty-term/savings/financing claims; projectSpotlights = representative TYPES.
- [x] credentialsHighlight = ['NJ HIC Licensed','Fully Insured & Bonded','Family-Owned & Local'].
- [x] Counts: overview 4, residential 3, commercial 3, weather 3, neighborhoods 7, spotlights 3, faqs 7, whyChoose 6 — all within schema.
- [x] metaTitle 49 ≤70; metaDescription 157 ≤160.
- [x] pricing ranges = NJ regional $400–$1,000 / $10,000–$25,000; slate premium stated QUALITATIVELY in note.
- [x] Parses standalone and as concatenated array element.
