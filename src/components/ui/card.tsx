import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardTone = "raised" | "surface" | "tint" | "sand" | "dark";

const tones: Record<CardTone, string> = {
  raised: "bg-jk-card shadow-jk-card ring-1 ring-jk-primary/5",
  surface: "bg-jk-surface/60 ring-1 ring-jk-primary/5",
  tint: "bg-jk-brand-green-light ring-1 ring-jk-brand-green/10",
  sand: "bg-jk-sand-light ring-1 ring-jk-sand/30",
  dark: "bg-jk-brand-green text-jk-cream",
};

type CardProps<T extends ElementType> = {
  as?: T;
  tone?: CardTone;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Card<T extends ElementType = "div">({
  as,
  tone = "raised",
  className,
  children,
  ...rest
}: CardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={cn("rounded-card", tones[tone], className)} {...rest}>
      {children}
    </Component>
  );
}
