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
  | "mixer"
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

/** One switchable scenario of a payout preview, e.g. a ticket price. */
export type PayoutScenario = {
  id: string;
  /** Pill label, e.g. "€30" */
  label: string;
  /** `guests` is a count or bracket, e.g. "30" or "21–30" */
  rows: { guests: string; payout: number }[];
};

export type PayoutCalculation =
  | {
      /** Share of net ticket revenue, one scenario (pill) per ticket price */
      kind: "revenueShare";
      /** Accessible name for the scenario pills, e.g. "Ticket price" */
      scenarioLabel: string;
      /** Whole-euro ticket prices */
      ticketPrices: number[];
      guestCounts: number[];
      vatRate: number;
      artistShare: number;
      roundUpTo: number;
    }
  | {
      /** Fixed fee per paying-attendance bracket, one pill per bracket; the first is the default */
      kind: "tiers";
      /** Accessible name for the bracket pills, e.g. "Paying guests" */
      scenarioLabel: string;
      tiers: AttendanceTier[];
    }
  | {
      /** Attendance tiers that differ by season; season pills sit above the bracket pills */
      kind: "seasonalTiers";
      /** Accessible name for the season pills, e.g. "Season" */
      seasonLabel: string;
      scenarioLabel: string;
      seasons: {
        id: string;
        /** Pill label, e.g. "Regular" */
        label: string;
        /** Shown under the pills, e.g. "16 September – 30 April" */
        period: string;
        /** Replace the card title / text while this season is selected */
        title?: string;
        text?: RichText;
        tiers: AttendanceTier[];
      }[];
    };

/** Paying-guest bracket, e.g. "21–30", and its fee in whole euros */
export type AttendanceTier = { guests: string; payout: number };

/** A set of scenarios selectable as one group, e.g. a season. */
export type PayoutScenarioGroup = {
  id: string;
  label: string;
  caption?: string;
  title?: string;
  text?: RichText;
  scenarios: PayoutScenario[];
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
  | {
      type: "stats";
      items: {
        value: string;
        label: string;
        caption?: RichText;
        /** Smaller secondary line under the caption */
        detail?: string;
      }[];
      /** Small print under the cards, e.g. explaining an asterisk */
      footnote?: RichText;
    }
  /** Static fact tiles (2×2 on mobile, 4 across on desktop); never interactive */
  | { type: "highlights"; items: { icon?: IconName; title: string; text: string }[] }
  /** Compact checklist rows for short required items */
  | { type: "checklist"; title?: string; items: RichText[] }
  | { type: "tags"; title?: string; items: string[] }
  | { type: "steps"; items: Step[] }
  | { type: "accordion"; items: AccordionItem[] }
  | {
      /** Payouts as graduated rose bars; amounts are whole euros. */
      type: "payoutPreview";
      eyebrow?: string;
      title: string;
      text?: RichText;
      note?: RichText;
      calculation: PayoutCalculation;
    }
  | {
      type: "action";
      label: string;
      href: string;
      description?: RichText;
      icon?: IconName;
    };
