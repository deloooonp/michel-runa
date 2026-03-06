import { Home } from "lucide-react";
import { WEDDING_EVENT } from "@/constants";

export default function Events() {
  return (
    <div className="flex flex-col gap-10 py-10">
      {WEDDING_EVENT.map((event, i) => (
        <div key={i} className="flex justify-center items-center px-4 w-full">
          {/* Container wrapper for image + content */}
          <div className="relative w-full md:w-[65%] lg:w-[55%] min-h-[500px] flex items-center justify-center overflow-hidden rounded-4xl shadow-xl">
            {/* Background Image */}
            <img
              src="/event.webp"
              alt="event"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white text-center p-6 md:p-12 gap-4 md:gap-5 w-full">
              <h1 className="text-section-title text-2xl md:text-3xl lg:text-4xl">
                {event.type}
              </h1>

              <p className="text-sm md:text-lg">{event.date}</p>

              <p className="text-sm md:text-lg font-bold tracking-wider">
                {event.time}
              </p>

              <div className="flex items-center gap-3 w-full px-4 max-w-xs">
                <div className="h-px flex-1 bg-white/40" />
                <Home className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 shrink-0" />
                <div className="h-px flex-1 bg-white/40" />
              </div>

              <p className="text-sm md:text-lg max-w-md">{event.address}</p>

              {/* Responsive Map Iframe */}
              <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 group relative mt-2">
                <iframe
                  src={event.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.5] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-xl" />
              </div>

              <a
                href={event.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white text-xs md:text-sm tracking-[2px] md:tracking-[3px] uppercase px-6 py-2 md:px-8 md:py-3 mt-4 hover:bg-white hover:text-primary transition-colors flex items-center gap-2"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
