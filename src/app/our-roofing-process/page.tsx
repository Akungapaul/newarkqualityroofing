import HubScaffold, { buildHubMetadata } from '@/components/templates/HubScaffold';
import { HEADING_CONFIG } from '@/data/heading-config';
import { getHubContent } from '@/data/hub-content';

const content = getHubContent('our-roofing-process');

export const metadata = buildHubMetadata({
  slug: 'our-roofing-process',
  title: content.metaTitle,
  description: content.metaDescription,
});

export default function OurRoofingProcessPage() {
  return (
    <HubScaffold
      hubId="our-roofing-process"
      eyebrow="Our Process"
      heading={HEADING_CONFIG.hub['our-roofing-process']}
      content={content}
    />
  );
}
