// CORA 2026-10-14 phrase-setup roadmap supplemental block for
// /roof-replacement-south-orange-nj (keyword "roof replacement
// south orange nj"). This is the replacement page's FIRST Cora
// pass: the page is a rich Oct-4 combo page, and this component
// creates its first supplemental block. Rendered only for the
// roof-replacement x south-orange combo (see ComboTemplate).
// Mirrors the deployed pattern of the fourteen prior first
// passes: one expandable block that starts collapsed (native
// <details>, never display:none), the page H1 is untouched, and
// all roadmap mass lands here. Content lives in
// src/data/cora-261014r-south-orange-content.ts; the title /
// meta / meta-keywords edits live in src/app/[slug]/page.tsx
// (this slug only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-south-orange-replacement-2026-10-14.md
// Verification (adjusted values are the work order):
// cora-phrase-verification-south-orange-replacement-2026-10-14.md
// Change list:
// cora-phrase-implementation-south-orange-replacement-2026-10-14.md
//
// Lines served in this component:
//   - Heading program (adjusted): exactly +30 heading tags
//     (13 -> 43) = 2 new H2 + 25 new H3 + 3 new H4, serving
//     Heading Tags +30, Entities in H3 +23, H3 Variations +20,
//     H1-H6 Variations +13, H1-H3 Variations +13, H2 Variations
//     +6, Entities in H2 +7, H1-and-H2 Variations +7, the two
//     Leading Variations +2 lines, the H4 family (+3 tags /
//     +2 / +2 / +1 / +1), and the four H2/H3 phrase singles.
//     H1 frozen.
//   - Questions family (roadmapped in this run): the page's
//     OWN six FAQ questions surfaced verbatim as real H3
//     headings with real answers — Questions in Headings +6,
//     Questions in H3 +6, Headings Has Question +1. The page's
//     FAQ accordion is untouched.
//   - P Tags +8 (adjusted): the block's real paragraphs
//     deliver it by construction; the delivered count is
//     reported as measured in the change list.
//   - Phrase singles in the block's sentences: 'repairs' in
//     the HTML Tag +14 (adjusted) and 'roofer' in the HTML
//     Tag +1 (adjusted residue) — natural copy throughout.
//   - Sentence Variations +40 (adjusted): rides the block's
//     variation-dense sentences; reported as measured.
//   - SERP rider ⚠️: the BreadcrumbList crumb names in the
//     graph below are the Display URL Variations +1 lever;
//     Link Text Variations rides the title rewrite in
//     page.tsx; Summary Variations rides the meta refresh.
//   - Images +16 / ALT +13 (adjusted) / ALT Variations +10
//     (adjusted): 16 pool photographs, all with ALT, each in
//     a genuine <figure> with a plain caption (12 -> 28
//     images). Srcs are served /images/... paths only (the
//     PR #24 rule).
//   - Style variations +29 (adjusted from +31; two genuine
//     setters at 31/29 — the batch's strongest style shape):
//     the <style> element below carries this run's verbatim
//     variation phrases (the Essex Fells mechanism); our page
//     tracked 0.
//   - Schema (3 lines, ONE build): the graph below carries a
//     NEW Service node (this page's block had none of its own)
//     with availableLanguage (JSON-LD form, +1) and the
//     areaServed entries at the adjusted count — the
//     business's REAL service area: 21 City nodes (the cities
//     in src/data/cities.ts) + Essex County + New Jersey = 23.
//     The microdata form of availableLanguage (+1) rides the
//     itemscope Service card below. ONLY the roadmapped
//     properties: NO business-type node, NO telephone node,
//     NO address node, NO contact-point node, NO opening
//     hours, NO map property, and NO rating node of any kind
//     (the rating family is Overview-only in this run and
//     BLOCKED under D-01 regardless — no verified rating
//     exists and none may be invented). South Orange is
//     asserted only as one of the areaServed cities — never
//     as the business's location.
//   - The service-area card also carries Has Copyright +1
//     (the business's own notice in word form — the served
//     page carries it in symbol form only) and Has
//     MicroFormats +1 (the genuine h-card: p-name + u-url).
//   - HTML Comment Variations +3 (gray zone,
//     rulebook-included; adjusted from +12): the two boundary
//     comments rendered via dangerouslySetInnerHTML carry
//     four verbatim variation phrases between them.
//   - LSI term coverage (standing practice): the field-notes
//     sentences in the nested block use this page's topical
//     term inventory. The +562/+264 numeric asks are the
//     frozen software constant — not chased.
// NOT served here (see the change list): the 10 verified
// artifacts at adjusted 0 (incl. Class Attributes as asked,
// the Exact Matches pair, Distinct Entities, Summary Length
// as a page target, the DoFollow percentage as a standalone
// ask, HTML Tags, the HTML Comments count, Rel Author Links,
// the H4-H6 leading-variation fraction), Has JSON-LD
// (detection discrepancy), the agreed skip set, CSS Includes
// (Paul's standing skip; adjusted ≈ +22 recorded), the 3 H1
// lines (flagged-open), the 4 social profile-count lines
// (pending Paul's verified profile URLs — and NO platform-
// root placeholder links: no Has-Link line is roadmapped in
// this report), the LSI pair, the 3 meta-counters, and the
// not-implementable Meta Generator Tags line (another site's
// platform fingerprint). NO outbound-link program: this
// roadmap roadmaps no Has-Link single, so none is pulled in.

