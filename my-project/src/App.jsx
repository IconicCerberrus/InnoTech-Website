import {useState} from "react";
import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import EcosystemSection from "./components/EcosystemSection";
import LatestNews from "./components/LatestNews";
import HowWeThink from "./components/HowWeThink";
import Map from "./components/Map";
import FooterFirstPage from "./components/FooterFirstPage";
import ContactModal from "./components/ContactModal"; // ← اضافه شد

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative w-full bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <FirstPage />
      <EcosystemSection />
      <LatestNews />
      <HowWeThink />
      <Map />

      <FooterFirstPage onContactClick={() => setIsContactOpen(true)} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
