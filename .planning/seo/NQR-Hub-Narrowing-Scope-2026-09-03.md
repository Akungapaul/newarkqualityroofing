# Hub-Narrowing Scope — /roof-repair-in-newark-nj

**Date:** 2026-09-03 · **Status:** EXECUTED 2026-09-03 (uncommitted, not deployed) · owner Q&A resolved 2026-09-03 (18 rows, 4 files) · **Trigger:** Cora report `Roof_Repair_goog_260901` + GSC 90d query×page analysis

## Verdict

This is a one-page surgical data edit at the service-content layer, but it is **not** a one-page problem: `src/data/heading-config.ts:75` stamps the H1 `Roof Repair and Installation {City}, NJ` and `src/lib/slug-utils.ts:41` the slug `roof-repair-and-installation-in-{city}-nj` onto all 21 city pages, so the same repair/installation conflation is replicated 21 times by construction (verified). The single root cause of the *measured* inversion is intent claimed in **headings and the pricing block**, not body volume: two rendered H2s on `/roof-repair-in-newark-nj` name Replacement and Installation (`repair-maintenance.ts:35`, `:57`, plus the cost H2 at `:254-255`), while the body-mention count already favours the correct page (repair `<article>` = 9 "replacement" tokens; replacement `<article>` = 70 — measured by two independent verifiers). Expect intent reassignment, not traffic: the cluster earns 4 clicks against 2 earned referring domains and everything sits p20–90; nothing in this scope touches that ceiling.

**The "richer page wins" hypothesis in the brief is partly refuted.** Measured `<article>` word counts are near-identical (repair 2,833 vs replacement 2,685) and the replacement page carries *more* images (13 vs 9). The real asymmetry is narrower: repair renders 20 content headings vs 16, a neighborhoods chip grid, a problems grid, and Newark micro-geography (Ironbound ×5, North Ward ×5, Forest Hill ×2, Vailsburg ×2) — replacement names **zero** Newark neighborhoods.

## The paired change

Narrowing repair alone plausibly ends with neither page at p12.9. Ship these in the **same commit** as the eviction:

1. **`/roof-replacement-in-newark-nj` picks up the vacated installation cost surface.** It has no `pricingHeading` and falls through to the config string `Roof Replacement Costs in Newark, NJ` (`src/data/heading-config.ts:61`), which carries no installation token. Add one (row 12).
2. **It gets a `financingNote`.** All 14 replacement sub-pages have one (`replacement-sub-pages.ts:155` et al.); this page does not, yet its own `metaDescription` (`services.ts:33`) promises financing. The repair page currently carries the "new roof installations" financing line — a replacement claim on the wrong page. Move the fact, don't just delete it (rows 6 + 13).
3. **Its credential chip stops saying "Licensed."** `repair-maintenance.ts:503` reads `'NJ HIC Licensed'` while the same entry's `whyChooseUs` at `:481-483` correctly says "holds New Jersey Home Improvement Contractor registration." The page contradicts itself (row 14).
4. **Fix the one reversed anchor site-wide**: `residential-roof-types.ts:117` is `[roof repair](/roof-replacement-in-newark-nj)` — the only internal link whose anchor and destination disagree across this boundary (row 16).

The neighborhoods asymmetry — the one thing that actually correlates with the inversion — is **structurally blocked**: `ServiceTemplate.tsx:250-258` nests `CityNeighborhoods` inside the `content.sections` true-branch, so adding `neighborhoods` to roof-replacement renders nothing. Row 17 unblocks it with a 6-line refactor; the authoring itself is Phase 2, out of this scope.

## Scope: in

