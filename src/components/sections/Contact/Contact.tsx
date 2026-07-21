// src/components/sections/Contact/Contact.tsx

import Container from "../../ui/Container/Container";

import ContactCard from "./ContactCard";
import { contactMethods } from "./contact.data";

import styles from "./Contact.module.css";



export default function Contact() {


  return (


    <section

      id="contact"

      className={styles.section}

      aria-labelledby="contact-title"

    >



      <Container>





        <header

          className={styles.header}

        >



          <span

            className={styles.badge}

          >

            BOOK YOUR CLEANING QUOTE

          </span>





          <h2

            id="contact-title"

          >

            Ready for a Cleaner, Fresher Home in Winchester?

          </h2>





          <p>

            Getting your quotation is quick and easy. Send ROBIGO a few photos
            on WhatsApp and receive a free, no-obligation quotation. You can
            also call or email us if you prefer. We proudly serve Winchester
            and surrounding areas seven days a week.

          </p>



        </header>







        <div

          className={styles.grid}

          role="list"

          aria-label="Contact methods"

        >



          {contactMethods.map((method) => (


            <ContactCard

              key={method.id}

              method={method}

            />


          ))}



        </div>





      </Container>




    </section>


  );


}