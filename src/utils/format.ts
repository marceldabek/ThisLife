import { Season, LifeStage, getLifeStage } from '../types/game';

/**
 * Format money as a dollar string: $1,234,567
 */
export function formatMoney(amount: number): string {
  const negative = amount < 0;
  const abs = Math.abs(Math.floor(amount));
  const formatted = abs.toLocaleString('en-US');
  return `${negative ? '-' : ''}$${formatted}`;
}

/**
 * Format compact money: $1.2M, $500K, etc.
 */
export function formatMoneyCompact(amount: number): string {
  const abs = Math.abs(amount);
  const sign = amount < 0 ? '-' : '';

  if (abs >= 1_000_000_000) return `${sign}$${(abs / 1_000_000_000).toFixed(1)}B`;
  if (abs >= 1_000_000) return `${sign}$${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `${sign}$${(abs / 1_000).toFixed(0)}K`;
  return `${sign}$${abs.toFixed(0)}`;
}

/**
 * Format age display: "Age 24 — Summer"
 */
export function formatAge(age: number, season: Season): string {
  const seasonCapitalized = season.charAt(0).toUpperCase() + season.slice(1);
  return `Age ${age} — ${seasonCapitalized}`;
}

/**
 * Get life stage label
 */
export function formatLifeStage(age: number): string {
  const stage = getLifeStage(age);
  const labels: Record<LifeStage, string> = {
    baby: 'Baby',
    child: 'Child',
    teen: 'Teenager',
    youngAdult: 'Young Adult',
    adult: 'Adult',
    senior: 'Senior',
  };
  return labels[stage];
}

/**
 * Format a season name with capitalization
 */
export function formatSeason(season: Season): string {
  return season.charAt(0).toUpperCase() + season.slice(1);
}

/**
 * Format a stat change for display: "+5 Health" or "-10 Happiness"
 */
export function formatStatChange(stat: string, amount: number): string {
  const sign = amount >= 0 ? '+' : '';
  const label = stat.charAt(0).toUpperCase() + stat.slice(1);
  return `${sign}${amount} ${label}`;
}

/**
 * Format a salary as annual (multiply seasonal by 4)
 */
export function formatSalary(perSeason: number): string {
  return `${formatMoney(perSeason * 4)}/yr`;
}
