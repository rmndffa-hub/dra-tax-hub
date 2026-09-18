/* Auto-link & popup untuk kamus aturan dan istilah.
   Dipakai di seluruh halaman: setiap sebutan seperti "PMK 172/2023" atau "PKKU"
   berubah menjadi tombol yang membuka ringkasan aturannya. */
(function () {
  "use strict";

  var ATURAN = window.DRA_ATURAN || [];
  var ISTILAH = window.DRA_ISTILAH || [];
  if (!ATURAN.length && !ISTILAH.length) return;

  var byId = {};
  var entries = [];   // {text, key}

  ATURAN.forEach(function (r) {
    byId["a:" + r.id] = r;
    (r.a || [r.n]).forEach(function (al) { entries.push({ t: al, k: "a:" + r.id }); });
  });
  ISTILAH.forEach(function (t) {
    byId["i:" + t.id] = t;
    // hanya singkatan satu kata yang aman untuk ditautkan otomatis
    if (/^[A-Za-z][A-Za-z0-9]{1,9}$/.test(t.n)) entries.push({ t: t.n, k: "i:" + t.id });
  });

  entries.sort(function (a, b) { return b.t.length - a.t.length; });

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  var RE = new RegExp("\\b(" + entries.map(function (e) { return esc(e.t); }).join("|") + ")\\b", "g");
  var LOOKUP = {};
  entries.forEach(function (e) { if (!LOOKUP[e.t]) LOOKUP[e.t] = e.k; });

  var SKIP = { A: 1, BUTTON: 1, CODE: 1, SCRIPT: 1, STYLE: 1, SUMMARY: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1, OPTION: 1, KBD: 1 };
  var MAX_PER_KEY = 3;

  function link(root) {
    if (!root) return;
    var seen = {};
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.length < 3) return NodeFilter.FILTER_REJECT;
        for (var p = n.parentNode; p && p !== root; p = p.parentNode) {
          if (p.nodeType === 1 && (SKIP[p.tagName] || p.classList.contains("no-ref"))) return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach(function (node) {
      var text = node.nodeValue;
      RE.lastIndex = 0;
      if (!RE.test(text)) return;
      RE.lastIndex = 0;
      var frag = document.createDocumentFragment();
      var last = 0, m;
      while ((m = RE.exec(text))) {
        var key = LOOKUP[m[1]];
        if (!key) continue;
        seen[key] = (seen[key] || 0) + 1;
        if (seen[key] > MAX_PER_KEY) continue;
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var b = document.createElement("button");
        b.type = "button";
        b.className = "reflink";
        b.setAttribute("data-ref", key);
        b.title = "Lihat ringkasan";
        b.textContent = m[1];
        frag.appendChild(b);
        last = m.index + m[1].length;
      }
      if (!last) return;
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  /* ---------- Modal ---------- */
  var modal, box;
  function ensureModal() {
    if (modal) return;
    modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "refModal";
    modal.hidden = true;
    modal.innerHTML = '<div class="modal-box ref-box" role="dialog" aria-label="Ringkasan aturan">' +
      '<button class="ref-close" type="button" aria-label="Tutup">✕</button><div class="ref-body"></div></div>';
    document.body.appendChild(modal);
    box = modal.querySelector(".ref-body");
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.classList.contains("ref-close")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) close();
    });
  }
  function close() { if (modal) modal.hidden = true; }

  function htm(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  function render(key) {
    var d = byId[key];
    if (!d) return;
    ensureModal();
    var html;
    if (key.indexOf("a:") === 0) {
      var cari = "https://www.google.com/search?q=" + encodeURIComponent(d.j + " naskah resmi pdf");
      html =
        '<div class="ref-kind">Peraturan</div>' +
        '<h3>' + htm(d.n) + '</h3>' +
        '<p class="ref-title">' + htm(d.j) + '</p>' +
        '<p class="ref-status">' + htm(d.b) + '</p>' +
        '<h4>Pokok isi</h4><ul>' + (d.p || []).map(function (x) { return "<li>" + htm(x) + "</li>"; }).join("") + "</ul>" +
        ((d.k && d.k.length) ? '<h4>Angka kunci</h4><div class="ref-chips">' + d.k.map(function (x) { return '<span class="tag tag-gold">' + htm(x) + "</span>"; }).join("") + "</div>" : "") +
        '<div class="ref-actions">' +
          (d.m ? '<a class="btn btn-outline btn-sm" href="' + htm(d.m[0]) + '">' + htm(d.m[1]) + "</a>" : "") +
          '<a class="btn btn-outline btn-sm" href="' + cari + '" target="_blank" rel="noopener">Cari naskah resmi ↗</a>' +
          '<a class="btn btn-primary btn-sm" href="referensi.html#' + htm(d.id) + '">Semua aturan</a>' +
        "</div>" +
        '<p class="ref-note">Ringkasan untuk belajar — bukan kutipan resmi. Untuk pekerjaan nyata, baca naskah aslinya.</p>';
    } else {
      html =
        '<div class="ref-kind">Istilah</div>' +
        '<h3>' + htm(d.n) + '</h3>' +
        '<p class="ref-title">' + htm(d.s) + '</p>' +
        "<p>" + htm(d.d) + "</p>" +
        '<div class="ref-actions">' +
          (d.m ? '<a class="btn btn-outline btn-sm" href="' + htm(d.m) + '">Buka materinya</a>' : "") +
          '<a class="btn btn-primary btn-sm" href="referensi.html?tab=istilah#' + htm(d.id) + '">Kamus istilah</a>' +
        "</div>";
    }
    box.innerHTML = html;
    modal.hidden = false;
    box.scrollTop = 0;
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest(".reflink") : null;
    if (b) { e.preventDefault(); render(b.getAttribute("data-ref")); }
  });

  window.DRA_REF = { link: link, open: render, aturan: ATURAN, istilah: ISTILAH };

  document.addEventListener("DOMContentLoaded", function () {
    ["article", ".ref-scan"].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) { link(el); });
    });
  });
})();
