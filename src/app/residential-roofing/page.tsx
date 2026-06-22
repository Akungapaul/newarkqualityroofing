import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';
import { HEADING_CONFIG } from '@/data/heading-config';
import { getHubContent } from '@/data/hub-content';

const content = getHubContent('residential-roofing');

export const metadata = buildHubMetadata({
  slug: 'residential-roofing',
  title: content.metaTitle,
  description: content.metaDescription,
});

export default function ResidentialRoofingPage() {
  return (
    <HubScaffold
      hubId="residential-roofing"
      eyebrow="Residential Roofing"
      heading={HEADING_CONFIG.hub['residential-roofing']}
      content={content}
    />
  );
}
