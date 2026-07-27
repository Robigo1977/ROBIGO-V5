import { Calculator, Check, MessageCircle } from "lucide-react";

import Container from "../../ui/Container";
import Button from "../../ui/Button";
import { site } from "../../../config/site";

import styles from "./QuoteTeaser.module.css";

export default function QuoteTeaser() {
  return (
    <section
      id="quote"
      className={styles.section}
      aria-labelledby="quote-teaser-heading"
    >
      <Container>
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">
            <Calculator size={28} />
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>FREE INSTANT ESTIMATE</span>
            <h2 id="quote-teaser-heading">Calculate your cleaning price</h2>
            <p>
              Choose your service and a few simple details to see an immediate,
              no-obligation estimate.
            </p>

            <ul className={styles.benefits}>
              <li>
                <Check size={18} /> Takes about 60 seconds
              </li>
              <li>
                <Check size={18} /> Clear price breakdown
              </li>
              <li>
                <Check size={18} /> No personal details required
              </li>
            </ul>
          </div>

          <div className={styles.actions}>
            <Button href="/instant-quote" size="lg" fullWidth>
              Open Instant Calculator
            </Button>
            <a
              className={styles.whatsapp}
              href={site.whatsappMessage()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Prefer WhatsApp?
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
