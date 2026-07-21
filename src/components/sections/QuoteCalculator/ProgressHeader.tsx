// src/components/sections/QuoteCalculator/ProgressHeader.tsx

import StepIndicator from "./StepIndicator";

import styles from "./QuoteCalculator.module.css";


type ProgressHeaderProps = {

  currentStep: 1 | 2 | 3;

  id?: string;

};





export default function ProgressHeader({

  currentStep,

  id,

}: ProgressHeaderProps) {



  return (

    <header

      className={styles.progressHeader}

    >



      <span

        className={styles.progressBadge}

      >

        FREE QUOTE • NO OBLIGATION

      </span>





      <h2

        id={id}

        className={styles.progressTitle}

      >

        Get Your Instant Cleaning Quote

      </h2>





      <p

        className={styles.progressSubtitle}

      >

        Professional carpet, upholstery and steam cleaning estimates in
        Winchester. Clear pricing, no hidden charges and no pressure.

      </p>





      <div

        className={styles.trustPanel}

        aria-label="Quote benefits"

      >

        <div

          className={styles.trustItem}

        >

          ✓ Clear Pricing

        </div>



        <div

          className={styles.trustItem}

        >

          ✓ No Call-Out Charge

        </div>



        <div

          className={styles.trustItem}

        >

          ✓ Fully Insured Service

        </div>



      </div>





      <StepIndicator

        currentStep={currentStep}

      />



    </header>

  );

}