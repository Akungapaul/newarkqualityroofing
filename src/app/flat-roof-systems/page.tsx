import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';

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
      heading="Who Installs and Repairs Flat Roof Systems in Newark?"
      intro="Newark Quality Roofing installs and services flat roof systems — TPO, EPDM, PVC, and modified bitumen — for commercial and residential buildings across Essex County."
    />
  );
}
