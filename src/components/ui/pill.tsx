import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PillTone = "green" | "light" | "outline";

const tones: Record<PillTone, string> = {
  green: "bg-jk-brand-green text-jk-cream",
  light: "bg-jk-brand-green-light text-jk-brand-green",
  outline: "bg-jk-card text-jk-primary ring-1 ring-jk-primary/10",
};

/** For status, formats/categories and compact metadata only. */
export function Pill({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: PillTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "ui-label inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
