import type { RichText as RichTextValue } from "@/content/types";
import { RichText } from "@/components/ui/rich-text";

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  index,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: RichTextValue;
  index?: number;
}) {
  return (
    <header className="mb-8">
      <p className="eyebrow flex items-center gap-2 text-jk-brand-green">
        {typeof index === "number" ? (
          <span className="text-jk-secondary/60">{String(index).padStart(2, "0")}</span>
        ) : null}
        {eyebrow}
      </p>
      <h2 className="display-heading mt-3 text-[1.875rem] text-jk-primary sm:text-[2.5rem]" id={id}>
        {title}
      </h2>
      {lead ? (
        <p className="mt-3 max-w-[38rem] text-base leading-7 text-jk-secondary">
          <RichText text={lead} />
        </p>
      ) : null}
    </header>
  );
}
