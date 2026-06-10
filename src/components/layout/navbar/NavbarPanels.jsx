import {Link} from "react-router-dom";

import {industryMenuItems, serviceMenuItems} from "../navData";

function WhatWeDoPanel({closePanels, isDarkMode, isOpen}) {
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen
          ? "max-h-[400px] translate-y-0 pb-10 pt-2 opacity-100"
          : "max-h-0 -translate-y-2 pb-0 pt-0 opacity-0"
      }`}
    >
      <div className="flex items-start justify-center gap-28 px-10">
        <div className="flex items-start justify-center gap-12 py-2">
          <div className={`font-['Gotham'] text-base ${textColor}`}>
            Services:
          </div>
          <div className="inline-flex w-52 flex-col items-start gap-5">
            {serviceMenuItems.map((service) => (
              <Link
                key={service.label}
                to={service.to}
                onClick={closePanels}
                className="flex flex-col items-start self-stretch"
              >
                <div
                  className={`cursor-pointer font-['Gotham'] text-base font-bold transition-colors hover:text-emerald-400 ${textColor}`}
                >
                  {service.label}
                </div>
                <div
                  className={`self-stretch font-['Gotham'] text-xs leading-5 ${
                    isDarkMode ? "text-white/70" : "text-black/60"
                  }`}
                >
                  {service.description}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-center gap-12 py-2">
          <div className={`font-['Gotham'] text-base ${textColor}`}>
            Industries:
          </div>
          <div className="inline-flex w-52 flex-col items-start gap-5">
            {industryMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closePanels}
                className={`cursor-pointer font-['Gotham'] text-base font-bold transition-colors hover:text-emerald-400 ${textColor}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchPanel({
  inputRef,
  isDarkMode,
  isOpen,
  searchQuery,
  searchResults,
  setSearchQuery,
}) {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen
          ? "max-h-[350px] translate-y-0 pb-5 pt-5 opacity-100"
          : "max-h-0 -translate-y-2 pb-0 pt-0 opacity-0"
      }`}
    >
      <div className="w-full px-8">
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center gap-2.5 p-2"
        >
          <div
            className={`flex flex-1 items-center gap-2.5 overflow-hidden rounded-[40px] px-4 py-3 outline outline-1 outline-offset-[-1px] ${
              isDarkMode
                ? "bg-white/10 outline-white/20"
                : "bg-black/5 outline-black/10"
            }`}
          >
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="search pages, articles, and report"
              className={`w-full border-none bg-transparent font-['Gotham'] text-base font-light outline-none ${
                isDarkMode
                  ? "text-white placeholder:text-white/50"
                  : "text-black placeholder:text-black/40"
              }`}
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className={`transition-colors ${
                  isDarkMode
                    ? "text-white/70 hover:text-white"
                    : "text-black/50 hover:text-black"
                }`}
              >
                ×
              </button>
            ) : null}
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2.5 rounded-[50px] bg-[#37B478] px-4 py-2 font-['Gotham'] text-lg text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[#22C55E] active:scale-95 active:bg-[#16A34A]"
          >
            Search
          </button>
        </form>

        <div
          className={`mt-4 font-['Gotham'] text-sm ${
            isDarkMode ? "text-white/80" : "text-black/80"
          }`}
        >
          {searchQuery && searchResults.length === 0 ? (
            <div
              className={`break-words rounded-[32px] border px-5 py-4 ${
                isDarkMode
                  ? "border-white/10 bg-white/5"
                  : "border-black/10 bg-black/5"
              }`}
            >
              <div>No results found for:</div>
              <div className={isDarkMode ? "text-white" : "text-black"}>
                "{searchQuery}"
              </div>
            </div>
          ) : null}

          {searchResults.length > 0 ? (
            <div className="space-y-2">
              {searchResults.map((result) => (
                <div
                  key={`${result.title}-${result.type}`}
                  className={`cursor-pointer break-words rounded-[32px] border px-5 py-4 transition-colors duration-300 ${
                    isDarkMode
                      ? "border-white/10 bg-white/5 hover:bg-white/10"
                      : "border-black/10 bg-black/5 hover:bg-black/10"
                  }`}
                >
                  <div
                    className={`whitespace-normal break-words font-['Gotham'] text-sm font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {result.title}
                  </div>
                  <div
                    className={`font-['Gotham'] text-xs font-light ${
                      isDarkMode ? "text-white/70" : "text-black/60"
                    }`}
                  >
                    {result.type}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export {SearchPanel, WhatWeDoPanel};
