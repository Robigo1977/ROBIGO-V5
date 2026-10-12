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
      aria-hidden="true"
    >
      <img
        className={halloween.livingRoomImage}
        src="/media/halloween-living-room.webp"
        alt=""
        width="720"
        height="405"
        fetchPriority="high"
        decoding="async"
      />

      <div className={`${styles.neonWindow} ${halloween.neonWindowHalloween}`}>
        <div className={styles.neonTrack}>
          {[0, 1].map((copy) => (
            <div
              className={`${styles.neonRun} ${halloween.neonRunHalloween}`}
              key={copy}
            >
              {places.map((place) => (
                <span className={styles.neonPlace} key={`${copy}-${place}`}>
                  {place}
                  <b className={`${styles.neonStar} ${halloween.neonStarHalloween}`}>✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
