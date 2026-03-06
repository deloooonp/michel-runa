import { useState } from "react";
import { ACCOUNTS } from "@/constants";

function CreditCard({ bank, holder, number, logo }: (typeof ACCOUNTS)[0]) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
      <img src="/card.webp" alt="card" className="w-full h-auto object-cover" />

      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-end">
          <img src={logo} alt={bank} className="w-20 h-auto" />
        </div>

        {/* Bottom — info + button */}
        <div className="flex flex-col gap-3">
          {/* No rekening */}
          <div className="flex flex-col items-end">
            <p className="text-sm tracking-[3px] uppercase text-white/50">
              No. Rekening
            </p>
            <p className="font-sans text-lg tracking-widest text-white">
              {number}
            </p>
          </div>

          {/* Nama */}
          <div>
            <p className="text-sm tracking-[3px] uppercase text-white/50">
              Atas Nama
            </p>
            <p className="font-sans tracking-wide uppercase text-white">
              {holder}
            </p>
          </div>

          {/* Copy */}
          <button
            onClick={copy}
            className="font-sans w-full py-2 rounded-lg text-sm tracking-[2px] uppercase text-white border border-white/30 hover:bg-white/10 transition-colors cursor-pointer"
          >
            {copied ? "✓ Tersalin!" : "Salin Nomor"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gift() {
  return (
    <div className="py-12 px-6 flex flex-col items-center gap-6 text-center w-full mx-auto bg-primary/50 text-white">
      <h2 className="text-section-title">Wedding Gift</h2>

      <p className="text-lg leading-relaxed w-full md:w-3/4 lg:w-1/2">
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun
        jika memberi tanda kasih Anda, Anda dapat memberi kado secara cashless.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-md md:max-w-lg lg:max-w-xl">
        {ACCOUNTS.map((acc) => (
          <CreditCard key={acc.bank} {...acc} />
        ))}
      </div>
    </div>
  );
}
