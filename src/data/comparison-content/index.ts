import { z } from 'zod';
import { ComparisonContentSchema, type ComparisonContent } from './schema';
import { materialComparisons } from './material-vs-material';
import { serviceComparisons } from './service-vs-service';
import { decisionHelpers } from './decision-helper';

// ─── Runtime Validation ─────────────────────────────────────────────────────
// All 30 comparison content objects validated at module level.
// Build crashes on invalid data — no silent failures.

const allContent: ComparisonContent[] = z
  .array(ComparisonContentSchema)
  .parse([...materialComparisons, ...serviceComparisons, ...decisionHelpers]);

// ─── Map-based O(1) Lookup ──────────────────────────────────────────────────

const contentMap = new Map<string, ComparisonContent>(
  allContent.map((c) => [c.comparisonId, c])
);

// ─── Public API ─────────────────────────────────────────────────────────────

export function getComparisonContent(comparisonId: string): ComparisonContent {
  const content = contentMap.get(comparisonId);
  if (!content) {
    throw new Error(`Missing comparison content for comparisonId="${comparisonId}"`);
  }
  return content;
}

export function getAllComparisonContent(): ComparisonContent[] {
  return allContent;
}
