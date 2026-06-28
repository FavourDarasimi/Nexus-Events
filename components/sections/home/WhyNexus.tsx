"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldDivider from "@/components/ui/GoldDivider";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const reasons = [
  {
    title: "Bespoke Design",
    description:
      "No templates. Every event is crafted from scratch to reflect your unique story, style, and vision.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
      </svg>
    ),
  },
  {
    title: "Stress-Free Experience",
    description:
      "Our end-to-end management handles every vendor, timeline, and detail so you can actually enjoy your event.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Global Network",
    description:
      "Access to a curated roster of premium vendors, venues, and talent across the world's most desirable destinations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Award-Winning Team",
    description:
      "Recognized for excellence in event design and production, with over a decade of industry-leading experience.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function WhyNexus() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-charcoal">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <SectionLabel>Why Nexus Events</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
            Why Choose Us?
          </h2>
          <GoldDivider className="mx-auto" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              className="h-full"
            >
              <div className="h-full bg-black border border-white/5 rounded-lg p-8 flex flex-col items-center text-center hover:border-gold/30 transition-colors duration-500">
                <div className="w-14 h-14 rounded-full bg-black/50 border border-gold/20 flex items-center justify-center mb-5 shrink-0">
                  {reason.icon}
                </div>
                <h3 className="font-playfair text-xl text-white mb-3">
                  {reason.title}
                </h3>
                <p className="font-inter text-sm text-white-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
