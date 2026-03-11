// ─── Flux Pro Image Generation Client (via fal.ai) ─────────────────────────
// Wrapper around @fal-ai/client for Flux 2 Pro with concurrency control and retry.

import 'dotenv/config';
import { fal } from '@fal-ai/client';
import fs from 'fs';
import path from 'path';
import type { PromptDefinition, GenerationResult } from './types';

// ─── Client Configuration ──────────────────────────────────────────────────

let _configured = false;

function ensureConfigured(): void {
  if (_configured) return;
  if (!process.env.FAL_KEY) {
    throw new Error(
      'FAL_KEY not set. Add it to your .env file: FAL_KEY=your-key-here'
    );
  }
  fal.config({ credentials: process.env.FAL_KEY });
  _configured = true;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Map target dimensions to fal.ai image_size parameter */
function getFalImageSize(
  targetWidth: number,
  targetHeight: number
): { width: number; height: number } {
  // Flux 2 Pro supports custom dimensions up to 14142px
  // Generate at target dimensions directly for best quality
  return { width: targetWidth, height: targetHeight };
}

/** Estimate cost for a single image based on megapixels */
function estimateSingleCost(targetWidth: number, targetHeight: number): number {
  const megapixels = (targetWidth * targetHeight) / 1_000_000;
  // $0.03 for first megapixel + $0.015 per extra megapixel
  if (megapixels <= 1) return 0.03;
  return 0.03 + (megapixels - 1) * 0.015;
}

export { estimateSingleCost as estimateFalCost };

// ─── Generation ─────────────────────────────────────────────────────────────

/**
 * Generate a single image using Flux 2 Pro via fal.ai.
 * Downloads the result and returns a Buffer containing PNG data.
 */
async function generateImage(
  prompt: string,
  width: number,
  height: number
): Promise<Buffer> {
  ensureConfigured();

  const result = await fal.subscribe('fal-ai/flux-2-pro', {
    input: {
      prompt,
      image_size: { width, height },
      output_format: 'png',
      safety_tolerance: '5' as const,
    },
  });

  const imageUrl = (result as unknown as { images: { url: string }[] }).images?.[0]?.url;
  if (!imageUrl) {
    throw new Error('No image URL returned from fal.ai API');
  }

  // Download the image
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.status}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

/**
 * Generate a single image and immediately write to disk.
 */
async function generateAndSave(
  prompt: string,
  outputPath: string,
  width: number,
  height: number,
  retries: number = 3
): Promise<void> {
  let lastError: unknown;
  let backoff = 5000;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const buffer = await generateImage(prompt, width, height);
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, buffer);
      return;
    } catch (error) {
      lastError = error;
      const msg = error instanceof Error ? error.message : String(error);
      const isRateLimit =
        msg.includes('429') || msg.includes('rate') || msg.includes('throttl');

      if (isRateLimit && attempt < retries) {
        console.warn(
          `Rate limited (attempt ${attempt + 1}/${retries + 1}). Waiting ${backoff / 1000}s...`
        );
        await sleep(backoff);
        backoff = Math.min(backoff * 2, 60000);
      } else if (attempt < retries) {
        console.warn(
          `Generation failed (attempt ${attempt + 1}/${retries + 1}): ${msg}`
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
 * Each image is written to disk immediately after generation.
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
      const fullPrompt = buildPromptFn(item.sceneDescription);
      const stagingPath = path.join(stagingDir, `${item.filename}.png`);

      try {
        await generateAndSave(
          fullPrompt,
          stagingPath,
          item.targetWidth,
          item.targetHeight
        );
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
        console.error(
          `[FAIL] ${item.id}: ${error instanceof Error ? error.message : String(error)}`
        );
      }

      await sleep(delayMs);
    }
  });

  await Promise.all(workers);
  return results;
}
