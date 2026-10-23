import { JsonLd } from '@/components/seo/JsonLd';
import {
  cora261023WoButtons,
  cora261023WoTowns,
} from '@/data/cora-261023-west-orange-content';

// CORA 261023 rerun reoptimization block for
// /roof-replacement-west-orange-nj (keyword "roof replacement
// west orange nj", run M3, workbook 2026-10-23 14:30:13). The
// rerun credited 18 of the 19 lines the 261022 pass built; this
// block works the rerun's 10 implementable-open lines, each
// traced to goal / setter / inventory in
// files/cora-study-west-orange-replacement-261023.md (goal =
// run tracked + "Add N more", Shared Data Result 14 column;
// local counts validate the build only, Paul's rerun arbitrates):
//   Phase 12 (DOM, Schema zone): Uses JSON-LD RoofingContractor
//     +1 — the node below uses the plain-string @type form (the
//     site's shared graph types its business node as an ARRAY
//     ['RoofingContractor', ...], which Cora tracked as 0) and
//     carries name + url ONLY from the fact set D-01 allows:
//     no address, no geo, no aggregateRating.
//   Phase 12: Uses JSON-LD legalName +1 and Uses Schema
//     legalname +1 — supply gate PASSED at study: the legal
//     name is the site's own published value,
//     siteConfig.legalName = 'Newark Quality Roofing'
//     (src/config/site-config.ts), used verbatim in both forms.
//   Phase 12: Uses JSON-LD availableLanguage +1 — DIAGNOSIS
//     (study section 3): the 261022 ContactPoint node carries
//     availableLanguage as an ARRAY value (['English']) and
//     Cora tracked it 0 while crediting contactType, a plain
//     string on the same node in the same script block. This
//     block therefore carries the field in the two remaining
//     canonical forms: a plain string on the RoofingContractor
//     node below, and a Language object on the Service node.
//     The 261022 array form stays untouched (floors only rise).
//   Phase 12: Uses JSON-LD serviceType +1 and Uses Schema
//     servicetype +1 — factual value from this page's service
//     ('Roof Replacement'), JSON-LD on the Service node and a
//     microdata Service card below.
//   Phase 12: Number Of JSON-LD Areas Served +217 (tracked 8,
//     goal 225) — the RoofingContractor node's areaServed is
//     the site's REAL service-area inventory: the 21 towns of
//     src/data/cities.ts as City objects (containedInPlace
//     Essex County, NJ) + Essex County + New Jersey = 23
//     distinct entries. No duplicates, no invented places;
//     the count against Cora's occurrence model is reported
//     plainly in the implementation report and the rerun
//     arbitrates (study section 4).
//   Phase 11 (DOM): Variations in Button Tags +15 (tracked 2,
//     goal 17) — the 18 real <button> elements in the service
//     index below, each labelled with one variation form from
//     the run's own keyword inventory.
// NOT built here, named in the study and the implementation
// report: Number of Redirects (docs: Type Backlinks, Zone Off
// Page — measured on pages other than this one; no honest page
// carrier, nothing manufactured); the title 'roof repair'
// variation is served by the amended title in
// src/data/cora-261023-west-orange-content.ts (page.tsx import
// repointed), NOT by this block. The H1 stays frozen (Rule 7);
// this block adds no H1 and does not touch the 261015r or
// 261022 blocks — every count they earned holds or rises.

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-west-orange-nj';
const CONTRACTOR_ID = `${PAGE_URL}#roofingcontractor-261023`;

const areasServed = [
  ...cora261023WoTowns.map((town) => ({
    '@type': 'City',
    name: `${town}, NJ`,
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
  })),
  { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
  { '@type': 'State', name: 'New Jersey' },
];

const roofingContractorNode = {
  '@type': 'RoofingContractor',
  '@id': CONTRACTOR_ID,
  name: 'Newark Quality Roofing',
  legalName: 'Newark Quality Roofing',
  url: PAGE_URL,
  availableLanguage: 'English',
  areaServed: areasServed,
};

const serviceNode = {
  '@type': 'Service',
  '@id': `${PAGE_URL}#service-261023`,
  name: 'Roof Replacement in West Orange, NJ',
  serviceType: 'Roof Replacement',
  provider: { '@id': CONTRACTOR_ID },
  areaServed: { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
  availableLanguage: { '@type': 'Language', name: 'English', alternateName: 'en' },
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261023WestOrange() {
  return (
    <section
      aria-label="West Orange Roof Replacement Business Record, Service Index and Service Area"
      className="bg-white cora-261023-west-orange"
    >
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [roofingContractorNode, serviceNode],
        }}
      />
      <details className="c261023wo-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          Roof Replacement West Orange NJ: Business Record, Service Index and Service Area
        </summary>

        <h2 className={h2Class}>The Business Record Behind This West Orange Roof Replacement Page</h2>
        <p className={pClass}>
          This record states, in the structured form search engines read, the business
          that publishes this roof replacement west orange nj page, the legal name it
          files under, the service this page covers, and the towns that service runs
          in. The business is Newark Quality Roofing; the service is roof replacement;
          the service area is the twenty-one Essex County towns this site publishes
          pages for, from Newark and the Oranges out to Roseland and Essex Fells.
        </p>

        <div itemScope itemType="https://schema.org/RoofingContractor" className="c261023wo-card mb-4">
          <p className={pClass}>
            <span itemProp="name">Newark Quality Roofing</span> — the roofing contractor
            of record for this page. Its legal name, as stated in this site&apos;s own
            published configuration, is{' '}
            <span itemProp="legalName">Newark Quality Roofing</span>. This page is its{' '}
            <a
              itemProp="url"
              href={PAGE_URL}
              className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark"
            >
              roof replacement page for West Orange, NJ
            </a>
            .
          </p>
        </div>

        <div itemScope itemType="https://schema.org/Service" className="c261023wo-card mb-4">
          <p className={pClass}>
            Service record for this page:{' '}
            <span itemProp="name">Roof Replacement in West Orange, NJ</span> — service
            type <span itemProp="serviceType">Roof Replacement</span>, covering full
            tear-off and replacement of asphalt shingle, slate, copper and EPDM
            membrane roofs across the service area named in this record.
          </p>
        </div>

        <h3 className={h3Class}>Service Area: The Twenty-One Essex County Towns on This Site</h3>
        <p className={pClass}>
          {cora261023WoTowns.join(', ')} — each one a town this site serves and
          publishes for, all in Essex County, New Jersey. West Orange homeowners
          reading this page are in the middle of that map: the replacement crews
          work the whole county from this base.
        </p>

        <h3 className={h3Class}>West Orange Roofing Service Index</h3>
        <p className={pClass}>
          The quick index below names the replacement and repair services West Orange
          homeowners ask this office about most. Each entry is a service this page
          and its sister pages cover in full.
        </p>
        <div className="c261023wo-buttons flex flex-wrap gap-2">
          {cora261023WoButtons.map((label) => (
            <button
              key={label}
              type="button"
              className="rounded-full border border-copper/50 bg-white px-4 py-2 font-body text-sm font-semibold text-brand-navy"
            >
              {label}
            </button>
          ))}
        </div>
      </details>
    </section>
  );
}
