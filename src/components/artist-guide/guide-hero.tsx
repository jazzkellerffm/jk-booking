import { ArrowDown } from "lucide-react";
import type { GuideHero as GuideHeroContent } from "@/content/artist-guide/types";
import { HeroMedia } from "@/components/artist-guide/hero-media";
import { ButtonLink } from "@/components/ui/button";
import { RichText } from "@/components/ui/rich-text";
import { site } from "@/lib/site";

export function GuideHero({ hero }: { hero: GuideHeroContent }) {
  return (
    <section aria-labelledby="hero-title" className="px-3 pt-3 sm:px-6 sm:pt-6">
      <div className="relative mx-auto flex min-h-[max(30rem,calc(100svh-11rem))] max-w-5xl flex-col overflow-hidden rounded-card bg-jk-brand-green-deep text-jk-cream sm:min-h-[34rem]">
        <HeroMedia media={hero.media} />

        <p className="eyebrow relative px-6 pt-6 text-jk-cream/70 sm:px-8 sm:pt-8">
          {site.venueTagline}
        </p>

        <div className="relative mt-auto px-6 pb-8 sm:px-8">
          <p className="eyebrow flex items-center gap-3 text-jk-sand">
            <span>{site.productName}</span>
            <span aria-hidden="true" className="h-px w-6 bg-jk-sand/60" />
            <span>{hero.eyebrow}</span>
          </p>

          <span
            aria-hidden="true"
            className="mt-6 block h-[3px] w-20 -rotate-2 rounded-full bg-jk-cream/85"
          />
          <h1
            className="display-heading mt-4 text-[1.75rem] leading-[1.15] text-jk-cream sm:max-w-[14ch] sm:text-5xl"
            id="hero-title"
          >
            {hero.title}
          </h1>

          <p className="mt-6 max-w-[34rem] text-base leading-7 text-jk-cream/80">
            <RichText text={hero.subtitle} />
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={hero.primaryAction.href} size="lg" variant="light">
              {hero.primaryAction.label}
              <ArrowDown aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            </ButtonLink>
            <ButtonLink href={hero.secondaryAction.href} size="lg" variant="outline-light">
              {hero.secondaryAction.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
