import Link from 'next/link';
import { PhoneNumber } from '@/components/ui/PhoneNumber';

/* ─── SVG Icons ────────────────────────────────────────────────────────────── */

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CraftsmanshipIcon() {
  return (
    <svg className="h-10 w-10 text-copper" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function CustomerIcon() {
  return (
    <svg className="h-10 w-10 text-copper" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg className="h-10 w-10 text-copper" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg className="h-10 w-10 text-copper" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const values = [
  {
    icon: <CraftsmanshipIcon />,
    title: 'Quality Craftsmanship',
    description:
      'Every project is completed to the highest industry standards. We never cut corners, because your roof protects everything that matters.',
  },
  {
    icon: <CustomerIcon />,
    title: 'Customer First',
    description:
      'We listen, we communicate, and we deliver. From the first call to the final walkthrough, your satisfaction drives every decision we make.',
  },
  {
    icon: <CommunityIcon />,
    title: 'Community Roots',
    description:
      'Born and raised in Newark, we take pride in protecting the homes and businesses of our neighbors. This is our community too.',
  },
  {
    icon: <PricingIcon />,
    title: 'Honest Pricing',
    description:
      'No hidden fees, no surprise charges. We provide detailed, transparent estimates so you know exactly what you are paying for.',
  },
];

const credentials = [
  'Licensed New Jersey Roofing Contractor',
  'Fully Insured -- General Liability & Workers Compensation',
  'GAF Certified Installer',
  'BBB Accredited Business',
  'OSHA Safety Certified',
];

const team = [
  {
    initials: 'MR',
    name: 'Michael Rodriguez',
    title: 'Owner & CEO',
    bio: 'With over 15 years in the roofing industry, Michael founded Newark Quality Roofing to bring honest, high-quality craftsmanship back to Essex County. A lifelong Newark resident, he personally oversees every major project.',
  },
  {
    initials: 'DJ',
    name: 'David Johnson',
    title: 'Senior Project Manager',
    bio: 'David brings a decade of project management experience to the team. He coordinates every job from initial inspection to final cleanup, ensuring projects stay on schedule and exceed expectations.',
  },
  {
    initials: 'CR',
    name: 'Carlos Reyes',
    title: 'Lead Installer',
    bio: 'Carlos leads our installation crew with precision and care. Certified in multiple roofing systems, his attention to detail ensures every shingle, tile, and membrane is installed to manufacturer specifications.',
  },
];

/* ─── Component ────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-forest px-6 py-20 text-center text-text-on-dark">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
            About Newark Quality Roofing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-parchment-dark/90">
            Serving Essex County with trusted, high-quality roofing for over 15 years.
            Family-owned. Community-driven. Built on integrity.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-parchment px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl font-bold text-forest sm:text-4xl">
            Our Story
          </h2>
          <div className="mt-8 space-y-5 font-body text-lg leading-relaxed text-text-secondary">
            <p>
              Newark Quality Roofing was founded with a simple belief: every homeowner
              and business owner in Newark deserves a roofer they can trust. What started
              as a small family operation has grown into one of Essex County&rsquo;s most
              respected roofing companies -- but our values have never changed.
            </p>
            <p>
              Over the past 15 years, we&rsquo;ve completed more than 500 roofing
              projects across Newark, East Orange, Irvington, Bloomfield, and surrounding
              communities. From emergency storm repairs to complete roof replacements,
              our team treats every project like it&rsquo;s our own home. That&rsquo;s
              not a slogan -- it&rsquo;s a promise backed by hundreds of satisfied
              customers.
            </p>
            <p>
              As a family-owned business rooted in Newark, we understand the unique
              challenges that local properties face: harsh Northeast winters, aging
              infrastructure, and the need for contractors who show up when they say
              they will. We&rsquo;re proud to be that contractor for our community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-parchment-light px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-bold text-forest sm:text-4xl">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border bg-parchment p-6"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-heading text-xl font-bold text-forest">
                  {value.title}
                </h3>
                <p className="mt-2 font-body text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="bg-parchment px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl font-bold text-forest sm:text-4xl">
            Credentials &amp; Certifications
          </h2>
          <p className="mt-4 font-body text-lg text-text-secondary">
            Our certifications reflect our commitment to excellence, safety, and
            accountability.
          </p>
          <ul className="mt-8 space-y-4">
            {credentials.map((credential) => (
              <li key={credential} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-forest" />
                <span className="font-body text-lg text-text-primary">
                  {credential}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-parchment-light px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-bold text-forest sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-2 text-center font-body text-sm text-text-secondary italic">
            Photos coming soon
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-border bg-parchment p-6 text-center"
              >
                {/* Initials avatar */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-forest text-2xl font-bold text-text-on-dark">
                  {member.initials}
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-forest">
                  {member.name}
                </h3>
                <p className="font-body text-sm font-semibold uppercase tracking-wider text-copper">
                  {member.title}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="bg-parchment px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl font-bold text-forest sm:text-4xl">
            Community Involvement
          </h2>
          <div className="mt-6 space-y-4 font-body text-lg leading-relaxed text-text-secondary">
            <p>
              We believe in giving back to the community that has supported us for over
              15 years. Newark Quality Roofing sponsors local youth sports leagues,
              participates in Habitat for Humanity builds, and supports Newark public
              schools through our annual back-to-school supply drive.
            </p>
            <p>
              When severe storms hit our area, we prioritize emergency repairs for
              elderly and low-income homeowners. Because when your neighbors need help,
              you show up -- that&rsquo;s the Newark way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest px-6 py-16 text-center text-text-on-dark">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Ready to Work With a Team You Can Trust?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-parchment-dark/90">
            Get a free, no-obligation roofing estimate from Newark&rsquo;s most trusted
            roofing contractor.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-copper px-8 py-3 font-body font-semibold text-text-on-copper transition-colors hover:bg-copper-dark"
            >
              Contact Us Today
            </Link>
            <PhoneNumber size="lg" className="text-parchment hover:text-copper-light" />
          </div>
        </div>
      </section>
    </div>
  );
}
