import {
  ShieldCheck,
  CalendarDays,
  MessageCircle,
  BadgePoundSterling,
} from "lucide-react";

import Container from "../../ui/Container/Container";
import Section from "../../ui/Section/Section";

import UrgentCard from "./UrgentCard";
import { urgentServices } from "./urgentServices.data";

import styles from "./UrgentServices.module.css";

export default function UrgentServices() {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>PRIORITY BOOKINGS</span>

          <h2>Need Help Today?</h2>

          <p className={styles.subtitle}>
            Fast, flexible appointments across Winchester. Whether it's an
            emergency spill or you're getting ready for guests, we're here to
            help.
          </p>
        </div>

        <div className={styles.grid}>
          {urgentServices.map((service) => (
            <UrgentCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        <div className={styles.trustRow}>
          <div className={styles.trustItem}>
            <ShieldCheck size={18} />
            <span>Fully Insured</span>
          </div>

          <div className={styles.trustItem}>
            <BadgePoundSterling size={18} />
            <span>No Hidden Charges</span>
          </div>

          <div className={styles.trustItem}>
            <CalendarDays size={18} />
            <span>7 Days a Week</span>
          </div>

          <div className={styles.trustItem}>
            <MessageCircle size={18} />
            <span>Instant WhatsApp Quotes</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}