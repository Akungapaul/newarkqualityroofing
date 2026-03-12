import type { Service, ServiceContent } from '@/lib/types';
import { services } from '@/data/services';
import { getServiceMenuGroups } from '@/data/nav-data';
import { getServiceContent } from '@/data/service-content';
import { LeadForm } from '@/components/forms/LeadForm';
import { FloatingCtaButton } from '@/components/sections/FloatingCtaButton';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { StickyFormSidebar } from '@/components/sections/StickyFormSidebar';
import { ServiceOverview } from '@/components/sections/ServiceOverview';
import { ServiceSigns } from '@/components/sections/ServiceSigns';
import { ServiceApproach } from '@/components/sections/ServiceApproach';
import { ServiceAudience } from '@/components/sections/ServiceAudience';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ServiceFaq } from '@/components/sections/ServiceFaq';
import { ServicePricing } from '@/components/sections/ServicePricing';
import { ServiceWhyChooseUs } from '@/components/sections/ServiceWhyChooseUs';
import { ServiceCredentials } from '@/components/sections/ServiceCredentials';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { ServiceInlineCta } from '@/components/sections/ServiceInlineCta';
import { ServiceCtaBanner } from '@/components/sections/ServiceCtaBanner';
import { ServiceLearnMore } from '@/components/sections/ServiceLearnMore';
import { ServiceRelatedComparisons } from '@/components/sections/ServiceRelatedComparisons';
import { TrustBar } from '@/components/sections/TrustBar';
import { CompactTestimonial } from '@/components/sections/CompactTestimonial';
import { testimonials } from '@/data/testimonials';
import { getMoneyPageArticle } from '@/data/linking/link-engine';
import { getRelatedComparisons } from '@/data/linking/comparison-links';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildServiceSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildJsonLdGraph,
} from '@/lib/schema';
import { SEO_CONFIG } from '@/lib/seo-config';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getContentPoolImages } from '@/data/image-manifest';

// ─── Commercial-first service IDs ────────────────────────────────────────────

const COMMERCIAL_FIRST_IDS = new Set([
  'commercial-roof-installation',
  'commercial-roof-repair',
  'commercial-roof-replacement',
  'roof-thermal-imaging-inspections',
  'infrared-roof-leak-detection',
]);

// ─── Placeholder content generator ──────────────────────────────────────────

