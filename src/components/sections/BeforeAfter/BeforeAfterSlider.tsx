import { useState } from "react";
import styles from "./BeforeAfterSlider.module.css";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className={styles.slider}>
      <img
        src={beforeImage}
        alt={`${title} before cleaning`}
        className={styles.image}
        draggable={false}
      />

      <div
        className={styles.after}
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src={afterImage}
          alt={`${title} after cleaning`}
          className={styles.image}
          draggable={false}
        />
      </div>

      <div
        className={styles.line}
        style={{
          left: `${position}%`,
        }}
      />

      <div
        className={styles.handle}
        style={{
          left: `${position}%`,
        }}
      />

      <input
        className={styles.range}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) =>
          setPosition(Number(e.target.value))
        }
        aria-label="Before and after comparison"
      />
    </div>
  );
}