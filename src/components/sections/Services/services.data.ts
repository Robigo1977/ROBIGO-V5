import carpetImage from "../../../assets/optimized/carpet-cleaning-v2-mobile-safe.jpg";
import upholsteryImage from "../../../assets/optimized/upholstery-cleaning-v2-mobile-safe.jpg";
import mattressImage from "../../../assets/optimized/mattress-cleaning.webp";
import steamImage from "../../../assets/optimized/servicessteam-cleaning.webp.webp";

export type ServiceId = "carpet" | "upholstery" | "mattress" | "steam";

export interface ServiceItem {
  id: ServiceId;
  title: string;
  description: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export const services: readonly ServiceItem[] = [
  {
    id: "carpet",
    title: "Carpet Cleaning",
    description:
      "Professional carpet cleaning in Winchester using deep extraction methods to remove embedded dirt, stains, allergens and everyday odours. Ideal for homes, families and pet owners.",
    image: carpetImage,
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
    image: upholsteryImage,
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
    image: mattressImage,
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
    image: steamImage,
    features: [
      "Chemical-Free Cleaning",
      "Hard Floor Cleaning",
      "Kitchen & Bathroom",
      "Professional Steam Equipment",
    ],
    popular: true,
  },
] as const;
