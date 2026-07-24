import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp/FloatingWhatsApp";

import Hero from "./components/sections/Hero";
import UrgentServices from "./components/sections/UrgentServices";
import TrustBar from "./components/sections/TrustBar";
import QuoteCalculator from "./components/sections/QuoteCalculator";
import LocalTrust from "./components/sections/LocalTrust/LocalTrust";
import BeforeAfter from "./components/sections/BeforeAfter";
import Services from "./components/sections/Services";
import WhyChoose from "./components/sections/WhyChoose";
import Reviews from "./components/sections/Reviews";
import Pricing from "./components/sections/Pricing/Pricing";
import ServiceAreas from "./components/sections/ServiceAreas";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";

import CarpetCleaningWinchester from "./pages/CarpetCleaningWinchester";

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <UrgentServices />
      <TrustBar />
      <QuoteCalculator />
      <LocalTrust />
      <BeforeAfter />
      <Services />
      <WhyChoose />
      <Reviews />
      <Pricing />
      <ServiceAreas />
      <FAQ />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/carpet-cleaning-winchester"
          element={<CarpetCleaningWinchester />}
        />
      </Routes>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
