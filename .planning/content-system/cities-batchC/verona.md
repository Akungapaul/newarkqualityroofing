# Verona (cityId: verona) — CityContent draft map

West-essex archetype, entry #4 of 5. Full fabrication-purge + answer-first rewrite.
Macro topic: roofing in Verona, NJ (Township of Verona, Essex County) — a Watchung
valley/upland township between Eagle Rock (First Watchung) and Hilltop (Second Watchung)
reservations, with pre-war Colonials, postwar Capes/ranches, and many 1960s–70s split-levels.

## Rendered heading → field map

| Rendered H-tag | Field | Answer-first lead (≤40w) |
|---|---|---|
| H1 "Who Provides Roofing Services in Verona?" | `directAnswer` | NQR provides roofing in **Verona** / **Essex County**, repairing/replacing **asphalt, slate, metal, and flat membrane roofs** on pre-war Colonials, postwar Capes/ranches, split-levels (37 words) |
| H2 "What Roofing Services Are Available…" | services grid (shared) | — none written |
| H2 "What Residential Roofing Services…" | `residential.content[0]` | 2 tracks: **asphalt shingles** (Colonials/Capes/ranches/split-levels) + **natural slate and metal** restoration (37 words) |
| H2 "What Commercial Roofing Services…" | `commercial.content[0]` | NQR services **low-slope roofs**, installing/repairing **EPDM, TPO, and modified-bitumen membranes** on Bloomfield Ave + Pompton Ave corridors (32 words) |
| H2 "What Roofing Problems Are Common in Verona?" | `overview[0]` | 3 stressors: **reservation-edge tree debris**, **split-level transition flashing**, **Peckman River drainage** (34 words) |
| subheading | `weatherChallenges.heading` + `[0]` | snow / freeze-thaw / nor'easter wind / summer storms (4 stressors) (28 words) |
| H2 "Which Neighborhoods…" | `neighborhoods[]` (5, raw) | Afterglow, Personette Ave, Claremont Ave, Verona Park/Lakeside Ave, Bloomfield+Pompton corridors |
| H2 "What Roofing Materials…" | shared | — none written |
| H2 "What Should You Know About Roofing Permits…" | shared | — none written |
| H2 "How Much Does Roofing Cost…" | `pricing{}` | repair $400–$1,000 / replacement $10,000–$25,000; note attributes HomeAdvisor + Modernize |
| H2 "What Roofing Projects Do We Handle…" | `projectSpotlights[]` (3, raw) | Split-Level Transition-Flashing Rebuild; Pre-War Colonial Slate & Flashing Restoration; Corridor Low-Slope Commercial Membrane Replacement |
| H2 "What Questions Do Verona Property Owners Ask…" | `faqs[]` (7) | permit / historic-landmark / cost / problems / split-level material / insurance / inspection cadence |
| H2 "Why Should You Choose…" | `whyChoose.reasons[]` (5, raw) | HIC / insured-bonded / split-level+pre-war experience / family-owned-local / free inspections |

## Named sources → exact figure attributed

