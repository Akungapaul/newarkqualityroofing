import Image from 'next/image';
import { LeadForm } from '@/components/forms/LeadForm';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { siteConfig } from '@/data/site-config';
import { getServiceMenuGroups } from '@/data/nav-data';
import { getSectionImage } from '@/data/image-manifest';

/* ─── Icons ────────────────────────────────────────────────────────────────── */

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

/* ─── Component ────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  const serviceGroups = getServiceMenuGroups();
  const { address, email, businessHours, phone } = siteConfig;

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero */}
      <section className="bg-forest px-6 py-16 text-center text-text-on-dark">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">
            Contact Newark Quality Roofing
          </h1>
          <p className="mx-auto mt-3 max-w-xl font-body text-lg text-parchment-dark/90">
            Get your free roofing estimate today
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
          {/* Left -- Form */}
          <div className="lg:col-span-3">
            <LeadForm variant="standard" serviceGroups={serviceGroups} />
            <p className="mt-4 text-center font-body text-sm text-text-secondary">
              We respond to all inquiries within 24 hours.
            </p>
          </div>

          {/* Right -- Contact Info */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-forest p-6 text-text-on-dark">
              <h2 className="mb-6 font-heading text-2xl font-bold">Get in Touch</h2>

              {/* Phone */}
              <div className="mb-5">
                <PhoneNumber
                  size="lg"
                  className="text-parchment hover:text-copper-light"
                />
              </div>

              {/* Email */}
              <div className="mb-5 flex items-start gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper-light" />
                <a
                  href={`mailto:${email}`}
                  className="font-body text-parchment-dark transition-colors hover:text-copper-light"
                >
                  {email}
                </a>
              </div>

              {/* Address */}
              <div className="mb-5 flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper-light" />
                <address className="font-body not-italic text-parchment-dark">
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </address>
              </div>

              {/* Business Hours */}
              <div className="mb-6 flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper-light" />
                <div className="font-body text-parchment-dark">
                  <p className="mb-1 font-semibold text-parchment">Business Hours</p>
                  {businessHours.map((schedule) => (
                    <p key={schedule.day} className="text-sm">
                      <span className="font-semibold">{schedule.day}:</span>{' '}
                      {schedule.hours}
                    </p>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <hr className="border-forest-light" />

              {/* Emergency Banner */}
              <div className="mt-5 flex items-start gap-3 rounded-md bg-copper/20 p-4">
                <AlertIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper-light" />
                <div>
                  <p className="font-heading text-sm font-bold text-copper-light">
                    24/7 Emergency Service Available
                  </p>
                  <p className="mt-1 font-body text-sm text-parchment-dark">
                    Roof leaking? Storm damage?{' '}
                    <a
                      href={`tel:${phone.tel}`}
                      className="font-semibold text-copper-light underline"
                      aria-label={`Call for emergency service at ${phone.display}`}
                    >
                      Call now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office exterior photo */}
      {(() => {
        const officeImage = getSectionImage('office');
        return officeImage ? (
          <section className="px-6 pb-6">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-lg">
              <Image
                src={officeImage.path}
                alt={officeImage.alt}
                width={officeImage.width}
                height={officeImage.height}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </section>
        ) : null;
      })()}

      {/* Google Maps Embed */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg">
          <iframe
            src="https://maps.google.com/maps?q=Newark+NJ&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Newark Quality Roofing location"
          />
        </div>
      </section>
    </div>
  );
}
