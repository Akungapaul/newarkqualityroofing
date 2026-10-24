// CORA 2026-10-13 phrase-setup roadmap supplemental block for
// /roof-repair-bloomfield-nj (keyword "roof repair bloomfield nj").
// This is Bloomfield's FIRST Cora pass: the page is a plain Oct-4
// combo page, and this component creates its first supplemental
// block. Rendered only for the roof-repair x bloomfield combo (see
// ComboTemplate). Mirrors the deployed pattern of the six 2026-10-12
// city passes and the Nutley/Essex Fells/Verona first passes: one
// expandable block that starts collapsed (native <details>, never
// display:none), the page H1 is untouched, and all roadmap mass
// lands here. Content lives in
// src/data/cora-261013-bloomfield-content.ts; the title / meta /
// meta-keywords edits live in src/app/[slug]/page.tsx (this slug
// only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-bloomfield-2026-10-13.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-bloomfield-2026-10-13.md
// Change list:
// cora-phrase-implementation-bloomfield-2026-10-13.md
//
// Lines served in this component:
//   - Heading program (clean 18-22, adjusted): 6 new H2 + 7 new H3
//     carry the run's variation tokens and entity terms; heading
//     tags 22 -> 35, H3 tags 9 -> 16; four of the seven H3s open
//     with verbatim variation phrases (Leading Variations in H3
//     +4). H1 frozen.
//   - Clean Keyword Density +1 (clean 23) and Exact Matches in Top
//     30KB +3 (clean 28): the service log sits FIRST inside the
//     block and every entry carries the exact phrase once; the
//     title/meta rewrites put the phrase in the head as well.
//   - 'shingle replacement' in HTML +4 (clean 24): the H3, two
//     section paragraphs, a log entry, and a field note carry it.
//   - Blockquote Variations +7 (clean 25): three genuine
//     blockquotes (the crew standards) in the quotes section.
//   - Form Variations +1 / NAME Attribute Variations +1 (clean
//     26/27): one functional Google Maps search form whose name
//     attribute and button text carry the exact phrase family.
//   - Images +41 / Images with ALT +17 / ALT Variations +21
//     (clean 39-41, adjusted): 41 pool photographs, all with ALT,
//     in the photo record (3 -> 44 images).
//   - External Links +23 / DoFollow External +23 / % DoFollow +20
//     (clean 36-38, adjusted) and the seven platform-link singles
//     (clean 29-35): 23 genuine references rendered WITHOUT
//     nofollow (baseline 1 external anchor / 0 dofollow = 0.0%;
//     after: 24 anchors / 23 dofollow = 95.8%). Five of them are
//     PLATFORM-ROOT placeholders (YouTube, LinkedIn, g.page,
//     Instagram, Facebook) — FLAGGED in the data file; no profile
//     URL is ever invented. The Phase 8 social profile lines stay
//     pending Paul's verified URLs.
//   - JSON-LD RoofingContractor +1 / Schema roofingcontractor +1
//     (clean 45/46): the graph below carries a NEW
//     RoofingContractor business node (this page had none), and
//     the h-card carries the microdata pair. NO hasMap — none was
//     roadmapped for Bloomfield. NO AggregateRating — the roadmap's
//     rating cluster is BLOCKED (no verified rating exists; the
//     gate stays off, D-01).
//   - JSON-LD Entity References +4 (clean 47): five explicit @id
//     cross-references inside the graph below.
//   - Has Copyright +1 (clean 48): the record card carries a
//     genuine "Copyright Newark Quality Roofing" line (the page
//     served the © symbol but never the word).
//   - Display URL Variations +1 (clean 11): the BreadcrumbList
//     crumb names below are the page-side lever (SERP-rendered).
//   - HTML Comment Variations +3 (clean 49, adjusted from +8;
//     included under Paul's overnight rulebook — the standard
//     Roseland/Nutley shape): the two boundary comments rendered
//     via dangerouslySetInnerHTML at the section's head and foot,
//     carrying four verbatim variation phrases in their text.
//   - LSI term coverage (standing practice): the field-notes
//     sentences in the nested block use this run's own LSI term
//     inventory (from its Entities data). The +562/+264 numeric
//     asks are the frozen software constant — not chased.
// NOT served here (see the change list): the rating cluster
// (BLOCKED — never invented), the 38 verified artifacts, Has
// JSON-LD (detection discrepancy — the template graph is served
// and unread by Cora; not restructured), Is Wix Website (platform
// fingerprint — not implementable honestly), the agreed skip set,
// CSS Includes (Paul's standing skip), the H1 pair (flagged-open),
// the 6 social profile lines (pending Paul's verified profile
// URLs), and the meta-counters.

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { siteConfig as canonicalConfig } from '@/config/site-config';
import { buildRoofingContractorNodeSchema } from '@/lib/schema';
import {
  coraBloomfieldBlockIntro,
  coraBloomfieldBlockSummary,
  coraBloomfieldCommentTexts,
  coraBloomfieldDensityEntries,
  coraBloomfieldDensityIntro,
  coraBloomfieldFieldNotes,
  coraBloomfieldFieldNotesHeading,
  coraBloomfieldFieldNotesIntro,
  coraBloomfieldFormButton,
  coraBloomfieldFormLabel,
  coraBloomfieldFormName,
  coraBloomfieldFormQuery,
  coraBloomfieldGalleryImages,
  coraBloomfieldLinksHeading,
  coraBloomfieldLinksIntro,
  coraBloomfieldPhotoHeading,
  coraBloomfieldPhotoIntro,
  coraBloomfieldQuotes,
  coraBloomfieldQuotesHeading,
  coraBloomfieldReferenceLinks,
  coraBloomfieldSections,
  coraBloomfieldServiceLogEntries,
  coraBloomfieldServiceLogHeading,
  coraBloomfieldServiceLogIntro,
} from '@/data/cora-261013-bloomfield-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-bloomfield-nj';

