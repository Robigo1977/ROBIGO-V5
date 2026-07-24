import {
  BadgePoundSterling,
  MapPin,
  PawPrint,
  Sparkles,
} from "lucide-react";

import Container from "../../ui/Container";

import styles from "./CarpetCleaningPage.module.css";

const benefits = [
  {
    title: "Deep Cleaning",
    text: "Professional hot water extraction removes embedded dirt, allergens and everyday grime from deep within the carpet fibres.",
    icon: Sparkles,
  },
  {
    title: "Family & Pet Friendly",
    text: "Ideal for homes with children and pets, helping create a cleaner, fresher indoor environment.",
    icon: PawPrint,
  },
  {
    title: "Honest Pricing",
    text: "Clear fixed pricing, free quotations and no hidden call-out charges anywhere in our Winchester service area.",
    icon: BadgePoundSterling,
  },
  {
    title: "Local Winchester Service",
    text: "Reliable appointments, friendly communication and professional results from a local independent business.",
    icon: MapPin,
  },
];

const steps = [
  {
    number: "01",
    title: "Inspection",
    text: "We assess fibres and stains before choosing the safest cleaning method.",
  },
  {
    number: "02",
    title: "Pre-Treatment",
    text: "Traffic lanes and visible stains are loosened before extraction.",
  },
  {
    number: "03",
    title: "Deep Extraction",
    text: "Professional extraction removes deep dirt, allergens and odours.",
  },
  {
    number: "04",
    title: "Final Check",
    text: "We inspect the result with you and provide simple after-care advice.",
  },
];

export default function Benefits() {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.sectionHeader}>
          <h2>Why Homeowners Choose ROBIGO</h2>
          <p>
            Outstanding results and an easy, stress-free experience from
            quotation to completion.
          </p>
        </header>

        <div className={styles.grid}>
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <article className={styles.card} key={item.title}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

        <header className={`${styles.sectionHeader} ${styles.processHeader}`}>
          <h2>Our Professional Cleaning Process</h2>
          <p>Four careful steps for a cleaner, fresher carpet.</p>
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
