<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# JK Booking — Project Rules

JK Booking is part of the JKOS ecosystem for Jazzkeller Frankfurt. The first live module is the public Artist Guide ("Playing at Jazzkeller Frankfurt").

## Content

- `src/content/artist-guide-source.md` is the source of truth for Artist Guide content.
- Do not invent booking policies, payouts, timings, technical equipment, hospitality benefits, tax rules or contacts.
- If a detail is missing, omit it or mark it TBD.
- Keep content separate from presentation where practical.
- Keep public-facing copy concise, warm and professional.
- Do not expose private phone numbers or internal operational notes in public UI.

## Design

- Keep the app mobile-first.
- Follow the JKOS visual language and reuse patterns from `jk-goldpass` where appropriate.

## Architecture

- Prefer simple, modular, data-first architecture.
- Avoid unnecessary dependencies.
- Build reusable components so future modules can be added without rewriting the Artist Guide.
- Future modules may include Applications, Booking Desk, Calendar, Artists, Events, Payouts and Invoice Guide, but do not build them unless explicitly requested.

## Self-containment

- Do not create a runtime dependency on sibling projects.
- Local fonts/assets copied from sibling JKOS projects must live inside this repository.
