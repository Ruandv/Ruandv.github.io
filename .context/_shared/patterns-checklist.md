# Patterns Checklist (shared)

This checklist captures repository-level patterns and guardrails, with evidence links. Only items with direct evidence are recorded.

- **Static site**: The repository contains static HTML/CSS/asset files and no server-side code or build output. Evidence: [index.html](index.html), [loadshedding/index.html](loadshedding/index.html).
- **Repository name indicates GitHub Pages**: The package `name` is `ruandv.github.io`, which typically maps to a GitHub Pages user site. Evidence: [package.json](package.json).
- **Assets directory**: Images and asset folders are under `images/` and module subfolders (e.g., `loadshedding/`, `QuantumTab/`). Evidence: repo tree under project root.
- **External fonts & assets**: Pages reference external CDNs (Google Fonts, FontAwesome). Evidence: [index.html](index.html), [loadshedding/index.html](loadshedding/index.html).
- **No deploy scripts detected**: `package.json` contains only a `release` script (`standard-version`). No GitHub Actions or `deploy` scripts found. Evidence: [package.json](package.json).

TODOs/Gaps:
- CI/CD / Deployment: No pipeline or deployment manifest located. If this repo uses GitHub Pages, add a `ci/` or `docs/` pointer or mark `last-verified` after confirming.
- Ownership: Add `ownership.md` if multiple maintainers exist.

