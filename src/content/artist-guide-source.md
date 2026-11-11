# JK Booking — Artist Guide Source of Truth

> **Purpose**
> This file is the content source of truth for the first public-facing module of **JK Booking**.
> Cursor should use this file to build the Artist Guide UI.
>
> **Important implementation rule**
> Do not invent operational rules, prices, timings, equipment, hospitality benefits, tax rules, contacts, or booking conditions that are not explicitly stated here.
> If something is missing, keep it neutral, omit it, or leave it as `TBD`.
> Do not silently "improve" facts by guessing.
>
> **Language**
> Public-facing copy should be in English for the first version.
>
> **Tone**
> Professional, warm, concise, direct, independent-club character.
> The guide should feel welcoming without sounding apologetic or defensive.
> Avoid legalistic or bureaucratic language unless necessary.

---

# 1. Product Context

**Product name:** JK Booking

**First module:** Playing at Jazzkeller Frankfurt / Artist Guide

This is the first public-facing module of a future booking system.

The app may later grow to include:
- Applications
- Booking Desk
- Booking Calendar
- Artists
- Projects
- Events
- Payouts
- Invoice Guide
- Booking confirmations
- Integrations with Resend, Ticketing, Publisher and other JKOS tools

Do **not** build those future modules yet.

---

# 2. About Jazzkeller Frankfurt

Jazzkeller Frankfurt is a privately run, independent jazz club.

Key facts:
- historic jazz club, **since 1952**
- privately operated
- not publicly funded
- approximately 60 seats
- intimate cellar venue / club setting
- the club operates differently from many publicly funded or nonprofit jazz venues

Fact tiles (About section, compact, non-interactive):
- **Since 1952** — Historic jazz club
- **Independent** — Privately run
- **No public funding** — Independent operating model
- **≈60 seats** — Intimate cellar venue

Artists should not automatically assume that the venue provides:
- hotel accommodation
- taxi or transfer costs
- catering or restaurant meals
- additional rented instruments
- specialty backline
- institutional-style fixed-fee conditions unless specifically agreed

These differences should be explained confidently and positively, not defensively.

Suggested framing:

> Jazzkeller Frankfurt is an independent, privately run jazz club with its own operating model. Because we are not publicly funded, our production and hospitality structure differs from many institutional or nonprofit venues.

---

# 3. Musical Identity / Program Fit

The musical profile of Jazzkeller Frankfurt is centered around:
- Swing
- Bebop
- Hardbop
- Straight-Ahead Jazz
- Mainstream Jazz
- Soul Jazz
- Organ Jazz
- Latin Jazz
- Jazz Standards
- Jazz Classics
- Blues
- Groove-oriented Jazz

These may be shown as tags / chips.

Do **not** list the following as positive profile tags:
- Contemporary Jazz
- Fusion
- Free Jazz
- Experimental Jazz
- Avant-Garde Jazz

Broader identity:
- club-oriented
- audience-connected
- communicative
- performance-driven
- accessible without becoming generic

Fresh ideas are welcome if they fit the character of the club.

The venue is generally **not** a fit for:
- strongly experimental music
- avant-garde concepts
- highly abstract contemporary sound concepts
- long-form meditative sound-art approaches
- programs dominated by experimentation
- highly conceptual projects that do not work naturally in an intimate club environment

The club values:
- musical communication
- audience connection
- entertainment
- groove
- repertoire that works in an intimate jazz-club environment

This musical identity applies across the club, including Jam Session, New York Jazz Bar and Riviera.

---

# 4. Format Overview

The public guide presents four primary formats:

1. The Weekend
2. New York Jazz Bar
3. Jam Session
4. Riviera

Sunday / Special Event is **not** a separate primary format. Selected Sunday dates are treated as part of The Weekend logic (see §8).

The UI may use cards, tabs or accordions.

---

# 5. The Weekend

Typical days:
- Friday
- Saturday
- Sunday dates follow The Weekend booking and payout logic unless individually agreed otherwise (see §8)

