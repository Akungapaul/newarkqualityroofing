# Articles Batch — residential-roof-types.ts brief (27 articles)

Answer-first rewrite of the 27 `parentType: 'service'` articles in
`src/data/article-content/residential-roof-types.ts` — **9 parent residential roof-type / roofing
services × 3 articles** (*signs* / *cost-guide* / *decision*). These are **educational KB articles**
that render their full content at **root `/<slug>`** (via `ArticleTemplate`/`ArticleBody`), NOT
NQR-promotional pages: they answer a **general** question, so the `directAnswer` lead is
**topic-definitional** (answers the H1 with a named-sourced fact), and NQR appears only in `ctaText`.

Audience = **NJ / Essex County homeowners** (Newark, East Orange, Irvington, Bloomfield, Nutley,
Belleville, the Caldwells, Montclair, Maplewood, Livingston, etc.). These are residential steep-slope
coverings (asphalt, slate, wood/cedar shake, metal, tile) plus the two low-slope/membrane services a
home carries (flat-roof, rubber-EPDM) and the whole-system service (residential-roof-installation).

**Gold to mirror (read these):**
- Article answer-first shape + voice → `src/data/article-content/homepage.ts` (committed exemplar:
  directAnswer bold ≤40w → 1-sentence intro → question-heading sections whose `body[0]` opens with a
  ≤40w bold answer → R3 re-bold in every paragraph).
- **Facts (the source of truth for this batch)** → the **committed parent service blocks** in
  `src/data/service-content/residential-roof-types.ts` (Batch 2 — clean, de-fabbed, code-accurate; each
  block named by `serviceId`, line ranges below). Pull **every** number/standard/code-cite/cost-range
  from there. **The current dirty article copy is NOT a fact source — it is the fabrication to
  overwrite.** The per-service KILL/CONFIRM tables below are distilled from the gold; honor them.

