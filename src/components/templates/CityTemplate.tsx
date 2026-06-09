import type { City } from '@/lib/types';
import { cities } from '@/data/cities';
import { getServiceMenuGroups } from '@/data/nav-data';
import { getCityContent } from '@/data/city-content';
import { FloatingCtaButton } from '@/components/sections/FloatingCtaButton';
import { CityHero } from '@/components/sections/CityHero';
import { CityStatsBar } from '@/components/sections/CityStatsBar';
import { CityTableOfContents } from '@/components/sections/CityTableOfContents';
import { CityOverview } from '@/components/sections/CityOverview';
import { CityResidential } from '@/components/sections/CityResidential';
import { CityCommercial } from '@/components/sections/CityCommercial';
import { CityNeighborhoods } from '@/components/sections/CityNeighborhoods';
import { CityMaterials } from '@/components/sections/CityMaterials';
import { CityPermits } from '@/components/sections/CityPermits';
import { CityServicesGrid } from '@/components/sections/CityServicesGrid';
import { CityProjectSpotlights } from '@/components/sections/CityProjectSpotlights';
import { CityFaqs } from '@/components/sections/CityFaqs';
import { CityMapNap } from '@/components/sections/CityMapNap';
import { CityNearbyCities } from '@/components/sections/CityNearbyCities';
import { CityCtaBanner } from '@/components/sections/CityCtaBanner';
import { CityPricing } from '@/components/sections/CityPricing';
import { ServiceCredentials } from '@/components/sections/ServiceCredentials';
import { TrustBar } from '@/components/sections/TrustBar';
import { getCityOverviewImage } from '@/data/image-manifest';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildLocalBusinessSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildJsonLdGraph,
} from '@/lib/schema';
import { SEO_CONFIG } from '@/lib/seo-config';
import { generateCityPageSlug } from '@/lib/slug-utils';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getGalleryPairs } from '@/data/image-manifest';
import { HEADING_CONFIG } from '@/data/heading-config';

// ─── Template Component ─────────────────────────────────────────────────────

interface CityTemplateProps {
  city: City;
}

