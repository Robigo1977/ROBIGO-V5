export type ServiceId = "carpet" | "upholstery" | "mattress" | "steam";

export interface ServiceItem {
  id: ServiceId;
  title: string;
  description: string;
  image: string;
  imagePosition: string;
  features: string[];
  popular?: boolean;
}

const previewSprite = "/images/preview/approved-sprite.jpg";

export const services: readonly ServiceItem[] = [
  {
    id: "carpet",
    title: "Carpet Cleaning",
    description:
      "Professional carpet cleaning in Winchester using deep extraction methods to remove embedded dirt, stains, allergens and everyday odours. Ideal for homes, families and pet owners.",
    image: previewSprite,
    imagePosition: "100% 100%",
    features: [
      "Deep Dirt & Stain Removal",
      "Pet & Family Friendly",
      "Professional Equipment",
      "Clear Upfront Pricing",
    ],
  },
  {
    id: "upholstery",
    title: "Upholstery Cleaning",
    description:
      "Professional upholstery cleaning for sofas, armchairs and fabric furniture in Winchester. Restore freshness, comfort and appearance with careful professional treatment.",
    image: previewSprite,
    imagePosition: "0% 0%",
    features: [
      "Sofas & Chairs",
      "Fabric Safe Cleaning",
      "Fresh Finish",
      "Family Friendly",
    ],
  },
  {
    id: "mattress",
    title: "Mattress Cleaning",
    description:
      "Deep mattress cleaning designed to reduce dust, allergens and unwanted odours, helping create a fresher and healthier sleeping environment.",
    image: previewSprite,
    imagePosition: "50% 0%",
    features: [
      "Dust & Allergen Reduction",
      "Odour Removal",
      "Deep Cleaning",
      "Fresh Sleeping Environment",
    ],
  },
  {
    id: "steam",
    title: "Chemical-Free Steam Cleaning",
    description:
      "High-temperature dry steam cleaning for kitchens, bathrooms and hard floors using professional equipment with little or no chemicals for powerful cleaning results.",
    image: previewSprite,
    imagePosition: "100% 0%",
    features: [
      "Chemical-Free Cleaning",
      "Hard Floor Cleaning",
      "Kitchen & Bathroom",
      "Professional Steam Equipment",
    ],
    popular: true,
  },
] as const;
