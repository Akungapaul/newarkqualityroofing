# Millburn (cityId: millburn) — Affluent-Suburban Archetype, entry #2 of 2

Full fabrication-purge + answer-first rewrite of the existing (heavily fabricated, modality-heavy) Millburn/Short Hills page. Snippet: `millburn.snippet.ts` (drop-in array element between `export const affluentSuburbanContent: CityContent[] = [` and `];`).

## Rendered-heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Millburn?" | `directAnswer` (39 words; bolds Millburn, Essex County, natural slate/copper/tile/asphalt roofs) |
| H2 "What Roofing Services Are Available in Millburn?" | shared services grid — no field |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead 38 words; slate/copper/tile/cedar track + asphalt track) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead 33 words; low-slope membranes + Rahway downtown drainage) |
| H2 "What Roofing Problems Are Common in Millburn?" | `overview[]` (lead 38 words — a PROBLEMS answer: 3 stressors) |
| subheading span | `weatherChallenges.heading` = "How Does Millburn Weather and Ridge Terrain Affect Your Roof?" |
| H2 "Which Neighborhoods Do We Serve in Millburn?" | `neighborhoods[]` (7 verified sections; NO bold) |
| H2 "What Roofing Materials Work Best…" | shared component — no field |
| H2 "What Should You Know About Roofing Permits in Millburn?" | shared component — no field |
| H2 "How Much Does Roofing Cost in Millburn?" | `pricing{averageRepair,averageReplacement,note}` (NO bold; source in note) |
| H2 "What Roofing Projects Do We Handle in Millburn?" | `projectSpotlights[]` (3 representative TYPES; NO bold) |
| H2 "What Questions Do Millburn Property Owners Ask…?" | `faqs[]` (7; first sentence ≤40w, bold topic sentence 1 only) |
| H2 "Why Should You Choose Our Roofing Company in Millburn?" | `whyChoose.reasons[]` (6 de-fabbed value props; NO bold) |
| "Where Can You Find Us…" | shared component — no field |

## Named sources → exact figure each is attributed to

- **U.S. Census Bureau** — Millburn population 21,710 (2020 Census), 9.33 sq mi land. (NOT quoted in snippet body — wealth/value framed qualitatively per §0 Rule 6; the $250,001 top-coded income and $1.37M ACS value are DROPPED as literals. Population/area held in reserve; the snippet leans qualitative "deep stock of early-20th-century high-style homes / Short Hills estates.")
- **Essex County Parks** — South Mountain Reservation, ~2,112 acres, between the First and Second Watchung ridges (overview body[2], overview FAQ, weather body[1]). Millburn only — NOT Livingston.
- **NOAA 1991–2020 normals at Newark Liberty (EWR)** — ~31.5 in/yr snow; 32°F freeze-thaw crossings; ~25–30 thunderstorms/yr (weather body[1], body[2]).
- **ASCE 7-16 as adopted by the NJ Uniform Construction Code** — basic design wind ~110–115 mph; ground snow load ~Pg 25 psf (weather body[2]; both HEDGED with "near").
- **InterNACHI life-expectancy chart** — natural slate 60–150 yrs; copper 70+ yrs; clay/concrete tile 50+ yrs; cedar 20–40 yrs; architectural asphalt 30 yrs; 3-tab 20 yrs; EPDM 15–25; TPO 7–20; modified bitumen 20 (residential, commercial, FAQs, spotlights).
- **NPS Preservation Brief 29** — non-ferrous copper/stainless slater's nails; replace a full slope only at 20%+ slate failure (residential body[1], spotlight[0], FAQ slate-life).
- **NPS Preservation Brief 19** — red cedar must NOT use copper nails (which corrode cedar); stainless/hot-dipped galvanized instead (residential body[1], spotlight[1]).
- **Secretary of the Interior's Standards (Standard 6)** — in-kind matching of replacement material (residential body[1], spotlight[0], spotlight[1], whyChoose slate/copper/tile/cedar).
- **NRCA** — ~90–95% of leaks originate at flashing, ~5–10% at the open field (overview body[3], overview FAQ).
- **NRCA and ARMA** — ¼-in-per-foot minimum slope; ponding >48 hrs a defect (commercial body[2], spotlight[2]).
- **NJ Uniform Construction Code / N.J.A.C. 5:23-2.7** — detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule for commercial/multi-family/attached (commercial body[2], permit FAQ, COA FAQ, spotlights).
- **Township of Millburn Historic Preservation ordinance (Article 8, MLUL N.J.S.A. 40:55D-107)** — binding COA from the Millburn HPC ONLY on an individually designated landmark OR inside the Wyoming or Short Hills Park historic district; names "roof repairs or replacement"; COA separate from building permit (COA FAQ, neighborhoods Short Hills + Wyoming, spotlight[0], whyChoose COA reason).
- **National Park Service** — National Register listing alone places no restriction on a private owner → Paper Mill Playhouse + Cora Hartshorn Arboretum impose no homeowner roofing gate (COA FAQ).
- **Insurance Information Institute** — wind/hail largest homeowners-claim type at 2.8% of insured homes/yr (insurance FAQ).
- **HomeAdvisor and Modernize** — NJ replacement $10,000–$25,000; leak repair $400–$1,000 (pricing, cost FAQ).
- **NJ roofing guides** — slate installed ~$10–$30/sq ft, the estate-premium driver (pricing note, cost FAQ).
- **NJ Division of Consumer Affairs / Contractors' Registration Act; N.J.S.A. 56:8-142** — NJ HIC registration; $500,000 per-occurrence CGL minimum (whyChoose).

