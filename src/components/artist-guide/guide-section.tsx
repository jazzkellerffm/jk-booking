import type { GuideFormat, GuideSection as GuideSectionContent } from "@/content/artist-guide/types";
import { FormatExplorer } from "@/components/artist-guide/format-explorer";
import { ContentBlocks } from "@/components/content/content-blocks";
import { SectionHeading } from "@/components/ui/section-heading";

export function GuideSection({
  section,
  index,
  formats,
}: {
  section: GuideSectionContent;
  index: number;
  formats: GuideFormat[];
}) {
  const headingId = `${section.id}-title`;

  return (
    <section aria-labelledby={headingId} className="scroll-mt-32" id={section.id}>
      <SectionHeading
        eyebrow={section.eyebrow}
        id={headingId}
        index={index}
        lead={section.lead}
        title={section.title}
      />
      {section.variant === "formats" ? <FormatExplorer formats={formats} /> : null}
      <ContentBlocks
        blocks={section.blocks}
        className={section.variant === "formats" ? "mt-4" : undefined}
      />
    </section>
  );
}
