// ─── Cost Tracking and Reporting ────────────────────────────────────────────
// Estimates generation costs and produces run reports.

import fs from 'fs';
import path from 'path';
import type {
  PromptDefinition,
  GenerationResult,
  GenerationReport,
} from './types';
import { COST_CONSTANTS } from './types';

/**
 * Estimate cost for a single image based on megapixels (Flux 2 Pro pricing).
 * $0.03 for first megapixel + $0.015 per extra megapixel.
 */
function estimateSingleCost(targetWidth: number, targetHeight: number): number {
  const megapixels = (targetWidth * targetHeight) / 1_000_000;
  if (megapixels <= 1) return 0.03;
  return 0.03 + (megapixels - 1) * 0.015;
}

/**
 * Estimate the total cost for generating a list of prompts.
 * Uses Flux 2 Pro megapixel-based pricing via fal.ai.
 */
export function estimateCost(prompts: PromptDefinition[]): number {
  return prompts.reduce((total, p) => {
    return total + estimateSingleCost(p.targetWidth, p.targetHeight);
  }, 0);
}

/**
 * Format a cost estimate as a human-readable breakdown by category.
 */
export function formatCostEstimate(
  prompts: PromptDefinition[]
): string {
  const byCategory = new Map<string, { count: number; cost: number }>();

  for (const p of prompts) {
    const cost = estimateSingleCost(p.targetWidth, p.targetHeight);
    const existing = byCategory.get(p.category) ?? { count: 0, cost: 0 };
    byCategory.set(p.category, {
      count: existing.count + 1,
      cost: existing.cost + cost,
    });
  }

  const lines: string[] = ['Cost Estimate (Flux 2 Pro via fal.ai):', ''];
  let totalCost = 0;
  let totalCount = 0;

  for (const [category, data] of byCategory.entries()) {
    lines.push(
      `  ${category}: ${data.count} images x $${(data.cost / data.count).toFixed(3)}/ea = $${data.cost.toFixed(2)}`
    );
    totalCost += data.cost;
    totalCount += data.count;
  }

  lines.push('');
  lines.push(`  Total: ${totalCount} images = $${totalCost.toFixed(2)}`);
  return lines.join('\n');
}

/**
 * Create a generation report from a list of results.
 */
export function generateReport(
  results: GenerationResult[],
  startTime: number
): GenerationReport {
  const succeeded = results.filter((r) => r.status === 'success').length;
  const failed = results.filter((r) => r.status === 'failed').length;
  const skipped = results.filter((r) => r.status === 'skipped').length;
  const estimatedCost = results.reduce((sum, r) => sum + r.costEstimate, 0);

  return {
    timestamp: new Date(startTime).toISOString(),
    totalRequested: results.length,
    succeeded,
    failed,
    skipped,
    estimatedCost,
    durationMs: Date.now() - startTime,
    results,
  };
}

/**
 * Write a generation report to disk as JSON.
 */
export function writeReport(
  report: GenerationReport,
  outputDir: string = 'scripts/reports'
): string {
  fs.mkdirSync(outputDir, { recursive: true });

  const timestamp = report.timestamp.replace(/[:.]/g, '-');
  const filename = `generation-${timestamp}.json`;
  const outputPath = path.join(outputDir, filename);

  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`Report written to ${outputPath}`);

  // Print summary to console
  console.log(
    [
      '',
      '--- Generation Report ---',
      `Timestamp: ${report.timestamp}`,
      `Total: ${report.totalRequested}`,
      `Succeeded: ${report.succeeded}`,
      `Failed: ${report.failed}`,
      `Skipped: ${report.skipped}`,
      `Estimated cost: $${report.estimatedCost.toFixed(2)}`,
      `Duration: ${(report.durationMs / 1000).toFixed(1)}s`,
      '-------------------------',
    ].join('\n')
  );

  return outputPath;
}
