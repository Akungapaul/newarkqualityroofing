# Skylight Installation Repair — Draft Doc (Batch 5, #5/10)

**serviceId:** `skylight-installation-repair` · **category:** components-specialty · **isResidential:** true · **isCommercial:** true
**Primary n-gram:** "skylight installation repair" / "skylight" (repeated in directAnswer opener and closing whyChooseUs + pricing)

---

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Field that answers it |
|---|---|
| H1 "Who Provides Skylight Installation Repair in Newark?" | `directAnswer` |
| H2 "What Skylight Installation Repair Do We Provide?" | `overview[]` + `subServices[]` (4 services) |
| H2 "How Do You Know If You Need Skylight Installation Repair?" | `signsHeading` (label) + `signs[]` (7) |
| H2 "How Do Our Roofing Contractors Perform Skylight Installation Repair?" | `approachHeading` + `approachSubheadings[]`/`approachContent[]` (3 each) |
| H2 "How Much Does Skylight Installation Repair Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[2]` — "Should you repair or replace your skylight?" |
| H2 "Why Choose Our Roofing Company for Skylight Installation Repair?" | `whyChooseUs.reasons[]` (5) |
| Residential block | `residential{heading,content[2],ctaLabel}` |
| Commercial block | `commercial{heading,content[2],ctaLabel}` |
| Process | `processSteps[]` (5) |
| FAQ | `faqs[]` (7) |
| Related services / KB / scheduling H2s | rendered by template — no field |

---

## Named sources used → exact figure attributed to each

| Named source | Figure / claim attributed in-text |
|---|---|
| InterNACHI Estimated Life Expectancy Chart | Skylight service life **10–20 years**; EPDM **15–25 yr**, TPO **7–20 yr**, modified bitumen **20 yr** (commercial block) |
| VELUX America | **20-year** insulated-glass-seal warranty; **10-year** No Leak installation warranty (matching VELUX flashing kit); **10-year** product warranty; 2 mounting types (deck/curb) each need matched flashing kit; engineered flashing vs degrading caulk; water often condensation not a leak (winter misdiagnosis) |
| Fakro USA | **10-year** unit warranty + **10-year** leak-proof guarantee conditioned on the original Fakro flashing kit |
| IRC Section R308.6.8 | Skylight on a roof under **3:12** slope sits on a curb **≥4 inches** above the roof plane |
| roofing trade consensus | Leading cause of a skylight leak = failed/improperly installed **flashing**, not the glass (qualitative — no invented %) |
| HomeGuide | Skylight install **$1,600–$4,200**; replacement **$800–$2,400** |
| Angi / Modernize | Leak repair **$225–$800** (reseal **$75–$250**, flashing **$150–$500**) |
| NRCA and ARMA | Low-slope roof needs **≥¼ inch per foot** of slope to drain; ponding **>48 hours** = defect (commercial block) |
| NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | Detached 1–2 family roof-covering work = ordinary maintenance, no permit; commercial repair **>25%** of roof area in 12 months requires a permit |
| NJ Division of Consumer Affairs | NJ Home Improvement Contractor registration requirement (whyChooseUs) |
| Contractors Registration Act | Liability coverage requirement (whyChooseUs) |

All figures cross-checked against `facts-components-specialty.md §5` (+ §0, §4 commercial-membrane), `facts-cost-stats.md`, `facts-materials-economics.md §0`. No number appears that is not in the packs.

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — `directAnswer` + first sentence of every `overview`, `signs`, `approachContent`, `residential.content[0]`, `commercial.content[0]`, and every `faqs[].answer` opens with a bolded definitive answer (the answer clause, not the keyword). Verified by parse script: `startsBold=true` for all section openers; `overview[1]` is a continuation paragraph (correctly not a section opener).
- [x] **≤40 words / definitive** — every bolded opener ≤40 words (max observed = 38 at `faqs[5]`); `directAnswer` = 27 words.
- [x] **Zero modality in declaratives** — grep for `will|should|must|may|might|would|could|need to|have to` outside `faqs[].question` returns ZERO hits. The single `should` lives in `faqs[2].question` ("Should you repair or replace your skylight?") — exempt.
- [x] **Every number named-sourced** — 10–20 yr (InterNACHI); 20/10/10 yr VELUX (VELUX America); 10 yr Fakro (Fakro USA); 3:12 + 4 in (IRC R308.6.8); $1,600–$4,200 / $800–$2,400 (HomeGuide); $225–$800 / $75–$250 / $150–$500 (Angi, Modernize); 15–25/7–20/20 yr + ¼ in/ft + 48 hr (InterNACHI, NRCA, ARMA); 25% / N.J.A.C. 5:23-2.7 (NJ UCC). No invented leak-share %, no NJ-specific lifespan number, no cert claim.
- [x] **approachSubheadings.length === approachContent.length** — 3 === 3. Confirmed by parse script.
- [x] **Counted plurals match** — "4 skylight services" → 4 subServices; "2 mounting types" → deck-mounted + curb-mounted.
- [x] **No de-fab literals** — grep for `24/7|same-day|GAF Certified|0% financing|top-rated|500+|15+ years|VELUX certified|Fakro certified|certified installer|[VERIFY]|[UNVERIFIED]` returns ZERO hits. NQR "installs VELUX and Fakro" — never "certified". No claim that a Newark Quality Roofing install auto-activates the manufacturer No-Leak warranty (framed as conditioned on spec + matching kit, per the manufacturer).
- [x] **No outbound links / URLs** — grep for `https?://|<a href|www.` returns ZERO hits.
- [x] **No pronoun co-reference** — entities repeated ("the flashing", "the skylight", "a Newark Quality Roofing", "the curb") — no it/they/this/that/there standing for a named entity.
- [x] **No hype words** — no best/leading/trusted/premier/top-rated/unbeatable/seamless-as-praise.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers']`.
- [x] **One macro topic** — every section descends from the skylight H1; commercial block stays on skylights (curb-mounting + membrane tie-in), not a generic flat-roof page.
- [x] **Parses as one array element** — leading `// ─── 5. Skylight Installation Repair ───` comment, opens `{`, ends `},`. Verified by Node import wrapped in `[ ... ]`: element count = 1, all 16 required + optional fields present.
- [x] **Condensation-vs-leak diagnostic cue** carried per `facts §5` (condensation tracks temp/humidity; a true leak tracks rain/storms).
