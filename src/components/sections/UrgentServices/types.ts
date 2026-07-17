import type { LucideIcon } from "lucide-react";

export interface UrgentItem {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  buttonText: string;
  buttonLink: string;
  accent: "priority" | "emergency";
}