import { artistGuideEn } from "@/content/artist-guide/en";
import type { ArtistGuideContent } from "@/content/artist-guide/types";
import { defaultLocale, type Locale } from "@/lib/i18n";

const guides: Partial<Record<Locale, ArtistGuideContent>> = {
  en: artistGuideEn,
};

export function getArtistGuide(locale: Locale = defaultLocale): ArtistGuideContent {
  return guides[locale] ?? artistGuideEn;
}

export type * from "@/content/artist-guide/types";
