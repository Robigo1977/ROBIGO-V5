import Hero from "../components/seo-pages/carpet-cleaning/Hero";
import Benefits from "../components/seo-pages/carpet-cleaning/Benefits";
import FAQ from "../components/seo-pages/carpet-cleaning/FAQ";
import CTA from "../components/seo-pages/carpet-cleaning/CTA";
import SEO from "../seo/SEO";
import businessSchema from "../seo/schema";

const carpetServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://robigo.co.uk/carpet-cleaning-winchester#service",
  name: "Carpet Cleaning in Winchester",
  serviceType: "Professional Carpet Cleaning",
  provider: { "@id": "https://robigo.co.uk/#business" },
  areaServed: {
    "@type": "City",
    name: "Winchester",
  },
  url: "https://robigo.co.uk/carpet-cleaning-winchester",
};

export default function CarpetCleaningWinchester() {
  return (
    <main>
      <SEO
        config={{
          title: "Carpet Cleaning Winchester | ROBIGO",
          description:
            "Professional carpet cleaning in Winchester with simple room pricing, free call-out and a £50 minimum total booking. Local, fully insured ROBIGO service.",
          canonical: "https://robigo.co.uk/carpet-cleaning-winchester",
          ogTitle: "Carpet Cleaning Winchester | ROBIGO",
          ogDescription:
            "Professional local carpet cleaning in Winchester with clear room prices and free call-out.",
          ogImage: "https://robigo.co.uk/og-image.jpg",
          twitterTitle: "Carpet Cleaning Winchester | ROBIGO",
          twitterDescription:
            "Professional local carpet cleaning in Winchester with clear room prices and free call-out.",
          twitterImage: "https://robigo.co.uk/og-image.jpg",
        }}
        schema={[businessSchema, carpetServiceSchema]}
      />
      <Hero />
      <Benefits />
      <FAQ />
      <CTA />
    </main>
  );
}
