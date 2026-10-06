import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { buttonClassName } from "@/components/ui/button";
import { ModuleNav } from "@/components/layout/module-nav";
import { mailto, site } from "@/lib/site";

/** Header is h-16; the guide's sticky section nav sits at `top-16`. */
export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-jk-primary/[0.06] bg-jk-background/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          aria-label={`${site.productName} — ${site.venueName}`}
          className="group flex min-w-0 items-center gap-3 rounded-full outline-none focus-visible:ring-4 focus-visible:ring-jk-brand-green/15"
          href="/"
        >
          <Image
            alt=""
            className="h-9 w-9 rounded-control"
            height={72}
            priority
            src="/brand/domicile-du-jazz-brand-green.png"
            width={72}
          />
          <span className="min-w-0 leading-tight">
            <span className="ui-label block text-body text-jk-primary">
              {site.productName}
            </span>
            <span className="block truncate text-xs text-jk-secondary">
              {site.venueName}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ModuleNav />
          <a
            className={buttonClassName("secondary", "sm")}
            href={mailto(site.contacts.booking.email)}
          >
            <Mail aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
}
