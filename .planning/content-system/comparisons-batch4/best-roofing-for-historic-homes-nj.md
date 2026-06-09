# Best Roofing for Historic Homes NJ — Answer-First Rewrite (CMP-4 decision-helper)

**comparisonId:** `best-roofing-for-historic-homes-nj`
**Type:** decision-helper / RANKING (multiple options ranked for a scenario), NOT A-vs-B.
**Snippet:** `best-roofing-for-historic-homes-nj.snippet.ts`

## Ranking shape
Top-ranked: **Natural slate** + **clay tile** (in-kind authenticity + 100+-year durability under Standard 6).
Period-style matches: **cedar shingle** (Craftsman), **copper** (Federal/Greek Revival/farmhouse).
Budget alternates, restricted to non-character-defining / non-designated cases: **synthetic slate**, **architectural asphalt**.

## directAnswer (34 words)
Natural slate (60–150 yr, InterNACHI) and clay tile (100+, InterNACHI) rank highest; both satisfy Standard 6 in-kind matching (NPS).

## Headings (all question-form, no `**`)
- introHeading: What Is the Best Roofing for a Historic Home in New Jersey?
- DA1: Which Materials Match the Secretary of the Interior's Standards?
- DA2: Which Historic Roof Matches Each Period Style?
- DA3: When Does Synthetic Slate or Asphalt Substitute for a Historic Roof?
- njSpecific: What Triggers Historic Review on an NJ Reroof?
- residential: Which Roof Suits a Designated Essex County Historic House?
- commercial: Which Roof Fits a Historic Commercial Building?
- 5 FAQs (Register-listing-restriction, tax-credit-eligibility, must-I-use-slate, can't-afford-slate, copper-nails cedar-vs-slate)

## Key sourced figures used (every hard number traced to a named pack source)
| Figure | Source | Pack |
|---|---|---|
| Natural slate 60–150 yr; premium 100+ | InterNACHI chart; National Slate Association | materials-economics §0/§2; historic §3 |
| Clay tile 100+; many 100+ / often 75+ | InterNACHI; TRI Alliance | materials-economics §6; historic §4 |
| Copper 70+; "service life in excess of 100 years" properly installed | InterNACHI; Copper Development Association (Copper in Architecture Design Handbook) | materials-economics §0; historic §6 |
| Cedar shake 20–40 / shingle 30–50 | Cedar Shake & Shingle Bureau | materials-economics §5; historic §5 |
| Synthetic/simulated slate 10–35; composite 40–50 | InterNACHI; CertainTeed | materials-economics §0/§2 |
| Architectural asphalt 25–35 yr; $6.50–$11.00/NJ sq ft | GAF; Josten Roofing (NJ) | materials-economics §1/§7 |
| Standard 6 in-kind matching (design/color/texture/materials) | NPS Secretary of the Interior's Standards, Standard 6 | historic §1 |
| Slate fasteners non-ferrous (copper/stainless) not plain/galv steel; replace at 20%+ broken/missing/sliding | NPS Preservation Brief 29 | historic §3 |
| Clay tile matched in profile/color/glaze/texture; copper-nails-replaced-with-iron failure mode | NPS Preservation Brief 30 | historic §4 |
| Red cedar NO copper nails (chemical reaction shortens life) → zinc-coated/aluminum/stainless | NPS Preservation Brief 19 | historic §0.9/§5 |
| Roof shape/detailing character-defining; document before work; substitute material only on flat/non-visible | NPS Preservation Brief 4 | historic §2 |
| Lead-coated copper = gray non-patinating historic flashing finish | Copper Development Association | historic §6 |
| Binding gate = local municipal Certificate of Appropriateness; Register listing alone places no private-owner restriction | N.J.S.A. 40:55D-107; NPS National Register FAQs; NJ DEP HPO | historic §0.3/§8 |
| Full re-roof of detached 1-2 family = ordinary maintenance, no permit | N.J.A.C. 5:23-2.7 | nj-regulatory-climate §1.1 |
| Glen Ridge district >90% of Borough (Borough Code Ch. 15.32); Montclair §347-136; Newark auto-designated Register districts as of May 30, 2007 | Borough of Glen Ridge HPC; Township of Montclair Code; City of Newark Landmarks & HP Commission | historic §9 |
| Federal 20% HTC (IRC §47) income-producing-only, owner-occupied does NOT qualify, claimed over 5 years | IRS; NPS; NJ DEP HPO | historic §0.5/§10 |
| NJ HPRP income-producing-only, residential must be rental ≥4 dwelling units | NJEDA | historic §0.6/§10 |
| Pending NJ homeowner credit S3545 is NOT law | (stated as not-law in FAQ) | historic §0.7 |
| FR-treated cedar meets Class B/C local code | Cedar Shake & Shingle Bureau Certi-Guard | materials-economics §5b |

## Audit status (spliced into decision-helper.ts, ran real audits, then restored)
- `audit:semantics` — **0 gate violations + 0 advisory items for this page** (net −1 vs original site-wide). Zod schema validates (content arrays ≤4 enforced — DA1/DA2 folded cedar+copper into one body each).
- `audit:headings` — clean (all question-form, hierarchy).
- `audit:meta` — clean (metaDescription 153 chars, no `**`).
- Strict R3 body↔lead bold mapping verified: every body paragraph opens by re-bolding a lead option in lead order, across all 6 sections.
- Gate modality (`will/shall/should/need to/needs to/have to/has to/must/ought to`) — 0 in body prose. Also scrubbed broader brief-list modality (`may/might/can/could/would`) from body prose (only "May 30, 2007" calendar date remains, not modality).

## DEBT CLEARED
- **KILLED the false tax-credit claims.** Removed "NJ offers a 25% credit for owner-occupied residential properties" (that is pending S3545, not law) and "Federal historic tax credits (20%) apply" as if a homeowner reroof qualifies. Replaced with: federal §47 HTC + NJ HPRP are INCOME-PRODUCING-ONLY, owner-occupied homes do NOT qualify (per NPS/NJ HPO), and S3545 is not law (FAQ 2 + commercial section).
- **FIXED the governing gate.** Was: "Glen Ridge's entire borough is a National Register Historic District" / Register-listing-restricts framing. Now: the binding control on a private-funded reroof is the LOCAL municipal Certificate of Appropriateness (N.J.S.A. 40:55D-107); Register listing alone places no private-owner restriction (NPS/NJ HPO verbatim). Glen Ridge reframed as a LOCAL ordinance (Borough Code Ch. 15.32, district >90% of Borough); Montclair §347-136 LOCAL; Newark auto-designation as of May 30, 2007 — all local-ordinance COA, not "because NR-listed".
- **DROPPED the self-promo** "We provide the documentation … required for tax credit applications" → reframed qualitatively to the NPS in-kind documentation practice / eligibility determined by a tax professional, NPS, NJEDA.
- **KEPT** slate/cedar/synthetic-slate/clay/copper guidance + Standard 6 in-kind matching + the red-cedar-no-copper-nails detail (Brief 19) + slate-and-clay-require-copper/stainless contrast (Briefs 29/30).
- Scrubbed all modality; question-form all headings; no brand ranking (no "GAF Slateline / DaVinci / EcoStar is best" — synthetic-slate composite lifespan attributed to CertainTeed as a sourced figure only, not ranked as a brand); no unsourced superlatives (dropped "gold standard", "beauty is unmatched", "the only option").

## GAPS / DROPPED (figures removed for lack of a pack source)
1. **Slate project cost "$20,000–$45,000"** — DROPPED as a hard project-cost number. facts-historic-restoration §0.12 explicitly states NO cost figures in that pack; materials-economics gives only per-sq-ft NJ ranges (slate $10–$30/sq ft; premium cedar/tile/slate $10–$20+/sq ft). The $20k–$45k whole-roof figure is not sourced → removed. (Only the sourced architectural-asphalt $6.50–$11.00/NJ sq ft from Josten Roofing is carried, in DA3.)
2. **Cedar project cost "$14,000–$32,000"** — DROPPED (same reason; no sourced cedar project-cost range; CSSB gives lifespan only).
3. **Clay tile "50–100 years"** (old row) — CORRECTED to the live InterNACHI figure (clay/concrete tile 100+; TRI Alliance 75+/many 100+). The stale "50+/50–100" framing is banned per historic §4.
4. **Standing-seam metal "50–70 years"** (old row) — RECONCILED to the sourced figures: copper 70+ (InterNACHI) and "in excess of 100 years" properly installed (CDA). The bare "50–70" was not the sourced copper figure; the page now leads with copper (the historic metal), not a generic 50–70 metal claim.
5. **Synthetic slate "40–60% of the cost" / "40–50 years"** — the percent-of-cost figure DROPPED (no sourced %); the 40–50-year composite-line lifespan KEPT, attributed to CertainTeed (materials-economics §2); simulated-slate 10–35 yr added from InterNACHI.
6. **"Glen Ridge's entire borough is a National Register Historic District"** — DROPPED/REFRAMED. Pack says the LOCAL ordinance (Borough Code Ch. 15.32; district >90% of Borough) creates the binding review, not the Register listing.
7. **"three levels: National Register (advisory) / NJ Register (state project review) / municipal"** detail — collapsed; kept only the load-bearing facts (listing places no private restriction; local COA is the binding gate; COA ≠ building permit) to avoid R36 cross-section dilution.
8. **"South Orange, Orange, Maplewood" specific HPC-active claims** — DROPPED; pack §9 only verifies Newark, Montclair, Glen Ridge COA processes by name. Did not assert any specific parcel/district needs a COA (historic §9 banned without parcel verification).
9. **"buyers pay premiums for original/restored roofing" / resale-value claims** — DROPPED (no sourced resale figure for historic materials in any pack).
10. **Vermont/Pennsylvania slate-sourcing + salvage-slate FAQ** — the salvage/reuse principle is sourced (Standard 6 / Brief 29 sound-flip-reuse), but the "we source from VT/PA quarries" self-sourcing claim was DROPPED as NQR self-promo; replaced the slate-sourcing FAQ with a Register-listing FAQ that carries a load-bearing sourced fact.
11. **Terne / TCS lifespan year-figure** — NOT asserted (historic §0/§6 + Gaps §3: no sourced year figure; framed only via copper's CDA 100+).
