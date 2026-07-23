import heroImage from "../../../assets/optimized/hero/robigo-campaign-hero.webp";

import styles from "./Hero.module.css";


export default function HeroImage() {
  return (
    <img
      src={heroImage}
      alt="Professional carpet cleaning in a premium Winchester living room"
      className={styles.heroImage}
      width={1536}
      height={1024}
      sizes="100vw"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
