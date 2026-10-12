import styles from "./Hero.module.css";

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
      className={styles.heroImage}
      role="img"
      aria-label="ROBIGO service areas around Winchester"
    >
      <div className={styles.neonWindow}>
        <div className={styles.neonTrack} aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className={styles.neonRun} key={copy}>
              {places.map((place) => (
                <span className={styles.neonPlace} key={place}>
                  {place}
                  <b className={styles.neonStar}>✦</b>
                  <b className={styles.halloweenMark}>🎃</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