function generatePlaceholderContent(service: Service): ServiceContent {
  return {
    serviceId: service.id,
    overview: [
      `${service.name} is one of our core service offerings at Newark Quality Roofing. We bring years of experience and professional expertise to every ${service.name.toLowerCase()} project across Essex County, NJ.`,
      `${service.shortDescription} Whether you need residential or commercial work, our licensed and insured team delivers quality results with transparent pricing and reliable timelines.`,
    ],
    signsHeading: `Signs You May Need ${service.name}`,
    signs: [
      'Visible damage or deterioration on your roof surface',
      'Water stains or leaks appearing on ceilings or walls',
      'Rising energy costs indicating poor roof insulation',
      'Your roof is approaching or past its expected lifespan',
    ],
    approachHeading: `Our Approach to ${service.name}`,
    approachContent: [
      `At Newark Quality Roofing, we take a thorough, detail-oriented approach to every ${service.name.toLowerCase()} project. Our process begins with a comprehensive inspection to assess the current condition and identify any underlying issues.`,
      'We use only premium materials from trusted manufacturers and employ industry best practices to ensure lasting results. Every project is backed by our workmanship warranty for your peace of mind.',
    ],
    residential: {
      heading: `Residential ${service.name}`,
      content: [
        `Your home deserves the best protection. Our residential ${service.name.toLowerCase()} services are tailored to the unique needs of homeowners across Essex County.`,
        'We work with all residential roof types including asphalt shingles, slate, tile, and flat roofing systems. Our team respects your property and completes work efficiently with minimal disruption.',
      ],
      ctaLabel: 'Get a Residential Estimate',
    },
    commercial: {
      heading: `Commercial ${service.name}`,
      content: [
        `Commercial properties require specialized expertise. Our commercial ${service.name.toLowerCase()} services address the unique demands of business and industrial buildings.`,
        'From TPO and EPDM to modified bitumen and metal systems, we handle all commercial roofing materials. We schedule work to minimize business interruption and meet all safety requirements.',
      ],
      ctaLabel: 'Get a Commercial Estimate',
    },
    processSteps: [
      {
        title: 'Free Inspection & Estimate',
        description: 'We visit your property, assess the current condition, and provide a detailed written estimate with no obligation.',
      },
      {
        title: 'Material Selection & Scheduling',
        description: 'Choose from our curated selection of quality materials. We schedule work at a time that fits your needs.',
      },
      {
        title: 'Professional Installation',
        description: 'Our licensed crew completes the work with attention to detail, proper safety protocols, and site cleanliness.',
      },
      {
        title: 'Final Inspection & Warranty',
        description: 'We conduct a thorough final inspection and provide warranty documentation for both materials and workmanship.',
      },
    ],
    faqs: [
      {
        question: `How much does ${service.name.toLowerCase()} cost?`,
        answer: `The cost of ${service.name.toLowerCase()} varies based on factors like roof size, materials, and complexity. Contact us for a free, detailed estimate tailored to your specific project.`,
      },
      {
        question: `How long does ${service.name.toLowerCase()} take?`,
        answer: 'Project timelines depend on the scope of work and weather conditions. Most residential projects are completed within 1-3 days, while larger commercial projects may take longer.',
      },
      {
        question: 'Do you offer warranties?',
        answer: 'Yes, we provide comprehensive warranties covering both materials and workmanship. Specific warranty terms vary by project and materials selected.',
      },
      {
        question: 'Are you licensed and insured?',
        answer: 'Absolutely. Newark Quality Roofing is fully licensed and insured in the state of New Jersey. We carry comprehensive liability and workers compensation coverage.',
      },
    ],
  };
}

// ─── Template Component ─────────────────────────────────────────────────────

interface ServiceTemplateProps {
  service: Service;
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  const serviceGroups = getServiceMenuGroups();

  // Try to load real content; fall back to placeholder
  let content: ServiceContent;
  try {
    content = getServiceContent(service.id);
  } catch {
    content = generatePlaceholderContent(service);
  }

  // Determine commercial-first ordering
  const isCommercialFirst = COMMERCIAL_FIRST_IDS.has(service.id);

