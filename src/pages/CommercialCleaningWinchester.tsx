import {
  BedDouble,
  Building2,
  CheckCircle2,
  KeyRound,
  MoonStar,
  Utensils,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import SEO from "../seo/SEO";
import businessSchema from "../seo/schema";
import { site } from "../config/site";

import styles from "./CommercialCleaningWinchester.module.css";

const sectors = [
  {
    icon: Utensils,
    title: "Restaurants & Cafés",
    text: "Carpets, upholstered dining chairs, booths and customer-facing areas.",
  },
  {
    icon: Building2,
    title: "Offices",
    text: "Carpets, meeting-room chairs, reception seating and hard floors.",
  },
  {
    icon: BedDouble,
    title: "Airbnb & B&B",
    text: "Fast refresh cleaning between guests and scheduled deep-clean plans.",
  },
  {
    icon: KeyRound,
    title: "Estate Agencies",
    text: "Move-in, move-out and presentation-ready carpet and upholstery cleaning.",
  },
];

const rates = [
  ["Commercial carpet areas", "from £1.80/m²", "For areas of 100 m² or more"],
  ["Upholstered chairs", "from £8 each", "For bookings of 10 or more"],
  ["Reception sofas", "from £49", "Fabric inspection included"],
  ["Regular fixed slots", "Tailored quote", "Weekly or monthly service plans"],
];

const benefits = [
  "Evening and out-of-hours appointments",
  "Professional commercial equipment",
  "Clear fixed quotations before work begins",
  "Card payments accepted",
  "No call-out charge within our regular service area",
  "A real local professional - not a booking bot",
];

export default function CommercialCleaningWinchester() {
  return (
    <main>
      <SEO
        config={{
          title: "Commercial Cleaning Winchester | ROBIGO",
          description:
            "Commercial carpet, upholstery and steam floor cleaning for restaurants, offices, Airbnb properties and estate agencies in Winchester. Free fixed quotations.",
          canonical: "https://robigo.co.uk/commercial-cleaning-winchester",
          ogTitle: "Commercial Cleaning Winchester | ROBIGO",
          ogDescription:
            "Flexible professional cleaning for Winchester businesses.",
          ogImage: "https://robigo.co.uk/og-image.jpg",
          twitterTitle: "Commercial Cleaning Winchester | ROBIGO",
          twitterDescription:
            "Flexible professional cleaning for Winchester businesses.",
          twitterImage: "https://robigo.co.uk/og-image.jpg",
        }}
        schema={businessSchema}
      />

      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              COMMERCIAL CLEANING FOR WINCHESTER BUSINESSES
            </p>
            <h1>A cleaner space. A stronger first impression.</h1>
            <p className={styles.heroText}>
              Professional carpet, upholstery and chemical-free steam floor
              cleaning for businesses that care about presentation, hygiene and
              customer confidence.
            </p>
            <div className={styles.actions}>
              <Button
                href={site.whatsappMessage(
                  "Hi ROBIGO, I'd like a free commercial cleaning quotation.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Request a Free Business Quote
              </Button>
              <a href="#business-rates">View Business Rates</a>
            </div>
            <p className={styles.heroMeta}>
              Flexible appointments · Fixed quotations · Available 7 days a week
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <header className={styles.sectionHeader}>
            <p>WHO WE HELP</p>
            <h2>Professional cleaning built around your business</h2>
          </header>
          <div className={styles.sectorGrid}>
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <article className={styles.sectorCard} key={sector.title}>
                  <Icon aria-hidden="true" />
                  <h3>{sector.title}</h3>
                  <p>{sector.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        className={`${styles.section} ${styles.ratesSection}`}
        id="business-rates"
      >
        <Container>
          <header className={styles.sectionHeader}>
            <p>STRAIGHTFORWARD BUSINESS RATES</p>
            <h2>Competitive pricing without compromising standards</h2>
            <span>
              Every property is different. These guide prices help you plan;
              your final fixed quotation is confirmed before work begins.
            </span>
          </header>

          <div className={styles.rateGrid}>
            {rates.map(([title, price, note]) => (
              <article className={styles.rateCard} key={title}>
                <p>{title}</p>
                <strong>{price}</strong>
                <span>{note}</span>
              </article>
            ))}
          </div>

          <p className={styles.minimum}>
            Minimum booking £60. Large carpet areas are professionally laser
            measured, so you pay only for the area cleaned.
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.plan}>
            <div>
              <p className={styles.eyebrowDark}>REGULAR COMMERCIAL PLANS</p>
              <h2>Fixed cleaning slots with less disruption</h2>
              <p>
                Reserve a regular weekly or monthly appointment. Evening
                cleaning is available to help offices, restaurants and guest
                accommodation stay ready without interrupting normal business.
              </p>
            </div>

            <div className={styles.benefits}>
              {benefits.map((benefit) => (
                <p key={benefit}>
                  <CheckCircle2 aria-hidden="true" />
                  {benefit}
                </p>
              ))}
            </div>

            <MoonStar className={styles.planIcon} aria-hidden="true" />
          </div>
        </Container>
      </section>

      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaInner}>
            <p>FREE COMMERCIAL QUOTATION</p>
            <h2>Send photos or your approximate floor size</h2>
            <span>
              Robert will reply personally with the next steps and a clear
              quotation for your business.
            </span>
            <Button
              href={site.whatsappMessage(
                "Hi ROBIGO, I'd like a free commercial cleaning quotation.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              WhatsApp ROBIGO
            </Button>
            <small>
              +44 7777 449931 · robigo.hun@gmail.com · Winchester, Hampshire
            </small>
          </div>
        </Container>
      </section>
    </main>
  );
}
