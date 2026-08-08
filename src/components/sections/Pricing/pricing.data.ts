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
      {
        label: "30–49 m²",
        price: "£2.50 / m²",
      },
      {
        label: "50–99 m²",
        price: "£2.00 / m²",
      },
      {
        label: "100+ m²",
        price: "£1.80 / m²",
      },
      {
        label: "Minimum Charge",
        price: "£60",
      },
      {
        label: "Single bedroom (approx. 8 m²)",
        price: "about £20*",
      },
      {
        label: "Double bedroom (approx. 12 m²)",
        price: "about £30*",
      },
      {
        label: "Average living room (approx. 20 m²)",
        price: "about £50*",
      },
      {
        label: "Stairs (per step)",
        price: "£3.00",
      },
    ],
    note:
      "*Room examples show the area-based price at £2.50/m². The £60 minimum booking still applies, so combining rooms usually offers the best value.",
  },

  {
    id: "upholstery",
    title: "Upholstery Cleaning",
    icon: "🛋",
    items: [
      {
        label: "Dining Chair (per chair)",
        price: "£10",
      },
      {
        label: "Armchair",
        price: "£30",
      },
      {
        label: "2-Seater Sofa",
        price: "£45",
      },
      {
        label: "3-Seater Sofa",
        price: "£55",
      },
      {
        label: "4-Seater Sofa",
        price: "£65",
      },
      {
        label: "Corner Sofa",
        price: "£75",
      },
    ],
  },

  {
    id: "mattress",
    title: "Mattress Cleaning",
    icon: "🛏",
    items: [
      {
        label: "Single",
        price: "£30",
      },
      {
        label: "Double",
        price: "£40",
      },
      {
        label: "King",
        price: "£50",
      },
      {
        label: "Super King",
        price: "£60",
      },
    ],
  },

  {
    id: "steam",
    title: "Chemical-Free Steam Cleaning",
    icon: "✨",
    items: [
      {
        label: "Minimum Charge",
        price: "£50",
      },
      {
        label: "Any Area",
        price: "£2.50 / m²",
      },
      {
        label: "Hard Floors",
        price: "Included",
      },
      {
        label: "Bathrooms",
        price: "Included",
      },
      {
        label: "Kitchens",
        price: "Included",
      },
      {
        label: "Grout & Tiles",
        price: "Included",
      },
    ],
  },
];
