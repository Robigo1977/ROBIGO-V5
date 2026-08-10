import { ShieldCheck, Star } from "lucide-react";

import Button from "../../ui/Button";
import Section from "../../ui/Section";

import { site } from "../../../config/site";

import { reviews } from "./reviews.data";
import ReviewCard from "./ReviewCard";

import styles from "./Reviews.module.css";

export default function Reviews() {
  const verifiedReviews = reviews.filter((review) => review.verified);
  const reviewCount = verifiedReviews.length;
  const averageRating =
    reviewCount > 0
      ? verifiedReviews.reduce((total, review) => total + review.rating, 0) /
        reviewCount
      : 0;

  return (
    <Section
      id="reviews"
      background="light"
      className={styles.section}
    >
      <div className={styles.shell}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Customer reviews</span>

          <h2>Real feedback. Genuine local service.</h2>

          <p>
            We only publish feedback from genuine ROBIGO customers. Every
            review shown here is checked before it appears on the website.
          </p>
        </div>

        {reviewCount > 0 ? (
          <>
            <div className={styles.summary}>
              <span className={styles.score}>{averageRating.toFixed(1)}</span>

              <div>
                <div
                  className={styles.stars}
                  aria-label={`${averageRating.toFixed(1)} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={22}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p>
                  Based on {reviewCount} verified customer review
                  {reviewCount === 1 ? "" : "s"}
                </p>
              </div>
            </div>

            <div className={styles.grid}>
              {verifiedReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                />
              ))}
            </div>
          </>
        ) : (
          <div className={styles.emptyState}>
            <span className={styles.icon} aria-hidden="true">
              <ShieldCheck size={28} />
            </span>

            <div>
              <h3>Verified reviews are coming soon</h3>
              <p>
                We are preparing this section with genuine customer feedback.
                No placeholder names or invented testimonials are published.
              </p>
            </div>
          </div>
        )}

        <div className={styles.cta}>
          <div>
            <span className={styles.ctaLabel}>Need help with your home?</span>
            <h3>See the ROBIGO standard for yourself.</h3>
            <p>
              Send a few photos on WhatsApp for a free, no-obligation
              quotation and honest pricing.
            </p>
          </div>

          <Button
            href={site.whatsappMessage()}
            size="lg"
          >
            Get My Free Quote
          </Button>
        </div>
      </div>
    </Section>
  );
}
