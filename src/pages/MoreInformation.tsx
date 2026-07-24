import LocalTrust from "../components/sections/LocalTrust/LocalTrust";
import BeforeAfter from "../components/sections/BeforeAfter";
import WhyChoose from "../components/sections/WhyChoose";
import Reviews from "../components/sections/Reviews";
import Pricing from "../components/sections/Pricing/Pricing";
import ServiceAreas from "../components/sections/ServiceAreas";
import FAQ from "../components/sections/FAQ";
import SEO from "../seo/SEO";
import businessSchema from "../seo/schema";

import styles from "./MoreInformation.module.css";

export default function MoreInformation() {
  return (
    <main>
      <SEO
        config={{
          title: "More About ROBIGO | Winchester Cleaning Service",
          description:
            "Meet ROBIGO, view professional cleaning results, prices, service areas and helpful answers for customers around Winchester.",
          canonical: "https://robigo.co.uk/more-about-robigo",
          ogTitle: "More About ROBIGO",
          ogDescription:
            "Our story, professional results and helpful service information.",
          ogImage: "https://robigo.co.uk/og-image.jpg",
          twitterTitle: "More About ROBIGO",
          twitterDescription:
            "Our story, professional results and helpful service information.",
          twitterImage: "https://robigo.co.uk/og-image.jpg",
        }}
        schema={businessSchema}
      />

      <header className={styles.intro}>
        <p>Local · Professional · Reliable</p>
        <h1>More About ROBIGO</h1>
        <span>
          Learn about our standards, see real cleaning results and find all the
          detailed information you may need before booking.
        </span>
        <a href="/">Back to the main page</a>
      </header>

      <LocalTrust />
      <BeforeAfter />
      <WhyChoose />
      <Reviews />
      <Pricing />
      <ServiceAreas />
      <FAQ />
    </main>
  );
}
