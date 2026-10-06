import { Check, X } from "lucide-react";
import type { ListStyle, RichText as RichTextValue } from "@/content/types";
import { RichText } from "@/components/ui/rich-text";
import { cn } from "@/lib/cn";

export function BulletList({
  title,
  items,
  style = "dot",
  className,
}: {
  title?: string;
  items: RichTextValue[];
  style?: ListStyle;
  className?: string;
}) {
  return (
    <div className={className}>
      {title ? <p className="eyebrow mb-3 text-jk-secondary">{title}</p> : null}
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            className={cn(
              "flex gap-3 text-body",
              style === "cross" ? "text-jk-secondary" : "text-jk-primary/85",
            )}
            key={item}
          >
            <ListMarker style={style} />
            <span className="min-w-0">
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ListMarker({ style }: { style: ListStyle }) {
  if (style === "check") {
    return (
      <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-jk-brand-green text-jk-cream">
        <Check aria-hidden="true" className="h-3 w-3" strokeWidth={2.5} />
      </span>
    );
  }

  if (style === "cross") {
    return (
      <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-jk-surface text-jk-secondary">
        <X aria-hidden="true" className="h-3 w-3" strokeWidth={2.5} />
      </span>
    );
  }

  return (
    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jk-sand" />
  );
}
