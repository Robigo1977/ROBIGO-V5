import { MessageCircle, Phone } from "lucide-react";

import { site } from "../../../config/site";

import styles from "./Hero.module.css";
import halloween from "./HalloweenHero.module.css";

export default function HeroButtons() {
  return (
    <nav
      className={`${styles.actions} ${halloween.heroActions}`}
      aria-label="Contact ROBIGO"
    >
      <a
        className={`${halloween.contactButton} ${halloween.whatsappButton}`}
        href={site.whatsappMessage()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle aria-hidden="true" />
        <span>
          <strong>WhatsApp Us</strong>
          <small>Send photos for a free quote</small>
        </span>
      </a>

      <a
        className={`${halloween.contactButton} ${halloween.phoneButton}`}
        href={site.tel()}
      >
        <Phone aria-hidden="true" />
        <span>
          <small>Call Robert</small>
          <strong>{site.business.phone}</strong>
        </span>
      </a>
    </nav>
  );
}
