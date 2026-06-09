import Link from 'next/link';
import type { Service, City } from '@/lib/types';
import { getServiceMenuGroups } from '@/data/nav-data';
import { getComboContent } from '@/data/combo-content';
import {
  getNearbyCityLinks,
  getRelatedServiceLinks,
  getParentPageLinks,
} from '@/data/linking/link-engine';
import { FloatingCtaButton } from '@/components/sections/FloatingCtaButton';
import { ComboHero } from '@/components/sections/ComboHero';
import { ComboOverview } from '@/components/sections/ComboOverview';
import { ComboChallenges } from '@/components/sections/ComboChallenges';
import { ComboProcess } from '@/components/sections/ComboProcess';
import { ComboFaqs } from '@/components/sections/ComboFaqs';
import { ComboRelatedLinks } from '@/components/sections/ComboRelatedLinks';
import { ComboCtaBanner } from '@/components/sections/ComboCtaBanner';
import { ComboPricing } from '@/components/sections/ComboPricing';
import { ComboWhyChooseUs } from '@/components/sections/ComboWhyChooseUs';
import { StickyFormSidebar } from '@/components/sections/StickyFormSidebar';
import { LeadForm } from '@/components/forms/LeadForm';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildServiceSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildJsonLdGraph,
} from '@/lib/schema';
import { SEO_CONFIG } from '@/lib/seo-config';
import { generateComboSlug } from '@/lib/slug-utils';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getServiceHeroImage } from '@/data/image-manifest';
import { HEADING_CONFIG } from '@/data/heading-config';

// ─── Template Component ─────────────────────────────────────────────────────

interface ComboTemplateProps {
  service: Service;
  city: City;
}

