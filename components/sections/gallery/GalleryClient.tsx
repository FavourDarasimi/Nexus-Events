"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { GALLERY_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Weddings", "Corporate", "Galas", "Social"];

function GalleryImage({ src, alt, aspect, priority }: { src: string; alt: string; aspect: string; priority?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [w, h] = aspect.split("/").map(Number);
  const paddingBottom = `${(h / w) * 100}%`;
  const gridSrc = src.replace("w=600", "w=400");

  return (
    <div className="relative w-full overflow-hidden" style={{ paddingBottom }}>
      {!loaded && (
        <div className="absolute inset-0 skeleton-shimmer rounded-xl" />
      )}
      <img
        src={gridSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        width={w}
        height={h}
        onLoad={() => setLoaded(true)}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

export default function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? [...GALLERY_ITEMS]
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-black">
      <div className="max-w-[1500px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-1 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "relative px-4 py-1.5 font-inter text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm",
                activeFilter === cat
                  ? "text-white"
                  : "text-white-muted hover:text-white",
              )}
            >
              {cat}
              {activeFilter === cat && (
                <motion.div
                  layoutId="gallery-filter"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="break-inside-avoid mb-3 cursor-pointer group relative overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                onClick={() => openLightbox(i)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); } }}
                role="button"
                tabIndex={0}
              >
                <GalleryImage src={item.image} alt={item.title} aspect={item.aspect} priority={i < 4} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                  <span className="font-cormorant text-xs tracking-widest uppercase text-gold italic">
                    {item.category}
                  </span>
                  <h3 className="font-playfair text-base text-white mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Dialog.Root
        open={lightboxIndex !== null}
        onOpenChange={(open) => {
          if (!open) closeLightbox();
        }}
      >
        <AnimatePresence>
          {lightboxIndex !== null && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight") goNext();
                    if (e.key === "ArrowLeft") goPrev();
                  }}
                >
                  <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center overflow-hidden rounded-xl">
                    <img
                      src={filtered[lightboxIndex].image}
                      alt={filtered[lightboxIndex].title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <p className="font-playfair text-xl text-white">
                        {filtered[lightboxIndex].title}
                      </p>
                      <p className="font-cormorant text-sm text-gold italic">
                        {filtered[lightboxIndex].category}
                      </p>
                    </div>

                    <button
                      onClick={goPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      aria-label="Previous image"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      aria-label="Next image"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>

                    <Dialog.Close asChild>
                      <button
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        aria-label="Close"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
                    <span className="font-inter text-sm text-white-muted">
                      {lightboxIndex + 1} / {filtered.length}
                    </span>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
