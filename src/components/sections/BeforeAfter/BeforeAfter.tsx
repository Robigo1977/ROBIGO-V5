import { motion } from "framer-motion";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";

import BeforeAfterSlider from "./BeforeAfterSlider";
import { beforeAfterItems } from "./beforeAfter.data";

import styles from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      className={styles.section}
    >
      <Container>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>
            REAL RESULTS
          </span>

          <h2>See The Difference Professional Cleaning Makes</h2>

          <p>
            Every carpet, sofa and mattress tells a story.
            Here are just a few examples of the transformation
            our professional cleaning can achieve.
          </p>
        </motion.div>

        <div className={styles.gallery}>
          {beforeAfterItems.map((item) => (
            <article
              key={item.id}
              className={styles.card}
            >
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                title={item.title}
              />

              <div className={styles.content}>
                <h3>{item.title}</h3>

                <p>
                  <strong>{item.location}</strong>
                  {" • "}
                  {item.service}
                </p>
              </div>
            </article>
          ))}
        </div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3>Imagine what we could do in your home.</h3>

          <p>
            Send us a few photos on WhatsApp and receive a
            fast, free quotation with no obligation.
          </p>

          <Button
            href="https://wa.me/447777449931"
            variant="primary"
            size="lg"
          >
            Get My Free Quote
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}