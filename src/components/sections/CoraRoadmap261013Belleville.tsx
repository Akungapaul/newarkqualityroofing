// CORA 2026-10-13 phrase-setup roadmap supplemental block for
// /roof-repair-belleville-nj (keyword "roof repair belleville nj").
// This is Belleville's FIRST Cora pass: the page is a plain Oct-4
// combo page, and this component creates its first supplemental
// block. Rendered only for the roof-repair x belleville combo (see
// ComboTemplate). Mirrors the deployed pattern of the six
// 2026-10-12 city passes and the Nutley/Essex Fells/Verona/
// Bloomfield/Caldwell first passes: one expandable block that
// starts collapsed (native <details>, never display:none), the
// page H1 is untouched, and all roadmap mass lands here. Content
// lives in src/data/cora-261013-belleville-content.ts; the title /
// meta / meta-keywords edits live in src/app/[slug]/page.tsx (this
// slug only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-belleville-2026-10-13.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-belleville-2026-10-13.md
// Change list:
// cora-phrase-implementation-belleville-2026-10-13.md
//
// Lines served in this component:
//   - Heading program (clean 14-23, adjusted): 1 new H2 + 1 new H3
//     + 6 new H4 + 2 new H6 (21 -> 31 tags). The H4/H6 family is
//     carried jointly by two independent setters and can only be
//     satisfied by introducing those levels here (the Essex Fells
//     H5 precedent, at larger scale); the H4s carry ~30 entity
//     occurrences, the H6 pair ~8 (the double-listed ENT007/
//     ENT017 pair is satisfied by the same delivery). H4/H6 are
//     styled black, normal-case per house design rules. H1 frozen.
//   - Body phrase family (clean 24-29): the service log's 18
//     entries each carry the exact phrase once; the intro copy
//     carries 'belleville roof repair' x6 and 'repaired' x6; the
//     block's entity-dense copy serves Distinct Entities +4. The
//     same exact-phrase occurrences incidentally cover Exact
//     Matches in HTML's field-max residue and serve Exact Matches
//     in Top 30KB +3 (clean 53, rider) together with the title/
//     meta rewrites in the head.
//   - Span family (clean 30-31, adjusted): the record strip's
//     four spans carry verbatim variation phrases as their ENTIRE
//     text (whole-span line), and the span-contained occurrences
//     serve the span-variations residue.
//   - Images +80 / Images with ALT +63 / ALT Variations +40
//     (clean 32-34, adjusted): 80 pool photographs, all with ALT,
//     in the photo record (3 -> 83 images). Srcs are served
//     /images/... paths only (the PR #24 rule — /public/... 404s).
//   - Outbound singles (clean 35-37): bbb.org domain root
//     (FLAGGED — no BBB profile URL on record, none invented),
//     a genuine search.google.com search link for the business
//     query, and the instagram.com PLATFORM ROOT (FLAGGED
//     placeholder per the Maplewood/Verona precedent; the Phase 8
//     profile-count lines stay pending Paul's verified URLs).
//   - Schema (clean 41-50): the graph below carries a NEW
//     RoofingContractor business node (this page had none) with a
//     ContactPoint carrying the business's REAL published
//     telephone from site config (env-driven canonical phone — the
//     Montclair precedent; nothing invented), contactType,
//     areaServed, and availableLanguage, plus a PostalAddress
//     whose city/state properties ride with the areaServed City /
//     State types; the h-card carries the microdata pairs
//     (roofingcontractor, contactpoint/contacttype, city/state
//     area-served items). NO hasMap — none was roadmapped for
//     Belleville (Overview goal 0). NO AggregateRating — this
//     roadmap has no rating lines and the gate stays off (D-01).
//     Street address carries the config value — EMPTY by D-01.
//   - HTML Comment Variations +3 (clean 51, adjusted from +5;
//     included under Paul's overnight rulebook — the standard
//     gray-zone shape): the two boundary comments rendered via
//     dangerouslySetInnerHTML at the section's head and foot,
//     carrying four verbatim variation phrases in their text.
//   - LSI term coverage (standing practice): the field-notes
//     sentences in the nested block use this run's own LSI term
//     inventory (from its Entities data). The +562/+264 numeric
//     asks are the frozen software constant — not chased.
// NOT served here (see the change list): the 25 verified artifacts
// (email platform-payload counting, the absolute-URL form family,
// the schema credential/identifier/priceCurrency/'result'
// fragments, Entity References and HTML Tags residues noted-not-
// listed), Has JSON-LD (detection discrepancy — the template graph
// is served and unread by Cora; not restructured), JavaScript
// Includes (framework furniture — not implementable honestly),
// the agreed skip set, CSS Includes (Paul's standing skip), the
// H1 pair (flagged-open), the 5 social profile lines (pending
// Paul's verified profile URLs), and the meta-counters.

