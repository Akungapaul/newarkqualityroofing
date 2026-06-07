# South Orange — CityContent draft (first-suburbs entry #5/5)

cityId: `south-orange` · macro topic: **roofing in South Orange, NJ** (Township of South Orange Village, Essex County)

## Rendered heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in South Orange?" | `directAnswer` (≤40w, bold: South Orange / Essex County / asphalt-slate-metal-flat) |
| H2 "What Roofing Services Are Available…" | services GRID (shared) — no copy written |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead: slate/metal/copper + asphalt tracks) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead: EPDM/TPO/mod-bit, Village-center/SOPAC + Seton Hall) |
| H2 "What Roofing Problems Are Common in South Orange?" | `overview[]` ([0] answers PROBLEMS: 3 stressors) |
| subheading span | `weatherChallenges.heading` + `.content[]` |
| H2 "Which Neighborhoods Do We Serve…" | `neighborhoods[]` (8 verified, RAW, no bold) |
| H2 "What Roofing Materials Work Best…" | shared component — no copy |
| H2 "What Should You Know About Roofing Permits…" | shared component — no copy |
| H2 "How Much Does Roofing Cost…" | `pricing{averageRepair, averageReplacement, note}` |
| H2 "What Roofing Projects Do We Handle…" | `projectSpotlights[]` (3 TYPES, RAW, no bold) |
| H2 "What Questions Do South Orange Property Owners Ask…" | `faqs[]` (7, answer-first ≤40w, bold sentence 1) |
| H2 "Why Should You Choose Our Roofing Company…" | `whyChoose.reasons[]` (5, RAW, no bold) |
| "Where Can You Find Us…" | shared components — no copy |

## Named sources → exact figure attributed

| Figure | Named source | Where used |
|---|---|---|
| "over 8,000 shade trees across 181 Village streets" | Township of South Orange Village Fast Facts | overview[1], weatherChallenges[1], FAQ canopy |
| "over half … predates 1940 and 82% predates 1960" | Township planning evaluation | overview[3], whyChoose |
| Montrose Park ~550 homes; local COA district under Village Code Chapter 185 | Township HPC / Village Code Ch. 185 | neighborhoods, spotlight 1, FAQ historic |
| "borders the South Mountain Reservation on the Reservation's eastern edge" | Essex County Parks | overview[2], weatherChallenges[3], neighborhoods |
| Seton Hall 58-acre campus (institutional low-slope inventory) | Seton Hall University | commercial, neighborhoods |
| ~90–95% of leaks originate at flashing | NRCA (industry estimate) | overview[3], spotlight scope |
| slate 60–150 yrs; metal 40–80; copper 70+; asphalt arch 30 / 3-tab 20; EPDM 15–25; TPO 7–20; mod-bit 20 | InterNACHI life-expectancy chart | residential, commercial, spotlights, FAQ materials |
| ~31.5 in/yr snow; nor'easters Oct–April; ~25–30 thunderstorms/yr; ASCE 7-16 ~110–115 mph + Pg ~25 psf (hedged) | NOAA 1991–2020 normals (EWR); ASCE 7-16 via NJ UCC | weatherChallenges |
| ice barrier 24 in. inside wall line | IRC R905.1.2 | residential, spotlight 2 |
| ¼-in/ft slope; ponding >48h = defect | NRCA and ARMA | commercial, spotlight 3 |
| detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule | N.J.A.C. 5:23-2.7 / NJ UCC | FAQ permit, commercial, spotlights |
| 20-business-day plan review; office at 76 South Orange Avenue | Township of South Orange Village Building Dept | FAQ permit |
| Register listing alone = no private restriction | National Park Service | FAQ historic |
| wind/hail = 2.8% of insured homes/yr | Insurance Information Institute | FAQ insurance |
| inspect twice/yr spring & fall + after storms | NRCA | FAQ inspection |
| replacement $10,000–$25,000; repair $400–$1,000; NJ ~10–40% above national | HomeAdvisor and Modernize; HomeGuide | pricing, FAQ cost |
| CGL $500,000/occurrence | N.J.S.A. 56:8-142 | whyChoose |

## COA framing (matches §0 Rule 2 South Orange gate)
South Orange = LOCAL COA YES. Asserted ONLY as a Village Code Chapter 185 LOCAL-ordinance matter, ONLY inside the locally designated **Montrose Park Historic District** (and designated local landmarks), NOT Village-wide, and explicitly NOT "because of National Register listing." NPS no-restriction rule stated. Other NR listings (Old Main DL&W, Prospect St) not asserted as COA-bearing.

## Housing/Census discipline
No fabricated population integer printed in declarative prose; housing age uses the sourced "over half before 1940 / 82% before 1960" municipal framing. Single-family-dominant + multi-family near train/Seton Hall framed qualitatively. Canopy = count only (8,000+ trees), never a coverage %.

## Self-audit checklist
- [x] Modality grep (will/should/need to/have to/must/might/may/would/could) outside `faqs[].question` → 1 hit, a FAQ question (exempt). Clean.
- [x] `**` only in directAnswer + answer-first first-strings (overview/residential/commercial/weatherChallenges) + each developed body paragraph lead-in (ProseLead parses body bold too — matches urban-core) + FAQ answer first sentences. ZERO `**` in neighborhoods/projectSpotlights/whyChoose/pricing/meta (verified by grep).
- [x] Every digit named-sourced (table above). No fabricated number.
- [x] Zero fabricated completed-project/client/sponsorship/certification/warranty-term claims. projectSpotlights = representative TYPES (present-tense scope).
- [x] COA = conditional LOCAL (Ch. 185 / Montrose Park), not Register-driven, not Village-wide.
- [x] Each section develops its lead via lexical relations (R35); each fact stated once (R36); SVO named-agent answer spans (R37); entities defined by function + differentiator (R38, e.g. ice barrier vs field underlayment).
- [x] metaTitle 52 chars (≤70); metaDescription 160 chars (≤160). credentialsHighlight exact 3-item array.
- [x] Answer-first leads ≤40 words: directAnswer 37, overview0 40, res0 37, com0 35, wx0 32; all FAQ first sentences ≤40.
- [x] Snippet parses as a single array element (Node require test passed); all 16 required schema fields present.
