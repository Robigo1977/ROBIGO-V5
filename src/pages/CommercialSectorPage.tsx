import {
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Navigate, useParams } from "react-router-dom";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { site } from "../config/site";
import SEO from "../seo/SEO";
import businessSchema from "../seo/schema";

import styles from "./CommercialSectorPage.module.css";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

type Sector = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  idealFor: string;
  included: string[];
  results: string[];
  scheduling: string;
  pricing: string;
  faqs: { question: string; answer: string }[];
  whatsapp: string;
};

const sectorLinks = [
  { slug: "offices", label: "Offices" },
  { slug: "hospitality", label: "Hospitality" },
  { slug: "accommodation", label: "Accommodation" },
  { slug: "rental-properties", label: "Rental Properties" },
];

const sectors: Record<string, Sector> = {
  offices: {
    eyebrow: "OFFICES & OFFICE BUILDINGS",
    title: "A cleaner workplace makes a stronger business impression",
    description:
      "Professional carpet, upholstery and suitable hard-floor cleaning for individual offices, managed office buildings, receptions, meeting rooms and shared spaces in Winchester.",
    image: publicAsset("/images/commercial/commercial-office-hero.webp"),
    imageAlt:
      "Professional commercial carpet cleaning inside a modern office building",
    idealFor:
      "Independent offices, shared workspaces, managed office buildings, reception areas, meeting rooms and communal corridors.",
    included: [
      "Commercial carpet cleaning in offices and high-traffic areas",
      "Meeting-room chairs, desk chairs and reception seating",
      "Reception carpets, entrance areas and communal spaces",
      "Chemical-free dry-steam cleaning for suitable sealed hard floors",
      "Laser measurement for accurate large-area carpet quotations",
      "A final inspection before the work is signed off",
    ],
    results: [
      "A cleaner, more professional first impression",
      "Fresher shared spaces for staff and visitors",
      "A planned service with minimal workplace disruption",
    ],
    scheduling:
      "We clean outside your opening hours, including early mornings, evenings and agreed weekend appointments, to reduce disruption to staff, visitors and normal working hours.",
    pricing:
      "Commercial carpets start from £1.80/m² for areas of 100 m² or more. Upholstered chairs start from £8 each for bookings of 10 or more. Regular office-building plans receive a tailored fixed quotation.",
    faqs: [
      {
        question: "Can you clean outside our office hours?",
        answer:
          "Yes. Early-morning, evening and agreed weekend appointments are available to minimise disruption to staff, visitors and normal working hours.",
      },
      {
        question: "Can several office areas be included in one quotation?",
        answer:
          "Yes. Carpets, reception seating, meeting-room chairs and suitable sealed hard floors can be assessed together and included in one clear fixed quotation.",
      },
      {
        question: "Do you offer regular office-building cleaning plans?",
        answer:
          "Yes. Regular fixed appointments can be arranged for offices and managed buildings after an initial assessment of the areas, access and preferred schedule.",
      },
    ],
    whatsapp:
      "Hi ROBIGO, I'd like a quotation for an office or office building.",
  },
  hospitality: {
    eyebrow: "BARS, RESTAURANTS & HOSPITALITY",
    title: "Guest-facing spaces that look cared for",
    description:
      "Detailed cleaning for the carpets, upholstered chairs, booths and banquettes your customers see and use throughout every service.",
    image: publicAsset("/images/commercial/commercial-restaurant-booths.webp"),
    imageAlt: "Premium upholstered restaurant booths and dining seating",
    idealFor:
      "Restaurants, cafés, bars, pubs, private dining rooms, function spaces and other customer-facing hospitality venues.",
    included: [
      "Dining chairs, bar seating and upholstered stools",
      "Booths, banquettes and fixed upholstered seating",
      "Carpets, entrance areas and customer walkways",
      "Chemical-free dry steam for suitable sealed hard floors",
      "Reception sofas and waiting-area furniture",
      "Targeted treatment following a fabric and stain inspection",
      "A final presentation check before reopening",
    ],
    results: [
      "Cleaner seating customers can see and feel",
      "A fresher environment without interrupting service",
      "Consistent presentation across guest-facing areas",
    ],
    scheduling:
      "Out-of-hours cleaning is available before opening, after closing or on agreed quieter days, helping your venue stay presentation-ready without cleaning around guests.",
    pricing:
      "Upholstered chairs start from £8 each for 10 or more. Reception sofas start from £49. Large carpet areas start from £1.80/m² at 100 m² or more. Fixed recurring plans are quoted individually.",
    faqs: [
      {
        question: "Can you clean after the venue closes?",
        answer:
          "Yes. Out-of-hours appointments can be arranged before opening, after closing or on an agreed quieter day so cleaning does not take place around guests.",
      },
      {
        question: "Do you clean fixed booths and banquette seating?",
        answer:
          "Yes. Fixed upholstered seating, booths, dining chairs and bar seating are inspected before cleaning so the correct method can be selected for the fabric and construction.",
      },
      {
        question: "Can carpets, seating and hard floors be quoted together?",
        answer:
          "Yes. We can combine carpets, upholstery and chemical-free dry steam for suitable sealed hard floors into one clear commercial quotation.",
      },
    ],
    whatsapp:
      "Hi ROBIGO, I'd like a quotation for a restaurant, bar or hospitality venue.",
  },
  accommodation: {
    eyebrow: "AIRBNB, HOTELS & BOOKING.COM PROPERTIES",
    title: "Guest-ready rooms with a consistently fresh finish",
    description:
      "Professional deep cleaning for accommodation providers who depend on presentation, comfort and strong guest impressions.",
    image: publicAsset("/images/commercial/commercial-airbnb.webp"),
    imageAlt: "Premium guest-ready Airbnb and hotel accommodation",
    idealFor:
      "Airbnb hosts, boutique hotels, B&Bs, serviced accommodation and properties listed through Booking.com or similar platforms.",
    included: [
      "Bedroom and communal-area carpet cleaning",
      "Sofas, armchairs, headboards and bedroom seating",
      "Professional mattress cleaning",
      "Rugs and upholstered guest-area furniture",
      "Chemical-free dry steam for suitable sealed hard floors",
      "Scheduled deep cleans between busy booking periods",
      "Clear fixed quotations for repeat accommodation work",
    ],
    results: [
      "Guest-ready rooms with a more cared-for appearance",
      "Fresher mattresses, carpets and upholstered furniture",
      "Reliable deep-clean support around your booking calendar",
    ],
    scheduling:
      "Out-of-hours appointments can be coordinated around check-in windows, quieter booking periods and planned property-maintenance days.",
    pricing:
      "Accommodation packages are quoted according to room count and the items being cleaned. Carpet, upholstery, mattress and repeat-property work can be combined into one clear fixed quotation.",
    faqs: [
      {
        question: "Can cleaning be arranged around check-in times?",
        answer:
          "Yes. Appointments can be coordinated around check-out, check-in, quieter booking periods and planned property-maintenance days.",
      },
      {
        question: "Can you clean mattresses and bedroom upholstery?",
        answer:
          "Yes. Mattresses, headboards, bedroom chairs, sofas, rugs and carpets can be included according to the needs of each property.",
      },
      {
        question: "Do you offer repeat-property or regular plans?",
        answer:
          "Yes. Hosts and accommodation managers can request a tailored plan for repeat deep cleans across one or several properties.",
      },
    ],
    whatsapp:
      "Hi ROBIGO, I'd like a quotation for an Airbnb, hotel or Booking.com property.",
  },
  "rental-properties": {
    eyebrow: "RENTAL & TENANCY PROPERTIES",
    title: "Ready for handover, move-in or the next tenancy",
    description:
      "Carpet, upholstery and suitable hard-floor cleaning after move-out or before move-in, helping rental properties feel fresh and ready to occupy.",
    image: publicAsset("/images/commercial/commercial-rental-property.webp"),
    imageAlt: "Clean presentation-ready rental property interior",
    idealFor:
      "Landlords, tenants, letting agents, estate agencies, property managers and furnished rental-property owners.",
    included: [
      "End-of-tenancy carpet and rug cleaning",
      "Sofas, armchairs, dining chairs and furnished-property upholstery",
      "Mattress cleaning in furnished rental properties",
      "Move-in and move-out deep-clean support",
      "Chemical-free dry steam for suitable sealed tile and hard floors",
      "Suitable sealed parquet only after a careful surface inspection",
    ],
    results: [
      "A fresher property for photographs, viewings or handover",
      "Cleaner carpets and furnishings for the next occupant",
      "One clear quotation for multiple surfaces and items",
    ],
    scheduling:
      "Out-of-hours cleaning can be coordinated with landlords, tenants or agents around key collection, inventory appointments and tenancy handover dates.",
    pricing:
      "Minimum booking is £60. Carpets are laser measured for accurate area pricing. Upholstery, mattresses and suitable hard-floor dry-steam cleaning can be combined into one fixed property quotation.",
    faqs: [
      {
        question: "Can you coordinate access with an agent or landlord?",
        answer:
          "Yes. Appointments can be coordinated around key collection, inventory visits, property viewings and tenancy handover dates.",
      },
      {
        question: "What can be included before a new tenant moves in?",
        answer:
          "Carpets, rugs, furnished-property upholstery, mattresses and suitable sealed hard floors can be assessed and combined into one quotation.",
      },
      {
        question: "Can parquet or wood flooring be steam cleaned?",
        answer:
          "Only suitable sealed parquet is considered, and only after careful inspection. Unsealed or water-sensitive wood should not be steam cleaned.",
      },
    ],
    whatsapp:
      "Hi ROBIGO, I'd like a quotation for a rental or end-of-tenancy property.",
  },
};

