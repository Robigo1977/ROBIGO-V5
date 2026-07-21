// src/components/sections/WhyChoose/WhyChoose.tsx

import Container from "../../ui/Container/Container";

import WhyChooseCard from "./WhyChooseCard";
import { whyChooseItems } from "./whyChoose.data";

import styles from "./WhyChoose.module.css";



export default function WhyChoose() {


  const headingId =
    "why-choose-heading";



  return (


    <section

      id="why-choose"

      className={styles.section}

      aria-labelledby={headingId}

    >



      <Container>



        <header

          className={styles.header}

        >



          <h2 id={headingId}>

            Why Choose ROBIGO – Winchester’s Premium Cleaning Specialist

          </h2>





          <p>

            Professional carpet, upholstery and steam cleaning with honest
            pricing, professional equipment and genuine care for every home
            across Winchester and surrounding areas.

          </p>



        </header>







        <div

          className={styles.grid}

          role="list"

        >



          {whyChooseItems.map((item) => (


            <WhyChooseCard

              key={item.id}

              item={item}

            />


          ))}



        </div>





      </Container>




    </section>


  );


}