# Orange (cityId: orange) — City Page Draft Doc

Urban-core archetype, entry #3 of 4. Full fabrication-purge + answer-first rewrite of the prior heavily-fabricated Orange page (which invented South Mountain Reservation adjacency, a "12-week" Scotland Road slate restoration, an "8,500 sq ft" Main Street TPO job with "20% heating cost reduction," a "Scottish Rite Cathedral," a "50-year manufacturer warranty," localized ice/UHI degree figures, and `$350–$1,500` / `$8,500–$25,000` pricing). All of those are purged.

## Rendered-heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1: Who Provides Roofing Services in Orange? | `directAnswer` (≤40w, only `**bold**` field — 35 words) |
| H2: What Roofing Services Are Available in Orange? | shared services grid — no content written |
| H2: What Residential Roofing Services Do We Provide? | `residential.content[]` ([0] = 31-word answer) |
| H2: What Commercial Roofing Services Do We Provide? | `commercial.content[]` ([0] = 31-word answer) |
| H2: What Roofing Problems Are Common in Orange? | `overview[]` ([0] answers the PROBLEMS question — 3 stressors, 40 words) |
| subheading span: weatherChallenges.heading | `weatherChallenges.content[]` ([0] = 36-word answer) |
| H2: Which Neighborhoods Do We Serve in Orange? | `neighborhoods[]` (6 verified-real names) |
| H2: What Roofing Materials Work Best…? | shared component — no content written |
| H2: What Should You Know About Roofing Permits in Orange? | shared component — no content written |
| H2: How Much Does Roofing Cost in Orange? | `pricing{averageRepair, averageReplacement, note}` |
| H2: What Roofing Projects Do We Handle in Orange? | `projectSpotlights[]` (3 representative TYPES) |
| H2: What Questions Do Orange Property Owners Ask…? | `faqs[]` (8, each answer ≤40-word first sentence, no bold) |
| H2: Why Should You Choose Our Roofing Company in Orange? | `whyChoose.reasons[]` (5 de-fabbed value props) |
| Where Can You Find Us Near Orange? / Where Else…? | shared components — no content written |

Legacy schema-required-but-unrendered headings set to clean labels: `residential.heading` = "Orange Residential Roofing"; `commercial.heading` = "Orange Commercial Roofing"; `whyChoose.heading` = "Why Orange Property Owners Choose Newark Quality Roofing".

## Named sources used + the exact figure each is attributed to

| Named source | Figure / fact attributed in this page |
|---|---|
| U.S. Census Bureau (2020 Census) | Orange = 34,447 residents in ~2.21 sq mi land (overview[1], faq "tight-lot," whyChoose "tight-lot") |
| U.S. Census Bureau (ACS 2019–2023) | median structure year ~1939; owner-occupancy ~23.8% (~3/4 renter) (overview[2], whyChoose "tight-lot") |
| InterNACHI life-expectancy chart | asphalt 20 yr (3-tab) / 30 yr (architectural); slate 60–150 yr; EPDM 15–25 yr; TPO 7–20 yr; modified bitumen 20 yr (residential[1], commercial[1], faq "materials," projectSpotlights) |
| NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 | detached 1–2 family reroof = ordinary maintenance, no permit/inspection/notice; commercial/multi-family/attached >25% roof area in 12 months needs a permit (residential, commercial, faq "permit," projectSpotlights) |
| International Residential Code (IRC) | ice-and-water barrier from eave to ≥24 in inside the exterior wall line in ice-prone climates (residential[2], projectSpotlights) |
| NRCA + ARMA | low-slope roof needs ≥¼ in/ft slope to drain; ponding >48 hr = defect; inspect twice/yr spring+fall + after a major storm (commercial[1], faq "flat commercial," faq "weather damage," projectSpotlights) |
| NOAA 1991–2020 normals (Newark Liberty / EWR) | ~31.5 in/yr snow; freeze-thaw; nor'easters Oct–April; 25–30 thunderstorms/yr (weatherChallenges[0], faq "weather damage") |
| ASCE 7-16 (shared EWR baseline, HEDGED phrasing "near") | ground snow load near 25 psf; design wind near 110–115 mph for the region (weatherChallenges[1]) |
| Essex County Parks | South Mountain Reservation is in West Orange/Maplewood/Millburn — Orange does NOT border it (weatherChallenges[1], faq "tree debris") |
| U.S. EPA | heat island: urban daytime air ~1–7°F higher, nighttime ~2–5°F higher, largest in humid eastern-U.S./denser cities; reflective/green roofs lower roof-surface temp substantially — QUALITATIVE, no Orange-specific delta (weatherChallenges[2]) |
| City of Orange Township Code Ch. 210, Art. X + Orange Historic Preservation Commission | binding COA for regulated exterior roofing in the 4 locally designated districts: Orange Valley, Montrose/Seven Oaks Park, Main Street, St. John's (neighborhoods, faq "COA") |
| National Park Service | Register listing alone places no restriction on a private owner (faq "COA") |
| National Slate Association | corroded fasteners / degraded flashing are the typical slate failure point (projectSpotlights "Seven Oaks") |
| City of Orange Township Building & Construction Division | administers building/electrical/plumbing/fire permits + inspections for permitted (commercial/multi-family) work (commercial[2]) |
| NJ Division of Consumer Affairs / Contractors' Registration Act / N.J.S.A. 56:8-142 | NJ HIC licensing requirement; $500,000-per-occurrence CGL minimum (whyChoose) |
| HomeAdvisor + Modernize | NJ replacement $10,000–$25,000; NJ leak repair $400–$1,000; NJ 10–40% above national (pricing.note, faq "cost," faq "materials" context) |

