import Container from "../../ui/Container/Container";
import { site } from "../../../config/site";
import { pricing } from "./pricing.data";
import styles from "./Pricing.module.css";

interface PricingProps {
  compact?: boolean;
}

export default function Pricing({ compact = false }: PricingProps) {
  return (
    <section
      id="pricing"
      className={`${styles.section} ${compact ? styles.compact : ""}`}
      aria-labelledby="pricing-heading"
    >
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>TRANSPARENT CLEANING PRICES</span>
          <h2 id="pricing-heading">
            {compact
              ? "Clear prices from the start"
              : "Professional Cleaning Prices in Winchester"}
          </h2>
          <p>
            {compact
              ? "See typical starting prices before you request a quote. No call-out fee and no hidden charges."
              : "Clear carpet, upholstery, mattress and steam cleaning prices with no hidden charges and no call-out fees. Use our instant quote calculator or contact ROBIGO on WhatsApp for a personalised quotation."}
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
                {(compact ? category.items.slice(0, 2) : category.items).map(
                  (item) => (
                    <div
                      key={`${category.id}-${item.label}`}
                      className={styles.row}
                    >
                      <span className={styles.label}>{item.label}</span>
                      <span className={styles.price}>{item.price}</span>
                    </div>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <p>
            {compact
              ? "Need every price? View the full price list or calculate a tailored estimate."
              : "Need a personalised quotation? Send ROBIGO a WhatsApp message and receive a clear, no-obligation estimate."}
          </p>

          {compact && (
            <a className={styles.secondaryLink} href="/more-about-robigo#pricing">
              View full price list
            </a>
          )}

          <a
            className={styles.button}
            href={compact ? "/instant-quote" : site.whatsappMessage()}
            target={compact ? undefined : "_blank"}
            rel={compact ? undefined : "noopener noreferrer"}
          >
            {compact ? "Calculate My Price" : "Get a Free WhatsApp Quote"}
          </a>
        </div>
      </Container>
    </section>
  );
}
