# NQR Semantic Content Ruleset

> Canonical writing + audit standard for every Newark Quality Roofing (NQR) page and KB article. Answer-first semantic SEO. Any writer or auditor follows this verbatim. Pilot reference: the Roof Repair service page (`slug: roof-repair`).
>
> **Companion files:** verified facts and citable authorities live in `.planning/content-system/research/sources-and-nqr-facts.md` (Source Register Part A = cite-by-name authorities; Part B = NQR business facts with provenance flags). Statistics with provenance live in the `facts-*.md` research files. Page architecture lives in `map-template.md` + `map-prose-schema.md`.
>
> **Source rules (provenance):** this ruleset synthesizes three source documents kept in `.planning/content-system/source-rules/` — `817144395-Semantic-Content-Writing-Rules.pdf` (24 rules + topical-map codes), `1021150303-Holistic-SEO-Writing-System-of-Koray-Gubur.pdf` (14 Koray Gübür rules), and `697428406-Micro-Semantics-in-Depth-SEO-Guide-Step-by-Step-Analysis.pdf` (ThatWare's reproduction of Koray Gübür's Topical Authority course — micro/lexical-semantics layer; source of R35–R38). The canonical cross-project synthesis also lives in the Obsidian vault `SEO/`; this in-project copy is the working source of truth for the rewrite.
>
> **Enforcement:** machine-checkable rules are gated by `npm run audit:semantics` — a **hard gate** (build-failing) for clean-signal rules and an **advisory** report for judgment rules. Tier is marked per rule below as *(gate)* or *(advisory)*. Rules with no marker are author/review guidelines.
>
> **D-01 hard rule overrides everything below:** no placeholder or fabricated trust value renders in HTML or JSON-LD. If a canonical value is unknown, OMIT it — never placeholder, never invent. A statistic flagged `[UNVERIFIED]` in the research files is stated qualitatively or dropped, never as a hard number.

---

## SECTION 1 — Non-Negotiable Rules (numbered checklist)

1. **Every heading is phrased as a question.** Search engines reframe headings as questions, so write them that way explicitly ("How Do You Repair a Leaking Roof in Newark?", not "Roof Leak Repair"). — *Verify:* read every `<h2>`/`<h3>`; each ends in `?` and is a grammatical question.

2. **The first sentence under each heading is a definitive factual answer, ≤40 words / ~320 characters.** It directly answers the heading question before any expansion. — *Verify:* sentence 1 word count ≤40 and char count ≤320; it answers the heading, not background.

3. **The answer text is bolded — not the search term.** Wrap the factual answer span in `**`, never the keyword for its own sake. **City/section pages** bold the **named main topics/entities** (1–3 spans — e.g. the enumerated stressors, the material tracks) across the rendered-and-parsed content fields: `directAnswer` (hero), each section's answer-first lead (the FIRST string of overview/residential/commercial/weatherChallenges, via `ProseLead`), **each subsequent body paragraph in that same content array** (ProseLead parses the whole array → renders the body topic-bold in the forest accent), and the first sentence of each FAQ answer (via `CityFaqs`). **STRICT body↔lead match:** every body paragraph OPENS by re-bolding the exact topic phrase it develops, and that phrase MUST be one of the topics bolded in its section's lead — identical wording, in the order the lead introduces them. Where a body develops a sub-aspect not yet in the lead (e.g. the commercial slope-to-drain paragraph → `low-slope roof`), add that head noun to the lead's bold set so it maps; a permit-only or pure-summary paragraph that develops no lead topic is folded into a developed paragraph (preserving its facts) rather than left unbolded or bolding an orphan term. **Never** `**` in raw-rendered fields — `neighborhoods`/`projectSpotlights`/`whyChoose`/`pricing`/`metaTitle`/`metaDescription`/`heroHeadline`/`heroSubheadline`/`.heading` (a literal `**` there leaks + fails the gate). — *Verify:* in each section the set of body-opening bold topics ⊆ the lead's bold topics (identical phrasing); the bolded span is a topic/entity, not a bare keyword or whole clause; no `**` in raw fields. (A per-section lead-vs-body-opening bold extractor returns 0 mismatches — see the cities-batch bold-audit.)

