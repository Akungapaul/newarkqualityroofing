# Maplewood CityContent — Draft Doc

cityId: `maplewood` · entry #4 of 5 in the first-suburbs archetype file.
Macro topic: roofing in Maplewood, NJ (Township of Maplewood, Essex County).
Snippet: `maplewood.snippet.ts` (schema-validated against `CityContentSchema`).

---

## Rendered-heading → content-field map

| Rendered H-tag (template-supplied) | Field that answers it | Answer-first lead (≤40w) |
|---|---|---|
| H1 "Who Provides Roofing Services in Maplewood?" | `directAnswer` | NQR provides roofing in **Maplewood** / **Essex County**, repairing & replacing **asphalt, slate, metal, flat membrane** on architect-designed homes + Village storefronts (37w). |
| H2 "What Roofing Services Are Available…" | shared services GRID | (nothing authored) |
| H2 "What Residential Roofing Services…" | `residential.content[]` | 2 tiers: **asphalt shingles** on architect-designed Tudor/Colonial Revival/Italian Revival; **natural slate and metal restoration** on period roofs (36w). |
| H2 "What Commercial Roofing Services…" | `commercial.content[]` | NQR services low-slope **EPDM, TPO, modified-bitumen membranes** on Village + Springfield Ave storefronts + Maplewood station buildings (33w). |
| H2 "What Roofing Problems Are Common in Maplewood?" | `overview[]` | 3 stressors: **tree-canopy & reservation-edge debris**, **shade-driven moss**, **ice dams** (30w). |
| subheading (span) | `weatherChallenges.heading` + `.content[]` | Maplewood loads a roof with **tree-canopy debris**, **snow & freeze-thaw**, **nor'easter/summer-storm wind** — 3 stressors (30w). |
| H2 "Which Neighborhoods Do We Serve…" | `neighborhoods[]` (6, RAW) | Maplewood Village, Jefferson, Hilton, Tuscan, Wyoming, Memorial Park. |
| H2 "What Roofing Materials Work Best…" | shared component | (nothing authored) |
| H2 "What Should You Know About Roofing Permits…" | shared component | (nothing authored) |
| H2 "How Much Does Roofing Cost in Maplewood?" | `pricing{averageRepair, averageReplacement, note}` | repair $400–$1,000; replacement $10,000–$25,000; note carries HomeAdvisor/Modernize attribution. |
| H2 "What Roofing Projects Do We Handle…" | `projectSpotlights[]` (3 TYPES, RAW) | Tudor/Colonial asphalt re-roof; tree-shaded slate & flashing restoration; Village low-slope commercial membrane. |
| H2 "What Questions Do Maplewood Property Owners Ask…" | `faqs[]` (7) | answer-first ≤40w; topic bold in sentence 1 only. |
| H2 "Why Should You Choose Our Roofing Company…" | `whyChoose.reasons[]` (5, RAW) | de-fabbed value props (HIC, insured $500k, period-stock experience, family-owned, free inspections). |
| "Where Can You Find Us…" / "Where Else…" | shared components | (nothing authored) |

---

## Named sources → exact figure attributed

