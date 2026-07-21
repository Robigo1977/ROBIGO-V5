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


/* ------------------------------------------------------------------ */
/* Current UI Compatibility                                           */
/* ------------------------------------------------------------------ */

export interface EstimateResult {
  price: number;
  formattedPrice: string;
}


/* ------------------------------------------------------------------ */
/* Quote Item Structure                                               */
/* ------------------------------------------------------------------ */

export interface QuoteItem {
  service: ServiceType;

  area?: number;

  item?:
    | "armchair"
    | "diningChair"
    | "sofa2"
    | "sofa3"
    | "sofa4"
    | "cornerSofa";

  mattressSize?:
    | "single"
    | "double"
    | "king"
    | "superKing";

  rugSize?:
    | "small"
    | "medium"
    | "large"
    | "extraLarge";

  quantity?: number;
}


/* ------------------------------------------------------------------ */
/* Extras                                                             */
/* ------------------------------------------------------------------ */

export interface QuoteExtras {
  petOdour?: boolean;
  heavyStains?: boolean;
  priority24?: boolean;
}


/* ------------------------------------------------------------------ */
/* Quote Request                                                      */
/* ------------------------------------------------------------------ */

export interface QuoteRequest {
  items: QuoteItem[];

  extras?: QuoteExtras;
}


/* ------------------------------------------------------------------ */
/* Detailed Breakdown                                                 */
/* ------------------------------------------------------------------ */

export interface QuoteBreakdownItem {

  service: ServiceType;

  description: string;

  quantity: number;

  price: number;

}


/* ------------------------------------------------------------------ */
/* Premium Quote Result                                               */
/* ------------------------------------------------------------------ */

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