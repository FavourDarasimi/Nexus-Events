interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className,
}: SectionLabelProps) {
  return (
    <span
      className={`font-cormorant text-xs sm:text-sm tracking-widest uppercase text-gold italic ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
