import { Fragment, type ReactNode } from "react";
import type { RichText as RichTextValue } from "@/content/types";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

/** Renders `**bold**` and `[label](href)` inside content strings. */
export function RichText({ text }: { text: RichTextValue }) {
  const parts = text.split(TOKEN).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>{renderPart(part)}</Fragment>
      ))}
    </>
  );
}

function renderPart(part: string): ReactNode {
  if (part.startsWith("**") && part.endsWith("**")) {
    return (
      <strong className="ui-label font-normal text-jk-primary">
        {part.slice(2, -2)}
      </strong>
    );
  }

  const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);

  if (link) {
    const [, label, href] = link;
    const external = /^https?:\/\//.test(href);

    return (
      <a
        className="text-jk-brand-green underline decoration-jk-brand-green/30 underline-offset-[3px] transition-colors hover:decoration-jk-brand-green"
        href={href}
        {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
      >
        {label}
      </a>
    );
  }

  return part;
}
