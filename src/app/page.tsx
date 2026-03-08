import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { HomeRepairServices } from '@/components/sections/HomeRepairServices';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { HomeResidentialCommercial } from '@/components/sections/HomeResidentialCommercial';
import { HomeWhyChooseUs } from '@/components/sections/HomeWhyChooseUs';
import { HomePricingTable } from '@/components/sections/HomePricingTable';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { HomeAboutContent } from '@/components/sections/HomeAboutContent';
import { LocationsGrid } from '@/components/sections/LocationsGrid';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { testimonials } from '@/data/testimonials';
import { faqItems } from '@/data/faq';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Roof Repair in Newark NJ | Newark Quality Roofing Contractors',
  description:
    'Trusted local roof repair services in Newark, NJ. Residential and commercial roofing — roof replacement, inspections, siding, and gutters. Call for a free quote.',
};

function HomeJsonLd() {
  const baseUrl = 'https://www.newarkqualityroofing.com';

  const graph = [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: siteConfig.companyName,
      url: baseUrl,
      telephone: siteConfig.phone.tel,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: 'US',
      },
    },
    {
      '@type': 'RoofingContractor',
      '@id': `${baseUrl}/#roofingcontractor`,
      name: siteConfig.companyName,
      url: baseUrl,
      telephone: siteConfig.phone.tel,
      email: siteConfig.email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: 'US',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
      openingHoursSpecification: [
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
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: siteConfig.companyName,
      publisher: { '@id': `${baseUrl}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}/#webpage`,
      url: baseUrl,
      name: 'Roof Repair in Newark NJ | Newark Quality Roofing Contractors',
      isPartOf: { '@id': `${baseUrl}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${baseUrl}/#faqpage`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <HomeJsonLd />

      {/* Hero with lead form above the fold */}
      <HeroSection />

      {/* Trust bar: credentials + stats */}
      <TrustBar />

      {/* Roof repair & replacement content — H2 + 2 H3s + bold + italic + image + list */}
      <HomeRepairServices />

      {/* Services: residential + commercial grid — H2 + 2 H3s + 2 H4s */}
      <ServicesGrid />

      {/* Residential & commercial deep content — 2 H2s + 3 H3s + image */}
      <HomeResidentialCommercial />

      {/* Why choose us — H2 + H3 + bold */}
      <HomeWhyChooseUs />

      {/* Pricing table — H2 + H3 + table + bold */}
      <HomePricingTable />

      {/* Social proof: customer testimonials — H2 */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* About / trust content — H2 + 2 H3s + italic + list */}
      <HomeAboutContent />

      {/* Service area: all 21 Essex County cities — H2 */}
      <LocationsGrid />

      {/* FAQ: common questions, no-JS accordion — H2 */}
      <FaqAccordion items={faqItems} />

      {/* Final CTA: conversion push — H2 */}
      <section
        className="bg-copper py-16 text-center lg:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2
            id="cta-heading"
            className="font-heading text-3xl font-bold text-text-on-copper sm:text-4xl"
          >
            Contact Us for Your Free Roofing Estimate
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/80">
            Get a no-obligation quote from our experienced team. We serve
            all of Essex County with licensed, insured roofing services.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#lead-form"
              className="inline-block rounded-md bg-forest px-8 py-4 font-heading text-lg font-semibold text-text-on-dark transition-colors hover:bg-forest-light"
            >
              Get Your Free Estimate
            </a>
            <span className="font-body text-white/60">or</span>
            <PhoneNumber
              size="lg"
              className="text-white hover:text-parchment"
            />
          </div>
        </div>
      </section>
    </>
  );
}
