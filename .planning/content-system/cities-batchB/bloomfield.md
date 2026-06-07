# Bloomfield — CityContent Draft Map (first-suburbs Batch B, entry #1 of 5)

Macro topic: **roofing in Bloomfield, NJ** (Township of Bloomfield), inner-ring Essex County
suburb, ~53,105 residents in ~5.34 sq mi land (2020 Census). Defining stock: pre-war
Colonials/Dutch Colonials/Capes + a slight majority of units in 2+ unit structures
(two-family + garden apartments); ~65% of stock built before 1950. Full fabrication-purge
rewrite of the prior pronoun-heavy / anecdote-laden page.

## Rendered heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Bloomfield?" | `directAnswer` (≤40w, bold: Bloomfield / Essex County / material tracks) |
| H2 "What Roofing Services Are Available in Bloomfield?" | shared services GRID — nothing written |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead + 2 body paras) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead + 2 body paras) |
| H2 "What Roofing Problems Are Common in Bloomfield?" | `overview[]` ([0] answers PROBLEMS: 3 stressors; body develops them in order) |
| subheading span | `weatherChallenges.heading` → `weatherChallenges.content[]` (4 climate stressors) |
| H2 "Which Neighborhoods Do We Serve in Bloomfield?" | `neighborhoods[]` (5 verified, raw, no bold) |
| H2 "What Roofing Materials Work Best…?" | shared component — nothing written |
| H2 "What Should You Know About Roofing Permits…?" | shared component — nothing written |
| H2 "How Much Does Roofing Cost in Bloomfield?" | `pricing{averageRepair, averageReplacement, note}` |
| H2 "What Roofing Projects Do We Handle in Bloomfield?" | `projectSpotlights[]` (3 representative TYPES, raw, no bold) |
| H2 "What Questions Do Bloomfield Property Owners Ask…?" | `faqs[]` (7, answer-first sentence bold) |
| H2 "Why Should You Choose Our Roofing Company…?" | `whyChoose.reasons[]` (5, de-fabbed, raw, no bold) |
| "Where Can You Find Us Near Bloomfield?" + "…Else Near" | shared components — nothing written |

## Named sources → exact figure attributed

- **U.S. Census Bureau / Bloomfield Housing Element & Fair Share Plan** → "about 65% of
  Bloomfield's housing stock predates 1950"; "a slight majority of units in 2+ unit
  structures" (qualitative, per §5 + Bloomfield demographics table — no fabricated pre-1940 %).
- **InterNACHI life-expectancy chart** → architectural asphalt 30 yrs / 3-tab 20 yrs;
  natural slate 60–150 yrs; metal 40–80 yrs; EPDM 15–25 yrs; TPO 7–20 yrs; modified bitumen 20 yrs.
- **NRCA (trade-consensus)** → "roughly 90–95% of roof leaks originate at flashing and only
  5–10% at the open shingle field."
- **NRCA and ARMA** → low-slope roof ≥ ¼ in/ft slope to drain; ponding > 48 hrs = a defect.
- **NOAA 1991–2020 normals at Newark Liberty (EWR)** → ~31.5 in/yr snow; crosses 32°F
  repeatedly through winter; ~25–30 thunderstorms/yr; nor'easters Oct–April.
- **ASCE 7-16 as adopted by the NJ Uniform Construction Code** → ground snow load near Pg 25
  psf (HEDGED); basic design wind speed ~110–115 mph (HEDGED).
- **NJ Uniform Construction Code / N.J.A.C. 5:23-2.7** → detached 1–2 family reroof = ordinary
  maintenance, no permit; commercial/multi-family/attached > 25% of roof area in 12 mo = permit.
- **IRC R905.1.2** → ice barrier from eave to ≥ 24 in inside the exterior wall line.
- **Bloomfield Township Code Chapter 302 + Historic District Property List** → HPC application
  required for exterior work on a LISTED parcel before a permit issues (conditional, local).
