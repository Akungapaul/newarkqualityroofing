// CORA 2026-10-14 phrase-setup roadmap supplemental block for
// /roof-replacement-in-newark-nj (keyword "roof replacement
// newark nj"). This is the replacement page's FIRST Cora
// pass: the page is the flagship Newark service page
// (rendered by ServiceTemplate), and this component creates
// its first supplemental block. Rendered only for the
// roof-replacement service page (see ServiceTemplate).
// Mirrors the deployed pattern of the fifteen prior first
// passes: one expandable block that starts collapsed
// (native <details>, never display:none), the page H1 is
// untouched, and all roadmap mass lands here. Content
// lives in src/data/cora-261014r-newark-content.ts; the
// title / meta / meta-keywords edits live in
// src/app/[slug]/page.tsx (this service only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-newark-replacement-2026-10-14.md
// Verification (adjusted values are the work order):
// cora-phrase-verification-newark-replacement-2026-10-14.md
// Change list:
// cora-phrase-implementation-newark-replacement-2026-10-14.md
//
// Lines served in this component:
//   - Heading program (adjusted): +25 heading tags
//     (15 -> 40) = 2 new H2 + 23 new H3, serving Heading
//     Tags +22 (adjusted; priced at R4's 37 — the
//     delivered total overshoots the price by construction
//     and is disclosed), H3 Tags +23, Entities in H3 +33,
//     H3 Variations +31, H1-H6 Variations +27, H1-H3
//     Variations +27, the two Leading Variations +5 lines,
//     and the H2/H3 residue singles. H1 frozen.
//   - Questions family (roadmapped in this run): this
//     page has NO FAQ of its own (its <details> are "Read
//     more" expanders), so eight genuine Newark
//     replacement questions are written as real H3 headings
//     with real answers — Questions in Headings +6,
//     Questions in H3 +6, Headings Has Question +1 — plus
//     24 further genuine FAQ entries serving Number of
//     Questions +30 (adjusted) page-wide.
//   - HTML phrase-density riders (adjusted): 'roofing
//     company' +11, 'roofing contractors' +6, 'roofer' +4,
//     'roof replacements' +3, 'new roof' +3, 'roofers' +1
//     — natural copy throughout; delivered counts are
//     reported as measured in the change list.
//   - SERP rider ⚠️: the BreadcrumbList crumb names in
//     the graph below are the Display URL Variations +3
//     lever; Link Text Variations rides the title rewrite
//     in page.tsx; Summary Variations rides the meta
//     refresh.
//   - Images +26 / ALT +22 (listed) / ALT Variations +20
//     (adjusted): 26 pool photographs, all with ALT, each
//     in a genuine <figure> with a plain caption (3 -> 29
//     images). Srcs are served /images/... paths only
//     (the PR #24 rule).
//   - Has Link to www.nj.gov +1: the state-resources
//     reference paragraph below links the State of New
//     Jersey portal, in this page's own permit /
//     registration context (R4's genuine carriage).
//   - Schema (2 lines, ONE build): the graph below carries
//     a NEW Service node with availableLanguage (JSON-LD
//     form, +1) — the ONLY roadmapped schema property.
//     The microdata form (+1) rides the itemscope Service
//     card below. NO areaServed entries or itemProps (the
//     count factor already tracks 320 on this page — a
//     detection discrepancy — and the microdata binary is
//     doorway-carried and artifact-ruled), NO business-
//     type node, NO ImageObject, NO telephone, NO address,
//     NO opening hours, NO map property, and NO rating
//     node of any kind (the roadmapped ratingValue pair
//     is BLOCKED under D-01 — no verified rating exists
//     and none may be invented).
//   - The service card also carries Has Copyright +1 (the
//     business's own notice in word form — the served page
//     carries it in symbol form only).
//   - HTML Comment Variations +3 (gray zone,
//     rulebook-included; adjusted from +11): the two
//     boundary comments rendered via dangerouslySetInnerHTML
//     carry four verbatim variation phrases between them.
//   - LSI term coverage (standing practice): the field
//     notes use this run's topical term inventory. The
//     +562/+264 numeric asks are the frozen software
//     constant — not chased.
//   - NO style-tag program: Style Tags is NOT roadmapped
//     in this report, so no <style> mechanism is built.
// NOT served here (see the change list): the 63 verified
// artifacts (incl. the collapsed sibling mass of Phases 2,
// 7, and 11, the doorway-sole bbb.org and I Tags lines,
// and the Phase 12 schema singles), the 2 detection
// discrepancies (Has JSON-LD; JSON-LD areaServed), the
// agreed skip set, CSS Includes (Paul's standing skip;
// adjusted +7 recorded), the 2 H1 lines (flagged-open),
// the 2 BLOCKED rating lines, the social family
// (Overview-only here; pending Paul's verified profile
// URLs — and NO platform-root placeholder links: no
// social Has-Link line is roadmapped in this report),
// the LSI pair, the 2 meta-counters, and the 2
// not-implementable lines (Dirs in Path — the slug is
// frozen; JavaScript Includes — a platform asset count).
//
// ─── RESIDUAL PASS 261015 (2026-10-15) ───────────────────────────
// The 261015 rerun (M5) re-measured the PRE-PR #36 page
// (its tracked column is stale throughout — see the
// residual measurement). Verified line by line against
// the LIVE page, 89 of its 146 lines were already
// delivered by the build above; the residual clean list
// is SEVEN lines (verification:
// cora-phrase-verification-newark-replacement-2026-10-15.md),
// all served by EXTENDING this block — no second block:
//   - Geo pair (Phase 12, NEW): the Service node in the
//     graph below gains a GeoCircle areaServed whose
//     geoMidpoint is a GeoCoordinates node (JSON-LD form),
//     and the service card gains the itemscope GeoCircle
//     form — both carrying ONLY the flagged map-embed
//     stand-in coordinates (see the data file). NO street
//     address / postalCode is asserted (D-01).
//   - FAQ JLD family (Phase 12, NEW): a FAQPage node in
//     the same graph, built from this block's own FAQ data
//     (the 8 question H3s + 24 entries = 32 Question /
//     Answer pairs, Answer.text serving the text form).
//     The page's genuine FAQ is the content; the site
//     graph's own FAQPage node is an empty shell. The
//     microdata FAQ forms are NOT stamped (verification
//     §7 — the standing restraint).
//   - Twitter / OG descriptions (Phase 8 / 11, NEW): not
//     in this component — served by the [slug] page.tsx
//     override extension (the page's own meta description
//     now also serves as its twitter:description and
//     og:description).
// NOT built in the residual pass: no headings program and
// no meta-description edit (the §6 residues are noted,
// not listed), no image program (delivered at its
// corroborated price), no microdata RoofingContractor
// (its JLD pair is a detection discrepancy — the site
// graph's business node is already typed RoofingContractor),
// no rating (none roadmapped), no social links (BLOCKED
// on Paul's verified profile URLs), no placeholders.

