"use client";

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

function seeded(i: number): number {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const orbs: Orb[] = Array.from({ length: 6 }, (_, i) => {
  const s = (n: number) => seeded(i * 11 + n * 17);
  return {
    id: i,
    x: 10 + s(0) * 80,
    y: 10 + s(1) * 80,
    width: 200 + s(2) * 400,
    height: 200 + s(3) * 300,
    duration: 4 + s(4) * 4,
    delay: s(5) * 3,
    opacity: 0.15 + s(6) * 0.2,
  };
});

export default function FloatingOrbs() {
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
