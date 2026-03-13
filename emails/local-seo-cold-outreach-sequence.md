# Local SEO Cold Outreach Sequence — GoHighLevel

## GHL Merge Fields Used
- `{{contact.first_name}}` — prospect's first name
- `{{contact.company_name}}` — business name
- `{{contact.city}}` — business city
- `{{contact.website}}` — their website URL

> **Setup notes**: Space emails 2–3 days apart. Stop sequence if prospect replies. Set up a custom field in GHL for `{{contact.industry}}` (e.g., "mental health", "dental", "legal") when adding prospects to make copy feel more tailored.

---

## EMAIL 1 — The Audit Hook

**Subject line options (A/B test these):**
- A: `{{contact.company_name}} — quick question about Google`
- B: `Found {{contact.company_name}} on Google Maps`
- C: `{{contact.first_name}}, how are new patients finding you?`

**Body:**

Hi {{contact.first_name}},

I came across {{contact.company_name}} while researching businesses in {{contact.city}} and ran a quick marketing audit on your online presence.

A few things stood out:

- Your Google Business Profile is missing some key signals that help you rank in the local map pack
- When someone in {{contact.city}} searches for your type of service, competitors with stronger local SEO are showing up first
- There are some quick fixes that could make a real difference in how many calls you get from Google

I put together a short report — happy to send it over if you're interested. No cost, no commitment. Just figured it might be useful.

Worth a look?

{{user.name}}

---

## EMAIL 2 — The Competitor Gap (Day 3)

**Subject line options:**
- A: `Your competitors are doing this one thing`
- B: `Re: {{contact.company_name}} audit`

**Body:**

Hi {{contact.first_name}},

Quick follow-up. One thing I noticed in your area — a few of your competitors in {{contact.city}} have been actively building up their Google reviews and optimizing their local listings.

That matters because 87% of people read online reviews before choosing a local business. And Google uses review signals as a direct ranking factor for who shows up in the map pack.

The good news: the gap isn't huge yet. A focused local SEO strategy over 60–90 days could put {{contact.company_name}} ahead of most competitors in your area.

Want me to show you exactly where you stand vs. the top 3 competitors? Takes 10 minutes on a call.

{{user.name}}

---

## EMAIL 3 — The Free Value Drop (Day 6)

**Subject line options:**
- A: `3 things {{contact.company_name}} can fix this week`
- B: `Free tip for your Google ranking`

**Body:**

Hi {{contact.first_name}},

Whether we work together or not, here are three things you can do right now to improve how {{contact.company_name}} shows up on Google:

1. **Update your Google Business Profile categories.** Most businesses in {{contact.city}} only have one category set. Adding 2–3 relevant secondary categories tells Google more about what you do — and helps you show up for more searches.

2. **Post on your Google profile weekly.** Google rewards active listings. A quick post about a service, tip, or update once a week signals that your business is alive.

3. **Respond to every review — good and bad.** Google's algorithm factors in response rate. A short "thank you" on positive reviews and a professional reply to negative ones both help.

These three things alone can move the needle. If you want the full picture of what's holding your rankings back, I'm happy to walk you through the audit I ran.

{{user.name}}

---

## EMAIL 4 — The Cost of Waiting (Day 9)

**Subject line options:**
- A: `What "not showing up on Google" actually costs`
- B: `Quick math on local search`

**Body:**

Hi {{contact.first_name}},

Here's something most business owners in {{contact.city}} don't think about:

The average local service search on Google has commercial intent — the person is ready to call someone. If {{contact.company_name}} isn't in the top 3 map results, those calls go to whoever is.

Rough numbers: if just 10 extra people per month found you on Google instead of a competitor, and even 3 of them became clients — what would that be worth to your business over a year?

For most local businesses, the answer is somewhere between $30K and $200K in revenue. From a channel that works 24/7 without ad spend.

I help businesses like yours in {{contact.city}} get those rankings. No long-term contracts, and you'll see exactly what we're doing every step of the way.

Open to a 10-minute call this week?

{{user.name}}

---

## EMAIL 5 — The Breakup (Day 13)

**Subject line options:**
- A: `Closing the loop`
- B: `Should I close your file?`

**Body:**

Hi {{contact.first_name}},

I've reached out a few times about improving {{contact.company_name}}'s visibility on Google in {{contact.city}}. I don't want to be a pest, so this will be my last note.

If local SEO isn't a priority right now, no hard feelings at all. I'll remove you from my follow-up list.

But if you've been meaning to reply and just got busy — here's what I'd suggest: a quick 10-minute call where I share the audit findings. Worst case, you walk away with a clear picture of where you stand online. No pitch, no pressure.

Either way, I wish {{contact.company_name}} all the best.

{{user.name}}

---

## Sequence Performance Tips

**Subject lines:** Always A/B test. GHL lets you split test subject lines — use it on every email.

**Timing:** Send between 8–10 AM in the prospect's local time zone. Tuesday through Thursday perform best.

**Personalization:** The more you customize `{{contact.industry}}` and reference their specific service type (e.g., "therapy practice" vs. "dental office"), the higher your reply rate.

**Reply handling:** Set up a GHL automation to stop the sequence immediately when a prospect replies. Route all replies to a dedicated inbox you check daily.

**Follow-up after reply:** If someone says "send the report" — send the GHL-generated audit within 1 hour. Speed matters.

**Warm-up:** If using a new email domain, warm it up for 2–3 weeks before running cold sequences at volume. GHL integrates with Mailgun — start with 20–30 emails/day and ramp up.
