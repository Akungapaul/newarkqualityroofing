'use client';

import { siteConfig } from '@/data/site-config';
import { CountUp } from '@/components/animations/CountUp';
import { AnimateIn } from '@/components/animations/AnimateIn';

// ─── SVG Icon Components ────────────────────────────────────────────────────

function ShieldIcon() {
  return (
    <svg
      className="h-8 w-8 text-copper"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg
      className="h-8 w-8 text-copper"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-8 w-8 text-copper"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckmarkIcon() {
  return (
    <svg
      className="h-8 w-8 text-copper"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10.5L7.5 16 21 5" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

const iconMap = {
  shield: ShieldIcon,
  certificate: CertificateIcon,
  clock: ClockIcon,
  checkmark: CheckmarkIcon,
} as const;

// ─── TrustBar Component ─────────────────────────────────────────────────────

interface TrustBarProps {
  variant?: 'full' | 'compact';
}

export function TrustBar({ variant = 'full' }: TrustBarProps) {
  const isCompact = variant === 'compact';

  return (
    <section
      className="border-y border-border bg-parchment-dark py-6"
      aria-label="Company credentials"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:flex lg:items-center lg:justify-between">
          {siteConfig.trustStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            const isNumeric = stat.numericValue !== null;

            return (
              <AnimateIn key={stat.label} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <IconComponent />
                  <span
                    className={`mt-2 block font-heading font-bold text-forest ${
                      isCompact ? 'text-2xl' : 'text-3xl'
                    }`}
                  >
                    {isNumeric ? (
                      <CountUp
                        target={stat.numericValue}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                      />
                    ) : (
                      stat.value
                    )}
                  </span>
                  <span className="mt-1 block font-body text-sm text-text-secondary">
                    {stat.label}
                  </span>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
