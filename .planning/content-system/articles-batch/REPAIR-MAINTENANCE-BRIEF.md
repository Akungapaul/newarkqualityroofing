# REPAIR-MAINTENANCE Articles Brief — Sub-Batch 7/9 (30 articles)

Answer-first rewrite of the 30 articles in `src/data/article-content/repair-maintenance.ts`
(10 parent services × signs / cost-guide / decision), grounded in the committed parent gold
`src/data/service-content/repair-maintenance.ts` and the verified per-service **fact packs**
at `.planning/content-system/articles-batch/facts/<serviceId>.json`.

**This is the heaviest de-fab batch of the article layer.** The dirty current articles are
full of fabricated certifications (HAAG, GAF Master Elite), invented dollar stats, "24/7"
promises, and "licensed" credential errors. Each AUTHOR agent rewrites ONE article from
verified facts only.

---

## 0. WHAT EACH AUTHOR AGENT READS (authority order)

1. **This brief** — global rules + the KILL table + the per-article spec for your one article.
2. **Your service's fact pack** — `facts/<serviceId>.json` — the AUTHORITATIVE per-service
   content source: `definition`, `costRanges` (each with `source`), `signs`, `selectionCriteria`,
   `technicalFacts`, `defabToKill`, `parentDebtToAvoid`, and (where present) `articleAngles`.
   **Every fact, number, and source in your article must come from this pack (or the gold block).**
3. **The gold block** — your service's object in `service-content/repair-maintenance.ts`
   (the fact pack names the line range / serviceId).
4. **The exemplar** — `src/data/article-content/homepage.ts` (the answer-first shape to match)
   and the schema `src/data/article-content/schema.ts`.

You write a single JSON file: `authored/<articleId>.json` (content fields only — see §4).

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
  link like `[roof repair](/roof-repair)` (markdown link, internal path only).
- **`metaDescription`** — **≤ 158 characters** (HARD: the index runs a Zod `max(160)` parse that
  CRASHES the build over 160; stay ≤158 for margin). No `**` in the meta.

Bold (`**…**`), inline links (`[text](/path)`) render via `parseRichText` in `intro`, every
`body` paragraph, `conclusion`, and `ctaText`. Do NOT put `**` in `metaDescription`, `ctaHeading`,
or section `heading` (those are not parsed → the `**` would leak).

---

## 2. HARD RULES (gated — a violation fails the build/audit)

- **No modality in BODY text**: never `will / shall / should / need to / needs to / have to /
  has to / must / ought to`. (Question-form *headings* are exempt; transitive "needs" like
  "a roof needs ¼ inch of slope" is fine — only "need(s) **to**" is banned.) Rephrase to
  present-tense declaratives ("…requires…", "…resists…", "the code sets…").
- **No de-fab / hype**: no "leading", "best", "top-rated", "premium" (as hype), "trusted",
  "#1", "industry-leading", superlatives, or invented prevalence/volume.
- **No outbound citation LINKS** and no naked URLs. Name sources in plain text
  ("per the NRCA", "per HomeAdvisor", "per the Insurance Information Institute").
- **Every number and statistic carries a named source.** No naked dollar figures, percentages,
  lifespans, or thresholds.
- **directAnswer & every section body[0] first sentence ≤ 40 words.** (A spaced em-dash " — "
  counts as a word token.)
- **No internal fact-source tags leak into the copy** — never write "(gold)", "; gold",
  "(per facts)" etc.

---

## 3. THE DE-FAB KILL TABLE (apply to EVERY article; your fact pack lists the per-article specifics)

**KILL (these are in the dirty copy you replace):**
- **HAAG certification** — appears as a contractor-selection criterion and "HAAG-certified
  inspector / contractor" / "HAAG Engineering is the gold standard" (roof-inspection-decision,
  storm-damage-cost-guide, hail-damage-decision). **DELETE entirely.** Reframe storm/hail
  assessment to **documentation rigor** — a test-square method (a 10×10-ft square = one roofing
  square per slope), per-square impact counts, photos with measurement references, a roof diagram —
  the documentation insurers and engineers recognize, per **IBHS** hail-assessment guidance and
  the **Insurance Information Institute (III)**. NQR makes **NO** inspector-certification self-claim.
- **Manufacturer-certification self-claims** — "GAF Master Elite", "CertainTeed SELECT
  ShingleMaster", "Owens Corning Preferred", "certified team/contractor", "only ~2% of NJ
  contractors qualify", "Golden Pledge" specifics. **DELETE.** Explain warranties honestly as two
  components: the **manufacturer material warranty** (factory defects; preserved when the cover is
  installed to manufacturer specification, per Owens Corning warranty guidance) and the contractor's
  **written workmanship warranty** (the labor). GAF / CertainTeed / Owens Corning / Atlas may be
  named **only as external sources of guidance/data**, never as NQR partnerships or certifications.
