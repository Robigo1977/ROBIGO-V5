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
    "I'd like a FREE quotation.",
    "",
    `Service: ${serviceName}`,
    `Approximate Area: ${area} m²`,
    `Instant Estimate: ${estimate.formattedPrice}`,
    "",
    "Please let me know:",
    "• Your next available appointment",
    "• The expected drying time (if applicable)",
    "• Whether you need any photos before providing the final quote",
    "",
    "Thank you!",
  ].join("\n");

  return (
    <div
      className={styles.actions}
      aria-label="Quote actions"
    >
      <div className={styles.actionTrust}>
        🚐 No Call-Out Charge • ⭐ Fully Insured • 📅 Available 7 Days a Week
      </div>

      <Button
        href={site.whatsappMessage(message)}
        target="_blank"
        rel="noopener noreferrer"
        fullWidth
        aria-label={`Request a free WhatsApp quote for ${serviceName}`}
      >
        📲 Get My Free WhatsApp Quote
      </Button>

      <Button
        href={site.whatsappMessage()}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        fullWidth
        aria-label="Ask a question on WhatsApp"
      >
        💬 Ask a Quick Question
      </Button>

      <p className={styles.responsePromise}>
        We usually reply the same day. Your final quotation is always confirmed
        before any cleaning begins, so you'll never face unexpected charges.
      </p>
    </div>
  );
}