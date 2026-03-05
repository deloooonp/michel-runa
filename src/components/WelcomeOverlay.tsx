import { useState } from "react";

interface LandingProps {
  guestName?: string;
  onOpen: () => void;
}

export default function Landing({
  guestName = "Nama Tamu",
  onOpen,
}: LandingProps) {
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
          <p className="text-[10px] tracking-[6px] uppercase text-[#d4af37] font-semibold drop-shadow-sm">
            The Wedding Of
          </p>
          <div className="h-px w-12 bg-[#d4af37]/40 mx-auto" />
        </div>

        <h1 className="font-display text-6xl text-white drop-shadow-md leading-tight">
          Michael <br />
          <span className="text-4xl italic text-[#d4af37]">&amp;</span> <br />
          Runa
        </h1>

        <p className="text-sm text-white/90 tracking-[2px] font-medium drop-shadow-sm">
          29 . 03 . 2026
        </p>

        <div className="flex flex-col items-center gap-2 mt-8 bg-white/10 backdrop-blur-md px-10 py-6 rounded-2xl border border-white/20 shadow-xl">
          <p className="text-[10px] text-white/70 tracking-[3px] uppercase">
            Kepada Yth.
          </p>
          <p className="font-display text-3xl text-white drop-shadow-sm">
            {guestName}
          </p>
        </div>

        <button
          onClick={handleOpen}
          className="mt-8 px-10 py-4 rounded-full bg-[#d4af37] text-primary text-xs tracking-[3px] uppercase font-bold shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:bg-[#c4a130] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 active:scale-95"
        >
          <span>🏠</span> Buka Undangan
        </button>
      </div>

      {/* Corner Decorative Elements (CSS circles) */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#d4af37]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-3xl" />
    </div>
  );
}
