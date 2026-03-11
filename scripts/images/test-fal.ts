import 'dotenv/config';
import { fal } from '@fal-ai/client';

async function main() {
  console.log('Key:', process.env.FAL_KEY?.substring(0, 10) + '...');
  fal.config({ credentials: process.env.FAL_KEY! });

  // Test 1: Flux Dev (free-tier friendly)
  try {
    const result = await fal.subscribe('fal-ai/flux/dev', {
      input: { prompt: 'a red house on a hill', image_size: { width: 512, height: 512 } },
    }) as unknown as { images: { url: string }[] };
    console.log('Flux Dev: OK -', result.images?.[0]?.url?.substring(0, 80));
  } catch (e: any) {
    console.log('Flux Dev Error:', e.message || e.body?.detail || e);
  }

  // Test 2: Flux 2 Pro
  try {
    const result = await fal.subscribe('fal-ai/flux-2-pro', {
      input: { prompt: 'a red house on a hill', image_size: { width: 512, height: 512 } },
    }) as unknown as { images: { url: string }[] };
    console.log('Flux 2 Pro: OK -', result.images?.[0]?.url?.substring(0, 80));
  } catch (e: any) {
    console.log('Flux 2 Pro Error:', e.message || e.body?.detail || e);
  }
}

main();
