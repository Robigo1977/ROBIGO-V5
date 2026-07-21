// src/components/sections/QuoteCalculator/EstimateCard.tsx

import styles from "./QuoteCalculator.module.css";

import type {
  EstimateResult,
  QuoteResult,
} from "./types";


interface EstimateCardProps {

  estimate:
    | EstimateResult
    | QuoteResult;

}



function isQuoteResult(
  estimate: EstimateResult | QuoteResult
): estimate is QuoteResult {

  return "breakdown" in estimate;

}




export default function EstimateCard({

  estimate,

}: EstimateCardProps) {



  const isDetailed =
    isQuoteResult(estimate);




  const price =
    isDetailed
      ? estimate.total
      : estimate.price;




  const formattedPrice =
    isDetailed
      ? estimate.formattedTotal
      : estimate.formattedPrice;




  const showBestValue =
    price >= 180;






  return (

    <div

      className={styles.estimateCard}

      aria-live="polite"

    >



      <div

        className={styles.estimateHeader}

      >


        <div>


          <p className={styles.estimateLabel}>

            Your Instant Estimate

          </p>



          <p className={styles.estimateSubtitle}>

            Clear pricing before any cleaning begins.

          </p>


        </div>





        {showBestValue && (

          <span

            className={styles.bestValueBadge}

          >

            ⭐ Best Value

          </span>

        )}



      </div>







      {isDetailed && estimate.breakdown.length > 0 && (

        <div

          className={styles.breakdown}

        >


          {estimate.breakdown.map((item, index) => (

            <div

              key={`${item.service}-${index}`}

              className={styles.breakdownItem}

            >



              <div>


                <span>

                  ✓ {item.description}

                </span>



                {item.quantity > 1 && (

                  <small>

                    Quantity: {item.quantity}

                  </small>

                )}



              </div>





              <strong>

                £{item.price}

              </strong>



            </div>

          ))}



        </div>

      )}







      <div className={styles.totalBlock}>


        <p className={styles.totalLabel}>

          Estimated Total

        </p>



        <h3 className={styles.estimatePrice}>

          {formattedPrice}

        </h3>



      </div>







      <div

        className={styles.trustPanel}

        aria-label="ROBIGO customer benefits"

      >



        <div className={styles.trustItem}>

          ✅ No Call-Out Charge

        </div>



        <div className={styles.trustItem}>

          ✅ Final Price Confirmed

        </div>



        <div className={styles.trustItem}>

          ✅ Fully Insured Service

        </div>



        <div className={styles.trustItem}>

          ✅ Free WhatsApp Quotations

        </div>



      </div>







      <p className={styles.estimateNote}>

        No obligation. Send your details through WhatsApp and we will confirm
        your appointment availability.

      </p>







      {price > 0 && (

        <div

          className={styles.priceGuarantee}

          role="note"

        >

          Price Promise: You approve the quotation before we start.

        </div>

      )}





    </div>

  );

}