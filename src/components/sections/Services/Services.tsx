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
        description="Choose a service and see the price directly underneath. Upholstery cleaning is one of our most requested services."
      />

      <div className={styles.grid} role="list" aria-label="Professional cleaning services in Winchester">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {extras && (
        <div className={styles.extras} aria-label="Optional cleaning extras">
          <h3>Optional Extras</h3>
          <div className={styles.extrasGrid}>
            {extras.items.map((item) => (
              <div className={styles.extraItem} key={item.label}>
                <span>{item.label}</span>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className={styles.minimum}>🎃 £50 minimum booking · No Call-Out Charge</p>
    </Section>
  );
}
