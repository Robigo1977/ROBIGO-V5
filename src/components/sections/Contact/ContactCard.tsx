import styles from "./Contact.module.css";
import type { ContactMethod } from "./types";

interface ContactCardProps {
  method: ContactMethod;
}

export default function ContactCard({
  method,
}: ContactCardProps) {
  return (
    <a
      href={method.href}
      className={styles.card}
      aria-label={`${method.title}: ${method.value}`}
    >
      <div className={styles.cardContent}>
        <h3>{method.title}</h3>

        <p>{method.value}</p>
      </div>

      <span className={styles.cardAction}>
        Contact Now →
      </span>
    </a>
  );
}