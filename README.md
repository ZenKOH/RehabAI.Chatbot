# RehabAI.Chatbot

**RehabAI.Chatbot** is an offline-first rehabilitation robotics and AI knowledge assistant. It is designed as a professional, boardroom-grade interface for questions about rehabilitation, rehabilitation technology, robotics, AI governance, clinical evidence, home recovery and adoption pathways.

The first version is a static Progressive Web App. It runs entirely in the browser with a local curated knowledge base. No external API key is required and no user questions leave the device.

## What it does

- Answers rehabilitation, robotics, AI and adoption questions from an embedded knowledge base.
- Retrieves relevant local knowledge snippets and sources.
- Provides source cards linking to WHO, FDA, EU, Singapore MOH and CMS reference materials when online.
- Runs offline after first load through a service worker cache.
- Stores conversation history locally in the browser.
- Provides strategic prompt chips for common boardroom, clinical and procurement questions.
- Uses a professional interface inspired by consulting dashboards and executive decision rooms.

## Evidence and design logic

The first release is built around five product assumptions:

1. Rehabilitation demand is structural, not marginal.
2. Robotics and AI only create system value when connected to workflow, evidence and continuity.
3. Healthcare AI needs human oversight, auditability, safety governance and careful role definition.
4. Adaptive AI-enabled products need post-deployment monitoring and change-control thinking.
5. Procurement and reimbursement require functional outcomes and accountable operating models, not technology enthusiasm alone.

## Local use

```bash
npm install --ignore-scripts
npm test
npm run build
npm start
```

Open `http://localhost:4173`.

You can also open `index.html` directly in a browser for a simple local preview.

## Deployment

This repository includes two GitHub Actions workflows:

- `.github/workflows/ci.yml` validates and builds on all branches and pull requests.
- `.github/workflows/pages.yml` builds and deploys the static site to GitHub Pages from `main`.

To enable GitHub Pages deployment, open the repository settings and set **Pages → Source → GitHub Actions**. The root page is `index.html`.

## Project structure

```text
.
├── index.html
├── manifest.webmanifest
├── sw.js
├── assets/
│   ├── app.js
│   ├── icon.svg
│   ├── knowledge.js
│   └── styles.css
├── scripts/
│   ├── build.mjs
│   └── smoke-test.mjs
└── .github/workflows/
    ├── ci.yml
    └── pages.yml
```

## Safety boundary

RehabAI is for educational and strategic analysis. It is not a medical device, diagnostic system, treatment planner or substitute for a licensed clinician. Personal symptoms, urgent deterioration, injury or treatment decisions should be escalated to qualified clinical care.

## Roadmap

- Add tagged knowledge-pack imports.
- Add optional local vector search with Web Workers.
- Add multilingual mode.
- Add clinician, buyer, investor and policy persona lenses.
- Add structured export to Markdown or PDF.
- Add optional API connector while preserving offline mode.

© ZenSightful Bytes & Zen KOH. All rights reserved.
