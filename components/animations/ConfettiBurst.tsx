"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiBurstProps {
  isActive: boolean;
}

function seeded(i: number): number {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  angle: number;
  distance: number;
}

const particles: Particle[] = Array.from({ length: 30 }, (_, i) => {
  const s = (n: number) => seeded(i * 7 + n * 13);
  const angle = s(0) * Math.PI * 2;
  return {
    id: i,
    x: 50 + Math.cos(angle) * 30,
    y: 50 + Math.sin(angle) * 30,
    size: 2 + s(1) * 4,
    duration: 0.6 + s(2) * 0.6,
    delay: s(3) * 0.15,
    angle,
    distance: 40 + s(4) * 80,
  };
});

export default function ConfettiBurst({ isActive }: ConfettiBurstProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {particles.map((p) => {
            const dx = Math.cos(p.angle) * p.distance;
            const dy = Math.sin(p.angle) * p.distance;
            return (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-gold"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                }}
                initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: 0,
                  x: dx,
                  y: dy,
                  scale: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
}
