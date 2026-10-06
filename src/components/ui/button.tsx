import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "light" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-jk-brand-green text-jk-cream hover:bg-jk-primary",
  secondary:
    "bg-jk-card text-jk-primary ring-1 ring-jk-primary/10 hover:ring-jk-brand-green/30",
  /** Primary action on dark (Deep Green) surfaces */
  light: "bg-jk-cream text-jk-primary hover:bg-jk-card",
  /** Secondary action on dark surfaces */
  "outline-light": "text-jk-cream ring-1 ring-jk-cream/30 hover:bg-jk-cream/10",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 gap-2 px-4 text-xs",
  md: "h-11 gap-2 px-5 text-sm",
  lg: "h-12 gap-2 px-6 text-body",
};

export const buttonClassName = (
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) =>
  cn(
    "ui-label inline-flex items-center justify-center rounded-full whitespace-nowrap outline-none transition-colors duration-200 focus-visible:ring-4 focus-visible:ring-jk-brand-green/20",
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
