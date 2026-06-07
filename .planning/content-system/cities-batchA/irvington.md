# Irvington (cityId: irvington) — City Content Draft Doc

Urban-core archetype, entry #4 of 4. Full fabrication-purge + answer-first rewrite of the existing (heavily fabricated) Irvington page. Macro topic: **roofing in Irvington, NJ** (Township of Irvington, Essex County).

## Rendered-heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1: "Who Provides Roofing Services in Irvington?" | `directAnswer` (≤40w, ONLY **bold** field — 34w) |
| H2: "What Roofing Services Are Available in Irvington?" | services GRID (shared component) — nothing written |
| H2: "What Residential Roofing Services Do We Provide?" | `residential.content[]` (answer = [0], 28w) |
| H2: "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (answer = [0], 33w) |
| H2: "What Roofing Problems Are Common in Irvington?" | `overview[]` ([0] answers the PROBLEMS question, 34w) |
| subheading span | `weatherChallenges.heading` + `.content[]` (answer = [0], 36w) |
| H2: "Which Neighborhoods Do We Serve in Irvington?" | `neighborhoods[]` (7 verified-real names) |
| H2: "What Roofing Materials Work Best…?" | shared component — nothing written |
| H2: "What Should You Know About Roofing Permits…?" | shared component — nothing written |
| H2: "How Much Does Roofing Cost in Irvington?" | `pricing{averageRepair, averageReplacement, note}` |
| H2: "What Roofing Projects Do We Handle in Irvington?" | `projectSpotlights[]` (3 representative TYPES) |
| H2: "What Questions Do Irvington Property Owners Ask…?" | `faqs[]` (7, answer-first ≤40w, no **bold**) |
| H2: "Why Should You Choose Our Roofing Company…?" | `whyChoose.reasons[]` (5, de-fabbed) |
| "Where Can You Find Us Near Irvington?" | shared components — nothing written |

## Named sources used + the exact figure each is attributed to

| Named source | Figure / fact attributed in-text |
|---|---|
| U.S. Census Bureau | 61,176 residents; roughly 2.9 sq mi; one of NJ's most densely settled municipalities (2020 Decennial) |
| InterNACHI (life-expectancy chart) | architectural asphalt 30 yrs; 3-tab 20 yrs; EPDM 15-25 yrs; TPO 7-20 yrs; modified bitumen 20 yrs |
| NRCA (industry estimate) | ~90-95% of leaks at flashing, ~5-10% at the field; inspect twice/yr + after a major storm |
| NOAA (1991-2020 normals, EWR) | ~31.5 in snow/yr; nor'easters Oct-April; ~25-30 thunderstorms/yr |
| University of Minnesota Extension | ice-dam mechanism: attic heat escape → snowmelt → refreeze at eave below 32°F → backup |
| U.S. EPA | heat island raises daytime urban air temps; reflective roofs lower surface temp (QUALITATIVE, no city delta) |
| 2024 roofing-market data | asphalt ~73% of U.S. residential roofs |
| NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 | detached 1-2-family reroof = ordinary maintenance, no permit; 25% rule on commercial/multi-family/attached |
| International Residential Code (IRC R905.1.2) | ice barrier from eave to ≥24 in inside the exterior wall line |
| NRCA and ARMA | flat roof needs ≥¼ in/ft slope; ponding >48 hrs = defect |
| HomeAdvisor and Modernize | NJ replacement $10,000-$25,000; leak repair $400-$1,000; flashing reseal $200-$500; 2025 national avg ~$10,000-$11,000; NJ +10-40% |
| ARMA | proper maintenance extends asphalt-shingle life ~25-30% |
| Contractors' Registration Act / N.J.S.A. 56:8-142 | CGL minimum $500,000 per occurrence |
| NJ Division of Consumer Affairs | NJ Home Improvement Contractor registration requirement |
| National Park Service | Register listing alone places no restriction on a private owner; Irvington carries NO NRHP listings |

## City-specific grounding (CITY-FACTS §0 + Irvington section)

