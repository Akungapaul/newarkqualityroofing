# TPO Roofing Installation — Rewrite Map & Source Ledger

`serviceId: tpo-roofing-installation` — Batch 3 commercial roof-type rewrite.
Quality bar = human-approved Roof Repair gold exemplar (answer-first, named-source figures, de-fabricated).

---

## Rendered heading → field map

| Rendered H1/H2 (HEADING_CONFIG.service) | Field | Opening definitive answer |
|---|---|---|
| H1 "Who Provides TPO Roofing Installation in Newark?" | `directAnswer` | "Newark Quality Roofing installs TPO roofing across Newark and Essex County…" (31 words) |
| H2 "What TPO Roofing Installation Do We Provide?" | `overview` + `subServices` | "Newark Quality Roofing installs TPO single-ply roofing across Essex County in 6 scopes: …" |
| H2 "How Do You Know If You Need TPO Roofing Installation?" | `signsHeading` + `signs` (6) | each sign opens with a bolded condition + named-source figure |
| H2 "How Do Our Roofing Contractors Perform TPO Roofing Installation?" | `approachHeading` + `approachContent` (2) + `approachSubheadings` (2) | "Newark Quality Roofing contractors engineer the TPO assembly before installation…" |
| H2 "How Much Does TPO Roofing Installation Cost?" | `pricing` + cost FAQ | "TPO installation in New Jersey costs $8 to $12 per square foot…" |
| H2 "Why Choose Our Roofing Company for TPO Roofing Installation?" | `whyChooseUs` + `credentialsHighlight` | 4 reasons, each a named-credential fact (NJ HIC, insured, membrane systems, local) |
| (residential perspective) | `residential` | "Newark Quality Roofing installs TPO on residential low-slope and flat roof sections…" |
| (commercial perspective — primary audience) | `commercial` | "Newark Quality Roofing installs commercial TPO on warehouses, retail centers, office buildings…" |
| (process) | `processSteps` (7) | engineering → permits → tear-off/recover → insulation → membrane/welding → flashing → verification |
| (FAQ) | `faqs` (6) | each opens with a bolded ≤40-word answer mirroring the question |

Field-shape parity confirmed: `approachSubheadings.length (2) === approachContent.length (2)`; `subServices = 6`; counted plural "6 scopes:" matches 6 comma-split list items. `financingNote` OMITTED. Object parses; all gold fields present.

---

## Named sources + figures used (every hard number)

**InterNACHI life-expectancy chart** (§0 / §4 facts-materials-economics)
- TPO **7–20 years** (primary chart figure; the answer-first lifespan anchor)
- EPDM **15–25 years**, modified bitumen **20 years**, BUR **30 years**

