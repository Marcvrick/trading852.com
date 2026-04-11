---
title: "Trading852 — Blog Article Workflow"
tags:
  - readme
  - blog
  - workflow
  - hk-stocks
category: Trading/Blog
type: readme
created: 2026-04-11
updated: 2026-04-11
---

# Trading852 — Blog Article Workflow

Workflow for writing conviction blog articles in English about HK stocks and market themes, using expert analysis as source material.

Live site: [trading852.com](https://trading852.com)
GitHub: [Marcvrick/trading852.com](https://github.com/Marcvrick/trading852.com)

---

## Folder Structure

```
Trading852/
├── index.html                  ← Homepage
├── about.html                  ← About page
├── analyses/
│   ├── 0113-dickson-concepts.html
│   ├── 1167-jacobio-pharmaceuticals.html
│   ├── why-hk-why-now.html
│   └── *.md                    ← Source drafts (not published)
├── Cold content/               ← Drafts, reference docs, unpublished pages
│   ├── disclaimer.html
│   ├── legal-notice.html
│   ├── investment philosophy.md
│   └── wirte me a 700 lines articles of blog about_  Why.md
├── blog-style-guide.md         ← Voice + structure reference (this session)
└── README.md                   ← This file
```

---

## Resources

| Resource | Path |
|---|---|
| **Style guide** | [blog-style-guide.md](blog-style-guide.md) |
| **Voice guide** | `MarcOS/Voix Marc/VOIX-Marc.md` |
| **Expert analyses** | `Trading-research/HK Stocks/Experts analysis/` |
| **Published articles** | [analyses/](analyses/) |
| **Drafts / cold content** | [Cold content/](Cold%20content/) |

---

## Step 1 — Find the source material

**For stock analyses:** look up the ticker in:
```
TRADING/Trading-research/HK Stocks/Experts analysis/
```
Folders follow the pattern: `{TICKER} - {Company} - {CONVICTION|MONITOR|AVOID}`

Only proceed if the verdict is **CONVICTION**.

**For market thesis articles:** source material goes in `Cold content/` before drafting.

---

## Step 2 — Read the style guide

Open [blog-style-guide.md](blog-style-guide.md) and `VOIX-Marc.md` before writing. Key rules:

- **7 canonical sections** — Hook → Company/Context → Discount → Catalyst → Valuation → Risks → Decision
- **No bullet points** in the article body (except numbered catalyst points and scenario table)
- **No superlatifs**, no conditional mou, no disclaimers
- **Numbers always precise** — format: `HKD 2 354 millions`, `+14 %`, never "environ"
- **Title formula**: `[Subject] — [Concrete arithmetic fact that surprises]`
- **Target length**: 1 000–1 400 words (ideal: ~1 200)
- **Marc's voice**: accessible, direct, "montrer sans dire" — show facts, let the reader conclude

---

## Step 3 — Write the article

### YAML frontmatter (mandatory for .md source)

```yaml
---
title: "{Subject} — {Surprising arithmetic fact}"
tags:
  - blog
  - hk-stocks
  - {company-tag or theme-tag}
  - conviction
  - {sector or thesis-key}
category: Trading/Blog
type: blog-article
ticker: "{TICKER}"          ← omit for market thesis articles
created: {YYYY-MM-DD}
source: "[[{source-file}]]"
---
```

### Article structure

| # | Section | Words |
|---|---|---|
| 1 | Hook (no header) | 80–120 |
| 2 | What the company/market does | 120–180 |
| 3 | Why the discount exists | 100–150 |
| 4 | Catalyst / main signal | 200–280 |
| 5 | Valuation (with table) | 150–200 |
| 6 | Risks (2 max, named in bold) | 180–250 |
| 7 | Decision (with scenario table) | 180–250 |

---

## Step 4 — Build the HTML page

Each published article needs an `.html` file in `analyses/`. Use an existing article as template:
- Stock analysis → copy from `1167-jacobio-pharmaceuticals.html`
- Market thesis → copy from `why-hk-why-now.html`

Key elements:
- Hero with breadcrumb, meta row (ticker/category + date + read time), h1, subtitle, tags
- Key takeaway box
- Article body (white background, serif body copy, section h2s, data tables)
- Scenario table at the end
- Article footer with disclaimer + back link

---

## Step 5 — Update the homepage

Three places to update in `index.html`:

1. **Recent Analyses cards** (top section) — add new card, remove oldest or Coming Soon
2. **Our Analyses list** — add new row
3. **About section** — update "Learn more →" link if relevant

---

## Step 6 — Commit and push

```bash
cd "TRADING/Trading852"
git add .
git commit -m "Add [article title]"
git push origin main
```

---

## Published articles

| File | Ticker | Title | Date |
|---|---|---|---|
| [0113-dickson-concepts.html](analyses/0113-dickson-concepts.html) | 0113.HK | The Market Is Paying You HKD 375M to Buy This Company | 2026-04-11 |
| [1167-jacobio-pharmaceuticals.html](analyses/1167-jacobio-pharmaceuticals.html) | 1167.HK | AstraZeneca Paid US$100M for One Molecule. The Rest Trades at US$507M. | 2026-04-11 |
| [why-hk-why-now.html](analyses/why-hk-why-now.html) | — | Why Hong Kong, Why Now — Great Eagle Told You It Trades at 88% Below Its Own Estimated Value | 2026-04-11 |

---

## What to never write

- "This is not investment advice"
- "It should be noted that" / "It is worth mentioning"
- Any section title as a teaser: "What's next?", "The bottom line"
- A number without its source date or document
- A risk framed as hypothetical when it is documented

---

## Quick checklist before publishing

- [ ] Source material identified and read
- [ ] Style guide + VOIX-Marc read
- [ ] YAML frontmatter complete (for .md source)
- [ ] No bullet points in body text
- [ ] Every number has a date or source
- [ ] Valuation or NAV table present
- [ ] Scenario table present (3 rows max)
- [ ] Risks: exactly 2, named in bold
- [ ] Word count between 1 000 and 1 400
- [ ] Title contains a concrete number
- [ ] HTML page built and linked from homepage
- [ ] Committed and pushed to GitHub