Parent gold block line ranges (read your service's block):
`residential-roof-installation` 7–197 · `asphalt-shingle-roofing` 198–387 ·
`slate-roof-installation-repair` 388–562 · `wood-shake-roofing` 563–737 ·
`metal-roof-installation-repair` 738–922 · `flat-roof-installation-repair` 923–1107 ·
`tile-roof-installation-repair` 1108–1292 · `cedar-shake-roofing` 1293–1470 ·
`rubber-roofing-epdm` 1471–end.

## Shared rules (Semantic Content Ruleset v1.7 — gated subset)

- **directAnswer (new field):** a ≤40-word **bold-span** definitive answer to the H1. Put the answer in
  `**bold**` (the bold span itself ≤40 words). Name a source where it is a factual claim. Topic-
  definitional — answer the H1; do NOT lead "Newark Quality Roofing is…".
- **intro:** ONE supporting bridge sentence after the directAnswer. No second answer.
- **Section headings = QUESTIONS.** Each `sections[i].heading` is a question. The FIRST sentence of
  `body[0]` is a definitive ≤40-word answer to that question, main topic in `**bold**`.
- **R3 strict-bold:** every body paragraph OPENS by re-bolding a topic named in its section's answer.
  Bold only the named main topics (not whole sentences).
- **R6 NO modality** (build-failing) in declarative BODY text: never `will, shall, should, need to,
  needs to, have to, has to, must, ought to`. Write definitive present tense ("NJ requires…", "Slate
  lasts…", "A cedar roof needs at least 1.5 in of air space"). Question-form headings are EXEMPT; `can`
  is allowed; **transitive `needs`/`need` is fine** ("a flat roof needs ¼ in per foot of slope") — only
  "need(s) to" is banned.
- **R9 no outbound links / URLs.** Internal links are OPTIONAL, ≤1 per section, as `[descriptive
  anchor](/slug)` to a real page ONLY from this whitelist: `/residential-roof-installation`,
  `/asphalt-shingle-roofing`, `/slate-roof-installation-repair`, `/wood-shake-roofing`,
  `/metal-roof-installation-repair`, `/flat-roof-installation-repair`, `/tile-roof-installation-repair`,
  `/cedar-shake-roofing`, `/rubber-roofing-epdm`, `/roof-replacement`, `/residential-roofing`,
  `/roofing-materials`. Never "click here / learn more".
- **R10 de-fab (build-failing):** never emit `24/7`, `same-day`, `emergency service`/`emergency
  response` as a marketing promise, `GAF Certified`/`GAF-certified`, `Master Elite`, `CertainTeed SELECT
  ShingleMaster`, `Owens Corning Preferred`, `manufacturer-certified`/`certified installer`/`certified
  contractor`, `0% financing`, `top-rated`, `N+ years experience`, `500+ projects`, `HAAG`, fabricated
  phone/address, or ANY claim that NQR *holds* a manufacturer/installer certification or is a
  "specialist". GAF / CertainTeed / Owens Corning / Cedar Shake & Shingle Bureau are **source cites**,
  not NQR creds.
- **R14 no hype:** no `best / premier / leading / premium / trusted / world-class / exceptional /
  unbeatable / finest / pinnacle / popular / specialist`. Name materials/standards/facts instead.
  ("premium" as a price noun — "a price premium" — is fine; as a quality adjective it is not.)
- **Named-source attribution, no URLs:** cite organizations/standards BY NAME — InterNACHI (life-
  expectancy chart), NRCA, ARMA, National Slate Association, Cedar Shake & Shingle Bureau (CSSB), Tile
  Roofing Industry Alliance, Metal Construction Association (MCA), GAF / Owens Corning (warranty &
  inspection guidance — as *source cites*, NOT NQR certs), This Old House, Josten Roofing NJ / HomeGuide
  / Angi / Modernize / HomeAdvisor / NHI Contractors / Integrity Home Exteriors / WeatherShield (cost
  data), Zillow (resale), NOAA (Newark climate normals); codes/standards `N.J.A.C. 5:23-2.7` (NJ UCC
  ordinary-maintenance), `N.J.A.C. 5:23-6.4` (NJ Rehabilitation Subcode — no recover-over), `IRC
  R905.1.2` (ice barrier), `UL 790` / `ASTM E108` (fire), `N.J.S.A. 56:8-136` / `56:8-142` (HIC reg).
- **metaDescription ≤160 chars** (a >160 crashes the article-content index import), no de-fab literals,
  no modality, no `**`.
- **conclusion / ctaText:** definitive, de-fabbed, no self-cert/warranty-term claims.

## NQR credential framing (registration ≠ license)

NQR = **a registered New Jersey Home Improvement Contractor, insured and serving Essex County**. NJ has
**no roofing license** — the HIC is a *registration* under the Contractors' Registration Act
(`N.J.S.A. 56:8-136`), with a `$500,000` per-occurrence general-liability minimum (`N.J.S.A. 56:8-142`).
Say **registered**, never "licensed". NQR holds **no verified manufacturer/installer certification** (no
Master Elite / SELECT ShingleMaster / Preferred) → never claim one, and never call NQR a "specialist".
NQR **installs to manufacturer specification** to keep the manufacturer system warranty intact (it does
not invent a workmanship-warranty term length) and provides a **free written estimate**. A "structural
engineer" / "professional engineer (PE)" verifying a slate or tile deck is a separate party — NQR is the
roofing contractor, not "a licensed engineer".

## VERIFIED-FACT KILL / CONFIRM TABLE

**Cross-cutting de-fab (every article):**

| Current (WRONG / fabricated) | Correct (use this) | Source |
|---|---|---|
| invented whole-roof install TOTALS ($6,500–$12,000, $8,000–$18,000, $15,000–$32,000, $20,000–$55,000, etc.) | DROP all invented totals; price the gold's **per-square-foot** install + **repair** ranges in each spec. ONLY `residential-roof-installation` carries a whole-roof total ($10,000–$25,000+, HomeAdvisor/Modernize) — every other service prices per-sf / per-repair only | gold pricing |
| invented per-sf material/labor SPLITS ("$8–$15/sf material + $6–$10/sf labor"), invented decision thresholds ("$3,000 in repairs over 3 years", "stay 15+ years") | DROP — use the gold's single installed per-sf figure + the contractor-consensus **>25–30% area** replace rule + the InterNACHI material lifespan | gold; R10 |
| "GAF Master Elite / CertainTeed SELECT ShingleMaster / Owens Corning Preferred / manufacturer-certified / certified contractor", "our specialists" | DROP all cert + specialist self-claims; "a registered NJ Home Improvement Contractor that installs to manufacturer specification to keep the system warranty intact" | R10; gold |
| "licensed roofing contractor", "licensed engineer required" | NQR = **registered** NJ HIC (NJ issues no roofing license); a deck/structural check is by a **structural / professional engineer (PE)** | gold; N.J.S.A. 56:8-136 |
| hype: "finest / pinnacle / premium / premier / leading / best value / popular / most affordable / market dominance" | DROP — state grounded durability/cost facts with named sources | R14 |
| named product-line drops (GAF Timberline HDZ/Camelot/Grand Canyon, CertainTeed Landmark/Grand Manor/Presidential, Owens Corning Duration/Berkshire, DECRA/EDCO, DaVinci Roofscapes, CeDUR) | DROP product-line names; name only the generic system or, where the gold does, the manufacturers generically (GAF, CertainTeed, Owens Corning for asphalt; Englert/ATAS/McElroy for metal) | gold |
| invented % claims ("ENERGY STAR shingles cut bills 10–20%", "reflective metal cuts cooling 10–25%", "fire-treated adds 15–25%", "insurance 10–25% higher", "recover saves 20–30%") | DROP every invented percentage not in the gold; the only gold % facts are **labor ≈ 60–70% of an asphalt install**, **balanced ventilation extends roof life up to 25% (NRCA)**, **actual asphalt life varies up to 40% (NRCA)**, **granule loss >30% = beyond repair / 50% loss cuts life up to 70% (GAF)** | gold |
| invented wind ratings / code values ("110 mph NJ code", "140 mph", "R-30/R-40 energy code", "ASTM C1167/C1492", "six-foot ice shield vs NJ minimum") | use only gold figures: **3-tab ≈ 60 mph, architectural up to 130 mph with the 6-nail pattern (ARMA + mfr)**; **IRC R905.1.2 ice barrier eave→≥24 in inside the wall line**; **NOAA severe-thunderstorm gusts ≥58 mph**; cite no insulation R-value or ASTM tile standard not in the gold | gold |

**Residential materials + lifespans (InterNACHI life-expectancy chart unless noted) — use verbatim:**

| System | Life | Note / failure mode | Source |
|---|---|---|---|
| 3-tab asphalt | **20 yr** | rates ≈ **60 mph**; fails at granule loss (>30% = beyond repair) | InterNACHI; ARMA; GAF |
| Architectural asphalt | **30 yr** | up to **130 mph** with the manufacturer **6-nail pattern**; ≈73% of US roofs | InterNACHI; ARMA |
| Natural slate | **60–150 yr** (premium 100+) | the **stone rarely fails**; corroded fasteners + copper flashing fail first; "sugaring" on low grade | InterNACHI; National Slate Assn |
| Wood/cedar shake | **20–40 yr** (CSSB); InterNACHI "Wood" = **25 yr**; cedar shingle 30–50 yr | moisture (not insects) drives failure; needs **≥1.5 in air space**; untreated = nonclassified for fire (UL 790/ASTM E108) | CSSB; NRCA |
| Metal | **40–80 yr** (copper 70+) | standing-seam conceals fasteners; exposed-fastener washer seals fail (lap sealant 5–10 yr); oil-canning from thermal movement | InterNACHI; This Old House; MCA |
| Clay tile | **100+ yr**; concrete tile **40–75 yr** | the **underlayment is the lifespan limiter** (fails at 30–50 yr under sound tile); concrete spalls in freeze-thaw | InterNACHI; Tile Roofing Industry Alliance |
| EPDM rubber | **15–25 yr** | fails at the **splice seam**, then shrinkage at perimeters; stays flexible through freeze-thaw | InterNACHI; HomeGuide |
| TPO | **7–20 yr** | heat-welded; fails at the welded seam; white reflects | InterNACHI |
| Modified bitumen | **20 yr** | multi-ply; blistering/alligator cracking from UV | InterNACHI |
| Built-up (BUR) | **30 yr** | longest membrane life (the flat-roof comparison) | InterNACHI |

**Per-service cost anchors (price ONLY these; never fabricate a whole-roof total except res-install):**

| Service | Install / per-sf | Repair | Source |
|---|---|---|---|
| residential-roof-installation | **$10,000–$25,000+ whole-roof** (typical NJ home); architectural asphalt **$6.50–$11/sf**, metal **$9–$16/sf**, slate **$10–$30/sf** | — | HomeAdvisor/Modernize; Josten Roofing NJ |
| asphalt-shingle-roofing | 3-tab **$5.50–$9.50/sf**, architectural **$6.50–$11/sf** (national $3.50–$11/sf or $350–$1,100/square) | localized repair **5–10× less** than replacement | Josten Roofing NJ; HomeGuide |
| slate-roof-installation-repair | install **$10–$30/sf** (per the residential-roof-installation gold / Josten) | repair **$500–$2,100** (typ ~$1,400); broken tile **$50–$300/tile**; flashing/fastener **$400–$3,000**; restoration **$2,500–$10,000+** | HomeGuide; Angi |
| wood-shake-roofing | cedar install **$10–$20+/sf** | repair **$400–$1,800** (avg ~$750; small $100–$400, large $1,000+); shake replacement ~**$600–$700/square**; maintenance **$0.15–$0.60/sf** | NHI Contractors NJ; Angi; Modernize; HomeGuide |
| metal-roof-installation-repair | install **$9–$16/sf**; panel/section repair **$5–$10/sf** | minor leak **$200–$1,000**, severe corrosion up to **$3,000**, seam re-weld **$250–$1,100**, fastener fix **$150–$1,000** | Josten Roofing NJ; HomeGuide; Modernize; Angi |
| flat-roof-installation-repair | EPDM install **$7–$10/sf**, TPO install **$8–$12/sf** | **$2.50–$10/sf** or **$300–$1,100** typical; minor leak **$150–$500**, extensive **$1,200–$3,000** | Josten Roofing NJ; HomeGuide; Angi |
| tile-roof-installation-repair | concrete repair **$9–$18/sf**, clay repair **$12–$25/sf** | repair **$5–$25/sf** or **$500–$2,500**; individual tile **$50–$300/tile**; flashing/fastener **$400–$3,000** | Modernize; HomeGuide |
| cedar-shake-roofing | install **$10–$20+/sf**; maintenance **$0.15–$0.60/sf** | repair **$400–$1,800** (small $100–$400, large $1,000+) | NHI Contractors NJ; Angi; HomeGuide |
| rubber-roofing-epdm | install **$7–$10/sf** | **$2.50–$10/sf** or **$300–$1,100** typical; small patch **$300–$500**, seam re-weld **$200–$400**, section replacement **$500–$1,000** | Josten Roofing NJ; HomeGuide; Modernize; WeatherShield |

**Code / climate (use verbatim, where relevant to the service):**

| Fact | Value | Source |
|---|---|---|
| NJ permit / ordinary maintenance | a detached one- & two-family **roof-covering re-roof = ordinary maintenance, no construction permit**; a structural change to rafters/trusses, or a commercial repair **>25% of roof area in 12 months**, triggers a permit | N.J.A.C. 5:23-2.7 |
| No recover-over | **complete removal** required (no overlay) when the roof is **water-soaked**, is **wood/slate/tile**, or already carries **2+ layers** | N.J.A.C. 5:23-6.4 |
| Ice barrier | self-adhering ice barrier (or 2 cemented underlayment layers) from the eave to **≥24 in inside the exterior wall line** in ice-prone climates | IRC R905.1.2 |
| Attic ventilation | **1 sq ft net-free vent per 150 sq ft** of attic floor, ~50% intake / 50% exhaust; balanced ventilation extends roof life **up to 25%** | NRCA; ARMA |
| Low-slope drainage | a flat roof needs **≥¼ in per foot of slope** to drain; **ponding >48 hr = a defect**; standing water ≈ **5 lb per inch per sq ft** | NRCA; ARMA |
| Newark winter | crosses 32°F repeatedly; **average January low ~25.5°F** (NOAA 1991–2020, Newark Liberty/EWR); freeze-thaw stresses sealants/fasteners | NOAA |
| Replace threshold | damage across **>25–30% of roof area** crosses the contractor-consensus 25% rule (full install < continued spot repair) | roofing industry guidance |

## Per-article specs

Each article: directAnswer (topic-definitional, ≤40w bold) → intro (1 bridge sentence) → **3**
question-heading sections (`body` 2–3 paragraphs each, R3 bold, named sources) → conclusion → ctaHeading →
ctaText (NQR registered NJ HIC, insured, free written estimate; no cert/specialist/warranty-term claims) →
metaDescription ≤160c.

- **position 1 `-signs`** H1 "What Are the Signs You Need {Service}?" → directAnswer = the warning signs;
  3 sections grouping end-of-life / surface+material / structural-or-fit triggers.
- **position 2 `-cost-guide`** H1 "How Much Does {Service} Cost in NJ?" → directAnswer = the gold per-sf
  (and/or repair) range; sections (what it costs per sf or per repair / what drives the price / why NJ is
  higher). **KILL invented whole-roof totals** (except residential-roof-installation).
- **position 3 `-decision`** H1 "What Are the **Pros and Cons** of {Service}?" → directAnswer = balanced
  (top advantage + top drawback + the fit); sections (a) "What Are the Advantages of {X}?", (b) "What Are
  the Drawbacks of {X}?", (c) "Is {X} the Right Choice for Your Essex County Home?" — cons are real, not
  softened; close (c) with verify HIC registration / insurance / free written estimate.

---

### Residential roof installation — `residential-roof-installation` (gold 7–197)

**1. residential-roof-installation-signs** · slug `residential-roof-installation-warning-signs-nj`
H1 "What Are the Signs You Need Residential Roof Installation?"
directAnswer: the signs — a roof **at/past its material life** (3-tab 20 yr, architectural 30 yr,
InterNACHI), **damage >25–30%** of the area (the 25% rule), a **spongy/sagging deck**, a **changed
material class**, or **new construction/addition** needing a deck-to-ridge system (InterNACHI / GAF).
Sections: (a) "When Has a Roof Reached the End of Its Life?" — material life (3-tab 20, architectural 30,
metal 40–80, slate 60–150; InterNACHI), actual asphalt life varies up to 40% (NRCA); a roof past life
favors a full system over another patch. (b) "What Deck and Ventilation Signs Call for a Full
Installation?" — a spongy/sagging deck = moisture-rotted sheathing a surface cover cannot correct, fixed
at tear-off (GAF); undersized/unbalanced attic ventilation (NRCA/ARMA 1-per-150) shortens life. (c) "When
Do Damage Area, Material Change, or New Construction Apply?" — damage >25–30% crosses the 25% rule; a
material-class change or a missing ice barrier (IRC R905.1.2) justifies re-installation; new
construction/addition needs the full deck-to-ridge assembly.

**2. residential-roof-installation-cost-guide** · slug `how-much-does-residential-roof-installation-cost-in-nj`
H1 "How Much Does Residential Roof Installation Cost in NJ?"
directAnswer: **a residential roof installation runs about $10,000–$25,000+ for a typical NJ home**, with
architectural asphalt at $6.50–$11.00, metal $9.00–$16.00, and slate $10–$30 per square foot, and NJ
sitting 10–40% above national figures (HomeAdvisor / Modernize / Josten Roofing NJ). **(KILL invented
per-system totals — only this whole-roof range is gold.)**
Sections: (a) "What Does a Residential Roof Installation Cost?" — $10,000–$25,000+ typical (HomeAdvisor/
Modernize); per-sf by material: architectural asphalt $6.50–$11, metal $9–$16, slate $10–$30 (Josten).
(b) "What Drives the Installed Price?" — material class; tear-off + deck repair when 2+ layers or a
water-soaked deck force removal (N.J.A.C. 5:23-6.4); roof complexity (valleys, dormers, hips); labor
≈ 60–70% of an asphalt install (HomeGuide/Integrity). (c) "Why Is NJ Higher?" — NJ 10–40% above national
(labor + stricter code); a detached one-/two-family re-roof is ordinary maintenance, no permit (N.J.A.C.
5:23-2.7); NQR provides a free written estimate.

**3. residential-roof-installation-decision** · slug `residential-roof-installation-pros-and-cons-nj-homeowners`
H1 "What Are the Pros and Cons of Residential Roof Installation?"
directAnswer: **a full installation's advantages are a complete deck-to-ridge system (ice barrier,
underlayment, flashing, cover, ventilation) that corrects deck rot and a ~60–68% resale recoup; its
drawback is the $10,000–$25,000+ cost** (InterNACHI / Zillow / HomeAdvisor).
Sections: (a) "What Are the Advantages of a Full Roof Installation?" — replaces the whole weatherproof
assembly (not a single detail), corrects deck rot + undersized ventilation; installs to manufacturer
spec → keeps the manufacturer material warranty (20–50 yr, Owens Corning) intact + a written workmanship
warranty; ~60–68% resale recoup (Zillow). (b) "What Are the Drawbacks?" — major cost $10,000–$25,000+ (NJ
10–40% above national); premium materials cost far more per sf (metal $9–$16, slate $10–$30 vs
architectural $6.50–$11, Josten); tear-off/deck repair add cost; slate weight needs a structural deck
check; complexity adds cost. (c) "Is a Full Installation the Right Choice for Your Essex County Home?" —
fits new construction, a roof past life, damage >25% rule, a rotted deck, or a material-class change; a
single recurring failed detail on an in-life roof favors a [roof repair](/roof-replacement) approach;
verify HIC registration + insurance, free written estimate.

### Asphalt shingle roofing — `asphalt-shingle-roofing` (gold 198–387)

**4. asphalt-shingle-roofing-signs** · slug `asphalt-shingle-roofing-warning-signs-nj`
H1 "What Are the Signs You Need Asphalt Shingle Roofing?"
directAnswer: the signs — a roof **at/past 20 yr (3-tab) or 30 yr (architectural)**, **granule loss >30%**
(bald mat, grit in gutters), **curling/cupping/buckling**, **wind-stripped or cracked shingles**, or
**damage >25–30%** (InterNACHI / GAF / NRCA).
Sections: (a) "When Has an Asphalt Roof Reached End-of-Life?" — 3-tab 20 yr, architectural 30 yr,
actual life varies up to 40% (InterNACHI/NRCA); granule loss >30% = beyond repair, 50% loss cuts life up
to 70% (GAF). (b) "What Surface Signs Appear?" — bald mat + grit in gutters (GAF); curling/cupping/
buckling = aging or trapped moisture/undersized ventilation; cracked/wind-stripped shingles (3-tab ≈ 60
mph; NOAA severe gusts ≥58 mph); spreading ceiling stains = a leak at flashing (NRCA: flashing ≈ 90–95%
of leaks). (c) "When Does Area or Layers Cross to a New Roof?" — damage >25–30% crosses the 25% rule; a
2+-layer or water-soaked roof forces full removal (N.J.A.C. 5:23-6.4).

**5. asphalt-shingle-roofing-cost-guide** · slug `how-much-does-asphalt-shingle-roofing-cost-in-nj`
H1 "How Much Does Asphalt Shingle Roofing Cost in NJ?"
directAnswer: **asphalt shingle roofing installs at $5.50–$9.50 per square foot for 3-tab and $6.50–$11.00
for architectural in New Jersey**, with NJ sitting 10–40% above the national $3.50–$11 per square foot
(Josten Roofing NJ / HomeGuide). **(KILL invented whole-roof totals — gold prices per sf.)**
Sections: (a) "What Does Asphalt Cost per Square Foot?" — 3-tab $5.50–$9.50, architectural $6.50–$11 NJ
(Josten); national $3.50–$11/sf or $350–$1,100/square (HomeGuide); a localized repair costs 5–10× less
than replacement (Home Depot/Kelly Roofing). (b) "What Drives the Price?" — material tier (architectural
adds the 130-mph 6-nail rating + 30-yr life over 20-yr 3-tab); tear-off/deck repair when 2+ layers
(N.J.A.C. 5:23-6.4); labor ≈ 60–70% of the install (HomeGuide/Integrity). (c) "Why Is NJ Higher?" — NJ
10–40% above national (labor + code); a detached one-/two-family re-roof is ordinary maintenance, no
permit (N.J.A.C. 5:23-2.7); NQR provides a free written estimate.

**6. asphalt-shingle-roofing-decision** · slug `asphalt-shingle-roofing-pros-and-cons-nj-homeowners`
H1 "What Are the Pros and Cons of Asphalt Shingle Roofing?"
directAnswer: **asphalt's advantages are the lowest cost per year of service, the widest availability
(~73% of US roofs), and up to a 130-mph architectural rating; its drawback is a shorter 20–30-yr life
than slate, metal, or tile** (InterNACHI / ARMA).
Sections: (a) "What Are the Advantages of Asphalt Shingles?" — most common covering (~73% of US homes);
architectural lasts 30 yr at up to 130 mph with the 6-nail pattern (ARMA/mfr); lowest cost per year,
~60–68% resale recoup (Zillow); a detached re-roof is ordinary maintenance (N.J.A.C. 5:23-2.7). (b) "What
Are the Drawbacks of Asphalt?" — short life (3-tab 20, architectural 30) vs premium materials; life
varies up to 40% with climate/install/ventilation (NRCA); 3-tab rates only ~60 mph; granule loss is the
primary failure (>30% beyond repair, GAF); flashing details cause ~90–95% of leaks (NRCA). (c) "Is
Asphalt the Right Choice for Your Essex County Home?" — fits a standard pitched roof on cost and
availability; long-term ownership wanting far longer life favors [metal](/metal-roof-installation-repair),
[slate](/slate-roof-installation-repair), or [tile](/tile-roof-installation-repair); verify HIC
registration + insurance, free written estimate.

### Slate roof installation & repair — `slate-roof-installation-repair` (gold 388–562)

**7. slate-roof-installation-repair-signs** · slug `slate-roof-installation-repair-warning-signs-nj`
H1 "What Are the Signs You Need Slate Roof Installation & Repair?"
directAnswer: the signs — **slate tiles sliding out of position** (corroded nails), **cracked/broken/
missing tiles**, **rusted or split flashing** at valleys/chimneys, **interior leaks with tiles intact**,
or **sugaring** on low-grade slate (National Slate Assn / InterNACHI / NRCA).
Sections: (a) "What Surface Signs Point to Slate Repair?" — tiles sliding = corroded nail fasteners
(the typical failure, NRCA/NSA); cracked/broken/missing tiles expose the underlayment (impact-driven,
slate-ripper repair). (b) "What Flashing and Leak Signs Appear?" — rusted/split flashing at valleys/
chimneys/dormers is the most common slate leak source (copper flashing degrades decades before the stone,
InterNACHI); interior leaks with most tiles intact = a failed fastener/flashing detail, favoring targeted
repair over re-slating (NRCA). (c) "When Does Slate Need Full Replacement?" — only when >30–40% of
fasteners corrode beyond repair or the deck rots; the stone rarely sets the trigger (slate 60–150 yr,
InterNACHI); sugaring (powdery, flaking surface) marks low-grade slate nearing replacement (NSA).

**8. slate-roof-installation-repair-cost-guide** · slug `how-much-does-slate-roof-installation-repair-cost-in-nj`
H1 "How Much Does Slate Roof Installation & Repair Cost in NJ?"
directAnswer: **slate roof repair runs $500–$2,100 in New Jersey (typical near $1,400)**, with broken-tile
replacement $50–$300 per tile, flashing/fastener work $400–$3,000, and installation roughly $10–$30 per
square foot (HomeGuide / Angi / Josten Roofing NJ). **(KILL invented whole-roof totals + the cost-per-year
amortization.)**
Sections: (a) "What Does Slate Work Cost?" — repair $500–$2,100 (typ ~$1,400), broken tile $50–$300/tile,
flashing/fastener $400–$3,000, restoration $2,500–$10,000+ (HomeGuide/Angi); install $10–$30/sf (Josten,
per the residential-roof-installation gold). (b) "What Drives the Price?" — targeted repair (tile/
fastener/flashing) vs code-triggered full removal (N.J.A.C. 5:23-6.4, no recover-over); tile-matching by
color/size/thickness; deck/nailer condition under the slate weight; labor mobilizing slate-specific
equipment. (c) "Why Is NJ Higher?" — NJ 10–40% above national (labor + code, Integrity); a structural
deck check precedes installation; NQR provides a free written estimate.

**9. slate-roof-installation-repair-decision** · slug `slate-roof-installation-repair-pros-and-cons-nj-homeowners`
H1 "What Are the Pros and Cons of Slate Roof Installation & Repair?"
directAnswer: **slate's advantages are a 60-to-150-year natural-stone life and indefinite repairability
tile-by-tile; its drawbacks are a high upfront cost and weight that requires a structural deck check**
(InterNACHI / National Slate Assn).
Sections: (a) "What Are the Advantages of Slate?" — among the longest-lived coverings (60–150 yr, premium
100+, InterNACHI/NSA); repairable indefinitely (a cracked tile resets with a slate ripper); set on copper/
stainless fasteners with copper flashing (copper 70+ yr) matching the slate's life; suits historic Essex
County housing. (b) "What Are the Drawbacks of Slate?" — high cost (repair $500–$2,100, flashing/fastener
$400–$3,000, restoration $2,500–$10,000+); substantial weight needs a structural deck check; fasteners/
flashing are the failure points (the stone rarely fails); low-grade slate sugars; commercial code
complexity (N.J.A.C. 5:23-2.7 / 6.4). (c) "Is Slate the Right Choice for Your Essex County Home?" — fits a
historic home/new build with framing that carries the load and an owner wanting a century covering; repair
(not replacement) fits while the slate field stays sound; a lighter, lower-cost covering favors
[asphalt shingle](/asphalt-shingle-roofing) at 20–30 yr; verify HIC registration + insurance, free written
estimate.

### Wood shake roofing — `wood-shake-roofing` (gold 563–737)

**10. wood-shake-roofing-signs** · slug `wood-shake-roofing-warning-signs-nj`
H1 "What Are the Signs You Need Wood Shake Roofing?"
directAnswer: the signs — shakes **cupped/split/warped across >25–30%**, a shake that **cracks under the
flex test**, **moss/lichen** colonizing the surface, **rot on shaded slopes**, or **daylight through the
deck** (InterNACHI / CSSB / This Old House).
Sections: (a) "When Has a Cedar Roof Reached End-of-Life?" — wood 25 yr (InterNACHI), cedar shake 20–40 yr
(CSSB); a shake that cracks under light bending fails the InterNACHI flex test regardless of surface look.
(b) "What Surface and Moisture Signs Appear?" — cupped/split/warped shakes; moss/lichen = moisture
retention (moisture, not insects, drives most cedar failure, CSSB/NRCA); rot under shakes on north-facing/
shaded slopes (they dry slowly). (c) "When Does Area or Deck Decay Favor Replacement?" — >25–30% cupped/
split crosses the replace threshold; daylight through the deck = holes in sheathing (This Old House); a
permitted re-roof requires complete tear-off (no recover-over for wood, N.J.A.C. 5:23-6.4).

**11. wood-shake-roofing-cost-guide** · slug `how-much-does-wood-shake-roofing-cost-in-nj`
H1 "How Much Does Wood Shake Roofing Cost in NJ?"
directAnswer: **wood shake (cedar) roofing installs at about $10–$20+ per square foot in New Jersey**,
with repairs at $400–$1,800 and recurring fungicide/algaecide maintenance at $0.15–$0.60 per square foot
(NHI Contractors NJ / Angi / HomeGuide). **(KILL invented whole-roof + lifecycle totals.)**
Sections: (a) "What Does Wood Shake Cost?" — install $10–$20+/sf (NHI Contractors NJ); repair $400–$1,800
(avg ~$750; small $100–$400, large $1,000+, Angi); shake replacement ~$600–$700 per square, labor ≈ 60–70%
(Modernize). (b) "What Drives the Price?" — material tier (hand-split vs graded bundle); the ventilated
assembly (≥1.5 in air space) adds labor; fire-retardant (pressure-impregnated) cedar where ratings apply;
tear-off required (N.J.A.C. 5:23-6.4); recurring maintenance $0.15–$0.60/sf (HomeGuide). (c) "Why Is NJ
Higher?" — NJ 10–40% above national (labor + code); NQR provides a free written estimate.

**12. wood-shake-roofing-decision** · slug `wood-shake-roofing-pros-and-cons-nj-homeowners`
H1 "What Are the Pros and Cons of Wood Shake Roofing?"
directAnswer: **wood shake's advantages are western red cedar's natural decay resistance and a 20-to-40-
year life with a distinct natural look; its drawback is recurring moisture-management maintenance, since
trapped moisture drives most cedar failure** (CSSB / NRCA).
Sections: (a) "What Are the Advantages of Wood Shake?" — western red cedar's natural extractives resist
decay (CSSB); 20–40 yr (shake) / 30–50 yr (shingle) when maintained; distinct natural aesthetic;
pressure-impregnated fire-retardant cedar reaches Class B/C (CSSB Certi-Guard). (b) "What Are the
Drawbacks of Wood Shake?" — moisture, not insects, drives failure → the assembly needs ≥1.5 in air space
or it decays early; recurring fungicide/algaecide ($0.15–$0.60/sf); shaded slopes degrade faster;
untreated cedar is nonclassified for fire (UL 790/ASTM E108); no recover-over (N.J.A.C. 5:23-6.4); Newark
freeze-thaw stresses trapped moisture. (c) "Is Wood Shake the Right Choice for Your Essex County Home?" —
fits a home whose character specifies cedar with a ventilated assembly and an owner committed to
maintenance; lower-maintenance/longer life favors [asphalt](/asphalt-shingle-roofing) or
[metal](/metal-roof-installation-repair); verify HIC registration + insurance, free written estimate.

### Metal roof installation & repair — `metal-roof-installation-repair` (gold 738–922)

**13. metal-roof-installation-repair-signs** · slug `metal-roof-installation-repair-warning-signs-nj`
H1 "What Are the Signs You Need Metal Roof Installation & Repair?"
directAnswer: the signs — **backed-out fasteners or failed washer seals** (exposed-fastener), **separated/
lifted standing seams**, **cut-edge corrosion/rust streaking**, **oil-canning/buckling**, or **panel
corrosion >20–25%** (InterNACHI / MCA / This Old House).
Sections: (a) "What Fastener and Seam Signs Point to Metal Repair?" — backed-out fasteners/failed washer
seals on exposed-fastener roofs (lap sealant fails in 5–10 yr); separated/lifted standing seams break the
continuous water layer where thermal expansion stresses long runs (MCA). (b) "What Corrosion Signs
Appear?" — cut-edge corrosion/rust streaking where the coating breaks at a cut/scratch (salt air from
nor'easters accelerates it); oil-canning/buckling = a roof fastened without adequate clip movement. (c)
"When Does a Metal Roof Need Replacement?" — at/past 40–80 yr life (copper 70+); panel corrosion >20–25%
or seam-connection damage >25% crosses the metal replace threshold; a detached re-roof is ordinary
maintenance (N.J.A.C. 5:23-2.7), but 2+ layers/water-soaked force full removal (5:23-6.4).

**14. metal-roof-installation-repair-cost-guide** · slug `how-much-does-metal-roof-installation-repair-cost-in-nj`
H1 "How Much Does Metal Roof Installation & Repair Cost in NJ?"
directAnswer: **metal roofing installs at $9–$16 per square foot in New Jersey**, with panel/section repair
at $5–$10 per square foot and individual repairs from $150 to $3,000 (Josten Roofing NJ / HomeGuide /
Modernize / Angi). **(KILL invented whole-roof totals + per-sf material splits.)**
Sections: (a) "What Does Metal Cost?" — install $9–$16/sf (Josten); panel/section repair $5–$10/sf
(HomeGuide); minor leak $200–$1,000, severe corrosion up to $3,000 (Modernize), seam re-weld $250–$1,100,
fastener fix $150–$1,000 (Angi). (b) "What Drives the Price?" — substrate/class (standing-seam vs
exposed-fastener vs copper, the highest-cost/longest-life); repair severity; tear-off vs install over
existing (N.J.A.C. 5:23-6.4); labor (Integrity). (c) "Why Is NJ Higher?" — NJ 10–40% above national
(Integrity); NQR provides a free written estimate.

**15. metal-roof-installation-repair-decision** · slug `metal-roof-installation-repair-pros-and-cons-nj-homeowners`
H1 "What Are the Pros and Cons of Metal Roof Installation & Repair?"
directAnswer: **metal's advantages are a 40-to-80-year life (copper 70+), two to four times asphalt, and
concealed-fastener standing seams with no surface penetrations; its drawbacks are a higher cost than
asphalt and thermal-movement management** (InterNACHI / This Old House / MCA).
Sections: (a) "What Are the Advantages of Metal?" — 40–80 yr life (copper 70+) serving through several
asphalt cycles (InterNACHI); standing-seam conceals fasteners → fewer leaks than exposed-fastener; aluminum
resists nor'easter salt air; metal shingles replicate slate/shake/tile; low maintenance. (b) "What Are the
Drawbacks of Metal?" — higher install ($9–$16/sf, NJ 10–40% above national); exposed-fastener washer seals
fail first (lap sealant 5–10 yr); oil-canning/seam separation from thermal expansion without clip movement;
cut-edge corrosion where the coating breaks. (c) "Is Metal the Right Choice for Your Essex County Home?" —
fits a multi-decade ownership wanting a 40–80-yr cover, standing-seam for the lowest leak risk; lower
upfront cost favors [asphalt](/asphalt-shingle-roofing) (20/30 yr); a flat/low-slope section needs a
[flat-roof membrane](/flat-roof-installation-repair); verify HIC registration + insurance, free written
estimate.

### Flat roof installation & repair — `flat-roof-installation-repair` (gold 923–1107)

**16. flat-roof-installation-repair-signs** · slug `flat-roof-installation-repair-warning-signs-nj`
H1 "What Are the Signs You Need Flat Roof Installation & Repair?"
directAnswer: the signs — **lifting/curling/separating seams**, **blistering/bubbling/ridging**, **EPDM
shrinkage** pulling from perimeters, **ponding >48 hr**, **spreading ceiling stains**, or a membrane
**at/past life** (EPDM 15–25, TPO 7–20, mod-bit 20 yr; InterNACHI / NRCA / ARMA).
Sections: (a) "What Seam and Surface Signs Point to Flat-Roof Repair?" — lifting/curling/separating seams
are the most common leak path (EPDM fails at the seams, TPO at the welded seams, InterNACHI); blistering/
bubbling/ridging = trapped moisture + mod-bit delamination from UV. (b) "What Membrane and Leak Signs
Appear?" — EPDM shrinkage pulling from perimeters/penetrations exposes the flashing; spreading ceiling
stains under a flat section = an active leak (the low slope concentrates water at a single defect). (c)
"When Does Ponding or Layers Confirm a New Roof?" — ponding >48 hr = a defect on a roof lacking ¼-in/ft
slope (NRCA/ARMA; standing water ≈ 5 lb/in/sf); a membrane past life, or a water-soaked/2+-layer roof,
forces full removal (N.J.A.C. 5:23-6.4).

**17. flat-roof-installation-repair-cost-guide** · slug `how-much-does-flat-roof-installation-repair-cost-in-nj`
H1 "How Much Does Flat Roof Installation & Repair Cost in NJ?"
directAnswer: **flat-roof repair runs $2.50–$10.00 per square foot in New Jersey (about $300–$1,100
typical)**, with EPDM installing at $7–$10 and TPO at $8–$12 per square foot (HomeGuide / Josten Roofing
NJ). **(KILL invented whole-roof totals + any PVC figure — this service is EPDM/TPO/mod-bit only.)**
Sections: (a) "What Does Flat-Roof Work Cost?" — repair $2.50–$10/sf or $300–$1,100 typical (HomeGuide);
minor leak $150–$500, extensive with structural damage $1,200–$3,000 (Angi); EPDM install $7–$10/sf, TPO
$8–$12/sf (Josten). (b) "What Drives the Price?" — membrane system (EPDM/TPO/modified bitumen); single
seam patch vs full membrane replacement; drainage correction + tapered insulation for the ¼-in/ft slope
(NRCA/ARMA); labor; tear-off when water-soaked or 2+ layers (N.J.A.C. 5:23-6.4). (c) "Why Is NJ Higher?" —
NJ 10–40% above national (labor + code, Integrity/Josten); NQR provides a free written estimate.

**18. flat-roof-installation-repair-decision** · slug `flat-roof-installation-repair-pros-and-cons-nj-homeowners`
H1 "What Are the Pros and Cons of Flat Roof Installation & Repair?"
directAnswer: **a flat-roof system's advantages are three proven membranes (EPDM, TPO, modified bitumen)
and a white TPO option that cuts cooling load; its drawback is a shorter life with seams that fail first
and ponding risk** (InterNACHI / NRCA / ARMA).
Sections: (a) "What Are the Advantages of a Flat Roof?" — three membranes match the building (EPDM 15–25,
TPO 7–20, mod-bit 20 yr); white TPO reflects solar radiation and cuts cooling load on a sun-exposed
section; EPDM gives durable single-ply coverage; a detached re-roof is ordinary maintenance (N.J.A.C.
5:23-2.7). (b) "What Are the Drawbacks of a Flat Roof?" — no gravity shed → a single failed seam
concentrates a large water risk; shorter life than steep-slope/BUR (TPO 7–20, mod-bit 20 vs BUR 30,
InterNACHI); seams fail first; ponding >48 hr breaks down seams + adds deck load; Newark freeze-thaw
stresses seams. (c) "Is a Flat Roof Membrane the Right Choice?" — fits rear extensions, garages, row-home
roofs, and low-slope sections where slope + membrane do the work; a steep-slope section favors
[asphalt](/asphalt-shingle-roofing) or [metal](/metal-roof-installation-repair); for an EPDM-specific
rubber roof see [rubber roofing](/rubber-roofing-epdm); verify HIC registration + insurance, free written
estimate.

### Tile roof installation & repair — `tile-roof-installation-repair` (gold 1108–1292)

**19. tile-roof-installation-repair-signs** · slug `tile-roof-installation-repair-warning-signs-nj`
H1 "What Are the Signs You Need Tile Roof Installation & Repair?"
directAnswer: the signs — **interior stains under a tile roof 30+ yr old** (failed underlayment, the real
limiter), **cracked/chipped/displaced tiles**, **tiles sliding out of alignment** (corroded fasteners),
**cracked ridge/hip mortar**, or **concrete-tile spalling/efflorescence** (Tile Roofing Industry Alliance
/ InterNACHI).
Sections: (a) "What Underlayment Signs Point to Tile Repair?" — interior stains under a 30+-yr tile roof =
failed underlayment, not failed tile (the underlayment is the lifespan limiter; clay lasts 100+ yr,
Tile Roofing Industry Alliance/InterNACHI); persistent untraceable leaks point to underlayment beneath
sound tile. (b) "What Tile and Mortar Signs Appear?" — cracked/chipped/displaced tiles expose the
underlayment (no field redundancy; foot-traffic/impact crack tiles); cracked ridge/hip mortar admits
water; concrete-tile spalling + white efflorescence = freeze-thaw moisture damage (the concrete-specific
failure). (c) "When Does Fastener or Structure Apply?" — tiles sliding out of alignment = corroded
fasteners releasing the tile; a tile roof loads the framing well above asphalt, so a structural assessment
precedes installation and a structural change triggers a permit (N.J.A.C. 5:23-2.7).

**20. tile-roof-installation-repair-cost-guide** · slug `how-much-does-tile-roof-installation-repair-cost-in-nj`
H1 "How Much Does Tile Roof Installation & Repair Cost in NJ?"
directAnswer: **tile roof repair runs $5–$25 per square foot in New Jersey (about $500–$2,500 total)**,
with concrete tile at $9–$18 and clay at $12–$25 per square foot and individual tiles $50–$300 each
(HomeGuide / Modernize). **(KILL invented whole-roof install totals + structural-engineer/reinforcement
dollar figures.)**
Sections: (a) "What Does Tile Work Cost?" — repair $5–$25/sf or $500–$2,500 (HomeGuide); concrete $9–$18/
sf, clay $12–$25/sf (Modernize/HomeGuide); individual tile $50–$300/tile; flashing/fastener $400–$3,000.
(b) "What Drives the Price?" — material tier (clay vs concrete); whether the failure is the tile, the
fastening, or the underlayment beneath (underlayment replacement beneath sound tiles preserves and resets
the original tile, costing less than full tile replacement, Tile Roofing Industry Alliance); labor ≈ 60%
(Integrity). (c) "Why Is NJ Higher?" — NJ 10–40% above national (labor + code); a structural assessment
confirms the framing carries the tile load; NQR provides a free written estimate.

**21. tile-roof-installation-repair-decision** · slug `tile-roof-installation-repair-pros-and-cons-nj-homeowners`
H1 "What Are the Pros and Cons of Tile Roof Installation & Repair?"
directAnswer: **tile's advantages are a 100-year-plus clay life and localized tile-by-tile repairability;
its drawbacks are weight that loads the framing and an underlayment that fails decades before the tile**
(InterNACHI / Tile Roofing Industry Alliance).
Sections: (a) "What Are the Advantages of Tile?" — clay outlasts most materials (100+ yr, InterNACHI) and
resists freeze-thaw well; the underlayment carries waterproofing while the tile sheds rain and shields it
from UV; repairs are localized (a broken tile resets individually, Tile Roofing Industry Alliance). (b)
"What Are the Drawbacks of Tile?" — weight far above asphalt → a structural assessment (and possibly a
permitted structural change, N.J.A.C. 5:23-2.7) precedes install; concrete tile's shorter 40–75-yr life +
freeze-thaw spalling/efflorescence; the underlayment fails first (a 30–50-yr roof needs a lift-and-
re-membrane even with sound tiles); ridge/hip mortar + fasteners corrode; no field redundancy once a tile
breaks. (c) "Is Tile the Right Choice for Your Essex County Home?" — fits a home whose framing carries the
load and wants a 100-yr clay (or 40–75-yr concrete) cover; framing that cannot carry it favors a lighter
[asphalt](/asphalt-shingle-roofing) or [metal](/metal-roof-installation-repair) covering; verify HIC
registration + insurance, free written estimate.

### Cedar shake roofing — `cedar-shake-roofing` (gold 1293–1470)

**22. cedar-shake-roofing-signs** · slug `cedar-shake-roofing-warning-signs-nj`
H1 "What Are the Signs You Need Cedar Shake Roofing?"
directAnswer: the signs — a cedar roof **at/past its 20-to-40-year life**, shakes **cupped/curled/split**,
a shake that **cracks under the flex test**, **deep moss/lichen** prying shake edges, or **deck decay
across >15%** (CSSB / InterNACHI / This Old House).
Sections: (a) "When Has a Cedar Roof Reached End-of-Life?" — cedar shake 20–40 yr (CSSB); InterNACHI lists
wood at 25 yr; a shake that cracks under light bending fails the InterNACHI flex test regardless of
surface look. (b) "What Surface and Moisture Signs Appear?" — cupped/curled/split shakes = moisture-cycling
degradation (the dominant cedar failure); deep moss/lichen prying edges retains moisture; spreading ceiling
stains = a leak or trapped attic moisture (GAF/This Old House). (c) "When Does Area or Deck Decay Favor
Replacement?" — cupping/splitting across >25–30% favors full replacement (CSSB); deck/sheathing decay
across >15% crosses the structural threshold; untreated cedar is nonclassified for fire (UL 790/ASTM
E108); a cedar re-roof on a detached home is ordinary maintenance (N.J.A.C. 5:23-2.7).

**23. cedar-shake-roofing-cost-guide** · slug `how-much-does-cedar-shake-roofing-cost-in-nj`
H1 "How Much Does Cedar Shake Roofing Cost in NJ?"
directAnswer: **cedar shake roofing installs at $10–$20+ per square foot in New Jersey**, with repairs at
$400–$1,800 and recurring preservative/cleaning maintenance at $0.15–$0.60 per square foot (NHI Contractors
NJ / Angi / HomeGuide). **(KILL invented whole-roof + lifecycle totals + per-shake dollar figures.)**
Sections: (a) "What Does Cedar Shake Cost?" — install $10–$20+/sf (NHI Contractors NJ); repair $400–$1,800
(small $100–$400, large $1,000+, Angi/HomeGuide); preservative/cleaning $0.15–$0.60/sf every few years
(HomeGuide). (b) "What Drives the Price?" — material tier (hand-split vs graded bundle); fire-retardant
(pressure-impregnated) cedar where ratings apply; the ventilated assembly; tear-off required (no
recover-over, N.J.A.C. 5:23-6.4); recurring maintenance cadence. (c) "Why Is NJ Higher?" — NJ 10–40% above
national (labor + code); NQR provides a free written estimate.

**24. cedar-shake-roofing-decision** · slug `cedar-shake-roofing-pros-and-cons-nj-homeowners`
H1 "What Are the Pros and Cons of Cedar Shake Roofing?"
directAnswer: **cedar shake's advantages are western red cedar's natural decay resistance and a 20-to-40-
year life with a natural patina; its drawback is the recurring preservative/cleaning maintenance moisture
management demands** (CSSB / NRCA).
Sections: (a) "What Are the Advantages of Cedar Shake?" — western red cedar's natural extractives resist
decay; 20–40 yr when moisture is managed (CSSB); hand-split cedar's natural patina (weathers to silver-
gray); pressure-impregnated fire-retardant cedar reaches Class B/C (CSSB Certi-Guard); a detached re-roof
is ordinary maintenance (N.J.A.C. 5:23-2.7). (b) "What Are the Drawbacks of Cedar Shake?" — moisture
management sets the lifespan → the assembly needs ≥1.5 in air space or it decays early; north/shaded
slopes degrade faster; cupping/curling/splitting from moisture cycling; recurring preservative/cleaning
($0.15–$0.60/sf); untreated cedar is nonclassified for fire (UL 790/ASTM E108); no recover-over (N.J.A.C.
5:23-6.4). (c) "Is Cedar Shake the Right Choice for Your Essex County Home?" — fits a homeowner wanting
cedar's natural look over a ventilated deck and committed to maintenance; a shallow slope needs a
[rubber/EPDM membrane](/rubber-roofing-epdm) instead; verify HIC registration + insurance, free written
estimate.

