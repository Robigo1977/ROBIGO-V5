import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp/FloatingWhatsApp";

import Hero from "./components/sections/Hero";
import UrgentServices from "./components/sections/UrgentServices";
import TrustBar from "./components/sections/TrustBar";
import BeforeAfter from "./components/sections/BeforeAfter";
import Services from "./components/sections/Services";
import ExploreMore from "./components/sections/ExploreMore/ExploreMore";
import Contact from "./components/sections/Contact";

import CarpetCleaningWinchester from "./pages/CarpetCleaningWinchester";
import MoreInformation from "./pages/MoreInformation";
import CommercialCleaningWinchester from "./pages/CommercialCleaningWinchester";
import CommercialSectorPage from "./pages/CommercialSectorPage";

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <UrgentServices />
      <TrustBar />
      <Services />
      <BeforeAfter compact />
      <ExploreMore />
      <Contact />
    </main>
  );
}

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView();
        return;
      }

      window.scrollTo({ top: 0, left: 0 });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <RouteScrollManager />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/carpet-cleaning-winchester"
          element={<CarpetCleaningWinchester />}
        />
        <Route path="/more-about-robigo" element={<MoreInformation />} />
        <Route
          path="/commercial-cleaning-winchester"
          element={<CommercialCleaningWinchester />}
        />
        <Route path="/business" element={<CommercialCleaningWinchester />} />
        <Route path="/business/:sector" element={<CommercialSectorPage />} />
      </Routes>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
