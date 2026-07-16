import Container from "../../ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <HeroContent />

          <div className={styles.imageWrapper}>
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}