# Fairfield (cityId: fairfield) — caldwells-roseland #4 of 5 — draft + self-audit

Full fabrication-purge + answer-first rewrite. Macro angle: roofing in Fairfield, NJ
(Township of Fairfield, ESSEX County) — the largest municipality in the batch; a low-lying
Passaic-River **floodplain** township with a dual residential / Route 46–I-80 commercial
character (commercial is a CO-LEAD). Snippet: `fairfield.snippet.ts` (schema-validated OK).

## Rendered heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Fairfield?" | `directAnswer` (40 words; bolds Fairfield, Essex County, asphalt/slate/metal/flat membrane roofs) |
| H2 "What Roofing Services Are Available…?" | shared services GRID — no copy |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead 35w; tracks: asphalt shingles / natural slate, metal, and copper) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead 33w; low-slope roofs / EPDM, TPO, modified-bitumen on Route 46–I-80) |
| H2 "What Roofing Problems Are Common in Fairfield?" | `overview[]` (lead 35w; answers PROBLEMS: Passaic-floodplain drainage load / mature tree-canopy debris / flashing failure) |
| subheading span | `weatherChallenges.heading` → `weatherChallenges.content[]` (lead 32w; snow+freeze-thaw / nor'easter+summer wind / Passaic floodplain storm water) |
| H2 "Which Neighborhoods Do We Serve…?" | `neighborhoods[]` (7 verified, RAW, no bold) |
| H2 "What Roofing Materials Work Best…?" | shared — no copy |
| H2 "What Should You Know About Roofing Permits…?" | shared — no copy |
| H2 "How Much Does Roofing Cost in Fairfield?" | `pricing{averageRepair,averageReplacement,note}` (RAW, no bold) |
| H2 "What Roofing Projects Do We Handle…?" | `projectSpotlights[]` (3 representative TYPES, RAW, no bold) |
| H2 "What Questions Do Fairfield Property Owners Ask…?" | `faqs[]` (7; answer 1st sentence ≤40w, topic bold) |
| H2 "Why Should You Choose…?" | `whyChoose.reasons[]` (6 de-fabbed value props, RAW, no bold) |
| "Where Can You Find Us…?" | shared — no copy |

## Named sources → exact figure attributed

- **U.S. Census Bureau** — 78.7% owner-occupied; median owner value $688,500 (Fairfield township; residential lead).
- **Wikipedia / Wildlife Preserves** — Great Piece Meadows ~1,170 acres of Passaic wetland within Fairfield.
- **Township of Fairfield Flood Protection Information page + FEMA Essex County flood maps** — much of low-lying Fairfield in the FEMA Special Flood Hazard Area (no "~70%" figure; no FIRM zone letters).
- **NOAA-NWS Passaic River at Pine Brook station (PINN4)** — named gauge for Fairfield flood severity (NO stage numbers in feet).
- **NOAA 1991–2020 normals (Newark Liberty / EWR)** — ~31.5 in/yr snow; ~25–30 thunderstorms/yr; repeated 32°F crossings.
- **ASCE 7-16 as adopted by the NJ Uniform Construction Code** — ~110–115 mph design wind (HEDGED); Pg ~25 psf ground snow load (HEDGED).
- **Wikipedia** — Fairfield elevation ~174 ft (LOW-LYING, not upland).
- **InterNACHI life-expectancy chart** — architectural asphalt 30 / 3-tab 20; slate 60–150; metal 40–80; copper 70+; EPDM 15–25; TPO 7–20; modified bitumen 20.
- **IRC R905.1.2** — ice barrier to ≥24 in inside the exterior wall line.
- **NPS Preservation Brief 29** — full-slope slate replacement once ≥20% broken/missing/sliding; non-ferrous copper/stainless slater's nails.
- **NRCA** — ~90–95% of leaks originate at flashing.
- **NRCA and ARMA** — ≥¼ in/ft slope to drain; ponding >48 hrs = defect.
- **N.J.A.C. 5:23-2.7 (NJ UCC)** — detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule on commercial/multi-family/attached. Office: Building Department, Township of Fairfield, 230 Fairfield Road.
- **National Park Service** — National Register listing alone places no federal restriction on a private owner (Van Ness House 236 Little Falls Rd, township-owned; Fairfield Dutch Reformed Church on Fairfield Rd, church-owned — heritage color only).
- **Insurance Information Institute** — wind/hail largest homeowners-claim type at 2.8% of insured homes/yr.
- **HomeAdvisor and Modernize** — replacement $10,000–$25,000; leak repair $400–$1,000. **NJ roofing guides** — slate ~$10–$30/sq ft.
- Named floods: **Hurricane Irene (Aug 2011), remnants of Hurricane Ida (Sept 2021), Hurricane Floyd (Sept 1999)**.

## COA framing (Fairfield §0 Rule 1 — ADVISORY, NO COA)

HPC EXISTS but is advisory/educational/celebratory (focused on the township-owned Van Ness
House); issues NO Certificate of Appropriateness; NO locally designated district → a private
reroof requires NO historic approval. NO precise HPC ordinance section number published. Van
Ness House (NRHP + township-owned) and Fairfield Dutch Reformed Church (NRHP + church-owned)
= heritage COLOR only, not homeowner COA gates. Israel Crane House NOT attributed (Montclair).

## Geography (§0 Rules 3–4)

Floodplain = Fairfield's DEFINING differentiator (Passaic floodplain, Two Bridges confluence,
FEMA SFHA, Great Piece Meadows ~1,170 ac in-township, PINN4 gauge named, no feet). LOW-LYING
~174 ft — NOT upland; no cooler/snowier/windier differential. Borders NO reservation (Hilltop
= North Caldwell only). West Essex Trail NOT attributed to Fairfield. Mature oak/maple canopy
= shared qualitative residential stressor.

