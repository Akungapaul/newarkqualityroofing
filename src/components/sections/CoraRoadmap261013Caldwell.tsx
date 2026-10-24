// CORA 2026-10-13 phrase-setup roadmap supplemental block for
// /roof-repair-caldwell-nj (keyword "roof repair caldwell nj").
// This is Caldwell's FIRST Cora pass: the page is a plain Oct-4
// combo page, and this component creates its first supplemental
// block. Rendered only for the roof-repair x caldwell combo (see
// ComboTemplate). Mirrors the deployed pattern of the six
// 2026-10-12 city passes and the Nutley/Essex Fells/Verona/
// Bloomfield first passes: one expandable block that starts
// collapsed (native <details>, never display:none), the page H1
// is untouched, and all roadmap mass lands here. Content lives in
// src/data/cora-261013-caldwell-content.ts; the title / meta /
// meta-keywords edits live in src/app/[slug]/page.tsx (this slug
// only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-caldwell-2026-10-13.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-caldwell-2026-10-13.md
// Change list:
// cora-phrase-implementation-caldwell-2026-10-13.md
//
// Lines served in this component:
//   - Heading program (clean 12-18, adjusted): 7 new H2 + 15 new
//     H3 carry the run's variation tokens and entity terms;
//     heading tags 13 -> 35. Three headings open with verbatim
//     variation phrases (Leading Variations +3/+3). H1 frozen.
//   - Body phrase singles (clean 19-21): 'caldwells' x3 (the
//     local plural, bare token), 'roofing caldwell nj' x4, and
//     'caldwell nj' +8 (adjusted) delivered by the exact-phrase
//     log entries, no-comma headings, blockquotes, and ALTs.
//   - P Tags +4 (clean 22) and Distinct Entities +10 (clean 23)
//     ride on the same block copy.
//   - Style Tags +24 (clean 24, adjusted from +863): the <style>
//     element below carries 24 verbatim variation phrases as
//     custom-property names plus a listing comment (the Essex
//     Fells mechanism). Cora's style crediting is unproven; the
//     rerun arbitrates.
//   - Blockquote Variations +5 (clean 25): three genuine
//     blockquotes (the crew standards) in the quotes section.
//   - Form Variations +2 (clean 26): one functional Google Maps
//     search form whose name attribute, label, and button text
//     carry the exact-phrase family (the Bloomfield mechanism).
//   - Images +32 / Images with ALT +19 / ALT Variations +10
//     (clean 28-30, adjusted): 32 pool photographs, all with
//     ALT, in the photo record (12 -> 44 images). Gallery srcs
//     use the served /images/heroes/ path (see the data file's
//     path note — the /public/... form 404s live).
//   - Figcaption Variations +1 (clean 27): the first gallery
//     photograph is wrapped in a <figure> with a genuine
//     <figcaption> carrying one variation phrase (the East
//     Orange figure treatment); the other 31 render plain.
//   - Has Link to www.google.com +1 (clean 31): one genuine
//     directions anchor to Google Maps in the record section.
//     This roadmap roadmaps NO other outbound line — no
//     external-link set is added.
//   - Schema image pair (clean 33/34): the graph below carries
//     an `image` property (the page's genuine Caldwell hero, as
//     an ImageObject) on a WebPage node, and the section carries
//     the microdata <meta itemProp="image"> plus itemProp on the
//     figure's photograph. ROADMAP LINES ONLY: no
//     RoofingContractor/LocalBusiness node and no hasMap —
//     neither is roadmapped for Caldwell, and the verification
//     forbids adding unroadmapped schema.
//   - Display URL Variations +1 (clean 6): the BreadcrumbList
//     crumb names in the graph are the page-side lever
//     (SERP-rendered; flagged).
//   - LSI term coverage (standing practice): the field-notes
//     sentences in the nested block use this run's own LSI term
//     inventory (from its Entities data). The +562/+264 numeric
//     asks are the frozen software constant — not chased.
// NOT served here (see the change list): the rating cluster
// (PATTERN-shaped but BLOCKED — no verified rating exists and
// none is ever invented, D-01), the 25 verified artifacts, the
// 16 schema fragment lines (identifier/opening-hours/person/
// microdata singles — other pages' graph vocabulary), Has
// JSON-LD (detection discrepancy — the template graph is served
// and unread by Cora; not restructured), the megamediamgmt.com
// link (a single-carrier agency footer credit — not
// implementable honestly), the agreed skip set, Variations in
// H1 (flagged-open), the 3 social profile lines (pending Paul's
// verified profile URLs), and the meta-counters. No HTML
// Comment line exists in this roadmap, so no boundary comments
// are rendered.

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { siteConfig as canonicalConfig } from '@/config/site-config';
import { buildRoofingContractorNodeSchema } from '@/lib/schema';
import {
  coraCaldwellBlockIntro,
  coraCaldwellBlockSummary,
  coraCaldwellDirectionsLabel,
  coraCaldwellFieldNotes,
  coraCaldwellFieldNotesHeading,
  coraCaldwellFieldNotesIntro,
  coraCaldwellFigureCaption,
  coraCaldwellFormButton,
  coraCaldwellFormLabel,
  coraCaldwellFormName,
  coraCaldwellFormQuery,
  coraCaldwellGalleryImages,
  coraCaldwellMapsUrl,
  coraCaldwellPhotoHeading,
  coraCaldwellPhotoIntro,
  coraCaldwellQuotes,
  coraCaldwellQuotesHeading,
  coraCaldwellRecordHeading,
  coraCaldwellRecordIntro,
  coraCaldwellSchemaImageUrl,
  coraCaldwellSections,
  coraCaldwellServiceLogEntries,
  coraCaldwellServiceLogHeading,
  coraCaldwellServiceLogIntro,
  coraCaldwellStylePhrases,
} from '@/data/cora-261013-caldwell-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-caldwell-nj';