## HISTORIC discipline note
COA asserted ONLY for Orange's four CONFIRMED locally designated districts (Orange Valley, Montrose/Seven Oaks Park, Main Street, St. John's) per CITY-FACTS §0.2 (Orange = YES, Ch. 210 Art. X). For Scotland Road / Park Avenue (verified-real streets but NOT a blanket district), the COA is conditioned on "where a specific parcel falls inside one of Orange's four locally designated districts." The former Masonic Temple at 239 Main Street is NOT named (CITY-FACTS caution: do not call it a "Scottish Rite Cathedral"). South Mountain Reservation adjacency is explicitly corrected (Orange does NOT border it).

## GEOGRAPHY discipline note
Tree/branch stressor framed to Orange's OWN mature street trees + the wooded West Orange / first-Watchung ridge to the west — never to a South Mountain Reservation adjacency (CITY-FACTS §0.4 correction). The "Valley" stormwater stressor stated qualitatively (no flood-zone % or depth).

## projectSpotlights = representative TYPES (no fabricated specifics)
1. Older-Home Asphalt Re-Roof (residential) — tear-off/deck/underlayment/architectural shingle on Orange's older detached + 2–3 family stock.
2. Seven Oaks Slate & Copper Restoration (residential) — slate-tile + copper flashing on Orange's larger Victorian/Colonial Revival homes; COA conditioned on designated-district status.
3. Main Street Low-Slope Membrane Replacement (commercial) — EPDM/TPO single-ply + parapet flashing on 19th-century Main Street storefronts.
NO street addresses, NO dates, NO durations, NO counts, NO warranty terms, NO client/owner names.

## SELF-AUDIT CHECKLIST (all confirmed)
- [x] Answer-first first strings ≤40 words: directAnswer 35; overview[0] 40; residential[0] 31; commercial[0] 31; weatherChallenges[0] 36; every faq answer first sentence ≤40 (max 38).
- [x] `**` ONLY in directAnswer (grep confirmed: single hit, line 5).
- [x] Zero modality (will/should/must/need to/needs to/have to/has to/ought to/might/may/would/could) in declaratives — grep returns nothing; FAQ questions phrased "Do you need…/Does…/How…" (exempt anyway, and also clean).
- [x] Every number named-sourced: 34,447 + 2.21 sq mi (Census 2020); ~1939 + 23.8% (Census ACS); 20/30/60–150/15–25/7–20 yr (InterNACHI); 25% + 12 months + 24 in (NJ UCC / IRC); ¼ in/ft + 48 hr (NRCA/ARMA); 31.5 in + 25–30 storms (NOAA); 25 psf + 110–115 mph (ASCE 7-16, hedged "near"); 1–7°F / 2–5°F (U.S. EPA); $10,000–$25,000 + $400–$1,000 + 10–40% (HomeAdvisor/Modernize); $500,000 (N.J.S.A. 56:8-142).
- [x] Counted plurals carry exact integer: "3 main stressors" (overview, =3), "4 climate stressors" (weather, =4), "2 tiers" (residential, =2).
- [x] projectSpotlights are representative TYPES — no fabricated job/duration/count/client/warranty.
- [x] pricing attributed in `note` (HomeAdvisor + Modernize); numeric range strings carry no inline attribution (render bare in cards); same NJ-regional ranges as all 4 cities.
- [x] No de-fab literals anywhere (incl. metaTitle/metaDescription): grep for 24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+ projects/years, golden pledge, VELUX, [VERIFY]/[UNVERIFIED] → NONE.
- [x] No fabricated completed-project / client / sponsorship / certification / warranty-term claims.
- [x] No outbound links / URLs in prose.
- [x] credentialsHighlight EXACT: ['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local'].
- [x] Historic COA claims only where a LOCAL Orange designation is confirmed (4 districts); Register-only ≠ restriction (NPS); Scotland Road/Park Ave conditioned on parcel-in-district.
- [x] metaTitle 55 chars (≤70); metaDescription 158 chars (≤160).
- [x] One macro topic — "roofing in Orange" repeated in opening (directAnswer + overview[0–3]) and closing (whyChoose + pricing + faqs).
- [x] Object literal parses as a drop-in array element (node eval confirmed; 16 keys, trailing comma present).
