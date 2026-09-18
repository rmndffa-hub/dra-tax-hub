/* Penyusun HTML sederhana untuk badan artikel berita.
   Mendukung: "## subjudul", "- poin", "> kutipan", **tebal**, *miring*, [teks](url), baris kosong = paragraf baru. */
window.DRA_MD = function (src) {
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function inline(s) {
    return esc(s)
      .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
      .replace(/(^|[^*])\*([^*]+)\*/g, "$1<i>$2</i>");
  }
  var out = [], list = null, quote = null;
  function closeAll() {
    if (list) { out.push("<ul>" + list.join("") + "</ul>"); list = null; }
    if (quote) { out.push("<blockquote>" + quote.join(" ") + "</blockquote>"); quote = null; }
  }
  String(src || "").split(/\n/).forEach(function (raw) {
    var line = raw.replace(/\s+$/, "");
    if (!line.trim()) { closeAll(); return; }
    if (/^##\s+/.test(line)) { closeAll(); out.push("<h3>" + inline(line.replace(/^##\s+/, "")) + "</h3>"); return; }
    if (/^#\s+/.test(line)) { closeAll(); out.push("<h2>" + inline(line.replace(/^#\s+/, "")) + "</h2>"); return; }
    if (/^[-*]\s+/.test(line)) {
      if (quote) { out.push("<blockquote>" + quote.join(" ") + "</blockquote>"); quote = null; }
      if (!list) list = [];
      list.push("<li>" + inline(line.replace(/^[-*]\s+/, "")) + "</li>");
      return;
    }
    if (/^>\s?/.test(line)) {
      if (list) { out.push("<ul>" + list.join("") + "</ul>"); list = null; }
      if (!quote) quote = [];
      quote.push(inline(line.replace(/^>\s?/, "")));
      return;
    }
    closeAll();
    out.push("<p>" + inline(line) + "</p>");
  });
  closeAll();
  return out.join("\n");
};