| # | Change | File:line | Effort | Confidence |
|---|---|---|---|---|
| 1 | **Delete** `pricingHeading` entirely (do not rewrite). The config fallback `${s} Costs in Newark, NJ` (`heading-config.ts:61`) is byte-identical to any repair-only replacement, and `ServiceTemplate.tsx:338` is `content.pricingHeading ?? costH2`. Setting an override equal to its own fallback is dead config. | `src/data/service-content/repair-maintenance.ts:254-255` | trivial | high |
| 2 | **Delete** `sections[2]` "New Roof Options for Newark, NJ Homes and Businesses" (77 words, 100% replacement/installation). Do **not** relocate — `roof-replacement.overview` (`:322-326`) already covers the same ground with InterNACHI/NRCA/Mordor sourcing. | `repair-maintenance.ts:34-40` | trivial | high |
| 3 | Rewrite `sections[5]` heading + strip two clauses from its body. **Keep the section.** | `repair-maintenance.ts:56-62` | small | high |
| 4 | Rewrite `sections[1]` in place: drop the hub-catalog framing and the three off-intent services; **keep the repair entity list and "metal roof repair."** | `repair-maintenance.ts:27-33` | small | high |
| 5 | `pricing.factors`: rewrite `[0]` (also clears a gate violation), rewrite `[1]`, **delete `[2]` and `[3]`**. Safe: `factors: z.array(z.string())` has no `.min()` (`src/lib/schemas.ts:172`, verified). | `repair-maintenance.ts:259-262` | trivial | high |
| 6 | Rewrite `financingNote` to drop "new roof installations." | `repair-maintenance.ts:264-265` | trivial | high |
| 7 | **Delete** `whyChooseUs.reasons[6]` "Related Exterior Work" (gutters, siding, windows). Direct in-body cause of the gutter bleed at p73; siding and windows have no pages at all. | `repair-maintenance.ts:300-304` | trivial | high |
| 8 | `problemsWeExpect.items`: delete the emergency bullet ("Emergency roof repair is crucial after severe storms…") and trim the "tear off and replacement… multiple layers" bullet. This list **renders**; `sections[4]` alone does not carry the emergency signal. | `repair-maintenance.ts:110`, `:114` | trivial | medium |
| 9 | Delete the two words "need to" from `sections[6].body[1]`. Gate fix (`R6 modality`). | `repair-maintenance.ts:67` | trivial | high |
| 10 | `whyChooseUs.reasons[1].title`: `Registered, Insured, and GAF-Certified` → `Registered and Insured, With GAF Certification`. Gate fix; the noun form already passes at `:278`. | `repair-maintenance.ts:276` | trivial | high |
| 11 | Trim `sections[4].body[2]` to its insurance-documentation half; delete the "24-hour emergency roof repair service" tail from `processSteps[2]`. Low leverage — the emergency split is healthy. | `repair-maintenance.ts:53`, `:205` | trivial | medium |
| 12 | **Add** `pricingHeading: 'Roof Replacement and New Roof Installation Costs in Newark, NJ'` immediately before `pricing: {`. | `repair-maintenance.ts:467` | trivial | high |
| 13 | **Add** `financingNote` to roof-replacement's pricing, after `factors` closes at `:475`, using the house phrasing from `replacement-sub-pages.ts:155-156` verbatim. | `repair-maintenance.ts:475` | trivial | high |
| 14 | `'NJ HIC Licensed'` → `'NJ HIC Registered'`. | `repair-maintenance.ts:503` | trivial | high |
| 15 | `whyChooseUs.heading` `'Why Choose Our Roofing Company for Roof Replacement?'` → statement form. **Inert today** (config wins because the page has no `sections`) but a live policy break the instant anyone grants it `sections`; the heading gate samples only `roof-repair-in-newark-nj.html` (`audit-headings.ts:337-344`), so it would ship silently. | `repair-maintenance.ts:478` | trivial | high |
| 16 | `[roof repair](/roof-replacement-in-newark-nj)` → `[roof repair](/roof-repair-in-newark-nj)`. Sole occurrence site-wide; the article's `requiredTargets` (`/residential-roof-installation-in-newark-nj`) is on the same line, so `audit:article-links` is unaffected. | `src/data/article-content/residential-roof-types.ts:117` | trivial | high |
| 17 | **Enabler only.** Extract the `content.neighborhoods && …CityNeighborhoods…` block into a `const neighborhoodsBlock` and render it in **both** branches of the ternary. Zero visual change to roof-repair; unblocks a future neighborhoods block on roof-replacement. No duplicate-id risk (`neighborhoods-heading` renders once). | `src/components/templates/ServiceTemplate.tsx:250-258` | small | high |

## Scope: out

**Refuted during verification — do not do these.**