### Rubber roofing (EPDM) — `rubber-roofing-epdm` (gold 1471–end)

> Keep DISTINCT from flat-roof (#16–18): this service is **EPDM-specific** — the rubber single-ply,
> its splice-seam failure, perimeter shrinkage, freeze-thaw flexibility, and localized patch/re-weld/
> section repair. Position EPDM *against* TPO (7–20 yr) and modified bitumen (20 yr) as alternatives,
> rather than re-running the 3-membrane flat-roof comparison.

**25. rubber-roofing-epdm-signs** · slug `rubber-roofing-epdm-warning-signs-nj`
H1 "What Are the Signs You Need Rubber Roofing EPDM?"
directAnswer: the signs — **seam separation along the membrane laps** (the most common EPDM failure),
**punctures/cuts/tears**, **membrane shrinkage** pulling from perimeters, **ponding >48 hr**, or a roof
**at/past its 15-to-25-year life** (InterNACHI / HomeGuide / NRCA).
Sections: (a) "What Seam and Membrane Signs Point to EPDM Repair?" — seam separation along the laps is the
most common EPDM failure (the seam adhesive breaks down before the membrane field, HomeGuide); punctures/
cuts/tears open the rubber to water (a small patch reseals it, Modernize). (b) "What Perimeter and Leak
Signs Appear?" — membrane shrinkage pulls the EPDM from perimeter edges/penetrations, exposing the
flashing (the secondary failure after the seams); spreading ceiling stains under a flat section = an active
leak at a seam, puncture, or flashing detail (GAF/This Old House). (c) "When Does Ponding or Age Confirm
Replacement?" — ponding >48 hr = a defect that stretches the membrane (a flat roof needs ¼-in/ft slope,
NRCA/ARMA); at/past 15–25 yr, seam and flashing failures recur across the roof (InterNACHI).

