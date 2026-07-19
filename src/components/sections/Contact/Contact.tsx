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
            FREE QUOTE • SAME-DAY RESPONSE
          </span>

          <h2 id="contact-title">
            Get Your Free Cleaning Quote
          </h2>

          <p>
            Send us a few photos on WhatsApp for a fast, no-obligation quote.
            Prefer to call or email? That's absolutely fine too. We proudly
            serve Winchester and the surrounding areas, with no call-out charge.
          </p>
        </header>

        <div
          className={styles.grid}
          role="list"
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