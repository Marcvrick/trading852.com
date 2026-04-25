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
updated: 2026-04-20
---

# Trading852 — Blog Article Workflow

Workflow for writing conviction blog articles in English about HK stocks and market themes, using expert analysis as source material.

Live site: [trading852.com](https://trading852.com)
GitHub: [Marcvrick/trading852.com](https://github.com/Marcvrick/trading852.com)

---

## Folder Structure

```
Trading852/
├── index.html                    ← Homepage
├── feed.xml                      ← RSS feed (update when publishing)
├── vercel.json                   ← Rewrites + security headers (must stay at root)
├── README.md
│
├── analyses/                     ← Published articles
│   ├── *.html
│   └── images/
│
├── assets/                       ← Favicons + OG image + scorecard.js
│   └── scorecard.js                 Live HK price fetcher (Yahoo proxy)
│
├── static/                       ← Cold content (rarely changed, served via rewrites)
│   ├── scorecard.html               → trading852.com/scorecard
│   ├── about.html                   → trading852.com/about
│   ├── disclaimer.html              → trading852.com/disclaimer
│   ├── legal-notice.html            → trading852.com/legal-notice
│   ├── robots.txt                   → trading852.com/robots.txt
│   └── sitemap.xml                  → trading852.com/sitemap.xml
│
├── instructions/                 ← Workflow docs (not served)
│   ├── blog-style-guide.md
│   └── seo/
│
└── sources/                      ← Source .md files behind published articles
```

---

## Resources

| Resource | Path |
|---|---|
| **Style guide** | [instructions/blog-style-guide.md](instructions/blog-style-guide.md) |
| **Voice guide** | [../../Voix Marc/VOIX-Marc.md](../../Voix%20Marc/VOIX-Marc.md) |
| **Expert analyses** | [../Trading-research/HK Stocks/Experts analysis/](../Trading-research/HK%20Stocks/Experts%20analysis/) |
| **Published articles** | [analyses/](analyses/) |
| **Source .md files** | [sources/](sources/) |
| **SEO strategy** | [instructions/seo/](instructions/seo/) |
| **Scorecard tracker** | [static/scorecard.html](static/scorecard.html) · [assets/scorecard.js](assets/scorecard.js) |

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

Open [instructions/blog-style-guide.md](instructions/blog-style-guide.md) and [VOIX-Marc.md](../../Voix%20Marc/VOIX-Marc.md) before writing. Key rules:

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
- Stock analysis → copy from `1913-prada.html`
- Market thesis → copy from `hsi-35-year-trendline.html`

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

## Step 5b — Update feed.xml and sitemap.xml

### RSS feed (`feed.xml`)

Add a new `<item>` **at the top** (before existing items) and update `<lastBuildDate>`:

```xml
<item>
  <title>TITLE</title>
  <link>https://trading852.com/analyses/SLUG</link>
  <guid>https://trading852.com/analyses/SLUG</guid>
  <pubDate>Day, DD Mon YYYY 00:00:00 +0800</pubDate>
  <description>EXCERPT (1-2 sentences)</description>
</item>
```

### Sitemap (`sitemap.xml`)

Add a new `<url>` entry and update the homepage `<lastmod>`:

```xml
<url>
  <loc>https://trading852.com/analyses/SLUG</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Step 6 — Commit and push

```bash
cd "TRADING/Trading852"
git add .
git commit -m "Add [article title]"
git push origin main
```

---

## Scorecard — live performance tracker

A public accountability page at [trading852.com/scorecard](https://trading852.com/scorecard) that tracks every blog recommendation from the first trading session after publication.

**Data flow** (100% client-side, zero backend):
1. [assets/scorecard.js](assets/scorecard.js) defines the editorial list of recos (ticker, slug, eyebrow, company).
2. On page load, each ticker hits the [yahoo-proxy Cloudflare worker](https://yahoo-proxy.marccharnal.workers.dev/) for a 3-month daily OHLC series.
3. The script computes entry = first close after `PUB_DATE_UTC`, checks intraday lows for the −10% stop loss, and renders the table.
4. Same `scorecard.js` also feeds the 1-line **strip teaser** on the homepage (`<div id="scorecard-strip">`).

**Stop-loss rule**: intraday low ≤ entry × 0.90 on any session after entry closes the position at −10%. Return is frozen at −10% and the row is grayed out with a "Stopped" badge + exit date.

**To add a new reco to the scorecard**: edit the `RECOS` array in [assets/scorecard.js](assets/scorecard.js). No backend, no rebuild — commit and push.

**To change the pub date or stop-loss level**: edit `PUB_DATE_UTC` and `STOP_LOSS_PCT` constants at the top of [assets/scorecard.js](assets/scorecard.js).

---

## Site plumbing

### Navigation — 4 items, identical on every page

**Header nav** (in `<ul class="menu-list--main">`) on every page:

```
Analyses · Scorecard · Hong Kong · About
```

**Footer Explore column** on every page includes the same Scorecard link. Any new page must carry both navs — copy from [static/scorecard.html](static/scorecard.html) or any analyses/*.html as template.

### Vercel rewrites — `cleanUrls` gotcha

[vercel.json](vercel.json) has `cleanUrls: true`, which means `.html` is stripped from URLs. **Rewrite destinations must NOT include `.html`** or they return 404.

✅ Correct:
```json
{ "source": "/scorecard", "destination": "/static/scorecard" }
```

❌ Wrong (404s):
```json
{ "source": "/scorecard", "destination": "/static/scorecard.html" }
```

When adding a new rewrite for a static page, drop the `.html`.

### Footer links — absolute paths only

Relative paths like `about.html` break under the clean-URL rewrites. **Always use absolute paths** (`/about`, `/disclaimer`, `/legal-notice`) in every footer.

---

## Published articles

| File | Ticker | Title | Date |
|---|---|---|---|
| [9988-alibaba.html](analyses/9988-alibaba.html) | 9988.HK | EBITA Down 57%. Cloud Up 36%. This Is What Amazon Looked Like in 2014. | 2026-04-14 |
| [1585-yadea.html](analyses/1585-yadea.html) | 1585.HK | Profit +129%. EV/EBIT 6.1x. The Market Sees a Bicycle Company. | 2026-04-14 |
| [1167-jacobio.html](analyses/1167-jacobio.html) | 1167.HK | AstraZeneca Paid US$100M for One Molecule. The Rest Trades at US$507M. | 2026-04-14 |
| [1913-prada.html](analyses/1913-prada.html) | 1913.HK | EPS Down 74%. Revenue Up 9%. One of These Numbers Is a Distraction. | 2026-04-12 |
| [0113-dickson-concepts.html](analyses/0113-dickson-concepts.html) | 0113.HK | The Market Is Paying You HKD 375M to Buy This Company | 2026-04-11 |
| [hsi-35-year-trendline.html](analyses/hsi-35-year-trendline.html) | — | Six Bounces. One Break. Now the Retest. | 2026-04-11 |

---

## What to never write

- "This is not investment advice"
- "It should be noted that" / "It is worth mentioning"
- Any section title as a teaser: "What's next?", "The bottom line"
- A number without its source date or document
- A risk framed as hypothetical when it is documented

---

## SEO checklist (every page)

Every HTML page must include:
- `<link rel="canonical" href="https://trading852.com/...">` (self-referencing)
- `<link rel="alternate" type="application/rss+xml" title="Trading852" href="https://trading852.com/feed.xml">` (RSS autodiscovery)
- `<meta name="twitter:card">`, `twitter:title`, `twitter:description`, `twitter:image`
- Open Graph tags (`og:type`, `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`)
- Structured data (`application/ld+json`) — `WebSite` for homepage, `Article` for analyses
- Images: always include `width`, `height`, `alt`; below-fold images get `loading="lazy" decoding="async"`

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
- [ ] New `<item>` added to `feed.xml` + `<lastBuildDate>` updated
- [ ] New `<url>` added to `static/sitemap.xml` + homepage `<lastmod>` updated
- [ ] Canonical + Twitter cards + RSS autodiscovery in new page `<head>`
- [ ] Committed and pushed to GitHub

---

## Changelog

### Apr 25, 2026 — Footer unification

- **Article footer tagline** shortened to "HKEX filings. Mispriced companies. Written up when the math holds." (dropped "No fund. No firm. Just the numbers.") across all 6 stock articles.
- **"Be water, My friend."** added to the right side of every article footer, in a flex row matching the homepage layout.

### Apr 20, 2026 — Scorecard launch + site consistency

- **`/scorecard` live performance tracker** ([static/scorecard.html](static/scorecard.html)). Fetches 3-mo daily OHLC per ticker from the yahoo-proxy worker, computes entry = first close after Apr 10 pub date, renders the 5-column table. Also powers a 1-line teaser strip on the homepage.
- **Automatic −10% stop loss.** Intraday low triggers exit at the −10% level; stopped rows are grayed with a "Stopped" badge and exit date. Return is frozen at −10%.
- **Unified 4-item nav** across all 11 pages (header + footer Explore column): Analyses · Scorecard · Hong Kong · About.
- **Fixed [vercel.json](vercel.json) rewrites**: dropped `.html` suffix from destinations. `cleanUrls: true` was causing `/about`, `/disclaimer`, `/legal-notice` to 404 on production — never noticed because only the new Scorecard link exposed the bug.
- **Fixed footer relative links** on about/disclaimer/legal-notice (`about.html` → `/about`, etc).
- **Giant wordmark** no longer overflows the content column on wide viewports: clamp cap reduced from 17rem to 14.5rem, overflow:hidden safety net added.
- **Thesis block rewrite**: replaced "One catalyst. One entry. One conviction." with "Absorb what the filing shows. Discard what the narrative adds." (Bruce Lee / JKD voice matching the "Be water" footer).

### Apr 15, 2026 — SEO hardening

- RSS feed, canonicals, Twitter cards, Open Graph, JSON-LD, security headers.

### Apr 11, 2026 — Site launch

- Homepage, 6 inaugural articles, domain live.