| Named source | Figure(s) attributed in-text |
|---|---|
| **U.S. Census Bureau** | 74.9% owner-occupied; ~9,051 housing units (ACS estimate). (pop 25,684 / 3.87 sq mi land available, not surfaced in prose.) |
| **InterNACHI** (life-expectancy chart) | asphalt 3-tab 20 yrs / architectural 30 yrs; natural slate 60–150 yrs; metal 40–80 yrs; EPDM 15–25; TPO 7–20; modified bitumen 20. |
| **NRCA** | ~90–95% of roof leaks originate at flashing, ~5–10% at the open field. |
| **NRCA and ARMA** | low-slope drains ≥ ¼ in/ft; ponding > 48 h counts as a defect. |
| **IRC** (R905.1.2) | ice barrier from the eave to ≥ 24 in inside the exterior wall line. |
| **NOAA** (1991–2020 normals, Newark Liberty/EWR) | ~31.5 in/yr snow; repeated 32°F crossings; ~25–30 thunderstorms/yr; nor'easters Oct–April. |
| **ASCE 7-16 as adopted by the NJ Uniform Construction Code** | ~110–115 mph basic design wind (HEDGED); ground snow load ~25 psf (HEDGED). |
| **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** | detached 1–2 family reroof = ordinary maintenance (no permit); 25% rule for commercial/multi-family/attached. |
| **Township of Maplewood** (Construction Division) | 574 Valley Street; 20-business-day decision on a complete application. |
| **N.J.S.A. 56:8-142 (Contractors' Registration Act)** | $500,000 per-occurrence CGL minimum. |
| **National Park Service** | National Register listing alone places no restriction on a private owner (Maplewood Village HD = Register-only). |
| **Essex County Parks** | South Mountain Reservation ~2,100 acres, in portions of Maplewood, Millburn, and West Orange. |
| **University of Minnesota Extension** | ice-dam mechanism (attic heat melts snow, refreezes at the cold eave, backs water under shingles). |
| **HomeAdvisor and Modernize** | NJ repair $400–$1,000; replacement $10,000–$25,000 (in `pricing.note`). |

---

## COA framing (CITY-FACTS §0 Rule 2 — Maplewood = FRAMEWORK ONLY)

- Maplewood Village Historic District = **National Register-only** (listed 2022); per the NPS the listing imposes **no private-owner restriction** → a Village reroof needs **no COA** on the basis of the listing. Stated in the `Maplewood Village` neighborhood entry AND the historic FAQ.
- A Historic Preservation Commission + **Article VIII** ordinance framework exists, so a property in a **locally designated** Maplewood district/landmark falls under a township COA — **confirm current local designation with the Township** (conditional, indicative present; no `can`/modal hedge). NO active local district asserted.
- Did NOT confuse Maplewood Village with South Orange's Montrose Park. Did NOT place the reservation on Maplewood's east side (west/NW edge, partial containment).

---

## Self-audit checklist

- [x] Schema valid (tsx + `CityContentSchema.safeParse` → OK; counts: overview 4, res 3, com 3, weather 3, nbhd 6, spotlights 3, faqs 7, why 5).
- [x] Answer-first leads ≤40w: overview 30, residential 36, commercial 33, weatherChallenges 30. directAnswer 37. Each FAQ answer opens with a definitive ≤40w sentence.
- [x] `**` ONLY in directAnswer + the answer-first first-strings + each ProseLead body paragraph (gold-standard pattern — ProseLead.parseRichText consumes `**` on every paragraph) + FAQ first sentences. ZERO `**` in neighborhoods / projectSpotlights / whyChoose / pricing / meta (grep-confirmed CLEAN).
- [x] No modality in declaratives (grep: no will/should/need to/needs to/have to/has to/must/ought to/can/could/would/might/may hedge outside `faqs.question`). "needs no permit" = indicative present (matches committed East Orange).
- [x] Every hard number named-sourced (table above); no invented figure; Census 74.9%/~9,051 per §5 exactly.
- [x] Zero fabricated completed-project/client/sponsorship/certification/warranty-term claims; projectSpotlights = representative TYPES (present-tense capability scope).
- [x] COA framing = Maplewood framework-only / Maplewood Village Register-only (matches §0 Rule 2).
- [x] R35 lexical development: overview walks 3 enumerated stressors in order; residential walks asphalt (hyponym) → slate/metal (contrast, longer-life) → flashing (meronym); weatherChallenges walks debris → snow/freeze-thaw → wind. R38: ice barrier defined by function + contrast (vs field underlayment).
- [x] R36 state-each-fact-once: lifespans in residential/material sections; permit law in permits/commercial/FAQ; Census in residential/whyChoose (who/what framing), NOT under "problems"; flashing 90–95% stated once in residential body.
- [x] R37 SVO answers with named agent (Newark Quality Roofing / Maplewood / The South Mountain Reservation).
- [x] credentialsHighlight = exact `['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local']`.
- [x] metaTitle 49 ≤70; metaDescription 159 ≤160.
- [x] Primary n-gram "roofing in Maplewood" / "Maplewood" in opening answer and closing whyChoose.
