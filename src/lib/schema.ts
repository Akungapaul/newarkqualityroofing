// ─── JSON-LD Schema Builder Functions ────────────────────────────────────────
//
// Single source of truth for all structured data markup.
// All @id references are consistent so Google connects entities across @graph.

import { siteConfig } from '@/data/site-config';
import { siteConfig as canonicalConfig } from '@/config/site-config';
import { SEO_CONFIG } from '@/lib/seo-config';
import { cities } from '@/data/cities';

/** Newark neighborhoods named in city-content/urban-core.ts (ward already embedded). */
const NEWARK_NEIGHBORHOODS = [
  'The Ironbound (East Ward)',
  'Forest Hill (North Ward)',
  'Vailsburg (West Ward)',
  'Roseville (West Ward)',
  'Weequahic and the South Ward',
  'University Heights and Downtown (Central Ward)',
  'James Street Commons and Lincoln Park',
] as const;

const BASE_URL = SEO_CONFIG.BASE_URL;

/**
 * Strip markdown markers for clean JSON-LD text.
 *
 * Links go FIRST: `[label](/url)` → `label`. Without this the raw syntax leaks
 * into `acceptedAnswer.text` on every FAQPage emitter, because the bold/italic
 * passes leave brackets and parens untouched. Structured-data text is meant to
 * match the visible answer, and `[our process](/our-roofing-process)` does not.
 */
function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1');
}

// ─── Internal helper ─────────────────────────────────────────────────────────

function buildPostalAddress(): Record<string, unknown> {
  return {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: 'US',
  };
}

// ─── Opening hours (shared by RoofingContractor and LocalBusiness) ───────────

function buildOpeningHours(): Record<string, unknown>[] {
  return [
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
}

// ─── Aggregate rating (shared) ───────────────────────────────────────────────
//
// D-01 [RESOLVED 2026-06-01]: gated behind canonicalConfig.rating.enabled.
// While rating.enabled === false, this returns null and BOTH call sites
// conditionally spread the result so the `aggregateRating` KEY is OMITTED
// entirely from the emitted JSON-LD (never set to null). The known-false
// 5.0/500 claim therefore appears nowhere in HTML or JSON-LD. When rating
// becomes canonical and rating.enabled is flipped to true, the value/count
// flow from siteConfig.rating — never hardcoded.

function buildAggregateRating(): Record<string, unknown> | null {
  const { rating } = canonicalConfig;
  // Fail closed. Requiring the values as well as the flag means a future partial
  // flip (enabled = true before the real numbers land) omits the node entirely
  // rather than emitting an empty ratingValue/reviewCount.
  if (!rating.enabled || !rating.value || !rating.count) {
    return null;
  }
  return {
    '@type': 'AggregateRating',
    ratingValue: rating.value,
    reviewCount: rating.count,
    bestRating: '5',
    worstRating: '1',
  };
}

// ─── Public builder functions ────────────────────────────────────────────────

// ─── Area served ─────────────────────────────────────────────────────────────

/**
 * Service area as structured places: Essex County, its 21 municipalities, every
 * ZIP the city data declares, and the Newark neighborhoods from urban-core.
 *
 * Neighborhoods come from urban-core ONLY — the roof-repair page's own chips
 * overlap, since urban-core names already embed the ward.
 */
export function buildAreaServedList(): Array<Record<string, unknown>> {
  const out: Array<Record<string, unknown>> = [
    { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
  ];
  for (const city of cities) {
    out.push({ '@type': 'City', name: `${city.name}, NJ` });
    for (const zip of city.zipCodes) {
      out.push({ '@type': 'PostalCodeSpecification', postalCode: zip, addressCountry: 'US' });
    }
  }
  for (const n of NEWARK_NEIGHBORHOODS) out.push({ '@type': 'Place', name: `${n}, Newark, NJ` });
  return out;
}

/**
 * Credentials the business actually holds. No `identifier` — site-config's
 * license.number is deliberately empty until the canonical NJ HIC number is
 * supplied, and a placeholder would be a fabricated credential number.
 * Entry 2 is "GAF-Certified Installers", what content-constants substantiates;
 * "GAF Certified Roofing Contractor" would assert company-level membership.
 */
export function buildCredentialSchemas(): Array<Record<string, unknown>> {
  return [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'New Jersey Home Improvement Contractor Registration',
      credentialCategory: 'Registration',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'New Jersey Division of Consumer Affairs',
        url: 'https://www.njconsumeraffairs.gov/hic',
      },
      validIn: { '@type': 'State', name: 'New Jersey' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'GAF-Certified Installers',
      credentialCategory: 'Certification',
      recognizedBy: { '@type': 'Organization', name: 'GAF' },
    },
  ];
}

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: siteConfig.companyName,
    url: BASE_URL,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    // Restates the telephone and email already emitted above and already visible
    // on the page. No new claim; contactType is a schema.org enumeration label,
    // not an assertion about the business. availableLanguage is deliberately
    // omitted — no language capability is substantiated anywhere on the site.
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: siteConfig.phone.tel,
      email: siteConfig.email,
    },
    address: buildPostalAddress(),
  };
}

