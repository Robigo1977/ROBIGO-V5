import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import HeroTrust from "./HeroTrust";
import { heroData } from "./hero.data";

import { fadeUp } from "../../../motion/variants";
import { viewport } from "../../../motion/viewport";

import styles from "./Hero.module.css";

export default function HeroContent() {
  return (
    <motion.div
      className={styles.content}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <span className={styles.badge}>
        {heroData.badge}
      </span>

      <h1 className={styles.title}>
        {heroData.title}
      </h1>

      <p className={styles.subtitle}>
        {heroData.subtitle}
      </p>

      <div className={styles.actions}>
        <HeroButtons />
      </div>

      <div
        className={styles.rating}
        aria-label={`${heroData.stats.reviews} customer rating`}
      >
        <span
          className={styles.stars}
          aria-hidden="true"
        >
          ★★★★★
        </span>

        <span className={styles.ratingText}>
          {heroData.stats.reviews}
        </span>
      </div>

      <div className={styles.trust}>
        <HeroTrust />
      </div>
    </motion.div>
  );
}