4. **Heading and answer share opening structure** ("How to do X" → "To do X, …"; "What is X?" → "X is …"; "How much does X cost?" → "X costs …"). The answer mirrors the question's adjective/noun/predicate order. — *Verify:* the answer's first words map to the question's grammatical form, not "X is known for…".

5. **State established facts, never predictions or opinions.** Write "X does Y" / "Asphalt shingles last 15–30 years", not "X is known for Y" or "shingles will probably last". — *Verify:* every claim is a present-tense established fact, not a forecast or judgment.

6. **No modality words: `will`, `should`, `need to`, `have to` (and `must`, `can`, `might`, `may` as hedges).** *(gate — excludes FAQ `question:` fields)* These signal opinion, not fact. — *Verify:* grep the prose for `will|should|need to|have to|must|might`; each hit is removed or rewritten to indicative present tense.

7. **Every information point carries an exact number, percentage, or statistic.** Quantify wherever a verified figure exists ("NJ leak repair costs $400–$1,000", "~90–95% of leaks originate at flashing"). — *Verify:* each paragraph/list item contains a figure or names the qualified count; vague intensifiers ("a lot", "very long") are absent.

8. **Plural nouns are qualified with a count** ("6 common causes", "3 warning signs", "5 roofing materials"). *(gate — count must match item count where structurally detectable)* — *Verify:* every enumerated set is introduced by its exact integer count, and the count matches the number of items that follow.

9. **Authorities are cited by name in-text, never hyperlinked out** ("According to the NRCA, …", "Per the NJ Uniform Construction Code, …"). A plain, unlinked source list may sit at the page foot. *(gate — zero outbound `<a href>`/`https?://`/markdown links in body prose)* — *Verify:* in-text citations name a Source-Register Part-A authority; zero outbound `<a href>` to external domains in body prose.

10. **No fabricated or unverified numbers render.** Use only figures present (and not flagged `[UNVERIFIED]`/`[VERIFY]`) in the research files; otherwise state the fact qualitatively or omit it. *(gate — zero `[VERIFY]`/`[UNVERIFIED]` strings and zero de-fabrication literals in content/metaTitle/metaDescription)* — *Verify:* cross-check every hard number against `facts-*.md` / `sources-and-nqr-facts.md`; any `[VERIFY]`/`[UNVERIFIED]` figure is omitted or de-quantified.

11. **Delete every word that does not change meaning.** Shortest sentence that carries the fact; "as short as possible, as long as necessary." — *Verify:* removing any remaining word would lose a fact; no filler, throat-clearing, or restatement remains.

12. **No everyday/casual language and no analogies.** *(advisory)* No "basically", "a roof is like an umbrella", "at the end of the day". — *Verify:* scan for colloquialisms and `like a`/`as if`/`imagine` analogy framings; none present.

13. **Name entities and their attributes; use no pronoun that co-refers back to an entity.** *(advisory)* Repeat "the flashing", "the underlayment", "Newark" rather than "it"/"they"/"there". — *Verify:* every "it/they/this/that/these/those/there" either has no entity antecedent or is replaced by the named entity.

14. **No power, sentiment, or hype words; choose terms for denotation, not connotation.** *(advisory)* Ban "best", "amazing", "trusted", "leading", "premier", "unbeatable", "love", "stunning". Write each term for its **denotation** (its literal, neutral meaning), never its **connotation** (the emotional/cultural association sentiment words smuggle in) — connotation is exactly what the banned hype words inject. — *Verify:* grep for the banned sentiment list; each hit is removed (brand trust claims live only in branded CTAs, not semantic prose); no term is chosen for connotative coloring over a neutral, denotative one.

15. **Do not add a sentence without a logical reason; combine facts that share a subject.** Two facts about "the flashing" become one sentence, not two. — *Verify:* no adjacent sentences share a subject that could merge without loss; each sentence advances the context.

