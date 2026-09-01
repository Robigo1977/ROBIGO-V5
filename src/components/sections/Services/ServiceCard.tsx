import Button from "../../ui/Button/Button";
import { site } from "../../../config/site";
import { pricing } from "../Pricing/pricing.data";

import type { ServiceItem } from "./services.data";
import styles from "./Services.module.css";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const headingId = `service-${service.id}`;
  const servicePricing = pricing.find(
    (category) => category.id === service.id,
  );

  const whatsappMessage = site.whatsappMessage(`Hi ROBIGO,

I'm interested in your ${service.title} service.

Could you please send me a free quotation and let me know your next available appointment?

Thank you.`);

  const emergencyHref = site.whatsappMessage(
    `Hi ROBIGO, I need the earliest available appointment for ${service.title}.`,
  );

  return (
    <article className={styles.card} role="listitem" aria-labelledby={headingId}>
      <div className={styles.imageWrapper}>
        {service.popular && (
          <span className={styles.badge} aria-label="Most popular service">
            Most Popular
          </span>
        )}

        <img
          src={service.image}
          alt={`${service.title} in Winchester - ROBIGO professional cleaning service`}
          className={styles.image}
          loading="eager"
          decoding="async"
          fetchPriority="auto"
        />
      </div>

      <div className={styles.content}>
        <h3 id={headingId}>{service.title}</h3>
        <p className={styles.shortDescription}>{service.description}</p>

        {servicePricing && (
          <details className={styles.priceDropdown}>
            <summary className={styles.priceSummary}>
              <span className={styles.priceSummaryText}>
                <strong>VIEW PRICES</strong>
                <small>Tap here to see exactly how much</small>
              </span>
              <span className={styles.summaryIcon} aria-hidden="true">＋</span>
            </summary>

            <div className={styles.dropdownContent}>
              <ul className={styles.features}>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className={styles.priceList} aria-label={`${service.title} prices`}>
                {servicePricing.items.map((item) => (
                  <div className={styles.priceItem} key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.price}</strong>
                  </div>
                ))}
                {servicePricing.note && (
                  <p className={styles.priceNote}>{servicePricing.note}</p>
                )}
              </div>

              <div className={styles.cardUrgentGrid} aria-label={`${service.title} fast booking options`}>
                <div
                  className={`${styles.cardUrgent} ${styles.cardEmergency}`}
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>EMERGENCY</span>
                  <strong style={{ color: "#ffffff" }}>£50</strong>
                  <p style={{ color: "#ffffff" }}>The earliest available appointment.</p>
                  <a
                    href={emergencyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: "#ffffff", color: "#7f1d1d" }}
                  >
                    Request Emergency Help
                  </a>
                </div>
              </div>
            </div>
          </details>
        )}

        <Button
          href={whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          aria-label={`Get a free ${service.title} quote`}
        >
          Get Free Quote
        </Button>
      </div>
    </article>
  );
}
