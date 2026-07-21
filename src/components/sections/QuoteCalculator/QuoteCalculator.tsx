// src/components/sections/QuoteCalculator/QuoteCalculator.tsx

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import Container from "../../ui/Container/Container";

import ProgressHeader from "./ProgressHeader";
import ServiceCards from "./ServiceCards";
import ServiceOptions from "./ServiceOptions";
import AdditionalServices from "./AdditionalServices";
import EstimateCard from "./EstimateCard";
import QuoteActions from "./QuoteActions";

import {
  calculateQuoteResult,
} from "./priceEngine";

import type {
  QuoteItem,
  ServiceType,
} from "./types";

import {
  fadeUp,
} from "../../../motion/variants";

import {
  viewport,
} from "../../../motion/viewport";

import styles from "./QuoteCalculator.module.css";



export default function QuoteCalculator() {


  const [
    service,
    setService,
  ] = useState<ServiceType>("carpet");



  const [
    area,
    setArea,
  ] = useState(20);



  const [
    upholsteryItem,
    setUpholsteryItem,
  ] = useState<QuoteItem["item"]>();



  const [
    mattressSize,
    setMattressSize,
  ] = useState<QuoteItem["mattressSize"]>();



  const [
    rugSize,
    setRugSize,
  ] = useState<QuoteItem["rugSize"]>();



  const [
    additionalItems,
    setAdditionalItems,
  ] = useState<QuoteItem[]>([]);




  const addAdditionalItem = (
    item: QuoteItem
  ) => {

    setAdditionalItems(
      (current) => [
        ...current,
        item,
      ]
    );

  };




  const removeAdditionalItem = (
    index: number
  ) => {

    setAdditionalItems(
      (current) =>
        current.filter(
          (_, itemIndex) =>
            itemIndex !== index
        )
    );

  };





  const mainItem = useMemo<QuoteItem[]>(() => {


    switch (service) {


      case "carpet":

        return [
          {
            service,
            area,
          },
        ];



      case "steam":

        return [
          {
            service,
            area,
          },
        ];



      case "upholstery":

        return upholsteryItem

          ? [
              {
                service,
                item: upholsteryItem,
                quantity: 1,
              },
            ]

          : [];



      case "mattress":

        return mattressSize

          ? [
              {
                service,
                mattressSize,
                quantity: 1,
              },
            ]

          : [];



      case "rug":

        return rugSize

          ? [
              {
                service,
                rugSize,
                quantity: 1,
              },
            ]

          : [];



      default:

        return [];

    }


  }, [

    service,

    area,

    upholsteryItem,

    mattressSize,

    rugSize,

  ]);






  const items = useMemo<QuoteItem[]>(() => {


    return [

      ...mainItem,

      ...additionalItems,

    ];


  }, [

    mainItem,

    additionalItems,

  ]);






  const estimate = useMemo(() => {


    return calculateQuoteResult(
      items
    );


  }, [

    items,

  ]);






  const currentStep: 1 | 2 | 3 =

    items.length > 0

      ? 3

      : 2;






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



          <ProgressHeader

            currentStep={currentStep}

            id="quote-heading"

          />





          <ServiceCards

            selected={service}

            onSelect={(value) => {


              setService(value);


              setUpholsteryItem(undefined);

              setMattressSize(undefined);

              setRugSize(undefined);


            }}

          />





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

          />





          <AdditionalServices

            items={additionalItems}

            onAdd={addAdditionalItem}

            onRemove={removeAdditionalItem}

          />





          <EstimateCard

            estimate={estimate}

          />





          <QuoteActions

            items={items}

            estimate={estimate}

          />




        </motion.div>


      </Container>


    </section>


  );


}