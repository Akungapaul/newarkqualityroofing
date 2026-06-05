# Fascia Installation Repair — Draft Doc (Batch 5, #6 of 10)

- **serviceId:** `fascia-installation-repair`
- **category:** components-specialty
- **isResidential:** true · **isCommercial:** false (schema still requires a `commercial{}` block → written as an honest multi-family / mixed-use / small-commercial trim block; no over-claimed commercial specialty)
- **primary n-gram:** "fascia installation and repair" / "fascia" (repeated in `directAnswer`, `overview[0]`, and the closing `whyChooseUs` Local Essex County reason)

---

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Field that answers it |
|---|---|
| H1 "Who Provides Fascia Installation Repair in Newark?" | `directAnswer` |
| H2 "What Fascia Installation Repair Do We Provide?" | `overview[]` + `subServices[]` (4 services) |
| H2 "How Do You Know If You Need Fascia Installation Repair?" | `signs[]` (6) — `signsHeading` label = "Signs You Need Fascia Installation or Repair" |
| H2 "How Do Our Roofing Contractors Perform Fascia Installation Repair?" | `approachContent[]` (2) + `approachSubheadings[]` (2) |
| H2 "How Much Does Fascia Installation Repair Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[3]` — "Should you repair or replace your roof along with the fascia?" |
| H2 "Why Choose Our Roofing Company for Fascia Installation Repair?" | `whyChooseUs.reasons[]` (4) |
| Related services / KB / Schedule | rendered by template — no field |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (6) |

---

## Named sources used → exact figure each is attributed to

| Named source | Figure / claim attributed in-text |
|---|---|
| **InterNACHI** (inspection guidance) | Fascia closes the rafter-tail ends and mounts the gutter system; clogged/overflowing gutters and loose gutters soak the board (water-source rot) — qualitative |
| **InterNACHI life-expectancy chart** | Aluminum fascia/soffit bundled at **20-to-40-plus-year** life |
| **HB Elements** (trade guidance) | Water-filled gutters weigh roughly **5–7 pounds per linear foot**; painted wood (pine/cedar) fascia lasts roughly **15–25 years** with a repaint cycle; PVC resists moisture, aluminum cladding wraps wood, fiber-cement resists moisture and insects — material durability kept qualitative |
| **Ledegar Roofing** (inspection guidance) | Failing-fascia signs: peeling/blistering paint, soft/spongy spots and discoloration, cracks/flaking, sagging gutters |
| **International Residential Code (IRC R905.2.8.5)** | Drip edge set at least **¼ inch** below the deck and fascia, directing runoff into the gutter rather than behind the board |
| **NJ Uniform Construction Code (N.J.A.C. 5:23-2.7)** | Detached one-/two-family trim repair = ordinary maintenance, no permit; commercial work beyond **25%** of total roof area in a 12-month period requires a permit |
| **Angi / GAF** (maintenance guidance) | Gutter cleaning **twice per year, spring and fall** limits clog-and-overflow rot |
| roofing industry guidance (contractor-consensus) | **25–30%** area rule and **50%** cost rule for repair-vs-replace (FAQ #4 only, to satisfy the rendered "Should You Repair or Replace" H2) |

**De-fab / §6-banned items deliberately AVOIDED:** no exact lifespan number for PVC / aluminum / fiber-cement fascia (kept qualitative; only the InterNACHI aluminum 20–40+ bundle is used, which is explicitly allowed); no manufacturer-certification claim; no invented failure-share %; no fabricated cost figure (the §6 + cost packs gathered **no** fascia-specific dollar range → `pricing.range` states a free-estimate + cost-driver framing instead of inventing a number).

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — `directAnswer`, every `overview[]`, every `signs[]`, every `approachContent[]`, both `residential`/`commercial` content[0], every `faqs[].answer`, and `whyChooseUs` reasons all lead with a bolded **answer clause** (not the bare keyword). First sentence ≤40 words each; `directAnswer` = 32 words.
- [x] **Zero modality in declaratives** — grep `will|should|need to|have to|must|might|may|would|could` outside `faqs[].question` returns **0 hits**. The single `should` is in the FAQ question field "Should you repair or replace your roof along with the fascia?" (exempt). "needs"/"Need" are present-tense verb / heading-label, not "need to" modality.
- [x] **Every number named-sourced** — 5–7 lb/ft (HB Elements), 15–25 yr (HB Elements), 20–40+ yr (InterNACHI chart), ¼ in + R905.2.8.5 (IRC), 25–30% + 50% (contractor-consensus), 25% + N.J.A.C. 5:23-2.7 (NJ UCC). No bare digits.
- [x] **approachSubheadings.length === approachContent.length** — 2 === 2.
- [x] **Counted plurals match item count** — "4 fascia services" / "4 fascia materials" / "4 materials" each followed by exactly 4 (painted wood, PVC, aluminum cladding, fiber-cement); subServices array = 4 objects.
- [x] **No de-fab literals** — grep for `24/7|same-day|GAF Certified|0% financing|top-rated|500+|15+ years|[VERIFY]|[UNVERIFIED]|certified installer` = 0 hits.
- [x] **No outbound links / URLs** — grep `https?://|<a href|www.` = 0 hits.
- [x] **No hype words** — grep `best|leading|trusted|premier|top-rated|unbeatable|amazing|world-class|stunning|incredible|exceptional|renowned|seamless` = 0 hits.
- [x] **No entity-pronoun co-reference** — repeats "the fascia" / "the board" / "the gutters" / "Newark Quality Roofing"; the one prior `them` was rewritten to "the gutter line." Remaining `that` instances are relative pronouns / conjunctions, not entity co-references.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers']`.
- [x] **One macro topic** — fascia installation/repair end to end; n-gram in opening answer and closing section.
- [x] **Parses as one array element** — verified via `new Function` JS-parse test (PARSE OK).
- [x] **Schema fields present** — serviceId, directAnswer, overview(2), subServices(4), signsHeading, signs(6), approachHeading, approachContent(2), approachSubheadings(2), residential{h,content(2),cta}, commercial{h,content(2),cta}, processSteps(6), faqs(6), credentialsHighlight(4), pricing{range,factors(5)}, whyChooseUs{heading,reasons(4)}.
