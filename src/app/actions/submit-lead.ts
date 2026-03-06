'use server';

import { redirect } from 'next/navigation';
import { LeadFormSchema } from '@/lib/schemas';

export type LeadFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    serviceNeeded?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function submitLead(
  prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    serviceNeeded: formData.get('serviceNeeded'),
  };

  const result = LeadFormSchema.safeParse(raw);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: 'Please fix the errors below.',
      success: false,
    };
  }

  const { name, email, phone, serviceNeeded } = result.data;

  const payload = {
    firstName: name,
    email,
    phone,
    tags: [serviceNeeded],
    source: 'website-lead-form',
  };

  // Always log — this is the source of truth for leads
  console.log(
    '[LEAD]',
    JSON.stringify({ ...payload, timestamp: new Date().toISOString() })
  );

  let shouldRedirect = false;

  try {
    const webhookUrl = process.env.GHL_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn(
        '[LEAD_NO_WEBHOOK] GHL_WEBHOOK_URL not set — lead logged but not forwarded'
      );
    } else {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }

    shouldRedirect = true;
  } catch (error) {
    console.error('[LEAD_WEBHOOK_ERROR]', error);
    // Still redirect — the lead was logged successfully
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    redirect('/thank-you');
  }

  // Fallback (should not reach here)
  return { message: 'Something went wrong. Please try again.', success: false };
}
