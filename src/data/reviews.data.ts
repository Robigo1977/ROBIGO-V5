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

export const reviews: Review[] = [
  {
    id: "sample-1",
    name: "Sample Customer",
    location: "Winchester",
    service: "Carpet Cleaning",
    rating: 5,
    date: "Replace with real review",
    verified: false,
    featured: true,
    review:
      "This placeholder review demonstrates how customer testimonials will appear. Replace this text with a genuine customer review once available.",
  },
  {
    id: "sample-2",
    name: "Sample Customer",
    location: "Kings Worthy",
    service: "Upholstery Cleaning",
    rating: 5,
    date: "Replace with real review",
    verified: false,
    review:
      "A second placeholder review used during development. Replace it with a real testimonial from one of your customers.",
  },
  {
    id: "sample-3",
    name: "Sample Customer",
    location: "Eastleigh",
    service: "Mattress Cleaning",
    rating: 5,
    date: "Replace with real review",
    verified: false,
    review:
      "This card exists to validate the layout and spacing. It should be replaced with authentic customer feedback before publishing.",
  },
];