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
  const message = `Hi ROBIGO,

I'd like a free quote.

Service:
${getServiceName(service)}

Approximate Area:
${area} m²

Estimated Price:
${estimate.formattedPrice}

Please let me know your next available appointment.

Thank you.`;

  return (
    <div className={styles.actions}>
      <div className={styles.actionTrust}>
        ⭐ Free Quote &nbsp;•&nbsp; 🚐 No Call-Out Charge &nbsp;•&nbsp; 📅 7 Days a Week
      </div>

      <Button
        href={site.whatsappMessage(message)}
        target="_blank"
        rel="noopener noreferrer"
        fullWidth
      >
        📲 Get My Free Quote on WhatsApp
      </Button>

      <Button
        href={site.whatsappMessage()}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        fullWidth
      >
        💬 Ask a Question First
      </Button>

      <p className={styles.responsePromise}>
        We usually reply the same day and always confirm your final price before any cleaning begins.
      </p>
    </div>
  );
}