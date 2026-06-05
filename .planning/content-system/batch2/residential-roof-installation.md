# Residential Roof Installation — Answer-First Rewrite Draft (Batch 2)

**serviceId:** `residential-roof-installation`
**Snippet:** `.planning/content-system/batch2/residential-roof-installation.snippet.ts`
**Quality bar:** human-approved gold exemplar (`serviceId: 'roof-repair'` in `src/data/service-content/repair-maintenance.ts`)
**Gate status:** simulated `audit:semantics` gate = 0 violations; Zod `ServiceContentSchema` = PASS; `directAnswer` = 32 words (≤40); every section/FAQ/sign opens with a bolded answer span.

---

## Rendered heading → field map

The rendered H-tags come from `HEADING_CONFIG.service` with `[Service]` = "Residential Roof Installation". Each field's prose OPENS with a definitive answer to its rendered heading.

| Rendered H-tag (from heading-config) | Source field | Answer-first opening (bolded answer) |
|---|---|---|
| **H1** — Who Provides Residential Roof Installation in Newark? | `directAnswer` | "Newark Quality Roofing installs residential roofs across Newark and Essex County, building the complete deck-to-ridge system on new construction and full replacements to manufacturer specification" |
| **H2** — What Residential Roof Installation Do We Provide? | `overview[0]` (+`subServices`) | "Newark Quality Roofing installs 5 residential roof systems across Essex County: architectural and 3-tab asphalt shingle, standing-seam and metal-shingle, natural slate, cedar shake, and low-slope membrane" |
| **H2** — How Do You Know If You Need Residential Roof Installation? | `signs[]` (heading `signsHeading`) | signs[0]: "A roof at or past its material lifespan" — 7 bolded sign-answers, each + named-source evidence |
| **H2** — How Do Our Roofing Contractors Perform Residential Roof Installation? | `approachContent[]` (heading `approachHeading`, subs `approachSubheadings`) | approach[0]: "Newark Quality Roofing contractors assess the roof deck, the attic ventilation, and the NJ code triggers before quoting a residential installation…" |
| **H2** — How Much Does Residential Roof Installation Cost? | `pricing.range` + `pricing.factors[]` | range "$10,000–$25,000+ for most installations"; pricing FAQ opens "Residential roof installation in New Jersey costs $10,000–$25,000…" |
| **H2** — Why Choose Our Roofing Company for Residential Roof Installation? | `whyChooseUs` (heading byte-matches rendered H2) | 4 reasons, NJ HIC / Insured / Free Roof Inspections / Local Essex County Roofers |

Structural/legacy fields preserved verbatim so the page templates + Zod still validate: `serviceId`, `signsHeading` ("Signs You Need Residential Roof Installation"), `approachHeading` ("Our Residential Roof Installation Approach"), `approachSubheadings`, `residential.heading` ("Residential Roof Installation"), `commercial.heading` ("Roof Installation for Property Developers"), `whyChooseUs.heading`, `ctaLabel` (×2). All PROSE rewritten answer-first.

### Field-shape parity with gold exemplar
directAnswer · overview(2) · subServices(5) · signsHeading · signs(7) · approachHeading · approachContent(3) · approachSubheadings(3) · residential(2) · commercial(2) · processSteps(6) · faqs(8) · pricing(range+5 factors, **financingNote OMITTED**) · whyChooseUs(4 reasons) · credentialsHighlight(4). All counts inside `ServiceContentSchema` min/max bounds.

---

## Named sources used (with the figures cited in-text)

Every hard number is attributed in-text to a named authority that appears in the fact packs. No invented figures, no [UNVERIFIED] numbers rendered.

