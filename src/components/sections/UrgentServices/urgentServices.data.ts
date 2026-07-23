import type { UrgentService } from "./types";
import { site } from "../../../config/site";

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

    href: site.whatsappMessage(
      "Hi ROBIGO! I'd like to book a Priority 24 clean."
    ),

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
      "Emergency Call-Out £50",
    ],

    button: "Request Emergency Help",

    href: site.whatsappMessage(
      "Hi ROBIGO! I need emergency cleaning help."
    ),

    available: true,

    primary: false,
  },
];