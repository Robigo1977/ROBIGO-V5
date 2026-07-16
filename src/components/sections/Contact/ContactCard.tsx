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
    >
      <h3>{method.title}</h3>

      <p>{method.value}</p>
    </a>
  );
}