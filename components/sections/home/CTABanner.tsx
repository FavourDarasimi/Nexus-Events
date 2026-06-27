"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import banner from "@/public/CTA.webp";

export default function CTABanner() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <Image src={banner} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gold/20 to-black/80" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
        >
          Ready to Create Something Unforgettable?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-inter text-base md:text-lg text-white-muted mt-4 max-w-lg mx-auto"
        >
          Let&apos;s bring your vision to life with an event that&apos;s as
          extraordinary as you are.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <Button variant="gold-filled" size="lg" href="/contact">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
