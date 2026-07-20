import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";

import ServiceCard from "./ServiceCard";
import { services } from "./services.data";

import styles from "./Services.module.css";

export default function Services() {
  if (services.length === 0) {
    return null;
  }

  return (
    <Section
      id="services"
      className={styles.section}
      background="default"
    >
      <SectionHeader
        badge="Professional Cleaning Services"
        title="Our Professional Cleaning Services"
        description="Professional cleaning solutions designed to leave your home cleaner, healthier and fresher."
      />

      <div
        className={styles.grid}
        role="list"
        aria-label="Professional cleaning services"
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </Section>
  );
}