16. **Put `if`/`because` constraints in the second half of the sentence** ("Repair the flashing, if corrosion covers under 30% of the area" — not "If corrosion…, repair…"). — *Verify:* conditional/causal clauses follow the main declaration, not precede it.

17. **Give examples after a plural noun, inline** ("3 materials: asphalt, slate, metal"). — *Verify:* example lists are introduced by the counted plural noun + colon, then the items.

18. **Respect singular/plural precision** ("a single warning sign" vs "6 warning signs"); subject–verb agreement matches the count. — *Verify:* noun number and verb agree with the stated count throughout.

19. **One macro context per page; a linear context vector from H1 to the final heading.** A roof-repair money page stays about roof repair end to end; context never jumps topic mid-section. — *Verify:* every heading descends logically from the H1 topic; no heading introduces an unrelated macro topic.

20. **Repeat the key n-gram near the start and near the end of the page,** and order declarations logically (definition → causes → signs → process → cost). — *Verify:* the primary n-gram ("roof repair", "roof repair in Newark") appears in the opening answer and in the closing section.

21. **Do not break context across paragraphs.** Each paragraph continues the prior one's subject thread; no orphan paragraph. **The section body must DEVELOP its answer-first lead in the order the lead introduces it** — if the lead enumerates N items, the body covers those N in sequence (count matching, Rule 8), introduces no new top-level point the lead did not set up, and relocates any fact that belongs to a different section's question (e.g., city demographics/population only in "who/what" framing, never under a "problems" lead; permit-law only in the permits section). Lead + body must read as one developed thought, not two. — *Verify:* read consecutive paragraphs; each shares a context link (entity, process step, or cost dimension) with the one before, and each develops the section's lead claim rather than introducing an unrelated fact.

22. **Split MAIN (money) vs SUPPLEMENTARY (informational) content; the money page stays focused.** Topic depth (full cause breakdowns, material deep-dives) lives in linked KB articles, not the service page. — *Verify:* the service page covers the conversion-relevant summary; exhaustive depth is delegated to a linked supporting article (no duplicate full treatments → no self-cannibalization).

23. **Internal-link anchor text appears in BOTH the source heading and the target page title.** *(gate — anchor text is a substring of the target page `<title>`/H1)* Link to `targetURL#identifier`; link templatic siblings and antonyms; use `next/link`, never raw `<a href>`. — *Verify:* each internal anchor's text is a substring of the target page's `<title>`/H1; link uses `next/link` + optional `#fragment`.

24. **CTAs are branded and visually distinct from semantic content; CTA copy never enters the context vector.** Keep `#lead-form` above the fold. — *Verify:* CTA copy ("Schedule Your Free Inspection") sits in a CTA component, not in body prose, and is excluded from the answer/heading vector; `#lead-form` renders above the fold.

25. **Facts are identical across every page, schema, GBP, and citations (brand consistency).** Phone, hours, service area, license type, price ranges, and figures match the canonical `site-config.ts` everywhere. — *Verify:* spot-check a repeated fact (e.g., hours, service area = Essex County) across two pages + JSON-LD; values are byte-identical.

26. **One `<h1>` per page; strict heading hierarchy (h1 > h2 > h3, no skips).** *(gate)* — *Verify:* exactly one `<h1>`; no `<h3>` appears without a parent `<h2>`; no level is skipped.

