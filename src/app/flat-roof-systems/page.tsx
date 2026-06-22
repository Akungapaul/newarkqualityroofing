import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';
import { HEADING_CONFIG } from '@/data/heading-config';
import { getHubContent } from '@/data/hub-content';

const content = getHubContent('flat-roof-systems');

export const metadata = buildHubMetadata({
  slug: 'flat-roof-systems',
  title: content.metaTitle,
  description: content.metaDescription,
});

export default function FlatRoofSystemsPage() {
  return (
    <HubScaffold
      hubId="flat-roof-systems"
      eyebrow="Flat Roof Systems"
      heading={HEADING_CONFIG.hub['flat-roof-systems']}
      content={content}
    />
  );
}
