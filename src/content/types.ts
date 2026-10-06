/**
 * Shared, JSON-serialisable content primitives.
 *
 * Content files only use plain data (strings, arrays, objects) so they can be
 * moved to JSON, a CMS or an internal JKOS tool later without code changes.
 * Icons are referenced by name and resolved in `components/ui/icon.tsx`.
 */

export type IconName =
  | "alert"
  | "arrival"
  | "audience"
  | "ban"
  | "bass"
  | "building"
  | "calendar"
  | "check"
  | "clock"
  | "cymbal"
  | "drinks"
  | "drum"
  | "formats"
  | "gema"
  | "guestlist"
  | "guitar"
  | "hospitality"
  | "info"
  | "invoice"
  | "mail"
  | "megaphone"
  | "microphone"
  | "monitor"
  | "moon"
  | "music"
  | "next"
  | "pa"
  | "package"
  | "payout"
  | "piano"
  | "riviera"
  | "seats"
  | "session"
  | "sparkles"
  | "stage"
  | "sun"
  | "technical"
  | "ticket"
  | "transfer";

/**
 * Rich text strings support two inline conventions:
 * `**bold**` and `[label](https://link)`.
 */
export type RichText = string;

export type NoticeTone = "info" | "important" | "positive" | "neutral";

export type ListStyle = "check" | "cross" | "dot";

export type Fact = {
  icon?: IconName;
  label: string;
  value: RichText;
};

export type Step = {
  marker?: string;
  title: string;
  text: RichText;
};

export type AccordionItem = {
  id: string;
  title: string;
  icon?: IconName;
  summary?: string;
  blocks: ContentBlock[];
};

export type ContentBlock =
  | { type: "paragraph"; text: RichText; size?: "lead" | "body" }
  | { type: "list"; title?: string; style?: ListStyle; items: RichText[] }
  | {
      type: "notice";
      tone: NoticeTone;
      title?: string;
      text: RichText;
      icon?: IconName;
    }
  | { type: "facts"; title?: string; items: Fact[] }
  | { type: "stats"; items: { value: string; label: string; caption?: RichText }[] }
  | { type: "tags"; title?: string; items: string[] }
  | { type: "steps"; items: Step[] }
  | { type: "accordion"; items: AccordionItem[] }
  | {
      type: "action";
      label: string;
      href: string;
      description?: RichText;
      icon?: IconName;
    };