import { Fragment } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import {
  coraBellevilleBlockIntro,
  coraBellevilleBlockSummary,
  coraBellevilleCommentTexts,
  coraBellevilleFieldNotes,
  coraBellevilleFieldNotesHeading,
  coraBellevilleFieldNotesIntro,
  coraBellevilleGalleryImages,
  coraBellevilleH3,
  coraBellevilleH3Paragraph,
  coraBellevilleH4SetA,
  coraBellevilleH4SetB,
  coraBellevilleLinksIntro,
  coraBellevillePhotoIntro,
  coraBellevilleReferenceLinks,
  coraBellevilleServiceLogEntries,
  coraBellevilleServiceLogIntro,
  coraBellevilleServicesH2,
  coraBellevilleServicesIntro,
  coraBellevilleSpanStrip,
  coraBellevilleSpanStripIntro,
} from '@/data/cora-261013-belleville-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-belleville-nj';

// New block-level graph for this page (clean lines 41-50): the
// business node leads with RoofingContractor (canonical
// most-specific-first order from src/lib/schema.ts; Cora does a
// literal token match on page source). The ContactPoint carries
// the business's real published telephone, wired to the canonical
// env-driven config phone exactly as src/lib/schema.ts emits it —
// in production that renders the published number; nothing is
// invented. The PostalAddress carries the canonical config street
// value — EMPTY by D-01 until the owner supplies a street address
// — with the business's canonical locality Newark, NJ (the
// Maplewood precedent). The city/state family rides on the
// PostalAddress properties and the areaServed City / State types
// (the shapes the setters' graphs carry). NO hasMap — none was
// roadmapped for Belleville. No rating node of any kind.
const bellevilleSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['RoofingContractor', 'LocalBusiness'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      url: pageUrl,
      email: siteConfig.email,
      telephone: siteConfig.phone.tel,
      mainEntityOfPage: { '@id': pageUrl },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone.tel,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Belleville, NJ' },
        { '@type': 'State', name: 'New Jersey' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'GeoShape', postalCode: '07109', addressCountry: 'US' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair Belleville, NJ',
      about: { '@id': `${pageUrl}#localbusiness` },
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Roof Repair in Belleville, NJ',
      serviceType: 'Roof repair',
      provider: { '@id': `${pageUrl}#localbusiness` },
      mainEntityOfPage: { '@id': pageUrl },
      areaServed: { '@type': 'City', name: 'Belleville, NJ' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Roof Repair Services',
          item: 'https://newarkqualityroofing.com/roof-repair-in-newark-nj',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Roof Repair Belleville NJ',
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
const h4Class = 'mt-5 mb-2 font-heading text-lg font-semibold text-slate-900';
const h6Class = 'mt-4 mb-1 font-body text-sm font-semibold text-slate-900';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261013Belleville() {
  return (
    <section
      aria-label="Belleville Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraBellevilleCommentTexts[0]} -->`,
        }}
      />
      <JsonLd data={bellevilleSchemaGraph} />
      <details className="cora-261013-belleville-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraBellevilleBlockSummary}
        </summary>

        <p className={pClass}>{coraBellevilleBlockIntro}</p>

        <h2 className={h2Class}>{coraBellevilleServicesH2}</h2>
        <p className={pClass}>{coraBellevilleServicesIntro}</p>

        <h3 className={h3Class}>{coraBellevilleH3}</h3>
        <p className={pClass}>{coraBellevilleH3Paragraph}</p>

        {coraBellevilleH4SetA.map((item) => (
          <div key={item.h4}>
            <h4 className={h4Class}>{item.h4}</h4>
            <p className={pClass}>{item.p}</p>
            {item.h6 && (
              <div>
                <h6 className={h6Class}>{item.h6.h6}</h6>
                <p className={pClass}>{item.h6.p}</p>
              </div>
            )}
          </div>
        ))}

        {coraBellevilleH4SetB.map((item) => (
          <div key={item.h4}>
            <h4 className={h4Class}>{item.h4}</h4>
            <p className={pClass}>{item.p}</p>
            {item.h6 && (
              <div>
                <h6 className={h6Class}>{item.h6.h6}</h6>
                <p className={pClass}>{item.h6.p}</p>
              </div>
            )}
          </div>
        ))}

        <p className={pClass}>{coraBellevilleServiceLogIntro}</p>
        {coraBellevilleServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <p className={pClass}>
          {coraBellevilleSpanStripIntro}{' '}
          {coraBellevilleSpanStrip.map((item, i) => (
            <Fragment key={item.span}>
              {item.label}: <span>{item.span}</span>
              {i < coraBellevilleSpanStrip.length - 1 ? ' · ' : '.'}{' '}
            </Fragment>
          ))}
        </p>
        <p className={pClass}>{coraBellevillePhotoIntro}</p>
        <div>
          {coraBellevilleGalleryImages.map((image) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width="800"
              height="600"
            />
          ))}
        </div>

        <p className={pClass}>{coraBellevilleLinksIntro}</p>
        <ul className="mb-4 list-disc space-y-1 pl-6 font-body text-base text-slate-700">
          {coraBellevilleReferenceLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <p className={pClass}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span> provides{' '}
            <u>roof repair in Belleville, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Belleville roof repair page</a>.
            Write to{' '}
            <a className="u-email" itemProp="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            , or call the office for an inspection.
          </p>
          <p className={pClass}>
            <span itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
              <meta itemProp="telephone" content={siteConfig.phone.tel} />
              <meta itemProp="contactType" content="customer service" />
              <meta itemProp="areaServed" content="US" />
              <meta itemProp="availableLanguage" content="English" />
              The office takes Belleville service calls on the published line
            </span>{' '}
            — the same number printed on every written estimate — and keeps the record at{' '}
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="streetAddress" content={siteConfig.address.street} />
              <span itemProp="addressLocality">Newark</span>,{' '}
              <span itemProp="addressRegion">NJ</span>,{' '}
              <span itemProp="addressCountry">US</span>
            </span>
            , serving{' '}
            <span itemProp="areaServed" itemScope itemType="https://schema.org/City">
              <span itemProp="name">Belleville</span>
            </span>{' '}
            in the{' '}
            <span itemProp="areaServed" itemScope itemType="https://schema.org/State">
              <span itemProp="name">State of New Jersey</span>
            </span>{' '}
            and the rest of Essex County.
          </p>
          <p className={pClass}>
            Copyright Newark Quality Roofing. This Belleville service record — its
            photographs, service log, and field notes — is the office&rsquo;s working
            record for the page, kept with the written estimates it documents.
          </p>
        </div>

        <details className="cora-261013-belleville-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraBellevilleFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraBellevilleFieldNotesIntro}</p>
          {coraBellevilleFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraBellevilleCommentTexts[1]} -->`,
        }}
      />
    </section>
  );
}
