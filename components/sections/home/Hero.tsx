"use client";

import { motion } from "framer-motion";
import ParticleField from "@/components/animations/ParticleField";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import ScrollParallax from "@/components/animations/ScrollParallax";
import TextReveal from "@/components/animations/TextReveal";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <ParticleField />

      <ScrollParallax
        offset={0.3}
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-cormorant text-gold text-lg md:text-xl tracking-widest uppercase italic mb-6"
        >
          Premium Event Planning
        </motion.p>

        <TextReveal
          as="h1"
          text="We Don't Plan Events."
          mode="words"
          delay={0.4}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight justify-center"
        />
        <TextReveal
          as="h1"
          text="We Craft Memories."
          mode="words"
          delay={0.8}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold leading-tight tracking-tight justify-center mt-2"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="font-inter text-base md:text-lg text-white-muted max-w-xl mx-auto mt-6 leading-relaxed"
        >
          From intimate gatherings to grand celebrations, we craft experiences
          that linger in the heart long after the last guest departs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Button variant="gold-filled" size="lg" href="/services">
            Explore Services
          </Button>
          <Button variant="outline" size="lg" href="/gallery">
            View Gallery
          </Button>
        </motion.div>
      </ScrollParallax>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="none"
            stroke="rgba(201, 168, 76, 0.6)"
            strokeWidth="2"
          >
            <rect x="1" y="1" width="22" height="34" rx="11" />
            <circle cx="12" cy="14" r="3" fill="rgba(201, 168, 76, 0.6)" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
