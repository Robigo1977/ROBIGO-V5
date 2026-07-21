// src/components/sections/QuoteCalculator/priceEngine.ts

import type {
  EstimateResult,
  QuoteBreakdownItem,
  QuoteItem,
  QuoteResult,
} from "./types";

import {
  calculateCarpetPrice,
  calculateSteamPrice,
  calculateUpholsteryItem,
  calculateMattressItem,
  calculateRugItem,
} from "./quoteEngine";


/* -------------------------------------------------------------------------- */
/* FORMATTING                                                                 */
/* -------------------------------------------------------------------------- */

export function formatPrice(
  price: number
): string {

  return new Intl.NumberFormat(
    "en-GB",
    {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }
  ).format(price);

}



/* -------------------------------------------------------------------------- */
/* DESCRIPTION                                                                */
/* -------------------------------------------------------------------------- */

function getDescription(
  item: QuoteItem
): string {

  switch (item.service) {

    case "carpet":
      return `Carpet Cleaning ${item.area ?? 0}m²`;


    case "steam":
      return `Chemical-Free Steam Cleaning ${item.area ?? 0}m²`;


    case "upholstery":

      switch (item.item) {

        case "armchair":
          return "Armchair Cleaning";

        case "diningChair":
          return "Dining Chair Cleaning";

        case "sofa2":
          return "2 Seater Sofa Cleaning";

        case "sofa3":
          return "3 Seater Sofa Cleaning";

        case "sofa4":
          return "4 Seater Sofa Cleaning";

        case "cornerSofa":
          return "Corner Sofa Cleaning";

        default:
          return "Upholstery Cleaning";
      }


    case "mattress":
      return `${item.mattressSize ?? "Mattress"} Mattress Cleaning`;


    case "rug":
      return `${item.rugSize ?? "Rug"} Cleaning`;


    default:
      return "Cleaning Service";

  }

}



/* -------------------------------------------------------------------------- */
/* PREMIUM QUOTE RESULT                                                       */
/* -------------------------------------------------------------------------- */

export function calculateQuoteResult(
  items: QuoteItem[]
): QuoteResult {

  let total = 0;


  const breakdown: QuoteBreakdownItem[] = [];



  items.forEach((item) => {

    let price = 0;



    switch (item.service) {


      case "carpet":

        if (item.area) {
          price =
            calculateCarpetPrice(
              item.area
            ).price;
        }

        break;



      case "steam":

        if (item.area) {
          price =
            calculateSteamPrice(
              item.area
            ).price;
        }

        break;



      case "upholstery":

        if (item.item) {
          price =
            calculateUpholsteryItem(
              item.item,
              item.quantity ?? 1
            );
        }

        break;



      case "mattress":

        if (item.mattressSize) {
          price =
            calculateMattressItem(
              item.mattressSize,
              item.quantity ?? 1
            );
        }

        break;



      case "rug":

        if (item.rugSize) {
          price =
            calculateRugItem(
              item.rugSize,
              item.quantity ?? 1
            );
        }

        break;

    }



    if (price > 0) {

      total += price;


      breakdown.push({

        service: item.service,

        description:
          getDescription(item),

        quantity:
          item.quantity ?? 1,

        price,

      });

    }

  });



  return {

    total,

    formattedTotal:
      formatPrice(total),


    breakdown,


    extras: {

      petOdour: 0,

      heavyStains: 0,

      priority24: 0,

    },


    minimumChargeApplied:
      false,

  };

}



/* -------------------------------------------------------------------------- */
/* CURRENT UI COMPATIBILITY                                                   */
/* -------------------------------------------------------------------------- */

export function calculateQuoteItems(
  items: QuoteItem[]
): EstimateResult {

  const result =
    calculateQuoteResult(items);



  return {

    price:
      result.total,


    formattedPrice:
      result.formattedTotal,

  };

}