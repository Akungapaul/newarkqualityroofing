# North Caldwell — CityContent draft map (Batch D, entry #2 of 5)

cityId: `north-caldwell` · Borough of North Caldwell, Essex County, NJ
Full fabrication-purge + answer-first rewrite. Snippet: `north-caldwell.snippet.ts`

## Rendered heading → field map

| Rendered H-tag (template) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in North Caldwell?" | `directAnswer` (37 words; bolds North Caldwell / Essex County / asphalt, slate, metal, and flat membrane roofs) |
| H2 "What Roofing Services Are Available…" | services GRID — no content written |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead 37w; tracks = asphalt shingles / natural slate, metal, and copper) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead 37w; low-slope roofs / EPDM, TPO, modified bitumen — framed honestly around estate accessory + municipal/institutional + general Essex County capability) |
| H2 "What Roofing Problems Are Common in North Caldwell?" | `overview[]` (lead 40w; PROBLEMS = mature tree canopy / far-western upland exposure / flashing failure) |
| subheading span | `weatherChallenges.heading` "How North Caldwell Weather and Tree Canopy Affect Roofs" → `weatherChallenges.content[]` (lead 33w) |
| H2 "Which Neighborhoods Do We Serve…" | `neighborhoods[]` (6: The Hilltop, Mountain Ave, Grandview Ave, Gould Ave, Central Ave, West Greenbrook/Fairfield Rd edge, Wooded large-lot subdivisions) — RAW, no `**` |
| H2 "What Roofing Materials Work Best…" | shared component — none |
| H2 "What Should You Know About Roofing Permits…" | shared component — none |
| H2 "How Much Does Roofing Cost in North Caldwell?" | `pricing{averageRepair, averageReplacement, note}` — RAW, attribution in `note` |
| H2 "What Roofing Projects Do We Handle…" | `projectSpotlights[]` (3 representative TYPES) — RAW |
| H2 "What Questions Do North Caldwell Property Owners Ask…" | `faqs[]` (7) |
| H2 "Why Should You Choose…" | `whyChoose.reasons[]` (6 de-fabbed) — RAW |
| "Where Can You Find Us…" | shared component — none |

## Named sources → exact figure attributed

- **U.S. Census Bureau** — population 6,694 (2020); 2,364 housing units; 96.0% owner-occupied (among highest in Essex County); median owner value $906,100 is in facts but NOT used as a hard money figure on-page (anchored qualitatively via owner-occupancy + units); "almost entirely residential / negligible commercial stock."
- **North Caldwell Historical Society** — "The Green Jewel of Essex County."
- **North Caldwell description / Wikipedia** — highest point in Essex County ~691 ft at the Hilltop (Verona-edge ambiguity; NEVER extrapolated to a wind/snow number).
- **Essex County Parks** — Hilltop Reservation ~284 acres; the ONLY reservation North Caldwell abuts.
- **InterNACHI life-expectancy chart** — architectural asphalt 30 yr / 3-tab 20 yr; natural slate 60–150 yr; metal 40–80 yr; EPDM 15–25 yr; TPO 7–20 yr; modified bitumen 20 yr.
- **Copper Development Association** — properly installed copper roof service life > 100 yr.
- **NRCA** (industry estimate) — ~90–95% of leaks originate at flashing; 5–10% at the field.
- **IRC R905.1.2** — ice barrier from eave to ≥24 in inside the exterior wall line.
- **NPS Preservation Brief 29** — tile-by-tile slate w/ non-ferrous copper/stainless nails; replace slope once ≥20% of slates broken/cracked/missing/sliding.
- **National Park Service** — National Register listing alone places no federal restriction on a private owner.
- **NRCA and ARMA** — ≥¼ in/ft slope to drain; ponding > 48 hrs = a defect.
- **NJ Uniform Construction Code / N.J.A.C. 5:23-2.7** — detached 1–2 family reroof = no-permit ordinary maintenance; 25% rule for commercial/multi-family/attached.
- **NOAA 1991–2020 normals (EWR)** — ~31.5 in/yr snow; ~25–30 thunderstorms/yr; 32°F freeze-thaw crossings.
- **ASCE 7-16 (per NJ UCC)** — ~110–115 mph basic design wind; ~25 psf ground snow load (both HEDGED "near").
- **NJ Division of Consumer Affairs / Contractors' Registration Act** — NJ HIC registration requirement.
- **N.J.S.A. 56:8-142** — $500,000 per-occurrence CGL minimum.
- **Insurance Information Institute** — wind & hail = largest homeowners-claim type at 2.8% of insured homes/yr.
- **HomeAdvisor and Modernize** — NJ replacement $10,000–$25,000; leak repair $400–$1,000.
- **NJ roofing guides** — slate installed ~$10–$30/sq ft (qualitative premium; card range stays NJ-regional).

