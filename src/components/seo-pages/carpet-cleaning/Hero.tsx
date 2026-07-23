import Container from "../../ui/Container";
import Button from "../../ui/Button";
import SEO from "../../../seo/SEO";
import businessSchema from "../../../seo/schema";

export default function Hero() {
  return (
    <>
      <SEO
        config={{
          title: "Carpet Cleaning Winchester | ROBIGO",
          description:
            "Professional carpet cleaning in Winchester using powerful deep-clean extraction equipment. Free quotations, no call-out charge and trusted local service.",
          canonical: "https://robigo.co.uk/carpet-cleaning-winchester",
          ogTitle: "Carpet Cleaning Winchester | ROBIGO",
          ogDescription:
            "Professional carpet cleaning in Winchester with outstanding results.",
          ogImage: "https://robigo.co.uk/og-image.jpg",
          twitterTitle: "Carpet Cleaning Winchester | ROBIGO",
          twitterDescription:
            "Professional carpet cleaning in Winchester.",
          twitterImage: "https://robigo.co.uk/og-image.jpg",
        }}
        schema={businessSchema}
      >

      </SEO>

      <section>
        <Container>
          <span>WINCHESTER CARPET CLEANING SPECIALISTS</span>

          <h1>Professional Carpet Cleaning in Winchester</h1>

          <p>
            Bring your carpets back to life with professional deep cleaning.
            ROBIGO removes embedded dirt, stains and odours while creating a
            cleaner, fresher and healthier home.
          </p>

          <Button href="/#contact">
            Get My Free Quote
          </Button>
        </Container>
      </section>
    </>
  );
}