type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
};

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: "1.1rem",
              fontWeight: 700,
            }}
          >
            {review.name}
          </h3>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: ".9rem",
            }}
          >
            {review.location}
          </p>
        </div>

        <div
          style={{
            color: "#f59e0b",
            fontSize: "1.1rem",
            letterSpacing: "2px",
          }}
        >
          {"★".repeat(review.rating)}
        </div>
      </div>

      <p
        style={{
          margin: 0,
          lineHeight: 1.7,
          color: "#334155",
        }}
      >
        “{review.text}”
      </p>
    </article>
  );
}