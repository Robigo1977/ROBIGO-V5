import Container from "../../ui/Container";
import Button from "../../ui/Button";

import { site } from "../../../config/site";

import styles from "./CarpetCleaningPage.module.css";

export default function CTA() {
  const whatsappLink = site.whatsappMessage(
    "Hi ROBIGO, I would like a free quotation for carpet cleaning."
  );

  return (
    <section
      className={styles.cta}
      aria-labelledby="carpet-cleaning-quote"
    >
      <Container>
        <div className={styles.ctaInner}>
          <p className={styles.ctaEyebrow}>Local, Professional and Reliable</p>

          <h2 className={styles.ctaTitle} id="carpet-cleaning-quote">
            Request Your Free Carpet Cleaning Quote
          </h2>

          <p className={styles.ctaText}>
            Send a few photographs by WhatsApp for a straightforward quotation
            from a real local professional. ROBIGO serves Winchester, Eastleigh,
            Chandler&apos;s Ford, Shawford, Compton, Otterbourne, Twyford,
            King&apos;s Worthy and Hursley.
          </p>

          <Button href={whatsappLink} size="lg">
            Get My Free WhatsApp Quote
          </Button>

          <p className={styles.ctaMeta}>
            Free quotations · No call-out charge within our regular service area
            · Available 7 days a week
          </p>
        </div>
      </Container>
    </section>
  );
}
