# Service-Page Content Blueprint — Roof Repair (`slug: roof-repair`)

> Answer-first content blueprint for the MAIN money page `/roof-repair`. Obeys `NQR-SEMANTIC-CONTENT-RULESET.md` verbatim. Every fact traces to `.planning/content-system/research/facts-*.md` or `sources-and-nqr-facts.md`. NQR business facts use `[IN-REPO]` as-is; `[VERIFY]` facts are kept flagged inline and never rendered as a hard number until the owner confirms (D-01).
>
> **Companion sample:** `.planning/content-system/SAMPLE-roof-repair.md` (hero answer + first 2 sections in publishable prose).
> **Heading ownership:** every H1/H2 string is byte-for-byte from `src/data/heading-config.ts` `HEADING_CONFIG.service` — the blueprint NEVER paraphrases a heading. Component-owned literal headings (process / audience / faq / comparisons) are noted as such.

---

## 1. Page macro context (the single context vector, H1 → final heading)

- **Macro topic (one, end-to-end):** Roof repair by a roofing contractor in Newark / Essex County, NJ. Every heading descends from this topic; no section introduces an unrelated macro topic (Rule 19).
- **Central entity:** Newark Quality Roofing (a roofing contractor / NJ Home Improvement Contractor) [IN-REPO].
- **Central intent:** hire a local roofer to repair a roof — leaks, missing/cracked shingles, flashing, storm and structural damage — across Essex County (conversion = free estimate / call / inspection).
- **Primary n-gram:** "roof repair" / "roof repair in Newark" — appears in the H1 answer and in the closing Schedule section (Rule 20).
- **Context order (Rule 20):** definition/what-we-provide → signs → process → audience (residential/commercial) → cost → repair-vs-replace → trust → reviews → related services → KB articles → FAQs → schedule.
- **MAIN vs SUPPLEMENTARY (Rule 22):** the page carries the conversion-relevant SUMMARY of each subtopic. Exhaustive depth (full cause taxonomy, per-material deep dives, code text) is delegated to linked KB articles so the money page stays focused and does not self-cannibalize.

---

## 2. H1 question + definitive answer

- **H1 (heading-config `service.h1`, single `<h1>`):** **"Who Provides Roof Repair in Newark?"**
- **One-sentence definitive answer (≤40 words, bolded answer span, sentence 1 of the hero):**
  > **Newark Quality Roofing provides roof repair across Newark and Essex County, fixing roof leaks, missing and cracked shingles, flashing failures, and storm damage** as a New Jersey Home Improvement Contractor. [IN-REPO: brand, NJ HIC license type, Essex County service area]
- Answer mirrors the question form "Who provides X?" → "Newark Quality Roofing provides X" (Rule 4). No modality, no hype, exact entities, no pronoun co-reference (Rules 5,6,13,14).

---

## 3. Ordered section list

Render order follows `ServiceTemplate.tsx` (map-template.md §1). Each section below gives: **heading** (source), **≤40-word definitive answer** (first sentence), **expansion outline** (entities/numbers/evidence/named source), **component format**, and **MAIN vs SUPP**.

> Legend — Component formats: `DEF` = Definition · `FS` = Featured-Snippet Answer · `LIST` = Listing+items+outro · `TABLE` = Table+definition+outro · `D:E` = Declaration:Evidence list item · `CMP` = Comparison Proposition · `STAT` = Statistical Evidence · `PAA` = single-sentence PAA answer.

---

### S0 — HERO (above the fold)
- **Heading:** H1 "Who Provides Roof Repair in Newark?" (heading-config `service.h1`).
- **Answer (≤40w):** see §2.
- **Expansion:** 1 short follow-on declaration naming the 6 sub-services + Essex County. 3 benefit bullets (`ServiceHero` derives 3 strings) stay factual ("Free roof inspections", "Licensed & Insured", "Local Essex County roofers" — the only D-01-cleared trust badges [IN-REPO]). No hype, no `[VERIFY]` number.
- **Format:** FS (hero answer) + DEF (sub-service enumeration with count "6").
- **CTA:** `#lead-form` (`LeadForm variant="hero"`) sits in hero right column, above the fold (Rule 24). Branded CTA copy ("Schedule Your Free Inspection") lives in the form component, OUTSIDE the context vector.
- **MAIN.**