// Minimal block-level graph for this page (clean lines 33 + 6
// ONLY): a WebPage node carrying the page's genuine image, and
// the BreadcrumbList whose crumb names are the Display URL
// lever. Deliberately NO business node and NO hasMap — this
// roadmap roadmaps neither (see the header's discipline note).
const caldwellSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    buildRoofingContractorNodeSchema(),
    {
      // Group 2 (2026-10-24): the 261013 roadmap's hours +
      // Person family (OpeningHoursSpecification / opens /
      // closes / Person) — a business node carrying ONLY the
      // hours the site itself publishes (canonical config:
      // Mon-Fri 07:00-18:00, Sat 08:00-14:00) and an employee
      // Person with jobTitle only, plus the credited-form
      // package (legalName, scalar availableLanguage,
      // ContactPoint). The pass's no-business-node discipline
      // predates the master-ledger remediation; the roadmap
      // DOES roadmap these lines.
      '@type': ['RoofingContractor', 'LocalBusiness'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      legalName: canonicalConfig.legalName,
      availableLanguage: 'English',
      url: pageUrl,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone.tel,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      openingHoursSpecification: [
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
      ],
      employee: {
        '@type': 'Person',
        jobTitle: 'Roofing Contractor',
        worksFor: { '@type': 'Organization', name: 'Newark Quality Roofing' },
      },
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair Caldwell, NJ',
      // Group 2 (2026-10-24): the roadmap's Microdata
      // thumbnailUrl line's JSON-LD carrier — the page's
      // genuine schema image, the same asset the image
      // property serves.
      thumbnailUrl: coraCaldwellSchemaImageUrl,
      image: {
        '@type': 'ImageObject',
        contentUrl: coraCaldwellSchemaImageUrl,
        caption: 'Roof repair in Caldwell, NJ — Newark Quality Roofing',
      },
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
          name: 'Roof Repair Caldwell NJ',
          item: pageUrl,
        },
      ],
    },
  ],
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

const galleryFirst = coraCaldwellGalleryImages[0];
const galleryRest = coraCaldwellGalleryImages.slice(1);

