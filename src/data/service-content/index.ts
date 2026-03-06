import { z } from 'zod';
import { ServiceContentSchema } from '@/lib/schemas';

export type { ServiceContent } from '@/lib/types';
import type { ServiceContent } from '@/lib/types';

// ─── Import all content arrays ──────────────────────────────────────────────

import { repairMaintenanceContent } from './repair-maintenance';
import { residentialRoofTypesContent } from './residential-roof-types';
import { commercialRoofTypesContent } from './commercial-roof-types';
import { componentsSpecialtyContent } from './components-specialty';
import { energySolarContent } from './energy-solar';
import { commercialServicesContent } from './commercial-services';
import { designConsultationContent } from './design-consultation';
import { replacementSubPagesContent } from './replacement-sub-pages';

// ─── Aggregate and validate ALL content at module level ─────────────────────

const allContent = z.array(ServiceContentSchema).parse([
  ...repairMaintenanceContent,
  ...residentialRoofTypesContent,
  ...commercialRoofTypesContent,
  ...componentsSpecialtyContent,
  ...energySolarContent,
  ...commercialServicesContent,
  ...designConsultationContent,
  ...replacementSubPagesContent,
]);

// ─── Map-based O(1) lookup ──────────────────────────────────────────────────

const contentMap = new Map<string, ServiceContent>(
  allContent.map((c) => [c.serviceId, c])
);

// ─── Public API ─────────────────────────────────────────────────────────────

export function getServiceContent(serviceId: string): ServiceContent {
  const content = contentMap.get(serviceId);
  if (!content) {
    throw new Error(`Missing content for service: ${serviceId}`);
  }
  return content;
}
