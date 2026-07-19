import Button from "../../ui/Button/Button";
import { site } from "../../../config/site";

import type { ServiceItem } from "./services.data";
import styles from "./Services.module.css";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  const headingId = `service-${service.id}`;

  const whatsappMessage = site.whatsappMessage(`Hi ROBIGO,

I'm interested in your ${service.title} service.

Could you please send me a free quotation and let me know your next available appointment?

Thank you.`);

  return (
    <article
      className={styles.card}
      role="listitem"
      aria-labelledby={headingId}
    >
      <div className={styles.imageWrapper}>
        {service.popular && (
          <span
            className={styles.badge}
            aria-label="Most popular service"
          >
            Most Popular
          </span>
        )}

        <img
          src={service.image}
          alt={service.title}
          className={styles.image}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </div>

      <div className={styles.content}>
        <h3 id={headingId}>{service.title}</h3>

        <p>{service.description}</p>

        <ul className={styles.features}>
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <Button
          href={whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          aria-label={`Get a free quote for ${service.title}`}
        >
          Get My Free Quote
        </Button>
      </div>
    </article>
  );
}