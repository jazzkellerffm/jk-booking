"use client";

import { Info } from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { PayoutScenario, RichText as RichTextValue } from "@/content/types";
import { RichText } from "@/components/ui/rich-text";
import { cn } from "@/lib/cn";

const euro = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/** Graduated bar preview of example payouts, switchable by scenario pills. */
export function PayoutPreview({
  eyebrow,
  title,
  text,
  note,
  scenarioLabel,
  scenarios,
}: {
  eyebrow?: string;
  title: string;
  text?: RichTextValue;
  note?: RichTextValue;
  scenarioLabel: string;
  scenarios: PayoutScenario[];
}) {
  const [selectedId, setSelectedId] = useState(scenarios[0]?.id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const selected = scenarios.find((scenario) => scenario.id === selectedId) ?? scenarios[0];

  if (!selected) {
    return null;
  }

  // One scale across all scenarios so switching price visibly changes the bars.
  const max = Math.max(...scenarios.flatMap((scenario) => scenario.rows.map((row) => row.payout)));
  const panelId = `${baseId}-panel`;

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const delta =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? -1
          : 0;

    if (delta === 0) return;
    event.preventDefault();
    const nextIndex = (index + delta + scenarios.length) % scenarios.length;
    setSelectedId(scenarios[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="overflow-hidden rounded-card bg-jk-card p-5 shadow-jk-card ring-1 ring-jk-primary/[0.05] sm:p-7">
      {eyebrow ? <p className="eyebrow text-jk-brand-green">{eyebrow}</p> : null}
      <h3 className="display-heading mt-2 text-2xl text-jk-primary sm:text-[1.75rem]">{title}</h3>
      {text ? (
        <p className="mt-2 text-body text-jk-secondary">
          <RichText text={text} />
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        <p className="eyebrow text-jk-secondary" id={`${baseId}-label`}>
          {scenarioLabel}
        </p>
        {/* Scrolls edge-to-edge on narrow cards instead of wrapping or shrinking pills. */}
        <div className="jk-no-scrollbar -mx-5 basis-[calc(100%+2.5rem)] overflow-x-auto px-5 sm:mx-0 sm:basis-auto sm:overflow-visible sm:px-0">
          <div
            aria-labelledby={`${baseId}-label`}
            className="flex w-max gap-1 rounded-full bg-jk-primary/[0.04] p-1"
            role="tablist"
          >
            {scenarios.map((scenario, index) => {
              const active = scenario.id === selected.id;

              return (
                <button
                  aria-controls={panelId}
                  aria-selected={active}
                  className={cn(
                    "ui-label inline-flex h-10 min-w-14 items-center justify-center rounded-full px-4 text-sm tabular-nums outline-none transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-jk-brand-green",
                    active
                      ? "bg-jk-brand-green text-white shadow-jk-raised"
                      : "text-jk-secondary hover:text-jk-primary",
                  )}
                  id={`${baseId}-tab-${scenario.id}`}
                  key={scenario.id}
                  onClick={() => setSelectedId(scenario.id)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  role="tab"
                  tabIndex={active ? 0 : -1}
                  type="button"
                >
                  {scenario.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        aria-labelledby={`${baseId}-tab-${selected.id}`}
        className="mt-6"
        id={panelId}
        role="tabpanel"
      >
        <ul className="space-y-2.5">
          {selected.rows.map((row) => (
            <li
              className="grid grid-cols-[4.25rem_minmax(0,1fr)_4.25rem] items-center gap-3 sm:grid-cols-[5rem_minmax(0,1fr)_5rem]"
              key={row.guests}
            >
              <span className="text-sm leading-tight text-jk-secondary">
                <span className="ui-label text-body text-jk-primary tabular-nums">{row.guests}</span>{" "}
                guests
              </span>
              <span aria-hidden="true" className="block h-8 overflow-hidden rounded-full bg-jk-rose-light">
                <span
                  className="block h-full rounded-full bg-gradient-to-r from-jk-rose-soft to-jk-rose transition-[width] duration-500 ease-out motion-reduce:transition-none"
                  style={{ width: `${Math.max(8, (row.payout / max) * 100)}%` }}
                />
              </span>
              <span className="ui-label text-right text-body text-jk-primary tabular-nums">
                {euro.format(row.payout)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {note ? (
        <p className="mt-6 flex gap-2.5 border-t border-jk-primary/[0.07] pt-4 text-sm leading-5 text-jk-secondary">
          <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-jk-brand-green" strokeWidth={1.75} />
          <span>
            <RichText text={note} />
          </span>
        </p>
      ) : null}
    </div>
  );
}