- **National Park Service** → National Register listing alone places no federal restriction on
  a private owner (Bloomfield Green NR district ≠ the local regulated list).
- **Insurance Information Institute (Triple-I)** → wind & hail = largest homeowners claim type
  at 2.8% of insured homes/year.
- **HomeAdvisor and Modernize** → NJ replacement $10,000–$25,000; NJ leak repair $400–$1,000.

## R35–R38 development notes

- **overview** lead enumerates 3 stressors → body covers them IN ORDER (tree debris → aging
  pre-war covering → freeze-thaw flashing), count-matched. Lexical relations: tree canopy →
  hyponyms oak/maple/sycamore; pre-war stock → hyponyms Colonials/Dutch Colonials/Capes;
  flashing as meronym of the roof; antonym new↔end-of-life.
- **residential** lead = 2 material tracks (asphalt / EPDM-TPO) → body develops each: asphalt
  hyponyms + ice-barrier meronym (R38 function+differentiator), then membrane hyponyms.
- **commercial** lead = membrane systems → body develops EPDM/TPO/mod-bit (R38: mod-bit defined
  by function + contrast vs single-ply) then low-slope drainage meronym.
- **weatherChallenges** lead = 4 stressors → body covers snow → freeze-thaw → nor'easter wind
  → summer storms in order, each with its named NOAA/ASCE figure stated ONCE (R36).
- **R37 SVO**: every lead + FAQ answer opens with a named agent (Newark Quality Roofing /
  Bloomfield weather / Bloomfield homes / a roof replacement) — no agentless passive.

## COA framing (Bloomfield §0 Rule 2 gate)

CONDITIONAL LOCAL COA. Chapter 302 HPC application applies ONLY to parcels on the Township's
"Historic District Property List." Framed as: "Exterior roofing work on a parcel listed on the
Township of Bloomfield's Historic District Property List requires a Historic Preservation
Commission application under Chapter 302." Did NOT assert a whole neighborhood is regulated; did
NOT conflate the National Register Bloomfield Green district with the local list; NPS no-private-
restriction rule stated. Watercourses kept separate: Third River near the town center; Watsessing
Park = Second River + Toney's Brook (NOT Third River).

## Self-audit checklist

- [x] Modality grep (will/should/need to/needs to/have to/has to/must/ought to + might/may/would/could)
  outside `faqs[].question` → none.
- [x] `**` only in directAnswer + answer-first content-array strings (lead + developed body, ProseLead-parsed)
  + FAQ first sentences. Zero `**` in neighborhoods / projectSpotlights / whyChoose / pricing / meta.
- [x] Every digit named-sourced: 65% (Housing Element), lifespans (InterNACHI), 90–95% (NRCA),
  31.5 in / 25–30 storms / 32°F (NOAA EWR), Pg 25 psf / 110–115 mph (ASCE 7-16, HEDGED), 25% rule
  (N.J.A.C. 5:23-2.7), 24 in (IRC R905.1.2), 2.8% (Triple-I), $10,000–$25,000 / $400–$1,000 (HomeAdvisor/Modernize).
- [x] Zero fabricated completed-project/client/sponsorship/certification/warranty-term claims;
  projectSpotlights = representative TYPES (present-tense scope), no street/date/duration/outcome.
- [x] COA framing matches Bloomfield §0 Rule 2 exactly (conditional local Ch. 302 / Property List).
- [x] Each section develops its lead via lexical relations (R35) and states each fact once (R36).
- [x] metaTitle 50 chars (≤70); metaDescription 158 chars (≤160).
- [x] credentialsHighlight = ['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local'].
- [x] No de-fab literals (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+).
- [x] Counts: overview 4 (lead+3), residential 3, commercial 3, weatherChallenges 3, neighborhoods 5,
  projectSpotlights 3, faqs 7, whyChoose 5 — all within schema min/max.
- [x] Watsessing Park watercourses = Second River + Toney's Brook (NOT Third River); Third River near center.
