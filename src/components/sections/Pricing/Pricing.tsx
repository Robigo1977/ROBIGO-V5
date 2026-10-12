import Container from "../../ui/Container/Container";
import { site } from "../../../config/site";
import { pricing } from "./pricing.data";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className={styles.section}
      aria-labelledby="pricing-heading"
    >
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>SIMPLE, CLEAR PRICES</span>
          <h2 id="pricing-heading">Cleaning Prices in Winchester</h2>
          <p>
            Easy-to-understand prices for carpet cleaning, sofa cleaning, rug
            cleaning, mattress cleaning, hard-floor steam cleaning and oven
            cleaning in Winchester. Minimum total booking £50. No call-out
            charge and no hidden fees.
          </p>
        </div>

        <div className={styles.grid}>
          {pricing.map((category) => (
            <article key={category.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon} aria-hidden="true">
                  {category.icon}
                </span>
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

              {category.note && <p className={styles.note}>{category.note}</p>}
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <p>
            Minimum total booking is £50. Call-out is free. Not sure which
            price applies? Send Robert a photo on WhatsApp for a fast, free
            quote.
          </p>

          <a
            className={styles.button}
            href={site.whatsappMessage()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask Robert on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
