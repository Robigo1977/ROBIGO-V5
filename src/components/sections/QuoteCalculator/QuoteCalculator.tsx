import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../../ui/Container/Container";
import ProgressHeader from "./ProgressHeader";
import ServiceCards from "./ServiceCards";
import ServiceOptions from "./ServiceOptions";
import AdditionalServices from "./AdditionalServices";
import EstimateCard from "./EstimateCard";
import QuoteActions from "./QuoteActions";
import { calculateQuoteResult } from "./priceEngine";
import type { QuoteExtras, QuoteItem, ServiceType } from "./types";
import { fadeUp } from "../../../motion/variants";
import { viewport } from "../../../motion/viewport";
import styles from "./QuoteCalculator.module.css";

const INITIAL_EXTRAS: QuoteExtras = {
  petOdour: false,
  heavyStains: false,
  priority24: false,
  emergency: false,
};

export default function QuoteCalculator() {
  const [service, setService] = useState<ServiceType>("carpet");
  const [area, setArea] = useState(20);
  const [upholsteryItem, setUpholsteryItem] =
    useState<QuoteItem["item"]>("armchair");
  const [mattressSize, setMattressSize] =
    useState<QuoteItem["mattressSize"]>("single");
  const [rugSize, setRugSize] =
    useState<QuoteItem["rugSize"]>("small");
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState<QuoteExtras>(INITIAL_EXTRAS);

  const items = useMemo<QuoteItem[]>(() => {
    if (service === "carpet" || service === "steam") {
      return [{ service, area }];
    }
    if (service === "upholstery" && upholsteryItem) {
      return [{ service, item: upholsteryItem, quantity }];
    }
    if (service === "mattress" && mattressSize) {
      return [{ service, mattressSize, quantity }];
    }
    if (service === "rug" && rugSize) {
      return [{ service, rugSize, quantity }];
    }
    return [];
  }, [service, area, upholsteryItem, mattressSize, rugSize, quantity]);

  const estimate = useMemo(
    () => calculateQuoteResult(items, extras),
    [items, extras],
  );

  const selectService = (value: ServiceType) => {
    setService(value);
    setQuantity(1);
  };

  return (
    <section
      id="quote"
      className={styles.section}
      aria-labelledby="quote-heading"
    >
      <Container>
        <motion.div
          className={styles.calculator}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <ProgressHeader currentStep={3} id="quote-heading" />
          <ServiceCards selected={service} onSelect={selectService} />
          <ServiceOptions
            service={service}
            area={area}
            onAreaChange={setArea}
            upholsteryItem={upholsteryItem}
            onUpholsteryChange={setUpholsteryItem}
            mattressSize={mattressSize}
            onMattressChange={setMattressSize}
            rugSize={rugSize}
            onRugChange={setRugSize}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
          <AdditionalServices extras={extras} onChange={setExtras} />
          <EstimateCard estimate={estimate} />
          <QuoteActions items={items} estimate={estimate} />
        </motion.div>
      </Container>
    </section>
  );
}
