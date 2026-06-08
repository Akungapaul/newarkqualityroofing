# West Orange — CityContent draft map (Cities Batch C, west-essex #1)

cityId: `west-orange` · archetype file: `west-essex` (entry 1 of 5) · status: drafted, schema-validated

Full fabrication-purge + answer-first rewrite. Purged from the prior page: "numerous projects in
Llewellyn Park," "we coordinate with the community association," named-address completed jobs,
"reduce attic temperatures by up to 30 degrees," "reduce heating and cooling costs by 15 to 25 percent,"
"premium discounts of 10 to 28 percent," the "$35,000–$75,000" / "$40,000–$80,000" pricing tiers, and
every fabricated NQR warranty term.

## Rendered heading → field map

| Rendered H-tag | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in West Orange?" | `directAnswer` (40 words, bolds West Orange / Essex County / asphalt-slate-metal-flat-membrane) |
| H2 "What Roofing Services Are Available…" | shared services grid — no field |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead bolds asphalt shingles / natural slate, metal, and copper) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead bolds low-slope roofs / EPDM, TPO, and modified-bitumen membranes) |
| H2 "What Roofing Problems Are Common in West Orange?" | `overview[]` (lead bolds ridge-line wind exposure / reservation-edge tree debris / flashing failure) |
| subheading span | `weatherChallenges.heading` + `.content[]` (lead bolds snow / freeze-thaw cycling / nor'easter wind / summer storms) |
| H2 "Which Neighborhoods Do We Serve…" | `neighborhoods[]` (7, RAW — no bold) |
| H2 "What Roofing Materials Work Best…" | shared component — no field |
| H2 "What Should You Know About Roofing Permits…" | shared component — no field |
| H2 "How Much Does Roofing Cost in West Orange?" | `pricing{averageRepair, averageReplacement, note}` (RAW — no bold) |
| H2 "What Roofing Projects Do We Handle…" | `projectSpotlights[]` (3 representative TYPES, RAW — no bold) |
| H2 "What Questions Do West Orange Property Owners Ask…" | `faqs[]` (7; bold in first sentence only) |
| H2 "Why Should You Choose…" | `whyChoose.reasons[]` (5, RAW — no bold) |

## Named sources used → exact figure attributed

- **InterNACHI** Standard Estimated Life Expectancy Chart — architectural asphalt 30 yr / 3-tab 20 yr;
  natural slate 60–150 yr; metal 40–80 yr; EPDM 15–25 yr; TPO 7–20 yr; modified bitumen 20 yr.
- **Copper Development Association** — a properly installed copper roof has a service life in excess of 100 years.
- **the NRCA** — roughly 90–95% of roof leaks originate at flashing, ~5–10% at the open shingle field
  (framed as an industry estimate attributed to the NRCA).
- **the NRCA and ARMA** — low-slope roof needs ≥ ¼ in/ft slope to drain; ponding > 48 hr counts as a defect.
- **NOAA 1991–2020 normals (Newark Liberty / EWR)** — ~31.5 in/yr snow; crosses 32 °F repeatedly;
  ~25–30 thunderstorms/yr.
- **ASCE 7-16 as adopted by the NJ Uniform Construction Code** — basic design wind ~110–115 mph;
  ground snow load near Pg 25 psf (both kept hedged with "near").
- **the NJ Uniform Construction Code / N.J.A.C. 5:23-2.7** — detached 1–2 family reroof = ordinary
  maintenance, no permit; commercial/multi-family/attached needs a permit over 25% of roof area in 12 months.
- **the IRC R905.1.2 ice-barrier provision** — ice barrier from eave to ≥ 24 in inside the exterior wall line.
- **N.J.S.A. 56:8-142** — $500,000 per-occurrence CGL minimum (whyChoose only).
- **NPS Preservation Brief 29** — non-ferrous copper/stainless slater's nails; replace the roof rather than
  individual repairs once ≥ 20% of slates are broken/cracked/missing/sliding.
- **the National Park Service** — National Register listing alone places no federal restriction on a private owner.
- **Section 25-30 / West Orange Historic Preservation Commission** — Certificate of Appropriateness for the
  township's ~ten locally designated landmarks (Holy Trinity Episcopal Church, the State Diner, the Hedges Block).
- **Essex County Parks** — West Orange contains part of South Mountain Reservation AND part of Eagle Rock Reservation.
- **the Insurance Information Institute** — wind & hail = largest homeowners-claim type, 2.8% of insured homes/yr.
- **HomeAdvisor and Modernize** — NJ roof replacement $10,000–$25,000; leak repair $400–$1,000.
- **NJ roofing guides** — natural slate installed at roughly $10–$30 per square foot (premium-material qualitative note).
- **the New Jersey Real Estate Network** (via CITY-FACTS) — Gregory home values low $400,000s up toward $1M
  (neighborhood color only; RAW field).

## City-specific facts grounded

- Macro: roofing in West Orange, NJ (Township of West Orange), Essex County. Wide stock — capes, ranches,
  Colonials in Pleasantdale/Gregory/Orange-Newark edge up through hillside Tudors and Llewellyn Park estate homes.
- Commercial spine: Main Street / Valley Road / Pleasant Valley Way + Route 280 corridor (low-slope EPDM/TPO/mod-bit).
- Stressors (qualitative): First Watchung ridge-line wind exposure (NO number); reservation-edge + mature
  canopy (South Mountain + Eagle Rock); shared EWR climate.
- Construction office named by FUNCTION: Township of West Orange Building & Construction Code Enforcement
  (no official name printed).
- Neighborhoods (7, all CITY-FACTS-verified): St. Cloud, Gregory, Pleasantdale, Llewellyn Park, Tory Corner,
  Crestmont and Crystal Lake, Main Street / Valley Road commercial spine. NOT used: Redwood, Mont Clair Heights.

## Self-audit checklist

- [x] Modality grep (will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could)
      OUTSIDE faqs[].question → 0 hits.
- [x] `**` only in directAnswer + answer-first first-strings + their body paragraphs + FAQ-answer first
      sentences. 0 `**` in neighborhoods / projectSpotlights / whyChoose / pricing / meta.
- [x] R3 STRICT: each content-array body paragraph opens by re-bolding a lead topic, in order
      (commercial body[1]=EPDM hyponym of the membranes set, body[2]=low-slope roof — the committed
      first-suburbs pattern; weatherChallenges folds 4 leads into 2 bodies, the committed Newark pattern).
- [x] Every digit has a named pack source; no raw Census population/value/income published in prose.
- [x] Zero fabricated completed-project / client / sponsorship / certification / warranty-term / savings /
      financing claims; projectSpotlights are representative TYPES (no address, no date, no outcome/duration).
- [x] COA framing = §0 West Orange gate exactly: ~ten locally designated landmarks under Section 25-30 needing
      a Certificate of Appropriateness; Llewellyn Park = private 1857 deed-of-trust / Committee of Managers,
      NOT a township COA (except an individually designated structure such as the Gate House); NPS
      Register-no-restriction caveat.
- [x] Reservation adjacency = §0: South Mountain Reservation + Eagle Rock Reservation only; NO Mills, NO Hilltop.
- [x] Each section develops its lead via lexical relations (R35) — residential walks asphalt → capes/ranches/
      Colonials and slate/metal/copper → fasteners/flashing/copper valleys; commercial walks membranes →
      EPDM/TPO/mod-bit → seams → slope-to-drain; states each fact once (R36).
- [x] SVO answer spans with named agent (R37); each new entity defined by function + differentiator (R38:
      ice barrier vs field underlayment; modified bitumen vs single-ply).
- [x] metaTitle 51 chars (≤70); metaDescription 159 chars (≤160); credentialsHighlight exact 3-item array.
- [x] directAnswer 40 words; overview lead 40 words; all FAQ first sentences ≤40 words.
- [x] No banned de-fab literals (24/7, same-day, GAF Certified, Master Elite, 0% financing, N+ projects/years,
      top-rated). No forbidden climate numbers (500 ft, 618 ft, 70 mph, 15–20%, 2–4 in).
- [x] Schema-validated against the real `CityContentSchema` via tsx (SCHEMA VALID).
