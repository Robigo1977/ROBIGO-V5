import Button from "../../ui/Button/Button";
import { site } from "../../../config/site";

import type { ServiceType } from "./types";

import styles from "./QuoteCalculator.module.css";

interface QuoteActionsProps {
  service: ServiceType;
  area: number;
  estimate: {
    price: number;
    formattedPrice: string;
  };
}

function getServiceName(service: ServiceType): string {
  switch (service) {
    case "carpet":
      return "Carpet Cleaning";

    case "upholstery":
      return "Upholstery Cleaning";

    case "mattress":
      return "Mattress Cleaning";

    case "steam":
      return "Chemical-Free Steam Cleaning";

    default:
      return "Cleaning Service";
  }
}

export default function QuoteActions({
  service,
  area,
  estimate,
}: QuoteActionsProps) {
  const serviceName = getServiceName(service);

  const message = [
    "Hi ROBIGO,",
    "",
    "I'd like a free quote.",
    "",
    "Service:",
    serviceName,
    "",
    "Approximate Area:",
    `${area} m²`,
    "",
    "Estimated Price:",
    estimate.formattedPrice,
    "",
    "Please let me know your next available appointment.",
    "",
    "Thank you.",
  ].join("\n");

  return (
    <div
      className={styles.actions}
      aria-label="Quote actions"
    >
      <div className={styles.actionTrust}>
        ⭐ Rated 5★ • 🚐 No Call-Out Charge • 📅 Available 7 Days a Week
      </div>

      <Button
        href={site.whatsappMessage(message)}
        target="_blank"
        rel="noopener noreferrer"
        fullWidth
        aria-label={`Request a WhatsApp quote for ${serviceName}`}
      >
        📲 Get My Free WhatsApp Quote
      </Button>

      <Button
        href={site.whatsappMessage()}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        fullWidth
        aria-label="Ask a quick question on WhatsApp"
      >
        💬 Ask a Quick Question
      </Button>

      <p className={styles.responsePromise}>
        Usually replied to the same day. Your final price is always confirmed
        before any work begins.
      </p>
    </div>
  );
}