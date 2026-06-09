# Combo Batch 1 (Newark) — Review findings

Confirmed 23 | Refuted 8 | Low 15

## CONFIRMED (apply)

### 1. [high/fabrication] roof-maintenance-programs — overview[1] (and faqs[1].answer "Does roof maintenance actually extend...")
**Issue:** Hard statistic (21 yrs vs 13 yrs, ~8-year / 62% extension) attributed to a 'Firestone/ProLogis 15-year dataset reported by Roofing Contractor magazine' that appears NOWHERE in the research corpus (0 hits across all facts-*.md and sources-and-nqr-facts.md). This is an invented quantified stat with a fabricated named source.

**Evidence:** 'The Firestone/ProLogis 15-year dataset reported by Roofing Contractor magazine found proactively maintained commercial roofs lasting 21 years on average against 13 years for roofs maintained reactively, a roughly 8-year, 62% extension.' — no such figure or source exists in facts-cost-stats.md, facts-process-standards.md, facts-causes-signs.md, facts-nj-regulatory-climate.md, or the broader corpus.

**finalFix:** Two edits in src/data/combo-content/newark/roof-maintenance-programs.ts:

(1) overview[1] — remove the fabricated dataset, retain the NRCA cadence lead and re-state the pack-sourced ARMA benefit.
BEFORE: "**A maintenance program** is built around the inspection cadence the NRCA recommends — twice per year, spring and fall, plus an inspection after any severe weather event. The Firestone/ProLogis 15-year dataset reported by Roofing Contractor magazine found proactively maintained commercial roofs lasting 21 years on average against 13 years for roofs maintained reactively, a roughly 8-year, 62% extension."
AFTER: "**A maintenance program** is built around the inspection cadence the NRCA recommends — twice per year, spring and fall, plus an inspection after any severe weather event. Proper maintenance extends asphalt-shingle service life by roughly 25 to 30%, per ARMA, by intercepting the drainage, flashing, and sealant problems that otherwise progress to the roof deck."

(2) faqs[1].answer ("Does roof maintenance actually extend the life of a roof?") — lead with the ARMA figure (answer-first ≤40w), drop the fabricated commercial dataset sentence.
BEFORE: "Proactive roof maintenance extended commercial roof life to 21 years against 13 years under reactive maintenance in the Firestone/ProLogis 15-year dataset reported by Roofing Contractor magazine, a roughly 8-year, 62% extension. ARMA finds proper maintenance extends shingle lifespan by roughly 25 to 30%."
AFTER: "Proper maintenance extends a roof's service life because it intercepts drainage, flashing, and sealant problems before they reach the deck. ARMA finds proper maintenance extends asphalt-shingle lifespan by roughly 25 to 30%, and the NRCA twice-yearly inspection cadence catches small defects while they are still inexpensive repairs."

---

### 2. [high/fabrication] storm-damage-roof-repair — faqs[3].answer
**Issue:** Fabricated statutory deadlines attributed to NJ DOBI. The corpus (facts-replacement-reroofing-insurance.md) supports only 'prompt notice of loss' + a commonly-60-day CONTRACTUAL proof-of-loss term (explicitly flagged 'a common POLICY term, not a confirmed NJ statute'), and NJ hurricane/named-storm DEDUCTIBLES (not filing windows). There is no '30 days of discovery' notice rule and no 'two-year statutory window for hurricane and named-storm losses' anywhere in the corpus.

**Evidence:** 'Most New Jersey homeowner policies require prompt notice of damage, interpreted as within 30 days of discovery, with a separate two-year statutory window for hurricane and named-storm losses, per the NJ Department of Banking and Insurance.'

**finalFix:** BEFORE: 'Most New Jersey homeowner policies require prompt notice of damage, interpreted as within 30 days of discovery, with a separate two-year statutory window for hurricane and named-storm losses, per the NJ Department of Banking and Insurance. Prompt documentation supports the claim, so a crew records the damage with timestamped photographs for the adjuster.'

AFTER: 'New Jersey homeowner policies require prompt notice of loss, and commonly a sworn proof of loss within a set period after the insurer requests it, frequently 60 days; that period is a contractual policy term, not a fixed NJ statute, per United Policyholders and the NAIC model rule. Prompt documentation supports the claim, so a crew records the damage with timestamped photographs for the adjuster.'

---

### 3. [med/fabrication] wind-damage-roof-repair — overview[1] (also faqs[0].answer 'How strong is the wind...')
**Issue:** Quantified uplift multiplier '2–3 times the field pressure' is pinned to 'IIBEC RICOWI wind-investigation findings'/'per IIBEC'. The fact pack (facts-causes-signs §2.2) supports only the QUALITATIVE claim that 'uplift is highest at roof edges, rakes, and corners (Source: IIBEC)'. The numeric 2–3x multiplier and the 'RICOWI' attribution appear nowhere in the corpus.

**Evidence:** 'wind uplift concentrates at the roof corners, rakes, and edges, where it reaches 2–3 times the field pressure, per IIBEC RICOWI wind-investigation findings' (overview[1]); 'Wind uplift at the roof corners, rakes, and edges reaches 2–3 times the field pressure, per IIBEC' (faqs[0]).

**finalFix:** In overview[1], replace "wind uplift concentrates at the roof corners, rakes, and edges, where it reaches 2–3 times the field pressure, per IIBEC RICOWI wind-investigation findings." → "wind uplift concentrates at the roof corners, rakes, and edges, where damage starts, per IIBEC." | In faqs[0].answer ('How strong is the wind that damages a Newark roof?'), replace "Wind uplift at the roof corners, rakes, and edges reaches 2–3 times the field pressure, per IIBEC, so an aged or weakly sealed Newark roof loses tabs below the product rating." → "Wind uplift concentrates at the roof corners, rakes, and edges, where damage starts, per IIBEC, so an aged or weakly sealed Newark roof loses tabs below the product rating."

---

