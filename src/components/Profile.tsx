const mempelai = [
  {
    foto: "/pria.png",
    panggilan: "Michael",
    nama: "Michael Utama Nugroho",
    keterangan: "Putra pertama Bapak Djatmiko Mukti Husodo dan Ibu Nasih",
  },
  {
    foto: "/wanita.png",
    panggilan: "Runa",
    nama: "Runa Aryahiyatus Shina",
    keterangan: "Putri pertama Bapak Nur Khamid dan Ibu Muslikah",
  },
];

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

      {mempelai.map((m, i) => (
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
            <h2 className="text-4xl italic mt-2">{m.panggilan}</h2>
            <h3 className="text-2xl text-primary font-semibold">{m.nama}</h3>
            <p className="font-sans text-md text-gray-500">{m.keterangan}</p>
          </div>
        </>
      ))}
    </div>
  );
}
