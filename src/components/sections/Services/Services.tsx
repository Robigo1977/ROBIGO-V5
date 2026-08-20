// src/components/sections/Services/Services.tsx

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
        title="Professional Cleaning Services & Prices in Winchester"
        description="Choose the service you need and see the starting price immediately. Clear pricing, no call-out charges and friendly local service across Winchester and surrounding areas."
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
