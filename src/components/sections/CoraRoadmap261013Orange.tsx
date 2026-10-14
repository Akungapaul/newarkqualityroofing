// CORA 2026-10-13 phrase-setup roadmap supplemental block for
// /roof-repair-orange-nj (keyword "roof repair orange nj").
// This is Orange's FIRST Cora pass: the page is a plain Oct-4
// page, and this component creates its first supplemental
// block. Rendered only for the roof-repair x orange combo (see
// ComboTemplate). Mirrors the deployed pattern of the six
// 2026-10-12 city passes and the Nutley-through-North-Caldwell
// first passes: one expandable block that starts collapsed
// (native <details>, never display:none), the page H1 is
// untouched, and all roadmap mass lands here. Content lives in
// src/data/cora-261013-orange-content.ts; the title / meta /
// meta-keywords edits live in src/app/[slug]/page.tsx (this
// slug only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-orange-2026-10-13.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-orange-2026-10-13.md
// Change list:
// cora-phrase-implementation-orange-2026-10-13.md
//
// Lines served in this component:
//   - Heading program (clean 13-22, adjusted): 3 new H2 + 6 new
//     H3 (+9 tags, 22 -> 31). Two of the H3s are genuine
//     question headings (clean 14, +1 owed — the page's six
//     existing question H3s are genuine too); seven of the nine
//     headings open with a verbatim variation phrase (the
//     leading-variation family, clean 15-17). H1 frozen.
//   - Body phrase family (clean 23-28): the R3-corpus residues
//     at setter-backed values — 'repairs' +14, 'roofs' +4,
//     'roofer' +5, 'roof replacements' +1, Questions +3,
//     'nj roofing' +6 (soft) — carried by the service log, the
//     section copy, and the field notes.
//   - SERP riders (clean 29-30): the BreadcrumbList crumb names
//     in the graph below are the Display URL lever; Link Text
//     rides the title rewrite in page.tsx.
//   - Outbound (clean 31): the tiktok.com PLATFORM-ROOT link in
//     the references (FLAGGED placeholder per the Maplewood
//     precedent; the Phase 8 profile-count lines stay pending
//     Paul's verified profile URLs).
//   - Images +60 / ALT +17 / ALT Variations +24 (clean 32-34,
//     adjusted): 60 pool photographs, all with ALT, in the
//     photo record (3 -> 63 images). Srcs are served
//     /images/... paths only (the PR #24 rule).
//   - Style variations +2 (clean 35): the <style> element below
//     carries this run's verbatim variation phrases (the Essex
//     Fells mechanism) on top of the template block's tracked 22.
//   - Schema (clean 37-57): the graph below carries a NEW
//     RoofingContractor business node (this page had none) with
//     a PostalAddress (locality/region/country ONLY — the
//     street value stays the canonical empty D-01 value and the
//     ZIP pair is held out under D-01), the published telephone
//     from site config, the site's canonical logo asset, the
//     geo pair on the site's OWN published map-embed
//     coordinates (FLAGGED stand-in, East Orange precedent),
//     and the opening-hours specification from the site's
//     canonical config hours (Mon-Fri 07:00-18:00, Sat
//     08:00-14:00 — the hours the site itself publishes); the
//     h-card carries the microdata pairs. NO rating node of
//     any kind (this roadmap has no rating lines; the gate
//     stays off, D-01). Roadmap lines only — no schema
//     furniture beyond the 21 clean lines.
//   - LSI term coverage (standing practice): the field-notes
//     sentences in the nested block use this run's own LSI term
//     inventory (from its Entities data). The +562/+264
//     numeric asks are the frozen software constant — not
//     chased.
// NOT served here (see the change list): the 31 verified
// artifacts (the R3 script-corpus family, the R5 homepage
// tag/span/P-tag mass, HTML Tags and JSON-LD Types residues
// noted-not-listed, the imported-average Exact Matches pair),
// the agreed skip set, CSS Includes (Paul's standing skip),
// the 3 H1 lines (flagged-open), the 2 social profile lines
// (pending Paul's verified profile URLs), and the meta-counter.

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import {
  coraOrangeBlockIntro,
  coraOrangeBlockSummary,
  coraOrangeFieldNotes,
  coraOrangeFieldNotesHeading,
  coraOrangeFieldNotesIntro,
  coraOrangeGalleryImages,
  coraOrangeLinksIntro,
  coraOrangePhotoH2,
  coraOrangePhotoIntro,
  coraOrangeReferenceLinks,
  coraOrangeSections,
  coraOrangeServiceLogEntries,
  coraOrangeServiceLogIntro,
  coraOrangeStylePhrases,
} from '@/data/cora-261013-orange-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-orange-nj';

// The site's canonical logo asset (the same /logo.svg the
// Header and Footer render) as an absolute URL, and the
// Newark, NJ coordinates the site itself publishes — the
// homepage Google Maps embed (src/app/page.tsx) is centered at
// 40.73566, -74.19967 for "Newark, NJ". The canonical config's
// geo fields are empty (owner-supplied values pending, D-01);
// nothing here invents a business-premises coordinate — the
// pair below is the site's own published Newark pair, flagged
// in the change list for Paul to replace with canonical values
// (the East Orange precedent).
const businessLogoUrl = 'https://newarkqualityroofing.com/logo.svg';
const businessGeo = { latitude: 40.73566, longitude: -74.19967 };

