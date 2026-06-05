# Gutter Installation Repair — Draft Doc (Batch 5, entry #3)

serviceId: `gutter-installation-repair` · isResidential: true · isCommercial: true
Category: components-specialty · Primary n-gram: **gutter installation repair / gutter**

---

## Rendered heading → content field map

| Rendered H-tag (template) | Content field that answers it |
|---|---|
| H1 "Who Provides Gutter Installation Repair in Newark?" | `directAnswer` (36 words, bolded answer clause) |
| H2 "What Gutter Installation Repair Do We Provide?" | `overview[]` (2) + `subServices[]` (5) |
| H2 "How Do You Know If You Need Gutter Installation Repair?" | `signs[]` (7); `signsHeading` = label |
| H2 "How Do Our Roofing Contractors Perform Gutter Installation Repair?" | `approachContent[]` (2) + `approachSubheadings[]` (2) |
| H2 "How Much Does Gutter Installation Repair Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` ("Should you repair or replace your gutters?") |
| H2 "Why Choose Our Roofing Company for Gutter Installation Repair?" | `whyChooseUs.reasons[]` (4) |
| Related services / KB / Schedule | rendered by template — no field |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (5) |
| FAQ | `faqs[]` (6) |

---

## Named sources used → exact figure attributed

| Named source | Figure / claim attributed in prose |
|---|---|
| InterNACHI Estimated Life Expectancy Chart | Copper gutters 50+ yr; aluminum 20–40+ yr; galvanized steel 20 yr; vinyl 25+ yr |
| Storm Master / My Gutter Doctor (gutter-sizing) | 6-in K-style holds ~50% more water than 5-in; 5-in → 2×3 downspout; 6-in → 3×4 downspout |
| Englert (gutter manufacturer) | Seamless = one continuous piece; eliminates the lapped joints where sectional gutters most often leak |
| American Gutter Masters / Vermont Gutter Co. (trade) | Drainage slope ~1/4 in per 10 ft — TRADE rule, NOT cited to any code section |
| Angi | Clogged gutter overflows → saturates fascia & soffit → sheds water against foundation / basement seepage; cleaning 2×/yr |
| GAF | Gutter cleaning cadence 2×/yr (spring + fall) |
| Angi + GAF | 3–4×/yr cleaning with pine trees nearby |
| HomeGuide gutter cost data | Install ~$12–$25/linear ft; by material vinyl $8–$12, aluminum $10–$20, steel $10–$35, copper $35–$45/ft; repair $100–$450 (avg ~$275); sagging $75–$300; leak/seam $100–$225 |
| University of Minnesota Extension | Ice dam root cause = attic heat escape (melt/refreeze at eave); gutters only aggravate — NEVER "clogged gutters cause ice dams" |
| International Residential Code R905.1.2 | Ice barrier from eave to ≥24 in inside the exterior wall line |
| NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | Gutter work on a detached 1–2-family home = ordinary maintenance, no permit |
| NJ Division of Consumer Affairs / Contractors Registration Act | NJ HIC registration + liability coverage (whyChooseUs) |

---

## Self-audit checklist

- [x] **Answer-first, bolded openers** — every section's first sentence is the definitive answer, bolded, ≤40 words. Measured: directAnswer 36w; overview[0] 35w; approach[0] 33w / [1] 29w; residential 28w; commercial 30w; all 7 signs 29–37w; all 6 FAQ answers 26–36w. All bolded=true.
- [x] **Zero modality in declaratives** — grep `will|should|need to|have to|must|might|may|would|could` returns only one hit: `faqs[0].question` "Should you repair or replace your gutters?" and `faqs[2].question` "How often should you clean gutters" — both are faqs[].question fields (exempt). Zero in any declarative answer/overview/sign/approach/process/pricing prose.
- [x] **Every number named-sourced** — copper/aluminum/steel/vinyl lifespans → InterNACHI; 50% more / 5-in / 6-in / 2×3 / 3×4 → Storm Master + My Gutter Doctor; 1/4 in per 10 ft → American Gutter Masters + Vermont Gutter Co. (trade, no code); $12–$25/ft, $100–$450, ~$275, $75–$300, $100–$225, per-material $/ft → HomeGuide; 2×/yr & 3–4× → Angi/GAF; ≥24 in → IRC R905.1.2; N.J.A.C. 5:23-2.7 cited for the permit fact.
- [x] **approachSubheadings.length === approachContent.length** — 2 === 2.
- [x] **Counted plurals match** — "5 gutter services" → subServices has exactly 5 entries.
- [x] **No de-fab literals** — grep for `24/7|same-day|GAF Certified|0% financing|top-rated|500+|15+ years|certified installer|[VERIFY]|[UNVERIFIED]|clog-proof|maintenance-free|never clean` returns none. No manufacturer-certification claim (Englert named as a manufacturer NQR references for the seamless fact, not as a certifier of NQR).
- [x] **No outbound links / URLs** — grep `https?://|www.|<a href` returns none.
- [x] **No entity-pronoun co-reference** — fixed "the gutter loses the surface that holds it" → "the gutter loses the mounting surface". Remaining grep hits resolved.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **Ice-dam correction honored** — `faqs[4]` explicitly states clogged gutters *aggravate but do not cause* ice dams; root cause = attic heat escape (Univ. of Minnesota Extension); never asserts "clogged gutters cause ice dams."
- [x] **Slope not cited to code** — the 1/4-in-per-10-ft pitch is attributed to American Gutter Masters / Vermont Gutter Co. as a trade rule, never to an IRC/code section.
- [x] **Primary n-gram repeated** — "gutter" / "gutter installation repair" leads the directAnswer (H1 answer), overview, and recurs through the closing whyChooseUs + pricing sections.
- [x] **Snippet parses** — wrapped in array context, `node` import parses cleanly; object validates against ServiceContentSchema field shape.
