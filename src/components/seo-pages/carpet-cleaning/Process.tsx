import Container from "../../ui/Container";

import styles from "./CarpetCleaningPage.module.css";

const steps = [
  {
    number: "01",
    title: "Inspection",
    text: "Every carpet is assessed before cleaning so we can identify fibres, stains and the most effective cleaning method.",
  },
  {
    number: "02",
    title: "Pre-Treatment",
    text: "Traffic lanes and visible stains receive specialist pre-treatment to loosen embedded dirt before extraction.",
  },
  {
    number: "03",
    title: "Deep Extraction",
    text: "Professional hot water extraction removes dirt, allergens and odours from deep inside the carpet pile.",
  },
  {
    number: "04",
    title: "Final Check",
    text: "We inspect the finished result together, provide after-care advice and ensure you are completely satisfied.",
  },
];

export default function Process() {
  return (
    <section className={`${styles.section} ${styles.alternate}`}>
      <Container>
        <header className={styles.sectionHeader}>
          <h2>Our Professional Cleaning Process</h2>

          <p>
            A proven step-by-step system designed to achieve outstanding
            results while protecting your carpets.
          </p>
        </header>

        <div className={styles.processGrid}>
          {steps.map((step) => (
            <article className={styles.step} key={step.number}>
              <strong className={styles.stepNumber}>{step.number}</strong>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
