import { useEffect, useState } from "react";
import { MessageSquareText, Star } from "lucide-react";

import Section from "../../ui/Section";

import { supabase } from "../../../lib/supabase";

import type { Review } from "./reviews.data";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

import styles from "./Reviews.module.css";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadReviews() {
      const { data } = await supabase
        .from("reviews")
        .select("id,name,location,service,rating,review,featured,created_at")
        .eq("approved", true)
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (active) {
        setReviews((data ?? []) as Review[]);
        setLoading(false);
      }
    }

    void loadReviews();

    return () => {
      active = false;
    };
  }, []);

  const reviewCount = reviews.length;
  const averageRating =
    reviewCount > 0
      ? reviews.reduce((total, review) => total + review.rating, 0) / reviewCount
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
          <h2>Real feedback. Approved by ROBIGO.</h2>
          <p>
            Customers can share their experience here. Every submission stays
            private until ROBIGO has checked and approved it.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.reviewsColumn}>
            {reviewCount > 0 && (
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
                    Based on {reviewCount} approved customer review
                    {reviewCount === 1 ? "" : "s"}
                  </p>
                </div>
              </div>
            )}

            {loading ? (
              <p className={styles.loading}>Loading customer reviews...</p>
            ) : reviewCount > 0 ? (
              <div className={styles.grid}>
                {reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.noReviews}>
                <MessageSquareText size={27} aria-hidden="true" />
                <div>
                  <h3>Be the first to share your experience</h3>
                  <p>
                    No approved reviews have been published yet. Submitted
                    reviews remain private until ROBIGO approves them.
                  </p>
                </div>
              </div>
            )}
          </div>

          <ReviewForm />
        </div>
      </div>
    </Section>
  );
}
