import carpetImage from "../../../assets/optimized/approved/carpet-clean-web-2026.jpg";
import rugImage from "../../../assets/generated/rug-cleaning-image";
import upholsteryImage from "../../../assets/optimized/approved/upholstery-cleaning-2026.jpg";
import mattressImage from "../../../assets/optimized/mattress-cleaning.webp";
import steamImage from "../../../assets/optimized/approved/steam-cleaning-2026.jpg";

export type ServiceId = "carpet" | "rug" | "upholstery" | "mattress" | "steam";

export interface ServiceItem {
  id: ServiceId;
  title: string;
  description: string;
  image: string;
  href: string;
  features: string[];
  popular?: boolean;
}

export const services: readonly ServiceItem[] = [
  {
    id: "upholstery",
    title: "Upholstery Cleaning",
    description:
      "Professional upholstery cleaning for sofas, armchairs and fabric furniture in Winchester. Restore freshness, comfort and appearance with careful professional treatment.",
    image: upholsteryImage,
    href: "/upholstery-cleaning-winchester",
    features: [
      "Sofas & Chairs",
      "Fabric-Safe Cleaning",
      "Fresh Finish",
      "Professional Extraction Equipment",
    ],
    popular: true,
  },
  {
    id: "carpet",
    title: "Carpet Cleaning",
    description:
      "Professional carpet cleaning in Winchester using deep extraction methods to remove embedded dirt, stains, allergens and everyday odours. Ideal for homes, families and pet owners.",
    image: carpetImage,
    href: "/carpet-cleaning-winchester",
    features: [
      "Deep Dirt & Stain Removal",
      "Pet & Family Friendly",
      "Professional Equipment",
      "Clear Upfront Pricing",
    ],
  },
  {
    id: "rug",
    title: "Rug Cleaning",
    description:
      "Professional rug cleaning for everyday household rugs across Hampshire, using careful deep extraction to lift dirt, refresh fibres and improve appearance.",
    image: rugImage,
    href: "/rug-cleaning-winchester",
    features: [
      "Small, Medium, Large & XL Rugs",
      "Deep Dirt Removal",
      "Professional Extraction Cleaning",
      "Persian Rugs: Extra Charge Applies",
    ],
  },
  {
    id: "mattress",
    title: "Mattress Cleaning",
    description:
      "Deep mattress cleaning designed to reduce dust, allergens and unwanted odours, helping create a fresher and healthier sleeping environment.",
    image: mattressImage,
    href: "/mattress-cleaning-winchester",
    features: [
      "Dust & Allergen Reduction",
      "Odour Removal",
      "Deep Cleaning",
      "Fresh Sleeping Environment",
    ],
  },
  {
    id: "steam",
    title: "Hard-Floor Steam Cleaning",
    description:
      "High-temperature dry steam cleaning for suitable hard floors in Winchester using professional Kärcher equipment without adding chemical cleaning product to the floor surface.",
    image: steamImage,
    href: "/steam-cleaning-winchester",
    features: [
      "Chemical-Free Hard-Floor Method",
      "Surface Checked First",
      "High-Temperature Dry Steam",
      "Professional Kärcher Equipment",
    ],
  },
] as const;
