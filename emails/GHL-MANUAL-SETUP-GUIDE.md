# GoHighLevel Manual Setup Guide

> **Context:** 89 email templates, 42 tags, 3 custom fields, and 9 custom values have already been created via API. This guide covers everything that must be done manually in the GHL UI.

---

## TASK 1: Update Custom Value Placeholders

Go to **Settings → Custom Values** and update these two entries:

1. **booking_link** — Replace `[INSERT YOUR CALENDLY OR GHL BOOKING LINK]` with your actual booking/calendar URL
2. **agency_website** — Replace `[INSERT YOUR AGENCY WEBSITE URL]` with your actual agency website

---

## TASK 2: Set Up Email Sending Domain

Go to **Settings → Email Services → Dedicated Domain and IP**

1. Click **Add Domain**
2. Enter a subdomain on a SEPARATE domain from your main business domain (e.g., `mail.billnackexpress.co` — buy a separate domain for cold email, never use your main domain)
3. Add the DNS records GHL provides (TXT, CNAME, MX) to your domain registrar
4. Wait for DNS propagation (up to 24 hours)
5. Click the three-dot menu next to the domain → **Set Headers**:
   - Name: `Paul Ongera Akunga`
   - Email: an address on that domain (e.g., `paul@billnackexpress.co`)
6. Add a DMARC record in your DNS: TXT record with value `v=DMARC1; p=reject`

### Domain Warm-Up

Use an external warm-up tool (WarmUp Inbox or Lemwarm) for 2-4 weeks before sending cold emails. Ramp-up schedule:

- Week 1: 20-30 emails/day
- Week 2: 50-75 emails/day
- Week 3: 100-150 emails/day
- Week 4+: Scale as needed

---

## TASK 3: Build Workflow 1 — Cold Email Sequence

Go to **Automations → Workflows → Create Workflow → Start from Scratch**

### Trigger

- Type: **Tag Added**
- Tag: `cold-email-batch-1`

### Workflow Settings (click gear icon top-right)

- **Stop on Response:** ON
- **Allow Re-entry:** OFF
- **Time Window:** Monday-Friday, 8:00 AM - 10:00 AM
- **Contact Timezone:** ON

### Workflow Steps

Build the following sequence. After the trigger, add an **If/Else** branch on the custom field `Industry` to route contacts to their industry-specific templates. For each branch, the structure is the same — only the email template changes.

#### For the DEFAULT/GENERAL branch (and as the pattern for all industry branches):

```
[Trigger: Tag Added = "cold-email-batch-1"]
    |
    v
[Add Tag: "in-sequence"]
    |
    v
[If/Else: Industry = ?]
    |
    |-- mental_health branch → uses "Cold Outreach - Mental Health - Email 1/3/4" templates
    |-- dental branch → uses "Cold Outreach - Dental - Email 1/3/4" templates
    |-- legal branch → uses "Cold Outreach - Legal - Email 1/3/4" templates
    |-- (... one branch per industry ...)
    |-- DEFAULT branch → uses "Cold Outreach - Generic - Email 1/2/3/4/5" templates
    |
    v (each branch follows this same sequence:)

[Send Email 1 - Audit Hook]
    |
    v
[Wait 3 days] (business hours only, contact timezone)
    |
    v
[Send Email 2 - Competitor Gap] (use Generic Email 2 for ALL industries)
    |
    v
[Wait 3 days]
    |
    v
[Send Email 3 - Free Value Drop]
    |
    v
[Wait 3 days]
    |
    v
[Send Email 4 - Cost of Waiting]
    |
    v
[Wait 4 days]
    |
    v
[Send Email 5 - Breakup] (use Generic Email 5 for ALL industries)
    |
    v
[Remove Tag: "in-sequence"]
    |
    v
[Add Tag: "sequence-complete"]
```

### Email Action Configuration (for each Send Email step)

- **From Name:** Paul Ongera Akunga (or use custom value `{{custom_values.sender_name}}`)
- **From Email:** Must match your verified sending domain
- **Subject Line:** Use the subject from the template
- **Body:** Select the corresponding email template from the template dropdown
- **Template Sync:** OFF (keep edits local to workflow)