## Musical character
The Weekend is the most artist-led concert format.

Artists may present a broader concert program than on New York Jazz Bar nights, while still fitting the general Jazzkeller musical identity.

## Payout
Current rule:
- artists receive **60% of the applicable net ticket revenue**
- if the calculation creates an uneven amount, rounding is always **in favor of the artists**
- the amount is never rounded down against the artists

Important:
- the exact technical definition of "applicable net ticket revenue" should not be expanded beyond what is stated here unless separately confirmed
- do not invent fee deductions, tax formulas or ticketing calculations

## Payout examples
Illustrative example calculations — not fixed guarantees. Show them as a visual preview in the Payouts section.

Title: **Weekend payout examples**
Supporting text: **Illustrative examples based on ticket price and attendance.**
Note: **Based on 60% of applicable net online ticket revenue. Example payouts are rounded up to the next €5 in favour of the artists and are not fixed guarantees.**

The examples are an illustrative calculation aid, not a new payout contract. The public rule above (60% of applicable net ticket revenue) stays unchanged.

Example calculation (matches the JK Payout logic, "Default: rounds UP to next 5€ (in favor of musicians)"):
1. gross revenue = ticket price × paying guests
2. net revenue = gross revenue ÷ 1.07 (removes 7% VAT)
3. artist share = net revenue × 60%
4. payout = artist share rounded **up** to the next €5 increment; never rounded down; an amount already on a €5 increment stays as it is

Ticket prices shown: **€28, €30, €32, €35, €38, €40**
Paying guests shown: **10, 20, 30, 40, 50, 60**

Worked examples:
- €40 × 50 guests: gross €2,000 → net ≈ €1,869.16 → 60% ≈ €1,121.50 → **€1,125**
- €40 × 60 guests: 60% ≈ €1,345.79 → **€1,350**

Show only the final rounded payout. No payout preview for Jam Session (fixed fee). New York Jazz Bar (see §6) and Riviera (see §8a) have their own stepped fee previews in the same visual style.

## Sold-out / walk-in rule
If the venue is fully sold out, Jazzkeller Frankfurt may retain additional spontaneous walk-in / door-ticket revenue to help cover club operating costs.

This applies specifically to additional spontaneous sales after the regular capacity has effectively been reached.

Do not frame this as a general deduction from the artist share.

---

# 6. New York Jazz Bar

New York Jazz Bar is a curated format.

## Musical direction
The format should focus on accessible jazz repertoire such as:
- Jazz Standards
- Jazz Classics
- Swing
- Bebop
- Hardbop
- Straight-Ahead Jazz
- Soul Jazz
- Organ Jazz where appropriate
- Latin Jazz
- Salsa-influenced / Latin-oriented evenings
- accessible New York club-style repertoire

## Not intended for
New York Jazz Bar is not intended for:
- album-release concerts
- CD-release programs
- programs dominated by original compositions
- experimental projects
- avant-garde programs
- highly conceptual original-music projects

## Payout — NYJB 2027 artist-fee models
Two seasonal standard models, based on **paying attendance**. Do not introduce any additional thresholds or payout conditions.

### Regular Season — 16 September – 30 April
Public title: **NYJB Regular Season · Guaranteed Artist Fee**
Description: **A guaranteed €400 artist fee, increasing to €500 when 60 or more paying guests attend.**

| Paying guests | Artist fee |
| --- | --- |
| 0–59 | €400 |
| 60+ | €500 |

- €400 is guaranteed, independent of attendance below a full house
- the full-house increase at 60+ paying guests is €100

### Summer Season — 1 May – 15 September
Public title: **NYJB Summer Fee 2027**
Description: **A flexible summer artist fee based on paying attendance, ranging from €300 to €500.**

| Paying guests | Artist fee |
| --- | --- |
| 0–20 | €300 |
| 21–29 | €350 |
| 30–59 | €400 |
| 60+ | €500 |

- do not imply that this model automatically applies to every NYJB booking

