"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export default function CustomVideoPlayer({ src }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  let hideControlsTimeout = useRef(null);
  const animationRef = useRef(null);

  // Smooth progress animation
  const updateProgress = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
    animationRef.current = requestAnimationFrame(updateProgress);
  };

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(updateProgress);
    } else {
      cancelAnimationFrame(animationRef.current);
    }
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPlaying]);

  // Autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Autoplay blocked by browser:", err);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current) {
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Handle fading controls
  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) {
      clearTimeout(hideControlsTimeout.current);
    }
    if (isPlaying) {
      hideControlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video bg-[#080808] rounded-xl overflow-hidden shadow-2xl group flex flex-col justify-end"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        playsInline
      />
      
      {/* Big Play Button Overlay (when paused) */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity duration-300"
          onClick={togglePlay}
        >
          <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center pl-1.5 shadow-[0_0_30px_rgba(200,169,110,0.4)] hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-black fill-black" />
          </div>
        </div>
      )}

      {/* Controls Bar */}
      <div 
        className={`relative z-10 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12 pb-4 px-4 transition-opacity duration-500 ${showControls ? "opacity-100" : "opacity-0"}`}
      >
        {/* Progress Bar Wrapper */}
        <div className="w-full flex items-center mb-4 group/progress h-4 cursor-pointer" onClick={handleProgressClick}>
          {/* Actual Track */}
          <div className="w-full h-1.5 bg-white/20 rounded-full relative">
            {/* Filled Progress */}
            <div 
              className="absolute top-0 left-0 h-full bg-brand-gold rounded-full"
              style={{ width: `${progress}%` }}
            >
              {/* Scrubber Ball */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-brand-gold rounded-full shadow-md transform translate-x-1/2 group-hover/progress:scale-125 transition-transform duration-200"></div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={togglePlay}
              className="text-white hover:text-brand-gold transition-colors focus:outline-none"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
            </button>
            
            <button 
              onClick={toggleMute}
              className="text-white hover:text-brand-gold transition-colors focus:outline-none"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>

          <div>
            <button 
              onClick={toggleFullScreen}
              className="text-white hover:text-brand-gold transition-colors focus:outline-none"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
