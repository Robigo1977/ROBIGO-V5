export interface Review {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: 5;
  date: string;
  verified: boolean;
  featured?: boolean;
  review: string;
}

// Add genuine customer feedback here only after it has been verified.
export const reviews: Review[] = [];
