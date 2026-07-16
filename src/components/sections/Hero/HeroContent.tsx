import HeroButtons from "./HeroButtons";
import HeroTrust from "./HeroTrust";
import { heroData } from "./hero.data";

import styles from "./Hero.module.css";

export default function HeroContent() {
  return (
    <div className={styles.content}>
      <span className={styles.badge}>
        {heroData.badge}
      </span>

      <h1 className={styles.title}>
        {heroData.title}
      </h1>

      <p className={styles.subtitle}>
        {heroData.subtitle}
      </p>

      <HeroButtons />

      <div className={styles.rating}>
        <span className={styles.stars}>
          ★★★★★
        </span>

        <span className={styles.ratingText}>
          {heroData.stats.reviews}
        </span>
      </div>

      <HeroTrust />
    </div>
  );
}