import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "white" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-jk-brand-green text-white hover:bg-jk-primary focus-visible:outline-jk-brand-green",
  secondary:
    "bg-jk-card text-jk-primary ring-1 ring-jk-primary/10 hover:ring-jk-brand-green/30 focus-visible:outline-jk-brand-green",
  /** Primary action on Brand Green / dark media */
  white: "bg-white text-jk-primary hover:bg-jk-background focus-visible:outline-white",
  /** Secondary action on Brand Green / dark media */
  "outline-light":
    "text-white ring-1 ring-inset ring-white/40 hover:bg-white/10 focus-visible:outline-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 gap-2 px-4 text-sm",
  md: "h-11 gap-2 px-5 text-sm",
  lg: "h-13 gap-2 px-7 text-body",
};

export const buttonClassName = (
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) =>
  cn(
    "ui-label inline-flex items-center justify-center rounded-full whitespace-nowrap outline-none transition-[background-color,box-shadow,transform] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    sizes[size],
    className,
  );

export function ButtonLink({
  href,
  children,
  variant,
  size,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  const classes = buttonClassName(variant, size, className);
  const external = /^https?:\/\//.test(href);

  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
    >
      {children}
    </a>
  );
}
