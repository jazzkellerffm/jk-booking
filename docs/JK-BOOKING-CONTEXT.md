# JK Booking · Product, Booking Logic & UX Context

Status: November 2026
Repo: `jazzkellerffm/jk-booking`
Active branch: `feature/booking-apply-v1`

## Product direction

JK Booking is evolving from the public Artist Guide into a lightweight booking platform at `booking.jazzkeller.com`.

Principles:
- simple, modular, app-like
- own focused data/backend responsibility
- connect to other JKOS apps only where useful
- One Artist · One Booking · One Event · Data entered once
- SUBMITTED ≠ CONFIRMED

First active flows:
- The Famous Jazz Jam Session
- New York Jazz Bar

Later:
- The Weekend
- Riviera Club

The Weekend remains curated / invitation-led rather than an open application.

## Shared booking flow

1. Format
2. Conditions
3. Available Dates
4. Your Project
5. Review & Submit

Jam and NYJB should use shared booking components plus format configuration rather than separate hard-coded systems.

## Booking calendar

Availability is manually curated by Jazzkeller. Do not infer that every Wednesday or Thursday is bookable.

Suggested internal date states:
- `available`
- `held`
- `booked`
- `closed`

Only intentionally exposed `available` dates appear publicly.

Philipp can mark a show completely assigned / unavailable.

## UX inspiration from JK Staff OS

The current Staff OS event cards are a strong reference for Booking.

Useful characteristics:
- compact date-first cards
- large readable day/date
- event title immediately visible
- small semantic status pill
- one clear key value
- cream / white surfaces
- Brand Green typography
- low visual noise
- rounded corners
- mobile-first hierarchy
- horizontal card scrolling where useful

Possible Booking date tile:

**THU 19 NOV**
New York Jazz Bar
`AVAILABLE`

or:

**WED 25 NOV**
Jam Session
`HELD`

A thin status/progress strip can sit below the content where it adds meaning.

One card = one date + one clear state.

## Status pills

Possible statuses:
- Available
- Held
- Booked
- Closed
- Submitted
- Confirmed
- Declined

Semantic color logic:
- Brand Green = confirmed / active / selected
- Rosé = application / selection / progression
- Champagne = special value / fee / secondary highlight
- Neutral = unavailable / informational

Avoid decorative pills without operational meaning.

## Reusable Rosé visual language

Current tokens:

```css
--jk-rose: #d6a39a;
--jk-rose-soft: #ebcbc4;
--jk-rose-light: #f7eeeb;
```

Preferred soft bar pattern:

```tsx
<span className="block h-8 overflow-hidden rounded-full bg-jk-rose-light">
  <span className="block h-full rounded-full bg-gradient-to-r from-jk-rose-soft to-jk-rose transition-[width] duration-500 ease-out motion-reduce:transition-none" />
</span>
```

Characteristics:
- 32 px high
- fully rounded
- pale rose track
- soft rose gradient
- no hard border
- no heavy shadow
- calm, premium, tactile

Scaling principle:

```ts
width = Math.max(8, (value / max) * 100)
```

Use Rosé for:
- payout visualization
- availability/application progression
- soft data bars
- future Inventory v2 stock/par visuals
- Finance / Analytics where appropriate

Do not use Rosé as a danger color.

## Jam Session compact rules

- curated opener, approx. 45 minutes
- opener remains musical host / rhythm-section foundation for the jam
- energetic, communicative, session-friendly
- Swing, Bebop, Hardbop, Straight-Ahead, standards, Soul Jazz, Bossa Nova, Brazilian Jazz, Latin Jazz, groove
- no strongly experimental / free-jazz / passive meditative concepts

Hospitality:
- unlimited water
- 3 drink tickets per performing musician
- beer, wine, soft drinks, simple mixed drinks where available
- cocktails excluded
- no alcohol on stage
- never drinks on the piano
- no guestlist entitlement

Payout:
- €80 per performing musician
- Trio €240
- Quartet €320
- Quintet €400

Reuse existing payout preview.

## New York Jazz Bar compact rules

Positioning:
A curated club night inspired by New York jazz bars and Village-style nightlife.

Important:
- cocktails
- social energy
- club atmosphere
- intimate room
- audience connection
- accessible repertoire
- lively rather than sleepy / overly introspective

Musical fit:
- standards / classics
- Swing
- Bebop
- Hardbop
- Straight-Ahead
- Soul Jazz
- Organ Jazz
- Bossa Nova
- Brazilian Jazz
- Latin Jazz
- groove
- selected Mediterranean / Spanish / Italian influences where natural

Maximum 2 originals.

Generally not a fit:
- strongly experimental concepts
- avant-garde
- original-dominated programmes
- highly conceptual projects
- overly introspective / sleepy repertoire

Hospitality:
- moderate / professional drinks
- cocktails are not standard hospitality

Band size:
- standard total band fee applies equally to trio or quartet unless individually agreed otherwise

Regular Season · 16 Sep–30 Apr:
- 0–59 → €400
- 60+ → €500

Summer Season · 1 May–15 Sep:
- 0–20 → €300
- 21–29 → €350
- 30–59 → €400
- 60+ → €500

## Paying attendance

Preferred public wording:

> Fee tiers are based primarily on verified online ticket sales. Paying door guests may be included where relevant. Complimentary guests, staff and other non-paying admissions are not counted.

Do not publish a hard internal threshold.

Internal intent:
- low-attendance nights: paying door guests may fairly count
- well-booked/full nights: verified online sales remain the primary basis
- avoid unnecessary head-count disputes

## Intake

Shared intake:
- Artist / Band Name
- Contact Person
- Email
- WhatsApp / Phone
- City / Country
- Formation
- Full lineup
- Instrument per musician
- About your project
- Website / EPK / Instagram / YouTube
- Press Photos
- Photographer Credit
- Technical Notes

Press photos:
- multiple uploads
- encourage 2–3 usable promotional images
- JPG / PNG / WebP
- multiple orientations encouraged
- photographer credit

## Backend direction

Prefer a dedicated Supabase project for JK Booking, not a central mixed JKOS database.

Likely stack:
- Supabase
- Resend
- existing Next.js app

Initial submission statuses:
- SUBMITTED
- CONFIRMED
- DECLINED

Target flow:
Artist selects date → submits → SUBMITTED → Philipp/Regine review → Confirm/Decline → CONFIRMED → Resend email → date becomes unavailable.

## Navigation

Possible mobile bottom nav:
- Guide
- Formats
- Apply
- Contact

Behavior:
- frosted/translucent
- iPhone safe-area aware
- hides on scroll down
- reappears on scroll up
- does not replace the Guide's internal section pills

## Design principles

Preserve:
- Brand Green
- cream / warm-white
- Gustavo display
- PolySans UI/body
- natural Gustavo spacing
- rounded cards
- subtle hairlines
- restrained shadows
- mobile-first
- semantic states
- no generic SaaS dashboard feel

> Design the platform like software. Design the content like cinema.

Operational extension:

> Make the data feel calm, obvious and touchable.

## Code references

- `src/components/content/payout-preview.tsx`
- `src/app/globals.css`
- `src/content/artist-guide-source.md`
- `src/content/jkos-style-guide.md`

Update this document when the final booking architecture changes materially.