### Band size — total band fee
Applies to both the Regular and the Summer model:
- the artist fee is a **total band fee**, not a per-person fee
- it applies equally to **trio** and **quartet** bookings unless individually agreed otherwise
- the fee is shared between the performing musicians
- do not mention quintets; do not imply that quartets automatically require a special agreement

Public wording:

> The artist fee is a total band fee and applies equally to trio or quartet bookings unless individually agreed otherwise. The fee is shared between the performing musicians.

### Booking agreement precedence
- the general payout model never overrides an individually confirmed booking agreement
- individually agreed artist fees take precedence
- already confirmed bookings remain unchanged (no retroactive change)
- the seasonal NYJB model applies only to new bookings where this model is explicitly agreed

Public note: **These are the standard NYJB 2027 artist-fee models. Individually confirmed booking terms always take precedence.**

### Display
- payout summary card: **NEW YORK JAZZ BAR · €400 · Regular guaranteed fee**, secondary line `Summer €300–€500 · Full House €500`
- format panel key figure: **€400 · Regular guaranteed fee**, supporting line `Summer fee: €300–€500 based on paying attendance.`
- interactive preview in the Payouts section (same rose bar style as Riviera): season pills **Regular / Summer**, then attendance-bracket pills
  - Regular default: 0–59 guests / €400
  - Summer default: 0–20 guests / €300
- do not describe €400 as a year-round fixed fee

## Counting paying guests
Applies to all attendance-based fees (New York Jazz Bar and Riviera Club). Payouts use the actual number of **paying guests**, not ticket-order rows:
- primary basis: **verified online ticket sales**
- paying door / box-office guests are added to the final count
- group tickets count by the people included: CLUB 2 = 2, CLUB 3 = 3, CLUB 4 = 4 paying guests; same principle for other multi-person ticket products
- complimentary guests do not count
- staff do not count

Public wording:

> Paying attendance is based primarily on verified online ticket sales. Paying door guests are added to the final count. Complimentary guests and staff are not included.

Transparency line: **On request, the relevant attendance figures can be verified from the digital ticketing records.**

Display: shown once in the Payouts section as a "Paying attendance" note below the payout details, covering both New York Jazz Bar and Riviera Club.

This is the payout definition only. No ticketing integration is built yet.

## Original compositions
Current rule:
- no more than **two original compositions per evening**
- original pieces should fit naturally into the overall repertoire and atmosphere

The format is **format-first**, not a free artist showcase.

## Cancellation due to low demand
In rare cases, Jazzkeller Frankfurt reserves the right to cancel a New York Jazz Bar date if advance demand is exceptionally low.

Important:
- this should happen with reasonable notice
- in this case, no artist fee or compensation is payable
- it should not be presented as a last-minute cancellation policy
- do not specify a fixed number of hours or days unless confirmed later
- do not publish a numeric demand threshold (e.g. a guest count)

Suggested wording:

> If advance demand is exceptionally low, Jazzkeller Frankfurt may cancel the event with reasonable notice. In this case, no artist fee or compensation is payable.

---

# 7. Jam Session

The Jam Session follows the general musical identity of Jazzkeller Frankfurt.

## Musical direction
Desired:
- Swing
- Bebop
- Hardbop
- New York-style jazz
- Jazz standards
- Latin jazz
- related straight-ahead repertoire

Not intended as:
- avant-garde platform
- experimental platform
- abstract contemporary showcase

## Payout
From 2027:
- **€75 per person**
- maximum **4 persons**

Do not invent a different fixed band total.

## Hospitality
- **3 drink tickets per performing musician**

## Guestlist
- **No guestlist**

## Cancellation due to low demand
In rare cases, Jazzkeller Frankfurt reserves the right to cancel a Jam Session date if advance demand is exceptionally low.

Use the same "reasonable notice" logic as above.

---

# 8. Sunday (part of The Weekend)

Sunday is not a separate primary format and not a completely separate production model. Present it within The Weekend.