### S1 — CORE money section
- **Heading:** **"What Roof Repair Do We Provide?"** (heading-config `service.coreH2`). First H2 after hero (PLAN §17, map-template §5).
- **Answer (≤40w):** **"Newark Quality Roofing repairs 6 roof problems: roof leaks, missing and cracked shingles, flashing failures, pipe-boot leaks, chimney, skylight and valley leaks, and storm damage** — for residential and commercial properties across Essex County." (count "6" qualifies the plural, Rule 8)
- **Expansion:** counted `LIST` of the 6 sub-services, each a `D:E` item with a quantified anchor + entity-bearing internal link:
  - **Roof leak repair** — ~90–95% of roof leaks originate at flashing details, only ~5–10% at field shingles (industry estimate attributed to the NRCA, secondary — frame as estimate) [facts-causes-signs §2.1]. Links to KB **"What Causes Roof Leaks?"**.
  - **Missing and cracked shingle repair** — wind blow-off and impact expose underlayment and deck [facts-causes-signs §4].
  - **Flashing repair** — flashing seals roof transitions and penetrations; sealant typically fails in 5–10 years [facts-causes-signs §2.1]. Links to KB **"What Is Roof Flashing?"** / **"What Is Step Flashing?"**.
  - **Pipe-boot repair** — a quality pipe boot lasts ~10–15 years, or 2–5 years if installed with exposed nails [facts-causes-signs §2.1]. Links to KB **"What Is a Pipe Boot?"**.
  - **Chimney, skylight, and valley leak repair** — valley repair often requires shingle removal and reinstallation, $400–$1,000+ [facts-cost-stats §2]. Links to KB **"What Is a Roof Valley?"** / **"What Is Ice & Water Shield?"**.
  - **Emergency / storm-damage roof repair** — wind and hail are the largest homeowners-claim type at ~2.8% of insured homes per year, 1 in 36 (Triple-I, 2019–2023) [facts-cost-stats §8]. Links to sibling **Emergency Roof Repair** + **Storm Damage Roof Repair**.
- **Format:** FS + counted `LIST` of 6 `D:E` items + list outro restating count.
- **MAIN.** (Component: `ServiceOverview`; data field `overview[]` + a NEW `coreServices[]`/`subServices[]` — see §7.)

### S2 — WARNING SIGNS
- **Heading:** **"How Do You Know If You Need Roof Repair?"** (heading-config `service.h2s[1]`).
- **Answer (≤40w):** **"6 warning signs indicate a roof needs repair: ceiling or wall stains, missing or cracked shingles, granule loss in gutters, lifted or rusted flashing, daylight through the roof deck, and a sagging roofline."** (count "6", Rule 8)
- **Expansion:** counted `LIST`, each item `D:E` with the indication + source:
  - Brown or yellow ceiling and wall stains that darken after rain indicate an active roof leak (GAF; This Old House) [facts-causes-signs §3].
  - Missing, cracked, or torn shingles expose the underlayment and deck to weather (GAF) [§4].
  - Granule loss with sandy grit in gutters indicates shingles nearing end of life; loss exceeding ~30% of the surface is the common rule-of-thumb for beyond repair (GAF) [§2.5, §4].
  - Rusted, lifted, or bent flashing at chimneys, walls, skylights, and valleys is the leading leak source (This Old House) [§4, §2.1].
  - Daylight through the roof deck from inside the attic indicates holes in decking and shingles (This Old House) [§3].
  - A sagging ceiling or roofline indicates sheathing decay from prolonged moisture — a structural priority (GAF) [§3].
- **Format:** FS + counted `LIST` (6 × `D:E`) + outro. SUPP depth (interior-vs-condensation distinction, full sign taxonomy) delegated to KB.
- **MAIN summary** (depth → KB "What Causes Roof Leaks?"). (Component: `ServiceSigns`; data field `signs[]`, currently 4 — enrich to 6.)

### S3 — INLINE CTA
- **Component:** `ServiceInlineCta serviceName="Roof Repair"`. Branded, between Signs and Approach. CTA copy stays out of the context vector (Rule 24). No heading question — it is a CTA component, not semantic prose.