// New block-level graph for this page (clean lines 45-47 + the
// Display URL lever): the business node leads with
// RoofingContractor (canonical most-specific-first order from
// src/lib/schema.ts; Cora does a literal token match on page
// source), telephone is wired to the canonical env-driven phone
// exactly as src/lib/schema.ts emits it, and the PostalAddress
// carries the canonical config street value — EMPTY by D-01 until
// the owner supplies a street address; nothing is invented. The
// graph carries five explicit @id cross-references (WebPage.about,
// WebPage.isPartOf, WebPage.breadcrumb, Service.provider,
// Service.mainEntityOfPage / business.mainEntityOfPage) against
// the +4 Entity References ask. No rating node of any kind.
//
// Group 2 credited-form fix (2026-10-24, master ledger fix queue):
// the dedicated plain-string RoofingContractor node from
// src/lib/schema.ts joins this graph (array-valued @type reads 0 to
// Cora's parser — Form Library; the array-typed node stays for its
// LocalBusiness literal-match family); legalName from the canonical
// config (the 261013 legalName pair, never built) with its microdata
// twin; scalar availableLanguage 'English' on the business node and
// its ContactPoint (credited shape); the streetAddress key is
// omitted while the canonical street is empty (the forbidden
// empty-string form). The h-card also gains the Person/jobTitle
// microdata carrier (the Montclair precedent) and drops its empty
// streetAddress meta. The identifier family (propertyID / identifier
// / PropertyValue / value) and the GovernmentOrganization pair stay
// unbuilt — no identifier of record and no government relationship
// exists to carry them honestly (diligence in the Group 2 report).
const bloomfieldSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['RoofingContractor', 'LocalBusiness'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      legalName: canonicalConfig.legalName,
      availableLanguage: 'English',
      url: pageUrl,
      email: siteConfig.email,
      telephone: siteConfig.phone.tel,
      mainEntityOfPage: { '@id': pageUrl },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone.tel,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        ...(siteConfig.address.street
          ? { streetAddress: siteConfig.address.street }
          : {}),
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Bloomfield, NJ' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'GeoShape', postalCode: '07003', addressCountry: 'US' },
      ],
    },
    buildRoofingContractorNodeSchema(),
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair Bloomfield, NJ',
      about: { '@id': `${pageUrl}#localbusiness` },
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Roof Repair in Bloomfield, NJ',
      serviceType: 'Roof repair',
      provider: { '@id': `${pageUrl}#localbusiness` },
      mainEntityOfPage: { '@id': pageUrl },
      areaServed: { '@type': 'City', name: 'Bloomfield, NJ' },
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
          name: 'Roof Repair Bloomfield NJ',
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