27. **Order attributes within a sentence: defining/primary attribute first, secondary attributes after — and select WHICH attributes by prominence × relatedness × popularity.** State the class-defining trait before incidental ones (Koray penguin example: "a flightless seabird that lives below the equator and has flippers", not "with flippers… that live…"). Choose which attributes a section covers, and rank their order, by **prominence** (how often the attribute is mentioned for this entity in this context) × **relatedness** (how closely it defines the entity for the page's topic) × **popularity** (search demand) — the defining attribute still leads. — *Verify:* the first attribute after the entity is the one that defines its class/function; incidental attributes follow; the attributes covered are the most prominent/related/searched for the page's context, not an arbitrary set.

28. **Use context-appropriate verbs, consistently.** The verb's semantic field matches the claim and stays consistent for that context: maintenance "extends roof life", drainage work "improves drainage", fastening/bracing "increases wind-uplift resistance". Do not swap verbs whose fields differ ("develop" ≠ "improve" ≠ "increase"). — *Verify:* each quantified outcome uses the verb whose field matches it; the same outcome uses the same verb across pages.

29. **Use the most contextually precise entity, enrich with semantically related terms, and disambiguate polysemy with co-occurring context.** Name the specific entity ("ice-and-water shield", "step flashing", "drip edge"), not a generic stand-in ("underlayment", "metal"), and include co-occurring related terms/synonyms of the head concept so the section reads as topically complete. Where a head term is **polysemous or homonymous** (one spelling, several senses — a roof "valley" vs a landform; "close" a door vs eyes), anchor the intended sense with co-occurring context words ("the roof **valley** flashing", never a bare "valley") so the search engine's co-occurrence read cannot drift. — *Verify:* generic nouns are replaced by the precise entity where one exists; each section names ≥2 related entities/qualifiers beyond the head term; any ambiguous term sits beside the context words that fix its sense.

30. **Question headings are unique and self-authored.** No heading is copied verbatim from a competitor or a Google PAA box, and no two headings across the site are identical strings. *(gate: cross-site heading uniqueness; guideline: not-copied-from-competitor)* — *Verify:* every rendered question heading is unique across the registry; phrasing is original, not a lifted PAA string.

31. **Keep H2 grouper questions short; push conditions/qualifiers down.** Long "Question + condition" forms move the condition into the answer or into an H3. *(advisory)* — *Verify:* H2 questions stay short-form (roughly ≤10 words); qualifiers/`if`-conditions do not live in the H2.

32. **Each page delivers information gain — no duplicated treatment.** A page adds value not already covered elsewhere; SUPPLEMENTARY (KB) pages need not be maximally comprehensive (reinforces R22). The full deep-dive lives in exactly one place; other pages summarize and link. — *Verify:* no two pages carry the same full treatment of a sub-topic; the money page summarizes and links the KB deep-dive.

33. **Add perspective richness after the definitive answer, not before it.** Once the answer is stated, optionally diversify with audience-relevant perspectives (residential vs commercial, historic-district vs standard) — without diluting the semantic structure or displacing the answer. — *Verify:* perspectives appear after the bolded answer sentence; the answer still leads.

34. **Phrase for token efficiency; do not restate via co-reference.** Prefer one clause that carries the fact over a second sentence that re-refers to the same subject ("Tanjiro is 25; his birthdate is Dec 2, 2002" → "Tanjiro is 25 years old and his birthdate is Dec 2, 2002" is worse than the single-token-reuse form). Reinforces R13 (no entity pronouns) and R15 (combine facts sharing a subject). — *Verify:* no sentence exists solely to re-reference a prior subject; shared-subject facts are combined.

35. **Develop each section through the main entity's lexical relations (micro-semantics).** A section body does not restate its answer-first lead — it deepens the lead's macro-context by walking the head entity's lexical relations, each paragraph advancing a *distinct facet*: **hyponyms** (specific instances of the head term — "membrane" → EPDM, TPO, modified bitumen), **hypernyms** (the parent class an instance rolls up to), **meronyms/holonyms** (the entity's parts ↔ the whole — deck, underlayment, ice barrier, flashing, ridge), **antonyms/contrast** (the opposite-but-relevant angle — *benefits → failure modes*, *install → repair/aging*, *new → end-of-life*), and **synonyms** (vary the term across the section, never repeat one keyword for its own sake). Reinforces R21 (develop the lead in order) and R29 (precise entity + related terms) by naming the *method*. — *Verify:* each developed paragraph advances a different lexical facet of the section entity, not a reworded restatement; the section names ≥2 hyponyms/parts of the head term and covers ≥1 antonym/contrast angle where one exists.