## COA framing (matches §0 Rule 1 — North Caldwell = advisory, NO COA)

FAQ "Does a historic commission restrict roofing work in North Caldwell?" states: NO Certificate of Appropriateness applies anywhere in the borough; the HPC under Chapter 107, Article XIII is advisory/survey-only (surveys, recommends, advises; issues NO COA); no locally designated district or landmark; no North Caldwell property on the National or NJ State Register; NPS no-restriction rule cited; reroof follows the standard N.J.A.C. 5:23-2.7 ordinary-maintenance path. NOT cited: proposed Ordinance O-8-2026 (introduced only). NOT confused with Caldwell (Chapter 130 + two landmarks) or the Caldwell, IDAHO "North Caldwell Historic District."

## Geography (matches §0 Rule 3 + Rule 4)

- Hilltop Reservation (~284 ac, per Essex County Parks) = North Caldwell ONLY of the five; ~691 ft Essex County high point at the Hilltop (per North Caldwell description/Wikipedia).
- NO floodplain framing — North Caldwell is UPLAND, does NOT border the Passaic (that is West Caldwell's edge). No South Mountain/Eagle Rock/Mills attributed.
- Mature oak/maple canopy = defining residential stressor, qualitative (no canopy-% used).

## Self-audit checklist

- [x] Answer-first leads ≤40w: directAnswer 37, overview[0] 40, residential[0] 37, commercial[0] 37, weather[0] 33. All 7 FAQ first sentences ≤40 (max 37).
- [x] Modality grep (will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could) OUTSIDE faqs[].question → NONE.
- [x] `**` only in directAnswer + the 4 content-array leads + their body paragraphs + FAQ-answer first sentences. ZERO `**` in neighborhoods/projectSpotlights/whyChoose/pricing/meta (script-verified).
- [x] R3 STRICT body-lead bold: each content-array body opens by re-bolding a lead topic, in order (overview tree-canopy→upland→flashing; residential asphalt→slate/metal/copper; commercial EPDM hyponym→low-slope roof sub-aspect [matches committed west-essex convention]; weather canopy→snow/freeze-thaw [folded into body[1]→body[2] wind]).
- [x] Every digit named-sourced; population 6,694 + 2,364 units + 96.0% owner-occupied = Census exact.
- [x] Zero fabricated completed-project/client/sponsorship/certification/warranty-term/savings/financing claims; projectSpotlights = representative TYPES (Custom Colonial Asphalt Re-Roof, Estate Slate & Copper Restoration, Estate Accessory & Low-Slope Membrane Replacement).
- [x] COA framing = advisory-no-COA exactly; reservation = Hilltop only; NO floodplain (upland).
- [x] Each section develops its lead via lexical relations (R35) and states each fact once (R36): material lifespans only in residential/commercial; permit/COA law only in FAQ/permit framing; demographics only in residential/who-what, never under the problems lead.
- [x] metaTitle 54 chars (≤70); metaDescription 158 chars (≤160); credentialsHighlight exact 3-item array.
- [x] pricing card = NJ-regional $400–$1,000 / $10,000–$25,000; slate premium qualitative w/ attribution in `note`; NO financing.
