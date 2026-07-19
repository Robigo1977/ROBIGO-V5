// src/components/sections/QuoteCalculator/ProgressHeader.tsx

import StepIndicator from "./StepIndicator";
import styles from "./QuoteCalculator.module.css";

type ProgressHeaderProps = {
  currentStep: 1 | 2 | 3;
  id?: string;
};

export default function ProgressHeader({
  currentStep,
  id,
}: ProgressHeaderProps) {
  return (
    <header className={styles.progressHeader}>
      <span className={styles.progressBadge}>
        FREE INSTANT ESTIMATE
      </span>

      <h2
        id={id}
        className={styles.progressTitle}
      >
        Get Your Quote in Less Than 30 Seconds
      </h2>

      <p className={styles.progressSubtitle}>
        Choose your service, enter a few details and receive an instant
        estimated price. Your final quotation is confirmed after a quick
        WhatsApp consultation.
      </p>

      <StepIndicator currentStep={currentStep} />
    </header>
  );
}