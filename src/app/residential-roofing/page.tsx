import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';
import { HEADING_CONFIG } from '@/data/heading-config';

export const metadata = buildHubMetadata({
  slug: 'residential-roofing',
  title: 'Residential Roofing | Newark Quality Roofing',
  description:
    'Residential roofing for Newark and Essex County homes — repair, replacement, inspection, and roofing materials for houses of every style.',
});

export default function ResidentialRoofingPage() {
  return (
    <HubScaffold
      eyebrow="Residential Roofing"
      heading={HEADING_CONFIG.hub['residential-roofing']}
      intro="Newark Quality Roofing repairs, replaces, and inspects residential roofs across Newark and Essex County, matching the right roofing system to each home and budget."
    />
  );
}
