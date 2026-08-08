import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import { heroData } from "./hero.data";

import { fadeUp } from "../../../motion/variants";
import { viewport } from "../../../motion/viewport";

import styles from "./Hero.module.css";

const services = [
  "Carpet cleaning",
  "Upholstery cleaning",
  "Chemical-free dry steam cleaning",
  "Professional oven cleaning",
];

export default function HeroContent() {
  return (
    <motion.div
      className={styles.content}
      variants={fadeUp}
      initial={false}
      whileInView="show"
      viewport={viewport}
    >
      <h1
        id="hero-title"
        className={styles.title}
      >
        {heroData.title}
      </h1>

      <h2 className={styles.serviceHeading}>Our Cleaning Services</h2>

      <ul
        className={styles.serviceList}
        aria-label="Our cleaning services"
      >
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>

      <p className={styles.callout}>{"\u2713"} No call-out charge</p>

      <HeroButtons />

      <div
        className={styles.rating}
        aria-label={`${heroData.stats.reviews} customer rating`}
      >
        <span
          className={styles.stars}
          aria-hidden="true"
        >
          {"\u2605\u2605\u2605\u2605\u2605"}
        </span>

        <span className={styles.ratingText}>
          {heroData.stats.reviews}
        </span>
      </div>
    </motion.div>
  );
}
