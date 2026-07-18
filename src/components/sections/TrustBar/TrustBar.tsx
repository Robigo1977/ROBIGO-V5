import { motion } from "framer-motion";

import Container from "../../ui/Container/Container";
import { trustItems } from "./trustBar.data";

import { fadeUp, staggerContainer } from "../../../motion/variants";
import { viewport } from "../../../motion/viewport";

import styles from "./TrustBar.module.css";

export default function TrustBar() {
  return (
    <section className={styles.bar}>
      <Container>
        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {trustItems.map(({ icon: Icon, title }) => (
            <motion.div
              key={title}
              className={styles.item}
              variants={fadeUp}
            >
              <Icon size={20} />
              <span>{title}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}