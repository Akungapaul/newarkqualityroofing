# Essex Fells — CityContent draft map (Batch D, caldwells-roseland #3 of 5)

Full fabrication-purge + answer-first rewrite. cityId: `essex-fells`. Snippet:
`./essex-fells.snippet.ts` (drop-in array element between
`export const caldwellsRoselandContent: CityContent[] = [` and `];`).

## Rendered heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Essex Fells?" | `directAnswer` (36 words; bolds **Essex Fells**, **Essex County**, **asphalt, slate, metal, and flat membrane roofs**) |
| H2 "What Roofing Services Are Available…" | services GRID — nothing written |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead 36 words; 2 tracks) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead 35 words) |
| H2 "What Roofing Problems Are Common in Essex Fells?" | `overview[]` (lead 38 words, answers PROBLEMS; 3 stressors) |
| subheading span | `weatherChallenges.heading` + `weatherChallenges.content[]` (lead 33 words) |
| H2 "Which Neighborhoods Do We Serve…" | `neighborhoods[]` (6 verified roads/areas; RAW, no bold) |
| H2 materials / H2 permits | shared components — nothing written |
| H2 "How Much Does Roofing Cost…" | `pricing{averageRepair,averageReplacement,note}` (NJ ranges; attribution in note; no bold) |
| H2 "What Roofing Projects Do We Handle…" | `projectSpotlights[]` (3 representative TYPES; RAW, no bold) |
| H2 "What Questions Do…Owners Ask…" | `faqs[]` (7; first sentence ≤40 words, topic bolded) |
| H2 "Why Should You Choose…" | `whyChoose.reasons[]` (5 de-fabbed value props; RAW, no bold) |

## Named sources → exact figure attributed

| Named source | Figure / fact attributed in-text |
|---|---|
| U.S. Census Bureau + Borough of Essex Fells 2018 Master Plan | ~806 homes; ~97% single-family detached; ~96–98% owner-occupied; stock built turn-of-20th-c. to mid-20th-c. |
| Borough of Essex Fells 2018 Master Plan | trees ~50–150 years old, unique canopy (Bowditch design legacy) |
| InterNACHI life-expectancy chart | slate 60–150 yr; metal 40–80 yr; copper 70 yr+; architectural asphalt 30 yr; 3-tab 20 yr; EPDM 15–25 yr; TPO 7–20 yr; modified bitumen 20 yr |
| NRCA | ~90–95% of leaks at flashing, 5–10% at open shingle field; ¼-in/ft slope + 48-hr ponding defect (with ARMA) |
| Secretary of the Interior's Standards (Standard 6) | in-kind slate/copper matching |
| NPS Preservation Brief 29 | non-ferrous copper/stainless slater's nails; full-slope replacement once ≥20% slate broken/missing/sliding |
| NPS (National Register program) | Register listing alone places no federal restriction on a private owner |
| IRC R905.1.2 | ice barrier from eave to ≥24 in. inside the wall line |
| N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code | detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule for municipal/institutional/attached |
| NOAA 1991–2020 normals (EWR) | ~31.5 in/yr snow; ~25–30 thunderstorms/yr |
| ASCE 7-16 (as adopted by NJ UCC) | ~110–115 mph design wind (HEDGED "near"); Pg ~25 psf (HEDGED "near") |
| N.J.S.A. 56:8-142 | $500,000 per-occurrence CGL minimum |
| HomeAdvisor + Modernize / NJ roofing guides | replacement $10,000–$25,000; leak repair $400–$1,000; slate ~$10–$30/sq ft |

## §0-gate compliance (Essex Fells specifics)

- **HISTORIC (Rule 1):** NO local HPC, NO ordinance, NO COA, NO Register listing.
  Asserted explicitly in residential.content[1] + FAQ 2. NO "Essex Fells Historic
  District" claim (REFUTED). Bowditch heritage = COLOR only (no restriction). NPS
  Register-no-restriction rule cited. Grover Cleveland Birthplace NOT placed here.
  Ch. 142 "HISTORIC STRUCTURE" (FEMA floodplain term) not conflated. 2018 Master Plan
  preservation element NOT cited as law.
