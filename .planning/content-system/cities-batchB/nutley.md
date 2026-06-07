# Nutley (cityId: nutley) — Batch B first-suburbs draft map

Full fabrication-purge + answer-first rewrite. Entry #3 of 5 in the first-suburbs archetype file.
Snippet: `nutley.snippet.ts` (drop-in array element). Schema-validated against `CityContentSchema` (runtime Zod parse, PASS).

## Rendered-heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Nutley?" | `directAnswer` (39 words, bold: Nutley / Essex County / asphalt, slate, metal, and flat membrane roofs) |
| H2 "What Roofing Services Are Available in Nutley?" | shared services grid — no copy written |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead = asphalt + slate/metal; bodies develop asphalt → slate/metal) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead = EPDM/TPO/mod-bit on Franklin Ave + ON3; bodies develop membranes → drainage → 25% permit) |
| H2 "What Roofing Problems Are Common in Nutley?" | `overview[]` ([0] answers the PROBLEMS question = 3 stressors; body develops tree-debris → moss → ice dams → macro close) |
| subheading span | `weatherChallenges.heading` = "How Does Nutley Weather Affect Your Roof?" |
| (weather body) | `weatherChallenges.content[]` ([0] = 4 stressors; body develops snow/freeze-thaw → nor'easter/summer storms) |
| H2 "Which Neighborhoods Do We Serve in Nutley?" | `neighborhoods[]` (6 verified; RAW render, NO bold) |
| H2 "What Roofing Materials Work Best…?" | shared component — no copy |
| H2 "What Should You Know About Roofing Permits…?" | shared component — no copy |
| H2 "How Much Does Roofing Cost in Nutley?" | `pricing{averageRepair, averageReplacement, note}` (attribution in note; NO bold) |
| H2 "What Roofing Projects Do We Handle in Nutley?" | `projectSpotlights[]` (3 representative TYPES; RAW, NO bold) |
| H2 "What Questions Do Nutley Property Owners Ask About Roofing?" | `faqs[]` (7; answer first sentence ≤40w, bold topic in sentence 1) |
| H2 "Why Should You Choose Our Roofing Company in Nutley?" | `whyChoose.reasons[]` (5 de-fabbed; RAW, NO bold) |
| "Where Can You Find Us…" | shared components — no copy |

## Named sources used + the exact figure each is attributed to

| Figure / claim | Named source (in-text) |
|---|---|
| 30,143 residents; ~3.4 sq mi land; 60.5% owner-occupied; 30.1% units in multi-unit structures | the U.S. Census Bureau |
| ~31.5 in/yr snow; nor'easters Oct–April; ~25–30 thunderstorms/yr; 32°F crossings | NOAA 1991–2020 normals at Newark Liberty (EWR) |
| ~110–115 mph ASCE 7-16 design wind; ground snow load near 25 psf (both HEDGED "near") | ASCE 7-16 as adopted by the NJ Uniform Construction Code |
| Architectural asphalt 30 yr; 3-tab 20 yr; slate 60–150 yr; metal 40–80 yr; EPDM 15–25 yr; TPO 7–20 yr; mod-bit 20 yr | the InterNACHI life-expectancy chart |
| ~90–95% of leaks at flashing, 5–10% at field | an industry estimate attributed to the NRCA |
| ¼ in/ft min drainage slope; ponding >48 hr = defect | the NRCA and ARMA |
| Detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule | N.J.A.C. 5:23-2.7 / the NJ Uniform Construction Code |
| Ice barrier eave-to-24-in-inside-wall-line | the IRC R905.1.2 provision |
| Ice-dam mechanism (attic heat → melt → refreeze at eave) | University of Minnesota Extension |
| Replacement $10,000–$25,000; leak repair $400–$1,000; NJ ~10–40% above national | HomeAdvisor and Modernize / HomeGuide |
| Wind & hail = largest claim type at 2.8% of insured homes/yr | the Insurance Information Institute |
| Twice-per-year (spring/fall) + post-storm inspection cadence | the NRCA |
| Nine public parks / heavily tree-lined (canopy stressor, qualitative) | the Realty Executives Nutley guide |
| Local COA: Chapter 410, Historic District of the Third River and Environs; Nutley Historic Preservation Committee | (named in-text; per N.J.S.A. 40:55D-107 framework) |
| Register listing alone = no private-reroof restriction | the National Park Service |
| Code-enforcement office = Township of Nutley Code Enforcement Department | (named in-text; no Construction Official named) |

## Self-audit checklist

- [x] **Schema** — runtime Zod parse PASS; counts: overview 5, residential 3, commercial 3, weather 3, neighborhoods 6, spotlights 3, faqs 7, whyChoose 5. metaTitle 46 ≤70; metaDescription 154 ≤160. credentialsHighlight exact = ['NJ HIC Licensed','Fully Insured & Bonded','Family-Owned & Local'].
- [x] **Answer-first ≤40w** — directAnswer 39; overview[0] 35; residential[0] 30; commercial[0] 33; weather[0] 28; every faq answer sentence-1 ≤40 (max 35).
- [x] **Bold discipline** — bold only in directAnswer + the 4 answer-first first-strings + each FAQ-answer sentence 1. Body-paragraph lead-ins in overview/residential/commercial/weather DO carry bold (ProseLead-parsed follow-through — matches committed urban-core Newark/East Orange). ZERO stray `**` in neighborhoods/projectSpotlights/whyChoose/pricing/meta (scanned, clean). weather[0] = 4 bold spans count-matched to "4 stressors" (parity with shipped Newark wx0).
- [x] **No modality** in any declarative body field (will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could) — automated scan: 0 hits outside faqs[].question.
- [x] **Every digit named-sourced** — Census 30,143 / 60.5% / 30.1% / 3.4 sq mi (NOT ~35k); climate per NOAA; lifespans per InterNACHI; leak-share per NRCA; cost per HomeAdvisor/Modernize. No invented number.
- [x] **Zero fabrication** — no completed-project/client/sponsorship/certification/warranty-term claims. projectSpotlights are representative TYPES (present-tense scope, no address/date/duration/outcome). No "James O'Malley, PE." No fabricated COA fee/fine/buffer/landmark list. No banned de-fab literals (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+ projects/years) — scan clean.
- [x] **COA framing (§0 Rule 2, Nutley)** — local COA asserted CONDITIONALLY: Chapter 410 (NOT 272), "Historic District of the Third River and Environs"; The Enclosure framed as "very likely within… verify the specific parcel against the Township's official historic-district map"; NPS rule that Register-listing-alone imposes no restriction stated.
- [x] **Geography (§0 Rule 4)** — Third River (Yantacaw) runs THROUGH Nutley (Yantacaw Park); Passaic borders the western edge (not swapped). ON3 described as straddling Nutley AND Clifton (not entirely Nutley).
- [x] **Canopy/flood discipline** — tree canopy QUALITATIVE (nine parks, no %); no flood-zone acreage/percentage/named-street-flood. No city-specific snow/wind/temp number beyond EWR baseline.
- [x] **R35–R38 micro-semantics** — overview develops 3 enumerated stressors in order (debris → moss → ice dams) + macro close; residential walks asphalt (hyponym) ↔ slate/metal (contrast, end-of-life); commercial walks membranes (EPDM/TPO/mod-bit hyponyms) → drainage (meronym) → permit (code). Ice barrier defined by function + contrast vs field underlayment (R38). Each fact stated once in its owning section (R36): demographics only in overview close + whyChoose, permit law only in commercial/FAQ/permits, lifespans where the material is introduced. SVO leads with named agent "Newark Quality Roofing" / "Nutley weather loads…" (R37).
