import {
  BedDouble,
  Building2,
  CheckCircle2,
  KeyRound,
  MoonStar,
  Sparkles,
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
    text: "Carpets, dining chairs, banquettes and customer-facing areas.",
  },
  {
    icon: Sparkles,
    title: "Chemical-Free Steam",
    text: "Professional dry-steam cleaning for suitable hard floors and surfaces.",
  },
  {
    icon: Building2,
    title: "Offices",
    text: "Carpets, meeting-room chairs, reception seating and hard floors.",
  },
  {
    icon: BedDouble,
    title: "Airbnb & B&B",
    text: "Fast guest-change refreshes and scheduled deep-clean plans.",
  },
  {
    icon: KeyRound,
    title: "Estate Agencies",
    text: "Presentation-ready carpet and upholstery cleaning between tenancies.",
  },
];

const rates = [
  ["Commercial carpet areas", "from £1.80/m²", "For areas of 100 m² or more"],
  ["Chemical-free steam", "£2.50/m²", "Suitable hard floors · minimum £50"],
  ["Upholstered chairs", "from £8 each", "For bookings of 10 or more"],
  ["Reception sofas", "from £49", "Fabric inspection included"],
];

const benefits = [
  "Evening and out-of-hours appointments",
  "Professional commercial equipment",
  "Chemical-free dry steam for suitable hard floors",
  "Clear fixed quotations before work begins",
  "No call-out charge within our regular service area",
];

export default function CommercialCleaningWinchester() {
  return (
    <main>
      <SEO
        config={{
          title: "Commercial Cleaning Winchester | ROBIGO",
          description:
            "Commercial carpet and upholstery cleaning plus chemical-free dry steam for suitable hard floors in Winchester restaurants, offices and Airbnb properties.",
          canonical: "https://robigo.co.uk/commercial-cleaning-winchester",
          ogTitle: "Commercial Cleaning Winchester | ROBIGO",
          ogDescription:
            "Flexible professional cleaning for Winchester businesses.",
          ogImage:
            "https://robigo.co.uk/images/commercial/commercial-office-hero.webp",
          twitterTitle: "Commercial Cleaning Winchester | ROBIGO",
          twitterDescription:
            "Flexible professional cleaning for Winchester businesses.",
          twitterImage:
            "https://robigo.co.uk/images/commercial/commercial-office-hero.webp",
        }}
        schema={businessSchema}
      />

      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src="/images/commercial/commercial-office-hero.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className={styles.heroShade} />
        <Container>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              COMMERCIAL CLEANING FOR WINCHESTER BUSINESSES
            </p>
            <h1>A cleaner space. A stronger first impression.</h1>
            <p className={styles.heroText}>
              Premium carpet and upholstery care, plus chemical-free dry-steam
              cleaning for suitable hard floors — for businesses that care about
              presentation, hygiene and customer confidence.
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
            <h2>Immaculate spaces your customers will notice</h2>
          </header>

          <div className={styles.showcase}>
            <article className={styles.showcaseCard}>
              <img
                src="/images/commercial/commercial-restaurant-booths.webp"
                alt="Elegant restaurant with premium upholstered booth seating"
                loading="lazy"
              />
              <div>
                <span>Restaurants & hospitality</span>
                <h3>Beautiful seating. Better first impressions.</h3>
              </div>
            </article>
            <article className={styles.showcaseCard}>
              <img
                src="/images/commercial/commercial-airbnb.webp"
                alt="Premium clean Airbnb and boutique B&B interior"
                loading="lazy"
              />
              <div>
                <span>Airbnb, B&B & property</span>
                <h3>Guest-ready rooms with a fresh, refined finish.</h3>
              </div>
            </article>
          </div>

          <div className={styles.sectorGrid}>
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <article className={styles.sectorCard} key={sector.title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{sector.title}</h3>
                    <p>{sector.text}</p>
                  </div>
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
            <h2>Competitive pricing. Premium standards.</h2>
            <span>
              Guide prices help you plan; your final fixed quotation is
              confirmed before work begins.
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
            Minimum booking £60. Large carpet areas are laser measured, so you
            pay only for the area cleaned.
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.plan}>
            <div>
              <p className={styles.eyebrowDark}>REGULAR COMMERCIAL PLANS</p>
              <h2>Premium results with less disruption</h2>
              <p>
                Reserve a weekly or monthly slot. Evening cleaning helps your
                premises stay ready without interrupting normal business. Every
                regular plan receives a tailored quotation.
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
