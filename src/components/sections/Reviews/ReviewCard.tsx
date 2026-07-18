import { Star, BadgeCheck } from "lucide-react";
import type { Review } from "./reviews.data";

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  return (
    <article className="review-card">
      <div className="review-header">
        <div>
          <h3>{review.name}</h3>

          <p className="review-location">
            {review.location} • {review.service}
          </p>
        </div>

        <div className="verified">
          <BadgeCheck size={16} />
          <span>Verified Customer</span>
        </div>
      </div>

      <div className="stars">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            fill="currentColor"
            strokeWidth={1.5}
          />
        ))}
      </div>

      <p className="review-text">
        "{review.text}"
      </p>
    </article>
  );
}