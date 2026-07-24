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
      "Kings Worthy",
      "Eastleigh",
      "Twyford",
      "Hursley",
      "Compton",
      "Shawford",
    ],

    geo: {
      latitude: null as number | null,
      longitude: null as number | null,
    },
  },

  branding: {
    title: "ROBIGO | Carpet & Upholstery Cleaning in Winchester",

    shortName: "ROBIGO",

    description:
      "Professional carpet, upholstery, mattress and chemical-free steam cleaning in Winchester and surrounding areas.",

    logo: "/logo.svg",

    favicon: "/favicon.svg",

    ogImage: "/og-image.jpg",

    themeColor: "#0F6CBD",
  },

  seo: {
    defaultTitle:
      "Professional Carpet Cleaning in Winchester | ROBIGO",

    titleTemplate: "%s | ROBIGO",

    defaultDescription:
      "Professional carpet, upholstery, mattress and chemical-free steam cleaning in Winchester. Honest pricing. No call-out charge. Free quotations.",

    keywords: [
      "carpet cleaning Winchester",
      "upholstery cleaning Winchester",
      "mattress cleaning Winchester",
      "steam cleaning Winchester",
      "rug cleaning Winchester",
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
