import type { BeforeAfterItem } from "./beforeAfter.data";
import styles from "./BeforeAfter.module.css";

interface BeforeAfterCardProps {
  item: BeforeAfterItem;
}

export default function BeforeAfterCard({
  item,
}: BeforeAfterCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.images}>
        <div className={styles.imageWrapper}>
          <span className={styles.label}>Before</span>

          <img
            src={item.beforeImage}
            alt={`${item.title} before cleaning`}
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.imageWrapper}>
          <span className={styles.labelAfter}>After</span>

          <img
            src={item.afterImage}
            alt={`${item.title} after cleaning`}
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles.content}>
        <span className={styles.category}>
          {item.category}
        </span>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <div className={styles.footer}>
          <span>{item.location}</span>

          <span className={styles.result}>
            ✓ Real Customer Result
          </span>
        </div>
      </div>
    </article>
  );
}