### S4 — APPROACH / PROCESS QUALITY
- **Heading:** **"How Do Our Roofing Contractors Perform Roof Repair?"** (heading-config `service.h2s[2]`).
- **Answer (≤40w):** **"Newark Quality Roofing contractors perform roof repair by tracing the moisture path from ridge to eave, diagnosing the root cause, then repairing the failed component** — flashing, shingles, underlayment, or pipe boot — with a written workmanship warranty."
- **Expansion:** 2 `approachSubheadings` retained as question-form sub-points. Diagnostics: water enters at one detail and travels before showing as a stain, so diagnosis traces the root cause, not the drip point (Integrity Home Exteriors process) [facts-process-standards §1]. Materials: flashing fabricated from corrosion-resistant stock; color and product line matched to existing. Workmanship warranty stated qualitatively — NQR's exact term is **[VERIFY]**, so NO specific year renders [sources Part B; facts-process-standards §3].
- **Format:** FS + 2 `DEF`-style sub-blocks (Diagnostics, Materials). SUPP: full 9-step inspection→warranty workflow → KB process article.
- **MAIN.** (Component: `ServiceApproach`; data `approachContent[]` + `approachSubheadings[]`.)

### S5 — RESIDENTIAL
- **Heading:** **"What Residential Roof Repair Do We Provide?"** (inline template literal in `ServiceTemplate`, not heading-config — map-prose-schema §per-component).
- **Answer (≤40w):** **"Newark Quality Roofing repairs residential roofs across Essex County, fixing leaks, missing and cracked shingles, and storm damage** on detached one- and two-family homes, with insurance-claim documentation."
- **Expansion:** detached 1–2 family re-roof/repair of roof covering is ordinary maintenance under N.J.A.C. 5:23-2.7 and requires NO construction permit (NJ DCA / NJ Uniform Construction Code) [facts-nj-regulatory-climate §1.1]. Storm documentation: timestamped photographs + scope of work for adjusters. Cite Triple-I claim frequency for context.
- **Format:** FS + 2 paragraphs + `#lead-form` CTA `<a>` (ctaLabel "Get Home Estimate" [IN-REPO]).
- **MAIN.** (Component: `ServiceAudience` residential; data `residential.content[]`.)

### S6 — COMMERCIAL
- **Heading:** **"What Commercial Roof Repair Do We Provide?"** (inline template literal; order flips only for `COMMERCIAL_FIRST_IDS` — roof-repair is residential-first).
- **Answer (≤40w):** **"Newark Quality Roofing repairs commercial low-slope roofs across Essex County, servicing EPDM rubber, TPO, and modified-bitumen membranes** with manufacturer-approved bonding to keep system warranties intact."
- **Expansion:** EPDM lasts 15–25 years, TPO 7–20 years, modified bitumen ~20 years (InterNACHI life-expectancy chart) [facts-materials-economics §0,§4]. EPDM fails most often at seams; TPO at welded seams [§4]. Ponding water remaining >48 hours is a defect; a flat roof needs ≥¼ in/ft slope to drain (NRCA; ARMA) [facts-causes-signs §2.7]. On commercial buildings, repairing more than 25% of total roof area in 12 months requires a permit (N.J.A.C. 5:23-2.7) [facts-nj §1.2]. **Brand certifications (Firestone/Carlisle/Johns Manville) are [VERIFY]** — state "installs/services these membrane systems", NOT "certified", until confirmed.
- **Format:** FS + 2 paragraphs + `TABLE` (membrane life expectancy) wrapped in definition + outro + CTA (ctaLabel "Get Commercial Quote" [IN-REPO]).
- **MAIN.** (Component: `ServiceAudience` commercial; data `commercial.content[]`.)