**InterNACHI life-expectancy chart** (primary lifespan source, `facts-materials-economics.md` §0)
- 3-tab asphalt **20 years**; architectural asphalt **30 years**
- Wood/cedar **25 years** (cedar shingle 30–50 yr corroborated by Cedar Shake & Shingle Bureau)
- Metal **40 to 80 years**; copper **70-plus years**
- Natural slate **60 to 150 years** (premium slate 100-plus yr corroborated by National Slate Association)
- EPDM **15 to 25 years**, TPO **7 to 20 years**, modified bitumen **20 years**

**NRCA** (`facts-causes-signs.md` §5, `facts-cost-stats.md` §4)
- Actual asphalt life varies **up to 40%** with climate, install, maintenance
- Attic ventilation extends roof life **up to 25%**
- Ventilation **1 sq ft net-free vent area per 150 sq ft of attic floor**, ~50% intake / 50% exhaust
- Low-slope ponding water remaining **more than 48 hours** = defect; flat roof needs **≥ ¼ in per ft** slope (NRCA + ARMA)

**ARMA** — co-cited with NRCA for ventilation ratio and ¼-in/ft slope / ponding defect.

**National Slate Association** — premium slate commonly **100-plus years**.

**Cedar Shake & Shingle Bureau** — cedar shingle **30 to 50 years**.

**Zonda Cost vs Value report** (`facts-cost-stats.md` §6–7)
- New asphalt roof recoups roughly **60 to 68%** of project cost at resale
- **8 of the top 10** highest-ROI remodels are exterior replacement projects

**International Residential Code (IRC R905.1.2)** (`facts-causes-signs.md` §2.6)
- Self-adhering ice barrier (or 2 cemented underlayment layers) from the eave to a point **at least 24 inches inside the exterior wall line** in ice-prone climates.

**NJ Uniform Construction Code — N.J.A.C. 5:23-2.7** (`facts-nj-regulatory-climate.md` §1)
- Detached one- and two-family roof-covering install/replacement = ordinary maintenance, **no permit, no inspection, no notice**
- Structural change to rafters/trusses/ridge beams triggers a permit
- Commercial/townhouse/attached: repair **> 25%** of total roof area in a 12-month period triggers a permit

**NJ Rehabilitation Subcode — N.J.A.C. 5:23-6.4** (`facts-nj-regulatory-climate.md` §1.4)
- Complete removal of existing covering required when water-soaked, when wood/slate/tile, or when **2 or more** layers already exist.

**NOAA 1991–2020 normals, Newark Liberty (EWR)** (`facts-nj-regulatory-climate.md` §3.2)
- Average **January low ~25.5°F**; Newark crosses the **32°F** freezing point repeatedly through winter (freeze-thaw stated QUALITATIVELY — see trap note).

**Owens Corning warranty guidance** (`facts-process-standards.md` §3) — material warranty covers factory defects (typical **20–50 yr**), separate from the contractor written workmanship warranty.

**Integrity Home Exteriors** (`facts-process-standards.md` §1) — written-proposal documentation + final-inspection/verification sequence.

**Insurance Information Institute (Triple-I)** (`facts-cost-stats.md` §8) — wind & hail = largest homeowners claim type at **2.8% of insured homes/yr (1 in 36)**.

**Josten Roofing (NJ)** (`facts-materials-economics.md` §7) — NJ per-sq-ft install: architectural asphalt **$6.50–$11.00**, metal **$9.00–$16.00**, slate **$10–$30**.

**HomeAdvisor / Modernize (NJ)** — NJ typical install **$10,000–$25,000**; national 2025 average **~$10,000–$11,000**.

**HomeGuide / Integrity Home Exteriors** — labor **~60–70%** of an asphalt install; NJ ranges sit **10–40%** above national figures.

**2024 roofing-market data** — asphalt shingles on **~73%** of US residential roofs (framed "roughly 73% … per 2024 roofing-market data" per the fact-pack caution to treat as approximate).

**GAF** — deck-rot / spongy-sagging-deck inspection-signs guidance (qualitative).

---

