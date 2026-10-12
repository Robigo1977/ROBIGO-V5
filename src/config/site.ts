const whatsappNumber = "447777449931";

export const site = {
  business: {
    name: "ROBIGO",
    legalName: "ROBIGO",

    domain: "https://robigo.co.uk",

    phone: "+447777449931",

    email: "robigo.hun@gmail.com",

    whatsapp: "+447777449931",

    priceRange: "££",

    openingHours: {
      opens: "08:00",
      closes: "20:00",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
  },

  location: {
    city: "Winchester",
    county: "Hampshire",
    country: "United Kingdom",

    serviceAreas: [
      "Winchester",
      "Eastleigh",
      "Chandler's Ford",
      "Shawford",
      "Compton",
      "Otterbourne",
      "Twyford",
      "King's Worthy",
      "Hursley",
    ],

    geo: {
      latitude: null as number | null,
      longitude: null as number | null,
    },
  },

  branding: {
    title: "ROBIGO | Professional Cleaning Services in Winchester",

    shortName: "ROBIGO",

    description:
      "Professional carpet, upholstery, rug, mattress, oven and chemical-free hard-floor steam cleaning in Winchester and surrounding areas.",

    logo: "/favicon.svg",

    favicon: "/favicon.svg",

    ogImage: "/images/services/hero.png",

    themeColor: "#0F6CBD",
  },

  seo: {
    defaultTitle:
      "Professional Cleaning Services in Winchester | ROBIGO",

    titleTemplate: "%s | ROBIGO",

    defaultDescription:
      "Professional carpet, upholstery, rug, mattress, oven and chemical-free hard-floor steam cleaning in Winchester. £50 minimum booking, no call-out charge and free quotations.",

    keywords: [
      "carpet cleaning Winchester",
      "upholstery cleaning Winchester",
      "mattress cleaning Winchester",
      "steam cleaning Winchester",
      "rug cleaning Winchester",
      "oven cleaning Winchester",
      "professional carpet cleaner",
      "deep carpet cleaning",
      "pet stain removal",
      "carpet cleaner Hampshire",
    ],
  },

  cta: {
    primary: "Get Free Quote",
    secondary: "Call Now",
    whatsappLabel: "WhatsApp Us",
  },

  social: {
    facebook: "",
    instagram: "",
    googleBusiness: "",
    linkedin: "",
    youtube: "",
  },

  analytics: {
    googleAnalytics: "",
    googleTagManager: "",
    microsoftClarity: "",
  },

  tel() {
    return `tel:${this.business.phone}`;
  },

  mailto() {
    return `mailto:${this.business.email}`;
  },

  whatsappMessage(message?: string) {
    const text = message
      ? encodeURIComponent(message)
      : encodeURIComponent(
          "Hi ROBIGO, I'd like to request a free quotation."
        );

    return `https://wa.me/${whatsappNumber}?text=${text}`;
  },
} as const;

export const siteConfig = site;

export type SiteConfig = typeof site;
