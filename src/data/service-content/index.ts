import type { ServiceContent } from '@/lib/types';

/**
 * Get service-specific content by service ID.
 * This stub will be replaced in Plan 03-04 when all content files are aggregated.
 * The ServiceTemplate handles the thrown error with a try/catch fallback.
 */
export function getServiceContent(_serviceId: string): ServiceContent {
  throw new Error(
    `Service content not yet available for "${_serviceId}". Content will be populated in plans 03-02 through 03-04.`
  );
}