### S7 — PROCESS STEPS
- **Heading:** **"What Are the Steps in Our Roof Repair Process?"** (inline template literal in `ServiceTemplate`).
- **Answer (≤40w):** **"Newark Quality Roofing repairs a roof in 5 steps: inspection and diagnosis, written estimate, stabilization of active leaks, repair execution to manufacturer specification, then quality verification** with cleanup and a written workmanship warranty." (count "5", Rule 8)
- **Expansion:** numbered `<ol>` of 5 steps, each `{title, description}` mapping to the industry-standard sequence inspection → diagnosis → documentation → stabilization → repair → verification → cleanup → warranty (Integrity Home Exteriors; North Coast Roofing) [facts-process-standards §1]. Magnet-sweep for nails at cleanup. NRCA recommends inspection 2×/year (spring + fall) plus after any major storm [facts-process-standards §2].
- **Format:** FS + numbered `LIST` (5 steps). Currently 4 steps in data → enrich to 5 (add explicit stabilization step). SUPP: full 9-step workflow → KB process article.
- **MAIN.** (Component: `ServiceProcess`; data `processSteps[]`.)

### S8 — CONTENT AUTHORITY BLOCK
- **Component:** `ContentAuthorityBlock` (moved OUT of Core band per D-06/HTAG-07; deletion deferred to Phase 16 — map-template §1f). No new prose authored here; treat as legacy until Phase 16.

### S9 — COST
- **Heading:** **"How Much Does Roof Repair Cost?"** (heading-config `service.h2s[3]`).
- **Answer (≤40w):** **"Roof repair in Essex County costs $350–$1,500 for most projects; roof-leak repair in New Jersey runs $400–$1,000, roughly 10–15% above the national average."** (mirrors "How much does X cost?" → "X costs…", Rule 4)
- **Expansion:** `TABLE` (definition + rows + outro) of NJ repair ranges by type:
  | Repair type | NJ cost range | vs. national |
  |---|---|---|
  | Roof-leak repair | $400–$1,000 | +10–15% |
  | Flashing reseal / small section | $200–$500 | — |
  | Valley repair (with shingle R&R) | $400–$1,000+ | — |
  | Most Essex County projects | $350–$1,500 | — |
  - Sources: HomeAdvisor NJ page (NJ leak $400–$1,000) [facts-materials-economics §7]; Modernize (flashing $200–$500) [facts-cost-stats §2]; valley $400–$1,000+ [§2]; NQR range $350–$1,500 [IN-REPO content-constants `PRICING`, **[VERIFY] reflects current NQR pricing**]. Outro: NJ ranges sit ~10–40% above national because of higher labor and stricter NJ code [§7]. Emergency/after-hours repairs cost 25–50% more (Integrity Home Exteriors) [facts-cost-stats §1].
- **Format:** FS + `PAA` (NJ leak $400–$1,000) + `TABLE` (definition + outro). Conditional render: populate `pricing` field (currently absent) to surface this as structured data instead of FAQ prose.
- **MAIN.** (Component: `ServicePricing`; data `pricing.range`/`factors[]`/`financingNote?` — NEW population, no schema change.)

### S10 — REPAIR vs REPLACE (comparison)
- **Heading:** **"Should You Repair or Replace Your Roof?"** (heading-config `service.h2s[4]`).
- **Answer (≤40w):** **"Repair a roof when damage stays localized and covers under 25% of the roof area; replace the roof when one repair exceeds 50% of replacement cost, or when damage exceeds 25–30% of the area."** (Comparison with decision threshold, Rule 4 + §2 CMP)
- **Expansion:** `CMP` props: the "25% rule" (damage >25–30% of area → replace) and the "50% rule" (one repair >50% of replacement cost → replace), both contractor consensus [facts-materials-economics §8; facts-cost-stats §5]. Repair favored when an asphalt roof is under 10–15 years old and damage is localized [§5]. Localized repair can cost 5–10× less than full replacement (Home Depot / Kelly Roofing) [§5]. 3-tab asphalt lasts ~15–20 years, architectural ~25–30 years (NRCA/ARMA) [facts-causes-signs §1]. Asphalt roof replacement recoups ~59–61% at resale (Remodeling/Zonda Cost vs Value 2023–2024) [facts-cost-stats §6].
- **Format:** FS + 2 `CMP` propositions + supporting `STAT` rows. SUPP: full repair-vs-replace economics → comparison page **"Roof Repair vs Replacement"**.
- **MAIN summary** (depth → comparison page). (Component: lives inside Approach/Pricing prose or a `whyChooseUs`-adjacent block; primarily prose + links to `ServiceRelatedComparisons`.)

