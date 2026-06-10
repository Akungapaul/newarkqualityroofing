# Cross-City Near-Duplicate Analysis — Combo Batch 2 (East Orange)

**Trigger:** strategic decision to present all 1,365 combos for indexing (reversing the Phase-11 942-noindex doorway sweep). With the noindex safety net removed, content uniqueness becomes the entire doorway defense — so we measured it.

**Method (`_dup-analysis.ts`):** 8-word shingling + Jaccard (passage overlap) + overlap coefficient (containment) + exact-string % + meta-description distinctness, on the *authored* body content (directAnswer, overview, challenges, process, faqs q+a, pricing.note) — excludes site-wide template chrome and dead-code whyChooseUs. 1,352 combos (cedar-grove is 52/65 wired — 13 missing, separate gap), 65 services × 21 cities. Rewritten cities so far: Newark + East Orange.

## Results

| Bucket | What | 8-gram Jaccard |
|---|---|---|
| A — rewritten ↔ rewritten (Newark↔East Orange) | the rewrite-approach test | median 10.2%, mean 10.5%, **max 25.2%**, **0 services ≥50%** |
| B — old ↔ old (19 un-rewritten cities, avg pairwise) | risk if indexed as-is | mean 1.9%, max 2.6% |
| C — meta descriptions (21 cities/service) | SERP dup risk | **0/65** services have any duplicate meta |

### Key findings
1. **No near-duplicates.** Zero rewritten pairs reach the 50% near-dup / 70% effective-dup thresholds. Median ~10% overlap = ~90% distinct.
2. **Counterintuitive but important:** the un-rewritten content is *more* textually distinct (1.9% Jaccard) — because it was free-form, fabrication-laden LLM prose (invented prices, fake "GAF Certified / 15+ years / same-day / 24-7," unaudited local color). It was noindexed for **thinness + fabrication, not duplication.** Textual distinctness ≠ indexable quality → **do not index the 19 un-rewritten cities until rewritten.**
3. **Process-heavy services were the only risk.** Initial pass flagged 3 outliers where standardized process/cost facts dominate (low localizability): roof-thermal-imaging-inspections (46.6% J / 65.2% overlap), storm-damage-roof-repair (45.5% / 63.4%), commercial-roof-installation (44.1% / 64.5%).

### Differentiation pass (applied)
Re-localized the 3 outliers — foregrounding East Orange's verified distinctives (87.6% multi-unit/~69% renter, Central Ave / Main St–MLK commercial corridors, Brick Church transit village, tenant-occupied access, mature street-tree canopy, layered pre-war flat-roof stacks) while **preserving every cited fact** (ASTM C1153, Triple-I 40.7%/2.8%, Josten $7–12/sqft, NRCA/IIBEC, N.J.A.C.). Result:

| Service | overlap coeff | Jaccard |
|---|---|---|
| roof-thermal-imaging-inspections | 65.2% → **31.6%** | 46.6% → 17.9% |
| storm-damage-roof-repair | 63.4% → **34.0%** | 45.5% → 19.0% |
| commercial-roof-installation | 64.5% → **35.3%** | 44.1% → 19.6% |

New distribution ceiling: roof-repair 25.2% J / 42.7% overlap (heavily localized gold service — normal). Mean 10.5%, 0 near-dups, max overlap ≤43%.

## Locked decisions / open items
- **Index flip waits until all 21 cities are rewritten** + a full-scale near-dup re-run passes (2-city overlap understates the 21-city same-service cluster). Then flip `URL-Classification.csv` verdicts + update the LOCKED 255/942/168 count assertions in `build-url-classification.ts`.
- **Process-heavy services get a deliberate local-differentiation pass per city** (carry this into the author brief for Batch 3+).
- **Caveat:** this measures authored data, not rendered HTML (which also shares template chrome). A rendered-HTML near-dup pass is the conservative next check before flipping to index-all.
- **Methodology is cross-project reusable** (`_dup-analysis.ts`) for any programmatic-SEO matrix.
