import styles from "./QuoteCalculator.module.css";

type Step = {
  id: 1 | 2 | 3;
  label: string;
};

type StepIndicatorProps = {
  currentStep: 1 | 2 | 3;
};

const steps: Step[] = [
  {
    id: 1,
    label: "Choose Service",
  },
  {
    id: 2,
    label: "Add Details",
  },
  {
    id: 3,
    label: "Your Estimate",
  },
];

export default function StepIndicator({
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className={styles.stepIndicator}>
      {steps.map((step, index) => {
        const completed = step.id < currentStep;
        const active = step.id === currentStep;

        return (
          <div
            key={step.id}
            className={styles.stepWrapper}
          >
            <div
              className={[
                styles.stepCircle,
                completed ? styles.stepCompleted : "",
                active ? styles.stepActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {completed ? "✓" : step.id}
            </div>

            <span className={styles.stepLabel}>
              {step.label}
            </span>

            {index < steps.length - 1 && (
              <div className={styles.stepLine} />
            )}
          </div>
        );
      })}
    </div>
  );
}