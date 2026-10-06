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
    <section
      aria-labelledby="closing-title"
      className="relative overflow-hidden bg-jk-brand-green text-white"
      data-header-theme="dark"
    >
      <AmbientBackground variant="dark" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow text-white/65">{closing.eyebrow}</p>
        <h2
          className="display-heading mt-5 max-w-[14ch] text-[2.5rem] text-white sm:text-6xl"
          id="closing-title"
        >
          {closing.title}
        </h2>
        <p className="mt-6 max-w-[32rem] text-lg leading-7 text-white/80">
          <RichText text={closing.text} />
        </p>

        <div className="mt-10">
          <ButtonLink
            href={mailto(site.contacts.booking.email, closing.contactSubject)}
            size="lg"
            variant="white"
          >
            <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            {closing.contactLabel}
          </ButtonLink>
        </div>

        <dl className="mt-12 grid max-w-[32rem] gap-4 border-t border-white/15 pt-6 sm:grid-cols-2">
          {contacts.map((contact) => (
            <div key={contact.email}>
              <dt className="eyebrow text-white/55">{contact.label}</dt>
              <dd className="mt-1">
                <a
                  className="ui-label text-body text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  href={mailto(contact.email)}
                >
                  {contact.email}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
