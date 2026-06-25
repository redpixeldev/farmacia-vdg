# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm preview      # Preview production build locally
```

**Deployment**: Cloudflare Pages via `npx wrangler deploy` (update project name in `wrangler.jsonc`)

## Architecture

Astro v5 static site with Tailwind CSS v4 and Alpine.js for client-side interactivity.

```
src/
├── components/     # Reusable Astro components (Header, Footer)
├── layouts/        # Page layouts (Layout.astro - base template)
├── pages/          # File-based routing
└── styles/
    ├── main.css    # Tailwind entry point, @theme vars, @utility definitions
    └── fonts.css   # Custom @font-face declarations
public/
├── fonts/          # Self-hosted web fonts
└── img/            # Static images
```

**Key patterns:**
- Layout.astro imports main.css and loads Alpine.js via CDN
- Tailwind v4 uses CSS-first config with `@theme`, `@utility`, and `@plugin` directives in main.css
- Custom utilities: `container`, `btn`, `btn-primary`
- Theme variables: `--font-heading`, `--font-body`, `--color-brand-primary`

## Code Style

- **Package manager**: pnpm
- **Formatting**: Prettier with astro and tailwindcss plugins
- **Indentation**: Tabs (2 spaces width)
- **Quotes**: Single quotes, single attribute per line
- **Line width**: 120 characters
- **TypeScript**: Strict mode, path aliases `@components/*`, `@layouts/*`

**Commit prefixes**: `fix:`, `feat:`, `style:`, `docs:`, `refactor:`

## Tailwind CSS v4

Uses the new CSS-based configuration:
- Plugins registered via `@plugin "@tailwindcss/typography"` in main.css
- Theme customization via `@theme { }` block
- Custom utilities via `@utility name { }` syntax
- PostCSS configured with `@tailwindcss/postcss`
