import styles from "./Hero.module.css";

export default function HeroImage() {
  return (
    <img
      src="/images/preview/hero.svg"
      alt="Professional carpet cleaning in a premium Winchester living room"
      className={styles.heroImage}
      width={1400}
      height={788}
      sizes="100vw"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