### Simplified Alternative (if 25 branches is too complex)

Instead of branching by industry in one workflow, create the workflow with just the generic sequence. You can always create separate workflows per industry later as you identify which niches convert best.

```
[Trigger: Tag Added = "cold-email-batch-1"]
    |
    v
[Add Tag: "in-sequence"]
    |
    v
[Send Email: "Cold Outreach - Generic - Email 1 - Audit Hook"]
    |
    v
[Wait 3 days]
    |
    v
[Send Email: "Cold Outreach - Generic - Email 2 - Competitor Gap"]
    |
    v
[Wait 3 days]
    |
    v
[Send Email: "Cold Outreach - Generic - Email 3 - Free Value Drop"]
    |
    v
[Wait 3 days]
    |
    v
[Send Email: "Cold Outreach - Generic - Email 4 - Cost of Waiting"]
    |
    v
[Wait 4 days]
    |
    v
[Send Email: "Cold Outreach - Generic - Email 5 - Breakup"]
    |
    v
[Remove Tag: "in-sequence"]
    |
    v
[Add Tag: "sequence-complete"]
```

### Publish

Once built, click **Publish** (top-right) to activate the workflow.

---

## TASK 4: Build Workflow 2 — Reply Handler

Go to **Automations → Workflows → Create Workflow → Start from Scratch**

### Trigger

- Type: **Customer Replied**
- Filter: Reply Channel = **Email**
- Filter: Contact has tag = `in-sequence`

### Workflow Steps

```
[Trigger: Customer Replied]
    |
    v
[Add Tag: "replied"]
    |
    v
[Remove Tag: "in-sequence"]
    |
    v
[Internal Notification]
    - Type: Email or In-App
    - To: paul@billnackexpress.com (or your preferred notification method)
    - Message: "New reply from {{contact.first_name}} at {{contact.company_name}} - check conversations"
```

### After Notification — Manual Tagging

When you receive a reply notification:

1. Read the reply in **Conversations**
2. Based on what they said, manually add ONE of these tags to the contact:
   - `send_report` — they asked to see the audit report
   - `pricing_question` — they asked about cost/pricing
   - `not_now` — they said not right now / maybe later
   - `has_seo` — they said they already have an SEO person
   - `interested_vague` — they expressed general interest but didn't ask anything specific

### Publish

Click **Publish** to activate.

---

## TASK 5: Build Workflow 3 — Warm Lead Follow-Up: "Send Report"

Go to **Automations → Workflows → Create Workflow → Start from Scratch**

### Trigger

- Type: **Tag Added**
- Tag: `send_report`

### Workflow Steps

```
[Trigger: Tag Added = "send_report"]
    |
    v
[Send Email]
    From: Paul Ongera Akunga
    Subject: "{{contact.company_name}} — your marketing audit"
    Body: (manually write or paste from emails/warm-lead-follow-up-sequence.md → Scenario 1)
    IMPORTANT: Attach the GHL audit report for this prospect
    |
    v
[Wait 3 days]
    |
    v
[If/Else: Contact has tag "booked"?]
    |-- YES → [End]
    |-- NO ↓
    |
    v
[Send Email]
    Subject: "Quick question about the report"
    Body: Follow-up asking if they reviewed the report + booking link
    |
    v
[Wait 5 days]
    |
    v
[If/Else: Contact has tag "booked"?]
    |-- YES → [End]
    |-- NO ↓
    |
    v
[Send Email]
    Subject: "One more thought on {{contact.company_name}}"
    Body: Final follow-up with competitor urgency angle + booking link
```

### Publish

Click **Publish** to activate.

---

## TASK 6: Build Workflow 4 — Warm Lead Follow-Up: "Pricing Question"

### Trigger

- Type: **Tag Added**
- Tag: `pricing_question`

### Workflow Steps

