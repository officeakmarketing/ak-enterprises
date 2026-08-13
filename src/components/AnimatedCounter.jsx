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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // The value can be a string like "237,355" or "2M" or "6".
  // Let's strip non-digits to animate the core number.
  const rawNumber = parseFloat(value.replace(/[^0-9.]/g, ""));
  
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
    return springValue.on("change", (latest) => {
      // Format back with commas if necessary
      const formatted = Intl.NumberFormat("en-GB", {
        maximumFractionDigits: 0,
      }).format(Math.floor(latest));
      setDisplay(formatted);  
    });
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
