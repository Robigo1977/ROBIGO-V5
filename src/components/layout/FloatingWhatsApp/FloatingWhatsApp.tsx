import "./FloatingWhatsApp.css";

import { MessageCircle } from "lucide-react";
import { site } from "../../../config/site";

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={site.whatsappMessage()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get a free quote on WhatsApp"
      title="Get a free quote on WhatsApp"
    >
      <span
        className="floating-whatsapp-icon"
        aria-hidden="true"
      >
        <MessageCircle
          size={22}
          strokeWidth={2.3}
        />
      </span>

      <span className="floating-whatsapp-text">
        <span className="floating-whatsapp-label">
          Free Quote
        </span>

        <strong>Chat on WhatsApp</strong>
      </span>
    </a>
  );
}