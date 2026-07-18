# Site Key Patterns and Local Rules

Component-local rules and conventions for the `site` module.

- Keep pages static: Avoid introducing server-side runtimes or build-step-only artifacts inside this module. Evidence: repository contains only HTML/CSS/asset files.
- Asset placement: Put shared images under `images/` and page-specific assets in the page folder (e.g., `loadshedding/get_started128.png`). Evidence: `loadshedding/` and `images/`.
- Relative linking: Use relative links for internal navigation so the site can be served from the root or a subpath. Evidence: `loadshedding/index.html` uses `./` and `/` patterns.
- External resources: Pin or mirror critical external fonts/assets if offline availability or privacy is required. Evidence: external font and CDN usage in `index.html` and `loadshedding/index.html`.

Change impact notes
- Adding JS-heavy pages or a build pipeline will change the module shape and should be reflected in `manifest.yml` and `_shared/patterns-checklist.md`.

