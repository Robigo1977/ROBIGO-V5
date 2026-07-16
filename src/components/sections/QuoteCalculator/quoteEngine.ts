// src/components/sections/QuoteCalculator/quoteEngine.ts

import { SERVICE_PRICES } from "./servicePrices";

export interface CarpetQuoteInput {
  area: number;
}

export interface QuoteResult {
  price: number;
  formattedPrice: string;
  pricePerSqm: number;
  minimumChargeApplied: boolean;
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

export function formatCurrency(price: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}

/* -------------------------------------------------------------------------- */
/* Carpet                                                                     */
/* -------------------------------------------------------------------------- */

export function calculateCarpetQuote(
  input: CarpetQuoteInput
): QuoteResult {
  const { area } = input;

  const band =
    SERVICE_PRICES.carpet.bands.find(
      (band) => area >= band.min && area <= band.max
    ) ?? SERVICE_PRICES.carpet.bands[0];

  const calculatedPrice = Math.round(area * band.pricePerSqm);

  const finalPrice = Math.max(
    calculatedPrice,
    SERVICE_PRICES.carpet.minimumCharge
  );

  return {
    price: finalPrice,
    formattedPrice: formatCurrency(finalPrice),
    pricePerSqm: band.pricePerSqm,
    minimumChargeApplied:
      finalPrice === SERVICE_PRICES.carpet.minimumCharge,
  };
}

/* -------------------------------------------------------------------------- */
/* Upholstery                                                                 */
/* -------------------------------------------------------------------------- */

export function calculateUpholsteryItem(
  item: keyof typeof SERVICE_PRICES.upholstery,
  quantity = 1
): number {
  return SERVICE_PRICES.upholstery[item] * quantity;
}

/* -------------------------------------------------------------------------- */
/* Mattress                                                                   */
/* -------------------------------------------------------------------------- */

export function calculateMattressItem(
  size: keyof typeof SERVICE_PRICES.mattress,
  quantity = 1
): number {
  return SERVICE_PRICES.mattress[size] * quantity;
}

/* -------------------------------------------------------------------------- */
/* Rugs                                                                       */
/* -------------------------------------------------------------------------- */

export function calculateRugItem(
  size: keyof typeof SERVICE_PRICES.rugs,
  quantity = 1
): number {
  return SERVICE_PRICES.rugs[size] * quantity;
}