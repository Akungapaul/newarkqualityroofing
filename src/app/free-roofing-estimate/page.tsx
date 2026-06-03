import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';

export const metadata = buildHubMetadata({
  slug: 'free-roofing-estimate',
  title: 'Free Roofing Estimate | Newark Quality Roofing',
  description:
    'Request a free roofing estimate from Newark Quality Roofing. Serving Newark and Essex County with no-cost roof inspections for repair and replacement projects.',
});

export default function FreeRoofingEstimatePage() {
  return (
    <HubScaffold
      eyebrow="Free Estimate"
      heading="How Can You Request a Free Roofing Estimate?"
      intro="Newark Quality Roofing provides free roofing estimates and on-site inspections across Newark and Essex County for repair, replacement, and new roofing projects."
    />
  );
}
