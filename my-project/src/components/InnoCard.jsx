function InnoCard({title, subtitle, items = []}) {
  return (
    <div
      className="
        relative -mt-13 
        w-65 h-95 
        px-8 py-6 
        rounded-[50px]
        bg-green-500/5 
        border border-green-500/10
        shadow-[inset_1px_-1px_2px_0px_rgba(29,95,63,1.00)]
        
        /* Glow اصلی پشت کارت */
        shadow-[0_0_35px_-5px_rgba(55,180,120,0.35),
                0_0_60px_-10px_rgba(55,180,120,0.25)]

        inline-flex flex-col justify-start items-center gap-4 
        overflow-hidden flex-shrink-0 cursor-pointer
        transition-all duration-500 ease-out

        /* Hover قبلی (دقیقاً مثل قبل) */
        hover:bg-green-500/10
        hover:-translate-y-2
        hover:translate-x-1
        
        /* نئون Emerald ملایم (جدید) */
        hover:border-emerald-400/40
        hover:ring-1 hover:ring-emerald-400/20
        hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.45),
                     0_0_50px_-12px_rgba(52,211,153,0.25),
                     inset_1px_-1px_2px_0px_rgba(29,95,63,1.00)]

        before:absolute before:inset-0 
        before:bg-gradient-to-br 
        before:from-emerald-400/8 
        before:via-transparent 
        before:to-transparent
        before:opacity-0 hover:before:opacity-100 
        before:transition-opacity before:duration-500
        before:rounded-[50px] before:-z-10
      "
    >
      {/* محتوای قبلی بدون هیچ تغییری */}
      <div className="flex flex-col justify-start items-center gap-3">
        <div className="inline-flex justify-start items-start gap-3">
          <div className="flex flex-col justify-start items-start">
            <div className="text-center justify-start text-white text-base font-normal font-['Gotham']">
              {title}
            </div>
            <div className="justify-start text-white text-xs font-['Gotham']">
              {subtitle}
            </div>
          </div>
        </div>

        <div className="w-44 h-0 rounded-[50px] outline-2 -outline-offset-1 outline-[#37B478] blur-[2px]" />
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="self-stretch flex flex-col justify-start items-start gap-1"
          >
            <div className="self-stretch inline-flex justify-start items-start gap-1">
              <div className="w-4 self-stretch flex justify-center items-center gap-2.5">
                <div className="w-2 h-2 rounded-full border-[0.50px] border-[#37B478]" />
              </div>
              <div className="flex-1 justify-start text-white text-sm font-['Gotham']">
                {item.label}
              </div>
            </div>
            <div className="self-stretch text-left text-white text-xs font-light font-['Gotham'] leading-tight">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InnoCard;
