# Reborn Racing 🏎️💨

[![Site](https://img.shields.io/badge/website-rebornracing.com-e8002d?style=flat-square)](https://rebornracing.com)
[![Discord](https://img.shields.io/badge/Discord-Join%20Community-5865F2?style=flat-square&logo=discord&logoColor=white)](https://rebornracing.com/discord)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro%20v6-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)

This repository contains the source code, assets, and automated GitHub Pages hosting for the official **[Reborn Racing](https://rebornracing.com)** website.

Reborn Racing is a competitive, community-focused sim racing league hosted on PC via **Assetto Corsa**.

---

## 🌐 Quick Links

- **Official Website**: [rebornracing.com](https://rebornracing.com)
- **Discord Community**: [rebornracing.com/discord](https://rebornracing.com/discord)
- **Assetto Corsa Server**: [ac.rebornracing.com](https://ac.rebornracing.com)
- **Driver Manual**: [rebornracing.com/manual](https://rebornracing.com/manual)

---

## 🏁 Site Features & Architecture

- **Championship Portal**: Displays Season 5 details, including the Formula RSS 4 car specification, fixed setup regulations, race format, and the 10-circuit calendar.
- **Live AC Server Monitor**: Dynamic client-side health checks polling `ac.rebornracing.com` every 5 minutes with real-time status indication.
- **Driver Documentation**: Embedded technical guides, including the Formula RSS 4 Driver & Tyre Manual (HTML and PDF formats).
- **Fast Static Delivery**: Built with Astro 6 static site generation for minimal bundle size and immediate load times.
- **Vanity Routing**: Integrated redirects (e.g. `/discord`) configured at the framework level.

---

## 📁 Repository Overview

```text
rebornracing/
├── .github/workflows/
│   └── deploy.yml          # Automated CI/CD build & deploy to GitHub Pages
├── public/
│   ├── CNAME               # Custom domain config (rebornracing.com)
│   ├── manual/             # Formula RSS 4 Driver Manual web portal
│   └── *.pdf               # Downloadable driver & tyre manuals
├── src/
│   ├── assets/             # Brand logos, car imagery, and SVG artwork
│   ├── components/
│   │   └── ServerStatus.astro # Real-time Assetto Corsa server status component
│   ├── layouts/
│   │   └── Layout.astro    # Global HTML structure, typography, and theme tokens
│   └── pages/
│       └── index.astro     # Main landing page
└── astro.config.mjs        # Astro configuration & route redirects
```

---

© Reborn Racing. All rights reserved.
