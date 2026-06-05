# Solar Shingle Installation — Draft Doc (Batch 6, energy-solar #2 of 5)

**serviceId:** `solar-shingle-installation`
**isResidential:** true · **isCommercial:** false (concise honest commercial block still written)
**Macro angle:** BIPV solar shingles as a ROOF-COVERING REPLACEMENT (not a retrofit add-on), with honest positioning vs rack-mounted panels (cost ↑, efficiency ↓, area ↑). Primary fact source = `facts-energy-solar.md` Part B + §0.

---

## Rendered heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Answered by |
|---|---|
| H1 "Who Provides Solar Shingle Installation in Newark?" | `directAnswer` |
| H2 "What Solar Shingle Installation Do We Provide?" | `overview[]` + `subServices[]` |
| H2 "How Do You Know If You Need Solar Shingle Installation?" | `signs[]` (label = `signsHeading`) |
| H2 "How Do Our Roofing Contractors Perform Solar Shingle Installation?" | `approachContent[]` / `approachSubheadings[]` |
| H2 "How Much Does Solar Shingle Installation Cost?" | `pricing.range` + `pricing.factors[]` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[]` item ("Should you repair or replace your roof before solar shingles?") |
| H2 "Why Choose Our Roofing Company for Solar Shingle Installation?" | `whyChooseUs.reasons[]` |
| Related services / KB / scheduling H2s | rendered by template (no field) |
| Residential block | `residential{heading,content,ctaLabel}` |
| Commercial block | `commercial{heading,content,ctaLabel}` |
| Process | `processSteps[]` |
| FAQ | `faqs[]` |

---

## Named sources used → exact figure each is attributed to

| Named source | Figure / claim attributed in-text |
|---|---|
| DOE Office of Energy Efficiency and Renewable Energy (EERE) | BIPV = the PV IS the roof covering; solar shingle replaces the roof / pairs with reroof; flat/low-slope takes panels not shingles |
| IEA-PVPS | BIPV vs BAPV (building-applied = rack-mounted panels on top) |
| GAF Energy | Timberline Solar = world's first nailable solar shingle; 57 W/shingle; ~16.7 W/sq ft; installs with same nail gun/crew as Timberline asphalt shingles; pitch ≥2:12; UL 7103 BIPV cert; ASTM D3161 Class F ~130 mph; UL 2218 Class 4; UL 790 Class A; Solar Max warranty addendum requires certified install |
| Tesla | Solar Roof 72 W/active tile; full-replacement; active + inactive tiles read as one uniform surface; pitch ≥2:12 |
| CertainTeed | Solstice 70 W/shingle; 19.85% module efficiency; ~16.1 W/sq ft; new roof / reroof only — cannot go over an existing roof |
| SunTegra | Shingle (named among Class 4 hail / Class A fire products) |
| SolarReviews | 6 kW needs ~360 sq ft shingles vs ~250 sq ft panels (~44% more area); efficiency cluster ~14–18% vs >20% panels; per-watt cost comparison |
| EnergySage | solar shingles ~$3.50–$8.00/W vs ~$2.50–$4.00/W panels (~1.5–2×) |
| WattBuild | per-watt cost comparison (~1.5–2×) |
| NREL | module efficiency ~14–18% vs >20% premium panels |
| IRS (P.L. 119-21 / OBBB) | §25D residential solar credit (30% through 2025) REPEALED for systems completed after Dec 31, 2025; §48E commercial credit (solar facilities terminate after Dec 31, 2027 unless construction begins within 12 mo of enactment) |
| NJ Board of Public Utilities (NJBPU) | Successor Solar Incentive (SuSI) program; fixed per-MWh SREC-II over 15-year term; net metering (full retail up to annual usage) |
| NJ Division of Taxation | sales-tax exemption (6.625%) via Form ST-4; property-tax exemption via Form CRES |
| NEC 690.12 (NFPA 70) | rapid shutdown: ≤30 V outside / ≤80 V inside array boundary within 30 s |
| UL 3741 | listed PV hazard control system option for inside-boundary rapid shutdown |
| NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | reroof of covering on detached 1–2 family = ordinary maintenance; PV/electrical work carries its own permits |

**Quantitative figures used (all from facts-energy-solar.md Part B / §0):** 3 named products; 57 W / 72 W / 70 W; 16.7 W/sq ft; 16.1 W/sq ft; 19.85% efficiency; pitch 2:12; ~130 mph (ASTM D3161 Class F); UL 2218 Class 4; UL 790 Class A; UL 7103; ~360 vs ~250 sq ft (~44% more) for 6 kW; $3.50–$8.00/W vs $2.50–$4.00/W (~1.5–2×); efficiency 14–18% vs >20%; NEC 690.12 (30 V / 80 V / 30 s); §25D 30% / Dec 31 2025; §48E / Dec 31 2027; 15-year SREC-II term; 6.625% sales tax; ST-4 / CRES.

**No hard number used without a named source.** No SREC-II $/MWh on-page (per §0.7 — stated qualitatively as "fixed per-MWh SREC-II incentive"). No coating R-value claim. No "cool roof" energy-saver framing for solar shingles (§0.5 — solar shingles framed only as aesthetics/integration vs efficiency/value). No federal 30% credit touted as current (§0.2 — framed historically + repealed). No NQR certification/dealer claim (§0.6 — products named with manufacturer attribution; "Solar Max addendum requires a certified install" attributed to GAF Energy, NOT claimed for NQR). Walkability NOT asserted (UNVERIFIED). Module efficiency for GAF ES 2 / Tesla NOT pinned to a number (stated as cluster range from SolarReviews/NREL).

---

## Proposed metadata (for the Service registry — NOT part of the ServiceContent object; de-fab-clean)

- **metaTitle (≤80):** `Solar Shingle Installation in Newark, NJ | Newark Quality Roofing` (60 chars)
- **metaDescription (≤160):** `Newark Quality Roofing installs GAF Energy Timberline Solar, Tesla Solar Roof, and CertainTeed Solstice solar shingles across Essex County, NJ. Free estimate.` (155 chars)
- No banned de-fab literals (no "24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "N+ years", fabricated ratings/phone/address).

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — `directAnswer` (35 words, ≤40) and the FIRST string of every multi-item field (`overview[0]`, `signs[0..5]`, `approachContent[0..2]`, `residential.content[0]`, `commercial.content[0]`, every `faqs[].answer`) opens with a `**…**` definitive answer clause. Continuation paragraphs (`overview[1]`, `residential.content[1]`, `commercial.content[1]`) are intentionally unbolded — matches the gold exemplar `roof-repair` pattern.
- [x] **Zero modality in declaratives** — grepped `will|should|must|might|may|would|could|need to|have to` across the snippet; the only "should" occurrences are in `faqs[].question` fields (exempt). The single declarative "would need" was removed. NONE remain in declarative prose.
- [x] **Every number named-sourced** — every digit/figure has an in-text named source from the fact packs (GAF Energy, Tesla, CertainTeed, SunTegra, SolarReviews, EnergySage, WattBuild, NREL, DOE EERE, IEA-PVPS, IRS, NJ Board of Public Utilities, NJ Division of Taxation, NEC, UL, ASTM). No invented numbers; no SREC-II $/MWh.
- [x] **Counted plurals match item count** — "3 building-integrated solar-shingle systems" / "3 solar-shingle products" = GAF + Tesla + CertainTeed (3). `subServices` has 4 entries (3 products + reroof pairing) and is NOT introduced by a "3"/"4" miscount in prose.
- [x] **approachSubheadings.length === approachContent.length** — 3 === 3.
- [x] **No de-fab literals** — grep clean (no 24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, N+ years, [VERIFY], [UNVERIFIED]).
- [x] **No outbound links / URLs** — grep clean (no `https?://`, `<a `, `www.`).
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers']`.
- [x] **No pronoun co-reference to entities** — repeats "Newark Quality Roofing", "the solar shingle", "the roof covering", "the array", "the named products" instead of it/they/this/that/there.
- [x] **No hype words** — no best/leading/trusted/premier/top-rated/seamless-as-praise.
- [x] **One macro topic** — solar-shingle BIPV roof-covering replacement from H1 to closing; primary n-gram "solar shingle" repeats in `directAnswer` and the final `whyChooseUs` / pricing sections.
- [x] **Honest positioning** — solar shingles framed as aesthetics/integration choice (cost ↑ ~1.5–2×, efficiency ↓ ~14–18% vs >20%, area ↑ ~44%), never an efficiency or value win.
- [x] **Schema-valid** — `ServiceContentSchema.safeParse` returns `success: true`; field counts within bounds (overview 2, signs 6, approachContent 3, processSteps 6, faqs 7, pricing.factors 5, whyChooseUs.reasons 4).
- [x] **Snippet format** — leading comment `// ─── 2. Solar Shingle Installation ───`, then `{`, ends with `},`; single quotes; curly apostrophes (no escaping risk); en-dashes for ranges; parses as one array element.
