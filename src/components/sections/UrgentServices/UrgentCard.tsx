import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";

import Button from "../../ui/Button/Button";

import type { UrgentService } from "./types";
import styles from "./UrgentServices.module.css";

interface UrgentCardProps {
  service: UrgentService;
}

export default function UrgentCard({ service }: UrgentCardProps) {
  return (
    <motion.article
      className={`${styles.card} ${
        service.primary ? styles.primary : styles.secondary
      }`}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.25 }}
    >
      <div className={styles.badge}>
        <Clock size={15} />
        <span>{service.badge}</span>
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <ul className={styles.features}>
        {service.features.map((feature) => (
          <li key={feature}>
            <CheckCircle size={18} strokeWidth={2.4} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        {service.available ? (
          <Button href={service.href} fullWidth size="lg">
            {service.button}
            <ArrowRight size={18} />
          </Button>
        ) : (
          <button className={styles.disabledButton} disabled>
            {service.button}
          </button>
        )}
      </div>
    </motion.article>
  );
}