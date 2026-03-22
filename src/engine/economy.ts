// ============================================================
// ThisLife — Economy / Financial System
// Handles income, expenses, asset valuation, and purchases
// ============================================================

import type { Asset, AssetType, GameState } from '../types/game';

// ---- Constants ----

const BASE_LIVING_COST = 500; // minimum per season

const COLLEGE_TUITION = 5000; // per season
const GRAD_SCHOOL_TUITION = 7500; // per season

const PROPERTY_TAX_RATE = 0.005; // 0.5% of house value per season (~2% annually)

// Asset appreciation/depreciation ranges (percent per season)
const ASSET_FLUCTUATION: Record<AssetType, { min: number; max: number }> = {
  house:    { min: 0,   max: 2 },
  car:      { min: -3,  max: -1 },
  business: { min: -5,  max: 10 },
  stock:    { min: -15, max: 20 },
  crypto:   { min: -30, max: 40 },
};

// ---- Income ----

/**
 * Calculate all income sources for a single season.
 * Includes salary and asset-generated income (rentals, dividends, business revenue).
 */
export function calculateSeasonIncome(
  state: GameState,
): { total: number; breakdown: { source: string; amount: number }[] } {
  const breakdown: { source: string; amount: number }[] = [];

  // Salary
  if (state.character.career && !state.character.inPrison) {
    breakdown.push({
      source: `Salary (${state.character.career.title})`,
      amount: state.character.career.salary,
    });
  }

  // Asset income (rentals, dividends, business revenue)
  for (const asset of state.assets) {
    if (asset.income && asset.income > 0) {
      breakdown.push({
        source: `${asset.name} income`,
        amount: asset.income,
      });
    }
  }

  const total = breakdown.reduce((sum, item) => sum + item.amount, 0);
  return { total, breakdown };
}

// ---- Expenses ----

/**
 * Calculate all expenses for a single season.
 * Includes living costs, asset maintenance, tuition, and property taxes.
 */
export function calculateSeasonExpenses(
  state: GameState,
): { total: number; breakdown: { source: string; amount: number }[] } {
  const breakdown: { source: string; amount: number }[] = [];

  // Base living cost — scales with lifestyle (approximated by happiness + looks)
  const lifestyleMultiplier = 1 + (state.character.stats.happiness / 100) * 0.5;
  const livingCost = Math.round(BASE_LIVING_COST * lifestyleMultiplier);
  breakdown.push({ source: 'Living expenses', amount: livingCost });

  // Education tuition
  if (state.character.education.isEnrolled) {
    if (state.character.education.level === 'college') {
      breakdown.push({ source: 'College tuition', amount: COLLEGE_TUITION });
    } else if (state.character.education.level === 'gradSchool') {
      breakdown.push({ source: 'Grad school tuition', amount: GRAD_SCHOOL_TUITION });
    }
  }

  // Asset expenses (maintenance) and property taxes
  for (const asset of state.assets) {
    if (asset.expense && asset.expense > 0) {
      breakdown.push({
        source: `${asset.name} maintenance`,
        amount: asset.expense,
      });
    }

    // Property tax on houses
    if (asset.type === 'house') {
      const tax = Math.round(asset.value * PROPERTY_TAX_RATE);
      breakdown.push({
        source: `${asset.name} property tax`,
        amount: tax,
      });
    }
  }

  const total = breakdown.reduce((sum, item) => sum + item.amount, 0);
  return { total, breakdown };
}

// ---- Asset Valuation ----

/**
 * Update asset values for one season based on type-specific fluctuation ranges.
 * Returns a new array; does not mutate the input.
 */
export function updateAssetValues(assets: Asset[]): Asset[] {
  return assets.map((asset) => {
    const range = ASSET_FLUCTUATION[asset.type];
    // Random percentage change within the type's range
    const pctChange = randomFloat(range.min, range.max) / 100;
    const newValue = Math.max(0, Math.round(asset.value * (1 + pctChange)));

    return { ...asset, value: newValue };
  });
}

// ---- Net Worth ----

/**
 * Calculate total net worth: cash on hand + sum of all asset values.
 */
export function calculateNetWorth(state: GameState): number {
  const assetValue = state.assets.reduce((sum, a) => sum + a.value, 0);
  return state.character.money + assetValue;
}

// ---- Available Purchases ----

/**
 * Return a list of houses available for purchase at various price points.
 */