export default function CommercialSectorPage() {
  const { sector: sectorSlug } = useParams();
  const sector = sectorSlug ? sectors[sectorSlug] : undefined;

  if (!sector) {
    return <Navigate to="/business" replace />;
  }

  return (
    <main>
      <SEO
        config={{
          title: `${sector.eyebrow} Cleaning Winchester | ROBIGO`,
          description: sector.description,
          canonical: `https://robigo.co.uk/business/${sectorSlug}`,
          ogTitle: `${sector.eyebrow} | ROBIGO`,
          ogDescription: sector.description,
          ogImage: `https://robigo.co.uk${sector.image}`,
          twitterTitle: `${sector.eyebrow} | ROBIGO`,
          twitterDescription: sector.description,
          twitterImage: `https://robigo.co.uk${sector.image}`,
        }}
        schema={businessSchema}
      />

      <section className={styles.hero}>
        <img src={sector.image} alt={sector.imageAlt} />
        <div className={styles.heroShade} />
        <Container>
          <div className={styles.heroCard}>
            <a href="#/business">
              <ArrowLeft aria-hidden="true" />
              All business sectors
            </a>
            <strong className={styles.heroBrand}>ROBIGO</strong>
            <p>{sector.eyebrow}</p>
            <h1>{sector.title}</h1>
            <span>{sector.description}</span>
            <div className={styles.heroActions}>
              <Button
                href={site.whatsappMessage(sector.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Request a Free Quote
              </Button>
              <small>
                Out-of-hours cleaning available · Fixed quotation · 7 days a week
              </small>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.sectorSwitcher}>
        <Container>
          <nav aria-label="Commercial cleaning sectors">
            {sectorLinks.map((item) => {
              const active = item.slug === sectorSlug;
              return (
                <a
                  href={`#/business/${item.slug}`}
                  key={item.slug}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <small>{active ? "Current sector" : "View services"}</small>
                </a>
              );
            })}
          </nav>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.intro}>
            <p>DESIGNED FOR YOUR PROPERTY</p>
            <h2>What your ROBIGO service includes</h2>
            <span>{sector.idealFor}</span>
          </div>

          <div className={styles.includedGrid}>
            {sector.included.map((item) => (
              <article key={item}>
                <CheckCircle2 aria-hidden="true" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.valueSection}`}>
        <Container>
          <div className={styles.valueGrid}>
            <article>
              <ShieldCheck aria-hidden="true" />
              <p>WHAT YOU ARE PAYING FOR</p>
              <h2>Professional results, not rushed work</h2>
              <ul>
                {sector.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </article>

            <article>
              <CalendarClock aria-hidden="true" />
              <p>FLEXIBLE SCHEDULING</p>
              <h2>Built around your timetable</h2>
              <span>{sector.scheduling}</span>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.quote}>
        <Container>
          <div className={styles.faq}>
            <header>
              <p>BUSINESS QUESTIONS</p>
              <h2>Useful details before you request a quote</h2>
            </header>
            <div>
              {sector.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.quote}>
        <Container>
          <div className={styles.quoteCard}>
            <MessageCircle aria-hidden="true" />
            <div>
              <p>CLEAR COMMERCIAL PRICING</p>
              <h2>Know what is included before work begins</h2>
              <span>{sector.pricing}</span>
            </div>
            <Button
              href={site.whatsappMessage(sector.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              WhatsApp Robert
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
