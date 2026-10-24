import { JsonLd } from '@/components/seo/JsonLd';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { combos } from '@/data/combos';
import { CoraBellevilleButtons } from '@/components/sections/CoraBellevilleButtons';
import {
  cora261023BellevilleComments,
  cora261023BellevilleCss,
  cora261023BellevilleGallery,
  cora261023BellevilleH2s,
  cora261023BellevilleH3s,
  cora261023BellevilleH4s,
  cora261023BellevilleH5,
  cora261023BellevilleH5P,
  cora261023BellevilleH6,
  cora261023BellevilleH6P,
  cora261023BellevilleIntro,
  cora261023BellevilleQuotes,
  cora261023BellevilleResourcesA,
  cora261023BellevilleResourcesB,
  cora261023BellevilleResourcesC,
  cora261023BellevilleSummary,
} from '@/data/cora-261023-belleville-content';

// CORA 261023 block for /roof-replacement-belleville-nj
// (keyword "roof replacement belleville nj", run M3, workbook
// 2026-10-23 13:29:14). FIRST Cora pass against this page's
// replacement keyword. Identity verified in the study
// (files/cora-study-belleville-replacement-261023.md): Search
// Terms exact, Localize "Belleville, NJ", tracked URL this
// exact page, found organically at Results rank 52. The page
// previously served the default combo title, 22 headings, 3
// images and 2 exact-phrase occurrences. This block works the
// run's implementable-open lines, Top 200 first:
//   Phase 1: Heading Tags +16 ★, Exact Matches in H1-H6 +1 ★
//     (H2-2, which also leads with the phrase for the Leading
//     Variations pair ★), Entities in H3 +3 ★, 'roofer' in
//     H2/H3, Entities in H4 +15 (the H4 register), H5/H6
//     notes. Title/meta/keywords via the page.tsx overrides.
//   Phase 2: Exact Matches in HTML +14 ★ (phrase mass in
//     copy, ALTs, captions, buttons, comments, style) and
//     'roofer' in HTML +6.
//   Phase 6: the SERP pair (Display URL ★ / Link Text ★) —
//     carriers built per the study's diligence: the Rule 7
//     slug itself, a BreadcrumbList whose crumb name is the
//     phrase, the rebuilt title, and the directory anchors
//     (sibling directories from the Orange/South Orange
//     passes already link here with the phrase anchor).
//   Phase 7: gaf.com (manufacturer literature; the page's
//     own copy already states GAF Timberline installs and
//     GAF certification) and bbb.org (non-claiming consumer
//     link). The other six hosts are blocked on the
//     business's own profile/listing URLs — named in the
//     study and the implementation report.
//   Phase 9: Images +26 ★ / ALT +17 ★ / ALT Variations +16 ★
//     — 27 pool photographs, ALT forms rotated.
//   Phase 11: Blockquote Tags +5 (the page's own scope
//     statements as pull-quotes — no invented testimonials),
//     Button Tags +5 (real scroll controls, client comp.).
//   Phase 12: Has JSON-LD ★, JLD/SCH image, JLD/SCH logo,
//     JLD State (the areaServed State-typed node) + the full
//     honest node inventory in credited forms (plain-string
//     RoofingContractor, scalar availableLanguage, legalName,
//     email — the site's published contact). The ELEVEN
//     address-family lines are D-01 GATED and are escalated
//     BY NAME at the top of the implementation report; no
//     address, geo or rating is emitted anywhere.
//   Phase X: CSS Includes +7 (9 real files), Meta Keywords
//     +8 (the page.tsx override), Email Addresses — the ONE
//     verified address presented visibly, as mailto, and in
//     schema (served to the honest limit; study §3.63).
// NOT built, named: H1 lines (frozen H1; Top 200 escalated),
// the LSI pair (constants, escalated), 5 Phase 8 social
// lines + Claimed Brands (own-profile supply), Is Purchase
// Page (no honest carrier — a lead-gen service page is not
// a purchase page), Factors Used (Cora-internal derived
// metric), the agreed skip set (6).

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-belleville-nj';
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
  name: 'Roof Replacement in Belleville, NJ',
  serviceType: 'Roof Replacement',
  provider: { '@id': CONTRACTOR_ID },
  areaServed: { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
  availableLanguage: { '@type': 'Language', name: 'English', alternateName: 'en' },
};

