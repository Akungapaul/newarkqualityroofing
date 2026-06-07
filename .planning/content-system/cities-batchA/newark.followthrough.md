# Newark — Follow-Through Revision Note

Surgical revision of the committed Newark CityContent object. Only the 4 prose bodies
(`overview[]`, `weatherChallenges.content[]`, `residential.content[]`, `commercial.content[]`)
were touched. All other fields copied byte-identical from `urban-core.ts`. No lead was
re-worded (the 4 leads were already correct enumerations); the only mechanical change to a
lead is the `overview` lead now uses a backtick string so `nor'easter` renders unescaped —
same words.

---

## 1. overview[]

- **Lead claim/enumeration:** "3 main stressors: nor'easter wind, freeze-thaw cycling, and
  dense party-wall flashing details on aging stock."
- **Body now develops, in order:**
  1. **Nor'easter wind** — uplift concentrates at edges, rakes, corners (trade wind-damage
     guidance); ASCE 7-16 design wind ~110–115 mph hedged, per the NJ UCC; coastal storms
     Oct–April, per NOAA.
  2. **Freeze-thaw cycling** — ~31.5 in/yr snow + repeated 32°F crossings, per NOAA 1991–2020
     EWR normals; trapped meltwater expands on freezing and fatigues sealant laps + fasteners.
  3. **Party-wall flashing** — ~90–95% of leaks at flashing vs 5–10% field (NRCA estimate);
     Ironbound rowhouses/brownstones share party walls + parapets sealed by one continuous
     flashing line.
- **Counted-plural check:** lead says "3 stressors"; body develops exactly 3 (wind,
  freeze-thaw, flashing), one paragraph each, in lead order. Array = 4 strings (lead + 3),
  within the 3–6 schema range. MATCH.
