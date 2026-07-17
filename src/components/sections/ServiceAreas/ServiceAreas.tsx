import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import Container from "../../ui/Container/Container";

import styles from "./ServiceAreas.module.css";

const areas = [
  "Winchester",
  "Eastleigh",
  "King's Worthy",
  "Chandler's Ford",
  "Twyford",
  "Shawford",
  "Compton",
  "Hursley",
  "Otterbourne",
];

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
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
            LOCAL SERVICE AREA
          </span>

          <h2>Proudly Serving Winchester & Surrounding Areas</h2>

          <p>
            Professional carpet, upholstery, mattress and steam cleaning
            throughout Winchester and the surrounding communities.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {areas.map((area) => (
            <div
              key={area}
              className={styles.area}
            >
              <MapPin size={18} />

              <span>{area}</span>
            </div>
          ))}
        </div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3>Don't see your town?</h3>

          <p>
            If you're located close to Winchester, just send us a WhatsApp
            message. We'll always do our best to help.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}