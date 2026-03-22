// ============================================================
// ThisLife — Purchasable Items & Assets
// Houses, cars, businesses, stocks, and crypto
// ============================================================

import type { Asset } from '../types/game';

// ---- Houses ----

export const HOUSES: Omit<Asset, 'id'>[] = [
  {
    type: 'house',
    name: 'Tiny Studio Apartment',
    value: 30_000,
    purchasePrice: 30_000,
    purchaseAge: 0,
    expense: 300,
  },
  {
    type: 'house',
    name: 'One-Bedroom Apartment',
    value: 80_000,
    purchasePrice: 80_000,
    purchaseAge: 0,
    expense: 500,
  },
  {
    type: 'house',
    name: 'Suburban Starter Home',
    value: 150_000,
    purchasePrice: 150_000,
    purchaseAge: 0,
    expense: 800,
  },
  {
    type: 'house',
    name: 'Family Home',
    value: 300_000,
    purchasePrice: 300_000,
    purchaseAge: 0,
    expense: 1_200,
  },
  {
    type: 'house',
    name: 'Modern Townhouse',
    value: 400_000,
    purchasePrice: 400_000,
    purchaseAge: 0,
    expense: 1_000,
  },
  {
    type: 'house',
    name: 'Lakefront House',
    value: 600_000,
    purchasePrice: 600_000,
    purchaseAge: 0,
    expense: 1_500,
  },
  {
    type: 'house',
    name: 'McMansion',
    value: 900_000,
    purchasePrice: 900_000,
    purchaseAge: 0,
    expense: 2_500,
  },
  {
    type: 'house',
    name: 'Penthouse Condo',
    value: 1_500_000,
    purchasePrice: 1_500_000,
    purchaseAge: 0,
    expense: 3_000,
  },
  {
    type: 'house',
    name: 'Beachfront Villa',
    value: 3_000_000,
    purchasePrice: 3_000_000,
    purchaseAge: 0,
    expense: 5_000,
  },
  {
    type: 'house',
    name: 'Mega Mansion',
    value: 10_000_000,
    purchasePrice: 10_000_000,
    purchaseAge: 0,
    expense: 15_000,
  },
];

// ---- Cars ----

export const CARS: Omit<Asset, 'id'>[] = [
  {
    type: 'car',
    name: 'Rusty Beater',
    value: 2_000,
    purchasePrice: 2_000,
    purchaseAge: 0,
    expense: 200,
  },
  {
    type: 'car',
    name: 'Used Sedan',
    value: 8_000,
    purchasePrice: 8_000,
    purchaseAge: 0,
    expense: 300,
  },
  {
    type: 'car',
    name: 'Economy Car',
    value: 18_000,
    purchasePrice: 18_000,
    purchaseAge: 0,
    expense: 400,
  },
  {
    type: 'car',
    name: 'Midsize SUV',
    value: 35_000,
    purchasePrice: 35_000,
    purchaseAge: 0,
    expense: 600,
  },
  {
    type: 'car',
    name: 'Pickup Truck',
    value: 40_000,
    purchasePrice: 40_000,
    purchaseAge: 0,
    expense: 500,
  },
  {
    type: 'car',
    name: 'Luxury Sedan',
    value: 60_000,
    purchasePrice: 60_000,
    purchaseAge: 0,
    expense: 800,
  },
  {
    type: 'car',
    name: 'Sports Car',
    value: 90_000,
    purchasePrice: 90_000,
    purchaseAge: 0,
    expense: 1_000,
  },
  {
    type: 'car',
    name: 'Luxury SUV',
    value: 120_000,
    purchasePrice: 120_000,
    purchaseAge: 0,
    expense: 1_200,
  },
  {
    type: 'car',
    name: 'Supercar',
    value: 300_000,
    purchasePrice: 300_000,
    purchaseAge: 0,
    expense: 2_500,
  },
  {
    type: 'car',
    name: 'Hypercar',
    value: 2_000_000,
    purchasePrice: 2_000_000,
    purchaseAge: 0,
    expense: 5_000,
  },
];

// ---- Businesses ----

