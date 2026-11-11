"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Receipt } from "lucide-react";
import { useEffect, useState } from "react";
import { ModuleNav } from "@/components/layout/module-nav";
import { cn } from "@/lib/cn";
import { mailto, site } from "@/lib/site";

/** Vertical probe point (px from top) used to detect what is under the header. */
const PROBE_Y = 32;

/** Shared shape for the header utility pair; tone classes set the hierarchy. */
const utilityButton =
  "ui-label inline-flex h-10 items-center gap-2 rounded-full text-sm whitespace-nowrap ring-1 ring-inset outline-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * Header is h-16; the guide's sticky section nav sits at `top-16`.
 * Sections marked `data-header-theme="dark"` switch it to light-on-dark.
 */
export function AppHeader() {
  const onDark = useHeaderOverDark();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color] duration-300",
        onDark ? "border-white/10 bg-white/[0.06]" : "border-jk-primary/[0.07] bg-white/70",
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-2 px-5 sm:gap-4 sm:px-8">
        <Link
          aria-label={`${site.productName} — ${site.venueName}`}
          className={cn(
            "flex min-w-0 items-center gap-2.5 rounded-sm sm:gap-3 outline-none focus-visible:outline-2 focus-visible:outline-offset-4",
            onDark ? "focus-visible:outline-white" : "focus-visible:outline-jk-brand-green",
          )}
          href="/"
        >
          <span className="relative block h-[22px] w-[95px] shrink-0">
            <Image
              alt=""
              className={cn("object-contain transition-opacity duration-300", onDark ? "opacity-100" : "opacity-0")}
              fill
              priority
              src="/brand/jazzkeller-white.svg"
              unoptimized
            />
            <Image
              alt=""
              className={cn("object-contain transition-opacity duration-300", onDark ? "opacity-0" : "opacity-100")}
              fill
              priority
              src="/brand/jazzkeller-dark.svg"
              unoptimized
            />
          </span>
          <span
            aria-hidden="true"
            className={cn("h-5 w-px transition-colors", onDark ? "bg-white/30" : "bg-jk-primary/15")}
          />
          <span
            className={cn(
              "ui-label truncate text-sm transition-colors",
              onDark ? "text-white" : "text-jk-primary",
            )}
          >
            {site.productName}
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <ModuleNav />
          <a
            aria-label="Upload invoice (opens invoice.jazzkeller.com)"
            className={cn(
              utilityButton,
              "w-10 justify-center sm:w-auto sm:px-4",
              onDark
                ? "bg-white/[0.06] text-white/75 ring-white/15 hover:bg-white/10 hover:text-white focus-visible:outline-white"
                : "bg-jk-primary/[0.03] text-jk-secondary ring-jk-primary/[0.08] hover:bg-jk-primary/[0.06] hover:text-jk-primary focus-visible:outline-jk-brand-green",
            )}
            href={site.links.invoicePortal}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Receipt aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={2} />
            <span className="hidden sm:inline">Upload invoice</span>
          </a>
          <a
            className={cn(
              utilityButton,
              "px-3 sm:px-4",
              onDark
                ? "bg-white/[0.12] text-white ring-white/35 hover:bg-white/20 focus-visible:outline-white"
                : "bg-white text-jk-primary ring-jk-primary/[0.16] hover:bg-jk-primary/5 focus-visible:outline-jk-brand-green",
            )}
            href={mailto(site.contacts.booking.email)}
          >
            <Mail aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={2} />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function useHeaderOverDark() {
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const sections = document.querySelectorAll<HTMLElement>('[data-header-theme="dark"]');
      const over = Array.from(sections).some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= PROBE_Y && rect.bottom > PROBE_Y;
      });
      setOnDark(over);
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return onDark;
}
