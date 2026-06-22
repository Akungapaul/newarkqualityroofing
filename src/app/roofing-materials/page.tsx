import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';
import { HEADING_CONFIG } from '@/data/heading-config';
import { getHubContent } from '@/data/hub-content';

const content = getHubContent('roofing-materials');

export const metadata = buildHubMetadata({
  slug: 'roofing-materials',
  title: content.metaTitle,
  description: content.metaDescription,
});

export default function RoofingMaterialsHubPage() {
  return (
    <HubScaffold
      hubId="roofing-materials"
      eyebrow="Roofing Materials"
      heading={HEADING_CONFIG.hub['roofing-materials']}
      content={content}
    />
  );
}
