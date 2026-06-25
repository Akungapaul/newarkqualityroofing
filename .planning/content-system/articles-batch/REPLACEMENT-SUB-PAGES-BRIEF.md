# REPLACEMENT-SUB-PAGES Articles Brief — Sub-Batch 8/9 (42 articles)

Answer-first rewrite of the 42 articles in `src/data/article-content/replacement-sub-pages.ts`
(14 parent services × signs / cost-guide / decision), grounded in the committed parent gold
`src/data/service-content/replacement-sub-pages.ts` and the verified per-service **fact packs**
at `.planning/content-system/articles-batch/facts/<serviceId>.json`.

These dirty current articles carry the program's standard de-fab: invented whole-roof dollar
totals, **R-49** stated as current code, named insurers/financing brands, an unsourced
snowfall figure, GAF/CertainTeed-certification framing, and "licensed NJ contractor" errors.
The insurance / storm / fire pages additionally need the **N.J.S.A. 17:22B public-adjuster
hard line** enforced. Each AUTHOR agent rewrites ONE article from verified facts only.

---

## 0. WHAT EACH AUTHOR AGENT READS (authority order)

1. **This brief** — global rules + the KILL table + the per-article spec for your one article.
2. **Your service's fact pack** — `facts/<serviceId>.json` — the AUTHORITATIVE per-service
   content source: `definition`, `costRanges` (each with `source`), `signs`, `selectionCriteria`,
   `technicalFacts`, `defabToKill`, `parentDebtToAvoid`, `articleAngles{signs,costGuide,decision}`.
   **Every fact, number, and source in your article must come from this pack (or the gold block).**
3. **The gold block** — your service's object in `service-content/replacement-sub-pages.ts`
   (the fact pack names the line range / serviceId).
4. **The exemplar** — `src/data/article-content/homepage.ts` (the answer-first shape to match)
   and the schema `src/data/article-content/schema.ts`.

You write a single JSON file: `authored/<articleId>.json` (content fields only — see §6).

---

## 1. ANSWER-FIRST STRUCTURE (semantic-content ruleset v1.7 — match homepage.ts exactly)

Each article object you author has these CONTENT fields (identity fields articleId/parentId/
parentType/position are added later by `assemble.mjs` — do NOT include them):

- **`directAnswer`** — a ≤40-word **definitive answer to the question-form H1**, rendered as
  a copper-rail lead. **Bold the main topic** with `**…**` (the bold span itself must be ≤40
  words). It is **TOPIC-definitional**, NOT NQR-first — answer the question with a sourced
  fact, not a sales line. NQR appears ONLY in `ctaText`.
- **`intro`** — one supporting sentence that extends the directAnswer.
- **`sections`** — **2–4** sections. Each: a **question-form `heading`** ("How…?", "What…?",
  "When…?", "Why…?") + a `body` array of **1–4** paragraphs. Each paragraph **leads with its
  bolded main topic**, states the answer in the first sentence (**first sentence ≤40 words**),
  then develops it with named-source evidence in order.
- **`conclusion`** — one short paragraph that resolves the question.
- **`ctaHeading`** — a short action heading.
- **`ctaText`** — the ONLY place NQR appears: "Newark Quality Roofing is a **registered New
  Jersey Home Improvement Contractor**, insured and serving Essex County…" May carry ONE inline
  link like `[roof replacement](/roof-replacement)` (markdown link, internal path only).
- **`metaDescription`** — **≤ 158 characters** (HARD: the index runs a Zod `max(160)` parse that
  CRASHES the build over 160; stay ≤158 for margin). No `**` in the meta.

Bold (`**…**`), inline links (`[text](/path)`) render via `parseRichText` in `intro`, every
`body` paragraph, `conclusion`, and `ctaText`. Do NOT put `**` in `metaDescription`, `ctaHeading`,
or section `heading` (those are not parsed → the `**` would leak).

---

## 2. HARD RULES (gated — a violation fails the build/audit)

- **No modality in BODY text**: never `will / shall / should / need to / needs to / have to /
  has to / must / ought to`. (Question-form *headings* are exempt; transitive "needs" like
  "a low-slope roof needs ¼ inch of slope" is fine — only "need(s) **to**" is banned.) Rephrase
  to present-tense declaratives ("…requires…", "…drains…", "the code sets…").
