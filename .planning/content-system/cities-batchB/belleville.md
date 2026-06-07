# Belleville — CityContent Draft Doc (Cities Batch B, first-suburbs #2)

City: Belleville (cityId: `belleville`). Full fabrication-purge answer-first rewrite.
Macro topic: roofing in Belleville, NJ (Township of Belleville), Essex County.

## Rendered heading → content field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Belleville?" | `directAnswer` (≤40w, **bold** topics) |
| H2 "What Roofing Services Are Available in Belleville?" | shared services GRID — no copy written |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (first string = answer-first lead) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (first string = answer-first lead) |
| H2 "What Roofing Problems Are Common in Belleville?" | `overview[]` (first string answers the PROBLEMS question) |
| subheading span | `weatherChallenges.heading` + `weatherChallenges.content[]` |
| H2 "Which Neighborhoods Do We Serve in Belleville?" | `neighborhoods[]` (RAW, no bold) |
| H2 "What Roofing Materials Work Best…?" | shared component — no copy |
| H2 "What Should You Know About Roofing Permits…?" | shared component — no copy |
| H2 "How Much Does Roofing Cost in Belleville?" | `pricing{averageRepair, averageReplacement, note}` |
| H2 "What Roofing Projects Do We Handle in Belleville?" | `projectSpotlights[]` (representative TYPES, RAW) |
| H2 "What Questions Do Belleville Property Owners Ask…?" | `faqs[]` (answer sentence 1 ≤40w, bold topic) |
| H2 "Why Should You Choose Our Roofing Company…?" | `whyChoose.reasons[]` (RAW, no bold) |
| "Where Can You Find Us Near Belleville?" etc. | shared components — no copy |

## Section lead → body development (R21/R35 follow-through)

- **overview** lead enumerates 3 stressors: tree-canopy debris → shared-flashing failure → riverfront drainage. Body paragraphs [1][2][3] develop those 3 IN ORDER, count-matched.
  - [1] tree-canopy: hyponyms (oak/maple/sycamore), parts (valleys/gutters/fascia/soffit/decking), contrast (north-slope moss/algae).
  - [2] shared-flashing: NRCA 90–95% stat + Census 51% multi-unit + meronyms (party-wall/parapet/dormer flashing).
  - [3] riverfront drainage: Second River (Newark border) + Passaic (east boundary, west bank) + NRCA/ARMA ¼-in/48-hr ponding rule.
- **residential** lead: asphalt shingles (1-2 family) vs EPDM/TPO (flat sections). Body develops asphalt (InterNACHI 30/20yr + IRC R905.1.2 ice barrier defined by function+contrast, R38) then membranes (EPDM 15-25 / TPO 7-20 + party-wall flashing + magnet sweep). antonym = sloped vs low-slope.
- **commercial** lead: EPDM/TPO/mod-bit on Main St + Route 21. Body develops membrane failure modes (EPDM seams vs TPO welded seams) + NRCA/ARMA drainage + the 25%-rule permit path (office named once, R36).
- **weatherChallenges** lead enumerates 4 stressors: snow → freeze-thaw → nor'easter wind → summer storms. Body covers all 4 in order (NOAA EWR figures).

## Named sources → exact figure attributed

