import useCountdown from "@/hooks/useCountdown";

function CountBox({ val, label }: { val: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 border border-primary rounded-xl px-3 py-1">
      <span className="font-display text-md md:text-xl font-bold text-primary">
        {String(val).padStart(2, "0")}
      </span>
      <span className="text-sm uppercase text-primary">{label}</span>
    </div>
  );
}

export default function SaveTheDate() {
  const t = useCountdown("2026-03-29T11:00:00");

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center p-6 py-16">
      <img
        src="/savedate.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-primary opacity-85" />

      <div className="relative z-10 bg-white rounded-b-full rounded-t-full w-full max-w-[650px] px-8 py-10 flex flex-col items-center gap-5 shadow-2xl">
        <div className="w-full rounded-full overflow-hidden">
          <img
            src="/couple.png"
            alt="Foto Pasangan"
            className="w-full h-1/2 object-cover"
          />
        </div>

        <p className="text-md text-primary tracking-wide">QS. Ar-Rum Ayat 21</p>

        <p className="text-center text-lg leading-loose text-gray-800">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
        </p>

        <p className="text-center leading-relaxed">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya...
        </p>

        <p className="text-section-title">Save The Date</p>

        <div className="flex gap-3">
          <CountBox val={t.hari} label="Hari" />
          <CountBox val={t.jam} label="Jam" />
          <CountBox val={t.menit} label="Menit" />
          <CountBox val={t.detik} label="Detik" />
        </div>

        <button className="p-3 rounded-xl text-white text-lg bg-primary cursor-pointer hover:bg-primary/80 transition-colors">
          Simpan Tanggal
        </button>
      </div>
    </div>
  );
}
