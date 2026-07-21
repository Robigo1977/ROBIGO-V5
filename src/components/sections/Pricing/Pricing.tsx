// src/components/sections/Pricing/Pricing.tsx

import Container from "../../ui/Container/Container";
import { site } from "../../../config/site";

import { pricing } from "./pricing.data";

import styles from "./Pricing.module.css";



export default function Pricing() {


  return (


    <section

      id="pricing"

      className={styles.section}

    >



      <Container>





        <div

          className={styles.header}

        >



          <span

            className={styles.eyebrow}

          >

            TRANSPARENT CLEANING PRICES

          </span>





          <h2>

            Professional Cleaning Prices in Winchester

          </h2>





          <p>

            Clear carpet, upholstery, mattress and steam cleaning prices with
            no hidden charges and no call-out fees. Use our instant quote
            calculator or contact ROBIGO on WhatsApp for a personalised
            quotation.

          </p>



        </div>







        <div

          className={styles.grid}

        >



          {pricing.map((category) => (



            <article

              key={category.id}

              className={styles.card}

            >



              <div

                className={styles.cardHeader}

              >



                <span

                  className={styles.icon}

                >

                  {category.icon}

                </span>





                <h3>

                  {category.title}

                </h3>



              </div>







              <div

                className={styles.list}

              >



                {category.items.map((item) => (



                  <div


                    key={`${category.id}-${item.label}`}


                    className={styles.row}


                  >



                    <span

                      className={styles.label}

                    >

                      {item.label}

                    </span>





                    <span

                      className={styles.price}

                    >

                      {item.price}

                    </span>



                  </div>



                ))}



              </div>





            </article>



          ))}



        </div>







        <div

          className={styles.cta}

        >



          <p>

            Need a personalised quotation? Send ROBIGO a WhatsApp message and
            receive a clear, no-obligation estimate.

          </p>





          <a


            className={styles.button}


            href={site.whatsappMessage()}


            target="_blank"


            rel="noopener noreferrer"


          >

            Get a Free WhatsApp Quote

          </a>



        </div>







      </Container>




    </section>


  );


}