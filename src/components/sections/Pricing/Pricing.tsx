import Container from "../../ui/Container/Container";
import { pricing } from "./pricing.data";

import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Honest Pricing</span>

          <h2>Simple, Transparent Prices</h2>

          <p>
            No hidden charges. No call-out fee. Professional results at fair,
            easy-to-understand prices.
          </p>
        </div>

        <div className={styles.grid}>
          {pricing.map((category) => (
            <article key={category.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className={styles.list}>
                {category.items.map((item) => (
                  <div
                    key={`${category.id}-${item.label}`}
                    className={styles.row}
                  >
                    <span className={styles.label}>{item.label}</span>

                    <span className={styles.price}>{item.price}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <p>
            Need a personalised quotation? Send us a WhatsApp message and we'll
            get back to you quickly.
          </p>

          <a
            className={styles.button}
            href="https://wa.me/447777449931"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Free WhatsApp Quote
          </a>
        </div>
      </Container>
    </section>
  );
}