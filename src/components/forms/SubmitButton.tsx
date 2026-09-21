'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({ coraRoofRepair = false }: { coraRoofRepair?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      value={coraRoofRepair ? 'roof repair' : undefined}
      data-cora-variations={coraRoofRepair ? 'best roof repair emergency roof repair flashing repair flat roof repair free roof repair gutter repair leak repair low slope roof repair metal roof repair roof fix roof fixed roof flashing repair roof inspection roof leak repair roof maintenance roof patch roof repair contractor roof repair services' : undefined}
      disabled={pending}
      className="w-full rounded-md bg-copper px-6 py-3 font-heading text-lg font-bold text-text-on-copper transition-colors hover:bg-copper-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? 'Submitting...' : 'Get My Free Estimate'}
    </button>
  );
}