Current logic:
- regular Sunday swing dates are Swing-oriented
- many Sunday dates are effectively a second concert / repeat of a Saturday booking
- Sunday follows the Weekend booking and payout logic unless individually agreed otherwise

Suggested wording:

> Sunday dates follow The Weekend booking and payout logic unless individually agreed otherwise.

Do not invent separate Sunday fees or a separate Sunday payout model.

---

# 8a. Riviera

Riviera is the fourth primary format.

Current confirmed positioning:
- seasonal summer format
- lighter and more relaxed atmosphere
- still clearly rooted in the Jazzkeller musical identity

Suggested wording:

> A seasonal summer format with a relaxed, stylish atmosphere while remaining rooted in the Jazzkeller musical identity.

## Payout — Summer Fee 2027
Confirmed stepped fee model, based on actual paying attendance:

| Paying guests | Artist fee |
| --- | --- |
| 0–20 | €400 |
| 21–30 | €450 |
| 31–40 | €500 |
| 41–50 | €550 |
| 51+ | €600 |

Core rules:
- **€400 guaranteed minimum artist fee**
- the fee increases in **€50 steps**
- **€600 maximum regular fixed fee**
- based on **actual paying attendance**, counted as defined in §6 "Counting paying guests"
- the artist fee is a **total band fee** and applies equally to trio or quartet bookings unless individually agreed otherwise; the fee is shared between the performing musicians (same principle as §6 "Band size")
- initially applies to **selected Saturday dates in July and August 2027**
- individually agreed alternative booking models remain valid

This is a stepped fee model, not a revenue-share calculation. Do not present €600 as guaranteed; the €400 minimum must stay clear. Do not invent additional Riviera payout rules.

Payout summary card: **RIVIERA CLUB · €600\* · Summer Fee 2027**
Asterisk clarification: `* Up to €600 depending on paying attendance — see Summer Fee scale below.`
€600 is the regular maximum, never described as guaranteed; the guaranteed minimum stays €400.

Format panel key figure: **€400–€600 · Summer Fee 2027**

Summer Fee scale (compact, interactive, same rose bar style as the Weekend payout examples):
- attendance bracket pills: 0–20 · 21–30 · 31–40 · 41–50 · 51+
- selecting a bracket shows that bracket, a rose bar sized to the fee, and the fee
- default selection: **0–20 / €400** (the guaranteed minimum — €600 must not look like the default)
- Title: **Riviera Summer Fee 2027**
- Text: **A guaranteed €400 minimum, increasing in €50 steps according to paying attendance.**
- Note: **Applies to selected Riviera Club Saturdays in July and August 2027. Individually agreed booking models remain valid.**

Naming: keep **Riviera Club**. Do not generalise it into "Summer Formats", "Special Formats" or similar — other special formats may use individually agreed fixed fees and do not necessarily follow the Summer Fee model.

Not yet confirmed — do not invent:
- exact repertoire restrictions
- exact individual dates
- exact production rules
- hospitality rules specific to Riviera

---

# 9. Promotion & Audience

A booking at Jazzkeller Frankfurt does **not** automatically guarantee a full house.

Artists are expected to actively promote their own appearance using the channels available to them, for example:
- Instagram
- mailing list
- website
- social media
- local network
- other channels with relevant reach

Core principle:
- promotion is a shared effort between artist and venue

Suggested wording:

> A full house is a shared effort. Jazzkeller Frankfurt promotes its program, and we also expect artists to actively communicate their appearance through their own channels.

Do not promise specific marketing services unless separately confirmed.

---

# 10. Artist Access / Soundcheck / Rehearsal

## Access
Typical artist access:
- around **19:00**

Current venue timing context:
- Wednesday / Thursday doors: around 20:00
- Friday / Saturday doors: around 20:30

Do not overcomplicate the public guide with all event start times unless useful.

## Rehearsal rule
Artists should not expect to access the venue at 15:00 or 16:00 for several hours of rehearsal.

Jazzkeller Frankfurt is **not available as an afternoon rehearsal space** before a concert.

