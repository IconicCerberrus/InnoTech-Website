function StatsSection({stats}) {
  return (
    <section className="relative px-6 py-24 md:px-16 xl:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between">
        {stats.map((icon) => (
          <div
            key={icon}
            className="flex h-44 min-w-[220px] items-center justify-center rounded-[32px] p-5 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-emerald-500"
          >
            <img
              src={icon}
              alt=""
              aria-hidden
              className="h-36 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
