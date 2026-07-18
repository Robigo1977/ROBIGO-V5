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
      aria-label="Chat with ROBIGO on WhatsApp"
    >
      <MessageCircle size={22} strokeWidth={2.3} />

      <div className="floating-whatsapp-text">
        <span className="floating-whatsapp-label">
          Need a Quote?
        </span>

        <strong>Chat on WhatsApp</strong>
      </div>
    </a>
  );
}