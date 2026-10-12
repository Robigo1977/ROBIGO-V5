import SEO from "../seo/SEO";
import { site } from "../config/site";
import { pricing } from "../components/sections/Pricing/pricing.data";
import styles from "./ServiceLandingPage.module.css";

type ServiceKey = "rug" | "upholstery" | "mattress" | "steam" | "oven";

interface ServicePageConfig {
  key: ServiceKey;
  title: string;
  h1: string;
  description: string;
  intro: string;
  bullets: { title: string; text: string }[];
  processTitle: string;
  process: { title: string; text: string }[];
  schemaName: string;
  canonical: string;
}

const pages: Record<ServiceKey, ServicePageConfig> = {
  rug: {
    key: "rug",
    title: "Rug Cleaning Winchester | ROBIGO",
    h1: "Professional Rug Cleaning in Winchester",
    description:
      "Professional rug cleaning in Winchester for small, medium, large and extra-large household rugs. Clear prices, £50 minimum booking and no call-out charge.",
    intro:
      "ROBIGO provides professional rug cleaning for homes in Winchester and nearby areas. We use careful extraction cleaning to lift everyday dirt, refresh fibres and improve the appearance of suitable household rugs.",
    schemaName: "Rug Cleaning",
    canonical: "https://robigo.co.uk/rug-cleaning-winchester",
    bullets: [
      { title: "Clear sizes and prices", text: "Choose from simple small, medium, large and extra-large rug prices." },
      { title: "Professional extraction", text: "Suitable household rugs are cleaned with professional extraction equipment for a deeper clean than normal vacuuming." },
      { title: "Local service", text: "Winchester-based service with free call-out across our regular service area." },
    ],
    processTitle: "How ROBIGO cleans suitable rugs",
    process: [
      { title: "1. Check the rug", text: "We first check the material, condition and any areas that need extra attention." },
      { title: "2. Deep extraction clean", text: "Where suitable, we use professional Kärcher Puzzi 10/2 extraction equipment to rinse and lift soil from the fibres." },
      { title: "3. Final check", text: "We check the result with you and give simple drying and after-care advice." },
    ],
  },
  upholstery: {
    key: "upholstery",
    title: "Upholstery Cleaning Winchester | ROBIGO",
    h1: "Sofa & Upholstery Cleaning in Winchester",
    description:
      "Professional sofa and upholstery cleaning in Winchester. Dining chairs from £10, armchairs £20, sofas from £40. £50 minimum booking and no call-out charge.",
    intro:
      "ROBIGO cleans sofas, armchairs, dining chairs and other suitable fabric upholstery in Winchester. The aim is simple: remove everyday dirt, refresh the fabric and leave your furniture looking and feeling cleaner.",
    schemaName: "Upholstery Cleaning",
    canonical: "https://robigo.co.uk/upholstery-cleaning-winchester",
    bullets: [
      { title: "Simple fixed prices", text: "Easy prices for dining chairs, armchairs and 2-, 3-, 4-seater and corner sofas." },
      { title: "Careful fabric cleaning", text: "We inspect the fabric first and use professional extraction cleaning where the material is suitable." },
      { title: "Fast WhatsApp quotes", text: "Send a photo if you are unsure which sofa size or service applies." },
    ],
    processTitle: "How sofa and upholstery cleaning works",
    process: [
      { title: "1. Fabric check", text: "We inspect the upholstery, identify problem areas and confirm the material is suitable for the planned method." },
      { title: "2. Professional clean", text: "We use Kärcher Puzzi 10/2 spray-extraction equipment on suitable fabric to flush out loosened dirt and recover the cleaning solution." },
      { title: "3. Drying advice", text: "We leave the upholstery as dry as practical and explain how to help it finish drying safely." },
    ],
  },
  mattress: {
    key: "mattress",
    title: "Mattress Cleaning Winchester | ROBIGO",
    h1: "Professional Mattress Cleaning in Winchester",
    description:
      "Mattress cleaning in Winchester from £20. Single, double, king and super king sizes. £50 minimum booking, no call-out charge and fast WhatsApp quotes.",
    intro:
      "Professional mattress cleaning helps remove surface dirt, reduce everyday dust and refresh the sleeping surface. ROBIGO offers clear fixed prices for the main mattress sizes across Winchester and nearby areas.",
    schemaName: "Mattress Cleaning",
    canonical: "https://robigo.co.uk/mattress-cleaning-winchester",
    bullets: [
      { title: "All main mattress sizes", text: "Single, double, king and super king prices are shown clearly before booking." },
      { title: "Fresh, professional clean", text: "Professional cleaning is designed to refresh the mattress and improve overall cleanliness." },
      { title: "Easy to combine", text: "Mattress cleaning can be combined with carpet or upholstery cleaning to meet the £50 minimum booking." },
    ],
    processTitle: "How mattress cleaning works",
    process: [
      { title: "1. Inspect", text: "We check the mattress surface, fabric and any visible marks before cleaning starts." },
      { title: "2. Clean and extract", text: "Where suitable, professional Kärcher extraction equipment is used to clean the fabric and recover moisture and loosened soil." },
      { title: "3. Air and dry", text: "We explain the best way to ventilate the room and allow the mattress to finish drying before use." },
    ],
  },
  steam: {
    key: "steam",
    title: "Chemical-Free Steam Cleaning Winchester | ROBIGO",
    h1: "Chemical-Free Hard Floor Steam Cleaning in Winchester",
    description:
      "High-temperature chemical-free steam cleaning for suitable hard floors in Winchester. Simple room prices, £50 minimum booking and no call-out charge.",
    intro:
      "ROBIGO uses professional high-temperature dry steam on suitable hard floors. For this service, the cleaning action comes from heat and steam rather than a floor-cleaning chemical product.",
    schemaName: "Chemical-Free Steam Cleaning",
    canonical: "https://robigo.co.uk/steam-cleaning-winchester",
    bullets: [
      { title: "High-temperature dry steam", text: "Professional steam equipment provides powerful cleaning on suitable sealed hard-floor surfaces." },
      { title: "Simple room prices", text: "Single room, double room, small living room and large living room prices are easy to understand." },
      { title: "Suitable-floor check", text: "We confirm that the floor type is suitable before carrying out steam cleaning." },
    ],
    processTitle: "How chemical-free hard-floor steam cleaning works",
    process: [
      { title: "1. Check the floor", text: "We inspect the surface and confirm it is suitable for high-temperature dry steam." },
      { title: "2. Kärcher SG 4/4 dry steam", text: "We use professional Kärcher SG 4/4 equipment to apply controlled high-temperature steam to the suitable hard-floor surface." },
      { title: "3. Finish the surface", text: "Loosened dirt and moisture are removed as we work, leaving the floor ready to finish drying naturally." },
    ],
  },
  oven: {
    key: "oven",
    title: "Oven Cleaning Winchester | ROBIGO",
    h1: "Professional Oven Cleaning in Winchester",
    description:
      "Professional oven cleaning in Winchester. Single oven £50, double oven £70. Hob £20 when booked with oven cleaning. No call-out charge.",
    intro:
      "ROBIGO offers straightforward oven cleaning in Winchester with clear fixed prices. Single and double ovens are priced before booking, and hob cleaning can be added when an oven clean is booked.",
    schemaName: "Oven Cleaning",
    canonical: "https://robigo.co.uk/oven-cleaning-winchester",
    bullets: [
      { title: "Clear oven prices", text: "Single and double oven prices are shown upfront so you know the cost before booking." },
      { title: "Hob add-on", text: "Hob cleaning is available for £20 when booked together with oven cleaning." },
      { title: "Local Winchester service", text: "No call-out charge within our regular service area." },
    ],
    processTitle: "What happens during an oven clean",
    process: [
      { title: "1. Check and prepare", text: "We inspect the oven and protect the nearby work area before cleaning begins." },
      { title: "2. Detailed clean", text: "Accessible internal surfaces, racks and trays are cleaned to remove built-up cooking residue as far as reasonably possible." },
      { title: "3. Final check", text: "The oven is checked and the cleaned parts are put back in place before the job is finished." },
    ],
  },
};

