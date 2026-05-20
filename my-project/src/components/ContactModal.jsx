import {useEffect, useState} from "react";

function ContactModal({isOpen, onClose}) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (isOpen) {
      setShouldRender(true);

      timer = setTimeout(() => {
        setVisible(true);
      }, 10);
    } else {
      setVisible(false);

      timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-1000 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-[929px] p-11 bg-black rounded-[40px] outline outline-1 outline-offset-[-1px] outline-white/25 inline-flex flex-col justify-end items-end gap-5 overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
        }`}
      >
        {/* Header */}
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="w-[787px] px-4 relative flex justify-between items-end">
            <div className="w-[725px] justify-start text-white text-2xl font-normal font-['Gotham']">
              Contact Us
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="size-6 relative overflow-hidden flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Name */}
        <div className="self-stretch px-4 py-3 bg-black rounded-[50px] outline outline-1 outline-offset-[-1px] outline-white/25 inline-flex justify-start items-start gap-2.5">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-white text-sm font-['Gotham']"
            placeholder="Name"
          />
        </div>

        {/* Email */}
        <div className="self-stretch px-4 py-3 bg-black rounded-[50px] outline outline-1 outline-offset-[-1px] outline-white/25 inline-flex justify-start items-start gap-2.5">
          <input
            type="email"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-white text-sm font-['Gotham']"
            placeholder="Email"
          />
        </div>

        {/* Title + Company */}
        <div className="self-stretch inline-flex justify-start items-start gap-5">
          <div className="flex-1 px-4 py-3 bg-black rounded-[50px] outline outline-1 outline-offset-[-1px] outline-white/25">
            <input
              type="text"
              className="w-full bg-transparent outline-none text-white placeholder:text-white text-sm font-['Gotham']"
              placeholder="Title"
            />
          </div>

          <div className="flex-1 px-4 py-3 bg-black rounded-[50px] outline outline-1 outline-offset-[-1px] outline-white/25">
            <input
              type="text"
              className="w-full bg-transparent outline-none text-white placeholder:text-white text-sm font-['Gotham']"
              placeholder="Company"
            />
          </div>
        </div>

        {/* Region */}
        <div className="self-stretch px-4 py-3 bg-black rounded-[50px] outline outline-1 outline-offset-[-1px] outline-white/25 inline-flex justify-between items-center">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-white text-sm font-['Gotham']"
            placeholder="Select your region"
            readOnly
          />

          <svg
            viewBox="0 0 24 24"
            className="size-4 text-white shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Industry */}
        <div className="self-stretch px-4 py-3 bg-black rounded-[50px] outline outline-1 outline-offset-[-1px] outline-white/25 inline-flex justify-between items-center">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-white text-sm font-['Gotham']"
            placeholder="Select industry"
            readOnly
          />

          <svg
            viewBox="0 0 24 24"
            className="size-4 text-white shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Message */}
        <div className="self-stretch h-36 p-4 bg-black rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/25 inline-flex justify-start items-start">
          <textarea
            className="flex-1 bg-transparent outline-none text-white placeholder:text-white text-sm font-['Gotham'] resize-none h-full"
            placeholder="Massage"
          />
        </div>

        {/* Submit Button */}
        <div className="self-end">
          <button
            type="submit"
            className="px-8 py-3 bg-[#37B478] hover:bg-[#22C55E] active:scale-95 transition-all duration-200 rounded-[50px] flex items-center gap-2.5"
          >
            <span className="text-black text-2xl font-normal font-['Gotham']">
              Submit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
