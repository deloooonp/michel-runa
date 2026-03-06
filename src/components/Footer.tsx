import { COUPLES } from "@/constants";

export default function Footer() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/footer.png"
        alt="footer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex flex-col items-center text-center text-white px-8 gap-4">
        <p className="text-lg tracking-wide">Kami Yang Berbahagia</p>

        <h1 className="font-display text-5xl">
          {COUPLES[0].panggilan} &amp; {COUPLES[1].panggilan}
        </h1>

        <p className="text-lg leading-relaxed max-w-md opacity-90">
          Atas kehadiran dan do'a restu dari Bapak/Ibu/Saudara/i sekalian, kami
          mengucapkan Terima Kasih.
        </p>

        <p className="text-lg font-semibold tracking-wide mt-2">
          Wassalamualaikum Wr. Wb.
        </p>
      </div>
      <p className="font-sans absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
        Copyright © {new Date().getFullYear()} deloooonp
      </p>
    </div>
  );
}
