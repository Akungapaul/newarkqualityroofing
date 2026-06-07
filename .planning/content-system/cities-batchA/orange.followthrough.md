# Orange (cityId: orange) — Follow-Through Revision Note

Surgical revision of the already-committed Orange CityContent object. Only the 4
prose body arrays were touched. Everything else copied byte-identical (verified
via `diff` against `src/data/city-content/urban-core.ts` lines 379–572 — the only
changed lines are overview[1..3], residential[0..2], commercial[1..2],
weatherChallenges[1..2]).

---

## 1. overview[]  (lead unchanged; body fully rewritten)

**Lead claim/enumeration (string 0, UNCHANGED):** "Roofing in Orange faces **3
main stressors**: (1) tight-lot access on the compact street grid, (2) low-lying
stormwater and moisture in the Valley section near the rail line, (3) tree debris
from Orange's mature street trees and the wooded West Orange ridge."

**Revised body develops the 3, IN ORDER:**
- string 1 → **(1) tight-lot access** — compact street grid, narrow side yards,
  limited staging, material delivery / ladder placement / debris containment; NQR
  stages compactly and nets debris between structures.
- string 2 → **(2) Valley stormwater** — Valley Arts district near the Highland
  Avenue rail line at the foot of the first Watchung ridge collects runoff; flat
  low-slope roofs drain slowly; ¼-in/ft slope + 48-hr ponding defect (NRCA/ARMA).
- string 3 → **(3) tree debris** — Orange's own street trees + the wooded West
  Orange ridge; branches/leaves clog valleys and gutters; the South Mountain
  Reservation correction (it is in West Orange/Maplewood/Millburn), per Essex
  County Parks.

**Counted-plural check:** lead says "3 main stressors"; body develops exactly 3
(tight-lot, Valley stormwater, tree debris). MATCH.

**Cut / moved:** Removed all DEMOGRAPHICS from the problems body — the old body
string 1 led with "Orange holds 34,447 residents in roughly 2.21 square miles"
(population + land-area statistics under a "stressors" lead) and old string 2 was
median-structure-year-1939 + owner-occupancy-23.8% housing-age/tenure
demographics; old string 3 was a housing-type catalogue (Victorian/Colonial /
Main Street). All cut from the problems body. The 34,447 / 2.21-sq-mi density
statistic is preserved (untouched) in the FAQ "How do you handle roofing on
Orange's tight-lot properties?", where it correctly answers a who/how question.
The housing-type / material range is developed where it belongs — the residential
and commercial service bodies. Tight-lot density is now stated qualitatively
("one of Essex County's densest cities" framing via the lead) rather than as a
sq-mi statistic in the problems body.

---

## 2. weatherChallenges.content[]  (lead unchanged; body fully rewritten)

**Lead claim/enumeration (string 0, UNCHANGED):** "Orange roofs face **4 climate
stressors**: (1) about 31.5 inches of snow per year, (2) winter freeze-thaw
cycling, (3) nor'easters from October through April, (4) 25 to 30 thunderstorms
per year, per NOAA 1991–2020 normals at Newark Liberty (EWR)."

**Revised body develops the 4, IN ORDER (paired across 2 paragraphs — schema
max = 3 strings):**
- string 1 → **(1) snow** (~31.5 in/yr, NOAA/EWR) + **(2) freeze-thaw** (crosses
  32°F repeatedly; water expands on freezing; stresses flashing, sealant laps,
  fasteners), with the hedged ASCE 7-16 ~25 psf ground snow load supporting the
  snow item.
- string 2 → **(3) nor'easters** (Oct–April track) + **(4) thunderstorms**
  (~25–30/yr, NOAA), with the hedged ASCE 7-16 ~110–115 mph design wind
  supporting the wind-uplift mechanism of those storms.

