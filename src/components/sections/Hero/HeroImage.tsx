"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const places = ["Winchester", "Southampton", "Romsey", "Eastleigh", "Chandler’s Ford", "Stockbridge", "Hursley", "Twyford", "Sparsholt", "Ampfield"];

function getOffset(index: number, active: number) {
  let offset = (index - active + places.length) % places.length;
  if (offset > places.length / 2) offset -= places.length;
  return offset;
}

export default function HeroImage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % places.length), 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={styles.heroImage} role="img" aria-label="ROBIGO service areas around Winchester">
      <div className={styles.neonWindow}>
        <div className={styles.neonCarousel} aria-hidden="true">
          {places.map((place, index) => {
            const offset = getOffset(index, active);
            return (
              <span className={styles.neonCarouselPlace} data-offset={offset} key={place}>
                <b className={styles.neonStar}>★</b>{place}<b className={styles.neonStar}>★</b>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