export function CoraRoadmap261013Bloomfield() {
  return (
    <section
      aria-label="Bloomfield Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraBloomfieldCommentTexts[0]} -->`,
        }}
      />
      <JsonLd data={bloomfieldSchemaGraph} />
      <details className="cora-261013-bloomfield-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraBloomfieldBlockSummary}
        </summary>

        <p className={pClass}>{coraBloomfieldBlockIntro}</p>

        <h2 className={h2Class}>{coraBloomfieldServiceLogHeading}</h2>
        <p className={pClass}>{coraBloomfieldServiceLogIntro}</p>
        {coraBloomfieldServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}
        <p className={pClass}>{coraBloomfieldDensityIntro}</p>
        {coraBloomfieldDensityEntries.map((entry) => (
          <p key={entry.slice(0, 34)} className={pClass}>{entry}</p>
        ))}

        {coraBloomfieldSections.map((section) => (
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

        <h2 className={h2Class}>{coraBloomfieldQuotesHeading}</h2>
        {coraBloomfieldQuotes.map((quote) => (
          <blockquote
            key={quote.slice(0, 28)}
            className="mb-4 border-l-2 border-copper/40 pl-4 font-body text-base italic leading-relaxed text-slate-700"
          >
            {quote}
          </blockquote>
        ))}

        <h2 className={h2Class}>{coraBloomfieldPhotoHeading}</h2>
        <p className={pClass}>{coraBloomfieldPhotoIntro}</p>
        <div>
          {coraBloomfieldGalleryImages.map((image) => (
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

        <h2 className={h2Class}>{coraBloomfieldLinksHeading}</h2>
        <p className={pClass}>{coraBloomfieldLinksIntro}</p>
        <ul className="mb-4 list-disc space-y-1 pl-6 font-body text-base text-slate-700">
          {coraBloomfieldReferenceLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <form
          action="https://www.google.com/maps/search/"
          method="get"
          name={coraBloomfieldFormName}
          className="mb-4 font-body text-base text-slate-700"
        >
          <label className="block">
            {coraBloomfieldFormLabel}{' '}
            <input
              type="text"
              name="q"
              defaultValue={coraBloomfieldFormQuery}
              className="mt-2 block w-full max-w-md border border-slate-300 px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="mt-3 border border-copper/40 px-4 py-2 font-semibold text-forest transition-colors hover:text-copper"
          >
            {coraBloomfieldFormButton}
          </button>
        </form>

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <p className={pClass}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span>
            <meta itemProp="legalName" content={canonicalConfig.legalName} />
            <span itemProp="employee" itemScope itemType="https://schema.org/Person">
              <meta itemProp="jobTitle" content="Roofing Contractor" />
            </span> provides{' '}
            <u>roof repair in Bloomfield, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Bloomfield roof repair page</a>.
            Write to{' '}
            <a className="u-email" itemProp="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            , or call the office for an inspection.
          </p>
          <p className={pClass}>
            The record is kept by Newark Quality Roofing,{' '}
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              {siteConfig.address.street ? (
                <meta itemProp="streetAddress" content={siteConfig.address.street} />
              ) : null}
              <span itemProp="addressLocality">Newark</span>,{' '}
              <span itemProp="addressRegion">NJ</span>,{' '}
              <span itemProp="addressCountry">US</span>
            </span>{' '}
            — serving Bloomfield and Essex County.
          </p>
          <p className={pClass}>
            Copyright Newark Quality Roofing. This Bloomfield service record — its
            photographs, service log, and field notes — is the office&rsquo;s working
            record for the page, kept with the written estimates it documents.
          </p>
        </div>

        <details className="cora-261013-bloomfield-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraBloomfieldFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraBloomfieldFieldNotesIntro}</p>
          {coraBloomfieldFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraBloomfieldCommentTexts[1]} -->`,
        }}
      />
    </section>
  );
}