- **Cut/moved:**
  - **CUT demographics** (the entire "311,549 residents / 24.14 sq mi / quarter pre-1940 /
    24.4% owner-occupied" paragraph) — population/land-area/housing-age statistics do not
    develop a "stressors" lead and belong to framing "who/what," not a problems body.
  - **CUT the UHI + Passaic-flood paragraph** — urban-heat-island and low-lying flood
    exposure were a 4th/5th top-level stressor the lead never named; removed to keep the
    body to the 3 the lead enumerates.

## 2. weatherChallenges.content[]

- **Lead claim/enumeration:** "4 stressors: snow, freeze-thaw cycling, nor'easter wind, and
  summer storms."
- **Body now develops, in order:**
  1. **Snow** — ~31.5 in/yr, per NOAA EWR normals; water load on flat Ironbound roofs +
     meltwater feeding ice-dam backup.
  2. **Freeze-thaw cycling** — repeated 32°F crossings, per the same NOAA normals; trapped
     water expands on freezing, stresses sealed details.
  3. **Nor'easter wind** — hits edge/ridge Oct–April; ASCE 7-16 ~110–115 mph design wind +
     Pg 25 psf snow load, per ASCE 7-16 as adopted by the NJ UCC.
  4. **Summer storms** — ~25–30 thunderstorms/yr, per NOAA; gusts + wind-driven rain strip
     shingles and force water under lifted flashing.
- **Counted-plural check:** lead says "4 stressors"; body develops exactly 4 (snow,
  freeze-thaw, wind, summer storms), in lead order, paired two-per-paragraph. Array = 3
  strings (lead + 2), within the 1–3 schema range. MATCH.
- **Cut/moved:**
  - **CUT the Passaic-River / Ironbound-flood teleport** that previously closed paragraph 3
    ("Newark's low-lying Ironbound and East Ward sit near sea level along the Passaic
    River… draining to Newark Bay… flat roofs carry a higher water load") — flood exposure
    is not one of the 4 stressors the lead names; it was a topic teleport (Rule 21) and is
    removed. Summer storms (the 4th named stressor) now occupy that slot instead.

## 3. residential.content[]

- **Lead claim/enumeration:** "installing asphalt shingles on Forest Hill, Vailsburg, and
  Weequahic homes AND EPDM or TPO membranes on flat-roofed Ironbound rowhouses and two- and
  three-family buildings" (2 material tracks by building type; no count word).
- **Body now develops, in order:**
  1. **Asphalt-shingle track** (the steep-slope hill homes the lead names) — architectural
     30 yr / 3-tab 20 yr, per InterNACHI; strip-to-deck, decking replacement, IRC R905.1.2
     ice barrier, magnet sweep; plus natural slate (60–150 yr) and metal (40–80 yr) on the
     older Forest Hill / Roseville period stock, per InterNACHI.
  2. **EPDM/TPO membrane track** (the flat rowhouses + 2–3-family buildings the lead names)
     — EPDM 15–25 yr, TPO 7–20 yr, per InterNACHI; parapet/party-wall flashing on the shared
     East/Central/lower-West Ward rooflines, the detail 90–95% of leaks trace to (NRCA).
- **Counted-plural check:** the lead enumerates 2 material tracks (asphalt steep-slope;
  flat membrane); the body develops exactly those 2, in lead order. No new top-level
  material/service introduced. Array = 3 strings (lead + 2), within the 2–5 schema range.
  MATCH.
- **Cut/moved:**
  - **CUT permit-law** — the previous para 2 opened with N.J.A.C. 5:23-2.7 ordinary-
    maintenance / no-permit detail. The residential lead sets up materials, not permits, so
    permit-law was off-topic here; removed (it lives in the Permits FAQ + project spotlights
    + commercial body where a lead sets it up). The ice-barrier/decking/magnet-sweep facts
    were preserved but folded into the asphalt track they describe (no longer an orphan
    paragraph).

## 4. commercial.content[]

- **Lead claim/enumeration:** "installing and repairing EPDM rubber, TPO, and
  modified-bitumen membranes on Ferry Street storefronts, downtown mixed-use buildings, and
  warehouse decks" (3 membrane systems named; no count word).
- **Body now develops, in order:**
  1. **Membrane lifespans + failure modes** (the 3 systems the lead names) — EPDM 15–25 yr,
     TPO 7–20 yr, modified bitumen 20 yr, per InterNACHI; EPDM/TPO fail at the seams, so the
     install reseals/replaces those laps first.
  2. **Drainage on those low-slope decks** — ≥ ¼ in/ft slope to drain; ponding > 48 hr = a
     defect, per NRCA and ARMA; grade the deck + rebuild flashing at parapets and rooftop
     penetrations on the same Ferry Street / downtown / warehouse buildings.
- **Counted-plural check:** the lead names 3 membrane systems; paragraph 1 develops all 3
  (each with its lifespan); paragraph 2 develops drainage of those same low-slope systems.
  No new top-level system introduced. Array = 3 strings (lead + 2), within the 2–5 schema
  range. MATCH.
- **Cut/moved:**
  - **CUT permit-law** — the previous para 3 was entirely the N.J.A.C. 5:23-2.7 "25% rule"
    + Newark Department of Engineering filing office. The commercial lead sets up membrane
    installation/repair, not permits, so the 25%-rule paragraph was off-topic and removed
    here. (The same permit fact is preserved verbatim in the Permits FAQ and in the Ferry
    Street commercial project spotlight, where it is set up correctly.) The drainage/ponding
    facts were preserved and now develop the membrane systems the lead named.

---

## Self-audit

1. **Each body develops its lead's points in order:** overview wind→freeze-thaw→flashing;
   weather snow→freeze-thaw→wind→summer storms; residential asphalt→membrane; commercial
   membranes→drainage. All match lead order. PASS.
2. **Counted plurals match:** overview 3=3, weather 4=4; residential/commercial leads use
   no count word (named items, not a counted plural), and the body develops exactly the
   named items, introducing no new top-level point. PASS.
3. **No demographics under a problems lead; no permit-law in the service bodies; no
   COA/materials cross-contamination:** demographics + UHI + flood cut from overview;
   permit-law cut from both residential and commercial bodies; no new stressor/service/
   material bolted on. PASS.
4. **No `**` in any body array** (only `directAnswer`, which is untouched, carries `**`);
   no modality in any declarative (the lone "Should" hit is an FAQ `question:` field,
   exempt); every hard number named-sourced in-text (NOAA, ASCE 7-16 / NJ UCC, the NRCA,
   InterNACHI, ARMA, trade wind-damage guidance). PASS.
5. **All preserved fields byte-identical** to the current `urban-core.ts` Newark object:
   cityId, directAnswer, heroHeadline, heroSubheadline, residential.heading,
   commercial.heading, weatherChallenges.heading, neighborhoods[], projectSpotlights[],
   faqs[], whyChoose, metaTitle, metaDescription, pricing, credentialsHighlight
   (`['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local']`). PASS.

Snippet transpile/type-check: assembled into a test array and run through `tsc --noEmit` —
the only diagnostic is the expected `@/lib/types` alias-resolution error (test file outside
the project alias root); the object literal parses with zero syntax errors.