Bands should arrive:
- prepared
- performance-ready

The available pre-show window is intended for:
- setup
- soundcheck
- short musical adjustments

Suggested wording:

> Jazzkeller Frankfurt is not available as an afternoon rehearsal space. Artist access normally begins around 7 PM. Please arrive performance-ready and use the available pre-show window for setup, soundcheck and short musical adjustments.

Do not describe this as "no separate rehearsal day"; the important point is **no early-afternoon rehearsal access on the concert day**.

---

# 11. Guestlist

Core principle:
- paying guests always have priority
- guestlist places are an exception, not a standard artist entitlement

## Weekend
- generally no guestlist
- individual exceptions may be possible if agreed in advance

## Jam Session
- no guestlist

## New York Jazz Bar / weekdays
- there may be more flexibility in individual cases
- exceptions must be agreed in advance

Do not publicly advertise specific exception examples such as drivers, family members or partners.

Suggested wording:

> Due to our limited capacity, paying guests always have priority. Guestlist places are therefore not standard and must be agreed in advance. Individual exceptions may be possible depending on the format and capacity.

---

# 12. Hospitality / Drinks

## Regular concert nights
For performing artists, the following may be available in a moderate and reasonable way:
- water
- soft drinks
- beer
- wine
- other simple alcoholic beverages

Do not describe this as unlimited drinking.

## Cocktails
Cocktails are generally **not included in artist hospitality**.

Reason:
- cocktails require significantly more preparation time
- during busy service periods the bar team must prioritize paying guests

Suggested wording:

> We’re happy to look after our musicians during the evening. Soft drinks, water, beer and wine are available for performing artists. Cocktails are generally excluded from artist hospitality during service, as they require considerably more preparation time and our bar team prioritizes our guests during busy periods.

## Jam Session
Jam Session uses the separate rule:
- 3 drink tickets per person

---

# 13. On Stage

Rules:
- water is welcome on stage
- alcoholic drinks should not be brought onto the stage
- never place any drinks on the piano

Suggested wording:

> Water is welcome on stage. Please keep alcoholic drinks off the stage, and never place any drinks on the piano.

Keep this short and practical.

---

# 14. Technical Basics

For the first public guide, include only the basic technical overview (Technical Basics, not the full Technical Rider). Keep it easy to scan, grouped into compact categories.

## Piano
- Seiler grand piano

## Amplification
- Markbass bass amplifier (exact model TBD)
- Fender ’65 Reverb guitar amplifier (exact model / product naming TBD)
- Roland Jazz Chorus guitar amplifier

## Drums
- Sonor drum set
- drummers bring their own cymbals

## PA & Monitoring
- d&b audiotechnik professional PA system (use this exact brand spelling; may be presented confidently)
- Allen & Heath Qu-16 digital mixer (exact product name; do not add further mixer specs)
- 1 stage monitor (exact manufacturer / model TBD)

## Microphones
- 4 × Shure SM58

## Not available / artist responsibility
- no keyboard stand available
- additional instruments, specialty backline or accessories not listed must be brought or arranged by the artist
- Jazzkeller Frankfurt does not rent additional instruments or specialty backline for individual performances

Suggested wording:

> Jazzkeller provides a basic professional club setup. Any additional instruments, specialty backline or accessories not listed in our technical equipment must be brought or arranged by the artist. Due to our budget structure, we do not rent additional instruments or backline for individual performances.

Do not add condenser-microphone warnings, exact monitor or Markbass models, or older technical inventory unless separately confirmed.

Possible later module:
- full Technical Rider

---

# 15. GEMA

Current operational rule:
- artists should **not independently register the event with GEMA**
- Jazzkeller Frankfurt handles organizer-side registration centrally
- further instructions are provided when needed

Reason:
- independent or premature registration can create duplicate or incorrect registration issues

Suggested wording:

> Please do not register the event independently with GEMA. Jazzkeller Frankfurt handles the organizer-side registration centrally and will provide further instructions if required.

