import heroImage from "../../../assets/optimized/approved/robigo-hero-2026.svg";

import styles from "./Hero.module.css";

export default function HeroImage() {
  return (
    <img
      src={heroImage}
      alt="Professional carpet cleaning in a premium Winchester living room"
      className={styles.heroImage}
      width={640}
      height={360}
      sizes="100vw"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