## Self-audit checklist

1. Modality OUTSIDE faqs[].question: grep `will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could` → 0 matches. PASS.
2. `**` only in directAnswer + answer-first first-strings + their body paras + FAQ-answer first sentences; 0 in neighborhoods/projectSpotlights/whyChoose/pricing/meta. PASS (scripted: 0 in raw blocks).
3. R3 STRICT body-lead bold (in order):
   - overview lead: Passaic-floodplain drainage load / mature tree-canopy debris / flashing failure → body[1..3] re-bold each in order. PASS.
   - residential lead: asphalt shingles / natural slate, metal, and copper → body[1..2] re-bold each. PASS.
   - commercial lead: low-slope roofs / EPDM, TPO, and modified-bitumen membranes → body[1]=**EPDM**, body[2]=**low-slope roof** (west-essex committed pattern). PASS.
   - weather lead (3 topics): snow and freeze-thaw cycling / nor'easter and summer-storm wind / Passaic floodplain storm water → body[1]=topic1, body[2]=topic2 + topic3 bolded at in-paragraph intro (Montclair 3-into-2 fold). PASS.
4. Every digit named-sourced; Census 78.7% / $688,500 / ~1,170 ac match CITY-FACTS §Fairfield exactly; demographics stated once (residential), not under "problems". PASS.
5. Zero fabricated completed-project / client / sponsorship / certification / warranty-term / savings / financing claims; projectSpotlights = representative TYPES (Flood-Prone Low-Slope Drainage Rebuild, Suburban Colonial Asphalt Re-Roof, Office-Park Membrane Replacement). PASS.
6. COA framing = Fairfield's §0 gate EXACTLY (advisory-no-COA; Register sites = color only). PASS.
7. Reservation/floodplain geography = §0 (no Hilltop; floodplain = Fairfield defining; no West Essex Trail). PASS.
8. Each section develops its lead via lexical relations (R35: hyponyms membrane→EPDM/TPO/mod-bit; meronyms deck/ice barrier/valley/flashing/scupper; antonym install↔repair/aging, upland↔floodplain) and states each fact once (R36). PASS.
9. metaTitle 49 ≤70; metaDescription 157 ≤160; credentialsHighlight exact 3-item array. Schema validated OK via tsx. PASS.
