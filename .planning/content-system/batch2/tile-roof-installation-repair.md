# Tile Roof Installation and Repair — Answer-First Rewrite Draft

**serviceId:** `tile-roof-installation-repair`
**Batch:** 2 (full-site rewrite)
**Quality bar:** human-approved gold exemplar (`roof-repair`)
**Snippet:** `./tile-roof-installation-repair.snippet.ts`

---

## Rendered-heading → field map

The page templates render question-form H1/H2 strings from `HEADING_CONFIG.service`.
Each field below OPENS with a bolded definitive answer to its rendered heading.

| Rendered heading (question form) | Source field | Opening answer (bolded span) |
|---|---|---|
| **H1** — "Who Provides Tile Roof Installation and Repair in Newark?" | `directAnswer` | "Newark Quality Roofing installs and repairs clay and concrete tile roofs across Newark and Essex County, replacing broken tiles, repairing failed underlayment, and resealing ridge, hip, and flashing details" (36 words) |
| **H2** — "What Tile Roof Installation and Repair Do We Provide?" | `overview` | "Newark Quality Roofing performs 6 tile roof services across Essex County: new clay tile installation, new concrete tile installation, broken-tile replacement, underlayment replacement, ridge-and-hip resealing, and flashing repair" |
| **H2** — "How Do You Know If You Need Tile Roof Installation and Repair?" | `signs` (intro = `signsHeading`) | "Cracked, chipped, or displaced tiles expose the underlayment to wind-driven rain…" (each sign opens with a bolded condition) |
| **H2** — "How Do Our Roofing Contractors Perform Tile Roof Installation and Repair?" | `approachContent` (+ `approachSubheadings`) | "Newark Quality Roofing contractors verify the structural load and diagnose the failed layer — tile, fastening, or underlayment — before quoting tile roof work…" |
| **H2** — "How Much Does Tile Roof Installation and Repair Cost?" | `pricing` (+ FAQ cost Q) | "Tile roof repair costs $500–$2,500, or $5–$25 per square foot, with individual tile replacement at $50–$300 per tile and flashing repair at $400–$3,000" |
| **H2** — "Why Choose Our Roofing Company for Tile Roof Installation and Repair?" | `whyChooseUs` | 4 reasons, each opening with the NQR credential (NJ HIC, Insured, Free Inspections, Local) |

Supplementary rendered fields: `residential` ("Residential Tile Roofing"), `commercial` ("Tile Roofing for Commercial Properties"), `processSteps` (6 steps), `subServices` (6), `faqs` (7), `credentialsHighlight` (4 badges).

