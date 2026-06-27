import { MARQUEE_WORDS } from "@/lib/constants";

export default function Marquee() {
  return (
    <div className="w-full bg-charcoal border-y border-gold/20 overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-marquee" style={{ width: "max-content" }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="font-cormorant text-lg md:text-xl tracking-widest text-gold/70 italic px-8"
          >
            {MARQUEE_WORDS}
          </span>
        ))}
      </div>
    </div>
  );
}