### S11 — WHY CHOOSE / TRUST
- **Heading:** **"Why Choose Our Roofing Company for Roof Repair?"** (heading-config `service.h2s[5]`).
- **Answer (≤40w):** **"Newark Quality Roofing repairs roofs as a licensed New Jersey Home Improvement Contractor, insured and offering free roof inspections** to homeowners and businesses across Essex County."
- **Expansion:** reasons block built ONLY from D-01-cleared facts: NJ HIC Licensed; Insured; Free Roof Inspections; Local Essex County Roofers (the cleared `trustBadges`) [IN-REPO `site-config.ts`]. Hours: Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM [IN-REPO]. **OMIT (D-01): "15+ years", "GAF Certified", "A+ BBB", "500+ projects", "5-star", aggregate rating, license number — all [VERIFY]/unverified marketing literals.** State trust qualitatively where a number is unverified; never placeholder.
- **Format:** FS + `LIST` of cleared `D:E` reasons. CTA trust phrasing ("trusted", "best") stays banned in this semantic block (Rule 14) — only the CTA component may carry brand sentiment.
- **MAIN.** (Component: `ServiceWhyChooseUs`; data `whyChooseUs.heading`/`reasons[]` — NEW population, no schema change. Conditional render.)

### S12 — SERVICE AREAS
- **Heading:** **"Where Can You Get Roof Repair in Essex County?"** (`ServiceAreasGrid` heading literal — map-template §1.7).
- **Answer (≤40w):** **"Newark Quality Roofing provides roof repair in Newark, East Orange, Bloomfield, Montclair, Belleville, and Irvington** across Essex County, New Jersey." (6 named cities [IN-REPO `local-proof.ts`])
- **Expansion:** grid of Tier-A KEEP city combos (roof-repair is Tier-A → all 21 cities KEEP-INDEX) [map-topical-intent §1.3, §3]. Each city is an entity-bearing internal link to the service+city combo page.
- **Format:** grid; anchor text = city name matching combo page title (Rule 23).
- **MAIN.** (Component: `ServiceAreasGrid`; data-driven from cities.)

### S13 — RELATED SERVICES
- **Heading:** **"What Related Roofing Services Should You Consider?"** (heading-config `service.h2s[6]`).
- **Answer (≤40w):** **"4 related roofing services support roof repair: Emergency Roof Repair, Roof Inspection, Storm Damage Roof Repair, and Roof Replacement."** (count "4" matches `RelatedServices` max-4, Rule 8)
- **Expansion:** templatic siblings (same-category services). Each is an entity-bearing `next/link` whose anchor matches the target page title (Rule 23) [map-topical-intent §2].
- **Format:** card grid; entity anchors only ("Emergency Roof Repair", not "Learn more").
- **MAIN.** (Component: `RelatedServices`; data-driven, same-category, exclude current, max 4.)

### S14 — RELATED COMPARISONS
- **Heading:** **"How Do Your Roofing Options Compare?"** (inline literal in `ServiceTemplate`, NOT heading-config — map-prose-schema §per-component).
- **Answer (≤40w):** **"3 comparisons frame the roof repair decision: Roof Repair vs Replacement, Patching vs Full Roof Repair, and DIY vs Professional Roof Repair."** (count "3", Rule 8)
- **Expansion:** comparison cards linking to comparison pages [map-topical-intent §2]. Anchor text matches comparison page titles.
- **Format:** 2-col `<Link>` cards (renders null if comparisons empty).
- **SUPPLEMENTARY links** (depth lives on comparison pages). (Component: `ServiceRelatedComparisons`.)

