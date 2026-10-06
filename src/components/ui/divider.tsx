import { cn } from "@/lib/cn";

/** Hairline divider with a small sand-coloured centre mark. */
export function Divider({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("flex items-center gap-3", className)}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-jk-primary/10" />
      <span className="h-1.5 w-1.5 rotate-45 rounded-[2px] bg-jk-sand/80" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-jk-primary/10" />
    </div>
  );
}
