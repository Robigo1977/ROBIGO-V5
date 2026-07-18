export interface Review {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Winchester",
    service: "Carpet Cleaning",
    rating: 5,
    text:
      "Absolutely fantastic service. The carpets look brand new and dried much quicker than expected. Friendly, professional and excellent value."
  },
  {
    id: 2,
    name: "James R.",
    location: "Kings Worthy",
    service: "Upholstery Cleaning",
    rating: 5,
    text:
      "Our sofa had years of stains from children and our dog. ROBIGO completely transformed it. Highly recommended."
  },
  {
    id: 3,
    name: "Emily T.",
    location: "Eastleigh",
    service: "Mattress Cleaning",
    rating: 5,
    text:
      "Very punctual, polite and professional. The mattress feels fresh and smells amazing. Great attention to detail."
  },
  {
    id: 4,
    name: "David P.",
    location: "Twyford",
    service: "Steam Cleaning",
    rating: 5,
    text:
      "We wanted chemical-free cleaning because of our young children. The results were outstanding. We'll definitely book again."
  },
  {
    id: 5,
    name: "Rebecca L.",
    location: "Compton",
    service: "Carpet Cleaning",
    rating: 5,
    text:
      "Quick quotation, arrived on time and delivered exactly what was promised. Couldn't be happier."
  },
  {
    id: 6,
    name: "Michael S.",
    location: "Hursley",
    service: "Upholstery Cleaning",
    rating: 5,
    text:
      "Professional from start to finish. Honest pricing, no hidden costs and incredible results."
  }
];