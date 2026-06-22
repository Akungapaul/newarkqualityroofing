import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';
import { HEADING_CONFIG } from '@/data/heading-config';
import { getHubContent } from '@/data/hub-content';

const content = getHubContent('commercial-roofing');

export const metadata = buildHubMetadata({
  slug: 'commercial-roofing',
  title: content.metaTitle,
  description: content.metaDescription,
});

export default function CommercialRoofingPage() {
  return (
    <HubScaffold
      hubId="commercial-roofing"
      eyebrow="Commercial Roofing"
      heading={HEADING_CONFIG.hub['commercial-roofing']}
      content={content}
    />
  );
}
