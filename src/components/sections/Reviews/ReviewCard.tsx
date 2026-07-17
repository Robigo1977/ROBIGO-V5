import styles from "./ReviewCard.module.css";
import { CheckCircle, Star } from "lucide-react";
import type { Review } from "./reviews.data";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {review.name.charAt(0)}
        </div>

        <div className={styles.customer}>
          <h3>{review.name}</h3>
          <p>{review.location}</p>
        </div>
      </div>

      <div className={styles.rating}>
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={styles.star}
            fill="currentColor"
          />
        ))}
      </div>

      <p className={styles.review}>
        "{review.review}"
      </p>

      <div className={styles.footer}>
        <span className={styles.service}>
          {review.service}
        </span>

        {review.verified && (
          <span className={styles.verified}>
            <CheckCircle size={15} />
            Verified Customer
          </span>
        )}
      </div>

      <span className={styles.date}>
        {review.date}
      </span>
    </article>
  );
}