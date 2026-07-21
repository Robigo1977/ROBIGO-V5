// src/components/sections/Services/Services.tsx

import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";

import ServiceCard from "./ServiceCard";
import { services } from "./services.data";

import styles from "./Services.module.css";



export default function Services() {


  if (services.length === 0) {

    return null;

  }



  return (

    <Section

      id="services"

      className={styles.section}

      background="default"

    >



      <SectionHeader


        badge="WINCHESTER CLEANING SERVICES"


        title="Professional Carpet & Upholstery Cleaning in Winchester"


        description="ROBIGO provides professional carpet cleaning, upholstery cleaning, mattress cleaning and chemical-free steam cleaning with transparent pricing, no call-out charges and friendly local service."


      />





      <div

        className={styles.grid}

        role="list"

        aria-label="Professional cleaning services"

      >



        {services.map((service) => (


          <ServiceCard

            key={service.id}

            service={service}

          />


        ))}



      </div>



    </Section>

  );

}