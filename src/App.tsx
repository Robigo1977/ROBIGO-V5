import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp/FloatingWhatsApp";

import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing/Pricing";
import TrustBar from "./components/sections/TrustBar";
import QuoteCalculator from "./components/sections/QuoteCalculator";
import Services from "./components/sections/Services";
import WhyChoose from "./components/sections/WhyChoose";
import Reviews from "./components/sections/Reviews";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Pricing />
        <TrustBar />
        <QuoteCalculator />
        <Services />
        <WhyChoose />
        <Reviews />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;