**26. rubber-roofing-epdm-cost-guide** · slug `how-much-does-rubber-roofing-epdm-cost-in-nj`
H1 "How Much Does Rubber Roofing EPDM Cost in NJ?"
directAnswer: **EPDM rubber roofing installs at $7–$10 per square foot in New Jersey**, with repairs at
$2.50–$10 per square foot (about $300–$1,100 typical) and a small patch at $300–$500 (Josten Roofing NJ /
HomeGuide / Modernize). **(KILL invented whole-roof totals + $5–$9/sf + R-value/recover percentages.)**
Sections: (a) "What Does EPDM Cost?" — install $7–$10/sf (Josten); repair $2.50–$10/sf or $300–$1,100
typical (HomeGuide); small patch $300–$500, seam re-weld $200–$400, section replacement $500–$1,000
(Modernize/WeatherShield). (b) "What Drives the Price?" — whether the work is a small patch, a seam
re-weld, or a section replacement; drainage/slope correction to stop ponding (NRCA/ARMA); tear-off when
water-soaked or 2+ layers (N.J.A.C. 5:23-6.4). (c) "Why Is NJ Higher?" — NJ 10–40% above national (labor +
code, Josten); NQR provides a free written estimate.

**27. rubber-roofing-epdm-decision** · slug `rubber-roofing-epdm-pros-and-cons-nj-homeowners`
H1 "What Are the Pros and Cons of Rubber Roofing EPDM?"
directAnswer: **EPDM's advantages are a 15-to-25-year rubber membrane that stays flexible through Essex
County freeze-thaw and localized, accessible repairs; its drawback is splice seams that fail before the
membrane field** (InterNACHI / HomeGuide / NOAA).
Sections: (a) "What Are the Advantages of EPDM?" — a single-ply rubber membrane waterproofing low-slope
sections too shallow for shingles; 15–25 yr, longer than TPO at 7–20 (InterNACHI); stays flexible through
the Newark Jan low ~25.5°F freeze-thaw (NOAA), so cycling stresses the seams rather than cracking the
field; repairs are localized and accessible (patch $300–$500, seam re-weld $200–$400, Modernize/
WeatherShield). (b) "What Are the Drawbacks of EPDM?" — fails most often at the splice seam (the adhesive
breaks down before the field, HomeGuide); membrane shrinkage opens flashing leak paths at perimeters;
ponding >48 hr degrades the membrane + adds deck load; punctures/cuts need a bonded patch. (c) "Is EPDM
the Right Choice for Your Essex County Home?" — fits a flat/low-slope rear extension, garage, porch, or
row-home roof too shallow for shingles; a sun-exposed section wanting reflectance or the broader membrane
comparison favors the [flat-roof systems](/flat-roof-installation-repair) service (TPO/modified bitumen);
verify HIC registration + insurance, free written estimate.
