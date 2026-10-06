import { Fragment } from "react";
import type { ArtistGuideContent } from "@/content/artist-guide/types";
import { GuideClosing } from "@/components/artist-guide/guide-closing";
import { GuideHero } from "@/components/artist-guide/guide-hero";
import { GuideSection } from "@/components/artist-guide/guide-section";
import { QuickFacts } from "@/components/artist-guide/quick-facts";
import { SectionNav } from "@/components/artist-guide/section-nav";
import { Divider } from "@/components/ui/divider";

export function ArtistGuidePage({ guide }: { guide: ArtistGuideContent }) {
  const navItems = guide.sections.map((section) => ({
    id: section.id,
    label: section.navLabel,
  }));

  return (
    <>
      <GuideHero hero={guide.hero} />
      <QuickFacts facts={guide.quickFacts} />
      <SectionNav items={navItems} />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {guide.sections.map((section, index) => (
          <Fragment key={section.id}>
            {index > 0 ? <Divider className="my-12" /> : null}
            <GuideSection
              formats={guide.formats}
              index={index + 1}
              section={section}
            />
          </Fragment>
        ))}
      </div>

      <GuideClosing closing={guide.closing} />
    </>
  );
}
