import Image from 'next/image';
import { LeadForm } from '@/components/forms/LeadForm';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { getServiceHeroImage } from '@/data/image-manifest';
import type { Service } from '@/lib/types';
import type { NavServiceGroup } from '@/data/nav-data';

interface ServiceHeroProps {
  service: Service;
  serviceGroups: NavServiceGroup[];
  benefits: string[];
}

export function ServiceHero({ service, serviceGroups, benefits }: ServiceHeroProps) {
  const heroImg = getServiceHeroImage(service.id);
  const heroSrc = heroImg?.path ?? '/images/newark-roofing-at-work.jpg';
  const heroAlt = heroImg?.alt ?? `${service.name} services in Newark and Essex County NJ`;

  return (
    <section
      className="relative overflow-hidden bg-forest-dark"
      aria-labelledby="service-hero-heading"
    >
      {/* Background image */}
      <Image
        src={heroSrc}
        alt={heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={75}
      />
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(42,90,58,0.7) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 60%, rgba(193,127,78,0.2) 0%, transparent 60%),
            linear-gradient(160deg, rgba(15,34,24,0.85) 0%, rgba(26,58,42,0.75) 40%, rgba(15,34,24,0.85) 100%)
          `,
        }}
        aria-hidden="true"
      />
      {/* Subtle geometric grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,240,232,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,240,232,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.name },
          ]}
        />

        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Left: Headline + benefits */}
          <div className="text-text-on-dark lg:col-span-3">
            {/* Commercial badge pill -- shown for commercial-only categories */}
            {(service.category === 'commercial-roof-types' || service.category === 'commercial-services') && (
              <span className="mb-4 inline-block rounded-full bg-copper px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-text-on-copper">
                Commercial
              </span>
            )}
            <h1
              id="service-hero-heading"
              className="text-balance font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              {service.name}
              <br />
              <span className="text-copper">in Newark, NJ</span>
            </h1>

            <ul className="mt-6 space-y-3" aria-label="Service benefits">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 font-body text-base text-parchment/90 sm:text-lg"
                >
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-copper"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 font-body text-parchment/70">
              <span>Or call us directly:</span>
              <PhoneNumber size="lg" className="text-copper-light hover:text-copper" />
            </div>
          </div>

          {/* Right: Lead Form */}
          <div id="lead-form" className="lg:col-span-2">
            <LeadForm
              variant="hero"
              defaultService={service.slug}
              serviceGroups={serviceGroups}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
