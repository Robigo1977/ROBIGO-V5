// src/components/sections/QuoteCalculator/AdditionalServices.tsx

import { useState } from "react";

import type {
  QuoteItem,
} from "./types";

import styles from "./QuoteCalculator.module.css";


interface AdditionalServicesProps {

  items: QuoteItem[];

  onAdd: (
    item: QuoteItem
  ) => void;

  onRemove: (
    index: number
  ) => void;

}



type Category =
  | "upholstery"
  | "mattress"
  | "rug"
  | null;



const upholsteryOptions = [

  {
    label: "Armchair",
    item: "armchair",
  },

  {
    label: "2 Seater Sofa",
    item: "sofa2",
  },

  {
    label: "3 Seater Sofa",
    item: "sofa3",
  },

  {
    label: "4 Seater Sofa",
    item: "sofa4",
  },

  {
    label: "Corner Sofa",
    item: "cornerSofa",
  },

] as const;



const mattressOptions = [

  {
    label: "Single Mattress",
    mattressSize: "single",
  },

  {
    label: "Double Mattress",
    mattressSize: "double",
  },

  {
    label: "King Mattress",
    mattressSize: "king",
  },

  {
    label: "Super King Mattress",
    mattressSize: "superKing",
  },

] as const;



const rugOptions = [

  {
    label: "Small Rug",
    rugSize: "small",
  },

  {
    label: "Medium Rug",
    rugSize: "medium",
  },

  {
    label: "Large Rug",
    rugSize: "large",
  },

  {
    label: "Extra Large Rug",
    rugSize: "extraLarge",
  },

] as const;



export default function AdditionalServices({

  items,

  onAdd,

  onRemove,

}: AdditionalServicesProps) {


  const [
    openCategory,
    setOpenCategory,
  ] = useState<Category>(null);




  const isAdded = (
    item: QuoteItem
  ) => {

    return items.some(
      (current) =>
        JSON.stringify(current) ===
        JSON.stringify(item)
    );

  };




  const toggleItem = (
    item: QuoteItem
  ) => {


    const exists =
      items.findIndex(
        (current) =>
          JSON.stringify(current) ===
          JSON.stringify(item)
      );



    if (exists >= 0) {

      onRemove(exists);

      return;

    }


    onAdd(item);

  };





  return (

    <section

      className={styles.inputGroup}

      aria-label="Additional services"

    >



      <h3 className={styles.sliderLabel}>

        Add Another Service

      </h3>



      <p className={styles.sliderDescription}>

        Add extra cleaning services to your quotation.

      </p>







      <button

        type="button"

        className={styles.serviceCard}

        onClick={() =>
          setOpenCategory(
            openCategory === "upholstery"
              ? null
              : "upholstery"
          )
        }

      >

        🛋 Upholstery Cleaning

        <br />

        <small>
          Sofas, chairs & fabrics
        </small>

      </button>



      {openCategory === "upholstery" && (

        <div className={styles.serviceGrid}>

          {upholsteryOptions.map((option) => {


            const item: QuoteItem = {

              service: "upholstery",

              item: option.item,

              quantity: 1,

            };


            const added =
              isAdded(item);



            return (

              <button

                key={option.item}

                type="button"

                className={`
                  ${styles.serviceCard}
                  ${added ? styles.active : ""}
                `}

                onClick={() =>
                  toggleItem(item)
                }

              >

                {added
                  ? `✓ ${option.label}`
                  : `+ ${option.label}`
                }

              </button>

            );

          })}

        </div>

      )}







      <button

        type="button"

        className={styles.serviceCard}

        onClick={() =>
          setOpenCategory(
            openCategory === "mattress"
              ? null
              : "mattress"
          )
        }

      >

        🛏 Mattress Cleaning

        <br />

        <small>
          Fresh & hygienic sleep
        </small>

      </button>



      {openCategory === "mattress" && (

        <div className={styles.serviceGrid}>

          {mattressOptions.map((option) => {


            const item: QuoteItem = {

              service: "mattress",

              mattressSize:
                option.mattressSize,

              quantity: 1,

            };


            const added =
              isAdded(item);



            return (

              <button

                key={option.mattressSize}

                type="button"

                className={`
                  ${styles.serviceCard}
                  ${added ? styles.active : ""}
                `}

                onClick={() =>
                  toggleItem(item)
                }

              >

                {added
                  ? `✓ ${option.label}`
                  : `+ ${option.label}`
                }

              </button>

            );

          })}

        </div>

      )}







      <button

        type="button"

        className={styles.serviceCard}

        onClick={() =>
          setOpenCategory(
            openCategory === "rug"
              ? null
              : "rug"
          )
        }

      >

        🧺 Rug Cleaning

        <br />

        <small>
          Deep rug cleaning
        </small>

      </button>



      {openCategory === "rug" && (

        <div className={styles.serviceGrid}>

          {rugOptions.map((option) => {


            const item: QuoteItem = {

              service: "rug",

              rugSize:
                option.rugSize,

              quantity: 1,

            };


            const added =
              isAdded(item);



            return (

              <button

                key={option.rugSize}

                type="button"

                className={`
                  ${styles.serviceCard}
                  ${added ? styles.active : ""}
                `}

                onClick={() =>
                  toggleItem(item)
                }

              >

                {added
                  ? `✓ ${option.label}`
                  : `+ ${option.label}`
                }

              </button>

            );

          })}

        </div>

      )}



    </section>

  );

}