import {
  ShieldCheck,
  Wrench,
  Clock3,
  Sparkles,
} from "lucide-react";

import { heroData } from "./hero.data";
import styles from "./Hero.module.css";

const trustItems = [
  {
    label: heroData.trustItems[0],
    Icon: ShieldCheck,
  },
  {
    label: heroData.trustItems[1],
    Icon: Wrench,
  },
  {
    label: heroData.trustItems[2],
    Icon: Clock3,
  },
  {
    label: heroData.trustItems[3],
    Icon: Sparkles,
  },
];

export default function HeroTrust() {
  return (
    <ul className={styles.trustList}>
      {trustItems.map(({ label, Icon }) => (
        <li key={label} className={styles.trustItem}>
          <Icon size={18} strokeWidth={2} />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}