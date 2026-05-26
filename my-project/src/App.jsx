import {Routes, Route} from "react-router-dom";

import {ThemeProvider} from "./context/ThemeContext";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/home/Home";

function App() {
  return (
    <ThemeProvider>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
