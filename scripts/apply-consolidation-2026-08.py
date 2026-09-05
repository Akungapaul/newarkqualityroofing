#!/usr/bin/env python3
"""One-time CSV rewrite implementing the 2026-08 SERP-research consolidation:
  - ALL 1,365 service-x-city combos -> CONSOLIDATE / 301
      * 20-town combos -> their town page (served by middleware pattern rule)
      * Newark combos  -> the FINAL home of their service (post-consolidation)
  - 31 Newark service pages -> CONSOLIDATE into their cluster survivor
  - +1 KEEP row for the new /commercial-roofing-in-newark-nj hub
Run once from repo root: python3 scripts/apply-consolidation-2026-08.py
"""
import csv, sys, re
from collections import Counter

CSV_PATH = 'URL-Classification.csv'
ORIGIN = 'https://newarkqualityroofing.com'

# Final destination for each CONSOLIDATED service (31 entries).
SERVICE_CONSOLIDATION = {
    'roof-leak-repair': '/roof-repair-in-newark-nj',
    'storm-damage-roof-repair': '/emergency-roof-repair-in-newark-nj',
    'hail-damage-roof-repair': '/emergency-roof-repair-in-newark-nj',
    'wind-damage-roof-repair': '/emergency-roof-repair-in-newark-nj',
    'residential-roof-installation': '/roof-replacement-in-newark-nj',
    'full-roof-tear-off': '/roof-replacement-in-newark-nj',
    'roof-overlay-installation': '/roof-replacement-in-newark-nj',
    're-roofing': '/roof-replacement-in-newark-nj',
    'insurance-roof-replacement': '/roof-replacement-in-newark-nj',
    'storm-damage-roof-replacement': '/roof-replacement-in-newark-nj',
    'aging-roof-replacement': '/roof-replacement-in-newark-nj',
    'roof-replacement-after-leak': '/roof-replacement-in-newark-nj',
    'fire-damage-roof-replacement': '/roof-replacement-in-newark-nj',
    'asphalt-shingle-roof-replacement': '/asphalt-shingle-roofing-in-newark-nj',
    'tile-roof-replacement': '/tile-roof-installation-repair-in-newark-nj',
    'cedar-shake-roof-replacement': '/cedar-shake-roofing-in-newark-nj',
    'slate-roof-replacement': '/slate-roof-installation-repair-in-newark-nj',
    'metal-roof-replacement': '/metal-roof-installation-repair-in-newark-nj',
    'flat-roof-replacement': '/flat-roof-installation-repair-in-newark-nj',
    'commercial-roof-installation': '/commercial-roofing-in-newark-nj',
    'commercial-roof-repair': '/commercial-roofing-in-newark-nj',
    'commercial-roof-replacement': '/commercial-roofing-in-newark-nj',
    'epdm-commercial-roofing': '/flat-roof-installation-repair-in-newark-nj',
    'commercial-metal-roofing': '/metal-roof-installation-repair-in-newark-nj',
    'rubber-roofing-epdm': '/flat-roof-installation-repair-in-newark-nj',
    'tpo-roofing-installation': '/flat-roof-installation-repair-in-newark-nj',
    'pvc-roofing': '/flat-roof-installation-repair-in-newark-nj',
    'modified-bitumen-roofing': '/flat-roof-installation-repair-in-newark-nj',
    'built-up-roofing': '/flat-roof-installation-repair-in-newark-nj',
    'spray-foam-roofing': '/flat-roof-installation-repair-in-newark-nj',
    'silicone-elastomeric-roof-coating': '/silicone-roof-coating-in-newark-nj',
}

TOWNS = ['east-orange','west-orange','south-orange','north-caldwell','cedar-grove',
         'glen-ridge','essex-fells','orange','montclair','bloomfield','belleville',
         'nutley','irvington','maplewood','livingston','millburn','verona','caldwell',
         'fairfield','roseland']  # longest-first matching below

def town_of(slug):
    for t in sorted(TOWNS, key=len, reverse=True):
        if slug.endswith('-' + t + '-nj'):
            return t
    if slug.endswith('-newark-nj'):
        return 'newark'
    return None

def service_of(slug, town):
    suffix = '-' + town + '-nj'
    return slug[: -len(suffix)]

rows = []
with open(CSV_PATH, newline='') as f:
    reader = csv.reader(f)
    header = next(reader)
    for r in reader:
        rows.append(r)

COL = {name: i for i, name in enumerate(header)}
iURL, iSitemap, iType, iVerdict, iTarget, iReason = (COL['URL'], COL['Sitemap'],
    COL['Page Type'], COL['Verdict'], COL['Redirect Target'], COL['Reason'])

stats = Counter()
for r in rows:
    slug = r[iURL].replace(ORIGIN, '').lstrip('/')
    if r[iType] == 'Service+City combo':
        town = town_of(slug)
        if town is None:
            sys.exit(f'FATAL: combo slug with unrecognized town: {slug}')
        svc = service_of(slug, town)
        if town == 'newark':
            target = SERVICE_CONSOLIDATION.get(svc, f'/{svc}-in-newark-nj')
            reason = 'Newark combo -> final service destination (2026-08 consolidation; retargeted past consolidated pages to avoid chains)'
            stats['newark_combo'] += 1
        else:
            target = f'/roof-repair-and-installation-in-{town}-nj'
            reason = '2026-08 SERP research item 11: combo equity folds into the one town page; town variants outperform combos in GSC'
            stats['town_combo'] += 1
        r[iVerdict] = 'CONSOLIDATE / 301'
        r[iTarget] = target
        r[iReason] = reason
    elif r[iSitemap] == 'services':
        svc = slug[: -len('-in-newark-nj')] if slug.endswith('-in-newark-nj') else slug
        if svc in SERVICE_CONSOLIDATION:
            r[iVerdict] = 'CONSOLIDATE'
            r[iTarget] = SERVICE_CONSOLIDATION[svc]
            r[iReason] = '2026-08 SERP research: cluster consolidation (items 1/8/9/10) — content section added to survivor before redirect'
            stats['service_consolidated'] += 1
        else:
            stats['service_kept'] += 1

# Append the new commercial hub row (KEEP) so the chain guard accepts targets.
rows.append([f'{ORIGIN}/commercial-roofing-in-newark-nj', 'core', 'Hub', 'Core', '', '',
             'KEEP-INDEX', '', 'NEW 2026-08: commercial roofing hub (P1 from SERP research item 8; 0% overlap with residential SERPs)'])

with open(CSV_PATH, 'w', newline='') as f:
    w = csv.writer(f)
    w.writerow(header)
    w.writerows(rows)

print('CSV rewritten:', dict(stats))
assert stats['newark_combo'] == 65, stats
assert stats['town_combo'] == 1300, stats
assert stats['service_consolidated'] == 31, stats
assert stats['service_kept'] == 34, stats
print('All counts as expected: 65 newark + 1300 town combos, 31 consolidated / 34 kept services, +1 hub row')
