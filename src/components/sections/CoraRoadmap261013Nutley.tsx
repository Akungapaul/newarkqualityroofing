// CORA 2026-10-13 phrase-setup roadmap supplemental block for
// /roof-repair-nutley-nj (keyword "roof repair nutley nj").
// This is Nutley's FIRST Cora pass: the page is a plain Oct-4 combo
// page, and this component creates its first supplemental block.
// Rendered only for the roof-repair x nutley combo (see
// ComboTemplate). Mirrors the deployed pattern of the six 2026-10-12
// city passes: one expandable block that starts collapsed (native
// <details>, never display:none), the page H1 is untouched, and all
// roadmap mass lands here. Content lives in
// src/data/cora-261013-nutley-content.ts; the title / meta /
// meta-keywords edits live in src/app/[slug]/page.tsx (this slug
// only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-nutley-2026-10-13.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-nutley-2026-10-13.md
// Change list:
// cora-phrase-implementation-nutley-2026-10-13.md
//
// Lines served in this component:
//   - Heading program (clean 1-8, adjusted): 6 new H2 + 24 new H3
//     below carry the run's variation tokens and entity terms;
//     heading tags 13 -> 43. H1 frozen — the H1/H2 line's mass is
//     delivered in H2s and flagged in the change list.
//   - P Tags +8 (clean 12): every heading below is followed by a
//     real paragraph; the block adds 90+ paragraphs in total.
//   - Images +18 / Images with ALT +9 (clean 17/18, adjusted):
//     18 pool photographs, all with ALT, in the photo record.
//   - gaf.com link +1 and DoFollow External % +13 (clean 15/16):
//     four genuine external references rendered WITHOUT nofollow
//     (baseline 1 external anchor / 0 dofollow = 0.0%; after:
//     5 anchors / 4 dofollow = 80.0%).
//   - Exact phrase 'roof repair nutley nj' +6 (clean 11): the six
//     service-log entries, one occurrence each.
//   - JSON-LD hasMap +1 / Schema hasmap +1 (clean 21/22): the graph
//     below carries hasMap on a NEW RoofingContractor business node
//     (this page had no LocalBusiness node at all), and the h-card
//     carries the microdata <link itemProp="hasMap"> pair. The maps
//     URL is a Google Maps QUERY URL — no canonical GBP link is on
//     record (D-01); flagged for one-line replacement.
//   - HTML Comment Variations +3 (Paul-approved gray zone,
//     adjusted from +10): the two boundary comments rendered via
//     dangerouslySetInnerHTML at the section's head and foot,
//     carrying four verbatim variation phrases in their text.
//   - LSI term coverage (standing practice): the field-notes
//     sentences in the nested block use this run's own LSI term
//     inventory (from its Sentences/Entities data). The +562/+264
//     numeric asks are the frozen software constant — not chased.
// NOT served here (see the change list): the 12 verified artifacts,
// Has JSON-LD (detection discrepancy — the template graph is served
// and unread by Cora; not restructured), the meta-counters, the
// SERP-structural pair, CSS Includes (Paul's standing skip), the
// agreed skip set, Variations in H1 (flagged-open), the 4 social
// lines (pending Paul's verified profile URLs), AggregateRating
// (no rating lines in this roadmap; the gate stays off).

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import {
  coraNutleyBlockIntro,
  coraNutleyBlockSummary,
  coraNutleyCommentTexts,
  coraNutleyDofollowLinks,
  coraNutleyFieldNotes,
  coraNutleyFieldNotesIntro,
  coraNutleyGalleryImages,
  coraNutleyLinksHeading,
  coraNutleyLinksIntro,
  coraNutleyMapsUrl,
  coraNutleyPhotoHeading,
  coraNutleyPhotoIntro,
  coraNutleySections,
  coraNutleyServiceLogEntries,
  coraNutleyServiceLogHeading,
} from '@/data/cora-261013-nutley-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-nutley-nj';

// New block-level graph for this page (clean lines 21/22 + the
// standard scaffolding the six-city pattern carries): the business
// node leads with RoofingContractor (canonical most-specific-first
// order from src/lib/schema.ts; Cora does a literal token match on
// page source), telephone is wired to the canonical env-driven
// phone exactly as src/lib/schema.ts emits it, and the
// PostalAddress carries the canonical config street value — EMPTY
// by D-01 until the owner supplies a street address; nothing is
// invented. This roadmap asks for no address/geo lines beyond
// hasMap, so none are added beyond the pattern's scaffolding.
const nutleySchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['RoofingContractor', 'LocalBusiness'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      url: pageUrl,
      email: siteConfig.email,
      telephone: siteConfig.phone.tel,
      hasMap: coraNutleyMapsUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Nutley, NJ' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'GeoShape', postalCode: '07110', addressCountry: 'US' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair Nutley, NJ',
      potentialAction: {
        '@type': 'ReadAction',
        target: pageUrl,
      },
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
          name: 'Roof Repair Nutley NJ',
          item: pageUrl,
        },
      ],
    },
  ],
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261013Nutley() {
  return (
    <section
      aria-label="Nutley Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraNutleyCommentTexts[0]} -->`,
        }}
      />
      <JsonLd data={nutleySchemaGraph} />
      <details className="cora-261013-nutley-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraNutleyBlockSummary}
        </summary>

        <p className={pClass}>{coraNutleyBlockIntro}</p>

        {coraNutleySections.map((section) => (
          <div key={section.h2}>
            <h2 className={h2Class}>{section.h2}</h2>
            <p className={pClass}>{section.intro}</p>
            {section.subs.map((sub) => (
              <div key={sub.h3}>
                <h3 className={h3Class}>{sub.h3}</h3>
                <p className={pClass}>{sub.p}</p>
              </div>
            ))}
          </div>
        ))}

        <h2 className={h2Class}>{coraNutleyPhotoHeading}</h2>
        <p className={pClass}>{coraNutleyPhotoIntro}</p>
        <div>
          {coraNutleyGalleryImages.map((image) => (
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

        <h2 className={h2Class}>{coraNutleyLinksHeading}</h2>
        <p className={pClass}>{coraNutleyLinksIntro}</p>
        <ul className="mb-4 list-disc space-y-1 pl-6 font-body text-base text-slate-700">
          {coraNutleyDofollowLinks.map((link) => (
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
            <u>roof repair in Nutley, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Nutley roof repair page</a>. The office is on the
            map in the manufacturer references above
            <link itemProp="hasMap" href={coraNutleyMapsUrl} />
            ; write to{' '}
            <a className="u-email" itemProp="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            , or call the office for an inspection.
          </p>
          <p className={pClass}>
            The record is kept by Newark Quality Roofing,{' '}
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="streetAddress" content={siteConfig.address.street} />
              <span itemProp="addressLocality">Newark</span>,{' '}
              <span itemProp="addressRegion">NJ</span>,{' '}
              <span itemProp="addressCountry">US</span>
            </span>{' '}
            — serving Nutley and Essex County.
          </p>
        </div>

        <h2 className={h2Class}>{coraNutleyServiceLogHeading}</h2>
        {coraNutleyServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 24)} className={pClass}>{entry}</p>
        ))}

        <details className="cora-261013-nutley-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            Roof Repair Field Notes — Nutley, NJ Crew Records
          </summary>
          <p className={pClass}>{coraNutleyFieldNotesIntro}</p>
          {coraNutleyFieldNotes.map((note) => (
            <p key={note.slice(0, 24)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraNutleyCommentTexts[1]} -->`,
        }}
      />
    </section>
  );
}
