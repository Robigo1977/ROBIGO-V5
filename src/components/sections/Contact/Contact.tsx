import Container from "../../ui/Container/Container";

import ContactCard from "./ContactCard";
import { contactMethods } from "./contact.data";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <Container>
        <header className={styles.header}>
          <span className={styles.badge}>
            FREE QUOTE • NO CALL-OUT CHARGE
          </span>

          <h2 id="contact-title">
            Ready for a Cleaner, Fresher Home?
          </h2>

          <p>
            Getting a quote is quick and easy. Send us a few photos on WhatsApp
            and we'll provide a free, no-obligation estimate. If you prefer,
            you can also call or email us. We proudly serve Winchester and the
            surrounding areas, seven days a week.
          </p>
        </header>

        <div
          className={styles.grid}
          role="list"
          aria-label="Contact methods"
        >
          {contactMethods.map((method) => (
            <ContactCard
              key={method.id}
              method={method}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}