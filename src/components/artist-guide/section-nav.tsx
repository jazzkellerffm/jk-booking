"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type SectionNavItem = { id: string; label: string };

/** Sticky, horizontally scrollable section chips with scroll-spy. */
export function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef(new Map<string, HTMLAnchorElement>());

  useEffect(() => {
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        }

        const next = items.find((item) => visible.has(item.id));
        if (next) {
          setActiveId(next.id);
        } else if (window.scrollY < 200) {
          setActiveId(null);
        }
      },
      { rootMargin: "-120px 0px -55% 0px", threshold: 0 },
    );

    for (const item of items) {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (!activeId) return;
    const chip = chipRefs.current.get(activeId);
    const scroller = scrollerRef.current;
    if (!chip || !scroller) return;

    const left = chip.offsetLeft - scroller.clientWidth / 2 + chip.clientWidth / 2;
    scroller.scrollTo({ left, behavior: "smooth" });
  }, [activeId]);

  return (
    <nav
      aria-label="Guide sections"
      className="sticky top-16 z-30 mt-6 border-b border-jk-primary/[0.06] bg-jk-background/85 backdrop-blur-xl backdrop-saturate-150"
    >
      <div
        className="jk-no-scrollbar relative mx-auto max-w-5xl overflow-x-auto px-3 py-2 sm:px-6"
        ref={scrollerRef}
      >
        <ul className="flex w-max gap-2">
          {items.map((item) => {
            const active = item.id === activeId;

            return (
              <li key={item.id}>
                <a
                  aria-current={active ? "location" : undefined}
                  className={cn(
                    "ui-label inline-flex h-9 items-center rounded-full px-4 text-xs whitespace-nowrap outline-none transition-colors duration-200 focus-visible:ring-4 focus-visible:ring-jk-brand-green/15",
                    active
                      ? "bg-jk-brand-green text-jk-cream"
                      : "bg-jk-card text-jk-secondary ring-1 ring-jk-primary/[0.06] hover:text-jk-primary",
                  )}
                  href={`#${item.id}`}
                  ref={(node) => {
                    if (node) chipRefs.current.set(item.id, node);
                    else chipRefs.current.delete(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