export function getAvailableHouses(): Asset[] {
  const houses: { name: string; value: number; income: number; expense: number }[] = [
    { name: 'Rundown Studio Apartment',  value: 50_000,    income: 0,      expense: 200 },
    { name: 'Suburban Starter Home',     value: 150_000,   income: 0,      expense: 400 },
    { name: 'Cozy Townhouse',           value: 275_000,   income: 0,      expense: 600 },
    { name: 'Nice Family Home',         value: 450_000,   income: 0,      expense: 900 },
    { name: 'Upscale Colonial',         value: 750_000,   income: 0,      expense: 1_500 },
    { name: 'Luxury Penthouse',         value: 1_500_000, income: 0,      expense: 3_000 },
    { name: 'Waterfront Estate',        value: 3_000_000, income: 0,      expense: 5_000 },
    { name: 'Mega Mansion',            value: 5_000_000, income: 0,      expense: 8_000 },
    { name: 'Rental Duplex',           value: 200_000,   income: 1_800,  expense: 500 },
    { name: 'Rental Apartment Building', value: 800_000,  income: 6_000,  expense: 2_000 },
  ];

  return houses.map((h, i) => ({
    id: `house-${i}`,
    type: 'house' as AssetType,
    name: h.name,
    value: h.value,
    purchasePrice: h.value,
    purchaseAge: 0,
    income: h.income,
    expense: h.expense,
  }));
}

/**
 * Return a list of cars available for purchase at various price points.
 */
export function getAvailableCars(): Asset[] {
  const cars: { name: string; value: number; expense: number }[] = [
    { name: '1998 Rusty Beater',        value: 5_000,    expense: 300 },
    { name: 'Used Sedan',              value: 12_000,   expense: 200 },
    { name: 'Reliable Compact',        value: 25_000,   expense: 250 },
    { name: 'Family SUV',             value: 45_000,   expense: 400 },
    { name: 'Sporty Coupe',           value: 65_000,   expense: 500 },
    { name: 'Luxury Sedan',           value: 95_000,   expense: 700 },
    { name: 'Premium Sports Car',     value: 180_000,  expense: 1_200 },
    { name: 'Exotic Supercar',        value: 500_000,  expense: 3_000 },
  ];

  return cars.map((c, i) => ({
    id: `car-${i}`,
    type: 'car' as AssetType,
    name: c.name,
    value: c.value,
    purchasePrice: c.value,
    purchaseAge: 0,
    income: 0,
    expense: c.expense,
  }));
}

/**
 * Return a list of investment opportunities (stocks and crypto).
 */
export function getAvailableInvestments(): {
  name: string;
  type: AssetType;
  price: number;
  risk: string;
}[] {
  return [
    // Stocks — low to high risk
    { name: 'Blue-Chip Index Fund',      type: 'stock',  price: 1_000,   risk: 'low' },
    { name: 'Dividend Aristocrat ETF',   type: 'stock',  price: 2_500,   risk: 'low' },
    { name: 'Growth Tech Fund',          type: 'stock',  price: 5_000,   risk: 'medium' },
    { name: 'Emerging Markets Fund',     type: 'stock',  price: 3_000,   risk: 'medium' },
    { name: 'Biotech Startup Shares',    type: 'stock',  price: 10_000,  risk: 'high' },
    { name: 'Meme Stock Bundle',         type: 'stock',  price: 500,     risk: 'high' },

    // Crypto — all high risk
    { name: 'Bitcoin',                   type: 'crypto', price: 5_000,   risk: 'high' },
    { name: 'Ethereum',                  type: 'crypto', price: 2_000,   risk: 'high' },
    { name: 'Altcoin Basket',            type: 'crypto', price: 500,     risk: 'extreme' },
    { name: 'DogeMoon Token',            type: 'crypto', price: 100,     risk: 'extreme' },
  ];
}

// ---- Main Season Finance Entry Point ----

/**
 * Process all financial changes for a single season.
 * Calculates income minus expenses, updates asset values, and returns the full breakdown.
 * Pure function — does not mutate state.
 */
export function processSeasonFinances(state: GameState): {
  moneyChange: number;
  updatedAssets: Asset[];
  breakdown: { source: string; amount: number }[];
} {
  const income = calculateSeasonIncome(state);
  const expenses = calculateSeasonExpenses(state);
  const updatedAssets = updateAssetValues(state.assets);

  // Merge breakdowns: income as positive, expenses as negative
  const breakdown: { source: string; amount: number }[] = [
    ...income.breakdown.map((item) => ({ source: item.source, amount: item.amount })),
    ...expenses.breakdown.map((item) => ({ source: item.source, amount: -item.amount })),
  ];

  const moneyChange = income.total - expenses.total;

  return { moneyChange, updatedAssets, breakdown };
}

// ---- Internal Helpers ----

/**
 * Random float between min and max (inclusive-ish).
 * Used for percentage-based fluctuations.
 */
function randomFloat(min: number, max: number): number {
  return min + Math.random() * (max - min);
}