- **No de-fab / hype**: no "leading", "best", "top-rated", "premium" (as hype — a price-noun
  like "the premium over an overlay" is fine), "trusted", "#1", "industry-leading",
  superlatives, or invented prevalence/volume.
- **No outbound citation LINKS** and no naked URLs. Name sources in plain text
  ("per HomeAdvisor", "per the Insurance Information Institute", "per the InterNACHI chart").
- **Every number and statistic carries a named source.** No naked dollar figures, percentages,
  lifespans, or thresholds.
- **directAnswer & every section body[0] first sentence ≤ 40 words.** (A spaced em-dash " — "
  counts as a word token.)
- **No internal fact-source tags leak into the copy** — never write "(gold)", "; gold",
  "(per facts)", "(per pack)" etc.

---

## 3. THE DE-FAB KILL TABLE (apply to EVERY article; your fact pack lists the per-article specifics)

**KILL (these are in the dirty copy you replace):**

- **Invented whole-roof / per-job dollar totals stated without a source** — e.g. tear-off
  "$8,500–$15,000", "$2,000–$4,000 premium", overlay "$6,500–$11,000", "$8,000–$18,000",
  metal "$15,000–$30,000", slate "can exceed $35,000", permit "$100–$400", dumpster
  "$500–$1,000", "3–5 tons of debris", "40% of tear-offs need deck repair", "20–40% need
  decking, +$1,000–$3,000", "10–15% contingency". **Use ONLY the cost figures in your fact
  pack `costRanges`, each with its named source.** If the gold gives a real whole-job total for
  your service, lead with it (attributed); if it gives only per-square-foot / per-scenario
  figures, set `hasRealWholeProjectTotal` false and lead with those. Never invent a flat number.
- **"R-49" as current attic-insulation code → R-60** (2021 IECC Zone 4-5; R-49 is the
  raised-heel exception only). Only state an insulation R-value if your gold/pack supports it.
- **Named insurers** ("State Farm, Allstate, NJ Manufacturers") + **financing brands**
  ("GreenSky, Mosaic") → generic ("most NJ homeowners policies", "12–24 month financing")
  unless your fact pack names them. **Keep** the N.J.S.A. 56:8 written-disclosure-of-financing
  fact.
- **Unsourced snowfall / climate figures** ("average 25-inch annual snowfall") → only state a
  climate figure if your fact pack attributes it to **NOAA** (Newark/EWR normals); otherwise
  drop it.
- **Manufacturer-certification self-claims** — "GAF Master Elite", "CertainTeed SELECT
  ShingleMaster", "Owens Corning Preferred", "certified team", "only ~2% qualify", "Golden
  Pledge", "manufacturer certified-contractor financing". **DELETE.** Explain warranties
  honestly as two components: the **manufacturer material warranty** (factory defects;
  preserved when the cover is installed to manufacturer specification, per Owens Corning
  warranty guidance) and the contractor's **written workmanship warranty** (the labor). GAF /
  CertainTeed / Owens Corning may be named **only as external sources of guidance/data**, never
  as NQR partnerships or certifications.
- **"licensed" / "licensed NJ contractor" / "fully licensed"** — **NJ issues NO roofing
  license.** Always **"registered New Jersey Home Improvement Contractor" / "registered NJ
  HIC"**. (A "licensed Construction Official" / "licensed public adjuster" is a separate,
  correct use — those are different credentials held by third parties.)
- **Invented volume/scale** — "we have replaced hundreds of roofs", "our certified team has
  completed hundreds of replacements", "more than we can count". **DELETE all.** NQR is a
  registered NJ HIC serving Essex County — no counts.
- **Wrong statutes / thresholds** — fix to: HIC registration **N.J.S.A. 56:8-136** (no $ floor;
  13VH number on contract/ad per **56:8-144**); $500,000/occurrence CGL **N.J.S.A. 56:8-142**;
  written contract over $500 **N.J.A.C. 13:45A-16.2**; ordinary-maintenance roof-covering rule
  **N.J.A.C. 5:23-2.7**; complete-removal / no-recover **N.J.A.C. 5:23-6.4**; recover limits
  **IRC R908**.

