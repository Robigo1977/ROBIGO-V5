import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import Container from "../../ui/Container/Container";

import ProgressHeader from "./ProgressHeader";
import ServiceCards from "./ServiceCards";
import ServiceOptions from "./ServiceOptions";
import EstimateCard from "./EstimateCard";
import QuoteActions from "./QuoteActions";

import {
  calculateCarpetPrice,
  calculateSteamPrice,
} from "./priceEngine";

import type { ServiceType } from "./types";

import { fadeUp } from "../../../motion/variants";
import { viewport } from "../../../motion/viewport";

import styles from "./QuoteCalculator.module.css";

export default function QuoteCalculator() {
  const [service, setService] = useState<ServiceType>("carpet");
  const [area, setArea] = useState(30);

  const currentStep: 1 | 2 | 3 =
    service === "carpet" || service === "steam"
      ? 2
      : 1;

  const estimate = useMemo(() => {
    switch (service) {
      case "carpet":
        return calculateCarpetPrice(area);

      case "steam":
        return calculateSteamPrice(area);

      default:
        return {
          price: 0,
          formattedPrice: "Contact us",
        };
    }
  }, [service, area]);

  return (
    <section
      id="quote"
      className={styles.section}
      aria-labelledby="quote-heading"
    >
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <ProgressHeader
            currentStep={currentStep}
            id="quote-heading"
          />

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
        </motion.div>
      </Container>
    </section>
  );
}