import styles from "./Hero.module.css";
import halloween from "./HalloweenHero.module.css";

const places = [
  "Winchester",
  "Eastleigh",
  "Chandler's Ford",
  "Shawford",
  "Compton",
  "Otterbourne",
  "Twyford",
  "King's Worthy",
  "Hursley",
];

export default function HeroImage() {
  return (
    <div
      className={`${styles.heroImage} ${halloween.heroImageHalloween}`}
      role="img"
      aria-label="ROBIGO service areas around Winchester"
    >
      <div className={`${styles.neonWindow} ${halloween.neonWindowHalloween}`}>
        <div className={styles.neonTrack} aria-hidden="true">
          {[0, 1].map((copy) => (
            <div
              className={`${styles.neonRun} ${halloween.neonRunHalloween}`}
              key={copy}
            >
              {places.map((place) => (
                <span className={styles.neonPlace} key={place}>
                  {place}
                  <b className={`${styles.neonStar} ${halloween.neonStarHalloween}`}>✦</b>
                  <b className={halloween.halloweenMark}>🎃</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
