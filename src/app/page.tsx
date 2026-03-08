import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { HomeRepairServices } from '@/components/sections/HomeRepairServices';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { HomeResidentialCommercial } from '@/components/sections/HomeResidentialCommercial';
import { HomeWhyChooseUs } from '@/components/sections/HomeWhyChooseUs';
import { HomePricingTable } from '@/components/sections/HomePricingTable';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { LocationsGrid } from '@/components/sections/LocationsGrid';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { HomepageGuides } from '@/components/sections/HomepageGuides';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { testimonials } from '@/data/testimonials';
import { faqItems } from '@/data/faq';
import { articles } from '@/data/articles';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Roof Repair in Newark NJ | Quality Local Contractors',
  description:
    'Trusted local roof repair services in Newark, NJ. Residential and commercial projects — replacements, inspections, siding, and gutters. Call for a free quote.',
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
      name: siteConfig.companyName,
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
  // Homepage articles: core articles linked to homepage, sorted by position
  const homepageArticles = articles
    .filter((a) => a.parentType === 'core' && a.parentId === 'homepage')
    .sort((a, b) => a.position - b.position);

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

      {/* Residential & commercial deep content — 1 H2 + 1 H3 + image */}
      <HomeResidentialCommercial />

      {/* Why choose us — H2 + H3 + bold */}
      <HomeWhyChooseUs />

      {/* Pricing table — H2 + H3 + H4 + table + bold */}
      <HomePricingTable />

      {/* Social proof: customer testimonials */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* Service area: all 21 Essex County cities — H2 */}
      <LocationsGrid />

      {/* Browse Our Services — curated service links for anchor text */}
      <section className="bg-parchment py-12 lg:py-16" aria-labelledby="browse-services-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            id="browse-services-heading"
            className="text-center font-heading text-2xl font-bold text-forest sm:text-3xl"
          >
            Browse Our Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center font-body text-base text-text-secondary">
            Explore our full range of roofing services for Newark and Essex County homeowners and businesses.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <Link href="/roof-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Repairs</Link>
            <Link href="/roof-replacement" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Replacements</Link>
            <Link href="/roof-inspection" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Inspections</Link>
            <Link href="/emergency-roof-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Emergency</Link>
            <Link href="/roof-leak-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Leak Fixes</Link>
            <Link href="/storm-damage-roof-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Storm Damage</Link>
            <Link href="/asphalt-shingle-roofing" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Shingles</Link>
            <Link href="/metal-roof-installation-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Metal</Link>
            <Link href="/slate-roof-installation-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Slate</Link>
            <Link href="/flat-roof-installation-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Flat Roofs</Link>
            <Link href="/tpo-roofing-installation" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">TPO</Link>
            <Link href="/gutter-installation-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Gutters</Link>
            <Link href="/skylight-installation-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Skylights</Link>
            <Link href="/roof-waterproofing" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Waterproofing</Link>
            <Link href="/roof-maintenance-programs" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Maintenance</Link>
            <Link href="/commercial-roof-installation" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Commercial</Link>
            <Link href="/energy-efficient-roofing-solutions" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Energy Saving</Link>
            <Link href="/solar-panel-roofing-installation" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Solar</Link>
            <Link href="/chimney-flashing-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Chimney</Link>
            <Link href="/roof-vent-installation-repair" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Ventilation</Link>
          </div>
        </div>
      </section>

      {/* FAQ: common questions, no-JS accordion — H2 */}
      <FaqAccordion items={faqItems} />

      {/* Roofing Guides: editorial cards linking to homepage articles */}
      {homepageArticles.length > 0 && <HomepageGuides articles={homepageArticles} />}

      {/* Embeds: Google Maps + YouTube */}
      <section className="bg-parchment py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 font-heading text-xl font-semibold text-forest">
              Find Us in Newark, NJ
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48421.58762696192!2d-74.19967!3d40.73566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2547cb4c18891%3A0x6ec8c91e844010e!2sNewark%2C%20NJ!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Newark Quality Roofing location on Google Maps"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="mb-4 font-heading text-xl font-semibold text-forest">
              See Our Work
            </p>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title="Newark Quality Roofing project showcase"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Final CTA: conversion push */}
      <section
        className="bg-copper py-16 text-center lg:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p
            id="cta-heading"
            className="font-heading text-3xl font-bold text-text-on-copper sm:text-4xl"
          >
            Contact Us for Your Free Estimate
          </p>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/80">
            Get a no-obligation quote from our <em>experienced</em> roofing contractors. We serve
            all of Essex County with licensed, insured professionals.{' '}
            <Link href="/services" className="text-white underline hover:text-parchment">View all services</Link>.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/images/free-roofing-consultation.jpg"
              alt="free roofing consultation Newark NJ"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
          {/* Inline mini form — second conversion point */}
          <form
            className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            action="#lead-form"
            method="get"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              className="flex-1 rounded-md border-0 px-4 py-3 font-body text-text-primary placeholder:text-text-secondary/60 focus:ring-2 focus:ring-forest focus:outline-none"
              aria-label="Your name"
            />
            <input
              type="tel"
              name="phone"
              placeholder="(973) 555-0123"
              autoComplete="tel"
              className="flex-1 rounded-md border-0 px-4 py-3 font-body text-text-primary placeholder:text-text-secondary/60 focus:ring-2 focus:ring-forest focus:outline-none"
              aria-label="Your phone number"
            />
            <button
              type="submit"
              className="rounded-md bg-forest px-6 py-3 font-heading text-base font-semibold text-text-on-dark transition-colors hover:bg-forest-light"
            >
              Get Estimate
            </button>
          </form>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <span className="font-body text-white/60">or call us directly:</span>
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
