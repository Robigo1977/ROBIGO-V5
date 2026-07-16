import carpetImage from "../../../assets/images/services/carpet-cleaning.webp";
import upholsteryImage from "../../../assets/images/services/upholstery-cleaning.png";
import mattressImage from "../../../assets/images/services/mattress-cleaning.webp";
import steamImage from "../../../assets/images/services/steam-cleaning.webp";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Carpet Cleaning",
    description:
      "Deep extraction cleaning that removes embedded dirt, stains and allergens while helping carpets look and feel fresh again.",
    image: carpetImage,
    features: [
      "Deep Extraction",
      "Fast Drying",
      "Pet Friendly",
      "Free Quotations",
    ],
    cta: "Get Carpet Quote",
  },
  {
    id: 2,
    title: "Upholstery Cleaning",
    description:
      "Professional cleaning for sofas, armchairs and fabric furniture to restore freshness and extend their life.",
    image: upholsteryImage,
    features: [
      "All Fabrics",
      "Sofas & Chairs",
      "Fresh Finish",
      "Safe Products",
    ],
    cta: "Get Upholstery Quote",
  },
  {
    id: 3,
    title: "Mattress Cleaning",
    description:
      "Reduce dust mites, allergens and unwanted odours for a cleaner and healthier sleeping environment.",
    image: mattressImage,
    features: [
      "Dust Mite Removal",
      "Odour Treatment",
      "Allergy Friendly",
      "Deep Sanitisation",
    ],
    cta: "Get Mattress Quote",
  },
  {
    id: 4,
    title: "Chemical-Free Steam Cleaning",
    description:
      "Powerful dry steam cleaning for hard floors, kitchens and bathrooms using high-temperature steam with little or no chemicals.",
    image: steamImage,
    features: [
      "Chemical Free",
      "Hard Floors",
      "Bathrooms",
      "Kitchens",
    ],
    cta: "Book Steam Cleaning",
    popular: true,
  },
];