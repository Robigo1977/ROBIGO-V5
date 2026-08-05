import type { BeforeAfterItem } from "./beforeAfter.data";
import BeforeAfterSlider from "./BeforeAfterSlider";
import styles from "./BeforeAfter.module.css";

interface BeforeAfterCardProps {
  item: BeforeAfterItem;
}

export default function BeforeAfterCard({
  item,
}: BeforeAfterCardProps) {
  return (
    <article
      className={styles.card}
      aria-labelledby={`before-after-${item.id}`}
    >
      {item.featured ? (
        <div
          role="img"
          aria-label="ROBIGO carpet cleaning before and after result"
          style={{
            width: "100%",
            aspectRatio: "3 / 2",
            backgroundImage: "url(/images/preview/approved-sprite.jpg)",
            backgroundSize: "300% 200%",
            backgroundPosition: "50% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      ) : (
        <BeforeAfterSlider
          beforeImage={item.beforeImage}
          afterImage={item.afterImage}
          title={item.title}
        />
      )}

      <div className={styles.content}>
        <span className={styles.category}>
          {item.category}
        </span>

        <h3 id={`before-after-${item.id}`}>
          {item.title}
        </h3>

        <p>{item.description}</p>

        <div className={styles.footer}>
          <span>{item.location}</span>

          <span
            className={styles.result}
            aria-label="Verified cleaning result"
          >
            ✓ Real Customer Result
          </span>
        </div>
      </div>
    </article>
  );
}
