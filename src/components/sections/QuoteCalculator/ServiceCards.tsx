// src/components/sections/QuoteCalculator/ServiceCards.tsx

import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import type {
  ServiceType,
} from "./types";

import {
  services,
} from "./quote.data";

import styles from "./QuoteCalculator.module.css";


interface ServiceCardsProps {

  selected: ServiceType;

  onSelect: (
    service: ServiceType
  ) => void;

}



export default function ServiceCards({
  selected,
  onSelect,
}: ServiceCardsProps) {


  return (

    <div

      className={styles.serviceGrid}

      role="radiogroup"

      aria-label="Choose your cleaning service"

    >


      {services.map((service) => {


        const isSelected =
          selected === service.id;



        return (

          <button

            key={service.id}

            type="button"

            role="radio"

            aria-checked={isSelected}

            aria-pressed={isSelected}

            aria-label={`Choose ${service.title}`}

            onClick={() =>
              onSelect(service.id)
            }

            className={`
              ${styles.serviceCard}
              ${isSelected ? styles.active : ""}
            `}

          >


            <div
              className={styles.serviceCardTop}
            >

              <h3>
                {service.title}
              </h3>



              {isSelected && (

                <CheckCircle2

                  size={22}

                  className={
                    styles.selectedIcon
                  }

                />

              )}

            </div>



            <p>
              {service.description}
            </p>



            <div
              className={styles.selectLabel}
            >

              {isSelected ? (

                <>

                  <CheckCircle2 size={16} />

                  <span>
                    Service Selected
                  </span>

                </>

              ) : (

                <>

                  <span>
                    Choose This Service
                  </span>

                  <ArrowRight size={16} />

                </>

              )}

            </div>


          </button>

        );

      })}


    </div>

  );

}