import { ArrowUpRight, Check } from "lucide-react";
import type { ContentBlock } from "@/content/types";
import { Accordion } from "@/components/ui/accordion";
import { BulletList } from "@/components/ui/bullet-list";
import { Card } from "@/components/ui/card";
import { IconBadge } from "@/components/ui/icon-badge";
import { PayoutPreview } from "@/components/content/payout-preview";
import { payoutScenarioGroups } from "@/lib/payout";
import { Notice } from "@/components/ui/notice";
import { Pill } from "@/components/ui/pill";
import { RichText } from "@/components/ui/rich-text";
import { cn } from "@/lib/cn";

export function ContentBlocks({
  blocks,
  className,
}: {
  blocks: ContentBlock[];
  className?: string;
}) {
  if (blocks.length === 0) {
    return null;
  }

  return (
    <div className={cn("space-y-4", className)}>
      {blocks.map((block, index) => (
        <Block block={block} key={`${block.type}-${index}`} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          className={cn(
            "max-w-[40rem] text-jk-primary/85",
            block.size === "lead" ? "text-base leading-7" : "text-body",
          )}
        >
          <RichText text={block.text} />
        </p>
      );

    case "list":
      return <BulletList items={block.items} style={block.style} title={block.title} />;

    case "notice":
      return (
        <Notice icon={block.icon} text={block.text} title={block.title} tone={block.tone} />
      );

    case "facts":
      return (
        <div>
          {block.title ? (
            <p className="eyebrow mb-2 px-1 text-jk-secondary">{block.title}</p>
          ) : null}
          <ul className="divide-y divide-jk-primary/[0.07] overflow-hidden rounded-card bg-jk-card shadow-jk-card ring-1 ring-jk-primary/[0.05]">
            {block.items.map((fact) => (
              <li className="flex items-center gap-4 px-4 py-3.5" key={`${fact.label}-${fact.value}`}>
                {fact.icon ? <IconBadge name={fact.icon} size="sm" /> : null}
                <div className="min-w-0">
                  <p className="eyebrow text-jk-secondary">{fact.label}</p>
                  <p className="mt-0.5 text-body text-jk-primary">
                    <RichText text={fact.value} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );

    case "stats":
      return (
        <div>
          <div
            className={cn(
              "grid gap-2",
              block.items.length === 3
                ? "md:grid-cols-3"
                : block.items.length === 4
                  ? "sm:grid-cols-2"
                  : "grid-cols-2",
            )}
          >
            {block.items.map((stat, index) => {
              const dark = index === 0;

              return (
                <Card
                  className="flex flex-col px-5 py-5 sm:py-6"
                  key={stat.label}
                  tone={dark ? "dark" : "tint"}
                >
                  <p className={cn("eyebrow", dark ? "text-jk-sand" : "text-jk-brand-green")}>
                    {stat.label}
                  </p>
                  <p
                    className={cn(
                      "display-heading mt-3 leading-none whitespace-nowrap",
                      block.items.length === 3
                        ? "text-4xl md:text-[1.625rem]"
                        : block.items.length === 4
                          ? "text-4xl"
                          : "text-4xl sm:text-5xl",
                      dark ? "text-white" : "text-jk-brand-green",
                    )}
                  >
                    {stat.value}
                  </p>
                  {stat.caption ? (
                    <p
                      className={cn(
                        "mt-3 text-sm",
                        dark ? "text-jk-cream/75" : "text-jk-secondary",
                      )}
                    >
                      {stat.caption}
                    </p>
                  ) : null}
                  {stat.detail ? (
                    <p
                      className={cn(
                        "mt-1 text-xs",
                        dark ? "text-jk-cream/60" : "text-jk-secondary/80",
                      )}
                    >
                      {stat.detail}
                    </p>
                  ) : null}
                </Card>
              );
            })}
          </div>
          {block.footnote ? (
            <p className="mt-3 px-1 text-sm leading-5 text-jk-secondary">
              <RichText text={block.footnote} />
            </p>
          ) : null}
        </div>
      );

    case "highlights":
      return (
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {block.items.map((item) => (
            <li
              className="flex cursor-default flex-col rounded-inner bg-jk-card p-5 ring-1 ring-jk-primary/[0.04]"
              key={item.title}
            >
              {item.icon ? <IconBadge name={item.icon} size="sm" /> : null}
              <p className="display-heading mt-4 text-lg leading-tight tracking-normal text-jk-primary">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-5 text-jk-secondary">{item.text}</p>
            </li>
          ))}
        </ul>
      );

    case "checklist":
      return (
        <div>
          {block.title ? (
            <p className="eyebrow mb-2 px-1 text-jk-secondary">{block.title}</p>
          ) : null}
          <ul className="grid gap-1 sm:grid-cols-2">
            {block.items.map((item) => (
              <li
                className="flex items-start gap-2.5 rounded-control bg-jk-brand-green/[0.05] px-3 py-2 text-sm leading-5 text-jk-primary"
                key={item}
              >
                <span className="mt-px inline-flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-full bg-jk-brand-green/10 text-jk-brand-green">
                  <Check aria-hidden="true" className="h-3 w-3" strokeWidth={2.25} />
                </span>
                <span className="min-w-0">
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "tags":
      return (
        <div>
          {block.title ? (
            <p className="eyebrow mb-3 text-jk-secondary">{block.title}</p>
          ) : null}
          <ul className="flex flex-wrap gap-2">
            {block.items.map((tag) => (
              <li key={tag}>
                <Pill tone="outline">{tag}</Pill>
              </li>
            ))}
          </ul>
        </div>
      );

    case "steps":
      return (
        <ol>
          {block.items.map((step, index) => {
            const last = index === block.items.length - 1;

            return (
              <li className="relative flex gap-4 pb-6 last:pb-0" key={step.title}>
                {!last ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-9 bottom-0 left-6 w-px bg-jk-brand-green/15"
                  />
                ) : null}
                <span className="ui-label relative inline-flex h-9 min-w-12 shrink-0 items-center justify-center rounded-full bg-jk-brand-green px-3 text-xs text-jk-cream">
                  {step.marker ?? String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 pt-1">
                  <p className="ui-label text-body text-jk-primary">{step.title}</p>
                  <p className="mt-1 text-body text-jk-secondary">
                    <RichText text={step.text} />
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      );

    case "payoutPreview":
      return (
        <PayoutPreview
          eyebrow={block.eyebrow}
          note={block.note}
          groupLabel={
            block.calculation.kind === "seasonalTiers" ? block.calculation.seasonLabel : undefined
          }
          groups={payoutScenarioGroups(block.calculation)}
          scenarioLabel={block.calculation.scenarioLabel}
          text={block.text}
          title={block.title}
        />
      );

    case "accordion":
      return (
        <Accordion
          items={block.items.map((item) => ({
            id: item.id,
            title: item.title,
            summary: item.summary,
            icon: item.icon,
            content: <ContentBlocks blocks={item.blocks} className="space-y-3" />,
          }))}
        />
      );

    case "action": {
      const external = /^https?:\/\//.test(block.href);

      return (
        <a
          className="group flex items-center gap-4 rounded-card bg-jk-brand-green p-4 text-jk-cream outline-none transition-[background-color,transform] duration-200 hover:bg-jk-primary active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jk-brand-green"
          href={block.href}
          {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
        >
          {block.icon ? <IconBadge name={block.icon} tone="on-dark" /> : null}
          <span className="min-w-0 flex-1">
            {block.description ? (
              <span className="eyebrow block text-jk-sand">
                <RichText text={block.description} />
              </span>
            ) : null}
            <span className="ui-label mt-1 block truncate text-base text-jk-cream">
              {block.label}
            </span>
          </span>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jk-cream text-jk-brand-green">
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
          </span>
        </a>
      );
    }
  }
}
