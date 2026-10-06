import type { IconName, NoticeTone, RichText as RichTextValue } from "@/content/types";
import { Icon } from "@/components/ui/icon";
import { RichText } from "@/components/ui/rich-text";
import { cn } from "@/lib/cn";

const toneStyles: Record<
  NoticeTone,
  { container: string; icon: string; defaultIcon: IconName }
> = {
  info: {
    container: "bg-jk-brand-green-light/70 ring-jk-brand-green/10",
    icon: "text-jk-brand-green",
    defaultIcon: "info",
  },
  important: {
    container: "bg-jk-sand-light ring-jk-sand/40",
    icon: "text-[#8a6d45]",
    defaultIcon: "alert",
  },
  positive: {
    container: "bg-jk-card ring-jk-brand-green/15",
    icon: "text-jk-brand-green",
    defaultIcon: "check",
  },
  neutral: {
    container: "bg-jk-surface/55 ring-jk-primary/5",
    icon: "text-jk-secondary",
    defaultIcon: "info",
  },
};

export function Notice({
  tone,
  title,
  text,
  icon,
  className,
}: {
  tone: NoticeTone;
  title?: string;
  text: RichTextValue;
  icon?: IconName;
  className?: string;
}) {
  const styles = toneStyles[tone];

  return (
    <div
      className={cn("flex gap-3 rounded-inner px-4 py-4 ring-1", styles.container, className)}
      role="note"
    >
      <Icon
        className={cn("mt-1 h-4 w-4 shrink-0", styles.icon)}
        name={icon ?? styles.defaultIcon}
        strokeWidth={2}
      />
      <div className="min-w-0">
        {title ? <p className="ui-label text-body text-jk-primary">{title}</p> : null}
        <p className="text-body text-jk-primary/85">
          <RichText text={text} />
        </p>
      </div>
    </div>
  );
}
