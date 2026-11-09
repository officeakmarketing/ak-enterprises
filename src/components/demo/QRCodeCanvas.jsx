"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function QRCodeCanvas({ url, size = 180, accent = "#C9A961" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !url) return;
    
    QRCode.toCanvas(
      canvasRef.current,
      url,
      {
        width: size,
        margin: 2,
        color: {
          dark: "#0B0B0C", // Ink black QR modules
          light: "#FFFFFF", // Crisp white background for maximum camera readability
        },
      },
      (error) => {
        if (error) console.error("QR Code generation error:", error);
      }
    );
  }, [url, size]);

  return (
    <div className="relative inline-flex flex-col items-center">
      <div 
        className="p-3 bg-white rounded-2xl shadow-2xl border-2 transition-colors duration-300 flex items-center justify-center"
        style={{ borderColor: accent }}
      >
        <canvas ref={canvasRef} className="block rounded-lg" />
      </div>
      <p className="mt-2.5 text-[10px] font-mono uppercase tracking-widest text-warm-grey/70">
        Scan with phone camera
      </p>
    </div>
  );
}

