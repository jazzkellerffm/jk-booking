import { cn } from "@/lib/cn";

/** Slowly drifting JKOS orbs (shared motion language with jk-goldpass). */
export function AmbientBackground({
  variant = "light",
  fixed = false,
  className,
}: {
  variant?: "light" | "dark";
  fixed?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "jk-ambient",
        fixed && "jk-ambient-fixed",
        variant === "dark" && "jk-ambient-dark",
        className,
      )}
    >
      <span className="jk-orb jk-orb-a" />
      <span className="jk-orb jk-orb-b" />
      <span className="jk-orb jk-orb-c" />
    </div>
  );
}
