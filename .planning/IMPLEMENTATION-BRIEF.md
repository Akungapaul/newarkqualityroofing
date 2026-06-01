# Roofing Contractor Topical Map Implementation Prompt

> **SUPERSEDED FOR EXECUTION by `IMPLEMENTATION-PLAN.md`.** This brief remains the source of the verbatim page-level question-form **H-tag trees** (§4.1–4.4, §5, §6, §7) — read those here, they are unchanged and in force. For everything else (routing, indexation pipeline, trust handling, schema identity, KB URL shape, audit scripts, phase plan), `IMPLEMENTATION-PLAN.md` is authoritative.
>
> Two notes below are OVERRIDDEN by the plan:
> - ~~"all other URLs stay flat"~~ → the 44 NEW KB articles use **nested** canonical URLs `/roofing-knowledge-base/{cluster}/{slug}/`.
> - ~~"unknown trust values use `[CANONICAL VALUE REQUIRED]`"~~ → unknown trust values are **omitted publicly** (placeholder only in dev notes); `rating.enabled=false` gates AggregateRating off.
>
> Decisions still in force: 252→253 existing articles **folded into the 6 KB clusters**; hub URLs **migrated with 301s** (`/services`→`/roofing-services`, `/locations`→`/service-areas`, `/resources`→`/roofing-knowledge-base`); **`trailingSlash: false`**; combo indexing reuses **`URL-Classification.csv`** (942 noindex / 168 consolidate-301 / 255 keep).

Act as a Semantic SEO architect, topical map builder, local SEO implementation strategist, roofing industry content architect, and knowledge base designer.

You are not performing a general audit. You are not giving optional recommendations. You are not choosing which parts of this methodology to apply.

You must implement the full topical map, Core Section / Outer Section structure, question-based H-tag hierarchy, knowledge base architecture, internal linking model, and page-template system described below.

Target:
- Website URL: https://newarkqualityroofing.com
- Primary Location: Newark / Essex County / New Jersey
- Business Type: Roofing Contractor
- Primary Business Goal: Generate roofing leads, phone calls, estimates, inspections, and emergency repair requests.
- Knowledge Base Goal: Make the website a roofing knowledge base that search engines can understand, trust, and reference.

---

## 1. Implementation Objective

Transform the website into a structured roofing contractor topical authority system, functioning as: a local roofing contractor lead-generation website + a roofing knowledge base + a local roofing reference hub + a nested topical map system.

Nested topical map system:
- Master Website Topical Map
  - Homepage Topical Map
  - Service Hub Topical Map
  - Individual Service Page Topical Maps
  - Location Page Topical Maps
  - Service + Location Page Topical Maps
  - Roofing Material Page Topical Maps
  - Roof Component Page Topical Maps
  - Commercial Roofing Topical Maps
  - Roofing Knowledge Base Topical Maps
  - Roofing Glossary / Entity Dictionary Topical Maps

Every important page must have: Source Context, Central Entity, Central Search Intent, Core Section, Outer Section, Knowledge Base Role, Conversion Goal, Question-Based H-Tag Structure, Internal Links, Schema Type, CTA Placement.

## 2. Master Topical Map Framework

- **Source Context:** A local roofing service provider explaining roofing services, roof problems, roofing materials, roof components, roofing costs, roofing processes, trust signals, service areas, estimates, and contact options to homeowners, business owners, and property managers.
- **Central Entity:** Roofing Contractor
- **Central Search Intent:** Hire a trusted local roofing contractor for roof repair, roof replacement, roof inspection, emergency roof repair, storm damage roof repair, commercial roofing, residential roofing, flat roof systems, or roofing material installation.
- **Master Core Section:** Professional Roofing Services
- **Master Core Topics:** Roof Repair · Roof Replacement · Roof Inspection · Emergency Roof Repair · Storm Damage Roof Repair · Residential Roofing · Commercial Roofing · Flat Roof Systems · Roofing Materials
- **Master Outer Section topics:** Roof Problems · Roof Components · Roofing Materials · Roofing Costs · Roofing Process · Trust and Proof · Reviews · Project Gallery · Warranties · Licensing and Insurance · Local Service Areas · Local Weather and Roofing Conditions · Roofing Permits · FAQs · Knowledge Base · Free Estimate / Contact

