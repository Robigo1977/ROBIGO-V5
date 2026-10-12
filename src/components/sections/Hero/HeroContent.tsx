import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import { heroData } from "./hero.data";

import { fadeUp } from "../../../motion/variants";
import { viewport } from "../../../motion/viewport";

import styles from "./Hero.module.css";
import halloween from "./HalloweenHero.module.css";

export default function HeroContent() {
  return (
    <motion.div
      className={`${styles.content} ${halloween.contentHalloween}`}
      variants={fadeUp}
      initial={false}
      whileInView="show"
      viewport={viewport}
    >
      <p className={halloween.seasonalBadge}>🎃 HALLOWEEN SPECIAL</p>

      <p className={halloween.campaignHeadline}>
        DON&apos;T LET DIRT <span>HAUNT</span> YOUR HOME!
      </p>

      <h1
        id="hero-title"
        className={`${styles.title} ${halloween.seoTitle}`}
      >
        {heroData.title}
      </h1>

      <p className={`${styles.subtitle} ${halloween.heroSubtitle}`}>
        Sofa & upholstery cleaning, carpet cleaning, rugs, mattresses, ovens and
        chemical-free dry steam for suitable hard floors across Winchester and
        nearby areas.
      </p>

      <p className={`${styles.callout} ${halloween.heroCallout}`}>
        £50 minimum booking · No call-out charge
      </p>

      <HeroButtons />

      <div
        className={`${styles.rating} ${halloween.ratingHalloween}`}
        aria-label="ROBIGO customer reviews"
      >
        <span
          className={styles.stars}
          aria-hidden="true"
        >
          {"★★★★★"}
        </span>
        <span className={styles.ratingText}>Local Winchester cleaning service</span>
      </div>
    </motion.div>
  );
}
