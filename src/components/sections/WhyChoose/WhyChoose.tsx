import Container from "../../ui/Container/Container";

import WhyChooseCard from "./WhyChooseCard";
import { whyChooseItems } from "./whyChoose.data";

import styles from "./WhyChoose.module.css";

export default function WhyChoose() {
  const headingId = "why-choose-heading";

  return (
    <section
      id="why-choose"
      className={styles.section}
      aria-labelledby={headingId}
    >
      <Container>
        <header className={styles.header}>
          <h2 id={headingId}>Why Choose ROBIGO?</h2>

          <p>
            Premium cleaning, honest pricing, and friendly local service you can
            rely on across Winchester and the surrounding area.
          </p>
        </header>

        <div
          className={styles.grid}
          role="list"
        >
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