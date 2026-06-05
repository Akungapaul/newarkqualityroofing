# Infrared Roof Leak Detection — Rewrite Map (Batch 4)

`serviceId: 'infrared-roof-leak-detection'` | Primary intent: COMMERCIAL low-slope moisture diagnostics, ASTM C1153.

Snippet: `.planning/content-system/batch4/infrared-roof-leak-detection.snippet.ts`
Gold exemplar matched: `serviceId: 'roof-repair'` (repair-maintenance.ts). Structural twin: batch3 `epdm-commercial-roofing.snippet.ts`.

---

## Rendered heading → snippet field map

Rendered H-tags come from `HEADING_CONFIG.service` interpolated with `Infrared Roof Leak Detection`. The snippet's own `*Heading` fields are legacy/structural labels (kept so Zod validates); the rendered question H-tags are what the page shows.

| Rendered heading (HEADING_CONFIG.service) | Snippet field that fills it |
|---|---|
| H1 "Who Provides Infrared Roof Leak Detection in Newark?" | `directAnswer` (hero answer, 38 words / 251 chars) |
| H2 overview "What Infrared Roof Leak Detection Do We Provide?" | `overview` (2) + `subServices` (5) |
| H2 signs "How Do You Know If You Need Infrared Roof Leak Detection?" | `signsHeading` (legacy) + `signs` (7) |
| H2 approach "How Do Our Roofing Contractors Perform Infrared Roof Leak Detection?" | `approachHeading` (legacy) + `approachSubheadings` (3, → H3s) + `approachContent` (3) |
| H2 pricing "How Much Does Infrared Roof Leak Detection Cost?" | `pricing.range` + `pricing.factors` (5) + FAQ "How much does …" |
| H2 repair-or-replace "Should You Repair or Replace Your Roof?" | wet-insulation-extent mapping in `signs`/`approach`/`commercial` (flat-roof >25–30% threshold) |
| H2 whyChooseUs "Why Choose Our Roofing Company for Infrared Roof Leak Detection?" | `whyChooseUs` (4 reasons) + `credentialsHighlight` (4) |
| H2 related "What Related Roofing Services Should You Consider?" | internal links: commercial-roof-repair, roof-thermal-imaging-inspections |
| H2 schedule "How Can You Schedule Infrared Roof Leak Detection?" | `residential.ctaLabel` / `commercial.ctaLabel` |
| (residential block) | `residential.heading` + `content` (2) |
| (commercial block, PRIMARY) | `commercial.heading` + `content` (2) |
| (process) | `processSteps` (6) |
| (FAQ accordion) | `faqs` (7) |

---

## Named sources used + the figures they carry

INFRARED §7 (facts-materials-economics.md) is primary; leak-origin from facts-causes-signs.md §2.1; membrane lifespans §0/§4; NJ code from facts-nj-regulatory-climate.md; mold window from gold exemplar (EPA, residential).

| Named authority | Figure / claim asserted in-text |
|---|---|
| ASTM / ASTM C1153 | "Standard Practice for Location of Wet Insulation in Roofing Systems Using Infrared Imaging"; verification of each suspected wet area by core cut, probe, or calibrated moisture meter required; optimal conditions (no appreciable precipitation ~48 h prior, dry surface, wind under ~15 mph, differential near 10°C / 18°F, scan after sunset); companion ASTM D7954 nuclear |
| NRCA | governing IR standard co-attribution; non-destructive survey; broad-area scan faster than point-by-point; ¼ inch per foot of slope + ponding >48 h defect (with ARMA); ~90–95% of leaks at flashing (industry estimate attributed to NRCA) |
| IIBEC | physics of wet vs dry insulation heat retention; non-destructive; sensitivity (imager resolves ~±0.2°F; wet-area contrast ~0.5°F–30°F; winter ~5°F vs summer ~20°F); detects wet insulation not the entry point; broad-area efficiency |
| Fluke | physics (wet insulation cools slower → warm anomaly after sunset); verification-by-core requirement; detects wet insulation not the leak entry point; sensitivity contrast figures |
| InterNACHI life-expectancy chart | EPDM 15–25 yr, TPO 7–20 yr, modified bitumen 20 yr |
| ARMA | ¼ inch per foot of slope; ponding >48 h defect (with NRCA) |
| NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 | detached 1- & 2-family roof-covering work = ordinary maintenance, no permit/inspection/notice; commercial repair >25% of total roof area in 12 months requires a permit |
| Parish, Modernize, HomeGuide | flat-roof replacement threshold > 25–30% membrane damage |
| EPA | wet materials dried within 24–48 h of a leak in most cases grow no mold (residential block only) |
| NJ Division of Consumer Affairs | NJ HIC registration requirement (whyChooseUs) |
| Contractors Registration Act | liability-coverage requirement (whyChooseUs) |

