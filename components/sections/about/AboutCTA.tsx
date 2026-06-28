"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

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

export default function AboutCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
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

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
        >
          Ready to Work With Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-inter text-base md:text-lg text-white-muted mt-4 max-w-lg mx-auto"
        >
          Explore our services and discover how we can bring your vision to life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <Button variant="gold-filled" size="lg" href="/services">
            View Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
