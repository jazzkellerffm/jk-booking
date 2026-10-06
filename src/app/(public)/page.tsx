import type { Metadata } from "next";
import { ArtistGuidePage } from "@/components/artist-guide/artist-guide-page";
import { getArtistGuide } from "@/content/artist-guide";

const guide = getArtistGuide();

export const metadata: Metadata = {
  title: { absolute: guide.meta.title },
  description: guide.meta.description,
};

export default function Home() {
  return <ArtistGuidePage guide={guide} />;
}
