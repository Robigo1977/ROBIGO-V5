import Container from "../../ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      id="home"
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      {/* Decorative background */}
      <div
        className={styles.background}
        aria-hidden="true"
      >
        <div className={styles.glowPrimary} />
        <div className={styles.glowSecondary} />
        <div className={styles.gridPattern} />
      </div>

      <Container>
        <div className={styles.grid}>
          <HeroContent />

          <div className={styles.imageWrapper}>
            <HeroImage />
          </div>
        </div>
      </Container>

      <div
        className={styles.scrollIndicator}
        aria-hidden="true"
      >
        <span />
      </div>
    </section>
  );
}