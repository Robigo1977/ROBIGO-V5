import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import Container from "../../ui/Container/Container";

import styles from "./ServiceAreas.module.css";


const areas = [

  "Winchester",

  "Eastleigh",

  "King's Worthy",

  "Chandler's Ford",

  "Twyford",

  "Shawford",

  "Compton",

  "Hursley",

  "Otterbourne",

];



export default function ServiceAreas() {


  return (


    <section

      id="service-areas"

      className={styles.section}

    >



      <Container>




        <motion.div

          className={styles.header}

          initial={{

            opacity: 0,

            y: 24,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

          }}

          transition={{

            duration: 0.5,

          }}

        >



          <span

            className={styles.badge}

          >

            WINCHESTER & SURROUNDING AREAS

          </span>





          <h2>

            Professional Cleaning Services Across Winchester & Nearby Areas

          </h2>





          <p>

            ROBIGO provides professional carpet, upholstery, mattress and
            chemical-free steam cleaning for homes across Winchester and nearby
            communities.

          </p>



        </motion.div>







        <div

          className={styles.grid}

        >



          {areas.map((area) => (


            <div

              key={area}

              className={styles.area}

            >



              <MapPin

                size={18}

              />





              <span>

                {area}

              </span>



            </div>



          ))}



        </div>







        <motion.div

          className={styles.footer}

          initial={{

            opacity: 0,

          }}

          whileInView={{

            opacity: 1,

          }}

          viewport={{

            once: true,

          }}

          transition={{

            delay: 0.2,

          }}

        >



          <h3>

            Don't see your town?

          </h3>





          <p>

            If you're located close to Winchester, send ROBIGO a WhatsApp
            message. We will always do our best to help.

          </p>



        </motion.div>





      </Container>




    </section>


  );


}