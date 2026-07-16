export const site = {
  businessName: "ROBIGO",

  owner: "Robert",

  website: "https://robigo.co.uk",

  serviceArea: "Winchester & surrounding areas",

  phone: "+447777449931",

  whatsapp: "447777449931",

  email: "info@robigo.co.uk",

  openingHours: "Monday – Sunday • 8:00 AM – 8:00 PM",

  cta: {
    primary: "Get My Free Quote",
    secondary: "Call Robert",
    whatsappLabel: "WhatsApp Robert",
    response: "Fast WhatsApp response",
  },

  trust: {
    noCallOut: "No Call-Out Charge",
    freeQuotes: "Free Quotes",
    sevenDays: "7 Days a Week",
    honestPricing: "Honest Fixed Pricing",
  },

  whatsappMessage(message?: string) {
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(
      message ??
        "Hi Robert, I'd like a free quote for professional cleaning."
    )}`;
  },

  tel() {
    return `tel:${this.phone}`;
  },
};