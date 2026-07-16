// src/components/sections/QuoteCalculator/priceEngine.ts

import type { EstimateResult } from "./types";
import { calculateCarpetQuote } from "./quoteEngine";

export function calculateCarpetPrice(
  area: number
): EstimateResult {
  const result = calculateCarpetQuote({ area });

  return {
    price: result.price,
    formattedPrice: formatPrice(result.price),
  };
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}