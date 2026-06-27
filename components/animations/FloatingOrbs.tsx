"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface Orb {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generateOrbs(count: number): Orb[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    width: 200 + Math.random() * 400,
    height: 200 + Math.random() * 300,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 3,
    opacity: 0.15 + Math.random() * 0.2,
  }));
}

export default function FloatingOrbs({
  count = 6,
}: {
  count?: number;
}) {
  const orbs = useMemo(() => generateOrbs(count), [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.width,
            height: orb.height,
            filter: "blur(80px)",
            opacity: orb.opacity,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
