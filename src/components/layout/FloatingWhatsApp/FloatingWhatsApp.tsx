import "./FloatingWhatsApp.css";

import { site } from "../../../config/site";

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={site.whatsappMessage()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ROBIGO on WhatsApp"
    >
      WhatsApp
    </a>
  );
}