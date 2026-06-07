# East Orange — CityContent Draft Doc

cityId: `east-orange` — entry #2 of 4 in `urbanCoreContent` (urban-core archetype).
Full fabrication-purge + answer-first rewrite. Macro topic: roofing in East Orange, NJ.

## Rendered-heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in East Orange?" | `directAnswer` (≤40w, only **bold** field) |
| H2 "What Roofing Services Are Available…" | services grid (shared component — no content written) |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (first string = answer) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (first string = answer) |
| H2 "What Roofing Problems Are Common in East Orange?" | `overview[]` (first string answers the PROBLEMS question) |
| subheading span | `weatherChallenges.heading` → `weatherChallenges.content[]` |
| H2 "Which Neighborhoods Do We Serve…" | `neighborhoods[]` (6 verified-real names) |
| H2 "What Roofing Materials Work Best…" | shared component — no content written |
| H2 "What Should You Know About Roofing Permits…" | shared component — no content written |
| H2 "How Much Does Roofing Cost in East Orange?" | `pricing{averageRepair, averageReplacement, note}` |
| H2 "What Roofing Projects Do We Handle…" | `projectSpotlights[]` (3 representative TYPES) |
| H2 "What Questions Do … Property Owners Ask…" | `faqs[]` (7, answer-first, no **bold**) |
| H2 "Why Should You Choose…" | `whyChoose.reasons[]` (5 de-fabbed value props) |
| "Where Can You Find Us…" / "Where Else…" | shared components — no content written |

`residential.heading`, `commercial.heading`, `whyChoose.heading` are legacy/not-rendered but schema-required → set to short clean labels.

## Named sources used + exact figure each is attributed to

| Figure | Named source (in-text) |
|---|---|
| 87.6% units in multi-unit structures; 31.0% owner-occupied | U.S. Census Bureau |
| ~90–95% of leaks at flashing; 5–10% at field shingle; ponding >48 hr = defect; ¼-in/ft drainage | the NRCA |
| Detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule / 12-month; 5:23-2.7 | the NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 |
| Architectural asphalt ~30 yr; 3-tab ~20 yr; EPDM 15–25; TPO 7–20; modified bitumen 20 | the InterNACHI life-expectancy chart |
| Wind & hail = largest claim type at 2.8% of insured homes/yr | the Insurance Information Institute |
| ~31.5 in/yr snow; 25–30 thunderstorms/yr; nor'easters Oct–April | NOAA (Newark Liberty normals) |
| UHI 1–7°F daytime / 2–5°F nighttime; reflective/green roofs lower surface temp | the U.S. EPA |
| Replacement $10,000–$25,000; leak repair $400–$1,000 | HomeAdvisor and Modernize / HomeAdvisor |
| East Orange Building Division, Dept of Property Maintenance, 44 City Hall Plaza | CITY-FACTS (City of East Orange .gov) |
| No local HPC/ordinance → no COA; 2006 Master Plan documents none exists | City of East Orange 2006 Historic Preservation Element |
| Register listing alone places no federal restriction on private owner | the National Park Service |
| Ice-and-water shield at eaves/valleys | the IRC |

## Self-audit checklist

- [x] Answer-first: every first string of overview / residential.content / commercial.content / weatherChallenges.content is a ≤40-word definitive answer (36 / 30 / 30 / 28 words). directAnswer = 27 words. Each FAQ answer opens with a ≤40-word definitive sentence (max 36).
- [x] overview[0] answers the PROBLEMS question (3 named patterns: tree debris, moss, ice dams), not a city description.
- [x] ** ONLY in directAnswer (grep confirms a single `**…**` span; bold count = 2 = one pair).
- [x] Zero modality in declaratives: grep for will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could returns NONE outside FAQ questions. (FAQ questions "Do you need…", "Does a historic district require…", "How long does…" are exempt heading-class.)
- [x] Every digit named-sourced (table above); no invented number; UHI kept QUALITATIVE + EPA-attributed (no city-specific degree delta).
- [x] Counted plural introduced with its integer: overview[0] "3 patterns".
- [x] projectSpotlights = 3 representative TYPES (Multi-Family Asphalt Re-Roof, Low-Slope Commercial Membrane Replacement, Storm and Ice-Dam Repair) — no street address, no date, no fabricated count/duration/outcome/client; present-tense scope; details are materials/methods/code bullets.
- [x] pricing attributed in note (HomeAdvisor + Modernize); numeric range strings render bare in cards; no financing / 0% / invented rate.
- [x] No de-fab literals anywhere incl. metaTitle/metaDescription (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+ projects/years).
- [x] No fabricated completed-project / client / portfolio / partnership / sponsorship / community-roots / certification / warranty-term claims. Current page's medical-corridor (CareWell) and project fabrications PURGED.
- [x] Historic claim = NO COA, because CITY-FACTS §0 Rule 2 confirms East Orange has NO local designation; framed qualitatively + NPS Register rule. No COA asserted.
- [x] No outbound links/URLs in prose (grep NONE).
- [x] credentialsHighlight EXACT: ['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local'].
- [x] metaTitle 48 chars (≤70); metaDescription 159 chars (≤160).
- [x] Capability claims only ("Newark Quality Roofing repairs/replaces/services…") — present-tense WORK, not fabricated jobs.
- [x] Primary n-gram "roofing in East Orange" / "East Orange" repeated in opening answer (overview[0], directAnswer) and closing (whyChoose, faqs).
- [x] Verified neighborhoods only (Brick Church, Ampere, Elmwood Park, Doddtown, Presidential Estates, Greenwood — all from CITY-FACTS). Geography facts honored: flat Watsessing plain, Main St = MLK Jr. Blvd corridor (named "Main Street and Central Avenue"), Ampere station closed 1991/demolished.
