import { motion } from "framer-motion";

import Container from "../../ui/Container/Container";

import UrgentCard from "./UrgentCard";
import { urgentServices } from "./urgentServices.data";

import styles from "./UrgentServices.module.css";

export default function UrgentServices() {
  return (
    <section
      id="urgent-services"
      className={styles.section}
    >
      <Container>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>
            ⚡ FAST RESPONSE
          </span>

          <h2>Need Help Fast?</h2>

          <p>
            Life happens. Whether it's a pet accident, spilled coffee,
            red wine, muddy footprints or unexpected guests, we're here
            to help when time matters most.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {urgentServices.map((item) => (
            <UrgentCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}