export default function ServiceLandingPage({ serviceKey }: { serviceKey: ServiceKey }) {
  const page = pages[serviceKey];
  const servicePricing = pricing.find((item) => item.id === page.key);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${page.schemaName} in Winchester`,
    serviceType: page.schemaName,
    provider: {
      "@type": "ProfessionalService",
      name: "ROBIGO",
      url: "https://robigo.co.uk/",
      telephone: "+447777449931",
    },
    areaServed: site.location.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    url: page.canonical,
    description: page.description,
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
        name: `${page.schemaName} in Winchester`,
        item: page.canonical,
      },
    ],
  };

  const whatsapp = site.whatsappMessage(
    `Hi ROBIGO, I'd like a free quote for ${page.schemaName.toLowerCase()} in Winchester.`,
  );

  return (
    <main className={styles.page}>
      <SEO
        config={{
          title: page.title,
          description: page.description,
          canonical: page.canonical,
          ogTitle: page.title,
          ogDescription: page.description,
          ogImage: "https://robigo.co.uk/images/services/hero.png",
          twitterTitle: page.title,
          twitterDescription: page.description,
          twitterImage: "https://robigo.co.uk/images/services/hero.png",
        }}
        schema={[serviceSchema, breadcrumbSchema]}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>ROBIGO · WINCHESTER CLEANING SERVICE</p>
          <h1>{page.h1}</h1>
          <p className={styles.lead}>{page.intro}</p>
          <div className={styles.trustRow} aria-label="Booking information">
            <span>£50 minimum booking</span>
            <span>No call-out charge</span>
            <span>7 days a week</span>
            <span>Fast WhatsApp quotes</span>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby={`${page.key}-why`}>
        <div className={styles.sectionInner}>
          <h2 id={`${page.key}-why`}>Simple professional cleaning, explained clearly</h2>
          <p className={styles.copy}>
            You do not need to calculate square metres or work out a complicated rate. Choose the closest item below, and if you are unsure, send ROBIGO a photo on WhatsApp for a free quotation.
          </p>
          <div className={styles.grid}>
            {page.bullets.map((bullet) => (
              <article key={bullet.title} className={styles.card}>
                <h3>{bullet.title}</h3>
                <p>{bullet.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt} aria-labelledby={`${page.key}-process`}>
        <div className={styles.sectionInner}>
          <h2 id={`${page.key}-process`}>{page.processTitle}</h2>
          <div className={styles.grid}>
            {page.process.map((step) => (
              <article key={step.title} className={styles.card}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {servicePricing && (
        <section className={styles.section} aria-labelledby={`${page.key}-prices`}>
          <div className={styles.sectionInner}>
            <h2 id={`${page.key}-prices`}>{page.schemaName} prices</h2>
            <p className={styles.copy}>
              All residential bookings have a £50 minimum total charge. Call-out is free within our regular service area.
            </p>
            <div className={styles.prices}>
              {servicePricing.items.map((item) => (
                <div key={item.label} className={styles.priceRow}>
                  <span>{item.label}</span>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
            {servicePricing.note && <p className={styles.note}>{servicePricing.note}</p>}
          </div>
        </section>
      )}

      <section className={styles.sectionAlt} aria-labelledby={`${page.key}-areas`}>
        <div className={styles.sectionInner}>
          <h2 id={`${page.key}-areas`}>{page.schemaName} around Winchester</h2>
          <p className={styles.copy}>
            ROBIGO serves Winchester and nearby communities across our regular local service area.
          </p>
          <div className={styles.areas}>
            {site.location.serviceAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Send a photo for a free quote</h2>
          <p>
            Robert replies personally. Send a photo or short description of the job and we will confirm the price and next available appointment.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp ROBIGO
            </a>
            <a className={styles.secondary} href={site.tel()}>
              Call 07777 449931
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
