'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-copper px-6 py-3 font-heading text-lg font-bold text-text-on-copper transition-colors hover:bg-copper-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? 'Submitting...' : 'Get My Free Estimate'}
    </button>
  );
}
