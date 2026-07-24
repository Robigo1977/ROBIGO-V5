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

export interface EstimateResult {
  price: number;
  formattedPrice: string;
}

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
  mattressSize?: "single" | "double" | "king" | "superKing";
  rugSize?: "small" | "medium" | "large" | "extraLarge";
  quantity?: number;
}

export interface QuoteExtras {
  petOdour: boolean;
  heavyStains: boolean;
  priority24: boolean;
  emergency: boolean;
}

export interface QuoteRequest {
  items: QuoteItem[];
  extras?: Partial<QuoteExtras>;
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
    emergency: number;
  };
  minimumChargeApplied: boolean;
}
