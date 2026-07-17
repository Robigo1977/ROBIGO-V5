import { Clock3, TriangleAlert } from "lucide-react";

import type { UrgentItem } from "./types";

export const urgentServices: UrgentItem[] = [
  {
    id: 1,
    title: "Priority Booking",
    subtitle: "Need us as soon as possible?",
    price: "+£30",
    description:
      "Jump to the front of our schedule whenever availability allows. Ideal if you're expecting guests, preparing for an event, or simply need your carpets cleaned quickly.",
    icon: Clock3,
    accent: "priority",
    highlights: [
      "Priority scheduling",
      "Usually within 24 hours",
      "Perfect before guests arrive",
      "Fast WhatsApp confirmation",
    ],
    buttonText: "Book Priority",
    buttonLink: "https://wa.me/447777449931",
  },
  {
    id: 2,
    title: "Emergency Spot Cleaning",
    subtitle: "Accidents happen.",
    price: "From £50",
    description:
      "Whether it's red wine, coffee, pet accidents or unexpected spills, we'll do our best to remove the stain before it becomes permanent.",
    icon: TriangleAlert,
    accent: "emergency",
    highlights: [
      "Pet accidents",
      "Coffee & tea spills",
      "Red wine stains",
      "Emergency call-out",
    ],
    buttonText: "Emergency WhatsApp",
    buttonLink: "https://wa.me/447777449931",
  },
];