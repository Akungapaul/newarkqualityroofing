# Map of Topical Intent — Roof Repair Pilot Page Grounding

**Purpose:** Ground the Roof Repair SERVICE page (`/roof-repair`) internal-link + supplementary-content plan in the existing topical map.
**Sources (read-only):** `.planning/IMPLEMENTATION-BRIEF.md`, `.planning/IMPLEMENTATION-PLAN.md`, `Newark-Quality-Roofing-Topical-Map-Audit.md` (2026-06-01 code-grounded), `Newark-Quality-Roofing-Topical-Map-Audit-2026-05-27.md`, `homepage-copy-and-link-building-plan.md`.
**Date:** 2026-06-03. **Status:** synthesis for Phase 12+ content system; Roof Repair is the pilot.

> Provenance note: this is a project-local working copy. Per global research-management rules, the canonical home for cross-project reusable synthesis is the Obsidian vault; this file stays project-local because it is NQR-specific page-planning grounding (a `Projects/`-class artifact), not cross-project reusable methodology.

---

## 1. Intended Topical Map Around Services (clusters / hubs)

### 1.1 Master semantic spine (BRIEF §17, §2)
`Roofing Contractor → Professional Roofing Services → Roof Problems → Roof Components → Roofing Materials → Roofing Process → Roofing Costs → Local Roofing Conditions → Trust & Proof → Roofing Knowledge Base → Free Roofing Estimate`

- **Central Entity:** Roofing Contractor (in Newark / Essex County / NJ).
- **Central Intent:** Hire a trusted local roofer for repair / replacement / inspection / emergency / storm / commercial / material work.
- **Master Core topics (the money layer):** Roof Repair · Roof Replacement · Roof Inspection · Emergency Roof Repair · Storm Damage Roof Repair · Residential · Commercial · Flat Roof Systems · Roofing Materials.

### 1.2 Ten nested topical maps (BRIEF §1; PLAN §21; AUDIT §8)
Master Map → Homepage → Service Hub (`/roofing-services`) → **Individual Service pages** → Location pages (`/roofing-in-{city}-nj`, 21) → Service+Location combos (1,365 → ~255 KEEP) → Roofing Materials → Roof Components → Commercial → **Roofing Knowledge Base** (hub + 6 cluster hubs + 44 new + 253 folded articles) → **Roofing Glossary** (`/roofing-glossary/`, 25 DefinedTerms).

### 1.3 The 6 Knowledge-Base clusters (BRIEF §5, §16; PLAN §18; AUDIT §10)
`roof-problems · roof-components · roofing-materials · roofing-process · roofing-costs · local-roofing-knowledge`. KB articles live at NESTED canonical URLs `/roofing-knowledge-base/{cluster}/{slug}/`. The glossary anchors the atomic component entities (flashing, step flashing, pipe boot, valley, underlayment, ice-and-water shield, decking, drip edge, ridge vent, soffit vent, TPO, EPDM, PVC, modified bitumen, tear-off, overlay).

### 1.4 Hub URL migrations (PLAN §11) — 301, repoint ALL internal links
`/services → /roofing-services` · `/locations → /service-areas` · `/resources → /roofing-knowledge-base`. Zero internal links may point to the old hubs. Roof Repair's parent breadcrumb is `/roofing-services`.

---

## 2. Internal-Linking Model (how a service links out)

The framework is a **bidirectional knowledge graph** (BRIEF §12; PLAN §15; AUDIT §15), not a one-direction reverse silo. The engine lives at `src/linking/kb-graph.ts` + `src/linking/link-engine.ts`. A SERVICE page links out along five axes:

| Axis | Roof Repair links TO | Source |
| --- | --- | --- |
| **KB articles (problems/components)** | What Causes Roof Leaks? · What Is Roof Flashing? · What Is Step Flashing? · What Is a Pipe Boot? · What Is a Roof Valley? · What Is Ice & Water Shield? | BRIEF §12; AUDIT §15 |
| **Sibling services** | Emergency Roof Repair · Roof Inspection · Roof Leak Repair · Roof Replacement · Free Roof Inspection | BRIEF §12 |
| **Comparisons** | Roof Repair vs Replacement · Patching vs Full Roof Repair · DIY vs Professional Roof Repair | AUDIT §15 |
| **Service+City combos** | only the KEEP-INDEX combos for this service (Roof Repair is Tier-A → all 21 cities KEEP) | AUDIT §13/§20 |
| **Glossary terms** | the term itself as anchor ("step flashing" → its DefinedTerm) | PLAN §15; AUDIT §10/§15 |