36. **Do not dilute the context; state each fact once, in proximity (IR-score dilution).** Keep closely-related terms physically close within a paragraph, confine each sub-topic to the one section whose question owns it, and never let a later paragraph re-state a fact an earlier section already established — each heading concentrates on a *different* piece of information. A single sub-topic (a material's lifespan, a permit rule, a cost range) is not scattered across sections. Reinforces R19/R22/R32. — *Verify:* no hard fact (lifespan, code citation, cost range, failure-share %) appears in full in more than one section; co-related terms for a sub-topic sit in the same paragraph/section; later paragraphs add new facets rather than re-deriving prior ones.

37. **Write answer spans as clean subject–verb–object declaratives with a consistent semantic role (semantic role labeling).** The answer sentence reads `[named agent] [context verb] [named object/patient]` so a search engine extracts it as a fact, and the head entity keeps a consistent role across the section (Newark Quality Roofing is the agent of its services; the roof component is the patient of a failure). No agentless passive ("is installed", "can be seen"), suppressed subject, or "there is / it is" opener in an answer span. Extends R4 (heading↔answer mirroring) and R27 (attribute order); pairs with the R6 no-modality gate. — *Verify:* the first sentence under each heading parses as subject-verb-object with a named subject; no answer opens with agentless passive or an ambiguous "there/it" subject.

38. **Define an introduced entity by function and contrast, never bare (entity-definition completeness).** The first time a section names a material, system, code, or process, define it by its function/use within the local knowledge domain AND at least one differentiator — an alternative, a part, or a contrast — so the context is not diluted ("an **ice barrier** is the self-adhered membrane at the eaves that blocks ice-dam backup, required 24 in. inside the wall line per IRC R905.1.2 — unlike field underlayment, which only sheds wind-driven rain"). A bare entity name with no function/alternative/difference dilutes the page's relevance. Reinforces R29 and the Definition + Comparison-Proposition components. — *Verify:* each newly introduced entity carries a function clause and ≥1 differentiator (alternative/part/contrast) at first mention; no roofing entity is named without being situated.

39. **Internal links follow micro-discipline: few, contextual, varied, never structural.** *(advisory — rendered prose-link pass: in-body contextual link-count ≤15, anchor reuse ≤3, no paragraph-opening anchor, ≤1 per heading section)* Keep at most ~15 in-body **contextual** (prose) links per page — header/footer/nav and entity grids/lists are excluded, because a list of templatic-sibling entities may each link its own same-type page — and at most one contextual link per heading section. Do not reuse the same anchor text more than 3× in a document; the 4th occurrence takes a synonym or varied phrasing (reinforces R29). Never anchor the first paragraph of a page, nor open any paragraph with a link. Link a tangential / Supplementary-Content target (Google's "Supplementary Content") from a *closing*-section paragraph, not the intro; a heading that calls for another named entity links to that entity. Reinforces R23 (anchor↔title) and R22/R32 (main vs supplementary). — *Verify:* per rendered page, in-body contextual `<a href="/…">` count ≤15 and no contextual anchor text repeats >3×; no contextual link sits in or opens the first body paragraph; tangential links originate from a closing section. (The four checks run as `audit:semantics` advisories over a sampled set of prerendered pages; grids/lists are exempt by construction. "≤1 per heading section" is best-effort.)

40. **The heading vector starts at the `<title>` and its order is a ranking signal.** *(extends R19, R26)* The page `<title>` is the first node of the heading vector, and every heading stays consistent with it. Heading ORDER encodes the page's primary angle — the highest-value answer sections sit above the fold as Main Content (weighted higher per Google's answer-passage context-scoring), the lower band as Supplementary Content (the Quality-Rater Main/Supplementary distinction). Group headings that concentrate on related concepts adjacently, and never let a heading's body reiterate a fact a prior heading already delivered — each heading owns a different piece of information (R36 at the heading level). — *Verify:* the `<title>`/H1 and the first H2 share the page's primary n-gram; the most important answer sections render above the fold; adjacent headings cover related concepts; no two heading bodies restate the same fact.

41. **One dominant intent per page; anchors and layout align with it.** *(guideline; extends R19, R22)* A page resolves to a single dominant intent — commercial (transactional/conversion) OR informational — never both at the same level; the subordinate intent appears only as clearly-labeled Supplementary Content. The page's internal-link anchors and visual layout reinforce the dominant intent. For NQR: service, city, and combo money pages are commercial-dominant (the `#lead-form` + service/area conversion path leads); the KB articles and the glossary are informational-dominant. — *Verify:* the page's H1, answer-first lead, primary CTA, and anchor texts all serve one intent; the other intent appears only as a labeled supplementary block, not co-equal.

42. **Build headings as Entity + Attribute + Value, and split a query group into one representative heading plus micro-context variations.** *(extends R1, R30, R35)* Each heading turns on an **Entity** (its topic), an **Attribute** (the property that defines the entity in this context), and a **Value** (the meaning the section delivers). Fold near-duplicate queries into ONE **representative** heading (the core context words only — "What Are the Benefits of [X]?") plus separate **variation** headings, each pinned to a distinct micro-context — a hyponym, an antonym, or a different qualifier of the head topic ("benefits of [specific type]", "side effects of [X]", "what [X] treats"). Develop each heading's body through those lexical-variation micro-contexts rather than restating the representative answer (the R35 method, applied at heading-planning time). — *Verify:* each heading names an entity + a defining attribute; query variants sharing one micro-context collapse into a single heading; genuinely distinct micro-contexts each get their own heading whose body develops that variation.

---

## SECTION 2 — Content-Component Vocabulary (templates)

Each component carries one fact-unit. Bold the **answer**, not the keyword. Cite authorities by name. Use only verified figures.

### Definition
Names the entity and states what it is, in indicative present tense.
> **Template:** `[Entity] is [class] that [function/attribute].`
> **NQR example:** "Roof flashing is **the sheet-metal sealing the transitions and penetrations of a roof** — chimneys, valleys, and vent stacks. Flashing failure causes roughly 90–95% of roof leaks, per trade data attributed to the NRCA."

### Featured-Snippet Answer (≤40 words / ~320 chars)
The first sentence under a heading, snippet-shaped, bolded.
> **Template (heading → answer):** `H2: "What Causes Most Roof Leaks?"` → "**Most roof leaks originate at the flashing — the metal sealing roof transitions and penetrations.** Field-shingle failures cause only ~5–10% of leaks; the remaining ~90–95% trace to flashing, per trade data attributed to the NRCA."

### PAA Answer (one definitive sentence)
Answers a People-Also-Ask-style sub-question in a single self-contained sentence.
> **Template:** `[Subject] [verb] [quantified fact].`
> **NQR example:** "**Roof leak repair in New Jersey costs $400–$1,000**, roughly 10–15% above the national average."

### Listing + List Item + List Outro
Ordered/unordered list where every item starts with the same part of speech (verb+noun for actions, noun for things). Each item is a "Declaration: Evidence" unit where possible. Closed by an outro that restates the count or links onward.
> **Listing intro (counted plural + colon):** "6 components fail and cause roof leaks:"
> **List item template (parallel verb+noun, with figure):**
> - "Flashing corrodes at chimneys and valleys — flashing accounts for ~90–95% of leaks."
> - "Field shingles crack, curl, and lose granules — shingle failure causes only ~5–10% of leaks."
> - "Underlayment tears under wind-driven rain, exposing the deck within one storm cycle."
> **List outro:** "These 6 failure points define the scope of a Newark roof-leak repair."

### Table + Table Definition + Table Outro
A table is ALWAYS preceded by a context/definition sentence and ALWAYS closed by an outro sentence.
> **Table definition (precedes):** "Roof-repair cost in New Jersey varies by damage type, as the 3 ranges below show:"
> **Table:**
> | Repair type | NJ cost range | vs. national |
> |---|---|---|
> | Leak repair | $400–$1,000 | +10–15% |
> | Flashing replacement | (omit until verified) | — |
> | Coastal premium | +15–20% | salt-air exposure |
> **Table outro (closes):** "These NJ ranges sit ~10–40% above national averages because of higher labor and stricter NJ code."

### Declaration : Evidence (list item form)
A claim followed by its quantified or named-authority proof, in one item.
> **Template:** `[Declaration] — [statistic OR named authority].`
> **NQR example:** "Asphalt shingles dominate NJ residential roofing — asphalt holds ~73% of the U.S. residential market (2024 trade data)."

### Comparison Proposition
States a relationship between two templatic siblings or antonyms with a decision threshold.
> **Template:** `[Option A] over [Option B] when [quantified condition].`
> **NQR example:** "Roof replacement over roof repair when damage exceeds 25–30% of the roof area (the contractor-consensus '25% rule'), or when repair cost approaches 50% of replacement cost (the '50% rule')."

### Statistical Evidence
A standalone quantified fact attributed to a named authority, no outbound link.
> **Template:** `[Quantified fact], per [named authority].`
> **NQR example:** "Sealing the roof deck cuts water intrusion by up to 95%, per the IBHS." / "Wind and hail are the largest homeowners-claim type at ~2.8% of insured homes per year, per Triple-I."

---

## SECTION 3 — BANNED List

Nothing below appears in semantic body prose (headings, answers, lists, tables). Branded CTA components are the only exception for trust phrasing, and CTA copy stays out of the context vector.

**Modality / opinion signals (Rule 6):**
- `will`, `should`, `need to`, `have to`, `must`, `might`, `may` (as hedges), `would`, `could`
- Rewrite to indicative present: "shingles last 15–30 years", not "shingles should last…".

**Opinion & judgment:**
- "is known for", "we believe", "arguably", "in our opinion", "the best choice", "ideal", "perfect"

**Casual / everyday language:**
- "basically", "a ton of", "stuff", "things", "at the end of the day", "when it comes to", "kind of", "pretty much", "you guys"

**Analogies & figurative framing:**
- "a roof is like an umbrella", "think of flashing as…", "imagine…", `like a`, `as if`, metaphors of any kind

**Outbound citation links:**
- No `<a href>` to NRCA, ARMA, manufacturers, or any external domain in body prose. Cite by name only; a plain unlinked source list may sit at the page foot (preserves link equity).

**Pronoun co-reference to entities (Rule 13):**
- "it", "they", "them", "this", "that", "these", "those", "there" when the antecedent is a named entity — repeat the entity ("the flashing", "the underlayment", "Newark") instead.

**Power / sentiment / hype words (Rule 14):**
- "best", "amazing", "trusted", "leading", "premier", "top-rated", "unbeatable", "world-class", "stunning", "love", "incredible", "exceptional", "renowned", "cutting-edge", "game-changing"

**Fabricated / unverified figures (Rule 10, D-01):**
- Any number flagged `[VERIFY]` or `[UNVERIFIED]` in the research files (e.g., "500+ projects", invented failure-share percentages, fabricated ratings, placeholder license/phone numbers). Omit or state qualitatively — never placeholder, never invent.

---

## Quick audit pass (run in order)

**Automated — run `npm run audit:all`** (= `audit:headings` + `audit:meta` + `audit:semantics`):
- `audit:headings` — Rules 1, 4, 19, 26 (question form, Core-before-Outer, one H1, hierarchy).
- `audit:meta` — title/description length + presence.
- `audit:semantics` *(gate tier — build-failing)* — Rule 6 modality (excl. FAQ `question:`), Rule 9 outbound links, Rule 10 `[VERIFY]`/de-fab literals (incl. metaTitle/metaDescription), Rule 8 plural-count, Rule 23 anchor↔title, `**`-render leaks, Rule 30 heading uniqueness.
- `audit:semantics` *(advisory tier — report only)* — Rule 12 casual/analogy, Rule 13 entity-pronouns, Rule 14 sentiment/hype, Rule 31 H2 length, Rule 23/39 internal-link advisories (generic anchors; a rendered prose-link pass over sampled prerendered pages: contextual link-count ≤15, anchor reuse ≤3, paragraph-opening anchor, ≤1 link per heading section — header/footer/nav + entity grids/lists exempt; needs a build).

**Manual / review-agent pass** (not machine-gated): 2. First sentence ≤40 words, answer bolded (Rules 2, 3, 4). 4. Every point has a verified figure or named authority (Rules 7, 10). 8. Tables wrapped in definition + outro (Section 2). 10. CTA copy isolated; `#lead-form` above fold (Rule 24). 11. Repeated facts match `site-config.ts` (Rule 25). 12. Attribute ordering, context verbs, entity precision, info-gain, perspective placement, token efficiency (Rules 27–29, 32–34). 13. Lexical-relation development of each section, anti-dilution / state-each-fact-once, semantic-role SVO answers, entity-definition completeness (Rules 35–38). 14. Internal-link micro-discipline, heading-vector order (title-led, above-fold = Main), one dominant intent per page, Entity-Attribute-Value headings + representative-vs-micro-context-variation (Rules 39–42).

---

## Changelog

- **v1.5 (2026-06-08)** — second pass over `697428406-Micro-Semantics-in-Depth-SEO-Guide…pdf` (the v1.3 source) folded in the page-level techniques the first pass skipped: **R39** internal-link micro-discipline (≤15 in-body contextual links/page, ≤1 per heading section, anchor reuse ≤3 + synonym anchors, no first-paragraph/paragraph-opening anchors, supplementary links from a closing paragraph; entity grids/lists exempt), **R40** heading vectors (title starts the vector; order signals the primary angle; above-fold = Main, below = Supplementary; no heading-body reiteration), **R41** one dominant intent per page (commercial vs informational; anchors + layout align), **R42** Entity-Attribute-Value headings + representative-vs-micro-context variations; plus refinements to **R14** (denotation over connotation), **R27** (attribute selection/order by prominence × relatedness × popularity), and **R29** (polysemy disambiguation via co-occurring context). R39's four checks ship as a RENDERED prose-link advisory pass in `audit:semantics` (a sampled set of prerendered pages — in-body contextual link-count ≤15, anchor reuse ≤3, paragraph-opening anchor, ≤1 per heading section; header/footer/nav + entity grids/lists exempt; never build-failing), validated against the live build (city pages = 0 contextual prose links → clean; combo pages surface real signal for the upcoming combo rewrite). R40–R42 are author/review guidelines. The PDF's topical-map / IA half (topical-map build, query networks, KELM, WikiData/knowledge-panel) stays out of the per-page writing ruleset.
- **v1.2 (2026-06-07)** — Rule 21 *section follow-through* + Rule 3 *answer topic-bolding* added during cities Batch A (parity with the vault canonical).
- **v1.4 (2026-06-07)** — R3 *strict body↔lead bold matching*: every body paragraph opens by re-bolding the exact topic it develops, which must be a topic bolded in its section's lead (identical wording, in order); sub-aspect paragraphs add their head noun to the lead's bold set (e.g. commercial `low-slope roofs`); permit/summary paragraphs are folded rather than left unbolded. Corrects the stale "never bold body paragraphs" clause (ProseLead parses the whole content array → renders the body topic-bold in the forest accent). Enforced by a per-section lead-vs-body bold-audit (0 mismatches). Applied across all 9 rewritten city pages (urban-core + first-suburbs).
- **v1.3 (2026-06-07)** — micro-semantics layer (R35–R38) distilled from `697428406-Micro-Semantics-in-Depth-SEO-Guide-Step-by-Step-Analysis.pdf` (ThatWare / Koray Gübür Topical Authority course): R35 lexical-relation section development (hyponym/hypernym/meronym/holonym/antonym/synonym), R36 anti-dilution / state-each-fact-once (IR-score dilution), R37 semantic-role SVO answer spans, R38 entity-definition completeness. All four are author/review-pass guidelines (not yet machine-gated; R36 no-reiteration and R37 agentless-passive are candidates for future `audit:semantics` advisory checks).
