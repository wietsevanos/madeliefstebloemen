# AGENTS.md

## Rules

- Add every new colour as a semantic token in `src/index.css` and register it in `tailwind.config.ts`; never hardcode colour utilities in components. Why: component-level colour classes bypass theming and break dark mode.
