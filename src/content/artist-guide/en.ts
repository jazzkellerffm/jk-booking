import type { ArtistGuideContent } from "@/content/artist-guide/types";

/**
 * Source of truth: src/content/artist-guide-source.md
 * Do not add operational details that are not stated there — use `tbd`.
 */
export const artistGuideEn: ArtistGuideContent = {
  locale: "en",

  meta: {
    title: "Playing at Jazzkeller Frankfurt · JK Booking",
    description:
      "A practical guide for artists performing at Jazzkeller Frankfurt — formats, payouts, concert day, hospitality, technical basics and invoicing.",
  },

  hero: {
    eyebrow: "Artist Guide",
    title: "Playing at Jazzkeller Frankfurt",
    subtitle: "The practical guide for artists performing at our club.",
    media: { type: "ambient" },
    primaryAction: { label: "Explore the guide", href: "#about" },
    secondaryAction: { label: "Booking essentials", href: "#essentials" },
  },

  quickFactsTitle: "Booking essentials",
  quickFacts: [
    { icon: "seats", label: "Venue", value: "Intimate club, around 60 seats" },
    { icon: "arrival", label: "Artist access", value: "Around 19:00" },
    { icon: "invoice", label: "Invoices", value: "Via invoice.jazzkeller.com" },
    { icon: "transfer", label: "Payment", value: "Bank transfer, usually within 30 days" },
  ],

  formats: [
    {
      id: "weekend",
      name: "The Weekend",
      schedule: "Friday · Saturday",
      icon: "moon",
      tagline: "Artist-led concert nights",
      summary:
        "Our most artist-led concert format. Artists may present a broader concert programme than on New York Jazz Bar nights, while still fitting the general Jazzkeller musical identity.",
      keyFigure: { value: "60%", label: "of applicable net ticket revenue" },
      points: [
        "Artists receive **60% of the applicable net ticket revenue**.",
        "If the calculation creates an uneven amount, rounding is always **in favour of the artists** — never rounded down against them.",
        "Sunday dates follow The Weekend booking and payout logic unless individually agreed otherwise.",
      ],
      notices: [
        {
          tone: "neutral",
          title: "Sold-out nights",
          text: "If the venue is fully sold out, Jazzkeller Frankfurt may retain additional spontaneous walk-in revenue to help cover club operating costs. This applies only to additional sales after regular capacity has been reached.",
        },
      ],
    },
    {
      id: "nyjb",
      name: "New York Jazz Bar",
      icon: "music",
      tagline: "Curated, repertoire-based nights",
      summary:
        "A curated, format-first evening built around accessible jazz repertoire in a New York club style — not a free artist showcase.",
      keyFigure: { value: "€400", label: "fixed artist fee" },
      points: [
        "Payout: **€400 fixed artist fee**.",
        "No more than **two original compositions per evening**, fitting naturally into the overall repertoire and atmosphere.",
      ],
      goodFit: [
        "Jazz Standards",
        "Jazz Classics",
        "Swing",
        "Bebop",
        "Hardbop",
        "Straight-Ahead Jazz",
        "Soul Jazz",
        "Organ Jazz, where appropriate",
        "Latin Jazz",
        "Salsa-influenced / Latin-oriented evenings",
        "Accessible New York club-style repertoire",
      ],
      notFor: [
        "Album-release concerts",
        "CD-release programmes",
        "Programmes dominated by original compositions",
        "Experimental projects",
        "Avant-garde programmes",
        "Highly conceptual original-music projects",
      ],
      notices: [
        {
          tone: "info",
          title: "Low advance demand",
          text: "If advance demand is exceptionally low, Jazzkeller Frankfurt may cancel the event with reasonable notice. In this case, no artist fee or compensation is payable.",
        },
      ],
    },
    {
      id: "jam",
      name: "Jam Session",
      icon: "session",
      tagline: "Straight-ahead session nights",
      summary:
        "The Jam Session follows the general musical identity of Jazzkeller Frankfurt.",
      keyFigure: { value: "€75", label: "per person · max. 4 persons · from 2027" },
      points: [
        "Payout from 2027: **€75 per person, maximum 4 persons**.",
        "**3 drink tickets** per performing musician.",
        "No guestlist.",
      ],
      goodFit: [
        "Swing",
        "Bebop",
        "Hardbop",
        "New York-style jazz",
        "Jazz standards",
        "Latin jazz",
      ],
      notFor: [
        "Avant-garde platform",
        "Experimental platform",
        "Abstract contemporary showcase",
      ],
      notices: [
        {
          tone: "info",
          text: "In rare cases, if advance demand is exceptionally low, Jazzkeller Frankfurt reserves the right to cancel a Jam Session date with reasonable notice.",
        },
      ],
    },
    {
      id: "riviera",
      name: "Riviera",
      schedule: "Summer season",
      icon: "riviera",
      tagline: "Seasonal summer nights",
      summary:
        "A seasonal summer format with a relaxed, stylish atmosphere while remaining rooted in the Jazzkeller musical identity.",
      points: ["A lighter, more relaxed summer atmosphere."],
    },
  ],

  sections: [
    {
      id: "about",
      navLabel: "About",
      eyebrow: "Welcome",
      title: "About Jazzkeller Frankfurt",
      icon: "building",
      lead: "Jazzkeller Frankfurt is an independent, privately run jazz club with its own operating model.",
      blocks: [
        {
          type: "facts",
          items: [
            { icon: "building", label: "Privately run", value: "Independent club" },
            { icon: "ban", label: "Funding", value: "Not publicly funded" },
            { icon: "seats", label: "Intimate room", value: "Around 60 seats" },
          ],
        },
        {
          type: "paragraph",
          text: "Because we are not publicly funded, our production and hospitality structure differs from many institutional or nonprofit venues.",
        },
        {
          type: "list",
          title: "Not automatically included unless specifically agreed",
          style: "dot",
          items: [
            "Hotel accommodation",
            "Taxi or private transfers",
            "Restaurant meals or catering",
            "Rented instruments or specialty backline",
            "Institutional-style fixed-fee conditions",
          ],
        },
      ],
    },
    {
      id: "profile",
      navLabel: "Profile",
      eyebrow: "Our sound",
      title: "Our Musical Profile",
      icon: "music",
      lead: "Our programme centres on club-oriented, communicative and performance-driven jazz — accessible without becoming generic, and made for an intimate room.",
      blocks: [
        {
          type: "tags",
          title: "At home here",
          items: [
            "Swing",
            "Bebop",
            "Hardbop",
            "Straight-Ahead Jazz",
            "Mainstream Jazz",
            "Soul Jazz",
            "Organ Jazz",
            "Latin Jazz",
            "Jazz Standards",
            "Jazz Classics",
            "Blues",
            "Groove-oriented Jazz",
          ],
        },
        {
          type: "list",
          title: "What we value",
          style: "check",
          items: [
            "Musical communication",
            "Audience connection",
            "Entertainment",
            "Groove",
            "Repertoire that works in an intimate jazz club",
          ],
        },
        {
          type: "paragraph",
          text: "Fresh ideas are welcome if they fit the character of the club.",
        },
        {
          type: "list",
          title: "Generally not a fit",
          style: "cross",
          items: [
            "Strongly experimental music",
            "Avant-garde concepts",
            "Highly abstract contemporary sound concepts",
            "Long-form meditative sound-art approaches",
            "Programmes dominated by experimentation",
            "Highly conceptual projects that don't work naturally in an intimate club",
          ],
        },
        {
          type: "notice",
          tone: "neutral",
          text: "This musical identity applies across the club, including Jam Session, New York Jazz Bar and Riviera.",
        },
      ],
    },
    {
      id: "formats",
      navLabel: "Formats",
      eyebrow: "Choose your format",
      title: "Our Formats",
      icon: "formats",
      lead: "Four formats, each with its own character. Pick one to see how it works.",
      variant: "formats",
      blocks: [],
    },
    {
      id: "payouts",
      navLabel: "Payouts",
      eyebrow: "Fair & transparent",
      title: "Payouts",
      icon: "payout",
      lead: "The confirmed payout models at a glance.",
      blocks: [
        {
          type: "stats",
          items: [
            {
              value: "60%",
              label: "The Weekend",
              caption: "of applicable net ticket revenue",
            },
            {
              value: "€400",
              label: "New York Jazz Bar",
              caption: "fixed artist fee",
            },
            {
              value: "€75",
              label: "Jam Session",
              caption: "per person · max. 4 · from 2027",
            },
          ],
        },
        {
          type: "payoutPreview",
          eyebrow: "The Weekend",
          title: "Weekend payout examples",
          text: "Illustrative examples based on ticket price and attendance.",
          note: "Based on 60% of applicable net online ticket revenue. Example payouts are rounded up to the next €5 in favour of the artists and are not fixed guarantees.",
          scenarioLabel: "Ticket price",
          ticketPrices: [28, 30, 32, 35, 38, 40],
          guestCounts: [10, 20, 30, 40, 50, 60],
          model: { vatRate: 0.07, artistShare: 0.6, roundUpTo: 5 },
        },
        {
          type: "accordion",
          items: [
            {
              id: "payout-weekend",
              title: "The Weekend",
              icon: "moon",
              summary: "60% of applicable net ticket revenue",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: [
                    "Artists receive **60% of the applicable net ticket revenue**.",
                    "If the calculation creates an uneven amount, rounding is always **in favour of the artists**. The amount is never rounded down against the artists.",
                  ],
                },
                {
                  type: "notice",
                  tone: "neutral",
                  title: "Sold-out nights",
                  text: "If the venue is fully sold out, Jazzkeller Frankfurt may retain additional spontaneous walk-in revenue to help cover club operating costs. This applies only to additional sales after regular capacity has been reached.",
                },
                {
                  type: "paragraph",
                  text: "Sunday dates follow The Weekend booking and payout logic unless individually agreed otherwise.",
                },
              ],
            },
            {
              id: "payout-nyjb",
              title: "New York Jazz Bar",
              icon: "music",
              summary: "€400 fixed artist fee",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: ["**€400** fixed artist fee."],
                },
              ],
            },
            {
              id: "payout-jam",
              title: "Jam Session",
              icon: "session",
              summary: "€75 per person, max. 4 · from 2027",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: ["From 2027: **€75 per person, maximum 4 persons**."],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "promotion",
      navLabel: "Promotion",
      eyebrow: "Together",
      title: "Promotion & Audience",
      icon: "megaphone",
      lead: "A booking at Jazzkeller Frankfurt does not automatically guarantee a full house.",
      blocks: [
        {
          type: "paragraph",
          text: "We expect artists to actively promote their own appearance using the channels available to them — for example Instagram, mailing list, website, social media, local network or other channels with relevant reach.",
        },
        {
          type: "notice",
          tone: "positive",
          icon: "audience",
          title: "A shared effort",
          text: "A full house is a shared effort. Jazzkeller Frankfurt promotes its programme, and we also expect artists to actively communicate their appearance through their own channels.",
        },
      ],
    },
    {
      id: "concert-day",
      navLabel: "Concert day",
      eyebrow: "On the night",
      title: "Concert Day, Arrival & Soundcheck",
      icon: "clock",
      lead: "Please arrive prepared and performance-ready.",
      blocks: [
        {
          type: "steps",
          items: [
            {
              marker: "~19:00",
              title: "Artist access",
              text: "Artist access normally begins around 19:00.",
            },
            {
              marker: "Setup",
              title: "Setup & soundcheck",
              text: "Use the available pre-show window for setup, soundcheck and short musical adjustments.",
            },
            {
              marker: "Doors",
              title: "Doors",
              text: "Around 20:00 on Wednesdays and Thursdays, around 20:30 on Fridays and Saturdays.",
            },
          ],
        },
        {
          type: "notice",
          tone: "important",
          title: "No afternoon rehearsals",
          text: "Jazzkeller Frankfurt is not available as an afternoon rehearsal space. Please don't plan on accessing the venue at 15:00 or 16:00 for several hours of rehearsal.",
        },
      ],
    },
    {
      id: "hospitality",
      navLabel: "Hospitality",
      eyebrow: "Be our guest",
      title: "Hospitality",
      icon: "hospitality",
      lead: "We're happy to look after our musicians during the evening.",
      blocks: [
        {
          type: "accordion",
          items: [
            {
              id: "hospitality-concert",
              title: "Regular concert nights",
              icon: "drinks",
              summary: "Water, soft drinks, beer and wine",
              blocks: [
                {
                  type: "paragraph",
                  text: "Water, soft drinks, beer, wine and other simple alcoholic beverages are available for performing artists, in a moderate and reasonable way.",
                },
                {
                  type: "paragraph",
                  text: "Cocktails are generally excluded from artist hospitality during service, as they require considerably more preparation time and our bar team prioritises our guests during busy periods.",
                },
              ],
            },
            {
              id: "hospitality-jam",
              title: "Jam Session",
              icon: "ticket",
              summary: "3 drink tickets per person",
              blocks: [
                {
                  type: "paragraph",
                  text: "Each performing musician receives **3 drink tickets**.",
                },
              ],
            },
            {
              id: "hospitality-stage",
              title: "On stage",
              icon: "stage",
              summary: "Water welcome · no drinks on the piano",
              blocks: [
                {
                  type: "list",
                  style: "dot",
                  items: [
                    "Water is welcome on stage.",
                    "Please keep alcoholic drinks off the stage.",
                    "**Never place any drinks on the piano.**",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "guestlist",
      navLabel: "Guestlist",
      eyebrow: "Guests",
      title: "Guestlist",
      icon: "guestlist",
      lead: "Due to our limited capacity, paying guests always have priority. Guestlist places are not standard and must be agreed in advance.",
      blocks: [
        {
          type: "facts",
          items: [
            { icon: "moon", label: "The Weekend", value: "Generally no guestlist" },
            {
              icon: "music",
              label: "New York Jazz Bar / weekdays",
              value: "More flexibility in individual cases",
            },
            { icon: "session", label: "Jam Session", value: "No guestlist" },
          ],
        },
        {
          type: "notice",
          tone: "info",
          text: "Individual exceptions may be possible depending on the format and capacity, and must be agreed in advance.",
        },
      ],
    },
    {
      id: "technical",
      navLabel: "Technical",
      eyebrow: "Backline",
      title: "Technical Basics",
      icon: "technical",
      lead: "Jazzkeller provides a basic professional club setup.",
      blocks: [
        {
          type: "facts",
          title: "Piano & drums",
          items: [
            { icon: "piano", label: "Piano", value: "Seiler grand piano" },
            { icon: "drum", label: "Drums", value: "Sonor drum set" },
          ],
        },
        {
          type: "facts",
          title: "Amplification",
          items: [
            { icon: "bass", label: "Bass", value: "Markbass bass amplifier" },
            { icon: "guitar", label: "Guitar", value: "Fender ’65 Reverb guitar amplifier" },
            { icon: "guitar", label: "Guitar", value: "Roland Jazz Chorus guitar amplifier" },
          ],
        },
        {
          type: "facts",
          title: "PA, monitoring & microphones",
          items: [
            { icon: "pa", label: "PA", value: "d&b audiotechnik professional PA system" },
            { icon: "monitor", label: "Monitoring", value: "1 stage monitor" },
            { icon: "microphone", label: "Microphones", value: "4 × Shure SM58" },
          ],
        },
        {
          type: "facts",
          title: "Bring your own / not available",
          items: [
            { icon: "cymbal", label: "Cymbals", value: "Drummers bring their own" },
            { icon: "ban", label: "Keyboard stand", value: "Not available" },
            {
              icon: "package",
              label: "Anything not listed",
              value: "Additional instruments, specialty backline or accessories must be brought or arranged by the artist",
            },
          ],
        },
        {
          type: "notice",
          tone: "neutral",
          title: "No rentals",
          text: "Due to our budget structure, we do not rent additional instruments or backline for individual performances.",
        },
      ],
    },
    {
      id: "gema",
      navLabel: "GEMA",
      eyebrow: "Registration",
      title: "GEMA",
      icon: "gema",
      blocks: [
        {
          type: "notice",
          tone: "important",
          text: "Please do not register the event independently with GEMA. Jazzkeller Frankfurt handles the organiser-side registration centrally and will provide further instructions if required.",
        },
        {
          type: "paragraph",
          text: "Independent or premature registration can lead to duplicate or incorrect registrations.",
        },
      ],
    },
    {
      id: "invoicing",
      navLabel: "Invoicing",
      eyebrow: "Getting paid",
      title: "Invoicing & Payment",
      icon: "invoice",
      lead: "Invoices are submitted through invoice.jazzkeller.com. Payment is usually made within 30 days after receipt of a proper invoice.",
      blocks: [
        {
          type: "action",
          label: "invoice.jazzkeller.com",
          href: "https://invoice.jazzkeller.com",
          description: "Submit your invoice here",
          icon: "invoice",
        },
        {
          type: "accordion",
          items: [
            {
              id: "invoicing-payment",
              title: "Payment",
              icon: "transfer",
              summary: "Bank transfer · usually within 30 days",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: [
                    "Payment is usually made within **30 days** after receipt of a proper invoice.",
                    "Payment by **bank transfer only**.",
                  ],
                },
                {
                  type: "list",
                  style: "cross",
                  items: ["No cash payout", "No PayPal payout"],
                },
              ],
            },
            {
              id: "invoicing-bank",
              title: "Bank account",
              icon: "payout",
              summary: "EU-based IBAN required",
              blocks: [
                {
                  type: "paragraph",
                  text: "Payouts are made by bank transfer to an **EU-based EUR account with an IBAN**. Direct transfers to bank accounts outside the European Union, including Swiss and US accounts, are not supported.",
                },
                {
                  type: "notice",
                  tone: "info",
                  title: "International artists",
                  text: "International artists commonly use services such as Wise to provide suitable EU banking details.",
                },
              ],
            },
            {
              id: "invoicing-details",
              title: "Invoice details",
              icon: "invoice",
              summary: "Usual legally required details",
              blocks: [
                {
                  type: "list",
                  title: "Including, where applicable",
                  style: "dot",
                  items: [
                    "Artist / business name and address",
                    "Jazzkeller / customer details",
                    "Invoice date",
                    "Sequential invoice number",
                    "Performance date",
                    "Description of service",
                    "Correct net / tax / gross information",
                    "Correct tax exemption or small-business wording",
                  ],
                },
                {
                  type: "paragraph",
                  text: "Where appropriate, a **collective invoice** is preferred because it simplifies bookkeeping.",
                },
              ],
            },
            {
              id: "invoicing-international",
              title: "International artists",
              icon: "info",
              summary: "Additional guidance may apply",
              blocks: [
                {
                  type: "paragraph",
                  text: "Additional invoicing and tax guidance may apply to artists who are not registered in Germany. Please follow the invoicing instructions provided for your booking.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "next",
      navLabel: "Next steps",
      eyebrow: "What happens next",
      title: "What Happens Next",
      icon: "next",
      blocks: [
        {
          type: "steps",
          items: [
            {
              marker: "01",
              title: "Promotion",
              text: "Actively promote your appearance through your own channels.",
            },
            {
              marker: "02",
              title: "Concert day",
              text: "Arrive around 19:00, performance-ready, for setup and soundcheck.",
            },
            {
              marker: "03",
              title: "Invoice & payment",
              text: "Submit your invoice via [invoice.jazzkeller.com](https://invoice.jazzkeller.com). Payment by bank transfer to an EU-based IBAN, usually within 30 days.",
            },
          ],
        },
      ],
    },
  ],

  closing: {
    eyebrow: "Before your performance",
    title: "You’re all set.",
    text: "If anything in this guide is unclear, please get in touch before your performance.",
    note: "Once your booking is confirmed, you may be asked to complete the next booking step with your artist and production details.",
    contactLabel: "Email booking",
    contactSubject: "Artist Guide — question",
  },

  tbd: [
    {
      field: "formats.nyjb.schedule",
      note: "Weekday for New York Jazz Bar is not stated in the source.",
    },
    {
      field: "formats.jam.schedule",
      note: "Weekday for Jam Session is not stated in the source.",
    },
    {
      field: "formats.riviera",
      note: "Riviera payout model, dates, repertoire restrictions and production rules are not confirmed (source §8a).",
    },
    {
      field: "sections.technical.bass",
      note: "Exact Markbass bass amplifier model (source §14).",
    },
    {
      field: "sections.technical.guitar",
      note: "Exact Fender ’65 Reverb model / product naming (source §14).",
    },
    {
      field: "sections.technical.monitor",
      note: "Stage monitor manufacturer / model (source §14).",
    },
    {
      field: "closing.nextAction",
      note: "Booking acknowledgement action (e.g. “I’ve read the guide”) — reserved until the workflow exists.",
    },
    {
      field: "formats.nyjb|jam.cancellationNotice",
      note: "Exact cancellation notice period is not finalized (source §24).",
    },
    {
      field: "sections.next.bookingConfirmation",
      note: "Booking confirmation step (what is confirmed, how and when) is a planned module, not yet described (source §21).",
    },
  ],
};
