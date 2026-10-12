import carpetImage from "../../../assets/optimized/approved/carpet-clean-web-2026.jpg";
import rugImage from "../../../assets/generated/rug-cleaning-image";
import upholsteryImage from "../../../assets/optimized/approved/upholstery-cleaning-2026.jpg";
import mattressImage from "../../../assets/optimized/mattress-cleaning.webp";
import steamImage from "../../../assets/optimized/approved/steam-cleaning-2026.jpg";
import ovenImage from "../../../assets/optimized/approved/oven-clean-web-2026.jpg";

export type ServiceId = "upholstery" | "carpet" | "rug" | "mattress" | "steam" | "oven";

export interface ServiceItem {
  id: ServiceId;
  title: string;
  description: string;
  image: string;
  href: string;
  halloween: string;
  popular?: boolean;
}

export const services: readonly ServiceItem[] = [
  {
    id: "upholstery",
    title: "Upholstery Cleaning",
    description: "Sofas, armchairs, dining chairs and other fabric furniture.",
    image: upholsteryImage,
    href: "/upholstery-cleaning-winchester",
    halloween: "👻",
    popular: true,
  },
  {
    id: "carpet",
    title: "Carpet Cleaning",
    description: "Deep carpet cleaning for cleaner, fresher rooms.",
    image: carpetImage,
    href: "/carpet-cleaning-winchester",
    halloween: "🎃",
  },
  {
    id: "rug",
    title: "Rug Cleaning",
    description: "Careful cleaning for everyday household rugs.",
    image: rugImage,
    href: "/rug-cleaning-winchester",
    halloween: "🍂",
  },
  {
    id: "mattress",
    title: "Mattress Cleaning",
    description: "Deep cleaning to reduce dirt, allergens and odours.",
    image: mattressImage,
    href: "/mattress-cleaning-winchester",
    halloween: "💀",
  },
  {
    id: "oven",
    title: "Oven Cleaning",
    description: "Professional cleaning for single and double ovens.",
    image: ovenImage,
    href: "/oven-cleaning-winchester",
    halloween: "🎃",
  },
  {
    id: "steam",
    title: "Hard-Floor Steam Cleaning",
    description: "Chemical-free dry steam cleaning for suitable hard floors.",
    image: steamImage,
    href: "/steam-cleaning-winchester",
    halloween: "🦇",
  },
] as const;
