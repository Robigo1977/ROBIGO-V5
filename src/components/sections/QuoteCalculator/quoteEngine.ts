// src/components/sections/QuoteCalculator/quoteEngine.ts

import { SERVICE_PRICES } from "./servicePrices";


export interface AreaQuoteInput {
  area: number;
}


export interface QuoteResult {
  price: number;
  formattedPrice: string;
  pricePerSqm: number;
  minimumChargeApplied: boolean;
}


/* -------------------------------------------------------------------------- */
/* FORMAT                                                                     */
/* -------------------------------------------------------------------------- */

export function formatCurrency(
  price: number
): string {

  return new Intl.NumberFormat(
    "en-GB",
    {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }
  ).format(price);

}


/* -------------------------------------------------------------------------- */
/* SHARED AREA ENGINE                                                         */
/* -------------------------------------------------------------------------- */

function calculateAreaBasedQuote(
  area: number
): QuoteResult {

  const band =
    SERVICE_PRICES.carpet.bands.find(
      (item) =>
        area >= item.min &&
        area <= item.max
    )
    ??
    SERVICE_PRICES.carpet.bands[0];


  const calculated =
    Math.round(
      area * band.pricePerSqm
    );


  const finalPrice =
    Math.max(
      calculated,
      SERVICE_PRICES.carpet.minimumCharge
    );


  return {

    price: finalPrice,

    formattedPrice:
      formatCurrency(finalPrice),

    pricePerSqm:
      band.pricePerSqm,

    minimumChargeApplied:
      finalPrice ===
      SERVICE_PRICES.carpet.minimumCharge,

  };

}


/* -------------------------------------------------------------------------- */
/* CARPET                                                                     */
/* -------------------------------------------------------------------------- */

export function calculateCarpetPrice(
  area: number
): QuoteResult {

  return calculateAreaBasedQuote(
    area
  );

}


/* -------------------------------------------------------------------------- */
/* STEAM                                                                      */
/* -------------------------------------------------------------------------- */

export function calculateSteamPrice(
  area: number
): QuoteResult {

  return calculateAreaBasedQuote(
    area
  );

}


/* -------------------------------------------------------------------------- */
/* UPHOLSTERY                                                                 */
/* -------------------------------------------------------------------------- */

export function calculateUpholsteryItem(
  item: keyof typeof SERVICE_PRICES.upholstery,
  quantity = 1
): number {

  return (
    SERVICE_PRICES.upholstery[item]
    *
    quantity
  );

}


/* -------------------------------------------------------------------------- */
/* MATTRESS                                                                    */
/* -------------------------------------------------------------------------- */

export function calculateMattressItem(
  size: keyof typeof SERVICE_PRICES.mattress,
  quantity = 1
): number {

  return (
    SERVICE_PRICES.mattress[size]
    *
    quantity
  );

}


/* -------------------------------------------------------------------------- */
/* RUGS                                                                       */
/* -------------------------------------------------------------------------- */

export function calculateRugItem(
  size: keyof typeof SERVICE_PRICES.rugs,
  quantity = 1
): number {

  return (
    SERVICE_PRICES.rugs[size]
    *
    quantity
  );

}