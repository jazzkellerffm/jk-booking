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
- privately operated
- not publicly funded
- approximately 60 seats
- intimate club setting
- the club operates differently from many publicly funded or nonprofit jazz venues

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

## Payout
Current rule:
- **€400 fixed artist fee**

Preferred concise wording: `€400 · fixed artist fee`

There is no guest-count tier. Do not invent additional payout conditions.

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

Not yet confirmed — do not invent:
- payout model
- exact repertoire restrictions
- exact dates
- exact production rules

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

---

# 16. Invoicing & Payment

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
11. GEMA
12. Invoicing & Payment
13. What Happens Next / Contact

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

- Riviera payout model, exact dates, repertoire restrictions and production rules
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
