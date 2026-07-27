import QuoteCalculator from "../components/sections/QuoteCalculator";
import SEO from "../seo/SEO";

import styles from "./InstantQuote.module.css";

export default function InstantQuote() {
  return (
    <main id="main-content">
      <SEO
        config={{
          title: "Instant Cleaning Quote Calculator | ROBIGO Winchester",
          description:
            "Calculate an instant estimate for carpet, upholstery, mattress, rug or steam cleaning in Winchester and surrounding areas.",
          canonical: "https://robigo.co.uk/instant-quote",
          ogTitle: "Instant Cleaning Quote Calculator | ROBIGO",
          ogDescription:
            "Get a clear, no-obligation cleaning estimate in about 60 seconds.",
          ogImage: "https://robigo.co.uk/og-image.jpg",
          twitterTitle: "Instant Cleaning Quote Calculator | ROBIGO",
          twitterDescription:
            "Get a clear, no-obligation cleaning estimate in about 60 seconds.",
          twitterImage: "https://robigo.co.uk/og-image.jpg",
        }}
      />

      <header className={styles.intro}>
        <span>WINCHESTER & SURROUNDING AREAS</span>
        <h1>Instant Cleaning Quote</h1>
        <p>
          Select what you need cleaned for an immediate estimate. No personal
          details are required to calculate your price.
        </p>
        <a href="/">Back to the main page</a>
      </header>

      <QuoteCalculator />
    </main>
  );
}
