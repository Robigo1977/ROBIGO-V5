import heroImage from "../../../assets/optimized/hero/robigo-professional-cleaning-hero.webp";

import styles from "./Hero.module.css";


export default function HeroImage() {
  return (
    <img
      src={heroImage}
      alt="ROBIGO professional carpet cleaning in a bright Winchester home"
      className={styles.heroImage}
      width={1600}
      height={840}
      sizes="(min-width: 1024px) 46vw, (min-width: 768px) 608px, calc(100vw - 2rem)"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
