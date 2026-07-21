import Container from "../../ui/Container/Container";

import styles from "./LocalTrust.module.css";


const trustItems = [

  "Local Winchester Specialist",

  "Professional Equipment",

  "No Call-Out Charge",

  "Fully Insured Service",

];



export default function LocalTrust() {

  return (

    <section

      className={styles.section}

      aria-label="Local cleaning trust information"

    >

      <Container>


        <div className={styles.wrapper}>


          <span className={styles.badge}>

            WINCHESTER CLEANING SPECIALIST

          </span>



          <h2 className={styles.title}>

            Instant Cleaning Quote in Winchester

          </h2>



          <p className={styles.description}>

            Get a clear estimate for carpet cleaning, upholstery cleaning and
            chemical-free steam cleaning from your local Winchester cleaning
            professional.

          </p>




          <div className={styles.grid}>


            {trustItems.map((item) => (

              <div

                key={item}

                className={styles.card}

              >

                <span className={styles.icon}>

                  ✓

                </span>


                <span>

                  {item}

                </span>


              </div>

            ))}


          </div>


        </div>


      </Container>


    </section>

  );

}