**INSURANCE / STORM / FIRE pages — the N.J.S.A. 17:22B public-adjuster HARD LINE (non-negotiable):**
- NQR **documents** the damage (photos, measurements, a written scope) and **meets the adjuster
  on site**. The **homeowner — or a licensed public adjuster** the homeowner retains —
  negotiates the claim and its value. NQR is a roofing contractor, **not** a public adjuster.
- **NEVER** write: "we handle your claim", "we negotiate with your insurer", "we'll waive /
  cover / eat your deductible", "free roof", "guaranteed approval", or anything resembling an
  AOB / deductible-rebate. These violate N.J.S.A. 17:22B and N.J.A.C. 11:1-37 and are illegal
  inducements.
- Fire-claim average ≈ **$88,170** (Insurance Information Institute) — supersedes the older
  $77,340. Cite ACV/RCV, depreciation (recoverable when work completes), and the deductible as
  the homeowner's economics, each attributed.

**AVOID REPRODUCING (parent-gold debt — a separate deferred sweep; just keep it OUT of your copy):**
- Brand-system roster lines — "GAF, CertainTeed, Owens Corning shingle systems" / "Firestone,
  Carlisle, Johns Manville membrane systems". Describe systems generically (3-tab / architectural
  asphalt, metal, slate, tile, cedar shake; EPDM / TPO / modified bitumen membrane).
- The gold `credentialsHighlight: 'NJ HIC Licensed'` chip → "registered NJ HIC".

---

## 4. THE THREE POSITIONS — directAnswer angle per H1

The H1 is fixed (in generated `articles.ts`, gated PASS) — you do NOT write it; your
`directAnswer` answers it. (Position-3 H1s carry an auto-generated "{Service} **Roofing**?"
suffix, e.g. "What Should You Know About Insurance Roof Replacement Roofing?" — answer the
question as written; do not try to fix the H1 grammar.)

- **Position 1 — signs.** H1: **"What Are the Signs You Need {Service}?"**
  `directAnswer` = the definitive set of warning signs / triggering conditions for this service
  (topic-definitional), drawn from your fact pack `signs[]`. Sections develop the highest-value
  signs, each grounded in its named source.
- **Position 2 — cost-guide.** H1: **"How Much Does {Service} Cost in NJ?"**
  `directAnswer` = the honest cost answer from your fact pack. If `hasRealWholeProjectTotal` is
  **true**, lead with the attributed whole-job range, then layer the per-square-foot / line-item
  figures. If **false**, say plainly there is no single whole-job number for this scenario and
  lead with the per-unit / per-scenario figures + NQR's **free written estimate**. Apply the NJ
  "10–40% above national" modifier where the pack gives it. **Every $ carries its source.**
- **Position 3 — decision.** H1: **"What Should You Know About {Service} Roofing?"**
  This is a **BROAD decision overview** (the same shape as the components-specialty /
  commercial-services position-3, **not** a "how to choose a contractor" checklist).
  `directAnswer` = the single most important thing a homeowner should understand about this
  service — its defining decision factor, code limit, material trade-off, or insurance reality
  (from your fact pack `articleAngles.decision`). Sections develop the key decision facets:
  e.g. the code/process constraint, the material/scenario trade-off, the warranty reality, and
  (for insurance/storm/fire) the claim/adjuster reality. The verifiable contractor-selection
  criteria (NJ HIC registration, $500k CGL, written contract, itemized estimate) belong here
  too when relevant, but as ONE facet of "what to know" — not the whole article.

---

## 5. THE 42 ARTICLES (articleId → H1 → fact pack → #1 watch item)

`<<FILLED FROM FACT PACKS — see the table below; each row's watch item names the top de-fab/grounding concern>>`