## 3. Mandatory Core Section and Outer Section Rule

Every important page must be rebuilt with a clear Core Section and Outer Section.
- **Core Section** = the section that directly satisfies the page's main search intent.
- **Outer Section** = the supporting context that helps the user trust, understand, compare, localize, and act on the core topic.
The sections need not be public headings named "Core/Outer," but the structure must clearly separate them internally and semantically.

## 4. Required Page-Level Structures

### 4.1 Homepage
- Source Context: Local roofing contractor serving Newark, Essex County, and nearby areas.
- Central Entity: Roofing Contractor in Newark
- Central Search Intent: Hire a trusted local roofing contractor.
- Core Section (first major section after hero + estimate form): Professional Roofing Services → Roof Repair, Roof Replacement, Roof Inspection, Emergency Roof Repair, Storm Damage Roof Repair, Residential Roofing, Commercial Roofing, Flat Roof Systems.
- Outer Section (after core): Why Choose Our Roofing Company · Roofing Process · Areas We Serve · Customer Reviews · Roofing Costs · Roofing Materials · Roofing Knowledge Base · Roofing FAQs · Free Roofing Estimate.
- Question-Based H-Tag Structure:
```
H1: Who Should You Call for Roofing Services in Newark?
H2: What Roofing Services Do We Provide in Newark and Essex County?
  H3: How Do We Repair Roof Leaks and Roof Damage?
  H3: How Do We Replace Aging or Storm-Damaged Roofs?
  H3: How Do We Inspect Roofs for Damage?
  H3: How Do We Handle Emergency Roof Repairs?
  H3: How Do We Repair Storm-Damaged Roofs?
  H3: How Do We Help Commercial Roofing Customers?
  H3: How Do We Install and Compare Roofing Materials?
H2: Why Should Homeowners and Businesses Choose Our Roofing Company?
  H3: Are We Licensed and Insured?
  H3: What Warranties Do We Provide?
  H3: What Do Customer Reviews Say About Our Roofing Work?
  H3: What Local Roofing Experience Do We Have in Essex County?
H2: How Does Our Roofing Process Work?
  H3: What Happens During the Free Roof Inspection?
  H3: What Is Included in the Roofing Estimate?
  H3: How Do We Schedule Roofing Work?
  H3: What Happens During Installation, Repair, or Replacement?
  H3: What Happens During Final Cleanup and Walkthrough?
H2: Where Do We Provide Roofing Services?
  H3: Do We Serve [Primary City]? / [Nearby City 1..3]?
H2: How Much Do Roofing Services Cost?
  H3: What Affects Roof Repair Cost? / Replacement Cost? / Do Roofing Materials Affect the Estimate?
H2: What Roofing Questions Do Customers Ask Most Often?
  H3: Repair vs Replacement? / How Long Does Replacement Take? / Best Material for Local Weather? / Emergency Roof Repair?
H2: How Can You Request a Free Roofing Estimate?
```

