import type { Locale } from "@/lib/i18n";
import type {
  ContentBlock,
  Fact,
  IconName,
  NoticeTone,
  RichText,
} from "@/content/types";

/** Paths in public/media. Mobile is 9:16, desktop is 16:9 (switch at 768px). */
export type HeroAsset = {
  mobile: string;
  desktop: string;
};

/**
 * Hero media is swappable. The ambient Brand Green layer always renders
 * underneath and is the fallback while media loads or if it fails.
 * Video: muted, looped, inline; replaced by `poster` with reduced motion.
 */
export type HeroMedia =
  | { type: "ambient" }
  | { type: "image"; src: HeroAsset }
  | { type: "video"; src: HeroAsset; poster?: HeroAsset };

export type GuideLink = {
  label: string;
  href: string;
};

export type GuideHero = {
  eyebrow: string;
  title: string;
  subtitle: RichText;
  media: HeroMedia;
  primaryAction: GuideLink;
  secondaryAction: GuideLink;
};

export type GuideFormatId = "weekend" | "nyjb" | "jam" | "riviera";

export type GuideFormat = {
  id: GuideFormatId;
  name: string;
  /** Omit when not confirmed in the source of truth (track it in `tbd`). */
  schedule?: string;
  icon: IconName;
  tagline: string;
  summary: RichText;
  keyFigure?: { value: string; label: string };
  points: RichText[];
  goodFit?: string[];
  notFor?: string[];
  notices?: { tone: NoticeTone; title?: string; text: RichText }[];
};

export type GuideSection = {
  id: string;
  /** Short label for the sticky section navigation; omit to keep the section out of it */
  navLabel?: string;
  eyebrow: string;
  title: string;
  icon: IconName;
  lead?: RichText;
  /** "formats" renders the interactive format explorer before the blocks */
  variant?: "default" | "formats";
  blocks: ContentBlock[];
};

export type GuideClosing = {
  eyebrow: string;
  title: string;
  text: RichText;
  /** Secondary line under the main text */
  note?: RichText;
  contactLabel: string;
  contactSubject: string;
  /**
   * Reserved for the future booking acknowledgement step. Leave unset until
   * that flow exists — it renders as a real, working link.
   */
  nextAction?: GuideLink;
};

/**
 * A detail that would be useful in the guide but is not yet confirmed in
 * `src/content/artist-guide-source.md`. Never rendered publicly.
 */
export type GuideTbd = {
  /** Where the value would go, e.g. "formats.nyjb.schedule" */
  field: string;
  note: string;
};

export type ArtistGuideContent = {
  locale: Locale;
  meta: { title: string; description: string };
  hero: GuideHero;
  /** Heading for the at-a-glance strip below the hero */
  quickFactsTitle: string;
  quickFacts: Fact[];
  formats: GuideFormat[];
  sections: GuideSection[];
  closing: GuideClosing;
  tbd: GuideTbd[];
};
