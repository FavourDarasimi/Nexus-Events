"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldDivider from "@/components/ui/GoldDivider";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-charcoal">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
            Meet the Visionaries
          </h2>
          <GoldDivider className="mx-auto" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors"
                    aria-label={`${member.name} Instagram`}
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-playfair text-xl text-white">
                  {member.name}
                </h3>
                <p className="font-cormorant text-sm text-gold italic">
                  {member.role}
                </p>
                <p className="font-inter text-sm text-white-muted mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