Do not describe internal quarterly workflow or internal administrative timing in the public guide.

GEMA is not a top-level navigation item. Keep the information on the page as a smaller operational section after Invoicing. Do not invent a new GEMA workflow.

---

# 16. Invoicing & Payment

## Flow after the concert
Concert → final payout communicated → invoice submitted → payment

## Final payout
For bookings where the payout depends on paying attendance (e.g. The Weekend revenue share, or attendance-based fees such as New York Jazz Bar and Riviera Club):

> After the event, Jazzkeller Frankfurt provides the final payout amount so the artist knows exactly what to invoice.

For fixed per-person fees such as Jam Session, the fee is already known before the event. Do not overcomplicate this distinction.

This step appears before the invoice step.

## Invoice submission
Invoices must be submitted through:

**invoice.jazzkeller.com**

This should be prominently visible.

Do not use the old invoice email address from the previous guide.

## Payment method
- bank transfer only
- no cash payout
- no PayPal payout

## Bank account requirement
- the payout account must be **based in the European Union**
- it must provide an **IBAN suitable for EUR bank transfer**
- direct transfers to Swiss, US or other non-EU bank accounts are not supported
- SEPA membership alone is not the criterion (Switzerland is part of SEPA, but Swiss accounts are not supported)
- international artists may use services such as **Wise** as an optional practical solution

Wise is a recommendation, not a requirement. Phrase this as practical payment guidance, not tax advice.

Short label: `EU-based IBAN required`

Suggested wording:

> Payouts are made by bank transfer to an EU-based EUR account with an IBAN. Direct transfers to bank accounts outside the European Union, including Swiss and US accounts, are not supported. International artists commonly use services such as Wise to provide suitable EU banking details.

## Payment timing
- payment is usually made within **30 days after receipt of a proper invoice**

Use "within 30 days" unless later changed.

## Invoice quality
Invoices must contain the usual legally required invoice details, including where applicable:
- artist / business name and address
- Jazzkeller / customer details
- invoice date
- sequential invoice number
- performance date
- description of service
- correct net / tax / gross information where applicable
- correct tax exemption or small-business wording where applicable

A collective invoice is preferred where appropriate because it simplifies bookkeeping.

Presentation: show these details as a compact, scannable checklist (short rows), not a long text list or tag cloud. Short labels:
- Artist / business name & address
- Jazzkeller / customer details
- Invoice date
- Sequential invoice number
- Performance date
- Description of service
- Correct net / tax / gross information
- Correct exemption / small-business wording where applicable

Do not add Germany / EU / non-EU tax logic here and do not imply tax advice.

Do not turn the public Artist Guide into a full invoice manual.

Possible later module:
- separate Invoice Guide

---

# 17. International Artists

The public Artist Guide should only include a short note.

Suggested wording:

> Additional invoicing and tax guidance may apply to artists who are not registered in Germany. Please follow the invoicing instructions provided for your booking.

Important:
Do not invent or simplify tax advice in the public guide.

Internally known topic:
- there is a relevant €250-per-artist / performance threshold in the German withholding-tax context
- reimbursable travel expenses may be treated separately where legally valid and properly documented
- this requires a dedicated, carefully checked Invoice Guide

For the first Artist Guide:
- do not explain the full tax mechanics
- do not say that artists should artificially split invoices
- do not say that income above €250 should simply be re-labelled as travel expenses
- do not provide unverified tax instructions

---

# 18. What Is Not Included

Unless specifically agreed, the following are not automatically included:
- hotel accommodation
- taxi / private transfers
- restaurant meals
- catering
- rented instruments
- specialty backline

This should be communicated calmly and clearly.

Do not make the section sound hostile.

---

# 19. Contact

Public contact:
- **booking@jazzkeller.com**

Do not publish private mobile phone numbers in the public guide.

Additional operational contact information may later be included in individual booking confirmations.

## Closing message
Suggested wording:

> **You’re all set.**
> If anything in this guide is unclear, please get in touch before your performance.
> Once your booking is confirmed, you may be asked to complete the next booking step with your artist and production details.

