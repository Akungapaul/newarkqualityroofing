# Caldwell — CityContent draft notes (Batch D, caldwells-roseland #1 of 5)

Answer-first fabrication-purge rewrite. cityId: `caldwell`. Snippet: `caldwell.snippet.ts`.

## Rendered-heading → field map

| Rendered H-tag | Field that answers it |
|---|---|
| H1 "Who Provides Roofing Services in Caldwell?" | `directAnswer` (36 words; bolds Caldwell, Essex County, asphalt/slate/metal/flat membrane roofs) |
| H2 "What Roofing Services Are Available…" | services grid (shared component — no copy written) |
| H2 "What Residential Roofing Services Do We Provide?" | `residential.content[]` (lead bolds asphalt shingles + natural slate, metal, and copper) |
| H2 "What Commercial Roofing Services Do We Provide?" | `commercial.content[]` (lead bolds low-slope roofs + EPDM, TPO, and modified-bitumen membranes) |
| H2 "What Roofing Problems Are Common in Caldwell?" | `overview[]` ([0] answers the PROBLEMS question — 3 stressors) |
| subheading span | `weatherChallenges.heading` → `weatherChallenges.content[]` (4 climate stressors) |
| H2 "Which Neighborhoods Do We Serve in Caldwell?" | `neighborhoods[]` (5 verified — raw render, no bold) |
| H2 "What Roofing Materials…" | shared component (no copy) |
| H2 "What Should You Know About Roofing Permits…" | shared component (no copy) |
| H2 "How Much Does Roofing Cost in Caldwell?" | `pricing{averageRepair, averageReplacement, note}` |
| H2 "What Roofing Projects Do We Handle in Caldwell?" | `projectSpotlights[]` (3 representative TYPES — raw render) |
| H2 "What Questions Do Caldwell Property Owners Ask…" | `faqs[]` (7) |
| H2 "Why Should You Choose…" | `whyChoose.reasons[]` (6 — raw render) |

## Named sources → exact figure attributed

- **InterNACHI life-expectancy chart** — architectural asphalt 30 yrs / 3-tab 20 yrs; natural slate 60–150 yrs; metal 40–80 yrs; copper 70 yrs or more; EPDM 15–25 yrs; TPO 7–20 yrs; modified bitumen 20 yrs.
- **NRCA** — ~90–95% of roof leaks originate at flashing; ~5–10% at the open shingle field.
- **NRCA and ARMA** — low-slope deck needs ≥¼ in/ft slope to drain; ponding >48 hrs counts as a defect.
- **NJ Uniform Construction Code / N.J.A.C. 5:23-2.7** — detached 1–2 family reroof = ordinary maintenance (no permit); 25%-of-roof-area-in-12-months threshold for commercial/multi-family/attached; recover-vs-tear-off per Rehab Subcode 5:23-6.4.
- **IRC R905.1.2** — ice barrier from eave to ≥24 in inside the exterior wall line.
- **NPS Preservation Brief 29** — replace a full slope (not individual repairs) once ≥20% of slate is broken/cracked/missing/sliding; non-ferrous copper or stainless slater's nails.
- **National Park Service** — Register listing alone places no restriction on a private owner.
- **NOAA 1991–2020 normals (Newark Liberty / EWR)** — ~31.5 in/yr snow; crosses 32°F repeatedly; ~25–30 thunderstorms/yr.
- **ASCE 7-16 as adopted by the NJ Uniform Construction Code** — ~110–115 mph basic design wind (hedged); ground snow load near Pg 25 psf (hedged).
- **Insurance Information Institute** — wind and hail = largest homeowners-claim type at 2.8% of insured homes/yr.
- **HomeAdvisor and Modernize** — NJ roof replacement $10,000–$25,000; leak repair $400–$1,000.
- **NJ roofing guides** — natural slate installed at roughly $10–$30 per square foot.
- **Preservation New Jersey** — Caldwell's older built-out Victorian-era / Colonial Revival character; two locally designated landmarks.
- **N.J.S.A. 56:8-142** — $500,000 per-occurrence CGL minimum for a registered NJ HIC.
- **Caldwell University** — ~2,200 students (neighborhood/renter context only).

## §0 gate compliance (Caldwell-specific)

- **COA**: Asserted the Borough's real HPC + ordinance (Chapter 130); COA review applies ONLY to the two locally designated landmarks; explicitly states Caldwell has designated NO local historic district, so a typical home is not COA-regulated. Did NOT name the Library or the second landmark; did NOT call the Library NRHP; did NOT reintroduce any "downtown historic-district overlay" (that is Caldwell, Idaho). Grover Cleveland Birthplace = state-owned, Register-listed heritage color, explicitly NOT a homeowner gate.
- **Geography**: Caldwell is far-western Essex UPLAND (elevation framed qualitatively, no number). NO floodplain framing (correctly omitted — Caldwell is upland). NO reservation adjacency (Hilltop is North Caldwell's). NO West Essex Trail placement through Caldwell. Standalone word "reservation" appears 0 times (only "Preservation").
- **Census**: population/owner-occupancy/value/income kept OUT of the "problems" section (R36) — the only demographic figure used on-page is the Caldwell University ~2,200 students (neighborhood context).

## Self-audit checklist

- [x] Modality grep (will/should/need to/needs to/have to/has to/must/ought to/might/may/would/could) outside `faqs[].question` → NONE.
- [x] `**` only in directAnswer + the 4 answer-first leads + their body paragraphs + FAQ-answer first sentences. NONE in neighborhoods/projectSpotlights/whyChoose/pricing/meta.
- [x] R3 strict body-lead bold: overview body[1..3] open `Mature street-tree debris` / `Aging built-out covering` / `Flashing failure` (in lead order); residential body[1..2] open `Asphalt shingles` / `Natural slate, metal, and copper`; commercial body[1] `EPDM`, body[2] `low-slope roof` (matches committed west-essex pattern); weather body[1] `Snow`+`Freeze-thaw cycling`, body[2] `Nor'easter wind`+`Summer storms`.
- [x] directAnswer 36 words; overview[0] 40; residential[0] 38; commercial[0] 26; weather[0] 28; every FAQ first sentence ≤40.
- [x] Every hard number named-source attributed (table above).
- [x] Zero fabricated completed-project/client/sponsorship/certification/warranty-term/savings/financing claims; projectSpotlights are representative TYPES (no addresses/dates/counts/durations).
- [x] metaTitle 48 chars (≤70); metaDescription 156 chars (≤160).
- [x] pricing locked NJ ranges $400–$1,000 / $10,000–$25,000 with attribution in `note`; slate premium qualitative.
- [x] credentialsHighlight exact: ['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local'].
- [x] Snippet type-checks against `CityContent` (tsc --strict, EXIT 0); all field counts within schema bounds.
