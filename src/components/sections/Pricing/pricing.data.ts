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
    id: "carpet",
    title: "Carpet Cleaning",
    icon: "🧼",
    items: [
      { label: "Single Room", price: "£20" },
      { label: "Double Room", price: "£30" },
      { label: "Small Living Room", price: "£20" },
      { label: "Large Living Room", price: "£40" },
      { label: "Stairs", price: "£2 / step" },
    ],
    note: "Minimum total booking: £60. No call-out charge.",
  },
  {
    id: "rug",
    title: "Rug Cleaning",
    icon: "🧶",
    items: [
      { label: "Small Rug (up to 1.5 m × 1 m)", price: "£15" },
      { label: "Medium Rug (up to 2 m × 1.5 m)", price: "£25" },
      { label: "Large Rug (up to 3 m × 2 m)", price: "£30" },
      { label: "Extra Large Rug (over 3 m × 2 m)", price: "£40" },
    ],
    note: "Persian and specialist rugs are quoted individually.",
  },
  {
    id: "upholstery",
    title: "Sofa & Chair Cleaning",
    icon: "🛋️",
    items: [
      { label: "Dining Chair", price: "£10 / each" },
      { label: "Armchair", price: "£20 / each" },
      { label: "2-Seater Sofa", price: "£40" },
      { label: "3-Seater Sofa", price: "£50" },
      { label: "4-Seater Sofa", price: "£60" },
      { label: "Corner Sofa", price: "£70" },
    ],
  },
  {
    id: "mattress",
    title: "Mattress Cleaning",
    icon: "🛏️",
    items: [
      { label: "Single Mattress", price: "£20" },
      { label: "Double Mattress", price: "£30" },
      { label: "King Mattress", price: "£40" },
      { label: "Super King Mattress", price: "£50" },
    ],
  },
  {
    id: "steam",
    title: "Hard Floor / Chemical-Free Steam Cleaning",
    icon: "✨",
    items: [
      { label: "Small Living Room", price: "£20" },
      { label: "Large Living Room", price: "£40" },
      { label: "Single Room", price: "£20" },
      { label: "Double Room", price: "£30" },
    ],
    note: "Professional high-temperature dry steam cleaning for hard floors.",
  },
  {
    id: "oven",
    title: "Oven Cleaning",
    icon: "🔥",
    items: [
      { label: "Single Oven", price: "£60" },
      { label: "Double Oven", price: "£80" },
      { label: "Range Oven", price: "£90" },
      { label: "Hob", price: "£20" },
      { label: "Microwave", price: "£20" },
    ],
  },
  {
    id: "extras",
    title: "Optional Extras",
    icon: "✨",
    items: [
      { label: "Pet Odour Treatment", price: "£20" },
      { label: "Heavy Stain Treatment", price: "£15" },
      { label: "Priority 24h", price: "+£30" },
      { label: "Emergency Spot Cleaning", price: "from £50" },
    ],
  },
];