**Return leg (must exist):** every KB article links BACK to 1–2 commercial pages where the entity is used (e.g. "What Is Step Flashing?" → `/chimney-flashing-repair` + `/roof-repair`) and to its cluster hub (middle breadcrumb crumb). Each glossary term → its KB article + related service + related problem/material/component.

**Anchor-text rule:** entity-bearing anchors only — the term itself ("step flashing", "ice-and-water shield"), never "Learn More →" / "click here". Use `next/link`, not raw `<a>`.

**Known code defects to design around (AUDIT §15, P1 #13):** `getMoneyPageArticle` returns only `group[0]`, so a service hub currently surfaces just its position-1 article and orphans 2 of every 3 — the Roof Repair plan must surface ALL sibling supporting articles. Header `<h3>` nav HTAG violation noted in memory (HTAG-03).

---

## 3. MAIN vs SUPPLEMENTARY Split (money page vs supporting article)

This split is explicit and load-bearing (BRIEF §4.2/§6; PLAN §18; AUDIT §10/§18/§21; homepage-plan "Trade-off" note: *thin money pages rank when focused supporting pages carry the topic*).

### MAIN (money page) = the SERVICE page `/roof-repair`
- **Role:** directly satisfies the hire-intent ("hire a roofer to repair my roof"); conversion is the goal (estimate, call, inspection).
- **Core Section (first H2 after hero):** `What Roof Repair Do We Provide?` → sub-services: Roof Leak Repair, Missing/Damaged Shingle Repair, Flashing Repair, Pipe Boot Repair, Chimney/Skylight/Valley Leak Repair, Emergency Roof Repair (BRIEF §4.2).
- **Outer Section:** Signs You Need It · Problems Solved · Materials/Components · Cost Factors · Repair-vs-Replace · Process · Trust/Warranty · Reviews · Related Services · **Related KB Articles** · FAQs · Schedule CTA.
- **Schema:** `Service` (provider → LocalBusiness `@id`, areaServed → Place) + WebPage + FAQPage (if visible FAQs) + BreadcrumbList.
- **H-tags:** one question H1 (`Who Provides Roof Repair in Newark?`); first Core H2 must be `What [Service] Do We Provide?` per PLAN §17.

### SUPPLEMENTARY (supporting articles) = KB cluster entries the page links into
- **Role:** informational/educational; carry topical depth so the thin money page ranks. Each is a `What Is [Concept]?` answer (BRIEF §6 template), lives in a cluster, links back to the money page.
- **Roof Repair's supporting set:** `What Causes Roof Leaks?` (roof-problems), `What Is Roof Flashing?` / `What Is Step Flashing?` / `What Is a Pipe Boot?` / `What Is a Roof Valley?` / `What Is Ice & Water Shield?` (roof-components), plus the 3 existing service-triplet articles folded into clusters (Signs→Problems, Cost→Costs, Contractor→Process per AUDIT §10 mapping).
- **Schema:** `Article` + WebPage + FAQPage (if visible) + BreadcrumbList with cluster-hub crumb.

**Net:** Roof Repair is the MAIN money page; it must (a) lead with a Core "What Roof Repair Do We Provide?" section, (b) link DOWN into 5–6 supplementary KB articles + glossary terms as entity-bearing in-body anchors, (c) link ACROSS to sibling services / comparisons / KEEP combos, and (d) receive return links from each supplementary article. Roof Repair is Tier-A: all 21 city combos KEEP-INDEX.

---

## Six-Line Summary
1. **Map:** Roofing-Contractor spine → Service hub (`/roofing-services`) → individual Service pages → city pages → ~255 KEEP combos → 6-cluster KB (`/roofing-knowledge-base/{cluster}/{slug}/`) → 25-term glossary; Roof Repair is a Tier-A money page.
2. **Linking is bidirectional:** a service links DOWN to KB/glossary, ACROSS to sibling services/comparisons/KEEP combos, and each KB article + glossary term links BACK to the service and its cluster hub.
3. **Roof Repair's prescribed link targets (BRIEF §12):** leaks · flashing · step-flashing · pipe-boot · valley · ice-&-water-shield · emergency · inspection · free-inspection · replacement, plus repair-vs-replace / patching / DIY comparisons.
4. **MAIN vs SUPPLEMENTARY split is explicit:** the SERVICE page is the money/conversion page (Service schema, Core = "What Roof Repair Do We Provide?"); supporting `What Is X?` KB articles carry topical depth so the thin money page ranks.
5. **Hard rules:** entity-bearing anchors only (`next/link`), one question H1, Core-before-Outer, nested KB URLs, repoint all `/services|/locations|/resources` links to migrated hubs.
6. **Code defect to design around:** service hubs currently surface only the position-1 article (`getMoneyPageArticle` → `group[0]`); the Roof Repair plan must surface ALL supplementary siblings + the new component KB articles.
