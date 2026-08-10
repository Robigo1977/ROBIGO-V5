export interface Review {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  approved?: boolean;
  featured?: boolean;
  created_at?: string;
}

export interface ReviewSubmission {
  name: string;
  email: string;
  location: string;
  service: string;
  rating: number;
  review: string;
  approved: false;
  featured: false;
}
