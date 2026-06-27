"use client";

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/animations/MagneticButton";

type ButtonVariant = "gold-filled" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  "gold-filled":
    "bg-gold text-black hover:bg-gold-light focus-visible:ring-gold",
  ghost:
    "text-white-soft hover:text-gold focus-visible:ring-gold",
  outline:
    "border border-white-muted text-white-soft hover:border-gold hover:text-gold focus-visible:ring-gold",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "gold-filled",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-inter font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (props.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <MagneticButton className="inline-block">
        <Link href={href} className={classes} {...(anchorRest as any)}>
          {children}
        </Link>
      </MagneticButton>
    );
  }

  return (
    <MagneticButton className="inline-block">
      <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    </MagneticButton>
  );
}