### 4.2 Service Page (every major service: Roof Repair, Roof Replacement, Roof Inspection, Emergency Roof Repair, Storm Damage Roof Repair, Residential Roofing, Commercial Roofing, Flat Roof Systems, TPO Roofing, EPDM Roofing, Metal Roofing, Asphalt Shingle Roofing, …)
- Source Context: Local roofing contractor explaining and providing [Service].
- Central Entity: [Service]; Central Search Intent: Hire a roofing contractor to provide [Service].
- Core Section: directly explains the service and its sub-services (e.g. Roof Repair → Roof Leak Repair, Missing/Damaged Shingle Repair, Flashing Repair, Pipe Boot Repair, Chimney/Skylight/Valley Leak Repair, Emergency Roof Repair).
- Outer Section: Signs You Need [Service] · Problems Solved · Materials & Components Involved · Cost Factors · Repair vs Replacement · Process · Trust & Warranty · Reviews · Related Services · Related KB Articles · FAQs · Schedule [Service].
- Question-Based H-Tag Structure:
```
H1: Who Provides [Service] in Newark?
H2: What [Service] Do We Provide?
  H3: How Do We Handle [Sub-Service 1..4]?
H2: How Do You Know If You Need [Service]?
  H3: Warning Signs? / Problems Not to Ignore? / When to Call a Contractor?
H2: How Do Our Roofing Contractors Perform [Service]?
  H3: Inspection? / Diagnose? / Prepare scope? / Verify after completion?
H2: How Much Does [Service] Cost?
  H3: Factors? / Emergency? / Material?
H2: Should You Repair or Replace Your Roof?
  H3: When is repair enough? / When is replacement better?
H2: Why Choose Our Roofing Company for [Service]?
  H3: Licensed & insured? / Warranty-backed? / Reviews?
H2: What Related Roofing Services Should You Consider?
H2: What Knowledge Base Articles Explain This Service?
H2: How Can You Schedule [Service]?
```

### 4.3 Location Page (every city / service area)
- Source Context: Local roofing contractor serving [City]. Central Entity: Roofing Contractor in [City]. Intent: Hire a roofing contractor in [City].
- Core Section: Roofing Services in [City] → Roof Repair/Replacement/Inspection/Emergency/Storm/Residential/Commercial/Flat Roof/Materials in [City].
- Outer Section: Local Roofing Problems · Neighborhoods Served · Local Weather & Conditions · Housing/Property Types · Materials for [City] · Permits & Local Requirements · Local Projects · Local Reviews · Nearby Service Areas · FAQs · Free Estimate in [City].
- Question-Based H-Tag Structure:
```
H1: Who Provides Roofing Services in [City]?
H2: What Roofing Services Are Available in [City]?
  H3: Who Provides Roof Repair / Replacement / Emergency / Inspections / Storm Damage / Commercial in [City]?
H2: What Roofing Problems Are Common in [City]?
  H3: Older homes? / Flat roofs? / Local weather? / Storms?
H2: Which Neighborhoods Do We Serve in [City]?
  H3: Do We Serve [Neighborhood 1..4]?
H2: What Roofing Materials Work Best for [City] Properties?
  H3: Asphalt? / Metal? / Flat roof membranes for commercial?
H2: What Should You Know About Roofing Permits in [City]?
H2: What Roofing Projects Have We Completed in [City]?
H2: What Do [City] Customers Say About Our Roofing Work?
H2: What Questions Do [City] Property Owners Ask About Roofing?
H2: Where Else Do We Provide Roofing Services Near [City]?
H2: How Can You Request a Free Roofing Estimate in [City]?
```

### 4.4 Service + Location Page (Roof Repair in [City], etc.)
- Source Context: Local roofing contractor providing [Service] in [City]. Central Entity: [Service] in [City]. Intent: Hire a roofing contractor for [Service] in [City].
- Core Section: directly describes the exact service in the exact city (e.g. Roof Repair Services in [City] → Leak/Shingle/Flashing/Flat Roof/Emergency/Storm Repair + Estimate in [City]).
- Outer Section: Local Service Problems · Local Property Types · Local Weather/Exposure · Local Permit Context · Cost of [Service] in [City] · Process · Local Project Example · Reviews · Related Services in [City] · Nearby Cities · KB Links · Schedule [Service] in [City].
- Question-Based H-Tag Structure:
```
H1: Who Provides [Service] in [City]?
H2: What [Service] Is Available in [City]?  H3: How Do We Handle [Sub-Service 1..3] in [City]?
H2: What [Service] Problems Are Common in [City]?  H3: Property types? / Weather? / Local materials?
H2: How Do We Inspect the Roof Before [Service]?
H2: How Much Does [Service] Cost in [City]?  H3: Factors? / Emergency? / Roof type?
H2: What Is Our Process for [Service] in [City]?  H3: Inspection? / Estimate? / Complete? / Verify?
H2: Why Choose Our Roofing Company for [Service] in [City]?  H3: Licensed/insured? / Warranty? / Local experience?
H2: What Other Roofing Services Are Available in [City]?
H2: Where Else Do We Provide [Service] Near [City]?
H2: What Knowledge Base Articles Explain [Service]?
H2: How Can You Schedule [Service] in [City]?
```