- **"24/7" / around-the-clock availability** — the gold substantiates only business hours
  (**Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM**). **Never write "24/7".** For emergency-roof-repair,
  reframe to **rapid response, stabilization-first** (tarp/patch to stop water entry, then schedule
  the permanent repair), justified by the **EPA 24–48-hour mold-dry-out window**.
- **"licensed" / "fully licensed/certified" / "licensed NJ contractor"** — **NJ issues NO roofing
  license.** Always **"registered New Jersey Home Improvement Contractor" / "registered NJ HIC"**.
  (A "licensed Construction Official" is a separate, correct use if it ever comes up — but it does
  not here.)
- **Invented volume/scale** — "hundreds/thousands of completed repairs/replacements/inspections",
  "more than we can count", "majority of inspections mid-March to late April", "at least half our
  customers". **DELETE all.** NQR is a registered NJ HIC serving Essex County — no counts.
- **Invented dollar / % stats** — any number without a named source. Notably: "$3,000–$10,000 net
  savings over 25 years" + "3–5 yr payback" (maintenance), "20–40% of replacements need decking,
  +$1,000–$3,000" + "10–15% contingency" (replacement), "$2M GL", energy/insurance savings %,
  invented deductible/test-square/PSI/rhizine/claim-window figures. **DELETE** — use only the
  fact pack's `costRanges`/`technicalFacts` (each carries a source).
- **Wrong statutes / thresholds** — fix to: HIC registration **N.J.S.A. 56:8-136** (no $ floor;
  13VH number on contract/ad per **56:8-144**); $500,000/occurrence CGL **N.J.S.A. 56:8-142**;
  written contract over $500 **N.J.A.C. 13:45A-16.2**; ordinary-maintenance roof-covering rule
  **N.J.A.C. 5:23-2.7**; severe-weather thresholds **58 mph wind / ¾-inch hail (NOAA)**.

**AVOID REPRODUCING (parent-gold debt — a separate deferred sweep, just keep it OUT of your copy):**
- Brand-system lines — "Firestone, Carlisle, Johns Manville membrane systems" /
  "GAF, CertainTeed, Owens Corning shingle systems". Describe systems generically (EPDM, TPO,
  modified bitumen / 3-tab, architectural asphalt, metal, slate).
- The gold `credentialsHighlight: 'NJ HIC Licensed'` chip → "registered NJ HIC".
- **wind only:** the "2–3× field pressure **per IIBEC RICOWI**" attribution. **Keep the physics**
  (corners, rakes, edges are the high-suction zones that fail first; uplift runs ~2–3× the open
  field) but **attribute to ASCE 7 component-and-cladding coefficients / general wind-engineering**,
  or state it qualitatively. **Drop "IIBEC RICOWI".** (IIBEC is fine ONLY for the high-wind
  *installation* method — adhesive at starter course / rake edges. IBHS seal-strength + field-aging,
  NOAA 58 mph, ARMA 60/130 mph all KEPT with attribution.)
- **hail only:** the flat "$3,000–$12,000 hail repair" range. Present the honest tiers instead —
  minor $500–$1,500, moderate $1,500–$3,500 are true repairs; the $4,000–$12,000 band is **severe
  damage that punctures underlayment / partial reroofing (a partial REPLACEMENT priced per square),
  not a like-for-like repair**, and widespread hail usually means an insurance-covered full
  replacement. Never quote a hail $ figure without its named source.
- Treat the **~90–95% flashing-leak** figure as "an industry estimate attributed to the NRCA"
  (hedged, as the gold does) — never a precise NRCA-published statistic.

---

## 4. THE THREE POSITIONS — directAnswer angle per H1

The H1 is fixed (in generated `articles.ts`, gated PASS) — you do NOT write it; your `directAnswer`
answers it.

- **Position 1 — signs.** H1: **"What Are the Signs You Need {Service}?"**
  `directAnswer` = the definitive set of warning signs for this service (topic-definitional),
  drawn from your fact pack `signs[]`. Sections develop the highest-value signs, each grounded in
  its named source.
