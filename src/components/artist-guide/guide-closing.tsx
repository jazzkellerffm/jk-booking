import { Mail } from "lucide-react";
import type { GuideClosing as GuideClosingContent } from "@/content/artist-guide/types";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { ButtonLink } from "@/components/ui/button";
import { RichText } from "@/components/ui/rich-text";
import { mailto, site } from "@/lib/site";

export function GuideClosing({ closing }: { closing: GuideClosingContent }) {
  const contacts = [site.contacts.booking, site.contacts.operations].filter(
    (contact): contact is { label: string; email: string } => contact !== null,
  );

  return (
    <section aria-labelledby="closing-title" className="mx-auto max-w-5xl px-3 pb-12 sm:px-6">
      <div className="relative overflow-hidden rounded-card bg-jk-brand-green-deep px-6 py-12 text-jk-cream sm:px-12">
        <AmbientBackground variant="dark" />

        <div className="relative max-w-[34rem]">
          <p className="eyebrow text-jk-sand">{closing.eyebrow}</p>
          <span aria-hidden="true" className="mt-4 block h-[3px] w-12 -rotate-2 rounded-full bg-jk-cream/80" />
          <h2
            className="display-heading mt-4 text-2xl leading-[1.2] text-jk-cream sm:text-3xl"
            id="closing-title"
          >
            {closing.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-jk-cream/80">
            <RichText text={closing.text} />
          </p>

          <div className="mt-8">
            <ButtonLink
              href={mailto(site.contacts.booking.email, closing.contactSubject)}
              size="lg"
              variant="light"
            >
              <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              {closing.contactLabel}
            </ButtonLink>
          </div>

          <dl className="mt-8 grid gap-4 border-t border-jk-cream/10 pt-6 sm:grid-cols-2">
            {contacts.map((contact) => (
              <div key={contact.email}>
                <dt className="eyebrow text-jk-cream/60">{contact.label}</dt>
                <dd className="mt-1">
                  <a
                    className="ui-label text-body text-jk-cream underline decoration-jk-cream/25 underline-offset-4 transition-colors hover:decoration-jk-sand"
                    href={mailto(contact.email)}
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