export function CoraRoadmap261013Caldwell() {
  return (
    <section
      aria-label="Caldwell Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="image" content={coraCaldwellSchemaImageUrl} />
      <meta itemProp="thumbnailUrl" content={coraCaldwellSchemaImageUrl} />
      <div itemScope itemType="https://schema.org/RoofingContractor">
        <meta itemProp="name" content="Newark Quality Roofing" />
        <meta itemProp="legalName" content={canonicalConfig.legalName} />
        <span itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
          <meta itemProp="dayOfWeek" content="Monday" />
          <meta itemProp="dayOfWeek" content="Tuesday" />
          <meta itemProp="dayOfWeek" content="Wednesday" />
          <meta itemProp="dayOfWeek" content="Thursday" />
          <meta itemProp="dayOfWeek" content="Friday" />
          <meta itemProp="opens" content="07:00" />
          <meta itemProp="closes" content="18:00" />
        </span>
        <span itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
          <meta itemProp="dayOfWeek" content="Saturday" />
          <meta itemProp="opens" content="08:00" />
          <meta itemProp="closes" content="14:00" />
        </span>
        <span itemProp="employee" itemScope itemType="https://schema.org/Person">
          <meta itemProp="jobTitle" content="Roofing Contractor" />
        </span>
      </div>
      <style>
        {`:root { ${coraCaldwellStylePhrases.map((phrase) => `--cora-261013-cw-${phrase.replace(/ /g, '-')}: 1;`).join(' ')} }
        /* CORA 2026-10-13 (Caldwell) phrase style-tag variations: ${coraCaldwellStylePhrases.join(', ')} */`}
      </style>
      <JsonLd data={caldwellSchemaGraph} />
      <details className="cora-261013-caldwell-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraCaldwellBlockSummary}
        </summary>

        <p className={pClass}>{coraCaldwellBlockIntro}</p>

        {coraCaldwellSections.map((section) => (
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

        <h2 className={h2Class}>{coraCaldwellQuotesHeading}</h2>
        {coraCaldwellQuotes.map((quote) => (
          <blockquote
            key={quote.slice(0, 28)}
            className="mb-4 border-l-2 border-copper/40 pl-4 font-body text-base italic leading-relaxed text-slate-700"
          >
            {quote}
          </blockquote>
        ))}

        <h2 className={h2Class}>{coraCaldwellPhotoHeading}</h2>
        <p className={pClass}>{coraCaldwellPhotoIntro}</p>
        <div>
          <figure className="mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={galleryFirst.src}
              alt={galleryFirst.alt}
              itemProp="image"
              loading="lazy"
              width="800"
              height="600"
            />
            <figcaption className="mt-1 text-sm text-slate-600">{coraCaldwellFigureCaption}</figcaption>
          </figure>
          {galleryRest.map((image) => (
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

        <h2 className={h2Class}>{coraCaldwellRecordHeading}</h2>
        <p className={pClass}>{coraCaldwellRecordIntro}</p>
        <ul className="mb-4 list-disc space-y-1 pl-6 font-body text-base text-slate-700">
          <li>
            <a href={coraCaldwellMapsUrl} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
              {coraCaldwellDirectionsLabel}
            </a>
          </li>
        </ul>

        <form
          action="https://www.google.com/maps/search/"
          method="get"
          name={coraCaldwellFormName}
          className="mb-4 font-body text-base text-slate-700"
        >
          <label className="block">
            {coraCaldwellFormLabel}{' '}
            <input
              type="text"
              name="q"
              defaultValue={coraCaldwellFormQuery}
              className="mt-2 block w-full max-w-md border border-slate-300 px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="mt-3 border border-copper/40 px-4 py-2 font-semibold text-forest transition-colors hover:text-copper"
          >
            {coraCaldwellFormButton}
          </button>
        </form>

        <h2 className={h2Class}>{coraCaldwellServiceLogHeading}</h2>
        <p className={pClass}>{coraCaldwellServiceLogIntro}</p>
        {coraCaldwellServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <details className="cora-261013-caldwell-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraCaldwellFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraCaldwellFieldNotesIntro}</p>
          {coraCaldwellFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
    </section>
  );
}
