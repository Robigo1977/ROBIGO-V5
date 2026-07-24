import type { QuoteExtras } from "./types";
import { SERVICE_PRICES } from "./servicePrices";
import styles from "./QuoteCalculator.module.css";

interface AdditionalServicesProps {
  extras: QuoteExtras;
  onChange: (extras: QuoteExtras) => void;
}

const options = [
  {
    key: "petOdour",
    title: "Pet Odour Treatment",
    description: "Targeted odour treatment",
    price: SERVICE_PRICES.extras.petOdour,
    featured: false,
  },
  {
    key: "heavyStains",
    title: "Heavy Stain Treatment",
    description: "Extra treatment for difficult stains",
    price: SERVICE_PRICES.extras.heavyStains,
    featured: false,
  },
  {
    key: "priority24",
    title: "Priority 24",
    description: "Priority booking, subject to availability",
    price: SERVICE_PRICES.extras.priority24,
    featured: true,
  },
  {
    key: "emergency",
    title: "Emergency Spot Cleaning",
    description: "Rapid response for one-off accidents",
    price: SERVICE_PRICES.extras.emergency,
    featured: true,
  },
] as const;

export default function AdditionalServices({
  extras,
  onChange,
}: AdditionalServicesProps) {
  const toggle = (key: keyof QuoteExtras) => {
    onChange({ ...extras, [key]: !extras[key] });
  };

  return (
    <section className={styles.inputGroup} aria-labelledby="extras-heading">
      <div>
        <h3 id="extras-heading" className={styles.sliderLabel}>
          Optional Extras
        </h3>
        <p className={styles.sliderDescription}>
          Select only what you need. Tap again to remove.
        </p>
      </div>
      <div className={styles.extrasGrid}>
        {options.map((option) => {
          const selected = extras[option.key];
          return (
            <button
              key={option.key}
              type="button"
              className={`${styles.extraCard} ${
                selected ? styles.active : ""
              } ${option.featured ? styles.featuredExtra : ""}`}
              onClick={() => toggle(option.key)}
              aria-pressed={selected}
            >
              <span className={styles.extraCheck}>
                {selected ? "✓" : "+"}
              </span>
              <span className={styles.extraCopy}>
                <strong>{option.title}</strong>
                <small>{option.description}</small>
              </span>
              <strong className={styles.extraPrice}>+£{option.price}</strong>
            </button>
          );
        })}
      </div>
    </section>
  );
}