### 4. [med/source-attribution] hail-damage-roof-repair — process[0]
**Issue:** HAAG Engineering 'Test Square method' is described with specific unsourced detail — '10-by-10-foot square, one roofing square of 100 square feet, marked on each roof slope' and 'the standard hail-inspection procedure since the 1960s' — attributed to HAAG Engineering, which appears NOWHERE in the corpus (0 HAAG hits). HAAG is a real industry name, but the dimensional spec and the 'since the 1960s' provenance are invented detail stated as fact.

**Evidence:** 'using the HAAG Engineering Test Square method — a 10-by-10-foot square, one roofing square of 100 square feet, marked on each roof slope. An inspector counts and classifies every impact ... per HAAG Engineering, the standard hail-inspection procedure since the 1960s.'

**finalFix:** In src/data/combo-content/newark/hail-damage-roof-repair.ts, process[0] (line 22):

BEFORE:
'**Newark Quality Roofing assesses hail damage at close range using the HAAG Engineering Test Square method — a 10-by-10-foot square, one roofing square of 100 square feet, marked on each roof slope.** An inspector counts and classifies every impact as functional damage, which exposes the mat and shortens service life, or cosmetic damage, which marks the surface without compromising waterproofing, per HAAG Engineering, the standard hail-inspection procedure since the 1960s.'

AFTER:
'**Newark Quality Roofing assesses hail damage at close range on each roof slope, counting and classifying impacts per roofing square of 100 square feet.** An inspector classifies every impact as functional damage, which exposes the mat and shortens service life, or cosmetic damage, which marks the surface without compromising waterproofing, per HAAG Engineering and IBHS hail-assessment guidance.'

(Drops the invented "HAAG Engineering Test Square method" proper name, the "10-by-10-foot square ... marked on each roof slope" dimensional spec, and the unsourced "standard hail-inspection procedure since the 1960s" provenance. Retains the sourced functional-vs-cosmetic classification and the corpus-supported "per HAAG Engineering and IBHS hail-assessment guidance" attribution; keeps the "per 100 square feet" framing, which matches the IBHS per-100-sq-ft insurer benchmark in facts-causes-signs.md. NOTE: the same invented "HAAG ... Test Square method"/"on each field" phrasing also recurs in faqs[2] (line 40), faqs[3] ("HAAG-standard test squares", line 45), metaDescription ("HAAG test-square assessment", line 59), and whyChooseUs[2]/[3] (lines 67) — sweep those to the same de-specified "functional vs cosmetic per 100-square-foot inspection, per HAAG Engineering and IBHS guidance" framing for cross-field consistency.)

---

### 5. [med/source-attribution] roof-replacement — challenges[3]
**Issue:** Unsourced regulatory claim asserted as Newark fact: 'pre-1978 building stock triggers lead-safe work practices when painted surfaces are disturbed at tear-off.' No fact pack supports a pre-1978 / lead-safe (EPA RRP) claim; it is stated bare with no named authority, unlike every other regulatory claim in the file (which name N.J.A.C. 5:23-2.7, the NJ UCC, NPS, etc.).

**Evidence:** '**Newark\'s pre-1978 building stock** triggers lead-safe work practices when painted surfaces are disturbed at tear-off...'

**finalFix:** In src/data/combo-content/newark/roof-replacement.ts, challenges[3], change "triggers lead-safe work practices when painted surfaces are disturbed at tear-off" → "triggers federal lead-safe work practices when painted surfaces are disturbed at tear-off". 

Before: "**Newark's pre-1978 building stock** triggers lead-safe work practices when painted surfaces are disturbed at tear-off, and the low-lying Ironbound and East Ward carry Passaic River and tidal flood exposure that raises the value of a watertight deck and ice barrier."

After: "**Newark's pre-1978 building stock** triggers federal lead-safe work practices when painted surfaces are disturbed at tear-off, and the low-lying Ironbound and East Ward carry Passaic River and tidal flood exposure that raises the value of a watertight deck and ice barrier."

This single-word insertion of "federal" supplies the named authority (matching the exact attribution in sibling combos full-roof-tear-off.ts and re-roofing.ts) and preserves all facts. No deletion required.

---

### 6. [med/consistency] roof-leak-repair — challenges[2]
**Issue:** Logical contradiction forced by R3 body-lead bold-matching. The section lead (challenges[0]) is about 'water migration through a shared party wall' on attached row houses. challenges[2] re-bolds 'A shared party wall also concentrates flat-roof leaks on the low-slope commercial membranes in the Ironbound' — but flat-roof commercial ponding/seam failures are not caused by or concentrated at party walls. The shared-party-wall framing is glued onto an unrelated flat-roof ponding fact to satisfy the bold match, producing a false causal claim.

**Evidence:** '**A shared party wall also concentrates flat-roof leaks** on the low-slope commercial membranes in the Ironbound and Downtown, where ponding water held on a low-slope roof more than 48 hours counts as a defect, per NRCA and ARMA.'

**finalFix:** BEFORE: '**A shared party wall also concentrates flat-roof leaks** on the low-slope commercial membranes in the Ironbound and Downtown, where ponding water held on a low-slope roof more than 48 hours counts as a defect, per NRCA and ARMA. Inadequate drainage slope returns water to the same seam after every rain, so the repair pairs membrane work with drainage correction.'

AFTER: '**Inadequate drainage slope concentrates flat-roof leaks** on the low-slope commercial membranes in the Ironbound and Downtown, where ponding water held on a low-slope roof more than 48 hours counts as a defect, per NRCA and ARMA. Standing water returns to the same seam after every rain, so the repair pairs membrane work with drainage correction.'