export default function CityTemplate({ city }: CityTemplateProps) {
  const serviceGroups = getServiceMenuGroups();

  // Resolve adjacent cities
  const adjacentCities = city.adjacentCityIds
    .map((id) => cities.find((c) => c.id === id))
    .filter((c): c is City => c !== undefined);

  // Load city content (all 21 cities have content -- throws if missing)
  const content = getCityContent(city.id);

  // Table of contents — ordered to MATCH the on-page render order below. Scroll-spy
  // highlights the in-view section, so the list order must equal the vertical order
  // or the highlight jumps. The Cost entry is conditional because CityPricing only
  // renders when the city has pricing.
  const tocSections = [
    { id: 'services', label: 'Services' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'overview', label: 'Roof Problems' },
    { id: 'neighborhoods', label: 'Neighborhoods' },
    { id: 'materials', label: 'Materials' },
    { id: 'permits', label: 'Permits' },
    ...(content.pricing ? [{ id: 'pricing', label: 'Cost' }] : []),
    { id: 'projects', label: 'Projects' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'location', label: 'Location' },
    { id: 'nearby', label: 'Nearby Cities' },
  ];

  // Gallery pairs for project spotlights
  const pairs = getGalleryPairs().slice(0, 2);
  const galleryPairs = pairs.map((p) => ({
    before: { src: p.before.path, alt: p.before.alt },
    after: { src: p.after.path, alt: p.after.alt },
  }));

  return (
    <>
      <JsonLd data={buildJsonLdGraph(
        buildLocalBusinessSchema({ name: city.name, state: city.state, zipCodes: city.zipCodes }),
        buildWebPageSchema(`${SEO_CONFIG.BASE_URL}/${generateCityPageSlug(city.slug)}`, content.metaTitle),
        buildBreadcrumbSchema([
          { name: 'Home', url: SEO_CONFIG.BASE_URL },
          { name: 'Locations', url: `${SEO_CONFIG.BASE_URL}/locations` },
          { name: city.name },
        ]),
        buildFaqSchema(content.faqs),
      )} />

      <FloatingCtaButton />

      <CityHero city={city} content={content} serviceGroups={serviceGroups} />

      {/* Trust bar: text-only stats with SVG icons */}
      <TrustBar variant="compact" />

      <CityStatsBar cityName={city.name} />

      {/* Credentials badge row */}
      {content.credentialsHighlight && content.credentialsHighlight.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 pt-4 lg:px-8">
          <ServiceCredentials credentials={content.credentialsHighlight} />
        </div>
      )}

      {/* Main content with ToC sidebar */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-10">
          {/* Sidebar: Table of Contents */}
          <aside className="hidden lg:block lg:col-span-1">
            <CityTableOfContents sections={tocSections} />
          </aside>

          {/* Main content column -- §4.3 Core-before-Outer order.
              The FIRST content H2 after the hero MUST be the §4.3 Core string
              (HEADING_CONFIG.city.coreH2), rendered by CityServicesGrid. */}
          <article className="space-y-16 lg:col-span-3">
            {/* §4.3 Core: "What Roofing Services Are Available in [City]?" -- FIRST */}
            <AnimateIn>
              <section id="services" aria-labelledby="services-heading">
                <CityServicesGrid
                  cityName={city.name}
                  citySlug={city.slug}
                  coreHeading={HEADING_CONFIG.city.coreH2(city.name)}
                />
              </section>
            </AnimateIn>

            {/* Residential / Commercial split (Core sub-context) */}
            <AnimateIn>
              <section id="residential" aria-labelledby="residential-heading">
                <CityResidential content={content.residential.content} />
              </section>
            </AnimateIn>

            <AnimateIn>
              <section id="commercial" aria-labelledby="commercial-heading">
                <CityCommercial content={content.commercial.content} />
              </section>
            </AnimateIn>

            {/* §4.3 "What Roofing Problems Are Common in [City]?" */}
            <AnimateIn>
              <section id="overview" aria-labelledby="overview-heading">
                <CityOverview
                  paragraphs={content.overview}
                  cityName={city.name}
                  weatherChallenges={content.weatherChallenges}
                  overviewImage={getCityOverviewImage(city.id)}
                />
              </section>
            </AnimateIn>

            {/* §4.3 "Which Neighborhoods Do We Serve in [City]?" */}
            <AnimateIn>
              <section id="neighborhoods" aria-labelledby="neighborhoods-heading">
                <CityNeighborhoods
                  neighborhoods={content.neighborhoods}
                  cityName={city.name}
                />
              </section>
            </AnimateIn>

            {/* §4.3 "What Roofing Materials Work Best for [City] Properties?" (NEW, D-11).
                Materials precedes Permits per the §4.3 tree order. */}
            <AnimateIn>
              <section id="materials" aria-labelledby="materials-heading">
                <CityMaterials cityName={city.name} />
              </section>
            </AnimateIn>

            {/* §4.3 "What Should You Know About Roofing Permits in [City]?" (NEW, D-11) */}
            <AnimateIn>
              <section id="permits" aria-labelledby="permits-heading">
                <CityPermits cityName={city.name} />
              </section>
            </AnimateIn>

            {/* Cost section -- after Materials/Permits */}
            {content.pricing && (
              <AnimateIn>
                <section id="pricing" aria-labelledby="city-pricing-heading">
                  <CityPricing pricing={content.pricing} cityName={city.name} />
                </section>
              </AnimateIn>
            )}

            {/* §4.3 "What Roofing Projects Do We Handle in [City]?" */}
            <AnimateIn>
              <section id="projects" aria-labelledby="projects-heading">
                <CityProjectSpotlights
                  spotlights={content.projectSpotlights}
                  cityName={city.name}
                  galleryPairs={galleryPairs}
                />
              </section>
            </AnimateIn>

            {/* §4.3 "What Questions Do [City] Property Owners Ask About Roofing?" */}
            <AnimateIn>
              <section id="faqs" aria-labelledby="faqs-heading">
                <CityFaqs faqs={content.faqs} cityName={city.name} />
              </section>
            </AnimateIn>

            {/* Why choose us -- question-form H2 (Outer band) */}
            <AnimateIn>
              <section id="why-choose" aria-labelledby="why-choose-heading">
                <h2 id="why-choose-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
                  Why Should You Choose Our Roofing Company in {city.name}?
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {content.whyChoose.reasons.map((reason) => (
                    <div
                      key={reason.title}
                      className="rounded-lg border border-border bg-white p-5 shadow-sm"
                    >
                      <span className="block font-heading text-lg font-semibold text-forest">
                        {reason.title}
                      </span>
                      <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                        {reason.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </AnimateIn>

            {/* §4.3 "Where Can You Find Us Near [City]?" */}
            <AnimateIn>
              <section id="location" aria-labelledby="location-heading">
                <CityMapNap cityName={city.name} state={city.state} />
              </section>
            </AnimateIn>

            {/* §4.3 "Where Else Do We Provide Roofing Services Near [City]?" */}
            <AnimateIn>
              <section id="nearby" aria-labelledby="nearby-heading">
                <CityNearbyCities
                  adjacentCities={adjacentCities}
                  currentCityName={city.name}
                />
              </section>
            </AnimateIn>
          </article>
        </div>
      </div>

      <CityCtaBanner cityName={city.name} />
    </>
  );
}
