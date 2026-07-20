import styles from "./Contact.module.css";
import type { ContactMethod } from "./types";

interface ContactCardProps {
  method: ContactMethod;
}

export default function ContactCard({
  method,
}: ContactCardProps) {
  const isExternal = method.href.startsWith("http");

  return (
    <a
      href={method.href}
      className={styles.card}
      aria-label={`${method.title}: ${method.value}`}
      {...(isExternal
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
    >
      <div className={styles.cardContent}>
        <h3>{method.title}</h3>

        <p>{method.value}</p>
      </div>

      <span
        className={styles.cardAction}
        aria-hidden="true"
      >
        Contact Now →
      </span>
    </a>
  );
}