The closing section may later host a booking acknowledgement action (e.g. "I’ve read the guide", "Confirm booking conditions", "Continue booking"). Do not build or imply that workflow until it exists — no storage, tracking, Tally integration or authentication yet.

---

# 20. Practical Information

For the first version, keep practical information minimal.

Do **not** include:
- specific parking-house recommendations
- promises about free parking
- informal advice about stopping in restricted areas
- private phone numbers

Possible later additions:
- nearest public transport stops
- venue address
- concise arrival details

Only add those after confirmation.

---

# 21. Future Content Structure

The Artist Guide should remain concise.

Information that should later become separate modules:

## Technical Rider
- exact amp and monitor models
- mixer
- full microphone list
- detailed PA specification
- piano details
- stage dimensions
- full equipment list

Known stage dimensions:
- approximately **4.38 m × 2.85 m**

## Invoice Guide
- Germany
- EU
- non-EU
- VAT / reverse charge
- withholding tax
- examples
- correct invoice wording

## Booking Confirmation
Should later repeat key operational details such as:
- date
- format
- artist access
- show time
- payout model
- invoice portal
- technical notes
- guestlist status
- contact on the day

Repetition in the confirmation is intentional because it prevents operational mistakes.

---

# 22. Content Hierarchy for the First Web App

Recommended order:

1. Hero — Playing at Jazzkeller Frankfurt
2. About Jazzkeller Frankfurt
3. Our Musical Profile
4. Choose Your Format
5. Payouts
6. Promotion & Audience
7. Concert Day / Soundcheck
8. Hospitality
9. Guestlist
10. Technical Basics
11. Invoicing & Payment
12. GEMA (operational note, not in the main navigation)
13. What Happens Next (not in the main navigation) / Contact

Main section navigation pills:
About · Profile · Formats · Payouts · Promotion · Concert day · Hospitality · Guestlist · Technical · Invoicing

## What Happens Next
- **01 Promotion** — Actively promote your appearance through your own channels.
- **02 Concert day** — Arrive around 19:00, performance-ready, for setup and soundcheck.
- **03 Final payout** — When your fee depends on paying attendance, we provide the final payout amount after the event so you know exactly what to invoice.
- **04 Submit invoice** — Submit your invoice via invoice.jazzkeller.com.
- **05 Payment** — Payment is usually made by bank transfer within 30 days after receipt of a proper invoice.

Dense sections should use accordions or expandable cards.

---

# 23. UI Content Rules for Cursor

When implementing this content:

- keep wording concise
- do not expand into long essays
- do not invent additional policies
- do not invent prices
- do not invent technical equipment
- do not invent legal/tax rules
- do not invent opening hours
- do not invent artist benefits
- do not invent guestlist allowances
- do not invent cancellation deadlines

If a UI component needs a value that is not provided here:
- omit it
- use a neutral placeholder
- or mark it `TBD`

The app should clearly separate:
- common rules
- format-specific rules
- technical information
- invoice information

---

# 24. Current Facts That Are Intentionally Not Yet Finalized

Keep these out of public copy unless later confirmed:

- Riviera exact individual dates, repertoire restrictions and production rules (the Summer Fee 2027 payout model is confirmed, see §8a)
- exact Markbass bass amp model
- exact Fender ’65 Reverb model / product naming
- exact stage monitor manufacturer / model
- exact show lengths / set lengths for every format
- exact cancellation notice period for NYJB / Jam
- exact international tax examples
- detailed parking information
- private day-of-show phone numbers

Do not guess them.

---

# 25. Final Product Principle

The guide should make artists understand three things quickly:

1. **What kind of club Jazzkeller Frankfurt is**
2. **What is expected from both artist and venue**
3. **What practical rules apply to their specific format**

The result should feel:
- modern
- friendly
- clear
- transparent
- confident
- mobile-first
- professional
- independent-club rather than institutional

The Artist Guide is the first module of JK Booking, not a one-off document.
