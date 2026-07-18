import heroImage from "../../../assets/images/hero/hero-robert.webp";
import styles from "./Hero.module.css";

export default function HeroImage() {
  return (
    <img
      src={heroImage}
      alt="ROBIGO professional carpet and upholstery cleaning in Winchester"
      className={styles.heroImage}
      loading="eager"
      decoding="async"
    />
  );
}