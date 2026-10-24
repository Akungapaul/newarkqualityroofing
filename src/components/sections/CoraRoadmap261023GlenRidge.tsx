import { JsonLd } from '@/components/seo/JsonLd';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { combos } from '@/data/combos';
import {
  cora261023GlenRidgeBoldLines,
  cora261023GlenRidgeCatalogServices,
  cora261023GlenRidgeComments,
  cora261023GlenRidgeCss,
  cora261023GlenRidgeGallery,
  cora261023GlenRidgeH2s,
  cora261023GlenRidgeH3s,
  cora261023GlenRidgeIntro,
  cora261023GlenRidgeSpanForms,
  cora261023GlenRidgeSummary,
} from '@/data/cora-261023-glen-ridge-content';

// CORA 261023 rerun block for /roof-replacement-glen-ridge-nj
// (keyword "roof replacement glen ridge nj", run M3,
// workbook 2026-10-23 14:45:35). Identity verified in the
// study (files/cora-study-glen-ridge-replacement-261023.md):
// Search Terms exact, Localize "Glen Ridge, NJ", tracked
// URL this exact page (found organically, Result 46). The
// 261014r block stays untouched. This block works the
// rerun's implementable-open lines, Top 200 first:
//   Phase 1: Title Entities +1 ★ / Title Variations +2 ★
//     (the 261023 overrides in page.tsx), H2 Entities +7 ★,
//     H3 Entities +35 ★ and H3 Variations +15 ★ (entity-dense
//     register titles), Heading Tags +10 ★ (~27 new), and
//     the combined H1H2H3 +11 ★ / H1H2 +1 ★ metrics built
//     via their H2/H3 carriers (the H1 component stays
//     frozen under Paul's ruling — named in the study).
//   Phase 2: 'glenridge' in HTML +1 — honest carriers only:
//     the roadmapped borough link's own href below, plus
//     comment/style occurrences; the name is never
//     misspelled in visible copy.
//   Phase 6: Display URL +2 ★ / Link Text +2 ★ — carriers:
//     the BreadcrumbList below + the new title's forms (the
//     slug stays frozen under Rule 7); Link Text Length +10
//     and Summary Length +7 / Summary Variations +3 ride on
//     the 261023 title/meta overrides.
//   Phase 7: Has Link to www.glenridgenj.org — the genuine
//     borough link rendered in the scope section below.
//   Phase 9: Images +1 ★ — 4 pool photographs.
//   Phase 11: Style +24, Comments +11, B Tags +29 (the bold
//     scope lines: 10 lines x 3 bolded forms), Span Tags
//     +27 ★ (microdata spans + the visible forms index).
//   Phase 12 (ledger in the study): Has JSON-LD ★ + SCH
//     logo (real /logo.svg, node + microdata link twin);
//     the full graph pattern from the batch's credited
//     precedent. No address, geo, or rating is emitted.
//   Phase X: HTML Tags +218 ★ (block construction), CSS
//     Includes +7 (9 real files), Has Trademarks + Number
//     of Trademarks (the factual attribution line in the
//     materials section of the content file).
// NOT built, named in the study: Variations in H1 (frozen
// H1; Top 200 escalated), the LSI pair (constants,
// escalated), Page Size KB (skip set; Top 200 escalated
// with the ruling named), Is Store Page (no honest carrier
// on a service page), Phase 8 social x5 (supply), the
// remaining skip set.

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-glen-ridge-nj';
const CONTRACTOR_ID = `${PAGE_URL}#roofingcontractor-261023`;
const LOGO_URL = 'https://newarkqualityroofing.com/logo.svg';
const IMAGE_URL = 'https://newarkqualityroofing.com/images/heroes/service-roof-replacement.webp';
const EMAIL = 'info@billnackexpress.com';

const TOWNS: string[] = [
  'Newark',
  'East Orange',
  'Orange',
  'West Orange',
  'Montclair',
  'Bloomfield',
  'Belleville',
  'Nutley',
  'Irvington',
  'Maplewood',
  'South Orange',
  'Livingston',
  'Millburn',
  'Cedar Grove',
  'Verona',
  'Glen Ridge',
  'Caldwell',
  'Essex Fells',
  'Fairfield',
  'North Caldwell',
  'Roseland',
];

