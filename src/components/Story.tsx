const stories = [
  {
    photo: "",
    title: "Perkenalan",
    date: "24 juli 2019",
    desc: "Semua berawal dari perkenalan singkat dari sosial media. Awalnya hanya bertukar pesan biasa tapi lama kelaman tumbuhlah rasa yang lebih dari sekedar teman. Disitu lah kisah kamu dimulai.",
  },
  {
    photo: "",
    title: "Lamaran",
    date: "8 Juni 2025",
    desc: "Setelah kisah yang cukup panjang bersama, Akhirnya pada tanggal 8 juni 2025 niat serius pun muncul untuk melamar dan meminta restu dari orang tua. ",
  },
  {
    photo: "",
    title: "Pernikahan",
    date: "29 Maret 2026",
    desc: "Lalu kini pada tanggal 29 Maret 2026 insyaAllah kami akan memulai lembaran baru dalam hidup kami. menyatukan hati pada ikatan suci. Sebuah ibadah panjang dalam bentuk pernikahan. Mohon doa dan restu agar dilancarkan🤍",
  },
];

export default function Story() {
  return (
    <div className="px-4 py-10 flex flex-col gap-8">
      <h2 className="font-display text-4xl italic text-primary text-center">
        Love Story
      </h2>

      {stories.map((s, i) => (
        <div
          key={i}
          className="w-full md:w-1/2 mx-auto bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 shadow-md"
        >
          <div className="w-full aspect-4/3 bg-[#c9a84c]/30 flex items-center justify-center">
            <span className="text-white/40 text-sm">📷 {s.title}</span>
            {/* swap ↑ dengan: <img src={s.photo} className="w-full h-full object-cover" /> */}
          </div>

          <div className="px-6 py-6 flex flex-col items-center text-center gap-2">
            <h3 className="font-display text-3xl italic text-primary">
              {s.title}
            </h3>
            <p className="font-bold text-lg tracking-wide text-primary">
              {s.date}
            </p>
            <p className="text-md text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
