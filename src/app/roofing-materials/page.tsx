import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';

export const metadata = buildHubMetadata({
  slug: 'roofing-materials',
  title: 'Roofing Materials | Newark Quality Roofing',
  description:
    'Compare roofing materials for Newark and Essex County homes and businesses — asphalt shingles, metal, TPO, EPDM, and more, with guidance for NJ weather.',
});

export default function RoofingMaterialsHubPage() {
  return (
    <HubScaffold
      eyebrow="Roofing Materials"
      heading="Which Roofing Materials Work Best for New Jersey Properties?"
      intro="Newark Quality Roofing helps Newark and Essex County property owners compare roofing materials — from asphalt and architectural shingles to metal and flat-roof membranes."
    />
  );
}
