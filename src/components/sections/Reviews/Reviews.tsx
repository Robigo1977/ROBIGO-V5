// src/components/sections/Reviews/Reviews.tsx

import { Star } from "lucide-react";

import Button from "../../ui/Button";
import Section from "../../ui/Section";

import { site } from "../../../config/site";

import { reviews } from "./reviews.data";
import ReviewCard from "./ReviewCard";

import styles from "./Reviews.module.css";



export default function Reviews() {


  const averageRating = 5.0;

  const reviewCount = reviews.length;



  return (


    <Section

      id="reviews"

      background="light"

      className={styles.section}

    >



      <div

        className={styles.header}

      >



        <span

          className={styles.badge}

        >

          WINCHESTER CUSTOMER REVIEWS

        </span>





        <h2>

          Loved by Winchester Homeowners

        </h2>





        <p>

          Our customers trust ROBIGO for professional carpet cleaning,
          upholstery cleaning and steam cleaning with honest pricing,
          careful service and outstanding results.

        </p>



      </div>







      <div

        className={styles.summary}

      >



        <div

          className={styles.rating}

        >



          <span

            className={styles.score}

          >

            {averageRating.toFixed(1)}

          </span>





          <div>


            <div

              className={styles.stars}

            >


              {Array.from({ length: 5 }).map((_, index) => (


                <Star

                  key={index}

                  size={20}

                  fill="currentColor"

                />


              ))}



            </div>





            <p>

              Based on {reviewCount} customer testimonial
              {reviewCount !== 1 ? "s" : ""}

            </p>



          </div>



        </div>



      </div>







      <div

        className={styles.grid}

      >



        {reviews.map((review) => (


          <ReviewCard

            key={review.id}

            review={review}

          />


        ))}



      </div>







      <div

        className={styles.cta}

      >



        <h3>

          Ready for a fresher, cleaner home?

        </h3>





        <p>

          Send us a few photos on WhatsApp today and receive a free,
          no-obligation quotation with honest pricing.

        </p>





        <Button

          href={site.whatsappMessage()}

          size="lg"

        >

          Get My Free Quote

        </Button>



      </div>





    </Section>


  );


}