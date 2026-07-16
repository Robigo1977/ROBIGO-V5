import type { ServiceType } from "./types";
import styles from "./QuoteCalculator.module.css";

interface ServiceOptionsProps {
  service: ServiceType;
  area: number;
  onAreaChange: (value: number) => void;
}

export default function ServiceOptions({
  service,
  area,
  onAreaChange,
}: ServiceOptionsProps) {
  if (service !== "carpet") {
    return null;
  }

  return (
    <div className={styles.inputGroup}>
      <label htmlFor="area">Carpet Size (m²)</label>

      <input
        id="area"
        type="range"
        min={20}
        max={150}
        value={area}
        onChange={(e) => onAreaChange(Number(e.target.value))}
      />

      <strong>{area} m²</strong>
    </div>
  );
}