import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';
import { HEADING_CONFIG } from '@/data/heading-config';

export const metadata = buildHubMetadata({
  slug: 'flat-roof-systems',
  title: 'Flat Roof Systems | Newark Quality Roofing',
  description:
    'Flat roof systems for Newark and Essex County buildings — TPO, EPDM, PVC, and modified bitumen installation, repair, and ponding-water solutions.',
});

export default function FlatRoofSystemsPage() {
  return (
    <HubScaffold
      eyebrow="Flat Roof Systems"
      heading={HEADING_CONFIG.hub['flat-roof-systems']}
      intro="Newark Quality Roofing installs and services flat roof systems — TPO, EPDM, PVC, and modified bitumen — for commercial and residential buildings across Essex County."
    />
  );
}
