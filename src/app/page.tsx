import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { HomeRepairServices } from '@/components/sections/HomeRepairServices';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { HomeResidentialCommercial } from '@/components/sections/HomeResidentialCommercial';
import { HomeInstallation } from '@/components/sections/HomeInstallation';
import { Testimonials } from '@/components/sections/Testimonials';
import { HomeWhyChooseUs } from '@/components/sections/HomeWhyChooseUs';
import { HomePricingTable } from '@/components/sections/HomePricingTable';
import { LocationsGrid } from '@/components/sections/LocationsGrid';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { HomepageGuides } from '@/components/sections/HomepageGuides';
import { HomeComparisonGrid } from '@/components/sections/HomeComparisonGrid';
import { BeforeAfterGallery } from '@/components/sections/BeforeAfterGallery';
import { getComparisonMenuGroups } from '@/data/nav-data';
import { FeaturedCombos } from '@/components/sections/FeaturedCombos';
import { PriorityIndexingHub } from '@/components/sections/PriorityIndexingHub';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { faqItems } from '@/data/faq';
import { articles } from '@/data/articles';
import { siteConfig } from '@/data/site-config';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildOrganizationSchema,
  buildRoofingContractorSchema,
  buildWebSiteSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildJsonLdGraph,
} from '@/lib/schema';
import { SEO_CONFIG } from '@/lib/seo-config';
import { getHomepageImage, getOGImage } from '@/data/image-manifest';
import { HEADING_CONFIG } from '@/data/heading-config';

// Per-page OG image for homepage (falls back to shared default when manifest is empty)
const homepageOg = getOGImage('homepage', 'homepage');
const homepageOgImage = homepageOg?.path
  ? { url: homepageOg.path, width: 1200, height: 630 }
  : { url: SEO_CONFIG.OG_IMAGE.url, width: SEO_CONFIG.OG_IMAGE.width, height: SEO_CONFIG.OG_IMAGE.height };

export const metadata: Metadata = {
  title: 'Roofing Contractor in Newark, NJ | Newark Quality Roofing',
  description:
    'Newark Quality Roofing: registered, insured roofing in Newark & Essex County, NJ. 25+ years of roof repair, replacement & installation. Free estimates.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Roofing Contractor in Newark, NJ | Newark Quality Roofing',
    description:
      'Newark Quality Roofing: registered, insured roofing in Newark & Essex County, NJ. 25+ years of roof repair, replacement & installation. Free estimates.',
    url: '/',
    siteName: 'Newark Quality Roofing',
    type: 'website',
    images: [homepageOgImage],
  },
};



