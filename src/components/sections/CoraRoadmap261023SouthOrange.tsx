import { JsonLd } from '@/components/seo/JsonLd';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { combos } from '@/data/combos';
import {
  cora261023SouthOrangeComments,
  cora261023SouthOrangeCss,
  cora261023SouthOrangeGallery,
  cora261023SouthOrangeH2s,
  cora261023SouthOrangeH3s,
  cora261023SouthOrangeH4s,
  cora261023SouthOrangeIntro,
  cora261023SouthOrangeResources,
  cora261023SouthOrangeSummary,
} from '@/data/cora-261023-south-orange-content';

// CORA 261023 rerun block for /roof-replacement-south-orange-nj
// (keyword "roof replacement south orange nj", run M3, workbook
// 2026-10-23 12:56:12). Identity verified in the study
// (files/cora-study-south-orange-replacement-261023.md): Search
// Terms exact, Localize "South Orange, NJ", tracked URL this
// exact page, found organically at Results rank 52. The
// 261014r block stays untouched — every count it earned holds
// or rises. This block works the rerun's implementable-open
// lines, Top 200 first, each traced in the study:
//   Phase 1 (DOM/SERP): Variations in Title +3 ★, 'south
//     orange' in Title +1, 'south' in Title +1, Entities in
//     Title +2 ★ — the page.tsx overrides fed from the
//     261023 content file. 'roofer' in H2 +1, Exact Matches
//     in H1-H6 +1 ★ (H2-2 carries the exact string),
//     Heading Tags +5 ★, 'roofer' in H3 +1, Variations in
//     H4-H6 +2 (the H4 register), Variations in Meta +2.
//   Phase 2: 'roofer' in HTML +2 and Clean Keyword Density
//     +2 ★ — exact-phrase copy + the photo log's ALT pattern;
//     locally counted only, the rerun arbitrates.
//   Phase 4: Distinct Entities +2 ★ — real village entities
//     new to the page (Seton Hall University, South Mountain
//     Reservation, SOPAC, Cameron Field, Flood's Hill,
//     Rahway River) in the register copy.
//   Phase 6: Summary Length +18 — the new meta (~214 chars).
//   Phase 7 (DOM): Has Link to southorange.org — the
//     Village's own permit/license forms page (host verified
//     live); Has Link to www.bbb.org — a consumer-advice
//     link with NON-CLAIMING copy (no membership or
//     accreditation stated or implied; the business's own
//     BBB profile URL is not verified supply and is not
//     used). Both named in the implementation report.
//   Phase 9 (DOM): Images +31 ★ / ALT +29 ★ — 31 pool
//     photographs not already on this page, factual ALT.
//   Phase 11 (DOM): Style Tags +24, Comment Tags +11 — the
//     block stylesheet + structural comments carrying the
//     run's verbatim variation forms.
//   Phase 12 (DOM, ledger in the study): Has JSON-LD ★,
//     JLD RoofingContractor, JLD alternateName, JLD logo,
//     SCH roofingcontractor, SCH alternatename. Credited
//     forms: PLAIN-STRING "@type": "RoofingContractor"
//     (the shared graph's array @type reads 0); available-
//     Language as the SCALAR 'English'; alternateName as
//     (a) the Language object's "en" and (b) the South
//     Orange City node's "Township of South Orange Village"
//     (the municipality's legal name — factual); logo = the
//     site's real /logo.svg asset; microdata twins for
//     roofingcontractor / alternatename / logo / image.
//     Inventory-served (Shared Data, Amendment 2 §5): JLD +
//     SCH image, JLD + SCH SiteNavigationElement. D-01
//     held: NO address, NO geo, NO rating.
//   Phase X: CSS Includes +9 — the 12 real stylesheet files
//     linked at the top of this block.
// NOT built, named in the study: the H1 lines (frozen H1;
// the Top 200 one escalated), the LSI pair (verified export
// constants, escalated), the three Phase 8 social lines
// (supply: the business's own profile URLs), the skip set.

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-south-orange-nj';
const CONTRACTOR_ID = `${PAGE_URL}#roofingcontractor-261023`;
const LOGO_URL = 'https://newarkqualityroofing.com/logo.svg';
const IMAGE_URL = 'https://newarkqualityroofing.com/images/heroes/service-roof-replacement.webp';

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
  availableLanguage: 'English',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
    url: PAGE_URL,
  },
  areaServed: [
    ...TOWNS.map((town) => ({
      '@type': 'City',
      name: `${town}, NJ`,
      ...(town === 'South Orange'
        ? { alternateName: 'Township of South Orange Village' }
        : {}),
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
    })),
    { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
    { '@type': 'State', name: 'New Jersey' },
  ],
};

