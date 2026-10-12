import Container from "../../ui/Container";
import Button from "../../ui/Button";

import carpetCleaningImage from "../../../assets/optimized/hero/robigo-campaign-hero-mobile-safe.jpg";

import styles from "./CarpetCleaningPage.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageWrapper} aria-hidden="true">
        <img
          className={styles.heroImage}
          src={carpetCleaningImage}
          alt=""
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <Container>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>
            Winchester Carpet Cleaning Specialists
          </span>

          <h1 className={styles.heroTitle}>
            Professional Carpet Cleaning in Winchester
          </h1>

          <p className={styles.heroLead}>
            Bring your carpets back to life with professional deep cleaning.
            ROBIGO removes embedded dirt, everyday stains and odours with
            professional extraction equipment and clear room-based prices.
          </p>

          <Button href="/#contact" size="lg">
            Get My Free Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
