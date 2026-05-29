import {useState} from "react";
import {Routes, Route, useLocation} from "react-router-dom";

import {ThemeProvider} from "./context/ThemeContext";

import ContactModal from "./components/modals/ContactModal";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/home/Home";

import Automotive from "./pages/automotive/Automotive";
import EnergyAndMaterials from "./pages/energy-and-materials/EnergyAndMaterials";
import Health from "./pages/health/Health";
import HighTech from "./pages/high-tech/HighTech";
import MetalsAndMining from "./pages/metals-and-mining/MetalsAndMining";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const {pathname} = useLocation();
  const footerTopSpacing = [
    "/automotive",
    "/energy-and-materials",
    "/health",
    "/high-tech",
    "/metals-and-mining",
  ].includes(pathname)
    ? "mt-0"
    : undefined;

  return (
    <ThemeProvider>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/energy-and-materials" element={<EnergyAndMaterials />} />
          <Route path="/health" element={<Health />} />
          <Route path="/high-tech" element={<HighTech />} />
          <Route path="/metals-and-mining" element={<MetalsAndMining />} />
        </Routes>
        <Footer
          onContactClick={() => setIsContactOpen(true)}
          topSpacingClassName={footerTopSpacing}
        />
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
