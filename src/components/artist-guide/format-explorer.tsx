"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { GuideFormat } from "@/content/artist-guide/types";
import { BulletList } from "@/components/ui/bullet-list";
import { Card } from "@/components/ui/card";
import { IconBadge } from "@/components/ui/icon-badge";
import { Notice } from "@/components/ui/notice";
import { Pill } from "@/components/ui/pill";
import { RichText } from "@/components/ui/rich-text";
import { cn } from "@/lib/cn";

export function FormatExplorer({ formats }: { formats: GuideFormat[] }) {
  const [selectedId, setSelectedId] = useState(formats[0]?.id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const selected = formats.find((format) => format.id === selectedId) ?? formats[0];

  if (!selected) {
    return null;
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const delta =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? -1
          : 0;

    if (delta === 0) return;
    event.preventDefault();
    const nextIndex = (index + delta + formats.length) % formats.length;
    setSelectedId(formats[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  const panelId = `${baseId}-panel`;

  return (
    <div>
      <div
        aria-label="Formats"
        className="grid grid-cols-2 gap-2 sm:grid-cols-4"
        role="tablist"
      >
        {formats.map((format, index) => {
          const active = format.id === selected.id;

          return (
            <button
              aria-controls={panelId}
              aria-selected={active}
              className={cn(
                "flex min-h-28 flex-col items-start justify-between rounded-card p-4 text-left outline-none transition-[background-color,box-shadow,transform] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jk-brand-green",
                active
                  ? "bg-jk-brand-green text-white shadow-jk-raised"
                  : "bg-jk-card text-jk-primary shadow-jk-card ring-1 ring-jk-primary/5 hover:ring-jk-brand-green/30",
              )}
              id={`${baseId}-tab-${format.id}`}
              key={format.id}
              onClick={() => setSelectedId(format.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              tabIndex={active ? 0 : -1}
              type="button"
            >
              <IconBadge name={format.icon} size="sm" tone={active ? "on-dark" : "light"} />
              <span className="mt-4 block">
                {format.schedule ? (
                  <span
                    className={cn(
                      "eyebrow block",
                      active ? "text-jk-sand" : "text-jk-secondary",
                    )}
                  >
                    {format.schedule}
                  </span>
                ) : null}
                <span className="ui-label mt-1 block text-body">{format.name}</span>
              </span>
            </button>
          );
        })}
      </div>

      <Card
        aria-labelledby={`${baseId}-tab-${selected.id}`}
        className="mt-3"
        id={panelId}
        role="tabpanel"
      >
        <div className="jk-rise p-6 sm:p-8" key={selected.id}>
          <div className="flex flex-wrap items-center gap-2">
            {selected.schedule ? <Pill tone="light">{selected.schedule}</Pill> : null}
            <p className="eyebrow text-jk-secondary">{selected.tagline}</p>
          </div>
          <h3 className="display-heading mt-4 text-2xl text-jk-primary sm:text-3xl">
            {selected.name}
          </h3>
          <p className="mt-3 text-base leading-7 text-jk-primary/85">
            <RichText text={selected.summary} />
          </p>

          {selected.keyFigure ? (
            <div
              className={cn(
                "mt-6 flex rounded-inner bg-jk-sand-light p-4 ring-1 ring-jk-sand/30",
                // Ranges like "€400–€600" leave no room for the label beside them on phones.
                selected.keyFigure.value.length > 6
                  ? "flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4"
                  : "items-center gap-4",
              )}
            >
              <p className="display-heading text-3xl leading-none whitespace-nowrap text-jk-brand-green">
                {selected.keyFigure.value}
              </p>
              <span
                aria-hidden="true"
                className={cn(
                  "h-8 w-px bg-jk-sand/60",
                  selected.keyFigure.value.length > 6 && "hidden sm:block",
                )}
              />
              <p className="text-sm text-jk-primary/80">{selected.keyFigure.label}</p>
            </div>
          ) : null}

          <BulletList className="mt-6" items={selected.points} style="check" />

          {selected.goodFit || selected.notFor ? (
            <div className="mt-6 grid gap-6 border-t border-jk-primary/[0.07] pt-6 sm:grid-cols-2">
              {selected.goodFit ? (
                <div>
                  <p className="eyebrow mb-3 text-jk-brand-green">Good fit</p>
                  <ul className="flex flex-wrap gap-2">
                    {selected.goodFit.map((item) => (
                      <li key={item}>
                        <Pill tone="light">{item}</Pill>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {selected.notFor ? (
                <BulletList items={selected.notFor} style="cross" title="Not intended for" />
              ) : null}
            </div>
          ) : null}

          {selected.notices?.length ? (
            <div className="mt-6 space-y-2">
              {selected.notices.map((notice, index) => (
                <Notice key={index} text={notice.text} title={notice.title} tone={notice.tone} />
              ))}
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