| Source | Figure / fact |
|---|---|
| U.S. Census Bureau (ACS estimates) | ~51% of units in 2+ unit structures; ~one-third of units built 1939 or earlier |
| the NRCA | ~90–95% of leaks originate at flashing, ~5–10% at the open shingle field |
| the InterNACHI life-expectancy chart | arch asphalt 30 / 3-tab 20 yr; EPDM 15–25; TPO 7–20; modified bitumen 20 yr |
| the NRCA and ARMA | low-slope needs ≥¼ in/ft slope; ponding >48 h = defect |
| NOAA 1991–2020 normals (Newark Liberty / EWR) | ~31.5 in/yr snow; crosses 32°F repeatedly; ~25–30 thunderstorms/yr |
| ASCE 7-16 (as adopted by NJ UCC) — HEDGED | ~110–115 mph design wind; Pg ~25 psf ground snow load |
| NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 | detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule for commercial/multi-family/attached |
| the IRC R905.1.2 ice-barrier provision | ice barrier from eave to ≥24 in inside the exterior wall line |
| HomeAdvisor and Modernize | replacement $10,000–$25,000; leak repair $400–$1,000; NJ ~10–40% above national |
| the Insurance Information Institute (Triple-I) | wind & hail = largest claim type at 2.8% of insured homes/yr |
| N.J.S.A. 56:8-142 (Contractors' Registration Act) | $500,000 per-occurrence CGL minimum |
| the National Park Service | National Register listing alone places no restriction on a private owner |
| Belleville Historic Preservation Commission | designated one local landmark (Old Reformed Church of Second River, 171 Main St) in 2014 |

## Historic / COA framing (§0 Rule 2 — Belleville gate)

Belleville = NO locally designated historic DISTRICT. ONE confirmed local landmark only:
Old Reformed Church / Reformed Dutch Church of Second River (171 Main St; locally
designated July 4 2014; also NR Dec 21 1978). FAQ + Belleville Center neighborhood frame
it exactly: "no locally designated historic district" → typical reroof faces no COA step;
one local landmark named; NPS Register-only = no private-reroof restriction. No fees,
fines, buffers, or district boundaries asserted.

## Geography (§0 Rule 4)

- Second River = Belleville/Newark border. Passaic River = eastern/NE boundary, Belleville
  on WEST bank. NOT "Passaic separates Belleville from Newark." Route 21 (McCarter Hwy)
  follows the Passaic west-bank corridor (industrial/commercial flat roofs).

## Neighborhoods (verified, RAW — no bold)

Soho (section), Silver Lake (CDP split Belleville/Bloomfield), Belleville Center (civic
core, Town Hall 152 Washington Ave + 171 Main St landmark), Washington Avenue corridor
(commercial spine), Franklin Avenue and Stephens Street (STREETS, framed as streets),
Route 21 / Passaic riverfront corridor (commercial flat roofs).

## projectSpotlights (representative TYPES, RAW — no bold, no completed-job claims)

1. Pre-War Two-Family Asphalt Re-Roof (residential)
2. Two- and Three-Family Flat-Roof Membrane Replacement (residential)
3. Route 21 Low-Slope Commercial Membrane Replacement (commercial)

## Self-audit checklist (all PASS)

- [x] Answer-first leads ≤40w: directAnswer 38, overview[0] 33, residential[0] 38, commercial[0] 38, weather[0] 28; every FAQ sentence-1 ≤40 (max 39).
- [x] Modality (will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could) OUTSIDE faqs[].question: NONE (grep clean).
- [x] `**` ONLY in directAnswer + the 4 answer-first first-strings + each FAQ-answer sentence 1. NONE in neighborhoods/projectSpotlights/whyChoose/pricing/meta (grep clean, 12 bold lines all allowed).
- [x] Every digit named-sourced (table above); Belleville Census figures match §5 exactly (pop 38,222, area 3.30 sq mi land referenced via ACS housing only; ~51% multi-unit, ~one-third pre-1939).
- [x] Zero fabricated completed-project/client/sponsorship/certification/warranty-term claims; spotlights are TYPES; capability claims present-tense.
- [x] COA framing matches Belleville §0 gate: no district, one 2014 landmark, Register-only elsewhere.
- [x] R35 lexical-relation development + R36 state-each-fact-once (lifespans in residential/commercial only; permit law in commercial/permit FAQ only; demographics in problems/whyChoose framing).
- [x] R37 SVO answer spans with named agent; R38 entity definitions (ice barrier defined by function + contrast).
- [x] metaTitle 50 ≤70; metaDescription 158 ≤160; credentialsHighlight exact 3-item array.
- [x] tsc type-check against CityContent: exit 0.
- [x] No `${` sequence; backtick template literals throughout; no de-fab literals.
