export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "CleaningService",

  "@id": "https://robigo.co.uk/#business",

  name: "ROBIGO",

  url: "https://robigo.co.uk",

  image: "https://robigo.co.uk/og-image.jpg",

  logo: "https://robigo.co.uk/logo-512.png",

  telephone: "+447777449931",

  email: "info@robigo.co.uk",

  priceRange: "££",

  description:
    "Professional carpet, upholstery, mattress and chemical-free steam cleaning in Winchester and surrounding areas.",

  areaServed: [
    "Winchester",
    "Kings Worthy",
    "Eastleigh",
    "Twyford",
    "Hursley",
    "Compton",
    "Shawford",
  ],

  serviceType: [
    "Carpet Cleaning",
    "Upholstery Cleaning",
    "Mattress Cleaning",
    "Chemical-Free Steam Cleaning",
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],

  knowsAbout: [
    "Carpet Cleaning",
    "Upholstery Cleaning",
    "Mattress Cleaning",
    "Steam Cleaning",
    "Pet Odour Removal",
    "Deep Cleaning",
    "Stain Removal",
  ],

  sameAs: [
    // Ide később kerülhetnek a végleges profilok:
    // "https://g.page/....",
    // "https://www.facebook.com/...",
    // "https://nextdoor.co.uk/..."
  ],
};