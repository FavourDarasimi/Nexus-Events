"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: number;
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
  xMove: number;
  yMove: number;
}

function seeded(i: number): number {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return +(x - Math.floor(x)).toFixed(4);
}

function generateSparkles(count: number): Sparkle[] {
  return Array.from({ length: count }, (_, i) => {
    const s = (n: number) => seeded(i * 7 + n * 13);
    return {
      id: i,
      x: (s(0) * 100).toFixed(4),
      y: (50 + s(1) * 50).toFixed(4),
      size: Math.round(2 + s(2) * 4),
      delay: +(s(3) * 2).toFixed(2),
      duration: +((2 + s(4) * 3)).toFixed(2),
      xMove: Math.round((s(5) - 0.5) * 200),
      yMove: Math.round(-(100 + s(6) * 200)),
    };
  });
}

export default function SparkleBackground({ count = 30 }: { count?: number }) {
  const sparkles = useMemo(() => generateSparkles(count), [count]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          whileInView={{
            opacity: [0, 1, 0],
            x: s.xMove,
            y: s.yMove,
          }}
          viewport={{ once: true }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
