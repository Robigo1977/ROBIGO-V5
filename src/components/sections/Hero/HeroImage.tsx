import styles from "./Hero.module.css";

import heroImage from "../../../assets/images/hero/hero-robert.webp";

export default function HeroImage() {
  return (
    <div className={styles.imageWrapper}>
      <img
        src={heroImage}
        alt="ROBIGO professional carpet cleaning"
        className={styles.image}
        loading="eager"
      />
    </div>
  );
}