**Progressive Materials** (secondary, named — flagged spread per §4 gap #4)
- TPO **15–25 years** "commonly cited in field practice" — always paired with the InterNACHI 7–20 figure so the spread is visible.

**Single Ply Roofing Industry + GAF** (§6 facts-materials-economics, PVC row)
- PVC **20–30 years** service life.

**ASTM C1549 + CRRC + ENERGY STAR** (§6 facts-materials-economics, PVC energy row)
- White PVC cool-roof solar reflectance **~0.70–0.85** → stated as "roughly 70 to 85% of solar radiation." Attributed to white PVC (the membrane the pack actually quantifies); white TPO described as sharing the cool-roof property qualitatively, NOT given its own reflectance number (see factGaps).

**NRCA + ARMA** (facts-nj-regulatory-climate / gold exemplar)
- Low-slope roof needs **≥ ¼ inch per foot** of slope to drain.
- Ponding water remaining **> 48 hours** counts as a defect.

**NJ Uniform Construction Code — N.J.A.C. 5:23-2.7** (facts-nj-regulatory-climate §1)
- Commercial: repairing/replacing **> 25% of total roof area in a 12-month period** requires a permit.
- Detached one- and two-family re-roof = ordinary maintenance, no permit (residential block).

**NJ Rehabilitation Subcode — N.J.A.C. 5:23-6.4** (facts-nj-regulatory-climate §1.4)
- Complete removal required (no recover) when existing covering is water-soaked, is wood/slate/tile, or already carries **2 or more layers**.

**Josten Roofing (NJ) + commercial cost guides** (§7 + §6 facts-materials-economics)
- TPO (flat) NJ install **$8–$12/sq ft** → `pricing.range`.
- EPDM (flat) NJ **$7–$10/sq ft**; PVC **$6–$12/sq ft**.
- NJ ranges sit **10–40% above national** (higher labor, stricter code).

**Flat-roof repair guidance** (Parish/Modernize/HomeGuide, §4 facts-materials-economics)
- Replace when **> 25–30%** of membrane is damaged (stricter than sloped roofs).

**Single-ply membrane field-failure guidance** (§4 facts-materials-economics, TPO row)
- TPO fails most often at the **welded seam** — stated qualitatively ("most common TPO failure point"), no invented failure-share %.

**Owens Corning warranty guidance** (facts-process-standards §3 / gold exemplar)
- Written workmanship warranty (labor) vs manufacturer material warranty (factory defects) distinction.

**NJ Division of Consumer Affairs / Contractors Registration Act** (facts-nj-regulatory-climate §2)
- HIC registration requirement; commercial general liability **minimum $500,000 per occurrence** (N.J.S.A. 56:8-142).

**Firestone, Carlisle, Johns Manville** — membrane systems NQR "installs and services" (matches gold exemplar commercial block; framed as systems installed, NOT a certified-installer trust claim).

---

## Withheld [VERIFY] / [UNVERIFIED] items (omitted or qualitative — never literal in snippet)

From `sources-and-nqr-facts.md` Part B and the fact-pack flags, the following were OMITTED or stated qualitatively:

1. **GAF Master Elite / Certified-Contractor status** — [VERIFY]. NOT claimed. "Membrane Systems Installed and Serviced" replaces the legacy "GAF Certified Contractor" reason.
2. **"15+ years of experience" / years-in-business** — [VERIFY marketing literal]. Removed; replaced with the NJ HIC registration fact.
3. **24/7 emergency / same-day estimates / "Fast Response"** — [VERIFY]. Removed entirely from whyChooseUs.
4. **0% financing / flexible payment plans** — [VERIFY]. `financingNote` OMITTED per instruction; no financing copy in snippet.
5. **"premium materials… up to 50 years" warranty literal** — [VERIFY]. Removed; warranty framed via the sourced workmanship-vs-material distinction.
6. **Aggregate rating / "5-star" / review counts / "top-rated"** — DISABLED/[VERIFY]. The legacy "What do reviews say…" and "How experienced is your team" FAQs were DROPPED (they asserted unverifiable review and 15+-year claims).
7. **NJ HIC license number, street address, ZIP, phone** — [VERIFY]/OMITTED. License referenced as type only ("NJ Home Improvement Contractor"), no number rendered.
8. **NQR-specific process timings** (tarp-response time, photo policy) — [VERIFY]. Process steps describe industry-standard sequence attributed generically, not invented NQR specifics.

---

## factGapsFlagged — figures NOT in the packs → stated qualitatively or omitted

1. **TPO-specific solar reflectance %** — the packs quantify reflectance only for white **PVC** (~0.70–0.85, ASTM C1549/CRRC). No TPO reflectance figure exists in the packs, so TPO's cool-roof property is stated qualitatively ("comparable to white PVC") and the numeric 70–85% is attributed to PVC, not invented for TPO.
2. **Commercial insulation R-value (e.g., R-25/R-30 NJ energy-code minimum)** — the legacy entry asserted "R-25 to R-30"; no sourced NJ commercial-roof R-value exists in the fact packs. OMITTED — insulation described qualitatively (polyisocyanurate board + tapered crickets for drainage) with no R-number.
3. **TPO energy-savings % (legacy "15–30% cooling cost reduction", "80% reflectivity", "50–60°F surface drop")** — none of these TPO-specific figures appear in the packs. All OMITTED; replaced with the sourced PVC reflectance figure framed as a shared cool-roof property.
4. **Membrane thickness (45/60/80 mil) and FM wind-uplift class** — not in the packs as sourced figures. OMITTED; wind uplift handled qualitatively ("engineered for wind uplift").
5. **Freeze-thaw cycle COUNT per winter** — [UNVERIFIED] (35–45 estimate, not a NOAA metric). Not used; no cycle count appears in the snippet.
6. **TPO 15–25 yr "industry" spread vs InterNACHI 7–20** — pack gap #4 instructs flagging the spread; handled by always citing BOTH figures together with their distinct sources.
7. **ENERGY STAR qualification of specific TPO products** — referenced only as the listing body for the PVC-anchored reflectance figure (CRRC/ENERGY STAR list cool-roof products); no claim that a specific NQR TPO product carries the label.

---

## Self-audit (gate rules)

- Answer-first: directAnswer 31 words; every section/FAQ/sign opens with a bolded definitive answer span; longest FAQ bolded answer = 36 words (≤40). PASS.
- Modality in declaratives: 0 hits (FAQ questions excluded). PASS.
- De-fab / trust literals (24/7, same-day, 0% financing, GAF Certified, 15+ years, 500+, star/review counts, top-rated, best, leading): 0 hits. PASS.
- `[VERIFY]`/`[UNVERIFIED]` literals in snippet: 0. PASS.
- Outbound links / URLs: 0. PASS.
- Every hard number attributed to a named authority present in the packs. PASS.
- Counted plural "6 scopes:" === 6 listed items. PASS.
- `approachSubheadings.length === approachContent.length` (2 === 2). PASS.
- `financingNote` omitted; `pricing.range` uses sourced commercial $/sq ft ($8–$12). PASS.
- Freeze-thaw cycle count: not stated numerically. PASS.
- Object parses; all gold fields present; field cardinalities within Zod min/max. PASS.
