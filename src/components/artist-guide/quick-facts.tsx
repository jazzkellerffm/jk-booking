import type { Fact } from "@/content/types";
import { IconBadge } from "@/components/ui/icon-badge";
import { RichText } from "@/components/ui/rich-text";

export function QuickFacts({ facts }: { facts: Fact[] }) {
  return (
    <section aria-label="At a glance" className="mx-auto max-w-5xl px-3 pt-3 sm:px-6">
      <ul className="jk-no-scrollbar -mx-3 flex snap-x snap-mandatory gap-2 overflow-x-auto px-3 pb-1 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0">
        {facts.map((fact) => (
          <li
            className="flex w-48 shrink-0 snap-start items-center gap-3 rounded-card bg-jk-card p-4 shadow-jk-card ring-1 ring-jk-primary/5 sm:w-auto"
            key={fact.label}
          >
            {fact.icon ? <IconBadge name={fact.icon} size="sm" /> : null}
            <div className="min-w-0">
              <p className="eyebrow text-jk-secondary">{fact.label}</p>
              <p className="mt-1 text-sm leading-5 text-jk-primary">
                <RichText text={fact.value} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