const contractorNode = {
  '@type': 'RoofingContractor',
  '@id': CONTRACTOR_ID,
  name: 'Newark Quality Roofing',
  legalName: 'Newark Quality Roofing',
  url: PAGE_URL,
  logo: LOGO_URL,
  image: IMAGE_URL,
  email: EMAIL,
  availableLanguage: 'English',
  contactPoint: {
    '@type': 'ContactPoint',
    '@id': `${PAGE_URL}#contactpoint-261023`,
    contactType: 'customer service',
    availableLanguage: 'English',
    email: EMAIL,
    url: PAGE_URL,
  },
  areaServed: [
    ...TOWNS.map((town) => ({
      '@type': 'City',
      name: `${town}, NJ`,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
    })),
    { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
    { '@type': 'State', name: 'New Jersey' },
  ],
};

const serviceNode = {
  '@type': 'Service',
  '@id': `${PAGE_URL}#service-261023`,
  name: 'Roof Replacement in Glen Ridge, NJ',
  serviceType: 'Roof Replacement',
  provider: { '@id': CONTRACTOR_ID },
  areaServed: { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
  availableLanguage: { '@type': 'Language', name: 'English', alternateName: 'en' },
};

const catalogNode = {
  '@type': 'OfferCatalog',
  '@id': `${PAGE_URL}#offercatalog-261023`,
  name: 'Roofing services offered by Newark Quality Roofing',
  provider: { '@id': CONTRACTOR_ID },
  itemListElement: cora261023GlenRidgeCatalogServices.map((name) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, provider: { '@id': CONTRACTOR_ID } },
  })),
};

const breadcrumbNode = {
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb-261023`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Newark Quality Roofing', item: 'https://newarkqualityroofing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Roof Replacement Glen Ridge NJ', item: PAGE_URL },
  ],
};

const DIRECTORY_SERVICES = [
  'roof-replacement',
  'roof-repair',
  'emergency-roof-repair',
  'roof-inspection',
  'roof-leak-repair',
  'asphalt-shingle-roofing',
];

const cityName = new Map(cities.map((c) => [c.id, c.name]));
const serviceName = new Map(services.map((s) => [s.id, s.name]));
const directoryLinks = combos
  .filter((c) => DIRECTORY_SERVICES.includes(c.serviceId))
  .map((c) => ({
    href: `https://newarkqualityroofing.com/${c.slug}`,
    label: `${serviceName.get(c.serviceId)} ${cityName.get(c.cityId)} NJ`,
  }));

const navNode = {
  '@type': 'SiteNavigationElement',
  '@id': `${PAGE_URL}#sitenavigation-261023`,
  name: 'Newark Quality Roofing service directory',
  itemListElement: directoryLinks.slice(0, 21).map((l) => l.href),
};

const CSS_FILES = 'abcdefghi'.split('').map((l) => `/cora-261023-glen-ridge-${l}.css`);

// H3 distribution across the 8 H2 sections: 2 each = 16.
const H3_SLICES: [number, number][] = [
  [0, 2],
  [2, 4],
  [4, 6],
  [6, 8],
  [8, 10],
  [10, 12],
  [12, 14],
  [14, 16],
];

function Cmt({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}
    />
  );
}

const h2Class = 'mt-10 font-display text-2xl md:text-3xl font-semibold text-navy';
const h3Class = 'mt-8 font-display text-xl md:text-2xl font-semibold text-navy';
const pClass = 'mt-3 text-navy/85 leading-relaxed';

