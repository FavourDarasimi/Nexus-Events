"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/constants";
import { InstagramIcon, PinterestIcon, FacebookIcon } from "@/components/ui/SocialIcons";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeInUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease, delay },
});

const items = [
  {
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: CONTACT_INFO.address,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="font-playfair text-3xl md:text-4xl text-white">
          Let&apos;s Talk
        </h2>
        <p className="font-inter text-white-muted leading-relaxed max-w-sm">
          Ready to create something extraordinary? Reach out and let&apos;s start
          planning your next unforgettable event.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex items-start gap-4"
            {...fadeInUp(i * 0.1)}
          >
            <span className="mt-0.5 text-gold shrink-0">{item.icon}</span>
            <div>
              <p className="font-cormorant text-xs tracking-widest uppercase text-gold italic mb-1">
                {item.label}
              </p>
              {"href" in item && item.href ? (
                <a
                  href={item.href}
                  className="font-inter text-sm text-white-muted hover:text-gold transition-colors duration-300"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-inter text-sm text-white-muted whitespace-pre-line">
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex flex-col gap-4"
        {...fadeInUp(0.4)}
      >
        <p className="font-cormorant text-xs tracking-widest uppercase text-gold italic">
          Follow Us
        </p>
        <div className="flex gap-3">
          <a
            href={CONTACT_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white-muted hover:text-gold hover:border-gold/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={CONTACT_INFO.social.pinterest}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white-muted hover:text-gold hover:border-gold/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Pinterest"
          >
            <PinterestIcon />
          </a>
          <a
            href={CONTACT_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white-muted hover:text-gold hover:border-gold/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
