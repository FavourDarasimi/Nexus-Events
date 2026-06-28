"use client";

import { motion } from "framer-motion";

function seeded(i: number): number {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const sparkles = Array.from({ length: 30 }, (_, i) => {
  const s = (n: number) => seeded(i * 7 + n * 13);
  return {
    id: i,
    x: s(0) * 100,
    y: 50 + s(1) * 50,
    size: 2 + s(2) * 4,
    delay: s(3) * 2,
    duration: 2 + s(4) * 3,
    xMove: (s(5) - 0.5) * 200,
    yMove: -(100 + s(6) * 200),
  };
});

export default function SparkleBackground() {
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
