"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroVideoPlayer({ src = "/demo.mp4" }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="relative w-full h-full bg-[#0a0a0c] overflow-hidden rounded-2xl group">
      {/* Autoplaying Looping Video */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Single Sleek Mute/Unmute Toggle Button */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/60 hover:bg-black/80 border border-brand-gold/40 hover:border-brand-gold text-brand-gold backdrop-blur-md transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-warm-grey" />
            <span className="text-[10px] font-mono tracking-widest text-warm-grey uppercase font-bold">MUTED</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-brand-gold animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold">SOUND ON</span>
          </>
        )}
      </button>
    </div>
  );
}
