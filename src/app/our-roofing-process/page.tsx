import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';
import { HEADING_CONFIG } from '@/data/heading-config';

export const metadata = buildHubMetadata({
  slug: 'our-roofing-process',
  title: 'Our Roofing Process | Newark Quality Roofing',
  description:
    'How Newark Quality Roofing works — free inspection, written estimate, scheduling, installation, and final walkthrough for every Newark and Essex County roofing project.',
});

export default function OurRoofingProcessPage() {
  return (
    <HubScaffold
      eyebrow="Our Process"
      heading={HEADING_CONFIG.hub['our-roofing-process']}
      intro="From the free roof inspection through the final walkthrough, Newark Quality Roofing follows a clear, step-by-step process on every roofing project in Essex County."
    />
  );
}
