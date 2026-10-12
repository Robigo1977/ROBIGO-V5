import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import { heroData } from "./hero.data";

import { fadeUp } from "../../../motion/variants";
import { viewport } from "../../../motion/viewport";

import styles from "./Hero.module.css";

const services = [
  "Carpet cleaning",
  "Sofa & upholstery cleaning",
  "Rug cleaning",
  "Mattress cleaning",
  "Chemical-free hard-floor steam cleaning",
  "Oven cleaning",
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

      <h2 className={styles.serviceHeading}>Choose What You Need</h2>

      <ul
        className={styles.serviceList}
        aria-label="ROBIGO cleaning services in Winchester"
      >
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>

      <p className={styles.callout}>
        {"\u2713"} £50 minimum booking · No call-out charge
      </p>

      <HeroButtons />

      <div
        className={styles.rating}
        aria-label="ROBIGO customer reviews"
      >
        <span
          className={styles.stars}
          aria-hidden="true"
        >
          {"\u2605\u2605\u2605\u2605\u2605"}
        </span>

        <span className={styles.ratingText}>Customer Reviews</span>
      </div>
    </motion.div>
  );
}