const breadcrumbNode = {
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb-261023`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Newark Quality Roofing', item: 'https://newarkqualityroofing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Roof Replacement Belleville NJ', item: PAGE_URL },
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

const CSS_FILES = 'abcdefghi'.split('').map((l) => `/cora-261023-belleville-${l}.css`);

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

export function CoraRoadmap261023Belleville() {
  const c = cora261023BellevilleComments;
  return (
    <section
      aria-label="Roof replacement in Belleville, NJ — 261023 field record, roofer's register, photo log and business record"
      className="cora-261023-belleville-record bg-cream py-14"
    >
      {CSS_FILES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <Cmt text={c[0]} />
      <style dangerouslySetInnerHTML={{ __html: cora261023BellevilleCss }} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [contractorNode, serviceNode, breadcrumbNode, navNode],
        }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {cora261023BellevilleSummary}
          </summary>

          <Cmt text={c[1]} />
          <p className={pClass}>{cora261023BellevilleIntro}</p>
          <CoraBellevilleButtons />

          <div className="register" id="cora-261023-belleville-register">
            {cora261023BellevilleH2s.map((s, i) => (
              <article key={s.h2}>
                {i === 3 && <Cmt text={c[3]} />}
                <h2 className={h2Class}>{s.h2}</h2>
                <p className={pClass}>{s.p}</p>
                {cora261023BellevilleH3s
                  .slice(i * 1, i * 1 + 1)
                  .map((t) => (
                    <div key={t.h3}>
                      <h3 className={h3Class}>{t.h3}</h3>
                      <p className={pClass}>{t.p}</p>
                    </div>
                  ))}
              </article>
            ))}
            {cora261023BellevilleH3s.slice(6).map((t) => (
              <div key={t.h3}>
                <h3 className={h3Class}>{t.h3}</h3>
                <p className={pClass}>{t.p}</p>
              </div>
            ))}
            {cora261023BellevilleH4s.map((q) => (
              <div key={q.h4}>
                <h4 className={h4Class}>{q.h4}</h4>
                <p className={pClass}>{q.p}</p>
              </div>
            ))}
            <h5 className="mt-6 font-display text-base md:text-lg font-semibold text-navy">{cora261023BellevilleH5}</h5>
            <p className={pClass}>{cora261023BellevilleH5P}</p>
            <h6 className="mt-4 font-display text-sm md:text-base font-semibold text-navy">{cora261023BellevilleH6}</h6>
            <p className={pClass}>{cora261023BellevilleH6P}</p>
          </div>

          <div id="cora-261023-belleville-quotes">
            <h2 className={h2Class}>The Scope Statements This Page Stands On</h2>
            {cora261023BellevilleQuotes.map((q) => (
              <blockquote key={q} className="mt-4 text-navy/85 leading-relaxed">
                {q}
              </blockquote>
            ))}
          </div>
          <Cmt text={c[2]} />

          <div id="cora-261023-belleville-photolog">
            <h2 className={h2Class}>The Photo Log: Materials and Details of a Township Replacement</h2>
            <p className={pClass}>
              Twenty-seven photographs from the pool this site publishes, logged the way the
              crew logs a roof replacement Belleville NJ job: the coverings read before the
              tear-off, the membranes and metals the work uses, and the finished fields after.
            </p>
            <div className="photolog mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cora261023BellevilleGallery.map((image) => (
                <figure key={image.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-auto rounded" />
                  <figcaption className="mt-1 font-body text-sm text-slate-600">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div id="cora-261023-belleville-resources">
            <h2 className={h2Class}>Homeowner Resources for a Belleville Replacement</h2>
            <p className={pClass}>
              {cora261023BellevilleResourcesA}
              <a href="https://www.gaf.com/" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                GAF
              </a>
              {cora261023BellevilleResourcesB}
              <a href="https://www.bbb.org/" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                Better Business Bureau
              </a>
              {cora261023BellevilleResourcesC}
            </p>
          </div>
          <Cmt text={c[4]} />

          <h2 className={h2Class}>Service Directory: This Site's Own Pages, Town by Town</h2>
          <p className={pClass}>
            The index the estimators work from when a roof replacement Belleville NJ caller
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

          <div id="cora-261023-belleville-record">
            <h2 className={h2Class}>Business Record for This Page</h2>
            <p className={pClass}>
              The structured record below states the business behind this roof replacement
              Belleville NJ page, the service this page covers, the language the office serves
              in, and the office&apos;s published email — in the machine-readable forms this
              site publishes.
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
                  roof replacement page for Belleville, NJ
                </a>
                . Write to the office at{' '}
                <a itemProp="email" href={`mailto:${EMAIL}`} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                  {EMAIL}
                </a>
                .
              </p>
            </div>
            <div itemScope itemType="https://schema.org/Service" className="record-card mb-4">
              <p className={pClass}>
                Service record for this page: <span itemProp="name">Roof Replacement in Belleville, NJ</span>{' '}
                — service type <span itemProp="serviceType">Roof Replacement</span>, served in{' '}
                <span itemProp="availableLanguage" itemScope itemType="https://schema.org/Language">
                  <span itemProp="name">English</span> (<span itemProp="alternateName">en</span>)
                </span>
                , covering full tear-off and replacement of slate, asphalt shingle, and flat
                membrane roofs across the service area named in this record.
              </p>
            </div>
          </div>
          <Cmt text={c[6]} />
        </details>
      </div>
    </section>
  );
}
