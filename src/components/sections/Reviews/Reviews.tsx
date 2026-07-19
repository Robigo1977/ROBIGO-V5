import { Star } from "lucide-react";

import Button from "../../ui/Button";
import Section from "../../ui/Section";

import { site } from "../../../config/site";

import { reviews } from "./reviews.data";
import ReviewCard from "./ReviewCard";

import styles from "./Reviews.module.css";

export default function Reviews() {
  const averageRating = 5.0;
  const reviewCount = reviews.length;

  return (
    <Section
      id="reviews"
      background="light"
      className={styles.section}
    >
      <div className={styles.header}>
        <span className={styles.badge}>
          Trusted by Winchester Homeowners
        </span>

        <h2>
          Trusted by homeowners who expect exceptional results.
        </h2>

        <p>
          Every home is treated with the same care and attention we
          would expect in our own. Professional equipment, honest
          pricing and outstanding customer service come as standard.
        </p>
      </div>

      <div className={styles.summary}>
        <div className={styles.rating}>
          <span className={styles.score}>
            {averageRating.toFixed(1)}
          </span>

          <div>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  fill="currentColor"
                />
              ))}
            </div>

            <p>
              Based on {reviewCount} sample review
              {reviewCount !== 1 ? "s" : ""}
            </p>
          </div>
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
        <h3>Ready to experience the same level of care?</h3>

        <p>
          Send us a few photos on WhatsApp and we'll provide a fast,
          no-obligation quotation.
        </p>

        <Button
          href={site.whatsappMessage()}
          size="lg"
        >
          Get My Free Quote
        </Button>
      </div>
    </Section>
  );
}