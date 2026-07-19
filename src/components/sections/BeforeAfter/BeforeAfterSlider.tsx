import { useRef, useState } from "react";
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
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updatePosition(clientX: number) {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();

    const value =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, value)));
  }

  function handlePointerDown(
    e: React.PointerEvent<HTMLDivElement>
  ) {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }

  function handlePointerMove(
    e: React.PointerEvent<HTMLDivElement>
  ) {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  }

  function handlePointerUp(
    e: React.PointerEvent<HTMLDivElement>
  ) {
    dragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  }

  return (
    <div
      ref={sliderRef}
      className={styles.slider}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
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

      <span className={styles.beforeLabel}>
        Before
      </span>

      <span className={styles.afterLabel}>
        After
      </span>

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
      >
        <span>◀</span>
        <span>▶</span>
      </div>

      <input
        className={styles.range}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) =>
          setPosition(Number(e.target.value))
        }
        aria-label={`Compare before and after cleaning for ${title}`}
      />
    </div>
  );
}