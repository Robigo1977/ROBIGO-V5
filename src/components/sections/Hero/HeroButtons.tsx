import { MessageCircle, Phone } from "lucide-react";

import { site } from "../../../config/site";
import styles from "./Hero.module.css";

export default function HeroButtons() {
  return (
    <div className={styles.contactButtons} aria-label="Contact ROBIGO">
      <a
        className={`${styles.contactButton} ${styles.whatsappButton}`}
        href={site.whatsappMessage()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ROBIGO on ${site.business.phone}`}
      >
        <MessageCircle aria-hidden="true" />
        <span>
          <small>WhatsApp</small>
          <strong>{site.business.phone}</strong>
        </span>
      </a>

      <a
        className={`${styles.contactButton} ${styles.phoneButton}`}
        href={site.tel()}
        aria-label={`Call ROBIGO on ${site.business.phone}`}
      >
        <Phone aria-hidden="true" />
        <span>
          <small>Call Robert</small>
          <strong>{site.business.phone}</strong>
        </span>
      </a>
    </div>
  );
}
