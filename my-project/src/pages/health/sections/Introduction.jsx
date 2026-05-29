const Introduction = () => {
  return (
    <div className="self-stretch px-28 py-14 inline-flex flex-col justify-start items-start gap-2.5">
      <div className="self-stretch relative flex flex-col justify-center items-start gap-4">
        {/* Green Circle */}
        <div className="size-16 left-[05px] top-[-19px] absolute rounded-full border border-[#37B478]" />

        {/* Title */}
        <div className="self-stretch justify-start px-6 text-white text-4xl font-bold font-['Gotham']">
          INTRODUCTION
        </div>

        {/* Content */}
        <div className="self-stretch px-12 inline-flex justify-center items-center gap-2.5">
          <div className="flex-1 justify-start">
            <span className="text-white text-lg font-light font-['Gotham']">
              The world needs energy—affordable, reliable, and sustainable
              energy. But meeting the world’s energy requirements with net-zero
              climate impact is one of today’s most complex challenges.
              <br />
              <br />
              Energy companies need to leverage the latest technologies,
              re-engineer processes, and rethink business models to drive
              change. BCG works with clients to build{" "}
            </span>
            <span className="text-white text-lg font-light font-['Gotham'] underline">
              sustainable
            </span>
            <span className="text-white text-lg font-light font-['Gotham']">
              , competitive energy solutions to achieve a net-zero energy world
              for all.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
