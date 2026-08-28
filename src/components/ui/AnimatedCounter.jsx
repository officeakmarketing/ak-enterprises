"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" }); // Removed -100px margin so it triggers earlier
  
  // Safely handle if value is passed as number or string
  const stringValue = String(value);
  const rawNumber = parseFloat(stringValue.replace(/[^0-9.]/g, "")) || 0;
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(rawNumber);
    }
  }, [isInView, motionValue, rawNumber]);

  useEffect(() => {
    // Listen to spring value changes
    const unsubscribe = springValue.on("change", (latest) => {
      const formatted = Intl.NumberFormat("en-GB", {
        maximumFractionDigits: 0,
      }).format(Math.floor(latest));
      setDisplay(formatted);  
    });
    
    return () => {
      // Safely unsubscribe based on Framer Motion version
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