  // Get related services (same category, exclude current, max 4)
  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 4)
    .map((s) => ({
      name: s.name,
      slug: s.slug,
      shortDescription: s.shortDescription,
    }));

  // Content pool images for sections
  const consultationImgs = getContentPoolImages('consultation');
  const materialsImgs = getContentPoolImages('materials');
  const crewImgs = getContentPoolImages('crew');
  const overviewImg = consultationImgs[0];
  const approachImg = materialsImgs[0];
  const processImg = crewImgs[0];

  // Derive hero benefits from short description
  const benefits = [
    `Professional ${service.name.toLowerCase()} services`,
    'Licensed and insured Essex County contractor',
    'Free estimates with no obligation',
  ];

  return (
    <>
      <JsonLd data={buildJsonLdGraph(
        buildServiceSchema({ name: service.name, slug: service.slug, shortDescription: service.shortDescription }),
        buildWebPageSchema(`${SEO_CONFIG.BASE_URL}/${service.slug}`, service.metaTitle),
        buildBreadcrumbSchema([
          { name: 'Home', url: SEO_CONFIG.BASE_URL },
          { name: 'Services', url: `${SEO_CONFIG.BASE_URL}/services` },
          { name: service.name },
        ]),
        buildFaqSchema(content.faqs),
      )} />

      <FloatingCtaButton />

      <ServiceHero
        service={service}
        serviceGroups={serviceGroups}
        benefits={benefits}
      />

      {/* Trust bar: text-only stats with SVG icons */}
      <TrustBar variant="compact" />

      {/* Credentials badge row — below hero */}
      {content.credentialsHighlight && content.credentialsHighlight.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
          <ServiceCredentials credentials={content.credentialsHighlight} />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6 py-12 lg:grid lg:grid-cols-3 lg:gap-12 lg:px-8">
        {/* Main content column -- child components render their own <section> with aria-labelledby */}
        <article className="space-y-12 pb-16 lg:col-span-2">
          <AnimateIn><ServiceOverview paragraphs={content.overview} image={overviewImg ? { src: overviewImg.path, alt: overviewImg.alt } : undefined} /></AnimateIn>

          <AnimateIn><ServiceSigns heading={content.signsHeading} signs={content.signs} /></AnimateIn>

          <ServiceInlineCta serviceName={service.name} />

          <AnimateIn>
            <ServiceApproach
              heading={content.approachHeading}
              content={content.approachContent}
              image={approachImg ? { src: approachImg.path, alt: approachImg.alt } : undefined}
              subheadings={content.approachSubheadings}
              imagePosition="above"
            />
          </AnimateIn>

          {isCommercialFirst ? (
            <>
              <AnimateIn>
                <ServiceAudience
                  variant="commercial"
                  heading={content.commercial.heading}
                  content={content.commercial.content}
                  ctaLabel={content.commercial.ctaLabel}
                />
              </AnimateIn>
              <AnimateIn>
                <ServiceAudience
                  variant="residential"
                  heading={content.residential.heading}
                  content={content.residential.content}
                  ctaLabel={content.residential.ctaLabel}
                />
              </AnimateIn>
            </>
          ) : (
            <>
              <AnimateIn>
                <ServiceAudience
                  variant="residential"
                  heading={content.residential.heading}
                  content={content.residential.content}
                  ctaLabel={content.residential.ctaLabel}
                />
              </AnimateIn>
              <AnimateIn>
                <ServiceAudience
                  variant="commercial"
                  heading={content.commercial.heading}
                  content={content.commercial.content}
                  ctaLabel={content.commercial.ctaLabel}
                />
              </AnimateIn>
            </>
          )}

          <AnimateIn><ServiceProcess steps={content.processSteps} image={processImg ? { src: processImg.path, alt: processImg.alt } : undefined} /></AnimateIn>

          {/* Pricing section -- after process */}
          {content.pricing && (
            <AnimateIn><ServicePricing pricing={content.pricing} serviceName={service.name} /></AnimateIn>
          )}

          {/* Why Choose Us -- before FAQs */}
          {content.whyChooseUs && (
            <AnimateIn>
              <ServiceWhyChooseUs
                heading={content.whyChooseUs.heading}
                reasons={content.whyChooseUs.reasons}
              />
            </AnimateIn>
          )}

          <AnimateIn><ServiceFaq faqs={content.faqs} /></AnimateIn>

          {/* Learn More -- reverse silo link to position-1 article */}
          {(() => {
            const article = getMoneyPageArticle(service.id, 'service');
            return article ? <AnimateIn><ServiceLearnMore article={article} serviceName={service.name} /></AnimateIn> : null;
          })()}

          {/* Related Comparisons -- contextual comparison links */}
          <AnimateIn><ServiceRelatedComparisons comparisons={getRelatedComparisons(service.id)} /></AnimateIn>

          {/* Compact testimonials -- 1-2 relevant reviews */}
          <AnimateIn>
            <CompactTestimonial
              testimonials={testimonials}
              filterBy={{ type: 'service', value: service.name }}
            />
          </AnimateIn>
        </article>

        {/* Sticky sidebar */}
        <StickyFormSidebar>
          <LeadForm
            variant="standard"
            defaultService={service.slug}
            serviceGroups={serviceGroups}
          />
        </StickyFormSidebar>
      </div>

      <RelatedServices services={relatedServices} />

      <ServiceCtaBanner
        serviceGroups={serviceGroups}
        defaultService={service.slug}
      />
    </>
  );
}
