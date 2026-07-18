import "./Reviews.css";
import { Star, Quote } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviews.data";

export default function Reviews() {
  return (
    <section
      className="reviews-section"
      id="reviews"
    >
      <div className="container">

        <div className="reviews-heading">

          <span className="reviews-badge">
            <Star
              size={16}
              fill="currentColor"
            />
            Trusted by Local Homeowners
          </span>

          <h2>
            Why Winchester Homeowners Recommend ROBIGO
          </h2>

          <p>
            Inviting someone into your home requires trust.
            That's why we focus on outstanding results,
            honest communication and a professional service
            people genuinely recommend to friends and family.
          </p>

        </div>

        <div className="reviews-highlight">

          <Quote size={42} />

          <blockquote>
            "Our reputation has been built one home at a time.
            Every review represents a customer who trusted us
            with their home—and we'd love to earn your trust too."
          </blockquote>

        </div>

        <div className="reviews-grid">

          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}

        </div>

        <div className="reviews-footer">

          <h3>
            Your Home Could Be Our Next Five-Star Review
          </h3>

          <p>
            Send us a few photos on WhatsApp and receive
            a fast, free quotation with absolutely no
            obligation and no call-out charge.
          </p>

          <a
            href="https://wa.me/447777449931"
            className="reviews-button"
          >
            Get My Free Quote
          </a>

        </div>

      </div>
    </section>
  );
}