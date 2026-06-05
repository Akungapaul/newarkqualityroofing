# Cedar Shake Roofing — Answer-First Rewrite Draft (Batch 2)

`serviceId: 'cedar-shake-roofing'` · page slug `/cedar-shake-roofing` · category: Residential Roof Types

Quality bar = the human-approved `roof-repair` gold exemplar. De-fabricated, answer-first, named-source attribution, no modality in declaratives, no outbound links, no fabricated trust claims.

---

## Rendered-heading → field map

The rendered H1/H2 strings come from `HEADING_CONFIG.service` (interpolated with `[Service] = "Cedar Shake Roofing"`). Each field's prose OPENS with a bolded definitive answer to its rendered heading.

| Rendered heading (from HEADING_CONFIG) | Field that answers it | Opening bolded answer (summary) |
|---|---|---|
| **H1:** Who Provides Cedar Shake Roofing in Newark? | `directAnswer` | Newark Quality Roofing provides cedar shake roofing across Newark and Essex County, installing and repairing western red cedar shake roofs that last 20–40 years over a ventilated deck, as a NJ HIC. |
| **H2:** What Cedar Shake Roofing Do We Provide? | `overview` (+ `subServices`) | Newark Quality Roofing provides 4 cedar shake roofing services: new installation, repair/shake replacement, the ventilated interlayment deck system, and preservative/cleaning maintenance. |
| **H2:** How Do You Know If You Need Cedar Shake Roofing? | `signs` (`signsHeading` kept legacy) | 6 cedar warning signs, each opening with a bolded sign + what it indicates (cupping/split, flex-test failure, deep moss, end-of-life, deck decay, interior stains). |
| **H2:** How Do Our Roofing Contractors Perform Cedar Shake Roofing? | `approachContent` (+ `approachSubheadings`) | Newark Quality Roofing builds the ventilation path first (≥1.5 in underside air space), then hand-grades and installs each shake with stainless-steel fasteners matched to the 20–40-yr cedar life. |
| **H2:** How Much Does Cedar Shake Roofing Cost? | `pricing` (+ cost FAQ) | Premium cedar shake runs $10–$20+/sq ft installed; repair $400–$1,800; maintenance $0.15–$0.60/sq ft. |
| **H2:** Why Choose Our Roofing Company for Cedar Shake Roofing? | `whyChooseUs` (legacy `heading` kept) | NJ HIC; Insured; CSSB grade standards + ventilated deck; Local Essex County roofers. |
| (also: Should You Repair or Replace? / Related Services / KB / Schedule — handled by template, not this content object) | `faqs`, `residential`, `commercial`, `processSteps` feed the supporting sections | — |

**Structural/legacy fields kept verbatim so the Zod schema still validates:** `serviceId`, `signsHeading` ("Signs You Need Cedar Shake Roofing"), `approachHeading` ("Our Cedar Shake Roofing Approach"), `approachSubheadings`, `residential.heading` ("Residential Cedar Shake Roofing"), `commercial.heading` ("Cedar Shake Roofing for Commercial Properties"), `whyChooseUs.heading`, `ctaLabel`s. All PROSE rewritten.

---

## Material grounding — Cedar shake (real facts only)

Primary pack: `facts-materials-economics.md` §5 (Wood/cedar) + §7 (NJ pricing). Cross-checked vs `facts-causes-signs.md`, `facts-process-standards.md`, `facts-nj-regulatory-climate.md`.

- **Lifespan:** Cedar **shake 20–40 yr** (Cedar Shake & Shingle Bureau); InterNACHI life-expectancy chart lists all "Wood" (shakes + shingles) at **25 yr**. Both cited; CSSB is the cedar-specific authority, InterNACHI is the consolidated chart. No overclaim beyond these sourced figures.
- **Failure driver:** moisture, not the cedar — cupping/warping from moisture cycling, edge splitting, deep moss/lichen, rot beneath cupped shakes; needs **≥1.5 in air space** beneath shakes for drying; north-facing/shaded slopes degrade faster (CSSB/NRCA). Flex test = advanced degradation (InterNACHI).
- **Repair-vs-replace:** replace at **>25–30%** cupped/split shakes, or deck damage **>15%** of area (industry consensus); flex test (InterNACHI).
- **Maintenance:** clear moss/debris + reapply preservative ≈ **$0.15–$0.60/sq ft** every few years (HomeGuide).

---

## Named sources used (with the figures cited in-text)

