"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import type { IconName } from "@/content/types";
import { IconBadge } from "@/components/ui/icon-badge";
import { cn } from "@/lib/cn";

export type AccordionEntry = {
  id: string;
  title: string;
  summary?: string;
  icon?: IconName;
  content: ReactNode;
};

export function Accordion({
  items,
  defaultOpenId,
  className,
}: {
  items: AccordionEntry[];
  defaultOpenId?: string;
  className?: string;
}) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(defaultOpenId ? [defaultOpenId] : []),
  );

  function toggle(id: string) {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div
      className={cn(
        "divide-y divide-jk-primary/[0.07] overflow-hidden rounded-card bg-jk-card shadow-jk-card ring-1 ring-jk-primary/5",
        className,
      )}
    >
      {items.map((item) => (
        <AccordionRow
          item={item}
          key={item.id}
          onToggle={() => toggle(item.id)}
          open={openIds.has(item.id)}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  open,
  onToggle,
}: {
  item: AccordionEntry;
  open: boolean;
  onToggle: () => void;
}) {
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  return (
    <div>
      <h3>
        <button
          aria-controls={panelId}
          aria-expanded={open}
          className="group flex w-full items-center gap-3 px-4 py-4 text-left outline-none transition-colors hover:bg-jk-brand-green-light/30 focus-visible:bg-jk-brand-green-light/40"
          id={buttonId}
          onClick={onToggle}
          type="button"
        >
          {item.icon ? <IconBadge name={item.icon} size="sm" /> : null}
          <span className="min-w-0 flex-1">
            <span className="ui-label block text-body text-jk-primary">{item.title}</span>
            {item.summary ? (
              <span className="block truncate text-sm text-jk-secondary">{item.summary}</span>
            ) : null}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "h-5 w-5 shrink-0 text-jk-secondary transition-transform duration-300 group-hover:text-jk-primary",
              open && "rotate-180 text-jk-brand-green",
            )}
            strokeWidth={1.75}
          />
        </button>
      </h3>
      <div
        aria-labelledby={buttonId}
        className="jk-collapse"
        data-open={open}
        id={panelId}
        inert={!open}
        role="region"
      >
        <div>
          <div className={cn("space-y-3 px-4 pb-4", item.icon && "sm:pl-15")}>
            {item.content}
          </div>
        </div>
      </div>
    </div>
  );
}
