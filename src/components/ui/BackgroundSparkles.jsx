export default function BackgroundSparkles({ count = 40 }) {
  // Deterministic positions eliminate hydration mismatch and post-mount re-renders
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${((i * 137.5) % 100).toFixed(1)}%`,
    top: `${((i * 269.3) % 100).toFixed(1)}%`,
    size: (((i * 47) % 15) / 10 + 0.5).toFixed(1),
    animationDuration: `${(((i * 31) % 40) / 10 + 3).toFixed(1)}s`,
    animationDelay: `${(((i * 53) % 50) / 10).toFixed(1)}s`,
  }));

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
