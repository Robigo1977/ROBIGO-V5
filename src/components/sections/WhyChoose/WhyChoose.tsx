import Container from "../../ui/Container/Container";

import WhyChooseCard from "./WhyChooseCard";
import { whyChooseItems } from "./whyChoose.data";

import styles from "./WhyChoose.module.css";

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className={styles.section}
    >
      <Container>
        <div className={styles.header}>
          <h2>Why Choose ROBIGO?</h2>

          <p>
            Premium cleaning, honest pricing and friendly local service
            you can rely on.
          </p>
        </div>

        <div className={styles.grid}>
          {whyChooseItems.map((item) => (
            <WhyChooseCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}