### S15 — RELATED KB ARTICLES (reverse-silo)
- **Heading:** **"What Knowledge Base Articles Explain This Service?"** (heading-config `service.h2s[7]`).
- **Answer (≤40w):** **"6 knowledge-base articles explain roof repair: What Causes Roof Leaks, What Is Roof Flashing, What Is Step Flashing, What Is a Pipe Boot, What Is a Roof Valley, and What Is Ice & Water Shield."** (count "6", Rule 8)
- **Expansion:** entity-bearing links DOWN into the 5–6 supporting KB articles + glossary terms [map-topical-intent §2, §3]. **Design around the `getMoneyPageArticle` defect (returns only group[0]) — surface ALL siblings, not just position-1** [map-topical-intent §2].
- **Format:** `LIST` of `next/link` cards to `/roofing-knowledge-base/{cluster}/{slug}/`; anchor = article `<title>` substring (Rule 23).
- **SUPPLEMENTARY** (the depth-carrying layer; return-links required from each article). (Component: `ServiceLearnMore`; conditional on `getMoneyPageArticle`.)

### S16 — FAQ
- **Heading:** **"What Questions Do Customers Ask About Roof Repair?"** (inline template literal in `ServiceTemplate`).
- **Answer per FAQ (≤40w each, `PAA` form):** keep 5 existing + tighten to answer-first. Mine from facts:
  - "How fast can you respond in Newark or Essex County?" → response stated qualitatively; **same-day/24-hr/callback are [VERIFY]** marketing literals → state operationally-confirmed text only, no unverified hour figure.
  - "Should you repair or replace?" → repair when localized and under 25% of area; replace when damage exceeds 25–30% or one repair exceeds 50% of replacement cost [facts §5/§8].
  - "How much does roof repair cost in Essex County?" → $350–$1,500 most projects [IN-REPO, **[VERIFY]**]; NJ leak repair $400–$1,000 (+10–15%) [§7].
  - "What is the 25% rule?" → damage over 25–30% of the roof area → replacement is more economical (contractor consensus) [§8].
  - "What time of year is cheapest in New Jersey?" → late fall and early spring; NRCA inspection cadence 2×/year [facts-process-standards §2].
- **Format:** `<details>/<summary>` accordion; each answer answer-first `PAA`. **Feeds FAQPage JSON-LD** (map-prose-schema §schema).
- **MAIN.** (Component: `ServiceFaq`; data `faqs[]`, currently 5.)

### S17 — TESTIMONIALS
- **Heading:** **"What Do Customers Say About Our Roof Repair?"** (`CompactTestimonial` heading, `filterBy={type:'service'}` — map-template §1m).
- **Answer:** no authored answer sentence — renders existing 6 named testimonials (Newark, Montclair, Bloomfield, East Orange, Belleville, Irvington) [IN-REPO `testimonials.ts`]. **[VERIFY] these are real attributable reviews before any aggregate rating is implied** (aggregate rating stays DISABLED, D-01).
- **Format:** testimonial cards. **MAIN** (proof). (Component: `CompactTestimonial`; data-driven.)

### S18 — SCHEDULE CTA (closing, repeats key n-gram)
- **Heading:** **"How Can You Schedule Roof Repair?"** (heading-config `service.h2s[8]`).
- **Answer (≤40w):** **"Schedule roof repair with Newark Quality Roofing by requesting a free roof inspection online or by phone** — service runs Monday–Friday 7:00 AM–6:00 PM and Saturday 8:00 AM–2:00 PM across Essex County." (closing n-gram "roof repair" + hours [IN-REPO], Rule 20)
- **Format:** `ServiceCtaBanner` — branded CTA. Form/CTA copy stays out of the context vector; the answer sentence is semantic prose, the button copy is not (Rule 24).
- **MAIN.** (Component: `ServiceCtaBanner`; `heading={scheduleH2}`.)

---

## 4. Internal-link plan (Rule 23 — anchor text = substring of target title; `next/link`; entity-bearing only)

