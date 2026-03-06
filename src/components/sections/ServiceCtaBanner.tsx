import { LeadForm } from '@/components/forms/LeadForm';
import type { NavServiceGroup } from '@/data/nav-data';

interface ServiceCtaBannerProps {
  serviceGroups: NavServiceGroup[];
  defaultService: string;
}

export function ServiceCtaBanner({
  serviceGroups,
  defaultService,
}: ServiceCtaBannerProps) {
  return (
    <section
      className="relative overflow-hidden bg-forest-dark py-16 lg:py-20"
      aria-labelledby="service-cta-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 50%, rgba(42,90,58,0.4) 0%, transparent 70%),
            linear-gradient(180deg, #0F2218 0%, #1A3A2A 50%, #0F2218 100%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <h2
          id="service-cta-heading"
          className="text-center font-heading text-2xl font-bold text-text-on-dark sm:text-3xl lg:text-4xl"
        >
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-center font-body text-lg text-parchment/80">
          Request your free, no-obligation roofing estimate today. Our team
          will get back to you within 24 hours.
        </p>
        <div className="mt-10">
          <LeadForm
            variant="standard"
            defaultService={defaultService}
            serviceGroups={serviceGroups}
          />
        </div>
      </div>
    </section>
  );
}
