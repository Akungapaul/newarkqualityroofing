# Glen Ridge — CityContent Draft Doc (west-essex #3 of 5)

cityId: `glen-ridge` · archetype: west-essex · status: answer-first fabrication-purge rewrite

## Rendered heading → field map

| Rendered H-tag (CityTemplate) | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Glen Ridge?" | `directAnswer` (≤40w, bold: Glen Ridge / Essex County / asphalt, slate, metal, and flat membrane roofs) |
| H2 "What Roofing Services Are Available…" | shared services grid — no content written |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead bolds 2 tracks: natural slate, metal, and copper / asphalt shingles) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead bolds low-slope roofs / EPDM, TPO, and modified-bitumen membranes) |
| H2 "What Roofing Problems Are Common in Glen Ridge?" | `overview[]` (lead = answer to PROBLEMS; bolds 3 stressors) |
| subheading span | `weatherChallenges.heading` → `weatherChallenges.content[]` (bolds snow / freeze-thaw / nor'easter wind / summer storms) |
| H2 "Which Neighborhoods Do We Serve…?" | `neighborhoods[]` (6, RAW, no bold) |
| H2 "What Roofing Materials Work Best…?" | shared component — no content written |
| H2 "What Should You Know About Roofing Permits…?" | shared component — no content written |
| H2 "How Much Does Roofing Cost in Glen Ridge?" | `pricing{averageRepair, averageReplacement, note}` (RAW, no bold) |
| H2 "What Roofing Projects Do We Handle…?" | `projectSpotlights[]` (3 representative TYPES, RAW, no bold) |
| H2 "What Questions Do Glen Ridge Property Owners Ask…?" | `faqs[]` (7; answer sentence-1 ≤40w, bold topic in sentence 1) |
| H2 "Why Should You Choose Our Roofing Company…?" | `whyChoose.reasons[]` (5, RAW, no bold) |
| "Where Can You Find Us…" / "Where Else…" | shared components — no content written |

## Macro angle

Roofing in Glen Ridge, NJ — a small (~1.3 sq mi), fully built-out inner Essex County **lowland** borough; ~93% owner-occupied; predominantly pre-WWII Victorian / Edwardian / Colonial Revival / Tudor / Dutch Colonial single-family stock (~1890s–1930s) on tree-lined streets; slate + complex multi-gable rooflines on the high-style houses; minimal commercial footprint (Bloomfield Avenue station edge). KEY stressor = mature street-tree canopy (NOT ridge elevation, NOT reservation adjacency).

## Named sources → exact figure attributed

| Named source | Figure / fact attributed in-text |
|---|---|
| U.S. Census Bureau (via Glen Ridge §5/§demographics) | ~93% owner-occupied; pre-WWII fabric (qualitative); population/units NOT printed as a stat in prose (housing-age framed qualitatively) — **pop 7,802 / units 2,592 reserved if used; not quantified in this draft** |
| Glen Ridge Historical Society | predominantly pre-WWII Victorian/Edwardian/Colonial Revival/Tudor/Dutch Colonial fabric of ~1890s–1930s homes |
| InterNACHI life-expectancy chart | natural slate 60–150 yr; metal 40–80 yr; copper 70+ yr; architectural asphalt 30 yr / 3-tab 20 yr; EPDM 15–25 yr; TPO 7–20 yr; modified bitumen 20 yr |
| NRCA (industry estimate) | ~90–95% of leaks originate at flashing, ~5–10% at the open shingle field |
| NOAA 1991–2020 normals (Newark Liberty / EWR) | ~31.5 in/yr snow; repeated 32°F crossings; ~25–30 thunderstorms/yr |
| ASCE 7-16 (as adopted by NJ UCC) | basic design wind ~110–115 mph; ground snow load ~Pg 25 psf (both hedged "near") |
| NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 | detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule for commercial/multi-family/attached |
| IRC R905.1.2 | ice barrier from eave to ≥24 in inside the exterior wall line |
| Borough of Glen Ridge (HPC / Building Dept) | Glen Ridge Historic District covers over 90% of the borough; Building Dept at 825 Bloomfield Avenue; Ch. 15.32 Historic Preservation ordinance; COA scope (roof replacement, material change, dormers, roof-mounted equipment) |
| National Park Service | National Register listing alone places no federal restriction on a private property owner (1982 NRHP listing ≠ the binding gate) |
| Secretary of the Interior's Standards / Glen Ridge Historic Design Guidelines | slate treated as historic fabric, repaired/replaced in kind |
| NPS Preservation Brief 29 | non-ferrous copper/stainless slater's nails (project-spotlight detail) |
| NRCA and ARMA | low-slope ≥¼ in/ft slope to drain; ponding >48 h = defect |
| HomeAdvisor and Modernize | NJ roof replacement $10,000–$25,000; leak repair $400–$1,000 |
| Insurance Information Institute | wind+hail = largest homeowners claim type, 2.8% of insured homes/yr |

## COA framing (matches §0 Rule 1 Glen Ridge gate EXACTLY)

- BINDING LOCAL COA via **Chapter 15.32** (HPC est. 1987) — the "Register-only?" worry REFUTED.
- COA required for exterior alterations incl. roof replacement, material change, dormers, visible roof-mounted equipment on regulated/contributing properties.
- District covers **over 90% of the borough** (NOT literally 100%) → "most homes fall inside the regulated district."
- Framed as a LOCAL-ordinance matter, NOT the 1982 NRHP listing (NPS: listing alone = no private restriction).
- Advise confirming a specific parcel with the HPC / Building Department.
- Detached 1–2 family reroof still = no-permit ordinary maintenance (N.J.A.C. 5:23-2.7); the COA is a SEPARATE local approval.

## Geography discipline (matches §0 Rule 3)

- Glen Ridge borders NO large Essex County reservation — NONE asserted. ✓
- Inner LOWLAND borough — NO ridge-elevation/wind/snow differential asserted; key stressor = mature canopy. ✓
- Toney's Brook / The Glen = localized drainage, qualitative only. ✓
- ONE rail station (Glen Ridge) — Bay Street / Watchung Ave NOT attributed. ✓
- Gas streetlights — borough color, not a roofing/COA claim (omitted from roofing prose; used as character context only via neighborhoods if needed — not asserted as a numeric count).

## Self-audit checklist

- [x] Modality grep (will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could) outside faqs[].question → 0 hits.
- [x] `**` only in directAnswer + answer-first first-strings + their body paragraphs + FAQ-answer first sentences. 0 leaks in neighborhoods/projectSpotlights/whyChoose/pricing/meta (verified by line-range grep + schema parse).
- [x] R3 STRICT: each content-array body paragraph opens by re-bolding a lead topic, in order. Overview 3→3 (mature street-tree debris / aging slate and complex rooflines / flashing failure); Residential 2→2; Commercial low-slope roofs + membranes → EPDM / low-slope roof (matches Bloomfield gold-standard pattern); Weather 4 leads → 2 bodies folding in order (matches gold standard).
- [x] Every digit attributed to a named source from the packs. NO Census population/units printed as a hard prose stat (framed qualitatively to avoid an unattributed bare figure) — housing-age + owner-occupancy framed qualitatively per pack.
- [x] Zero fabricated completed-project/client/sponsorship/certification/warranty-term/savings/financing claims. projectSpotlights = representative TYPES (Historic Slate & Copper Restoration; Colonial Revival Asphalt Re-Roof; Station-Edge Low-Slope Membrane Replacement).
- [x] COA framing matches §0 Glen Ridge gate (binding local Ch. 15.32, NOT National Register; over 90%, not 100%).
- [x] Reservation adjacency = NONE (correct for Glen Ridge).
- [x] Each section develops its lead via lexical relations (R35): overview walks the 3 stressors; residential walks slate/metal/copper hyponyms + asphalt; commercial walks membrane hyponyms + slope-to-drain meronym; weather walks snow→freeze-thaw→wind→storms. Each fact stated once (R36): material lifespans in residential/material answers; COA only in historic/permit + slate residential context; 90–95% flashing share in overview/residential/FAQ as the owning fact.
- [x] SVO answer spans with named agent (R37): "Newark Quality Roofing repairs and replaces…", "Glen Ridge weather loads a roof with…", "Roofing in Glen Ridge faces…".
- [x] Entity-definition completeness (R38): ice barrier defined by function + contrast vs field underlayment; modified bitumen defined as multi-ply asphalt membrane vs single-ply.
- [x] metaTitle 50 ≤70; metaDescription 158 ≤160.
- [x] credentialsHighlight exactly ['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local'].
- [x] pricing ranges = NJ regional ($400–$1,000 / $10,000–$25,000), attribution in note, slate premium stated qualitatively (no city-tier figure, no financing).
- [x] CityContentSchema.safeParse → SCHEMA OK.
