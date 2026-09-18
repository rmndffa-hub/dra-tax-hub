/* DRA Pusat Materi Pajak — interaksi umum: tema, nav mobile, pencarian, TOC */
(function () {
  "use strict";

  /* ---------- Tema ---------- */
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("dra-theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}

  function toggleTheme() {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("dra-theme", next); } catch (e) {}
    paintThemeBtn();
  }
  function paintThemeBtn() {
    var b = document.getElementById("themeBtn");
    if (b) {
      var dark = root.getAttribute("data-theme") === "dark";
      b.textContent = dark ? "☀" : "☾";
      b.setAttribute("aria-label", dark ? "Mode terang" : "Mode gelap");
    }
  }

  /* ---------- Nav mobile ---------- */
  function initNav() {
    var t = document.getElementById("navToggle");
    var l = document.getElementById("navLinks");
    if (t && l) {
      t.addEventListener("click", function () {
        l.classList.toggle("open");
        t.setAttribute("aria-expanded", l.classList.contains("open") ? "true" : "false");
      });
    }
    var tb = document.getElementById("themeBtn");
    if (tb) tb.addEventListener("click", toggleTheme);
    paintThemeBtn();

    /* menu turun */
    document.querySelectorAll(".nav-drop-btn").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        var wrap = b.parentNode;
        var open = wrap.classList.contains("open");
        document.querySelectorAll(".nav-drop.open").forEach(function (o) {
          o.classList.remove("open");
          var ob = o.querySelector(".nav-drop-btn");
          if (ob) ob.setAttribute("aria-expanded", "false");
        });
        if (!open) { wrap.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
      });
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".nav-drop.open").forEach(function (o) {
        o.classList.remove("open");
        var ob = o.querySelector(".nav-drop-btn");
        if (ob) ob.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Pencarian ---------- */
  var IDX = window.DRA_INDEX || [];
  var modal, input, results, items = [], cursor = -1;

  function norm(s) { return (s || "").toLowerCase(); }

  function score(entry, terms) {
    var t = norm(entry.t), b = norm(entry.b), p = norm(entry.p);
    var sc = 0;
    for (var i = 0; i < terms.length; i++) {
      var q = terms[i];
      if (!q) continue;
      var hit = 0;
      if (t.indexOf(q) === 0) hit += 60;
      else if (t.indexOf(q) > -1) hit += 40;
      if (p.indexOf(q) > -1) hit += 12;
      if (b.indexOf(q) > -1) hit += 10;
      if (!hit) return 0;
      sc += hit;
    }
    return sc;
  }

  function highlight(text, terms) {
    var out = text;
    terms.forEach(function (q) {
      if (q.length < 2) return;
      var re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      out = out.replace(re, "<mark>$1</mark>");
    });
    return out;
  }

  function snippet(entry, terms) {
    var b = entry.b || "";
    var pos = -1;
    for (var i = 0; i < terms.length && pos < 0; i++) pos = norm(b).indexOf(terms[i]);
    if (pos < 0) pos = 0;
    var start = Math.max(0, pos - 45);
    return (start > 0 ? "…" : "") + b.slice(start, start + 150) + (b.length > start + 150 ? "…" : "");
  }

  function render(q) {
    var terms = norm(q).split(/\s+/).filter(Boolean);
    if (!terms.length) {
      results.innerHTML = '<div class="empty">Ketik kata kunci — misalnya <b>PTKP</b>, <b>opsen</b>, <b>faktur pajak</b>, <b>keberatan</b>.</div>';
      items = []; cursor = -1; return;
    }
    var scored = [];
    for (var i = 0; i < IDX.length; i++) {
      var s = score(IDX[i], terms);
      if (s > 0) scored.push({ e: IDX[i], s: s });
    }
    scored.sort(function (a, b) { return b.s - a.s; });
    scored = scored.slice(0, 12);
    if (!scored.length) {
      results.innerHTML = '<div class="empty">Tidak ada hasil untuk “' + q.replace(/</g, "&lt;") + '”.</div>';
      items = []; cursor = -1; return;
    }
    results.innerHTML = scored.map(function (r, i) {
      return '<a href="' + r.e.u + '"' + (i === 0 ? ' class="hl"' : "") + '>' +
        "<b>" + highlight(r.e.t, terms) + "</b>" +
        "<small>" + r.e.p + " · " + highlight(snippet(r.e, terms), terms) + "</small></a>";
    }).join("");
    items = Array.prototype.slice.call(results.querySelectorAll("a"));
    cursor = 0;
  }

  function move(d) {
    if (!items.length) return;
    if (cursor > -1) items[cursor].classList.remove("hl");
    cursor = (cursor + d + items.length) % items.length;
    items[cursor].classList.add("hl");
    items[cursor].scrollIntoView({ block: "nearest" });
  }

  function openSearch() {
    if (!modal) return;
    modal.hidden = false;
    input.value = "";
    render("");
    setTimeout(function () { input.focus(); }, 30);
  }
  function closeSearch() { if (modal) modal.hidden = true; }

  function initSearch() {
    modal = document.getElementById("searchModal");
    if (!modal) return;
    input = document.getElementById("searchInput");
    results = document.getElementById("searchResults");

    var trigger = document.getElementById("searchTrigger");
    if (trigger) trigger.addEventListener("click", openSearch);

    input.addEventListener("input", function () { render(input.value); });
    modal.addEventListener("click", function (e) { if (e.target === modal) closeSearch(); });

    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); return; }
      if (modal.hidden) {
        if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
        return;
      }
      if (e.key === "Escape") closeSearch();
      else if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
      else if (e.key === "Enter" && cursor > -1 && items[cursor]) { window.location.href = items[cursor].getAttribute("href"); }
    });
  }

  /* ---------- TOC aktif ---------- */
  function initToc() {
    var links = document.querySelectorAll(".toc a[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (a) {
      var el = document.getElementById(a.getAttribute("href").slice(1));
      if (el) map[el.id] = a;
    });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.remove("active"); });
          if (map[en.target.id]) map[en.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-90px 0px -70% 0px", threshold: 0 });
    Object.keys(map).forEach(function (id) { obs.observe(document.getElementById(id)); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initSearch();
    initToc();
  });
})();
