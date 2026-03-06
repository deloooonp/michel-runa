import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import type { YouTubeProps } from "react-youtube";
import { Pause, Play, Music } from "lucide-react";

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicControl: React.FC<MusicControlProps> = ({ isPlaying, onToggle }) => {
  const playerRef = useRef<any>(null);
  const videoId = "1WCIrw85zbQ";

  const opts: YouTubeProps["opts"] = {
    height: "1",
    width: "1",
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      playsinline: 1,
    },
  };

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }
  }, [isPlaying]);

  const onReady = (event: any) => {
    playerRef.current = event.target;
    if (isPlaying) {
      event.target.playVideo();
    }
  };

  const onStateChange = (event: any) => {
    if (event.data === 0) {
      event.target.playVideo();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="absolute opacity-0 pointer-events-none -z-50 overflow-hidden w-0 h-0">
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onReady}
          onStateChange={onStateChange}
        />
      </div>

      <button
        onClick={onToggle}
        className={`
          relative flex items-center justify-center w-14 h-14 rounded-full 
          bg-primary text-white shadow-2xl transition-all duration-500
          ${isPlaying ? "animate-spin-slow" : "scale-95 opacity-80"}
          hover:scale-110 active:scale-90 cursor-pointer group
        `}
      >
        {isPlaying && (
          <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
        )}

        <div className="relative z-10 flex items-center justify-center">
          {isPlaying ? (
            <Pause className="w-6 h-6 fill-current" />
          ) : (
            <Play className="w-6 h-6 fill-current ml-1" />
          )}
        </div>

        <div className="absolute -top-12 right-0 bg-white text-primary text-[10px] font-bold px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/20 pointer-events-none">
          {isPlaying ? "Pause Music" : "Play Music"}
        </div>

        {isPlaying && (
          <>
            <Music className="absolute -top-4 -left-2 w-4 h-4 text-white animate-bounce opacity-80 delay-100" />
            <Music className="absolute -top-2 -right-4 w-3 h-3 text-white animate-pulse opacity-60 delay-300" />
          </>
        )}
      </button>
    </div>
  );
};

export default MusicControl;