### Structural/legacy fields kept verbatim (so the Zod schema validates)
`serviceId`, `signsHeading` ("Signs You Need Tile Roof Installation or Repair"), `approachHeading` ("Our Tile Roof Installation and Repair Approach"), `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, `ctaLabel` ("Get Home Estimate" / "Get Commercial Quote"). All prose content rewritten.

---

## Named sources used (with the figures cited in-text)

Every hard number is attributed in-text to a named authority that appears in the fact packs.

| Figure / fact | Named authority cited in-text | Fact-pack location |
|---|---|---|
| Clay/concrete tile lasts **100 years or more** (tile itself) | InterNACHI life-expectancy chart | facts-materials-economics §0, §6 [PRIMARY] |
| Clay tile **often 75 years or more**; underlayment fails first / is the real lifespan limiter | Tile Roofing Industry Alliance | facts-materials-economics §6 [PRIMARY-named] |
| Concrete tile typical **40 to 75 years** | Tile Roofing Industry Alliance | facts-materials-economics §6 [SECONDARY-attrib] |
| Tile repair **$500–$2,500**, or **$5–$25 per sq ft** | HomeGuide | facts-materials-economics §6 [SECONDARY] |
| Replace individual broken tiles **$50–$300 per tile**; flashing/fastener **$400–$3,000** | HomeGuide | facts-materials-economics §6 [SECONDARY] |
| Concrete tile repair **$9–$18 / sq ft**; clay **$12–$25 / sq ft** | Modernize / HomeGuide | facts-materials-economics §6 [SECONDARY] |
| Replace at **>20–25% (clay) / 15–20% (concrete)** tiles broken/moved/fastening corroded | contractor consensus (stated qualitatively as "contractor-consensus rules") | facts-materials-economics §6 [SECONDARY] |
| Tile failures mostly structural (foot-traffic breakage, moss in interlocks, corroded fasteners → slippage, spalling, efflorescence) | Tile Roofing Industry Alliance | facts-materials-economics §6 [PRIMARY-attrib, qualitative] |
| **NJ ranges sit 10–40% above national** figures; labor ~60% of repair total | (regional consensus) / Integrity Home Exteriors | facts-materials-economics §7; facts-process-standards §1 |
| Newark crosses 32°F repeatedly; **average January low ~25.5°F** | NOAA 1991–2020 normals, Newark Liberty (EWR) | facts-nj-regulatory-climate §3.2 |
| Re-roof/repair of covering on detached 1- & 2-family home = ordinary maintenance, **no permit** — N.J.A.C. 5:23-2.7 | NJ Uniform Construction Code | facts-nj-regulatory-climate §1.1 |
| Commercial: repair **>25% of roof area in 12 months** requires a permit — N.J.A.C. 5:23-2.7 | NJ Uniform Construction Code | facts-nj-regulatory-climate §1.2 |
| Structural change to rafters/trusses/ridge beams triggers a permit — N.J.A.C. 5:23-2.7(b) | NJ Uniform Construction Code | facts-nj-regulatory-climate §1.3 |
| Permitted job: complete removal of existing **clay/tile covering** (no recover-over) — N.J.A.C. 5:23-6.4 | NJ Rehabilitation Subcode | facts-nj-regulatory-climate §1.4 |
| NJ HIC registration required of every NJ roofing contractor | NJ Division of Consumer Affairs | facts-nj-regulatory-climate §2 |
| Liability coverage required of a registered HIC | Contractors Registration Act | facts-nj-regulatory-climate §2.3 |
| Inspection / verification / magnet-sweep / written estimate workflow | Integrity Home Exteriors | facts-process-standards §1 |

### Material accuracy guardrails applied
- Tile grounded in its real lifespan: **clay 100+ (written "100 years or more"), concrete 40–75**. No overclaim beyond the sourced InterNACHI/TRI figures.
- The page repeatedly states the TRI fact that the **underlayment, not the tile, is the lifespan limiter** — the defining attribute of tile-roof economics, ordered first (R27).
- `pricing.range` uses a **tile-appropriate REPAIR figure** ($500–$2,500+), sourced to HomeGuide — not a fabricated install range. Matches the gold exemplar's repair-scoped pricing treatment.
- `financingNote` OMITTED (0% financing is a fabricated trust claim).

---

## Withheld [VERIFY] / fabricated NQR specifics (omitted, NOT rendered)

Per D-01 and the de-fabrication rules, the following were OMITTED or stated qualitatively — never rendered, never written as a literal `[VERIFY]`/`[UNVERIFIED]` placeholder in the snippet. (Source: `sources-and-nqr-facts.md` Part B.)

1. **NJ HIC license number** (13VH######00) — omitted; "NJ HIC Licensed" stated qualitatively without a number.
2. **Physical street address / ZIP / geo coordinates** — omitted; service-area-only ("across Essex County", named cities).
3. **Published phone number** — omitted (env-driven; fabricated default forbidden).
4. **Years in business / founding year** ("15+ years") — omitted; no tenure claim rendered (also a gated de-fab literal).
5. **Projects-completed count** ("500+") — omitted.
6. **Aggregate rating / review count / "5-star" / "top-rated"** — omitted (rating disabled in config).
7. **GAF Certified / Master Elite (or any certified-installer tier)** — omitted; NQR's actual certification is [VERIFY]. The page makes no manufacturer-certification claim and names no specific tile-manufacturer warranty.
8. **"Fully bonded" / specific insurance carrier & coverage** — omitted; "Insured" stated qualitatively (liability coverage required of a registered HIC).
9. **BBB accreditation / "A+ rated"** — omitted.
10. **"24/7" / "same-day" / emergency-response and callback-time claims** — omitted; hours stated factually (Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM, from canonical `site-config.ts`).
11. **0% financing / payment-plan terms** — omitted; `financingNote` dropped.
12. **NQR workmanship-warranty term** (length unknown) — stated qualitatively as "a written workmanship warranty on the labor"; no number rendered.

### Known trap honored
- **Freeze-thaw "cycles per winter" COUNT is [UNVERIFIED]** — NO cycle count rendered. NJ freeze-thaw is described **qualitatively** ("crosses the 32-degree freezing point repeatedly through winter") plus the one verified NOAA figure (average January low ~25.5°F). The old entry's invented "25 to 35 freeze-thaw cycles" was dropped.
- Invented "X% of failures are caused by Y" tile percentages (e.g., "92% structural") — NOT used; failure modes stated qualitatively per TRI.
- Old entry's fabricated specifics removed: "2,000°F kiln", "900–1,200 lbs per square" exact weight (kept qualitative "well above an asphalt roof"), "30–40% less than clay", "ASCE 7", "absorption below 0.25%", "breakage moduli above 9,000 psi" — none are in the fact packs, all dropped.

---

## Self-audit result (gate rules)

- ANSWER-FIRST: `directAnswer` 36 words; every section/FAQ opens with a bolded answer span. PASS
- R6 modality (will/shall/should/need to/needs to/have to/has to/must/ought to) in body/answers: **0**. PASS
- R9 outbound links / URLs: **0**. PASS
- R10 `[VERIFY]`/`[UNVERIFIED]` literals: **0**. PASS
- R10 de-fab literals (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+ experience, N+ count, fake NAP): **0**. PASS
- `**` bold markers balanced (38, even). PASS
- Counted plural "6 tile roof services" = `subServices` length 6. PASS
- All 16 gold field names present; `financingNote` absent. PASS
- Material figures all attributed to InterNACHI / TRI Alliance / HomeGuide / Modernize / NOAA / NJ UCC / Integrity Home Exteriors (all in fact packs). PASS
