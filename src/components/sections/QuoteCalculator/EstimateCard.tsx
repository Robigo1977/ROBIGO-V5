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
    <div className={styles.estimateCard}>
      <div className={styles.estimateHeader}>
        <div>
          <p className={styles.estimateLabel}>
            Instant Price Estimate
          </p>

          <p className={styles.estimateSubtitle}>
            Professional cleaning with transparent pricing.
          </p>
        </div>

        {showBestValue && (
          <span className={styles.bestValueBadge}>
            ⭐ BEST VALUE
          </span>
        )}
      </div>

      <h3 className={styles.estimatePrice}>
        {estimate.formattedPrice}
      </h3>

      <p className={styles.estimateNote}>
        Estimated price based on the information provided.
      </p>

      <div className={styles.trustPanel}>
        <div className={styles.trustItem}>
          📏 Laser Measured Accuracy
        </div>

        <div className={styles.trustItem}>
          ✅ No Call-Out Charge
        </div>

        <div className={styles.trustItem}>
          💬 Final Quote Confirmed Before We Start
        </div>

        <div className={styles.trustItem}>
          🕒 Same-Day WhatsApp Replies
        </div>
      </div>

      {isNumeric && (
        <>
          <p className={styles.smallPrint}>
            Final pricing may vary depending on staining,
            furniture movement, access and any optional extras
            selected during inspection.
          </p>

          <div className={styles.priceGuarantee}>
            We will always confirm the final price with you before
            any cleaning begins.
          </div>
        </>
      )}
    </div>
  );
}