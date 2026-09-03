# GSC Baseline — Hub Narrowing (pre-deploy)

**Captured:** 2026-09-03, immediately before deploying `c7cdcf1`
**Window:** 2026-06-01 → 2026-09-01 (90d) · property `https://newarkqualityroofing.com/`
**Purpose:** the comparison point for the ~2026-12 re-pull. Re-run the EXACT query below.

## The three inversions this deploy targets

| Query | REPAIR page | REPLACEMENT page | Target after |
|---|---|---|---|
| `roof replacement newark nj` | **p12.5** · 37 impr · 0 clicks | p30.9 · 32 impr · 2 clicks | replacement page takes the better position |
| `shingle roofing replacement newark` | **p14.0** · 1 impr | p47.0 · 1 impr | replacement page overtakes |
| `roofing replacement newark` | **p18.0** · 1 impr | *absent* | replacement page appears |

## Control queries — these must NOT regress

| Query | Page | Clicks | Impr | Position |
|---|---|---|---|---|
| `roof repair` | /roof-repair-in-newark-nj | 0 | 127 | **18.1** |
| `roof repair` | /roof-replacement-in-newark-nj | 0 | 24 | 20.5 |
| `roof repair newark nj` | /roof-repair-in-newark-nj | **3** | 116 | **21.6** |
| `roof repair newark nj` | /roof-replacement-in-newark-nj | 0 | 25 | 49.8 |
| `metal roof repair` | /roof-repair-in-newark-nj | 0 | 1 | **4.0** |
| `roof replacement` | /roof-replacement-in-newark-nj | 0 | 156 | **13.3** |
| `roof replacement` | /roof-repair-in-newark-nj | 0 | 26 | 39.8 |

**Cluster total: 5 clicks / 547 impressions across both pages.**

## How to re-pull (identical filters)

```
gsc_search_analytics
  siteUrl    https://newarkqualityroofing.com/
  dimensions ["query","page"]
  page   includingRegex  ^https://newarkqualityroofing\.com/roof-(repair|replacement)-in-newark-nj$
  query  includingRegex  ^(roof replacement newark nj|roofing replacement newark|shingle roofing replacement newark|roof repair|metal roof repair|roof replacement|roof repair newark nj)$
```

## Reading the result

Success = the **replacement** page holds the better position on the three inversion queries while
`roof repair` (p18.1) and `metal roof repair` (p4.0) hold on the repair page.

**Do not read clicks as the outcome.** The cluster earns 5 clicks at p12–50 against 2 earned
referring domains. This deploy reassigns intent; it does not lift traffic. A click change either way
inside 90 days is noise, not signal.
