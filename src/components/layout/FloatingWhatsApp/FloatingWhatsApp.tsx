import "./FloatingWhatsApp.css";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../../../config/site";

export default function FloatingWhatsApp() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isBusinessPage =
    pathname === "/business" ||
    pathname === "/commercial-cleaning-winchester" ||
    pathname.startsWith("/business/");
  const [hasPassedHero, setHasPassedHero] = useState(!isBusinessPage);

  useEffect(() => {
    if (!isBusinessPage) {
      setHasPassedHero(true);
      return;
    }

    const updateVisibility = () => {
      setHasPassedHero(window.scrollY > window.innerHeight * 0.72);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, [isBusinessPage]);

  if (isHomePage || !hasPassedHero) {
    return null;
  }

  return (
    <a
      className="floating-whatsapp"
      href={site.whatsappMessage()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ROBIGO"
      title="WhatsApp ROBIGO"
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
        <strong>WhatsApp Us</strong>
      </span>
    </a>
  );
}
