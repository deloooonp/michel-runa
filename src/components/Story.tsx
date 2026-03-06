import { STORIES } from "@/constants";

export default function Story() {
  return (
    <div className="px-4 py-10 flex flex-col gap-8">
      <h2 className="font-display text-4xl italic text-primary text-center">
        Love Story
      </h2>

      {STORIES.map((s, i) => (
        <div
          key={i}
          className="w-full md:w-1/2 mx-auto bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 shadow-md"
        >
          <div className="w-full aspect-4/3 bg-[#c9a84c]/30 flex items-center justify-center">
            <img src={s.photo} className="w-full h-full object-cover" />
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