| Named authority (Source Register A / fact packs) | Figure / fact used on-page |
|---|---|
| **Cedar Shake and Shingle Bureau (CSSB)** | Cedar shake **20–40 yr** lifespan; **≥1.5 in** underside air-space drying requirement; north/shaded slopes degrade faster; moisture-cycling = dominant failure mode; grade standards; woven ridge/hip; maintenance cadence. |
| **InterNACHI** (life-expectancy chart) | "Wood" roofing **25-yr** service life; **flex test** as the advanced-degradation indicator. |
| **NRCA** | Ventilation **1 sq ft net-free vent per 150 sq ft attic**; balanced ventilation extends roof life **up to 25%**; inspect **twice per year, spring + fall**, plus after any major storm. |
| **ARMA** | Co-cited with NRCA on the 1:150 net-free attic-ventilation ratio. |
| **NHI Contractors (NJ)** | Premium cedar/tile/slate install **$10–$20+ / sq ft** in NJ. |
| **Angi** | Wood/cedar shake repair **$400–$1,800**. |
| **HomeGuide** | Cedar repair small **$100–$400**, large **$1,000+**; preservative/cleaning maintenance **$0.15–$0.60 / sq ft** every few years. |
| **NJ Uniform Construction Code (N.J.A.C. 5:23-2.7)** | Detached 1- & 2-family re-roof = ordinary maintenance, **no permit**; commercial repair **>25%** of roof area in 12 mo = permit; structural change to rafters/trusses = permit. |
| **NJ Rehabilitation Subcode (N.J.A.C. 5:23-6.4)** | Wood-shake / slate / tile covering triggers **complete removal** (no recover-over). |
| **NOAA** (1991–2020 normals, Newark Liberty EWR) | Average **January low near 25.5°F** (qualitative cold-climate framing; NO freeze-thaw cycle count rendered). |
| **Underwriters Laboratories (UL)** | Fire-rating classes — untreated cedar **Class C**; pressure-treated fire-retardant cedar reaches **Class A / Class B** (qualitative; no fabricated numeric in the pack). |
| **GAF / This Old House** | Interior ceiling/wall stains = active leak or trapped attic moisture (warning-sign attribution). |
| **Integrity Home Exteriors** | Written-estimate documentation + verification/cleanup process-step attribution. |

NJ "**10–40% above national**" framing is the cross-pack regional consensus (`facts-materials-economics.md` §7), attributed in-text as "regional cost guidance" (no single named aggregator claims the spread).

---

## Withheld [VERIFY] / fabricated NQR specifics (omitted, per D-01 — never rendered, never placeholdered)

From `sources-and-nqr-facts.md` Part B — each OMITTED or stated qualitatively, never as a literal placeholder:

- **Phone number** — env-driven, no canonical value; omitted.
- **Physical street address / ZIP / geo coordinates / service radius** — OMITTED in canonical config; service area stated qualitatively as "across Essex County" + named cities.
- **NJ HIC license number** (13VH######00 format) — OMITTED; only the *type* ("New Jersey Home Improvement Contractor") asserted, mirroring the gold exemplar.
- **Insurance carrier / coverage amount / workers'-comp / "fully bonded"** — OMITTED; only the qualitative "carries liability coverage … required by the Contractors Registration Act" (gold-exemplar wording) used. "Bonded" NOT claimed.
- **Years in business / founding year ("15+ years")** — OMITTED (fabricated marketing literal).
- **Projects completed ("500+")** — OMITTED.
- **Aggregate rating / star ratings / review counts / "5-star"** — OMITTED (rating disabled in canonical).
- **GAF "Certified" / "GAF Certified Contractor" / "Master Elite"** — OMITTED; NQR's certification tier is [VERIFY]. No manufacturer-cert credential asserted. (Cedar is graded to **CSSB** standards — a material grade claim, not an NQR certification.)
- **Manufacturer warranty term ("up to 50 years") / NQR workmanship warranty length** — OMITTED ([VERIFY]).
- **"24/7" / "same-day estimates" / callback time / "1-hour"** — OMITTED.
- **"0% financing" / `financingNote` / payment plans** — OMITTED entirely (no `financingNote` field emitted).
- **BBB accreditation / "A+ rated"** — OMITTED.

## Known-trap compliance

- **Freeze-thaw "cycles per winter" COUNT is [UNVERIFIED]** → NO numeric cycle count rendered. NJ cold/freeze stress framed qualitatively via the sourced NOAA **January low ~25.5°F** only.
- **Per-material failure-share percentages** (e.g. "89% moisture") are [UNVERIFIED] across the pack → stated qualitatively ("moisture causes most premature cedar shake decay"), never as a number.

---

## Self-audit result (gate rules)

- Modality in declaratives (will/shall/should/need to/needs to/have to/has to/must/ought to): **0** (FAQ `question:` "Do you need a permit" is exempt; "needs at least 1.5 inches" is indicative present, matching the gold's "needs at least ¼ inch").
- `[VERIFY]` / `[UNVERIFIED]` / de-fab literals: **0**.
- Outbound links / URLs / `<a href>`: **0**. Internal markdown links: **0** in this entry (none needed; no risk of anchor↔title mismatch).
- Banned trust literals (24/7, same-day, GAF Certified, 0% financing, top-rated, fully bonded, 15+ years, 500+, star ratings): **0**.
- Answer-first: `directAnswer` **37 words** (≤40); every section + all 7 FAQ answers open with a bolded `**…**` definitive answer.
- Counted plural: "**4** cedar shake roofing services" = exactly 4 `subServices`. ✓
- Every hard number attributed to a named authority that appears in the fact packs. ✓
- TypeScript: validates cleanly against the `ServiceContent` type (tsc --noEmit, project tsconfig). ✓
- All 15 gold field names present; `financingNote` absent.