(R3 note: re-anchors the body-opening bold to "Inadequate drainage slope" — the flat-roof stressor — matching the gold roof-flashing-installation-repair "Ironbound flat-roof flashing" pattern. To keep the strict body↔lead bold map, add a flat-roof head noun to the challenges[0] lead's bold set, e.g. extend the lead to name "flat-roof membrane seams" alongside "shared party wall," consistent with the directAnswer/overview[0] which already bold "flat-roof membrane seam(s)." All facts preserved: Ironbound/Downtown, low-slope commercial membranes, NRCA/ARMA >48hr ponding defect, recurring-seam drainage mechanism, membrane+drainage repair pairing.)

---

### 7. [med/fabrication] metal-roof-installation-repair — overview[3]
**Issue:** Roof-metal corrosion is causally attributed to 'chemical emissions from active Ferry Street factories.' The city bank confirms active factories exist in the Ironbound, but no pack source links factory chemical emissions to roof-metal corrosion — this is an invented causal claim.

**Evidence:** '...buildings exposed to chemical emissions from active Ferry Street factories...' — no source in facts-materials-economics.md, facts-nj-regulatory-climate.md, or CITY-FACTS-urban-core.md supports factory-emission roof corrosion.

**finalFix:** In src/data/combo-content/newark/metal-roof-installation-repair.ts, overview[3] (line 12), replace the first sentence:

BEFORE: "**Copper and aluminum** resist the ferrous corrosion that threatens steel on Ironbound and East Ward buildings exposed to chemical emissions from active Ferry Street factories and the salt air that nor'easters carry inland, with copper lasting 70-plus years, per the InterNACHI life-expectancy chart."

AFTER: "**Copper and aluminum** resist the cut-edge and ferrous corrosion that threatens steel panels, the failure mode that opens leaks where coatings break and coastal salt air migrates inland, per metal-roofing industry consensus, with copper lasting 70-plus years, per the InterNACHI life-expectancy chart. The aluminum and copper systems suit the Ironbound and East Ward building stock along the active Ferry Street factory blocks."

This preserves every sourced fact (Ferry Street/Ironbound active-factory building-stock context per CITY-FACTS line 247; copper 70-plus-year lifespan per InterNACHI; ferrous/cut-edge corrosion mechanism per facts-materials-economics.md lines 150-151) and removes only the unsourced causal claim that factory chemical emissions drive roof-metal corrosion. The factory reference is relocated from a corrosion cause to neighborhood/building-stock context, matching the committed sibling combos. The unchanged second sentence ("On the flat and low-slope commercial roofs along Ferry Street, a metal cover serves the sloped sections while the truly flat decks take a membrane system.") stays.

---

### 8. [med/fabrication] asphalt-shingle-roofing — overview[1]
**Issue:** The ~73% asphalt figure is overstated as '73% of US homes.' The pack figure is ~73% of the U.S. RESIDENTIAL ROOFING market/share, not 73% of all U.S. homes. Also inconsistent with the sibling combo asphalt-shingle-roof-replacement.ts, which correctly says '73% of US residential roofs.'

**Evidence:** '...the most common residential roof covering on roughly 73% of US homes, per 2024 roofing-market data.' — facts-causes-signs.md: 'Asphalt-shingle share of U.S. residential roofing ~73% of the market (2024)'; sibling combo uses '73% of US residential roofs.'

**finalFix:** In src/data/combo-content/newark/asphalt-shingle-roofing.ts, overview[1] (line 10), change "the most common residential roof covering on roughly 73% of US homes, per 2024 roofing-market data." → "the most common residential roof covering on roughly 73% of US residential roofs, per 2024 roofing-market data."

---

### 9. [med/newark-fact] tile-roof-installation-repair — overview[1]
**Issue:** Asserts a specific, unhedged Newark tile-roof concentration (Mediterranean Revival/Spanish Colonial, 1920s–1930s Forest Hill + Mount Prospect Avenue, 'several churches and institutional buildings with barrel/interlocking tile'). The Newark fact bank's flagged gap forbids this: no verified concentration of slate/tile/metal/period roofs in any specific district — keep local roofing-material claims generic.

**Evidence:** '**Tile roofs** in Newark concentrate on the Mediterranean Revival and Spanish Colonial homes built during the 1920s and 1930s in pockets of Forest Hill and along sections of Mount Prospect Avenue, plus several churches and institutional buildings that carry barrel and interlocking tile...' — CITY-FACTS-urban-core.md Newark Gaps: 'whether any Newark district has a verified concentration of slate/tile/metal/period roofs (keep generic).'

**finalFix:** In src/data/combo-content/newark/tile-roof-installation-repair.ts, overview[1]:

BEFORE:
'**Tile roofs** in Newark concentrate on the Mediterranean Revival and Spanish Colonial homes built during the 1920s and 1930s in pockets of Forest Hill and along sections of Mount Prospect Avenue, plus several churches and institutional buildings that carry barrel and interlocking tile from the same era. Newark Quality Roofing installs and repairs both clay and concrete tile across these properties.'

AFTER:
'**Tile roofs** in Newark appear on the early-20th-century period homes the North Ward and Forest Hill retain, plus some church and institutional buildings, since about a quarter of Newark homes predate 1940. Clay and concrete tile from that era survives where the framing was built to carry the load, and Newark Quality Roofing installs and repairs both across these properties.'

---

### 10. [med/newark-fact] slate-roof-installation-repair — overview[1]
**Issue:** Asserts 'Forest Hill retains Newark's densest concentration of original 1870s-to-1920s slate' — a roofing-MATERIAL concentration claim on the exact axis the Newark fact bank says is unverified and must stay generic. (The housing-stock fact — Forest Hill has the most single-family character — is supported; the slate-material concentration is not.)

**Evidence:** 'Forest Hill retains Newark's densest concentration of original 1870s-to-1920s slate, and Roseville's Victorian brownstones and row-homes carry slate that has weathered for over a century.' — CITY-FACTS-urban-core.md Newark Gaps: no verified concentration of slate/tile/metal/period roofs in any district → keep generic.

**finalFix:** In src/data/combo-content/newark/slate-roof-installation-repair.ts overview[1], replace: "Forest Hill retains Newark's densest concentration of original 1870s-to-1920s slate, and Roseville's Victorian brownstones and row-homes carry slate that has weathered for over a century." → with: "Forest Hill retains the most single-family, period housing character in Newark, with stately 1870s-to-1920s Victorian, Colonial, and Beaux-Arts homes, and Roseville's Victorian-era brownstones and row-homes carry the city's older West Ward fabric." (Preserves the supported Forest Hill single-family/period-architecture and Roseville brownstone/row-home facts; removes the unverified slate-material concentration to keep the local roofing-material claim generic per the fact bank.)

---

### 11. [high/fabrication] green-roof-installation — overview[2] (process step 3) and faqs[4].answer
**Issue:** Unsourced regulatory/factual claim: "combined-sewer overflow rules in Newark and Essex County target" the stormwater a green roof reduces. No fact pack (facts-nj-regulatory-climate, facts-materials-economics, facts-process-standards) or the Newark city fact bank supports a 'combined-sewer overflow rule' as a roofing-relevant regulation. The Newark city facts cover Passaic-River/tidal flood exposure (EPA Urban Waters / South Ironbound Resiliency Action Plan) but never a CSO ordinance. The claim is stated twice as flat fact with no named source.

**Evidence:** "...reduces the stormwater discharged to the municipal system that combined-sewer overflow rules in Newark and Essex County target." (appears in process step 3 and in the stormwater FAQ answer)

**finalFix:** Replace the fabricated CSO clause in BOTH locations with the sourced Ironbound/Passaic-corridor drainage framing (qualitative, per the city-fact instruction). The water-retention benefit is preserved; only the unsourced "combined-sewer overflow rules" regulatory claim is dropped.

PROCESS STEP 3 (overview[2]) — BEFORE:
"A green (vegetation) roof lasts 5 to 40 years, per the InterNACHI life-expectancy chart, and a green roof retains rainfall on the roof, which reduces the stormwater discharged to the municipal system that combined-sewer overflow rules in Newark and Essex County target."
AFTER:
"A green (vegetation) roof lasts 5 to 40 years, per the InterNACHI life-expectancy chart, and a green roof retains rainfall in the growing media and the water-retention layer, reducing the runoff that strains drainage on Newark's low-lying Ironbound and Passaic-River corridor, per U.S. EPA Urban Waters (Passaic River / Newark)."

FAQ 5 (faqs[4].answer) — BEFORE:
"A green roof retains rainfall in the growing media and the water-retention layer, which reduces the stormwater discharged to the municipal system that combined-sewer overflow rules in Newark and Essex County target."
AFTER:
"A green roof retains rainfall in the growing media and the water-retention layer, reducing the runoff that strains drainage on Newark's low-lying Ironbound and Passaic-River corridor, per U.S. EPA Urban Waters (Passaic River / Newark)."

---

### 12. [high/source-attribution] commercial-metal-roofing — faqs[5].answer
**Issue:** The NJ ~10–40%-above-national premium is mis-attributed to Integrity Home Exteriors, which is a roof-repair PROCESS source (facts-process-standards §1), not a pricing source. The 10–40% NJ premium traces to facts-materials-economics §7 (an unnamed '[SECONDARY consensus]'); every sibling combo states it with no source name. Attaching it to Integrity Home Exteriors invents a pricing authority.

**Evidence:** "NJ ranges sit 10 to 40% above national figures because labor and code costs run higher, per Integrity Home Exteriors."

**finalFix:** In src/data/combo-content/newark/commercial-metal-roofing.ts, faqs[5].answer — BEFORE: "NJ ranges sit 10 to 40% above national figures because labor and code costs run higher, per Integrity Home Exteriors." → AFTER: "NJ ranges sit 10 to 40% above national figures because of higher labor and stricter NJ code."

---

### 13. [med/source-attribution] spray-foam-roofing — overview[2] and faqs[4].answer
**Issue:** TPO welded-seam failure and EPDM seam-separation failure modes are attributed to "the InterNACHI life-expectancy chart and NRCA technical guidance." InterNACHI is a LIFESPAN chart ONLY — it carries no failure-mode data. The failure modes come from facts-materials-economics §4 (NRCA / industry qualitative). Bundling them with InterNACHI is the recurring InterNACHI mis-pin. Note: the EPDM combo correctly attributes these modes to NRCA alone, creating a cross-combo inconsistency.

**Evidence:** "...eliminating the welded seams that rank as the most common TPO failure mode and the seam separation that ranks as the dominant EPDM failure mode, per the InterNACHI life-expectancy chart and NRCA technical guidance."

**finalFix:** Apply to BOTH cited fields in src/data/combo-content/newark/spray-foam-roofing.ts (drop "the InterNACHI life-expectancy chart and", keep NRCA):

overview[2] (line 11):
BEFORE: "...eliminating the welded seams that rank as the most common TPO failure mode and the seam separation that ranks as the dominant EPDM failure mode, per the InterNACHI life-expectancy chart and NRCA technical guidance."
AFTER: "...eliminating the welded seams that rank as the most common TPO failure mode and the seam separation that ranks as the dominant EPDM failure mode, per NRCA technical guidance."

faqs[4].answer (line 50):
BEFORE: "Welded-seam failure is the most common TPO failure mode and seam separation the dominant EPDM failure mode, per the InterNACHI life-expectancy chart and NRCA technical guidance, and varying the foam thickness builds the positive drainage the NRCA requires on low-lying Ironbound roofs."
AFTER: "Welded-seam failure is the most common TPO failure mode and seam separation the dominant EPDM failure mode, per NRCA technical guidance, and varying the foam thickness builds the positive drainage the NRCA requires on low-lying Ironbound roofs."

---

### 14. [med/newark-fact] green-roof-installation — faqs[3].answer
**Issue:** The lead states "A green roof on a detached one- or two-family home counts as ordinary maintenance." The ordinary-maintenance exemption (N.J.A.C. 5:23-2.7) covers "repair or replacement of existing roof covering" — not the addition of a new vegetated assembly that adds substantial saturated dead load. Per the brief and facts-nj-regulatory-climate §1.1/§1.3, adding load/altering the structure is not 'ordinary maintenance' and is a structural change that requires a permit. The same FAQ's own closing clause ('a structural change triggers a permit') contradicts the lead.

**Evidence:** "A green roof on a detached one- or two-family home counts as ordinary maintenance, while a structural change triggers a permit."

**finalFix:** In faqs[3].answer, replace the final sentence

BEFORE: "A green roof on a detached one- or two-family home counts as ordinary maintenance, while a structural change triggers a permit."

AFTER: "A green roof on a detached one- or two-family home is not the ordinary-maintenance reroof exempted under N.J.A.C. 5:23-2.7, because adding the saturated growing media and vegetation places new dead load on the structure; that structural change requires a permit and a licensed engineer's structural review filed with the Newark Department of Engineering, Building Division."

---

### 15. [med/fabrication] green-roof-installation — pricing.range, pricing.note, and faqs[5].answer
**Issue:** The $6–$12/sq ft figure is labeled "the green-roof waterproofing membrane substrate" cost, but in facts-materials-economics §6 that $6–$12/sq ft is the installed cost of PVC single-ply (commercial cost guides; M&M Roofing / WeatherStar) — not a green-roof membrane substrate price. No pack carries any green-roof-specific cost. Relabeling a PVC-install figure as a 'green-roof waterproofing membrane substrate' price invents a cost category the source does not support, and the price excludes the dominant green-roof cost drivers (growing media, structural work, vegetation).

**Evidence:** range: "$6–$12/sq ft for the green-roof waterproofing membrane substrate"; FAQ: "The green-roof waterproofing membrane substrate runs $6–$12 per square foot, per commercial cost guides citing M&M Roofing and WeatherStar..."

**finalFix:** Apply three edits, preserving the TPO/EPDM Josten figures and the M&M/WeatherStar attribution, re-framing $6–$12 as the single-ply MEMBRANE install cost (not a green-roof substrate price):

(1) pricing.range —
BEFORE: range: '$6–$12/sq ft for the green-roof waterproofing membrane substrate',
AFTER:  range: '$6–$12/sq ft for the single-ply waterproofing membrane; total green-roof cost adds growing media, structure, and vegetation',

(2) pricing.note —
BEFORE: note: 'Membrane substrate cost per commercial cost guides citing M&M Roofing and WeatherStar; NJ TPO flat-roof membrane runs $8–$12 and EPDM $7–$10 per square foot per Josten Roofing NJ pricing. Final cost depends on system type, growing media depth, structural work, and access. Newark Quality Roofing provides a free written estimate.',
AFTER:  note: 'The $6–$12 per square foot is the single-ply waterproofing membrane install cost per commercial cost guides citing M&M Roofing and WeatherStar; NJ TPO flat-roof membrane runs $8–$12 and EPDM $7–$10 per square foot per Josten Roofing NJ pricing. Total green-roof cost adds the growing media, drainage and water-retention layers, any structural work, and roof access on top of the membrane. Newark Quality Roofing provides a free written estimate.',

(3) faqs[5].answer —
BEFORE: 'The green-roof waterproofing membrane substrate runs $6–$12 per square foot, per commercial cost guides citing M&M Roofing and WeatherStar, with NJ TPO flat-roof membrane at $8–$12 and EPDM at $7–$10 per square foot, per Josten Roofing NJ pricing. Final cost depends on the system type, growing media depth, structural work, and roof access. Newark Quality Roofing provides a free written estimate.'
AFTER:  'The single-ply waterproofing membrane beneath a green roof installs at $6–$12 per square foot, per commercial cost guides citing M&M Roofing and WeatherStar, with NJ TPO flat-roof membrane at $8–$12 and EPDM at $7–$10 per square foot, per Josten Roofing NJ pricing. Total green-roof cost adds the growing media, drainage and water-retention layers, any structural work, and roof access on top of the membrane. Newark Quality Roofing provides a free written estimate.'

---

### 16. [high/source-attribution] commercial-roof-installation — overview[3]
**Issue:** Cites the ENERGY STAR roof program as a current, present-tense listing body. The EPA sunset the ENERGY STAR roof products program (new certifications stopped June 1, 2021; recognition ended June 1, 2022); CRRC-1 is the successor. The energy-solar pack GLOBAL CORRECTION #1 is explicit: never write 'ENERGY STAR roof' / 'ENERGY STAR-rated/certified' for any roofing or coating product. The cohort's own energy-solar.ts service file already frames it correctly as 'the retired ENERGY STAR roof program.' This is a cohort-wide pattern inherited from the parent commercial-services.ts (which has the same defect).

**Evidence:** 'A reflective white TPO or PVC membrane reflects roughly 70 to 85% of solar radiation measured per ASTM C1549 and listed by the CRRC and ENERGY STAR'

**finalFix:** In src/data/combo-content/newark/commercial-roof-installation.ts overview[3] (line 12). Before: "A reflective white TPO or PVC membrane reflects roughly 70 to 85% of solar radiation measured per ASTM C1549 and listed by the CRRC and ENERGY STAR, and spray foam adds R-6.0 to R-6.5 per inch of aged insulation measured per ASTM C1289 LTTR." → After: "A reflective white TPO or PVC membrane reflects roughly 70 to 85% of solar radiation measured per ASTM C1549 and listed by the CRRC, and spray foam adds R-6.0 to R-6.5 per inch of aged insulation measured per ASTM C1289 LTTR." (Drop "and ENERGY STAR"; the CRRC is the correct successor listing body per facts-energy-solar.md §0.1 / line 262.)

---

### 17. [high/source-attribution] commercial-roof-installation — faqs[3].answer
**Issue:** Same retired-ENERGY-STAR defect as overview[3], in the heat-reflection FAQ ('Which commercial roofing system reflects the most heat...').

**Evidence:** 'A reflective white TPO or PVC single-ply membrane reflects roughly 70 to 85% of solar radiation measured per ASTM C1549 and listed by the CRRC and ENERGY STAR.'

**finalFix:** In src/data/combo-content/newark/commercial-roof-installation.ts, faqs[3].answer — Before: "...measured per ASTM C1549 and listed by the CRRC and ENERGY STAR. Per the U.S. EPA, the heat-island effect..." → After: "...measured per ASTM C1549 and listed by the CRRC. Per the U.S. EPA, the heat-island effect..." (i.e., delete " and ENERGY STAR" so the clause reads "...listed by the CRRC."). Apply the identical edit to the parallel overview[3] string in the same file ("...listed by the CRRC and ENERGY STAR, and spray foam adds..." → "...listed by the CRRC, and spray foam adds...") and back-propagate the same " and ENERGY STAR" deletion wherever this 70-85% reflectance line carries ENERGY STAR across the cohort and the parent service-content/commercial-services.ts and commercial-roof-types.ts.

---

### 18. [high/newark-fact] custom-roof-design-consultation — challenges[1]
**Issue:** Invented architectural roof-style concentration for a Newark district. The fact packs explicitly ban naming a verified roof-style/material concentration in any specific district: facts-historic-restoration.md Gap §5 ('no one verified whether a specific Newark/Essex district ... contains a concentration of slate/tile/metal historic roofs. Do not write "many slate roofs in the James Street Commons district" as fact. Keep local copy generic') and CITY-FACTS-urban-core.md §602-603 ('No verified concentration of slate/tile/metal/period roofs in any specific district — keep local roofing-material claims generic'). Lincoln Park is sourced ONLY as '~42 late-19th/early-20th-c. townhouses' (CITY-FACTS §238) with NO mansard/Second Empire detail. 'barrel-vault skylights on commercial blocks' is not in any pack.

**Evidence:** mansard roofs on Second Empire rowhouses near Lincoln Park, party-wall conditions between attached row houses, and barrel-vault skylights on commercial blocks all present intersecting planes and non-standard flashing

**finalFix:** In /Users/akungapaul/Projects/Newarkqualityroofing/src/data/combo-content/newark/custom-roof-design-consultation.ts, challenges[1], replace the body after the bold lead. Before: "**Roof geometry on Newark’s older buildings** frequently defies a standard template — mansard roofs on Second Empire rowhouses near Lincoln Park, party-wall conditions between attached row houses, and barrel-vault skylights on commercial blocks all present intersecting planes and non-standard flashing that drives the per-square-foot cost across every material class, per industry cost guidance, so each connection is individually detailed." After: "**Roof geometry on Newark’s older buildings** frequently defies a standard template — intersecting roof planes on older attached and multi-family buildings, party-wall conditions between adjoining row houses, and irregular dormer and skylight penetrations present non-standard flashing details that drive the per-square-foot cost across every material class, per industry cost guidance, so each connection is individually detailed rather than fitted to a standard template."

---

### 19. [med/answer-length] custom-roof-design-consultation — faqs[2].answer
**Issue:** The FAQ answer's first sentence is 47 words, exceeding the ≤40-word definitive-answer limit (Ruleset R2; brief §B.1). It runs the detached-exempt clause and the permit-required clause into a single sentence.

**Evidence:** A re-roof of the covering on a detached one- and two-family home is ordinary maintenance under N.J.A.C. 5:23-2.7 and requires no construction permit; an addition, a dormer, a roof-pitch change, or a commercial roof exceeding 25% of the total roof area in a 12-month period requires one.

**finalFix:** In src/data/combo-content/newark/custom-roof-design-consultation.ts, faqs[2].answer (the "Do you need a permit for a custom roof design project in Newark?" FAQ):\n\nBEFORE:\n'A re-roof of the covering on a detached one- and two-family home is ordinary maintenance under N.J.A.C. 5:23-2.7 and requires no construction permit; an addition, a dormer, a roof-pitch change, or a commercial roof exceeding 25% of the total roof area in a 12-month period requires one. The exemption covers the roof covering, not rafters, trusses, or ridge beams, per the NJ Uniform Construction Code, administered through the Newark Department of Engineering Building Division.'\n\nAFTER:\n'A re-roof of the covering on a detached one- and two-family home is ordinary maintenance under N.J.A.C. 5:23-2.7 and requires no construction permit. An addition, a dormer, a roof-pitch change, or a commercial roof exceeding 25% of the total roof area in a 12-month period requires one. The exemption covers the roof covering, not rafters, trusses, or ridge beams, per the NJ Uniform Construction Code, administered through the Newark Department of Engineering Building Division.'\n\n(Only change: the semicolon after "...no construction permit" becomes a period, and "an addition" is capitalized to "An addition." This splits the 47-word run-on into a 23-word definitive lead. No facts, citations, or named sources are deleted.)

---

### 20. [med/source-attribution] historic-roof-restoration — challenges[1]
**Issue:** Asserts a verified roofing-material concentration ('original slate ... and copper flashing') on Forest Hill homes as fact. The packs require keeping roofing-material claims generic per district (facts-historic-restoration.md Gap §5: 'Do not write "many slate roofs in [the] district" as fact. Keep local copy generic'; CITY-FACTS §602-603). Forest Hill is sourced as Beaux-Arts/Victorian/Colonial single-family stock (CITY-FACTS §248) but with NO verified slate/copper-roof concentration. The character-defining features list (ridge cresting/finials) is correctly from Brief 4, but pinning 'original slate ... and copper flashing' to Forest Hill specifically overreaches.

**Evidence:** Forest Hill and Roseville carry the city's oldest detached single-family stock — 1870s–1920s Victorian, Colonial, and Beaux-Arts homes** with original slate, ornamental ridge cresting, and copper flashing.

**finalFix:** In src/data/combo-content/newark/historic-roof-restoration.ts, challenges[1]:
BEFORE: "**Forest Hill and Roseville carry the city's oldest detached single-family stock — 1870s–1920s Victorian, Colonial, and Beaux-Arts homes** with original slate, ornamental ridge cresting, and copper flashing. Slate takes non-ferrous fasteners — solid copper or stainless steel — because plain and galvanized steel rust out long before the slate, the most common slate-roof failure mode, per NPS Preservation Brief 29."
AFTER: "**Forest Hill and Roseville carry the city's oldest detached single-family stock — 1870s–1920s Victorian, Colonial, and Beaux-Arts homes** whose period roofs and ornamental detail are restored in kind where slate, ridge cresting, or copper flashing is present. Slate takes non-ferrous fasteners — solid copper or stainless steel — because plain and galvanized steel rust out long before the slate, the most common slate-roof failure mode, per NPS Preservation Brief 29."

This generalizes the asserted slate/copper concentration to the conditional "where ... is present" (satisfying facts-historic-restoration Gap §5 and CITY-FACTS §602-603 "keep local roofing-material claims generic"), preserves the bold span, the architectural-style facts from CITY-FACTS §248, the cresting reference, and the slate-fastener Brief-29 sentence.

---

### 21. [med/source-attribution] solar-shingle-installation — faqs[2].answer
**Issue:** The ~14-18% module-efficiency cluster is mis-attributed to NREL and EnergySage. Per facts-energy-solar.md Part B (efficiency row), NREL backs ONLY the thermal coefficient (~0.3-0.5%/°C), not the efficiency cluster; the cluster's named sources are SolarReviews, GreenLancer, and WattBuild. EnergySage is a cost-data/per-watt source in the pack, not an efficiency-cluster source. This is the recurring NQR over-attribution / mis-pairing defect: a real figure pinned to sources that the pack assigns to a different claim.

**Evidence:** "...clustering around 14% to 18% module efficiency against more than 20% for premium panels, per SolarReviews, EnergySage, and NREL." — pack Part B efficiency row attributes the 14-18% cluster to "SolarReviews; GreenLancer; WattBuild; NREL (thermal coefficient)" (NREL = thermal coefficient only).

**finalFix:** In src/data/combo-content/newark/solar-shingle-installation.ts, faqs[2].answer — Before: "...clustering around 14% to 18% module efficiency against more than 20% for premium panels, per SolarReviews, EnergySage, and NREL." After: "...clustering around 14% to 18% module efficiency against more than 20% for premium panels, per SolarReviews, GreenLancer, and WattBuild." (NREL stays reserved for the thermal/cell-temperature coefficient claim and EnergySage for per-watt cost, per the fact-pack source assignments.)

---

### 22. [med/source-attribution] storm-damage-roof-replacement — challenges[2]
**Issue:** The N.J.A.C. 5:23-6.4 forced-removal covering list is abbreviated to 'is wood, slate, or tile,' which conflates 'wood' with the statute's 'wood shake' and drops 'clay, cement, or asbestos-cement.' The fact pack (§0 rule 5) explicitly warns against the 'wood vs wood shake' conflation and that NJ 5:23-6.4 — not the model IRC — is the citation that adds wood shake. Every sibling combo (full-roof-tear-off, re-roofing, overlay, aging process[3] uses the same shorthand) states the full list; this one is the loosest.

**Evidence:** 'The NJ Rehabilitation Subcode requires complete removal of the existing covering when the roof is water-soaked, is wood, slate, or tile, or already carries two or more layers, per N.J.A.C. 5:23-6.4'

**finalFix:** In challenges[2], change "complete removal of the existing covering when the roof is water-soaked, is wood, slate, or tile, or already carries two or more layers, per N.J.A.C. 5:23-6.4" → "complete removal of the existing covering when the roof is water-soaked, is wood shake, slate, clay, cement, or asbestos-cement tile, or already carries two or more layers, per N.J.A.C. 5:23-6.4".

---

### 23. [med/fabrication] metal-roof-replacement — faqs[4].answer and pricing.note
**Issue:** Self-derived per-square point figure not in any pack and internally inconsistent. '$1,130 per square' is presented as a Josten/NJ-guide figure, but no pack states a per-square metal figure; it is a self-computed conversion. It also does not reconcile to its own stated range: $9.00–$16.00/sq ft × 100 sq ft = $900–$1,600 per square (midpoint ~$1,250), not $1,130. R10/§B5 require named-sourced numbers or de-quantification — a self-derived midpoint is not sourced.

**Evidence:** A metal roof costs $9.00–$16.00 or more per square foot in New Jersey, roughly $1,130 per square, against $6.50–$11.00 per square foot for architectural asphalt, per Josten Roofing and NJ guide pricing.

**finalFix:** faqs[4].answer — BEFORE: "A metal roof costs $9.00–$16.00 or more per square foot in New Jersey, roughly $1,130 per square, against $6.50–$11.00 per square foot for architectural asphalt, per Josten Roofing and NJ guide pricing." → AFTER: "A metal roof costs $9.00–$16.00 or more per square foot in New Jersey, against $6.50–$11.00 per square foot for architectural asphalt, per Josten Roofing and NJ guide pricing."

pricing.note — BEFORE: "A metal roof costs $9.00–$16.00 or more per square foot in New Jersey, roughly $1,130 per square, against $6.50–$11.00 for architectural asphalt, per Josten Roofing and NJ guide pricing; final cost depends on roof size, pitch, metal system, and access. Newark Quality Roofing provides a free written estimate." → AFTER: "A metal roof costs $9.00–$16.00 or more per square foot in New Jersey, against $6.50–$11.00 for architectural asphalt, per Josten Roofing and NJ guide pricing; final cost depends on roof size, pitch, metal system, and access. Newark Quality Roofing provides a free written estimate."

---

## LOW (advisory)

- [roof-maintenance-programs overview[4] (also process[2] and faqs[4].answer)] Over-specific, brand-named warranty claim beyond pack support. The corpus supports only that ventilation/maintenance is 'often a condition of shingle warranties' (NRCA, qualitative) and that roofs failing to meet 'published conditions can fall outside warranty coverage.' Asserting that 'GAF, Carlisle, and Owens Corning condition coverage on periodic inspection, clear drains, and prompt repair' and that 'a maintenance record is required at claim' names three specific manufacturers with specific conditions that no pack documents.
- [storm-damage-roof-repair overview[4]] Two different Triple-I denominators are conflated in one clause: '40.7% of homeowners claims' (% of all claims, 2017–2021) AND 'roughly 2.8% of insured homes per year, 1 in 36' (claim frequency). Both figures are individually sourced (facts-cost-stats §8/§9), but stitching them into a single 'largest claim type at 40.7% ... and 2.8% of insured homes per year' clause implies one metric and risks misreading. (Same pattern in wind-damage-roof-repair overview[4].)
- [roof-maintenance-programs process[1] ('50:50 chlorine-bleach-and-water wash ... per ARMA cleaning guidance')] The specific cleaning spec — '50:50 chlorine-bleach-and-water wash at low pressure' attributed to 'ARMA cleaning guidance' — is not present in any of the four assigned fact packs. It is consistent with the same spec in roof-cleaning-moss-removal (which attributes the 50:50 mix and 15–20-min dwell to ARMA), so it likely traces to a cleaning-specific pack outside this cohort's four; verify the ARMA attribution is real before publishing, as ARMA-named hard specs must trace to a pack.
- [metal-roof-installation-repair faqs[1].answer (Is a metal roof too noisy)] Comparative performance claim ('rain noise to levels comparable to other roofing materials') carries no named-source attribution, unlike every other quantified/comparative claim in the cohort.
- [commercial-metal-roofing overview[2] and faqs[5].answer (cost FAQ)] Minor cross-combo style inconsistency: the metal cost FAQ pins '$5 to $10 per square foot' metal repair to 'Josten Roofing NJ pricing, HomeGuide, and Modernize' collectively, but facts-materials-economics §3 sources metal repair $5–$10/sq ft to HomeGuide specifically and Josten supplies only the install $/sq ft. The bundled attribution slightly over-credits Josten/Modernize for the repair figure. Low severity — all three are named pack sources, only the pairing is loose.
- [commercial-roof-installation pricing.range] The headline pricing.range '$4–$12/sq ft installed' takes its $4 floor from the SPF ($4–$8) figure and $12 ceiling from EPDM/TPO/PVC, blending four membrane systems into one range without indicating which system the $4 floor represents. The note disambiguates correctly, but the bare range could read as a single-system price. The sibling commercial-roof-replacement uses a tighter single-system-anchored range ($7.00–$12.00/sq ft single-ply). Both figures trace to the pack (Josten EPDM $7–10 / TPO $8–12; commercial guides PVC $6–12, SPF $4–8), so this is presentation, not fabrication.
- [infrared-roof-leak-detection process[1]] Cites a Newark-specific NOAA temperature normal — 'Newark winters cross 32°F frequently, with an average January low near 25.5°F per NOAA 1991 to 2020 normals for Newark Liberty.' The 25.5°F January-low figure IS pack-backed (facts-nj-regulatory-climate.md §3.2 attributes avg January low ≈25.5°F to NOAA 1991–2020 EWR normals), so it is not a fabrication. The minor risk: it implies a Newark-city normal when the station is EWR (which straddles Newark and Elizabeth). Attribution to 'Newark Liberty' is the correct station name, so this is acceptable as written — flagging only because it is the single hard climate number in the cohort and reviewers should confirm it stays tied to the EWR station label, never restated as a city-specific delta.
- [custom-roof-design-consultation challenges[1]] Vague, unnamed attribution for a cost claim. Ruleset R9 / brief §B.5 require an in-text named authority. 'per industry cost guidance' names no Source-Register authority. No hard number is stated, so this is qualitative, but the generic attribution still falls short of the named-source standard; the actual NJ per-sq-ft figures (Josten Roofing) live in the pricing field and cost FAQ.
- [energy-efficient-roofing-solutions process[1]] Imprecise ENERGY STAR sunset date. The pack (§0.1 and Part C) is specific: EPA stopped certifying NEW roof submittals June 1, 2021, but ended ENERGY STAR roof recognition/mark use June 1, 2022. Writing the program 'ended in 2021' collapses the two-step sunset and understates the recognition end. Not a fabrication (new certs did stop in 2021) but a precision miss on a date the pack supplies exactly.
- [silicone-roof-coating faqs[2].answer (How long does a silicone roof coating last on a Newark commercial building?)] Internal inconsistency in the warranty-vs-thickness band. The FAQ states the 10-15-year term at '22 mils', while overview[2] in the same file states it at '20 to 22 mils' and the pack (Part D warranty row) gives '~20-22 mils -> 10-15 yr'. The FAQ drops the lower bound of the thickness band, creating a within-file mismatch with the overview. Defensible (22 is the band's top) but should match the overview for consistency.
- [re-roofing process[1]] Internal mismatch: the sentence introduces 'the 25% rule' but the threshold stated is '25 to 30%.' The 25% rule (RapidRestore) is a flat 25%-area threshold; the '25 to 30%' band blends it with the flat-roof 25–30% rule (Parish/Modernize) and the contractor-consensus 25–30% area rule. Pick one figure to match the named rule.
- [insurance-roof-replacement faqs[4].answer] The covered-vs-excluded peril enumeration ('wind, hail, a falling tree, or fire … excludes replacement for normal wear, age, or deferred maintenance') is attributed to the Insurance Information Institute (Triple-I), but no fact pack contains this specific covered-peril list as a Triple-I statement — the packs cover ACV/RCV, deductibles, claim frequency, and the compliance line, not a 'covered perils vs wear exclusion' enumeration. It reads as general insurance knowledge over-attributed to a named authority. Storm combo faqs[3] and overview carry the same construction.
- [storm-damage-roof-replacement faqs[3].answer / overview[2]] Same over-attribution pattern as the insurance combo: the 'covered peril (wind, hail, falling tree) vs excludes normal wear/age/deferred maintenance' framing is tagged to general insurance knowledge while sitting beside the genuinely Triple-I-sourced $14,747 / 1-in-36 figure. The covered/excluded enumeration itself is not in the packs as a named-authority fact.
- [tile-roof-replacement faqs[3].answer (permit FAQ)] R6 modality hedge ('may require') in a declarative answer sentence. The gate excludes only FAQ question fields, not answer bodies, so 'may require' is a genuine R6 hit. The underlying parcel-specific uncertainty is real and correctly hedged factually elsewhere ('verify a specific parcel's local or contributing status before assuming a COA'), so only the modal verb needs replacing with an indicative form.
- [cedar-shake-roof-replacement faqs[4].answer (permit FAQ)] R6 modality hedge ('may add') in a declarative answer sentence (answer body, not the question field, so not gate-excluded). Same pattern as the tile permit FAQ — convert to indicative; the parcel-status verification clause already supplies the factual hedge.
