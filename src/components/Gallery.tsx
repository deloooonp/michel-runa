import { useIsMobile } from "../hooks/useIsMobile";

export default function Gallery() {
  const isMobile = useIsMobile();
  const photos = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png",
    "/gallery7.png",
    "/gallery8.png",
  ];

  return (
    <div className="bg-primary/70">
      <div className="w-full py-8 flex items-center justify-center mb-3">
        <h2 className="text-section-title text-white">Wedding Gallery</h2>
      </div>

      <div className="grid gap-1 bg-[#c9a84c]/30 rounded-b-xl p-3">
        {isMobile ? (
          <>
            <div className="grid grid-cols-2 gap-1">
              {photos.slice(0, 2).map((n) => (
                <img
                  key={n}
                  src={n}
                  className="w-full aspect-square object-cover rounded-sm"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1">
              {photos.slice(2, 4).map((n) => (
                <img
                  key={n}
                  src={n}
                  className="w-full aspect-square object-cover rounded-sm"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1">
              {photos.slice(4, 6).map((n) => (
                <img
                  key={n}
                  src={n}
                  className="w-full aspect-square object-cover rounded-sm"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1">
              {photos.slice(6, 8).map((n) => (
                <img
                  key={n}
                  src={n}
                  className="w-full aspect-square object-cover rounded-sm"
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-1">
              {photos.slice(0, 2).map((n) => (
                <img
                  key={n}
                  src={n}
                  className="w-full aspect-square object-cover rounded-sm"
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-1">
              {photos.slice(2, 5).map((n) => (
                <img
                  key={n}
                  src={n}
                  className="w-full aspect-square object-cover rounded-sm"
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-1">
              {photos.slice(5, 8).map((n) => (
                <img
                  key={n}
                  src={n}
                  className="w-full aspect-square object-cover rounded-sm"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
