import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp/FloatingWhatsApp";

import Hero from "./components/sections/Hero";
import UrgentServices from "./components/sections/UrgentServices";
import TrustBar from "./components/sections/TrustBar";
import QuoteCalculator from "./components/sections/QuoteCalculator";
import BeforeAfter from "./components/sections/BeforeAfter";
import Services from "./components/sections/Services";
import ExploreMore from "./components/sections/ExploreMore/ExploreMore";
import Contact from "./components/sections/Contact";

import CarpetCleaningWinchester from "./pages/CarpetCleaningWinchester";
import MoreInformation from "./pages/MoreInformation";

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <UrgentServices />
      <TrustBar />
      <QuoteCalculator />
      <Services />
      <BeforeAfter compact />
      <ExploreMore />
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
        <Route path="/more-about-robigo" element={<MoreInformation />} />
      </Routes>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
