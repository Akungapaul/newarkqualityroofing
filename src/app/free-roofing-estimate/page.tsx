import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';
import { HEADING_CONFIG } from '@/data/heading-config';
import { getHubContent } from '@/data/hub-content';

const content = getHubContent('free-roofing-estimate');

export const metadata = buildHubMetadata({
  slug: 'free-roofing-estimate',
  title: content.metaTitle,
  description: content.metaDescription,
});

export default function FreeRoofingEstimatePage() {
  return (
    <HubScaffold
      hubId="free-roofing-estimate"
      eyebrow="Free Estimate"
      heading={HEADING_CONFIG.hub['free-roofing-estimate']}
      content={content}
    />
  );
}
