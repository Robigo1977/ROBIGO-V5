import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Hotel,
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

const audiences = [
  {
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
      "Suitable hard floors and communal spaces",
    ],
  },
  {
    path: "/business/hospitality",
    icon: Utensils,
    title: "Bars, Restaurants & Hospitality",
    label: "Customer-facing venues",
    image: "/images/commercial/commercial-restaurant-booths.webp",
    alt: "Premium upholstered restaurant booth seating",
    text: "Professional care for the carpets and upholstered seating your guests see, touch and judge from the moment they arrive.",
    services: [
      "Dining chairs, booths and banquette seating",
      "Carpets, entrances and customer areas",
      "Evening and out-of-hours appointments",
    ],
  },
  {
    path: "/business/accommodation",
    icon: Hotel,
    title: "Airbnb, Hotels & Booking.com Properties",
    label: "Guest accommodation",
    image: "/images/commercial/commercial-airbnb.webp",
    alt: "Clean premium Airbnb and hotel accommodation",
    text: "Guest-ready carpet, upholstery and mattress cleaning for better first impressions, comfortable stays and consistently high standards.",
    services: [
      "Carpets, rugs and upholstered furniture",
      "Mattresses and bedroom seating",
      "Scheduled deep cleans between busy periods",
    ],
  },
  {
    path: "/business/rental-properties",
    icon: KeyRound,
    title: "Rental & Tenancy Properties",
    label: "Landlords, tenants and estate agencies",
    image: "/images/commercial/commercial-airbnb.webp",
    alt: "Presentation-ready rental property interior",
    text: "Presentation-ready cleaning after move-out or before move-in, helping rental properties feel fresh, cared for and ready to occupy.",
    services: [
      "End-of-tenancy carpets and upholstery",
      "Move-in and move-out deep-clean support",
      "Chemical-free dry steam for suitable sealed tile, hard floors and parquet after inspection",
    ],
  },
];

