import { SERVICE_PRICES } from "./servicePrices";

export interface QuoteResult {
  price: number;
  formattedPrice: string;
  pricePerSqm: number;
  minimumChargeApplied: boolean;
}

export function formatCurrency(price: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}

export function calculateCarpetPrice(area: number): QuoteResult {
  const band =
    SERVICE_PRICES.carpet.bands.find(
      (item) => area >= item.min && area <= item.max,
    ) ?? SERVICE_PRICES.carpet.bands[0];
  const calculated = Math.round(area * band.pricePerSqm);
  const price = Math.max(calculated, SERVICE_PRICES.carpet.minimumCharge);

  return {
    price,
    formattedPrice: formatCurrency(price),
    pricePerSqm: band.pricePerSqm,
    minimumChargeApplied: price === SERVICE_PRICES.carpet.minimumCharge,
  };
}

export function calculateSteamPrice(area: number): QuoteResult {
  const calculated = Math.round(area * SERVICE_PRICES.steam.pricePerSqm);
  const price = Math.max(calculated, SERVICE_PRICES.steam.minimumCharge);

  return {
    price,
    formattedPrice: formatCurrency(price),
    pricePerSqm: SERVICE_PRICES.steam.pricePerSqm,
    minimumChargeApplied: price === SERVICE_PRICES.steam.minimumCharge,
  };
}

export function calculateUpholsteryItem(
  item: keyof typeof SERVICE_PRICES.upholstery,
  quantity = 1,
): number {
  return SERVICE_PRICES.upholstery[item] * quantity;
}

export function calculateMattressItem(
  size: keyof typeof SERVICE_PRICES.mattress,
  quantity = 1,
): number {
  return SERVICE_PRICES.mattress[size] * quantity;
}

export function calculateRugItem(
  size: keyof typeof SERVICE_PRICES.rugs,
  quantity = 1,
): number {
  return SERVICE_PRICES.rugs[size] * quantity;
}