## Geography / COA discipline applied (§0 Rules 1, 3, 4)

- **COA = highest-risk fact**: framed EXACTLY — "Most Millburn and Short Hills homes need no HPC review, BUT a designated landmark or a property inside the Wyoming or Short Hills Park historic district requires a COA before permit-triggering roof work." NOT township-wide. Short Hills Village = "recently designated or pending third historic district…checked against current designation status" (neither asserted nor denied). COA is the HPC's exterior-design approval, SEPARATE from the building permit; a 1–2 family reroof stays UCC ordinary maintenance even where a COA applies.
- **South Mountain Reservation (~2,112 ac, Watchung ridges) = Millburn only.** No West Essex Park / Riker Hill / Passaic feature attributed to Millburn.
- **Rahway River downtown flood** (Floyd 1999, Irene 2011, Ida 2021) = DOWNTOWN low-slope COMMERCIAL drainage stressor only — positive slope-to-drain + parapet/scupper/downspout flashing. NOT basement/interior, NOT township-wide, NOT a Short Hills residential claim. Written "the Rahway River" (no branch).
- **Watchung-ridge cooler/snowier = QUALITATIVE only** ("marginally cooler and snowier") — NO Millburn-specific snow/wind/elevation number. Only EWR baseline numbers used.
- **Mature tree canopy** (oak/maple) reinforced by Hartshorn's 1877 Short Hills plan + the Cora Hartshorn Arboretum — qualitative, no canopy %.

## Self-audit checklist (all PASS)

- [x] Modality grep (will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could) OUTSIDE faq questions → NONE.
- [x] `**` only in directAnswer + answer-first first-strings + their R3-strict body openings + FAQ-answer first sentences. neighborhoods/projectSpotlights/whyChoose/pricing/meta/heading/hero = 0 `**`.
- [x] R3 STRICT: overview body[1..3] open with mature tree canopy / Watchung-foothills ridge terrain / flashing failure (lead order). residential body[1..2] open with natural slate, copper, tile, and cedar / asphalt shingles. commercial body opens EPDM then low-slope roof (membranes + low-slope, committed-sibling order). weather body[1] opens mature tree canopy (folds snow and freeze-thaw cycling), body[2] opens nor'easter and summer-storm wind.
- [x] Answer-first ≤40w: directAnswer 39, overview[0] 38, residential[0] 38, commercial[0] 33, weather[0] 33; every FAQ first sentence ≤40 (max 37).
- [x] Every digit named-sourced; no fabricated number. Population 21,710 / 9.33 sq mi held qualitative; wealth framed qualitatively ($250,001 top-coded income DROPPED).
- [x] Zero fabricated completed-project/client/architect/HOA/crew/shop/warranty-term/savings/financing. projectSpotlights = representative TYPES (Estate Slate & Copper Restoration / Tile & Cedar Heritage Re-Roof / Downtown Low-Slope Commercial Membrane Replacement). PURGED: "Tudor Estate Slate Restoration in Old Short Hills … 1924 … 4,200 sq ft Vermont Unfading Green," "Contemporary Standing Seam … ColorGard," "Paper Mill Playhouse … 80-mil TPO … Grand Manor," "dedicated slate restoration crew," "in-house copper fabrication," "quarry-direct," "20-year NDL / Golden Pledge," architect/landscape/insurance-rider relationships, fabricated price tiers.
- [x] COA framing matches §0 Rule 1 EXACTLY (binding ONLY in Wyoming/Short Hills Park district or individually designated landmark, NOT township-wide; Short Hills Village pending/recent).
- [x] Geography matches §0 Rules 3–4 (South Mountain Reservation = Millburn; Rahway downtown flood = downtown commercial only; no Passaic/West Essex feature; "the Rahway River").
- [x] metaTitle 48 ≤70; metaDescription 157 ≤160; credentialsHighlight = exact 3-item array.
- [x] TypeScript: type-checks clean against `CityContent` (npx tsc --noEmit, no errors).
- [x] No `${` sequence, no literal backtick inside prose; counts: overview 4, residential 3, commercial 3, weather 3, neighborhoods 7, projectSpotlights 3 (4 details each), faqs 7, whyChoose 6.