export default function Home() {
  const comparisonGroups = getComparisonMenuGroups();

  // Manifest lookup for consultation image with fallback
  const consultationImg = getHomepageImage('consultation');
  const consultationSrc = consultationImg?.path ?? '/images/free-roofing-consultation.jpg';
  const consultationAlt = consultationImg?.alt ?? 'free roofing consultation Newark NJ';

  // Homepage articles: core articles linked to homepage, sorted by position
  const homepageArticles = articles
    .filter((a) => a.parentType === 'core' && a.parentId === 'homepage')
    .sort((a, b) => a.position - b.position);

  return (
    <>
      <JsonLd data={buildJsonLdGraph(
        buildOrganizationSchema(),
        buildRoofingContractorSchema(),
        buildWebSiteSchema(),
        buildWebPageSchema(SEO_CONFIG.BASE_URL, siteConfig.companyName),
        buildBreadcrumbSchema([{ name: 'Home', url: SEO_CONFIG.BASE_URL }]),
        buildFaqSchema(faqItems),
      )} />

      {/* Hero with lead form above the fold */}
      <HeroSection />

      {/* Trust bar: credentials + stats */}
      <TrustBar />

      {/* ── §4.1 CORE band (first content H2 = Core string) ───────────────── */}
      {/* Core: "What Roofing Services Do We Provide…?" H2 + 7 service H3s */}
      <ServicesGrid />

      {/* Core supporting narrative: repair & replacement detail */}
      <HomeRepairServices />

      {/* Core supporting: residential & commercial split */}
      <HomeResidentialCommercial />

      {/* Installation depth (augment): question-headed roof-installation block */}
      <HomeInstallation />

      {/* ── §4.1 OUTER band (after Core) ──────────────────────────────────── */}
      {/* Outer H2[0]: Why Should Homeowners and Businesses Choose Our Roofing Company? */}
      <HomeWhyChooseUs />

      {/* Outer H2[1]: How Does Our Roofing Process Work? — 5-step process */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="home-process-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="home-process-heading"
              className="font-heading text-3xl font-bold text-forest sm:text-4xl"
            >
              {HEADING_CONFIG.home.outerH2s[1]}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
              From your first call to the final walkthrough, our roofing process keeps
              your project on schedule and your home protected at every step.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                q: 'The Free Roof Inspection',
                a: 'We document your roof with photos and a written report so you know exactly what your home needs — at no cost and with no obligation.',
              },
              {
                q: 'Your Written Roofing Estimate',
                a: 'Your written estimate covers materials, labor, and cleanup, with transparent pricing and manufacturer-backed material options.',
              },
              {
                q: 'Scheduling Your Roofing Work',
                a: 'Once you approve the estimate, we set a start date that works for you and confirm the crew, materials, and timeline in advance.',
              },
              {
                q: 'Installation, Repair, or Replacement Day',
                a: 'Our registered, insured crew completes the work on time, to code, and within budget, protecting your property throughout the project.',
              },
              {
                q: 'Final Cleanup and Walkthrough',
                a: 'We clear all debris, perform a magnetic nail sweep, and walk the finished roof with you before we leave the job site.',
              },
            ].map((step, i) => (
              <div key={step.q} className="rounded-lg border border-border bg-parchment p-6 shadow-sm">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-copper/15 font-heading text-base font-bold text-copper"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-forest">
                  {step.q}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                  {step.a}
                </p>
              </div>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link
              href="/our-roofing-process"
              className="inline-flex items-center gap-2 font-heading text-lg font-semibold text-copper transition-colors hover:text-copper-dark"
            >
              Learn more about our roofing process
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Outer H2[2]: Where Do We Provide Roofing Services? — all 21 cities */}
      <LocationsGrid />

      {/* Outer H2[3]: How Much Do Roofing Services Cost? */}
      <HomePricingTable />

      {/* Outer H2[4]: What Roofing Questions Do Customers Ask Most Often? */}
      <FaqAccordion items={faqItems} />

      {/* ── Supporting / internal-linking sections (after the §4.1 tree) ──── */}
      {/* Before/after gallery: project showcase with drag sliders */}
      <BeforeAfterGallery />

      {/* Social proof: real customer testimonials */}
      <Testimonials />

      {/* Popular services by city — combo page links for internal linking */}
      <FeaturedCombos />

      {/* Popular roofing pages hub (moved OUT of the Core band — deletion is Phase 16) */}
      <PriorityIndexingHub />

      {/* Compare Roofing Options: categorized comparison links */}
      <HomeComparisonGrid groups={comparisonGroups} />

      {/* Roofing Knowledge Base link section */}
      <section className="bg-forest py-14 text-text-on-dark lg:py-20" aria-labelledby="kb-link-heading">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2
            id="kb-link-heading"
            className="font-heading text-3xl font-bold sm:text-4xl"
          >
            Learn More in Our Roofing Knowledge Base
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-parchment/80">
            Explore expert roofing guides, cost breakdowns, and material comparisons written for
            Newark and Essex County property owners.
          </p>
          <div className="mt-8">
            <Link
              href="/roofing-knowledge-base"
              className="inline-flex items-center gap-2 rounded-md bg-copper px-8 py-3 font-heading text-lg font-semibold text-text-on-copper transition-colors hover:bg-copper-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-light focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              Visit the Roofing Knowledge Base
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Roofing Guides: editorial cards linking to homepage articles */}
      {homepageArticles.length > 0 && <HomepageGuides articles={homepageArticles} />}

      {/* Browse Our Services — curated service links for anchor text */}
      <section className="bg-parchment py-12 lg:py-16" aria-labelledby="browse-services-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            id="browse-services-heading"
            className="text-center font-heading text-2xl font-bold text-forest sm:text-3xl"
          >
            More Roofing Services to Browse
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center font-body text-base text-text-secondary">
            Explore our full range of roofing services for Newark and Essex County homeowners and businesses.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <Link href="/roof-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Repairs</Link>
            <Link href="/roof-replacement-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Replacements</Link>
            <Link href="/roof-inspection-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Inspections</Link>
            <Link href="/emergency-roof-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Emergency</Link>
            <Link href="/roof-leak-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Leak Fixes</Link>
            <Link href="/storm-damage-roof-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Storm Damage</Link>
            <Link href="/asphalt-shingle-roofing-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Shingles</Link>
            <Link href="/metal-roof-installation-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Metal</Link>
            <Link href="/slate-roof-installation-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Slate</Link>
            <Link href="/flat-roof-installation-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Flat Roofs</Link>
            <Link href="/tpo-roofing-installation-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">TPO</Link>
            <Link href="/gutter-installation-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Gutters</Link>
            <Link href="/skylight-installation-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Skylights</Link>
            <Link href="/roof-waterproofing-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Waterproofing</Link>
            <Link href="/roof-maintenance-programs-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Maintenance</Link>
            <Link href="/commercial-roofing" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Commercial</Link>
            <Link href="/residential-roofing" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Residential</Link>
            <Link href="/energy-efficient-roofing-solutions-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Energy Saving</Link>
            <Link href="/solar-panel-roofing-installation-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Solar</Link>
            <Link href="/chimney-flashing-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Chimney</Link>
            <Link href="/roof-vent-installation-repair-in-newark-nj" className="rounded-md border border-border bg-white px-4 py-2.5 text-center font-body text-sm text-forest transition-colors hover:border-copper hover:text-copper">Ventilation</Link>
          </div>
        </div>
      </section>

      {/* Embeds: Google Maps service-area map */}
      <section className="bg-parchment py-12 lg:py-16" aria-labelledby="embeds-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            id="embeds-heading"
            className="text-center font-heading text-2xl font-bold text-forest sm:text-3xl"
          >
            Our Roofing Service Area: Newark and Essex County
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl px-6 lg:px-8">
          <h3 className="mb-4 font-heading text-xl font-semibold text-forest">
            Our Work Area in Newark, NJ
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48421.58762696192!2d-74.19967!3d40.73566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2547cb4c18891%3A0x6ec8c91e844010e!2sNewark%2C%20NJ!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Newark Quality Roofing service area — Newark, NJ on Google Maps"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

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
            {HEADING_CONFIG.home.outerH2s[5]}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/80">
            Get a no-obligation quote from our <em>experienced</em> roofing contractors. We serve
            all of Essex County with registered, insured professionals.{' '}
            <Link href="/roofing-services" className="text-white underline hover:text-parchment">View all services</Link>.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src={consultationSrc}
              alt={consultationAlt}
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
