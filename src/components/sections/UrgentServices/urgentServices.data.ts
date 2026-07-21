import type { UrgentService } from "./types";

export const urgentServices: UrgentService[] = [
  {
    id: 1,

    title: "Priority 24",

    badge: "AVAILABLE NOW",

    description:
      "Need your carpets or upholstery cleaned within the next 24 hours? We'll always do our best to fit you in and provide a fast professional service.",

    features: [
      "Priority booking",
      "24-hour response",
      "WhatsApp confirmation",
      "£30 Priority Upgrade",
    ],

    button: "Book Priority 24",

    href:
      "https://wa.me/447446695979?text=Hi%20ROBIGO!%20I'd%20like%20to%20book%20a%20Priority%2024%20clean.",

    available: true,

    primary: true,
  },

  {
    id: 2,

    title: "Emergency Cleaning",

    badge: "AVAILABLE NOW",

    description:
      "Unexpected spills and accidents happen. Our emergency stain response service provides fast help when you need it most. Send us a photo on WhatsApp and we'll advise on the quickest solution.",

    features: [
      "Coffee spills",
      "Wine stains",
      "Pet accidents",
      "Rapid response",
    ],

    button: "Request Emergency Help",

    href:
      "https://wa.me/447446695979?text=Hi%20ROBIGO!%20I%20need%20emergency%20cleaning%20help.",

    available: true,

    primary: false,
  },
];