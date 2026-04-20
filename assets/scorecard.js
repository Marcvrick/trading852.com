/*
 * Trading852 — Scorecard client
 *
 * Fetches the latest HK close for each blog recommendation via the
 * yahoo-proxy Cloudflare worker, computes the % change since the first
 * post-publication close (April 10, 2026 issue), and renders into the DOM.
 *
 * Two render targets supported on the same page:
 *   #scorecard-strip  — compact 1-line summary for the homepage
 *   #scorecard-table  — full table on /scorecard
 */
(function () {
  "use strict";

  // Pub date for the inaugural issue. Entry price = first trading session close
  // strictly AFTER this date (Monday Apr 13 for a Friday Apr 10 publish).
  var PUB_DATE_UTC = Date.UTC(2026, 3, 10); // months are 0-indexed

  var RECOS = [
    { t: "0113.HK", company: "Dickson Concepts",  eyebrow: "Special Situation", slug: "0113-dickson-concepts" },
    { t: "1913.HK", company: "Prada",             eyebrow: "Luxury",            slug: "1913-prada" },
    { t: "1167.HK", company: "Jacobio",           eyebrow: "Biotech",           slug: "1167-jacobio" },
    { t: "1585.HK", company: "Yadea",             eyebrow: "Electric Vehicles", slug: "1585-yadea" },
    { t: "9988.HK", company: "Alibaba",           eyebrow: "Technology",        slug: "9988-alibaba" },
    { t: "2800.HK", company: "Tracker Fund (HSI)", eyebrow: "Market Thesis",    slug: "hsi-35-year-trendline" },
  ];

  var PROXY = "https://yahoo-proxy.marccharnal.workers.dev/?url=";
  var CHART = "https://query1.finance.yahoo.com/v8/finance/chart/";

  function fetchOne(rec) {
    var url = PROXY + encodeURIComponent(CHART + rec.t + "?range=3mo&interval=1d");
    return fetch(url, { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (j) {
        var result = j && j.chart && j.chart.result && j.chart.result[0];
        if (!result) throw new Error("no_data");
        var ts = result.timestamp || [];
        var closes = (result.indicators && result.indicators.quote && result.indicators.quote[0] && result.indicators.quote[0].close) || [];
        var entry = null, entryDate = null;
        for (var i = 0; i < ts.length; i++) {
          if (closes[i] == null) continue;
          if (ts[i] * 1000 > PUB_DATE_UTC) {
            entry = closes[i];
            entryDate = new Date(ts[i] * 1000);
            break;
          }
        }
        var last = null, lastDate = null;
        for (var k = closes.length - 1; k >= 0; k--) {
          if (closes[k] != null) { last = closes[k]; lastDate = new Date(ts[k] * 1000); break; }
        }
        if (entry == null || last == null) throw new Error("no_bars");
        return Object.assign({}, rec, {
          entry: entry,
          entryDate: entryDate,
          last: last,
          lastDate: lastDate,
          pct: (last - entry) / entry * 100,
        });
      })
      .catch(function (e) {
        return Object.assign({}, rec, { error: String(e) });
      });
  }

  function fmtPrice(v) { return (v == null ? "—" : v.toFixed(2)); }
  function fmtPct(v) {
    if (v == null || !isFinite(v)) return "—";
    return (v >= 0 ? "+" : "") + v.toFixed(2) + "%";
  }
  function fmtDate(d) {
    if (!d) return "—";
    var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return m[d.getUTCMonth()] + " " + d.getUTCDate();
  }

  function renderStrip(rows) {
    var el = document.getElementById("scorecard-strip");
    if (!el) return;
    var valid = rows.filter(function (r) { return r.pct != null; });
    if (!valid.length) {
      el.innerHTML = '<a href="/scorecard" class="strip-link">Scorecard — prices unavailable</a>';
      return;
    }
    var avg = valid.reduce(function (a, r) { return a + r.pct; }, 0) / valid.length;
    var wins = valid.filter(function (r) { return r.pct > 0; }).length;
    var losses = valid.filter(function (r) { return r.pct < 0; }).length;
    var flats = valid.length - wins - losses;
    var avgCls = avg >= 0 ? "pos" : "neg";
    el.innerHTML =
      '<a href="/scorecard" class="strip-link" aria-label="Scorecard since April 10">' +
        '<span class="strip-label">Scorecard · April 10 issue</span>' +
        '<span class="strip-sep">·</span>' +
        '<span class="strip-avg ' + avgCls + '">' + fmtPct(avg) + ' avg</span>' +
        '<span class="strip-sep">·</span>' +
        '<span class="strip-wl">' + wins + 'W / ' + losses + 'L' + (flats ? ' / ' + flats + ' flat' : '') + '</span>' +
        '<span class="strip-cta">View scorecard →</span>' +
      '</a>';
  }

  function renderTable(rows) {
    var el = document.getElementById("scorecard-table");
    if (!el) return;
    var valid = rows.filter(function (r) { return r.pct != null; });
    var avg = valid.length ? valid.reduce(function (a, r) { return a + r.pct; }, 0) / valid.length : null;
    var wins = valid.filter(function (r) { return r.pct > 0; }).length;
    var losses = valid.filter(function (r) { return r.pct < 0; }).length;
    var mostRecent = null;
    rows.forEach(function (r) {
      if (r.lastDate && (!mostRecent || r.lastDate > mostRecent)) mostRecent = r.lastDate;
    });

    var summary = document.getElementById("scorecard-summary");
    if (summary) {
      summary.innerHTML =
        '<span>Average <strong class="' + (avg >= 0 ? "pos" : "neg") + '">' + fmtPct(avg) + '</strong></span>' +
        '<span>' + wins + ' winners · ' + losses + ' losers</span>' +
        '<span>As of ' + (mostRecent ? fmtDate(mostRecent) + ", 2026" : "—") + '</span>';
    }

    var html =
      '<table class="sc-table">' +
        '<thead><tr>' +
          '<th>Ticker</th>' +
          '<th>Company</th>' +
          '<th class="num">Entry<br><span class="th-sub">First close after Apr 10</span></th>' +
          '<th class="num">Last</th>' +
          '<th class="num">% since</th>' +
        '</tr></thead><tbody>';
    rows.forEach(function (r) {
      var pctCls = r.pct == null ? "" : r.pct >= 0 ? "pos" : "neg";
      html +=
        '<tr>' +
          '<td class="sc-ticker"><a href="/analyses/' + r.slug + '">' + r.t + '</a></td>' +
          '<td class="sc-company"><div class="sc-eyebrow">' + r.eyebrow + '</div>' + r.company + '</td>' +
          '<td class="num">' + fmtPrice(r.entry) + '</td>' +
          '<td class="num">' + fmtPrice(r.last) + '</td>' +
          '<td class="num ' + pctCls + '">' + fmtPct(r.pct) + '</td>' +
        '</tr>';
    });
    html += '</tbody></table>';
    el.innerHTML = html;
  }

  function boot() {
    Promise.all(RECOS.map(fetchOne)).then(function (rows) {
      renderStrip(rows);
      renderTable(rows);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
