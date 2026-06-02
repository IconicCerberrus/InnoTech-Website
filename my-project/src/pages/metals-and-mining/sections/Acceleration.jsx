import {useTheme} from "../../../context/useTheme";

const Introduction = () => {
  const {isDarkMode} = useTheme();
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <div
      className={`self-stretch px-6 py-14 md:px-16 xl:px-[120px] ${
        isDarkMode ? "bg-[#050505]" : "bg-white"
      }`}
    >
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col items-start justify-center gap-4">
        {/* Green Circle */}
        <div className="size-16 left-[-14px] top-[-19px] absolute rounded-full border border-[#37B478]" />

        {/* Title */}
        <div className={`self-stretch justify-start text-4xl font-bold font-['Gotham'] ${textColor}`}>
          ACCELERATION
        </div>

        {/* Content */}
        <div className="self-stretch px-12 inline-flex justify-center items-center gap-2.5">
          <div className="flex-1 justify-start">
            <span className={`text-lg font-light font-['Gotham'] ${textColor}`}>
              Mining operators and metals enterprises face rising extraction
              complexity, fragmented operational systems, and volatile
              industrial transitions. Advancing mining modernization requires
              integrated innovation management, digital mining intelligence, and
              scalable transformation architectures across distributed
              industrial assets.
              <br />
              <br />
              Maximize industrial resilience through enterprise mining
              consulting for steel producers, mineral operators, alumina
              systems, and industrial holdings. Our specialized consulting
              frameworks deploy technology analytics, operational intelligence,
              and AI-enabled transformation systems to accelerate sustainable
              metals modernization.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
