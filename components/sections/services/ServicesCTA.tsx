"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SparkleBackground from "@/components/animations/SparkleBackground";

export default function ServicesCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      <SparkleBackground />
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
        >
          Let&apos;s Start Planning
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-inter text-base md:text-lg text-white-muted mt-4 max-w-lg mx-auto"
        >
          Ready to discuss your next event? We&apos;d love to hear about your vision.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <Button variant="gold-filled" size="lg" href="/contact">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
