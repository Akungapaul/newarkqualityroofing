# East Orange — Follow-Through Revision Note

Surgical revision of the committed `east-orange` CityContent object. Only the 4 prose
bodies were touched (`overview`, `weatherChallenges.content`, `residential.content`,
`commercial.content`). Every other field copied byte-identical (verified by diff:
`directAnswer`, `heroHeadline`, `heroSubheadline`, all three section `heading`s,
`neighborhoods`, `projectSpotlights`, `faqs`, `whyChoose`, `metaTitle`,
`metaDescription`, `pricing`, `credentialsHighlight`).

---

## 1. overview[] (5 items, schema 3–6)

**Lead claim/enumeration:** "Roofing problems in East Orange concentrate on 3 patterns:
(1) leaf and branch debris from mature street trees clogging valleys and gutters,
(2) shade-driven moss on north-facing slopes, (3) ice dams on older under-insulated
homes during nor'easter snow."

**Ordered points the revised body develops:**
1. Item 1 — **debris**: leaf load and broken branches collect in valleys/gutters, hold
   moisture, back water under shingles, rot fascia/soffit/decking (City of East Orange
   "spacious homes and wide, tree-lined streets" framing).
2. Item 2 — **shade-driven moss**: settles on north-facing slopes under the same canopy,
   holds moisture against the shingle, lifts edges, accelerates granule loss.
3. Item 3 — **ice dams**: attic-heat melt above 32°F, refreeze at the cold eave below
   32°F backing water under the shingles (University of Minnesota Extension); ~31.5 in/yr
   snow per NOAA at Newark Liberty (EWR) is the snow load that feeds the cycle.
4. Closing **who/what framing** clause (allowed): NQR services the full housing range
   (converted Victorian/Edwardian multi-family near transit, larger single-family north,
   flat commercial on Main St / Central Ave); repairs/replaces asphalt, slate, flat-membrane.

**Counted-plural check:** lead says "3 patterns" → body develops exactly 3 (debris, moss,
ice dams), in lead order. PASS.

**Cut / moved:**
- **CUT the demographics tail from the lead** — the old lead appended
  "East Orange carries 87.6% of housing units in multi-unit structures, per the U.S. Census
  Bureau, so flat-membrane and shared-wall flashing failures rank alongside shingle wear."
  Population/housing-mix statistics are demographics, not a "problems" point, and the clause
  also smuggled in a 4th un-enumerated stressor (flashing). The 87.6% figure is preserved
  verbatim where it belongs in `whyChoose` (Residential and Multi-Family Coverage).
- **CUT the flashing paragraph** (old overview item 3, the 90–95% NRCA flashing point) — it
  introduced a top-level point the "3 patterns" lead never named. The flashing fact is
  preserved in `residential.content`, `projectSpotlights` (Storm and Ice-Dam Repair), and
  the "What roofing problems are most common" FAQ.
- **CUT "31.0% owner-occupied housing"** demographics (it was in `residential` previously,
  not overview, but the owner-occupied statistic does not develop any "problems" lead — see §3).

---

## 2. weatherChallenges.content[] (3 items, schema 1–3)

**Lead claim/enumeration (lightly refined):** "East Orange weather loads a roof with
2 climate stressors: (1) snow and freeze-thaw cycling that drive ice dams across the winter,
and (2) an urban-heat-island load that raises roof-surface temperature on the dense,
built-out plain." (Refined from the old lead, which listed nor'easters/snow/thunderstorms but
gave no count and left the UHI body paragraph un-introduced.)

**Ordered points the revised body develops:**
1. Stressor 1 — **snow + freeze-thaw → ice dams**: nor'easters Oct–April, ~31.5 in/yr snow,
   25–30 thunderstorms/yr per NOAA at Newark Liberty (EWR); snow melt/refreeze on
   under-insulated homes forms eave ice dams; attic heat loss drives the melt.
2. Stressor 2 — **urban heat island**: EPA daytime +1–7°F / nighttime +2–5°F, largest in
   dense humid eastern-U.S. cities, reflective/green roofs lower roof-surface temp; East
   Orange as a built-out inner-ring city on the flat Watsessing plain fits the EPA profile.

**Counted-plural check:** lead says "2 climate stressors" → body develops exactly 2
(snow/freeze-thaw ice dams; urban heat), in lead order. PASS.

**Cut / moved:** none cut. The two pre-existing paragraphs were retained as the two
developed stressors; only the lead was added/refined to enumerate and introduce them so the
UHI paragraph is no longer an orphan topic teleport (Rule 21). NOAA/EPA figures unchanged.

---

