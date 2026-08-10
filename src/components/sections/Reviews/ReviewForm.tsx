import { useState, type FormEvent } from "react";
import { Send, Star } from "lucide-react";

import { submitReview } from "../../../lib/supabase";

import styles from "./ReviewForm.module.css";

const services = [
  "Carpet Cleaning",
  "Upholstery Cleaning",
  "Oven Cleaning",
  "Mattress Cleaning",
  "Dry Steam Cleaning",
  "Other",
];

export default function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const formElement = event.currentTarget;\n    const form = new FormData(formElement);
    const website = String(form.get("website") ?? "");

    if (website) {
      setStatus("success");
      return;
    }

    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      location: String(form.get("location") ?? "").trim(),
      service: String(form.get("service") ?? "").trim(),
      rating,
      review: String(form.get("review") ?? "").trim(),
      approved: false,
      featured: false,
    };

    try {
      await submitReview(payload);
      formElement.reset();
      setRating(5);
      setStatus("success");
      setMessage("Thank you. Your review was sent to ROBIGO for approval.");
    } catch {
      setStatus("error");
      setMessage("We could not send your review. Please check the details and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <span aria-hidden="true">✓</span>
        <div>
          <h3>Thank you for your feedback</h3>
          <p>{message || "Your review has been received and is awaiting approval."}</p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <span>Share your experience</span>
        <h3>Leave ROBIGO a review</h3>
        <p>Your review will appear after it has been checked and approved.</p>
      </div>

      <div className={styles.ratingField}>
        <span>Your rating</span>
        <div className={styles.ratingButtons} role="radiogroup" aria-label="Your rating">
          {Array.from({ length: 5 }).map((_, index) => {
            const value = index + 1;
            return (
              <button
                key={value}
                type="button"
                className={value <= rating ? styles.activeStar : ""}
                onClick={() => setRating(value)}
                role="radio"
                aria-checked={rating === value}
                aria-label={`${value} star${value === 1 ? "" : "s"}`}
              >
                <Star size={25} fill="currentColor" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.fields}>
        <label>
          Your name
          <input name="name" autoComplete="name" minLength={2} maxLength={80} required />
        </label>

        <label>
          Email address
          <input name="email" type="email" autoComplete="email" maxLength={160} required />
          <small>Your email is private and will never be displayed.</small>
        </label>

        <label>
          Town or area
          <input name="location" autoComplete="address-level2" minLength={2} maxLength={80} required />
        </label>

        <label>
          Service
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </label>
      </div>

      <label className={styles.reviewField}>
        Your review
        <textarea
          name="review"
          rows={5}
          minLength={20}
          maxLength={1200}
          placeholder="Tell us about the service and your experience..."
          required
        />
      </label>

      <label className={styles.honeypot} aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      {status === "error" && (
        <p className={styles.error} role="alert">{message}</p>
      )}

      <button className={styles.submit} type="submit" disabled={status === "sending"}>
        <Send size={18} aria-hidden="true" />
        {status === "sending" ? "Sending..." : "Submit review"}
      </button>
    </form>
  );
}
