"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLiveModules } from "@/lib/modules";
import { cn } from "@/lib/cn";

/**
 * Pill switcher between public modules. Renders nothing while only one
 * module is live, and appears automatically once another one ships.
 */
export function ModuleNav() {
  const pathname = usePathname();
  const modules = getLiveModules("public");

  if (modules.length < 2) {
    return null;
  }

  return (
    <nav aria-label="Modules" className="hidden rounded-full bg-jk-surface/70 p-1 sm:flex">
      {modules.map((module) => {
        const active =
          module.href === "/" ? pathname === "/" : pathname.startsWith(module.href);

        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={cn(
              "ui-label rounded-full px-4 py-2 text-xs transition-colors",
              active
                ? "bg-jk-brand-green text-jk-cream"
                : "text-jk-secondary hover:text-jk-primary",
            )}
            href={module.href}
            key={module.id}
          >
            {module.label}
          </Link>
        );
      })}
    </nav>
  );
}
