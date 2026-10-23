# poohpiggy.github.io

Personal website, published with GitHub Pages from the repository root.

- **Home:** https://poohpiggy.github.io/
- **WTUMC visual novel:** https://poohpiggy.github.io/wtumc/

The original Ren’Py web build and all its assets live in `wtumc/`. Open the game through HTTP(S), not a `file://` URL. Its original Import Saves / Export Saves menu is preserved.

The homepage uses plain HTML and CSS with no build step or third-party fonts. `service-worker.js` at the root only retires the game's former root-scoped worker; the game's worker lives under `wtumc/`.
