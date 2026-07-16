import Container from "../../ui/Container/Container";

import ServiceCard from "./ServiceCard";
import { services } from "./services.data";

import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>Our Professional Cleaning Services</h2>

          <p>
            Professional cleaning solutions designed to leave your home
            cleaner, healthier and fresher.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}