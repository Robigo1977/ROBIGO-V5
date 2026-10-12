import Hero from "../components/seo-pages/carpet-cleaning/Hero";
import Benefits from "../components/seo-pages/carpet-cleaning/Benefits";
import CarpetPrices from "../components/seo-pages/carpet-cleaning/CarpetPrices";
import FAQ from "../components/seo-pages/carpet-cleaning/FAQ";
import CTA from "../components/seo-pages/carpet-cleaning/CTA";
import SEO from "../seo/SEO";
import businessSchema from "../seo/schema";
import { site } from "../config/site";

const carpetServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://robigo.co.uk/carpet-cleaning-winchester#service",
  name: "Carpet Cleaning in Winchester",
  serviceType: "Professional Carpet Cleaning",
  provider: { "@id": "https://robigo.co.uk/#business" },
  areaServed: site.location.serviceAreas.map((name) => ({
    "@type": "Place",
    name,
  })),
  url: "https://robigo.co.uk/carpet-cleaning-winchester",
  description:
    "Professional carpet cleaning in Winchester with simple room prices, a £50 minimum booking and no call-out charge.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ROBIGO",
      item: "https://robigo.co.uk/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Carpet Cleaning Winchester",
      item: "https://robigo.co.uk/carpet-cleaning-winchester",
    },
  ],
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
          ogImage: "https://robigo.co.uk/images/services/hero.png",
          twitterTitle: "Carpet Cleaning Winchester | ROBIGO",
          twitterDescription:
            "Professional local carpet cleaning in Winchester with clear room prices and free call-out.",
          twitterImage: "https://robigo.co.uk/images/services/hero.png",
        }}
        schema={[businessSchema, carpetServiceSchema, breadcrumbSchema]}
      />
      <Hero />
      <CarpetPrices />
      <Benefits />
      <FAQ />
      <CTA />
    </main>
  );
}
