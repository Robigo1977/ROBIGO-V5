import HeroButtons from "./HeroButtons";
import styles from "./Hero.module.css";

import heroImage from "../../../assets/optimized/approved/carpet-clean-web-2026.jpg";

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
        src={heroImage}
        alt="Professional carpet cleaning by ROBIGO in Winchester"
        width="480"
        height="853"
        fetchPriority="high"
        decoding="async"
      />

      <div className={styles.heroContent}>
        <div className={styles.contactPanel}>
          <HeroButtons />
          <h1 id="hero-title">Professional Carpet & Upholstery Cleaning in Winchester</h1>
          <p className={styles.heroText}>
            Rugs, mattresses, ovens and chemical-free hard-floor steam cleaning also available.
          </p>
          <p className={styles.heroText}>Speak to Robert or send pictures to Robert on WhatsApp for a free quotation.</p>
          <div className={styles.heroTrust} aria-label="ROBIGO booking information">
            <span>✓ No Call-Out Charge</span>
            <span>✓ Minimum Booking £50</span>
            <span>✓ 7 Days a Week</span>
          </div>
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
