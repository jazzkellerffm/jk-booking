import type { IconName } from "@/content/types";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

type IconBadgeTone = "green" | "light" | "on-dark";
type IconBadgeSize = "sm" | "md";

const tones: Record<IconBadgeTone, string> = {
  green: "bg-jk-brand-green text-jk-cream",
  light: "bg-jk-brand-green-light text-jk-brand-green",
  "on-dark": "bg-jk-cream/10 text-jk-cream",
};

const sizes: Record<IconBadgeSize, { box: string; icon: string }> = {
  sm: { box: "h-8 w-8", icon: "h-4 w-4" },
  md: { box: "h-10 w-10", icon: "h-5 w-5" },
};

export function IconBadge({
  name,
  tone = "light",
  size = "md",
  className,
}: {
  name: IconName;
  tone?: IconBadgeTone;
  size?: IconBadgeSize;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full",
        tones[tone],
        sizes[size].box,
        className,
      )}
    >
      <Icon className={sizes[size].icon} name={name} />
    </span>
  );
}
