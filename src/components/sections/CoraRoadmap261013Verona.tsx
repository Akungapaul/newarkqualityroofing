// CORA 2026-10-13 phrase-setup roadmap supplemental block for
// /roof-repair-verona-nj (keyword "roof repair verona nj").
// This is Verona's FIRST Cora pass: the page is a plain Oct-4 combo
// page, and this component creates its first supplemental block.
// Rendered only for the roof-repair x verona combo (see
// ComboTemplate). Mirrors the deployed pattern of the six 2026-10-12
// city passes and the Nutley/Essex Fells first passes: one
// expandable block that starts collapsed (native <details>, never
// display:none), the page H1 is untouched, and all roadmap mass
// lands here. Content lives in
// src/data/cora-261013-verona-content.ts; the title / meta /
// meta-keywords edits live in src/app/[slug]/page.tsx (this slug
// only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-verona-2026-10-13.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-verona-2026-10-13.md
// Change list:
// cora-phrase-implementation-verona-2026-10-13.md
//
// Lines served in this component:
//   - Heading program (clean 14-18, adjusted): 5 new H2 + 9 new H3
//     below carry the run's variation tokens and entity terms;
//     heading tags 13 -> 27. H1 frozen.
//   - Images +21 / Images with ALT +9 (clean 19/20, adjusted):
//     21 pool photographs, all with ALT, in the photo record.
//   - External Links +5 / DoFollow External +5 / % DoFollow +17
//     (clean 21-23): five genuine external references rendered
//     WITHOUT nofollow (baseline 1 external anchor / 0 dofollow =
//     0.0%; after: 6 anchors / 5 dofollow = 83.3%).
//   - Has Link to www.facebook.com +1 (clean 24): the platform-root
//     placeholder, per the Maplewood TikTok precedent — FLAGGED,
//     not the business's profile (sameAs is empty; no profile URL
//     is ever invented). The Phase 8 social profile lines stay
//     pending Paul's verified URLs.
//   - JSON-LD hasMap +1 / Schema hasmap +1 (clean 27/28): the graph
//     below carries hasMap on a NEW RoofingContractor business node
//     (this page had no LocalBusiness node at all), and the h-card
//     carries the microdata <link itemProp="hasMap"> pair. The maps
//     URL is a Google Maps QUERY URL — no canonical GBP link is on
//     record (D-01); flagged for one-line replacement.
//   - Display URL Variations +1 (clean 8): the BreadcrumbList crumb
//     names below are the page-side lever (SERP-rendered; flagged).
//   - HTML Comment Variations +3 (gray zone, adjusted from +15;
//     included under Paul's overnight rulebook — the standard
//     Roseland/Nutley shape): the two boundary comments rendered
//     via dangerouslySetInnerHTML at the section's head and foot,
//     carrying four verbatim variation phrases in their text.
//   - LSI term coverage (standing practice): the field-notes
//     sentences in the nested block use this run's own LSI term
//     inventory (from its Entities data). The +562/+264 numeric
//     asks are the frozen software constant — not chased.
// NOT served here (see the change list): the 22 verified artifacts,
// Has JSON-LD (detection discrepancy — the template graph is served
// and unread by Cora; not restructured), the Top-100 meta-counter,
// CSS Includes (Paul's standing skip), the agreed skip set,
// Variations in H1 (flagged-open), the 4 social profile lines
// (pending Paul's verified profile URLs), AggregateRating (no
// rating lines in this roadmap; the gate stays off).

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { siteConfig as canonicalConfig } from '@/config/site-config';
import { buildRoofingContractorNodeSchema } from '@/lib/schema';
import {
  coraVeronaBlockIntro,
  coraVeronaBlockSummary,
  coraVeronaCommentTexts,
  coraVeronaDofollowLinks,
  coraVeronaFieldNotes,
  coraVeronaFieldNotesIntro,
  coraVeronaGalleryImages,
  coraVeronaLinksHeading,
  coraVeronaLinksIntro,
  coraVeronaMapsUrl,
  coraVeronaPhotoHeading,
  coraVeronaPhotoIntro,
  coraVeronaSections,
  coraVeronaServiceLogEntries,
  coraVeronaServiceLogHeading,
} from '@/data/cora-261013-verona-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-verona-nj';

// New block-level graph for this page (clean lines 27/28 + the
// standard scaffolding the pattern carries): the business node
// leads with RoofingContractor (canonical most-specific-first
// order from src/lib/schema.ts; Cora does a literal token match on
// page source), telephone is wired to the canonical env-driven
// phone exactly as src/lib/schema.ts emits it, and the
// PostalAddress carries the canonical config street value — EMPTY
// by D-01 until the owner supplies a street address; nothing is
// invented.
//
// Group 2 credited-form fix (2026-10-24, master ledger fix queue):
// the dedicated plain-string RoofingContractor node from
// src/lib/schema.ts joins this graph (array-valued @type reads 0 to
// Cora's parser — Form Library; the array-typed node stays for its
// LocalBusiness literal-match family); legalName from the canonical
// config; scalar availableLanguage 'English' on the business node
// and its ContactPoint (credited shape); the streetAddress key is
// omitted while the canonical street is empty (the forbidden
// empty-string form). The h-card gains the legalName twin and drops
// its empty streetAddress meta the same way.
const veronaSchemaGraph = {
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
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone.tel,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      hasMap: coraVeronaMapsUrl,
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
        { '@type': 'City', name: 'Verona, NJ' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'GeoShape', postalCode: '07044', addressCountry: 'US' },
      ],
    },
    buildRoofingContractorNodeSchema(),
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair Verona, NJ',
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
          item: 'https://newarkqualityroofing.com/roof-repair-newark-nj',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Roof Repair Verona NJ',
          item: pageUrl,
        },
      ],
    },
  ],
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261013Verona() {
  return (
    <section
      aria-label="Verona Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraVeronaCommentTexts[0]} -->`,
        }}
      />
      <JsonLd data={veronaSchemaGraph} />
      <details className="cora-261013-verona-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraVeronaBlockSummary}
        </summary>

        <p className={pClass}>{coraVeronaBlockIntro}</p>

        {coraVeronaSections.map((section) => (
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

        <h2 className={h2Class}>{coraVeronaPhotoHeading}</h2>
        <p className={pClass}>{coraVeronaPhotoIntro}</p>
        <div>
          {coraVeronaGalleryImages.map((image) => (
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

        <h2 className={h2Class}>{coraVeronaLinksHeading}</h2>
        <p className={pClass}>{coraVeronaLinksIntro}</p>
        <ul className="mb-4 list-disc space-y-1 pl-6 font-body text-base text-slate-700">
          {coraVeronaDofollowLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <p className={pClass}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span>
            <meta itemProp="legalName" content={canonicalConfig.legalName} /> provides{' '}
            <u>roof repair in Verona, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Verona roof repair page</a>. The office is on the
            map in the manufacturer references above
            <link itemProp="hasMap" href={coraVeronaMapsUrl} />
            ; write to{' '}
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
            — serving Verona and Essex County.
          </p>
        </div>

        <h2 className={h2Class}>{coraVeronaServiceLogHeading}</h2>
        {coraVeronaServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 24)} className={pClass}>{entry}</p>
        ))}

        <details className="cora-261013-verona-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            Roof Repair Field Notes — Verona, NJ Crew Records
          </summary>
          <p className={pClass}>{coraVeronaFieldNotesIntro}</p>
          {coraVeronaFieldNotes.map((note) => (
            <p key={note.slice(0, 24)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraVeronaCommentTexts[1]} -->`,
        }}
      />
    </section>
  );
}
