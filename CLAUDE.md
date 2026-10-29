# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Luís Renato Toniati (https://www.luisrenatodev.com), built with Next.js 14 (App Router), TypeScript, Tailwind CSS and `next-intl` (PT/EN). Dark-only design: lime accent `#B6F23E`, Geist / Geist Mono fonts.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build (also type-checks)
npm run lint    # next lint (eslint-config-next)
```

There is no test suite.

## Architecture

- **Locale routing**: every page lives under `src/app/[locale]/`. Supported locales are `en` and `pt` (default `en`), declared in **both** [src/middleware.ts](src/middleware.ts) (routing + matcher `/(pt|en)/:path*`) and [src/i18n.ts](src/i18n.ts) (message loading). Adding a locale means updating both files, the matcher, and adding `messages/<locale>.json`. The language switch in `Header.tsx` links to `/pt` and `/en`.
- **Translations**: all prose comes from [messages/pt.json](messages/pt.json) and [messages/en.json](messages/en.json) (namespaces `Nav`, `Hero`, `Stack`, `Experience`, `Projects`, `Education`, `Contact`); keep both files' keys in sync. Non-translated data (tech tags, links, images, certificate files) lives in arrays at the top of each component, keyed to the JSON entries — adding a project/job/cert means adding to the array **and** to both JSON files.
- **Page composition**: [src/app/[locale]/page.tsx](src/app/[locale]/page.tsx) stacks `Header → Hero → Stack → Experience → Projects → Education → Contact → Footer` from `src/app/[locale]/components/`. Header anchors target the Portuguese section ids (`#experiencia`, `#projetos`, `#formacao`, `#contato`) in both locales. Shared bits (tags, section labels/titles, arrow icon) are in `components/ui.tsx`.
- **Styling**: design tokens (`ink`, `surface`, `line`, `edge`, `fg`, `soft`, `muted`, `accent`, …) and font families are defined in [tailwind.config.ts](tailwind.config.ts); use them instead of raw hex values. Fonts load via a Google Fonts `<link>` in [layout.tsx](src/app/[locale]/layout.tsx) (the installed Next version's `next/font` has no Geist). `src/app/[locale]/globals.css` is the stylesheet in use; `src/app/globals.css` is unused.
- **Assets**: images in `public/` are imported statically into components and rendered with `next/image`; certificates open in an in-page `<dialog>` (`CertificateModal.tsx`); `Curriculo2026.pdf` is linked by URL.
- **Career data**: the current job is Infoluck Sistemas (since May 2026, `Experience.infoluckCurrent`); Build Solutions is a past job (Jun 2024 – Mar 2026). The hero "Currently" badge reads `Hero.currentRole` — keep it in sync with the experience list.
- `next-themes` and `framer-motion` are still dependencies but no longer used.
