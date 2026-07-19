import { motion } from "framer-motion";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";

import BeforeAfterSlider from "./BeforeAfterSlider";
import { beforeAfterItems } from "./beforeAfter.data";

import { site } from "../../../config/site";

import styles from "./BeforeAfter.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      className={styles.section}
      aria-labelledby="before-after-heading"
    >
      <Container>
        <motion.header
          className={styles.header}
          {...fadeUp}
        >
          <span className={styles.badge}>
            REAL RESULTS
          </span>

          <h2 id="before-after-heading">
            See the Difference Professional Cleaning Makes
          </h2>

          <p>
            Every carpet, sofa, and mattress tells a story. Here are just a few
            examples of the transformation our professional cleaning can
            achieve.
          </p>
        </motion.header>

        <div
          className={styles.gallery}
          role="list"
        >
          {beforeAfterItems.map((item) => {
            const headingId = `before-after-${item.id}`;

            return (
              <article
                key={item.id}
                className={styles.card}
                role="listitem"
                aria-labelledby={headingId}
              >
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  title={item.title}
                />

                <div className={styles.content}>
                  <h3 id={headingId}>{item.title}</h3>

                  <p>
                    <strong>{item.location}</strong>
                    {" • "}
                    {item.service}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Imagine what we could do in your home.</h3>

          <p>
            Send us a few photos on WhatsApp and receive a fast, free quotation
            with no obligation.
          </p>

          <Button
            href={site.whatsappMessage()}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            aria-label="Request a free quote on WhatsApp"
          >
            Get My Free Quote
          </Button>
        </motion.footer>
      </Container>
    </section>
  );
}