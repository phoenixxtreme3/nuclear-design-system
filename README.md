# Nuclear

Design tokens and components for the LoveLocal B2C app, synced from the
**Nuclear v2.0** Figma file. This repo is the source of truth for code; the
Figma file is the source of truth for design — see Governance below.

This first release covers base tokens (`tokens.css`) and one component,
**Navigation Header** (`components/navigation-header/`).

## Structure

```
tokens.css                          generated design tokens (colors, type, spacing)
components/
  navigation-header/
    navigation-header.html          static demo, light + dark variants
    navigation-header.css           component styles
    README.md                       anatomy, usage, accessibility
```

No build step — everything here is plain HTML/CSS you can open directly or
link into any stack.

## Governance

- **Source of truth**: Figma is upstream. Token and component changes start
  in the Nuclear v2.0 Figma file, get reviewed there by design, and only
  then get re-synced into this repo. Don't hand-edit `tokens.css` and
  expect it to stick — the next sync will overwrite it (edit `tokens.css`'s
  values only as part of a sync from Figma, never standalone).
- **Versioning**: semver. Patch = token/doc corrections with no visible
  change. Minor = new tokens/components/variants, additive only. Major =
  renamed/removed tokens or breaking component changes.
- **Contributing**: propose the change in Figma first, get design sign-off,
  then open a PR here that updates source and docs together. `@design-systems`
  is a required reviewer; a token change also needs design sign-off.
- **Deprecation**: a token/component is marked deprecated one minor version
  before removal, with its replacement noted, and removed only at the next
  major version.

## Related

The full browsable reference (token tables with usage notes, the component's
anatomy/specs/do-and-don't guidelines, and this governance section written
for a developer audience) lives in the companion design-system doc. Ask in
this repo's issues if you need the link.
