# Newark — City Page Draft Doc (cityId: newark)

Urban-core archetype, entry #1 of 4. Full fabrication-purge + answer-first rewrite.
Macro topic: **roofing in Newark, NJ** — NJ's largest city / Essex County seat.

---

## Rendered-heading → field map

| Rendered H-tag (CityTemplate / HEADING_CONFIG) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Newark?" | `directAnswer` (only `**bold**` field; parsed by CityHero `parseRichText`) |
| H2 "What Roofing Services Are Available in Newark?" | shared services grid — no copy written |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (first string = ≤40-word answer) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (first string = ≤40-word answer) |
| H2 "What Roofing Problems Are Common in Newark?" | `overview[]` (first string answers the PROBLEMS question: "3 main stressors") |
| span: weatherChallenges.heading "How Does Newark Weather Affect Your Roof?" | `weatherChallenges.content[]` (first string = ≤40-word answer) |
| H2 "Which Neighborhoods Do We Serve in Newark?" | `neighborhoods[]` (7 verified-real names) |
| H2 "What Roofing Materials Work Best for Newark Properties?" | shared component — no copy |
| H2 "What Should You Know About Roofing Permits in Newark?" | shared component — no copy |
| H2 "How Much Does Roofing Cost in Newark?" | `pricing{averageRepair, averageReplacement, note}` (attribution in note) |
| H2 "What Roofing Projects Do We Handle in Newark?" | `projectSpotlights[]` (3 representative project TYPES) |
| H2 "What Questions Do Newark Property Owners Ask About Roofing?" | `faqs[]` (7, answer-first, no bold) |
| H2 "Why Should You Choose Our Roofing Company in Newark?" | `whyChoose.reasons[]` (4 de-fabbed value props) |
| "Where Can You Find Us / Where Else…Near Newark?" | shared components — no copy |

Legacy (schema-required, not rendered): `residential.heading`, `commercial.heading`,
`whyChoose.heading` set to short clean factual labels. `heroHeadline` / `heroSubheadline`
render in CityHero alongside directAnswer.

---

## Named sources used + the exact figure each is attributed to

