import {
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Navigate, useParams } from "react-router-dom";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { site } from "../config/site";
import SEO from "../seo/SEO";
import businessSchema from "../seo/schema";

import styles from "./CommercialSectorPage.module.css";

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
  spotlight?: {
    eyebrow: string;
    title: string;
    text: string;
    points: string[];
    callout: string;
  };
};

const sectorLinks = [
  { slug: "offices", label: "Offices" },
  { slug: "hotels", label: "Hotels" },
  { slug: "accommodation", label: "Airbnb" },
  { slug: "hospitality", label: "Hospitality" },
  { slug: "clinics", label: "Clinics" },
  { slug: "rental-properties", label: "Properties" },
];

const sectors: Record<string, Sector> = {
  offices: {
    eyebrow: "OFFICES & OFFICE BUILDINGS",
    title: "A cleaner workplace makes a stronger business impression",
    description:
      "Professional carpet, upholstery and suitable hard-floor cleaning for individual offices, managed office buildings, receptions, meeting rooms and shared spaces in Winchester.",
    image: "/images/commercial/commercial-office-hero.webp",
    imageAlt:
      "Professional commercial carpet cleaning inside a modern office building",
    idealFor:
      "Independent offices, shared workspaces, managed office buildings, reception areas, meeting rooms and communal corridors.",
    included: [
      "Commercial carpet cleaning in offices and high-traffic areas",
      "Meeting-room chairs, desk chairs and reception seating",
      "Reception carpets, entrance areas and communal spaces",
      "Chemical-free dry-steam cleaning for suitable sealed hard floors",
      "Laser measurement for accurate carpet and dry-steam floor quotations",
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
      "Commercial carpets start from £1.80/m² for areas of 100 m² or more. Upholstered chairs start from £8 each for bookings of 10 or more. Carpet and suitable dry-steam floor areas are laser measured before the final quotation.",
    faqs: [
      {
        question: "Can you clean outside our office hours?",
        answer:
          "Yes. Early-morning, evening and agreed weekend appointments are available to minimise disruption to staff, visitors and normal working hours.",
      },
      {
        question: "How are floor areas measured?",
        answer:
          "Carpeted areas and suitable hard-floor areas selected for dry-steam cleaning are measured with professional laser equipment, so the quotation reflects the area actually being cleaned.",
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
  hotels: {
    eyebrow: "PROFESSIONAL HOTEL DEEP CLEANING",
    title: "When surface cleaning is no longer enough",
    description:
      "Professional carpet, upholstery, mattress and chemical-free dry-steam cleaning for hotels that need more than a routine surface clean.",
    image: "/images/commercial/commercial-airbnb.webp",
    imageAlt: "Fresh premium hotel guest room prepared for guests",
    idealFor:
      "Independent hotels, boutique hotels, larger accommodation sites, guest rooms, corridors, receptions, lounges and other shared hotel areas.",
    included: [
      "Guest-room and corridor carpet cleaning",
      "Mattresses, headboards, armchairs and bedroom seating",
      "Reception sofas, lounge furniture and upholstered chairs",
      "Chemical-free dry-steam cleaning for suitable sealed hard floors",
      "Detailed treatment for grout lines and selected hard surfaces",
      "Laser-measured carpet and dry-steam floor areas",
      "One-off, seasonal and recurring deep-clean plans",
    ],
    results: [
      "Guest-facing spaces that look and feel better cared for",
      "A deeper clean where routine surface cleaning is no longer enough",
      "Planned work around quieter periods with minimal guest disruption",
    ],
    scheduling:
      "Appointments can be planned around quieter occupancy periods, room availability, maintenance days, evenings and agreed weekends to minimise disruption to guests and staff.",
    pricing:
      "Large carpet areas start from £1.80/m² at 100 m² or more. Suitable hard-floor dry-steam cleaning is £2.50/m² with a £50 minimum. Standard upholstery and mattresses are quoted by item, while larger fitted surfaces are assessed individually.",
    spotlight: {
      eyebrow: "PROFESSIONAL KÄRCHER SG 4/4 DRY-STEAM TECHNOLOGY",
      title: "Do not replace it before ROBIGO has inspected it",
      text:
        "Over time, deeply embedded dirt and residue can build up in grout lines, textured flooring and frequently used hotel surfaces. Routine wiping may improve the appearance temporarily, but it may no longer reach the contamination held deeper within the surface.",
      points: [
        "Chemical-free deep cleaning on suitable sealed hard surfaces",
        "Helps reduce up to 99.9% of bacteria on suitable tested hard surfaces when the correct method is used",
        "Ideal where grout lines or textured flooring appear permanently discoloured",
        "Every material is inspected before treatment for safety and suitability",
      ],
      callout: "Before replacing tired-looking flooring or surfaces, let ROBIGO inspect whether professional dry steam can give them a cleaner, fresher appearance.",
    },
    faqs: [
      {
        question: "Can cleaning be arranged around hotel occupancy?",
        answer:
          "Yes. Work can be coordinated around quieter periods, available rooms, maintenance days, evenings and agreed weekends.",
      },
      {
        question: "Is all hotel cleaning chemical-free?",
        answer:
          "No. Chemical-free cleaning applies specifically to our professional dry-steam service on suitable hard surfaces. Carpet, upholstery and mattress methods are selected separately according to the material and condition.",
      },
      {
        question: "How do you calculate the quotation?",
        answer:
          "Carpeted areas and suitable hard-floor areas selected for dry-steam cleaning are laser measured. Standard upholstery and mattresses are priced by item, while larger fitted upholstery is assessed individually.",
      },
    ],
    whatsapp: "Hi ROBIGO, I'd like a quotation for a hotel.",
  },
  accommodation: {
    eyebrow: "AIRBNB & SERVICED ACCOMMODATION",
    title: "Guest-ready rooms with a consistently fresh finish",
    description:
      "Professional deep cleaning for Airbnb hosts, serviced accommodation managers and Booking.com properties that depend on presentation and strong guest impressions.",
    image: "/images/commercial/commercial-airbnb.webp",
    imageAlt: "Premium guest-ready Airbnb and serviced accommodation",
    idealFor:
      "Airbnb hosts, serviced accommodation, short-stay properties and accommodation listed through Booking.com or similar platforms.",
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
      "Appointments can be coordinated around check-out, check-in, quieter booking periods and planned property-maintenance days.",
    pricing:
      "Accommodation packages are quoted according to room count and the items being cleaned. Carpet and suitable dry-steam floor areas are laser measured, while upholstery and mattresses are clearly quoted by item.",
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
      "Hi ROBIGO, I'd like a quotation for an Airbnb or serviced accommodation property.",
  },
  hospitality: {
    eyebrow: "RESTAURANTS, PUBS & CAFÉS",
    title: "Guest-facing spaces that look cared for",
    description:
      "Detailed cleaning for the carpets, upholstered chairs, booths and banquettes your customers see and use throughout every service.",
    image: "/images/commercial/commercial-restaurant-booths.webp",
    imageAlt: "Premium upholstered restaurant booths and dining seating",
    idealFor:
      "Restaurants, cafés, bars, pubs, private dining rooms, function spaces and other customer-facing hospitality venues.",
    included: [
      "Dining chairs, bar seating and upholstered stools",
      "Booths, banquettes and fixed upholstered seating",
      "Carpets, entrance areas and customer walkways",
      "Chemical-free dry steam for suitable sealed hard floors",
      "Reception sofas and waiting-area furniture",
      "Laser-measured carpet and dry-steam floor areas",
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
      "Upholstered chairs start from £8 each for 10 or more. Reception sofas start from £49. Large carpet areas start from £1.80/m² at 100 m² or more. Carpet and dry-steam floor areas are laser measured.",
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
      "Hi ROBIGO, I'd like a quotation for a restaurant, pub or café.",
  },
  clinics: {
    eyebrow: "PRIVATE CLINICS & DENTAL PRACTICES",
    title: "Where appearance matters — but hygiene matters even more",
    description:
      "Professional carpet, upholstery and chemical-free dry-steam cleaning for private clinics, dental practices and healthcare premises in Winchester.",
    image: "/images/commercial/commercial-office-hero.webp",
    imageAlt: "Clean professional private clinic reception environment",
    idealFor:
      "Private clinics, dental practices, consultation rooms, treatment premises, reception areas, waiting rooms and other hygiene-focused professional environments.",
    included: [
      "Reception carpets and high-traffic waiting areas",
      "Waiting-room chairs, sofas and upholstered seating",
      "Chemical-free dry steam for suitable sealed hard floors",
      "Selected high-touch hard surfaces after suitability inspection",
      "Laser-measured carpet and dry-steam floor areas",
      "Evening and agreed weekend appointments",
      "Clear one-off or recurring commercial quotations",
    ],
    results: [
      "A visibly cleaner and more professionally maintained environment",
      "Chemical-free hygienic treatment for suitable hard surfaces",
      "Work planned to minimise disruption to patients and staff",
    ],
    scheduling:
      "Cleaning can be arranged after appointments, during closed periods, in the evening or on agreed weekends so treatment schedules and patient access are not interrupted.",
    pricing:
      "Carpeted areas and suitable hard-floor areas selected for dry-steam cleaning are laser measured. Upholstered waiting-room seating is quoted by item, and recurring clinic plans receive a tailored fixed quotation.",
    spotlight: {
      eyebrow: "CHEMICAL-FREE HYGIENIC DRY-STEAM CLEANING",
      title: "A deeper standard for hygiene-focused premises",
      text:
        "Our professional Kärcher SG 4/4 dry-steam system does more than leave suitable hard surfaces looking cleaner. When the correct treatment method is used, it supports chemical-free hygienic cleaning in premises where patient confidence and careful presentation are essential.",
      points: [
        "Helps reduce up to 99.9% of bacteria on suitable tested hard surfaces",
        "No chemical cleaning products used during the suitable dry-steam treatment",
        "Suitable for selected sealed floors and hard surfaces after inspection",
        "Not a replacement for regulated clinical sterilisation or infection-control procedures",
      ],
      callout: "Professional appearance. Measurable fairness. A higher standard of hygiene.",
    },
    faqs: [
      {
        question: "Is dry-steam cleaning suitable for every clinical surface?",
        answer:
          "No. Every surface is inspected first. Dry steam is used only where the material, finish and manufacturer guidance make the treatment suitable.",
      },
      {
        question: "Does this replace clinical sterilisation procedures?",
        answer:
          "No. ROBIGO provides professional environmental cleaning. It does not replace regulated sterilisation, instrument decontamination or a clinic's required infection-control procedures.",
      },
      {
        question: "Can you work outside patient hours?",
        answer:
          "Yes. Evening, closed-period and agreed weekend appointments can be arranged to minimise disruption to patients and staff.",
      },
    ],
    whatsapp:
      "Hi ROBIGO, I'd like a quotation for a private clinic or dental practice.",
  },
  "rental-properties": {
    eyebrow: "RENTAL & TENANCY PROPERTIES",
    title: "Ready for handover, move-in or the next tenancy",
    description:
      "Carpet, upholstery and suitable hard-floor cleaning after move-out or before move-in, helping rental properties feel fresh and ready to occupy.",
    image: "/images/commercial/commercial-rental-property.webp",
    imageAlt: "Clean presentation-ready rental property interior",
    idealFor:
      "Landlords, tenants, letting agents, estate agencies, property managers and furnished rental-property owners.",
    included: [
      "End-of-tenancy carpet and rug cleaning",
      "Sofas, armchairs, dining chairs and furnished-property upholstery",
      "Mattress cleaning in furnished rental properties",
      "Move-in and move-out deep-clean support",
      "Chemical-free dry steam for suitable sealed tile and hard floors",
      "Laser-measured carpet and dry-steam floor areas",
    ],
    results: [
      "A fresher property for photographs, viewings or handover",
      "Cleaner carpets and furnishings for the next occupant",
      "One clear quotation for multiple surfaces and items",
    ],
    scheduling:
      "Out-of-hours cleaning can be coordinated with landlords, tenants or agents around key collection, inventory appointments and tenancy handover dates.",
    pricing:
      "Minimum booking is £60. Carpeted areas and suitable dry-steam floor areas are laser measured. Upholstery and mattresses can be combined into one fixed property quotation.",
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
            <a href="/business">
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
                Laser-measured pricing · Out-of-hours cleaning · Fixed quotation
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
                  href={`/business/${item.slug}`}
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

      {sector.spotlight && (
        <section className={`${styles.section} ${styles.valueSection}`}>
          <Container>
            <div className={styles.valueGrid}>
              <article>
                <Sparkles aria-hidden="true" />
                <p>{sector.spotlight.eyebrow}</p>
                <h2>{sector.spotlight.title}</h2>
                <span>{sector.spotlight.text}</span>
              </article>

              <article>
                <ShieldCheck aria-hidden="true" />
                <p>WHY IT MATTERS</p>
                <ul>
                  {sector.spotlight.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <strong>{sector.spotlight.callout}</strong>
              </article>
            </div>
          </Container>
        </section>
      )}

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
            <Ruler aria-hidden="true" />
            <div>
              <p>LASER-MEASURED COMMERCIAL PRICING</p>
              <h2>Pay for the area we actually clean</h2>
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