## 3. residential.content[] (3 items, schema 2–5)

**Lead claim:** "Newark Quality Roofing repairs and replaces residential roofs across East
Orange, servicing asphalt shingle roofs on single-family homes and the converted Victorian
and Edwardian multi-family stock near the transit corridors." (Capability + audience lead;
the body develops what an NQR residential job covers on that stock.)

**Ordered points the revised body develops:**
1. **Asphalt service life + reroof scope**: architectural ~30 yr / 3-tab ~20 yr per
   InterNACHI; NQR reroof installs ice-and-water shield at eaves/valleys; storm-damage
   documentation for adjusters tied to wind/hail = largest claim type at 2.8%/yr per Triple-I.
2. **Flashing reseal + cleanup close**: reseal flashing at chimneys/walls/valleys
   (~90–95% of leaks, ~5–10% field, NRCA industry estimate); magnet sweep + debris cleanup.

**Counted-plural check:** lead carries no count to satisfy; the body stays inside the
capability/scope the lead sets up (asphalt residential work on EO's single- and multi-family
stock). PASS.

**Cut / moved (REMOVED PERMIT-LAW + DEMOGRAPHICS):**
- **CUT the N.J.A.C. 5:23-2.7 ordinary-maintenance / permit sentence** from the residential
  body — the lead does not set up permits, so the permit threshold belongs to the Permits/FAQ
  framing, not a residential service body. (The same fact is preserved verbatim in the
  "Do you need a permit to replace a roof in East Orange?" FAQ and in the project-spotlight
  details.)
- **CUT "East Orange records 31.0% owner-occupied housing, per the U.S. Census Bureau, with
  the balance renter-occupied across multi-family buildings"** — owner-occupancy demographics
  do not develop the residential-capability lead. (No "problems"-section demographics existed
  here, but this owner-occupancy statistic was off-topic for the service body and is dropped;
  the multi-family/renter angle is carried by `whyChoose` and `neighborhoods`.)

---

## 4. commercial.content[] (2 items, schema 2–5)

**Lead claim:** "Newark Quality Roofing services commercial low-slope roofs across East
Orange, installing and repairing EPDM, TPO, and modified-bitumen membranes on the Main Street
and Central Avenue corridors and on multi-family buildings." (Capability lead naming the
3 membrane systems + the corridors the body develops.)

**Ordered points the revised body develops:**
1. **Membrane systems + drainage scope**: EPDM 15–25 yr, TPO 7–20 yr, modified bitumen 20 yr
   per InterNACHI; ponding > 48 hr = defect per NRCA/ARMA; ¼-in/ft minimum drainage pitch;
   metal counter-flashing rebuilt at parapet/wall transitions.

**Counted-plural check:** lead names 3 membrane systems (EPDM, TPO, modified bitumen) → the
body develops the same 3 by service-life figure. PASS.

**Cut / moved (REMOVED PERMIT-LAW):**
- **CUT the 25%/12-month N.J.A.C. 5:23-2.7 permit sentence + East Orange Building Division /
  44 City Hall Plaza submission detail** from the commercial body — the commercial lead sets
  up membrane materials and corridors, not permits, so the permit-law detail belongs to the
  Permits/FAQ framing. The fact is preserved verbatim in the "Do you need a permit…" FAQ and
  in both commercial project-spotlight `details`.

---

## Self-audit

1. Each body develops its lead's points IN ORDER — overview 3 patterns (debris→moss→ice dam),
   weather 2 stressors (snow/freeze-thaw→UHI), residential capability→scope, commercial
   3 membranes by life. PASS.
2. Counted plurals match: overview "3 patterns"=3; weather "2 climate stressors"=2; commercial
   names 3 membranes developed by 3 service-life figures. PASS.
3. No demographics under "problems" (87.6% + 31.0% removed from prose bodies; only in
   `whyChoose`/preserved fields); no permit-law in either service body (moved to FAQ/spotlights);
   no new top-level point (flashing-as-overview-point cut). PASS.
4. No `**` in any body array (only in preserved `directAnswer`); no modality in declaratives
   (grep clean); every hard number named-sourced — InterNACHI (shingle/membrane life),
   NOAA/EWR (~31.5 in snow, 25–30 storms), University of Minnesota Extension (ice dams),
   U.S. EPA (1–7°F / 2–5°F UHI), NRCA/ARMA (90–95% flashing, 48-hr ponding, ¼-in/ft),
   Insurance Information Institute (2.8%). PASS.
5. All preserved fields byte-identical to the current file (diff-verified) and the snippet
   typechecks as a valid `CityContent` element. PASS.