## 5. Mandatory Roofing Knowledge Base — `/roofing-knowledge-base/`

Explains roofing systems, problems, components, materials, repair methods, replacement processes, costs, permits, warranties, local conditions. Hub H-tag structure:
```
H1: What Should Homeowners and Property Owners Know About Roofing?
H2: What Roof Problems Should You Understand?  H3: leaks? / hail damage? / missing shingles? / ponding?
H2: What Roof Components Should You Know?  H3: flashing? / underlayment? / decking? / pipe boot? / ice & water shield?
H2: What Roofing Materials Should You Compare?  H3: asphalt? / metal? / TPO? / EPDM? / PVC?
H2: What Roofing Processes Should You Understand?  H3: inspection? / estimate? / replacement? / emergency tarping?
H2: What Roofing Costs Should You Understand?  H3: repair cost? / replacement cost? / materials affect price?
H2: What Local Roofing Issues Affect Newark and Essex County?  H3: local weather? / storms? / permits?
H2: How Can You Schedule a Professional Roof Inspection?
```

## 6. Mandatory Knowledge Base Article Template
- Source Context: Local roofing contractor explaining a roofing concept. Central Entity: [Educational Roofing Concept]. Intent: Understand [Concept].
- Core Section: Definition · Purpose · Types · Causes · Process · How it affects repair/replacement/inspection.
- Outer Section: Related problems · components · materials · services · local context · cost context · FAQs · internal links · CTA.
- H-Tag Structure:
```
H1: What Is [Concept]?
H2: What Does [Concept] Mean?
H2: Why Does [Concept] Matter?
H2: Where Does [Concept] Appear in a Roof System?
H2: How Does [Concept] Affect Roof Repair or Replacement?
H2: What Problems Are Related to [Concept]?
H2: How Do Roofing Contractors Inspect [Concept]?
H2: How Much Does Work Related to [Concept] Cost?
H2: What Roofing Services Are Related to [Concept]?
H2: What Questions Do Customers Ask About [Concept]?
H2: How Can You Schedule a Roof Inspection?
```

## 7. Mandatory Roofing Glossary — `/roofing-glossary/`
H-tag structure: H1: What Roofing Terms Should Homeowners Know? → H2 groups: Roof Component Terms · Roofing Material Terms · Roofing Process Terms · Roofing Warranty Terms · Roofing Cost Terms.
Terms: Architectural Shingles, Asphalt Shingles, Built-Up Roofing, Decking, Drip Edge, EPDM, Fascia, Flashing, Ice and Water Shield, Modified Bitumen, Pipe Boot, PVC, Ridge Cap, Ridge Vent, Roof Decking, Roof Flashing, Roof Pitch, Roof Square, Roof Valley, Soffit, Synthetic Underlayment, TPO, Underlayment, Valley Flashing, Workmanship Warranty.
Each entry: Definition · Why it matters · Related services · Related problems · Related materials/components · Internal links.

## 8. Mandatory Removal of SEO-Facing Language
Remove/rewrite all public-facing internal-SEO language: "GSC priority pages", "Search Console opportunity routes", "Priority crawl paths", "Content target", "10/10 content target", "Local proof + indexing quality", "Service fit", "Local service priority", "Google and homeowners can understand", "Pages Google is most likely to trust first". Replace with customer-facing headings (Related Roofing Services, Helpful Roofing Resources, Popular Roofing Services in [City], Why Local Roofing Experience Matters, Common Roofing Problems We Fix, Nearby Service Areas, Roofing Services Related to This Topic). No public page mentions Google, GSC, Search Console, indexing quality, content targets, crawl paths, or internal SEO strategy.