ASTM C1153 sensitivity figures (~±0.2°F, 0.5°F–30°F, winter ~5°F vs summer ~20°F, ~10°C/18°F differential, ~15 mph wind, ~48 h pre-scan dry window) are all carried in-text attributed to ASTM C1153 / IIBEC / Fluke per §7.

---

## Pricing treatment (no fabricated number)

`pricing.range` = qualitative: "Free written estimate; cost set by roof size, system, and verification scope." The brief requested a sourced commercial $/sqft, but **§7 carries no IR-survey cost figure and facts-cost-stats.md has no commercial infrared $/sqft**. Per Rule 10 / D-01 (never invent), the range is stated qualitatively; the 5 `pricing.factors` are each sourced (IIBEC/NRCA broad-area efficiency, IIBEC/Fluke contrast, ASTM C1153 verification, winter-contrast, ASTM C1153 reporting). `financingNote` OMITTED. Gap logged below.

---

## Withheld [VERIFY] / fabrication items (omitted from snippet — NOT rendered)

Removed from the legacy entry; replaced or dropped per D-01:
- "GAF Certified Contractor" → omitted (cert tier unverified; DEFAB literal).
- "Fully Insured & Bonded" → reduced to "Insured" (bonded unverified).
- "15+ Years in Essex County" / "over 15 years of experience" → omitted (tenure unverified; DEFAB N+ experience claim).
- "0% financing available …" `financingNote` → omitted (DEFAB; financing terms unverified).
- "Same-day estimates and 24/7 emergency crews" → omitted (DEFAB 24/7 + same-day; unverified).
- "Premium materials & warranties up to 50 years", "top-tier products" → omitted (sentiment/unverified warranty).
- Legacy review/testimonial FAQs ("What do reviews say…", "How experienced is your team…") → removed (fabricated review/tenure claims).
- "$350–$800" hard price + "$350–$800 pinpoint" → removed (no sourced IR $/sqft in packs).
- "50,000 to 100,000 sq ft per session", "one hour after sunset" specific spans → removed (not in packs; stated qualitatively as "broad-area … faster than point-by-point").
- NJ HIC license number, phone, street address, BBB rating → never referenced (all [VERIFY] in Part B).

## factGapsFlagged

1. **Commercial infrared survey $/sqft (or per-project) cost** — no figure in §7 or facts-cost-stats.md. Pricing stated qualitatively. Re-source (e.g., Remodeling/region, or NQR's own rate card) before any hard IR price renders.
2. **Single-session scan area (sq ft) and exact post-sunset scan-window duration** — common trade figures (50k–100k sq ft; ~1 h after sunset) are not in the packs. Stated qualitatively ("broad-area pass"). Re-source from ASTM C1153 / IIBEC field practice if a number is wanted.
3. **TPO lifespan spread** — InterNACHI lists 7–20 yr; industry commonly cites 15–25 yr (§4 note). Used the InterNACHI 7–20 figure to match the gold exemplar's chart attribution.
4. **Ballasted-membrane masking** — stated qualitatively ("a ballasted membrane lowers thermal contrast") from §7 "ballast can mask thermal patterns"; no quantified reduction available.
5. **Freeze-thaw cycle count** — [UNVERIFIED] per brief; not asserted. Winter low-contrast handled via the sourced 5°F-vs-20°F seasonal differential (IIBEC/Fluke), not a freeze-thaw count.

---

## Self-audit result (pre-return)

- MODALITY (will/shall/should/need to/needs to/have to/has to/must/ought to) excl. FAQ questions: **0**.
- DEFAB literals (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+ experience, N+ count): **0**.
- OUTBOUND links / http(s) / `<a href>`: **0**. Internal links: 2, both markdown-relative, anchors are substrings of target titles (commercial-roof-repair, roof-thermal-imaging-inspections), neither generic.
- `**` bold spans balanced (even count); every overview/sign/approach/residential/commercial/processStep/faq/why opens with a bolded definitive answer.
- approachSubheadings.length (3) === approachContent.length (3).
- COUNTED_LIST mismatches: 0. SENTIMENT: 0. CASUAL/analogy: 0.
- Zod `ServiceContentSchema.safeParse`: **OK** (overview 2, subServices 5, signs 7, processSteps 6, faqs 7, residential/commercial content 2 each).
- directAnswer: 38 words / 251 chars (≤40 / ≤320), answers the H1 in "Newark Quality Roofing provides …" subject-first form.
