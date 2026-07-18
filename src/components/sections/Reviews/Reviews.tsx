import "./Reviews.css";
import { Star, Quote } from "lucide-react";

import { site } from "../../../config/site";

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
            Trusted by Winchester Homeowners
          </span>

          <h2>
            Why Homeowners Choose ROBIGO Again and Again
          </h2>

          <p>
            Inviting someone into your home requires trust.
            We combine professional equipment, honest pricing
            and exceptional results to deliver a cleaning
            service people confidently recommend to friends,
            family and neighbours.
          </p>
        </div>

        <div className="reviews-highlight">
          <Quote size={42} />

          <blockquote>
            "Every five-star review represents a customer who
            trusted us with their home. Our goal is simple:
            make your home the next success story."
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
            Send us a few photos on WhatsApp and receive a
            fast, free quotation with no obligation and no
            call-out charge.
          </p>

          <a
            href={site.whatsappMessage()}
            className="reviews-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get My Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}