export default function ComboTemplate({ service, city }: ComboTemplateProps) {
  const serviceGroups = getServiceMenuGroups();

  // Attempt to load content; render placeholder if not yet available
  let content;
  try {
    content = getComboContent(service.id, city.id);
  } catch {
    // Content not yet created for this combo -- render graceful placeholder
    return <ComboPlaceholder service={service} city={city} serviceGroups={serviceGroups} />;
  }

  // Section image: reuse service hero
  const serviceHeroImg = getServiceHeroImage(service.id);
  const comboOverviewImage = serviceHeroImg ? { src: serviceHeroImg.path, alt: serviceHeroImg.alt } : undefined;

  // Compute internal links
  const nearbyCities = getNearbyCityLinks(service, city);
  const relatedServices = getRelatedServiceLinks(service, city);
  const parentLinks = getParentPageLinks(service, city);

  const comboSlug = generateComboSlug(service.slug, city.slug);

  return (
    <>
      <JsonLd data={buildJsonLdGraph(
        buildServiceSchema({ name: service.name, slug: comboSlug, shortDescription: service.shortDescription }),
        buildWebPageSchema(`${SEO_CONFIG.BASE_URL}/${comboSlug}`, content.metaDescription),
        buildBreadcrumbSchema([
          { name: 'Home', url: SEO_CONFIG.BASE_URL },
          { name: service.name, url: `${SEO_CONFIG.BASE_URL}/${service.slug}` },
          { name: `${service.name} in ${city.name}` },
        ]),
        buildFaqSchema(content.faqs),
      )} />

      <FloatingCtaButton />

      <ComboHero
        service={service}
        city={city}
        serviceGroups={serviceGroups}
      />

      {/* Mid-content CTA -- between challenges and process (natural break point) */}
      {/* Placed before the 2-column layout since ComboChallenges is inside it */}

      <div className="mx-auto max-w-7xl px-6 py-12 lg:grid lg:grid-cols-3 lg:gap-12 lg:px-8">
        {/* Main content column -- §4.4 Core-before-Outer order.
            The FIRST content H2 after the hero MUST be the §4.4 Core string
            (HEADING_CONFIG.combo.coreH2), rendered by ComboOverview. */}
        <article className="space-y-12 pb-16 lg:col-span-2">
          {/* §4.4 Core: "What [Service] Is Available in [City]?" -- FIRST */}
          <AnimateIn>
            <ComboOverview
              paragraphs={content.overview}
              heading={HEADING_CONFIG.combo.coreH2(service.name, city.name)}
              image={comboOverviewImage}
            />
          </AnimateIn>

          {/* §4.4 "What [Service] Problems Are Common in [City]?" */}
          <AnimateIn>
            <ComboChallenges
              paragraphs={content.challenges}
              heading={`What ${service.name} Problems Are Common in ${city.name}?`}
            />
          </AnimateIn>

          {/* Mid-content CTA -- natural break after problem, before solution */}
          <AnimateIn>
            <div className="rounded-sm border-2 border-copper/30 bg-copper/5 p-6 text-center">
              <p className="font-heading text-lg font-semibold text-forest">
                {content.conversionHooks?.midPageCta || `Ready to discuss ${service.name.toLowerCase()} in ${city.name}?`}
              </p>
              {content.conversionHooks?.urgencyNote && (
                <p className="mt-2 font-body text-sm font-medium text-copper-dark">
                  {content.conversionHooks.urgencyNote}
                </p>
              )}
              <p className="mt-2 font-body text-sm text-text-secondary">
                Call us or request a free estimate
              </p>
              <div className="mt-3">
                <PhoneNumber size="lg" className="text-copper font-semibold hover:text-copper-dark" />
              </div>
            </div>
          </AnimateIn>

          {/* §4.4 "What Is Our Process for [Service] in [City]?" */}
          <AnimateIn>
            <ComboProcess
              steps={content.process}
              heading={`What Is Our Process for ${service.name} in ${city.name}?`}
            />
          </AnimateIn>

          {/* §4.4 "How Much Does [Service] Cost in [City]?" */}
          {content.pricing && (
            <AnimateIn>
              <ComboPricing
                pricing={content.pricing}
                serviceName={service.name}
                cityName={city.name}
              />
            </AnimateIn>
          )}

          {/* §4.4 "Why Choose Our Roofing Company for [Service] in [City]?" */}
          {content.whyChooseUs && content.whyChooseUs.length > 0 && (
            <AnimateIn><ComboWhyChooseUs reasons={content.whyChooseUs} serviceName={service.name} cityName={city.name} /></AnimateIn>
          )}

          {/* §4.4 "What Other Roofing Services..." + "Where Else Do We Provide..." */}
          <AnimateIn>
            <ComboRelatedLinks
              nearbyCities={nearbyCities}
              relatedServices={relatedServices}
              parents={parentLinks}
              cityName={city.name}
            />
          </AnimateIn>

          {/* §4.4 "What Questions Do Customers Ask About This Roofing Service?" */}
          <AnimateIn><ComboFaqs faqs={content.faqs} /></AnimateIn>

        </article>

        {/* Sticky sidebar */}
        <StickyFormSidebar>
          <div className="space-y-6">
            <LeadForm
              variant="standard"
              defaultService={service.slug}
              defaultCity={city.id}
              serviceGroups={serviceGroups}
            />

            {/* Nearby cities quick links -- sidebar section (3rd format) */}
            {nearbyCities.length > 0 && (
              <aside className="rounded-lg border border-border bg-parchment-light p-4" aria-label="Nearby service areas">
                <span className="block font-heading text-sm font-bold text-forest">
                  Nearby
                </span>
                <ul className="mt-2 space-y-1">
                  {nearbyCities.map((link, index) => (
                    <li key={link.slug}>
                      <Link
                        href={`/${link.slug}`}
                        className="font-body text-sm text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </StickyFormSidebar>
      </div>

      <ComboCtaBanner
        service={service}
        city={city}
        serviceGroups={serviceGroups}
      />
    </>
  );
}

// ─── Placeholder for combos without content yet ─────────────────────────────

import type { NavServiceGroup } from '@/data/nav-data';

function ComboPlaceholder({
  service,
  city,
  serviceGroups,
}: {
  service: Service;
  city: City;
  serviceGroups: NavServiceGroup[];
}) {
  return (
    <>
      <FloatingCtaButton />

      <ComboHero
        service={service}
        city={city}
        serviceGroups={serviceGroups}
      />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:grid lg:grid-cols-3 lg:gap-12 lg:px-8">
        <div className="space-y-8 pb-16 lg:col-span-2">
          <div className="rounded-sm border border-border bg-white p-8">
            {/* §4.4 Core question -- the 942 noindex combos render this placeholder
                path, so its first H2 must be the Core string (HTAG-06/08). */}
            <h2 className="font-heading text-2xl font-bold text-forest">
              {HEADING_CONFIG.combo.coreH2(service.name, city.name)}
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
              Newark Quality Roofing provides professional {service.name.toLowerCase()} services
              in {city.name} and throughout Essex County, New Jersey. Contact us for a free
              estimate and consultation.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
              Our licensed and insured team brings years of experience to every project.
              We serve {city.name} with the same commitment to quality that has made us a
              trusted name across Essex County.
            </p>
          </div>
        </div>

        <StickyFormSidebar>
          <LeadForm
            variant="standard"
            defaultService={service.slug}
            defaultCity={city.id}
            serviceGroups={serviceGroups}
          />
        </StickyFormSidebar>
      </div>

      <ComboCtaBanner
        service={service}
        city={city}
        serviceGroups={serviceGroups}
      />
    </>
  );
}
