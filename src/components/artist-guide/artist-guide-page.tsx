import type { ArtistGuideContent } from "@/content/artist-guide/types";
import { GuideClosing } from "@/components/artist-guide/guide-closing";
import { GuideHero } from "@/components/artist-guide/guide-hero";
import { GuideSection } from "@/components/artist-guide/guide-section";
import { QuickFacts } from "@/components/artist-guide/quick-facts";
import { SectionNav } from "@/components/artist-guide/section-nav";

export function ArtistGuidePage({ guide }: { guide: ArtistGuideContent }) {
  const navItems = guide.sections.map((section) => ({
    id: section.id,
    label: section.navLabel,
  }));

  return (
    <>
      <GuideHero hero={guide.hero} />
      <QuickFacts facts={guide.quickFacts} title={guide.quickFactsTitle} />
      <SectionNav items={navItems} />

      <div className="mx-auto max-w-3xl space-y-20 px-4 py-14 sm:space-y-24 sm:px-6 sm:py-20">
        {guide.sections.map((section, index) => (
          <GuideSection
            formats={guide.formats}
            index={index + 1}
            key={section.id}
            section={section}
          />
        ))}
      </div>

      <GuideClosing closing={guide.closing} />
    </>
  );
}