import { JsonLd } from '@/components/seo/JsonLd';
import {
  coraReplNewarkAreaH3,
  coraReplNewarkAreaIntro,
  coraReplNewarkBlockIntro,
  coraReplNewarkBlockSummary,
  coraReplNewarkCommentTexts,
  coraReplNewarkCopyrightLine,
  coraReplNewarkCoverageLine,
  coraReplNewarkFaqEntries,
  coraReplNewarkFieldNotes,
  coraReplNewarkFieldNotesH2,
  coraReplNewarkFieldNotesHeading,
  coraReplNewarkFieldNotesIntro,
  coraReplNewarkGalleryImages,
  coraReplNewarkGeo,
  coraReplNewarkGuideH2,
  coraReplNewarkGuideIntro,
  coraReplNewarkPhotoH3,
  coraReplNewarkPhotoIntro,
  coraReplNewarkQuestions,
  coraReplNewarkQuestionsH3,
  coraReplNewarkSections,
  coraReplNewarkServiceLogEntries,
  coraReplNewarkServiceLogIntro,
  coraReplNewarkStateRefIntro,
} from '@/data/cora-261014r-newark-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-replacement-in-newark-nj';

// New block-level graph for this page (the 2 schema
// lines): a Service node carrying ONLY the roadmapped
// property — availableLanguage (the JSON-LD form of the
// pair). The WebPage / BreadcrumbList / WebSite
// scaffolding follows the prior passes and is not a
// roadmapped-line claim; the BreadcrumbList crumb names
// are the Display URL Variations rider lever. NO
// city-entry areaServed is added: Cora's own count factor
// already tracks 320 areas-served entries on this page
// (the binary factor's 0 is a detection discrepancy,
// ruled in the verification), and the microdata
// areaserved form is doorway-carried and artifact-ruled.
// NO business-type node is built: the RoofingContractor
// pairs are Overview-only or sibling-carried in this run.
// RESIDUAL PASS 261015 amendments: (a) the Service node
// gains the geo pair's GeoCircle areaServed (its
// geoMidpoint is the GeoCoordinates node the pair asks
// for — the FLAGGED map-embed stand-in, no address
// asserted); the city-entry ruling above is unchanged.
// (b) A FAQPage node is added, built from this block's
// own FAQ data (32 Question/Answer pairs). (c) The
// business-type note is superseded by evidence: the site
// graph's business node IS typed RoofingContractor (an
// array-valued @type Cora's parser misses) — the 261015
// JLD RoofingContractor line is a detection discrepancy,
// not a build.
const replNewarkSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Roof Replacement in Newark, NJ',
      serviceType: 'Roof replacement',
      url: pageUrl,
      mainEntityOfPage: { '@id': pageUrl },
      availableLanguage: 'English',
      // RESIDUAL 261015 — the geo pair, JLD form.
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: coraReplNewarkGeo.latitude,
          longitude: coraReplNewarkGeo.longitude,
        },
        geoRadius: coraReplNewarkGeo.radius,
      },
    },
    {
      // RESIDUAL 261015 — the FAQ JLD family (Question /
      // Answer / text): this page's genuine FAQ, marked
      // up. The site graph's own FAQPage node is an empty
      // shell (mainEntity: []).
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: [
        ...coraReplNewarkQuestions.map((q) => ({
          '@type': 'Question',
          name: q.h3,
          acceptedAnswer: { '@type': 'Answer', text: q.p },
        })),
        ...coraReplNewarkFaqEntries.map((entry) => ({
          '@type': 'Question',
          name: entry.q,
          acceptedAnswer: { '@type': 'Answer', text: entry.a },
        })),
      ],
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Replacement Newark, NJ',
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
          name: 'Newark NJ Roof Replacement Services',
          item: 'https://newarkqualityroofing.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Roof Replacement Newark NJ — Roofing Contractors, New Roofs and Full Tear-Offs',
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
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261014rNewark() {
  return (
    <section
      aria-label="Newark Roof Replacement Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraReplNewarkCommentTexts[0]} -->`,
        }}
      />
      <JsonLd data={replNewarkSchemaGraph} />
      <details className="cora-261014r-newark-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraReplNewarkBlockSummary}
        </summary>

        <p className={pClass}>{coraReplNewarkBlockIntro}</p>

        <h2 className={h2Class}>{coraReplNewarkGuideH2}</h2>
        <p className={pClass}>{coraReplNewarkGuideIntro}</p>
        {coraReplNewarkSections.map((s) => (
          <div key={s.h3.slice(0, 32)}>
            <h3 className={h3Class}>{s.h3}</h3>
            <p className={pClass}>{s.p}</p>
          </div>
        ))}

        <p className={pClass}>
          {coraReplNewarkStateRefIntro}
          <a
            className="text-copper underline hover:text-copper-dark"
            href="https://www.nj.gov"
          >
            the State of New Jersey at nj.gov
          </a>
          .
        </p>

        <h3 className={h3Class}>{coraReplNewarkQuestionsH3}</h3>
        {coraReplNewarkQuestions.map((q) => (
          <div key={q.h3.slice(0, 32)}>
            <h3 className={h3Class}>{q.h3}</h3>
            <p className={pClass}>{q.p}</p>
          </div>
        ))}
        {coraReplNewarkFaqEntries.map((entry) => (
          <p key={entry.q.slice(0, 32)} className={pClass}>
            <strong>{entry.q}</strong> {entry.a}
          </p>
        ))}

        <p className={pClass}>{coraReplNewarkServiceLogIntro}</p>
        {coraReplNewarkServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <h3 className={h3Class}>{coraReplNewarkPhotoH3}</h3>
        <p className={pClass}>{coraReplNewarkPhotoIntro}</p>
        <div>
          {coraReplNewarkGalleryImages.map((image) => (
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

        <h3 className={h3Class}>{coraReplNewarkAreaH3}</h3>
        <p className={pClass}>{coraReplNewarkAreaIntro}</p>
        <div className="h-card">
          <p className={pClass}>
            <span className="p-name">Newark Quality Roofing</span> provides{' '}
            <u>roof replacement in Newark, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Newark roof replacement page</a>.
            Call the office on the published line for an inspection.
          </p>
          <p
            className={pClass}
            itemScope
            itemType="https://schema.org/Service"
          >
            The <span itemProp="name">Roof Replacement in Newark, NJ</span> service
            is provided in{' '}
            <span itemProp="availableLanguage">English</span>, and this page is the
            office&rsquo;s home record for the service — the city is where the
            business is based, not one stop on a route.{' '}
            {/* RESIDUAL 261015 — the geo pair, microdata form:
                an itemscope GeoCircle areaServed whose
                geoMidpoint is an itemscope GeoCoordinates,
                inside this Service item. Coordinates are the
                flagged map-embed stand-in (see the data
                file); the visible sentence is the value's
                genuine context. */}
            <span
              itemProp="areaServed"
              itemScope
              itemType="https://schema.org/GeoCircle"
            >
              {coraReplNewarkCoverageLine}
              <meta itemProp="geoRadius" content={coraReplNewarkGeo.radius} />
              <span
                itemProp="geoMidpoint"
                itemScope
                itemType="https://schema.org/GeoCoordinates"
              >
                <meta itemProp="latitude" content={String(coraReplNewarkGeo.latitude)} />
                <meta itemProp="longitude" content={String(coraReplNewarkGeo.longitude)} />
              </span>
            </span>
          </p>
          <p className={pClass}>{coraReplNewarkCopyrightLine}</p>
        </div>

        <h2 className={h2Class}>{coraReplNewarkFieldNotesH2}</h2>
        <details className="cora-261014r-newark-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraReplNewarkFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraReplNewarkFieldNotesIntro}</p>
          {coraReplNewarkFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraReplNewarkCommentTexts[1]} -->`,
        }}
      />
    </section>
  );
}
