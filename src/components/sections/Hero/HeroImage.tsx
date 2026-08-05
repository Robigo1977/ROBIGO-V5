import styles from "./Hero.module.css";

export default function HeroImage() {
  return (
    <img
      src="/images/preview/hero-approved.jpg"
      alt="Professional carpet cleaning in a premium Winchester living room"
      className={styles.heroImage}
      width={280}
      height={158}
      sizes="100vw"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
