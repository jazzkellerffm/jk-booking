import type { Locale } from "@/lib/i18n";
import type {
  ContentBlock,
  Fact,
  IconName,
  NoticeTone,
  RichText,
} from "@/content/types";

/**
 * Hero media is swappable: "ambient" renders the animated JKOS gradient layer,
 * "video" renders a muted loop on top of it (the ambient layer stays as the
 * loading / fallback state).
 */
export type HeroMedia =
  | { type: "ambient" }
  | {
      type: "video";
      /** e.g. "/media/artist-guide-loop.mp4" — place files in public/media */
      src: string;
      /** Optional WebM alternative for smaller file size */
      webmSrc?: string;
      poster?: string;
    };

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

export type GuideFormatId = "weekend" | "nyjb" | "jam" | "sunday";

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
  /** Short label for the sticky section navigation */
  navLabel: string;
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
  contactLabel: string;
  contactSubject: string;
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
  quickFacts: Fact[];
  formats: GuideFormat[];
  sections: GuideSection[];
  closing: GuideClosing;
  tbd: GuideTbd[];
};