## 9. Mandatory Trust and NAP Standardization
Standardize across the whole site: Business name, Legal entity name, Phone, Address, Email, License number, Insurance statement, Workers' comp statement, Review count, Star rating, Years in business, Projects completed, Warranty claims, Certifications, Footer NAP, Header NAP, Contact NAP, About credentials, Schema NAP. Replace missing/inconsistent/placeholder values with canonical values; if unknown use `[CANONICAL VALUE REQUIRED: …]`. Remove placeholder text like `[License #]`, `[Policy Info]`, `0+ Years Experience`, `0.0 Star Rating`. If one license number serves multiple brands, add legal-entity clarification.

## 10. Mandatory Duplicate Section Cleanup
Remove duplicated crawlable sections: repeated process blocks, service descriptions, CTAs, testimonials, city copy, service cards, footer heading content. Keep one clean version. If a section exists twice for desktop/mobile, make only one crawlable.

## 11. Mandatory Service + City Page Classification
Classify every service-location page: Keep Indexed · Improve Before Indexing · Noindex · Consolidate · Remove. High-priority (keep + strengthen): Roofing Contractor in [City], Roof Repair, Roof Replacement, Roof Inspection, Emergency Roof Repair, Storm Damage Roof Repair, Commercial Roofing, Flat Roof Repair, TPO Roofing, EPDM Roofing in [City]. Lower-priority combos stay indexed only with real demand, capability, unique local context, useful content, conversion path, internal links, no city-swapped duplication. Do not allow thin doorway pages to remain indexed. (Reuse `URL-Classification.csv`.)

## 12. Mandatory Internal Linking Model (knowledge graph)
- Roof Repair → What Causes Roof Leaks?, What Is Roof Flashing?, What Is a Pipe Boot?, What Is a Roof Valley?, Emergency Roof Repair, Roof Inspection, Free Roof Inspection, Roof Replacement.
- Roof Replacement → What Happens During Roof Replacement?, What Is Roof Decking?, What Is Roof Underlayment?, What Is Ice and Water Shield?, Asphalt Shingles, Metal Roofing, Roof Replacement Cost, Workmanship Warranty, Free Roofing Estimate.
- Storm Damage → Signs of Hail Damage?, How Does Wind Damage Lift Shingles?, When Is Emergency Tarping Needed?, Should You Call a Roofer After a Storm?, Roof Inspection, Emergency Roof Repair, Storm Damage Roof Repair.
- Commercial Roofing → What Is TPO/EPDM/PVC Roofing?, What Causes Ponding Water?, How Do Commercial Roof Coatings Work?, Commercial Roof Inspection/Repair/Maintenance.
- Location pages → Roof Repair/Replacement/Emergency/Inspection/Storm/Commercial in [City], Nearby City Pages, KB Local Roofing Articles, Free Roofing Estimate.

## 13. Mandatory Schema by page type
- Homepage: RoofingContractor, LocalBusiness, Organization, WebSite, BreadcrumbList.
- Service Page: Service, WebPage, FAQPage (if visible FAQs), BreadcrumbList.
- Location Page: LocalBusiness, Service, Place, WebPage, FAQPage (if visible FAQs), BreadcrumbList.
- Service + Location: Service, LocalBusiness, Place, WebPage, FAQPage (if visible FAQs), BreadcrumbList.
- KB Article: Article, WebPage, FAQPage (if visible FAQs), BreadcrumbList.
- Glossary: DefinedTermSet, DefinedTerm, BreadcrumbList.
- Reviews: Review, AggregateRating — only if ratings are visible, truthful, and verifiable.

## 14. Required Output Format (implementation package)
1. Master Topical Map Implementation · 2. Homepage Implementation · 3. Service Hub Implementation · 4. Service Page Template Implementation · 5. Location Page Template Implementation · 6. Service + Location Page Template Implementation · 7. Knowledge Base Hub Implementation · 8. Knowledge Base Article Template Implementation · 9. Roofing Glossary Implementation · 10. Question-Based H-Tag Rewrite Rules · 11. Core Section and Outer Section Rules · 12. Internal Linking Implementation · 13. Schema Implementation · 14. Trust and NAP Standardization Rules · 15. Duplicate Section Cleanup Rules · 16. Service + City Page Indexing Rules · 17. Required Pages to Create · 18. Required Pages to Rewrite · 19. Required Pages to Noindex or Consolidate · 20. Final Implementation Checklist.

