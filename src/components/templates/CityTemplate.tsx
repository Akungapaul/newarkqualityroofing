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
import { CityServicesGrid } from '@/components/sections/CityServicesGrid';
import { CityTestimonials } from '@/components/sections/CityTestimonials';
import { CityProjectSpotlights } from '@/components/sections/CityProjectSpotlights';
import { CityFaqs } from '@/components/sections/CityFaqs';
import { CityMapNap } from '@/components/sections/CityMapNap';
import { CityNearbyCities } from '@/components/sections/CityNearbyCities';
import { CityCtaBanner } from '@/components/sections/CityCtaBanner';
import { CityPricing } from '@/components/sections/CityPricing';
import { ServiceCredentials } from '@/components/sections/ServiceCredentials';

// ─── Table of Contents sections ─────────────────────────────────────────────

const tocSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'neighborhoods', label: 'Neighborhoods' },
  { id: 'services', label: 'Services' },
  { id: 'why-choose', label: 'Why Choose Us' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'projects', label: 'Projects' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'location', label: 'Location' },
  { id: 'nearby', label: 'Nearby Cities' },
];

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

  return (
    <>
      <FloatingCtaButton />

      <CityHero city={city} content={content} serviceGroups={serviceGroups} />

      <CityStatsBar stats={content.stats} cityName={city.name} />

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

          {/* Main content column */}
          <article className="space-y-16 lg:col-span-3">
            <section id="overview" aria-labelledby="overview-heading">
              <CityOverview
                paragraphs={content.overview}
                cityName={city.name}
                weatherChallenges={content.weatherChallenges}
              />
            </section>

            <section id="residential" aria-labelledby="residential-heading">
              <CityResidential
                heading={content.residential.heading}
                content={content.residential.content}
              />
            </section>

            <section id="commercial" aria-labelledby="commercial-heading">
              <CityCommercial
                heading={content.commercial.heading}
                content={content.commercial.content}
              />
            </section>

            {/* Pricing section -- after commercial */}
            {content.pricing && (
              <section id="pricing" aria-labelledby="city-pricing-heading">
                <CityPricing pricing={content.pricing} cityName={city.name} />
              </section>
            )}

            <section id="neighborhoods" aria-labelledby="neighborhoods-heading">
              <CityNeighborhoods
                neighborhoods={content.neighborhoods}
                cityName={city.name}
              />
            </section>

            <section id="services" aria-labelledby="services-heading">
              <CityServicesGrid cityName={city.name} citySlug={city.slug} />
            </section>

            <section id="why-choose" aria-labelledby="why-choose-heading">
              <h2 id="why-choose-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
                {content.whyChoose.heading}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {content.whyChoose.reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="rounded-lg border border-border bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-heading text-lg font-semibold text-forest">
                      {reason.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="testimonials" aria-labelledby="testimonials-heading">
              <CityTestimonials
                testimonials={content.testimonials}
                cityName={city.name}
              />
            </section>

            <section id="projects" aria-labelledby="projects-heading">
              <CityProjectSpotlights
                spotlights={content.projectSpotlights}
                cityName={city.name}
              />
            </section>

            <section id="faqs" aria-labelledby="faqs-heading">
              <CityFaqs faqs={content.faqs} cityName={city.name} />
            </section>

            <section id="location" aria-labelledby="location-heading">
              <CityMapNap cityName={city.name} state={city.state} />
            </section>

            <section id="nearby" aria-labelledby="nearby-heading">
              <CityNearbyCities
                adjacentCities={adjacentCities}
                currentCityName={city.name}
              />
            </section>
          </article>
        </div>
      </div>

      <CityCtaBanner cityName={city.name} />
    </>
  );
}
