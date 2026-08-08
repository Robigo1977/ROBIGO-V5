import heroImage from "../../../assets/optimized/approved/hero-mobile-final-2026.jpg";
import styles from "./Hero.module.css";

export default function HeroImage() {
  return (
    <img
      src={heroImage}
      alt="Professional carpet cleaning in a premium Winchester living room"
      className={styles.heroImage}
      width={900}
      height={506}
      sizes="100vw"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
