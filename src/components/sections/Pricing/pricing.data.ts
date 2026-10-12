export interface PricingCategory {
  id: string;
  title: string;
  icon: string;
  note?: string;
  items: {
    label: string;
    price: string;
  }[];
}

export const pricing: PricingCategory[] = [
  {
    id: "rooms",
    title: "Carpet Cleaning",
    icon: "🧼",
    items: [
      { label: "Single Room", price: "£20" },
      { label: "Double Room", price: "£30" },
      { label: "Small Living Room", price: "£20" },
      { label: "Large Living Room", price: "£40" },
    ],
    note: "Simple room prices with no call-out charge.",
  },
  {
    id: "upholstery",
    title: "Sofa Cleaning",
    icon: "🛋️",
    items: [
      { label: "2-Seater Sofa", price: "£45" },
      { label: "3-Seater Sofa", price: "£55" },
    ],
    note: "For other sofa sizes, send a photo on WhatsApp for a fast quote.",
  },
  {
    id: "rugs",
    title: "Rug Cleaning",
    icon: "🧶",
    items: [
      { label: "Small Rug", price: "£15" },
      { label: "Large Rug", price: "£30" },
    ],
  },
  {
    id: "mattress",
    title: "Mattress Cleaning",
    icon: "🛏️",
    items: [
      { label: "Single Mattress", price: "£30" },
      { label: "Double Mattress", price: "£40" },
    ],
  },
  {
    id: "oven",
    title: "Oven Cleaning",
    icon: "🔥",
    items: [
      { label: "Single Oven Cleaning", price: "£60" },
      { label: "Double Oven Cleaning", price: "£80" },
    ],
  },
];