- **RESERVATION (Rule 3):** NONE attributed. Essex Fells borders no county reservation;
  wooded character framed as private/borough land + street canopy only.
- **FLOODPLAIN (Rule 4):** NONE. Upland borough; no Passaic / Hatfield / FEMA-zone
  framing. weatherChallenges frames far-western upland terrain QUALITATIVELY (holds snow
  longer; no number).
- **BORDERS:** Caldwell, North Caldwell, Roseland, Verona, West Caldwell, West Orange
  (NOT Livingston) — whyChoose reason 4.
- **CENSUS (Rule 6):** 806 homes, ~97% single-family detached, ~96–98% owner-occupied —
  exact pack figures; demographics confined to who/what + residential framing (not under
  "problems"). Raw population 2,244 intentionally NOT restated in prose (qualitative
  framing per gold-standard west-essex/cedar-grove pattern).
- **COMMERCIAL:** residential-only borough — commercial framed honestly around Borough
  Hall / school / post office / municipal structures + estate accessory buildings (pool
  house, carriage house, garage) + general low-slope capability. NO fabricated commercial
  corridor or office district.
- **TERRAIN/LOT:** "large lots / custom homes" — no strict "one-acre minimum" asserted.
  Area = 1.41 sq mi (Census), not 1.6.

## Self-audit checklist (all PASS)

1. Modality outside `faqs[].question`: grep `will|should|need to|needs to|have to|has to|must|ought to|might|may|would|could` → NONE.
2. `**` only in directAnswer + the 4 answer-first leads + their body paragraphs + FAQ-answer first sentences. NONE in neighborhoods/projectSpotlights/whyChoose/pricing/meta (verified by line scan).
3. R3 STRICT body-lead bold — each content-array body opens re-bolding a lead topic, in order:
   - overview: lead [mature tree canopy → aging slate and asphalt covering → flashing failure]; bodies open with the same 3, in order.
   - residential: lead [natural slate, metal, and copper → asphalt shingles]; 2 bodies open with same, in order.
   - commercial: lead [low-slope roofs → EPDM/TPO/modified-bitumen membranes]; body[1] opens membranes, body[2] opens `low-slope roof` (head-noun match).
   - weather: lead [snow → freeze-thaw cycling → nor'easter wind → summer storms]; body[1] opens Snow (develops Freeze-thaw), body[2] opens Nor'easter wind (develops Summer storms).
4. Every digit named-sourced (table above). Census/canopy figures match the Essex Fells pack exactly.
5. Zero fabricated completed-project/client/sponsorship/certification/warranty-term/savings/financing claims. projectSpotlights are 3 representative TYPES (Historic Slate & Copper Restoration; Custom-Home Asphalt Re-Roof; Estate Accessory Low-Slope Membrane Replacement).
6. COA framing = Essex Fells §0 gate EXACTLY (no-HPC / no-COA / no-Register; Bowditch heritage color only).
7. Reservation = none; floodplain = none (upland). Matches §0.
8. Each section develops its lead via lexical relations (R35): hyponyms (slate/metal/copper; EPDM/TPO/modified bitumen; oak/maple), meronyms (deck, underlayment, ice barrier, valley, flashing, ridge, copper), antonym/contrast (install↔aging; field underlayment↔ice barrier), synonyms (re-roof/reroof/replacement). Each fact stated once in its owning section (R36).
9. metaTitle 51 chars (≤70); metaDescription 159 chars (≤160). directAnswer 36 words. credentialsHighlight = exact `['NJ HIC Licensed','Fully Insured & Bonded','Family-Owned & Local']`.
10. TS type-check: `tsc --noEmit --strict` against `CityContent[]` harness → RC 0 (parses + satisfies schema).
