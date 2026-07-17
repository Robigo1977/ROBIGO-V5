export interface Review {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  verified: boolean;
  review: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Winchester",
    service: "Carpet Cleaning",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    review:
      "Outstanding service from start to finish. Our carpets look brand new and dried much faster than expected. Robert was friendly, professional and took great care throughout the job."
  },
  {
    id: 2,
    name: "James T.",
    location: "Kings Worthy",
    service: "Upholstery Cleaning",
    rating: 5,
    date: "1 month ago",
    verified: true,
    review:
      "Our sofa had years of stains from children and our dog. I honestly didn't think it could be saved, but the results were incredible. Highly recommended."
  },
  {
    id: 3,
    name: "Emma W.",
    location: "Eastleigh",
    service: "Mattress Cleaning",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    review:
      "Very punctual, polite and professional. The mattress feels fresh again and it's reassuring knowing it's properly sanitised."
  },
  {
    id: 4,
    name: "David R.",
    location: "Twyford",
    service: "Steam Cleaning",
    rating: 5,
    date: "5 days ago",
    verified: true,
    review:
      "We wanted a chemical-free clean because of our young children. The steam cleaning was fantastic and the floors looked amazing afterwards."
  },
  {
    id: 5,
    name: "Helen B.",
    location: "Compton",
    service: "Carpet Cleaning",
    rating: 5,
    date: "3 months ago",
    verified: true,
    review:
      "Excellent communication, fair pricing and superb results. We'll definitely be booking again."
  },
  {
    id: 6,
    name: "Michael P.",
    location: "Shawford",
    service: "Upholstery Cleaning",
    rating: 5,
    date: "Last week",
    verified: true,
    review:
      "Professional equipment, attention to detail and fantastic customer service. Couldn't ask for more."
  }
];