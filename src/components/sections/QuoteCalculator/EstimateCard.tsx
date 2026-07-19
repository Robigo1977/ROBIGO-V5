import styles from "./QuoteCalculator.module.css";
import type { EstimateResult } from "./types";

interface EstimateCardProps {
  estimate: EstimateResult;
}

export default function EstimateCard({
  estimate,
}: EstimateCardProps) {
  const isNumeric = estimate.price > 0;
  const showBestValue = estimate.price >= 180;

  return (
    <div
      className={styles.estimateCard}
      aria-live="polite"
    >
      <div className={styles.estimateHeader}>
        <div>
          <p className={styles.estimateLabel}>
            Estimated Price
          </p>

          <p className={styles.estimateSubtitle}>
            Based on your selections.
          </p>
        </div>

        {showBestValue && (
          <span
            className={styles.bestValueBadge}
            aria-label="Excellent value"
          >
            ⭐ Excellent Value
          </span>
        )}
      </div>

      <h3 className={styles.estimatePrice}>
        {estimate.formattedPrice}
      </h3>

      <p className={styles.estimateNote}>
        Instant estimate • Final quote confirmed before work begins.
      </p>

      <div
        className={styles.trustPanel}
        aria-label="Why customers choose ROBIGO"
      >
        <div className={styles.trustItem}>
          📏 Laser Measured
        </div>

        <div className={styles.trustItem}>
          🚐 No Call-Out Fee
        </div>

        <div className={styles.trustItem}>
          ⭐ Fully Insured
        </div>

        <div className={styles.trustItem}>
          💬 Same-Day WhatsApp Reply
        </div>
      </div>

      {isNumeric && (
        <>
          <p className={styles.smallPrint}>
            Final price depends on the condition of the items and any
            optional extras you choose.
          </p>

          <div
            className={styles.priceGuarantee}
            role="note"
          >
            ✅ You'll always approve the final price before any cleaning
            begins.
          </div>
        </>
      )}
    </div>
  );
}