export function buildRoofingContractorSchema(): Record<string, unknown> {
  const aggregateRating = buildAggregateRating();
  return {
    // Both types are true: schema.org places RoofingContractor under
    // HomeAndConstructionBusiness under LocalBusiness, and Google resolves that
    // inheritance already. The array is here because Cora does a literal
    // lowercase token match on the page source and scores "localbusiness" 0
    // without it. Most-specific type stays first. Applied to BOTH writers —
    // they share the #roofingcontractor @id, so their shapes must not diverge.
    '@type': ['RoofingContractor', 'LocalBusiness'],
    '@id': `${BASE_URL}/#roofingcontractor`,
    name: siteConfig.companyName,
    url: BASE_URL,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    priceRange: '$$',
    address: buildPostalAddress(),
    // D-01: aggregateRating key omitted entirely while rating is disabled.
    ...(aggregateRating ? { aggregateRating } : {}),
    openingHoursSpecification: buildOpeningHours(),
    areaServed: buildAreaServedList(),
    hasCredential: buildCredentialSchemas(),
  };
}

export function buildWebSiteSchema(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: siteConfig.companyName,
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
}

export function buildWebPageSchema(url: string, name: string): Record<string, unknown> {
  return {
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url,
    name,
    isPartOf: { '@id': `${BASE_URL}/#website` },
  };
}

export function buildLocalBusinessSchema(city: {
  name: string;
  state: string;
  zipCodes: string[];
}): Record<string, unknown> {
  const aggregateRating = buildAggregateRating();
  return {
    // Both types are true: schema.org places RoofingContractor under
    // HomeAndConstructionBusiness under LocalBusiness, and Google resolves that
    // inheritance already. The array is here because Cora does a literal
    // lowercase token match on the page source and scores "localbusiness" 0
    // without it. Most-specific type stays first. Applied to BOTH writers —
    // they share the #roofingcontractor @id, so their shapes must not diverge.
    '@type': ['RoofingContractor', 'LocalBusiness'],
    '@id': `${BASE_URL}/#roofingcontractor`,
    name: siteConfig.companyName,
    url: BASE_URL,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    priceRange: '$$',
    address: buildPostalAddress(),
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: 'NJ',
      },
    },
    // D-01: aggregateRating key omitted entirely while rating is disabled.
    ...(aggregateRating ? { aggregateRating } : {}),
    openingHoursSpecification: buildOpeningHours(),
  };
}

/**
 * Offer catalog from a service's core sub-services.
 *
 * No `position` — that is a ListItem property, not an Offer one, and Google
 * drops it. No `price`: only a whole-job range is substantiated, and pricing an
 * individual repair would invent a figure. Descriptions run through
 * stripMarkdown so authored bold does not leak into structured data.
 */
export function buildServiceOfferCatalog(
  serviceName: string,
  subServices: Array<{ name: string; description: string }>,
): Record<string, unknown> {
  return {
    '@type': 'OfferCatalog',
    name: `${serviceName} services`,
    itemListElement: subServices.map((sub) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: sub.name,
        description: stripMarkdown(sub.description),
      },
    })),
  };
}

export function buildServiceSchema(
  service: {
    name: string;
    slug: string;
    shortDescription: string;
  },
  // Optional and defaulted off. buildServiceSchema is also called from
  // ComboTemplate.tsx, so an unconditional change here would rewrite the Service
  // node on every combo page.
  opts?: { subServices?: Array<{ name: string; description: string }> },
): Record<string, unknown> {
  const catalog =
    opts?.subServices && opts.subServices.length > 0
      ? buildServiceOfferCatalog(service.name, opts.subServices)
      : null;
  return {
    '@type': 'Service',
    '@id': `${BASE_URL}/${service.slug}/#service`,
    name: service.name,
    description: service.shortDescription,
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Essex County, NJ',
    },
    ...(catalog ? { hasOfferCatalog: catalog } : {}),
  };
}

export function buildFaqSchema(
  faqs: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: stripMarkdown(faq.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripMarkdown(faq.answer),
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>,
): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      };
      // Last item has no URL per schema.org spec
      if (item.url) {
        entry.item = item.url;
      }
      return entry;
    }),
  };
}

export function buildArticleSchema(article: {
  title: string;
  slug: string;
  description: string;
}): Record<string, unknown> {
  return {
    '@type': 'Article',
    '@id': `${BASE_URL}/${article.slug}/#article`,
    headline: article.title,
    description: article.description,
    author: { '@id': `${BASE_URL}/#organization` },
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
}

export function buildJsonLdGraph(
  ...schemas: Record<string, unknown>[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
