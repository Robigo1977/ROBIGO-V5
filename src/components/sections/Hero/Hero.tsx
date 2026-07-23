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
      <div className={styles.imageWrapper}>
        <HeroImage />
      </div>

      <Container>
        <div className={styles.contentLayout}>
          <HeroContent />
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
