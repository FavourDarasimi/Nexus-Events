"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldDivider from "@/components/ui/GoldDivider";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  rings: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M8 21v-4a4 4 0 0 1 4-4 4 4 0 0 1 4 4v4" />
      <path d="M4 21v-3" />
      <path d="M20 21v-3" />
    </svg>
  ),
  building: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="9" y1="6" x2="9" y2="7" />
      <line x1="12" y1="6" x2="12" y2="7" />
      <line x1="15" y1="6" x2="15" y2="7" />
      <line x1="9" y1="10" x2="9" y2="11" />
      <line x1="12" y1="10" x2="12" y2="11" />
      <line x1="15" y1="10" x2="15" y2="11" />
      <line x1="9" y1="14" x2="9" y2="15" />
      <line x1="12" y1="14" x2="12" y2="15" />
      <line x1="15" y1="14" x2="15" y2="15" />
      <line x1="9" y1="18" x2="9" y2="19" />
      <line x1="12" y1="18" x2="12" y2="19" />
      <line x1="15" y1="18" x2="15" y2="19" />
    </svg>
  ),
  star: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  cake: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16c.5.5 1 1 2 1s1.5-.5 2-1 1.5-1 2-1 1.5.5 2 1 1.5 1 2 1 1.5-.5 2-1 1.5-1 2-1 1.5.5 2 1" />
      <path d="M12 6v4" />
      <path d="M9 5c0-1.5 1.5-3 3-3s3 1.5 3 3" />
    </svg>
  ),
  rocket: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  globe: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

export default function ServiceCards() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-black">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <SectionLabel>Our Expertise</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
            Comprehensive Event Solutions
          </h2>
          <GoldDivider className="mx-auto" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof SERVICES)[number];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div variants={fadeInUp} className="h-full">
      <div
        className="group h-full bg-charcoal border border-white/5 rounded-lg p-8 cursor-pointer transition-all duration-500 hover:border-gold/30 flex flex-col"
        onClick={() => setExpanded(!expanded)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setExpanded(!expanded);
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between mb-5">
          <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center border border-gold/20">
            {iconMap[service.icon]}
          </div>
          <span className="font-cormorant text-sm text-gold italic whitespace-nowrap">
            {service.price}
          </span>
        </div>

        <h3 className="font-playfair text-xl md:text-2xl text-white mb-3">
          {service.title}
        </h3>
        <p className="font-inter text-sm text-white-muted leading-relaxed">
          {service.description}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-5 pt-5 border-t border-white/5 space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-inter text-sm text-white-muted flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-5 flex items-center gap-2 text-gold font-inter text-sm">
          <span>{expanded ? "Show less" : "Show details"}</span>
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M3 5l3 3 3-3" />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}
