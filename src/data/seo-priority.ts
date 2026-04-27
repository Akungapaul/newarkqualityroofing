import type { City, Service } from '@/lib/types';

export const PRIORITY_SERVICE_IDS = [
  'roof-repair',
  'roof-leak-repair',
  'emergency-roof-repair',
  'roof-replacement',
  'flat-roof-installation-repair',
  'commercial-roof-repair',
  'commercial-roof-installation',
  'gutter-installation-repair',
  'gutter-guard-installation',
  'modified-bitumen-roofing',
  'built-up-roofing',
  'green-roof-installation',
  'tpo-roofing-installation',
  'epdm-commercial-roofing',
] as const;

export const PRIORITY_CITY_IDS = [
  'newark',
  'east-orange',
  'bloomfield',
  'montclair',
  'belleville',
  'irvington',
  'south-orange',
  'west-orange',
  'maplewood',
  'livingston',
] as const;

export const PRIORITY_COMBO_PAIRS = new Set([
  'roof-repair:newark',
  'roof-leak-repair:newark',
  'emergency-roof-repair:newark',
  'roof-replacement:newark',
  'flat-roof-installation-repair:newark',
  'commercial-roof-repair:newark',
  'commercial-roof-installation:newark',
  'gutter-guard-installation:belleville',
  'green-roof-installation:newark',
  'modified-bitumen-roofing:newark',
  'built-up-roofing:newark',
]);

export function isPriorityService(service: Service): boolean {
  return PRIORITY_SERVICE_IDS.includes(service.id as (typeof PRIORITY_SERVICE_IDS)[number]);
}

export function isPriorityCity(city: City): boolean {
  return PRIORITY_CITY_IDS.includes(city.id as (typeof PRIORITY_CITY_IDS)[number]);
}

export function isPriorityCombo(service: Service, city: City): boolean {
  return PRIORITY_COMBO_PAIRS.has(`${service.id}:${city.id}`) || (isPriorityService(service) && city.id === 'newark');
}

export function getComboSitemapPriority(service: Service, city: City): number {
  if (isPriorityCombo(service, city)) return 0.9;
  if (isPriorityService(service) && isPriorityCity(city)) return 0.75;
  if (isPriorityService(service) || isPriorityCity(city)) return 0.55;
  return 0.35;
}

export function getComboChangeFrequency(service: Service, city: City): 'weekly' | 'monthly' | 'yearly' {
  if (isPriorityCombo(service, city)) return 'weekly';
  if (isPriorityService(service) && isPriorityCity(city)) return 'monthly';
  return 'yearly';
}
