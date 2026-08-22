"use client";

import { useEffect, useState } from "react";

export default function BackgroundSparkles({ count = 40 }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Generate random sparkles only on the client to avoid hydration mismatch
    const generatedSparkles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5, // 0.5px to 2px
      animationDuration: `${Math.random() * 4 + 3}s`, // 3s to 7s
      animationDelay: `${Math.random() * 5}s`,
    }));
    setSparkles(generatedSparkles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes customTwinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.6; }
        }
        .sparkle-dot {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          animation: customTwinkle linear infinite;
        }
      `}} />
      
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle-dot"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDuration: sparkle.animationDuration,
            animationDelay: sparkle.animationDelay,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
