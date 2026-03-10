// ─── OpenAI Image Generation Client ────────────────────────────────────────
// Wrapper around openai SDK for gpt-image-1 with concurrency control and retry.

import 'dotenv/config';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import type {
  PromptDefinition,
  GenerationResult,
  APIImageSize,
  COST_CONSTANTS,
} from './types';

// ─── Client Initialization ──────────────────────────────────────────────────

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ─── Helpers ────────────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Check if an error is a rate limit (429) error */
export function isRateLimitError(error: unknown): boolean {
  if (error instanceof OpenAI.APIError) {
    return error.status === 429;
  }
  if (error instanceof Error && 'status' in error) {
    return (error as { status: number }).status === 429;
  }
  return false;
}

/** Determine the API size parameter based on target dimensions */
function getAPISize(targetWidth: number, targetHeight: number): APIImageSize {
  // Square images use 1024x1024
  if (targetWidth === targetHeight) return '1024x1024';
  // Portrait images use 1024x1536
  if (targetHeight > targetWidth) return '1024x1536';
  // Landscape images use 1536x1024 (default for heroes, gallery, etc.)
  return '1536x1024';
}

/** Estimate cost for a single image based on its dimensions */
function estimateSingleCost(targetWidth: number, targetHeight: number): number {
  const size = getAPISize(targetWidth, targetHeight);
  return size === '1024x1024' ? 0.034 : 0.05;
}

// ─── Generation ─────────────────────────────────────────────────────────────

/**
 * Generate a single image using gpt-image-1.
 * Returns a Buffer containing the raw PNG data.
 */
export async function generateImage(
  prompt: string,
  size: APIImageSize = '1536x1024'
): Promise<Buffer> {
  const result = await openai.images.generate({
    model: 'gpt-image-1',
    prompt,
    size,
    quality: 'medium',
    output_format: 'png',
    n: 1,
  });

  const b64 = result.data?.[0]?.b64_json;
  if (!b64) {
    throw new Error('No image data returned from OpenAI API');
  }

  return Buffer.from(b64, 'base64');
}

/**
 * Generate a single image and immediately write to disk to prevent memory accumulation.
 * Returns the path where the image was saved.
 */
async function generateAndSave(
  prompt: string,
  outputPath: string,
  size: APIImageSize = '1536x1024',
  retries: number = 3
): Promise<void> {
  let lastError: unknown;
  let backoff = 5000; // Initial backoff: 5 seconds

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const buffer = await generateImage(prompt, size);
      // Ensure directory exists
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      // Write immediately to disk
      fs.writeFileSync(outputPath, buffer);
      return;
    } catch (error) {
      lastError = error;
      if (isRateLimitError(error) && attempt < retries) {
        console.warn(
          `Rate limited (attempt ${attempt + 1}/${retries + 1}). Waiting ${backoff / 1000}s...`
        );
        await sleep(backoff);
        backoff = Math.min(backoff * 2, 60000); // Exponential backoff, max 60s
      } else if (attempt < retries) {
        console.warn(
          `Generation failed (attempt ${attempt + 1}/${retries + 1}): ${error instanceof Error ? error.message : String(error)}`
        );
        await sleep(2000);
      }
    }
  }

  throw lastError;
}

// ─── Batch Generation with Concurrency ──────────────────────────────────────

/**
 * Generate multiple images with controlled concurrency using a worker pool pattern.
 * Each image is written to disk immediately after generation to prevent memory buildup.
 */
export async function generateWithConcurrency(
  items: PromptDefinition[],
  buildPromptFn: (scene: string) => string,
  stagingDir: string,
  concurrency: number = 3,
  delayMs: number = 1000
): Promise<GenerationResult[]> {
  const results: GenerationResult[] = [];
  const queue = [...items];

  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const item = queue.shift()!;
      const startTime = Date.now();
      const size = getAPISize(item.targetWidth, item.targetHeight);
      const fullPrompt = buildPromptFn(item.sceneDescription);
      const stagingPath = path.join(stagingDir, `${item.filename}.png`);

      try {
        await generateAndSave(fullPrompt, stagingPath, size);
        results.push({
          id: item.id,
          status: 'success',
          stagingPath,
          costEstimate: estimateSingleCost(item.targetWidth, item.targetHeight),
          durationMs: Date.now() - startTime,
        });
        console.log(
          `[OK] ${item.id} (${((Date.now() - startTime) / 1000).toFixed(1)}s)`
        );
      } catch (error) {
        results.push({
          id: item.id,
          status: 'failed',
          error: error instanceof Error ? error.message : String(error),
          costEstimate: 0,
          durationMs: Date.now() - startTime,
        });
        console.error(`[FAIL] ${item.id}: ${error instanceof Error ? error.message : String(error)}`);
      }

      // Pace between requests
      await sleep(delayMs);
    }
  });

  await Promise.all(workers);
  return results;
}