- **Restoring `subServices` as H3s** (`ServiceTemplate.tsx:248`). The cited pattern at `ServiceOverview.tsx:96-110` renders `<strong>{sub.name}</strong> — {description}` inside an `<li>` — **zero `<h3>`**. The "+6 H3" figure that carried the entire Cora-tension resolution is unsupported by the file it cites.
- **Making the rich band additive** (delete the ternary at `ServiceTemplate.tsx:242`). `ServiceSigns.tsx:14,16` hardcode `aria-labelledby="service-signs-heading"` / `id="service-signs-heading"`; an additive fork renders it twice and emits a duplicate DOM id. It also ships ~1,500 words of near-duplicate (`signs` vs `problemsWeExpect`; `overview` vs `sections[0]`) onto the page being narrowed.
- **Adding a top-of-body `[full roof replacement](/roof-replacement-in-newark-nj)` link to `sections[0]`.** The scope-boundary link **already exists**: roof-replacement is index 1 in the `repair-maintenance` category, so `ServiceTemplate.tsx:154-160` `.slice(0,4)` always includes it, and `RelatedServices.tsx:35` renders it inside `<main>` with the card text "Full roof replacement for homes and businesses when repair is no longer cost-effective." (verified by reading the code; the live page returns 4 links to that URL, 1 in `<main>`). Adding an editorial one would put "roof replacement" in the highest-weight body position on the page being de-optimised for that phrase.
- **Editing the meta description in `repair-maintenance.ts` or `services.ts:21`.** The rendered meta comes from `buildServiceDescription()` at `src/lib/seo-utils.ts:69-85` — a template shared by all 65 services. `services.ts:21` is audited (`audit-meta.ts:98`) but never rendered. Cora's +39-char meta ask is real and answerable without touching intent, but it is a site-wide template edit, and `seo-utils.ts:64` and `:84` contain live `"Licensed …roofers"` fallback strings that lengthening the template can trigger. Separate, gated change.
- **Promoting `CityNeighborhoods` names, `ServiceProcess` titles, or `ServiceFaq` questions to `<h3>`.** `CityNeighborhoods` is shared with `CityTemplate.tsx:12`; 20 neighborhood names across 17 city pages name a registry place with no ", NJ" and would become policy-violating headings. The FAQ variant additionally requires editing `scripts/audit-headings.ts:415` so content can pass a gate — wrong direction.
- **Retargeting `[flat roof replacement]` anchors to `/flat-roof-replacement-in-newark-nj`** (`comparisons.ts:196,202,1287`). `src/generated/url-classification.json` has that family at **1 KEEP / 19 NOINDEX** — it is the one demand-pruned destination among the four proposed.
- **Anchor-text diversification** (115 exact-match `[roof replacement]` anchors). Unrelated to the finding; the template anchor floor (nav, breadcrumbs, `RelatedServices`, 738 combo parent links) is 100% exact-match by construction and unmovable, so editing 15–20 prose anchors cannot move the ratio.
- **Changing `sections[3]`'s heading** ("How Roof Inspections Diagnose Leaking Roofs in Newark, NJ"). No supplied datum implicates inspection or leak queries; the three-way split resolves correctly on 31 of 34 overlap queries. Explicit **do-not-do**.
- **Deleting `sections[1]` or `sections[5]` wholesale.** Between them they hold both site-wide mentions of "metal roof repair" (`:31`, `:60`) — the page's single best position anywhere in the cluster (p4) and a legitimately repair-scoped intent. Rows 3 and 4 are surgical for this reason.

**Deliberately kept.** The Forest Hill slate sentence in `sections[5].body[1]` stays. The brief lists "slate/tile/cedar-shake roofing newark nj" as a bleed, but this is descriptive local context about roofs NQR repairs, not an offer to install slate, and it is the strongest local-craft prose on the page. Flagged so it is not swept later by a mechanical material-term pass.

