import { COUPLES, WEDDING_EVENT } from "@/constants";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
      <img
        src="/hero.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-3 text-white text-center">
        <p className="text-lg">The Wedding Of</p>
        <h1 className="text-display flex flex-col items-center gap-3">
          {COUPLES[0].panggilan} <span>&amp;</span> {COUPLES[1].panggilan}
        </h1>
        <p className="text-lg">{WEDDING_EVENT[0].date}</p>
      </div>
    </div>
  );
}
