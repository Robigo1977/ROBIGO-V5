// src/components/sections/QuoteCalculator/ServiceOptions.tsx

import type { CSSProperties } from "react";

import type {
  ServiceType,
  QuoteItem,
} from "./types";

import styles from "./QuoteCalculator.module.css";

interface ServiceOptionsProps {
  service: ServiceType;

  area: number;
  onAreaChange: (value: number) => void;

  upholsteryItem?: QuoteItem["item"];
  onUpholsteryChange: (
    value: QuoteItem["item"]
  ) => void;

  mattressSize?: QuoteItem["mattressSize"];
  onMattressChange: (
    value: QuoteItem["mattressSize"]
  ) => void;

  rugSize?: QuoteItem["rugSize"];
  onRugChange: (
    value: QuoteItem["rugSize"]
  ) => void;
}


const MIN_AREA = 20;
const MAX_AREA = 200;


const upholsteryOptions = [
  {
    value: "armchair",
    label: "Armchair",
  },
  {
    value: "diningChair",
    label: "Dining Chair",
  },
  {
    value: "sofa2",
    label: "2 Seater Sofa",
  },
  {
    value: "sofa3",
    label: "3 Seater Sofa",
  },
  {
    value: "sofa4",
    label: "4 Seater Sofa",
  },
  {
    value: "cornerSofa",
    label: "Corner Sofa",
  },
] as const;


const mattressOptions = [
  {
    value: "single",
    label: "Single",
  },
  {
    value: "double",
    label: "Double",
  },
  {
    value: "king",
    label: "King",
  },
  {
    value: "superKing",
    label: "Super King",
  },
] as const;


const rugOptions = [
  {
    value: "small",
    label: "Small",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "large",
    label: "Large",
  },
  {
    value: "extraLarge",
    label: "Extra Large",
  },
] as const;



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

}: ServiceOptionsProps) {


  if (
    service === "carpet" ||
    service === "steam"
  ) {

    const label =
      service === "steam"
        ? "Steam Cleaning Area (m²)"
        : "Carpet Cleaning Area (m²)";


    const progress =
      ((area - MIN_AREA) /
        (MAX_AREA - MIN_AREA)) *
      100;


    const rateLabel =
      area >= 100
        ? "Best Value"
        : area >= 50
        ? "Better Rate"
        : "Minimum Charge";


    return (
      <div className={styles.inputGroup}>

        <div className={styles.sliderHeader}>

          <div>

            <label
              htmlFor="area-slider"
              className={styles.sliderLabel}
            >
              {label}
            </label>


            <p className={styles.sliderDescription}>
              Move the slider to instantly update your estimate.
            </p>

          </div>


          <div className={styles.areaBadge}>

            <span className={styles.areaNumber}>
              {area}
            </span>

            <span className={styles.areaUnit}>
              m²
            </span>

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
          onChange={(event) =>
            onAreaChange(
              Number(event.target.value)
            )
          }
          style={
            {
              "--progress": `${progress}%`,
            } as CSSProperties
          }
        />



        <div className={styles.sliderMarkers}>
          <span>20</span>
          <span>50</span>
          <span>100</span>
          <span>200</span>
        </div>



        <div className={styles.sliderHints}>

          <span
            className={
              area < 50
                ? styles.activeHint
                : undefined
            }
          >
            Minimum Charge
          </span>


          <span
            className={
              area >= 50 &&
              area < 100
                ? styles.activeHint
                : undefined
            }
          >
            Better Rate
          </span>


          <span
            className={
              area >= 100
                ? styles.activeHint
                : undefined
            }
          >
            Best Value
          </span>

        </div>



        <div className={styles.rateBanner}>

          <strong>
            {rateLabel}
          </strong>

          <span>
            Instant estimate updates as you move the slider.
          </span>

        </div>


      </div>
    );
  }



  if (service === "upholstery") {

    return (

      <div className={styles.inputGroup}>

        <label className={styles.sliderLabel}>
          Select Upholstery Item
        </label>


        <div className={styles.serviceGrid}>

          {upholsteryOptions.map((option) => (

            <button
              key={option.value}
              type="button"
              className={`${styles.serviceCard} ${
                upholsteryItem === option.value
                  ? styles.active
                  : ""
              }`}
              onClick={() =>
                onUpholsteryChange(
                  option.value
                )
              }
            >

              <h3>
                {option.label}
              </h3>

            </button>

          ))}

        </div>

      </div>

    );
  }



  if (service === "mattress") {

    return (

      <div className={styles.inputGroup}>

        <label className={styles.sliderLabel}>
          Select Mattress Size
        </label>


        <div className={styles.serviceGrid}>

          {mattressOptions.map((option) => (

            <button
              key={option.value}
              type="button"
              className={`${styles.serviceCard} ${
                mattressSize === option.value
                  ? styles.active
                  : ""
              }`}
              onClick={() =>
                onMattressChange(
                  option.value
                )
              }
            >

              <h3>
                {option.label}
              </h3>

            </button>

          ))}

        </div>

      </div>

    );
  }



  if (service === "rug") {

    return (

      <div className={styles.inputGroup}>

        <label className={styles.sliderLabel}>
          Select Rug Size
        </label>


        <div className={styles.serviceGrid}>

          {rugOptions.map((option) => (

            <button
              key={option.value}
              type="button"
              className={`${styles.serviceCard} ${
                rugSize === option.value
                  ? styles.active
                  : ""
              }`}
              onClick={() =>
                onRugChange(
                  option.value
                )
              }
            >

              <h3>
                {option.label}
              </h3>

            </button>

          ))}

        </div>

      </div>

    );
  }



  return null;
}