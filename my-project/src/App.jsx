import {useState} from "react";
import {Routes, Route, useLocation} from "react-router-dom";

import {ThemeProvider} from "./context/ThemeContext";

import ContactModal from "./components/modals/ContactModal";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/home/Home";

import Automotive from "./pages/automotive/Automotive";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const {pathname} = useLocation();
  const showFooter = pathname !== "/automotive";

  return (
    <ThemeProvider>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/automotive" element={<Automotive />} />
        </Routes>
        {showFooter && (
          <>
            <Footer onContactClick={() => setIsContactOpen(true)} />
            <ContactModal
              isOpen={isContactOpen}
              onClose={() => setIsContactOpen(false)}
            />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
