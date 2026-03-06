import { COUPLES } from "@/constants";

export default function Profile() {
  return (
    <div className="bg-white/70 backdrop-blur-sm my-20 mx-4 border border-primary rounded-2xl px-6 py-10 flex flex-col items-center gap-4 text-center">
      <h1 className="font-display text-4xl text-primary italic">
        We Found Love
      </h1>
      <p className="font-sans font-semibold text-md tracking-wide">
        Assalamu`alaikum Warahmatullaahi Wabarakaatuh
      </p>
      <p className="font-sans text-md leading-relaxed max-w-xl">
        Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
        Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami
      </p>

      {COUPLES.map((m, i) => (
        <>
          {i === 1 && (
            <span key="amp" className="text-7xl italic">
              &amp;
            </span>
          )}
          <div
            key={m.nama}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-auto md:w-[500px] md:h-[660px] rounded-2xl overflow-hidden shadow-xl mt-2">
              <img
                src={m.foto}
                alt={m.nama}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h2 className="text-4xl italic">{m.panggilan}</h2>
              <h3 className="text-2xl text-primary font-semibold">{m.nama}</h3>
              <p className="font-sans text-md">{m.keterangan}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
