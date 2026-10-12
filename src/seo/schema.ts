export const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["CleaningService", "ProfessionalService"],
      "@id": "https://robigo.co.uk/#business",
      name: "ROBIGO",
      legalName: "ROBIGO",
      url: "https://robigo.co.uk/",
      image: "https://robigo.co.uk/og-image.jpg",
      logo: "https://robigo.co.uk/favicon.svg",
      telephone: "+447777449931",
      email: "robigo.hun@gmail.com",
      description:
        "Professional carpet, upholstery, rug, mattress, oven and chemical-free hard-floor steam cleaning throughout Winchester and nearby Hampshire areas.",
      priceRange: "££",
      currenciesAccepted: "GBP",
      paymentAccepted: ["Cash", "Visa", "Mastercard", "Debit Card"],
      slogan: "Professional Cleaning Services in Winchester",
      areaServed: [
        { "@type": "City", name: "Winchester" },
        { "@type": "City", name: "Eastleigh" },
        { "@type": "Place", name: "Chandler's Ford" },
        { "@type": "Place", name: "King's Worthy" },
        { "@type": "Place", name: "Twyford" },
        { "@type": "Place", name: "Shawford" },
        { "@type": "Place", name: "Compton" },
        { "@type": "Place", name: "Hursley" },
        { "@type": "Place", name: "Otterbourne" },
      ],
      serviceType: [
        "Carpet Cleaning",
        "Upholstery Cleaning",
        "Sofa Cleaning",
        "Rug Cleaning",
        "Mattress Cleaning",
        "Chemical-Free Hard-Floor Steam Cleaning",
        "Oven Cleaning",
        "Pet Odour Treatment",
        "Stain Treatment",
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ROBIGO Cleaning Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Carpet Cleaning" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Upholstery Cleaning" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Rug Cleaning" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Mattress Cleaning" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Chemical-Free Hard-Floor Steam Cleaning",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Oven Cleaning" },
          },
        ],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://robigo.co.uk/#website",
      url: "https://robigo.co.uk/",
      name: "ROBIGO",
      publisher: { "@id": "https://robigo.co.uk/#business" },
      inLanguage: "en-GB",
    },
    {
      "@type": "Organization",
      "@id": "https://robigo.co.uk/#organization",
      name: "ROBIGO",
      url: "https://robigo.co.uk/",
      logo: {
        "@type": "ImageObject",
        url: "https://robigo.co.uk/favicon.svg",
      },
      telephone: "+447777449931",
      email: "robigo.hun@gmail.com",
    },
  ],
};

export default businessSchema;
