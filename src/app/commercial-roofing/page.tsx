import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';
import { HEADING_CONFIG } from '@/data/heading-config';

export const metadata = buildHubMetadata({
  slug: 'commercial-roofing',
  title: 'Commercial Roofing | Newark Quality Roofing',
  description:
    'Commercial roofing for Newark and Essex County properties — flat roof systems, coatings, repair, and maintenance for property managers and building owners.',
});

export default function CommercialRoofingPage() {
  return (
    <HubScaffold
      eyebrow="Commercial Roofing"
      heading={HEADING_CONFIG.hub['commercial-roofing']}
      intro="Newark Quality Roofing installs, repairs, and maintains commercial roof systems for property managers, facility directors, and building owners across Essex County."
    />
  );
}
