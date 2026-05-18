import LatestNewsImage from "../assets/LatestNews.jpg";

function LatestNews() {
  return (
    <section className="relative w-full bg-black py-14 px-4 sm:px-6 lg:px-28">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="flex min-h-[640px] flex-col overflow-hidden rounded-[50px] bg-white lg:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16">
            <div className="relative mb-8 inline-flex items-center gap-3.5">
              <div className="absolute left-[-14px] top-[-19px] size-16 rounded-full border border-[#37B478]" />
              <h2 className="relative z-10 text-4xl font-normal text-black font-['Gotham']">
                Our latest news
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-normal text-black font-['Gotham'] leading-tight">
                InnotechCo launches INCEPTION — an AI-powered innovation
                management system
              </h3>

              <div className="flex flex-wrap items-center gap-8">
                <div className="text-base font-light text-black font-['Gotham']">
                  November 15, 2025
                </div>
                <div className="text-base font-normal text-[#37B478] font-['Gotham']">
                  2 minutes read
                </div>
              </div>

              <p className="text-base font-normal text-black font-['Gotham'] leading-relaxed">
                InnotechCo introduced INCEPTION, a modular innovation management
                system that helps R&amp;D and strategy teams map their
                innovation processes, run maturity assessments, and connect AI
                agents to real business workflows.
              </p>
            </div>

            <button
              type="button"
              className="mt-10 inline-flex flex-col items-center justify-start group"
            >
              <span className="text-base font-normal text-black font-['Gotham']">
                Read more
              </span>
              <span className="mt-1 h-0.5 w-20 rounded-full bg-[#37B478] opacity-75 blur-[0.5px] transition-all duration-300 group-hover:w-24" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[496px] shrink-0">
            <img
              src={LatestNewsImage}
              alt="Latest news"
              className="h-full w-full object-cover lg:min-h-[640px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