| # | articleId | H1 (fixed) | fact pack | top watch |
|---|-----------|------------|-----------|-----------|
| _ | full-roof-tear-off-{signs,cost-guide,decision} | …Signs… / …Cost in NJ? / …What Should You Know…Roofing? | full-roof-tear-off | R-49→R-60; kill $8.5k–$15k flat total + "$2k–$4k premium" + dumpster/debris invents; 2-layer limit + N.J.A.C. 5:23-6.4 deck-removal triggers |
| _ | roof-overlay-installation-{…} | …Signs/Cost/Know… | roof-overlay-installation | overlay-vs-tear-off economics from gold; IRC R908 / 5:23-6.4 recover bans (wood/slate/tile, water-soaked, 2+ layers); kill "$6.5k–$11k" flat overlay total |
| _ | re-roofing-{…} | … | re-roofing | recover definitions + code limits; kill invented totals/financing brands |
| _ | insurance-roof-replacement-{…} | … | insurance-roof-replacement | **public-adjuster hard line**; ACV/RCV/depreciation/deductible attributed; kill named insurers + "we handle your claim"/deductible-waiver |
| _ | storm-damage-roof-replacement-{…} | … | storm-damage-roof-replacement | covered-peril vs wear/age; documentation; **no deductible waiver / AOB**; registered not licensed |
| _ | aging-roof-replacement-{…} | … | aging-roof-replacement | InterNACHI lifespans (3-tab 20 / arch 30); 25%/50%/3-repairs rules; kill invented energy %/15–25% |
| _ | roof-replacement-after-leak-{…} | … | roof-replacement-after-leak | systemic-failure signs; deck-rot exposure; kill invented $/mold-window math |
| _ | fire-damage-roof-replacement-{…} | … | fire-damage-roof-replacement | UL 790/ASTM E108 Class A/B/C; fire avg **$88,170** (not $77,340); structural assessment; insurance hard line |
| _ | asphalt-shingle-roof-replacement-{…} | … | asphalt-shingle-roof-replacement | Josten architectural $6.50–$11/sf; 3-tab 20/arch 30 (InterNACHI); kill GAF Master Elite/Golden Pledge |
| _ | metal-roof-replacement-{…} | … | metal-roof-replacement | Josten metal $9–$16/sf; 40–80 yr (copper 70+); kill invented "$15k–$30k" |
| _ | slate-roof-replacement-{…} | … | slate-roof-replacement | Josten slate $10–$30/sf; 60–150 yr (Nat'l Slate Assn); copper/stainless fasteners; kill "exceed $35k" |
| _ | tile-roof-replacement-{…} | … | tile-roof-replacement | structural weight/load; material life from gold; per-sf from gold only |
| _ | flat-roof-replacement-{…} | … | flat-roof-replacement | EPDM 15–25/TPO 7–20/mod-bit ~20; ¼-in/ft slope; ponding >48h defect; per-sf from gold |
| _ | cedar-shake-roof-replacement-{…} | … | cedar-shake-roof-replacement | CSSB grades; fire rating (untreated Class C; pressure-impregnated for B/A); red cedar ≠ copper nails; per-sf from gold |

(The `articleId` per row is `<service>-signs`, `<service>-cost-guide`, `<service>-decision`.
H1 grammar quirks are auto-generated and gated PASS — answer the question as written.)

---

## 6. SELF-CHECK BEFORE WRITING YOUR FILE

- directAnswer bold span ≤40w, topic-definitional, answers the exact H1.
- every section body[0] first sentence ≤40w.
- 2–4 sections, each heading question-form, each body 1–4 paragraphs leading with a bold topic.
- every $/%/lifespan/threshold has a named source from your fact pack.
- 0 modality in body; 0 "licensed"; 0 invented whole-roof $ total; 0 GAF/CertainTeed cert
  self-claim; 0 invented volume; 0 named-insurer/financing-brand (unless the pack names it).
- insurance/storm/fire: 0 "we handle your claim" / 0 deductible-waiver / 0 "free roof".
- 0 brand-system roster; 0 "(gold)" tags; 0 `**` in meta/heading/ctaHeading.
- metaDescription ≤158 chars.
- NQR only in ctaText, as "registered New Jersey Home Improvement Contractor", insured.

Write `authored/<articleId>.json` — a single JSON object with keys: `articleId`, `directAnswer`,
`intro`, `sections` (array of {heading, body[]}), `conclusion`, `ctaHeading`, `ctaText`,
`metaDescription`. (Do NOT include parentId/parentType/position — assemble.mjs adds those.)