## Internal links (Rule 23 — anchor text is a substring of the target page title)
- `[roof replacement](/roof-replacement)` → target metaTitle "**Roof Replacement** Newark NJ | Free Estimates | NQR". (Single, contextual link in `residential.content[1]`, mirroring the gold exemplar's restraint — the gold roof-repair object uses no body links; one descriptive sibling link is added here because the original entry already linked to roof-replacement.)

No outbound URLs anywhere. All authority citations are name-only.

---

## Material-accuracy ground (no overclaim beyond sourced figures)
- 5-system framing matches the real material set for a residential installer: asphalt (3-tab 20 / architectural 30), metal (40–80, copper 70+), slate (60–150, premium 100+), cedar (25; shingle 30–50), low-slope membrane (EPDM 15–25 / TPO 7–20 / mod-bit 20).
- No lifespan stated beyond the InterNACHI / NSA / CSSB sourced ranges.
- `pricing.range` uses material-appropriate NJ-sourced install cost ($10,000–$25,000+), not a fabricated figure. `financingNote` OMITTED (0% financing is fabricated, D-01).

---

## KNOWN TRAP handled — freeze-thaw cycle COUNT
The original entry rendered "approximately 25 to 35 freeze-thaw cycles per winter." That cycle COUNT is **[UNVERIFIED]** (`facts-nj-regulatory-climate.md` §3.2: the 35–45 figure is a non-NOAA regional estimate). **NO number of cycles is rendered.** Freeze-thaw is stated qualitatively and anchored only to the VERIFIED NOAA fact: average January low ~25.5°F and Newark crossing the 32°F freezing point repeatedly through winter.

---

## Withheld NQR specifics ([VERIFY] — OMITTED, never rendered, never written as a literal placeholder)
Per D-01 and the Source Register Part B, these are omitted or stated qualitatively only. None appear in the snippet:

1. **NJ HIC license number** (13VH######00) — stated only as "holds New Jersey Home Improvement Contractor registration" (qualitative; no number).
2. **Phone number** — omitted (env-driven; fabricated `(973) 555-0123` forbidden).
3. **Physical street address / ZIP / geo coordinates** — omitted (service-area framing only: Newark + Essex County).
4. **Years in business / founding year** ("15+ years") — omitted (D-01 N+ experience claim banned).
5. **GAF certification tier** ("GAF Certified Contractor" / "Master Elite") — omitted; GAF named only as a product line installed ("installs GAF, CertainTeed, and Owens Corning shingle systems"), never as an NQR credential.
6. **BBB accreditation / rating** ("A+") — omitted.
7. **Aggregate rating / review count / star ratings** ("5-star", review counts) — omitted.
8. **Projects-completed count** ("500+") — omitted.
9. **"Fully bonded" / specific insurer statement** — omitted; stated qualitatively as "carries liability coverage … the insurance the Contractors Registration Act requires."
10. **Workmanship warranty term** (e.g., 5/10/25 yr) — omitted; referenced qualitatively as "a written workmanship warranty," no duration.
11. **Financing terms** ("0% financing", "flexible payment plans") — omitted; `financingNote` field dropped entirely.
12. **24/7 / same-day / 1-hour callback / 24-hr inspection** response claims — omitted; only canonical business hours (Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM) rendered, sourced to `site-config.ts`.

---

## Self-audit summary (pre-return)
- Modality in declarative body prose: **0** (only hit is a FAQ `question:` field — "should I choose", which the audit explicitly excludes).
- Outbound links / URLs: **0**.
- `[VERIFY]`/`[UNVERIFIED]` literals: **0**.
- De-fabrication literals (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+ experience, N+ count, fake NAP): **0**.
- Freeze-thaw cycle count rendered: **0** (qualitative only).
- Answer-first bolded opening on directAnswer + every section + every FAQ + every sign: **PASS**.
- Zod `ServiceContentSchema`: **PASS**. `financingNote`: **absent**. `directAnswer`: **32 words**.
