# Integrations and External Resources

This file lists externally-hosted resources the site depends on (CDNs, fonts, external APIs) with evidence links.

- **Google Fonts (Inter, Lora)** — referenced in `index.html` and `loadshedding/index.html` via `fonts.googleapis.com`.
  Evidence: [index.html](index.html), [loadshedding/index.html](loadshedding/index.html)
- **FontAwesome CDN** — referenced in `loadshedding/index.html`.
  Evidence: [loadshedding/index.html](loadshedding/index.html)
- **External badge and image hosts** — `README.md` references multiple external images and badges (GitHub profile trophy, streak stats).
  Evidence: [README.md](README.md)

Notes
- Because these resources are loaded from external CDNs, availability or privacy/performance considerations may affect the site. If the site must be fully offline-capable, mirror critical assets under `images/` and update references.

