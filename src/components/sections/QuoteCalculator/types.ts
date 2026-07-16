// src/components/sections/QuoteCalculator/types.ts

export type ServiceType =
  | "carpet"
  | "upholstery"
  | "mattress"
  | "rug"
  | "steam";

export interface ServiceCard {
  id: ServiceType;
  title: string;
  description: string;
}

/**
 * Legacy estimate type.
 * Kept for compatibility with the current UI.
 */
export interface EstimateResult {
  price: number;
  formattedPrice: string;
}

/**
 * Legacy type.
 * Can be removed once the UI fully uses QuoteResult.
 */
export interface QuoteEstimate {
  service: ServiceType;
  price: number;
}

/* ------------------------------------------------------------------ */
/* Universal Quote Engine                                              */
/* ------------------------------------------------------------------ */

export interface QuoteItem {
  service: ServiceType;

  /**
   * Carpet / Steam Cleaning
   */
  area?: number;

  /**
   * Upholstery
   */
  item?:
    | "armchair"
    | "diningChair"
    | "sofa2"
    | "sofa3"
    | "sofa4"
    | "cornerSofa";

  /**
   * Mattress
   */
  mattressSize?:
    | "single"
    | "double"
    | "king"
    | "superKing";

  /**
   * Rug
   */
  rugSize?:
    | "small"
    | "medium"
    | "large"
    | "extraLarge";

  quantity?: number;
}

export interface QuoteExtras {
  petOdour?: boolean;
  heavyStains?: boolean;
  priority24?: boolean;
}

export interface QuoteRequest {
  items: QuoteItem[];
  extras?: QuoteExtras;
}

export interface QuoteBreakdownItem {
  service: ServiceType;
  description: string;
  quantity: number;
  price: number;
}

export interface QuoteResult {
  total: number;
  formattedTotal: string;

  breakdown: QuoteBreakdownItem[];

  extras: {
    petOdour: number;
    heavyStains: number;
    priority24: number;
  };

  minimumChargeApplied: boolean;
}