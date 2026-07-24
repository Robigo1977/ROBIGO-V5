import type {
  EstimateResult,
  QuoteBreakdownItem,
  QuoteExtras,
  QuoteItem,
  QuoteResult,
} from "./types";
import { SERVICE_PRICES } from "./servicePrices";
import {
  calculateCarpetPrice,
  calculateMattressItem,
  calculateRugItem,
  calculateSteamPrice,
  calculateUpholsteryItem,
} from "./quoteEngine";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}

function getDescription(item: QuoteItem): string {
  if (item.service === "carpet") return `Carpet Cleaning ${item.area ?? 0}m²`;
  if (item.service === "steam") {
    return `Chemical-Free Steam Cleaning ${item.area ?? 0}m²`;
  }
  if (item.service === "upholstery") {
    const labels = {
      armchair: "Armchair Cleaning",
      diningChair: "Dining Chair Cleaning",
      sofa2: "2 Seater Sofa Cleaning",
      sofa3: "3 Seater Sofa Cleaning",
      sofa4: "4 Seater Sofa Cleaning",
      cornerSofa: "Corner Sofa Cleaning",
    };
    return item.item ? labels[item.item] : "Upholstery Cleaning";
  }
  if (item.service === "mattress") {
    const labels = {
      single: "Single Mattress Cleaning",
      double: "Double Mattress Cleaning",
      king: "King Mattress Cleaning",
      superKing: "Super King Mattress Cleaning",
    };
    return item.mattressSize
      ? labels[item.mattressSize]
      : "Mattress Cleaning";
  }
  const labels = {
    small: "Small Rug Cleaning",
    medium: "Medium Rug Cleaning",
    large: "Large Rug Cleaning",
    extraLarge: "Extra Large Rug Cleaning",
  };
  return item.rugSize ? labels[item.rugSize] : "Rug Cleaning";
}

const EMPTY_EXTRAS: QuoteExtras = {
  petOdour: false,
  heavyStains: false,
  priority24: false,
  emergency: false,
};

export function calculateQuoteResult(
  items: QuoteItem[],
  selectedExtras: QuoteExtras = EMPTY_EXTRAS,
): QuoteResult {
  let total = 0;
  let minimumChargeApplied = false;
  const breakdown: QuoteBreakdownItem[] = [];

  items.forEach((item) => {
    let price = 0;

    if (item.service === "carpet" && item.area) {
      const result = calculateCarpetPrice(item.area);
      price = result.price;
      minimumChargeApplied ||= result.minimumChargeApplied;
    } else if (item.service === "steam" && item.area) {
      const result = calculateSteamPrice(item.area);
      price = result.price;
      minimumChargeApplied ||= result.minimumChargeApplied;
    } else if (item.service === "upholstery" && item.item) {
      price = calculateUpholsteryItem(item.item, item.quantity ?? 1);
    } else if (item.service === "mattress" && item.mattressSize) {
      price = calculateMattressItem(item.mattressSize, item.quantity ?? 1);
    } else if (item.service === "rug" && item.rugSize) {
      price = calculateRugItem(item.rugSize, item.quantity ?? 1);
    }

    if (price > 0) {
      total += price;
      breakdown.push({
        service: item.service,
        description: getDescription(item),
        quantity: item.quantity ?? 1,
        price,
      });
    }
  });

  const extras = {
    petOdour: selectedExtras.petOdour ? SERVICE_PRICES.extras.petOdour : 0,
    heavyStains: selectedExtras.heavyStains
      ? SERVICE_PRICES.extras.heavyStains
      : 0,
    priority24: selectedExtras.priority24
      ? SERVICE_PRICES.extras.priority24
      : 0,
    emergency: selectedExtras.emergency
      ? SERVICE_PRICES.extras.emergency
      : 0,
  };
  total += Object.values(extras).reduce((sum, price) => sum + price, 0);

  return {
    total,
    formattedTotal: formatPrice(total),
    breakdown,
    extras,
    minimumChargeApplied,
  };
}

export function calculateQuoteItems(items: QuoteItem[]): EstimateResult {
  const result = calculateQuoteResult(items);
  return { price: result.total, formattedPrice: result.formattedTotal };
}