export const BUSINESSES: Omit<Asset, 'id'>[] = [
  {
    type: 'business',
    name: 'Food Truck',
    value: 20_000,
    purchasePrice: 20_000,
    purchaseAge: 0,
    income: 2_000,
  },
  {
    type: 'business',
    name: 'Barbershop',
    value: 50_000,
    purchasePrice: 50_000,
    purchaseAge: 0,
    income: 3_000,
  },
  {
    type: 'business',
    name: 'Laundromat',
    value: 80_000,
    purchasePrice: 80_000,
    purchaseAge: 0,
    income: 4_000,
  },
  {
    type: 'business',
    name: 'Restaurant',
    value: 150_000,
    purchasePrice: 150_000,
    purchaseAge: 0,
    income: 8_000,
  },
  {
    type: 'business',
    name: 'Nightclub',
    value: 300_000,
    purchasePrice: 300_000,
    purchaseAge: 0,
    income: 15_000,
  },
  {
    type: 'business',
    name: 'Tech Startup',
    value: 500_000,
    purchasePrice: 500_000,
    purchaseAge: 0,
    income: 5_000, // volatile: actual income ranges $5,000-$50,000
  },
  {
    type: 'business',
    name: 'Real Estate Firm',
    value: 1_000_000,
    purchasePrice: 1_000_000,
    purchaseAge: 0,
    income: 30_000,
  },
  {
    type: 'business',
    name: 'Franchise Chain',
    value: 5_000_000,
    purchasePrice: 5_000_000,
    purchaseAge: 0,
    income: 100_000,
  },
];

// ---- Stocks ----

export interface StockDefinition {
  name: string;
  symbol: string;
  price: number;
  volatility: number; // 0-1 scale: 0 = stable blue-chip, 1 = wildly volatile
}

export const STOCKS: StockDefinition[] = [
  { name: 'MegaCorp',            symbol: 'MEGA', price: 150,  volatility: 0.10 },
  { name: 'TechBro Inc',         symbol: 'TBRO', price: 80,   volatility: 0.70 },
  { name: 'GreenEnergy',         symbol: 'GREN', price: 45,   volatility: 0.40 },
  { name: 'PharmaPlus',          symbol: 'PHRM', price: 200,  volatility: 0.35 },
  { name: 'BurgerBarn',          symbol: 'BURG', price: 55,    volatility: 0.15 },
  { name: 'CloudNine Software',  symbol: 'CLD9', price: 120,  volatility: 0.55 },
  { name: 'OilKing Energy',      symbol: 'OILK', price: 90,   volatility: 0.30 },
  { name: 'SpaceTech',           symbol: 'SPTK', price: 250,  volatility: 0.65 },
  { name: 'RetailMax',           symbol: 'RMAX', price: 35,    volatility: 0.20 },
  { name: 'FinanceFirst',        symbol: 'FNFR', price: 110,  volatility: 0.25 },
  { name: 'SocialBuzz',          symbol: 'SBUZ', price: 65,   volatility: 0.60 },
  { name: 'AutoDrive Corp',      symbol: 'ADRC', price: 180,  volatility: 0.50 },
];

// ---- Crypto ----

export interface CryptoDefinition {
  name: string;
  symbol: string;
  price: number;
  volatility: number; // 0-1 scale: crypto is inherently volatile, so these skew high
}

export const CRYPTO: CryptoDefinition[] = [
  { name: 'BitGold',       symbol: 'BTG',   price: 42_000, volatility: 0.70 },
  { name: 'EtherNet',      symbol: 'ENET',  price: 2_800,  volatility: 0.75 },
  { name: 'DogeMoon',      symbol: 'DGMN',  price: 0.08,   volatility: 0.95 },
  { name: 'StablishCoin',  symbol: 'STBL',  price: 1.00,   volatility: 0.05 },
  { name: 'MemeCoinX',     symbol: 'MEMX',  price: 0.002,  volatility: 0.99 },
  { name: 'ChainLink Pro', symbol: 'CLNK',  price: 18,     volatility: 0.80 },
  { name: 'PrivacyCash',   symbol: 'PRVC',  price: 150,    volatility: 0.85 },
];