- **Position 2 — cost-guide.** H1: **"How Much Does {Service} Cost in NJ?"**
  `directAnswer` = the honest cost answer. **Only `roof-replacement` has a real whole-job total
  ($10,000–$25,000 for a typical NJ home, per HomeAdvisor/Modernize).** For the other 9,
  `hasRealWholeProjectTotal` is **false** — there is NO single whole-job number; lead with the
  per-repair / per-unit ranges (each with its source) and NQR's **free written estimate**. Apply the
  NJ "10–40% above national" modifier where the fact pack gives it. Every $ carries its source.
- **Position 3 — decision.** H1: **"How Do You Choose a {Service} Contractor?"**
  `directAnswer` = the **verifiable selection criteria** (NOT certifications): active **NJ HIC
  registration** (N.J.S.A. 56:8-136; 13VH number on contract/ad per 56:8-144 — a registration, NOT
  a license), **$500,000/occurrence CGL** verified by a Certificate of Insurance from the carrier
  (N.J.S.A. 56:8-142), a **written contract over $500** (N.J.A.C. 13:45A-16.2), an **itemized written
  estimate**, **local references / established Essex County presence**, and a **thorough documented
  assessment**. This is the article position where the HAAG / Master-Elite fabs live — kill them
  and use these criteria. Your fact pack `selectionCriteria[]` is the authoritative list.

---

## 5. THE 30 ARTICLES (articleId → H1 → fact pack → #1 watch item)

