import {useState} from "react";
import Logo from "../assets/Frame 154.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 pt-4">
      <div className="max-w-[1265px] mx-auto px-4">
        {/* Main Navbar Container - دقیقاً طبق Figma */}
        <div
          className="h-[73px] bg-zinc-900/80 backdrop-blur-2xl border border-white/10 
                        rounded-[50px] flex items-center justify-between px-8 shadow-2xl"
        >
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="InnoTech Logo" className="h-9 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <div className="relative group">
              <button className="hover:text-white transition flex items-center gap-1">
                Who we are
                <span className="text-xs">▼</span>
              </button>
            </div>

            <div className="relative group">
              <button className="hover:text-white transition flex items-center gap-1">
                What we do
                <span className="text-xs">▼</span>
              </button>
            </div>

            <a href="#" className="hover:text-white transition">
              What we think
            </a>
            <a href="#" className="hover:text-white transition">
              INLEARN Academy
            </a>
            <a href="#" className="hover:text-white transition">
              INSIGHT Store
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6 text-white/80">
            <button className="hover:text-white transition text-sm flex items-center gap-1">
              En <span className="text-xs">▼</span>
            </button>

            <button className="hover:text-white transition text-xl">☀️</button>
            <button className="hover:text-white transition text-xl">🔍</button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-2xl hover:text-white transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden max-w-[1265px] mx-auto mt-3 px-4">
          <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 text-white">
            {/* آیتم‌های موبایل بعداً اضافه می‌شود */}
          </div>
        </div>
      )}
    </nav>
  );
}


export default Navbar;
