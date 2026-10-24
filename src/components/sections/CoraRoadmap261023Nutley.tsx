import { JsonLd } from '@/components/seo/JsonLd';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { combos } from '@/data/combos';
import {
  cora261023NutleyCatalogServices,
  cora261023NutleyComments,
  cora261023NutleyCss,
  cora261023NutleyGallery,
  cora261023NutleyH2s,
  cora261023NutleyH3s,
  cora261023NutleyIntro,
  cora261023NutleySummary,
} from '@/data/cora-261023-nutley-content';

// CORA 261023 rerun block for /roof-replacement-nutley-nj
// (keyword "roof replacement nutley nj", run M3, workbook
// 2026-10-23 14:16:12). Identity verified in the study
// (files/cora-study-nutley-replacement-261023.md): Search
// Terms exact, Localize "Nutley, NJ", tracked URL this exact
// page (force-appended, Results row 101). The 261015r block
// stays untouched. This block works the rerun's
// implementable-open lines, Top 200 first:
//   Phase 9: Images +15 ★ — 16 pool photographs.
//   Phase 11: B Tags +4 (the bold scope lines in the strip
//     below), Style Tags +24, Comment Tags +3.
//   Phase 12 (ledger in the study): Has JSON-LD ★, JLD
//     RoofingContractor, JLD ContactPoint + contactType
//     (scalar 'customer service', the West Orange credited
//     form), JLD image, JLD logo, JLD OfferCatalog + Offer
//     (the site's real services, NO prices), Entity
//     References +3 (@id cross-references), Areas Served
//     +225 AT THE HONEST LIMIT (23 entries — the West
//     Orange occurrence-model line), and the microdata
//     twins: SCH roofingcontractor, SCH legalname, SCH
//     contactpoint, SCH contacttype, SCH offercatalog, SCH
//     offer, SCH logo. D-01 held: the TEN address lines and
//     the EIGHT rating/review lines are gated and escalated
//     BY NAME at the top of the implementation report; no
//     address, geo, rating or review is emitted.
//   Phase X: CSS Includes +7 — 9 real stylesheet files.
//     HTML Tags +196 ★ — the block's directory, gallery and
//     register add ~550 tags by construction.
// Also served: 'roof installations' in HTML (intro + catalog
// copy), the absolute-URL directory, the copyright word-form
// in the record card. NOT built, named in the study: the H1
// lines (frozen H1; Top 200 escalated), the LSI pair
// (constants, escalated), Page Size KB (skip set by factor
// name — escalated with the ruling named), Number of
// Redirects (off-page family, no page carrier), Top 100
// Shared Factors (derived metric), Phase 8 social (supply).

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-nutley-nj';
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
  name: 'Roof Replacement in Nutley, NJ',
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
  itemListElement: cora261023NutleyCatalogServices.map((name) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, provider: { '@id': CONTRACTOR_ID } },
  })),
};

const breadcrumbNode = {
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb-261023`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Newark Quality Roofing', item: 'https://newarkqualityroofing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Roof Replacement Nutley NJ', item: PAGE_URL },
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

const CSS_FILES = 'abcdefghi'.split('').map((l) => `/cora-261023-nutley-${l}.css`);

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

export function CoraRoadmap261023Nutley() {
  const c = cora261023NutleyComments;
  return (
    <section
      aria-label="Roof replacement in Nutley, NJ — 261023 field record, roofer's register, photo log, service catalog and business record"
      className="cora-261023-nutley-record bg-cream py-14"
    >
      {CSS_FILES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <Cmt text={c[0]} />
      <style dangerouslySetInnerHTML={{ __html: cora261023NutleyCss }} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [contractorNode, serviceNode, catalogNode, breadcrumbNode, navNode],
        }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {cora261023NutleySummary}
          </summary>

          <Cmt text={c[1]} />
          <p className={pClass}>{cora261023NutleyIntro}</p>

          {/* Variations in B Tags +4: bold scope lines carrying
              the run's verbatim forms as genuine emphasis. */}
          <p className={pClass}>
            The four lines this page stands on, in bold as the crew writes them:{' '}
            <b>roof replacement nutley nj</b> scopes are written line by line;{' '}
            <b>nutley nj roof replacement</b> work starts with the deck reading;{' '}
            <b>roof replacement in nutley nj</b> permits are pulled before the tear-off; and a{' '}
            <b>nutley roofing company</b> answers for its own record after the job.
          </p>

          <div className="register">
            {cora261023NutleyH2s.map((s, i) => (
              <article key={s.h2}>
                {i === 3 && <Cmt text={c[2]} />}
                <h2 className={h2Class}>{s.h2}</h2>
                <p className={pClass}>{s.p}</p>
                {cora261023NutleyH3s
                  .slice(i * 1, i * 1 + 1)
                  .map((t) => (
                    <div key={t.h3}>
                      <h3 className={h3Class}>{t.h3}</h3>
                      <p className={pClass}>{t.p}</p>
                    </div>
                  ))}
              </article>
            ))}
            {cora261023NutleyH3s.slice(6).map((t) => (
              <div key={t.h3}>
                <h3 className={h3Class}>{t.h3}</h3>
                <p className={pClass}>{t.p}</p>
              </div>
            ))}
          </div>

          <h2 className={h2Class}>The Photo Log: Materials and Details of a Township Replacement</h2>
          <p className={pClass}>
            Sixteen photographs from the pool this site publishes, logged the way the crew
            logs a roof replacement Nutley NJ job: the details read before the tear-off, the
            repairs and systems the work uses, and the finished fields after.
          </p>
          <div className="photolog mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cora261023NutleyGallery.map((image) => (
              <figure key={image.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-auto rounded" />
                <figcaption className="mt-1 font-body text-sm text-slate-600">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
          <Cmt text={c[3]} />

          <h2 className={h2Class}>Service Directory: This Site's Own Pages, Town by Town</h2>
          <p className={pClass}>
            The index the estimators work from when a roof replacement Nutley NJ caller needs
            the repair, inspection, or shingle page for their own town instead: every page
            this site publishes for the six core services across Essex County.
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
                  <a href={l.href} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Cmt text={c[4]} />

          <h2 className={h2Class}>Business Record for This Page</h2>
          <p className={pClass}>
            The structured record below states the business behind this roof replacement
            Nutley NJ page, the service this page covers, the services the office offers, and
            the language it serves in — in the machine-readable forms this site publishes.
            Copyright © 2026 Newark Quality Roofing — this Nutley replacement record is the
            office&apos;s working record for the page.
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
                roof replacement page for Nutley, NJ
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
              Service record for this page: <span itemProp="name">Roof Replacement in Nutley, NJ</span>{' '}
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
              {cora261023NutleyCatalogServices.map((name, i) => (
                <span key={name}>
                  <span itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                      <span itemProp="name">{name}</span>
                    </span>
                  </span>
                  {i < cora261023NutleyCatalogServices.length - 1 ? ' · ' : '.'}
                </span>
              ))}{' '}
              Roof installations and repair work are scoped from the same written reading as
              every replacement.
            </p>
          </div>
          <Cmt text={c[5]} />
        </details>
      </div>
    </section>
  );
}
