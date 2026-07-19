// src/components/sections/QuoteCalculator/quoteEngine.ts

import { SERVICE_PRICES } from "./servicePrices";

export interface AreaQuoteInput {
  area: number;
}

export interface CarpetQuoteInput extends AreaQuoteInput {}

export interface SteamQuoteInput extends AreaQuoteInput {}

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
/* Shared Area Engine                                                         */
/* -------------------------------------------------------------------------- */

function calculateAreaBasedQuote(
  area: number,
  pricing: typeof SERVICE_PRICES.carpet
): QuoteResult {
  const band =
    pricing.bands.find(
      (band) => area >= band.min && area <= band.max
    ) ?? pricing.bands[0];

  const calculatedPrice = Math.round(area * band.pricePerSqm);

  const finalPrice = Math.max(
    calculatedPrice,
    pricing.minimumCharge
  );

  return {
    price: finalPrice,
    formattedPrice: formatCurrency(finalPrice),
    pricePerSqm: band.pricePerSqm,
    minimumChargeApplied:
      finalPrice === pricing.minimumCharge,
  };
}

/* -------------------------------------------------------------------------- */
/* Carpet                                                                     */
/* -------------------------------------------------------------------------- */

export function calculateCarpetQuote(
  input: CarpetQuoteInput
): QuoteResult {
  return calculateAreaBasedQuote(
    input.area,
    SERVICE_PRICES.carpet
  );
}

/* -------------------------------------------------------------------------- */
/* Steam                                                                      */
/* -------------------------------------------------------------------------- */

export function calculateSteamQuote(
  input: SteamQuoteInput
): QuoteResult {
  // Steam intentionally shares the same pricing model
  // as Carpet Cleaning.
  return calculateAreaBasedQuote(
    input.area,
    SERVICE_PRICES.carpet
  );
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