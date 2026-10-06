import { ArrowDown } from "lucide-react";
import type { GuideHero as GuideHeroContent } from "@/content/artist-guide/types";
import { HeroMedia } from "@/components/artist-guide/hero-media";
import { ButtonLink } from "@/components/ui/button";
import { RichText } from "@/components/ui/rich-text";
import { site } from "@/lib/site";

/**
 * Full-bleed hero. Pulled up under the sticky header (-mt-16) so the header
 * floats over it; `data-header-theme="dark"` switches the header to its
 * light-on-dark state while it is over this section.
 */
export function GuideHero({ hero }: { hero: GuideHeroContent }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative -mt-16 flex min-h-[max(36rem,100svh)] flex-col overflow-hidden bg-jk-brand-green text-white"
      data-header-theme="dark"
    >
      <HeroMedia media={hero.media} />

      <div className="relative mx-auto mt-auto w-full max-w-5xl px-6 pt-32 pb-12 sm:px-8 sm:pb-16">
        <p className="eyebrow flex items-center gap-3 text-white/70">
          <span>{hero.eyebrow}</span>
          <span aria-hidden="true" className="hidden h-px w-8 bg-white/40 sm:block" />
          <span className="hidden sm:inline">{site.venueTagline}</span>
        </p>

        <h1
          className="display-heading mt-6 max-w-[11ch] text-[3.25rem] leading-[0.98] text-white sm:text-7xl lg:text-[5.5rem]"
          id="hero-title"
        >
          {hero.title}
        </h1>

        <p className="mt-6 max-w-[30rem] text-lg leading-7 text-white/80">
          <RichText text={hero.subtitle} />
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={hero.primaryAction.href} size="lg" variant="white">
            {hero.primaryAction.label}
            <ArrowDown aria-hidden="true" className="h-4 w-4" strokeWidth={2.25} />
          </ButtonLink>
          <ButtonLink href={hero.secondaryAction.href} size="lg" variant="outline-light">
            {hero.secondaryAction.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
