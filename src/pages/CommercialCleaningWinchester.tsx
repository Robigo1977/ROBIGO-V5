import {
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Home,
  Hotel,
  KeyRound,
  MessageCircle,
  ShieldCheck,
  Utensils,
  Wrench,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import SEO from "../seo/SEO";
import businessSchema from "../seo/schema";
import { site } from "../config/site";

import styles from "./CommercialCleaningWinchester.module.css";

const trustItems = [
  {
    icon: Clock3,
    title: "Out-of-Hours Appointments",
    text: "Evening and weekend cleaning available.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Fixed Quotations",
    text: "Know what is included before work begins.",
  },
  {
    icon: Wrench,
    title: "Professional Equipment",
    text: "Commercial Kärcher carpet, upholstery and dry-steam equipment.",
  },
  {
    icon: CalendarDays,
    title: "One-Off or Regular Plans",
    text: "Single deep cleans or reserved recurring appointments.",
  },
  {
    icon: MessageCircle,
    title: "Robert Replies Personally",
    text: "Direct communication without call centres or unknown contractors.",
  },
];

const audiences = [
  {
    number: "01",
    path: "/business/offices",
    icon: Building2,
    title: "Offices & Office Buildings",
    label: "Workplaces and managed office sites",
    image: "/images/commercial/commercial-office-hero.webp",
    alt: "Professional commercial carpet cleaning in a modern office building",
    text: "Keep receptions, meeting rooms and shared workspaces looking professional with flexible appointments that minimise disruption.",
    services: [
      "Office carpets and high-traffic areas",
      "Meeting-room chairs and reception seating",
      "Suitable sealed hard floors and communal spaces",
    ],
  },
  {
    number: "02",
    path: "/business/accommodation",
    icon: Hotel,
    title: "Hotels",
    label: "Guest rooms and shared hotel areas",
    image: "/images/commercial/commercial-airbnb.webp",
    alt: "Fresh and presentation-ready hotel accommodation",
    text: "Planned deep cleaning for rooms and guest-facing areas where comfort, presentation and consistency directly affect your reputation.",
    services: [
      "Bedroom carpets, rugs and mattresses",
      "Headboards, chairs, sofas and reception seating",
      "Appointments coordinated around quieter periods",
    ],
  },
  {
    number: "03",
    path: "/business/accommodation",
    icon: Home,
    title: "Airbnb & Serviced Accommodation",
    label: "Short-stay and managed accommodation",
    image: "/images/commercial/commercial-airbnb.webp",
    alt: "Clean premium Airbnb and serviced accommodation",
    text: "Guest-ready carpet, upholstery and mattress cleaning for Airbnb, serviced accommodation and Booking.com properties.",
    services: [
      "Carpets, rugs and upholstered furniture",
      "Mattresses, headboards and bedroom seating",
      "Repeat-property and scheduled deep-clean plans",
    ],
  },
  {
    number: "04",
    path: "/business/hospitality",
    icon: Utensils,
    title: "Restaurants, Pubs & Cafés",
    label: "Customer-facing hospitality venues",
    image: "/images/commercial/commercial-restaurant-booths.webp",
    alt: "Premium upholstered restaurant booth seating",
    text: "Professional care for the carpets and upholstered seating your customers see, touch and judge from the moment they arrive.",
    services: [
      "Dining chairs, booths and banquette seating",
      "Carpets, entrances and customer walkways",
      "Evening and after-closing appointments",
    ],
  },
  {
    number: "05",
    path: "/business/rental-properties",
    icon: ClipboardCheck,
    title: "Estate Agents & Property Managers",
    label: "Managed homes and property portfolios",
    image: "/images/commercial/commercial-airbnb.webp",
    alt: "Presentation-ready managed rental property interior",
    text: "Reliable cleaning support for property handovers, viewings, inventories and managed homes across one or several addresses.",
    services: [
      "Access coordinated with agents and managers",
      "Carpets, upholstery, mattresses and rugs",
      "Clear quotations for repeat-property work",
    ],
  },
  {
    number: "06",
    path: "/business/rental-properties",
    icon: KeyRound,
    title: "Landlords & Tenancy Properties",
    label: "Move-in, move-out and tenancy handovers",
    image: "/images/commercial/commercial-airbnb.webp",
    alt: "Fresh rental property prepared for the next tenancy",
    text: "Presentation-ready cleaning after move-out or before move-in, helping rental properties feel fresh, cared for and ready to occupy.",
    services: [
      "End-of-tenancy carpets and upholstery",
      "Furnished-property mattresses and seating",
      "Suitable sealed hard floors after inspection",
    ],
  },
];

const rates = [
  ["Commercial carpet areas", "from £1.80/m²", "For areas of 100 m² or more"],
  ["Chemical-free dry steam", "£2.50/m²", "Suitable sealed hard floors · minimum £50"],
  ["Upholstered chairs", "from £8 each", "For bookings of 10 or more"],
  ["Reception sofas", "from £49", "Fabric inspection included"],
];

const benefits = [
  "Evening and agreed weekend appointments",
  "Professional commercial Kärcher equipment",
  "Chemical-free dry steam for suitable sealed hard floors",
  "Clear fixed quotations before work begins",
  "No call-out charge within our regular service area",
];

export default function CommercialCleaningWinchester() {
  return (
    <main>
      <SEO
        config={{
          title: "Commercial Carpet & Upholstery Cleaning Winchester | ROBIGO",
          description:
            "Commercial carpet, upholstery and dry-steam cleaning for offices, hotels, Airbnb properties, restaurants, estate agents and landlords in Winchester.",
          canonical: "https://robigo.co.uk/commercial-cleaning-winchester",
          ogTitle: "Commercial Cleaning for Winchester Businesses | ROBIGO",
          ogDescription:
            "Flexible professional carpet, upholstery and suitable hard-floor cleaning for Winchester businesses.",
          ogImage:
            "https://robigo.co.uk/images/commercial/commercial-office-hero.webp",
          twitterTitle: "Commercial Cleaning for Winchester Businesses | ROBIGO",
          twitterDescription:
            "Flexible professional carpet, upholstery and suitable hard-floor cleaning for Winchester businesses.",
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
            <p className={styles.heroBrand}>ROBIGO</p>
            <p className={styles.eyebrow}>COMMERCIAL CLEANING</p>
            <h1>
              Professional Carpet, Upholstery & Dry-Steam Cleaning for Winchester
              Businesses
            </h1>
            <p className={styles.heroText}>
              Reliable professional cleaning for offices, hotels, Airbnb
              properties, restaurants, pubs, estate agents and managed properties.
              Keep your premises cleaner, fresher and ready for staff, customers and
              guests.
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
                Request a Free Commercial Quote
              </Button>
              <a href="#business-rates">View Commercial Prices</a>
            </div>
            <p className={styles.heroMeta}>
              Out-of-hours appointments · One-off and regular plans · Fully insured ·
              7 days a week
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.trustStrip} aria-label="ROBIGO business benefits">
        <Container>
          <div className={styles.trustGrid}>
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
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
            <p>COMMERCIAL GUIDE PRICES</p>
            <h2>Clear starting prices before you request a quotation</h2>
            <span>
              These guide prices help you plan. Your final fixed quotation is
              confirmed before work begins and can combine several surfaces or
              properties.
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
            Minimum booking is normally £60. Dry-steam floor cleaning has a £50
            minimum. Larger hotel, multi-property and recurring commercial work is
            quoted individually. Carpet areas are laser measured, so you pay only for
            the area cleaned.
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <header className={styles.sectionHeader}>
            <p>CHOOSE YOUR BUSINESS TYPE</p>
            <h2>Professional cleaning designed around your property</h2>
            <span>
              Select the section that best matches your premises and see the services
              most relevant to your business.
            </span>
          </header>

          <div className={styles.audienceGrid}>
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <article className={styles.audienceCard} key={audience.number}>
                  <div className={styles.audienceVisual}>
                    <img src={audience.image} alt={audience.alt} loading="lazy" />
                    <strong>{audience.number}</strong>
                  </div>
                  <div className={styles.audienceBody}>
                    <div className={styles.audienceHeading}>
                      <Icon aria-hidden="true" />
                      <div>
                        <span>{audience.label}</span>
                        <h3>{audience.title}</h3>
                      </div>
                    </div>
                    <p>{audience.text}</p>
                    <ul>
                      {audience.services.map((service) => (
                        <li key={service}>
                          <CheckCircle2 aria-hidden="true" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <a className={styles.audienceLink} href={audience.path}>
                      View services for this sector
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.plan}>
            <div>
              <p className={styles.eyebrowDark}>REGULAR COMMERCIAL PLANS</p>
              <h2>Premium results with less disruption</h2>
              <p>
                Reserve a weekly, fortnightly, monthly or quarterly slot. Evening and
                agreed weekend cleaning helps your premises stay ready without
                interrupting normal business. Every regular plan receives a tailored
                quotation.
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

            <ShieldCheck className={styles.planIcon} aria-hidden="true" />
          </div>
        </Container>
      </section>

      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaInner}>
            <p>FREE COMMERCIAL QUOTATION</p>
            <h2>Send photos or your approximate floor size</h2>
            <span>
              Robert will reply personally with the next steps and a clear quotation
              for your business.
            </span>
            <Button
              href={site.whatsappMessage(
                "Hi ROBIGO, I'd like a free commercial cleaning quotation.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              WhatsApp Robert
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
