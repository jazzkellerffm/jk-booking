import { JkosBadge } from "@/components/ui/jkos-badge";
import { site } from "@/lib/site";

const legalLinks = [
  { label: "Jazzkeller.com", href: site.links.website },
  { label: "Privacy", href: site.links.privacy },
  { label: "Imprint", href: site.links.imprint },
];

export function AppFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-jk-primary/[0.06] px-5 pt-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <JkosBadge />
          <p className="text-xs leading-5 text-jk-secondary">
            <span className="ui-label text-jk-primary">{site.productName}</span>
            <span aria-hidden="true"> · </span>
            {site.venueTagline}
          </p>
        </div>
        <nav aria-label="Legal" className="flex items-center gap-2 text-xs leading-5 text-jk-secondary/80">
          {legalLinks.map((link, index) => (
            <span className="flex items-center gap-2" key={link.href}>
              {index > 0 ? <span aria-hidden="true">·</span> : null}
              <a
                className="ui-label inline-flex min-h-10 items-center rounded-sm transition-colors hover:text-jk-primary focus-visible:text-jk-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jk-brand-green"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
