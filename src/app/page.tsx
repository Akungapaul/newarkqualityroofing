import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { LocationsGrid } from '@/components/sections/LocationsGrid';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { testimonials } from '@/data/testimonials';
import { faqItems } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Newark Quality Roofing | Expert Roofing in Essex County NJ',
  description:
    'Licensed, insured roofing contractor serving Newark and Essex County NJ. Residential & commercial roof repair, replacement, and installation. Free estimates.',
};

export default function Home() {
  return (
    <>
      {/* Hero with lead form above the fold */}
      <HeroSection />

      {/* Trust bar: credentials + stats */}
      <TrustBar />

      {/* Services: residential + commercial grid */}
      <ServicesGrid />

      {/* Social proof: customer testimonials */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* Service area: all 21 Essex County cities */}
      <LocationsGrid />

      {/* FAQ: common questions, no-JS accordion */}
      <FaqAccordion items={faqItems} />

      {/* Final CTA: conversion push */}
      <section
        className="bg-copper py-16 text-center lg:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2
            id="cta-heading"
            className="font-heading text-3xl font-bold text-text-on-copper sm:text-4xl"
          >
            Ready for Your Free Estimate?
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