```
[Trigger: Tag Added = "pricing_question"]
    |
    v
[Send Email]
    Subject: "Re: pricing for {{contact.company_name}}"
    Body: Pricing range ($500-$1,500/month), no contracts, ROI-focused framing, booking link
    (Paste from emails/warm-lead-follow-up-sequence.md → Scenario 2)
    |
    v
[Wait 3 days]
    |
    v
[If/Else: Contact has tag "booked"?]
    |-- YES → [End]
    |-- NO ↓
    |
    v
[Send Email]
    Subject: "Quick thought on ROI"
    Body: ROI framing — 3-5 clients/month covers investment + booking link
```

---

## TASK 7: Build Workflow 5 — Warm Lead Follow-Up: "Not Now"

### Trigger

- Type: **Tag Added**
- Tag: `not_now`

### Workflow Steps

```
[Trigger: Tag Added = "not_now"]
    |
    v
[Send Email]
    Subject: "Re: totally understand"
    Body: No pressure, 3 quick DIY tips from audit, "reply anytime"
    (Paste from emails/warm-lead-follow-up-sequence.md → Scenario 3)
    |
    v
[Wait 60 days]
    |
    v
[Add Tag: "re-engage-60-days"]
    |
    v
[Send Email]
    Subject: "Checking in — {{contact.company_name}}"
    Body: Re-ran a quick check, market has shifted, want updated snapshot?
```

---

## TASK 8: Build Workflow 6 — Warm Lead Follow-Up: "Has SEO"

### Trigger

- Type: **Tag Added**
- Tag: `has_seo`

### Workflow Steps

```
[Trigger: Tag Added = "has_seo"]
    |
    v
[Send Email]
    Subject: "Re: good to hear"
    Body: Respect their provider, offer audit as second-opinion benchmark, no strings
    (Paste from emails/warm-lead-follow-up-sequence.md → Scenario 4)
```

One email only. No follow-up sequence.

---

## TASK 9: Build Workflow 7 — Warm Lead Follow-Up: "Interested Vague"

### Trigger

- Type: **Tag Added**
- Tag: `interested_vague`

### Workflow Steps

```
[Trigger: Tag Added = "interested_vague"]
    |
    v
[Send Email]
    Subject: "Re: here's the quick version"
    Body: Short pitch, audit findings mention, offer call OR report by email
    (Paste from emails/warm-lead-follow-up-sequence.md → Scenario 5)
```

One email only. Wait for their response.

---

## TASK 10: Rotate API Token

Go to **Settings → Private Integrations → Email Setup Script**

Click **"Rotate and expire this token now"** since the token was shared during setup. This invalidates the old token immediately.

---

## DAILY OPERATIONS CHECKLIST

Once everything is set up, here's your daily routine:

### Morning (15 min)
1. Go to **Marketing → Prospecting**
2. Search for a business type + location (e.g., "Dentist" in "Newark, NJ")
3. Click **+ Add** on promising prospects
4. Go to **Contacts** → find new prospects
5. Set their **Industry** custom field
6. Set their **Campaign Batch** (e.g., "dental-newark-march")
7. Add the tag `cold-email-batch-1` → automation fires

### Mid-Day (10 min)
1. Check for reply notifications
2. Read replies in **Conversations**
3. Tag each reply with the appropriate tag (`send_report`, `pricing_question`, etc.)
4. Follow-up sequences fire automatically

### Weekly (15 min)
1. Review open rates and reply rates per industry
2. A/B test subject lines on underperforming templates
3. Double down on industries with highest reply rates
4. Add new prospects to a fresh batch tag (`cold-email-batch-2`, etc.)

---

## FILE REFERENCE

All email copy is stored locally in these files for reference:

- `emails/local-seo-cold-outreach-sequence.md` — 5 generic cold emails
- `emails/industry-specific-variations.md` — 25 industries × 3 emails = 75 emails
- `emails/warm-lead-follow-up-sequence.md` — 5 reply scenarios with follow-up sequences

These are your source-of-truth files. If you need to edit email copy, update these files and manually update the corresponding GHL templates.