- **U.S. Census Bureau (ACS estimates):** "about four-fifths owner-occupied across about 6,000 housing units" (residential.content[2]). (Population 14,572 / 2020 Decennial framed qualitatively as the homeowner-facing single-family market — no raw number forced; housing-unit + tenure are the cited ACS figures, matching pack guidance to present units as an ACS estimate.)
- **InterNACHI life-expectancy chart:** asphalt architectural 30 yr / 3-tab 20 yr; natural slate 60–150 yr; metal 40–80 yr; EPDM 15–25 yr; TPO 7–20 yr; modified bitumen 20 yr.
- **IRC R905.1.2 ice-barrier provision:** ice barrier from eave to ≥24 in. inside the exterior wall line (residential, split-level project, FAQ).
- **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code:** detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule + permit on commercial/multi-family/attached.
- **NRCA (industry estimate):** roughly 90–95% of leaks at flashing, 5–10% at the open shingle field (overview[2], FAQ); twice-yearly + post-storm inspection (FAQ).
- **NRCA and ARMA:** low-slope ≥¼ in./ft slope to drain; ponding >48 hr = a defect (overview[3], commercial[2], project).
- **NOAA 1991–2020 normals at Newark Liberty (EWR):** ~31.5 in/yr snow; crosses 32°F repeatedly; ~25–30 thunderstorms/yr; nor'easters Oct–April.
- **ASCE 7-16 as adopted by the NJ UCC:** design wind ~110–115 mph; ground snow load ~Pg 25 psf (both HEDGED via "near").
- **Essex County Parks:** Verona hosts part of Eagle Rock Reservation (First Watchung) and Hilltop Reservation (Second Watchung). NO South Mountain.
- **NOAA / National Weather Service Peckman River gauge at Verona:** at ~5-ft stage, water covers roads + reaches 1–3 ft into properties along Bloomfield Ave + Lakeside Ave near Verona Park.
- **Zoning Ordinance Chapter 150, Article XXII (Verona HPC):** HPC review prior to permit issuance for significant exterior changes on a LOCALLY DESIGNATED landmark; in-kind exterior repairs EXEMPT; exactly two designated landmarks (Erie Railroad Freight Shed, 62 Depot Street; Verona United Methodist Church).
- **National Park Service:** National Register listing alone places no restriction on a private owner; Verona Park = Olmsted Essex County park, not a reroof gate.
- **The Cultural Landscape Foundation / Olmsted Brothers:** Verona Park = 54.32-acre Olmsted-designed Essex County park (neighborhoods).
- **Insurance Information Institute:** wind/hail = largest homeowners-claim type at 2.8% of insured homes/yr (FAQ).
- **HomeAdvisor and Modernize:** NJ replacement $10,000–$25,000; leak repair $400–$1,000 (pricing + FAQ).
- **N.J.S.A. 56:8-142 / Contractors' Registration Act / NJ Division of Consumer Affairs:** $500,000 per-occurrence CGL minimum; NJ HIC registration (whyChoose, FAQ).
- **Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue:** named construction office FUNCTION (commercial, projects, FAQ). NO named official.

## COA / historic framing (Verona §0 gate)

- Uses "HPC review" — NOT the literal "Certificate of Appropriateness" (per pack: Verona materials say "HPC review prior to issuance of permits").
- Only the TWO locally designated landmarks trigger review; in-kind repairs exempt; every other home reroofs with no HPC review.
- Afterglow explicitly framed as PROPOSED (2017 survey), NOT designated → standard N.J.A.C. 5:23-2.7 path, no HPC review on that basis.
- Verona Park = Olmsted Essex County park, NOT Register-listed, NOT a homeowner gate.
- NPS no-private-restriction principle stated for National Register listing.

## Self-audit checklist (all PASS)

1. Modality (will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could) outside faqs[].question — **NONE** (script-verified).
2. `**` outside directAnswer + the 4 content-array leads + their R3 body openers + FAQ-answer first sentences — **NONE in neighborhoods/projectSpotlights/whyChoose/pricing/meta/.heading** (script-verified).
3. R3 STRICT body-lead bold: overview/residential/commercial/weather each open body paras by re-bolding lead topics in order; commercial mirrors the committed Bloomfield gold-standard pattern (body[1] = full membrane phrase, body[2] = "A Verona commercial **low-slope roof**…"); weather bolds all 4 lead topics across 2 paras (2-per-para, gold-standard pattern) — **PASS**.
4. Every hard number attributed to a named source from the packs — **PASS** (table above); housing units/tenure = U.S. Census Bureau ACS; no invented Verona-specific snow/wind/elevation number.
5. Zero fabricated completed-project/client/sponsorship/certification/warranty-term/savings/financing claims; projectSpotlights = representative TYPES — **PASS**.
6. COA framing = Verona §0 gate (HPC review for 2 landmarks only; in-kind exempt; Afterglow not designated; Verona Park not a gate) — **PASS**.
7. Reservation adjacency = Eagle Rock + Hilltop ONLY; NO South Mountain — **PASS** (script-verified).
8. Each section develops its lead via lexical relations (R35: residential hyponyms asphalt→architectural/3-tab, slate/metal restoration meronyms fasteners/flashing/valley/chimney; commercial hyponyms EPDM/TPO/mod-bit + parts seams/parapets; antonym install↔aging/restore) and states each fact once (R36: lifespans only in residential/commercial+material FAQ; permit law only in commercial/permit FAQ; demographics only in residential/who-framing) — **PASS**.
9. metaTitle 46 ≤70; metaDescription 154 ≤160; credentialsHighlight = exact ['NJ HIC Licensed','Fully Insured & Bonded','Family-Owned & Local'] — **PASS**.
10. Zod CityContentSchema.safeParse — **PASS**.
