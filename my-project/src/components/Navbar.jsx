import {useState, useEffect, useRef} from "react";

import Logo from "../assets/Frame 154.svg";
import SunMedium from "../assets/SunMedium.svg";
import SearchIcon from "../assets/Search.svg";
import Vector from "../assets/Vector.svg";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchRef = useRef(null);
  const searchDropdownRef = useRef(null);
  const inputRef = useRef(null);

  const isAnyDropdownOpen = isDropdownOpen || isSearchOpen;

  const searchItems = [
    {title: "What we do", type: "Page"},
    {title: "INSIGHT Store", type: "Page"},
    {title: "Innovation and Technology Management", type: "Article"},
    {title: "Digital Transformation Report", type: "Report"},
    {title: "Market Analytics Report", type: "Report"},
  ];

  // سرچ زنده
  useEffect(() => {
    const query = searchQuery.trim();
    if (!query) {
      setSearchResults([]);
      return;
    }

    const results = searchItems.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchResults(results);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSearchOpen &&
        searchRef.current &&
        searchDropdownRef.current &&
        !searchRef.current.contains(event.target) &&
        !searchDropdownRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6">
      <div className="w-[1265px] mx-auto">
        <div
          className={`bg-black/20 backdrop-blur-[3px] border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${
            isAnyDropdownOpen
              ? "rounded-[34px] bg-zinc-950/80"
              : "rounded-[50px]"
          }`}
        >
          {/* TOP BAR */}
          <div className="h-[73px] flex items-center px-8">
            <div className="flex items-center shrink-0">
              <img src={Logo} alt="InnoTech Logo" className="h-9 w-auto" />
            </div>

            <div className="flex-1 flex justify-center">
              <div className="hidden md:flex items-center gap-10">
                <a
                  href="#"
                  className="flex items-center gap-1 text-white font-['Gotham'] text-base hover:text-emerald-400 transition-colors"
                >
                  <span>Who we are</span>
                  <img
                    src={Vector}
                    alt=""
                    className="w-[9px] h-[9px] object-contain translate-y-[1px]"
                  />
                </a>

                <div
                  className="relative"
                  onMouseEnter={() => {
                    setIsDropdownOpen(true);
                    setIsSearchOpen(false);
                  }}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 text-white font-['Gotham'] text-base hover:text-emerald-400 transition-colors">
                    <span>What we do</span>
                    <img
                      src={Vector}
                      alt=""
                      className={`w-[9px] h-[9px] object-contain translate-y-[1px] transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>

                <a
                  href="#"
                  className="text-white font-['Gotham'] text-base hover:text-emerald-400 transition-colors"
                >
                  What we think
                </a>
                <a
                  href="#"
                  className="text-white font-['Gotham'] text-base hover:text-emerald-400 transition-colors"
                >
                  INLEARN Academy
                </a>
                <a
                  href="#"
                  className="text-white font-['Gotham'] text-base hover:text-emerald-400 transition-colors"
                >
                  INSIGHT Store
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <button className="flex items-center gap-1 text-white font-['Gotham'] text-base leading-none hover:text-emerald-400 transition-colors">
                <span>En</span>
                <img
                  src={Vector}
                  alt=""
                  className="w-[9px] h-[9px] object-contain translate-y-[1px]"
                />
              </button>

              <div className="w-[1.5px] h-[21px] bg-white/40" />

              <button className="group flex items-center justify-center w-[30px] h-[30px] transition-all duration-300">
                <img
                  src={SunMedium}
                  alt="Theme"
                  className="w-[30px] h-[30px] object-contain transition-all duration-300"
                />
              </button>

              <div className="w-[1.5px] h-[21px] bg-white/40" />

              <div ref={searchRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen((prev) => !prev);
                    setIsDropdownOpen(false);
                  }}
                  className="group flex items-center justify-center w-6 h-6 transition-all duration-300"
                >
                  <img
                    src={SearchIcon}
                    alt="Search"
                    className="w-6 h-6 object-contain transition-all duration-300"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* WHAT WE DO DROPDOWN - unchanged */}
          <div
            onMouseEnter={() => {
              setIsDropdownOpen(true);
              setIsSearchOpen(false);
            }}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isDropdownOpen
                ? "max-h-[400px] opacity-100 translate-y-0 pb-10 pt-2"
                : "max-h-0 opacity-0 -translate-y-2 pb-0 pt-0"
            }`}
          >
            {/* ... dropdown content unchanged ... */}
            <div className="px-10 flex justify-center items-start gap-28">
              {/* CAPABILITY and INDUSTRY sections remain the same */}
            </div>
          </div>

          {/* SEARCH DROPDOWN */}
          <div
            ref={searchDropdownRef}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isSearchOpen
                ? "max-h-[350px] opacity-100 translate-y-0 pb-5 pt-5"
                : "max-h-0 opacity-0 -translate-y-2 pb-0 pt-0"
            }`}
          >
            <div className="w-full px-8">
              <form
                onSubmit={handleSubmit}
                className="w-full p-2 flex items-center gap-2.5"
              >
                <div className="flex-1 px-4 py-3 bg-white/10 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-white/20 flex items-center gap-2.5 overflow-hidden">
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="search pages, articles, and report"
                    className="w-full bg-transparent border-none outline-none text-white text-base font-light font-['Gotham'] placeholder:text-white/50"
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        inputRef.current?.focus();
                      }}
                      className="text-white/70 hover:text-white transition-colors -mt-1"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#37B478] rounded-[50px] inline-flex justify-center items-center gap-2.5 overflow-hidden transition-all duration-300 hover:bg-emerald-400"
                >
                  <span className="text-white text-lg font-['Gotham']">
                    Search
                  </span>
                </button>
              </form>

              {/* SEARCH RESULTS */}
              <div className="mt-4 text-sm text-white/80 font-['Gotham']">
                {searchQuery && searchResults.length === 0 ? (
                  <div className="rounded-[32px] border border-white/10 bg-white/5 px-5 py-4">
                    <div>No results found for:</div>
                    <div className="text-white break-words">
                      "{searchQuery}"
                    </div>
                  </div>
                ) : null}

                {searchResults.length > 0 ? (
                  <div className="space-y-2">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="rounded-[32px] border border-white/10 bg-white/5 px-5 py-4 transition-colors duration-300 hover:bg-white/10 cursor-pointer"
                      >
                        <div className="text-white text-sm font-semibold font-['Gotham'] break-words leading-relaxed">
                          {result.title}
                        </div>

                        <div className="text-white/70 text-xs font-light font-['Gotham'] mt-1">
                          {result.type}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
