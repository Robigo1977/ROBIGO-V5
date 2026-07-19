import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp/FloatingWhatsApp";

import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import QuoteCalculator from "./components/sections/QuoteCalculator";
import BeforeAfter from "./components/sections/BeforeAfter";
import Services from "./components/sections/Services";
import WhyChoose from "./components/sections/WhyChoose";
import Reviews from "./components/sections/Reviews";
import Pricing from "./components/sections/Pricing/Pricing";
import ServiceAreas from "./components/sections/ServiceAreas";
import FAQ from "./components/sections/FAQ";
import UrgentServices from "./components/sections/UrgentServices";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />

        <TrustBar />

        <QuoteCalculator />

        <BeforeAfter />

        <Services />

        <WhyChoose />

        <Reviews />

        <Pricing />

        <ServiceAreas />

        <FAQ />

        <UrgentServices />

        <Contact />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}

export default App;