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
  const message = `Hi ROBIGO,

I'm interested in your ${service.title} service.

Could you please send me a free quotation and let me know your next available appointment?

Thank you.`;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {service.popular && (
          <span className={styles.badge}>
            Most Popular
          </span>
        )}

        <img
          src={service.image}
          alt={service.title}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.content}>
        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <ul className={styles.features}>
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <Button
          href={site.whatsappMessage(message)}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          aria-label={`Get a free ${service.title} quote`}
        >
          {site.cta.primary}
        </Button>
      </div>
    </article>
  );
}