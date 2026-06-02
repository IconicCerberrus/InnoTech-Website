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
              Healthcare providers and life sciences enterprises face fragmented
              clinical infrastructures, rising diagnostics complexity, and
              <br />
              escalating operational inefficiencies. Advancing digital
              healthcare systems requires integrated Healthcare Innovation
              frameworks, AI healthcare orchestration, and enterprise-grade
              clinical intelligence architectures.
              <br />
              <br />
              Our integrated healthcare solutions combine innovation management,
              medical technology analytics, AI automation, and digital
              transformation frameworks to support sustainable growth across
              healthcare ecosystems, precision medicine initiatives, diagnostics
              operations, and advanced clinical infrastructures.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
