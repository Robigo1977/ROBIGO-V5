// src/components/sections/FAQ/FAQ.tsx

import Container from "../../ui/Container/Container";

import FAQItem from "./FAQItem";
import { faqs } from "./faq.data";

import styles from "./FAQ.module.css";



export default function FAQ() {


  return (


    <section

      id="faq"

      className={styles.section}

    >



      <Container>





        <div

          className={styles.header}

        >



          <span

            className={styles.badge}

          >

            WINCHESTER CLEANING FAQ

          </span>





          <h2>

            Carpet Cleaning Questions Answered

          </h2>





          <p>

            Find answers about carpet cleaning, upholstery cleaning,
            chemical-free steam cleaning, pricing, drying times and booking
            ROBIGO in Winchester.

          </p>



        </div>







        <div

          className={styles.list}

        >



          {faqs.map((item) => (


            <FAQItem

              key={item.id}

              item={item}

            />


          ))}



        </div>







        <div

          className={styles.footer}

        >



          <p>

            Can't find the answer you're looking for?

          </p>





          <a

            href="#quote"

            className={styles.link}

          >

            Get Your Free Quote →

          </a>



        </div>





      </Container>




    </section>


  );


}