## 15. Required Language Rules
Use implementation language (Implement, Create, Rewrite, Replace, Remove, Consolidate, Noindex, Standardize, Add, Link, Structure, Use). Do not use Consider/Maybe/Could/Might/Recommended/Suggestion/Optional/If you want. Every instruction direct.

## 16. Required Page Creation List
**Commercial Core:** `/`, `/roofing-services/`, `/roof-repair/`, `/roof-replacement/`, `/roof-inspection/`, `/emergency-roof-repair/`, `/storm-damage-roof-repair/`, `/residential-roofing/`, `/commercial-roofing/`, `/flat-roof-systems/`, `/roofing-materials/`, `/service-areas/`, `/contact/`, `/free-roofing-estimate/`.
**Knowledge Base:** `/roofing-knowledge-base/`, `/roofing-knowledge-base/roof-problems/`, `/roofing-knowledge-base/roof-components/`, `/roofing-knowledge-base/roofing-materials/`, `/roofing-knowledge-base/roofing-process/`, `/roofing-knowledge-base/roofing-costs/`, `/roofing-knowledge-base/local-roofing-knowledge/`, `/roofing-glossary/`.
**Roof Problem KB pages:** `/what-causes-roof-leaks/`, `/signs-of-hail-damage-roof/`, `/why-are-shingles-missing/`, `/roof-leak-around-chimney/`, `/roof-leak-around-skylight/`, `/ponding-water-flat-roof/`, `/what-does-granule-loss-mean/`, `/when-is-a-sagging-roof-serious/`.
**Roof Component KB pages:** `/what-is-roof-flashing/`, `/what-is-step-flashing/`, `/what-is-chimney-flashing/`, `/what-is-roof-underlayment/`, `/what-is-ice-and-water-shield/`, `/what-is-roof-decking/`, `/what-is-drip-edge/`, `/what-is-a-pipe-boot/`, `/what-is-a-roof-valley/`, `/what-is-a-ridge-vent/`, `/what-are-soffit-vents/`.
**Roofing Material KB pages:** `/what-are-asphalt-shingles/`, `/what-are-architectural-shingles/`, `/is-metal-roofing-worth-it/`, `/what-is-tpo-roofing/`, `/what-is-epdm-roofing/`, `/what-is-pvc-roofing/`, `/what-is-modified-bitumen-roofing/`, `/what-are-roof-coatings/`, `/best-roofing-material-for-new-jersey-weather/`.
**Roofing Process KB pages:** `/what-happens-during-roof-inspection/`, `/what-is-included-in-roofing-estimate/`, `/what-happens-during-roof-replacement/`, `/what-is-a-roof-tear-off/`, `/how-do-roofers-inspect-decking/`, `/how-do-roofing-contractors-repair-leaks/`, `/how-does-emergency-roof-tarping-work/`, `/what-happens-during-final-roof-walkthrough/`.
**Roofing Cost KB pages:** `/how-much-does-roof-repair-cost/`, `/how-much-does-roof-replacement-cost/`, `/what-affects-new-roof-cost/`, `/how-does-roof-size-affect-cost/`, `/how-does-roof-pitch-affect-cost/`, `/how-do-roofing-materials-affect-price/`, `/how-much-does-emergency-roof-repair-cost/`, `/how-much-does-commercial-roof-repair-cost/`.

## 17. Final Implementation Standard
Semantic structure: Roofing Contractor → Professional Roofing Services → Roof Problems → Roof Components → Roofing Materials → Roofing Process → Roofing Costs → Local Roofing Conditions → Trust and Proof → Roofing Knowledge Base → Free Roofing Estimate.
Every important page answers: Who is speaking? · What is the central entity? · What does the user want? · What is the Core Section? · What is the Outer Section? · What knowledge does this page contribute? · What internal links support the page? · What conversion action should the user take? Implement the full structure exactly.
