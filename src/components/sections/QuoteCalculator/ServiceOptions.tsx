import type { ServiceType } from "./types";
import styles from "./QuoteCalculator.module.css";

interface ServiceOptionsProps {
  service: ServiceType;
  area: number;
  onAreaChange: (value: number) => void;
}

const AREA_BASED_SERVICES: readonly ServiceType[] = [
  "carpet",
  "steam",
];

export default function ServiceOptions({
  service,
  area,
  onAreaChange,
}: ServiceOptionsProps) {
  if (!AREA_BASED_SERVICES.includes(service)) {
    return null;
  }

  const label =
    service === "steam"
      ? "Steam Cleaning Area (m²)"
      : "Carpet Size (m²)";

  return (
    <div className={styles.inputGroup}>
      <label htmlFor="area-slider">{label}</label>

      <input
        id="area-slider"
        type="range"
        min={20}
        max={150}
        step={1}
        value={area}
        onChange={(e) => onAreaChange(Number(e.target.value))}
        aria-describedby="area-value"
      />

      <output
        id="area-value"
        className={styles.areaValue}
        htmlFor="area-slider"
      >
        {area} m²
      </output>
    </div>
  );
}