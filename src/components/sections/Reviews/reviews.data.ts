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
    date: "Placeholder",
    verified: false,
    featured: true,
    review:
      "Outstanding results from start to finish. The carpets looked noticeably fresher, communication was excellent and the whole process was professional. Replace this placeholder with a genuine customer review before launch.",
  },
  {
    id: "sample-2",
    name: "Sample Customer",
    location: "Kings Worthy",
    service: "Upholstery Cleaning",
    rating: 5,
    date: "Placeholder",
    verified: false,
    review:
      "Our sofa looked tired after years of daily use, but the cleaning made a remarkable difference. Replace this placeholder with an authentic customer testimonial before publishing the website.",
  },
  {
    id: "sample-3",
    name: "Sample Customer",
    location: "Eastleigh",
    service: "Mattress Cleaning",
    rating: 5,
    date: "Placeholder",
    verified: false,
    review:
      "Friendly service, punctual arrival and excellent attention to detail. This is demonstration content and should be replaced with a real customer review before the website goes live.",
  },
];