**Deferred, named.** The 21 city-page `Roof Repair and Installation {City}, NJ` H1s and slugs; the site-wide `licensed` → `registered` sweep (64 `'NJ HIC Licensed'` occurrences in `service-content/*.ts`, plus `seo-utils.ts:64,84` and image-manifest alts); the Cora Images grade (9 vs 29 — untouched by everything here, and Cora's own correlation for `CP426` is inverse); the `CANON_STRICT` discrepancy (global CLAUDE.md calls the semantic audit advisory; `scripts/audit-semantics.ts:407` calls `process.exit(1)` unconditionally and implements no such flag — `grep` returns zero hits).

## Exact content edits

**Row 1 — `pricingHeading` (254-255)**
```
- pricingHeading:
-   'Roof Repair, Replacement, and Installation Costs in Newark, NJ',
```
Delete both lines. Rendered H2 becomes `Roof Repair Costs in Newark, NJ` from config.

**Row 3 — `sections[5]` (56-62)**

Before → After (heading):
`Get a Free Estimate for Roof Repair or Replacement` → `Get a Free Roof Repair Estimate in Newark, NJ`

body[0]:
> **Newark Quality Roofing provides a free estimate for every roof repair in Newark, New Jersey.** Each assessment includes a photo-documented diagnosis of the failed component and a transparent written proposal, so a property owner sees the scope and the price before any repair begins.

body[1] — keep verbatim through "…on every service call," then:
> …because a Newark roofline can present any century's roofing system. Newark Quality Roofing also repairs metal roofs, resealing seams, fasteners, and panel laps.

(Removed: "and new roof projects"; "and installations, including ridge vents installation to improve attic ventilation and prevent mold growth"; the second-person "you never know… until you're standing on it.")

**Row 4 — `sections[1]` (27-33)**

Heading: `Roofing Services Newark Quality Roofing Provides` → `Roof Repair Services Newark Quality Roofing Provides in Newark, NJ`

body[0]:
> **Newark Quality Roofing repairs roofs across Newark, New Jersey**, covering roof inspections, leak diagnosis, flashing repair, shingle repair, metal roof repair, and flat-roof membrane repair, as a registered and insured New Jersey Home Improvement Contractor.

body[1]:
> Each repair matches the failed component to Newark, New Jersey building stock and climate — party-wall flashing on attached brownstones, low-slope membrane on Ironbound commercial blocks, and asphalt shingle fields on pitched Vailsburg roofs. Newark Quality Roofing diagnoses the source of water entry before sealing any component, so the repair addresses the cause rather than the visible stain.

(Removed: "comprehensive range of roofing services"; "full roof replacements"; "gutter installation"; "ventilation improvements". Retained: all six repair entities, the registered-and-insured credential.)

**Row 5 — `pricing.factors` (259-262)**

factors[0]:
> Most roof repair projects in Newark, NJ range from $350–$1,500, depending on scope and materials — the cost moves with roof age, access, and the failed component.

factors[1]:
> For homes, an asphalt shingle repair matches the existing shingle line, while on many flat roofs a single-ply repair reseals the seam or patches the puncture in the existing EPDM, TPO, or modified-bitumen system.

factors[2] and factors[3]: **delete.** The `$250,000 to $1,120,000` band and the "Newark's commercial roofs average 17,117 square feet" figure appear exactly once in `src/` (`:261`), carry no attribution unlike every sibling claim, and contradict the site's own commercial rate at `commercial-services.ts:534` ($7.00–$12.00/sq ft × 17,117 sq ft = $120k–$205k). **Delete, do not relocate** — moving it makes it false on arrival. Cool-roof and green-roof content is covered with real sourcing at `/energy-efficient-roofing-solutions-in-newark-nj` and `/green-roof-installation-in-newark-nj` (protected p2.2 cluster).

No replacement factors are added. Two of the four rewrites proposed during analysis were refuted for misattributing "per NRCA and ARMA" across propositions those bodies do not make, and for asserting an unsourced low-end/high-end price positioning.

**Row 6 — `financingNote` (264-265)**
> Newark Quality Roofing provides a free written estimate and discusses payment and financing options for larger roof repairs at the estimate.

**Row 9 — `sections[6].body[1]` (67)**
`…local repairs also need to account for snow load requirements…` → `…local repairs also account for snow load requirements…`

**Row 11 — `sections[4].body[2]` (53)**
> Newark Quality Roofing documents storm and hail damage with timestamped photographs and a written scope of work for insurance adjusters, then completes the permanent repair on the schedule set in the written estimate.

**Row 12 — roof-replacement `pricingHeading`** (insert before `:467`)
```
pricingHeading:
  'Roof Replacement and New Roof Installation Costs in Newark, NJ',
```

**Row 13 — roof-replacement `financingNote`** (insert after `:475`)
```
financingNote:
  'Newark Quality Roofing provides a free written estimate and discusses payment and financing options at the estimate.',
```

**Row 15 — roof-replacement `whyChooseUs.heading` (478)**
`Why Choose Our Roofing Company for Roof Replacement?` → `Why Choose Newark Quality Roofing for Roof Replacement in Newark, NJ`

Every proposed heading is statement-form (`audit-headings.ts:418` errors on any non-H1, non-hub-FAQ heading ending in `?`) and pairs Newark with `NJ` (`barePlaces`, `audit-headings.ts:82-105`). No string contains `will`/`should`/`need to`/`must`, `licensed`, `24/7`, `same-day`, `GAF certified`, or a `0% financing` literal.

## Risks and how each is handled

**`npm run audit:all` is RED before you touch anything.** I ran it: `npx tsx scripts/audit-semantics.ts` → 7 GATE violations, all seven on `service:roof-repair`, advisory 6,027. Nothing else site-wide is red. Whoever executes this will hit a failing gate immediately and may misattribute it. This scope clears **3 of 7** (`pricing.factors[0]` R6 modality, `sections[6].body[1]` R6 modality, `reasons[1].title` R10 "GAF Certified"). The remaining **4** are `whyChooseUs.reasons[5].title` and `.description`, each tripping R10 on both `24/7` and `same-day`. Those are an owner decision, not an engineering one (see Open questions) — `audit:all` stays red until it is made.

**Do not "fix" 24/7 and same-day by rewording.** Substituting "round-the-clock" and "within one business day" passes the regex while asserting the same claim, and "within one business day" is a *weaker* commitment than "same-day" — the site would advertise less than the business offers. That is regex evasion plus a silent downgrade. Either allowlist the true claims in `scripts/audit-semantics.ts:99-107` or delete them.

**Every rendered-pass gate reads a stale build.** `PRERENDER_DIR` is `.next/server/app` (`audit-headings.ts:60`); the current HTML is dated Sep 1. A verifier applied the full narrowing edit and `audit:headings` still printed PASS. Run `npm run audit:headings:full` (which chains `next build`), never plain `audit:headings`. `audit-headings.ts:451-456` returns *non-failing* when the build is absent.

**Narrowing without the paired change lowers both pages.** Handled by shipping rows 1–17 in one commit. Residual risk remains and is accepted: rows 12–14 are hygiene, not a lift, and the substantive replacement-side move (Newark neighborhoods) is Phase 2. If the paired rows are cut, cut the eviction too.

**Cora vs narrowing — narrowing wins, and here is exactly where.**

- *Word count:* not a conflict. Live 3,223 against a 1,749 goal; this scope removes ~330 source words, landing ~2,890 — still 1.65× the goal. Cora's `CP492 Word Count` is flagged "No Correlation" on this SERP.
- *Variations/entities:* not a conflict. Computed from the workbook, all 20 variations with a positive deficit are repair-intent; **"roof replacement" is at 47 against a target of 11 — the page is 36 OVER**. Removing replacement copy moves *toward* Cora's target. Rows 3 and 4 are surgical specifically to preserve repair entity density.
- *Headings:* **real conflict, and narrowing wins.** Cora asks +32 headings and +35 H3. This scope removes 1 H2 (`sections[2]`) and adds none; the page keeps 0 H3. Every mechanism proposed for adding H3s was refuted — the `subServices` pattern emits no heading, the FAQ route requires weakening a gate, and the shared-component promotions break 17 city pages or 65 service pages. **We accept a lower Headings grade.** Cora's target is a competitor average on the broad term "roof repair"; a deliberately narrowed page has a legitimate reason to score below it, and `CPXR003 Number of Heading Tags` is itself flagged "No Correlation" (Spearman +0.02) on this run.
- *Images (37.8% F) and meta length:* untouched here and explicitly deferred. The meta lever is a site-wide template with a live "Licensed" fallback; it is not free.

**Cora Roadmap Phase 6 is noise.** Result 78 in the Results sheet has an empty Link Text and empty Summary — Cora could not capture a snippet at absolute position 101 — so all five Phase-6 factors are computed against an empty string. Same class as the known Phase-X load-time artifact. Discard.

**Deleting body copy can move click depth.** `postbuild` runs `scripts/validate-internal-links.ts` and `audit:depth` enforces ≤3 clicks over 1,127 sitemapped pages. The roof-repair entry contains **zero** in-body markdown links (verified by grep across lines 10-312), so no link edge is lost by rows 2–8. Confirm with the postbuild step anyway.

**Section ids renumber.** `ServiceRichSections.tsx:37` builds `service-section-${index}-heading`. Deleting `sections[2]` shifts ids for sections 3–6. Nothing links to them (the only fragment hrefs on the page are `#` and `#lead-form`), but the ids do move.

## Verification plan

```bash
# 1. Baseline — capture BEFORE editing, so the 7 pre-existing violations are on record
npx tsx scripts/audit-semantics.ts 2>&1 | tail -20
npx tsx scripts/audit-article-links.ts          # must be 252 checked / 0 violations

# 2. Type + schema safety (catches a malformed factors/pricing edit at module load,
#    since src/data/service-content/index.ts:20 hard-parses ServiceContentSchema)
npx tsc --noEmit

# 3. Full build — REQUIRED before any heading claim means anything
npm run build                                    # prebuild + next build + validate-internal-links

# 4. Gates, in order
npm run audit:headings:full                      # rendered pass; NOT plain audit:headings
npm run audit:all                                # expect 4 remaining semantic violations (reasons[5]) until the owner rules

# 5. Re-measure the two pages against the baseline in this document
node -e "…" # or curl the built HTML and count: H2s, 'replacement' tokens in <article>
```

What each proves: (2) the `factors` deletion parses; (3) the internal link graph and click depth survive; (4) the four new/edited headings are statement-form, carry `, NJ`, and preserve `Roof Repair, Defined` as the first content H2 (`audit-headings.ts:436-443`); (5) the intent surface actually moved.

**What no gate catches, and a human must eyeball:**

- The rewritten `sections[1]` and `sections[5]` bodies read naturally and do not now duplicate `sections[0]` or `sections[6]`.
- `/roof-repair-in-newark-nj` still renders a visible free-estimate offer after row 3 (`ServiceInlineCta` and `ServiceCtaBanner` both render; `credentialsHighlight` still advertises "Free Estimates").
- The `RelatedServices` card for Roof Replacement is still the intended scope-boundary signal and its anchor text is acceptable on a page being de-optimised for that term.
- Rows 12–15 on `/roof-replacement-in-newark-nj`: the heading gate samples only `roof-repair-in-newark-nj.html`, so that page is **unguarded**. Check its H2s by hand, or add it to `buildSampleSet` (`audit-headings.ts:344`) — `serviceHasDefinition('roof-replacement')` already returns true and a verifier confirmed it passes the gate's own predicate on today's build.
- **Baseline snapshot before deploying.** Record the current GSC positions for `roof replacement newark nj`, `roofing replacement newark`, `shingle roofing replacement newark`, `roof repair`, and `metal roof repair`, both pages, and set a re-pull for ~90 days — align it with the WATCH→KEEP re-pull already scheduled for ~2026-10. A 4-click, p20–90 cluster cannot produce a legible signal sooner, and without a recorded baseline the next reviewer re-litigates this from scratch.

## Open questions for the owner

1. **Are "same-day estimates" and "24/7 emergency response" literally true?** They are 4 of the 7 live gate violations (`repair-maintenance.ts:296-297`). If true → add an allowlist entry to `scripts/audit-semantics.ts:99-107` and keep the exact wording. If not → delete both claims. Rewording to evade the regex is not an option, and project memory recording them as "confirmed-true" is not the owner's confirmation.
2. **Where did `$250,000–$1,120,000` and "Newark's commercial roofs average 17,117 square feet" come from?** Both appear once in the repo, unsourced, and contradict the site's own $7.00–$12.00/sq ft commercial rate. Row 5 deletes them. If a real source exists, they can be re-added to `/commercial-roof-replacement-in-newark-nj` as a separate sourced edit.
3. **Is "we've helped 500+ Essex County property owners" (`:273`) substantiated?** It passes the gate only because the R10 N+ regex (`audit-semantics.ts:107`) lists projects/roofs/homes/homeowners/jobs/customers/clients/installs/reviews but not "owners." It is the same class of claim the rule targets. Left untouched in this scope.
4. **Do the 21 city pages keep the `Roof Repair and Installation {City}, NJ` H1 and slug?** Changing it is a 21-URL slug migration with 301s — a separate decision, and one this project has been burned by before. Flagging, not proposing.

---

## Owner answers — 2026-09-03

Owner: *"All the questions are true."*

- **Q1 — 24/7 + same-day are TRUE.** Keep exact wording. **Correction:** the proposed fix ("add an
  allowlist entry at `audit-semantics.ts:99-107`") is not possible — those lines are the `DEFAB`
  pattern array and the script has NO allowlist/exempt mechanism (grep for allow|exempt|whitelist
  returns nothing). **Row 18 (new):** build a narrow path-keyed R10 exemption for
  `service:roof-repair whyChooseUs.reasons[5].*`, stamped owner-confirmed 2026-09-03. Do NOT remove
  the patterns from `DEFAB` — that disables the check site-wide. This takes `audit:all` green.
  Note the same claims also appear in `Footer.tsx`, `ContactPage.tsx`, `seo-utils.ts` (unscanned by
  the audit); they are consistent, nothing contradicts them.
- **Q3 — "500+ Essex County property owners" is TRUE.** No action; left as-is.
- **Q2 — UNRESOLVED, arithmetic conflict.** "True" cannot reconcile `commercial-services.ts:534`
  ($7-$12/sq ft x 17,117 sq ft = $120k-$205k) with the $250,000-$1,120,000 band at
  `repair-maintenance.ts:261`. Either the rate, the square footage, or the band's scope is off.
  **Does not block:** row 5 deletes both from the repair page regardless. The question only governs
  a later re-add to `/commercial-roof-replacement-in-newark-nj`.
- **Q4 — not a truth question.** The 21 city-page H1/slug decision is a migration call, still open,
  still deferred, blocks nothing here.

---

## EXECUTED — 2026-09-03

All 18 rows applied. 4 files, +73/-44. Not committed, not deployed.

| Measure | Before | After |
|---|---|---|
| `audit:semantics` gate violations | 7 | **0** |
| "replacement" in repair `<article>` | 9 | **2** |
| "installation" in repair `<article>` | 4 | **0** |
| Replacement-claiming H2s on repair page | 2 | **0** |
| "installation" on replacement page | 0 | **4** |

Gates: `tsc` clean · build 1,533 routes · internal links 0/513,692 dead · click depth 1,127 pages PASS ·
audit:headings PASS · audit:leads PASS · audit:article-links 252/0 · audit:meta 0 · audit:semantics PASS.

Residual "replacement" x2 on the repair page are both intended: a permit-threshold fact (>25% of roof
surface) and the "Roof Repair vs Replacement" comparison card (the scope-boundary signal). Row 15
renders via config as predicted (roof-replacement has no `sections`) — future-proofing, not live.
H3 count remains 0 on both pages, as accepted in the Cora tension section.

## RECOMMENDATION — 21 city pages: leave them alone

GSC 90d, 20 pages with history: **5,092 impressions, 3 clicks, CTR 0.06%, positions 27-68.**
Cedar Grove alone: 1,762 impressions at p42.8, ZERO clicks.

They rank for general city roofing intent (commercial roof repair/maintenance, gutters, asphalt
roofer, dormer contractors, ceiling repair, "{city} roofers") — i.e. they function as general city
hubs, which is correct for a city page. The name mismatches, the page does not.

**No cheap fix exists.** "Roof repair and installation" is pinned in FOUR coupled layers:
`slug-utils.ts:41` (slug), `heading-config.ts:75` (H1), the metaTitle (`seo-utils.ts:43`), and
**`audit-keyword-leads.ts:127` which hard-codes the phrase** into every city page's first sentence.
Changing the H1 alone leaves the commitment and desynchronises the layers.

**Defer and bundle.** Cedar Grove proves the ceiling is position, not naming — a perfect name at p42
still earns nothing. Four layers + 21 redirects + chain-guard for zero measured upside is the same
shape as the reverted "-1" migration ([[nqr-slug-1-migration]]). Revisit when the ~2026-10
WATCH->KEEP re-pull or the consolidation branch already has those files open.
