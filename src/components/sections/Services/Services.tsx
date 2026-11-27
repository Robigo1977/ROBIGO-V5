import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import { pricing } from "../Pricing/pricing.data";

import ServiceCard from "./ServiceCard";
import { services } from "./services.data";
import styles from "./Services.module.css";

export default function Services() {
  const extras = pricing.find((category) => category.id === "extras");

  return (
    <Section id="services" className={styles.section} background="default">
      <SectionHeader
        title="Our Cleaning Services in Winchester"
        description="Choose a service, view prices or request a free quote."
      />

      <div className={styles.grid} role="list" aria-label="Professional cleaning services in Winchester">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {extras && (
        <details className={styles.extras}>
          <summary className={styles.priceToggle}>Optional extras</summary>
          <div className={styles.extrasGrid}>
            {extras.items.map((item) => (
              <div className={styles.extraItem} key={item.label}>
                <span>{item.label}</span>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </details>
      )}

      <p className={styles.minimum}>£50 minimum booking · No Call-Out Charge</p>
    </Section>
  );
}
