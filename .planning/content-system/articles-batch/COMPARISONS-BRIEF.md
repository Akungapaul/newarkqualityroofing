# COMPARISONS ARTICLES BRIEF — Articles Sub-Batch 9/9 (FINAL)

Answer-first rewrite + de-fabrication of all **60 comparison support articles** (30 comparisons × 2 positions) in `src/data/article-content/comparisons.ts`. This is the LAST file of the full-site content rewrite. Grounded in the committed, de-fabbed parent **comparison money pages** (`src/data/comparison-content/{material-vs-material,service-vs-service,decision-helper}.ts`) — NOT the fabrication-laden current article copy. Semantic-content ruleset **v1.7**.

Each AUTHOR agent writes ONE article object. It MUST read, in order:
1. **This brief** (shared rules + its position template + the KILL table).
2. **Its fact pack:** `.planning/content-system/articles-batch/facts/<comparisonId>.json` — the verified figures/sources/njContext/positioning/`defabToKill` + its `buyersGuide`/`expertPicks` `directAnswerThesis` + `sectionAngles`. **This is the fact source.**
3. **Its parent gold block:** the `comparisonId: '<id>'` object in the mapped `comparison-content/*.ts` file (for tone + any figure the pack abbreviated).
4. **The gold exemplar:** the first object in `src/data/article-content/design-consultation.ts` (`custom-roof-design-consultation-signs`) — copy its answer-first shape exactly.

---

## THE ANSWER-FIRST ARTICLE SHAPE (every article, both positions)

A single JSON object with these content fields (identity fields parentId/parentType/position are added later by `assemble.mjs` — DO NOT include them):

```json
{
  "articleId": "<exact id, e.g. asphalt-shingles-vs-metal-roofing-buyers-guide>",
  "directAnswer": "**<bolded main topic> ...** <a definitive ≤40-word answer to the article's H1, naming a source>",
  "intro": "<ONE bridging sentence (~20-30w) that sets up the body; NOT a duplicate of directAnswer>",
  "sections": [
    { "heading": "<a QUESTION-FORM heading, e.g. 'Which Costs Less Over Time?'>",
      "body": [
        "**<re-bold a topic from this section's lead>** <answer-first first sentence ≤40 words> ...",
        "**<re-bold the next topic>** <develops the lead, every figure source-attributed> ...",
        "**<optional 3rd paragraph>** ..."
      ] },
    { "heading": "<question-form>", "body": ["...","..."] },
    { "heading": "<question-form>", "body": ["...","..."] }
  ],
  "conclusion": "<2-3 sentence synthesis; no new modality, no fabrication>",
  "ctaHeading": "<short CTA headline, no ** >",
  "ctaText": "<PLAIN credential CTA, NO ** bold; may carry ONE [anchor](/slug) link>",
  "metaDescription": "<≤158 chars, no ** >"
}
```

