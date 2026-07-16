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
          href={site.whatsappMessage(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
        >
          {service.cta}
        </Button>
      </div>
    </article>
  );
}