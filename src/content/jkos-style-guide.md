# JKOS Style Guide

Compact visual reference for JKOS apps and internal tools.

---

## Core principle

JKOS should feel calm, clear, premium and practical.

- mobile-first
- simple before clever
- fast to understand
- few strong components instead of many special cases
- consistent across JKOS apps

---

## Colors

### Core

- Deep Green: `#28463F`
- Warm Off-White / Creme: `#F3E9D2`

Use Deep Green for strong brand surfaces, navigation and primary actions.
Use Creme for soft backgrounds, cards and warm contrast.

### Supporting UI

Prefer muted neutral tones derived from the core palette.
Avoid bright SaaS blues, harsh pure white and unnecessary gradients.

---

## Typography

JKOS typography should feel editorial, modern and restrained.

Preferred brand fonts where available:

- PolySans — UI, navigation, labels, body
- Gustavo — expressive headings / editorial moments

Fallbacks should stay clean and sans-serif.

Keep hierarchy obvious:

- strong page title
- clear section heading
- compact body copy
- small muted metadata

Avoid oversized dashboard typography unless it serves a clear purpose.

---

## Spacing

Use generous whitespace but keep screens efficient.

Prefer a simple spacing rhythm such as:

`4 / 8 / 12 / 16 / 24 / 32 / 48`

Related information should sit close together.
Different sections should have visibly more separation.

---

## Corners

Use soft rounded corners consistently.

Recommended:

- small controls: `10–12px`
- cards: `16–20px`
- pills: fully rounded

Avoid mixing many different radius styles.

---

## Buttons & pills

Primary actions:

- filled Deep Green
- warm/light text
- rounded
- compact but comfortable

Secondary actions:

- soft neutral or outline treatment
- visually quieter than primary actions

Pills are useful for:

- status
- filters
- formats / categories
- compact metadata

Do not turn every label into a pill.

---

## Cards

Cards should group information, not decorate it.

Use:

- clear title
- concise supporting information
- one obvious action or state
- subtle border or tonal separation

Avoid heavy shadows and excessive nesting.

---

## Icons

Use Lucide icons where icons are needed.

Rules:

- one consistent icon family
- simple stroke icons
- icons support labels, they do not replace clarity
- avoid decorative icon overload

---

## Motion

Motion should be subtle and functional.

Use small transitions for:

- hover
- open / close
- state changes
- navigation feedback

Avoid large animated effects, bouncing UI or unnecessary page motion.

---

## Hero / page entry

A JKOS page should immediately answer:

1. Where am I?
2. What is this for?
3. What can I do next?

Keep hero areas compact in internal tools.
Public-facing pages may be more atmospheric, but should remain readable and direct.

---

## Mobile-first

Design the narrow/mobile layout first.

Important actions must remain easy to reach and understand on a phone.
Desktop should expand the layout, not fundamentally change the interaction model.

---

## JKOS patterns

Prefer:

- JSON-first content/data structures
- reusable components
- clear status language
- compact forms
- progressive disclosure
- one obvious primary action per view
- visually calm admin interfaces

---

## Avoid

- generic SaaS dashboard look
- too many colors
- heavy gradients
- giant shadows
- glassmorphism for its own sake
- dense tables when cards or grouped rows work better
- excessive borders
- too many font sizes
- inconsistent buttons
- unnecessary one-off components

---

## Reference feel

JKOS apps should belong to the same family as the existing JKOS / Gold Pass visual language:

**Deep Green + warm Creme + strong typography + rounded, restrained UI.**

The exact implementation can vary by app, but the relationship should always be recognizable.

---

## Rule for Cursor / implementation

Before introducing a new visual pattern, first check whether an existing JKOS component or pattern can solve the same problem.

Consistency is more important than novelty.
