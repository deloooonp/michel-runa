import { Home } from "lucide-react";

export default function Events() {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <img
          src="/event.webp"
          alt="event"
          className="md:w-[55%] w-full h-auto"
        />

        {/* Teks di atas gambar */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-12 gap-5">
          <h1 className="text-section-title">Resepsi</h1>

          <p className="text-lg mt-2">Minggu, 29 Maret 2026</p>

          <p className="text-lg font-bold tracking-wider">11.00 - Selesai</p>

          <div className="flex items-center gap-3 w-full px-4 my-1">
            <div className="h-px flex-1 bg-white/40" />
            <Home className="w-10 h-10" />
            <div className="h-px flex-1 bg-white/40" />
          </div>

          <p className="text-lg font-bold tracking-wider">Gedung ...</p>

          <p className="text-lg">Cebolek Kidul, Margoyo, Kab. Pati, 59154.</p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white text-lg tracking-[3px] uppercase px-8 py-3 mt-2 hover:bg-white hover:text-primary transition-colors"
          >
            Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
