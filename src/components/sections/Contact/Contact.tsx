import Container from "../../ui/Container/Container";

import ContactCard from "./ContactCard";
import { contactMethods } from "./contact.data";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.section}
    >
      <Container>
        <div className={styles.header}>
          <h2>Get Your Free Quote</h2>

          <p>
            The fastest way to get a quotation is to send us a WhatsApp
            message with a few photos. We'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className={styles.grid}>
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