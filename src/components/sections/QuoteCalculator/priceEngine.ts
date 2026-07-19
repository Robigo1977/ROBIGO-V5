// src/components/sections/QuoteCalculator/priceEngine.ts

import type { EstimateResult } from "./types";
import {
  calculateCarpetQuote,
  calculateSteamQuote,
} from "./quoteEngine";

/* -------------------------------------------------------------------------- */
/* Shared Mapper                                                              */
/* -------------------------------------------------------------------------- */

function toEstimateResult(price: number): EstimateResult {
  return {
    price,
    formattedPrice: formatPrice(price),
  };
}

/* -------------------------------------------------------------------------- */
/* Carpet                                                                     */
/* -------------------------------------------------------------------------- */

export function calculateCarpetPrice(
  area: number
): EstimateResult {
  const result = calculateCarpetQuote({ area });

  return toEstimateResult(result.price);
}

/* -------------------------------------------------------------------------- */
/* Steam                                                                      */
/* -------------------------------------------------------------------------- */

export function calculateSteamPrice(
  area: number
): EstimateResult {
  const result = calculateSteamQuote({ area });

  return toEstimateResult(result.price);
}

/* -------------------------------------------------------------------------- */
/* Formatting                                                                 */
/* -------------------------------------------------------------------------- */

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}