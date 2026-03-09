import Link from 'next/link';
import { PhoneNumber } from '@/components/ui/PhoneNumber';

const navLinks = [
  { href: '/', label: 'Homepage' },
  { href: '/services', label: 'All Services' },
  { href: '/locations', label: 'Service Areas' },
  { href: '/contact', label: 'Contact Us' },
];

const popularServices = [
  { href: '/roof-repair', label: 'Roof Repair' },
  { href: '/roof-replacement', label: 'Roof Replacement' },
  { href: '/roof-inspection', label: 'Roof Inspection' },
  { href: '/emergency-roof-repair', label: 'Emergency Roof Repair' },
  { href: '/asphalt-shingle-roofing', label: 'Asphalt Shingle Roofing' },
  { href: '/gutter-installation-repair', label: 'Gutter Installation & Repair' },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-parchment px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block font-heading text-8xl font-bold text-copper/30 select-none">
          404
        </span>

        <h1 className="mt-2 font-heading text-3xl font-bold text-forest sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-lg font-body text-lg leading-relaxed text-text-secondary">
          The page you are looking for may have been moved, removed, or does not exist.
          Use the links below to find what you need, or give us a call.
        </p>

        {/* Phone CTA */}
        <div className="mt-6">
          <PhoneNumber size="lg" className="text-copper font-semibold hover:text-copper-dark" />
        </div>

        {/* Navigation Links */}
        <nav aria-label="Main navigation" className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm border-2 border-forest bg-forest px-5 py-2.5 font-heading text-sm font-semibold text-text-on-dark transition-colors hover:bg-forest-light focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Popular Services */}
        <div className="mt-12">
          <h2 className="font-heading text-lg font-bold text-forest">
            Popular Services
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {popularServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-sm border border-border bg-white px-4 py-3 text-left transition-all hover:border-copper hover:shadow-sm focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-none"
              >
                <span className="font-body text-sm font-semibold text-forest transition-colors group-hover:text-copper">
                  {service.label}
                </span>
                <span className="ml-2 font-body text-xs text-copper opacity-0 transition-opacity group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