- **Historic:** Irvington = NO local HPC, NO local historic district, NO NRHP listings → NO Certificate-of-Appropriateness step. Stated explicitly in the historic FAQ; no COA requirement invented anywhere.
- **Construction office:** "Township of Irvington's construction-code office" (generic safe phrasing per §0 Rule 1 — no director, no fee).
- **Geography:** Springfield Ave + Chancellor Ave commercial corridors (flat roofs); Route 78 light-industrial along the SE edge (I-78 "very briefly" at Exit 54 — not bisecting); Olympic Park presented as HISTORY (amusement park 1887-1965, closed) → origin of the neighborhood NAME. Union Ave framed as "near the Newark border at Vailsburg" (Vailsburg is NEWARK, not Irvington).
- **Demographics framed QUALITATIVELY** where unverified: "majority-renter, rental- and multi-family-heavy"; "older, predominantly early-20th-century stock" — no renter %, no 5+-unit %, no pre-1940 % published.
- **Climate:** shared Newark/EWR baseline only; Pg/wind hedged values NOT published (not asserted as Essex-confirmed); UHI EPA-attributed + qualitative, no city delta.

## projectSpotlights = representative TYPES (no fabricated specifics)

1. **Early-20th-Century Asphalt Re-Roof** (residential) — type name only, present-tense scope, no address/date/count.
2. **2-3-Family Rental Roof Replacement** (residential) — grounded in Irvington's real rental/multi-family stock.
3. **Springfield Avenue Low-Slope Membrane Replacement** (commercial) — real corridor + Route 78 light-industrial.
All details bullets are materials/methods/code only — zero fabricated counts, durations, warranty terms, or completed-job claims.

## Self-audit checklist

- [x] **Answer-first first-strings ≤40 words:** directAnswer 34, overview[0] 34, residential[0] 28, commercial[0] 33, weatherChallenges[0] 36. Each FAQ answer opens with a ≤40w definitive answer.
- [x] **`**` ONLY in directAnswer:** grep confirms a single `**`-bearing line (line 5 = directAnswer). All four answer-first first-strings render RAW with no `**`.
- [x] **Zero modality in declaratives:** grep of will/shall/should/need to/needs to/have to/has to/must/ought to/might/may/would/could returns only the one FAQ *question* ("How often should…") — exempt. All body fields use indicative present.
- [x] **Every number named-sourced:** 61,176 + 2.9 sq mi (U.S. Census Bureau); 90-95%/5-10% (NRCA estimate); 31.5 in / 25-30 t-storms (NOAA); 20/30/15-25/7-20 yr (InterNACHI); 73% (2024 market data); 24 in ice barrier (IRC R905.1.2); ¼ in/ft + 48 hr (NRCA/ARMA); $10,000-$25,000 / $400-$1,000 / $200-$500 / 10-40% (HomeAdvisor + Modernize); 25-30% maintenance (ARMA); $500,000 (N.J.S.A. 56:8-142); 25% rule (N.J.A.C. 5:23-2.7).
- [x] **projectSpotlights are representative TYPES** — no fabricated job, count, duration, outcome, client, or warranty term.
- [x] **Pricing attributed in note** — HomeAdvisor and Modernize named in `note`; numeric range strings render in cards without inline attribution (by design).
- [x] **No de-fab literals** — grep clean for 24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, 500+, N+ years/projects, fabricated ratings/phone/address, [VERIFY]/[UNVERIFIED].
- [x] **No fabricated project/client/sponsorship/certification/tenure claims** — purged the prior page's Nestor Terrace, Chancellor portfolio, Habitat/investor relationships, project counts, and warranty tiers.
- [x] **No outbound links / URLs in prose** — grep clean (the `.md` source table above is the writer's reference, not on-page copy).
- [x] **credentialsHighlight exact:** `['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local']`.
- [x] **Historic claims only where a LOCAL designation is confirmed** — Irvington has none, so the historic FAQ explicitly states no COA step; Register-listing-≠-restriction framed per the NPS.
- [x] **metaTitle ≤70 (49 chars), metaDescription ≤160 (159 chars).**
- [x] **Macro n-gram repeated** — "roofing in Irvington" in directAnswer/heroHeadline and recurring through overview, residential, commercial, neighborhoods, FAQs, whyChoose, and meta.
- [x] **Counted plurals carry exact integers** — "3 stressors" (overview[0]), "3 weather stressors" (weatherChallenges[0]).
- [x] **Schema field counts validated** by parse-test: overview 3, residential.content 2, commercial.content 2, weatherChallenges.content 2, neighborhoods 7, projectSpotlights 3 (details 4/4/4), faqs 7, whyChoose.reasons 5; all required fields present; snippet parses as one array element.
