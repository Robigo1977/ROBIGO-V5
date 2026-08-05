import styles from "./Hero.module.css";

export default function HeroImage() {
  return (
    <img
      src="/images/preview/hero-approved-micro.jpg"
      alt="Friendly ROBIGO technician professionally cleaning a carpet in a Winchester home"
      className={styles.heroImage}
      width={360}
      height={240}
      sizes="100vw"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
