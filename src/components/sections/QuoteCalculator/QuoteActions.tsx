// src/components/sections/QuoteCalculator/QuoteActions.tsx

import Button from "../../ui/Button/Button";
import { site } from "../../../config/site";

import type {
  QuoteItem,
  QuoteResult,
} from "./types";

import styles from "./QuoteCalculator.module.css";



interface QuoteActionsProps {

  items: QuoteItem[];

  estimate: QuoteResult;

}





function getServiceDescription(
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







export default function QuoteActions({

  items,

  estimate,

}: QuoteActionsProps) {



  const services = items

    .map(
      (item) =>
        `✓ ${getServiceDescription(item)}`
    )

    .join("\n");






  const message = [


    "Hi ROBIGO,",


    "",


    "I'd like to request my cleaning quotation.",


    "",


    "My cleaning requirements:",


    "",


    services ||

      "I would like advice on the best option.",


    "",


    `Estimated Total: ${estimate.formattedTotal}`,


    "",


    "Please confirm:",


    "• Your next available appointment",


    "• Whether you need any photos",


    "",


    "Thank you!",



  ].join("\n");








  return (


    <div

      className={styles.actions}

      aria-label="Quote actions"

    >





      <div

        className={styles.actionTrust}

      >


        <span>
          ✅ Fully Insured
        </span>


        <span>
          •
        </span>


        <span>
          ✅ No Call-Out Charge
        </span>


        <span>
          •
        </span>


        <span>
          ✅ Free Quotations
        </span>


      </div>








      <Button

        href={site.whatsappMessage(message)}

        target="_blank"

        rel="noopener noreferrer"

        fullWidth

      >

        📱 Send My Quote on WhatsApp

      </Button>







      <p

        className={styles.responsePromise}

      >

        Free quotation • No obligation • Final price confirmed before cleaning.

      </p>








      <Button

        href={site.whatsappMessage()}

        target="_blank"

        rel="noopener noreferrer"

        variant="outline"

        fullWidth

      >

        Ask a Question First

      </Button>







    </div>


  );


}