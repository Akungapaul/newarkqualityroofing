import { LeadForm } from '@/components/forms/LeadForm';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import type { City, CityContent } from '@/lib/types';
import type { NavServiceGroup } from '@/data/nav-data';

interface CityHeroProps {
  city: City;
  content: CityContent;
  serviceGroups: NavServiceGroup[];
}

export function CityHero({ city, content, serviceGroups }: CityHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-forest-dark"
      aria-labelledby="city-hero-heading"
    >
      {/* Layered CSS background: gradient + geometric pattern + grain */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(42,90,58,0.5) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 60%, rgba(193,127,78,0.15) 0%, transparent 60%),
            linear-gradient(160deg, #0F2218 0%, #1A3A2A 40%, #0F2218 100%)
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
            { label: 'Locations', href: '/locations' },
            { label: city.name },
          ]}
        />

        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Left: Headline + subheadline */}
          <div className="text-text-on-dark lg:col-span-3">
            <h1
              id="city-hero-heading"
              className="font-heading text-4xl font-bold leading-tight tracking-tight text-parchment sm:text-5xl lg:text-6xl"
            >
              {content.heroHeadline}
            </h1>

            <p className="mt-6 font-body text-lg leading-relaxed text-parchment/80 sm:text-xl">
              {content.heroSubheadline}
            </p>

            <p className="mt-4 font-body text-sm text-parchment/60">
              Serving zip codes: {city.zipCodes.join(', ')}
            </p>

            <div className="mt-8 flex items-center gap-3 font-body text-parchment/70">
              <span>Or call us directly:</span>
              <PhoneNumber size="lg" className="text-copper-light hover:text-copper" />
            </div>
          </div>

          {/* Right: Lead Form */}
          <div id="lead-form" className="lg:col-span-2">
            <LeadForm
              variant="hero"
              defaultCity={city.id}
              serviceGroups={serviceGroups}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
