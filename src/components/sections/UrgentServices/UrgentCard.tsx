import { CheckCircle2 } from "lucide-react";

import Button from "../../ui/Button/Button";

import type { UrgentItem } from "./types";

import styles from "./UrgentServices.module.css";

interface UrgentCardProps {
  item: UrgentItem;
}

export default function UrgentCard({ item }: UrgentCardProps) {
  const Icon = item.icon;

  return (
    <article
      className={`${styles.card} ${
        item.accent === "priority"
          ? styles.priority
          : styles.emergency
      }`}
    >
      <div className={styles.icon}>
        <Icon size={34} />
      </div>

      <span className={styles.price}>
        {item.price}
      </span>

      <h3>{item.title}</h3>

      <h4>{item.subtitle}</h4>

      <p className={styles.description}>
        {item.description}
      </p>

      <ul className={styles.list}>
        {item.highlights.map((highlight) => (
          <li key={highlight}>
            <CheckCircle2 size={18} />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <Button
        href={item.buttonLink}
        variant="primary"
        size="md"
      >
        {item.buttonText}
      </Button>
    </article>
  );
}