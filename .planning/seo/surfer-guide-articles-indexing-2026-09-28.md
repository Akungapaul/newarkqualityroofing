# Surfer guide articles — indexing status 2026-09-28

Source: GSC URL Inspection API (48 URLs) + manual Request Indexing via GSC UI.
Property `https://newarkqualityroofing.com/`. Sitemaps resubmitted 2026-09-27 19:16Z; IndexNow Bing 200 / Yandex 202.

## Indexed (28) — "Submitted and indexed", crawled 2026-09-27 19:21Z … 2026-09-28 06:41Z
/roofing-company-close-to-me /roof-contractors /roof-professionals /companias-de-roofing-cerca-de-mi /roof-experts
/roofing-repair-near-me /roof-repair-price /repair-of-roof /roof-repair-company /roof-repairs-company /inexpensive-roof-repair /cost-of-roof-repair
/commercial-roofing-guide /commercial-roofing-service /commercial-roofing-nj /commercial-roof-repairs
/how-much-cost-to-change-roof /roof-price /average-cost-to-tear-off-and-replace-roof /roof-replace-cost
/roof-replacement-services /replace-roof /changing-roof /residential-roof-companies /new-roof-installation /flat-roof-roofer /roof-storm-damage
/roofing-contractors (indexed after the manual request, crawl 06:41Z)

## Request Indexing submitted 2026-09-28 (8, daily quota then exhausted)
/how-to-choose-a-roofing-contractor (Crawled – currently not indexed) · /best-roofing-company · /roofing-contractors-in-my-area · /reputable-roofing-contractors · /best-roofers · /cost-replace-garage-roof · /roofing-maintenance (was "URL is unknown to Google") · /commercial-roof-contractor

## Still to request (11) — quota resets ~24h; all are "Discovered – currently not indexed" and in both sitemaps
/estimator-roof (quota hit on this one) · /commercial-roofing-solutions · /commercial-roofing-installer · /roofers-repairs · /roofing-repairman · /roofing-fixing · /roofer-contractors · /roofs-company · /top-roofing · /general-roofing · /roofing-llc · /restoration-roofing

## GSC UI automation notes (claude-in-chrome)
- After the "Indexing requested" toast, keyboard focus stays on the button: press Escape, then click the top combobox (ref) 2–3× until the history dropdown shows, THEN type. Typing without that focus lands on the button and Return re-requests the previous URL (wasted 2 quota units on how-to-choose + roofing-contractors-in-my-area).
- Click "REQUEST INDEXING" by coordinate (right end of the status card), not by ref — ref clicks silently no-op.
- Each request = "Testing if live URL can be indexed" ~20 s, then the toast. Quota error dialog: "Quota Exceeded — you've exceeded your daily quota".
- The UI's inspection card can be stale (showed "not on Google" for /roofing-contractors while the API said indexed); trust `gsc_inspect_url`.

## Update 2026-10-01 — remaining batch requested; all 48 now indexed or in the priority crawl queue

API re-check before requesting: `/commercial-roofing-solutions` (crawl 2026-09-28 10:57Z) and `/roofers-repairs` (crawl 2026-09-28 12:40Z) indexed on their own → **30/48 indexed**.

Request Indexing submitted (10, 0 quota errors, loop ran clean):
/estimator-roof · /commercial-roofing-installer · /roofing-repairman · /roofing-fixing · /roofer-contractors · /roofs-company · /top-roofing · /general-roofing · /roofing-llc · /restoration-roofing

Three of these (`/roofing-repairman`, `/roofer-contractors`, previously `/roofing-maintenance`) showed "URL is unknown to Google — no referring sitemaps detected" in the UI although both sitemaps list them; the API had them as "Discovered". Requesting overrides that either way.

Nothing left to request. Next check: re-run `gsc_inspect_url` on the 18 manually-requested URLs ~2026-10-08; anything still "Crawled – currently not indexed" after a crawl is a quality signal, not a submission problem.

Stable UI loop (no wasted quota this run): type URL → Return → wait 15 s → click REQUEST INDEXING at (1187,285) → wait 20 s → Escape → ref-click combobox → coordinate-click (500,25) → confirm history dropdown → next URL.
