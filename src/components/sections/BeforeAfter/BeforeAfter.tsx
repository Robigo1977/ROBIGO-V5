import { motion } from "framer-motion";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";

import BeforeAfterCard from "./BeforeAfterCard";
import { beforeAfterItems } from "./beforeAfter.data";

import { site } from "../../../config/site";

import styles from "./BeforeAfter.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

interface BeforeAfterProps {
  compact?: boolean;
}

export default function BeforeAfter({ compact = false }: BeforeAfterProps) {
  const featuredProject =
    beforeAfterItems.find((item) => item.featured) ?? beforeAfterItems[0];

  const galleryItems = beforeAfterItems.filter(
    (item) => item.id !== featuredProject.id,
  );

  return (
    <section
      id="before-after"
      className={`${styles.section} ${compact ? styles.compactSection : ""}`}
      aria-labelledby="before-after-heading"
    >
      <Container>
        <motion.header className={styles.header} {...fadeUp}>
          <span className={styles.badge}>WINCHESTER CLEANING RESULTS</span>
          <h2 id="before-after-heading">
            {compact
              ? "See the ROBIGO difference"
              : "Professional Carpet & Upholstery Cleaning Results in Winchester"}
          </h2>
          <p>
            {compact
              ? "One real example of what professional cleaning can achieve."
              : "See the difference professional cleaning can make in your home. ROBIGO restores carpets, sofas, mattresses and fabrics using professional equipment and careful attention to detail."}
          </p>
        </motion.header>

        <motion.section
          className={`${styles.featured} ${compact ? styles.compactFeatured : ""}`}
          aria-labelledby="featured-project-heading"
          {...fadeUp}
        >
          <BeforeAfterCard item={featuredProject} />

          <div className={styles.featuredContent}>
            <span className={styles.category}>Featured Project</span>
            <h3 id="featured-project-heading">{featuredProject.title}</h3>
            <p className={styles.meta}>
              <strong>{featuredProject.location}</strong>
              {" • "}
              {featuredProject.service}
            </p>
            <p>{featuredProject.description}</p>

            {!compact && <p className={styles.story}>{featuredProject.story}</p>}

            {compact && (
              <a className={styles.resultsLink} href="/more-about-robigo#before-after">
                See all before & after results
              </a>
            )}
          </div>
        </motion.section>

        {!compact && galleryItems.length > 0 && (
          <motion.section
            className={styles.gallery}
            role="list"
            {...fadeUp}
          >
            {galleryItems.map((item) => (
              <div key={item.id} role="listitem">
                <BeforeAfterCard item={item} />
              </div>
            ))}
          </motion.section>
        )}

        {!compact && (
          <motion.footer className={styles.sectionFooter} {...fadeUp}>
            <h3>Imagine what we could do in your home.</h3>
            <p>
              Send us a few photos on WhatsApp and receive a fast, free
              quotation with absolutely no obligation.
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
        )}
      </Container>
    </section>
  );
}
