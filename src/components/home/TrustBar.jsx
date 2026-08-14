"use client";

import { useEffect, useRef } from "react";

export default function TrustBar() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = container.offsetWidth || window.innerWidth);
    let height = (canvas.height = container.offsetHeight || 100);

    const particles = [];
    const particlePalette = [
      { r: 201, g: 169, b: 97, minAlpha: 0.25, maxAlpha: 0.9, sizeMin: 0.9, sizeMax: 2.0, shadow: "rgba(201, 169, 97, 0.7)" }, // Gold #C9A961
      { r: 255, g: 255, b: 255, minAlpha: 0.2, maxAlpha: 0.85, sizeMin: 0.7, sizeMax: 1.8, shadow: "rgba(255, 255, 255, 0.6)" }, // White #FFFFFF
      { r: 245, g: 242, b: 236, minAlpha: 0.2, maxAlpha: 0.75, sizeMin: 0.8, sizeMax: 1.8, shadow: "rgba(245, 242, 236, 0.5)" }, // Cream #F5F2EC
      { r: 189, g: 186, b: 178, minAlpha: 0.15, maxAlpha: 0.6, sizeMin: 0.6, sizeMax: 1.5, shadow: "rgba(189, 186, 178, 0.35)" }, // Warm Grey #BDBAB2
      { r: 107, g: 104, b: 98, minAlpha: 0.12, maxAlpha: 0.5, sizeMin: 0.6, sizeMax: 1.4, shadow: "rgba(107, 104, 98, 0.25)" }, // Muted Grey #6B6862
    ];

    const getTargetParticleCount = (w) => Math.max(35, Math.floor(w / 14));

    const createParticle = (x, y) => {
      const type = particlePalette[Math.floor(Math.random() * particlePalette.length)];
      return {
        x: x !== undefined ? x : Math.random() * width,
        y: y !== undefined ? y : Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * (type.sizeMax - type.sizeMin) + type.sizeMin,
        type: type,
        alpha: Math.random() * (type.maxAlpha - type.minAlpha) + type.minAlpha,
        pulseSpeed: Math.random() * 0.012 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    };

    // Initialize particles
    const initialCount = getTargetParticleCount(width);
    for (let i = 0; i < initialCount; i++) {
      particles.push(createParticle());
    }

    // Smooth Resize Observer with proportional re-normalization
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = Math.floor(entry.contentRect.width || container.offsetWidth || window.innerWidth);
        const newHeight = Math.floor(entry.contentRect.height || container.offsetHeight || 100);

        if (newWidth > 0 && newHeight > 0 && (newWidth !== width || newHeight !== height)) {
          const oldWidth = width;
          const oldHeight = height;

          width = canvas.width = newWidth;
          height = canvas.height = newHeight;

          for (let i = 0; i < particles.length; i++) {
            particles[i].x = (particles[i].x / (oldWidth || 1)) * newWidth;
            particles[i].y = (particles[i].y / (oldHeight || 1)) * newHeight;
          }

          const targetCount = getTargetParticleCount(newWidth);
          while (particles.length < targetCount) {
            particles.push(createParticle());
          }
          if (particles.length > targetCount) {
            particles.length = targetCount;
          }
        }
      }
    });

    resizeObserver.observe(container);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha =
          p.type.minAlpha +
          (p.type.maxAlpha - p.type.minAlpha) *
            (0.5 + 0.5 * Math.sin(now * p.pulseSpeed + p.pulseOffset));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.type.r}, ${p.type.g}, ${p.type.b}, ${currentAlpha})`;
        ctx.shadowBlur = p.size > 1.2 ? 3 : 0;
        ctx.shadowColor = p.type.shadow;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen relative left-1/2 -translate-x-1/2 bg-ink-black py-6 sm:py-7 md:py-4.5 px-4 md:px-12 overflow-hidden select-none z-20 border-y border-muted-grey/20"
    >
      {/* Full-Viewport Canvas with Brand Color Sparkles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-85"
      />

      {/* Light Black Overlay ONLY on desktop (hidden on mobile) */}
      <div className="hidden md:block absolute inset-0 bg-ink-black/45 pointer-events-none z-[1]"></div>

      {/* 2x2 Grid on Mobile, Balanced 4-Column on Desktop */}
      <div className="w-full max-w-[1536px] mx-auto grid grid-cols-2 md:flex md:flex-row md:justify-between lg:justify-around items-center gap-y-6 gap-x-4 md:gap-3 relative z-10">
        {/* Metric 1 */}
        <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-gold shadow-[0_0_6px_#C9A961]"></span>
            <span className="text-xl sm:text-2xl lg:text-xl xl:text-[1.45rem] 2xl:text-2xl font-serif font-black text-brand-gold tracking-tight leading-none">
              5
            </span>
          </div>
          <span className="text-[10px] sm:text-[10px] lg:text-[10px] xl:text-[11px] font-sans tracking-[0.18em] sm:tracking-[0.2em] font-bold text-warm-grey uppercase mt-1.5">
            Active Clients
          </span>
        </div>

        {/* Desktop Divider */}
        <div className="hidden md:block w-[1px] h-6 bg-gradient-to-b from-transparent via-muted-grey/40 to-transparent"></div>

        {/* Metric 2 */}
        <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
          <span className="text-xl sm:text-2xl lg:text-xl xl:text-[1.45rem] 2xl:text-2xl font-serif font-black text-brand-gold tracking-tight leading-none">
            UK & USA
          </span>
          <span className="text-[10px] sm:text-[10px] lg:text-[10px] xl:text-[11px] font-sans tracking-[0.18em] sm:tracking-[0.2em] font-bold text-warm-grey uppercase mt-1.5">
            Operations
          </span>
        </div>

        {/* Desktop Divider */}
        <div className="hidden md:block w-[1px] h-6 bg-gradient-to-b from-transparent via-muted-grey/40 to-transparent"></div>

        {/* Metric 3 */}
        <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
          <span className="text-xl sm:text-2xl lg:text-xl xl:text-[1.45rem] 2xl:text-2xl font-serif font-black text-brand-gold tracking-tight leading-none">
            £237k+
          </span>
          <span className="text-[10px] sm:text-[10px] lg:text-[10px] xl:text-[11px] font-sans tracking-[0.18em] sm:tracking-[0.2em] font-bold text-warm-grey uppercase mt-1.5">
            Verified Revenue
          </span>
        </div>

        {/* Desktop Divider */}
        <div className="hidden md:block w-[1px] h-6 bg-gradient-to-b from-transparent via-muted-grey/40 to-transparent"></div>

        {/* Metric 4 */}
        <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
          <div className="flex items-center gap-1.5 sm:gap-2">
           
            <span className="text-xl sm:text-2xl lg:text-xl xl:text-[1.45rem] 2xl:text-2xl font-serif font-black text-brand-gold tracking-tight leading-none">
              Live
            </span>
          </div>
          <span className="text-[10px] sm:text-[10px] lg:text-[10px] xl:text-[11px] font-sans tracking-[0.18em] sm:tracking-[0.2em] font-bold text-warm-grey uppercase mt-1.5">
            AI Deployment
          </span>
        </div>
      </div>
    </div>
  );
}