| Named source | Figure / fact attributed |
|---|---|
| U.S. Census Bureau (2020 Decennial Census) | Newark population **311,549**; land area **24.14 sq mi**; "most populous city in NJ / Essex County seat" |
| U.S. Census Bureau (ACS / QuickFacts) | **24.4%** owner-occupied; "about a quarter of Newark's homes predate 1940" (framed qualitatively per CITY-FACTS) |
| NOAA 1991–2020 normals (Newark Liberty / EWR) | snow **~31.5 in/yr**; crosses **32°F** repeatedly through winter; **~25–30 thunderstorms/yr**; nor'easters Oct–April |
| ASCE 7-16 (as adopted by the NJ Uniform Construction Code) | basic design wind speed **~110–115 mph**; ground snow load **Pg ~25 psf** (both HEDGED per CITY-FACTS §3 — stated "for typical buildings" / "near") |
| the NRCA (trade estimate) | **~90–95%** of leaks at flashing, **5–10%** at the open shingle field; ponding >48 hr = defect; ¼ in/ft min slope (with ARMA) |
| ARMA | ¼ in/ft min slope; ponding >48 hr defect (with NRCA) |
| InterNACHI life-expectancy chart | slate **60–150 yr**; metal **40–80 yr**; EPDM **15–25 yr**; TPO **7–20 yr**; modified bitumen **20 yr** |
| NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 | detached 1–2 family reroof = ordinary maintenance, no permit; commercial/multi-family/attached **>25%** of roof area in 12 months = permit |
| the IRC (R905.1.2) | ice-barrier provision at eaves; ice-and-water shield at eaves/valleys |
| Newark Municipal Code Chapter 41:10 | COA from the Newark Landmarks & Historic Preservation Commission for exterior work on locally designated / contributing property |
| National Park Service | "National Register listing alone places no federal restriction on a private property owner" (binding gate is local Ch. 41:10 designation) |
| U.S. EPA ("Learn About Heat Islands") | UHI: daytime air **~1–7°F** higher, nighttime **~2–5°F** higher; reflective/green roofs lower surface temp substantially (QUALITATIVE, EPA-attributed — no city delta) |
| U.S. EPA Urban Waters program | Passaic River = Newark's eastern boundary, tidal reach draining to Newark Bay; low-lying Ironbound/East Ward near sea level |
| Insurance Information Institute (Triple-I, 2019–2023) | wind & hail = largest claim type, **2.8%** of insured homes/yr (**1 in 36**), avg claim **~$14,747** |
| HomeAdvisor + Modernize (NJ) | replacement **$10,000–$25,000**; leak repair **$400–$1,000** |
| HomeGuide | NJ ranges run **~10–40%** above national; labor share of install |
| University of Minnesota Extension | ice-dam mechanism (meltwater refreezes at cold eave, backs up under shingles) |
| N.J.S.A. 56:8-142 (Contractors' Registration Act) | **$500,000** per-occurrence CGL minimum for a registered NJ HIC |
| NJ Division of Consumer Affairs | NJ Home Improvement Contractor registration requirement |

Permit office named EXACTLY per CITY-FACTS §0 Rule 1:
**Newark Department of Engineering — Office of Uniform Construction Code / Building Division, City Hall, 920 Broad Street** (NOT Economic & Housing Development).

---

## Geography / historic discipline applied (per CITY-FACTS)

- Passaic River = Newark's **eastern** boundary draining to Newark Bay (Rule 4) — NOT conflated with the Hackensack.
- EWR airport NOT claimed "entirely in Newark" — omitted the airport-location claim entirely; only used as the NOAA reference station "Newark Liberty (EWR)".
- COA asserted **only** for James Street Commons + Lincoln Park (CONFIRMED local-designated, Ch. 41:10). Forest Hill / Roseville / Weequahic described by housing stock only — **no COA asserted** there (INFERRED-local, hedged out).
- UHI = EPA-attributed + QUALITATIVE only; **no** "10–15°F above suburbs", surface-temp deltas, or "80 mph downtown wind tunnel" (all current-page fabs purged).
- Vailsburg = Newark West Ward neighborhood (correct); described as early/mid-20th-c. (NOT the implausible "1945–1947" window).

---

## projectSpotlights = representative TYPES (no fabricated specifics)

1. **Ironbound Brownstone Flat-Roof Replacement** (residential) — EPDM/TPO membrane + parapet/party-wall counter-flashing. No address, date, count, or duration.
2. **Forest Hill Slate and Metal Restoration** (residential) — tile-by-tile slate, flashing, valleys. No count of tiles, no "12-week", no completed-job claim.
3. **Ferry Street Low-Slope Commercial Membrane Replacement** (commercial) — EPDM/TPO/mod-bit + permit via Newark Engineering Building Division. No client, no Gateway Center / Military Park partnership.

All 3 framed present-tense as WORK NQR handles; zero fabricated outcome/client/sponsorship.

---

## Self-audit checklist (machine-verified via tsx + grep)

- [x] **CityContentSchema Zod parse: PASS** (validated with reconstructed schema in tsx).
- [x] **Answer-first first strings ≤40 words**: directAnswer 35w, overview[0] 30w, residential[0] 34w, commercial[0] 28w, weatherChallenges[0] 28w. Each faqs[].answer first sentence ≤40w (max 39w).
- [x] **`**` ONLY in directAnswer** (grep confirmed single hit, line 5). Every other field renders raw (CityTemplate only parses rich text in CityHero).
- [x] **Zero modality in declaratives** (will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could) outside `faqs[].question`. FAQ questions exempt: "Do you need a permit…", "Should you repair or replace…".
- [x] **Every hard number named-sourced** — see source table above; no bare digit without a named authority. Pg/wind HEDGED ("near", "for typical buildings") per CITY-FACTS §3.
- [x] **Counted plurals match lists**: "3 main stressors" → 3 items; "4 stressors" → 4 items.
- [x] **projectSpotlights = representative TYPES** — no street address, date, count, duration, outcome, client, or sponsorship.
- [x] **pricing attributed in note** (HomeAdvisor + Modernize); numeric range strings render in cards without inline attribution by design. No financing / "0%" / invented rate.
- [x] **No de-fab literals** (24/7, same-day, GAF Certified, Master Elite, 0% financing, 500+, N+ years/projects, golden pledge, VELUX, [VERIFY]/[UNVERIFIED]) anywhere incl. metaTitle/metaDescription.
- [x] **No fabricated completed-project / client / partnership / sponsorship / certification / warranty-term claims** — all current-page fabs (Ferry Street re-roofs, Gateway Center / Military Park partnerships, zip-code completion claims, slate/tile counts, "engineered for these conditions") purged.
- [x] **No outbound links / URLs in prose** (grep CLEAN).
- [x] **Historic claims only where LOCAL designation confirmed** — COA asserted only for James Street Commons + Lincoln Park (Ch. 41:10); NPS Register-listing caveat included.
- [x] **credentialsHighlight EXACT** = `['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local']`.
- [x] **metaTitle ≤70** (46 chars) / **metaDescription ≤160** (154 chars).
- [x] **No hype words** (best/leading/trusted/premier/top-rated/proven/world-class) in declaratives — only "best" remains inside one FAQ question (exempt).
- [x] **No entity-pronoun stand-ins** (it/they/them/there) — grep CLEAN after fixes ("causes it" → "causes the damage"; "flat roofs there" → "flat roofs in the Ironbound").
- [x] **Primary n-gram repeated** — "roofing in Newark" / "Newark" leads directAnswer + overview[0] and recurs through the closing whyChoose section.
