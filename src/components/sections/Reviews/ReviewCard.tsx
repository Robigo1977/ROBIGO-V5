import { MapPin, Star } from "lucide-react";

import type { Review } from "../../../data/reviews.data";

import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({
  review,
}: ReviewCardProps) {
  const headingId = `review-${review.id}`;

  return (
    <article
      className={`${styles.card} ${
        review.featured ? styles.featured : ""
      }`}
      aria-labelledby={headingId}
    >
      <header className={styles.header}>
        <div
          className={styles.stars}
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="currentColor"
              aria-hidden="true"
            />
          ))}
        </div>
      </header>

      <p className={styles.review}>
        “{review.review}”
      </p>

      <footer className={styles.footer}>
        <div>
          <h3 id={headingId}>{review.name}</h3>

          <span className={styles.location}>
            <MapPin
              size={14}
              aria-hidden="true"
            />
            {review.location}
          </span>
        </div>

        <span className={styles.service}>
          {review.service}
        </span>
      </footer>
    </article>
  );
}