const rates = [
  ["Commercial carpet areas", "from Â£1.80/mÂ²", "For areas of 100 mÂ² or more"],
  ["Chemical-free steam", "Â£2.50/mÂ²", "Suitable hard floors Â· minimum Â£50"],
  ["Upholstered chairs", "from Â£8 each", "For bookings of 10 or more"],
  ["Reception sofas", "from Â£49", "Fabric inspection included"],
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
            "Commercial cleaning for offices, office buildings, hospitality venues, hotels, Airbnb and rental properties in Winchester. Carpet, upholstery and suitable hard-floor care.",
          canonical: "https://robigo.co.uk/commercial-cleaning-winchester",
          ogTitle: "Commercial Cleaning Winchester | ROBIGO",
          ogDescription:
            "Flexible professional cleaning for Winchester businesses.",
          ogImage:
            "https://robigo.co.uk/images/commercial/business-hero-mobile-safe.jpg",
          twitterTitle: "Commercial Cleaning Winchester | ROBIGO",
          twitterDescription:
            "Flexible professional cleaning for Winchester businesses.",
          twitterImage:
            "https://robigo.co.uk/images/commercial/business-hero-mobile-safe.jpg",
        }}
        schema={businessSchema}
      />

      <section className={styles.hero}>
        <picture className={styles.heroMedia}>
          <source
            media="(max-width: 699px)"
            srcSet="/images/commercial/business-hero-mobile-safe.jpg"
          />
          <img
            className={styles.heroImage}
            src="/images/commercial/business-hero-mobile-safe.jpg"
            alt="Professional commercial carpet cleaning with KÃ¤rcher extraction equipment in a premium business interior"
            fetchPriority="high"
          />
        </picture>
        <div className={styles.heroShade} />
        <div className={styles.heroForeground}>
          <Container>
            <div className={styles.heroContent}>
              <p className={styles.heroBrand}>ROBIGO</p>
              <p className={styles.eyebrow}>
                COMMERCIAL CLEANING FOR WINCHESTER BUSINESSES
              </p>
              <h1>
                <span className={styles.desktopHeadline}>
                  A cleaner space. A stronger first impression.
                </span>
                <span className={styles.mobileHeadline}>
                  Commercial cleaning. First-class impressions.
                </span>
              </h1>
              <p className={styles.heroText}>
                Premium carpet and upholstery care, plus chemical-free dry-steam
                cleaning for suitable hard floors â€” for businesses that care about
                presentation, hygiene and customer confidence.
              </p>
              <p className={styles.heroMeta}>
                Out-of-hours cleaning available Â· Fixed quotations Â· 7 days a week
              </p>
            </div>
          </Container>
        </div>
        <p className={styles.heroDomain}>The best quality. For less.</p>
      </section>

      <section className={styles.urgentSection} aria-labelledby="urgent-business-heading">
        <Container>
          <div className={styles.urgentIntro}>
            <div>
              <p className={styles.urgentEyebrow}>PRIORITY & EMERGENCY RESPONSE</p>
              <h2 id="urgent-business-heading">When your business cannot wait</h2>
            </div>
            <p>
              Fast, discreet support for urgent presentation issues, accidental
              spills and last-minute preparation across Winchester.
            </p>
          </div>

          <div className={styles.urgentGrid}>
            <article className={`${styles.urgentCard} ${styles.priorityCard}`}>
              <div className={styles.urgentIcon}>
                <Clock3 aria-hidden="true" />
              </div>
              <div className={styles.urgentCardBody}>
                <span className={styles.urgentBadge}>AVAILABLE NOW</span>
                <h3>Priority 24</h3>
                <p>
                  Need carpets or upholstery cleaned within the next 24 hours?
                  We will always do our best to fit your business in with a fast,
                  professional service.
                </p>
                <ul>
                  <li><CheckCircle2 aria-hidden="true" /> Priority booking</li>
                  <li><CheckCircle2 aria-hidden="true" /> 24-hour response</li>
                  <li><CheckCircle2 aria-hidden="true" /> WhatsApp confirmation</li>
                </ul>
                <div className={styles.urgentPrice}>
                  <span>Priority Upgrade</span>
                  <strong>Â£30</strong>
                </div>
                <a
                  className={styles.urgentAction}
                  href={site.whatsappMessage(
                    "Hi ROBIGO! I'd like to book Priority 24 cleaning for my business.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Priority 24 <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>

            <article className={`${styles.urgentCard} ${styles.emergencyCard}`}>
              <div className={styles.urgentIcon}>
                <AlertTriangle aria-hidden="true" />
              </div>
              <div className={styles.urgentCardBody}>
                <span className={styles.urgentBadge}>URGENT SUPPORT</span>
                <h3>Emergency Cleaning</h3>
                <p>
                  Unexpected spills and accidents happen. Send us a photo on
                  WhatsApp and we will advise on the quickest professional response.
                </p>
                <ul>
                  <li><CheckCircle2 aria-hidden="true" /> Coffee spills</li>
                  <li><CheckCircle2 aria-hidden="true" /> Wine stains</li>
                  <li><CheckCircle2 aria-hidden="true" /> Accidental soiling</li>
                </ul>
                <div className={styles.urgentPrice}>
                  <span>Emergency Call-Out</span>
                  <strong>Â£50</strong>
                </div>
                <a
                  className={styles.urgentAction}
                  href={site.whatsappMessage(
                    "Hi ROBIGO! I need emergency cleaning help for my business.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Emergency Help <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <header className={styles.sectionHeader}>
            <p>CHOOSE YOUR BUSINESS TYPE</p>
            <h2>Professional cleaning designed around your property</h2>
            <span>
              Select the section that best matches your premises and see the
              services most relevant to you.
            </span>
          </header>

          <div className={styles.audienceGrid}>
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <article className={styles.audienceCard} key={audience.path}>
                  <div className={styles.audienceVisual}>
                    <img
                      src={audience.image}
                      alt={audience.alt}
                      loading="lazy"
                    />
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
                      <span aria-hidden="true">&rarr;</span>
                    </a>
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
            Minimum booking Â£60. Large carpet areas are laser measured, so you
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
              +44 7777 449931 Â· robigo.hun@gmail.com Â· Winchester, Hampshire
            </small>
          </div>
        </Container>
      </section>
    </main>
  );
}
