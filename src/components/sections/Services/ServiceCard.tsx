import { site } from "../../../config/site";
import { pricing } from "../Pricing/pricing.data";

import type { ServiceItem } from "./services.data";
import styles from "./Services.module.css";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const headingId = `service-${service.id}`;
  const servicePricing = pricing.find((category) => category.id === service.id);
  const whatsappMessage = site.whatsappMessage(
    `Hi ROBIGO, I'd like a free quote for ${service.title}.`,
  );

  return (
    <article
      className={`${styles.card} ${service.popular ? styles.featuredCard : ""}`}
      role="listitem"
      aria-labelledby={headingId}
    >
      <div className={styles.cardHeading}>
        <div>
          <h3 id={headingId}>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        {service.popular && (
          <span className={styles.badge}>Most Popular</span>
        )}
        <img
          src={service.image}
          alt={`${service.title} by ROBIGO in Winchester`}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      </div>

      {servicePricing && (
        <details className={styles.priceList}>
          <summary className={styles.priceToggle}>View prices</summary>
          {servicePricing.items.map((item) => (
            <div className={styles.priceItem} key={item.label}>
              <span>{item.label}</span>
              <strong>{item.price}</strong>
            </div>
          ))}
          {servicePricing.note && <p className={styles.priceNote}>{servicePricing.note}</p>}
        </details>
      )}

      <div className={styles.cardActions}>
        <a className={styles.detailsLink} href={service.href}>
          More details
        </a>
        <a
          className={styles.quoteLink}
          href={whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp quote
        </a>
      </div>
    </article>
  );
}
