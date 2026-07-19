import type { WhyChooseItem } from "./types";
import styles from "./WhyChoose.module.css";

interface WhyChooseCardProps {
  item: WhyChooseItem;
}

export default function WhyChooseCard({
  item,
}: WhyChooseCardProps) {
  const headingId = `why-choose-${item.id}`;

  return (
    <article
      className={styles.card}
      role="listitem"
      aria-labelledby={headingId}
    >
      <div
        className={styles.icon}
        aria-hidden="true"
      >
        {item.icon}
      </div>

      <h3 id={headingId}>{item.title}</h3>

      <p>{item.description}</p>
    </article>
  );
}