import { useState } from "react";

import Container from "../../ui/Container/Container";

import ProgressHeader from "./ProgressHeader";
import ServiceCards from "./ServiceCards";
import ServiceOptions from "./ServiceOptions";
import EstimateCard from "./EstimateCard";
import QuoteActions from "./QuoteActions";

import { calculateCarpetPrice } from "./priceEngine";
import type { ServiceType } from "./types";

import styles from "./QuoteCalculator.module.css";

export default function QuoteCalculator() {
  const [service, setService] = useState<ServiceType>("carpet");
  const [area, setArea] = useState(30);

  const estimate =
    service === "carpet"
      ? calculateCarpetPrice(area)
      : {
          price: 0,
          formattedPrice: "Contact us",
        };

  return (
    <section id="quote" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <ProgressHeader currentStep={1} />

          <div className={styles.calculatorBody}>
            <ServiceCards
              selected={service}
              onSelect={setService}
            />

            <ServiceOptions
              service={service}
              area={area}
              onAreaChange={setArea}
            />

            <EstimateCard estimate={estimate} />

            <QuoteActions
              service={service}
              area={area}
              estimate={estimate}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}