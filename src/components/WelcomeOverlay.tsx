import { COUPLES, WEDDING_EVENT } from "@/constants";
import { useState } from "react";

export default function WelcomeOverlay(onOpen: () => void) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => onOpen(), 1000);
  };

  return (
    <div
      className={`
        fixed inset-0 z-100 flex flex-col items-center justify-center
        transition-transform duration-1000 ease-in-out bg-primary
        ${opening ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <img
        src="/hero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-8 max-w-sm">
        <div className="flex flex-col gap-2">
          <p className="textlg tracking-[6px] uppercase text-secondary font-semibold drop-shadow-sm">
            The Wedding Of
          </p>
        </div>

        <h1 className="text-display text-white drop-shadow-md leading-tight">
          {COUPLES[0].panggilan} <br />
          <span className="text-7xl italic text-secondary">&amp;</span> <br />
          {COUPLES[1].panggilan}
        </h1>

        <p className="text-lg text-white/90 tracking-[2px] font-medium drop-shadow-sm">
          {WEDDING_EVENT[0].date}
        </p>

        <button
          onClick={handleOpen}
          className="mt-8 px-10 py-4 rounded-full bg-primary text-white text-md tracking-[3px] uppercase font-bold shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:bg-[#c4a130] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 active:scale-95 cursor-pointer"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
