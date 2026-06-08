# Cedar Grove — CityContent draft map (west-essex #5)

`cityId: cedar-grove` · west-essex archetype · FULL fabrication-purge + answer-first rewrite.
Macro topic: roofing in Cedar Grove, NJ (Township of Cedar Grove, northern Essex County).
Closest gold-standard analogs: Nutley + Maplewood (reservation-edge, tree-canopy,
predominantly single-family, owner-occupied) and Belleville (the "no local historic
district" framing). Cedar Grove is the ONLY no-COA city in Batch C.

## Rendered heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Cedar Grove?" | `directAnswer` (≤40 w, bold Cedar Grove / Essex County / material list) |
| H2 "What Roofing Services Are Available…" | shared services GRID — no field |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead = answer; bolds: asphalt shingles, natural slate and metal) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead bolds: low-slope roofs, EPDM/TPO/mod-bit membranes) |
| H2 "What Roofing Problems Are Common in Cedar Grove?" | `overview[]` (lead answers PROBLEMS; bolds: reservation-edge tree debris, shade-driven moss, ice dams) |
| subheading span | `weatherChallenges.heading` + `.content[]` (bolds: snow, freeze-thaw cycling, nor'easter wind, summer storms) |
| H2 "Which Neighborhoods Do We Serve…" | `neighborhoods[]` (6 real sections/streets; RAW, no bold) |
| H2 "What Roofing Materials Work Best…" | shared component — no field |
| H2 "What Should You Know About Roofing Permits…" | shared component — no field |
| H2 "How Much Does Roofing Cost in Cedar Grove?" | `pricing{averageRepair, averageReplacement, note}` (RAW) |
| H2 "What Roofing Projects Do We Handle…" | `projectSpotlights[]` (3 representative TYPES; RAW) |
| H2 "What Questions Do…Owners Ask…" | `faqs[]` (7; first sentence ≤40 w, bold topic in sentence 1) |
| H2 "Why Should You Choose Our Roofing Company…" | `whyChoose.reasons[]` (5; RAW) |
| "Where Can You Find Us…" / "Where Else…" | shared components — no field |

## Named sources → exact figure attributed

| Figure / fact | Named source (in-text) |
|---|---|
| 76.3% owner-occupied; 5,008 housing units | U.S. Census Bureau (ACS 2018–2022 / 2020) |
| Mills Reservation 157.15 ac (Cedar Grove + Montclair); Hilltop 284.16 ac (Cedar Grove/North Caldwell/Verona) | Essex County Parks |
| Architectural asphalt 30 yr, 3-tab 20 yr; slate 60–150 yr; metal 40–80 yr; EPDM 15–25, TPO 7–20, mod-bit 20 yr | InterNACHI life-expectancy chart |
| ~90–95% of leaks at flashing, 5–10% at field | industry estimate attributed to the NRCA |
| Ice barrier 24 in inside wall line (R905.1.2) | IRC R905.1.2 ice-barrier provision |
| Ice-dam mechanism (32°F melt/refreeze) | University of Minnesota Extension |
| ~31.5 in/yr snow; 32°F crossings; ~25–30 thunderstorms/yr | NOAA 1991–2020 normals at Newark Liberty (EWR) |
| ~110–115 mph design wind; Pg ~25 psf (hedged framing) | ASCE 7-16 as adopted by the NJ Uniform Construction Code |
| ¼ in/ft slope to drain; ponding >48 h = defect | NRCA and ARMA |
| 1–2 family reroof = ordinary maintenance, no permit; 25% rule | N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code |
| $500,000 per-occurrence CGL minimum | N.J.S.A. 56:8-142 (Contractors' Registration Act) |
| Wind/hail = largest claim type at 2.8% insured homes/yr | Insurance Information Institute |
| Replacement $10,000–$25,000; leak repair $400–$1,000 | HomeAdvisor and Modernize (NJ cost data) |
| Register listing alone = no private restriction | National Park Service |
| Office: Township of Cedar Grove Building Department, 525 Pompton Avenue | named FUNCTION only (no official named) |

## Self-audit checklist (all PASS)

1. Modality: zero `will/should/need to/needs to/have to/has to/must/ought to` + zero `might/may/would/could` hedges OUTSIDE `faqs[].question`. (The earlier "may hold snow marginally longer" hedge was rewritten to indicative present.)
2. `**` bold ONLY in directAnswer + answer-first leads + their body paragraphs + FAQ-answer first sentences. Verified 0 `**` in neighborhoods/projectSpotlights/whyChoose/pricing/meta (raw-render fields).
3. R3 STRICT body-lead bold:
   - overview lead [reservation-edge tree debris, shade-driven moss, ice dams] → body[1/2/3] open with exactly those 3 in order.
   - residential lead [asphalt shingles, natural slate and metal] → body[1/2] open with those 2 in order.
   - commercial lead [low-slope roofs, EPDM/TPO/mod-bit membranes] → body[1] opens **EPDM** (head term of the membrane list, matching the committed Bloomfield/Belleville pattern), body[2] opens **low-slope roof**.
   - weather lead [snow, freeze-thaw cycling, nor'easter wind, summer storms] (4) → body[1] opens **Snow** then re-bolds **Freeze-thaw cycling**; body[2] opens **Nor'easter wind** then re-bolds **Summer storms** (4-into-2 paragraph pattern, matches committed gold standard).
4. Every digit named-sourced; population/housing = the CITY-FACTS §Cedar Grove Census figures EXACTLY (76.3% owner-occupied, 5,008 units; population 12,980 NOT used as a count but the township is sized via owner-occupancy + unit count, both Census). No invented figure.
5. Zero fabricated completed-project/client/sponsorship/certification/warranty-term/savings/financing claims. projectSpotlights are 3 representative TYPES (Postwar Ranch/Split-Level Asphalt Re-Roof; Tree-Shaded Slate & Flashing Restoration; Pompton Avenue Low-Slope Commercial Membrane Replacement), present-tense scope, no address/date/duration/outcome.
6. COA framing matches §0 Rule 1 for Cedar Grove EXACTLY: NO local HPC, NO Certificate of Appropriateness, no locally designated district/landmark; only an advisory Heritage Advisory Committee (educational/cultural, no designation/COA/regulatory authority); plus the NPS "Register listing alone = no federal restriction." Stated in the historic-district FAQ.
7. Reservation adjacency = Mills + Hilltop ONLY (per §0 Rule 3). NO South Mountain, NO Eagle Rock attributed to Cedar Grove. Terrain framed qualitatively ("between the First and Second Watchung Mountains," "higher ground") — no city-specific elevation/snow/wind number.
8. R35 lexical development + R36 state-each-fact-once: each section advances distinct facets (overview = debris→moss→ice dams; residential = asphalt hyponym then slate/metal restoration meronyms/contrast; commercial = membrane hyponyms then slope/drainage parts + permit; weather = snow→freeze-thaw→wind→storms). Material lifespans stated where the material is introduced; permit/COA law only in commercial + permit/historic FAQs; demographics only in residential ("who/what" framing), never under "problems."
9. metaTitle 51 chars (≤70); metaDescription 159 chars (≤160); `credentialsHighlight` = the exact 3-item array.

### Purged fabrications from the prior page
"on the western slope of the Second Watchung Mountain"; "winter snowfall…2 to 4 inches greater per storm"; "extend shingle life by 5 to 8 years"; "reduce energy costs by 15–25 percent"; "ranch-style homes built between 1950 and 1975 constitute the single largest category"; the Norway-spruce species claim; projectSpotlights written as completed jobs at named addresses; "many of our new Cedar Grove clients come through recommendations from neighbors"; the "$11,000–$17,000"/"$16,000–$26,000" pricing tiers; any NQR warranty-term claim.