export function CoraRoadmap261023GlenRidge() {
  const c = cora261023GlenRidgeComments;
  return (
    <section
      aria-label="Roof replacement in Glen Ridge, NJ — 261023 borough record, roofer's register, scope lines, forms index, photo log and business record"
      className="cora-261023-glen-ridge-record bg-cream py-14"
    >
      {CSS_FILES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <Cmt text={c[0]} />
      <style dangerouslySetInnerHTML={{ __html: cora261023GlenRidgeCss }} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [contractorNode, serviceNode, catalogNode, breadcrumbNode, navNode],
        }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {cora261023GlenRidgeSummary}
          </summary>

          <Cmt text={c[1]} />
          <p className={pClass}>{cora261023GlenRidgeIntro}</p>

          <div className="register">
            {cora261023GlenRidgeH2s.map((s, i) => (
              <article key={s.h2}>
                {i === 3 && <Cmt text={c[2]} />}
                {i === 6 && <Cmt text={c[3]} />}
                <h2 className={h2Class}>{s.h2}</h2>
                <p className={pClass}>{s.p}</p>
                {i === 2 && (
                  <p className={pClass}>
                    The borough publishes its municipal offices, permit forms and meeting
                    schedules at{' '}
                    <a href="https://www.glenridgenj.org" target="_blank" rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                      www.glenridgenj.org
                    </a>
                    .
                  </p>
                )}
                {cora261023GlenRidgeH3s.slice(H3_SLICES[i][0], H3_SLICES[i][1]).map((t) => (
                  <div key={t.h3}>
                    <h3 className={h3Class}>{t.h3}</h3>
                    <p className={pClass}>{t.p}</p>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <h2 className={h2Class}>The Scope Lines, in Bold as the Crew Writes Them</h2>
          <div className="scope-lines">
            {cora261023GlenRidgeBoldLines.map((l) => (
              <p key={l.b1} className={pClass}>
                <b>{l.b1}</b>
                {l.t1}
                <b>{l.b2}</b>
                {l.t2}
                <b>{l.b3}</b>
                {l.t3}
              </p>
            ))}
          </div>
          <Cmt text={c[4]} />

          <h2 className={h2Class}>Forms Index: The Vocabulary of This Record</h2>
          <p className={pClass}>
            The forms this page covers, indexed as the office files them — the same phrases
            the register above works with, gathered in one place for the homeowner comparing
            scopes:
          </p>
          <p className="forms-index mt-3 leading-relaxed">
            {cora261023GlenRidgeSpanForms.map((f) => (
              <span key={f} className="rounded border border-navy/15 bg-white/70 px-2 py-0.5 font-body text-sm text-navy/85">
                {f}
              </span>
            ))}
          </p>

          <h2 className={h2Class}>The Photo Log: Details of a Borough Replacement</h2>
          <p className={pClass}>
            Four photographs from the pool this site publishes, logged the way the crew logs
            a roof replacement Glen Ridge NJ job: the metals, the winter details, the
            ventilation and the drainage.
          </p>
          <div className="photolog mt-4 grid gap-4 sm:grid-cols-2">
            {cora261023GlenRidgeGallery.map((image) => (
              <figure key={image.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-auto rounded" />
                <figcaption className="mt-1 font-body text-sm text-slate-600">{image.caption}</figcaption>
              </figure>
            ))}
          </div>

          <h2 className={h2Class}>Service Directory: This Site's Own Pages, Town by Town</h2>
          <p className={pClass}>
            The index the estimators work from when a roof replacement Glen Ridge NJ caller
            needs the repair, inspection, or shingle page for their own town instead: every
            page this site publishes for the six core services across Essex County.
          </p>
          <nav
            className="directory"
            aria-label="Service directory for Newark Quality Roofing"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <ul className="mt-4 grid gap-x-8 gap-y-1 font-body text-base text-slate-700 sm:grid-cols-2">
              {directoryLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} title={l.label} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Cmt text={c[5]} />

          <h2 className={h2Class}>Business Record for This Page</h2>
          <p className={pClass}>
            The structured record below states the business behind this roof replacement
            Glen Ridge NJ page, the service this page covers, the services the office
            offers, and the language it serves in — in the machine-readable forms this site
            publishes. Copyright © 2026 Newark Quality Roofing — this Glen Ridge replacement
            record is the office&apos;s working record for the page.
          </p>
          <div itemScope itemType="https://schema.org/RoofingContractor" className="record-card mb-4">
            <link itemProp="logo" href={LOGO_URL} />
            <link itemProp="image" href={IMAGE_URL} />
            <p className={pClass}>
              <span itemProp="name">Newark Quality Roofing</span> — the roofing contractor of
              record for this page. Its legal name, as stated in this site&apos;s own published
              configuration, is <span itemProp="legalName">Newark Quality Roofing</span>. This
              page is its{' '}
              <a itemProp="url" href={PAGE_URL} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                roof replacement page for Glen Ridge, NJ
              </a>
              . Write to the office at{' '}
              <a itemProp="email" href={`mailto:${EMAIL}`} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                {EMAIL}
              </a>
              .
            </p>
            <p className={pClass}>
              Contact point for this page:{' '}
              <span itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                <span itemProp="contactType">customer service</span>, served in{' '}
                <span itemProp="availableLanguage">English</span>, by email at{' '}
                <span itemProp="email">{EMAIL}</span>
              </span>
              .
            </p>
          </div>
          <div itemScope itemType="https://schema.org/Service" className="record-card mb-4">
            <p className={pClass}>
              Service record for this page: <span itemProp="name">Roof Replacement in Glen Ridge, NJ</span>{' '}
              — service type <span itemProp="serviceType">Roof Replacement</span>, served in{' '}
              <span itemProp="availableLanguage" itemScope itemType="https://schema.org/Language">
                <span itemProp="name">English</span> (<span itemProp="alternateName">en</span>)
              </span>
              , covering full tear-off and replacement of slate, asphalt shingle, and flat
              membrane roofs across the service area named in this record.
            </p>
          </div>
          <div itemScope itemType="https://schema.org/OfferCatalog" className="record-card mb-4">
            <p className={pClass}>
              <span itemProp="name">Roofing services offered by Newark Quality Roofing</span>:{' '}
              {cora261023GlenRidgeCatalogServices.map((name, i) => (
                <span key={name}>
                  <span itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                      <span itemProp="name">{name}</span>
                    </span>
                  </span>
                  {i < cora261023GlenRidgeCatalogServices.length - 1 ? ' · ' : '.'}
                </span>
              ))}{' '}
              Scoped from the same written reading as every replacement this office signs.
            </p>
          </div>
          <Cmt text={c[6]} />
          <Cmt text={c[7]} />
        </details>
      </div>
    </section>
  );
}
