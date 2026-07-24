import type { CSSProperties } from "react";
import type { QuoteItem, ServiceType } from "./types";
import { SERVICE_PRICES } from "./servicePrices";
import styles from "./QuoteCalculator.module.css";

interface ServiceOptionsProps {
  service: ServiceType;
  area: number;
  onAreaChange: (value: number) => void;
  upholsteryItem?: QuoteItem["item"];
  onUpholsteryChange: (value: QuoteItem["item"]) => void;
  mattressSize?: QuoteItem["mattressSize"];
  onMattressChange: (value: QuoteItem["mattressSize"]) => void;
  rugSize?: QuoteItem["rugSize"];
  onRugChange: (value: QuoteItem["rugSize"]) => void;
  quantity: number;
  onQuantityChange: (value: number) => void;
}

const MIN_AREA = 20;
const MAX_AREA = 200;

const upholsteryOptions = [
  { value: "diningChair", label: "Dining Chair", price: 10 },
  { value: "armchair", label: "Armchair", price: 30 },
  { value: "sofa2", label: "2 Seater Sofa", price: 49 },
  { value: "sofa3", label: "3 Seater Sofa", price: 59 },
  { value: "sofa4", label: "4 Seater Sofa", price: 69 },
  { value: "cornerSofa", label: "Corner Sofa", price: 79 },
] as const;

const mattressOptions = [
  { value: "single", label: "Single", price: 30 },
  { value: "double", label: "Double", price: 40 },
  { value: "king", label: "King", price: 50 },
  { value: "superKing", label: "Super King", price: 60 },
] as const;

const rugOptions = [
  { value: "small", label: "Small", detail: "up to 1.5×1.0m", price: 20 },
  { value: "medium", label: "Medium", detail: "up to 2.0×1.5m", price: 30 },
  { value: "large", label: "Large", detail: "up to 3.0×2.0m", price: 40 },
  {
    value: "extraLarge",
    label: "Extra Large",
    detail: "over 3.0×2.0m",
    price: 50,
  },
] as const;

function QuantityControl({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className={styles.quantityRow}>
      <span className={styles.quantityLabel}>Quantity</span>
      <div className={styles.quantityControl}>
        <button
          type="button"
          className={styles.quantityButton}
          onClick={() => onChange(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <output className={styles.quantityNumber} aria-live="polite">
          {quantity}
        </output>
        <button
          type="button"
          className={styles.quantityButton}
          onClick={() => onChange(Math.min(20, quantity + 1))}
          disabled={quantity >= 20}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function ServiceOptions({
  service,
  area,
  onAreaChange,
  upholsteryItem,
  onUpholsteryChange,
  mattressSize,
  onMattressChange,
  rugSize,
  onRugChange,
  quantity,
  onQuantityChange,
}: ServiceOptionsProps) {
  if (service === "carpet" || service === "steam") {
    const isSteam = service === "steam";
    const progress = ((area - MIN_AREA) / (MAX_AREA - MIN_AREA)) * 100;

    return (
      <div className={styles.inputGroup}>
        <div className={styles.sliderHeader}>
          <div>
            <label htmlFor="area-slider" className={styles.sliderLabel}>
              {isSteam
                ? "Steam Cleaning Area (m²)"
                : "Carpet Cleaning Area (m²)"}
            </label>
            <p className={styles.sliderDescription}>
              {isSteam
                ? `£${SERVICE_PRICES.steam.pricePerSqm.toFixed(2)}/m² • £${SERVICE_PRICES.steam.minimumCharge} minimum`
                : "Move the slider to update your estimate instantly."}
            </p>
          </div>
          <div className={styles.areaBadge}>
            <span className={styles.areaNumber}>{area}</span>
            <span className={styles.areaUnit}>m²</span>
          </div>
        </div>
        <input
          id="area-slider"
          className={styles.slider}
          type="range"
          min={MIN_AREA}
          max={MAX_AREA}
          step={1}
          value={area}
          onChange={(event) => onAreaChange(Number(event.target.value))}
          style={{ "--progress": `${progress}%` } as CSSProperties}
        />
        <div className={styles.sliderMarkers}>
          <span>20</span>
          <span>50</span>
          <span>100</span>
          <span>200</span>
        </div>
        <div className={styles.rateBanner}>
          <strong>
            {isSteam ? "Chemical-Free Hard Floor Cleaning" : "Fair Pricing"}
          </strong>
          <span>
            We measure the exact area before cleaning, so you only pay for the
            area cleaned.
          </span>
        </div>
      </div>
    );
  }

  const config =
    service === "upholstery"
      ? {
          label: "Choose Upholstery Item",
          options: upholsteryOptions,
          selected: upholsteryItem,
          onSelect: onUpholsteryChange,
        }
      : service === "mattress"
        ? {
            label: "Choose Mattress Size",
            options: mattressOptions,
            selected: mattressSize,
            onSelect: onMattressChange,
          }
        : {
            label: "Choose Rug Size",
            options: rugOptions,
            selected: rugSize,
            onSelect: onRugChange,
          };

  return (
    <div className={styles.inputGroup}>
      <h3 className={styles.sliderLabel}>{config.label}</h3>
      <div className={styles.optionGrid}>
        {config.options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${styles.optionCard} ${
              config.selected === option.value ? styles.active : ""
            }`}
            onClick={() =>
              config.onSelect(option.value as never)
            }
            aria-pressed={config.selected === option.value}
          >
            <span className={styles.optionName}>{option.label}</span>
            {"detail" in option && (
              <span className={styles.optionDetail}>{option.detail}</span>
            )}
            <strong className={styles.optionPrice}>£{option.price}</strong>
          </button>
        ))}
      </div>
      <QuantityControl quantity={quantity} onChange={onQuantityChange} />
    </div>
  );
}
