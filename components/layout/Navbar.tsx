"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent",
        )}
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-playfair text-2xl tracking-wider text-white">
                {SITE.name.split(" ")[0]}
              </span>
              <span className="font-cormorant text-[10px] tracking-[0.3em] text-gold uppercase -mt-1">
                {SITE.name.split(" ")[1]}
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-inter font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm",
                      isActive(link.href)
                        ? "text-white"
                        : "text-white-muted hover:text-white",
                    )}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                ))}
              </div>
              <Button variant="gold-filled" size="sm" href="/contact">
                Book Consultation
              </Button>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "md:hidden flex flex-col gap-1.5 p-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                mobileOpen && "hidden",
              )}
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-white transition-all" />
              <span className="block w-6 h-0.5 bg-white transition-all" />
              <span className="block w-6 h-0.5 bg-white transition-all" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Close menu"
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 absolute" />
              <span className="block w-6 h-0.5 bg-white -rotate-45 absolute" />
            </button>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={fadeInUp}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-3xl font-playfair transition-colors duration-300",
                      isActive(link.href)
                        ? "text-gold"
                        : "text-white-muted hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