| # | articleId | H1 (fixed) | fact pack | top watch |
|---|---|---|---|---|
| 1 | roof-repair-signs | What Are the Signs You Need Roof Repair? | roof-repair | kill invented climate/UV stats; per-repair only |
| 2 | roof-repair-cost-guide | How Much Does Roof Repair Cost in NJ? | roof-repair | kill $250–$7,000 tiers → $200–$1,000+ per-repair; no total |
| 3 | roof-repair-decision | How Do You Choose a Roof Repair Contractor? | roof-repair | kill Master-Elite + "$2M GL" + wrong statute 56:8-1 |
| 4 | roof-replacement-signs | What Are the Signs You Need Roof Replacement? | roof-replacement | InterNACHI lifespans (3-tab 20 / arch 30); kill 15–25% energy stat |
| 5 | roof-replacement-cost-guide | How Much Does Roof Replacement Cost in NJ? | roof-replacement | **whole-job total ALLOWED** $10k–$25k; kill decking 20–40% + per-job invents |
| 6 | roof-replacement-decision | How Do You Choose a Roof Replacement Contractor? | roof-replacement | kill GAF Master Elite/Golden Pledge/"~2%"/"certified team" |
| 7 | emergency-roof-repair-signs | What Are the Signs You Need Emergency Roof Repair? | emergency-roof-repair | EPA 24–48h window (not 72h mold); kill local geo invents |
| 8 | emergency-roof-repair-cost-guide | How Much Does Emergency Roof Repair Cost in NJ? | emergency-roof-repair | per-repair + 25–50% premium; kill tarping $ invents |
| 9 | emergency-roof-repair-decision | How Do You Choose a Emergency Roof Repair Contractor? | emergency-roof-repair | **no 24/7**; registered not licensed; stabilization-first |
| 10 | roof-inspection-signs | What Are the Signs You Need Roof Inspection? | roof-inspection | NOAA 58 mph/¾" (not 50 mph/any hail); kill 1-yr claim window |
| 11 | roof-inspection-cost-guide | How Much Does Roof Inspection Cost in NJ? | roof-inspection | HomeAdvisor $75–$200/$150–$400/$400–$600; NQR free inspection (not "$150") |
| 12 | roof-inspection-decision | How Do You Choose a Roof Inspection Contractor? | roof-inspection | **kill HAAG + GAF/CertainTeed/OC cert criteria** |
| 13 | roof-maintenance-programs-signs | What Are the Signs You Need Roof Maintenance Programs? | roof-maintenance-programs | NRCA cadence; kill 10-yr threshold + insurer-behavior claims |
| 14 | roof-maintenance-programs-cost-guide | How Much Does Roof Maintenance Programs Cost in NJ? | roof-maintenance-programs | **kill $3k–$10k savings + 3–5yr payback**; Firestone/ProLogis $0.14 vs $0.25/sf/yr |
| 15 | roof-maintenance-programs-decision | How Do You Choose a Roof Maintenance Programs Contractor? | roof-maintenance-programs | verifiable criteria; kill 24/7/priority + "hundreds of homeowners" |
| 16 | roof-leak-repair-signs | What Are the Signs You Need Roof Leak Repair? | roof-leak-repair | kill 48–72h mold + "15 feet" invents; water travels "feet" |
| 17 | roof-leak-repair-cost-guide | How Much Does Roof Leak Repair Cost in NJ? | roof-leak-repair | $150–$1,000+ per-source; kill $4,000/6-month delay math |
| 18 | roof-leak-repair-decision | How Do You Choose a Roof Leak Repair Contractor? | roof-leak-repair | **kill "5-year warranty" self-claim**; add NJ legal criteria |
| 19 | storm-damage-roof-repair-signs | What Are the Signs You Need Storm Damage Roof Repair? | storm-damage-roof-repair | IBHS/AMS thresholds; assess from ground/attic (OSHA); registered not licensed |
| 20 | storm-damage-roof-repair-cost-guide | How Much Does Storm Damage Roof Repair Cost in NJ? | storm-damage-roof-repair | **kill HAAG**; $400–$2,000 most / hail $3k–$12k (Angi); no deductible invents |
| 21 | storm-damage-roof-repair-decision | How Do You Choose a Storm Damage Roof Repair Contractor? | storm-damage-roof-repair | verifiable criteria + anti-fraud (no AOB/deductible-waiver) |
| 22 | hail-damage-roof-repair-signs | What Are the Signs You Need Hail Damage Roof Repair? | hail-damage-roof-repair | functional signs (IBHS/AMS); kill 1-yr/18-mo claim window + city embellishment |
| 23 | hail-damage-roof-repair-cost-guide | How Much Does Hail Damage Roof Repair Cost in NJ? | hail-damage-roof-repair | **honest tiers** $500–$1,500/$1,500–$3,500; $4k–$12k = partial replacement |
| 24 | hail-damage-roof-repair-decision | How Do You Choose a Hail Damage Roof Repair Contractor? | hail-damage-roof-repair | **kill HAAG "gold standard"** → documentation rigor; NQR ≠ public adjuster |
| 25 | wind-damage-roof-repair-signs | What Are the Signs You Need Wind Damage Roof Repair? | wind-damage-roof-repair | ASCE 7 not IIBEC-RICOWI; IBHS seal strength; kill 60 mph branch threshold |
| 26 | wind-damage-roof-repair-cost-guide | How Much Does Wind Damage Roof Repair Cost in NJ? | wind-damage-roof-repair | $150–$2,000+ per-repair; kill $3,500–$10,000 tier + deductible invents |
| 27 | wind-damage-roof-repair-decision | How Do You Choose a Wind Damage Roof Repair Contractor? | wind-damage-roof-repair | kill 110 mph "code" + "insurer relationships" + 24/7; 3-tab 60/arch 130 (ARMA) |
| 28 | roof-cleaning-moss-removal-signs | What Are the Signs You Need Roof Cleaning & Moss Removal? | roof-cleaning-moss-removal | ARMA growth facts; shade/debris root cause (not ventilation); kill rhizine invent |
| 29 | roof-cleaning-moss-removal-cost-guide | How Much Does Roof Cleaning & Moss Removal Cost in NJ? | roof-cleaning-moss-removal | This Old House $300–$1,050 ($0.20–$0.70/sf); kill strip-on-existing-roof advice |
| 30 | roof-cleaning-moss-removal-decision | How Do You Choose a Roof Cleaning & Moss Removal Contractor? | roof-cleaning-moss-removal | ARMA low-pressure method (no PSI invent); kill NJDEP-compliance + cedar/slate recipes |

(H1 grammar quirks "a Emergency" / "a Roof Maintenance Programs" are auto-generated and gated PASS —
answer the question as written; do not try to fix the H1.)

---

## 6. SELF-CHECK BEFORE WRITING YOUR FILE

- directAnswer bold span ≤40w, topic-definitional, answers the exact H1.
- every section body[0] first sentence ≤40w.
- 2–4 sections, each heading question-form, each body 1–4 paragraphs leading with a bold topic.
- every $/%/lifespan/threshold has a named source from your fact pack.
- 0 modality in body; 0 "licensed"; 0 "24/7"; 0 HAAG/Master-Elite/cert self-claim; 0 invented volume.
- 0 brand-system roster; 0 "(gold)" tags; 0 `**` in meta/heading/ctaHeading.
- metaDescription ≤158 chars.
- NQR only in ctaText, as "registered New Jersey Home Improvement Contractor", insured.

Write `authored/<articleId>.json` — a single JSON object with keys: `articleId`, `directAnswer`,
`intro`, `sections` (array of {heading, body[]}), `conclusion`, `ctaHeading`, `ctaText`,
`metaDescription`. (Do NOT include parentId/parentType/position — assemble.mjs adds those.)
