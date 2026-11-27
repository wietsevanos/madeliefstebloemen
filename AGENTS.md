# AGENTS.md

## Rules

- Add every new colour as a semantic token in `src/index.css` and register it in `tailwind.config.ts`; never hardcode colour utilities in components. Why: component-level colour classes bypass theming and break dark mode.
- Text inside grid or flex tracks needs `min-w-0` plus `break-words` on the heading. Why: long Dutch compound words set the automatic minimum size of the track, so a wide Playfair heading overflows the card and gets clipped on phones.
- Keep a two-line heading as an inline block span (`md:block`) rather than a `hidden md:block` `<br>`. Why: a display:none `<br>` swallows the whitespace between the words on small screens and the words run into each other.
- Botanical decorations come from `src/components/Botanical.tsx` (Daisy, DaisyStem, Sprig, DaisyDivider) as inline SVG in token colours. Why: one consistent line-art style, bundled locally for DirectAdmin.
- Scroll-in animation: add class `reveal` and call `useReveal()` on the page; reduced-motion is handled in `index.css`. Why: no animation dependency.
