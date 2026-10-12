import HeroButtons from "./HeroButtons";
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

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <img
        className={styles.heroPhoto}
        src="/media/halloween-living-room.webp?v=20261012b"
        alt="Bright Halloween decorated living room with a freshly cleaned carpet in Winchester"
        width="1280"
        height="720"
        fetchPriority="high"
        decoding="async"
      />
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={styles.bat} aria-hidden="true">🦇</div>
      <div className={styles.ghost} aria-hidden="true">👻</div>
      <div className={styles.pumpkin} aria-hidden="true">🎃</div>

      <div className={styles.heroContent}>
        <p className={styles.seasonalBadge}>🎃 HALLOWEEN SPECIAL</p>
        <p className={styles.halloweenLine}>
          DON&apos;T LET DIRT <span>HAUNT</span> YOUR HOME!
        </p>
        <h1 id="hero-title">Professional Carpet & Upholstery Cleaning in Winchester</h1>
        <p className={styles.heroText}>
          Also cleaning rugs, mattresses, ovens and chemical-free hard-floor steam cleaning.
        </p>

        <HeroButtons />

        <div className={styles.heroTrust} aria-label="ROBIGO booking information">
          <span>✓ No Call-Out Charge</span>
          <span>✓ Minimum Booking £50</span>
          <span>✓ 7 Days a Week</span>
        </div>
      </div>

      <div className={styles.ticker} aria-label={`Areas we cover: ${places.join(", ")}`}>
        <strong className={styles.tickerLabel}>📍 We cover:</strong>
        <div className={styles.tickerViewport}>
          <div className={styles.tickerTrack}>
            {[0, 1].map((copy) => (
              <div className={styles.tickerRun} key={copy} aria-hidden={copy === 1}>
                {places.map((place) => (
                  <span key={`${copy}-${place}`}>{place}<b>•</b></span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
