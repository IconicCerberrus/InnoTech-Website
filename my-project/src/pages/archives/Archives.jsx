import {useMemo, useState} from "react";
import {Link} from "react-router-dom";

import {useTheme} from "../../context/useTheme";
import HowWeThinkImage from "../../assets/images/home/HowWeThink.jpg";

const sortOptions = [
  {label: "Most popular", value: "popular"},
  {label: "Newest", value: "newest"},
  {label: "Oldest", value: "oldest"},
  {label: "Longest read", value: "longest"},
];

const archiveItems = Array.from({length: 40}, (_, index) => {
  const month = (index % 12) + 1;
  const day = (index % 27) + 1;
  const year = 2026 - (index % 4);
  const readMinutes = 2 + (index % 9);

  return {
    id: index + 1,
    title: "InnotechCo launches INCEPTION — an AI-powered innovation management system",
    description:
      "A compact look at innovation workflows, AI agents, market intelligence, and digital transformation for industrial teams.",
    date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    popularity: 1000 - index * 17,
    readMinutes,
  };
});

function ArchiveCard({item, isDarkMode}) {
  const [position, setPosition] = useState({x: 0, y: 0, active: false});
  const textColor = isDarkMode ? "text-white" : "text-black";

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    });
  };

  return (
    <div
      className="relative min-w-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={() =>
        setPosition((current) => ({...current, active: false}))
      }
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] transition-opacity duration-300"
        style={{
          opacity: position.active ? 1 : 0,
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, rgba(55, 180, 120, 0.55), transparent 75%)`,
          filter: "blur(18px)",
        }}
      />
      <article
        className={`relative z-10 flex h-full min-h-[410px] flex-col overflow-hidden rounded-[28px] border border-[#37B478] transition-colors duration-500 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="h-40 overflow-hidden">
          <img
            src={HowWeThinkImage}
            alt=""
            aria-hidden
            className="size-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5 font-['Gotham']">
          <h2 className={`text-lg font-bold leading-tight ${textColor}`}>
            {item.title}
          </h2>
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className={textColor}>{item.date}</span>
            <span className="text-[#37B478]">{item.readMinutes} min read</span>
          </div>
          <p className={`text-sm leading-[1.45] ${textColor}`}>
            {item.description}
          </p>
          <Link
            to="/ai-agent"
            className={`group mt-auto flex w-fit flex-col items-start text-sm transition-colors duration-300 hover:text-[#37B478] ${textColor}`}
          >
            <span>Read more</span>
            <span className="mt-1 h-[2px] w-0 rounded-full bg-[#37B478] transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </article>
    </div>
  );
}

function Archives() {
  const {isDarkMode} = useTheme();
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const pageBackground = isDarkMode ? "bg-[#050505]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const fieldSurface = isDarkMode
    ? "border-white/15 bg-white/5 text-white placeholder:text-white/45"
    : "border-black/15 bg-black/5 text-black placeholder:text-black/45";

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = normalizedQuery
      ? archiveItems.filter(
          (item) =>
            item.title.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery),
        )
      : archiveItems;

    return [...matches].sort((a, b) => {
      if (sortBy === "popular") return b.popularity - a.popularity;
      if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
      if (sortBy === "longest") return b.readMinutes - a.readMinutes;
      return new Date(b.date) - new Date(a.date);
    });
  }, [query, sortBy]);

  return (
    <main
      className={`min-h-screen w-full overflow-hidden px-7 pb-24 pt-36 transition-colors duration-500 lg:px-35 ${pageBackground}`}
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10">
        <section className="flex flex-col items-center gap-3 text-center">
          <div className="size-6 rounded-full bg-[#37B478]" />
          <h1 className={`font-['Gotham'] text-5xl font-bold ${textColor}`}>
            Archives
          </h1>
        </section>

        <section className="flex flex-col gap-4 md:flex-row">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search archives"
            className={`min-h-14 flex-1 rounded-[50px] border px-6 font-['Gotham'] text-base outline-none transition-colors ${fieldSurface}`}
          />
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className={`min-h-14 rounded-[50px] border px-6 font-['Gotham'] text-base outline-none transition-colors md:w-64 ${fieldSurface}`}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </section>

        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <ArchiveCard
              key={item.id}
              item={item}
              isDarkMode={isDarkMode}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Archives;
