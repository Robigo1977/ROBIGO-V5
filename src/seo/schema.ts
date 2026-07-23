export const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://robigo.co.uk/#business",

      name: "ROBIGO",

      legalName: "ROBIGO",

      url: "https://robigo.co.uk",

      image: "https://robigo.co.uk/og-image.jpg",

      logo: "https://robigo.co.uk/logo-512.png",

      telephone: "+447777449931",

      email: "robigo.hun@gmail.com",

      description:
        "Professional carpet cleaning, upholstery cleaning, mattress cleaning and chemical-free steam cleaning throughout Winchester and surrounding Hampshire areas.",

      priceRange: "££",

      slogan: "Premium Carpet Cleaning in Winchester",

      areaServed: [
        {
          "@type": "City",
          name: "Winchester",
        },
        {
          "@type": "City",
          name: "Kings Worthy",
        },
        {
          "@type": "City",
          name: "Eastleigh",
        },
        {
          "@type": "City",
          name: "Twyford",
        },
        {
          "@type": "City",
          name: "Shawford",
        },
        {
          "@type": "City",
          name: "Compton",
        },
        {
          "@type": "City",
          name: "Hursley",
        },
      ],

      serviceType: [
        "Carpet Cleaning",
        "Upholstery Cleaning",
        "Mattress Cleaning",
        "Rug Cleaning",
        "Chemical-Free Steam Cleaning",
        "Pet Odour Removal",
        "Deep Cleaning",
        "Stain Removal",
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
        "Carpet Cleaner",
        "Upholstery Cleaning",
        "Sofa Cleaning",
        "Mattress Cleaning",
        "Steam Cleaning",
        "Pet Odour Removal",
        "Stain Removal",
        "Deep Cleaning",
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",

        name: "Cleaning Services",

        itemListElement: [
          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Carpet Cleaning",
            },
          },
          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Upholstery Cleaning",
            },
          },
          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Mattress Cleaning",
            },
          },
          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Rug Cleaning",
            },
          },
          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Chemical-Free Steam Cleaning",
            },
          },
        ],
      },

      sameAs: [],
    },

    {
      "@type": "WebSite",

      "@id": "https://robigo.co.uk/#website",

      url: "https://robigo.co.uk",

      name: "ROBIGO",

      publisher: {
        "@id": "https://robigo.co.uk/#business",
      },

      inLanguage: "en-GB",
    },

    {
      "@type": "Organization",

      "@id": "https://robigo.co.uk/#organization",

      name: "ROBIGO",

      url: "https://robigo.co.uk",

      logo: {
        "@type": "ImageObject",

        url: "https://robigo.co.uk/logo-512.png",
      },

      telephone: "+447777449931",

      email: "robigo.hun@gmail.com",
    },
  ],
};

export default businessSchema;