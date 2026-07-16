import styles from "./Reviews.module.css";
import { reviews } from "./reviews.data";
import { ReviewCard } from "./ReviewCard";

export function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.badge}>CUSTOMER REVIEWS</span>

        <h2 className={styles.title}>
          Trusted by Homeowners Across Winchester
        </h2>

        <p className={styles.subtitle}>
          Every clean is completed with the same care, attention to detail and
          commitment to exceptional results.
        </p>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}