import { LeadForm } from '@/components/forms/LeadForm';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { getServiceMenuGroups } from '@/data/nav-data';

export function HeroSection() {
  const serviceGroups = getServiceMenuGroups();

  return (
    <section
      className="relative min-h-[85vh] overflow-hidden bg-forest-dark"
      aria-labelledby="hero-heading"
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
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        {/* Left: Headline + subtitle */}
        <div className="text-text-on-dark">
          <h1
            id="hero-heading"
            className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Expert Roofing
            <br />
            <span className="text-copper">for Essex County</span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-parchment/80 sm:text-xl">
            Licensed and insured roofing contractor delivering quality
            craftsmanship for residential and commercial properties across
            Newark and all of Essex County, NJ.
          </p>
          <div className="mt-8 flex items-center gap-3 font-body text-parchment/70">
            <span>Or call us directly:</span>
            <PhoneNumber size="lg" className="text-copper-light hover:text-copper" />
          </div>
        </div>

        {/* Right: Lead Form */}
        <div id="lead-form">
          <LeadForm variant="hero" serviceGroups={serviceGroups} />
        </div>
      </div>
    </section>
  );
}
