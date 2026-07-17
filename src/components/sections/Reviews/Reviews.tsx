import styles from "./Reviews.module.css";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviews.data";
import Button from "../../ui/Button";

export default function Reviews() {
  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.badge}>
            ★★★★★ Trusted Across Winchester
          </span>

          <h2>Loved by Homeowners Across Winchester</h2>

          <p>
            We take pride in delivering outstanding results and exceptional
            customer service. Here are just a few of the experiences our
            customers have shared.
          </p>
        </div>

        <div className={styles.stats}>
          <div className={styles.score}>
            <span className={styles.number}>5.0</span>
            <span className={styles.stars}>★★★★★</span>
          </div>

          <div className={styles.info}>
            Based on verified customer feedback from carpet, upholstery,
            mattress and steam cleaning services.
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>

        <div className={styles.cta}>
          <h3>Ready to become our next happy customer?</h3>

          <p>
            Request your free quote today and experience the ROBIGO
            difference.
          </p>

          <Button href="#contact">
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}