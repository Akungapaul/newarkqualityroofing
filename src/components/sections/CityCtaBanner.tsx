import Link from 'next/link';
import { PhoneNumber } from '@/components/ui/PhoneNumber';

interface CityCtaBannerProps {
  cityName: string;
}

export function CityCtaBanner({ cityName }: CityCtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-forest-dark">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 30% 50%, rgba(193,127,78,0.12) 0%, transparent 60%),
            linear-gradient(160deg, #0F2218 0%, #1A3A2A 40%, #0F2218 100%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
        <h2 className="font-heading text-3xl font-bold text-parchment sm:text-4xl">
          Ready for Expert Roofing in {cityName}?
        </h2>
        <p className="mt-4 font-body text-lg leading-relaxed text-parchment/80">
          Get your free estimate today. Our local team is ready to help with any
          roofing project -- from minor repairs to complete replacements.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-copper px-8 py-3.5 font-heading text-lg font-bold text-text-on-copper transition-colors hover:bg-copper-dark focus-visible:ring-2 focus-visible:ring-copper-light focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark focus-visible:outline-none"
          >
            Get Free Estimate
          </Link>
          <div className="flex items-center gap-2 font-body text-parchment/70">
            <span>or call</span>
            <PhoneNumber size="lg" className="text-copper-light hover:text-copper" />
          </div>
        </div>
      </div>
    </section>
  );
}
