# Warm Lead Follow-Up Sequence

> **Trigger:** Prospect replied to the cold sequence but hasn't booked a call yet. This covers the most common reply scenarios and nurtures them toward booking.

---

## SCENARIO 1: "Send me the report"

**Timing:** Immediately (within 1 hour of reply)

**Subject:** `{{contact.company_name}} — your marketing audit`

Hi {{contact.first_name}},

Here's the audit report for {{contact.company_name}}: [ATTACH GHL AUDIT REPORT]

A few highlights:

- **Google ranking:** where you currently show up vs. where you could be
- **Review analysis:** how your review count and rating compare to top competitors in {{contact.city}}
- **Profile gaps:** specific things missing from your Google Business Profile that are costing you visibility

The report covers the what — happy to jump on a quick call to cover the how. I can walk you through exactly what I'd prioritize to move the needle fastest.

Here's my calendar if you'd like to pick a time: [INSERT BOOKING LINK]

No pressure either way. The report is yours to keep.

{{user.name}}

---

### Follow-up if no booking (3 days later)

**Subject:** `Quick question about the report`

Hi {{contact.first_name}},

Just checking — did you get a chance to look through the audit for {{contact.company_name}}?

Most business owners I work with have the same two questions after seeing their report:

1. "How long would it take to fix this?"
2. "What would it cost?"

Happy to answer both on a quick 10-minute call. No sales pitch — just a clear picture of what it would take to get {{contact.company_name}} ranking higher in {{contact.city}}.

[INSERT BOOKING LINK]

{{user.name}}

---

### Second follow-up if no booking (5 days later)

**Subject:** `One more thought on {{contact.company_name}}`

Hi {{contact.first_name}},

Last follow-up on this. One thing that jumped out in your audit that I want to make sure doesn't get lost:

Your top competitor in {{contact.city}} has been consistently gaining ground in local search over the past few months. The longer that gap grows, the harder it gets to close.

If now's not the right time, I totally understand. But if you'd like to see what closing that gap would look like — 10 minutes is all it takes.

[INSERT BOOKING LINK]

{{user.name}}

---

## SCENARIO 2: "What do you charge?" / "How much?"

**Timing:** Within 2 hours

**Subject:** `Re: pricing for {{contact.company_name}}`

Hi {{contact.first_name}},

Great question. My local SEO packages typically range from $500–$1,500/month depending on how competitive your market is and how much ground we need to cover.

For a business like {{contact.company_name}} in {{contact.city}}, I'd need about 10 minutes to look at your specific situation and give you an accurate number. Every market is different — what works for a business in a small town costs very differently than in a competitive metro area.

Here's what I can tell you upfront:

- **No long-term contracts.** Month to month. If it's not working, you stop.
- **Clear reporting.** You'll see exactly what I'm doing and the results it's producing.
- **ROI-focused.** If the math doesn't make sense for your business, I'll tell you that honestly.

Want to do a quick call so I can give you a real number? Here's my calendar: [INSERT BOOKING LINK]

{{user.name}}

---

### Follow-up if no booking (3 days later)

**Subject:** `Quick thought on ROI`

Hi {{contact.first_name}},

I wanted to add some context to the pricing question.

Most of my clients see a return within 60–90 days. For a business like yours, even 3–5 additional clients per month from Google typically covers the investment several times over.

The real question isn't "what does it cost" — it's "what's it costing you right now to NOT show up when people search for your service in {{contact.city}}?"

Happy to run through the numbers together. No obligation. [INSERT BOOKING LINK]

{{user.name}}

---

## SCENARIO 3: "Not right now" / "Maybe later"

**Timing:** Same day

**Subject:** `Re: totally understand`

Hi {{contact.first_name}},

No worries at all. Timing is everything.

I'll check back in a couple months to see if anything's changed. In the meantime, here are the three quickest wins from your audit that you could tackle on your own:

1. Update your Google Business Profile categories
2. Post once a week on your Google profile
3. Ask your best customers for reviews

If you ever want to revisit the conversation, just reply to this email. I keep all my audit data on file.

Wishing {{contact.company_name}} a great quarter.

{{user.name}}

---

### Re-engagement (60 days later)

**Subject:** `Checking in — {{contact.company_name}}`

Hi {{contact.first_name}},

It's been a couple months since we last talked. I re-ran a quick check on {{contact.company_name}}'s Google presence in {{contact.city}}.

A few things have shifted in your market since then — want me to send over an updated snapshot?

No pitch. Just figured it might be useful to see where things stand now.

{{user.name}}

---

## SCENARIO 4: "I already have an SEO person" / "We handle it in-house"

**Timing:** Same day

**Subject:** `Re: good to hear`

Hi {{contact.first_name}},

That's great — most businesses don't invest in SEO at all, so you're already ahead.

Not here to step on anyone's toes. But I will say this: the audit I ran flagged a few things that a second set of eyes might catch. Sometimes it helps to get an outside perspective, even if you don't change providers.

Happy to send over the report as a benchmark. Your current team might find it useful too. No strings.

If not, no worries. I respect that you've got someone handling it.

{{user.name}}

---

## SCENARIO 5: Positive reply but vague ("Sounds interesting" / "Tell me more")

**Timing:** Within 2 hours

**Subject:** `Re: here's the quick version`

Hi {{contact.first_name}},

Here's the short version:

I help local businesses in {{contact.city}} show up at the top of Google when people search for their services. More visibility → more calls → more clients.

For {{contact.company_name}}, the audit I ran shows there's real opportunity — you're not far off from ranking well, but a few key things are holding you back.

The fastest way to explain it is a quick 10-minute call where I share my screen and walk you through exactly what I'm seeing.

Here's my calendar: [INSERT BOOKING LINK]

Or if you'd prefer, I can send the audit report over email first.

What works better for you?

{{user.name}}

---

## GHL SETUP INSTRUCTIONS

### Automation Logic

```
IF prospect replies to cold sequence:
  → Stop cold sequence immediately
  → Tag contact as "replied"
  → Notify you (email/SMS/app notification)
  → Wait for you to categorize the reply type

THEN based on reply tag:
  → "send_report" → Trigger Scenario 1
  → "pricing_question" → Trigger Scenario 2
  → "not_now" → Trigger Scenario 3
  → "has_seo" → Trigger Scenario 4
  → "interested_vague" → Trigger Scenario 5
```

### Reply Categorization
You can either:
1. **Manual:** Read each reply and apply the tag yourself (recommended when starting out — gives you a feel for what prospects are saying)
2. **Semi-automated:** Use GHL's workflow conditions to detect keywords like "price," "cost," "how much," "not now," "already have," and auto-tag accordingly

### Key Rules
- **Speed matters.** Reply within 2 hours during business hours. Leads go cold fast.
- **Always end with a clear next step.** Booking link, question, or explicit "I'll follow up on [date]."
- **Track conversions.** Tag contacts who book calls as "booked." Track from booked → closed to know your sequence-to-client rate.
