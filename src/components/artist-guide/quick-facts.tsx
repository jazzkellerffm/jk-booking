import type { Fact } from "@/content/types";
import { IconBadge } from "@/components/ui/icon-badge";
import { RichText } from "@/components/ui/rich-text";

/** "Booking essentials": an iOS-style grouped list, columns from sm up. */
export function QuickFacts({ title, facts }: { title: string; facts: Fact[] }) {
  return (
    <section aria-labelledby="essentials-title" className="mx-auto max-w-5xl px-4 pt-14 sm:px-8 sm:pt-20" id="essentials">
      <h2
        className="display-heading text-[2rem] text-jk-primary sm:text-[2.75rem]"
        id="essentials-title"
      >
        {title}
      </h2>
      <ul className="mt-6 divide-y divide-jk-primary/[0.07] overflow-hidden rounded-card bg-jk-card shadow-jk-card ring-1 ring-jk-primary/[0.05] sm:grid sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {facts.map((fact) => (
          <li className="flex items-center gap-4 px-4 py-4 sm:flex-col sm:items-start sm:gap-5 sm:p-6" key={fact.label}>
            {fact.icon ? <IconBadge name={fact.icon} size="sm" /> : null}
            <div className="min-w-0">
              <p className="eyebrow text-jk-secondary">{fact.label}</p>
              <p className="mt-1 text-body leading-6 text-jk-primary">
                <RichText text={fact.value} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
