"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export default function CustomVideoPlayer({ src }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // Default to 107.44s (exact duration of thank-you.mp4) so duration displays accurately even before tail moov atom is downloaded
  const [duration, setDuration] = useState(107.44);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showUnmuteBanner, setShowUnmuteBanner] = useState(false);
  
  const hideControlsTimeout = useRef(null);

  // Unmute and ensure audio plays with voice at full volume
  const enableSound = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      setIsMuted(false);
      setVolume(1);
      setShowUnmuteBanner(false);
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Update duration whenever available from the video element
  const syncDuration = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      const dur = video.duration;
      if (dur && !isNaN(dur) && isFinite(dur) && dur > 0) {
        setDuration(dur);
      }
    }
  }, []);

  // Continuous animation frame loop to keep time, progress, and playing state 100% in sync
  useEffect(() => {
    let animId;
    const syncState = () => {
      const video = videoRef.current;
      if (video) {
        const currentlyPlaying = !video.paused && !video.ended;
        setIsPlaying(currentlyPlaying);

        // Sync duration if browser has indexed the tail moov atom
        const dur = video.duration;
        let effectiveDuration = duration;
        if (dur && !isNaN(dur) && isFinite(dur) && dur > 0) {
          effectiveDuration = dur;
          setDuration(dur);
        }

        const curr = video.currentTime || 0;
        setCurrentTime(curr);

        if (effectiveDuration > 0) {
          setProgress(Math.min(100, (curr / effectiveDuration) * 100));
        }
      }
      animId = requestAnimationFrame(syncState);
    };

    animId = requestAnimationFrame(syncState);
    return () => cancelAnimationFrame(animId);
  }, [duration]);

  // Direct native event listeners on video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      syncDuration();
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowControls(true);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setShowControls(true);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("playing", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("durationchange", syncDuration);
    video.addEventListener("loadedmetadata", syncDuration);
    video.addEventListener("canplay", syncDuration);
    video.addEventListener("timeupdate", syncDuration);

    // Initial check
    if (!video.paused) {
      setIsPlaying(true);
    }
    syncDuration();

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("playing", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("durationchange", syncDuration);
      video.removeEventListener("loadedmetadata", syncDuration);
      video.removeEventListener("canplay", syncDuration);
      video.removeEventListener("timeupdate", syncDuration);
    };
  }, [syncDuration]);

  // Bulletproof Autoplay with voice on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;
    setIsMuted(false);
    setVolume(1);

    const attemptAutoplay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
        setShowUnmuteBanner(false);
      } catch (err) {
        console.warn("Autoplay with voice restricted by browser policy. Starting muted and awaiting first gesture:", err);
        video.muted = true;
        setIsMuted(true);
        setShowUnmuteBanner(true);

        try {
          await video.play();
          setIsPlaying(true);
        } catch (e) {
          console.warn("Muted autoplay error:", e);
        }

        const handleGesture = () => {
          enableSound();
          window.removeEventListener("click", handleGesture, true);
          window.removeEventListener("touchstart", handleGesture, true);
          window.removeEventListener("pointerdown", handleGesture, true);
          window.removeEventListener("keydown", handleGesture, true);
        };

        window.addEventListener("click", handleGesture, { capture: true, once: true });
        window.addEventListener("touchstart", handleGesture, { capture: true, once: true });
        window.addEventListener("pointerdown", handleGesture, { capture: true, once: true });
        window.addEventListener("keydown", handleGesture, { capture: true, once: true });
      }
    };

    attemptAutoplay();

    // Auto-hide controls after 2.5s on initial load
    const initialHideTimer = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setShowControls(false);
      }
    }, 2500);

    return () => clearTimeout(initialHideTimer);
  }, [enableSound]);

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || !isFinite(timeInSeconds) || timeInSeconds < 0) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true);
      } else {
        if (isMuted) {
          enableSound();
        } else {
          videoRef.current.play().catch(() => {});
        }
        setIsPlaying(true);
      }
    }
  };

  const handleProgressClick = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const effectiveDur = (videoRef.current.duration && !isNaN(videoRef.current.duration) && isFinite(videoRef.current.duration))
      ? videoRef.current.duration
      : duration;
    
    if (effectiveDur > 0) {
      const newTime = pos * effectiveDur;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(pos * 100);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (nextMuted) {
        setShowUnmuteBanner(false);
      } else {
        setShowUnmuteBanner(false);
        if (volume === 0) {
          setVolume(1);
          videoRef.current.volume = 1;
        }
      }
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
        setShowUnmuteBanner(false);
      }
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Handle fading controls
  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) {
      clearTimeout(hideControlsTimeout.current);
    }
    const currentlyPlaying = videoRef.current ? !videoRef.current.paused : isPlaying;
    if (currentlyPlaying) {
      hideControlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const handleMouseLeave = () => {
    const currentlyPlaying = videoRef.current ? !videoRef.current.paused : isPlaying;
    if (currentlyPlaying) {
      setShowControls(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video bg-[#080808] rounded-xl overflow-hidden shadow-2xl group flex flex-col justify-end select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        playsInline
        muted={isMuted}
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
      />
      
      {/* Tap to Unmute Banner (Only shown if browser autoplay policy initially muted the audio) */}
      {showUnmuteBanner && (
        <div 
          onClick={(e) => {
            e.stopPropagation();
            enableSound();
          }}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-4 py-2 bg-black/90 backdrop-blur-md border border-brand-gold/60 text-brand-gold rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-[0_4px_25px_rgba(201,169,97,0.35)] cursor-pointer hover:scale-105 active:scale-95 transition-all animate-pulse"
        >
          <VolumeX className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Click anywhere to enable voice</span>
        </div>
      )}

      {/* Big Play Button Overlay (ONLY when actually paused) */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity duration-300 z-20"
          onClick={togglePlay}
        >
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-brand-gold rounded-full flex items-center justify-center pl-1 sm:pl-1.5 hover:scale-110 active:scale-95 transition-transform duration-300 shadow-2xl">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-black fill-black" />
          </div>
        </div>
      )}

      {/* Controls Bar: Progress Bar, Time, Play/Pause, Volume Slider, Fullscreen */}
      <div 
        className={`relative z-20 w-full bg-gradient-to-t from-black/95 via-black/60 to-transparent pb-3.5 pt-10 px-4 sm:px-6 transition-all duration-300 ${
          showControls || !isPlaying ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Progress Bar / Scrub Track */}
        <div 
          className="w-full flex items-center mb-3 group/progress h-5 cursor-pointer py-1" 
          onClick={handleProgressClick}
        >
          <div className="w-full h-1.5 bg-white/20 group-hover/progress:h-2 rounded-full relative transition-all duration-150">
            {/* Progress Fill */}
            <div 
              className="absolute top-0 left-0 h-full bg-brand-gold rounded-full"
              style={{ width: `${progress}%` }}
            >
              {/* Scrubber Knob */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg border-2 border-brand-gold opacity-0 group-hover/progress:opacity-100 transition-opacity duration-150"></div>
            </div>
          </div>
        </div>

        {/* Buttons and Meta */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Start / Stop (Play / Pause) */}
            <button 
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white hover:text-brand-gold transition-all focus:outline-none"
            >
              {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
            </button>
            
            {/* Volume Toggle & Slider */}
            <div className="flex items-center gap-2 group/volume">
              <button 
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white hover:text-brand-gold transition-all focus:outline-none"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Volume slider"
                className="w-14 sm:w-20 h-1 accent-brand-gold bg-white/20 rounded-lg cursor-pointer"
              />
            </div>

            {/* Time Indicator */}
            <span className="text-[11px] sm:text-xs font-mono text-white/80 select-none">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Fullscreen Option */}
          <div>
            <button 
              onClick={toggleFullScreen}
              aria-label="Toggle fullscreen"
              className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white hover:text-brand-gold transition-all focus:outline-none"
            >
              <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
