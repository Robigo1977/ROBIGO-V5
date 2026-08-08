import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp/FloatingWhatsApp";

import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import BeforeAfter from "./components/sections/BeforeAfter";
import Services from "./components/sections/Services";
import OvenCleaning from "./components/sections/OvenCleaning";
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
      <Services />
      <OvenCleaning />
      <TrustBar />
      <BeforeAfter compact />
      <ExploreMore />
      <Contact />
    </main>
  );
}

function DrySteamRedirect() {
  useEffect(() => {
    window.location.replace("/dry-steam/index.html");
  }, []);

  return null;
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
  const { pathname } = useLocation();
  const showNavbar = pathname !== "/";

  return (
    <>
      <RouteScrollManager />
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carpet-cleaning-winchester" element={<CarpetCleaningWinchester />} />
        <Route path="/more-about-robigo" element={<MoreInformation />} />
        <Route path="/commercial-cleaning-winchester" element={<CommercialCleaningWinchester />} />
        <Route path="/business" element={<CommercialCleaningWinchester />} />
        <Route path="/business/:sector" element={<CommercialSectorPage />} />
        <Route path="/dry-steam" element={<DrySteamRedirect />} />
      </Routes>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
