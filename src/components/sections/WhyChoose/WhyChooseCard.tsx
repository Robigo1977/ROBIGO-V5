import type { WhyChooseItem } from "./types";
import styles from "./WhyChoose.module.css";

interface WhyChooseCardProps {
  item: WhyChooseItem;
}

export default function WhyChooseCard({
  item,
}: WhyChooseCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>{item.icon}</div>

      <h3>{item.title}</h3>

      <p>{item.description}</p>
    </article>
  );
}