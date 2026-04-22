# Indominus Trail Series

> **Year:** 2016 · **Author:** Xavier Reyes Ochoa ([xaviro.com](http://xaviro.com))

A small promotional landing page built in **2016** for _Indominus Trail Series_,
the first kids' trail running championship in Ecuador. It pairs a classic
Bootstrap 3 layout with a playful **D3.js** particle effect that follows the
cursor and cycles the background hue as you move across the page.

This project is preserved as a portfolio artifact from that era. The original
architecture, content, and visual language are intentionally kept; only the
build tooling has been modernized so it can run locally and deploy cleanly
today.

## Features

- Fullscreen, single-page landing site (Spanish copy) with parallax-style
  photo sections.
- D3.js v3 interactive background: expanding HSL circles on `mousemove` /
  `touchmove`, with the page background cycling through the color wheel.
- Responsive layout with four breakpoints (1300 / 925 / 750 / 420 px) using
  SCSS media queries.
- Hand-drawn "Shadows Into Light Two" typography and custom frog motif.

## Tech stack

- **HTML5 / Bootstrap 3.3.6** (via CDN) for the base layout.
- **SCSS** compiled with `sass` for custom styling.
- **D3.js v3** (via CDN) for the interactive SVG particle effect.
- **http-server** for a zero-config local dev server.
- **Netlify** for static hosting.

## What this demonstrates

This is a snapshot of the author's skill set circa 2016, sitting between
early front-end work and full web development:

- Comfort composing a hand-rolled SCSS design system (palette, partials,
  responsive breakpoints) without relying on a component framework.
- Practical use of D3 beyond charts — treating it as a general-purpose
  DOM/SVG toolkit for creative interaction.
- Awareness of a build pipeline (originally gulp + bower + browserify)
  separating `src` from `dist`, lint, minification, and CDN rewriting.
- Attention to mobile: touch event handling and four responsive tiers
  when that was still the norm.

## Project structure

```
src/
  index.html         # markup
  js/app/app.js      # D3 particle effect + nav rendering
  scss/              # style.scss + _palette, _social partials
  img/               # photos, logo, frog motif, OG banner
netlify.toml         # Netlify build config
package.json         # sass build + http-server dev script
```

## Run locally

Requires Node.js 18+.

```bash
npm install
npm start
```

`npm start` compiles `src/scss/style.scss` to `src/css/style.css` and serves
`src/` on [http://localhost:4000](http://localhost:4000).

Other scripts:

- `npm run build` — one-shot SCSS compile.
- `npm run watch` — SCSS watch mode.
- `npm run dev` — build + serve without auto-opening a browser.

## Deploy to Netlify

The repository ships with a ready-to-use `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "src"
```

Options:

1. **Netlify UI** — "Add new site → Import from Git", pick this repo, accept
   the detected settings.
2. **Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   netlify deploy --build --prod
   ```

No environment variables or secrets are required.

## License

MIT © 2016 Xavier Reyes Ochoa