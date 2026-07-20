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
            Your Instant Estimate
          </p>

          <p className={styles.estimateSubtitle}>
            Calculated instantly from your selections.
          </p>
        </div>

        {showBestValue && (
          <span
            className={styles.bestValueBadge}
            aria-label="Best value"
          >
            ⭐ Best Value
          </span>
        )}
      </div>

      <h3 className={styles.estimatePrice}>
        {estimate.formattedPrice}
      </h3>

      <p className={styles.estimateNote}>
        No obligation • No call-out charge • Final price agreed before any work
        starts.
      </p>

      <div
        className={styles.trustPanel}
        aria-label="Why customers choose ROBIGO"
      >
        <div className={styles.trustItem}>
          🚐 No Call-Out Charge
        </div>

        <div className={styles.trustItem}>
          💬 Fast WhatsApp Quote
        </div>

        <div className={styles.trustItem}>
          ⭐ Fully Insured
        </div>

        <div className={styles.trustItem}>
          📏 Laser-Measured Pricing
        </div>
      </div>

      {isNumeric && (
        <>
          <p className={styles.smallPrint}>
            Your final quotation is confirmed before any cleaning begins. If
            additional work is required, we'll explain everything first—there
            are no surprises.
          </p>

          <div
            className={styles.priceGuarantee}
            role="note"
          >
            ✅ You always approve the final price before we start any work.
          </div>
        </>
      )}
    </div>
  );
}