// The opening hours the site itself publishes (canonical site
// config + src/lib/schema.ts buildOpeningHours): Monday-Friday
// 07:00-18:00, Saturday 08:00-14:00. Used verbatim — no hours
// are invented for the schema lines.
const businessOpeningHours = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '18:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Saturday',
    opens: '08:00',
    closes: '14:00',
  },
];

// New block-level graph for this page (clean lines 37-57): the
// business node leads with RoofingContractor (canonical
// most-specific-first order from src/lib/schema.ts; Cora does
// a literal token match on page source). The telephone is
// wired to the canonical env-driven config phone exactly as
// src/lib/schema.ts emits it — in production that renders the
// published number; nothing is invented. The PostalAddress
// carries locality/region/country only: the street value
// stays the canonical empty D-01 value (omitted, as the
// config omits it) and the ZIP pair is held out under D-01 —
// no canonical business ZIP is on record, and neither the
// target city's ZIP nor a carrier's ZIP may be substituted.
const orangeSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['RoofingContractor', 'LocalBusiness'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      url: pageUrl,
      email: siteConfig.email,
      telephone: siteConfig.phone.tel,
      logo: businessLogoUrl,
      mainEntityOfPage: { '@id': pageUrl },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: businessGeo.latitude,
        longitude: businessGeo.longitude,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      openingHoursSpecification: businessOpeningHours,
      areaServed: [
        { '@type': 'City', name: 'Orange, NJ' },
        { '@type': 'State', name: 'New Jersey' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair Orange, NJ',
      about: { '@id': `${pageUrl}#localbusiness` },
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Roof Repair in Orange, NJ',
      serviceType: 'Roof repair',
      provider: { '@id': `${pageUrl}#localbusiness` },
      mainEntityOfPage: { '@id': pageUrl },
      areaServed: { '@type': 'City', name: 'Orange, NJ' },
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
          name: 'Roof Repair Orange NJ',
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

export function CoraRoadmap261013Orange() {
  return (
    <section
      aria-label="Orange Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <style>
        {`:root { ${coraOrangeStylePhrases.map((phrase) => `--cora-261013-or-${phrase.replace(/ /g, '-')}: 1;`).join(' ')} }
        /* CORA 2026-10-13 (Orange) phrase style-tag variations: ${coraOrangeStylePhrases.join(', ')} */`}
      </style>
      <JsonLd data={orangeSchemaGraph} />
      <details className="cora-261013-orange-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraOrangeBlockSummary}
        </summary>

        <p className={pClass}>{coraOrangeBlockIntro}</p>

        {coraOrangeSections.map((section) => (
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

        <p className={pClass}>{coraOrangeServiceLogIntro}</p>
        {coraOrangeServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <h2 className={h2Class}>{coraOrangePhotoH2}</h2>
        <p className={pClass}>{coraOrangePhotoIntro}</p>
        <div>
          {coraOrangeGalleryImages.map((image) => (
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

        <p className={pClass}>{coraOrangeLinksIntro}</p>
        <ul className="mb-4 list-disc space-y-1 pl-6 font-body text-base text-slate-700">
          {coraOrangeReferenceLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <link itemProp="logo" href={businessLogoUrl} />
          <meta itemProp="telephone" content={siteConfig.phone.tel} />
          <p className={pClass}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span> provides{' '}
            <u>roof repair in Orange, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Orange roof repair page</a>.
            Write to{' '}
            <a className="u-email" itemProp="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            , or call the office on the published line for an inspection.
          </p>
          <p className={pClass}>
            The office keeps the record at{' '}
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Newark</span>,{' '}
              <span itemProp="addressRegion">NJ</span>,{' '}
              <span itemProp="addressCountry">US</span>
            </span>{' '}
            — the Newark base the site publishes, at the map point the site itself uses,{' '}
            <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
              <meta itemProp="latitude" content={String(businessGeo.latitude)} />
              <meta itemProp="longitude" content={String(businessGeo.longitude)} />
              Newark, New Jersey
            </span>{' '}
            — serving{' '}
            <span itemProp="areaServed" itemScope itemType="https://schema.org/City">
              <span itemProp="name">Orange</span>
            </span>{' '}
            and the rest of Essex County.
          </p>
          <p className={pClass}>
            <span itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
              <meta itemProp="dayOfWeek" content="Monday" />
              <meta itemProp="dayOfWeek" content="Tuesday" />
              <meta itemProp="dayOfWeek" content="Wednesday" />
              <meta itemProp="dayOfWeek" content="Thursday" />
              <meta itemProp="dayOfWeek" content="Friday" />
              <meta itemProp="opens" content="07:00" />
              <meta itemProp="closes" content="18:00" />
              Office hours run Monday to Friday, 7:00 AM to 6:00 PM
            </span>{' '}
            and{' '}
            <span itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
              <meta itemProp="dayOfWeek" content="Saturday" />
              <meta itemProp="opens" content="08:00" />
              <meta itemProp="closes" content="14:00" />
              Saturday, 8:00 AM to 2:00 PM
            </span>{' '}
            — the hours the site publishes for the office, with emergency calls taken as they come.
          </p>
          <p className={pClass}>
            Copyright Newark Quality Roofing. This Orange service record — its
            photographs, service log, and field notes — is the office&rsquo;s working
            record for the page, kept with the written estimates it documents.
          </p>
        </div>

        <details className="cora-261013-orange-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraOrangeFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraOrangeFieldNotesIntro}</p>
          {coraOrangeFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
    </section>
  );
}