**Hard rules (the gate enforces R6/R10/leads/meta; the rest are review-enforced):**
- **R2 answer-first:** `directAnswer` opens with a `**bolded**` main-topic span, then a **definitive present-tense answer in ≤40 words** to the exact H1, with a **named source**. Section `body[0]`'s **first sentence ≤40 words**, answer-first, opens with a `**bolded**` topic.
- **R3 strict bold:** EVERY body paragraph opens by re-bolding a topic named in that section's lead. Bold the named main topics only (materials, the decision factor, the standard) — not whole sentences.
- **Question-form section headings** (3 sections; schema allows 2–4 — use **3**). Headings are plain text, **no `**`**, no markdown. They are the `sectionAngles` from the fact pack, phrased as questions.
- **R6 modality — BANNED in body/directAnswer/intro/conclusion:** `will, shall, should, need to, needs to, have to, has to, must, ought to`. Rewrite to declarative present tense. (Transitive "needs" like "a roof needs ¼-in slope" is fine; only "need(s) **to**" is banned. Question-form headings are exempt, but don't use modality there anyway.) The dirty file's 33 modality hits are why this batch fails the gate — write declaratively.
- **R10 de-fab / R14 hype:** see the KILL table. No `GAF Master Elite`, `SELECT ShingleMaster`, `HAAG`, `same-day`, `24/7`, `500+`, `top-rated`, `0% financing`. No "premium" as hype (price-noun "the metal premium" is OK).
- **No outbound citation links.** Sources are named **in text** ("per the InterNACHI life-expectancy chart", "per Josten Roofing", "per the EPA"). Internal `[anchor](/slug)` links to NQR pages are allowed (1–2 per article max), e.g. `[roof replacement](/roof-replacement)`.
- **`metaDescription` ≤ 158 characters** (hard Zod cap is 160; the index import CRASHES the build at >160 — stay ≤158). Topic-definitional, no NQR name needed, no `**`.
- **Word target ~750–900 words** of body across the 3 sections.
- **`directAnswer` is TOPIC-definitional** (answers the comparison question with a sourced fact). NQR appears **only in `ctaText`** (registered NJ HIC, insured, free written estimate) — never "we install thousands", never first person in the body.

---

## POSITION TEMPLATES

### Position 1 — `<id>-buyers-guide` — H1: **"Which Is Better: {A} vs {B}?"** (or "Which Is Better: {Best …}?" for rankings)
The **decision framework**. `directAnswer` = the pack's `buyersGuide.directAnswerThesis`: a definitive verdict that names **when A wins / when B wins / the deciding factor**, grounded in the gold `verdict`. The 3 sections = the pack's `buyersGuide.sectionAngles` (typically: cost upfront-vs-lifetime → NJ climate/UCC fit → the decision checklist). Audience = the homeowner/owner deciding.

### Position 2 — `<id>-expert-picks` — H1: **"What Do NJ Roofers Recommend for {A} vs {B}?"**
A **substantiated, standards-grounded recommendation**. `directAnswer` = the pack's `expertPicks.directAnswerThesis`: what the **evidence and standards favor** + NQR's honest registered-NJ-HIC framing. The 3 sections = the pack's `expertPicks.sectionAngles` (typically: what the named standards actually favor → installation-quality factors that decide longevity → the common homeowner mistake the standards flag).

**⚠️ EXPERT-PICKS ANTI-FABRICATION RULE (the #1 risk this batch):** the dirty expert-picks articles are built on FABRICATED first-person field anecdotes — "after installing thousands of roofs", "what we see on tear-offs", "our crews", "we track repair costs", "we find homeowners…". **Every one of these dies.** Recast the recommendation in the THIRD PERSON, grounded in named sources: "the InterNACHI chart favors…", "NRCA installation guidance shows…", "the standards flag…". NQR's voice appears only as the honest credential in `ctaText`. Never invent a field observation, a project count, a crew-speed boast, or a proprietary "cost dataset".

---

## SITE-WIDE KILL TABLE (apply to ALL 60; per-article specifics are in each pack's `defabToKill`)

| # | KILL (dirty) | REPLACE WITH (gold-grounded) |
|---|---|---|
| 1 | Fabricated field experience / volume — "installing thousands of roofs", "our crews", "we see on tear-offs", "we install", "we track costs", "we process claims", "been in business long enough" | Third-person, source-grounded statements; NQR only as the `ctaText` credential. |
| 2 | Manufacturer-certification self/verify claims — **GAF Master Elite, CertainTeed SELECT ShingleMaster, Golden Pledge as a credential, "verify Drexel/Sheffield Metals certification", Tesla-certified** | Honest **2-part warranty**: a manufacturer limited material/system warranty (set by the maker) + the **contractor's written workmanship warranty**. Brand-neutral standards (ASTM, UL, InterNACHI, NRCA, CRRC) named only as sources. |
| 3 | **"licensed contractor" / "NJ-licensed"** | **"registered New Jersey Home Improvement Contractor"** (N.J.S.A. 56:8-136 — a registration, NOT a license; NJ issues no roofing license). Insured; free written estimate. |
| 4 | Invented figures NOT in the gold — costs ("$350-$500/square", "$2,000-$5,000 deck", "$500-$1,000 engineer", "$500-$1,500 warranty upgrade"), per-year math ("$15-$25/yr"), failure timelines ("fails within 5 years", "1-3 years"), percentages ("AC costs 10-25%", "40-60% more", "60-70% of project cost") | ONLY figures present in the fact pack `keyFacts`/`njContext`, each with its named source. If the gold lacks a number, the article states the qualitative fact without a number. |
| 5 | Currency errors — **active 30% federal solar ITC / §25D / §25C** | **REPEALED for systems completed after 2025-12-31** (P.L. 119-21) → historical framing + "confirm current incentives with a tax professional". NJ SuSI/SREC-II (15-yr, NJBPU) + N.J.S.A. 48:3-87 net metering stay, qualitative. (Solar comparison only.) |
| 6 | **ENERGY STAR roof program** as current; **R-49** as current code | **CRRC-1 / ASTM C1549** (solar reflectance + thermal emittance, no R-value); **R-60** (2021 IECC Zone 4-5; R-49 = raised-heel exception). EPA cool-roof **11–27% = peak cooling demand in air-conditioned residential** (keep "residential"; note Newark Zone 4A-5 winter heating offset). |
| 7 | NJ residential historic tax credit / **S3545** as if it exists; federal HTC for homeowners | S3545 is **NOT law**; federal **§47 HTC is income-producing-only**; the binding private-owner gate is a local **Certificate of Appropriateness** (N.J.S.A. 40:55D). (Historic comparison only.) |
| 8 | Hype/opinion — "premium choice", "arguably more important", "strongest available", "suggests low confidence", unsourced superlatives | Standards-based, attributed statements. "Premium" only as a price-noun. |

**Wind/snow/freeze-thaw note:** use only gold-attributed figures — Newark ~31.5 in annual snowfall (NOAA 1991–2020); northern NJ ~110–115 mph design wind (ASCE 7-16). The "35–45 freeze-thaw cycles" figure is an **unverified regional estimate** — keep it qualitative and NEVER bundle it as a NOAA fact.

---

## THE 60-ARTICLE ROSTER (comparisonId → gold file; each has `-buyers-guide` pos 1 + `-expert-picks` pos 2)

**material-vs-material.ts (16):** asphalt-shingles-vs-metal-roofing · slate-vs-tile-roofing · tpo-vs-epdm-roofing · metal-vs-tile-roofing · asphalt-vs-slate-roofing · wood-shake-vs-asphalt-shingles · pvc-vs-tpo-roofing · standing-seam-vs-corrugated-metal · modified-bitumen-vs-tpo · rubber-roofing-vs-tpo · cedar-shake-vs-wood-shingle · built-up-roofing-vs-modified-bitumen · spray-foam-vs-tpo · green-roof-vs-traditional-roofing · solar-shingles-vs-solar-panels · architectural-vs-3-tab-shingles

**service-vs-service.ts (6):** roof-repair-vs-replacement · roof-coating-vs-replacement · roof-overlay-vs-tear-off · patching-vs-full-roof-repair · preventive-maintenance-vs-emergency-repair · diy-vs-professional-roof-repair

**decision-helper.ts (8, type "ranking", H1 reads "Which Is Better: Best …?"):** best-roofing-material-nj-weather · best-commercial-roofing-material · best-roofing-for-flat-roofs · best-roofing-for-historic-homes-nj · cheapest-vs-most-durable-roofing · most-energy-efficient-roofing-materials · best-roofing-for-essex-county-colonial-homes · roof-warranty-comparison-guide

**Ranking pages** have no itemA/itemB — `directAnswer` answers "what is best for X" with the gold's ranked verdict (e.g. "No single material is best for NJ weather; the strongest performers are…"), grounded in the pack.

---

## OUTPUT (per AUTHOR agent)
Write a single STRICT-JSON object (content fields only, per the shape above) to:
`.planning/content-system/articles-batch/authored/<articleId>.json`
Validate it parses. Return a one-line confirmation; the JSON file is the deliverable. Meta ≤158. 3 sections. Every figure traces to a named source in your fact pack.
