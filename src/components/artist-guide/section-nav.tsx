"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type SectionNavItem = { id: string; label: string };

/**
 * A section counts as active once its top passes this far below the nav's
 * bottom edge. Must exceed the landing gap of an anchor jump (html
 * scroll-padding-top + section scroll-margin − nav bottom ≈ 23px).
 */
const ACTIVATION_SLACK = 48;
/** No scroll events for this long = scrolling has settled. */
const SETTLE_MS = 140;

/** Sticky, horizontally scrollable section chips with scroll-spy. */
export function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef(new Map<string, HTMLAnchorElement>());
  /** Section chosen by a click; the spy defers to it until scrolling settles. */
  const pendingRef = useRef<string | null>(null);

  const computeActive = useCallback(() => {
    const line = (navRef.current?.getBoundingClientRect().bottom ?? 0) + ACTIVATION_SLACK;
    let current: string | null = null;

    for (const item of items) {
      const element = document.getElementById(item.id);
      if (element && element.getBoundingClientRect().top <= line) current = item.id;
    }

    return current;
  }, [items]);

  useEffect(() => {
    let frame = 0;
    let settleTimer = 0;

    function settle() {
      const pending = pendingRef.current;
      pendingRef.current = null;

      if (pending) {
        const target = document.getElementById(pending);
        const atBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        // A target near the page end may not reach the activation line.
        if (target && atBottom && target.getBoundingClientRect().top < window.innerHeight) {
          setActiveId(pending);
          return;
        }
      }

      setActiveId(computeActive());
    }

    function onScroll() {
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(settle, SETTLE_MS);

      if (pendingRef.current || frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!pendingRef.current) setActiveId(computeActive());
      });
    }

    frame = requestAnimationFrame(() => {
      frame = 0;
      setActiveId(computeActive());
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(settleTimer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [computeActive]);

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
      className="sticky top-16 z-30 mt-10 border-b border-jk-primary/[0.07] bg-white/70 backdrop-blur-xl backdrop-saturate-150"
      ref={navRef}
    >
      <div
        className="jk-no-scrollbar relative mx-auto max-w-5xl overflow-x-auto px-4 py-2 sm:px-8"
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
                    "ui-label inline-flex h-10 items-center rounded-full px-4 text-sm whitespace-nowrap outline-none transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-jk-brand-green",
                    active
                      ? "bg-jk-brand-green text-white"
                      : "bg-jk-primary/[0.04] text-jk-secondary hover:bg-jk-primary/[0.07] hover:text-jk-primary",
                  )}
                  href={`#${item.id}`}
                  onClick={() => {
                    pendingRef.current = item.id;
                    setActiveId(item.id);
                  }}
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