import { JsonLd } from '@/components/seo/JsonLd';
import {
  coraReplSouthOrangeAreaH3,
  coraReplSouthOrangeAreaIntro,
  coraReplSouthOrangeAreaServedCities,
  coraReplSouthOrangeBlockIntro,
  coraReplSouthOrangeBlockSummary,
  coraReplSouthOrangeCommentTexts,
  coraReplSouthOrangeCopyrightLine,
  coraReplSouthOrangeFieldNotes,
  coraReplSouthOrangeFieldNotesH2,
  coraReplSouthOrangeFieldNotesHeading,
  coraReplSouthOrangeFieldNotesIntro,
  coraReplSouthOrangeGalleryImages,
  coraReplSouthOrangeGuideH2,
  coraReplSouthOrangeGuideIntro,
  coraReplSouthOrangePhotoH3,
  coraReplSouthOrangePhotoIntro,
  coraReplSouthOrangeQuestions,
  coraReplSouthOrangeQuestionsH3,
  coraReplSouthOrangeSections,
  coraReplSouthOrangeServiceLogEntries,
  coraReplSouthOrangeServiceLogIntro,
  coraReplSouthOrangeStylePhrases,
} from '@/data/cora-261014r-south-orange-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-replacement-south-orange-nj';

// New block-level graph for this page (the 3 schema lines):
// a Service node carrying ONLY the roadmapped properties —
// availableLanguage (the JSON-LD form of the pair) and the
// areaServed entries at the adjusted real-service-area
// count (21 City nodes + Essex County + New Jersey = 23).
// The WebPage / BreadcrumbList / WebSite scaffolding follows
// the prior passes and is not a roadmapped-line claim; the
// BreadcrumbList crumb names are the Display URL Variations
// rider lever. NO business-type node is built: the
// RoofingContractor / Organization pairs are Overview-only
// in this run, and roadmap-lines-only discipline builds
// nothing for them.
const replSouthOrangeSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Roof Replacement in South Orange, NJ',
      serviceType: 'Roof replacement',
      url: pageUrl,
      mainEntityOfPage: { '@id': pageUrl },
      availableLanguage: 'English',
      areaServed: [
        ...coraReplSouthOrangeAreaServedCities.map((city) => ({
          '@type': 'City',
          name: `${city}, NJ`,
        })),
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'State', name: 'New Jersey' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Replacement South Orange, NJ',
      about: { '@id': `${pageUrl}#service` },
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Roof Replacement Services',
          item: 'https://newarkqualityroofing.com/roof-replacement-in-newark-nj',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Roof Replacement South Orange NJ',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://newarkqualityroofing.com/#website',
      url: 'https://newarkqualityroofing.com',
      name: 'Newark Quality Roofing',
    },
  ],
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const h4Class = 'mt-5 mb-2 font-heading text-lg font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261014rSouthOrange() {
  return (
    <section
      aria-label="South Orange Roof Replacement Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraReplSouthOrangeCommentTexts[0]} -->`,
        }}
      />
      <style>
        {`:root { ${coraReplSouthOrangeStylePhrases.map((phrase) => `--cora-261014r-so-${phrase.replace(/ /g, '-')}: 1;`).join(' ')} }
        /* CORA 2026-10-14 (South Orange replacement) phrase style-tag variations: ${coraReplSouthOrangeStylePhrases.join(', ')} */`}
      </style>
      <JsonLd data={replSouthOrangeSchemaGraph} />
      <details className="cora-261014r-south-orange-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraReplSouthOrangeBlockSummary}
        </summary>

        <p className={pClass}>{coraReplSouthOrangeBlockIntro}</p>

        <h2 className={h2Class}>{coraReplSouthOrangeGuideH2}</h2>
        <p className={pClass}>{coraReplSouthOrangeGuideIntro}</p>
        {coraReplSouthOrangeSections.map((s) => (
          <div key={s.h3.slice(0, 32)}>
            <h3 className={h3Class}>{s.h3}</h3>
            <p className={pClass}>{s.p}</p>
            {s.h4 && <h4 className={h4Class}>{s.h4}</h4>}
            {s.h4p && <p className={pClass}>{s.h4p}</p>}
          </div>
        ))}

        <h3 className={h3Class}>{coraReplSouthOrangeQuestionsH3}</h3>
        {coraReplSouthOrangeQuestions.map((q) => (
          <div key={q.h3.slice(0, 32)}>
            <h3 className={h3Class}>{q.h3}</h3>
            <p className={pClass}>{q.p}</p>
          </div>
        ))}

        <p className={pClass}>{coraReplSouthOrangeServiceLogIntro}</p>
        {coraReplSouthOrangeServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <h3 className={h3Class}>{coraReplSouthOrangePhotoH3}</h3>
        <p className={pClass}>{coraReplSouthOrangePhotoIntro}</p>
        <div>
          {coraReplSouthOrangeGalleryImages.map((image) => (
            <figure key={image.src} className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width="800"
                height="600"
              />
              <figcaption className="mt-2 font-body text-sm text-slate-600">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <h3 className={h3Class}>{coraReplSouthOrangeAreaH3}</h3>
        <p className={pClass}>{coraReplSouthOrangeAreaIntro}</p>
        <div className="h-card">
          <p className={pClass}>
            <span className="p-name">Newark Quality Roofing</span> provides{' '}
            <u>roof replacement in South Orange, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the South Orange roof replacement page</a>.
            Call the office on the published line for an inspection.
          </p>
          <p
            className={pClass}
            itemScope
            itemType="https://schema.org/Service"
          >
            The <span itemProp="name">Roof Replacement in South Orange, NJ</span> service
            is provided in{' '}
            <span itemProp="availableLanguage">English</span>, and its service area
            includes{' '}
            <span itemProp="areaServed" itemScope itemType="https://schema.org/City">
              <span itemProp="name">South Orange</span>
            </span>{' '}
            and the rest of the towns named in this record — the village is a service
            area on this page, not the office address.
          </p>
          <p className={pClass}>{coraReplSouthOrangeCopyrightLine}</p>
        </div>

        <h2 className={h2Class}>{coraReplSouthOrangeFieldNotesH2}</h2>
        <details className="cora-261014r-south-orange-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraReplSouthOrangeFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraReplSouthOrangeFieldNotesIntro}</p>
          {coraReplSouthOrangeFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraReplSouthOrangeCommentTexts[1]} -->`,
        }}
      />
    </section>
  );
}
