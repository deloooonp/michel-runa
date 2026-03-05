import { useEffect, useState } from "react";

export default function useCountdown(target: string) {
  const [time, setTime] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = +new Date(target) - Date.now();
      if (diff <= 0) return;
      setTime({
        hari: Math.floor(diff / 86400000),
        jam: Math.floor((diff % 86400000) / 3600000),
        menit: Math.floor((diff % 3600000) / 60000),
        detik: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}