| Axis | Targets | Anchor text (entity-bearing) | Placed in section |
|---|---|---|---|
| **KB DOWN (problems/components)** | `/roofing-knowledge-base/roof-problems/what-causes-roof-leaks/` · `/roof-components/what-is-roof-flashing/` · `/what-is-step-flashing/` · `/what-is-a-pipe-boot/` · `/what-is-a-roof-valley/` · `/what-is-ice-and-water-shield/` | "What Causes Roof Leaks" · "roof flashing" · "step flashing" · "pipe boot" · "roof valley" · "ice & water shield" | S1 (inline), S2, S15 |
| **Glossary DOWN** | each `DefinedTerm` (flashing, step flashing, pipe boot, valley, underlayment, ice-and-water shield, drip edge) | the term itself | S1, S2, S4 inline |
| **Sibling services ACROSS** | Emergency Roof Repair · Roof Inspection · Storm Damage Roof Repair · Roof Replacement · Free Roof Inspection | "Emergency Roof Repair" · "Roof Inspection" · "Storm Damage Roof Repair" · "Roof Replacement" | S1 (storm/emergency), S13 |
| **Comparisons ACROSS (antonyms/siblings)** | Roof Repair vs Replacement · Patching vs Full Roof Repair · DIY vs Professional Roof Repair | full comparison title | S10, S14 |
| **Service+City combos DOWN** | all 21 Tier-A KEEP combos (`/roof-repair-in-{city}-nj` or combo route) | city name | S12 |
| **Hub UP (breadcrumb)** | `/roofing-services` (migrated from `/services`) | "Roofing Services" | Breadcrumbs |

**Return leg (must exist):** each KB article links BACK to `/roof-repair` (+ a second commercial page where the entity is used, e.g. step-flashing → `/chimney-flashing-repair`) and to its cluster hub crumb [map-topical-intent §2]. Repoint ALL `/services|/locations|/resources` links to migrated hubs (`/roofing-services|/service-areas|/roofing-knowledge-base`); zero links to old hubs (PLAN §11).

---

## 5. Schema plan (map-prose-schema §schema; emitted once in `ServiceTemplate` via `buildJsonLdGraph`)

| Schema | Source | Notes |
|---|---|---|
| `Organization` + `RoofingContractor` | `site-config` | site-wide; provider `@id` → LocalBusiness; areaServed → Essex County Place |
| `WebSite` | `site-config` | site-wide |
| **`Service`** | `buildServiceSchema({name, slug, shortDescription})` | description = `service.shortDescription` from `services.ts`; provider → RoofingContractor `@id`; areaServed → Essex County |
| `WebPage` | url + `metaTitle` | |
| `BreadcrumbList` | [Home, Roofing Services, Roof Repair] | middle crumb = migrated `/roofing-services` |
| **`FAQPage`** | `buildFaqSchema(content.faqs)` | mainEntity from S16 FAQs; `stripMarkdown` strips `**`/`*` — the ONLY schema fed by per-service prose |
| `AggregateRating` | **OMITTED** | gated off (`rating.enabled=false`, D-01) — no fabricated 5.0; key omitted entirely |

**D-01 schema guard:** no `[VERIFY]` value (license number, founding year, rating, GAF cert) renders in JSON-LD. If unknown, the key is omitted, never placeholdered.

---

## 6. CTA / lead-form placement (Rule 24 — branded, above fold, OUT of context vector)

| CTA | Component | Location | In context vector? |
|---|---|---|---|
| Primary lead form | `LeadForm variant="hero"` under `#lead-form` | Hero right column, **above the fold** | NO (form copy isolated) |
| Sticky lead form | `LeadForm variant="standard"` in `StickyFormSidebar` | Right column of main grid | NO |
| Inline CTA | `ServiceInlineCta` | Between Signs (S2) and Approach (S4) | NO |
| Floating CTA | `FloatingCtaButton` | Persistent, top-level | NO |
| Audience CTAs | `#lead-form` `<a>` ("Get Home Estimate"/"Get Commercial Quote") | End of S5 / S6 | NO (button labels are CTA copy) |
| Closing banner | `ServiceCtaBanner` | Final section S18 | Heading IS semantic; button copy is NOT |

All CTA trust phrasing ("Schedule Your Free Inspection", "trusted") lives in CTA components ONLY; banned from semantic headings/answers/lists/tables (Rules 14, 24).

---

## 7. Data-driven vs component-prose map (map-data-model.md + map-prose-schema.md)

