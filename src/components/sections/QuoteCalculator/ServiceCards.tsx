import type { ServiceType } from "./types";
import { services } from "./quote.data";
import styles from "./QuoteCalculator.module.css";

interface ServiceCardsProps {
  selected: ServiceType;
  onSelect: (service: ServiceType) => void;
}

export default function ServiceCards({
  selected,
  onSelect,
}: ServiceCardsProps) {
  return (
    <div
      className={styles.serviceGrid}
      role="group"
      aria-label="Select a cleaning service"
    >
      {services.map((service) => {
        const isSelected = selected === service.id;

        return (
          <button
            key={service.id}
            type="button"
            onClick={() => onSelect(service.id)}
            className={`${styles.serviceCard} ${
              isSelected ? styles.active : ""
            }`}
            aria-pressed={isSelected}
            aria-label={service.title}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </button>
        );
      })}
    </div>
  );
}