const serviceNode = {
  '@type': 'Service',
  '@id': `${PAGE_URL}#service-261023`,
  name: 'Roof Replacement in South Orange, NJ',
  serviceType: 'Roof Replacement',
  provider: { '@id': CONTRACTOR_ID },
  areaServed: { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
  availableLanguage: { '@type': 'Language', name: 'English', alternateName: 'en' },
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

const CSS_FILES = 'abcdefghijkl'.split('').map((l) => `/cora-261023-south-orange-${l}.css`);

// Renders one HTML comment into the served markup (React
// strips JSX comments; the comment is injected as raw HTML
// inside a hidden div — the mechanism used by every prior
// Cora pass on this site).
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
const h4Class = 'mt-6 font-display text-lg md:text-xl font-semibold text-navy';
const pClass = 'mt-3 text-navy/85 leading-relaxed';

export function CoraRoadmap261023SouthOrange() {
  const c = cora261023SouthOrangeComments;
  return (
    <section
      aria-label="Roof replacement in South Orange, NJ — 261023 field record, roofer's register, photo log and business record"
      className="cora-261023-south-orange-record bg-cream py-14"
    >
      {CSS_FILES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <Cmt text={c[0]} />
      <style dangerouslySetInnerHTML={{ __html: cora261023SouthOrangeCss }} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [contractorNode, serviceNode, navNode],
        }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {cora261023SouthOrangeSummary}
          </summary>

          <Cmt text={c[1]} />
          <p className={pClass}>{cora261023SouthOrangeIntro}</p>

          <div className="register">
            {cora261023SouthOrangeH2s.map((s, i) => (
              <article key={s.h2}>
                {i === 3 && <Cmt text={c[3]} />}
                <h2 className={h2Class}>{s.h2}</h2>
                <p className={pClass}>{s.p}</p>
                {cora261023SouthOrangeH3s
                  .slice(i * 1, i * 1 + 1)
                  .map((t) => (
                    <div key={t.h3}>
                      <h3 className={h3Class}>{t.h3}</h3>
                      <p className={pClass}>{t.p}</p>
                    </div>
                  ))}
              </article>
            ))}
            {cora261023SouthOrangeH3s.slice(6).map((t) => (
              <div key={t.h3}>
                <h3 className={h3Class}>{t.h3}</h3>
                <p className={pClass}>{t.p}</p>
              </div>
            ))}
            {cora261023SouthOrangeH4s.map((q) => (
              <div key={q.h4}>
                <h4 className={h4Class}>{q.h4}</h4>
                <p className={pClass}>{q.p}</p>
              </div>
            ))}
          </div>

          <Cmt text={c[2]} />
          <h2 className={h2Class}>The Photo Log: Materials and Details of a Village Replacement</h2>
          <p className={pClass}>
            Thirty-one photographs from the pool this site publishes, logged the way the crew
            logs a roof replacement South Orange NJ job: the coverings read before the
            tear-off, the membranes and metals the work uses, and the finished fields after.
          </p>
          <div className="photolog mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cora261023SouthOrangeGallery.map((image) => (
              <figure key={image.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-auto rounded" />
                <figcaption className="mt-1 font-body text-sm text-slate-600">{image.caption}</figcaption>
              </figure>
            ))}
          </div>

          <h2 className={h2Class}>Homeowner Resources for a South Orange Replacement</h2>
          <p className={pClass}>
            {cora261023SouthOrangeResources.split('permit and license application forms')[0]}
            <a
              href="https://www.southorange.org/558/Permit-License-Application-Forms"
              className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark"
            >
              permit and license application forms
            </a>
            {cora261023SouthOrangeResources
              .split('permit and license application forms')[1]
              .split('Better Business Bureau')[0]}
            <a
              href="https://www.bbb.org/"
              className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark"
            >
              Better Business Bureau
            </a>
            {cora261023SouthOrangeResources.split('Better Business Bureau')[1]}
          </p>
          <Cmt text={c[4]} />

          <h2 className={h2Class}>Service Directory: This Site's Own Pages, Town by Town</h2>
          <p className={pClass}>
            The index the estimators work from when a roof replacement South Orange NJ caller
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
                  <a href={l.href} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
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
            South Orange NJ page, the service this page covers, and the language the office
            serves in — in the machine-readable forms this site publishes.
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
                roof replacement page for South Orange, NJ
              </a>
              .
            </p>
          </div>
          <div itemScope itemType="https://schema.org/Service" className="record-card mb-4">
            <p className={pClass}>
              Service record for this page: <span itemProp="name">Roof Replacement in South Orange, NJ</span>{' '}
              — service type <span itemProp="serviceType">Roof Replacement</span>, served in{' '}
              <span itemProp="availableLanguage" itemScope itemType="https://schema.org/Language">
                <span itemProp="name">English</span> (<span itemProp="alternateName">en</span>)
              </span>
              , covering full tear-off and replacement of slate, asphalt shingle, and flat
              membrane roofs across the service area named in this record.
            </p>
          </div>
          <Cmt text={c[6]} />
        </details>
      </div>
    </section>
  );
}