### Rewrite the DATA (`src/data/service-content/repair-maintenance.ts` — auto-updates FAQPage + Service-description schema)
| Section | Field | Action |
|---|---|---|
| S1 Core | `overview[]` + **NEW `subServices[]`/`coreServices[]`** | rewrite overview answer-first; ADD a structured 6-item sub-service field (no slot exists today — add to `ServiceContentSchema`) |
| Hero | **NEW `directAnswer`/`tldr`** | no answer-first field exists on EITHER schema — ADD to `ServiceContentSchema` for the ≤40-word hero answer |
| S2 Signs | `signs[]` | rewrite answer-first; enrich 4 → 6 items |
| S4 Approach | `approachContent[]` + `approachSubheadings[]` | rewrite answer-first |
| S5/S6 Audience | `residential.content[]` / `commercial.content[]` + `ctaLabel` | rewrite answer-first (residential: NJ permit fact; commercial: membrane table) |
| S7 Process | `processSteps[]` | rewrite; enrich 4 → 5 (add stabilization step) |
| S9 Cost | **`pricing{range,factors[],financingNote?}`** | POPULATE (currently ABSENT) — surfaces $350–$1,500 [VERIFY] as structured data; zero schema change |
| S11 Trust | **`whyChooseUs{heading,reasons[]}`** | POPULATE (currently ABSENT) from D-01-cleared trust badges only; zero schema change |
| S11 Trust | `credentialsHighlight[]` | EDIT — strip "GAF Certified" + "15+ Years" ([VERIFY]); keep "NJ HIC Licensed", "Insured" |
| S16 FAQ | `faqs[]` | rewrite answer-first; keep 5 |

### Rewrite the COMPONENT / TEMPLATE
| Target | File | Action |
|---|---|---|
| All H2 headings | `src/data/heading-config.ts` + inline literals in `ServiceTemplate.tsx` | already question-form & canonical — DO NOT paraphrase; reuse verbatim |
| `"500+ projects completed in Essex County"` stat callout | `ServiceOverview` (hardcoded) + `content-constants.ts` | **REMOVE** — fabricated, D-01 stripped [VERIFY] |
| `CREDENTIALS.experience/certification/insurance` line | `ServiceOverview` + `content-constants.ts` | **REMOVE/rewrite** — "15+ years", "GAF Certified" are [VERIFY] |
| `"Typical Price Range"` / `"Cost Factors:"` labels | `ServicePricing` | keep (UI labels, not semantic claims) |
| `getMoneyPageArticle` group[0] defect | `src/linking/*` | surface ALL KB siblings in S15, not just position-1 |
| `generatePlaceholderContent()` fallback prose | `ServiceTemplate.tsx` | rewrite fallback to answer-first + banned-word-clean |

### Dead fields (ignored at render — do not waste rewrite effort)
`signsHeading`, `approachHeading`, `whyChooseUs.heading`, `pricing`-headings inside `ServiceContent` — headings are template-controlled (map-prose-schema §10).

---

## 8. Compliance guardrails (run before publish — ruleset Quick-audit)
1. Every heading ends in `?` and is grammatical (Rules 1,26) — all from heading-config, already compliant.
2. First sentence under each heading ≤40 words, answer bolded (Rules 2,3,4).
3. Grep `will|should|need to|have to|must|might|may|would|could` → zero in body prose (Rule 6).
4. Every info point carries a verified figure or named authority (Rules 7,9,10); flashing % framed as "industry estimate attributed to the NRCA" (secondary), never primary.
5. Counts qualify every plural (Rule 8): 6 sub-services, 6 signs, 5 steps, 4 related, 3 comparisons, 6 KB articles, 6 cities.
6. Grep sentiment/casual/analogy bans → zero (Rules 12,14): no "best/trusted/leading/amazing", no "basically", no "like a".
7. Grep entity-pronouns (it/they/this/that/these/those/there) → zero (Rule 13).
8. Every table wrapped in definition + outro (Section 2).
9. Internal anchors are substrings of target titles; `next/link` only (Rule 23).
10. CTA copy isolated; `#lead-form` above the fold (Rule 24).
11. Repeated facts (hours, Essex County, $ ranges) byte-identical to `site-config.ts` (Rule 25).
12. **D-01:** every `[VERIFY]` fact (phone, license #, founding year, GAF cert, BBB, aggregate rating, 500+, 15+ yrs, financing, callback time, NQR warranty term) is OMITTED or stated qualitatively — never placeholdered, never invented in HTML or JSON-LD.