**Counted-plural check:** lead says "4 climate stressors"; body develops exactly
4 (snow, freeze-thaw, nor'easters, thunderstorms). MATCH.

**Cut / moved:** Removed TREE DEBRIS from the weather body (old string 1) — tree
debris is an OVERVIEW stressor (lead item 3 there), not one of the 4 climate
stressors the weather lead enumerates; developing it here was a top-level point
the weather lead never set up. Removed the URBAN-HEAT-ISLAND paragraph (old
string 2) — UHI was a 5th item the lead never named (count-break); the EPA UHI
fact is not in any preserved Orange field, so it is dropped from this section
rather than relocated (the lead's 4 are cleaner to develop than expanding to 5).

---

## 3. residential.content[]  (lead REFINED; body rewritten)

**Lead REFINED (string 0):** changed from the old permit-framed lead ("…
re-roofing detached one- and two-family homes with no construction permit
required for the roof covering, per the NJ UCC") to a material-tier lead that
sets up the body it now leads: "Newark Quality Roofing replaces and repairs
residential roofs across Orange in **2 tiers**: (1) natural slate and copper on
larger Victorian and Colonial Revival homes, and (2) asphalt shingles on the
modest colonials, Capes, bungalows, and duplexes across the grid." (38 words,
answer-first, no `**`.)

**Revised body develops the 2 tiers, IN ORDER:**
- string 1 → **(1) slate/copper tier** — natural slate 60–150 yr, copper 70+ yr
  (InterNACHI); slate fails at corroded fasteners + degraded valley/chimney
  flashing before the tile; NQR replaces fasteners/flashing and swaps slate tile
  by tile while the deck/nailers stay sound.
- string 2 → **(2) asphalt tier** — 3-tab 20 yr / architectural 30 yr
  (InterNACHI); NQR strips to deck, replaces deteriorated sheathing, installs the
  IRC R905.1.2 ice barrier (eave to ≥24 in inside the wall line) — the install
  process folded into the asphalt tier it serves.

**Counted-plural check:** lead says "2 tiers"; body develops exactly 2
(slate/copper, asphalt). MATCH.

**Cut / moved:** Removed the PERMIT-LAW detail from the residential body — old
string 1 carried the full N.J.A.C. 5:23-2.7 ordinary-maintenance recital ("counts
as ordinary maintenance … requires no construction permit, no inspection, and no
notice"). The refined lead no longer sets up permits, so per the follow-through
rule the permit-law is cut from the service body. It is preserved (untouched) in
the FAQ "Do you need a permit to replace a roof in Orange, NJ?", the correct home
for permit thresholds.

---

## 4. commercial.content[]  (lead unchanged; body rewritten)

**Lead claim/enumeration (string 0, UNCHANGED):** "Newark Quality Roofing
replaces and repairs commercial low-slope roofs along Orange's Main Street
corridor, installing and servicing **EPDM, TPO, and modified-bitumen membranes**
with manufacturer-approved bonding that keeps a system warranty intact." (3
named membranes on Main Street low-slope.)

**Revised body develops the membranes + Main Street low-slope conditions, IN
ORDER:**
- string 1 → **the 3 membranes' lifespans + failure modes** — EPDM 15–25 yr, TPO
  7–20 yr, modified bitumen 20 yr (InterNACHI); EPDM fails at seams, TPO at
  welded seams; ties to the Main Street 19th-c. flat-roofed storefronts/mixed-use
  where built-up + modified-bitumen reach end of life.
- string 2 → **Main Street low-slope drainage/parapet conditions** — ¼-in/ft
  slope to drain + 48-hr ponding defect (NRCA/ARMA); NQR grades the deck to
  drain, reseals membrane seams, rebuilds parapet flashing on these Main Street
  buildings.

**Counted-plural check:** lead names 3 membranes (EPDM, TPO, modified bitumen);
body develops all 3 (lifespans + EPDM/TPO failure modes; modified bitumen named
in lifespan + end-of-life sentence). The 3 named items are covered. No stray
counted plural left unmatched.

**Cut / moved:** Removed the PERMIT-LAW + permit-OFFICE detail from the
commercial body — old string 2 carried the N.J.A.C. 5:23-2.7 "more than 25% of
the total roof area in a 12-month period requires a permit" rule and named the
City of Orange Township Building & Construction Division. The commercial lead is
about membranes, not permits, so the 25% rule and the construction-office name
are cut from the service body. The 25% commercial-permit fact is preserved
(untouched) in the FAQ "Do you need a permit to replace a roof in Orange, NJ?"
("A commercial, multi-family, or structural roof job does require a permit"), and
the permit applicability is also retained in the Main Street project-spotlight
detail (untouched). HISTORIC-COA detail was already correctly confined to
neighborhoods[] + FAQ (untouched) and never appeared in these service bodies.

---

## Self-audit

1. Each body develops its lead's points IN ORDER — overview (tight-lot →
   Valley → trees), weather (snow → freeze-thaw → nor'easters → thunderstorms),
   residential (slate/copper → asphalt), commercial (membranes → drainage). ✓
2. Counted plurals match: overview "3 main stressors" = 3; weather "4 climate
   stressors" = 4; residential "2 tiers" = 2; commercial 3 named membranes = 3. ✓
3. No demographics under "problems" (cut from overview body → kept in FAQ);
   no permit-law in service bodies (cut from residential + commercial → kept in
   FAQ + project spotlight); no historic-COA in service bodies; no new
   top-level point introduced beyond each lead's enumeration. ✓
4. No `**` in any body array (only directAnswer, which is preserved); no modality
   (will/should/need to/must/have to) in declaratives; every hard number
   named-sourced in-text (NOAA/EWR, InterNACHI, NRCA, ARMA, ASCE 7-16 + NJ UCC,
   IRC R905.1.2, Essex County Parks). ✓
5. All preserved fields byte-identical to the current file (cityId, directAnswer,
   heroHeadline, heroSubheadline, all 3 headings, overview lead, weather lead,
   commercial lead, neighborhoods, projectSpotlights, faqs, whyChoose, metaTitle,
   metaDescription, pricing, credentialsHighlight) — confirmed by diff. ✓
6. Schema counts: overview 4 (3–6), residential 3 (2–5), commercial 3 (2–5),
   weatherChallenges 3 (1–3). ✓
