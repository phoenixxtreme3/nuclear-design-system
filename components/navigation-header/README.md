# Navigation Header

The app's top bar on the Home screen — greeting, location, LoveLocal Plus badge, coin balance and search, in two surface variants (`light` / `dark`).

Source of truth: Nuclear v2.0 (Figma), `Navigation` page, `Navigation/Top/Home/Without AI`.

## Files

- `navigation-header.html` — static demo, both variants
- `navigation-header.css` — component styles, built on `../../tokens.css`
- `README.md` — this file

## Usage

Include `tokens.css` once at the app level, then `navigation-header.css` per
component. Toggle `data-variant="light"` / `data-variant="dark"` on the
`.nav-header` root — markup is identical between variants; only the custom
properties resolve differently.

```html
<link rel="stylesheet" href="/tokens.css" />
<link rel="stylesheet" href="/components/navigation-header/navigation-header.css" />

<header class="nav-header" data-variant="light">
  <!-- see navigation-header.html for the full markup -->
</header>
```

## Accessibility

- The greeting is a real `<button>`, keyboard-operable, not a clickable `<div>`.
- Search uses `<form role="search">` with a visually-hidden `<label>`.
- `content-secondary` on `bg-surface-subtle` is 5.2:1; `content-on-color` on
  `bg-inverse` is 15.9:1 — both pass WCAG AA for body text.
- The search and voice-search icon buttons carry `aria-label`s since they
  have no visible text.

Full token specs and do/don't guidelines live in the Nuclear design-system
reference (linked from the top-level README).
